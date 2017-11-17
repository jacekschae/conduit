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

(reg-event-db     ;; sets up initial application state
  :initialise-db  ;; usage: (dispatch [:initialise-db])
  (fn  [_ _]      ;; the two parameters are not important here, so use _
    default-db))  ;; What it returns becomes the new application state


(reg-event-db               ;; usage: (dispatch [:set-active-page :home])
  :set-active-page          ;; triggered when the user clicks on a link
  (fn [db [_ active-page]]  ;; destructure 2nd parameter to obtain active-page
    (assoc db :active-page active-page)))  ;; compute and return the new state

(reg-event-fx    ;; usage (dispatch [:get-articles {:limit 10}])
  :get-articles  ;; triggered when the home page is loaded
  (fn [{:keys [db]} [_ params]]  ;; params = {:limit 10}
      {:db         (assoc-in db [:pending-requests :get-articles] true)
       :http-xhrio {:method          :get
                    :uri             (uri "articles")
                    :params          params
                    :response-format (json-response-format {:keywords? true}) ;; swap all keys to keywords
                    :on-success      [:get-articles-success]                  ;; trigger get-articles-success event
                    :on-failure      [:api-request-failure :get-articles]}})) ;; trigger api-request-failure with :get-articles param

(reg-event-db
  :get-articles-success
  (fn [db [_ {articles :articles}]]
    (-> db
        (assoc-in [:pending-requests :get-articles] false)
        (update :articles #(merge % (into {} (map (juxt :slug identity) articles)))))))
