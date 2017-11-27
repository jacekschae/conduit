(ns conduit.events
  (:require
   [conduit.db :refer [default-db]]
   [re-frame.core :refer [reg-event-db reg-event-fx inject-cofx]]
   [day8.re-frame.http-fx]
   [ajax.core :refer [json-request-format json-response-format]]
   [clojure.string :as str]
   [conduit.db :as db]))

;; -- Helpers -----------------------------------------------------------------
;;
(def api-url "https://conduit.productionready.io/api")

(defn uri [& path]
  "Concat any path elements to api-url separated by /"
  (str/join "/" (concat [api-url] path)))

;; -- Event Handlers ----------------------------------------------------------
;;
(reg-event-db    ;; usage: (dispatch [:initialise-db])
 :initialise-db  ;; sets up initial application state

 ;; the interceptor chain (a vector of interceptors)
 [(inject-cofx :local-store-user)]  ;; gets user from localstore, and puts into coeffects arg

 ;; the event handler (function) being registered
 (fn  [{:keys [db local-store-user]} _]               ;; take 2 vals from coeffects. Ignore event vector itself.
   {:db (assoc default-db :user local-store-user)}))  ;; what it returns becomes the new application state

(reg-event-db              ;; usage: (dispatch [:set-active-page :home])
 :set-active-page          ;; triggered when the user clicks on a link
 (fn [db [_ active-page]]  ;; destructure 2nd parameter to obtain active-page
   (assoc db :active-page active-page)))  ;; compute and return the new state

(reg-event-db  ;; usage: (dispatch [:set-active-page :home])
 :set-active-article
 (fn [db [_ active-article]]
   (assoc db :active-article active-article)))

;; -- GET Articles ------------------------------------------------------------
;;
(reg-event-fx   ;; usage (dispatch [:get-articles {:limit 10 :tag "tag-name" ...}])
 :get-articles  ;; triggered when the home page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:limit 10 :tag "tag-name" ...}
   {:http-xhrio {:method          :get
                 :uri             (uri "articles")
                 :params          params                                    ;; include params in the request
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-articles-success]                   ;; trigger get-articles-success event
                 :on-failure      [:api-request-error :get-articles]}
    :db          (-> db
                     (assoc-in [:loading :articles] true)
                     (assoc-in [:filter :offset] (:offset params))
                     (assoc-in [:filter :tag] (:tag params))
                     (assoc-in [:filter :author] (:author params))
                     (assoc-in [:filter :favorites] (:favorited params)))}))

(reg-event-db
 :get-articles-success
 (fn [db [_ {articles :articles, articles-count :articlesCount}]]
   (-> db
       (assoc-in [:loading :articles] false)
       (assoc :articles-count articles-count)
       (assoc :articles articles))))

;; -- GET Tags ----------------------------------------------------------------
;;
(reg-event-fx  ;; usage (dispatch [:get-articles])
 :get-tags     ;; triggered when the home page is loaded
 (fn [{:keys [db]} _]  ;; second parameter is not important, therefore _
   {:db         (assoc-in db [:loading :tags] true)
    :http-xhrio {:method          :get
                 :uri             (uri "tags")
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-tags-success]                       ;; trigger get-tags-success event
                 :on-failure      [:api-request-error :get-tags]}}))      ;; trigger api-request-error with :get-tags param

(reg-event-db
 :get-tags-success
 (fn [db [_ {tags :tags}]]
   (-> db
       (assoc-in [:loading :tags] false)
       (assoc :tags tags))))

;; -- GET Comments ------------------------------------------------------------
;;
(reg-event-fx           ;; usage (dispatch [:get-article-comments {:slug "article-slug"}])
 :get-article-comments  ;; triggered when the article page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:slug "article-slug"}
   {:db         (assoc-in db [:loading :comments] true)
    :http-xhrio {:method          :get
                 :uri             (uri "articles" (:slug params) "comments")  ;; evaluates to "/articles/:slug/comments"
                 :response-format (json-response-format {:keywords? true})    ;; json and all keys to keywords
                 :on-success      [:get-article-comments-success]             ;; trigger get-articles-success
                 :on-failure      [:api-request-error :get-article-comments]}}))  ;; trigger api-request-error with :get-articles param

(reg-event-db
 :get-article-comments-success
 (fn [db [_ {comments :comments}]]
   (-> db
       (assoc-in [:loading :comments] false)
       (assoc :comments comments))))

;; -- GET Profile -------------------------------------------------------------
;;
(reg-event-fx       ;; usage (dispatch [:get-user-profile {:profile "profile"}])
 :get-user-profile  ;; triggered when the profile page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:profile "profile"}
   {:db         (assoc-in db [:loading :profile] true)
    :http-xhrio {:method          :get
                 :uri             (uri "profiles" (:profile params))            ;; evaluates to "/profiles/:profile"
                 :response-format (json-response-format {:keywords? true})      ;; json and all keys to keywords
                 :on-success      [:get-user-profile-success]                   ;; trigger get-user-profile-success
                 :on-failure      [:api-request-error :get-user-profile]}}))  ;; trigger api-request-error with :get-articles param

(reg-event-db
 :get-user-profile-success
 (fn [db [_ {profile :profile}]]
   (-> db
       (assoc-in [:loading :profile] false)
       (assoc :profile profile))))

;; -- Login -------------------------------------------------------------------
;;
(reg-event-fx  ;; usage (dispatch [:login user])
 :login        ;; triggered when the article page is loaded
 (fn [{:keys [db]} [_ credentials]]  ;; credentials = {:email ... :password ...}
   {:db         (assoc-in db [:loading :login] true)
    :http-xhrio {:method          :post
                 :uri             (uri "users" "login")                     ;; evaluates to "/users/login"
                 :params          {:user credentials}                       ;; {:user {:email ... :password ...}}
                 :format          (json-request-format)                     ;; make sure it's json
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:login-success]                          ;; trigger get-articles-success
                 :on-failure      [:api-request-error :login]}}))           ;; trigger api-request-error with :get-articles param

(reg-event-fx
 :login-success
 (fn [{:keys [db]} [_ {user :user}]]
   {:db       (-> db
                  (assoc-in [:loading :login] false)
                  (assoc :user user))
    :dispatch [:set-active-page :home]}))

;; -- Logout ------------------------------------------------------------------
;;
(reg-event-fx  ;; usage (dispatch [:logout])
 :logout
 (fn [{:keys [db]} [_ _]]
   {:db       (dissoc db :user)
    :dispatch [:set-active-page :home]}))

;; -- Error Handler -----------------------------------------------------------
;;
(reg-event-db
 :api-request-error
 (fn [db [_ & event]]
   (let [request (butlast event)
         response (last event)]
     (assoc-in db
               (into [:errors] request)
               (or (get-in response [:response :errors]
                           {:error [(get response :status-text)]}))))))
