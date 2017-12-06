(ns re-frisk.drag
  (:require [goog.events :as goog-events]
            [reagent.core :as reagent])
  (:import [goog.events EventType]))

;reagent d'n'd - https://github.com/borkdude/draggable-button-in-reagent

(defonce draggable (reagent/atom {}))

(defn get-client-rect [evt]
  (let [r (.getBoundingClientRect (.-target evt))]
    {:left (.-left r), :top (.-top r)}))

(defn mouse-move-handler [offset]
  (fn [evt]
    (let [x (- (.-clientX evt) (:x offset))
          y (- (.-clientY evt) (:y offset))]
      (reset! draggable {:x x :y y}))))

(defn mouse-up-handler [on-move]
  (fn me [evt]
    (goog-events/unlisten js/window EventType.MOUSEMOVE on-move)))

(defn mouse-down-handler [e]
  (let [{:keys [left top]} (get-client-rect e)
        offset             {:x (- (.-clientX e) left)
                            :y (- (.-clientY e) top)}
        on-move            (mouse-move-handler offset)]
    (goog-events/listen js/window EventType.MOUSEMOVE on-move)
    (goog-events/listen js/window EventType.MOUSEUP (mouse-up-handler on-move))))