(ns conduit.events
  (:require
   [conduit.db :refer [default-db]]
   [re-frame.core :refer [reg-event-db reg-event-fx]]
   [day8.re-frame.http-fx]
   [ajax.core :refer [json-request-format json-response-format]]
   [clojure.string :as str]
   [conduit.db :as db]))

;; -- Helpers -----------------------------------------------------------------

(def api-url "https://conduit.productionready.io/api")

(defn uri [& path]
  "Concat any path elements to api-url separated by /"
  (str/join "/" (concat [api-url] path)))

;; -- Event Handlers ----------------------------------------------------------

(reg-event-db    ;; usage: (dispatch [:initialise-db])
 :initialise-db  ;; sets up initial application state
 (fn  [_ _]      ;; the two parameters are not important here, so use _
   default-db))  ;; what it returns becomes the new application state


(reg-event-db              ;; usage: (dispatch [:set-active-page :home])
 :set-active-page          ;; triggered when the user clicks on a link
 (fn [db [_ active-page]]  ;; destructure 2nd parameter to obtain active-page
   (assoc db :active-page active-page)))  ;; compute and return the new state

(reg-event-db  ;; usage: (dispatch [:set-active-page :home])
 :set-active-article
 (fn [db [_ active-article]]
   (assoc db :active-article active-article)))

(reg-event-fx   ;; usage (dispatch [:get-articles {:limit 10 :tag "tag-name" ...}])
 :get-articles  ;; triggered when the home page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:limit 10}
   {:http-xhrio {:method          :get
                 :uri             (uri "articles")
                 :params          params                                    ;; include params in the request
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-articles-success]                   ;; trigger get-articles-success event
                 :on-failure      [:api-request-failure :get-articles]}
    :db          (-> db
                     (assoc-in [:loading :articles] true)
                     (assoc-in [:filter :articles-by-tag] (:tag params))
                     (assoc-in [:filter :articles-by-author] (:author params))
                     (assoc-in [:filter :articles-by-favorites] (:favorited params)))}))

(reg-event-db
 :get-articles-success
 (fn [db [_ {articles :articles}]]
   (-> db
       (assoc-in [:loading :articles] false)
       (assoc :articles articles))))

(reg-event-fx  ;; usage (dispatch [:get-articles])
 :get-tags     ;; triggered when the home page is loaded
 (fn [{:keys [db]} _]  ;; second parameter is not important, therefore _
   {:db         (assoc-in db [:loading :tags] true)
    :http-xhrio {:method          :get
                 :uri             (uri "tags")
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-tags-success]                       ;; trigger get-tags-success event
                 :on-failure      [:api-request-failure :get-tags]}}))      ;; trigger api-request-failure with :get-tags param

(reg-event-db
 :get-tags-success
 (fn [db [_ {tags :tags}]]
   (-> db
       (assoc-in [:loading :tags] false)
       (assoc :tags tags))))

(reg-event-fx           ;; usage (dispatch [:get-article-comments {:slug "article-slug"}])
 :get-article-comments  ;; triggered when the article page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:slug "article-slug"}
   {:db         (assoc-in db [:loading :comments] true)
    :http-xhrio {:method          :get
                 :uri             (uri "articles" (:slug params) "comments")  ;; evaluates to "/articles/:slug/comments"
                 :response-format (json-response-format {:keywords? true})    ;; json and all keys to keywords
                 :on-success      [:get-article-comments-success]             ;; trigger get-articles-success
                 :on-failure      [:api-request-failure :get-article-comments]}}))  ;; trigger api-request-failure with :get-articles param

(reg-event-db
 :get-article-comments-success
 (fn [db [_ {comments :comments}]]
   (-> db
       (assoc-in [:loading :comments] false)
       (assoc :comments comments))))

(reg-event-fx       ;; usage (dispatch [:get-user-profile {:profile "profile"}])
 :get-user-profile  ;; triggered when the profile page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:profile "profile"}
   {:db         (assoc-in db [:loading :profile] true)
    :http-xhrio {:method          :get
                 :uri             (uri "profiles" (:profile params))        ;; evaluates to "/profiles/:profile"
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-user-profile-success]               ;; trigger get-user-profile-success
                 :on-failure      [:api-request-failure :get-user-profile]}}))  ;; trigger api-request-failure with :get-articles param

(reg-event-db
 :get-user-profile-success
 (fn [db [_ {profile :profile}]]
   (-> db
       (assoc-in [:loading :profile] false)
       (assoc :profile profile))))

(reg-event-db
 :api-request-failure
 (fn [db [_ & q]]
   (let [request (butlast q)
         response (last q)]
     (assoc-in db
               (into [:loading] request)
               [:failed (or (get-in response [:response :errors])
                            {:error [(get response :status-text)]})]))))
