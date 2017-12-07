// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,console.log.bind(console),cljs.core.cst$kw$warn,console.warn.bind(console),cljs.core.cst$kw$error,console.error.bind(console),cljs.core.cst$kw$group,(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),cljs.core.cst$kw$groupEnd,(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__9353__auto__ = [];
var len__9346__auto___16178 = arguments.length;
var i__9347__auto___16179 = (0);
while(true){
if((i__9347__auto___16179 < len__9346__auto___16178)){
args__9353__auto__.push((arguments[i__9347__auto___16179]));

var G__16180 = (i__9347__auto___16179 + (1));
i__9347__auto___16179 = G__16180;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((1) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9354__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__16177 = cljs.core.deref(re_frame.loggers.loggers);
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__16177) : level.call(null,G__16177));
})(),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq16175){
var G__16176 = cljs.core.first(seq16175);
var seq16175__$1 = cljs.core.next(seq16175);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__16176,seq16175__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by re-frame.
 */
re_frame.loggers.get_loggers = (function re_frame$loggers$get_loggers(){
return cljs.core.deref(re_frame.loggers.loggers);
});
