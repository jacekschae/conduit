// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = cljs.core.cst$kw$sub;
re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__17023_17033 = cljs.core.seq(cljs.core.deref(re_frame.subs.query__GT_reaction));
var chunk__17024_17034 = null;
var count__17025_17035 = (0);
var i__17026_17036 = (0);
while(true){
if((i__17026_17036 < count__17025_17035)){
var vec__17027_17037 = chunk__17024_17034.cljs$core$IIndexed$_nth$arity$2(null,i__17026_17036);
var k_17038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17027_17037,(0),null);
var rxn_17039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17027_17037,(1),null);
re_frame.interop.dispose_BANG_(rxn_17039);

var G__17040 = seq__17023_17033;
var G__17041 = chunk__17024_17034;
var G__17042 = count__17025_17035;
var G__17043 = (i__17026_17036 + (1));
seq__17023_17033 = G__17040;
chunk__17024_17034 = G__17041;
count__17025_17035 = G__17042;
i__17026_17036 = G__17043;
continue;
} else {
var temp__4657__auto___17044 = cljs.core.seq(seq__17023_17033);
if(temp__4657__auto___17044){
var seq__17023_17045__$1 = temp__4657__auto___17044;
if(cljs.core.chunked_seq_QMARK_(seq__17023_17045__$1)){
var c__9025__auto___17046 = cljs.core.chunk_first(seq__17023_17045__$1);
var G__17047 = cljs.core.chunk_rest(seq__17023_17045__$1);
var G__17048 = c__9025__auto___17046;
var G__17049 = cljs.core.count(c__9025__auto___17046);
var G__17050 = (0);
seq__17023_17033 = G__17047;
chunk__17024_17034 = G__17048;
count__17025_17035 = G__17049;
i__17026_17036 = G__17050;
continue;
} else {
var vec__17030_17051 = cljs.core.first(seq__17023_17045__$1);
var k_17052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030_17051,(0),null);
var rxn_17053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17030_17051,(1),null);
re_frame.interop.dispose_BANG_(rxn_17053);

var G__17054 = cljs.core.next(seq__17023_17045__$1);
var G__17055 = null;
var G__17056 = (0);
var G__17057 = (0);
seq__17023_17033 = G__17054;
chunk__17024_17034 = G__17055;
count__17025_17035 = G__17056;
i__17026_17036 = G__17057;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17058 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_v),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_dispose,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_v,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16629__auto___17073 = re_frame.interop.now();
var duration__16630__auto___17074 = (end__16629__auto___17073 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17059_17075 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17060_17076 = null;
var count__17061_17077 = (0);
var i__17062_17078 = (0);
while(true){
if((i__17062_17078 < count__17061_17077)){
var vec__17063_17079 = chunk__17060_17076.cljs$core$IIndexed$_nth$arity$2(null,i__17062_17078);
var k__16631__auto___17080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063_17079,(0),null);
var cb__16632__auto___17081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063_17079,(1),null);
try{var G__17067_17082 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17074,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17081.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17081.cljs$core$IFn$_invoke$arity$1(G__17067_17082) : cb__16632__auto___17081.call(null,G__17067_17082));
}catch (e17066){if((e17066 instanceof java.lang.Exception)){
var e__16633__auto___17083 = e17066;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17080,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17083], 0));
} else {
throw e17066;

}
}
var G__17084 = seq__17059_17075;
var G__17085 = chunk__17060_17076;
var G__17086 = count__17061_17077;
var G__17087 = (i__17062_17078 + (1));
seq__17059_17075 = G__17084;
chunk__17060_17076 = G__17085;
count__17061_17077 = G__17086;
i__17062_17078 = G__17087;
continue;
} else {
var temp__4657__auto___17088 = cljs.core.seq(seq__17059_17075);
if(temp__4657__auto___17088){
var seq__17059_17089__$1 = temp__4657__auto___17088;
if(cljs.core.chunked_seq_QMARK_(seq__17059_17089__$1)){
var c__9025__auto___17090 = cljs.core.chunk_first(seq__17059_17089__$1);
var G__17091 = cljs.core.chunk_rest(seq__17059_17089__$1);
var G__17092 = c__9025__auto___17090;
var G__17093 = cljs.core.count(c__9025__auto___17090);
var G__17094 = (0);
seq__17059_17075 = G__17091;
chunk__17060_17076 = G__17092;
count__17061_17077 = G__17093;
i__17062_17078 = G__17094;
continue;
} else {
var vec__17068_17095 = cljs.core.first(seq__17059_17089__$1);
var k__16631__auto___17096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068_17095,(0),null);
var cb__16632__auto___17097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068_17095,(1),null);
try{var G__17072_17098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17074,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17097.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17097.cljs$core$IFn$_invoke$arity$1(G__17072_17098) : cb__16632__auto___17097.call(null,G__17072_17098));
}catch (e17071){if((e17071 instanceof java.lang.Exception)){
var e__16633__auto___17099 = e17071;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17096,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17099], 0));
} else {
throw e17071;

}
}
var G__17100 = cljs.core.next(seq__17059_17089__$1);
var G__17101 = null;
var G__17102 = (0);
var G__17103 = (0);
seq__17059_17075 = G__17100;
chunk__17060_17076 = G__17101;
count__17061_17077 = G__17102;
i__17062_17078 = G__17103;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17058;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17104 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(r)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17104;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var G__17106 = arguments.length;
switch (G__17106) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var G__17109 = arguments.length;
switch (G__17109) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17110 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_v,query], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17147 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17147;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17148 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17148;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17149 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17149;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16629__auto___17150 = re_frame.interop.now();
var duration__16630__auto___17151 = (end__16629__auto___17150 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17111_17152 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17112_17153 = null;
var count__17113_17154 = (0);
var i__17114_17155 = (0);
while(true){
if((i__17114_17155 < count__17113_17154)){
var vec__17115_17156 = chunk__17112_17153.cljs$core$IIndexed$_nth$arity$2(null,i__17114_17155);
var k__16631__auto___17157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17115_17156,(0),null);
var cb__16632__auto___17158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17115_17156,(1),null);
try{var G__17119_17159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17151,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17158.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17158.cljs$core$IFn$_invoke$arity$1(G__17119_17159) : cb__16632__auto___17158.call(null,G__17119_17159));
}catch (e17118){if((e17118 instanceof java.lang.Exception)){
var e__16633__auto___17160 = e17118;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17157,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17160], 0));
} else {
throw e17118;

}
}
var G__17161 = seq__17111_17152;
var G__17162 = chunk__17112_17153;
var G__17163 = count__17113_17154;
var G__17164 = (i__17114_17155 + (1));
seq__17111_17152 = G__17161;
chunk__17112_17153 = G__17162;
count__17113_17154 = G__17163;
i__17114_17155 = G__17164;
continue;
} else {
var temp__4657__auto___17165 = cljs.core.seq(seq__17111_17152);
if(temp__4657__auto___17165){
var seq__17111_17166__$1 = temp__4657__auto___17165;
if(cljs.core.chunked_seq_QMARK_(seq__17111_17166__$1)){
var c__9025__auto___17167 = cljs.core.chunk_first(seq__17111_17166__$1);
var G__17168 = cljs.core.chunk_rest(seq__17111_17166__$1);
var G__17169 = c__9025__auto___17167;
var G__17170 = cljs.core.count(c__9025__auto___17167);
var G__17171 = (0);
seq__17111_17152 = G__17168;
chunk__17112_17153 = G__17169;
count__17113_17154 = G__17170;
i__17114_17155 = G__17171;
continue;
} else {
var vec__17120_17172 = cljs.core.first(seq__17111_17166__$1);
var k__16631__auto___17173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17120_17172,(0),null);
var cb__16632__auto___17174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17120_17172,(1),null);
try{var G__17124_17175 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17151,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17174.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17174.cljs$core$IFn$_invoke$arity$1(G__17124_17175) : cb__16632__auto___17174.call(null,G__17124_17175));
}catch (e17123){if((e17123 instanceof java.lang.Exception)){
var e__16633__auto___17176 = e17123;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17173,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17176], 0));
} else {
throw e17123;

}
}
var G__17177 = cljs.core.next(seq__17111_17166__$1);
var G__17178 = null;
var G__17179 = (0);
var G__17180 = (0);
seq__17111_17152 = G__17177;
chunk__17112_17153 = G__17178;
count__17113_17154 = G__17179;
i__17114_17155 = G__17180;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17110;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17181 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17181;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17182 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17182;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17183 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17183;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,query) : handler_fn.call(null,re_frame.db.app_db,query)));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17125 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_create,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query,cljs.core.cst$kw$dyn_DASH_v,dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17184 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17184;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17185 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17185;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___17186 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___17186)){
var not_reactive_17187 = temp__4657__auto___17186;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_17187], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17188 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17188;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_17125){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_17125))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_17125){
return (function (){
var G__17140 = re_frame.db.app_db;
var G__17141 = query;
var G__17142 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__17140,G__17141,G__17142) : handler_fn.call(null,G__17140,G__17141,G__17142));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_17125))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_17125){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_17125))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16629__auto___17189 = re_frame.interop.now();
var duration__16630__auto___17190 = (end__16629__auto___17189 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17126_17191 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17127_17192 = null;
var count__17128_17193 = (0);
var i__17129_17194 = (0);
while(true){
if((i__17129_17194 < count__17128_17193)){
var vec__17130_17195 = chunk__17127_17192.cljs$core$IIndexed$_nth$arity$2(null,i__17129_17194);
var k__16631__auto___17196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17130_17195,(0),null);
var cb__16632__auto___17197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17130_17195,(1),null);
try{var G__17134_17198 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17190,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17197.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17197.cljs$core$IFn$_invoke$arity$1(G__17134_17198) : cb__16632__auto___17197.call(null,G__17134_17198));
}catch (e17133){if((e17133 instanceof java.lang.Exception)){
var e__16633__auto___17199 = e17133;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17196,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17199], 0));
} else {
throw e17133;

}
}
var G__17200 = seq__17126_17191;
var G__17201 = chunk__17127_17192;
var G__17202 = count__17128_17193;
var G__17203 = (i__17129_17194 + (1));
seq__17126_17191 = G__17200;
chunk__17127_17192 = G__17201;
count__17128_17193 = G__17202;
i__17129_17194 = G__17203;
continue;
} else {
var temp__4657__auto___17204 = cljs.core.seq(seq__17126_17191);
if(temp__4657__auto___17204){
var seq__17126_17205__$1 = temp__4657__auto___17204;
if(cljs.core.chunked_seq_QMARK_(seq__17126_17205__$1)){
var c__9025__auto___17206 = cljs.core.chunk_first(seq__17126_17205__$1);
var G__17207 = cljs.core.chunk_rest(seq__17126_17205__$1);
var G__17208 = c__9025__auto___17206;
var G__17209 = cljs.core.count(c__9025__auto___17206);
var G__17210 = (0);
seq__17126_17191 = G__17207;
chunk__17127_17192 = G__17208;
count__17128_17193 = G__17209;
i__17129_17194 = G__17210;
continue;
} else {
var vec__17135_17211 = cljs.core.first(seq__17126_17205__$1);
var k__16631__auto___17212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17135_17211,(0),null);
var cb__16632__auto___17213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17135_17211,(1),null);
try{var G__17139_17214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17190,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17213.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17213.cljs$core$IFn$_invoke$arity$1(G__17139_17214) : cb__16632__auto___17213.call(null,G__17139_17214));
}catch (e17138){if((e17138 instanceof java.lang.Exception)){
var e__16633__auto___17215 = e17138;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17212,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17215], 0));
} else {
throw e17138;

}
}
var G__17216 = cljs.core.next(seq__17126_17205__$1);
var G__17217 = null;
var G__17218 = (0);
var G__17219 = (0);
seq__17126_17191 = G__17216;
chunk__17127_17192 = G__17217;
count__17128_17193 = G__17218;
i__17129_17194 = G__17219;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17125;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17220 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cached_QMARK_,true,cljs.core.cst$kw$reaction,re_frame.interop.reagent_id(cached)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17220;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector(query);
var handler_fn = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17221 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cached_QMARK_,false], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17221;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___17222 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___17222)){
var not_reactive_17223 = temp__4657__auto___17222;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_17223], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17224 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17224;

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
var G__17143 = re_frame.db.app_db;
var G__17144 = query;
var G__17145 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__17143,G__17144,G__17145) : handler_fn.call(null,G__17143,G__17144,G__17145));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return(query,dynv,re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__17225){
var vec__17226 = p__17225;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17226,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17229 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input_DASH_signals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.interop.reagent_id,signals__$1)], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17229;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__9353__auto__ = [];
var len__9346__auto___17276 = arguments.length;
var i__9347__auto___17277 = (0);
while(true){
if((i__9347__auto___17277 < len__9346__auto___17276)){
args__9353__auto__.push((arguments[i__9347__auto___17277]));

var G__17278 = (i__9347__auto___17277 + (1));
i__9347__auto___17277 = G__17278;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((1) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9354__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__17232 = cljs.core.count(input_args);
switch (G__17232) {
case (0):
return ((function (G__17232,computation_fn,input_args,err_header){
return (function() {
var G__17280 = null;
var G__17280__1 = (function (_){
return re_frame.db.app_db;
});
var G__17280__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__17280 = function(_,___$1){
switch(arguments.length){
case 1:
return G__17280__1.call(this,_);
case 2:
return G__17280__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__17280.cljs$core$IFn$_invoke$arity$1 = G__17280__1;
G__17280.cljs$core$IFn$_invoke$arity$2 = G__17280__2;
return G__17280;
})()
;})(G__17232,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__17233 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17233,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17233,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_LT__DASH_,marker)){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__17233,marker,vec,G__17232,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__17233,marker,vec,G__17232,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_LT__DASH_,null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__17232,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__17232,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17236 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__17251 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17252 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__17251,G__17252) : computation_fn.call(null,G__17251,G__17252));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17281 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17281;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16629__auto___17282 = re_frame.interop.now();
var duration__16630__auto___17283 = (end__16629__auto___17282 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17237_17284 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17238_17285 = null;
var count__17239_17286 = (0);
var i__17240_17287 = (0);
while(true){
if((i__17240_17287 < count__17239_17286)){
var vec__17241_17288 = chunk__17238_17285.cljs$core$IIndexed$_nth$arity$2(null,i__17240_17287);
var k__16631__auto___17289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17241_17288,(0),null);
var cb__16632__auto___17290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17241_17288,(1),null);
try{var G__17245_17291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17283,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17290.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17290.cljs$core$IFn$_invoke$arity$1(G__17245_17291) : cb__16632__auto___17290.call(null,G__17245_17291));
}catch (e17244){if((e17244 instanceof java.lang.Exception)){
var e__16633__auto___17292 = e17244;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17289,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17292], 0));
} else {
throw e17244;

}
}
var G__17293 = seq__17237_17284;
var G__17294 = chunk__17238_17285;
var G__17295 = count__17239_17286;
var G__17296 = (i__17240_17287 + (1));
seq__17237_17284 = G__17293;
chunk__17238_17285 = G__17294;
count__17239_17286 = G__17295;
i__17240_17287 = G__17296;
continue;
} else {
var temp__4657__auto___17297 = cljs.core.seq(seq__17237_17284);
if(temp__4657__auto___17297){
var seq__17237_17298__$1 = temp__4657__auto___17297;
if(cljs.core.chunked_seq_QMARK_(seq__17237_17298__$1)){
var c__9025__auto___17299 = cljs.core.chunk_first(seq__17237_17298__$1);
var G__17300 = cljs.core.chunk_rest(seq__17237_17298__$1);
var G__17301 = c__9025__auto___17299;
var G__17302 = cljs.core.count(c__9025__auto___17299);
var G__17303 = (0);
seq__17237_17284 = G__17300;
chunk__17238_17285 = G__17301;
count__17239_17286 = G__17302;
i__17240_17287 = G__17303;
continue;
} else {
var vec__17246_17304 = cljs.core.first(seq__17237_17298__$1);
var k__16631__auto___17305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246_17304,(0),null);
var cb__16632__auto___17306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17246_17304,(1),null);
try{var G__17250_17307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17283,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17306.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17306.cljs$core$IFn$_invoke$arity$1(G__17250_17307) : cb__16632__auto___17306.call(null,G__17250_17307));
}catch (e17249){if((e17249 instanceof java.lang.Exception)){
var e__16633__auto___17308 = e17249;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17305,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17308], 0));
} else {
throw e17249;

}
}
var G__17309 = cljs.core.next(seq__17237_17298__$1);
var G__17310 = null;
var G__17311 = (0);
var G__17312 = (0);
seq__17237_17284 = G__17309;
chunk__17238_17285 = G__17310;
count__17239_17286 = G__17311;
i__17240_17287 = G__17312;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17236;
}} else {
var subscription = (function (){var G__17253 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17254 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__17253,G__17254) : computation_fn.call(null,G__17253,G__17254));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17313 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17313;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_17255 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$operation,re_frame.utils.first_in_vector(query_vec),cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$sub_SLASH_run,cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_v,query_vec,cljs.core.cst$kw$dyn_DASH_v,dyn_vec,cljs.core.cst$kw$reaction,cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__17270 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17271 = query_vec;
var G__17272 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__17270,G__17271,G__17272) : computation_fn.call(null,G__17270,G__17271,G__17272));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17314 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17314;

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16629__auto___17315 = re_frame.interop.now();
var duration__16630__auto___17316 = (end__16629__auto___17315 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__17256_17317 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__17257_17318 = null;
var count__17258_17319 = (0);
var i__17259_17320 = (0);
while(true){
if((i__17259_17320 < count__17258_17319)){
var vec__17260_17321 = chunk__17257_17318.cljs$core$IIndexed$_nth$arity$2(null,i__17259_17320);
var k__16631__auto___17322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260_17321,(0),null);
var cb__16632__auto___17323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260_17321,(1),null);
try{var G__17264_17324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17323.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17323.cljs$core$IFn$_invoke$arity$1(G__17264_17324) : cb__16632__auto___17323.call(null,G__17264_17324));
}catch (e17263){if((e17263 instanceof java.lang.Exception)){
var e__16633__auto___17325 = e17263;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17322,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17325], 0));
} else {
throw e17263;

}
}
var G__17326 = seq__17256_17317;
var G__17327 = chunk__17257_17318;
var G__17328 = count__17258_17319;
var G__17329 = (i__17259_17320 + (1));
seq__17256_17317 = G__17326;
chunk__17257_17318 = G__17327;
count__17258_17319 = G__17328;
i__17259_17320 = G__17329;
continue;
} else {
var temp__4657__auto___17330 = cljs.core.seq(seq__17256_17317);
if(temp__4657__auto___17330){
var seq__17256_17331__$1 = temp__4657__auto___17330;
if(cljs.core.chunked_seq_QMARK_(seq__17256_17331__$1)){
var c__9025__auto___17332 = cljs.core.chunk_first(seq__17256_17331__$1);
var G__17333 = cljs.core.chunk_rest(seq__17256_17331__$1);
var G__17334 = c__9025__auto___17332;
var G__17335 = cljs.core.count(c__9025__auto___17332);
var G__17336 = (0);
seq__17256_17317 = G__17333;
chunk__17257_17318 = G__17334;
count__17258_17319 = G__17335;
i__17259_17320 = G__17336;
continue;
} else {
var vec__17265_17337 = cljs.core.first(seq__17256_17331__$1);
var k__16631__auto___17338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17265_17337,(0),null);
var cb__16632__auto___17339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17265_17337,(1),null);
try{var G__17269_17340 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__16630__auto___17316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__16632__auto___17339.cljs$core$IFn$_invoke$arity$1 ? cb__16632__auto___17339.cljs$core$IFn$_invoke$arity$1(G__17269_17340) : cb__16632__auto___17339.call(null,G__17269_17340));
}catch (e17268){if((e17268 instanceof java.lang.Exception)){
var e__16633__auto___17341 = e17268;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__16631__auto___17338,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16633__auto___17341], 0));
} else {
throw e17268;

}
}
var G__17342 = cljs.core.next(seq__17256_17331__$1);
var G__17343 = null;
var G__17344 = (0);
var G__17345 = (0);
seq__17256_17317 = G__17342;
chunk__17257_17318 = G__17343;
count__17258_17319 = G__17344;
i__17259_17320 = G__17345;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_17255;
}} else {
var subscription = (function (){var G__17273 = re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__17274 = query_vec;
var G__17275 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__17273,G__17274,G__17275) : computation_fn.call(null,G__17273,G__17274,G__17275));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16634__auto___17346 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,subscription], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__16634__auto___17346;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,re_frame.interop.reagent_id(reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq17230){
var G__17231 = cljs.core.first(seq17230);
var seq17230__$1 = cljs.core.next(seq17230);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__17231,seq17230__$1);
});

