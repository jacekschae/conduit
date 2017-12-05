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
var make_chain = (function (p1__19122_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__19122_SHARP_));
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

var temp__4657__auto___19123 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___19123)){
var not_i_19124 = temp__4657__auto___19123;
if(cljs.core.fn_QMARK_(not_i_19124)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_19124], 0));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_19124], 0));
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
var _STAR_handling_STAR_19125 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19126 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,event_id,cljs.core.cst$kw$op_DASH_type,re_frame.events.kind,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$event,event_v], null)], null));

try{try{return re_frame.interceptor.execute(event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19070__auto___19141 = re_frame.interop.now();
var duration__19071__auto___19142 = (end__19070__auto___19141 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19127_19143 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19128_19144 = null;
var count__19129_19145 = (0);
var i__19130_19146 = (0);
while(true){
if((i__19130_19146 < count__19129_19145)){
var vec__19131_19147 = chunk__19128_19144.cljs$core$IIndexed$_nth$arity$2(null,i__19130_19146);
var k__19072__auto___19148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131_19147,(0),null);
var cb__19073__auto___19149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19131_19147,(1),null);
try{var G__19135_19150 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19071__auto___19142,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19073__auto___19149.cljs$core$IFn$_invoke$arity$1 ? cb__19073__auto___19149.cljs$core$IFn$_invoke$arity$1(G__19135_19150) : cb__19073__auto___19149.call(null,G__19135_19150));
}catch (e19134){if((e19134 instanceof java.lang.Exception)){
var e__19074__auto___19151 = e19134;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__19072__auto___19148,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19074__auto___19151], 0));
} else {
throw e19134;

}
}
var G__19152 = seq__19127_19143;
var G__19153 = chunk__19128_19144;
var G__19154 = count__19129_19145;
var G__19155 = (i__19130_19146 + (1));
seq__19127_19143 = G__19152;
chunk__19128_19144 = G__19153;
count__19129_19145 = G__19154;
i__19130_19146 = G__19155;
continue;
} else {
var temp__4657__auto___19156 = cljs.core.seq(seq__19127_19143);
if(temp__4657__auto___19156){
var seq__19127_19157__$1 = temp__4657__auto___19156;
if(cljs.core.chunked_seq_QMARK_(seq__19127_19157__$1)){
var c__8618__auto___19158 = cljs.core.chunk_first(seq__19127_19157__$1);
var G__19159 = cljs.core.chunk_rest(seq__19127_19157__$1);
var G__19160 = c__8618__auto___19158;
var G__19161 = cljs.core.count(c__8618__auto___19158);
var G__19162 = (0);
seq__19127_19143 = G__19159;
chunk__19128_19144 = G__19160;
count__19129_19145 = G__19161;
i__19130_19146 = G__19162;
continue;
} else {
var vec__19136_19163 = cljs.core.first(seq__19127_19157__$1);
var k__19072__auto___19164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136_19163,(0),null);
var cb__19073__auto___19165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136_19163,(1),null);
try{var G__19140_19166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19071__auto___19142,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19073__auto___19165.cljs$core$IFn$_invoke$arity$1 ? cb__19073__auto___19165.cljs$core$IFn$_invoke$arity$1(G__19140_19166) : cb__19073__auto___19165.call(null,G__19140_19166));
}catch (e19139){if((e19139 instanceof java.lang.Exception)){
var e__19074__auto___19167 = e19139;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__19072__auto___19164,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19074__auto___19167], 0));
} else {
throw e19139;

}
}
var G__19168 = cljs.core.next(seq__19127_19157__$1);
var G__19169 = null;
var G__19170 = (0);
var G__19171 = (0);
seq__19127_19143 = G__19168;
chunk__19128_19144 = G__19169;
count__19129_19145 = G__19170;
i__19130_19146 = G__19171;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19126;
}} else {
return re_frame.interceptor.execute(event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_19125;
}}
} else {
return null;
}
});
