(ns conduit.routes
  (:require-macros [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [secretary.core :as secretary]
            [goog.events :as gevents]
            [goog.history.EventType :as EventType]
            [re-frame.core :refer [dispatch]]
            [conduit.events]))

;; -- Routes and Navigation ---------------------------------------------------
;;
(defn hook-browser-navigation! []
  (doto (History.)
    (gevents/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes
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
