(ns re-frisk-shell.re-com.ui)

(defn small-button
  ([label] (small-button {} label))
  ([{:keys [on-click]} label]
   [:a {:href "#" :class "btn btn-primary btn-xs" :on-click on-click} label]))

(defn big-button [style label]
  [:a {:href "#" :class "btn btn-primary btn-lg" :style style} label])

(defn scroller
  ([div] (scroller {} div))
  ([attr div]
   [:div (merge {:style (merge {:overflow "auto" :height "100%" :flex "1"} (:style attr))} (dissoc attr :style))
    div]))