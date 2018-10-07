(ns conduit.events
  (:require
   [conduit.db :refer [default-db set-user-ls remove-user-ls]]
   [re-frame.core :refer [reg-event-db reg-event-fx reg-fx inject-cofx trim-v after path debug]]
   [conduit.router :as router]
   [day8.re-frame.http-fx] ;; even if we don't use this require its existence will cause the :http-xhrio effect handler to self-register with re-frame
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [ajax.core :refer [json-request-format json-response-format]]
   [clojure.string :as str]
   [cljs-time.coerce :refer [to-long]]))

;; -- Interceptors --------------------------------------------------------------
;; Every event handler can be "wrapped" in a chain of interceptors. Each of these
;; interceptors can do things "before" and/or "after" the event handler is executed.
;; They are like the "middleware" of web servers, wrapping around the "handler".
;; Interceptors are a useful way of factoring out commonality (across event
;; handlers) and looking after cross-cutting concerns like logging or validation.
;;
;; They are also used to "inject" values into the `coeffects` parameter of
;; an event handler, when that handler needs access to certain resources.
;;
;; Each event handler can have its own chain of interceptors. Below we create
;; the interceptor chain shared by all event handlers which manipulate user.
;; A chain of interceptors is a vector.
;; Explanation of `trim-v` is given further below.
;;
(def set-user-interceptor [(path :user)        ;; `:user` path within `db`, rather than the full `db`.
                           (after set-user-ls) ;; write user to localstore (after)
                           trim-v])            ;; removes first (event id) element from the event vec

;; After logging out clean up local-storage so that when a users refreshes
;; the browser she/he is not automatically loged-in, and because it's a
;; good practice to clean-up after yourself.
;;
(def remove-user-interceptor [(after remove-user-ls)])

;; -- Helpers -----------------------------------------------------------------
;;
(def api-url "https://conduit.productionready.io/api")

(defn endpoint [& params]
  "Concat any params to api-url separated by /"
  (str/join "/" (concat [api-url] params)))

(defn auth-header [db]
  "Get user token and format for API authorization"
  (let [token (get-in db [:user :token])]
    (if token
      [:Authorization (str "Token " token)]
      nil)))

(defn add-epoch [date coll]
  "Takes date identifier and adds :epoch (cljs-time.coerce/to-long) timestamp to coll"
  (map (fn [item] (assoc item :epoch (to-long (date item)))) coll))

(defn index-by [key coll]
  "Transform a coll to a map with a given key as a lookup value"
  (into {} (map (juxt key identity) (add-epoch :createdAt coll))))

(reg-fx
 :set-url
 (fn [{:keys [url]}]
   (router/set-token! url)))

;; -- Event Handlers ----------------------------------------------------------
;;
(reg-event-fx   ;; usage: (dispatch [:initialise-db])
 :initialise-db ;; sets up initial application state

 ;; the interceptor chain (a vector of interceptors)
 [(inject-cofx :local-store-user)] ;; gets user from localstore, and puts into coeffects arg

 ;; the event handler (function) being registered
 (fn-traced [{:keys [local-store-user]} _]                    ;; take 2 vals from coeffects. Ignore event vector itself.
            {:db (assoc default-db :user local-store-user)})) ;; what it returns becomes the new application state

