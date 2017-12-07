// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__17445 = e.target.readyState;
var fexpr__17444 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__17444.cljs$core$IFn$_invoke$arity$1 ? fexpr__17444.cljs$core$IFn$_invoke$arity$1(G__17445) : fexpr__17444.call(null,G__17445));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__17447,handler){
var map__17448 = p__17447;
var map__17448__$1 = ((((!((map__17448 == null)))?((((map__17448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17448):map__17448);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17448__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17448__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__17448,map__17448__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__17446_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__17446_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__17448,map__17448__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___17460 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___17460)){
var response_type_17461 = temp__4657__auto___17460;
this$__$1.responseType = cljs.core.name(response_type_17461);
} else {
}

var seq__17450_17462 = cljs.core.seq(headers);
var chunk__17451_17463 = null;
var count__17452_17464 = (0);
var i__17453_17465 = (0);
while(true){
if((i__17453_17465 < count__17452_17464)){
var vec__17454_17466 = chunk__17451_17463.cljs$core$IIndexed$_nth$arity$2(null,i__17453_17465);
var k_17467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17454_17466,(0),null);
var v_17468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17454_17466,(1),null);
this$__$1.setRequestHeader(k_17467,v_17468);

var G__17469 = seq__17450_17462;
var G__17470 = chunk__17451_17463;
var G__17471 = count__17452_17464;
var G__17472 = (i__17453_17465 + (1));
seq__17450_17462 = G__17469;
chunk__17451_17463 = G__17470;
count__17452_17464 = G__17471;
i__17453_17465 = G__17472;
continue;
} else {
var temp__4657__auto___17473 = cljs.core.seq(seq__17450_17462);
if(temp__4657__auto___17473){
var seq__17450_17474__$1 = temp__4657__auto___17473;
if(cljs.core.chunked_seq_QMARK_(seq__17450_17474__$1)){
var c__9025__auto___17475 = cljs.core.chunk_first(seq__17450_17474__$1);
var G__17476 = cljs.core.chunk_rest(seq__17450_17474__$1);
var G__17477 = c__9025__auto___17475;
var G__17478 = cljs.core.count(c__9025__auto___17475);
var G__17479 = (0);
seq__17450_17462 = G__17476;
chunk__17451_17463 = G__17477;
count__17452_17464 = G__17478;
i__17453_17465 = G__17479;
continue;
} else {
var vec__17457_17480 = cljs.core.first(seq__17450_17474__$1);
var k_17481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457_17480,(0),null);
var v_17482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17457_17480,(1),null);
this$__$1.setRequestHeader(k_17481,v_17482);

var G__17483 = cljs.core.next(seq__17450_17474__$1);
var G__17484 = null;
var G__17485 = (0);
var G__17486 = (0);
seq__17450_17462 = G__17483;
chunk__17451_17463 = G__17484;
count__17452_17464 = G__17485;
i__17453_17465 = G__17486;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8186__auto__ = body;
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
