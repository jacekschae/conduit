(ns re-frisk.devtool
  (:require-macros [re-frisk.slurp :refer [slurp]])
  (:require [reagent.core :as reagent]
            [reagent.dom :as reagent-dom]
            [re-frisk.drag :as drag]
            [re-frame.core :refer [dispatch]]
            [re-frisk.debugger-page :refer [html-doc]]
            [cognitect.transit :as transit]
            [re-frisk.data :as data]
            [re-frisk-shell.re-com.views :as ui-re-com]
            [re-frisk-shell.frisk :as frisk]
            [re-frisk.style :as style]))

;;TODO Outdated (Not supported)

(def ua js/window.navigator.userAgent)
(def ie? (or (re-find #"MSIE " ua) (re-find #"Trident/" ua) (re-find #"Edge/" ua)))

(defn export-json []
  (if-let [str (transit/write
                 (transit/writer :json
                                 {:handlerForForeign
                                  (fn [_ _] (transit/write-handler (fn [_] "ForeignType")
                                                                   (fn [_] "")))})
                 @(:app-db @data/re-frame-data))]
      (.saveAs (:win @data/deb-data)
        (js/Blob. (js/Array. str) {:type "application/json"})
        "app-db.json")))

(defn json-on-change [event]
  (let [rdr (js/FileReader.)]
    (set! (.-onload rdr) #(do
                           (reset! data/re-frame-events [])
                           (dispatch [:re-frisk/update-db (transit/read
                                                            (transit/reader :json)
                                                            (.-result (.-target %)))])))
    (.readAsText rdr (aget (.-files (.-target event)) 0))))

(defn reagent-debugger-shell [re-frame-data]
  (let [expand-by-default (reduce #(assoc-in %1 [:data-frisk %2 :expanded-paths] #{[]}) {} (range 1))
        state-atom (reagent/atom expand-by-default)]
    (fn []
      [:div {:style style/frisk-style}
       [:div
        (map-indexed (fn [id x]
                       ^{:key id} [frisk/Root x id state-atom]) [@re-frame-data])]])))

(defn on-window-unload []
  (reagent-dom/unmount-component-at-node (:app @data/deb-data))
  (swap! data/deb-data assoc :deb-win-closed? true))

;; EXTERNAL DEBUGGER WINDOW

(defn mount [w d]
  (let [app (.getElementById d "app")
        re-frame? (:app-db @data/re-frame-data)
        doc js/document]
    (aset w "onunload" on-window-unload)
    (swap! data/deb-data assoc :deb-win-closed? false :doc d :win w :app app)
    (reagent/render [:div  {:style {:height "100%"}}
                     [:input {:type "file" :id "json-file-field" :on-change json-on-change :style {:display "none"}}]
                     [:div  {:style {:height "100%"}}
                      (if (and re-frame? (not= (:events? (:prefs @data/deb-data)) false))
                        [ui-re-com/main
                         data/re-frame-data data/re-frame-events
                         data/deb-data
                         d
                         #(.click (.getElementById (:doc @data/deb-data) "json-file-field"))
                         export-json]
                        [reagent-debugger-shell data/re-frame-data])]]
                    app)))


(defn open-debugger-window []
  (let [{:keys [ext_height, ext_width]} (:prefs @data/deb-data)
        w (js/window.open "" "Debugger" (str "width=" (or ext_width 800) ",height=" (or ext_height 800)
                                             ",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"))
        d (.-document w)]
    (.open d)
    (.write d html-doc)
    (aset w "onload" #(mount w d))
    (.close d)))

(defn visibility-button
  [visible? update-fn]
  [:button {:style {:border 0
                    :backgroundColor "transparent" :width "20px" :height "10px"}
            :onClick update-fn}
   [:svg {:viewBox "0 0 100 100"
          :width "100%" :height "100%"
          :style {:transition "all 0.2s ease"
                  :transform (when visible? "rotate(90deg)")}}
    [:polygon {:points "0,0 0,100 100,50" :stroke "black"}]]])

(defn re-frisk-panel [& data]
  (let [expand-by-default (reduce #(assoc-in %1 [:data-frisk %2 :expanded-paths] #{[]}) {} (range (count data)))
        state-atom (reagent/atom expand-by-default)]
    (fn [& data]
      [:div
       (map-indexed (fn [id x]
                      ^{:key id} [frisk/Root x id state-atom]) [data])])))

;; DRAGGABLE PANEL

(defn re-frisk-shell [{:keys [x y width height]}]
  (let [style (merge style/frisk-style {:resize "both" :width "300px" :height "200px"})
        height (if (and ie? (not height)) 200 height)
        style (merge style (when height {:height height :max-height height :overflow "auto"}))
        style (merge style (when width {:width width :max-width width :overflow "auto"}))]
    (when x (swap! drag/draggable assoc :x x))
    (when y (swap! drag/draggable assoc :y y))
    (fn [_]
      (when (:deb-win-closed? @data/deb-data)
        [:div {:style (merge {:position "fixed"
                              :left (str (:x @drag/draggable) "px")
                              :top (str (:y @drag/draggable) "px")
                              :z-index 999}
                             (when (or ie? (not (:x @drag/draggable)))
                               {:bottom "0px"
                                :right  "20px"}))}
         [:div {:style style/re-frisk-button-style
                :on-mouse-down drag/mouse-down-handler}
          [visibility-button
           (:visible? (:data-frisk @data/deb-data))
           (fn [_]
             (swap! data/deb-data assoc-in [:data-frisk :visible?] (not (:visible? (:data-frisk @data/deb-data)))))]
          "re-frisk"]
         [:div {:style style/arrow-style
                :on-click open-debugger-window}
          "\u2197"]
         (when (:visible? (:data-frisk @data/deb-data))
           [:div {:style style}
            [re-frisk-panel @data/re-frame-data]])]))))