(reg-event-fx                                                                ;; usage: (dispatch [:set-active-page {:page :home})
 :set-active-page                                                            ;; triggered when the user clicks on a link that redirects to a another page
 (fn-traced [{:keys [db]} [_ {:keys [page slug profile favorited user-id]}]] ;; destructure 2nd parameter to obtain keys
            (let [set-page (assoc db :active-page page)]
              (case page
                ;; -- URL @ "/" --------------------------------------------------------
                :home {:db set-page
                       :dispatch-n  (list (if (empty? (:user db))             ;; dispatch more than one event. When a user
                                            [:get-articles {:limit 10}]       ;; is NOT logged in we display all articles
                                            [:get-feed-articles {:limit 10}]) ;; otherwiser we get her/his feed articles
                                          [:get-tags])}                       ;; we also can't forget to get tags
            
                ;; -- URL @ "/login" | "/register" | "/settings" -----------------------
                (:login :register :settings) {:db set-page} ;; when using case with multiple test constants that
                                                                                    ;; do the same thing we can group them together
                                                                                    ;; (:login :register :settings) {:db set-page} is the same as:
                                                                                    ;; :login {:db set-page}
                                                                                    ;; :register {:db set-page}
                                                                                    ;; :settings {:db set-page}
                ;; -- URL @ "/editor" --------------------------------------------------
                :editor {:db       set-page
                         :dispatch (if slug                     ;; When we click article to edit we need
                                     [:set-active-article slug] ;; to set it active or if we want to write
                                     [:reset-active-article])}  ;; a new article we reset
            
                ;; -- URL @ "/article/:slug" -------------------------------------------
                :article {:db         (assoc set-page :active-article slug)
                          :dispatch-n (list [:get-article-comments {:slug slug}]
                                            [:get-user-profile {:profile (get-in db [:articles slug :author :username])}])}
            
                ;; -- URL @ "/profile/:slug" -------------------------------------------
                :profile {:db         (assoc set-page :active-article slug)
                          :dispatch-n (list [:get-user-profile {:profile profile}] ;; again for dispatching multiple
                                            [:get-articles {:author profile}])}    ;; events we can use :dispatch-n
                ;; -- URL @ "/profile/:slug/favorites" ---------------------------------
                :favorited {:db       (assoc db :active-page :profile)           ;; even though we are at :favorited we still
                            :dispatch [:get-articles {:favorited favorited}]}))))  ;; display :profile with :favorited articles

(reg-event-db                             ;; usage: (dispatch [:reset-active-article])
 :reset-active-article                    ;; triggered when the user enters new-article i.e. editor without slug
 (fn-traced [db _]                        ;; 1st paramter in -db events is db, 2nd paramter not important therefore _
            (dissoc db :active-article))) ;; compute and return the new state

(reg-event-fx                                                       ;; usage: (dispatch [:set-active-article slug])
 :set-active-article
 (fn-traced [{:keys [db]} [_ slug]]                                 ;; 1st parameter in -fx events is no longer just db. It is a map which contains a :db key.
            {:db         (assoc db :active-article slug)            ;; The handler is returning a map which describes two side-effects:
             :dispatch-n (list [:get-article-comments {:slug slug}] ;; changne to app-state :db and future event in this case :dispatch-n
                               [:get-user-profile {:profile (get-in db [:articles slug :author :username])}])}))

;; -- GET Articles @ /api/articles --------------------------------------------
;;
(reg-event-fx                         ;; usage (dispatch [:get-articles {:limit 10 :tag "tag-name" ...}])
 :get-articles                        ;; triggered every time user request articles with differetn params
 (fn-traced [{:keys [db]} [_ params]] ;; params = {:limit 10 :tag "tag-name" ...}
            {:http-xhrio {:method          :get
                          :uri             (endpoint "articles")                    ;; evaluates to "api/articles/"
                          :params          params                                   ;; include params in the request
                          :headers         (auth-header db)                         ;; get and pass user token obtained during login
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:get-articles-success]                  ;; trigger get-articles-success event
                          :on-failure      [:api-request-error :get-articles]}      ;; trigger api-request-error with :get-articles
             :db          (-> db
                              (assoc-in [:loading :articles] true)
                              (assoc-in [:filter :offset] (:offset params))         ;; base on paassed params set a filter
                              (assoc-in [:filter :tag] (:tag params))               ;; so that we can easily show and hide
                              (assoc-in [:filter :author] (:author params))         ;; appropriate ui components
                              (assoc-in [:filter :favorites] (:favorited params))
                              (assoc-in [:filter :feed] false))}))                  ;; we need to disable filter by feed every time since it's not supported query param

(reg-event-db
 :get-articles-success
 (fn-traced [db [_ {articles :articles, articles-count :articlesCount}]]
            (-> db
                (assoc-in [:loading :articles] false)          ;; turn off loading flag for this event
                (assoc :articles-count articles-count          ;; change app-state by adding articles-count
                       :articles (index-by :slug articles))))) ;; and articles, which we index-by slug

