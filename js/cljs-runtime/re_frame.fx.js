goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_35067 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__35068 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35069 = null;
var count__35070 = (0);
var i__35071 = (0);
while(true){
if((i__35071 < count__35070)){
var vec__35072 = chunk__35069.cljs$core$IIndexed$_nth$arity$2(null,i__35071);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35072,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35072,(1),null);
var temp__5455__auto___35091 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___35091)){
var effect_fn_35092 = temp__5455__auto___35091;
(effect_fn_35092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35092.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35093 = seq__35068;
var G__35094 = chunk__35069;
var G__35095 = count__35070;
var G__35096 = (i__35071 + (1));
seq__35068 = G__35093;
chunk__35069 = G__35094;
count__35070 = G__35095;
i__35071 = G__35096;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35068);
if(temp__5457__auto__){
var seq__35068__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35068__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35068__$1);
var G__35097 = cljs.core.chunk_rest(seq__35068__$1);
var G__35098 = c__4319__auto__;
var G__35099 = cljs.core.count(c__4319__auto__);
var G__35100 = (0);
seq__35068 = G__35097;
chunk__35069 = G__35098;
count__35070 = G__35099;
i__35071 = G__35100;
continue;
} else {
var vec__35076 = cljs.core.first(seq__35068__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(1),null);
var temp__5455__auto___35101 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___35101)){
var effect_fn_35103 = temp__5455__auto___35101;
(effect_fn_35103.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35103.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35103.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35104 = cljs.core.next(seq__35068__$1);
var G__35105 = null;
var G__35106 = (0);
var G__35107 = (0);
seq__35068 = G__35104;
chunk__35069 = G__35105;
count__35070 = G__35106;
i__35071 = G__35107;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__34453__auto___35108 = re_frame.interop.now();
var duration__34454__auto___35109 = (end__34453__auto___35108 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34454__auto___35109,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__34453__auto___35108);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_35067;
}} else {
var seq__35080 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35081 = null;
var count__35082 = (0);
var i__35083 = (0);
while(true){
if((i__35083 < count__35082)){
var vec__35084 = chunk__35081.cljs$core$IIndexed$_nth$arity$2(null,i__35083);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(1),null);
var temp__5455__auto___35115 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___35115)){
var effect_fn_35116 = temp__5455__auto___35115;
(effect_fn_35116.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35116.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35116.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35117 = seq__35080;
var G__35118 = chunk__35081;
var G__35119 = count__35082;
var G__35120 = (i__35083 + (1));
seq__35080 = G__35117;
chunk__35081 = G__35118;
count__35082 = G__35119;
i__35083 = G__35120;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35080);
if(temp__5457__auto__){
var seq__35080__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35080__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35080__$1);
var G__35121 = cljs.core.chunk_rest(seq__35080__$1);
var G__35122 = c__4319__auto__;
var G__35123 = cljs.core.count(c__4319__auto__);
var G__35124 = (0);
seq__35080 = G__35121;
chunk__35081 = G__35122;
count__35082 = G__35123;
i__35083 = G__35124;
continue;
} else {
var vec__35087 = cljs.core.first(seq__35080__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35087,(1),null);
var temp__5455__auto___35130 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___35130)){
var effect_fn_35132 = temp__5455__auto___35130;
(effect_fn_35132.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35132.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35132.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35138 = cljs.core.next(seq__35080__$1);
var G__35139 = null;
var G__35140 = (0);
var G__35141 = (0);
seq__35080 = G__35138;
chunk__35081 = G__35139;
count__35082 = G__35140;
i__35083 = G__35141;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__35144 = cljs.core.seq(value);
var chunk__35145 = null;
var count__35146 = (0);
var i__35147 = (0);
while(true){
if((i__35147 < count__35146)){
var map__35150 = chunk__35145.cljs$core$IIndexed$_nth$arity$2(null,i__35147);
var map__35150__$1 = ((((!((map__35150 == null)))?(((((map__35150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35150):map__35150);
var effect = map__35150__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35150__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__35144,chunk__35145,count__35146,i__35147,map__35150,map__35150__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__35144,chunk__35145,count__35146,i__35147,map__35150,map__35150__$1,effect,ms,dispatch))
,ms);
}


var G__35172 = seq__35144;
var G__35173 = chunk__35145;
var G__35174 = count__35146;
var G__35175 = (i__35147 + (1));
seq__35144 = G__35172;
chunk__35145 = G__35173;
count__35146 = G__35174;
i__35147 = G__35175;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35144);
if(temp__5457__auto__){
var seq__35144__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35144__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35144__$1);
var G__35180 = cljs.core.chunk_rest(seq__35144__$1);
var G__35181 = c__4319__auto__;
var G__35182 = cljs.core.count(c__4319__auto__);
var G__35183 = (0);
seq__35144 = G__35180;
chunk__35145 = G__35181;
count__35146 = G__35182;
i__35147 = G__35183;
continue;
} else {
var map__35166 = cljs.core.first(seq__35144__$1);
var map__35166__$1 = ((((!((map__35166 == null)))?(((((map__35166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35166):map__35166);
var effect = map__35166__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35166__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__35144,chunk__35145,count__35146,i__35147,map__35166,map__35166__$1,effect,ms,dispatch,seq__35144__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__35144,chunk__35145,count__35146,i__35147,map__35166,map__35166__$1,effect,ms,dispatch,seq__35144__$1,temp__5457__auto__))
,ms);
}


var G__35185 = cljs.core.next(seq__35144__$1);
var G__35186 = null;
var G__35187 = (0);
var G__35188 = (0);
seq__35144 = G__35185;
chunk__35145 = G__35186;
count__35146 = G__35187;
i__35147 = G__35188;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__35189 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35190 = null;
var count__35191 = (0);
var i__35192 = (0);
while(true){
if((i__35192 < count__35191)){
var event = chunk__35190.cljs$core$IIndexed$_nth$arity$2(null,i__35192);
re_frame.router.dispatch(event);


var G__35195 = seq__35189;
var G__35196 = chunk__35190;
var G__35197 = count__35191;
var G__35198 = (i__35192 + (1));
seq__35189 = G__35195;
chunk__35190 = G__35196;
count__35191 = G__35197;
i__35192 = G__35198;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35189);
if(temp__5457__auto__){
var seq__35189__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35189__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35189__$1);
var G__35201 = cljs.core.chunk_rest(seq__35189__$1);
var G__35202 = c__4319__auto__;
var G__35203 = cljs.core.count(c__4319__auto__);
var G__35204 = (0);
seq__35189 = G__35201;
chunk__35190 = G__35202;
count__35191 = G__35203;
i__35192 = G__35204;
continue;
} else {
var event = cljs.core.first(seq__35189__$1);
re_frame.router.dispatch(event);


var G__35205 = cljs.core.next(seq__35189__$1);
var G__35206 = null;
var G__35207 = (0);
var G__35208 = (0);
seq__35189 = G__35205;
chunk__35190 = G__35206;
count__35191 = G__35207;
i__35192 = G__35208;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35209 = cljs.core.seq(value);
var chunk__35210 = null;
var count__35211 = (0);
var i__35212 = (0);
while(true){
if((i__35212 < count__35211)){
var event = chunk__35210.cljs$core$IIndexed$_nth$arity$2(null,i__35212);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__35216 = seq__35209;
var G__35217 = chunk__35210;
var G__35218 = count__35211;
var G__35219 = (i__35212 + (1));
seq__35209 = G__35216;
chunk__35210 = G__35217;
count__35211 = G__35218;
i__35212 = G__35219;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__35209);
if(temp__5457__auto__){
var seq__35209__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35209__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__35209__$1);
var G__35220 = cljs.core.chunk_rest(seq__35209__$1);
var G__35221 = c__4319__auto__;
var G__35222 = cljs.core.count(c__4319__auto__);
var G__35223 = (0);
seq__35209 = G__35220;
chunk__35210 = G__35221;
count__35211 = G__35222;
i__35212 = G__35223;
continue;
} else {
var event = cljs.core.first(seq__35209__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__35224 = cljs.core.next(seq__35209__$1);
var G__35225 = null;
var G__35226 = (0);
var G__35227 = (0);
seq__35209 = G__35224;
chunk__35210 = G__35225;
count__35211 = G__35226;
i__35212 = G__35227;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
