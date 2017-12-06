// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.dropdown');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
/**
 * In a vector of maps (where each map has an :id), return the id of the choice offset posititions away
 * from id (usually +1 or -1 to go to next/previous). Also accepts :start and :end
 */
re_com.dropdown.move_to_new_choice = (function re_com$dropdown$move_to_new_choice(choices,id_fn,id,offset){
var current_index = re_com.util.position_for_id.call(null,id,choices,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn);
var new_index = ((cljs.core._EQ_.call(null,offset,new cljs.core.Keyword(null,"start","start",-355208981)))?(0):((cljs.core._EQ_.call(null,offset,new cljs.core.Keyword(null,"end","end",-268185958)))?(cljs.core.count.call(null,choices) - (1)):(((current_index == null))?(0):cljs.core.mod.call(null,(current_index + offset),cljs.core.count.call(null,choices))
)));
if(cljs.core.truth_((function (){var and__28473__auto__ = new_index;
if(cljs.core.truth_(and__28473__auto__)){
return (cljs.core.count.call(null,choices) > (0));
} else {
return and__28473__auto__;
}
})())){
return id_fn.call(null,cljs.core.nth.call(null,choices,new_index));
} else {
return null;
}
});
/**
 * If necessary, inserts group headings entries into the choices
 */
re_com.dropdown.choices_with_group_headings = (function re_com$dropdown$choices_with_group_headings(opts,group_fn){
var groups = cljs.core.partition_by.call(null,group_fn,opts);
var group_headers = cljs.core.map.call(null,((function (groups){
return (function (p1__46663_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"group","group",582596132)],[cljs.core.gensym.call(null),p1__46663_SHARP_]);
});})(groups))
,cljs.core.map.call(null,group_fn,cljs.core.map.call(null,cljs.core.first,groups)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_headers,groups], null);
});
/**
 * Filter a list of choices based on a filter string using plain string searches (case insensitive). Less powerful
 * than regex's but no confusion with reserved characters
 */
re_com.dropdown.filter_choices = (function re_com$dropdown$filter_choices(choices,group_fn,label_fn,filter_text){
var lower_filter_text = clojure.string.lower_case.call(null,filter_text);
var filter_fn = ((function (lower_filter_text){
return (function (opt){
var group = (((group_fn.call(null,opt) == null))?"":group_fn.call(null,opt));
var label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(label_fn.call(null,opt))].join('');
return ((clojure.string.lower_case.call(null,group).indexOf(lower_filter_text) >= (0))) || ((clojure.string.lower_case.call(null,label).indexOf(lower_filter_text) >= (0)));
});})(lower_filter_text))
;
return cljs.core.filter.call(null,filter_fn,choices);
});
/**
 * Filter a list of choices based on a filter string using regex's (case insensitive). More powerful but can cause
 * confusion for users entering reserved characters such as [ ] * + . ( ) etc.
 */
re_com.dropdown.filter_choices_regex = (function re_com$dropdown$filter_choices_regex(choices,group_fn,label_fn,filter_text){
var re = (function (){try{return (new RegExp(filter_text,"i"));
}catch (e46664){if((e46664 instanceof Object)){
var e = e46664;
return null;
} else {
throw e46664;

}
}})();
var filter_fn = cljs.core.partial.call(null,((function (re){
return (function (re__$1,opt){
if((re__$1 == null)){
return null;
} else {
var or__28485__auto__ = re__$1.test(group_fn.call(null,opt));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return re__$1.test(label_fn.call(null,opt));
}
}
});})(re))
,re);
return cljs.core.filter.call(null,filter_fn,choices);
});
/**
 * Filter a list of choices extra data within the choices vector
 */
