// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
var x__8869__auto__ = (((obj == null))?null:obj);
var m__8870__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8869__auto__)]);
if(!((m__8870__auto__ == null))){
return (m__8870__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8870__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8870__auto__.call(null,obj));
} else {
var m__8870__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__8870__auto____$1 == null))){
return (m__8870__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8870__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8870__auto____$1.call(null,obj));
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
var G__18707 = millis;
if((G__18707 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__18707) : goog.date.UtcDateTime.fromTimestamp.call(null,G__18707));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__8994__auto__ = (function cljs_time$coerce$from_string_$_iter__18708(s__18709){
return (new cljs.core.LazySeq(null,(function (){
var s__18709__$1 = s__18709;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18709__$1);
if(temp__4657__auto__){
var s__18709__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18709__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18709__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18711 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18710 = (0);
while(true){
if((i__18710 < size__8993__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18710);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18712){if((e18712 instanceof Error)){
var _ = e18712;
return null;
} else {
throw e18712;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18711,d);

var G__18714 = (i__18710 + (1));
i__18710 = G__18714;
continue;
} else {
var G__18715 = (i__18710 + (1));
i__18710 = G__18715;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18711),cljs_time$coerce$from_string_$_iter__18708(cljs.core.chunk_rest(s__18709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18711),null);
}
} else {
var f = cljs.core.first(s__18709__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18713){if((e18713 instanceof Error)){
var _ = e18713;
return null;
} else {
throw e18713;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__18708(cljs.core.rest(s__18709__$2)));
} else {
var G__18716 = cljs.core.rest(s__18709__$2);
s__18709__$1 = G__18716;
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
return iter__8994__auto__(cljs.core.vals(cljs_time.format.formatters));
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
var G__18717 = date;
var G__18717__$1 = (((G__18717 == null))?null:G__18717.getTime());
if((G__18717__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__18717__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__18718 = obj;
var G__18718__$1 = (((G__18718 == null))?null:cljs_time.coerce.to_date_time(G__18718));
if((G__18718__$1 == null)){
return null;
} else {
return G__18718__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__8174__auto__ = millis;
if(cljs.core.truth_(and__8174__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__8174__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__18719 = obj;
var G__18719__$1 = (((G__18719 == null))?null:cljs_time.coerce.to_date_time(G__18719));
var G__18719__$2 = (((G__18719__$1 == null))?null:G__18719__$1.getTime());
if((G__18719__$2 == null)){
return null;
} else {
return (new Date(G__18719__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__18720 = obj;
var G__18720__$1 = (((G__18720 == null))?null:cljs_time.coerce.to_date_time(G__18720));
if((G__18720__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__18720__$1);
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
var G__18721 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__18721.setHours(dt.getHours());

G__18721.setMinutes(dt.getMinutes());

G__18721.setSeconds(dt.getSeconds());

G__18721.setMilliseconds(dt.getMilliseconds());

return G__18721;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__18722_18731 = cljs_time.coerce.to_date_time;
var G__18723_18732 = "null";
var G__18724_18733 = ((function (G__18722_18731,G__18723_18732){
return (function (_){
return null;
});})(G__18722_18731,G__18723_18732))
;
goog.object.set(G__18722_18731,G__18723_18732,G__18724_18733);

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

var G__18725_18734 = cljs_time.coerce.to_date_time;
var G__18726_18735 = "number";
var G__18727_18736 = ((function (G__18725_18734,G__18726_18735){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__18725_18734,G__18726_18735))
;
goog.object.set(G__18725_18734,G__18726_18735,G__18727_18736);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__18728_18737 = cljs_time.coerce.to_date_time;
var G__18729_18738 = "string";
var G__18730_18739 = ((function (G__18728_18737,G__18729_18738){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__18728_18737,G__18729_18738))
;
goog.object.set(G__18728_18737,G__18729_18738,G__18730_18739);
