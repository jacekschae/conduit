// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__19785 = e.target.readyState;
var fexpr__19784 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__19784.cljs$core$IFn$_invoke$arity$1 ? fexpr__19784.cljs$core$IFn$_invoke$arity$1(G__19785) : fexpr__19784.call(null,G__19785));
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__19787,handler){
var map__19788 = p__19787;
var map__19788__$1 = ((((!((map__19788 == null)))?((((map__19788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19788):map__19788);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19788__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19788__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19788__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__19788,map__19788__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__19786_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__19786_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__19788,map__19788__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___19800 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___19800)){
var response_type_19801 = temp__4657__auto___19800;
this$__$1.responseType = cljs.core.name(response_type_19801);
} else {
}

var seq__19790_19802 = cljs.core.seq(headers);
var chunk__19791_19803 = null;
var count__19792_19804 = (0);
var i__19793_19805 = (0);
while(true){
if((i__19793_19805 < count__19792_19804)){
var vec__19794_19806 = chunk__19791_19803.cljs$core$IIndexed$_nth$arity$2(null,i__19793_19805);
var k_19807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19794_19806,(0),null);
var v_19808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19794_19806,(1),null);
this$__$1.setRequestHeader(k_19807,v_19808);

var G__19809 = seq__19790_19802;
var G__19810 = chunk__19791_19803;
var G__19811 = count__19792_19804;
var G__19812 = (i__19793_19805 + (1));
seq__19790_19802 = G__19809;
chunk__19791_19803 = G__19810;
count__19792_19804 = G__19811;
i__19793_19805 = G__19812;
continue;
} else {
var temp__4657__auto___19813 = cljs.core.seq(seq__19790_19802);
if(temp__4657__auto___19813){
var seq__19790_19814__$1 = temp__4657__auto___19813;
if(cljs.core.chunked_seq_QMARK_(seq__19790_19814__$1)){
var c__8618__auto___19815 = cljs.core.chunk_first(seq__19790_19814__$1);
var G__19816 = cljs.core.chunk_rest(seq__19790_19814__$1);
var G__19817 = c__8618__auto___19815;
var G__19818 = cljs.core.count(c__8618__auto___19815);
var G__19819 = (0);
seq__19790_19802 = G__19816;
chunk__19791_19803 = G__19817;
count__19792_19804 = G__19818;
i__19793_19805 = G__19819;
continue;
} else {
var vec__19797_19820 = cljs.core.first(seq__19790_19814__$1);
var k_19821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19797_19820,(0),null);
var v_19822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19797_19820,(1),null);
this$__$1.setRequestHeader(k_19821,v_19822);

var G__19823 = cljs.core.next(seq__19790_19814__$1);
var G__19824 = null;
var G__19825 = (0);
var G__19826 = (0);
seq__19790_19802 = G__19823;
chunk__19791_19803 = G__19824;
count__19792_19804 = G__19825;
i__19793_19805 = G__19826;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7779__auto__ = body;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
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
