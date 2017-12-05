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
var seq__19253 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__19254 = null;
var count__19255 = (0);
var i__19256 = (0);
while(true){
if((i__19256 < count__19255)){
var vec__19257 = chunk__19254.cljs$core$IIndexed$_nth$arity$2(null,i__19256);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19257,(1),null);
var temp__4655__auto___19263 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19263)){
var effect_fn_19264 = temp__4655__auto___19263;
(effect_fn_19264.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19264.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19264.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__19265 = seq__19253;
var G__19266 = chunk__19254;
var G__19267 = count__19255;
var G__19268 = (i__19256 + (1));
seq__19253 = G__19265;
chunk__19254 = G__19266;
count__19255 = G__19267;
i__19256 = G__19268;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19253);
if(temp__4657__auto__){
var seq__19253__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19253__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__19253__$1);
var G__19269 = cljs.core.chunk_rest(seq__19253__$1);
var G__19270 = c__8618__auto__;
var G__19271 = cljs.core.count(c__8618__auto__);
var G__19272 = (0);
seq__19253 = G__19269;
chunk__19254 = G__19270;
count__19255 = G__19271;
i__19256 = G__19272;
continue;
} else {
var vec__19260 = cljs.core.first(seq__19253__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19260,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19260,(1),null);
var temp__4655__auto___19273 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___19273)){
var effect_fn_19274 = temp__4655__auto___19273;
(effect_fn_19274.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19274.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19274.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__19275 = cljs.core.next(seq__19253__$1);
var G__19276 = null;
var G__19277 = (0);
var G__19278 = (0);
seq__19253 = G__19275;
chunk__19254 = G__19276;
count__19255 = G__19277;
i__19256 = G__19278;
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
var seq__19279 = cljs.core.seq(value);
var chunk__19280 = null;
var count__19281 = (0);
var i__19282 = (0);
while(true){
if((i__19282 < count__19281)){
var map__19283 = chunk__19280.cljs$core$IIndexed$_nth$arity$2(null,i__19282);
var map__19283__$1 = ((((!((map__19283 == null)))?((((map__19283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19283):map__19283);
var effect = map__19283__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19283__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19283__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19279,chunk__19280,count__19281,i__19282,map__19283,map__19283__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19279,chunk__19280,count__19281,i__19282,map__19283,map__19283__$1,effect,ms,dispatch))
,ms);
}

var G__19287 = seq__19279;
var G__19288 = chunk__19280;
var G__19289 = count__19281;
var G__19290 = (i__19282 + (1));
seq__19279 = G__19287;
chunk__19280 = G__19288;
count__19281 = G__19289;
i__19282 = G__19290;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19279);
if(temp__4657__auto__){
var seq__19279__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19279__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__19279__$1);
var G__19291 = cljs.core.chunk_rest(seq__19279__$1);
var G__19292 = c__8618__auto__;
var G__19293 = cljs.core.count(c__8618__auto__);
var G__19294 = (0);
seq__19279 = G__19291;
chunk__19280 = G__19292;
count__19281 = G__19293;
i__19282 = G__19294;
continue;
} else {
var map__19285 = cljs.core.first(seq__19279__$1);
var map__19285__$1 = ((((!((map__19285 == null)))?((((map__19285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19285):map__19285);
var effect = map__19285__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19279,chunk__19280,count__19281,i__19282,map__19285,map__19285__$1,effect,ms,dispatch,seq__19279__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19279,chunk__19280,count__19281,i__19282,map__19285,map__19285__$1,effect,ms,dispatch,seq__19279__$1,temp__4657__auto__))
,ms);
}

var G__19295 = cljs.core.next(seq__19279__$1);
var G__19296 = null;
var G__19297 = (0);
var G__19298 = (0);
seq__19279 = G__19295;
chunk__19280 = G__19296;
count__19281 = G__19297;
i__19282 = G__19298;
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
var seq__19299 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19300 = null;
var count__19301 = (0);
var i__19302 = (0);
while(true){
if((i__19302 < count__19301)){
var event = chunk__19300.cljs$core$IIndexed$_nth$arity$2(null,i__19302);
re_frame.router.dispatch(event);

var G__19303 = seq__19299;
var G__19304 = chunk__19300;
var G__19305 = count__19301;
var G__19306 = (i__19302 + (1));
seq__19299 = G__19303;
chunk__19300 = G__19304;
count__19301 = G__19305;
i__19302 = G__19306;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19299);
if(temp__4657__auto__){
var seq__19299__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19299__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__19299__$1);
var G__19307 = cljs.core.chunk_rest(seq__19299__$1);
var G__19308 = c__8618__auto__;
var G__19309 = cljs.core.count(c__8618__auto__);
var G__19310 = (0);
seq__19299 = G__19307;
chunk__19300 = G__19308;
count__19301 = G__19309;
i__19302 = G__19310;
continue;
} else {
var event = cljs.core.first(seq__19299__$1);
re_frame.router.dispatch(event);

var G__19311 = cljs.core.next(seq__19299__$1);
var G__19312 = null;
var G__19313 = (0);
var G__19314 = (0);
seq__19299 = G__19311;
chunk__19300 = G__19312;
count__19301 = G__19313;
i__19302 = G__19314;
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
var seq__19315 = cljs.core.seq(value);
var chunk__19316 = null;
var count__19317 = (0);
var i__19318 = (0);
while(true){
if((i__19318 < count__19317)){
var event = chunk__19316.cljs$core$IIndexed$_nth$arity$2(null,i__19318);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__19319 = seq__19315;
var G__19320 = chunk__19316;
var G__19321 = count__19317;
var G__19322 = (i__19318 + (1));
seq__19315 = G__19319;
chunk__19316 = G__19320;
count__19317 = G__19321;
i__19318 = G__19322;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19315);
if(temp__4657__auto__){
var seq__19315__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19315__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__19315__$1);
var G__19323 = cljs.core.chunk_rest(seq__19315__$1);
var G__19324 = c__8618__auto__;
var G__19325 = cljs.core.count(c__8618__auto__);
var G__19326 = (0);
seq__19315 = G__19323;
chunk__19316 = G__19324;
count__19317 = G__19325;
i__19318 = G__19326;
continue;
} else {
var event = cljs.core.first(seq__19315__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__19327 = cljs.core.next(seq__19315__$1);
var G__19328 = null;
var G__19329 = (0);
var G__19330 = (0);
seq__19315 = G__19327;
chunk__19316 = G__19328;
count__19317 = G__19329;
i__19318 = G__19330;
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
