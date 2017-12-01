(ns conduit.core
  (:require-macros [secretary.core :refer [defroute]])
  (:require [goog.events :as events]
            [reagent.core :as reagent]
            [re-frame.core :refer [dispatch dispatch-sync]]
            [secretary.core :as secretary]
            [conduit.events]
            [conduit.subs]
            [conduit.views]
            [devtools.core :as devtools])
  (:import [goog History]
           [goog.history EventType]))

;; -- Debugging aids ----------------------------------------------------------
;;
(devtools/install!)       ;; we love https://github.com/binaryage/cljs-devtools
(enable-console-print!)   ;; so that println writes to `console.log`


;; -- Routes and History ------------------------------------------------------
;;
(defn routes
  []
  (secretary/set-config! :prefix "#")
  (defroute "/" []
            (do (dispatch [:set-active-page :home])
                (dispatch [:get-articles {:offset 0 :limit 10}])))
  (defroute "/login" [] (dispatch [:set-active-page :login]))
  (defroute "/register" [] (dispatch [:set-active-page :register]))
  (defroute "/settings" [] (dispatch [:set-active-page :settings]))
  (defroute "/editor" [] (dispatch [:set-active-page :editor]))
  (defroute "/logout" [] (dispatch [:logout]))
  (defroute "/editor/:slug" [slug]
            (do (dispatch [:set-active-page :editor])
                (dispatch [:set-active-article slug])))
  (defroute "/article/:slug" [slug]
            (do (dispatch [:set-active-page :article])
                (dispatch [:set-active-article slug])
                (dispatch [:get-article-comments {:slug slug}])))
  (defroute "/:username/favorites" [username]
            (do (dispatch [:set-active-page :profile])
                (dispatch [:get-user-profile {:profile (subs username 1)}]) ;; URL contains @ therefore subs
                (dispatch [:get-articles {:favorited (subs username 1)}]))) ;; URL contains @ therefore subs
  (defroute "/:username" [username]
            (do (dispatch [:set-active-page :profile])
                (dispatch [:get-user-profile {:profile (subs username 1)}]) ;; URL contains @ therefore subs
                (dispatch [:get-articles {:author (subs username 1)}])))) ;; URL contains @ therefore subs

(def history
  (doto (History.)
    (events/listen EventType.NAVIGATE
                   (fn [event] (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -- Entry Point -------------------------------------------------------------
;; Within ../../resources/public/index.html you'll see this code:
;; window.onload = function() { conduit.core.main() }
;; So this is the entry function that kicks off the app once the HTML is loaded.
;;
(defn ^:export main
  []

  ;; Put an initial value into app-db.
  ;; The event handler for `:initialise-db` can be found in `events.cljs`
  ;; Using the sync version of dispatch means that value is in
  ;; place before we go onto the next step.
  (dispatch-sync [:initialise-db])

  ;; Hookup the router and history that we configured above.
  (routes)

  ;; Send request to get articles and tags so that we can display them to the
  ;; user when the page loads for the first time.
  (dispatch [:get-articles {:offset 0 :limit 10}]) ;; we might move it to bootstrap or init when it get's larger
  (dispatch [:get-tags])

  ;; Render the UI into the HTML's <div id="app" /> element
  ;; The view function `conduit.views/conduit-app` is the
  ;; root view for the entire UI.
  (reagent/render [conduit.views/conduit-app]
    (.getElementById js/document "app")))
