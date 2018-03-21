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

;; -- Routes and Navigation ---------------------------------------------------
;;
(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn routes
  []
  (let [slug nil
        profile nil]
    (secretary/set-config! :prefix "#")
    (defroute "/" [] (dispatch [:set-active-page {:page :home}]))
    (defroute "/login" [] (dispatch [:set-active-page {:page :login}]))
    (defroute "/register" [] (dispatch [:set-active-page {:page :register}]))
    (defroute "/settings" [] (dispatch [:set-active-page {:page :settings}]))
    (defroute "/editor" [] (dispatch [:set-active-page {:page :editor}]))
    (defroute "/editor/:slug" [slug] (dispatch [:set-active-page {:page :editor :slug slug}]))
    (defroute "/logout" [] (dispatch [:logout]))
    (defroute "/article/:slug" [slug] (dispatch [:set-active-page {:page :article :slug slug}]))
    (defroute "/:profile/favorites" [profile] (dispatch [:set-active-page {:page :favorited :favorited (subs profile 1)}]))
    (defroute "/:profile" [profile] (dispatch [:set-active-page {:page :profile :profile (subs profile 1)}]))
    (hook-browser-navigation!)))

;; -- Entry Point -------------------------------------------------------------
;; Within ../../resources/public/index.html you'll see this code:
;; window.onload = function() { conduit.core.main() }
;; So this is the entry function that kicks off the app once the HTML is loaded.
;;
(defn ^:export main
  []
  ;; Hookup the router.
  (routes)

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

  ;; Register Service Worker defined at the top
  ; (register-service-worker "js/service-worker.js"))
