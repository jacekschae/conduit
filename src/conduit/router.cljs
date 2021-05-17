(ns conduit.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :refer [dispatch]]))

;; The routes setup is inspired by J. Pablo Fernández 
;; source: https://pupeno.com/2015/08/26/no-hashes-bidirectional-routing-in-re-frame-with-bidi-and-pushy/

;; -- Routes ------------------------------------------------------------------
;; Define routes so that when we enter specific path the router knows what to
;; show us. A route is simply a data structure--a vector--with a pattern and 
;; a result.
(def routes
  ["/" {""         :home
        "login"    :login
        "logout"   :logout
        "register" :register
        "settings" :settings
        "editor/"  {[:slug] :editor}
        "article/" {[:slug] :article}
        "profile/" {[:user-id] {""           :profile
                                "/favorites" :favorited}}}])

;; -- History -----------------------------------------------------------------
;; we need to know the history of our routes so that we can navigate back and 
;; forward. For that we'll use `pushy/pushy`, to which we need to provide a dispatch
;; function (what happens on dispatch) and match (what routes should we match).
(def history
  (let [dispatch #(dispatch [:set-active-page {:page      (:handler %)
                                               :slug      (get-in % [:route-params :slug])
                                               :profile   (get-in % [:route-params :user-id])
                                               :favorited (get-in % [:route-params :user-id])}])
        match #(bidi/match-route routes %)]
    (pushy/pushy dispatch match)))

;; -- Router Start ------------------------------------------------------------
;;
(defn start!
  []
  ;; pushy is here to take care of nice looking urls. Normally we would have to
  ;; deal with #. By using pushy we can have '/about' instead of '/#/about'.
  ;; pushy takes three arguments:
  ;; dispatch-fn - which dispatches when a match is found
  ;; match-fn - which checks if a route exist
  ;; identity-fn (optional) - extract the route from value returned by match-fn
  (pushy/start! history))

;; -- url-for -----------------------------------------------------------------
;; To dispatch routes in our UI (view) we will use url-for and then pass a
;; keyword to which route we want to direct the user.
;; usage: (url-for :home)
(def url-for (partial bidi/path-for routes))

;; -- set-token! --------------------------------------------------------------
;; To change route after some actions we will need to set url and for that we
;; will use set-token!, taking the history and a token.
(defn set-token!
  [token]
  (pushy/set-token! history token))
