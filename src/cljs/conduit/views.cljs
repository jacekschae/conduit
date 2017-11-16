(ns conduit.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [conduit.subs :as subs]))

(defn header
  []
  [:nav.navbar.navbar-light
   [:div.container
    [:a.navbar-brand {:href "index.html"} "conduit"]
    [:ul.nav.navbar-nav.pull-xs-right
     [:li.nav-item
      [:a.nav-link.active {:href ""} "Home"]]
     [:li.nav-item
      [:a.nav-link {:href ""}
       [:i.ion-compose "New Post"]]]
     [:li.nav-item
      [:a.nav-link {:href ""}
       [:i.ion-gear-a "Settings"]]]
     [:li.nav-item
      [:a.nav-link {:href ""} "Sign up"]]]]])

(defn footer
  []
  (let [link [:a {:href "https://thinkster.io"}]]
   [:div.container
    [:a.logo-font {:href "/"} "conduit"]
    [:span.attribution
     "An interactive learning project from "
     [:a {:href "https://thinkster.io"} "Thinkster"]
     ". Code & design licensed under MIT."]]))

(defn home
  []
  [:div.home-page
   [:div.banner
    [:div.container
     [:h1.logo-font "conduit"]
     [:p "A place to share your knowledge."]]]])
     ;; TODO - Finish component

(defn auth
  []
  [:div.auth-page
   [:div.container.page
    [:div.row
     [:div.col-md-6.offset-md-3.col-xs-12
      [:h1.text-xs-center "Sign up"]
      [:p.text-xs-center
       [:a {:href ""} "Have an account?"]]
      [:ul.error-message
       [:li "That email is already taken"]]
      [:form
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "text" :placeholder "Your Name"}]]
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "text" :placeholder "Email"}]]
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "password" :placeholder "Password"}]]
       [:button.btn.btn-lg.btn-primary.pull-xs-right "Sign up"]]]]]])

(defn signup
  [])


(defn- panels [panel-name]
  (case panel-name
    :home [home]
    :auth [auth]
    ;; :signup [signup]
    ;; :settings [settings]
    ;; :editor [editor]
    ;; :article [article]
    ;; :profile [profile]
    [home]))

(defn conduit-app
  []
  (let [active-panel (subscribe [::subs/active-panel])]
   [:div
    [header]
    [panels @active-panel]
    [footer]]))
