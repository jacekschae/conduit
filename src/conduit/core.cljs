(ns conduit.core
  (:require [re-frame.core :refer [dispatch dispatch-sync clear-subscription-cache!]]
            [reagent.core :as reagent]
            [conduit.router :as router]
            [conduit.events]  ;; These three are only
            [conduit.subs]    ;; required to make the compiler
            [conduit.views])) ;; load them

;; -- Entry Point -------------------------------------------------------------
;; Within ../../resources/public/index.html you'll see this code:
;; window.onload = function() { conduit.core.main() } this is the entry 
;; function that kicks off the app once the HTML is loaded.
;;
(defn ^:export init
  []
  ;; Router config can be found within `./router.cljs`. Here we are just hooking
  ;; up the router on start
  (router/start!)

  ;; Put an initial value into app-db.
  ;; The event handler for `:initialise-db` can be found in `events.cljs`
  ;; Using the sync version of dispatch means that value is in
  ;; place before we go onto the next step.
  (dispatch-sync [:initialise-db])

  ;; Render the UI into the HTML's <div id="app" /> element
  ;; The view function `conduit.views/conduit-app` is the
  ;; root view for the entire UI.
  (reagent/render [conduit.views/conduit-app]
    (.getElementById js/document "app")))
