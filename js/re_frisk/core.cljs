(ns re-frisk.core
  (:require [reagent.core :as reagent]
            [reagent.ratom :refer-macros [reaction]]
            [re-frame.core :refer [subscribe] :as re-frame]
            [re-frame.db :refer [app-db]]
            [re-frame.subs :refer [query->reaction]]
            [re-frisk.data :as data]
            [re-frisk.devtool :as devtool]
            [re-frisk.diff :as diff]))

(defn- app-db-diff []
  (diff/diff @data/app-db-prev-event @(:app-db @data/re-frame-data)))

(defn post-event-callback [value]
  (let [cntx (get (:contexts @data/deb-data) (first value))
        indx (count @data/re-frame-events)
        diff (app-db-diff)]
    (reset! data/app-db-prev-event @(:app-db @data/re-frame-data))
    (swap! data/re-frame-events conj
           (assoc (or cntx {}) :event value :app-db-diff diff :indx indx))))

(defn re-frame-sub [& rest]
  (reset! (:id-handler @data/re-frame-data)
          (into {} (map #(hash-map (first %) @(second %))
                        (remove #(or (= (first (ffirst %)) ::db)
                                     (nil? (second %)))
                                @query->reaction)))))

;;RENDER

(defn- render-re-frisk [params]
  (let [div (.createElement js/document "div")]
    (.appendChild (.-body js/document) div)

    (set! js/onbeforeunload
          #(when (:win @data/deb-data)
             ;;TODO https://github.com/flexsurfer/re-frisk/issues/28
             (.alert (:win @data/deb-data) "Application has been closed or refreshed. Debugger has been stopped!")))

    (reagent/render [devtool/re-frisk-shell params] div)))


;;ENTRY

(defn enable-re-frisk! [& [opts]]
  (when-not @data/initialized
    (reset! data/initialized true)

    (if re-frame.core/reg-sub
      (re-frame.core/reg-sub ::db (fn [db _] db))
      (re-frame.core/register-sub ::db (fn [db _] (reaction @db))))

    (reset! data/re-frame-data {:app-db (subscribe [::db])
                                :id-handler (reagent/atom "not connected")})

    (swap! data/deb-data assoc :prefs opts)

    (when-not (= (:events? opts) false)
      (re-frame/add-post-event-callback post-event-callback))

    (when query->reaction
      (add-watch app-db :re-frisk-watcher re-frame-sub)
      (re-frame-sub))

    (js/setTimeout render-re-frisk 100 opts)))

;;TODO Outdated (Not supported)

(defn enable-frisk! [& params]
  (when-not @data/initialized
    (do
      (reset! data/initialized true)
      (js/setTimeout render-re-frisk 100 (first params)))))

(defn add-data [key data]
  (swap! data/re-frame-data assoc key data))

(defn add-in-data [keys data]
  (swap! data/re-frame-data assoc-in keys data))

(def watch-context
  (re-frame.core/->interceptor
    :id :re-frisk-watch-context
    :before (fn [context]
              (swap! data/deb-data assoc-in [:contexts (-> context :coeffects :event first) :before] context)
              context)))

(defn reg-view [view subs events]
  (when (:app-db @data/re-frame-data)
    (do
      (swap! data/re-frame-data assoc-in [:views view :events] (set events))
      (swap! data/re-frame-data assoc-in [:views view :subs] (into {} (map #(hash-map % (subscribe [%])) subs)))
      (doseq [s subs]
        (swap! data/re-frame-data assoc-in [:subs s] (subscribe [s]))))))

(defn unmount-view [view]
  (when (:app-db @data/re-frame-data)
    (swap! data/re-frame-data update-in [:views] dissoc view)))

((or re-frame.core/reg-event-db re-frame.core/register-handler)
 :re-frisk/update-db (fn [_ [_ value]] value))

(comment (reg-view) (unmount-view))