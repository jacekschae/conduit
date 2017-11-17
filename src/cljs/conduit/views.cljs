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
       [:i.ion-compose "New Article"]]]
     [:li.nav-item
      [:a.nav-link {:href "/#/settings"}
       [:i.ion-gear-a "Settings"]]]
     [:li.nav-item
      [:a.nav-link {:href "/#/login"} "Sign in"]]
     [:li.nav-item
      [:a.nav-link {:href "/#/register"} "Sign up"]]
     ;; TO-DO Remove
     [:li.nav-item
      [:a.nav-link {:href "/#/profile"} "PROFILE"]]]]])

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
        [:i.ion-plus-round "Follow Eric Simmons"]]]]]]
   [:div.container
    [:div.row
     [:div.col-xs-12.col-md-10.offset-md-1
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
        [:span "Read more ..."]]]]]]])

(defn settings
  []
  [:div.settings-page
   [:div.container.page
    [:div.row
     [:div.col-md-6.offset-md-3.col-xs-12
      [:h1.text-xs-center "Your Settings"]
      [:form
       [:fieldset
        [:fieldset.form-group
         [:input.form-control {:type "text", :placeholder "URL of profile picture"}]]
        [:fieldset.form-group
         [:input.form-control.form-control-lg {:type "text", :placeholder "Your Name"}]]
        [:fieldset.form-group
         [:textarea.form-control.form-control-lg {:rows "8", :placeholder "Short bio about you"}]]
        [:fieldset.form-group
         [:input.form-control.form-control-lg {:type "text", :placeholder "Email"}]]
        [:fieldset.form-group
         [:input.form-control.form-control-lg {:type "password", :placeholder "Password"}]]
        [:button.btn.btn-lg.btn-primary.pull-xs-right "Update Settings"]]]]]]])

(defn editor
  []
  [:div.editor-page
   [:div.container.page
    [:div.row
     [:div.col-md-10.offset-md-1.col-xs-12
      [:form
       [:fieldset
        [:fieldset.form-group
         [:input.form-control.form-control-lg {:type "text", :placeholder "Article Title"}]]
        [:fieldset.form-group
         [:input.form-control {:type "text", :placeholder "What's this article about?"}]]
        [:fieldset.form-group
         [:textarea.form-control {:rows "8", :placeholder "Write your article (in markdown)"}]]
        [:fieldset.form-group
         [:input.form-control {:type "text", :placeholder "Enter tags"}]
         [:div.tag-list]]
        [:button.btn.btn-lg.pull-xs-right.btn-primary {:type "button"} "Publish Article"]]]]]]])

(defn article
  []
  [:div {:class "article-page"}
   [:div {:class "banner"}
    [:div {:class "container"}
     [:h1 "How to build webapps that scale"]
     [:div {:class "article-meta"}
      [:a {:href""}
       [:img {:src "http://i.imgur.com/Qr71crq.jpg"}]]
      [:div {:class "info"}
       [:a {:href "/#/author" :class "author"} "Eric Simons"]
       [:span {:class "date"} "January 20th"]]
      [:button {:class "btn btn-sm btn-outline-secondary"}
       [:i {:class "ion-plus-round"}]"\n          Follow Eric Simons "
       [:span {:class "counter"} "(10)"]]
      [:button {:class "btn btn-sm btn-outline-primary"}
       [:i {:class "ion-heart"}]"\n          Favorite Post "
       [:span {:class "counter"} "(29)"]]]]]
   [:div {:class "container page"}
    [:div {:class "row article-content"}
     [:div {:class "col-md-12"}
      [:p "Web development technologies have evolved at an incredible clip over the past few years."]
      [:h2 {:id "introducing-ionic"} "Introducing RealWorld."]
      [:p "It&#39;s a great solution for learning how other frameworks work."]]]
    [:hr]
    [:div {:class "article-actions"}
     [:div {:class "article-meta"}
      [:a {:href "profile.html"}
       [:img {:src "http://i.imgur.com/Qr71crq.jpg"}]]
      [:div {:class "info"}
       [:a {:href "" , :class "author"} "Eric Simons"]
       [:span {:class "date"} "January 20th"]]
      [:button {:class "btn btn-sm btn-outline-secondary"}
       [:i {:class "ion-plus-round"}]"\n          Follow Eric Simons "
       [:span {:class "counter"} "(10)"]]
      [:button {:class "btn btn-sm btn-outline-primary"}
       [:i {:class "ion-heart"}]"\n          Favorite Post "
       [:span {:class "counter"} "(29)"]]]]
    [:div {:class "row"}
     [:div {:class "col-xs-12 col-md-8 offset-md-2"}
      [:form {:class "card comment-form"}
       [:div {:class "card-block"}
        [:textarea {:class "form-control", :placeholder "Write a comment...", :rows "3"}]]
       [:div {:class "card-footer"}
        [:img {:src "http://i.imgur.com/Qr71crq.jpg", :class "comment-author-img"}]
        [:button {:class "btn btn-sm btn-primary"} "Post Comment"]]]
      [:div {:class "card"}
       [:div {:class "card-block"}
        [:p {:class "card-text"} "With supporting text below as a natural lead-in to additional content."]]
       [:div {:class "card-footer"}
        [:a {:href "" , :class "comment-author"}
         [:img {:src "http://i.imgur.com/Qr71crq.jpg", :class "comment-author-img"}]]
        [:a {:href "" , :class "comment-author"} "Jacob Schmidt"]
        [:span {:class "date-posted"} "Dec 29th"]]]
      [:div {:class "card"}
       [:div {:class "card-block"}
        [:p {:class "card-text"} "With supporting text below as a natural lead-in to additional content."]]
       [:div {:class "card-footer"}
        [:a {:href "" , :class "comment-author"}
         [:img {:src "http://i.imgur.com/Qr71crq.jpg", :class "comment-author-img"}]]
        [:a {:href "" , :class "comment-author"} "Jacob Schmidt"]
        [:span {:class "date-posted"} "Dec 29th"]
        [:span {:class "mod-options"}
         [:i {:class "ion-edit"}]
         [:i {:class "ion-trash-a"}]]]]]]]])

(defn- panels [panel-name]
  (case panel-name
    :home [home]
    :login [login]
    :register [register]
    :profile [profile]
    :settings [settings]
    :editor [editor]
    :article [article]
    [home]))

(defn conduit-app
  []
  (let [active-panel @(subscribe [:active-panel])]
   [:div
    [header]
    [panels active-panel]
    [footer]]))
