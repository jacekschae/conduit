// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.userAgent');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('devtools.context');
goog.require('cljs.pprint');
goog.require('devtools.prefs');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.pprint_str = (function devtools$util$pprint_str(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16395 = arguments.length;
var i__8938__auto___16396 = (0);
while(true){
if((i__8938__auto___16396 < len__8937__auto___16395)){
args__8944__auto__.push((arguments[i__8938__auto___16396]));

var G__16397 = (i__8938__auto___16396 + (1));
i__8938__auto___16396 = G__16397;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var sb__8806__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16392_16398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16393_16399 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16392_16398,_STAR_print_fn_STAR_16393_16399,sb__8806__auto__){
return (function (x__8807__auto__){
return sb__8806__auto__.append(x__8807__auto__);
});})(_STAR_print_newline_STAR_16392_16398,_STAR_print_fn_STAR_16393_16399,sb__8806__auto__))
;

try{var _STAR_print_level_STAR_16394_16400 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pprint,args);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_16394_16400;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16393_16399;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16392_16398;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8806__auto__)].join('');
});

devtools.util.pprint_str.cljs$lang$maxFixedArity = (0);

devtools.util.pprint_str.cljs$lang$applyTo = (function (seq16391){
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16391));
});

devtools.util.make_version_info = (function devtools$util$make_version_info(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("0.9.4")].join('');
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return ["CLJS DevTools ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((devtools.util.make_version_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_version_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_version_info.call(null)))].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return (devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null));
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var process = (root["process"]);
var version = (process["version"]);
var platform = (process["platform"]);
if(cljs.core.truth_((function (){var and__7767__auto__ = version;
if(cljs.core.truth_(and__7767__auto__)){
return platform;
} else {
return and__7767__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,version,cljs.core.cst$kw$platform,platform], null);
} else {
return null;
}
}catch (e16401){var _ = e16401;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7779__auto__ = cljs.core.cst$kw$platform.cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return "?";
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__7779__auto__ = cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return !(((devtools.util.get_node_info.cljs$core$IFn$_invoke$arity$1 ? devtools.util.get_node_info.cljs$core$IFn$_invoke$arity$1((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))) : devtools.util.get_node_info.call(null,(devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null)))) == null));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__4655__auto__ = (devtools.util.get_node_info.cljs$core$IFn$_invoke$arity$1 ? devtools.util.get_node_info.cljs$core$IFn$_invoke$arity$1((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))) : devtools.util.get_node_info.call(null,(devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))));
if(cljs.core.truth_(temp__4655__auto__)){
var node_info = temp__4655__auto__;
return ["node/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((devtools.util.get_node_description.cljs$core$IFn$_invoke$arity$1 ? devtools.util.get_node_description.cljs$core$IFn$_invoke$arity$1(node_info) : devtools.util.get_node_description.call(null,node_info)))].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_(user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return ["No such feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," is currently available in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),". ","The list of supported features is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([known_features], 0))),"."].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return ["Feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," cannot be installed. ","Unsupported Javascript context: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((devtools.util.get_js_context_description.cljs$core$IFn$_invoke$arity$0 ? devtools.util.get_js_context_description.cljs$core$IFn$_invoke$arity$0() : devtools.util.get_js_context_description.call(null))),"."].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return ["CLJS DevTools: some custom formatters were not rendered.\n","https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){

return ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_(new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref(cljs.core.cst$kw$print_DASH_config_DASH_overrides))){
var diff = cljs.core.second(clojure.data.diff(cljs.core.deref(devtools.prefs.default_config),devtools.prefs.get_prefs()));
if(!(cljs.core.empty_QMARK_(diff))){
return console.info(msg,devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([diff], 0)));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
});

devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.util.CustomFormattersDetector.cljs$lang$type = true;

devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector";

devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__8404__auto__,writer__8405__auto__,opt__8406__auto__){
return cljs.core._write(writer__8405__auto__,"devtools.util/CustomFormattersDetector");
});

devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = ((function (detector){
return (function (_object,_config){
devtools.util._STAR_custom_formatters_active_STAR_ = true;

return null;
});})(detector))
);

(detector["hasBody"] = cljs.core.constantly(false));

(detector["body"] = cljs.core.constantly(null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe();
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_(formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_(current_formatters)){
var new_formatters = current_formatters.filter(((function (current_formatters){
return (function (p1__16402_SHARP_){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(detector,p1__16402_SHARP_));
});})(current_formatters))
);
return devtools.util.set_formatters_safe_BANG_(new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if((devtools.util._STAR_console_open_STAR_) && (!(devtools.util._STAR_custom_formatters_active_STAR_))){
if(devtools.util._STAR_custom_formatters_warning_reported_STAR_){
return null;
} else {
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true;

return console.warn((devtools.util.custom_formatters_not_active_msg.cljs$core$IFn$_invoke$arity$0 ? devtools.util.custom_formatters_not_active_msg.cljs$core$IFn$_invoke$arity$0() : devtools.util.custom_formatters_not_active_msg.call(null)));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_(detector);

return devtools.util.check_custom_formatters_active_BANG_();
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__16403_16404 = f;
var target__13963__auto___16405 = G__16403_16404;

(target__13963__auto___16405["toString"] = ((function (G__16403_16404,target__13963__auto___16405,f){
return (function (){
devtools.util._STAR_console_open_STAR_ = true;

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
});})(G__16403_16404,target__13963__auto___16405,f))
);


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$dont_DASH_detect_DASH_custom_DASH_formatters))){
var detector = devtools.util.make_detector();
devtools.util.install_detector_BANG_(detector);

var G__16406_16411 = "%c%s";
var G__16407_16412 = "color:transparent";
var G__16408_16413 = devtools.util.make_detection_printer();
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16406_16411,G__16407_16412,G__16408_16413) : f.call(null,G__16406_16411,G__16407_16412,G__16408_16413));

var G__16409 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector);
var G__16410 = (0);
return setTimeout(G__16409,G__16410);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.feature_for_display,installed_features),cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accum))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});})(labels))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16421 = arguments.length;
var i__8938__auto___16422 = (0);
while(true){
if((i__8938__auto___16422 < len__8937__auto___16421)){
args__8944__auto__.push((arguments[i__8938__auto___16422]));

var G__16423 = (i__8938__auto___16422 + (1));
i__8938__auto___16422 = G__16423;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((3) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8945__auto__);
});

devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__16418 = devtools.util.feature_list_display(installed_features,feature_groups);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16418,(0),null);
var fmt_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16418,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_(((function (vec__16418,fmt_str,fmt_params){
return (function() { 
var G__16424__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_params,add_args], 0));
return console.info.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(items));
};
var G__16424 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__16425__i = 0, G__16425__a = new Array(arguments.length -  1);
while (G__16425__i < G__16425__a.length) {G__16425__a[G__16425__i] = arguments[G__16425__i + 1]; ++G__16425__i;}
  add_args = new cljs.core.IndexedSeq(G__16425__a,0,null);
} 
return G__16424__delegate.call(this,add_fmt,add_args);};
G__16424.cljs$lang$maxFixedArity = 1;
G__16424.cljs$lang$applyTo = (function (arglist__16426){
var add_fmt = cljs.core.first(arglist__16426);
var add_args = cljs.core.rest(arglist__16426);
return G__16424__delegate(add_fmt,add_args);
});
G__16424.cljs$core$IFn$_invoke$arity$variadic = G__16424__delegate;
return G__16424;
})()
;})(vec__16418,fmt_str,fmt_params))
);
});

devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq16414){
var G__16415 = cljs.core.first(seq16414);
var seq16414__$1 = cljs.core.next(seq16414);
var G__16416 = cljs.core.first(seq16414__$1);
var seq16414__$2 = cljs.core.next(seq16414__$1);
var G__16417 = cljs.core.first(seq16414__$2);
var seq16414__$3 = cljs.core.next(seq16414__$2);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16415,G__16416,G__16417,seq16414__$3);
});

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$dont_DASH_display_DASH_banner))){
var banner = ["Installing %c%s%c and enabling features"].join('');
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(features_to_install,feature_groups,banner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.util.lib_info_style,devtools.util.get_lib_info(),devtools.util.reset_style], 0));
} else {
return devtools.util._STAR_custom_formatters_active_STAR_ = true;
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info();
var seq__16427 = cljs.core.seq(features);
var chunk__16428 = null;
var count__16429 = (0);
var i__16430 = (0);
while(true){
if((i__16430 < count__16429)){
var feature = chunk__16428.cljs$core$IIndexed$_nth$arity$2(null,i__16430);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
console.warn((devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__16431 = seq__16427;
var G__16432 = chunk__16428;
var G__16433 = count__16429;
var G__16434 = (i__16430 + (1));
seq__16427 = G__16431;
chunk__16428 = G__16432;
count__16429 = G__16433;
i__16430 = G__16434;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16427);
if(temp__4657__auto__){
var seq__16427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16427__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__16427__$1);
var G__16435 = cljs.core.chunk_rest(seq__16427__$1);
var G__16436 = c__8618__auto__;
var G__16437 = cljs.core.count(c__8618__auto__);
var G__16438 = (0);
seq__16427 = G__16435;
chunk__16428 = G__16436;
count__16429 = G__16437;
i__16430 = G__16438;
continue;
} else {
var feature = cljs.core.first(seq__16427__$1);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
console.warn((devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? devtools.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__16439 = cljs.core.next(seq__16427__$1);
var G__16440 = null;
var G__16441 = (0);
var G__16442 = (0);
seq__16427 = G__16439;
chunk__16428 = G__16440;
count__16429 = G__16441;
i__16430 = G__16442;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__16443 = feature;
var G__16443__$1 = (((G__16443 instanceof cljs.core.Keyword))?G__16443.fqn:null);
switch (G__16443__$1) {
case "custom-formatters":
return cljs.core.cst$kw$formatters;

break;
case "sanity-hints":
return cljs.core.cst$kw$hints;

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features(features);
devtools.util.report_unknown_features_BANG_(features__$1,known_features);

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__7767__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__7767__auto__){
return (features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups));
} else {
return and__7767__auto__;
}
})())?(features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups)):(((features_desc == null))?cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_(features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_(features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$disable_DASH_advanced_DASH_mode_DASH_check))){
return ((function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o16445 = temp__4655__auto__;
return (o16445["version"]);
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not(devtools.prefs.pref(cljs.core.cst$kw$dont_DASH_display_DASH_advanced_DASH_build_DASH_warning))){
var banner = ["%cNOT%c installing %c%s%c under advanced build. See ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.advanced_build_explanation_url),"."].join('');
return console.warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info(),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__7779__auto__ = devtools.prefs.pref(cljs.core.cst$kw$bypass_DASH_availability_DASH_checks);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (available_fn.cljs$core$IFn$_invoke$arity$1 ? available_fn.cljs$core$IFn$_invoke$arity$1(feature) : available_fn.call(null,feature));
}
})())){
return (install_fn.cljs$core$IFn$_invoke$arity$0 ? install_fn.cljs$core$IFn$_invoke$arity$0() : install_fn.call(null));
} else {
return console.warn((devtools.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1 ? devtools.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1(feature) : devtools.util.feature_not_available_msg.call(null,feature)));
}
} else {
return null;
}
});
