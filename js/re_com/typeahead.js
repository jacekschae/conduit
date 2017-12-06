// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__45789){
var map__45790 = p__45789;
var map__45790__$1 = ((((!((map__45790 == null)))?((((map__45790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45790):map__45790);
var args = map__45790__$1;
var on_change = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__45790__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__45792 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__28485__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__45792,external_model_value);
} else {
return G__45792;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__45793,event){
var map__45794 = p__45793;
var map__45794__$1 = ((((!((map__45794 == null)))?((((map__45794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45794):map__45794);
var state = map__45794__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__45794__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__45794__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__45796 = event;
var G__45796__$1 = (((G__45796 instanceof cljs.core.Keyword))?G__45796.fqn:null);
switch (G__45796__$1) {
case "input-text-blurred":
var and__28473__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__28473__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__28485__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45796__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__45798,event){
var map__45799 = p__45798;
var map__45799__$1 = ((((!((map__45799 == null)))?((((map__45799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45799):map__45799);
var state = map__45799__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__45799__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__45801 = event;
var G__45801__$1 = (((G__45801 instanceof cljs.core.Keyword))?G__45801.fqn:null);
switch (G__45801__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__45803,new_value){
var map__45804 = p__45803;
var map__45804__$1 = ((((!((map__45804 == null)))?((((map__45804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45804):map__45804);
var state = map__45804__$1;
var on_change = cljs.core.get.call(null,map__45804__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__45806,suggestion){
var map__45807 = p__45806;
var map__45807__$1 = ((((!((map__45807 == null)))?((((map__45807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45807):map__45807);
var state = map__45807__$1;
var suggestion_to_string = cljs.core.get.call(null,map__45807__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__45809 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__45809,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__45809;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__45810,index){
var map__45811 = p__45810;
var map__45811__$1 = ((((!((map__45811 == null)))?((((map__45811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45811):map__45811);
var state = map__45811__$1;
var suggestions = cljs.core.get.call(null,map__45811__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__45813 = state;
var G__45813__$1 = cljs.core.assoc.call(null,G__45813,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__45813__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__45813__$1,suggestion):G__45813__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__45813__$2,suggestion);
} else {
return G__45813__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__45814,index){
var map__45815 = p__45814;
var map__45815__$1 = ((((!((map__45815 == null)))?((((map__45815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45815):map__45815);
var state = map__45815__$1;
var suggestions = cljs.core.get.call(null,map__45815__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__45817){
var map__45818 = p__45817;
var map__45818__$1 = ((((!((map__45818 == null)))?((((map__45818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45818):map__45818);
var state = map__45818__$1;
var suggestion_active_index = cljs.core.get.call(null,map__45818__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__45820 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__45820,suggestion_active_index);
} else {
return G__45820;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__45821){
var map__45822 = p__45821;
var map__45822__$1 = ((((!((map__45822 == null)))?((((map__45822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45822):map__45822);
var state = map__45822__$1;
var suggestions = cljs.core.get.call(null,map__45822__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__45822__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__45824 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__45824,re_com.typeahead.wrap.call(null,((function (){var or__28485__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__45824;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__45825){
var map__45826 = p__45825;
var map__45826__$1 = ((((!((map__45826 == null)))?((((map__45826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45826.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45826):map__45826);
var state = map__45826__$1;
var suggestions = cljs.core.get.call(null,map__45826__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__45826__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__45828 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__45828,re_com.typeahead.wrap.call(null,((function (){var or__28485__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__45828;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__45829 = state;
var G__45829__$1 = re_com.typeahead.clear_suggestions.call(null,G__45829)
;
var G__45829__$2 = cljs.core.assoc.call(null,G__45829__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__45829__$2,null);
} else {
return G__45829__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__45830){
var map__45831 = p__45830;
var map__45831__$1 = ((((!((map__45831 == null)))?((((map__45831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45831):map__45831);
var state = map__45831__$1;
var input_text = cljs.core.get.call(null,map__45831__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__45831__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__45833 = state;
if(cljs.core.truth_((function (){var and__28473__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__28473__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__28473__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__45833,input_text);
} else {
return G__45833;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__45834_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__45834_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__){
return (function (state_45851){
var state_val_45852 = (state_45851[(1)]);
if((state_val_45852 === (1))){
var state_45851__$1 = state_45851;
var statearr_45853_45865 = state_45851__$1;
(statearr_45853_45865[(2)] = null);

(statearr_45853_45865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45852 === (2))){
var state_45851__$1 = state_45851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45851__$1,(4),c_search);
} else {
if((state_val_45852 === (3))){
var inst_45849 = (state_45851[(2)]);
var state_45851__$1 = state_45851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45851__$1,inst_45849);
} else {
if((state_val_45852 === (4))){
var inst_45837 = (state_45851[(7)]);
var inst_45837__$1 = (state_45851[(2)]);
var inst_45838 = cljs.core.deref.call(null,state_atom);
var inst_45839 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_45838);
var inst_45840 = cljs.core._EQ_.call(null,"",inst_45837__$1);
var state_45851__$1 = (function (){var statearr_45854 = state_45851;
(statearr_45854[(7)] = inst_45837__$1);

(statearr_45854[(8)] = inst_45839);

return statearr_45854;
})();
if(inst_45840){
var statearr_45855_45866 = state_45851__$1;
(statearr_45855_45866[(1)] = (5));

} else {
var statearr_45856_45867 = state_45851__$1;
(statearr_45856_45867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45852 === (5))){
var inst_45842 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_45851__$1 = state_45851;
var statearr_45857_45868 = state_45851__$1;
(statearr_45857_45868[(2)] = inst_45842);

(statearr_45857_45868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45852 === (6))){
var inst_45837 = (state_45851[(7)]);
var inst_45839 = (state_45851[(8)]);
var inst_45844 = re_com.typeahead.search_data_source_BANG_.call(null,inst_45839,state_atom,inst_45837);
var state_45851__$1 = state_45851;
var statearr_45858_45869 = state_45851__$1;
(statearr_45858_45869[(2)] = inst_45844);

(statearr_45858_45869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45852 === (7))){
var inst_45846 = (state_45851[(2)]);
var state_45851__$1 = (function (){var statearr_45859 = state_45851;
(statearr_45859[(9)] = inst_45846);

return statearr_45859;
})();
var statearr_45860_45870 = state_45851__$1;
(statearr_45860_45870[(2)] = null);

(statearr_45860_45870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__39120__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto____0 = (function (){
var statearr_45861 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45861[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto__);

(statearr_45861[(1)] = (1));

return statearr_45861;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto____1 = (function (state_45851){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45862){if((e45862 instanceof Object)){
var ex__39036__auto__ = e45862;
var statearr_45863_45871 = state_45851;
(statearr_45863_45871[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45872 = state_45851;
state_45851 = G__45872;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto__ = function(state_45851){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto____1.call(this,state_45851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__))
})();
var state__39122__auto__ = (function (){var statearr_45864 = f__39121__auto__.call(null);
(statearr_45864[(6)] = c__39120__auto__);

return statearr_45864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__))
);

return c__39120__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__45874 = cljs.core.deref.call(null,state_atom);
var map__45874__$1 = ((((!((map__45874 == null)))?((((map__45874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45874):map__45874);
var state = map__45874__$1;
var input_text = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__45874__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__45874,map__45874__$1,state,input_text,c_input){
return (function (p1__45873_SHARP_){
var G__45876 = p1__45873_SHARP_;
var G__45876__$1 = cljs.core.assoc.call(null,G__45876,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__45876__$1,new_text);
} else {
return G__45876__$1;
}
});})(map__45874,map__45874__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__45877 = cljs.core._EQ_;
var expr__45878 = event.which;
if(cljs.core.truth_(pred__45877.call(null,goog.events.KeyCodes.UP,expr__45878))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__45877.call(null,goog.events.KeyCodes.DOWN,expr__45878))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__45877.call(null,goog.events.KeyCodes.ENTER,expr__45878))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__45877.call(null,goog.events.KeyCodes.ESC,expr__45878))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__45877.call(null,goog.events.KeyCodes.TAB,expr__45878))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__29663__auto__ = [];
var len__29656__auto___45902 = arguments.length;
var i__29657__auto___45903 = (0);
while(true){
if((i__29657__auto___45903 < len__29656__auto___45902)){
args__29663__auto__.push((arguments[i__29657__auto___45903]));

var G__45904 = (i__29657__auto___45903 + (1));
i__29657__auto___45903 = G__45904;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__45882){
var map__45883 = p__45882;
var map__45883__$1 = ((((!((map__45883 == null)))?((((map__45883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45883):map__45883);
var args = map__45883__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__45885 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__45885__$1 = ((((!((map__45885 == null)))?((((map__45885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45885):map__45885);
var state = map__45885__$1;
var c_search = cljs.core.get.call(null,map__45885__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__45885__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function() { 
var G__45905__delegate = function (p__45887){
var map__45888 = p__45887;
var map__45888__$1 = ((((!((map__45888 == null)))?((((map__45888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45888):map__45888);
var args__$1 = map__45888__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__45888__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__45890 = cljs.core.deref.call(null,state_atom);
var map__45890__$1 = ((((!((map__45890 == null)))?((((map__45890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45890):map__45890);
var state__$1 = map__45890__$1;
var suggestions = cljs.core.get.call(null,map__45890__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__45890__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__45890__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__45890__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__28485__auto__ = width;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__28485__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__29293__auto__ = ((function (map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function re_com$typeahead$iter__45892(s__45893){
return (new cljs.core.LazySeq(null,((function (map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function (){
var s__45893__$1 = s__45893;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45893__$1);
if(temp__4657__auto__){
var s__45893__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45893__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__45893__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__45895 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__45894 = (0);
while(true){
if((i__45894 < size__29292__auto__)){
var vec__45896 = cljs.core._nth.call(null,c__29291__auto__,i__45894);
var i = cljs.core.nth.call(null,vec__45896,(0),null);
var s = cljs.core.nth.call(null,vec__45896,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__45895,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__45894,selected_QMARK_,vec__45896,i,s,c__29291__auto__,size__29292__auto__,b__45895,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__45894,selected_QMARK_,vec__45896,i,s,c__29291__auto__,size__29292__auto__,b__45895,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__45894,selected_QMARK_,vec__45896,i,s,c__29291__auto__,size__29292__auto__,b__45895,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function (p1__45880_SHARP_){
p1__45880_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__45894,selected_QMARK_,vec__45896,i,s,c__29291__auto__,size__29292__auto__,b__45895,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__45906 = (i__45894 + (1));
i__45894 = G__45906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45895),re_com$typeahead$iter__45892.call(null,cljs.core.chunk_rest.call(null,s__45893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45895),null);
}
} else {
var vec__45899 = cljs.core.first.call(null,s__45893__$2);
var i = cljs.core.nth.call(null,vec__45899,(0),null);
var s = cljs.core.nth.call(null,vec__45899,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__45899,i,s,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__45899,i,s,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__45899,i,s,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args){
return (function (p1__45880_SHARP_){
p1__45880_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__45899,i,s,s__45893__$2,temp__4657__auto__,map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__45892.call(null,cljs.core.rest.call(null,s__45893__$2)));
}
} else {
return null;
}
break;
}
});})(map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
,null,null));
});})(map__45890,map__45890__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__45888,map__45888__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
;
return iter__29293__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__45905 = function (var_args){
var p__45887 = null;
if (arguments.length > 0) {
var G__45907__i = 0, G__45907__a = new Array(arguments.length -  0);
while (G__45907__i < G__45907__a.length) {G__45907__a[G__45907__i] = arguments[G__45907__i + 0]; ++G__45907__i;}
  p__45887 = new cljs.core.IndexedSeq(G__45907__a,0,null);
} 
return G__45905__delegate.call(this,p__45887);};
G__45905.cljs$lang$maxFixedArity = 0;
G__45905.cljs$lang$applyTo = (function (arglist__45908){
var p__45887 = cljs.core.seq(arglist__45908);
return G__45905__delegate(p__45887);
});
G__45905.cljs$core$IFn$_invoke$arity$variadic = G__45905__delegate;
return G__45905;
})()
;
;})(map__45885,map__45885__$1,state,c_search,c_input,state_atom,input_text_model,map__45883,map__45883__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq45881){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45881));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__39120__auto___45989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45989,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45989,out){
return (function (state_45959){
var state_val_45960 = (state_45959[(1)]);
if((state_val_45960 === (7))){
var inst_45914 = (state_45959[(2)]);
var state_45959__$1 = state_45959;
var statearr_45961_45990 = state_45959__$1;
(statearr_45961_45990[(2)] = inst_45914);

(statearr_45961_45990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (1))){
var inst_45909 = null;
var state_45959__$1 = (function (){var statearr_45962 = state_45959;
(statearr_45962[(7)] = inst_45909);

return statearr_45962;
})();
var statearr_45963_45991 = state_45959__$1;
(statearr_45963_45991[(2)] = null);

(statearr_45963_45991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (4))){
var state_45959__$1 = state_45959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45959__$1,(7),in$);
} else {
if((state_val_45960 === (15))){
var inst_45944 = (state_45959[(2)]);
var state_45959__$1 = (function (){var statearr_45964 = state_45959;
(statearr_45964[(8)] = inst_45944);

return statearr_45964;
})();
var statearr_45965_45992 = state_45959__$1;
(statearr_45965_45992[(2)] = null);

(statearr_45965_45992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (13))){
var inst_45932 = (state_45959[(9)]);
var inst_45946 = cljs.core._EQ_.call(null,inst_45932,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_45959__$1 = state_45959;
if(inst_45946){
var statearr_45966_45993 = state_45959__$1;
(statearr_45966_45993[(1)] = (16));

} else {
var statearr_45967_45994 = state_45959__$1;
(statearr_45967_45994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (6))){
var inst_45918 = (state_45959[(10)]);
var inst_45917 = (state_45959[(2)]);
var inst_45918__$1 = cljs.core.async.timeout.call(null,ms);
var inst_45926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45927 = [in$,inst_45918__$1];
var inst_45928 = (new cljs.core.PersistentVector(null,2,(5),inst_45926,inst_45927,null));
var state_45959__$1 = (function (){var statearr_45968 = state_45959;
(statearr_45968[(11)] = inst_45917);

(statearr_45968[(10)] = inst_45918__$1);

return statearr_45968;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45959__$1,(8),inst_45928);
} else {
if((state_val_45960 === (17))){
var state_45959__$1 = state_45959;
var statearr_45969_45995 = state_45959__$1;
(statearr_45969_45995[(2)] = null);

(statearr_45969_45995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (3))){
var inst_45957 = (state_45959[(2)]);
var state_45959__$1 = state_45959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45959__$1,inst_45957);
} else {
if((state_val_45960 === (12))){
var inst_45917 = (state_45959[(11)]);
var state_45959__$1 = state_45959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45959__$1,(15),out,inst_45917);
} else {
if((state_val_45960 === (2))){
var inst_45909 = (state_45959[(7)]);
var inst_45911 = (inst_45909 == null);
var state_45959__$1 = state_45959;
if(cljs.core.truth_(inst_45911)){
var statearr_45970_45996 = state_45959__$1;
(statearr_45970_45996[(1)] = (4));

} else {
var statearr_45971_45997 = state_45959__$1;
(statearr_45971_45997[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (11))){
var inst_45954 = (state_45959[(2)]);
var inst_45909 = inst_45954;
var state_45959__$1 = (function (){var statearr_45972 = state_45959;
(statearr_45972[(7)] = inst_45909);

return statearr_45972;
})();
var statearr_45973_45998 = state_45959__$1;
(statearr_45973_45998[(2)] = null);

(statearr_45973_45998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (9))){
var inst_45930 = (state_45959[(12)]);
var inst_45938 = cljs.core.nth.call(null,inst_45930,(0),null);
var inst_45939 = cljs.core.nth.call(null,inst_45930,(1),null);
var state_45959__$1 = (function (){var statearr_45974 = state_45959;
(statearr_45974[(13)] = inst_45939);

return statearr_45974;
})();
var statearr_45975_45999 = state_45959__$1;
(statearr_45975_45999[(2)] = inst_45938);

(statearr_45975_45999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (5))){
var inst_45909 = (state_45959[(7)]);
var state_45959__$1 = state_45959;
var statearr_45976_46000 = state_45959__$1;
(statearr_45976_46000[(2)] = inst_45909);

(statearr_45976_46000[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (14))){
var inst_45952 = (state_45959[(2)]);
var state_45959__$1 = state_45959;
var statearr_45977_46001 = state_45959__$1;
(statearr_45977_46001[(2)] = inst_45952);

(statearr_45977_46001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (16))){
var inst_45931 = (state_45959[(14)]);
var state_45959__$1 = state_45959;
var statearr_45978_46002 = state_45959__$1;
(statearr_45978_46002[(2)] = inst_45931);

(statearr_45978_46002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (10))){
var inst_45932 = (state_45959[(9)]);
var inst_45918 = (state_45959[(10)]);
var inst_45941 = cljs.core._EQ_.call(null,inst_45932,inst_45918);
var state_45959__$1 = state_45959;
if(inst_45941){
var statearr_45979_46003 = state_45959__$1;
(statearr_45979_46003[(1)] = (12));

} else {
var statearr_45980_46004 = state_45959__$1;
(statearr_45980_46004[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (18))){
var inst_45950 = (state_45959[(2)]);
var state_45959__$1 = state_45959;
var statearr_45981_46005 = state_45959__$1;
(statearr_45981_46005[(2)] = inst_45950);

(statearr_45981_46005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45960 === (8))){
var inst_45932 = (state_45959[(9)]);
var inst_45930 = (state_45959[(12)]);
var inst_45930__$1 = (state_45959[(2)]);
var inst_45931 = cljs.core.nth.call(null,inst_45930__$1,(0),null);
var inst_45932__$1 = cljs.core.nth.call(null,inst_45930__$1,(1),null);
var inst_45933 = cljs.core._EQ_.call(null,inst_45932__$1,in$);
var state_45959__$1 = (function (){var statearr_45982 = state_45959;
(statearr_45982[(14)] = inst_45931);

(statearr_45982[(9)] = inst_45932__$1);

(statearr_45982[(12)] = inst_45930__$1);

return statearr_45982;
})();
if(inst_45933){
var statearr_45983_46006 = state_45959__$1;
(statearr_45983_46006[(1)] = (9));

} else {
var statearr_45984_46007 = state_45959__$1;
(statearr_45984_46007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39120__auto___45989,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45989,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__39033__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__39033__auto____0 = (function (){
var statearr_45985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45985[(0)] = re_com$typeahead$debounce_$_state_machine__39033__auto__);

(statearr_45985[(1)] = (1));

return statearr_45985;
});
var re_com$typeahead$debounce_$_state_machine__39033__auto____1 = (function (state_45959){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45986){if((e45986 instanceof Object)){
var ex__39036__auto__ = e45986;
var statearr_45987_46008 = state_45959;
(statearr_45987_46008[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46009 = state_45959;
state_45959 = G__46009;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__39033__auto__ = function(state_45959){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__39033__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__39033__auto____1.call(this,state_45959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__39033__auto____0;
re_com$typeahead$debounce_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__39033__auto____1;
return re_com$typeahead$debounce_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45989,out))
})();
var state__39122__auto__ = (function (){var statearr_45988 = f__39121__auto__.call(null);
(statearr_45988[(6)] = c__39120__auto___45989);

return statearr_45988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45989,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1512565261254
