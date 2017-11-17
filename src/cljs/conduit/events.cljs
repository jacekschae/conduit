(ns conduit.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx path trim-v after debug]]
            [conduit.db :as db]))

(reg-event-db
 :initialise-db
 (fn  [_ _]
   db/default-db))

(reg-event-db
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))
