// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
re_frame.db.app_db = re_frame.interop.ratom(cljs.core.PersistentArrayMap.EMPTY);