;; -- GET Article @ /api/articles/:slug ---------------------------------------
;;
(reg-event-fx                         ;; usage (dispatch [:get-article {:slug "slug"}])
 :get-article                         ;; triggered when a user upserts article i.e. is redirected to article page after saving an article
 (fn-traced [{:keys [db]} [_ params]] ;; params = {:slug "slug"}
            {:http-xhrio {:method          :get
                          :uri             (endpoint "articles" (:slug params))     ;; evaluates to "api/articles/:slug"
                          :headers         (auth-header db)                         ;; get and pass user token obtained during login
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:get-article-success]                   ;; trigger get-article-success event
                          :on-failure      [:api-request-error :get-article]}       ;; trigger api-request-error with :get-articles
             :db         (assoc-in db [:loading :article] true)}))

(reg-event-db
 :get-article-success
 (fn-traced [db [_ {article :article}]]
            (-> db
                (assoc-in [:loading :article] false)
                (assoc :articles (index-by :slug [article])))))

;; -- POST/PUT Article @ /api/articles(/:slug) --------------------------------
;;
(reg-event-fx                         ;; usage (dispatch [:upsert-article article])
 :upsert-article                      ;; when we update or insert (upsert) we are sending the same shape of information
 (fn-traced [{:keys [db]} [_ params]] ;; params = {:slug "article-slug" :article {:body "article body"} }
            {:db         (assoc-in db [:loading :article] true)
             :http-xhrio {:method          (if (:slug params) :put :post)           ;; when we get a slug we'll update (:put) otherwise insert (:post)
                          :uri             (if (:slug params)                       ;; Same logic as above but we go with different
                                             (endpoint "articles" (:slug params))   ;; endpoint - one with :slug to update
                                             (endpoint "articles"))                 ;; and another to insert
                          :headers         (auth-header db)                         ;; get and pass user token obtained during login
                          :params          (:article params)
                          :format          (json-request-format)                    ;; make sure we are doing request format wiht json
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:upsert-article-success]                ;; trigger upsert-article-success event
                          :on-failure      [:api-request-error :upsert-article]}})) ;; trigger api-request-error with :upsert-article

(reg-event-fx
 :upsert-article-success
 (fn-traced [{:keys [db]} [_ {article :article}]]
            {:db         (-> db
                             (assoc-in [:loading :article] false)
                             (dissoc :comments)                                ;; clean up any comments that we might have in db
                             (dissoc :errors)                                  ;; clean up any erros that we might have in db
                             (assoc :active-page :article
                                    :active-article (:slug article)))
             :dispatch-n (list [:get-article {:slug (:slug article)}]          ;; when the users clicks save we fetch the new version
                               [:get-article-comments {:slug (:slug article)}]) ;; of the article and comments from the server
                              ;  [:set-active-page {:page :article :slug (:slug article)}])
             :set-url    {:url (str "/article/" (:slug article))}}))

;; -- DELETE Article @ /api/articles/:slug ------------------------------------
;;
(reg-event-fx                       ;; usage (dispatch [:delete-article slug])
 :delete-article                    ;; triggered when a user deletes an article
 (fn-traced [{:keys [db]} [_ slug]] ;; slug = {:slug "article-slug"}
            {:db         (assoc-in db [:loading :article] true)
             :http-xhrio {:method          :delete
                          :uri             (endpoint "articles" slug)               ;; evaluates to "api/articles/:slug"
                          :headers         (auth-header db)                         ;; get and pass user token obtained during login
                          :params          slug                                     ;; pass the article slug to delete
                          :format          (json-request-format)                    ;; make sure we are doing request format wiht json
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:delete-article-success]                ;; trigger get-articles-success
                          :on-failure      [:api-request-error :delete-article]}})) ;; trigger api-request-error with :delete-article

(reg-event-fx
 :delete-article-success
 (fn-traced [{:keys [db]} _]
            {:db        (-> db
                            (update-in [:articles] dissoc (:active-article db))
                            (assoc-in [:loading :article] false))
             :dispatch [:set-active-page {:page :home}]}))

