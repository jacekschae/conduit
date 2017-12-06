(ns re-frisk-shell.re-com.views
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent]
            [re-frisk-shell.re-com.ui :refer [small-button scroller]]
            [re-frisk-shell.re-com.vendors :refer [star]]
            [re-com.core :refer [v-box h-box gap box label
                                 input-text input-textarea p
                                 checkbox] :refer-macros [handler-fn]]
            [re-frisk-shell.re-com.splits :refer [h-split v-split]]
            [clojure.string :as str]
            [re-frisk-shell.frisk :as frisk]))

(defn event-list-item []
  (fn [item checkbox-val deb-data]
    (let [clrs (:evnt-colors @deb-data)
          event (str (first (:event item)))
          trace? (boolean (:trace item))
          completed? (= :completed (get-in item [:trace :status]))
          selected? (= (get-in @deb-data [:event-data :indx]) (:indx item))
          namespace (str/split (str/replace event #":" "") #"/")
          splited-label (str/split (first namespace) #"\.")
          clr (get clrs (first (:event item)))]
      [h-box
       :children
       [[:div {:style (merge {:width 5}
                             (when clr {:background-color (str "#" clr)}))}]
        [box
         :size "1"
         :child
         [:a
          {:href  "#"
           :class (str "list-group-item" (when selected? " active"))
           :style (merge {:padding 5 :white-space :pre :width "100%"}
                         (when (and trace? (not completed?))
                           {:background-color :red}))
           :on-click #(swap! deb-data assoc :event-data item)}
          (when (and trace? completed?)
            [:span (str (get-in item [:trace :duration]) " ms ")])
          [:span (if (and @checkbox-val (> (count namespace) 1))
                   (str ":" (str/join "." (mapv first splited-label))
                        "/" (last namespace))
                   event)]]]]])))

(defn filter-event [text]
  (fn [item]
    (let [name (str/lower-case (name (first (:event item))))
          text (str/lower-case text)]
      (not= (str/index-of name text) nil))))


(defn events-scroller [filtered-events checkbox-val deb-data]
  (reagent/create-class
    {:display-name "debugger-messages"
     :component-did-update
                   (fn [this]
                     (let [n (reagent/dom-node this)]
                       (when (:scroll-bottom? @deb-data)
                         (set! (.-scrollTop n) (.-scrollHeight n)))))
     :reagent-render
                   (fn []
                     [scroller {:on-scroll #(let [t (.-target %)]
                                              (swap! deb-data assoc
                                                     :scroll-bottom?
                                                     (= (- (.-scrollHeight t) (.-offsetHeight t)) (.-scrollTop t))))}
                        (for [item @filtered-events]
                          ^{:key item}
                          [event-list-item item checkbox-val deb-data])])}))

(defn events-view [re-frame-events deb-data imp-hndl exp-hndl]
  (let [checkbox-val (reagent/atom true)
        checkbox-sort-val (reagent/atom false)
        trace? (reaction (boolean (:trace (first @re-frame-events))))
        text-val (reagent/atom "")
        sorted-events (reaction (if @checkbox-sort-val
                                  (sort-by #(get-in % [:trace :duration]) > @re-frame-events)
                                  @re-frame-events))
        filtered-events (reaction (if (= @text-val "")
                                    @sorted-events
                                    (filter (filter-event @text-val) @sorted-events)))]
    (fn []
      [v-box
       :size "1"
       :children [;events filter
                  [h-box
                   :children [[box
                               :size "1"
                               :child
                               [input-text
                                :style {:height :auto :padding "0"}
                                :width "100%"
                                :model text-val
                                :change-on-blur? false
                                :placeholder "Filter events"
                                :on-change #(reset! text-val %)]]
                              [small-button {:on-click #(reset! text-val "")} "X"]]]
                  ;truncate checkbox
                  [checkbox
                   :model checkbox-val
                   :on-change #(reset! checkbox-val %)
                   :label "truncate"]
                  (when @trace?
                    [checkbox
                     :model checkbox-sort-val
                     :on-change #(reset! checkbox-sort-val %)
                     :label "sort by performance"])
                  ;events
                  [events-scroller filtered-events checkbox-val deb-data]
                  ;bottom buttons
                  [h-box
                   :align :center
                   :gap "5px"
                   :style {:padding-top 3}
                   :children [(when imp-hndl [small-button {:on-click imp-hndl} "import"])
                              (when imp-hndl [small-button {:on-click exp-hndl} "export"])
                              [gap :size "1"]
                              [small-button {:on-click #(do (reset! re-frame-events [])
                                                            (swap! deb-data dissoc :event-data))} "clear"]]]]])))

(defn event-bar [deb-data]
  (let [evnt-key (reaction (first (get-in @deb-data [:event-data :event])))
        clr (reaction (if @evnt-key (@evnt-key (:evnt-colors @deb-data)) ""))]
    (fn []
      [h-box
       :style {:background-color "#4e5d6c"}
       :children
       [[label :label "Event" :style {:margin "4px"}]
        (when @evnt-key
          [label :label @evnt-key :style {:margin "4px" :color "#df691a"}])
        (when @evnt-key
          [label :label "#" :style {:margin "4px"}])
        (when @evnt-key
          [:input {:style {:width "60px"}
                   :placeholder "000000" :type "text" :value @clr :max-length "6"
                   :on-change #(swap! deb-data assoc-in [:evnt-colors @evnt-key] (-> % .-target .-value))}])]])))

(defn main-view [re-frame-data deb-data doc]
  (let [checkbox-sorted-val (reagent/atom true)
        open-event-split? (reaction (boolean (get-in @deb-data [:event-data :event])))]
    (fn [_ _ _]
      [v-box
       :size "1"
       :style {:padding "0"}
       :children [[box
                   :style {:background-color "#4e5d6c"}
                   :child [label :label "Active subscriptions"]]
                  [v-split
                   :document doc
                   :size "1"
                   :style {:padding "0"
                           :margin  "0"}
                   :initial-split "0"
                   :panel-1 [v-box
                             :size "1"
                             :children
                             [[frisk/handler-frisk re-frame-data]]]
                   :panel-2 [v-box
                             :size "1"
                             :children
                             [[v-split
                               :document doc
                               :size "1"
                               :style {:padding "0"
                                       :margin  "0"}
                               :initial-split "100"
                               :open-bottom-split? open-event-split?
                               ;MAIN FRISK
                               :panel-1 [v-box
                                         :size "1"
                                         :style {:background-color "#4e5d6c"}
                                         :children
                                         [[h-box
                                           :children
                                           [[label :label "app-db"]
                                            [gap :size "20px"]
                                            [checkbox
                                              :model checkbox-sorted-val
                                              :on-change (fn [val]
                                                           (reset! checkbox-sorted-val val)
                                                           (swap! (:app-db @re-frame-data) assoc :re-frisk-sorted true)
                                                           (js/setTimeout #(swap! (:app-db @re-frame-data) dissoc :re-frisk-sorted) 100))
                                              :label "sorted"]]]
                                          [frisk/main-frisk re-frame-data checkbox-sorted-val]
                                          [event-bar deb-data]]]
                               ;event frisk
                               :panel-2 [v-box
                                         :size "1"
                                         :children
                                         [[frisk/event-frisk deb-data]]]]
                              [h-box
                               :style {:padding "0"}
                               :children [[gap :size "1"]
                                          [star]]]]]]]])))

(defn main [re-frame-data re-frame-events deb-data & [doc imp-hndl exp-hndl]]
  [v-box
   :height "100%"
   :children [[h-split
               :size "1"
               :initial-split "20"
               :panel-1 [events-view re-frame-events deb-data imp-hndl exp-hndl]
               :panel-2 [main-view re-frame-data deb-data doc]
               :document doc]]])