re_com.dropdown.filter_choices_by_keyword = (function re_com$dropdown$filter_choices_by_keyword(choices,keyword,value){
var filter_fn = (function (opt){
return (keyword.call(null,opt).indexOf(value) >= (0));
});
return cljs.core.filter.call(null,filter_fn,choices);
});
re_com.dropdown.show_selected_item = (function re_com$dropdown$show_selected_item(node){
var item_offset_top = node.offsetTop;
var item_offset_bottom = (item_offset_top + node.clientHeight);
var parent = node.parentNode;
var parent_height = parent.clientHeight;
var parent_visible_top = parent.scrollTop;
var parent_visible_bottom = (parent_visible_top + parent_height);
var new_scroll_top = (((item_offset_bottom > parent_visible_bottom))?(function (){var x__28835__auto__ = (item_offset_bottom - parent_height);
var y__28836__auto__ = (0);
return ((x__28835__auto__ > y__28836__auto__) ? x__28835__auto__ : y__28836__auto__);
})():(((item_offset_top < parent_visible_top))?item_offset_top:null));
if(cljs.core.truth_(new_scroll_top)){
return parent.scrollTop = new_scroll_top;
} else {
return null;
}
});
/**
 * Render a group heading
 */
re_com.dropdown.make_group_heading = (function re_com$dropdown$make_group_heading(m){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.group-result","li.group-result",1074686727),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(m)], null));
});
/**
 * Render a choice item and set up appropriate mouse events
 */
re_com.dropdown.choice_item = (function re_com$dropdown$choice_item(id,label,on_click,internal_model){
var mouse_over_QMARK_ = reagent.core.atom.call(null,false);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (mouse_over_QMARK_){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
var selected = cljs.core._EQ_.call(null,cljs.core.deref.call(null,internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item.call(null,node);
} else {
return null;
}
});})(mouse_over_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (mouse_over_QMARK_){
return (function (this$){
var node = reagent.core.dom_node.call(null,this$);
var selected = cljs.core._EQ_.call(null,cljs.core.deref.call(null,internal_model),id);
if(selected){
return re_com.dropdown.show_selected_item.call(null,node);
} else {
return null;
}
});})(mouse_over_QMARK_))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"choice-item",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (mouse_over_QMARK_){
return (function (id__$1,label__$1,on_click__$1,internal_model__$1){
var selected = cljs.core._EQ_.call(null,cljs.core.deref.call(null,internal_model__$1),id__$1);
var class$ = ((selected)?"highlighted":(cljs.core.truth_(cljs.core.deref.call(null,mouse_over_QMARK_))?"mouseover":null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["active-result group-option ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected,class$,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,mouse_over_QMARK_,true);

return null;
});})(selected,class$,mouse_over_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (selected,class$,mouse_over_QMARK_){
return (function (event){
cljs.core.reset_BANG_.call(null,mouse_over_QMARK_,false);

return null;
});})(selected,class$,mouse_over_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected,class$,mouse_over_QMARK_){
return (function (event){
on_click__$1.call(null,id__$1);

return null;
});})(selected,class$,mouse_over_QMARK_))
], null),label__$1], null);
});})(mouse_over_QMARK_))
], null));
});
re_com.dropdown.make_choice_item = (function re_com$dropdown$make_choice_item(id_fn,render_fn,callback,internal_model,opt){
var id = id_fn.call(null,opt);
var markup = render_fn.call(null,opt);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.choice_item,id,markup,callback,internal_model], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
});
/**
 * Base function (before lifecycle metadata) to render a filter text box
 */
re_com.dropdown.filter_text_box_base = (function re_com$dropdown$filter_text_box_base(filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,set_filter_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chosen-search","div.chosen-search",-210987404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(filter_box_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,filter_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
set_filter_text.call(null,event.target.value);

return null;
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (event){
if(cljs.core.truth_(key_handler.call(null,event))){
} else {
event.preventDefault();
}

return null;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (event){
cljs.core.reset_BANG_.call(null,drop_showing_QMARK_,false);

return null;
})], null)], null)], null);
});
/**
 * Render a filter text box
 */
