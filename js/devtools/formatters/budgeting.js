// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__13958__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__13958__auto__["add"]).call(o__13958__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__13958__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__13958__auto__["delete"]).call(o__13958__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__13958__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__13958__auto__["has"]).call(o__13958__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_(json_ml))){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){

var data = cljs.core.second(object_reference);
var _ = null;
var config = (data["config"]);
var G__16774 = data;
var target__13963__auto__ = G__16774;

(target__13963__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__16774;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_16779 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_(json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_16779);
} else {
var seq__16775_16780 = cljs.core.seq(json_ml);
var chunk__16776_16781 = null;
var count__16777_16782 = (0);
var i__16778_16783 = (0);
while(true){
if((i__16778_16783 < count__16777_16782)){
var item_16784 = chunk__16776_16781.cljs$core$IIndexed$_nth$arity$2(null,i__16778_16783);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_16784,new_depth_budget_16779) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_16784,new_depth_budget_16779));

var G__16785 = seq__16775_16780;
var G__16786 = chunk__16776_16781;
var G__16787 = count__16777_16782;
var G__16788 = (i__16778_16783 + (1));
seq__16775_16780 = G__16785;
chunk__16776_16781 = G__16786;
count__16777_16782 = G__16787;
i__16778_16783 = G__16788;
continue;
} else {
var temp__4657__auto___16789 = cljs.core.seq(seq__16775_16780);
if(temp__4657__auto___16789){
var seq__16775_16790__$1 = temp__4657__auto___16789;
if(cljs.core.chunked_seq_QMARK_(seq__16775_16790__$1)){
var c__8618__auto___16791 = cljs.core.chunk_first(seq__16775_16790__$1);
var G__16792 = cljs.core.chunk_rest(seq__16775_16790__$1);
var G__16793 = c__8618__auto___16791;
var G__16794 = cljs.core.count(c__8618__auto___16791);
var G__16795 = (0);
seq__16775_16780 = G__16792;
chunk__16776_16781 = G__16793;
count__16777_16782 = G__16794;
i__16778_16783 = G__16795;
continue;
} else {
var item_16796 = cljs.core.first(seq__16775_16790__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_16796,new_depth_budget_16779) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_16796,new_depth_budget_16779));

var G__16797 = cljs.core.next(seq__16775_16790__$1);
var G__16798 = null;
var G__16799 = (0);
var G__16800 = (0);
seq__16775_16780 = G__16797;
chunk__16776_16781 = G__16798;
count__16777_16782 = G__16799;
i__16778_16783 = G__16800;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref(cljs.core.cst$kw$initial_DASH_hierarchy_DASH_depth_DASH_budget);
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__7779__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});
