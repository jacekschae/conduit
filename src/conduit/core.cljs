(ns conduit.core
  (:require [re-frame.core :as re-frame :refer [dispatch-sync]]
            [reagent.core :as reagent]
            [conduit.router :as router]
            [conduit.events]  ;; These three are only
            [conduit.subs]    ;; required to make the compiler
            [conduit.views])) ;; load them

;; ^:dev/after-load instructs shadow-cljs to re-run this function on each compilation,
;; achieving hot-reloading. See https://code.thheller.com/blog/shadow-cljs/2019/08/25/hot-reload-in-clojurescript.html
(defn ^:dev/after-load start []
  (re-frame/clear-subscription-cache!)
  ;; Render the UI into the HTML's <div id="app" /> element
  ;; The view function `conduit.views/conduit-app` is the
  ;; root view for the entire UI.
  (reagent/render [conduit.views/conduit-app]
    (.getElementById js/document "app")))

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

  (start))
