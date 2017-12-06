(ns re-frisk-shell.filter-parser
  (:require [cljs.tools.reader.reader-types
             :refer [string-push-back-reader peek-char read-char]]
            [cljs.tools.reader :as reader]
            [clojure.string :as str]))

(defn- read-all [rdr]
  (case (peek-char rdr)
    nil '()
    (cons (read-char rdr) (read-all rdr))))

;; like reader/read-string, but returns unread portion of the string too
(defn- read-string' [s]
  (let [sr (string-push-back-reader s)
        val (reader/read sr)
        rest (str/join (read-all sr))]
    {:val val :rest rest}))

(defn- parse-freeform [s]
  (let [[prefix rest] (str/split s #"\s+" 2)]
    {:val {:free prefix} :rest (or rest "")}))

(defn- parse-clojure-expr [s]
  (try
    (let [{:keys [val rest] :as foo} (read-string' s)]
      {:val {:expr val} :rest rest})
    (catch :default _ (parse-freeform s))))

(defn- parse-clojure-string [s]
  (try
    (let [{val :val rest :rest} (read-string' s)]
      {:val {:expr val} :rest rest})
    (catch :default _
      ;; If a string cannot be fully parsed, mark it as "unfinished"
      ;; to do the prefix match later: "abc will match "abc" and "abcde"
      (let [[prefix rest] (str/split s #"\s+" 2)
            prefix (str/replace prefix #"^\"" "")] ; Kill " at the beginning
        {:val {:string-prefix prefix} :rest (or rest "")}))))

(defn- parse-part [s]
  (case (first s)
    ;; If it looks like a Clojure literal, parse it as such
    ("[" "(" "{" "#" "\\" "'" ":") (parse-clojure-expr s)
    ;; If it looks like a string, parse it as a string (relaxed)
    "\"" (parse-clojure-string s)
    ;; Otherwise it's a freeform
    (parse-freeform s)))

(defn- parse' [s]
  (let [s (str/trim s)
        ;; Remove outer [] of the expression, if any
        s (str/replace s #"^\[(.*)\]$" "$1")]
    (if (= s "") '()
        (let [{val :val rest :rest} (parse-part s)]
          (cons val (parse' rest))))))

(defn parse [s]
  (into [] (parse' s)))
