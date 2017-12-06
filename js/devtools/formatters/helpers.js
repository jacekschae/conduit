// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.helpers');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.munging');
goog.require('devtools.format');
goog.require('devtools.protocols');
devtools.formatters.helpers.pref = (function devtools$formatters$helpers$pref(v){
while(true){
if((v instanceof cljs.core.Keyword)){
var G__36165 = devtools.prefs.pref.call(null,v);
v = G__36165;
continue;
} else {
return v;
}
break;
}
});
devtools.formatters.helpers.get_prototype = (function devtools$formatters$helpers$get_prototype(o){
return o.prototype;
});
devtools.formatters.helpers.get_constructor = (function devtools$formatters$helpers$get_constructor(o){
return o.constructor;
});
devtools.formatters.helpers.is_prototype_QMARK_ = (function devtools$formatters$helpers$is_prototype_QMARK_(o){
return (devtools.formatters.helpers.get_prototype.call(null,devtools.formatters.helpers.get_constructor.call(null,o)) === o);
});
devtools.formatters.helpers.is_js_symbol_QMARK_ = (function devtools$formatters$helpers$is_js_symbol_QMARK_(o){
return cljs.core._EQ_.call(null,goog.typeOf(o),"symbol");
});
devtools.formatters.helpers.cljs_function_QMARK_ = (function devtools$formatters$helpers$cljs_function_QMARK_(value){
var and__28473__auto__ = cljs.core.not.call(null,devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"disable-cljs-fn-formatting","disable-cljs-fn-formatting",1903786837)));
if(and__28473__auto__){
var and__28473__auto____$1 = !(cljs.core.var_QMARK_.call(null,value));
if(and__28473__auto____$1){
return devtools.munging.cljs_fn_QMARK_.call(null,value);
} else {
return and__28473__auto____$1;
}
} else {
return and__28473__auto__;
}
});
devtools.formatters.helpers.has_formatting_protocol_QMARK_ = (function devtools$formatters$helpers$has_formatting_protocol_QMARK_(value){
var or__28485__auto__ = (function (){try{if(!((value == null))){
if(((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IPrintWithWriter$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,value);
}
}catch (e36168){var _e__35214__auto__ = e36168;
return false;
}})();
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
var or__28485__auto____$1 = (function (){try{if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e36172){var _e__35214__auto__ = e36172;
return false;
}})();
if(cljs.core.truth_(or__28485__auto____$1)){
return or__28485__auto____$1;
} else {
try{if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e36174){var _e__35214__auto__ = e36174;
return false;
}}
}
});
devtools.formatters.helpers.cljs_type_QMARK_ = (function devtools$formatters$helpers$cljs_type_QMARK_(f){
var and__28473__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__28473__auto__)){
var and__28473__auto____$1 = cljs.core.not.call(null,devtools.formatters.helpers.is_prototype_QMARK_.call(null,f));
if(and__28473__auto____$1){
return f.cljs$lang$type;
} else {
return and__28473__auto____$1;
}
} else {
return and__28473__auto__;
}
});
devtools.formatters.helpers.cljs_instance_QMARK_ = (function devtools$formatters$helpers$cljs_instance_QMARK_(value){
var and__28473__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__28473__auto__)){
return devtools.formatters.helpers.cljs_type_QMARK_.call(null,devtools.formatters.helpers.get_constructor.call(null,value));
} else {
return and__28473__auto__;
}
});
devtools.formatters.helpers.cljs_land_value_QMARK_ = (function devtools$formatters$helpers$cljs_land_value_QMARK_(value){
var or__28485__auto__ = devtools.formatters.helpers.cljs_instance_QMARK_.call(null,value);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return devtools.formatters.helpers.has_formatting_protocol_QMARK_.call(null,value);
}
});
devtools.formatters.helpers.cljs_value_QMARK_ = (function devtools$formatters$helpers$cljs_value_QMARK_(value){
var and__28473__auto__ = (function (){var or__28485__auto__ = devtools.formatters.helpers.cljs_land_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return devtools.formatters.helpers.cljs_function_QMARK_.call(null,value);
}
})();
if(cljs.core.truth_(and__28473__auto__)){
return (cljs.core.not.call(null,devtools.formatters.helpers.is_prototype_QMARK_.call(null,value))) && (cljs.core.not.call(null,devtools.formatters.helpers.is_js_symbol_QMARK_.call(null,value)));
} else {
return and__28473__auto__;
}
});
devtools.formatters.helpers.bool_QMARK_ = (function devtools$formatters$helpers$bool_QMARK_(value){
return (value === true) || (value === false);
});
devtools.formatters.helpers.instance_of_a_well_known_type_QMARK_ = (function devtools$formatters$helpers$instance_of_a_well_known_type_QMARK_(value){
var well_known_types = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"well-known-types","well-known-types",70638649));
var constructor_fn = devtools.formatters.helpers.get_constructor.call(null,value);
var vec__36176 = devtools.munging.parse_constructor_info.call(null,constructor_fn);
var ns = cljs.core.nth.call(null,vec__36176,(0),null);
var name = cljs.core.nth.call(null,vec__36176,(1),null);
var fully_qualified_type_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
return cljs.core.contains_QMARK_.call(null,well_known_types,fully_qualified_type_name);
});
devtools.formatters.helpers.should_render_instance_QMARK_ = (function devtools$formatters$helpers$should_render_instance_QMARK_(value){
var and__28473__auto__ = devtools.formatters.helpers.cljs_instance_QMARK_.call(null,value);
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,devtools.formatters.helpers.instance_of_a_well_known_type_QMARK_.call(null,value));
} else {
return and__28473__auto__;
}
});
devtools.formatters.helpers.directly_printable_QMARK_ = (function devtools$formatters$helpers$directly_printable_QMARK_(value){
var or__28485__auto__ = typeof value === 'string';
if(or__28485__auto__){
return or__28485__auto__;
} else {
var or__28485__auto____$1 = typeof value === 'number';
if(or__28485__auto____$1){
return or__28485__auto____$1;
} else {
return devtools.formatters.helpers.bool_QMARK_.call(null,value);
}
}
});
devtools.formatters.helpers.abbreviated_QMARK_ = (function devtools$formatters$helpers$abbreviated_QMARK_(template){
return cljs.core.some.call(null,(function (p1__36179_SHARP_){
return cljs.core._EQ_.call(null,devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935)),p1__36179_SHARP_);
}),template);
});
devtools.formatters.helpers.abbreviate_long_string = (function devtools$formatters$helpers$abbreviate_long_string(string,marker,prefix_limit,postfix_limit){
var prefix = cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,prefix_limit,string));
var postfix = cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,postfix_limit,string));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(marker),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix)].join('');
});
devtools.formatters.helpers.get_more_marker = (function devtools$formatters$helpers$get_more_marker(more_count){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"plus-symbol","plus-symbol",-1984915189))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(more_count),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242)))].join('');
});
devtools.formatters.helpers.wrap_arity = (function devtools$formatters$helpers$wrap_arity(arity){
var args_open_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"args-open-symbol","args-open-symbol",-1336957557));
var args_close_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"args-close-symbol","args-close-symbol",777697973));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_open_symbol),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args_close_symbol)].join('');
});
devtools.formatters.helpers.fetch_field_value = (function devtools$formatters$helpers$fetch_field_value(obj,field){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,(obj[cljs.core.munge.call(null,field)])], null);
});
devtools.formatters.helpers.fetch_fields_values = (function devtools$formatters$helpers$fetch_fields_values(obj,fields){
return cljs.core.map.call(null,cljs.core.partial.call(null,devtools.formatters.helpers.fetch_field_value,obj),fields);
});
devtools.formatters.helpers.expandable_QMARK_ = (function devtools$formatters$helpers$expandable_QMARK_(obj){
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISeqable$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,obj))){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,(cljs.core.truth_(devtools.formatters.helpers.instance_of_a_well_known_type_QMARK_.call(null,obj))?new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081):new cljs.core.Keyword(null,"min-expandable-sequable-count","min-expandable-sequable-count",63566227)));
if(cljs.core.truth_(temp__4655__auto__)){
var min_count = temp__4655__auto__;
if(!(cljs.core.empty_QMARK_.call(null,obj))){
var actual_count = cljs.core.bounded_count.call(null,min_count,obj);
return (actual_count >= min_count);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
devtools.formatters.helpers.should_render_QMARK_ = (function devtools$formatters$helpers$should_render_QMARK_(pref_key,value,default_check){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,pref_key);
if(cljs.core.truth_(temp__4655__auto__)){
var render_pref = temp__4655__auto__;
if(render_pref === true){
return default_check.call(null,value);
} else {
if(cljs.core.fn_QMARK_.call(null,render_pref)){
return render_pref.call(null,value);
} else {
return null;
}
}
} else {
return null;
}
});

//# sourceMappingURL=helpers.js.map?rel=1512565255457
