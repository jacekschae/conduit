// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * Marker protocol indicating a devtools template.
 * @interface
 */
devtools.protocols.ITemplate = function(){};


/**
 * Marker protocol indicating a devtools group.
 * @interface
 */
devtools.protocols.IGroup = function(){};


/**
 * Marker protocol indicating a devtools surrogate object.
 * @interface
 */
devtools.protocols.ISurrogate = function(){};


/**
 * @interface
 */
devtools.protocols.IFormat = function(){};

devtools.protocols._header = (function devtools$protocols$_header(value){
if((!((value == null))) && (!((value.devtools$protocols$IFormat$_header$arity$1 == null)))){
return value.devtools$protocols$IFormat$_header$arity$1(value);
} else {
var x__8462__auto__ = (((value == null))?null:value);
var m__8463__auto__ = (devtools.protocols._header[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto__.call(null,value));
} else {
var m__8463__auto____$1 = (devtools.protocols._header["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IFormat.-header",value);
}
}
}
});

devtools.protocols._has_body = (function devtools$protocols$_has_body(value){
if((!((value == null))) && (!((value.devtools$protocols$IFormat$_has_body$arity$1 == null)))){
return value.devtools$protocols$IFormat$_has_body$arity$1(value);
} else {
var x__8462__auto__ = (((value == null))?null:value);
var m__8463__auto__ = (devtools.protocols._has_body[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto__.call(null,value));
} else {
var m__8463__auto____$1 = (devtools.protocols._has_body["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IFormat.-has-body",value);
}
}
}
});

devtools.protocols._body = (function devtools$protocols$_body(value){
if((!((value == null))) && (!((value.devtools$protocols$IFormat$_body$arity$1 == null)))){
return value.devtools$protocols$IFormat$_body$arity$1(value);
} else {
var x__8462__auto__ = (((value == null))?null:value);
var m__8463__auto__ = (devtools.protocols._body[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto__.call(null,value));
} else {
var m__8463__auto____$1 = (devtools.protocols._body["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IFormat.-body",value);
}
}
}
});

