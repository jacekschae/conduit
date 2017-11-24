(ns conduit.views
  (:require [re-frame.core :refer [subscribe dispatch]]
            [conduit.subs :as subs]))

;; -- Layout ------------------------------------------------------------------
;;
(defn header
  []
  (let [user false] ;; create subscription for user
    [:nav.navbar.navbar-light
     [:div.container
      [:a.navbar-brand {:href "/#/"} "conduit"]
      (if user
        [:ul.nav.navbar-nav.pull-xs-right
         [:li.nav-item
          [:a.nav-link.active {:href "/#/"} "Home"]]
         [:li.nav-item
          [:a.nav-link {:href "/#/editor"}
           [:i.ion-compose "New Article"]]]
         [:li.nav-item
          [:a.nav-link {:href "/#/settings"}
           [:i.ion-gear-a "Settings"]]]
         [:li.nav-item
          [:a.nav-link {:href "/#/@profile"} "username"]]]
        [:ul.nav.navbar-nav.pull-xs-right
         [:li.nav-item
          [:a.nav-link.active {:href "/#/"} "Home"]]
         [:li.nav-item
          [:a.nav-link {:href "/#/login"} "Sign in"]]
         [:li.nav-item
          [:a.nav-link {:href "/#/register"} "Sign up"]]])]]))

(defn footer
  []
  [:footer
   [:div.container
    [:a.logo-font {:href "/#/"} "conduit"]
    [:span.attribution
     "An interactive learning project from "
     [:a {:href "https://thinkster.io"} "Thinkster"]
     ". Code & design licensed under MIT."]]])

;; -- Helpers -----------------------------------------------------------------
;;
(defn format-date
  [date]
  (.toDateString (js/Date. date)))

(defn tags-list
  [tags-list]
  [:ul.tag-list
   (for [tag tags-list]
     ^{:key tag} [:li.tag-default.tag-pill.tag-outline tag])])

(defn article-meta
  [{author          :author
    created-at      :createdAt
    likes           :likes
    favorites-count :favoritesCount
    favorited       :favorited}]
  [:div.article-meta
   [:a {:href (str "/#/@" (:username author))}
    [:img {:src (:image author)}]]
   " "
   [:div.info
    [:a.author {:href (str "/#/@" (:username author))} (:username author)]
    [:span.date (format-date created-at)]]
   [:button.btn.btn-sm.btn-outline-secondary {}
    [:i.ion-plus-round " "]
    [:span (str "Follow " (:username author))]
    [:span.counter "(10)"]]
   " "
   [:button.btn.btn-sm.btn-outline-primary
    [:i.ion-heart " "]
    [:span (str "Favorite Post ")]
    [:span.counter "(" favorites-count ")"]]])

(defn articles-preview
  []
  (let [articles @(subscribe [:articles])]
    [:div
     (if (empty? articles)
       [:div.article-preview
        [:p "No articles are here... yet."]]
       (for [{:keys [description slug createdAt title author favoritesCount tagList]} articles]
         ^{:key slug} [:div.article-preview
                       [:div.article-meta
                        [:a {:href (str "/#/@" (:username author))}
                         [:img {:src (:image author)}]]
                        [:div.info
                         [:a.author {:href (str "/#/@" (:username author))} (:username author)]
                         [:span.date (format-date createdAt)]]
                        [:button.btn.btn-outline-primary.btn-sm.pull-xs-right
                         [:i.ion-heart " "]
                         [:span favoritesCount]]]
                       [:a.preview-link {:href (str "/#/article/" slug)}
                        [:h1 title]
                        [:p description]
                        [:span "Read more ..."]
                        [tags-list tagList]]]))])) ; defined in Helpers section

