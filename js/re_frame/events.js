// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
var make_chain = (function (p1__16244_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__16244_SHARP_));
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

var temp__4657__auto___16245 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___16245)){
var not_i_16246 = temp__4657__auto___16245;
if(cljs.core.fn_QMARK_(not_i_16246)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_16246], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_16246], 0));
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
var _STAR_handling_STAR_16247 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_16248 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16192__auto___16263 = re_frame.interop.now();
var duration__16193__auto___16264 = (end__16192__auto___16263 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__16249_16265 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16250_16266 = null;
var count__16251_16267 = (0);
var i__16252_16268 = (0);
while(true){
if((i__16252_16268 < count__16251_16267)){
var vec__16253_16269 = chunk__16250_16266.cljs$core$IIndexed$_nth$arity$2(null,i__16252_16268);
var k__16194__auto___16270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253_16269,(0),null);
var cb__16195__auto___16271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16253_16269,(1),null);
try{var G__16257_16272 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16193__auto___16264,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16195__auto___16271.cljs$core$IFn$_invoke$arity$1 ? cb__16195__auto___16271.cljs$core$IFn$_invoke$arity$1(G__16257_16272) : cb__16195__auto___16271.call(null,G__16257_16272));
}catch (e16256){if((e16256 instanceof java.lang.Exception)){
var e__16196__auto___16273 = e16256;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16194__auto___16270,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16196__auto___16273], 0));
} else {
throw e16256;

}
}
var G__16274 = seq__16249_16265;
var G__16275 = chunk__16250_16266;
var G__16276 = count__16251_16267;
var G__16277 = (i__16252_16268 + (1));
seq__16249_16265 = G__16274;
chunk__16250_16266 = G__16275;
count__16251_16267 = G__16276;
i__16252_16268 = G__16277;
continue;
} else {
var temp__4657__auto___16278 = cljs.core.seq(seq__16249_16265);
if(temp__4657__auto___16278){
var seq__16249_16279__$1 = temp__4657__auto___16278;
if(cljs.core.chunked_seq_QMARK_(seq__16249_16279__$1)){
var c__8618__auto___16280 = cljs.core.chunk_first(seq__16249_16279__$1);
var G__16281 = cljs.core.chunk_rest(seq__16249_16279__$1);
var G__16282 = c__8618__auto___16280;
var G__16283 = cljs.core.count(c__8618__auto___16280);
var G__16284 = (0);
seq__16249_16265 = G__16281;
chunk__16250_16266 = G__16282;
count__16251_16267 = G__16283;
i__16252_16268 = G__16284;
continue;
} else {
var vec__16258_16285 = cljs.core.first(seq__16249_16279__$1);
var k__16194__auto___16286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16258_16285,(0),null);
var cb__16195__auto___16287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16258_16285,(1),null);
try{var G__16262_16288 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16193__auto___16264,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16195__auto___16287.cljs$core$IFn$_invoke$arity$1 ? cb__16195__auto___16287.cljs$core$IFn$_invoke$arity$1(G__16262_16288) : cb__16195__auto___16287.call(null,G__16262_16288));
}catch (e16261){if((e16261 instanceof java.lang.Exception)){
var e__16196__auto___16289 = e16261;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16194__auto___16286,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16196__auto___16289], 0));
} else {
throw e16261;

}
}
var G__16290 = cljs.core.next(seq__16249_16279__$1);
var G__16291 = null;
var G__16292 = (0);
var G__16293 = (0);
seq__16249_16265 = G__16290;
chunk__16250_16266 = G__16291;
count__16251_16267 = G__16292;
i__16252_16268 = G__16293;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_16248;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_16247;
}}
} else {
return null;
}
});
