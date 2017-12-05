// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.formatters.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return !((devtools.formatters.state._STAR_current_state_STAR_ == null));
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14935 = arguments.length;
var i__8938__auto___14936 = (0);
while(true){
if((i__8938__auto___14936 < len__8937__auto___14935)){
args__8944__auto__.push((arguments[i__8938__auto___14936]));

var G__14937 = (i__8938__auto___14936 + (1));
i__8938__auto___14936 = G__14937;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,devtools.formatters.state._STAR_current_state_STAR_,args);
});

devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq14933){
var G__14934 = cljs.core.first(seq14933);
var seq14933__$1 = cljs.core.next(seq14933);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14934,seq14933__$1);
});

devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$history,cljs.core.conj,object], 0));
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history = devtools.formatters.state.get_current_history();
return cljs.core.some(((function (history){
return (function (p1__14938_SHARP_){
return (p1__14938_SHARP_ === object);
});})(history))
,history);
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$(cljs.core.cst$kw$prevent_DASH_recursion.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state()));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if(!((val == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$prevent_DASH_recursion,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$prevent_DASH_recursion);
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return cljs.core.cst$kw$managed_DASH_print_DASH_level.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if(!((val == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$managed_DASH_print_DASH_level,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$managed_DASH_print_DASH_level);
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return cljs.core.cst$kw$depth_DASH_budget.cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state());
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if(!((val == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$depth_DASH_budget,val);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$depth_DASH_budget);
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level(devtools.formatters.state.set_depth_budget(state,null),null);
});
