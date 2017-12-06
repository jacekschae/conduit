// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__47349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47350 = null;
var count__47351 = (0);
var i__47352 = (0);
while(true){
if((i__47352 < count__47351)){
var vec__47353 = cljs.core._nth.call(null,chunk__47350,i__47352);
var effect_key = cljs.core.nth.call(null,vec__47353,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47353,(1),null);
var temp__4655__auto___47359 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47359)){
var effect_fn_47360 = temp__4655__auto___47359;
effect_fn_47360.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__47361 = seq__47349;
var G__47362 = chunk__47350;
var G__47363 = count__47351;
var G__47364 = (i__47352 + (1));
seq__47349 = G__47361;
chunk__47350 = G__47362;
count__47351 = G__47363;
i__47352 = G__47364;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47349);
if(temp__4657__auto__){
var seq__47349__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47349__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__47349__$1);
var G__47365 = cljs.core.chunk_rest.call(null,seq__47349__$1);
var G__47366 = c__29324__auto__;
var G__47367 = cljs.core.count.call(null,c__29324__auto__);
var G__47368 = (0);
seq__47349 = G__47365;
chunk__47350 = G__47366;
count__47351 = G__47367;
i__47352 = G__47368;
continue;
} else {
var vec__47356 = cljs.core.first.call(null,seq__47349__$1);
var effect_key = cljs.core.nth.call(null,vec__47356,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47356,(1),null);
var temp__4655__auto___47369 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47369)){
var effect_fn_47370 = temp__4655__auto___47369;
effect_fn_47370.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__47371 = cljs.core.next.call(null,seq__47349__$1);
var G__47372 = null;
var G__47373 = (0);
var G__47374 = (0);
seq__47349 = G__47371;
chunk__47350 = G__47372;
count__47351 = G__47373;
i__47352 = G__47374;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47375 = cljs.core.seq.call(null,value);
var chunk__47376 = null;
var count__47377 = (0);
var i__47378 = (0);
while(true){
if((i__47378 < count__47377)){
var map__47379 = cljs.core._nth.call(null,chunk__47376,i__47378);
var map__47379__$1 = ((((!((map__47379 == null)))?((((map__47379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47379):map__47379);
var effect = map__47379__$1;
var ms = cljs.core.get.call(null,map__47379__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47379__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47375,chunk__47376,count__47377,i__47378,map__47379,map__47379__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47375,chunk__47376,count__47377,i__47378,map__47379,map__47379__$1,effect,ms,dispatch))
,ms);
}

var G__47383 = seq__47375;
var G__47384 = chunk__47376;
var G__47385 = count__47377;
var G__47386 = (i__47378 + (1));
seq__47375 = G__47383;
chunk__47376 = G__47384;
count__47377 = G__47385;
i__47378 = G__47386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47375);
if(temp__4657__auto__){
var seq__47375__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47375__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__47375__$1);
var G__47387 = cljs.core.chunk_rest.call(null,seq__47375__$1);
var G__47388 = c__29324__auto__;
var G__47389 = cljs.core.count.call(null,c__29324__auto__);
var G__47390 = (0);
seq__47375 = G__47387;
chunk__47376 = G__47388;
count__47377 = G__47389;
i__47378 = G__47390;
continue;
} else {
var map__47381 = cljs.core.first.call(null,seq__47375__$1);
var map__47381__$1 = ((((!((map__47381 == null)))?((((map__47381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47381):map__47381);
var effect = map__47381__$1;
var ms = cljs.core.get.call(null,map__47381__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47381__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47375,chunk__47376,count__47377,i__47378,map__47381,map__47381__$1,effect,ms,dispatch,seq__47375__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47375,chunk__47376,count__47377,i__47378,map__47381,map__47381__$1,effect,ms,dispatch,seq__47375__$1,temp__4657__auto__))
,ms);
}

var G__47391 = cljs.core.next.call(null,seq__47375__$1);
var G__47392 = null;
var G__47393 = (0);
var G__47394 = (0);
seq__47375 = G__47391;
chunk__47376 = G__47392;
count__47377 = G__47393;
i__47378 = G__47394;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__47395 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__47396 = null;
var count__47397 = (0);
var i__47398 = (0);
while(true){
if((i__47398 < count__47397)){
var event = cljs.core._nth.call(null,chunk__47396,i__47398);
re_frame.router.dispatch.call(null,event);

var G__47399 = seq__47395;
var G__47400 = chunk__47396;
var G__47401 = count__47397;
var G__47402 = (i__47398 + (1));
seq__47395 = G__47399;
chunk__47396 = G__47400;
count__47397 = G__47401;
i__47398 = G__47402;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47395);
if(temp__4657__auto__){
var seq__47395__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47395__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__47395__$1);
var G__47403 = cljs.core.chunk_rest.call(null,seq__47395__$1);
var G__47404 = c__29324__auto__;
var G__47405 = cljs.core.count.call(null,c__29324__auto__);
var G__47406 = (0);
seq__47395 = G__47403;
chunk__47396 = G__47404;
count__47397 = G__47405;
i__47398 = G__47406;
continue;
} else {
var event = cljs.core.first.call(null,seq__47395__$1);
re_frame.router.dispatch.call(null,event);

var G__47407 = cljs.core.next.call(null,seq__47395__$1);
var G__47408 = null;
var G__47409 = (0);
var G__47410 = (0);
seq__47395 = G__47407;
chunk__47396 = G__47408;
count__47397 = G__47409;
i__47398 = G__47410;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__47411 = cljs.core.seq.call(null,value);
var chunk__47412 = null;
var count__47413 = (0);
var i__47414 = (0);
while(true){
if((i__47414 < count__47413)){
var event = cljs.core._nth.call(null,chunk__47412,i__47414);
clear_event.call(null,event);

var G__47415 = seq__47411;
var G__47416 = chunk__47412;
var G__47417 = count__47413;
var G__47418 = (i__47414 + (1));
seq__47411 = G__47415;
chunk__47412 = G__47416;
count__47413 = G__47417;
i__47414 = G__47418;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47411);
if(temp__4657__auto__){
var seq__47411__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47411__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__47411__$1);
var G__47419 = cljs.core.chunk_rest.call(null,seq__47411__$1);
var G__47420 = c__29324__auto__;
var G__47421 = cljs.core.count.call(null,c__29324__auto__);
var G__47422 = (0);
seq__47411 = G__47419;
chunk__47412 = G__47420;
count__47413 = G__47421;
i__47414 = G__47422;
continue;
} else {
var event = cljs.core.first.call(null,seq__47411__$1);
clear_event.call(null,event);

var G__47423 = cljs.core.next.call(null,seq__47411__$1);
var G__47424 = null;
var G__47425 = (0);
var G__47426 = (0);
seq__47411 = G__47423;
chunk__47412 = G__47424;
count__47413 = G__47425;
i__47414 = G__47426;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1512565263419
