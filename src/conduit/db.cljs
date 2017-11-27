(ns conduit.db
  (:require [cljs.reader]
            [cljs.spec.alpha :as s]
            [re-frame.core :as re-frame]))

;; -- Default app-db Value  ---------------------------------------------------
;;
;; When the application first starts, this will be the value put in app-db
;; Look in:
;;   1.  `core.cljs` for  "(dispatch-sync [:initialise-db])"
;;   2.  `events.cljs` for the registration of :initialise-db handler
;;
(def default-db {})  ;; what gets put into app-db by default.


;; -- Local Storage  ----------------------------------------------------------
;;
;; Part of the conduit challenge is to store a user in LocalStorage, and
;; on app startup, reload the user from when the program was last run.
;;
(def ls-key "conduit-user")                       ;; localstore key

(defn conduit->local-store
  "Puts user into localStorage"
  [user]
  (.setItem js/localStorage ls-key (str user)))  ;; sorted-map written as an EDN map


;; -- cofx Registrations  -----------------------------------------------------
;;
;; Use `reg-cofx` to register a "coeffect handler" which will inject the user
;; stored in localstore.
;;
;; To see it used, look in `events.cljs` at the event handler for `:initialise-db`.
;; That event handler has the interceptor `(inject-cofx :local-store-user)`
;; The function registered below will be used to fulfill that request.
;;
;; We must supply a `sorted-map` but in LocalStore it is stored as a `map`.
;;
(re-frame/reg-cofx
 :local-store-user
 (fn [cofx _]
   (assoc cofx :local-store-user  ;; put the localstore user into the coeffect under :local-store-user
          (into (sorted-map)      ;; read in user from localstore, and process into a sorted map
                (some->> (.getItem js/localStorage ls-key)
                         (cljs.reader/read-string))))))  ;; EDN map -> map
