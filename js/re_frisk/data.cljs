(ns re-frisk.data
  (:require [reagent.core :as r]))

(defonce initialized (atom false))
(defonce re-frame-data (r/atom {}))
(defonce app-db-prev-event (r/atom {}))
(defonce re-frame-events (r/atom []))
(defonce deb-data (r/atom {:deb-win-closed? true}))