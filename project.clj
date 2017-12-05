(defproject conduit "0.1.0-SNAPSHOT"
            :dependencies [[org.clojure/clojure "1.8.0"]
                           [org.clojure/clojurescript "1.9.908"]
                           [proto-repl "0.3.1"]
                           [reagent "0.7.0"]
                           [re-frame "0.10.2"]
                           [cljs-ajax "0.5.8"]
                           [day8.re-frame/http-fx "0.1.4"]
                           [binaryage/devtools "0.9.4"]
                           [secretary "1.2.3"]
                           [bidi "2.1.2"]
                           [com.andrewmcveigh/cljs-time "0.5.2"]
                           [kibu/pushy "0.3.8"]
                           [re-frisk "0.5.2"]]

            :jvm-opts ["--add-modules" "java.xml.bind"]

            :plugins [[lein-cljsbuild "1.1.5"]
                      [lein-figwheel  "0.5.13"]]

            :hooks [leiningen.cljsbuild]

            :aliases {"dev" ["do" "clean" ["figwheel"]]}

            :profiles {:dev  {:cljsbuild
                              {:builds {:client {:compiler {:asset-path           "js"
                                                            :optimizations        :none
                                                            :source-map           true
                                                            :source-map-timestamp true
                                                            :preloads             [re-frisk.preload]
                                                            :main                 "conduit.core"}
                                                 :figwheel {:on-jsload            "conduit.core/main"}}}}}

                       :prod {:cljsbuild
                              {:builds {:client {:compiler {:optimizations :advanced
                                                            :elide-asserts true
                                                            :pretty-print  false}}}}}}
            :figwheel {:server-port 3449
                       :repl        true}

            :clean-targets ^{:protect false} ["resources/public/js" "target"]

            :cljsbuild {:builds {:client {:source-paths ["src/conduit"]
                                          :compiler     {:output-dir "resources/public/js"
                                                         :output-to  "resources/public/js/client.js"}}}})
