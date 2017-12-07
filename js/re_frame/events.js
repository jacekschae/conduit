// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = cljs.core.cst$kw$event;
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__16679_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__16679_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__4657__auto___16680 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___16680)){
var not_i_16681 = temp__4657__auto___16680;
if(cljs.core.fn_QMARK_(not_i_16681)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_16681], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_16681], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler(re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils(id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector(event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_16682 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_16683 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16629__auto___16698 = re_frame.interop.now();
var duration__16630__auto___16699 = (end__16629__auto___16698 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__16684_16700 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16685_16701 = null;
var count__16686_16702 = (0);
var i__16687_16703 = (0);
while(true){
if((i__16687_16703 < count__16686_16702)){
var vec__16688_16704 = chunk__16685_16701.cljs$core$IIndexed$_nth$arity$2(null,i__16687_16703);
var k__16631__auto___16705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688_16704,(0),null);
var cb__16632__auto___16706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688_16704,(1),null);
try{var G__16692_16707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___16699,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___16706.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___16706.cljs$core$IFn$_invoke$arity$1(G__16692_16707) : cb__16632__auto___16706.call(null,G__16692_16707));
}catch (e16691){if((e16691 instanceof java.lang.Exception)){
var e__16633__auto___16708 = e16691;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___16705,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___16708], 0));
} else {
throw e16691;

}
}
var G__16709 = seq__16684_16700;
var G__16710 = chunk__16685_16701;
var G__16711 = count__16686_16702;
var G__16712 = (i__16687_16703 + (1));
seq__16684_16700 = G__16709;
chunk__16685_16701 = G__16710;
count__16686_16702 = G__16711;
i__16687_16703 = G__16712;
continue;
} else {
var temp__4657__auto___16713 = cljs.core.seq(seq__16684_16700);
if(temp__4657__auto___16713){
var seq__16684_16714__$1 = temp__4657__auto___16713;
if(cljs.core.chunked_seq_QMARK_(seq__16684_16714__$1)){
var c__9025__auto___16715 = cljs.core.chunk_first(seq__16684_16714__$1);
var G__16716 = cljs.core.chunk_rest(seq__16684_16714__$1);
var G__16717 = c__9025__auto___16715;
var G__16718 = cljs.core.count(c__9025__auto___16715);
var G__16719 = (0);
seq__16684_16700 = G__16716;
chunk__16685_16701 = G__16717;
count__16686_16702 = G__16718;
i__16687_16703 = G__16719;
continue;
} else {
var vec__16693_16720 = cljs.core.first(seq__16684_16714__$1);
var k__16631__auto___16721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693_16720,(0),null);
var cb__16632__auto___16722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16693_16720,(1),null);
try{var G__16697_16723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___16699,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___16722.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___16722.cljs$core$IFn$_invoke$arity$1(G__16697_16723) : cb__16632__auto___16722.call(null,G__16697_16723));
}catch (e16696){if((e16696 instanceof java.lang.Exception)){
var e__16633__auto___16724 = e16696;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___16721,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___16724], 0));
} else {
throw e16696;

}
}
var G__16725 = cljs.core.next(seq__16684_16714__$1);
var G__16726 = null;
var G__16727 = (0);
var G__16728 = (0);
seq__16684_16700 = G__16725;
chunk__16685_16701 = G__16726;
count__16686_16702 = G__16727;
i__16687_16703 = G__16728;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_16683;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_16682;
}}
} else {
return null;
}
});