re_com.dropdown.filter_text_box = cljs.core.with_meta.call(null,re_com.dropdown.filter_text_box_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__46665_SHARP_){
var node = reagent.core.dom_node.call(null,p1__46665_SHARP_).firstChild;
return node.focus();
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (p1__46666_SHARP_){
var node = reagent.core.dom_node.call(null,p1__46666_SHARP_).firstChild;
return node.focus();
})], null));
/**
 * Render the top part of the dropdown, with the clickable area and the up/down arrow
 */
re_com.dropdown.dropdown_top = (function re_com$dropdown$dropdown_top(){
var ignore_click = cljs.core.atom.call(null,false);
return ((function (ignore_click){
return (function (internal_model,choices,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_){
var _ = reagent.core.set_state.call(null,reagent.core.current_component.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),filter_box_QMARK_], null));
var text = (cljs.core.truth_(cljs.core.deref.call(null,internal_model))?label_fn.call(null,re_com.util.item_for_id.call(null,cljs.core.deref.call(null,internal_model),choices,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),id_fn)):placeholder);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.chosen-single.chosen-default","a.chosen-single.chosen-default",-2089562458),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(cljs.core.truth_(tab_index)?tab_index:null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (_,text,ignore_click){
return (function (event){
if(cljs.core.truth_(cljs.core.deref.call(null,ignore_click))){
cljs.core.reset_BANG_.call(null,ignore_click,false);
} else {
dropdown_click.call(null);
}

return null;
});})(_,text,ignore_click))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (_,text,ignore_click){
return (function (event){
if(cljs.core.truth_(cljs.core.deref.call(null,drop_showing_QMARK_))){
cljs.core.reset_BANG_.call(null,ignore_click,true);
} else {
}

return null;
});})(_,text,ignore_click))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (_,text,ignore_click){
return (function (event){
key_handler.call(null,event);

if(cljs.core._EQ_.call(null,event.which,(13))){
cljs.core.reset_BANG_.call(null,ignore_click,true);
} else {
}

return null;
});})(_,text,ignore_click))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(title_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),text], null):null),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null)], null)], null);
});
;})(ignore_click))
});
re_com.dropdown.fn_or_vector_of_maps_QMARK_ = (function re_com$dropdown$fn_or_vector_of_maps_QMARK_(v){
var or__28485__auto__ = cljs.core.fn_QMARK_.call(null,v);
if(or__28485__auto__){
return or__28485__auto__;
} else {
return re_com.validate.vector_of_maps_QMARK_.call(null,v);
}
});
/**
 * Load choices if choices is callback.
 */
re_com.dropdown.load_choices_STAR_ = (function re_com$dropdown$load_choices_STAR_(choices_state,choices,text,regex_filter_QMARK_){
var id = (new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state)) + (1));
var callback = ((function (id){
return (function (p__46669){
var map__46670 = p__46669;
var map__46670__$1 = ((((!((map__46670 == null)))?((((map__46670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46670):map__46670);
var args = map__46670__$1;
var result = cljs.core.get.call(null,map__46670__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.call(null,map__46670__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.println.call(null,"single-dropdown callback",id,args,cljs.core.deref.call(null,choices_state));

if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state)))){
return cljs.core.swap_BANG_.call(null,choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),error,new cljs.core.Keyword(null,"choices","choices",1385611597),result);
} else {
return null;
}
});})(id))
;
cljs.core.swap_BANG_.call(null,choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"timer","timer",-1266967739),null);

return choices.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter-text","filter-text",-381699202),text,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),regex_filter_QMARK_], null),((function (id,callback){
return (function (p1__46667_SHARP_){
return callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),p1__46667_SHARP_], null));
});})(id,callback))
,((function (id,callback){
return (function (p1__46668_SHARP_){
return callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__46668_SHARP_], null));
});})(id,callback))
);
});
/**
 * Load choices or schedule lodaing depending on debounce?
 */
