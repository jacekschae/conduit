(ns test.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [test.core-test]))

(doo-tests 'test.core-test)
