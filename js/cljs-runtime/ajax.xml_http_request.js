goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__35586 = e.target.readyState;
var fexpr__35585 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__35585.cljs$core$IFn$_invoke$arity$1 ? fexpr__35585.cljs$core$IFn$_invoke$arity$1(G__35586) : fexpr__35585.call(null,G__35586));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__35588,handler){
var map__35589 = p__35588;
var map__35589__$1 = ((((!((map__35589 == null)))?(((((map__35589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35589):map__35589);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35589__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35589__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35589__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__35589,map__35589__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__35587_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__35587_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__35589,map__35589__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___35601 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___35601)){
var response_type_35602 = temp__5457__auto___35601;
this$__$1.responseType = cljs.core.name(response_type_35602);
} else {
}

var seq__35591_35603 = cljs.core.seq(headers);
var chunk__35592_35604 = null;
var count__35593_35605 = (0);
var i__35594_35606 = (0);
while(true){
if((i__35594_35606 < count__35593_35605)){
var vec__35595_35607 = chunk__35592_35604.cljs$core$IIndexed$_nth$arity$2(null,i__35594_35606);
var k_35608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595_35607,(0),null);
var v_35609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595_35607,(1),null);
this$__$1.setRequestHeader(k_35608,v_35609);


var G__35610 = seq__35591_35603;
var G__35611 = chunk__35592_35604;
var G__35612 = count__35593_35605;
var G__35613 = (i__35594_35606 + (1));
seq__35591_35603 = G__35610;
chunk__35592_35604 = G__35611;
count__35593_35605 = G__35612;
i__35594_35606 = G__35613;
continue;
} else {
var temp__5457__auto___35614 = cljs.core.seq(seq__35591_35603);
if(temp__5457__auto___35614){
var seq__35591_35615__$1 = temp__5457__auto___35614;
if(cljs.core.chunked_seq_QMARK_(seq__35591_35615__$1)){
var c__4319__auto___35616 = cljs.core.chunk_first(seq__35591_35615__$1);
var G__35617 = cljs.core.chunk_rest(seq__35591_35615__$1);
var G__35618 = c__4319__auto___35616;
var G__35619 = cljs.core.count(c__4319__auto___35616);
var G__35620 = (0);
seq__35591_35603 = G__35617;
chunk__35592_35604 = G__35618;
count__35593_35605 = G__35619;
i__35594_35606 = G__35620;
continue;
} else {
var vec__35598_35621 = cljs.core.first(seq__35591_35615__$1);
var k_35622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598_35621,(0),null);
var v_35623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35598_35621,(1),null);
this$__$1.setRequestHeader(k_35622,v_35623);


var G__35624 = cljs.core.next(seq__35591_35615__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__35591_35603 = G__35624;
chunk__35592_35604 = G__35625;
count__35593_35605 = G__35626;
i__35594_35606 = G__35627;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
