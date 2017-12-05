(ns day8.re-frame.http-fx
  (:require
    [goog.net.ErrorCode :as errors]
    [re-frame.core :refer [reg-fx dispatch console]]
    [ajax.core :as ajax]
    #_[cljs.spec :as s]))

;; I provide the :http-xhrio effect handler leveraging cljs-ajax lib
;; see API docs https://github.com/JulianBirch/cljs-ajax
;; Note we use the ajax-request.
;;
;; Deviation from cljs-ajax options in request
;; :handler       - not supported, see :on-success and :on-failure
;; :on-success    - event vector dispatched with result
;; :on-failure    - event vector dispatched with result
;;
;; NOTE: if you nee tokens or other values for your handlers,
;;       provide them in the on-success and on-failure event e.g.
;;       [:success-event "my-token"] your handler will get event-v
;;       [:success-event "my-token" result]


(defn ajax-xhrio-handler
  "ajax-request only provides a single handler for success and errors"
  [on-success on-failure xhrio [success? response]]
  ; see http://docs.closure-library.googlecode.com/git/class_goog_net_XhrIo.html
  (if success?
    (on-success response)
    (let [details (merge
                    {:uri             (.getLastUri xhrio)
                     :last-method     (.-lastMethod_ xhrio)
                     :last-error      (.getLastError xhrio)
                     :last-error-code (.getLastErrorCode xhrio)
                     :debug-message   (-> xhrio .getLastErrorCode (errors/getDebugMessage))}
                    response)]
      (on-failure details))))


(defn request->xhrio-options
  [{:as   request
    :keys [on-success on-failure]
    :or   {on-success      [:http-no-on-success]
           on-failure      [:http-no-on-failure]}}]
  ; wrap events in cljs-ajax callback
  (let [api (new js/goog.net.XhrIo)]
  (-> request
      (assoc
        :api     api
        :handler (partial ajax-xhrio-handler
                          #(dispatch (conj on-success %))
                          #(dispatch (conj on-failure %))
                          api))
      (dissoc :on-success :on-failure))))

;; Specs commented out until ClojureScript has a stable release of spec.
;
;(s/def ::method keyword?)
;(s/def ::uri string?)
;(s/def ::response-format (s/keys :req-un [::description ::read ::content-type]))
;(s/def ::format (s/keys :req-un [::write ::content-type]))
;(s/def ::timeout nat-int?)
;(s/def ::params any?)
;(s/def ::headers map?)
;(s/def ::with-credentials boolean?)
;
;(s/def ::on-success vector)
;(s/def ::on-failure vector)
;
;(s/def ::request-map (s/and (s/keys :req-un [::method ::uri ::response-format ::on-success ::on-failure]
;                                    :opt-un [::format ::timeout ::params ::headers ::with-credentials])
;                            (fn [m] (if (contains? m :params)
;                                      (contains? m :format)
;                                      true))))
;
;(s/def ::sequential-or-map (s/or :request-map ::request-map :seq-request-maps (s/coll-of ::request-map
;                                                                                         :kind sequential?
;                                                                                         :into [])))

(defn http-effect
  [request]
  #_(when-not (s/valid? ::sequential-or-map request)
      (throw (ex-info "http-xhrio fx: spec error" (s/explain-data ::sequential-or-map request))))
  (let [#_ #_ [conform-val v] (s/conform ::sequential-or-map request)
        #_ #_ seq-request-maps (if (= :seq-request-maps conform-val) v [v])
        seq-request-maps (if (sequential? request) request [request])]
    (doseq [request seq-request-maps]
      (-> request request->xhrio-options ajax/ajax-request))))

(reg-fx :http-xhrio http-effect)
