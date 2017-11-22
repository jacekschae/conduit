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

(reg-event-db    ;; sets up initial application state
 :initialise-db  ;; usage: (dispatch [:initialise-db])
 (fn  [_ _]      ;; the two parameters are not important here, so use _
   default-db))  ;; What it returns becomes the new application state


(reg-event-db              ;; usage: (dispatch [:set-active-page :home])
 :set-active-page          ;; triggered when the user clicks on a link
 (fn [db [_ active-page]]  ;; destructure 2nd parameter to obtain active-page
   (assoc db :active-page active-page)))  ;; compute and return the new state

(reg-event-db  ;; usage: (dispatch [:set-active-page :home])
 :set-active-article
 (fn [db [_ active-article]]
   (assoc db :active-article active-article)))

(reg-event-fx   ;; usage (dispatch [:get-articles {:limit 10}])
 :get-articles  ;; triggered when the home page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:limit 10}
   {:db         (do ;; @daniel is this correct way to assoc two values at the same time?
                  (assoc-in db [:pending-requests :get-articles] true)
                  (assoc db :articles-by-tag false))
    :http-xhrio {:method          :get
                 :uri             (uri "articles")
                 :params          params                                    ;; include params in the request
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-articles-success]                   ;; trigger get-articles-success event
                 :on-failure      [:api-request-failure :get-articles]}}))  ;; trigger api-request-failure with :get-articles param

(reg-event-db
 :get-articles-success
 (fn [db [_ {articles :articles}]]
   (assoc db :articles articles)))

(reg-event-fx  ;; usage (dispatch [:get-articles])
 :get-tags     ;; triggered when the home page is loaded
 (fn [{:keys [db]} _]  ;; second parameter is not important, therefore _
   {:db         (assoc-in db [:pending-requests :get-tags] true)
    :http-xhrio {:method          :get
                 :uri             (uri "tags")
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-tags-success]                       ;; trigger get-tags-success event
                 :on-failure      [:api-request-failure :get-tags]}}))      ;; trigger api-request-failure with :get-tags param

(reg-event-db
 :get-tags-success
 (fn [db [_ {tags :tags}]]
   (-> db
       (assoc-in [:pending-requests :get-tags] false)
       (assoc :tags tags))))

(reg-event-fx          ;; usage (dispatch [:get-articles-by-tag {:tag "tag" :limit 10}])
 :get-articles-by-tag  ;; triggered when a tag is clicked
 (fn [{:keys [db]} [_ params]]  ;; params = {:tag "tag-name" :limit 10}
   {:db         (do ;; @daniel, same as above (line 39), is this correct way to assoc two values at the same time?
                  (assoc-in db [:pending-requests :get-articles] true)
                  (assoc db :articles-by-tag (:tag params)))
    :http-xhrio {:method          :get
                 :uri             (uri "articles")
                 :params          params                                    ;; include params in the request
                 :response-format (json-response-format {:keywords? true})  ;; json and all keys to keywords
                 :on-success      [:get-articles-success]                   ;; trigger get-articles-by-tag-success event
                 :on-failure      [:api-request-failure :get-articles]}}))  ;; trigger api-request-failure with :get-articles-by-tag param

(reg-event-fx           ;; usage (dispatch [:get-article-comments {:slug "article-slug"}])
 :get-article-comments  ;; triggered when the article page is loaded
 (fn [{:keys [db]} [_ params]]  ;; params = {:slug "article-slug"}
   {:db         (assoc-in db [:pending-requests :get-article-comments] true)
    :http-xhrio {:method          :get
                 :uri             (uri "articles" (:slug params) "comments")  ;; evaluates to "/articles/:slug/comments"
                 :response-format (json-response-format {:keywords? true})    ;; json and all keys to keywords
                 :on-success      [:get-article-comments-success]             ;; trigger get-articles-success event
                 :on-failure      [:api-request-failure :get-articles]}}))    ;; trigger api-request-failure with :get-articles param

(reg-event-db
 :get-article-comments-success
 (fn [db [_ {comments :comments}]]
   (-> db
       (assoc-in [:pending-requests :get-article-comments] false)
       (assoc :comments comments))))
