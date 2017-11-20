(ns conduit.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
 :active-page          ;; usage: (subscribe [:showing])
 (fn [db _]            ;; db is the (map) value stored in the app-db atom
   (:active-page db))) ;; extract a value from the application state

(reg-sub
 :articles  ;; usage: (subscribe [:articles])
 (fn [db _]
   (:articles db)))

(reg-sub
 :active-article ;; usage (subscribe [:active-article "slug"])
 (fn [db [_ slug]]
   (.log js/console slug)
   (get-in db [:articles slug])))

(reg-sub
 :tags  ;; usage: (subscribe [:tags])
 (fn [db _]
   (:tags db)))
