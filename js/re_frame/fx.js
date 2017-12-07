// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
var seq__16810 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__16811 = null;
var count__16812 = (0);
var i__16813 = (0);
while(true){
if((i__16813 < count__16812)){
var vec__16814 = chunk__16811.cljs$core$IIndexed$_nth$arity$2(null,i__16813);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16814,(1),null);
var temp__4655__auto___16820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16820)){
var effect_fn_16821 = temp__4655__auto___16820;
(effect_fn_16821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__16822 = seq__16810;
var G__16823 = chunk__16811;
var G__16824 = count__16812;
var G__16825 = (i__16813 + (1));
seq__16810 = G__16822;
chunk__16811 = G__16823;
count__16812 = G__16824;
i__16813 = G__16825;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16810);
if(temp__4657__auto__){
var seq__16810__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16810__$1)){
var c__9025__auto__ = cljs.core.chunk_first(seq__16810__$1);
var G__16826 = cljs.core.chunk_rest(seq__16810__$1);
var G__16827 = c__9025__auto__;
var G__16828 = cljs.core.count(c__9025__auto__);
var G__16829 = (0);
seq__16810 = G__16826;
chunk__16811 = G__16827;
count__16812 = G__16828;
i__16813 = G__16829;
continue;
} else {
var vec__16817 = cljs.core.first(seq__16810__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16817,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16817,(1),null);
var temp__4655__auto___16830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___16830)){
var effect_fn_16831 = temp__4655__auto___16830;
(effect_fn_16831.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16831.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16831.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}

var G__16832 = cljs.core.next(seq__16810__$1);
var G__16833 = null;
var G__16834 = (0);
var G__16835 = (0);
seq__16810 = G__16832;
chunk__16811 = G__16833;
count__16812 = G__16834;
i__16813 = G__16835;
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
var seq__16836 = cljs.core.seq(value);
var chunk__16837 = null;
var count__16838 = (0);
var i__16839 = (0);
while(true){
if((i__16839 < count__16838)){
var map__16840 = chunk__16837.cljs$core$IIndexed$_nth$arity$2(null,i__16839);
var map__16840__$1 = ((((!((map__16840 == null)))?((((map__16840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16840):map__16840);
var effect = map__16840__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16840__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__16836,chunk__16837,count__16838,i__16839,map__16840,map__16840__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__16836,chunk__16837,count__16838,i__16839,map__16840,map__16840__$1,effect,ms,dispatch))
,ms);
}

var G__16844 = seq__16836;
var G__16845 = chunk__16837;
var G__16846 = count__16838;
var G__16847 = (i__16839 + (1));
seq__16836 = G__16844;
chunk__16837 = G__16845;
count__16838 = G__16846;
i__16839 = G__16847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16836);
if(temp__4657__auto__){
var seq__16836__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16836__$1)){
var c__9025__auto__ = cljs.core.chunk_first(seq__16836__$1);
var G__16848 = cljs.core.chunk_rest(seq__16836__$1);
var G__16849 = c__9025__auto__;
var G__16850 = cljs.core.count(c__9025__auto__);
var G__16851 = (0);
seq__16836 = G__16848;
chunk__16837 = G__16849;
count__16838 = G__16850;
i__16839 = G__16851;
continue;
} else {
var map__16842 = cljs.core.first(seq__16836__$1);
var map__16842__$1 = ((((!((map__16842 == null)))?((((map__16842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16842):map__16842);
var effect = map__16842__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16842__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16842__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__16836,chunk__16837,count__16838,i__16839,map__16842,map__16842__$1,effect,ms,dispatch,seq__16836__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__16836,chunk__16837,count__16838,i__16839,map__16842,map__16842__$1,effect,ms,dispatch,seq__16836__$1,temp__4657__auto__))
,ms);
}

var G__16852 = cljs.core.next(seq__16836__$1);
var G__16853 = null;
var G__16854 = (0);
var G__16855 = (0);
seq__16836 = G__16852;
chunk__16837 = G__16853;
count__16838 = G__16854;
i__16839 = G__16855;
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
var seq__16856 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16857 = null;
var count__16858 = (0);
var i__16859 = (0);
while(true){
if((i__16859 < count__16858)){
var event = chunk__16857.cljs$core$IIndexed$_nth$arity$2(null,i__16859);
re_frame.router.dispatch(event);

var G__16860 = seq__16856;
var G__16861 = chunk__16857;
var G__16862 = count__16858;
var G__16863 = (i__16859 + (1));
seq__16856 = G__16860;
chunk__16857 = G__16861;
count__16858 = G__16862;
i__16859 = G__16863;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16856);
if(temp__4657__auto__){
var seq__16856__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16856__$1)){
var c__9025__auto__ = cljs.core.chunk_first(seq__16856__$1);
var G__16864 = cljs.core.chunk_rest(seq__16856__$1);
var G__16865 = c__9025__auto__;
var G__16866 = cljs.core.count(c__9025__auto__);
var G__16867 = (0);
seq__16856 = G__16864;
chunk__16857 = G__16865;
count__16858 = G__16866;
i__16859 = G__16867;
continue;
} else {
var event = cljs.core.first(seq__16856__$1);
re_frame.router.dispatch(event);

var G__16868 = cljs.core.next(seq__16856__$1);
var G__16869 = null;
var G__16870 = (0);
var G__16871 = (0);
seq__16856 = G__16868;
chunk__16857 = G__16869;
count__16858 = G__16870;
i__16859 = G__16871;
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
var seq__16872 = cljs.core.seq(value);
var chunk__16873 = null;
var count__16874 = (0);
var i__16875 = (0);
while(true){
if((i__16875 < count__16874)){
var event = chunk__16873.cljs$core$IIndexed$_nth$arity$2(null,i__16875);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__16876 = seq__16872;
var G__16877 = chunk__16873;
var G__16878 = count__16874;
var G__16879 = (i__16875 + (1));
seq__16872 = G__16876;
chunk__16873 = G__16877;
count__16874 = G__16878;
i__16875 = G__16879;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16872);
if(temp__4657__auto__){
var seq__16872__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16872__$1)){
var c__9025__auto__ = cljs.core.chunk_first(seq__16872__$1);
var G__16880 = cljs.core.chunk_rest(seq__16872__$1);
var G__16881 = c__9025__auto__;
var G__16882 = cljs.core.count(c__9025__auto__);
var G__16883 = (0);
seq__16872 = G__16880;
chunk__16873 = G__16881;
count__16874 = G__16882;
i__16875 = G__16883;
continue;
} else {
var event = cljs.core.first(seq__16872__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));

var G__16884 = cljs.core.next(seq__16872__$1);
var G__16885 = null;
var G__16886 = (0);
var G__16887 = (0);
seq__16872 = G__16884;
chunk__16873 = G__16885;
count__16874 = G__16886;
i__16875 = G__16887;
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
