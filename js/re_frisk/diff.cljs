(ns re-frisk.diff
  (:require [clojure.set :as set]))

;; clojure.data/diff is hard to work with:
;; (diff {:a [0 1 2]} {:a [0 1]}) => ({:a [nil nil 2]} nil {:a [0 1]})
;; (data/diff {:a [2]} {:a [1]}) => ({:a [2]} {:a [1]} nil)
;; ... so roll our own

(declare diff)

(defn- mv-keys [coll]
  (if (map? coll)
    (keys coll)
    (keep-indexed #(when-not (nil? %2) %1) coll)))

(defn- diff-coll [a b]
  (into {}
        (for [key (set/union (set (mv-keys a)) (set (mv-keys b)))]
          (let [val-a (get a key)
                val-b (get b key)]
            (cond
              (= val-a val-b) nil
              (and val-a val-b) [key (diff val-a val-b)]
              val-a [key {:deleted val-a}]
              val-b [key val-b])))))

(defn- diff-set [a b]
  {:deleted (set/difference a b)
   :added (set/difference b a)})

(defn- diff-rest [a b]
  {:before a :after b})

(defn diff [a b]
  (cond
    (= a b) nil
    (and (map? a) (map? b)) (diff-coll a b)
    (and (vector? a) (vector? b)) (diff-coll a b)
    (and (set? a) (set? b)) (diff-set a b)
    :else (diff-rest a b)))
