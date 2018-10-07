(ns conduit.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :refer [dispatch]]))

;; The routes setup is inspired by J. Pablo Fernández 
;; source: https://pupeno.com/2015/08/26/no-hashes-bidirectional-routing-in-re-frame-with-bidi-and-pushy/

;; -- Routes ------------------------------------------------------------------
;; Define routes so that wehen we enter specific path the router knows what to
;; show us. A route is simply a data structure - Vector - with a pattern and 
;; a result.
(def routes
  ["/" {""         :home
        "login"    :login
        "logout"   :logout
        "register" :register
        "settings" :settings
        "editor/"  {[:slug]    :editor}
        "article/" {[:slug]    :article}
        "profile/" {[:user-id] {""           :profile
                                "/favorites" :favorited}}}])

;; -- parse-url ---------------------------------------------------------------
;; By using bidi/match-route we convert URL into a data structure and check if 
;; a route exists in our routes.
(defn- parse-url
  [url]
  (bidi/match-route routes url))

;; -- dispatch-route ----------------------------------------------------------
;; When we find a match, with parse-url, we will use the output to
;; dispatch route and redirect a user
(defn- dispatch-route
  [matched-route]
  (dispatch [:set-active-page {:page      (:handler matched-route)
                               :slug      (get-in matched-route [:route-params :slug])
                               :profile   (get-in matched-route [:route-params :user-id])
                               :favorited (get-in matched-route [:route-params :user-id])}]))

;; -- Router Start ------------------------------------------------------------
;;
(defn start!
  []
  ;; pushy is here to take care of nice looking urls. Normally we would have to
  ;; deal with #. By using pushy we can have '/about' instead of '/#/about'.
  ;; pushy takes three arguments:
  ;; dispatch-fn - which dispatches when a match is found
  ;; match-fn - which cheks to see if a route exist
  ;; identity-fn (optional) - extract the route from value returned by match-fn
  (pushy/start! (pushy/pushy dispatch-route parse-url)))

;; -- url-for -----------------------------------------------------------------
;; To dispatch routes in our UI (view) we will use url-for and then pass a
;; keyword to which route we want to direct the user.
;; usage: (url-for :home)
(def url-for (partial bidi/path-for routes))

;; -- history -----------------------------------------------------------------
;; we need to hook up history to our set-token so that we can go back
(def history (pushy/pushy dispatch-route (partial bidi/match-route routes)))

;; -- set-token! --------------------------------------------------------------
;; To change route after some actions we will need to set url and for that we
;; will use set-token! that needs history and the token
(defn set-token!
  [token]
  (pushy/set-token! history token))