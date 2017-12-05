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
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__21308){
var vec__21309 = p__21308;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21309,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21309,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__21312 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__21312);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__21315){
var map__21316 = p__21315;
var map__21316__$1 = ((((!((map__21316 == null)))?((((map__21316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21316):map__21316);
var request = map__21316__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21316__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21316__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__21316,map__21316__$1,request,on_success,on_failure){
return (function (p1__21313_SHARP_){
var G__21318 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__21313_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21318) : re_frame.core.dispatch.call(null,G__21318));
});})(api,map__21316,map__21316__$1,request,on_success,on_failure))
,((function (api,map__21316,map__21316__$1,request,on_success,on_failure){
return (function (p1__21314_SHARP_){
var G__21319 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__21314_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21319) : re_frame.core.dispatch.call(null,G__21319));
});})(api,map__21316,map__21316__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__21320 = cljs.core.seq(seq_request_maps);
var chunk__21321 = null;
var count__21322 = (0);
var i__21323 = (0);
while(true){
if((i__21323 < count__21322)){
var request__$1 = chunk__21321.cljs$core$IIndexed$_nth$arity$2(null,i__21323);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__21324 = seq__21320;
var G__21325 = chunk__21321;
var G__21326 = count__21322;
var G__21327 = (i__21323 + (1));
seq__21320 = G__21324;
chunk__21321 = G__21325;
count__21322 = G__21326;
i__21323 = G__21327;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__21320);
if(temp__4657__auto__){
var seq__21320__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21320__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__21320__$1);
var G__21328 = cljs.core.chunk_rest(seq__21320__$1);
var G__21329 = c__8618__auto__;
var G__21330 = cljs.core.count(c__8618__auto__);
var G__21331 = (0);
seq__21320 = G__21328;
chunk__21321 = G__21329;
count__21322 = G__21330;
i__21323 = G__21331;
continue;
} else {
var request__$1 = cljs.core.first(seq__21320__$1);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__21332 = cljs.core.next(seq__21320__$1);
var G__21333 = null;
var G__21334 = (0);
var G__21335 = (0);
seq__21320 = G__21332;
chunk__21321 = G__21333;
count__21322 = G__21334;
i__21323 = G__21335;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__21336_21338 = cljs.core.cst$kw$http_DASH_xhrio;
var G__21337_21339 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21336_21338,G__21337_21339) : re_frame.core.reg_fx.call(null,G__21336_21338,G__21337_21339));
