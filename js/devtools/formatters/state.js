// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.state');
goog.require('cljs.core');
devtools.formatters.state._STAR_current_state_STAR_ = null;
devtools.formatters.state.valid_current_state_QMARK_ = (function devtools$formatters$state$valid_current_state_QMARK_(){
return !((devtools.formatters.state._STAR_current_state_STAR_ == null));
});
devtools.formatters.state.get_default_state = (function devtools$formatters$state$get_default_state(){
return cljs.core.PersistentArrayMap.EMPTY;
});
devtools.formatters.state.get_current_state = (function devtools$formatters$state$get_current_state(){
if(cljs.core.truth_(devtools.formatters.state.valid_current_state_QMARK_.call(null))){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return devtools.formatters.state._STAR_current_state_STAR_;
});
devtools.formatters.state.update_current_state_BANG_ = (function devtools$formatters$state$update_current_state_BANG_(var_args){
var args__29663__auto__ = [];
var len__29656__auto___36185 = arguments.length;
var i__29657__auto___36186 = (0);
while(true){
if((i__29657__auto___36186 < len__29656__auto___36185)){
args__29663__auto__.push((arguments[i__29657__auto___36186]));

var G__36187 = (i__29657__auto___36186 + (1));
i__29657__auto___36186 = G__36187;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.truth_(devtools.formatters.state.valid_current_state_QMARK_.call(null))){
} else {
throw (new Error("Assert failed: (valid-current-state?)"));
}

return devtools.formatters.state._STAR_current_state_STAR_ = cljs.core.apply.call(null,f,devtools.formatters.state._STAR_current_state_STAR_,args);
});

devtools.formatters.state.update_current_state_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.state.update_current_state_BANG_.cljs$lang$applyTo = (function (seq36183){
var G__36184 = cljs.core.first.call(null,seq36183);
var seq36183__$1 = cljs.core.next.call(null,seq36183);
return devtools.formatters.state.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36184,seq36183__$1);
});

devtools.formatters.state.push_object_to_current_history_BANG_ = (function devtools$formatters$state$push_object_to_current_history_BANG_(object){
return devtools.formatters.state.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,object);
});
devtools.formatters.state.get_current_history = (function devtools$formatters$state$get_current_history(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.is_circular_QMARK_ = (function devtools$formatters$state$is_circular_QMARK_(object){
var history = devtools.formatters.state.get_current_history.call(null);
return cljs.core.some.call(null,((function (history){
return (function (p1__36188_SHARP_){
return (p1__36188_SHARP_ === object);
});})(history))
,history);
});
devtools.formatters.state.prevent_recursion_QMARK_ = (function devtools$formatters$state$prevent_recursion_QMARK_(){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null)));
});
devtools.formatters.state.set_prevent_recursion = (function devtools$formatters$state$set_prevent_recursion(state,val){
if(!((val == null))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606));
}
});
devtools.formatters.state.get_managed_print_level = (function devtools$formatters$state$get_managed_print_level(){
return new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.set_managed_print_level = (function devtools$formatters$state$set_managed_print_level(state,val){
if(!((val == null))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"managed-print-level","managed-print-level",-844058473));
}
});
devtools.formatters.state.get_depth_budget = (function devtools$formatters$state$get_depth_budget(){
return new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888).cljs$core$IFn$_invoke$arity$1(devtools.formatters.state.get_current_state.call(null));
});
devtools.formatters.state.set_depth_budget = (function devtools$formatters$state$set_depth_budget(state,val){
if(!((val == null))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888),val);
} else {
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"depth-budget","depth-budget",-335905888));
}
});
devtools.formatters.state.reset_depth_limits = (function devtools$formatters$state$reset_depth_limits(state){
return devtools.formatters.state.set_managed_print_level.call(null,devtools.formatters.state.set_depth_budget.call(null,state,null),null);
});

//# sourceMappingURL=state.js.map?rel=1512565255477
