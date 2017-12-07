// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__18742){
var vec__18743 = p__18742;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18743,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18743,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__18746 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__18746);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__18749){
var map__18750 = p__18749;
var map__18750__$1 = ((((!((map__18750 == null)))?((((map__18750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18750):map__18750);
var request = map__18750__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18750__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18750__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__18750,map__18750__$1,request,on_success,on_failure){
return (function (p1__18747_SHARP_){
var G__18752 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__18747_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18752) : re_frame.core.dispatch.call(null,G__18752));
});})(api,map__18750,map__18750__$1,request,on_success,on_failure))
,((function (api,map__18750,map__18750__$1,request,on_success,on_failure){
return (function (p1__18748_SHARP_){
var G__18753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__18748_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18753) : re_frame.core.dispatch.call(null,G__18753));
});})(api,map__18750,map__18750__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__18754 = cljs.core.seq(seq_request_maps);
var chunk__18755 = null;
var count__18756 = (0);
var i__18757 = (0);
while(true){
if((i__18757 < count__18756)){
var request__$1 = chunk__18755.cljs$core$IIndexed$_nth$arity$2(null,i__18757);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__18758 = seq__18754;
var G__18759 = chunk__18755;
var G__18760 = count__18756;
var G__18761 = (i__18757 + (1));
seq__18754 = G__18758;
chunk__18755 = G__18759;
count__18756 = G__18760;
i__18757 = G__18761;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18754);
if(temp__4657__auto__){
var seq__18754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18754__$1)){
var c__9025__auto__ = cljs.core.chunk_first(seq__18754__$1);
var G__18762 = cljs.core.chunk_rest(seq__18754__$1);
var G__18763 = c__9025__auto__;
var G__18764 = cljs.core.count(c__9025__auto__);
var G__18765 = (0);
seq__18754 = G__18762;
chunk__18755 = G__18763;
count__18756 = G__18764;
i__18757 = G__18765;
continue;
} else {
var request__$1 = cljs.core.first(seq__18754__$1);
ajax.core.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));

var G__18766 = cljs.core.next(seq__18754__$1);
var G__18767 = null;
var G__18768 = (0);
var G__18769 = (0);
seq__18754 = G__18766;
chunk__18755 = G__18767;
count__18756 = G__18768;
i__18757 = G__18769;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__18770_18772 = cljs.core.cst$kw$http_DASH_xhrio;
var G__18771_18773 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18770_18772,G__18771_18773) : re_frame.core.reg_fx.call(null,G__18770_18772,G__18771_18773));
