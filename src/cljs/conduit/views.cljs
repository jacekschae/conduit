(ns conduit.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [conduit.subs :as subs]))

;; -- Layout ------------------------------------------------------------------
;;
(defn header
  []
  [:nav.navbar.navbar-light
   [:div.container
    [:a.navbar-brand {:href "/#"} "conduit"]
    [:ul.nav.navbar-nav.pull-xs-right
     [:li.nav-item
      [:a.nav-link.active {:href "/#"} "Home"]]
     [:li.nav-item
      [:a.nav-link {:href "/#/editor"}
       [:i.ion-compose "New Post"]]]
     [:li.nav-item
      [:a.nav-link {:href "/#/settings"}
       [:i.ion-gear-a "Settings"]]]
     [:li.nav-item
      [:a.nav-link {:href "/#/login"} "Sign in"]]
     [:li.nav-item
      [:a.nav-link {:href "/#/register"} "Sign up"]]]]])

(defn footer
  []
  [:footer
   [:div.container
    [:a.logo-font {:href "/#"} "conduit"]
    [:span.attribution
     "An interactive learning project from "
     [:a {:href "https://thinkster.io"} "Thinkster"]
     ". Code & design licensed under MIT."]]])

;; -- Pages -------------------------------------------------------------------
;;
(defn home
  []
  [:div.home-page
   [:div.banner
    [:div.container
     [:h1.logo-font "conduit"]
     [:p "A place to share your knowledge."]]]
   [:div.container.page
    [:div.row
     [:div.col-md-9
      [:div.feed-toggle
       [:div.nav.nav-pils.outline-active
        [:li.nav-item
         [:a.nav-link.active "Global Feed"]]]
       ;; map over articles
       [:div.article-preview
        [:div.article-meta
         [:a {:href "/#/profile"}
          [:img {:src "http://i.imgur.com/Qr71crq.jpg"}]]
         [:div.info
          [:a.author {:href "/#/author"} "Eric Simmons"]
          [:span.date "January 20th"]]
         [:button.btn.btn-outline-primary.btn-sm.pull-xs-right
          [:i.ion-heart "29"]]]
        [:a.preview-link {:href "/#/article/article-id"}
         [:h1 "How to build webapps that scael"]
         [:p "This is the description for the post."]
         [:span "Read more ..."]]]]]
     [:div.col-md-3
      [:div.sidebar
       [:p "Popular Tags"]
       [:div.tag-list
        [:a.tag-pill.tag-default {:href "/#/tag/programming"} "programming"]
        [:a.tag-pill.tag-default {:href "/#/tag/javascript"} "javascript"]
        [:a.tag-pill.tag-default {:href "/#/tag/emberjs"} "emberjs"]
        [:a.tag-pill.tag-default {:href "/#/tag/react"} "react"]]]]]]])


(defn login
  []
  [:div.auth-page
   [:div.container.page
    [:div.row
     [:div.col-md-6.offset-md-3.col-xs-12
      [:h1.text-xs-center "Sign in"]
      [:p.text-xs-center
       [:a {:href ""} "Have an account?"]]
      [:ul.error-message
       [:li "That email is already taken"]]
      [:form
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "text" :placeholder "Email"}]]
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "password" :placeholder "Password"}]]
       [:button.btn.btn-lg.btn-primary.pull-xs-right "Sign in"]]]]]])

(defn register
  []
  [:div.auth-page
   [:div.container.page
    [:div.row
     [:div.col-md-6.offset-md-3.col-xs-12
      [:h1.text-xs-center "Sign up"]
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

(defn profile
  []
  [:div.profile-page
   [:div.user-info
    [:div.container
     [:div.row
      [:div.col-xs-12.col-md-10.offset-md-1
       [:img.user-img {:src "http://i.imgur.com/Qr71crq.jpg"}]
       [:h4 "Eric Simmons"]
       [:p "Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games"]
       [:button.btn.btn-sm.btn-outline-secondary.action-btn
        [:i.ion-plus-round "Follow Eric Simmons"]]]]]]])

(defn- panels [panel-name]
  (case panel-name
    :home [home]
    :login [login]
    :register [register]
    :profile [profile]
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
