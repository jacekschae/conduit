// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__33636,handler){
var map__33637 = p__33636;
var map__33637__$1 = ((((!((map__33637 == null)))?((((map__33637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33637):map__33637);
var uri = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__33637__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__33637,map__33637__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__33635_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__33635_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__33637,map__33637__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___33649 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___33649)){
var response_type_33650 = temp__4657__auto___33649;
this$__$1.responseType = cljs.core.name.call(null,response_type_33650);
} else {
}

var seq__33639_33651 = cljs.core.seq.call(null,headers);
var chunk__33640_33652 = null;
var count__33641_33653 = (0);
var i__33642_33654 = (0);
while(true){
if((i__33642_33654 < count__33641_33653)){
var vec__33643_33655 = cljs.core._nth.call(null,chunk__33640_33652,i__33642_33654);
var k_33656 = cljs.core.nth.call(null,vec__33643_33655,(0),null);
var v_33657 = cljs.core.nth.call(null,vec__33643_33655,(1),null);
this$__$1.setRequestHeader(k_33656,v_33657);

var G__33658 = seq__33639_33651;
var G__33659 = chunk__33640_33652;
var G__33660 = count__33641_33653;
var G__33661 = (i__33642_33654 + (1));
seq__33639_33651 = G__33658;
chunk__33640_33652 = G__33659;
count__33641_33653 = G__33660;
i__33642_33654 = G__33661;
continue;
} else {
var temp__4657__auto___33662 = cljs.core.seq.call(null,seq__33639_33651);
if(temp__4657__auto___33662){
var seq__33639_33663__$1 = temp__4657__auto___33662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33639_33663__$1)){
var c__29324__auto___33664 = cljs.core.chunk_first.call(null,seq__33639_33663__$1);
var G__33665 = cljs.core.chunk_rest.call(null,seq__33639_33663__$1);
var G__33666 = c__29324__auto___33664;
var G__33667 = cljs.core.count.call(null,c__29324__auto___33664);
var G__33668 = (0);
seq__33639_33651 = G__33665;
chunk__33640_33652 = G__33666;
count__33641_33653 = G__33667;
i__33642_33654 = G__33668;
continue;
} else {
var vec__33646_33669 = cljs.core.first.call(null,seq__33639_33663__$1);
var k_33670 = cljs.core.nth.call(null,vec__33646_33669,(0),null);
var v_33671 = cljs.core.nth.call(null,vec__33646_33669,(1),null);
this$__$1.setRequestHeader(k_33670,v_33671);

var G__33672 = cljs.core.next.call(null,seq__33639_33663__$1);
var G__33673 = null;
var G__33674 = (0);
var G__33675 = (0);
seq__33639_33651 = G__33672;
chunk__33640_33652 = G__33673;
count__33641_33653 = G__33674;
i__33642_33654 = G__33675;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28485__auto__ = body;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
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
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1512565253555
