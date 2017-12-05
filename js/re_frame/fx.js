// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
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
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
var seq__16375 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__16376 = null;
var count__16377 = (0);
var i__16378 = (0);
while(true){
if((i__16378 < count__16377)){
var vec__16379 = chunk__16376.cljs$core$IIndexed$_nth$arity$2(null,i__16378);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16379,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16379,(1),null);
var temp__4655__auto___16385 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16385)){
var effect_fn_16386 = temp__4655__auto___16385;
(effect_fn_16386.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16386.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16386.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__16387 = seq__16375;
var G__16388 = chunk__16376;
var G__16389 = count__16377;
var G__16390 = (i__16378 + (1));
seq__16375 = G__16387;
chunk__16376 = G__16388;
count__16377 = G__16389;
i__16378 = G__16390;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16375);
if(temp__4657__auto__){
var seq__16375__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16375__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__16375__$1);
var G__16391 = cljs.core.chunk_rest(seq__16375__$1);
var G__16392 = c__8618__auto__;
var G__16393 = cljs.core.count(c__8618__auto__);
var G__16394 = (0);
seq__16375 = G__16391;
chunk__16376 = G__16392;
count__16377 = G__16393;
i__16378 = G__16394;
continue;
} else {
var vec__16382 = cljs.core.first(seq__16375__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16382,(1),null);
var temp__4655__auto___16395 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16395)){
var effect_fn_16396 = temp__4655__auto___16395;
(effect_fn_16396.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16396.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16396.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__16397 = cljs.core.next(seq__16375__$1);
var G__16398 = null;
var G__16399 = (0);
var G__16400 = (0);
seq__16375 = G__16397;
chunk__16376 = G__16398;
count__16377 = G__16399;
i__16378 = G__16400;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__16401 = cljs.core.seq(value);
var chunk__16402 = null;
var count__16403 = (0);
var i__16404 = (0);
while(true){
if((i__16404 < count__16403)){
var map__16405 = chunk__16402.cljs$core$IIndexed$_nth$arity$2(null,i__16404);
var map__16405__$1 = ((((!((map__16405 == null)))?((((map__16405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16405):map__16405);
var effect = map__16405__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16405__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16405__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__16401,chunk__16402,count__16403,i__16404,map__16405,map__16405__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__16401,chunk__16402,count__16403,i__16404,map__16405,map__16405__$1,effect,ms,dispatch))
,ms);
}

var G__16409 = seq__16401;
var G__16410 = chunk__16402;
var G__16411 = count__16403;
var G__16412 = (i__16404 + (1));
seq__16401 = G__16409;
chunk__16402 = G__16410;
count__16403 = G__16411;
i__16404 = G__16412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16401);
if(temp__4657__auto__){
var seq__16401__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16401__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__16401__$1);
var G__16413 = cljs.core.chunk_rest(seq__16401__$1);
var G__16414 = c__8618__auto__;
var G__16415 = cljs.core.count(c__8618__auto__);
var G__16416 = (0);
seq__16401 = G__16413;
chunk__16402 = G__16414;
count__16403 = G__16415;
i__16404 = G__16416;
continue;
} else {
var map__16407 = cljs.core.first(seq__16401__$1);
var map__16407__$1 = ((((!((map__16407 == null)))?((((map__16407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16407):map__16407);
var effect = map__16407__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16407__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16407__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__16401,chunk__16402,count__16403,i__16404,map__16407,map__16407__$1,effect,ms,dispatch,seq__16401__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__16401,chunk__16402,count__16403,i__16404,map__16407,map__16407__$1,effect,ms,dispatch,seq__16401__$1,temp__4657__auto__))
,ms);
}

var G__16417 = cljs.core.next(seq__16401__$1);
var G__16418 = null;
var G__16419 = (0);
var G__16420 = (0);
seq__16401 = G__16417;
chunk__16402 = G__16418;
count__16403 = G__16419;
i__16404 = G__16420;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__16421 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16422 = null;
var count__16423 = (0);
var i__16424 = (0);
while(true){
if((i__16424 < count__16423)){
var event = chunk__16422.cljs$core$IIndexed$_nth$arity$2(null,i__16424);
re_frame.router.dispatch(event);

var G__16425 = seq__16421;
var G__16426 = chunk__16422;
var G__16427 = count__16423;
var G__16428 = (i__16424 + (1));
seq__16421 = G__16425;
chunk__16422 = G__16426;
count__16423 = G__16427;
i__16424 = G__16428;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16421);
if(temp__4657__auto__){
var seq__16421__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16421__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__16421__$1);
var G__16429 = cljs.core.chunk_rest(seq__16421__$1);
var G__16430 = c__8618__auto__;
var G__16431 = cljs.core.count(c__8618__auto__);
var G__16432 = (0);
seq__16421 = G__16429;
chunk__16422 = G__16430;
count__16423 = G__16431;
i__16424 = G__16432;
continue;
} else {
var event = cljs.core.first(seq__16421__$1);
re_frame.router.dispatch(event);

var G__16433 = cljs.core.next(seq__16421__$1);
var G__16434 = null;
var G__16435 = (0);
var G__16436 = (0);
seq__16421 = G__16433;
chunk__16422 = G__16434;
count__16423 = G__16435;
i__16424 = G__16436;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16437 = cljs.core.seq(value);
var chunk__16438 = null;
var count__16439 = (0);
var i__16440 = (0);
while(true){
if((i__16440 < count__16439)){
var event = chunk__16438.cljs$core$IIndexed$_nth$arity$2(null,i__16440);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__16441 = seq__16437;
var G__16442 = chunk__16438;
var G__16443 = count__16439;
var G__16444 = (i__16440 + (1));
seq__16437 = G__16441;
chunk__16438 = G__16442;
count__16439 = G__16443;
i__16440 = G__16444;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16437);
if(temp__4657__auto__){
var seq__16437__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16437__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__16437__$1);
var G__16445 = cljs.core.chunk_rest(seq__16437__$1);
var G__16446 = c__8618__auto__;
var G__16447 = cljs.core.count(c__8618__auto__);
var G__16448 = (0);
seq__16437 = G__16445;
chunk__16438 = G__16446;
count__16439 = G__16447;
i__16440 = G__16448;
continue;
} else {
var event = cljs.core.first(seq__16437__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__16449 = cljs.core.next(seq__16437__$1);
var G__16450 = null;
var G__16451 = (0);
var G__16452 = (0);
seq__16437 = G__16449;
chunk__16438 = G__16450;
count__16439 = G__16451;
i__16440 = G__16452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
