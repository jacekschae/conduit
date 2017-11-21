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
  (let [articles @(subscribe [:articles])
        tags @(subscribe [:tags])]
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
         (if articles
           (for [{:keys [description slug updatedAt title author favoritesCount]} (vals articles)]
             ^{:key slug} [:div.article-preview
                           [:div.article-meta
                            [:a {:href (str "/#/@" (:username author))}
                             [:img {:src (:image author)}]]
                            [:div.info
                             [:a.author {:href (str "/#/@" (:username author))} (:username author)]
                             [:span.date updatedAt]]
                            [:button.btn.btn-outline-primary.btn-sm.pull-xs-right
                             [:i.ion-heart favoritesCount]]]
                           [:a.preview-link {:href (str "/#/article/" slug)}
                            [:h1 title]
                            [:p description]
                            [:span "Read more ..."]]])
           [:p "Loading articles ..."])]]

       [:div.col-md-3
        [:div.sidebar
         [:p "Popular Tags"]
         (if tags
           [:div.tag-list
            (for [tag tags]
              ^{:key tag} [:a.tag-pill.tag-default {:href (str "/#/tag/" tag)} tag])]
           [:p "Loading tags ..."])]]]]]))

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

;; -- Article -----------------------------------------------------------------
;;
(defn article-meta
  [article]
  [:div.article-meta
   [:a {:href (str "/#/@" (get-in article [:author :username]))}
    [:img {:src (get-in article [:author :image])}]]
   [:div.info
    [:a.author {:href (str "/#/@" (get-in article [:author :username]))} (get-in article [:author :username])]
    [:span.date (:updatedAt article)]]
   [:button.btn.btn-sm.btn-outline-secondary {}
    [:i.ion-plus-round] (str "Follow " (get-in article [:author :username]))
    [:span.counter "(10)"]]
   [:button.btn.btn-sm.btn-outline-primary {}
    [:i.ion-heart (str "Favorite Post ")]
    [:span.counter "(" (:favoritesCount article) ")"]]])

(defn article
  []
  (let [article @(subscribe [:article])]
    [:div.article-page
     [:div.banner
      [:div.container
       [:h1 (:title article)]
       [article-meta article]]]
     [:div.container.page
      [:div.row.article-content
       [:div.col-md-12
        [:p (:body article)]]]
      [:hr]
      [:div.article-actions
       [article-meta article]]
      [:div.row
       [:div.col-xs-12.col-md-8.offset-md-2
        [:form.card.comment-form
         [:div.card-block
          [:textarea.form-control {:placeholder "Write a comment...", :rows "3"}]]
         [:div.card-footer
          [:img.comment-author-img {:src "http://i.imgur.com/Qr71crq.jpg"}]
          [:button.btn.btn-sm.btn-primary "Post Comment"]]]
        [:div.card
         [:div.card-block
          [:p.card-text "With supporting text below as a natural lead-in to additional content."]]
         [:div.card-footer
          [:a.comment-author {:href ""}
           [:img.comment-author-img {:src "http://i.imgur.com/Qr71crq.jpg"}]]
          [:a.comment-author {:href ""} "Jacob Schmidt"]
          [:span.date-posted "Dec 29th"]]]
        [:div.card
         [:div.card-block
          [:p.card-text "With supporting text below as a natural lead-in to additional content."]]
         [:div.card-footer
          [:a.comment-author {:href ""}
           [:img.comment-author-img {:src "http://i.imgur.com/Qr71crq.jpg"}]]
          [:a.comment-author {:href ""} "Jacob Schmidt"]
          [:span.date-posted "Dec 29th"]
          [:span.mod-options
           [:i.ion-edit]
           [:i.ion-trash-a]]]]]]]]))

(defn- pages [page-name]
  (case page-name
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
  (let [active-page @(subscribe [:active-page])]
    [:div
     [header]
     [pages active-page]
     [footer]]))
