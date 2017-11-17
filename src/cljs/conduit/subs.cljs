(ns conduit.subs
  (:require [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
 :active-panel
 (fn [db _]
   (:active-panel db)))
