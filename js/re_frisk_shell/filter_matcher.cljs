(ns re-frisk-shell.filter-matcher
  (:require [clojure.string :as str]))

(defn- match-expr [f p]
  (= f p))

(defn- match-string-prefix [f p]
  (and (string? p) (str/starts-with? p f)))

(defn- match-free [f p]
  (str/includes? (str p) f))

(defn- match-value [f p]
  (cond (contains? f :expr) (match-expr (:expr f) p)
        (contains? f :string-prefix) (match-string-prefix (:string-prefix f) p)
        (contains? f :free) (match-free (:free f) p)
        :else (throw (js/Error. (str "Unknown kind of filter-path: " f)))))

(defn match [filter path]
  (cond (empty? filter) nil
        (empty? path) nil
        (= (count filter) 1) (match-value (first filter) (last path))
        :else (if (match-value (first filter) (first path))
                (recur (rest filter) (rest path))
                (recur filter (rest path)))))
