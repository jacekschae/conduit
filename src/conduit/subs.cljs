(ns conduit.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
 :active-page           ;; usage: (subscribe [:showing])
 (fn [db _]             ;; db is the (map) value stored in the app-db atom
   (:active-page db)))  ;; extract a value from the application state

(reg-sub
 :articles  ;; usage: (subscribe [:articles])
 (fn [db _]
   (sort-by :createdAt (vals (:articles db)))))

(reg-sub
 :articles-count  ;; usage: (subscribe [:articles])
 (fn [db _]
   (:articles-count db)))

(reg-sub
 :active-article  ;; usage (subscribe [:active-article])
 (fn [db _]
   (let [active-article (:active-article db)]
     (get-in db [:articles active-article]))))

(reg-sub
 :tags  ;; usage: (subscribe [:tags])
 (fn [db _]
   (:tags db)))

(reg-sub
 :comments  ;; usage: (subscribe [:comments])
 (fn [db _]
   (vals (:comments db))))

(reg-sub
 :profile  ;; usage: (subscribe [:profile])
 (fn [db _]
   (:profile db)))

(reg-sub
 :loading  ;; usage: (subscribe [:loading])
 (fn [db _]
   (:loading db)))

(reg-sub
 :filter  ;; usage: (subscribe [:filter])
 (fn [db _]
   (:filter db)))

(reg-sub
 :errors  ;; usage: (subscribe [:errors])
 (fn [db _]
   (:errors db)))

(reg-sub
 :user  ;; usage: (subscribe [:user])
 (fn [db _]
   (:user db)))
