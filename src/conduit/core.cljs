(ns conduit.core
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [re-frame.core :refer [dispatch dispatch-sync clear-subscription-cache!]]
            [reagent.core :as reagent]
            [conduit.events] ;; These three are only
            [conduit.subs]   ;; required to make the compiler
            [conduit.routes :as routes]
            [conduit.views]))  ;; load them

;; -- Service Worker ----------------------------------------------------------
;;
(defn is-service-worker-supported?
  []
  (and
   (exists? js/navigator.serviceWorker)
   (= js/location.protocol "https:")))

(defn register-service-worker
  [path-to-sw]
  (when (is-service-worker-supported?)
    (-> js/navigator
        .-serviceWorker
        (.register path-to-sw))))

(defn mount-root []
  (clear-subscription-cache!)
  (reagent/render [conduit.views/conduit-app]
    (.getElementById js/document "app")))

;; -- Entry Point -------------------------------------------------------------
;; Within ../../resources/public/index.html you'll see this code:
;; window.onload = function() { conduit.core.main() }
;; So this is the entry function that kicks off the app once the HTML is loaded.
;;
(defn ^:export main
  []
  ;; Hookup the router.
  (routes/app-routes)

  ;; Put an initial value into app-db.
  ;; The event handler for `:initialise-db` can be found in `events.cljs`
  ;; Using the sync version of dispatch means that value is in
  ;; place before we go onto the next step.
  (dispatch-sync [:initialise-db])

  ;; Render the UI into the HTML's <div id="app" /> element
  ;; The view function `conduit.views/conduit-app` is the
  ;; root view for the entire UI.
  (mount-root))

  ;; Register Service Worker defined at the top
  ; (register-service-worker "js/service-worker.js"))
