goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34473){
var map__34474 = p__34473;
var map__34474__$1 = ((((!((map__34474 == null)))?(((((map__34474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34474):map__34474);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__34476_34490 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__34477_34491 = null;
var count__34478_34492 = (0);
var i__34479_34493 = (0);
while(true){
if((i__34479_34493 < count__34478_34492)){
var vec__34480_34494 = chunk__34477_34491.cljs$core$IIndexed$_nth$arity$2(null,i__34479_34493);
var k_34495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34480_34494,(0),null);
var cb_34496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34480_34494,(1),null);
try{var G__34484_34497 = cljs.core.deref(re_frame.trace.traces);
(cb_34496.cljs$core$IFn$_invoke$arity$1 ? cb_34496.cljs$core$IFn$_invoke$arity$1(G__34484_34497) : cb_34496.call(null,G__34484_34497));
}catch (e34483){var e_34498 = e34483;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34495,"while storing",cljs.core.deref(re_frame.trace.traces),e_34498], 0));
}

var G__34499 = seq__34476_34490;
var G__34500 = chunk__34477_34491;
var G__34501 = count__34478_34492;
var G__34502 = (i__34479_34493 + (1));
seq__34476_34490 = G__34499;
chunk__34477_34491 = G__34500;
count__34478_34492 = G__34501;
i__34479_34493 = G__34502;
continue;
} else {
var temp__5457__auto___34503 = cljs.core.seq(seq__34476_34490);
if(temp__5457__auto___34503){
var seq__34476_34504__$1 = temp__5457__auto___34503;
if(cljs.core.chunked_seq_QMARK_(seq__34476_34504__$1)){
var c__4319__auto___34505 = cljs.core.chunk_first(seq__34476_34504__$1);
var G__34506 = cljs.core.chunk_rest(seq__34476_34504__$1);
var G__34507 = c__4319__auto___34505;
var G__34508 = cljs.core.count(c__4319__auto___34505);
var G__34509 = (0);
seq__34476_34490 = G__34506;
chunk__34477_34491 = G__34507;
count__34478_34492 = G__34508;
i__34479_34493 = G__34509;
continue;
} else {
var vec__34485_34510 = cljs.core.first(seq__34476_34504__$1);
var k_34511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34485_34510,(0),null);
var cb_34512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34485_34510,(1),null);
try{var G__34489_34513 = cljs.core.deref(re_frame.trace.traces);
(cb_34512.cljs$core$IFn$_invoke$arity$1 ? cb_34512.cljs$core$IFn$_invoke$arity$1(G__34489_34513) : cb_34512.call(null,G__34489_34513));
}catch (e34488){var e_34514 = e34488;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34511,"while storing",cljs.core.deref(re_frame.trace.traces),e_34514], 0));
}

var G__34515 = cljs.core.next(seq__34476_34504__$1);
var G__34516 = null;
var G__34517 = (0);
var G__34518 = (0);
seq__34476_34490 = G__34515;
chunk__34477_34491 = G__34516;
count__34478_34492 = G__34517;
i__34479_34493 = G__34518;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
