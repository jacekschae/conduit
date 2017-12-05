// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__8462__auto__ = (((obj == null))?null:obj);
var m__8463__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8463__auto__.call(null,obj));
} else {
var m__8463__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8463__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__21273 = millis;
if((G__21273 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__21273) : goog.date.UtcDateTime.fromTimestamp.call(null,G__21273));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__8587__auto__ = (function cljs_time$coerce$from_string_$_iter__21274(s__21275){
return (new cljs.core.LazySeq(null,(function (){
var s__21275__$1 = s__21275;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__21275__$1);
if(temp__4657__auto__){
var s__21275__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21275__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__21275__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__21277 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__21276 = (0);
while(true){
if((i__21276 < size__8586__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__21276);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21278){if((e21278 instanceof Error)){
var _ = e21278;
return null;
} else {
throw e21278;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__21277,d);

var G__21280 = (i__21276 + (1));
i__21276 = G__21280;
continue;
} else {
var G__21281 = (i__21276 + (1));
i__21276 = G__21281;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21277),cljs_time$coerce$from_string_$_iter__21274(cljs.core.chunk_rest(s__21275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21277),null);
}
} else {
var f = cljs.core.first(s__21275__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e21279){if((e21279 instanceof Error)){
var _ = e21279;
return null;
} else {
throw e21279;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__21274(cljs.core.rest(s__21275__$2)));
} else {
var G__21282 = cljs.core.rest(s__21275__$2);
s__21275__$1 = G__21282;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8587__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__21283 = date;
var G__21283__$1 = (((G__21283 == null))?null:G__21283.getTime());
if((G__21283__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__21283__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__21284 = obj;
var G__21284__$1 = (((G__21284 == null))?null:cljs_time.coerce.to_date_time(G__21284));
if((G__21284__$1 == null)){
return null;
} else {
return G__21284__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__7767__auto__ = millis;
if(cljs.core.truth_(and__7767__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__7767__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__21285 = obj;
var G__21285__$1 = (((G__21285 == null))?null:cljs_time.coerce.to_date_time(G__21285));
var G__21285__$2 = (((G__21285__$1 == null))?null:G__21285__$1.getTime());
if((G__21285__$2 == null)){
return null;
} else {
return (new Date(G__21285__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__21286 = obj;
var G__21286__$1 = (((G__21286 == null))?null:cljs_time.coerce.to_date_time(G__21286));
if((G__21286__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__21286__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__21287 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__21287.setHours(dt.getHours());

G__21287.setMinutes(dt.getMinutes());

G__21287.setSeconds(dt.getSeconds());

G__21287.setMilliseconds(dt.getMilliseconds());

return G__21287;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__21288_21297 = cljs_time.coerce.to_date_time;
var G__21289_21298 = "null";
var G__21290_21299 = ((function (G__21288_21297,G__21289_21298){
return (function (_){
return null;
});})(G__21288_21297,G__21289_21298))
;
goog.object.set(G__21288_21297,G__21289_21298,G__21290_21299);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__21291_21300 = cljs_time.coerce.to_date_time;
var G__21292_21301 = "number";
var G__21293_21302 = ((function (G__21291_21300,G__21292_21301){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__21291_21300,G__21292_21301))
;
goog.object.set(G__21291_21300,G__21292_21301,G__21293_21302);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__21294_21303 = cljs_time.coerce.to_date_time;
var G__21295_21304 = "string";
var G__21296_21305 = ((function (G__21294_21303,G__21295_21304){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__21294_21303,G__21295_21304))
;
goog.object.set(G__21294_21303,G__21295_21304,G__21296_21305);