re_com.dropdown.load_choices = (function re_com$dropdown$load_choices(choices_state,choices,debounce_delay,text,regex_filter_QMARK_,debounce_QMARK_){
if(cljs.core.fn_QMARK_.call(null,choices)){
var temp__4657__auto___46672 = new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state));
if(cljs.core.truth_(temp__4657__auto___46672)){
var timer_46673 = temp__4657__auto___46672;
clearTimeout(timer_46673);
} else {
}

if(cljs.core.truth_(debounce_QMARK_)){
var timer = setTimeout((function (){
return re_com.dropdown.load_choices_STAR_.call(null,choices_state,choices,text,regex_filter_QMARK_);
}),debounce_delay);
return cljs.core.swap_BANG_.call(null,choices_state,cljs.core.assoc,new cljs.core.Keyword(null,"timer","timer",-1266967739),timer);
} else {
return re_com.dropdown.load_choices_STAR_.call(null,choices_state,choices,text,regex_filter_QMARK_);
}
} else {
return null;
}
});
re_com.dropdown.single_dropdown_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of choices | atom | (opts, done, fail) -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.dropdown.fn_or_vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each is expected to have an id, label and, optionally, a group, provided by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id-fn"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":label-fn"], null)," & ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":group-fn"], null),". May also be a callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(opts, done, fail)"], null)," where opts is map of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":filter-text"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":regex-filter?."], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"the id of a choice | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the id of the selected choice. If nil, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":placeholder"], null)," text is shown"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when a new choice is selected. Passed the id of new choice"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its unique identifier (aka id)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its displayable label."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348),"choice -> anything",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns its group identifier"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"choice -> string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"given an element of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null),", returns the markup that will be rendered for that choice. Defaults to the label if no custom markup is required."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, no user selection is allowed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, a filter text field is placed at the top of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the filter text field will support JavaScript regular expressions. If false, just plain text"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text when no selection"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title?","title?",-1510254555),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, allows the title for the selected dropdown to be displayed via a mouse over. Handy when dropdown width is small and text is truncated"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"100%",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the CSS width. e.g.: \"500px\" or \"20em\""], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"240px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the maximum height of the dropdown part"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"component's tabindex. A value of -1 removes from order"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"delay to debounce loading requests when using callback ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":choices"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * Render a single dropdown component which emulates the bootstrap-choosen style. Sample choices object:
 *   [{:id "AU" :label "Australia"      :group "Group 1"}
 *    {:id "US" :label "United States"  :group "Group 1"}
 *    {:id "GB" :label "United Kingdom" :group "Group 1"}
 *    {:id "AF" :label "Afghanistan"    :group "Group 2"}]
 */
