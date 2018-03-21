goog.provide('cljs_time.coerce');
goog.require('cljs.core');
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
if(((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4211__auto__ = (((obj == null))?null:obj);
var m__4212__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4212__auto__.call(null,obj));
} else {
var m__4212__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__4212__auto____$1.call(null,obj));
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
var G__36580 = millis;
if((G__36580 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__36580) : goog.date.UtcDateTime.fromTimestamp.call(null,G__36580));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4292__auto__ = (function cljs_time$coerce$from_string_$_iter__36581(s__36582){
return (new cljs.core.LazySeq(null,(function (){
var s__36582__$1 = s__36582;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__36582__$1);
if(temp__5457__auto__){
var s__36582__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36582__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__36582__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__36584 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__36583 = (0);
while(true){
if((i__36583 < size__4291__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__36583);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e36585){if((e36585 instanceof Error)){
var _ = e36585;
return null;
} else {
throw e36585;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__36584,d);

var G__36587 = (i__36583 + (1));
i__36583 = G__36587;
continue;
} else {
var G__36588 = (i__36583 + (1));
i__36583 = G__36588;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36584),cljs_time$coerce$from_string_$_iter__36581(cljs.core.chunk_rest(s__36582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36584),null);
}
} else {
var f = cljs.core.first(s__36582__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e36586){if((e36586 instanceof Error)){
var _ = e36586;
return null;
} else {
throw e36586;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__36581(cljs.core.rest(s__36582__$2)));
} else {
var G__36589 = cljs.core.rest(s__36582__$2);
s__36582__$1 = G__36589;
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
return iter__4292__auto__(cljs.core.vals(cljs_time.format.formatters));
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
var G__36590 = date;
var G__36590__$1 = (((G__36590 == null))?null:G__36590.getTime());
if((G__36590__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__36590__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__36591 = obj;
var G__36591__$1 = (((G__36591 == null))?null:cljs_time.coerce.to_date_time(G__36591));
if((G__36591__$1 == null)){
return null;
} else {
return G__36591__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__3911__auto__ = millis;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__3911__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__36592 = obj;
var G__36592__$1 = (((G__36592 == null))?null:cljs_time.coerce.to_date_time(G__36592));
var G__36592__$2 = (((G__36592__$1 == null))?null:G__36592__$1.getTime());
if((G__36592__$2 == null)){
return null;
} else {
return (new Date(G__36592__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__36593 = obj;
var G__36593__$1 = (((G__36593 == null))?null:cljs_time.coerce.to_date_time(G__36593));
if((G__36593__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__36593__$1);
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
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
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
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
var G__36594 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__36594.setHours(dt.getHours());

G__36594.setMinutes(dt.getMinutes());

G__36594.setSeconds(dt.getSeconds());

G__36594.setMilliseconds(dt.getMilliseconds());

return G__36594;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__36595_36604 = cljs_time.coerce.to_date_time;
var G__36596_36605 = "null";
var G__36597_36606 = ((function (G__36595_36604,G__36596_36605){
return (function (_){
return null;
});})(G__36595_36604,G__36596_36605))
;
goog.object.set(G__36595_36604,G__36596_36605,G__36597_36606);

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

var G__36598_36607 = cljs_time.coerce.to_date_time;
var G__36599_36608 = "number";
var G__36600_36609 = ((function (G__36598_36607,G__36599_36608){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__36598_36607,G__36599_36608))
;
goog.object.set(G__36598_36607,G__36599_36608,G__36600_36609);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__36601_36610 = cljs_time.coerce.to_date_time;
var G__36602_36611 = "string";
var G__36603_36612 = ((function (G__36601_36610,G__36602_36611){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__36601_36610,G__36602_36611))
;
goog.object.set(G__36601_36610,G__36602_36611,G__36603_36612);

//# sourceMappingURL=cljs_time.coerce.js.map