;; -- GET Feed Articles @ /api/articles/feed ----------------------------------
;;
(reg-event-fx                         ;; usage (dispatch [:get-feed-articles {:limit 10 :offset 0 ...}])
 :get-feed-articles                   ;; triggered when Your Feed tab is loaded
 (fn-traced [{:keys [db]} [_ params]] ;; params = {:offset 0 :limit 10}
            {:http-xhrio {:method          :get
                          :uri             (endpoint "articles" "feed")             ;; evaluates to "api/articles/feed"
                          :params          params                                   ;; include params in the request
                          :headers         (auth-header db)                         ;; get and pass user token obtained during login
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:get-feed-articles-success]             ;; trigger get-articles-success event
                          :on-failure      [:api-request-error :get-feed-articles]} ;; trigger api-request-error with :get-feed-articles
             :db          (-> db
                              (assoc-in [:loading :articles] true)
                              (assoc-in [:filter :offset] (:offset params))
                              (assoc-in [:filter :tag] nil)                         ;; with feed-articles we turn off almost all
                              (assoc-in [:filter :author] nil)                      ;; filters to make sure everythinig on the
                              (assoc-in [:filter :favorites] nil)                   ;; client is displayed correctly.
                              (assoc-in [:filter :feed] true))}))                   ;; This is the only one we need

(reg-event-db
 :get-feed-articles-success
 (fn-traced [db [_ {articles :articles, articles-count :articlesCount}]]
            (-> db
                (assoc-in [:loading :articles] false)
                (assoc :articles-count articles-count
                       :articles (index-by :slug articles)))))

;; -- GET Tags @ /api/tags ----------------------------------------------------
;;
(reg-event-fx                ;; usage (dispatch [:get-tags])
 :get-tags                   ;; triggered when the home page is loaded
 (fn-traced [{:keys [db]} _] ;; second parameter is not important, therefore _
            {:db         (assoc-in db [:loading :tags] true)
             :http-xhrio {:method          :get
                          :uri             (endpoint "tags")                        ;; evaluates to "api/tags"
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:get-tags-success]                      ;; trigger get-tags-success event
                          :on-failure      [:api-request-error :get-tags]}}))       ;; trigger api-request-error with :get-tags

(reg-event-db
 :get-tags-success
 (fn-traced [db [_ {tags :tags}]]
            (-> db
                (assoc-in [:loading :tags] false)
                (assoc :tags tags))))

;; -- GET Comments @ /api/articles/:slug/comments -----------------------------
;;
(reg-event-fx                         ;; usage (dispatch [:get-article-comments {:slug "article-slug"}])
 :get-article-comments                ;; triggered when the article page is loaded
 (fn-traced [{:keys [db]} [_ params]] ;; params = {:slug "article-slug"}
            {:db         (assoc-in db [:loading :comments] true)
             :http-xhrio {:method          :get
                          :uri             (endpoint "articles" (:slug params) "comments") ;; evaluates to "api/articles/:slug/comments"
                          :headers         (auth-header db)                                ;; get and pass user token obtained during login
                          :response-format (json-response-format {:keywords? true})        ;; json response and all keys to keywords
                          :on-success      [:get-article-comments-success]                 ;; trigger get-article-comments-success
                          :on-failure      [:api-request-error :get-article-comments]}}))  ;; trigger api-request-error with :get-article-comments

(reg-event-db
 :get-article-comments-success
 (fn-traced [db [_ {comments :comments}]]
            (-> db
                (assoc-in [:loading :comments] false)
                (assoc :comments (index-by :id comments))))) ;; another index-by, this time by id

;; -- POST Comments @ /api/articles/:slug/comments ----------------------------
;;
(reg-event-fx                       ;; usage (dispatch [:post-comment comment])
 :post-comment                      ;; triggered when a user submits a comment
 (fn-traced [{:keys [db]} [_ body]] ;; body = {:body "body" }
            {:db         (assoc-in db [:loading :comments] true)
             :http-xhrio {:method          :post
                          :uri             (endpoint "articles" (:active-article db) "comments") ;; evaluates to "api/articles/:slug/comments"
                          :headers         (auth-header db)                                      ;; get and pass user token obtained during login
                          :params          body
                          :format          (json-request-format)                                 ;; make sure we are doing request format wiht json
                          :response-format (json-response-format {:keywords? true})              ;; json response and all keys to keywords
                          :on-success      [:post-comment-success]                               ;; trigger get-articles-success
                          :on-failure      [:api-request-error :comments]}}))                    ;; trigger api-request-error with :comments

