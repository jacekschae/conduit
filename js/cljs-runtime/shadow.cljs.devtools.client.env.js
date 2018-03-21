goog.provide('shadow.cljs.devtools.client.env');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
if(typeof shadow.cljs.devtools.client.env.client_id !== 'undefined'){
} else {
shadow.cljs.devtools.client.env.client_id = cljs.core.random_uuid();
}

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.enabled",false);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.autoload",true);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.module_format","goog");

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.reload_with_state",false);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.build_id","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.proc_id","");

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.repl_host","");

/** @define {number} */
goog.define("shadow.cljs.devtools.client.env.repl_port",(8200));

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.use_document_host",true);

/** @define {string} */
goog.define("shadow.cljs.devtools.client.env.devtools_url","");

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.env.ssl",false);
shadow.cljs.devtools.client.env.get_repl_host = (function shadow$cljs$devtools$client$env$get_repl_host(){
if(cljs.core.truth_((function (){var and__3911__auto__ = shadow.cljs.devtools.client.env.use_document_host;
if(and__3911__auto__){
return goog.global.document;
} else {
return and__3911__auto__;
}
})())){
return document.location.hostname;
} else {
return shadow.cljs.devtools.client.env.repl_host;
}
});
shadow.cljs.devtools.client.env.get_url_base = (function shadow$cljs$devtools$client$env$get_url_base(){
if(cljs.core.seq(shadow.cljs.devtools.client.env.devtools_url)){
return shadow.cljs.devtools.client.env.devtools_url;
} else {
return ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_repl_host()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port)].join('');
}
});
shadow.cljs.devtools.client.env.get_ws_url_base = (function shadow$cljs$devtools$client$env$get_ws_url_base(){
return clojure.string.replace(shadow.cljs.devtools.client.env.get_url_base(),/^http/,"ws");
});
shadow.cljs.devtools.client.env.ws_url = (function shadow$cljs$devtools$client$env$ws_url(client_type){
if((client_type instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? client-type)"));
}

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_ws_url_base()),"/ws/worker/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.client_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(client_type))].join('');
});
shadow.cljs.devtools.client.env.ws_listener_url = (function shadow$cljs$devtools$client$env$ws_listener_url(client_type){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_ws_url_base()),"/ws/listener/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.client_id)].join('');
});
shadow.cljs.devtools.client.env.files_url = (function shadow$cljs$devtools$client$env$files_url(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/worker/files/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.client_id)].join('');
});
shadow.cljs.devtools.client.env.repl_print_fn = cljs.core.pr_str;
shadow.cljs.devtools.client.env.repl_error = (function shadow$cljs$devtools$client$env$repl_error(e){
var G__27859 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","invoke-error","repl/invoke-error",839951858),new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
if(cljs.core.truth_(e.hasOwnProperty("stack"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27859,new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack);
} else {
return G__27859;
}
});
shadow.cljs.devtools.client.env.repl_call = (function shadow$cljs$devtools$client$env$repl_call(repl_expr,repl_error){
try{var result = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572)], null);
var ret = (repl_expr.cljs$core$IFn$_invoke$arity$0 ? repl_expr.cljs$core$IFn$_invoke$arity$0() : repl_expr.call(null));
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = ret;

try{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"value","value",305978217),(shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1(ret) : shadow.cljs.devtools.client.env.repl_print_fn.call(null,ret)));
}catch (e27865){var e = e27865;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED");
}}catch (e27863){var e = e27863;
cljs.core._STAR_e = e;

return (repl_error.cljs$core$IFn$_invoke$arity$1 ? repl_error.cljs$core$IFn$_invoke$arity$1(e) : repl_error.call(null,e));
}});
shadow.cljs.devtools.client.env.process_ws_msg = (function shadow$cljs$devtools$client$env$process_ws_msg(e,handler){
var _STAR_default_data_reader_fn_STAR_27874 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = ((function (_STAR_default_data_reader_fn_STAR_27874){
return (function (tag,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tagged-literal","tagged-literal",1758013066),tag,value], null);
});})(_STAR_default_data_reader_fn_STAR_27874))
;

try{var text = e.data;
var msg = (function (){try{return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(text);
}catch (e27878){var e__$1 = e27878;
return console.warn("failed to parse websocket message",text,e__$1);
}})();
if(cljs.core.truth_(msg)){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(msg) : handler.call(null,msg));
} else {
return null;
}
}finally {cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR_27874;
}});
shadow.cljs.devtools.client.env.make_task_fn = (function shadow$cljs$devtools$client$env$make_task_fn(p__27880,p__27881){
var map__27882 = p__27880;
var map__27882__$1 = ((((!((map__27882 == null)))?(((((map__27882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27882):map__27882);
var log_missing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765));
var log_call_async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192));
var log_call = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,new cljs.core.Keyword(null,"log-call","log-call",412404391));
var map__27883 = p__27881;
var map__27883__$1 = ((((!((map__27883 == null)))?(((((map__27883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27883):map__27883);
var fn_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"async","async",1050769601));
return ((function (map__27882,map__27882__$1,log_missing_fn,log_call_async,log_call,map__27883,map__27883__$1,fn_sym,fn_str,async){
return (function (next){
var fn_obj = goog.getObjectByName(fn_str,$CLJS);
if((fn_obj == null)){
if(cljs.core.truth_(log_missing_fn)){
(log_missing_fn.cljs$core$IFn$_invoke$arity$1 ? log_missing_fn.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_missing_fn.call(null,fn_sym));
} else {
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
} else {
if(cljs.core.truth_(async)){
if(cljs.core.truth_(log_call_async)){
(log_call_async.cljs$core$IFn$_invoke$arity$1 ? log_call_async.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call_async.call(null,fn_sym));
} else {
}

return (fn_obj.cljs$core$IFn$_invoke$arity$1 ? fn_obj.cljs$core$IFn$_invoke$arity$1(next) : fn_obj.call(null,next));
} else {
if(cljs.core.truth_(log_call)){
(log_call.cljs$core$IFn$_invoke$arity$1 ? log_call.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call.call(null,fn_sym));
} else {
}

(fn_obj.cljs$core$IFn$_invoke$arity$0 ? fn_obj.cljs$core$IFn$_invoke$arity$0() : fn_obj.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));

}
}
});
;})(map__27882,map__27882__$1,log_missing_fn,log_call_async,log_call,map__27883,map__27883__$1,fn_sym,fn_str,async))
});
shadow.cljs.devtools.client.env.do_js_reload_STAR_ = (function shadow$cljs$devtools$client$env$do_js_reload_STAR_(p__27887){
var vec__27888 = p__27887;
var seq__27889 = cljs.core.seq(vec__27888);
var first__27890 = cljs.core.first(seq__27889);
var seq__27889__$1 = cljs.core.next(seq__27889);
var task = first__27890;
var remaining_tasks = seq__27889__$1;
if(cljs.core.truth_(task)){
var G__27891 = ((function (vec__27888,seq__27889,first__27890,seq__27889__$1,task,remaining_tasks){
return (function (){
return (shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$1(remaining_tasks) : shadow.cljs.devtools.client.env.do_js_reload_STAR_.call(null,remaining_tasks));
});})(vec__27888,seq__27889,first__27890,seq__27889__$1,task,remaining_tasks))
;
return (task.cljs$core$IFn$_invoke$arity$1 ? task.cljs$core$IFn$_invoke$arity$1(G__27891) : task.call(null,G__27891));
} else {
return null;
}
});
/**
 * should pass the :build-complete message and an additional callback
 * which performs the actual loading of the code (sync)
 * will call all before/after callbacks in order
 */
shadow.cljs.devtools.client.env.do_js_reload = (function shadow$cljs$devtools$client$env$do_js_reload(var_args){
var G__27898 = arguments.length;
switch (G__27898) {
case 2:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2 = (function (msg,load_code_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(msg,load_code_fn,(function (){
return null;
}));
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3 = (function (p__27899,load_code_fn,complete_fn){
var map__27900 = p__27899;
var map__27900__$1 = ((((!((map__27900 == null)))?(((((map__27900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27900):map__27900);
var msg = map__27900__$1;
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27900__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var load_tasks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__27900,map__27900__$1,msg,reload_info){
return (function (p1__27892_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__27892_SHARP_);
});})(map__27900,map__27900__$1,msg,reload_info))
,new cljs.core.Keyword(null,"before-load","before-load",-2060117064).cljs$core$IFn$_invoke$arity$1(reload_info)))),((function (map__27900,map__27900__$1,msg,reload_info){
return (function (next){
(load_code_fn.cljs$core$IFn$_invoke$arity$0 ? load_code_fn.cljs$core$IFn$_invoke$arity$0() : load_code_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
});})(map__27900,map__27900__$1,msg,reload_info))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__27900,map__27900__$1,msg,reload_info){
return (function (p1__27893_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__27893_SHARP_);
});})(map__27900,map__27900__$1,msg,reload_info))
),new cljs.core.Keyword(null,"after-load","after-load",-1278503285).cljs$core$IFn$_invoke$arity$1(reload_info)),((function (map__27900,map__27900__$1,msg,reload_info){
return (function (next){
(complete_fn.cljs$core$IFn$_invoke$arity$0 ? complete_fn.cljs$core$IFn$_invoke$arity$0() : complete_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
});})(map__27900,map__27900__$1,msg,reload_info))
);
return shadow.cljs.devtools.client.env.do_js_reload_STAR_(load_tasks);
});

shadow.cljs.devtools.client.env.do_js_reload.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=shadow.cljs.devtools.client.env.js.map
