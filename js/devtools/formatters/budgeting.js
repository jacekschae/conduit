// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__35207__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__35207__auto__["add"]).call(o__35207__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__35207__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__35207__auto__["delete"]).call(o__35207__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__35207__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__35207__auto__["has"]).call(o__35207__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__37741 = data;
var target__35212__auto__ = G__37741;
if(cljs.core.truth_(target__35212__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37741)].join('')),"\n","target__35212__auto__"].join('')));
}

(target__35212__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__37741;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_37746 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_37746);
} else {
var seq__37742_37747 = cljs.core.seq.call(null,json_ml);
var chunk__37743_37748 = null;
var count__37744_37749 = (0);
var i__37745_37750 = (0);
while(true){
if((i__37745_37750 < count__37744_37749)){
var item_37751 = cljs.core._nth.call(null,chunk__37743_37748,i__37745_37750);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_37751,new_depth_budget_37746);

var G__37752 = seq__37742_37747;
var G__37753 = chunk__37743_37748;
var G__37754 = count__37744_37749;
var G__37755 = (i__37745_37750 + (1));
seq__37742_37747 = G__37752;
chunk__37743_37748 = G__37753;
count__37744_37749 = G__37754;
i__37745_37750 = G__37755;
continue;
} else {
var temp__4657__auto___37756 = cljs.core.seq.call(null,seq__37742_37747);
if(temp__4657__auto___37756){
var seq__37742_37757__$1 = temp__4657__auto___37756;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37742_37757__$1)){
var c__29324__auto___37758 = cljs.core.chunk_first.call(null,seq__37742_37757__$1);
var G__37759 = cljs.core.chunk_rest.call(null,seq__37742_37757__$1);
var G__37760 = c__29324__auto___37758;
var G__37761 = cljs.core.count.call(null,c__29324__auto___37758);
var G__37762 = (0);
seq__37742_37747 = G__37759;
chunk__37743_37748 = G__37760;
count__37744_37749 = G__37761;
i__37745_37750 = G__37762;
continue;
} else {
var item_37763 = cljs.core.first.call(null,seq__37742_37757__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_37763,new_depth_budget_37746);

var G__37764 = cljs.core.next.call(null,seq__37742_37757__$1);
var G__37765 = null;
var G__37766 = (0);
var G__37767 = (0);
seq__37742_37747 = G__37764;
chunk__37743_37748 = G__37765;
count__37744_37749 = G__37766;
i__37745_37750 = G__37767;
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
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__28485__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1512565256804