(reg-event-fx
 :post-comment-success
 (fn-traced [{:keys [db]} [_ comment]]
            {:db       (-> db
                           (assoc-in [:loading :comments] false)
                           (assoc-in [:articles (:active-article db) :comments] comment)
                           (update-in [:errors] dissoc :comments)) ;; clean up errors, if any
             :dispatch [:get-article-comments {:slug (:active-article db)}]}))

;; -- DELETE Comments @ /api/articles/:slug/comments/:comment-id ----------------------
;;
(reg-event-fx                             ;; usage (dispatch [:delete-comment comment-id])
 :delete-comment                          ;; triggered when a user deletes an article
 (fn-traced [{:keys [db]} [_ comment-id]] ;; comment-id = 1234
            {:db         (do
                           (assoc-in db [:loading :comments] true)
                           (assoc db :active-comment comment-id))
             :http-xhrio {:method          :delete
                          :uri             (endpoint "articles" (:active-article db) "comments" comment-id)  ;; evaluates to "api/articles/:slug/comments/:comment-id"
                          :headers         (auth-header db)                                                  ;; get and pass user token obtained during login
                          :format          (json-request-format)                                             ;; make sure we are doing request format wiht json
                          :response-format (json-response-format {:keywords? true})                          ;; json response and all keys to keywords
                          :on-success      [:delete-comment-success]                                         ;; trigger delete-comment-success
                          :on-failure      [:api-request-error :delete-comment]}}))                          ;; trigger api-request-error with :delete-comment

(reg-event-db
 :delete-comment-success
 (fn-traced [db _]
            (-> db
                (update-in [:comments] dissoc (:active-comment db)) ;; we could do another fetch of comments
                (dissoc :active-comment)                            ;; but instead we just remove it from app-db
                (assoc-in [:loading :comment] false))))             ;; which gives us much snappier ui

;; -- GET Profile @ /api/profiles/:username -----------------------------------
;;
(reg-event-fx                          ;; usage (dispatch [:get-user-profile {:profile "profile"}])
 :get-user-profile                     ;; triggered when the profile page is loaded
 (fn-traced [{:keys [db]} [_ params]]  ;; params = {:profile "profile"}
            {:db         (assoc-in db [:loading :profile] true)
             :http-xhrio {:method          :get
                          :uri             (endpoint "profiles" (:profile params))    ;; evaluates to "api/profiles/:profile"
                          :headers         (auth-header db)                           ;; get and pass user token obtained during login
                          :response-format (json-response-format {:keywords? true})   ;; json response and all keys to keywords
                          :on-success      [:get-user-profile-success]                ;; trigger get-user-profile-success
                          :on-failure      [:api-request-error :get-user-profile]}})) ;; trigger api-request-error with :get-user-profile

(reg-event-db
 :get-user-profile-success
 (fn-traced [db [_ {profile :profile}]]
            (-> db
                (assoc-in [:loading :profile] false)
                (assoc :profile profile))))

;; -- POST Login @ /api/users/login -------------------------------------------
;;
(reg-event-fx                              ;; usage (dispatch [:login user])
 :login                                    ;; triggered when a users submits login form
 (fn-traced [{:keys [db]} [_ credentials]] ;; credentials = {:email ... :password ...}
            {:db         (assoc-in db [:loading :login] true)
             :http-xhrio {:method          :post
                          :uri             (endpoint "users" "login")               ;; evaluates to "api/users/login"
                          :params          {:user credentials}                      ;; {:user {:email ... :password ...}}
                          :format          (json-request-format)                    ;; make sure it's json
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:login-success]                         ;; trigger login-success
                          :on-failure      [:api-request-error :login]}}))          ;; trigger api-request-error with :login

