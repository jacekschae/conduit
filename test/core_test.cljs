(ns test.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [test.core :as core]))

;; Working on it ...
;;
(deftest one-is-one
  (testing "if one equals one"
    (is (= 1 1))))