re_com.dropdown.single_dropdown = (function re_com$dropdown$single_dropdown(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46692 = arguments.length;
var i__29657__auto___46693 = (0);
while(true){
if((i__29657__auto___46693 < len__29656__auto___46692)){
args__29663__auto__.push((arguments[i__29657__auto___46693]));

var G__46694 = (i__29657__auto___46693 + (1));
i__29657__auto___46693 = G__46694;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__46679){
var map__46680 = p__46679;
var map__46680__$1 = ((((!((map__46680 == null)))?((((map__46680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46680):map__46680);
var args = map__46680__$1;
var choices = cljs.core.get.call(null,map__46680__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var model = cljs.core.get.call(null,map__46680__$1,new cljs.core.Keyword(null,"model","model",331153215));
var regex_filter_QMARK_ = cljs.core.get.call(null,map__46680__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var debounce_delay = cljs.core.get.call(null,map__46680__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),(250));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.dropdown.single_dropdown_args_desc),args,"single-dropdown")))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var external_model = reagent.core.atom.call(null,re_com.util.deref_or_value.call(null,model));
var internal_model = reagent.core.atom.call(null,cljs.core.deref.call(null,external_model));
var drop_showing_QMARK_ = reagent.core.atom.call(null,false);
var filter_text = reagent.core.atom.call(null,"");
var choices_fn_QMARK_ = cljs.core.fn_QMARK_.call(null,choices);
var choices_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),choices_fn_QMARK_,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"choices","choices",1385611597),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"timer","timer",-1266967739),null], null));
var load_choices = cljs.core.partial.call(null,re_com.dropdown.load_choices,choices_state,choices,debounce_delay);
var set_filter_text = ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (text,p__46682,debounce_QMARK_){
var map__46683 = p__46682;
var map__46683__$1 = ((((!((map__46683 == null)))?((((map__46683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46683):map__46683);
var args__$1 = map__46683__$1;
var regex_filter_QMARK___$1 = cljs.core.get.call(null,map__46683__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
load_choices.call(null,text,regex_filter_QMARK___$1,debounce_QMARK_);

return cljs.core.reset_BANG_.call(null,filter_text,text);
});})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
load_choices.call(null,"",regex_filter_QMARK_,false);

return ((function (external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function() { 
var G__46695__delegate = function (p__46685){
var map__46686 = p__46685;
var map__46686__$1 = ((((!((map__46686 == null)))?((((map__46686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46686):map__46686);
var args__$1 = map__46686__$1;
var group_fn = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"group-fn","group-fn",129203707),new cljs.core.Keyword(null,"group","group",582596132));
var disabled_QMARK_ = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model__$1 = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var label_fn = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"label-fn","label-fn",-860923263),new cljs.core.Keyword(null,"label","label",1718410804));
var tab_index = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"tab-index","tab-index",895755393));
var max_height = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var placeholder = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var title_QMARK_ = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"title?","title?",-1510254555));
var render_fn = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),label_fn);
var width = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var regex_filter_QMARK___$1 = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"regex-filter?","regex-filter?",-824895668));
var choices__$1 = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var id_fn = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var style = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debounce_delay__$1 = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var class$ = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var filter_box_QMARK_ = cljs.core.get.call(null,map__46686__$1,new cljs.core.Keyword(null,"filter-box?","filter-box?",-1157583688));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.dropdown.single_dropdown_args_desc),args__$1,"single-dropdown")))){
} else {
throw (new Error("Assert failed: (validate-args-macro single-dropdown-args-desc args \"single-dropdown\")"));
}