(reg-event-fx
 :login-success
 ;; The standard set of interceptors, defined above, which we
 ;; use for all user-modifying event handlers. Looks after
 ;; writing user to localStorage.
 ;; NOTE: this chain includes `path` and `trim-v`
 set-user-interceptor

 ;; The event handler function.
 ;; The "path" interceptor in `set-user-interceptor` means 1st parameter is the
 ;; value at `:user` path within `db`, rather than the full `db`.
 ;; And, further, it means the event handler returns just the value to be
 ;; put into `:user` path, and not the entire `db`.
 ;; So, a path interceptor makes the event handler act more like clojure's `update-in`
 (fn-traced [{user :db} [{props :user}]]
            {:db (merge user props)
             :dispatch-n (list [:complete-request :login]
                               [:get-feed-articles {:tag nil :author nil :offset 0 :limit 10}]
                               [:set-active-page {:page :home}])}))

;; -- POST Registration @ /api/users ------------------------------------------
;;
(reg-event-fx                               ;; usage (dispatch [:register-user registration])
 :register-user                             ;; triggered when a users submits registration form
 (fn-traced [{:keys [db]} [_ registration]] ;; registration = {:username ... :email ... :password ...}
            {:db         (assoc-in db [:loading :register-user] true)
             :http-xhrio {:method          :post
                          :uri             (endpoint "users")                       ;; evaluates to "api/users"
                          :params          {:user registration}                     ;; {:user {:username ... :email ... :password ...}}
                          :format          (json-request-format)                    ;; make sure it's json
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:register-user-success]                 ;; trigger login-success
                          :on-failure      [:api-request-error :register-user]}}))  ;; trigger api-request-error with :login-success

(reg-event-fx
 :register-user-success
 ;; The standard set of interceptors, defined above, which we
 ;; use for all user-modifying event handlers. Looks after
 ;; writing user to LocalStore.
 ;; NOTE: this chain includes `path` and `trim-v`
 set-user-interceptor

 ;; The event handler function.
 ;; The "path" interceptor in `set-user-interceptor` means 1st parameter is the
 ;; value at `:user` path within `db`, rather than the full `db`.
 ;; And, further, it means the event handler returns just the value to be
 ;; put into `:user` path, and not the entire `db`.
 ;; So, a path interceptor makes the event handler act more like clojure's `update-in`
 (fn-traced [{user :db} [{props :user}]]
            {:db (merge user props)
             :dispatch-n (list [:complete-request :register-user]
                               [:set-active-page {:page :home}])}))

;; -- PUT Update User @ /api/user ---------------------------------------------
;;
(reg-event-fx                       ;; usage (dispatch [:update-user user])
 :update-user                       ;; triggered when a users updates settgins
 (fn-traced [{:keys [db]} [_ user]] ;; user = {:img ... :username ... :bio ... :email ... :password ...}
            {:db         (assoc-in db [:loading :update-user] true)
             :http-xhrio {:method          :put
                          :uri             (endpoint "user")                        ;; evaluates to "api/user"
                          :params          {:user user}                             ;; {:user {:img ... :username ... :bio ... :email ... :password ...}}
                          :headers         (auth-header db)                         ;; get and pass user token obtained during login
                          :format          (json-request-format)                    ;; make sure our request is json
                          :response-format (json-response-format {:keywords? true}) ;; json response and all keys to keywords
                          :on-success      [:update-user-success]                   ;; trigger update-user-success
                          :on-failure      [:api-request-error :update-user]}}))    ;; trigger api-request-error with :update-user

(reg-event-fx
 :update-user-success
 ;; The standard set of interceptors, defined above, which we
 ;; use for all user-modifying event handlers. Looks after
 ;; writing user to LocalStore.
 ;; NOTE: this chain includes `path` and `trim-v`
 set-user-interceptor

 ;; The event handler function.
 ;; The "path" interceptor in `set-user-interceptor` means 1st parameter is the
 ;; value at `:user` path within `db`, rather than the full `db`.
 ;; And, further, it means the event handler returns just the value to be
 ;; put into `:user` path, and not the entire `db`.
 ;; So, a path interceptor makes the event handler act more like clojure's `update-in`
 (fn-traced [{user :db} [{props :user}]]
            {:db (merge user props)
             :dispatch [:complete-request :update-user]}))