(defn articles-pagination
  []
  (let [articles-count @(subscribe [:articles-count])]
    [:li.page-item.active
     [:a.page-link {:href "" :on-click #()} "1"]]))

;; -- Home -------------------------------------------------------------------
;;
(defn get-articles [event params] ;; @daniel - don't know about this here. Maybe it should be in events?
  (.preventDefault event)         ;; can we pass event when we do dispatch?
  (dispatch [:get-articles params]))

(defn home
  []
  (let [filter @(subscribe [:filter])
        tags @(subscribe [:tags])
        loading @(subscribe [:loading])
        articles-count @(subscribe [:articles-count])]
    [:div.home-page
     [:div.banner
      [:div.container
       [:h1.logo-font "conduit"]
       [:p "A place to share your knowledge."]]]
     [:div.container.page
      [:div.row
       [:div.col-md-9
        [:div.feed-toggle
         (if (:articles-by-tag filter)
           [:ul.nav.nav-pills.outline-active
            [:li.nav-item
             [:a.nav-link {:href "" :on-click #(get-articles % {:tag nil})} "Global Feed"]] ;; first argument: % is browser event
            [:li.nav-item                                                                   ;; second: nil to remove filter by tags
             [:a.nav-link.active
              [:i.ion-pound] (str " " (:articles-by-tag filter))]]]
           [:ul.nav.nav-pills.outline-active
            [:li.nav-item
             [:a.nav-link.active {:href "/#/"} "Global Feed"]]])
         (if (:articles loading)
           [:div.article-preview
            [:p "Loading articles ..."]]
           [articles-preview])
         [:li.page-item.active
          [:a.page-link {:on-click #(get-articles % {:tag nil :offset 10})} "1"]]]]
       [:div.col-md-3
        [:div.sidebar
         [:p "Popular Tags"]
         (if (:tags loading)
           [:p "Loading tags ..."]
           [:div.tag-list
            (for [tag tags]
              ^{:key tag} [:a.tag-pill.tag-default {:href "" :on-click #(get-articles % {:tag tag})} tag])])]]]]]))

(defn login
  []
  [:div.auth-page
   [:div.container.page
    [:div.row
     [:div.col-md-6.offset-md-3.col-xs-12
      [:h1.text-xs-center "Sign in"]
      [:p.text-xs-center
       [:a {:href ""} "Need an account?"]]
      [:form
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "text" :placeholder "Email"}]]
       [:fieldset.form-group
        [:input.form-control.form-control-lg {:type "password" :placeholder "Password"}]]
       [:button.btn.btn-lg.btn-primary.pull-xs-right "Sign in"]]]]]])

(defn register
  []
  (let [profile @(subscribe [:profile])]
    [:div.auth-page
     [:div.container.page
      [:div.row
       [:div.col-md-6.offset-md-3.col-xs-12
        [:h1.text-xs-center "Sign up"]
        [:p.text-xs-center
         [:a {:href ""} "Have an account?"]]
        [:form
         [:fieldset.form-group
          [:input.form-control.form-control-lg {:type "text" :placeholder "Your Name"}]]
         [:fieldset.form-group
          [:input.form-control.form-control-lg {:type "text" :placeholder "Email"}]]
         [:fieldset.form-group
          [:input.form-control.form-control-lg {:type "password" :placeholder "Password"}]]
         [:button.btn.btn-lg.btn-primary.pull-xs-right "Sign up"]]]]]]))

(defn profile
  []
  (let [profile @(subscribe [:profile])
        filter @(subscribe [:filter])
        loading @(subscribe [:loading])]
    [:div.profile-page
     [:div.user-info
      [:div.container
       [:div.row
        [:div.col-xs-12.col-md-10.offset-md-1
         [:img.user-img {:src (:image profile)}]
         [:h4 (:username profile)]
         [:p (:bio profile)]
         [:button.btn.btn-sm.action-btn.ng-binding.btn-outline-secondary
          [:i.ion-plus-round " "]
          [:span (str "Follow " (:username profile))]]]]]]
     [:container
      [:row
       [:div.col-xs-12.col-md-10.offset-md-1
        [:div.articles-toggle
         [:ul.nav.nav-pills.outline-active
          [:li.nav-item
           [:a.nav-link {:href (str "/#/@" (:username profile)) :class (when (:articles-by-author filter) " active")} "My Articles"]]
          [:li.nav-item
           [:a.nav-link {:href (str "/#/@" (:username profile) "/favorites") :class (when (:articles-by-favorites filter) "nav-link active")} "Favorited Articles"]]]]
        (if (:articles loading)
          [:div.article-preview
           [:p "Loading articles ..."]]
          [articles-preview])]]]]))

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

(defn article
  []
  (let [article @(subscribe [:article])
        user false ;; create subscription for auth-user
        comments @(subscribe [:comments])]
    [:div.article-page
     [:div.banner
      [:div.container
       [:h1 (:title article)]
       [article-meta article]]] ;; defined in Helpers section
     [:div.container.page
      [:div.row.article-content
       [:div.col-md-12
        [:p (:body article)]]]
      [tags-list (:tagList article)] ;; defined in Helpers section
      [:hr]
      [:div.article-actions
       [article-meta article]] ;; defined in Helpers section
      [:div.row
       [:div.col-xs-12.col-md-8.offset-md-2
        (if user
          [:form.card.comment-form
           [:div.card-block
            [:textarea.form-control {:placeholder "Write a comment...", :rows "3"}]]
           [:div.card-footer
            [:img.comment-author-img {:src "http://i.imgur.com/Qr71crq.jpg"}]
            [:button.btn.btn-sm.btn-primary "Post Comment"]]
           [:div.card
            [:div.card-block
             [:p.card-text "With supporting text below as a natural lead-in to additional content."]]
            [:div.card-footer
             [:a.comment-author {:href ""}
              [:img.comment-author-img {:src "http://i.imgur.com/Qr71crq.jpg"}]]
             [:a.comment-author {:href ""} "Jacob Schmidt"]
             [:span.date-posted "Dec 29th"]]]]
          [:p
           [:a {:href "#/register"} "Sign in"]
           " or "
           [:a {:href "#/login"} "Sign in"]
           " to add comments on this article."])
        (if (empty? comments)
          [:div]
          (for [{:keys [id createdAt body author]} comments]
            ^{:key id} [:div.card
                        [:div.card-block
                         [:p.card-text body]]
                        [:div.card-footer
                         [:a.comment-author {:href ""}
                          [:img.comment-author-img {:src (:image author)}]]
                         [:a.comment-author {:href (str "/#/profile/@" (:username author))} (:username author)]
                         [:span.date-posted (format-date createdAt)]
                         [:span.mod-options
                          [:i.ion-edit]
                          [:i.ion-trash-a]]]]))]]]]))

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
