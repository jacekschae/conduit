(ns figwheel.connect.build-client (:require [conduit.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/conduit.core.main (apply js/conduit.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'conduit.core/main' is missing"))), :build-id "client", :websocket-url "ws://localhost:3449/figwheel-ws"})