;; -- Toggle follow user @ /api/profiles/:username/follow ---------------------
;;
(reg-event-fx                           ;; usage (dispatch [:toggle-follow-user username])
 :toggle-follow-user                    ;; triggered when user clicks follow/unfollow button on profile page
 (fn-traced [{:keys [db]} [_ username]] ;; username = :username
            {:db         (assoc-in db [:loading :toggle-follow-user] true)
             :http-xhrio {:method          (if (get-in db [:profile :following]) :delete :post) ;; check if we follow if yes DELETE, no POST
                          :uri             (endpoint "profiles" username "follow")              ;; evaluates to "api/profiles/:username/follow"
                          :headers         (auth-header db)                                     ;; get and pass user token obtained during login
                          :format          (json-request-format)                                ;; make sure it's json
                          :response-format (json-response-format {:keywords? true})             ;; json response and all keys to keywords
                          :on-success      [:toggle-follow-user-success]                        ;; trigger toggle-follow-user-success
                          :on-failure      [:api-request-error :login]}}))                      ;; trigger api-request-error with :update-user-success

(reg-event-db ;; usage: (dispatch [:toggle-follow-user-success])
 :toggle-follow-user-success
 (fn-traced [db [_ {profile :profile}]]
            (-> db
                (assoc-in [:loading :toggle-follow-user] false)
                (assoc-in [:profile :following] (:following profile)))))

;; -- Toggle favorite article @ /api/articles/:slug/favorite ------------------
;;
(reg-event-fx                       ;; usage (dispatch [:toggle-favorite-article slug])
 :toggle-favorite-article           ;; triggered when user clicks favorite/unfavorite button on profile page
 (fn-traced [{:keys [db]} [_ slug]] ;; slug = :slug
            {:db         (assoc-in db [:loading :toggle-favorite-article] true)
             :http-xhrio {:method          (if (get-in db [:articles slug :favorited]) :delete :post) ;; check if article is already favorite: yes DELETE, no POST
                          :uri             (endpoint "articles" slug "favorite")                      ;; evaluates to "api/articles/:slug/favorite"
                          :headers         (auth-header db)                                           ;; get and pass user token obtained during login
                          :format          (json-request-format)                                      ;; make sure it's json
                          :response-format (json-response-format {:keywords? true})                   ;; json response and all keys to keywords
                          :on-success      [:toggle-favorite-article-success]                         ;; trigger toggle-favorite-article-success
                          :on-failure      [:api-request-error :login]}}))                            ;; trigger api-request-error with :toggle-favorite-article

(reg-event-db ;; usage: (dispatch [:toggle-favorite-article-success])
 :toggle-favorite-article-success
 (fn-traced [db [_ {article :article}]]
            (let [slug (:slug article)
                  favorited (:favorited article)]
              (-> db
                  (assoc-in [:loading :toggle-favorite-article] false)
                  (assoc-in [:articles slug :favorited] favorited)
                  (assoc-in [:articles slug :favoritesCount] (if favorited
                                                               (:favoritesCount article inc)
                                                               (:favoritesCount article dec)))))))

;; -- Logout ------------------------------------------------------------------
;;
(reg-event-fx ;; usage (dispatch [:logout])
 :logout
 ;; This interceptor, defined above, makes sure
 ;; that we clean up localStorage after logging-out
 ;; the user.
 remove-user-interceptor
 ;; The event handler function removes the user from
 ;; app-state = :db and sets the url to "/".
 (fn-traced [{:keys [db]} _]
            {:db      (dissoc db :user) ;; remove user from db
             :dispatch [:set-active-page {:page :home}]}))

;; -- Request Handlers -----------------------------------------------------------
;;
(reg-event-db
 :complete-request                ;; when we complete a request we need to clean up
 (fn-traced [db [_ request-type]] ;; few things so that our ui is nice and tidy
            (assoc-in db [:loading request-type] false)))

(reg-event-fx
 :api-request-error                                                                         ;; triggered when we get request-error from the server
 (fn-traced [{:keys [db]} [_ request-type response]]                                        ;; destructure to obtain request-type and response
            {:db (assoc-in db [:errors request-type] (get-in response [:response :errors])) ;; save in db so that we can display it to the user
             :dispatch [:complete-request request-type]}))
