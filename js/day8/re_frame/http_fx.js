// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__18342){
var vec__18343 = p__18342;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18343,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18343,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__18346 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__18346);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__18349){
var map__18350 = p__18349;
var map__18350__$1 = ((((!((map__18350 == null)))?((((map__18350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18350):map__18350);
var request = map__18350__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18350__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18350__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__18350,map__18350__$1,request,on_success,on_failure){
return (function (p1__18347_SHARP_){
var G__18352 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__18347_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18352) : re_frame.core.dispatch.call(null,G__18352));
});})(api,map__18350,map__18350__$1,request,on_success,on_failure))
,((function (api,map__18350,map__18350__$1,request,on_success,on_failure){
return (function (p1__18348_SHARP_){
var G__18353 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__18348_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18353) : re_frame.core.dispatch.call(null,G__18353));
});})(api,map__18350,map__18350__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__18354 = cljs.core.seq(seq_request_maps);
var chunk__18355 = null;
var count__18356 = (0);
var i__18357 = (0);
while(true){
if((i__18357 < count__18356)){
var request__$1 = chunk__18355.cljs$core$IIndexed$_nth$arity$2(null,i__18357);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__18358 = seq__18354;
var G__18359 = chunk__18355;
var G__18360 = count__18356;
var G__18361 = (i__18357 + (1));
seq__18354 = G__18358;
chunk__18355 = G__18359;
count__18356 = G__18360;
i__18357 = G__18361;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18354);
if(temp__4657__auto__){
var seq__18354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18354__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__18354__$1);
var G__18362 = cljs.core.chunk_rest(seq__18354__$1);
var G__18363 = c__8618__auto__;
var G__18364 = cljs.core.count(c__8618__auto__);
var G__18365 = (0);
seq__18354 = G__18362;
chunk__18355 = G__18363;
count__18356 = G__18364;
i__18357 = G__18365;
continue;
} else {
var request__$1 = cljs.core.first(seq__18354__$1);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__18366 = cljs.core.next(seq__18354__$1);
var G__18367 = null;
var G__18368 = (0);
var G__18369 = (0);
seq__18354 = G__18366;
chunk__18355 = G__18367;
count__18356 = G__18368;
i__18357 = G__18369;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__18370_18372 = cljs.core.cst$kw$http_DASH_xhrio;
var G__18371_18373 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18370_18372,G__18371_18373) : re_frame.core.reg_fx.call(null,G__18370_18372,G__18371_18373));
