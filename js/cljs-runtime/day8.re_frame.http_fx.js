goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__36051){
var vec__36054 = p__36051;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__36057 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__36057);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__36068){
var map__36069 = p__36068;
var map__36069__$1 = ((((!((map__36069 == null)))?(((((map__36069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36069):map__36069);
var request = map__36069__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36069__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36069__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__36069,map__36069__$1,request,on_success,on_failure){
return (function (p1__36064_SHARP_){
var G__36075 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__36064_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36075) : re_frame.core.dispatch.call(null,G__36075));
});})(api,map__36069,map__36069__$1,request,on_success,on_failure))
,((function (api,map__36069,map__36069__$1,request,on_success,on_failure){
return (function (p1__36065_SHARP_){
var G__36076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__36065_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__36076) : re_frame.core.dispatch.call(null,G__36076));
});})(api,map__36069,map__36069__$1,request,on_success,on_failure))
,api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__36089 = cljs.core.seq(seq_request_maps);
var chunk__36090 = null;
var count__36091 = (0);
var i__36092 = (0);
while(true){
if((i__36092 < count__36091)){
var request__$1 = chunk__36090.cljs$core$IIndexed$_nth$arity$2(null,i__36092);
var G__36093_36102 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__36093_36102) : ajax.core.ajax_request.call(null,G__36093_36102));


var G__36103 = seq__36089;
var G__36104 = chunk__36090;
var G__36105 = count__36091;
var G__36106 = (i__36092 + (1));
seq__36089 = G__36103;
chunk__36090 = G__36104;
count__36091 = G__36105;
i__36092 = G__36106;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__36089);
if(temp__5457__auto__){
var seq__36089__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36089__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__36089__$1);
var G__36108 = cljs.core.chunk_rest(seq__36089__$1);
var G__36109 = c__4319__auto__;
var G__36110 = cljs.core.count(c__4319__auto__);
var G__36111 = (0);
seq__36089 = G__36108;
chunk__36090 = G__36109;
count__36091 = G__36110;
i__36092 = G__36111;
continue;
} else {
var request__$1 = cljs.core.first(seq__36089__$1);
var G__36100_36112 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__36100_36112) : ajax.core.ajax_request.call(null,G__36100_36112));


var G__36114 = cljs.core.next(seq__36089__$1);
var G__36115 = null;
var G__36116 = (0);
var G__36117 = (0);
seq__36089 = G__36114;
chunk__36090 = G__36115;
count__36091 = G__36116;
i__36092 = G__36117;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__36118_36120 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__36119_36121 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__36118_36120,G__36119_36121) : re_frame.core.reg_fx.call(null,G__36118_36120,G__36119_36121));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
