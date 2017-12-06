// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.hints');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.context');
goog.require('cljs.stacktrace');
devtools.hints.available_QMARK_ = (function devtools$hints$available_QMARK_(){
return true;
});
devtools.hints._STAR_installed_STAR_ = false;
devtools.hints._STAR_original_global_error_handler_STAR_ = null;
devtools.hints._STAR_original_type_error_prototype_to_string_STAR_ = null;
devtools.hints.processed_errors = cljs.core.volatile_BANG_.call(null,null);
devtools.hints.set_processed_errors_BANG_ = (function devtools$hints$set_processed_errors_BANG_(val){
return cljs.core.vreset_BANG_.call(null,devtools.hints.processed_errors,val);
});
devtools.hints.get_processed_errors_BANG_ = (function devtools$hints$get_processed_errors_BANG_(){
var temp__4655__auto__ = cljs.core.deref.call(null,devtools.hints.processed_errors);
if(cljs.core.truth_(temp__4655__auto__)){
var val = temp__4655__auto__;
return val;
} else {
if(typeof WeakSet !== 'undefined'){
return devtools.hints.set_processed_errors_BANG_.call(null,(new WeakSet()));
} else {
return null;
}
}
});
devtools.hints.empty_as_nil = (function devtools$hints$empty_as_nil(str){
if(cljs.core.empty_QMARK_.call(null,str)){
return null;
} else {
return str;
}
});
devtools.hints.ajax_reader = (function devtools$hints$ajax_reader(url){
var xhr = (new XMLHttpRequest());
xhr.open("GET",url,false);

xhr.send();

return devtools.hints.empty_as_nil.call(null,xhr.responseText);
});
devtools.hints.retrieve_javascript_source = (function devtools$hints$retrieve_javascript_source(where){
var reader = (function (){var or__28485__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"file-reader","file-reader",-450847664));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return devtools.hints.ajax_reader;
}
})();
return reader.call(null,where);
});
devtools.hints.get_line = (function devtools$hints$get_line(lines,line_number){
return (lines[(line_number - (1))]);
});
devtools.hints.extend_content = (function devtools$hints$extend_content(content,lines,line_number,min_length){
if(((cljs.core.count.call(null,content) > min_length)) || (!((line_number > (0))))){
return content;
} else {
var prev_line_number = (line_number - (1));
var prev_line = devtools.hints.get_line.call(null,lines,prev_line_number);
var new_content = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prev_line),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join('');
return devtools.hints.extend_content.call(null,new_content,lines,prev_line_number,min_length);
}
});
devtools.hints.mark_call_closed_at_column = (function devtools$hints$mark_call_closed_at_column(line,column){
var n = (column - (1));
var prefix = line.substring((0),n);
var postfix = line.substring(n);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)," <<< \u2622 NULL \u2622 <<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix)].join('');
});
devtools.hints.mark_null_call_site_location = (function devtools$hints$mark_null_call_site_location(file,line_number,column){
var content = devtools.hints.retrieve_javascript_source.call(null,file);
var lines = content.split("\n");
var line = devtools.hints.get_line.call(null,lines,line_number);
var marked_line = devtools.hints.mark_call_closed_at_column.call(null,line,column);
var min_length = (function (){var or__28485__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"sanity-hint-min-length","sanity-hint-min-length",104958154));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (128);
}
})();
return devtools.hints.extend_content.call(null,marked_line,lines,line_number,min_length);
});
devtools.hints.make_sense_of_the_error = (function devtools$hints$make_sense_of_the_error(message,file,line_number,column){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/Cannot read property 'call' of.*/,message))){
return devtools.hints.mark_null_call_site_location.call(null,file,line_number,column);
} else {
return null;

}
});
devtools.hints.parse_stacktrace = (function devtools$hints$parse_stacktrace(native_stack_trace){
return cljs.stacktrace.parse_stacktrace.call(null,cljs.core.PersistentArrayMap.EMPTY,native_stack_trace,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ua-product","ua-product",938384227),new cljs.core.Keyword(null,"chrome","chrome",1718738387)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),""], null));
});
devtools.hints.error_object_sense = (function devtools$hints$error_object_sense(error){
try{var native_stack_trace = error.stack;
var stack_trace = devtools.hints.parse_stacktrace.call(null,native_stack_trace);
var top_item = cljs.core.second.call(null,stack_trace);
var map__37963 = top_item;
var map__37963__$1 = ((((!((map__37963 == null)))?((((map__37963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37963):map__37963);
var file = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return devtools.hints.make_sense_of_the_error.call(null,error.message,file,line,column);
}catch (e37962){var _e = e37962;
return false;
}});
devtools.hints.type_error_to_string = (function devtools$hints$type_error_to_string(self){
var temp__4655__auto___37965 = devtools.hints.get_processed_errors_BANG_.call(null);
if(cljs.core.truth_(temp__4655__auto___37965)){
var seen_errors_37966 = temp__4655__auto___37965;
if(cljs.core.truth_(seen_errors_37966.has(self))){
} else {
seen_errors_37966.add(self);

var temp__4657__auto___37967 = devtools.hints.error_object_sense.call(null,self);
if(cljs.core.truth_(temp__4657__auto___37967)){
var sense_37968 = temp__4657__auto___37967;
self.message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self.message),", a sanity hint:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sense_37968)].join('');
} else {
}
}
} else {
}

return devtools.hints._STAR_original_type_error_prototype_to_string_STAR_.call(self);
});
devtools.hints.global_error_handler = (function devtools$hints$global_error_handler(message,url,line,column,error){
var res = (cljs.core.truth_(devtools.hints._STAR_original_global_error_handler_STAR_)?devtools.hints._STAR_original_global_error_handler_STAR_.call(null,message,url,line,column,error):null);
if(cljs.core.not.call(null,res)){
var temp__4657__auto__ = devtools.hints.error_object_sense.call(null,error);
if(cljs.core.truth_(temp__4657__auto__)){
var sense = temp__4657__auto__;
devtools.context.get_console.call(null).info("A sanity hint for incoming uncaught error:\n",sense);

return false;
} else {
return null;
}
} else {
return true;
}
});
devtools.hints.install_type_error_enhancer = (function devtools$hints$install_type_error_enhancer(){
devtools.hints._STAR_original_global_error_handler_STAR_ = devtools.context.get_root.call(null).onerror;

devtools.context.get_root.call(null).onerror = devtools.hints.global_error_handler;

var prototype = TypeError.prototype;
devtools.hints._STAR_original_type_error_prototype_to_string_STAR_ = prototype.toString;

return prototype.toString = ((function (prototype){
return (function (){
var self = this;
return devtools.hints.type_error_to_string.call(null,self);
});})(prototype))
;
});
devtools.hints.installed_QMARK_ = (function devtools$hints$installed_QMARK_(){
return devtools.hints._STAR_installed_STAR_;
});
devtools.hints.install_BANG_ = (function devtools$hints$install_BANG_(){
if(devtools.hints._STAR_installed_STAR_){
return null;
} else {
devtools.hints._STAR_installed_STAR_ = true;

devtools.hints.install_type_error_enhancer.call(null);

return true;
}
});
devtools.hints.uninstall_BANG_ = (function devtools$hints$uninstall_BANG_(){
if(devtools.hints._STAR_installed_STAR_){
devtools.hints._STAR_installed_STAR_ = false;

if(cljs.core.truth_(devtools.hints._STAR_original_type_error_prototype_to_string_STAR_)){
} else {
throw (new Error("Assert failed: *original-type-error-prototype-to-string*"));
}

devtools.context.get_root.call(null).onerror = devtools.hints._STAR_original_global_error_handler_STAR_;

var prototype = TypeError.prototype;
return prototype.toString = devtools.hints._STAR_original_type_error_prototype_to_string_STAR_;
} else {
return null;
}
});

//# sourceMappingURL=hints.js.map?rel=1512565256997