var choices__$2 = ((choices_fn_QMARK_)?new cljs.core.Keyword(null,"choices","choices",1385611597).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state)):re_com.util.deref_or_value.call(null,choices__$1));
var disabled_QMARK___$1 = re_com.util.deref_or_value.call(null,disabled_QMARK_);
var regex_filter_QMARK___$2 = re_com.util.deref_or_value.call(null,regex_filter_QMARK___$1);
var latest_ext_model = reagent.core.atom.call(null,re_com.util.deref_or_value.call(null,model__$1));
var _ = ((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),cljs.core.deref.call(null,latest_ext_model)))?(function (){
cljs.core.reset_BANG_.call(null,external_model,cljs.core.deref.call(null,latest_ext_model));

return cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,latest_ext_model));
})()
:null);
var changeable_QMARK_ = (function (){var and__28473__auto__ = on_change;
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__28473__auto__;
}
})();
var callback = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__46674_SHARP_){
cljs.core.reset_BANG_.call(null,internal_model,p1__46674_SHARP_);

if(cljs.core.truth_((function (){var and__28473__auto__ = changeable_QMARK_;
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_model),cljs.core.deref.call(null,latest_ext_model));
} else {
return and__28473__auto__;
}
})())){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

cljs.core.swap_BANG_.call(null,drop_showing_QMARK_,cljs.core.not);

return set_filter_text.call(null,"",args__$1,false);
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var cancel = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cljs.core.reset_BANG_.call(null,drop_showing_QMARK_,false);

set_filter_text.call(null,"",args__$1,false);

return cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,external_model));
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var dropdown_click = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,drop_showing_QMARK_,cljs.core.not);
}
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var filtered_choices = ((choices_fn_QMARK_)?choices__$2:(cljs.core.truth_(regex_filter_QMARK___$2)?re_com.dropdown.filter_choices_regex.call(null,choices__$2,group_fn,label_fn,cljs.core.deref.call(null,filter_text)):re_com.dropdown.filter_choices.call(null,choices__$2,group_fn,label_fn,cljs.core.deref.call(null,filter_text))));
var press_enter = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel.call(null);
} else {
callback.call(null,cljs.core.deref.call(null,internal_model));
}

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_escape = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cancel.call(null);

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_tab = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(disabled_QMARK___$1)){
cancel.call(null);
} else {
if(cljs.core.truth_(changeable_QMARK_)){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

cljs.core.reset_BANG_.call(null,drop_showing_QMARK_,false);

set_filter_text.call(null,"",args__$1,false);
}

cljs.core.reset_BANG_.call(null,drop_showing_QMARK_,false);

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_up = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,drop_showing_QMARK_))){
cljs.core.reset_BANG_.call(null,internal_model,re_com.dropdown.move_to_new_choice.call(null,filtered_choices,id_fn,cljs.core.deref.call(null,internal_model),(-1)));
} else {
cljs.core.reset_BANG_.call(null,drop_showing_QMARK_,true);
}

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_down = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,drop_showing_QMARK_))){
cljs.core.reset_BANG_.call(null,internal_model,re_com.dropdown.move_to_new_choice.call(null,filtered_choices,id_fn,cljs.core.deref.call(null,internal_model),(1)));
} else {
cljs.core.reset_BANG_.call(null,drop_showing_QMARK_,true);
}

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_home = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cljs.core.reset_BANG_.call(null,internal_model,re_com.dropdown.move_to_new_choice.call(null,filtered_choices,id_fn,cljs.core.deref.call(null,internal_model),new cljs.core.Keyword(null,"start","start",-355208981)));

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var press_end = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (){
cljs.core.reset_BANG_.call(null,internal_model,re_com.dropdown.move_to_new_choice.call(null,filtered_choices,id_fn,cljs.core.deref.call(null,internal_model),new cljs.core.Keyword(null,"end","end",-268185958)));

return true;
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var key_handler = ((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__46675_SHARP_){
if(cljs.core.truth_(disabled_QMARK___$1)){
return false;
} else {
var G__46688 = p1__46675_SHARP_.which;
switch (G__46688) {
case (13):
return press_enter.call(null);

break;
case (27):
return press_escape.call(null);

break;
case (9):
return press_tab.call(null);

break;
case (38):
return press_up.call(null);

break;
case (40):
return press_down.call(null);

break;
case (36):
return press_home.call(null);

break;
case (35):
return press_end.call(null);

break;
default:
return filter_box_QMARK_;

}
}
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-dropdown chosen-container chosen-container-single noselect ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,drop_showing_QMARK_))?"chosen-container-active chosen-with-drop ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,(cljs.core.truth_(width)?"0 0 auto":"auto")),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"start","start",-355208981)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:null)], null),style)], null),attr),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.dropdown_top,internal_model,choices__$2,id_fn,label_fn,tab_index,placeholder,dropdown_click,key_handler,filter_box_QMARK_,drop_showing_QMARK_,title_QMARK_], null),(cljs.core.truth_((function (){var and__28473__auto__ = cljs.core.deref.call(null,drop_showing_QMARK_);
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,disabled_QMARK___$1);
} else {
return and__28473__auto__;
}
})())?(function (){
cljs.core.println.call(null,"render",choices_fn_QMARK_,cljs.core.deref.call(null,choices_state));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.chosen-drop","div.chosen-drop",-1110109208),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.filter_text_box,filter_box_QMARK_,filter_text,key_handler,drop_showing_QMARK_,((function (choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__46676_SHARP_){
return set_filter_text.call(null,p1__46676_SHARP_,args__$1,true);
});})(choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen-results","ul.chosen-results",-932618517),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null)], null):null),(cljs.core.truth_((function (){var and__28473__auto__ = choices_fn_QMARK_;
if(and__28473__auto__){
return new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state));
} else {
return and__28473__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.loading","li.loading",1659621189),["Loading..."].join('')], null):(cljs.core.truth_((function (){var and__28473__auto__ = choices_fn_QMARK_;
if(and__28473__auto__){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state));
} else {
return and__28473__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.error","li.error",534172652),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,choices_state))], null):(((cljs.core.count.call(null,filtered_choices) > (0)))?(function (){var vec__46689 = re_com.dropdown.choices_with_group_headings.call(null,filtered_choices,group_fn);
var group_names = cljs.core.nth.call(null,vec__46689,(0),null);
var group_opt_lists = cljs.core.nth.call(null,vec__46689,(1),null);
var make_a_choice = cljs.core.partial.call(null,re_com.dropdown.make_choice_item,id_fn,render_fn,callback,internal_model);
var make_choices = ((function (vec__46689,group_names,group_opt_lists,make_a_choice,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (p1__46677_SHARP_){
return cljs.core.map.call(null,make_a_choice,p1__46677_SHARP_);
});})(vec__46689,group_names,group_opt_lists,make_a_choice,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var make_h_then_choices = ((function (vec__46689,group_names,group_opt_lists,make_a_choice,make_choices,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay){
return (function (h,opts){
return cljs.core.cons.call(null,re_com.dropdown.make_group_heading.call(null,h),make_choices.call(null,opts));
});})(vec__46689,group_names,group_opt_lists,make_a_choice,make_choices,choices__$2,disabled_QMARK___$1,regex_filter_QMARK___$2,latest_ext_model,_,changeable_QMARK_,callback,cancel,dropdown_click,filtered_choices,press_enter,press_escape,press_tab,press_up,press_down,press_home,press_end,key_handler,map__46686,map__46686__$1,args__$1,group_fn,disabled_QMARK_,on_change,model__$1,attr,label_fn,tab_index,max_height,placeholder,title_QMARK_,render_fn,width,regex_filter_QMARK___$1,choices__$1,id_fn,style,debounce_delay__$1,class$,filter_box_QMARK_,external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
;
var has_no_group_names_QMARK_ = (new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,group_names)) == null);
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,group_opt_lists))) && (has_no_group_names_QMARK_)){
return make_choices.call(null,cljs.core.first.call(null,group_opt_lists));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,make_h_then_choices,group_names,group_opt_lists));
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.no-results","li.no-results",-717682399),["No results match \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,filter_text)),"\""].join('')], null)
)))], null)], null);
})()
:null)], null);
};
var G__46695 = function (var_args){
var p__46685 = null;
if (arguments.length > 0) {
var G__46697__i = 0, G__46697__a = new Array(arguments.length -  0);
while (G__46697__i < G__46697__a.length) {G__46697__a[G__46697__i] = arguments[G__46697__i + 0]; ++G__46697__i;}
  p__46685 = new cljs.core.IndexedSeq(G__46697__a,0,null);
} 
return G__46695__delegate.call(this,p__46685);};
G__46695.cljs$lang$maxFixedArity = 0;
G__46695.cljs$lang$applyTo = (function (arglist__46698){
var p__46685 = cljs.core.seq(arglist__46698);
return G__46695__delegate(p__46685);
});
G__46695.cljs$core$IFn$_invoke$arity$variadic = G__46695__delegate;
return G__46695;
})()
;
;})(external_model,internal_model,drop_showing_QMARK_,filter_text,choices_fn_QMARK_,choices_state,load_choices,set_filter_text,map__46680,map__46680__$1,args,choices,model,regex_filter_QMARK_,debounce_delay))
});

re_com.dropdown.single_dropdown.cljs$lang$maxFixedArity = (0);

re_com.dropdown.single_dropdown.cljs$lang$applyTo = (function (seq46678){
return re_com.dropdown.single_dropdown.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46678));
});


//# sourceMappingURL=dropdown.js.map?rel=1512565262257
