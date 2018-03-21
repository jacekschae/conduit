goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4500__auto__ = [];
var len__4497__auto___33213 = arguments.length;
var i__4498__auto___33214 = (0);
while(true){
if((i__4498__auto___33214 < len__4497__auto___33213)){
args__4500__auto__.push((arguments[i__4498__auto___33214]));

var G__33216 = (i__4498__auto___33214 + (1));
i__4498__auto___33214 = G__33216;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cDEVTOOLS: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq33207){
var G__33208 = cljs.core.first(seq33207);
var seq33207__$1 = cljs.core.next(seq33207);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic(G__33208,seq33207__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__33226){
var map__33227 = p__33226;
var map__33227__$1 = ((((!((map__33227 == null)))?(((((map__33227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33227):map__33227);
var src = map__33227__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33227__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33227__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__33229 = cljs.core.seq(sources);
var chunk__33230 = null;
var count__33231 = (0);
var i__33232 = (0);
while(true){
if((i__33232 < count__33231)){
var map__33233 = chunk__33230.cljs$core$IIndexed$_nth$arity$2(null,i__33232);
var map__33233__$1 = ((((!((map__33233 == null)))?(((((map__33233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33233):map__33233);
var src = map__33233__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33233__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33233__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33233__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__33238 = seq__33229;
var G__33239 = chunk__33230;
var G__33240 = count__33231;
var G__33241 = (i__33232 + (1));
seq__33229 = G__33238;
chunk__33230 = G__33239;
count__33231 = G__33240;
i__33232 = G__33241;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33229);
if(temp__5457__auto__){
var seq__33229__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33229__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__33229__$1);
var G__33242 = cljs.core.chunk_rest(seq__33229__$1);
var G__33243 = c__4319__auto__;
var G__33244 = cljs.core.count(c__4319__auto__);
var G__33245 = (0);
seq__33229 = G__33242;
chunk__33230 = G__33243;
count__33231 = G__33244;
i__33232 = G__33245;
continue;
} else {
var map__33236 = cljs.core.first(seq__33229__$1);
var map__33236__$1 = ((((!((map__33236 == null)))?(((((map__33236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33236):map__33236);
var src = map__33236__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33236__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33236__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33236__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__33249 = cljs.core.next(seq__33229__$1);
var G__33250 = null;
var G__33251 = (0);
var G__33252 = (0);
seq__33229 = G__33249;
chunk__33230 = G__33250;
count__33231 = G__33251;
i__33232 = G__33252;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__33260 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__33260) : callback.call(null,G__33260));
} else {
var G__33261 = shadow.cljs.devtools.client.env.files_url();
var G__33262 = ((function (G__33261){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__33261))
;
var G__33263 = "POST";
var G__33264 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__33265 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__33261,G__33262,G__33263,G__33264,G__33265);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__33271){
var map__33272 = p__33271;
var map__33272__$1 = ((((!((map__33272 == null)))?(((((map__33272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33272):map__33272);
var msg = map__33272__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33272__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33272__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__33277 = info;
var map__33277__$1 = ((((!((map__33277 == null)))?(((((map__33277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33277):map__33277);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33277__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33277__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33282(s__33283){
return (new cljs.core.LazySeq(null,((function (map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info){
return (function (){
var s__33283__$1 = s__33283;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33283__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__33289 = cljs.core.first(xs__6012__auto__);
var map__33289__$1 = ((((!((map__33289 == null)))?(((((map__33289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33289):map__33289);
var src = map__33289__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33289__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__33283__$1,map__33289,map__33289__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33282_$_iter__33284(s__33285){
return (new cljs.core.LazySeq(null,((function (s__33283__$1,map__33289,map__33289__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info){
return (function (){
var s__33285__$1 = s__33285;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__33285__$1);
if(temp__5457__auto____$1){
var s__33285__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33285__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__33285__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__33287 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__33286 = (0);
while(true){
if((i__33286 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__33286);
cljs.core.chunk_append(b__33287,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__33317 = (i__33286 + (1));
i__33286 = G__33317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33287),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33282_$_iter__33284(cljs.core.chunk_rest(s__33285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33287),null);
}
} else {
var warning = cljs.core.first(s__33285__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33282_$_iter__33284(cljs.core.rest(s__33285__$2)));
}
} else {
return null;
}
break;
}
});})(s__33283__$1,map__33289,map__33289__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info))
,null,null));
});})(s__33283__$1,map__33289,map__33289__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__33282(cljs.core.rest(s__33283__$1)));
} else {
var G__33318 = cljs.core.rest(s__33283__$1);
s__33283__$1 = G__33318;
continue;
}
} else {
var G__33319 = cljs.core.rest(s__33283__$1);
s__33283__$1 = G__33319;
continue;
}
} else {
return null;
}
break;
}
});})(map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info))
,null,null));
});})(map__33277,map__33277__$1,sources,compiled,map__33272,map__33272__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__33291_33320 = cljs.core.seq(warnings);
var chunk__33292_33321 = null;
var count__33293_33322 = (0);
var i__33294_33323 = (0);
while(true){
if((i__33294_33323 < count__33293_33322)){
var map__33295_33324 = chunk__33292_33321.cljs$core$IIndexed$_nth$arity$2(null,i__33294_33323);
var map__33295_33325__$1 = ((((!((map__33295_33324 == null)))?(((((map__33295_33324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33295_33324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33295_33324):map__33295_33324);
var w_33326 = map__33295_33325__$1;
var msg_33327__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33295_33325__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33295_33325__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33295_33325__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33295_33325__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33330)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33328),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33329),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33327__$1)].join(''));


var G__33331 = seq__33291_33320;
var G__33332 = chunk__33292_33321;
var G__33333 = count__33293_33322;
var G__33334 = (i__33294_33323 + (1));
seq__33291_33320 = G__33331;
chunk__33292_33321 = G__33332;
count__33293_33322 = G__33333;
i__33294_33323 = G__33334;
continue;
} else {
var temp__5457__auto___33335 = cljs.core.seq(seq__33291_33320);
if(temp__5457__auto___33335){
var seq__33291_33336__$1 = temp__5457__auto___33335;
if(cljs.core.chunked_seq_QMARK_(seq__33291_33336__$1)){
var c__4319__auto___33337 = cljs.core.chunk_first(seq__33291_33336__$1);
var G__33338 = cljs.core.chunk_rest(seq__33291_33336__$1);
var G__33339 = c__4319__auto___33337;
var G__33340 = cljs.core.count(c__4319__auto___33337);
var G__33341 = (0);
seq__33291_33320 = G__33338;
chunk__33292_33321 = G__33339;
count__33293_33322 = G__33340;
i__33294_33323 = G__33341;
continue;
} else {
var map__33297_33342 = cljs.core.first(seq__33291_33336__$1);
var map__33297_33343__$1 = ((((!((map__33297_33342 == null)))?(((((map__33297_33342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33297_33342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33297_33342):map__33297_33342);
var w_33344 = map__33297_33343__$1;
var msg_33345__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297_33343__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297_33343__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297_33343__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33297_33343__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33348)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33346),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33347),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33345__$1)].join(''));


var G__33349 = cljs.core.next(seq__33291_33336__$1);
var G__33350 = null;
var G__33351 = (0);
var G__33352 = (0);
seq__33291_33320 = G__33349;
chunk__33292_33321 = G__33350;
count__33293_33322 = G__33351;
i__33294_33323 = G__33352;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info){
return (function (p__33303){
var map__33304 = p__33303;
var map__33304__$1 = ((((!((map__33304 == null)))?(((((map__33304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33304):map__33304);
var src = map__33304__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33304__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info){
return (function (p__33306){
var map__33307 = p__33306;
var map__33307__$1 = ((((!((map__33307 == null)))?(((((map__33307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33307):map__33307);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33307__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info){
return (function (p__33313){
var map__33314 = p__33313;
var map__33314__$1 = ((((!((map__33314 == null)))?(((((map__33314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33314):map__33314);
var rc = map__33314__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33314__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info))
,sources))));
if(((cljs.core.empty_QMARK_(warnings)) && (cljs.core.seq(sources_to_get)))){
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info){
return (function (p1__33270_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__33270_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__33277,map__33277__$1,sources,compiled,warnings,map__33272,map__33272__$1,msg,info,reload_info))
);
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__33353){
var map__33354 = p__33353;
var map__33354__$1 = ((((!((map__33354 == null)))?(((((map__33354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33354):map__33354);
var msg = map__33354__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33354__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__33356 = cljs.core.seq(updates);
var chunk__33358 = null;
var count__33359 = (0);
var i__33360 = (0);
while(true){
if((i__33360 < count__33359)){
var path = chunk__33358.cljs$core$IIndexed$_nth$arity$2(null,i__33360);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___33364 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___33364)){
var node_33365 = temp__5457__auto___33364;
var new_link_33366 = (function (){var G__33362 = document.createElement("link");
G__33362.setAttribute("rel","stylesheet");

G__33362.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33362;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_33366,node_33365);

goog.dom.removeNode(node_33365);
} else {
}


var G__33367 = seq__33356;
var G__33368 = chunk__33358;
var G__33369 = count__33359;
var G__33370 = (i__33360 + (1));
seq__33356 = G__33367;
chunk__33358 = G__33368;
count__33359 = G__33369;
i__33360 = G__33370;
continue;
} else {
var G__33371 = seq__33356;
var G__33372 = chunk__33358;
var G__33373 = count__33359;
var G__33374 = (i__33360 + (1));
seq__33356 = G__33371;
chunk__33358 = G__33372;
count__33359 = G__33373;
i__33360 = G__33374;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__33356);
if(temp__5457__auto__){
var seq__33356__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33356__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__33356__$1);
var G__33376 = cljs.core.chunk_rest(seq__33356__$1);
var G__33377 = c__4319__auto__;
var G__33378 = cljs.core.count(c__4319__auto__);
var G__33379 = (0);
seq__33356 = G__33376;
chunk__33358 = G__33377;
count__33359 = G__33378;
i__33360 = G__33379;
continue;
} else {
var path = cljs.core.first(seq__33356__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___33381__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___33381__$1)){
var node_33382 = temp__5457__auto___33381__$1;
var new_link_33383 = (function (){var G__33363 = document.createElement("link");
G__33363.setAttribute("rel","stylesheet");

G__33363.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33363;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_33383,node_33382);

goog.dom.removeNode(node_33382);
} else {
}


var G__33384 = cljs.core.next(seq__33356__$1);
var G__33385 = null;
var G__33386 = (0);
var G__33387 = (0);
seq__33356 = G__33384;
chunk__33358 = G__33385;
count__33359 = G__33386;
i__33360 = G__33387;
continue;
} else {
var G__33388 = cljs.core.next(seq__33356__$1);
var G__33389 = null;
var G__33390 = (0);
var G__33391 = (0);
seq__33356 = G__33388;
chunk__33358 = G__33389;
count__33359 = G__33390;
i__33360 = G__33391;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__33396){
var map__33397 = p__33396;
var map__33397__$1 = ((((!((map__33397 == null)))?(((((map__33397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33397):map__33397);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33397__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__33397,map__33397__$1,id,js){
return (function (){
return eval(js);
});})(map__33397,map__33397__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__33399){
var map__33400 = p__33399;
var map__33400__$1 = ((((!((map__33400 == null)))?(((((map__33400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33400):map__33400);
var msg = map__33400__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var sources_to_load = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),reload))?(function (){var all = cljs.core.butlast(sources);
var self = cljs.core.last(sources);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_),all),self);
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload))?sources:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,sources)
));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__33400,map__33400__$1,msg,id,sources,reload){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__33400,map__33400__$1,msg,id,sources,reload))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__33403){
var map__33404 = p__33403;
var map__33404__$1 = ((((!((map__33404 == null)))?(((((map__33404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33404):map__33404);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33404__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33404__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__33404,map__33404__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__33404,map__33404__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__33410){
var map__33411 = p__33410;
var map__33411__$1 = ((((!((map__33411 == null)))?(((((map__33411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33411):map__33411);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33411__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__33413){
var map__33414 = p__33413;
var map__33414__$1 = ((((!((map__33414 == null)))?(((((map__33414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33414):map__33414);
var msg = map__33414__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33414__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__33416 = type;
var G__33416__$1 = (((G__33416 instanceof cljs.core.Keyword))?G__33416.fqn:null);
switch (G__33416__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__33418 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__33419 = ((function (G__33418){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__33418))
;
var G__33420 = "POST";
var G__33421 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__33422 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__33418,G__33419,G__33420,G__33421,G__33422);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

return shadow.cljs.devtools.client.browser.devtools_msg("connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("disconnected!");

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
return null;
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___33427 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___33427)){
var s_33428 = temp__5457__auto___33427;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_33428.onclose = ((function (s_33428,temp__5457__auto___33427){
return (function (e){
return null;
});})(s_33428,temp__5457__auto___33427))
;

s_33428.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
