(ns re-frisk-shell.re-com.vendors
  (:require [re-com.core :refer [box]]))

(defn star []
  [box
   :align :end
   :child [:a {:data-show-count true
               :class           "github-button"
               :href            "https://github.com/flexsurfer/re-frisk"
               :aria-label      "Star flexsurfer/re-frisk on GitHub"}
           "Star"]])