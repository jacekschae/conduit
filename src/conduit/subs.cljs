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
 :article ;; usage (subscribe [:article])
 (fn [db _]
   (let [article (:active-article db)]
     (into {} (filter #(= article (:slug %)) (:articles db)))))) ;; @daniel, is there a way we can
                                                                 ;; avoid into {} ... ?

(reg-sub
 :tags  ;; usage: (subscribe [:tags])
 (fn [db _]
   (:tags db)))

(reg-sub
 :articles-by-tag  ;; usage: (subscribe [:articles-by-tag])
 (fn [db _]
   (:articles-by-tag db)))

(reg-sub
 :profile  ;; usage: (subscribe [:comments])
 (fn [db _]
   (:profile db)))
