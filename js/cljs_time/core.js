// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["DEPRECATION WARNING: ",message], 0));
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.year[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.month[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.day[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.hour[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.minute[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.sec[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.second[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.milli[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__8463__auto__.call(null,this$,that));
} else {
var m__8463__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__8463__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__8463__auto__.call(null,this$,that));
} else {
var m__8463__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__8463__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__8463__auto__.call(null,this$,that));
} else {
var m__8463__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__8463__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.plus_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__8463__auto__.call(null,this$,period));
} else {
var m__8463__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__8463__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.minus_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__8463__auto__.call(null,this$,period));
} else {
var m__8463__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__8463__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the week of the week based year of the given date/time
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.week_number_of_year["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.week-number-of-year",this$);
}
}
}
});

/**
 * Returns the the week based year of the given date/time.
 */
cljs_time.core.week_year = (function cljs_time$core$week_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_year$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.week_year[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.week_year["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.week-year",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_days[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_months[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (cljs_time.core.in_years[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8419__auto__,k__8420__auto__){
var self__ = this;
var this__8419__auto____$1 = this;
return this__8419__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8420__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8421__auto__,k20912,else__8422__auto__){
var self__ = this;
var this__8421__auto____$1 = this;
var G__20916 = k20912;
var G__20916__$1 = (((G__20916 instanceof cljs.core.Keyword))?G__20916.fqn:null);
switch (G__20916__$1) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20912,else__8422__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8433__auto__,writer__8434__auto__,opts__8435__auto__){
var self__ = this;
var this__8433__auto____$1 = this;
var pr_pair__8436__auto__ = ((function (this__8433__auto____$1){
return (function (keyval__8437__auto__){
return cljs.core.pr_sequential_writer(writer__8434__auto__,cljs.core.pr_writer,""," ","",opts__8435__auto__,keyval__8437__auto__);
});})(this__8433__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8434__auto__,pr_pair__8436__auto__,"#cljs-time.core.Interval{",", ","}",opts__8435__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20911){
var self__ = this;
var G__20911__$1 = this;
return (new cljs.core.RecordIter((0),G__20911__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8417__auto__){
var self__ = this;
var this__8417__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8414__auto__){
var self__ = this;
var this__8414__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8423__auto__){
var self__ = this;
var this__8423__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8415__auto__){
var self__ = this;
var this__8415__auto____$1 = this;
var h__8233__auto__ = self__.__hash;
if(!((h__8233__auto__ == null))){
return h__8233__auto__;
} else {
var h__8233__auto____$1 = (function (){var fexpr__20917 = ((function (h__8233__auto__,this__8415__auto____$1){
return (function (coll__8416__auto__){
return (534314193 ^ cljs.core.hash_unordered_coll(coll__8416__auto__));
});})(h__8233__auto__,this__8415__auto____$1))
;
return fexpr__20917(this__8415__auto____$1);
})();
self__.__hash = h__8233__auto____$1;

return h__8233__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20913,other20914){
var self__ = this;
var this20913__$1 = this;
return (!((other20914 == null))) && ((this20913__$1.constructor === other20914.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20913__$1.start,other20914.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20913__$1.end,other20914.end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20913__$1.__extmap,other20914.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8428__auto__,k__8429__auto__){
var self__ = this;
var this__8428__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null], null), null),k__8429__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8428__auto____$1),self__.__meta),k__8429__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8429__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8426__auto__,k__8427__auto__,G__20911){
var self__ = this;
var this__8426__auto____$1 = this;
var pred__20918 = cljs.core.keyword_identical_QMARK_;
var expr__20919 = k__8427__auto__;
if(cljs.core.truth_((function (){var G__20921 = cljs.core.cst$kw$start;
var G__20922 = expr__20919;
return (pred__20918.cljs$core$IFn$_invoke$arity$2 ? pred__20918.cljs$core$IFn$_invoke$arity$2(G__20921,G__20922) : pred__20918.call(null,G__20921,G__20922));
})())){
return (new cljs_time.core.Interval(G__20911,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20923 = cljs.core.cst$kw$end;
var G__20924 = expr__20919;
return (pred__20918.cljs$core$IFn$_invoke$arity$2 ? pred__20918.cljs$core$IFn$_invoke$arity$2(G__20923,G__20924) : pred__20918.call(null,G__20923,G__20924));
})())){
return (new cljs_time.core.Interval(self__.start,G__20911,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8427__auto__,G__20911),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8431__auto__){
var self__ = this;
var this__8431__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8418__auto__,G__20911){
var self__ = this;
var this__8418__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__20911,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8424__auto__,entry__8425__auto__){
var self__ = this;
var this__8424__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8425__auto__)){
return this__8424__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8425__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8425__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8424__auto____$1,entry__8425__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__8455__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__8455__auto__,writer__8456__auto__){
return cljs.core._write(writer__8456__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__20915){
return (new cljs_time.core.Interval(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__20915),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__20915),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20915,cljs.core.cst$kw$start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end], 0))),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8419__auto__,k__8420__auto__){
var self__ = this;
var this__8419__auto____$1 = this;
return this__8419__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8420__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8421__auto__,k20927,else__8422__auto__){
var self__ = this;
var this__8421__auto____$1 = this;
var G__20931 = k20927;
var G__20931__$1 = (((G__20931 instanceof cljs.core.Keyword))?G__20931.fqn:null);
switch (G__20931__$1) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20927,else__8422__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8433__auto__,writer__8434__auto__,opts__8435__auto__){
var self__ = this;
var this__8433__auto____$1 = this;
var pr_pair__8436__auto__ = ((function (this__8433__auto____$1){
return (function (keyval__8437__auto__){
return cljs.core.pr_sequential_writer(writer__8434__auto__,cljs.core.pr_writer,""," ","",opts__8435__auto__,keyval__8437__auto__);
});})(this__8433__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8434__auto__,pr_pair__8436__auto__,"#cljs-time.core.Period{",", ","}",opts__8435__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20926){
var self__ = this;
var G__20926__$1 = this;
return (new cljs.core.RecordIter((0),G__20926__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years,cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8417__auto__){
var self__ = this;
var this__8417__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8414__auto__){
var self__ = this;
var this__8414__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8423__auto__){
var self__ = this;
var this__8423__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8415__auto__){
var self__ = this;
var this__8415__auto____$1 = this;
var h__8233__auto__ = self__.__hash;
if(!((h__8233__auto__ == null))){
return h__8233__auto__;
} else {
var h__8233__auto____$1 = (function (){var fexpr__20932 = ((function (h__8233__auto__,this__8415__auto____$1){
return (function (coll__8416__auto__){
return (1393857022 ^ cljs.core.hash_unordered_coll(coll__8416__auto__));
});})(h__8233__auto__,this__8415__auto____$1))
;
return fexpr__20932(this__8415__auto____$1);
})();
self__.__hash = h__8233__auto____$1;

return h__8233__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20928,other20929){
var self__ = this;
var this20928__$1 = this;
return (!((other20929 == null))) && ((this20928__$1.constructor === other20929.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.years,other20929.years)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.months,other20929.months)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.weeks,other20929.weeks)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.days,other20929.days)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.hours,other20929.hours)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.minutes,other20929.minutes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.seconds,other20929.seconds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.millis,other20929.millis)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20928__$1.__extmap,other20929.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8428__auto__,k__8429__auto__){
var self__ = this;
var this__8428__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$seconds,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$minutes,null,cljs.core.cst$kw$weeks,null,cljs.core.cst$kw$millis,null], null), null),k__8429__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8428__auto____$1),self__.__meta),k__8429__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8429__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8426__auto__,k__8427__auto__,G__20926){
var self__ = this;
var this__8426__auto____$1 = this;
var pred__20933 = cljs.core.keyword_identical_QMARK_;
var expr__20934 = k__8427__auto__;
if(cljs.core.truth_((function (){var G__20936 = cljs.core.cst$kw$years;
var G__20937 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20936,G__20937) : pred__20933.call(null,G__20936,G__20937));
})())){
return (new cljs_time.core.Period(G__20926,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20938 = cljs.core.cst$kw$months;
var G__20939 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20938,G__20939) : pred__20933.call(null,G__20938,G__20939));
})())){
return (new cljs_time.core.Period(self__.years,G__20926,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20940 = cljs.core.cst$kw$weeks;
var G__20941 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20940,G__20941) : pred__20933.call(null,G__20940,G__20941));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,G__20926,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20942 = cljs.core.cst$kw$days;
var G__20943 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20942,G__20943) : pred__20933.call(null,G__20942,G__20943));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__20926,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20944 = cljs.core.cst$kw$hours;
var G__20945 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20944,G__20945) : pred__20933.call(null,G__20944,G__20945));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__20926,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20946 = cljs.core.cst$kw$minutes;
var G__20947 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20946,G__20947) : pred__20933.call(null,G__20946,G__20947));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__20926,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20948 = cljs.core.cst$kw$seconds;
var G__20949 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20948,G__20949) : pred__20933.call(null,G__20948,G__20949));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__20926,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20950 = cljs.core.cst$kw$millis;
var G__20951 = expr__20934;
return (pred__20933.cljs$core$IFn$_invoke$arity$2 ? pred__20933.cljs$core$IFn$_invoke$arity$2(G__20950,G__20951) : pred__20933.call(null,G__20950,G__20951));
})())){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__20926,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8427__auto__,G__20926),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8431__auto__){
var self__ = this;
var this__8431__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8418__auto__,G__20926){
var self__ = this;
var this__8418__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__20926,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8424__auto__,entry__8425__auto__){
var self__ = this;
var this__8424__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8425__auto__)){
return this__8424__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8425__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8425__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8424__auto____$1,entry__8425__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$years,cljs.core.cst$sym$months,cljs.core.cst$sym$weeks,cljs.core.cst$sym$days,cljs.core.cst$sym$hours,cljs.core.cst$sym$minutes,cljs.core.cst$sym$seconds,cljs.core.cst$sym$millis], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__8455__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__8455__auto__,writer__8456__auto__){
return cljs.core._write(writer__8456__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__20930){
return (new cljs_time.core.Period(cljs.core.cst$kw$years.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$months.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$weeks.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$days.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__20930),cljs.core.cst$kw$millis.cljs$core$IFn$_invoke$arity$1(G__20930),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20930,cljs.core.cst$kw$years,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], 0))),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var G__20957 = arguments.length;
switch (G__20957) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8956__auto__ = [];
var len__8937__auto___20959 = arguments.length;
var i__8938__auto___20960 = (0);
while(true){
if((i__8938__auto___20960 < len__8937__auto___20959)){
args_arr__8956__auto__.push((arguments[i__8938__auto___20960]));

var G__20961 = (i__8938__auto___20960 + (1));
i__8938__auto___20960 = G__20961;
continue;
} else {
}
break;
}

var argseq__8957__auto__ = (new cljs.core.IndexedSeq(args_arr__8956__auto__.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8957__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(cljs.core.PersistentArrayMap.createAsIfByAssoc([period,value]));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq20954){
var G__20955 = cljs.core.first(seq20954);
var seq20954__$1 = cljs.core.next(seq20954);
var G__20956 = cljs.core.first(seq20954__$1);
var seq20954__$2 = cljs.core.next(seq20954__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__20955,G__20956,seq20954__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$millis,(function (date,op,value){
var ms = (function (){var G__20962 = date.getTime();
var G__20963 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__20962,G__20963) : op.call(null,G__20962,G__20963));
})();
var G__20964 = date;
G__20964.setTime(ms);

return G__20964;
}),cljs.core.cst$kw$weeks,(function (date,op,value){
var days = (function (){var G__20965 = (0);
var G__20966 = (value * (7));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__20965,G__20966) : op.call(null,G__20965,G__20966));
})();
var G__20967 = date;
G__20967.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__20967;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$seconds,goog.date.Interval.SECONDS,cljs.core.cst$kw$minutes,goog.date.Interval.MINUTES,cljs.core.cst$kw$hours,goog.date.Interval.HOURS,cljs.core.cst$kw$days,goog.date.Interval.DAYS,cljs.core.cst$kw$months,goog.date.Interval.MONTHS,cljs.core.cst$kw$years,goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = ((function (date_SINGLEQUOTE_){
return (function (op,interval,value){
if(cljs.core.truth_((function (){var and__7767__auto__ = interval;
if(cljs.core.truth_(and__7767__auto__)){
return value;
} else {
return and__7767__auto__;
}
})())){
return (new goog.date.Interval(interval,(op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2((0),value) : op.call(null,(0),value))));
} else {
return null;
}
});})(date_SINGLEQUOTE_))
;
var seq__20968_20978 = cljs.core.seq(p);
var chunk__20969_20979 = null;
var count__20970_20980 = (0);
var i__20971_20981 = (0);
while(true){
if((i__20971_20981 < count__20970_20980)){
var vec__20972_20982 = chunk__20969_20979.cljs$core$IIndexed$_nth$arity$2(null,i__20971_20981);
var k_20983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20972_20982,(0),null);
var v_20984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20972_20982,(1),null);
var temp__4655__auto___20985 = (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k_20983) : cljs_time.core.periods.call(null,k_20983));
if(cljs.core.truth_(temp__4655__auto___20985)){
var period_20986 = temp__4655__auto___20985;
var temp__4657__auto___20987 = __GT_goog_interval(operator,period_20986,v_20984);
if(cljs.core.truth_(temp__4657__auto___20987)){
var i_20988 = temp__4657__auto___20987;
date_SINGLEQUOTE_.add(i_20988);
} else {
}
} else {
var temp__4657__auto___20989 = (cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1(k_20983) : cljs_time.core.period_fns.call(null,k_20983));
if(cljs.core.truth_(temp__4657__auto___20989)){
var f_20990 = temp__4657__auto___20989;
(f_20990.cljs$core$IFn$_invoke$arity$3 ? f_20990.cljs$core$IFn$_invoke$arity$3(date_SINGLEQUOTE_,operator,v_20984) : f_20990.call(null,date_SINGLEQUOTE_,operator,v_20984));
} else {
}
}

var G__20991 = seq__20968_20978;
var G__20992 = chunk__20969_20979;
var G__20993 = count__20970_20980;
var G__20994 = (i__20971_20981 + (1));
seq__20968_20978 = G__20991;
chunk__20969_20979 = G__20992;
count__20970_20980 = G__20993;
i__20971_20981 = G__20994;
continue;
} else {
var temp__4657__auto___20995 = cljs.core.seq(seq__20968_20978);
if(temp__4657__auto___20995){
var seq__20968_20996__$1 = temp__4657__auto___20995;
if(cljs.core.chunked_seq_QMARK_(seq__20968_20996__$1)){
var c__8618__auto___20997 = cljs.core.chunk_first(seq__20968_20996__$1);
var G__20998 = cljs.core.chunk_rest(seq__20968_20996__$1);
var G__20999 = c__8618__auto___20997;
var G__21000 = cljs.core.count(c__8618__auto___20997);
var G__21001 = (0);
seq__20968_20978 = G__20998;
chunk__20969_20979 = G__20999;
count__20970_20980 = G__21000;
i__20971_20981 = G__21001;
continue;
} else {
var vec__20975_21002 = cljs.core.first(seq__20968_20996__$1);
var k_21003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20975_21002,(0),null);
var v_21004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20975_21002,(1),null);
var temp__4655__auto___21005 = (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k_21003) : cljs_time.core.periods.call(null,k_21003));
if(cljs.core.truth_(temp__4655__auto___21005)){
var period_21006 = temp__4655__auto___21005;
var temp__4657__auto___21007__$1 = __GT_goog_interval(operator,period_21006,v_21004);
if(cljs.core.truth_(temp__4657__auto___21007__$1)){
var i_21008 = temp__4657__auto___21007__$1;
date_SINGLEQUOTE_.add(i_21008);
} else {
}
} else {
var temp__4657__auto___21009__$1 = (cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1(k_21003) : cljs_time.core.period_fns.call(null,k_21003));
if(cljs.core.truth_(temp__4657__auto___21009__$1)){
var f_21010 = temp__4657__auto___21009__$1;
(f_21010.cljs$core$IFn$_invoke$arity$3 ? f_21010.cljs$core$IFn$_invoke$arity$3(date_SINGLEQUOTE_,operator,v_21004) : f_21010.call(null,date_SINGLEQUOTE_,operator,v_21004));
} else {
}
}

var G__21011 = cljs.core.next(seq__20968_20996__$1);
var G__21012 = null;
var G__21013 = (0);
var G__21014 = (0);
seq__20968_20978 = G__21011;
chunk__20969_20979 = G__21012;
count__20970_20980 = G__21013;
i__20971_20981 = G__21014;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
cljs_time.core.compare_local_dates = (function cljs_time$core$compare_local_dates(o,other){
var yo = o.getYear();
var yother = other.getYear();
var dayo = o.getDayOfYear();
var dayother = other.getDayOfYear();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(yo,yother)){
return (yo - yother);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(dayo,dayother)){
return (dayo - dayother);
} else {
return (0);

}
}
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
var fexpr__21015 = cljs_time.core.period_fn(period);
return (fexpr__21015.cljs$core$IFn$_invoke$arity$2 ? fexpr__21015.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,this$__$1) : fexpr__21015.call(null,cljs.core._PLUS_,this$__$1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
var fexpr__21016 = cljs_time.core.period_fn(period);
return (fexpr__21016.cljs$core$IFn$_invoke$arity$2 ? fexpr__21016.cljs$core$IFn$_invoke$arity$2(cljs.core._,this$__$1) : fexpr__21016.call(null,cljs.core._,this$__$1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
var G__21017 = this$__$1.getYear();
var G__21018 = this$__$1.getMonth();
var G__21019 = this$__$1.getDate();
return goog.date.getWeekNumber(G__21017,G__21018,G__21019);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
var fexpr__21020 = cljs_time.core.period_fn(period);
return (fexpr__21020.cljs$core$IFn$_invoke$arity$2 ? fexpr__21020.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,this$__$1) : fexpr__21020.call(null,cljs.core._PLUS_,this$__$1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
var fexpr__21021 = cljs_time.core.period_fn(period);
return (fexpr__21021.cljs$core$IFn$_invoke$arity$2 ? fexpr__21021.cljs$core$IFn$_invoke$arity$2(cljs.core._,this$__$1) : fexpr__21021.call(null,cljs.core._,this$__$1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
var G__21022 = this$__$1.getYear();
var G__21023 = this$__$1.getMonth();
var G__21024 = this$__$1.getDate();
return goog.date.getWeekNumber(G__21022,G__21023,G__21024);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return this$__$1.equals(that);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates(this$__$1,that) > (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (cljs_time.core.compare_local_dates(this$__$1,that) < (0));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
var fexpr__21025 = cljs_time.core.period_fn(period);
return (fexpr__21025.cljs$core$IFn$_invoke$arity$2 ? fexpr__21025.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,this$__$1) : fexpr__21025.call(null,cljs.core._PLUS_,this$__$1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
var fexpr__21026 = cljs_time.core.period_fn(period);
return (fexpr__21026.cljs$core$IFn$_invoke$arity$2 ? fexpr__21026.cljs$core$IFn$_invoke$arity$2(cljs.core._,this$__$1) : fexpr__21026.call(null,cljs.core._,this$__$1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
var G__21027 = this$__$1.getYear();
var G__21028 = this$__$1.getMonth();
var G__21029 = this$__$1.getDate();
return goog.date.getWeekNumber(G__21027,G__21028,G__21029);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_year$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.internal.core.get_week_year(this$__$1.getYear(),this$__$1.getMonth(),this$__$1.getDate());
});
cljs_time.core.utc = ({"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY});
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn();
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__21030 = (new goog.date.UtcDateTime());
G__21030.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__21030;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__21031 = (new goog.date.DateTime());
G__21031.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__21031;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__21032 = datetime__$1;
G__21032.setHours((0));

G__21032.setMinutes((0));

G__21032.setSeconds((0));

G__21032.setMilliseconds((0));

return G__21032;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__21033 = (new goog.date.UtcDateTime());
G__21033.setTime((0));

return G__21033;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var G__21035 = arguments.length;
switch (G__21035) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var G__21038 = arguments.length;
switch (G__21038) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var G__21041 = arguments.length;
switch (G__21041) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new goog.date.Date in the local timezone.
 * Specify the year, month, and day.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new goog.date.Date representing today in the local timezone.
 */
cljs_time.core.today = (function cljs_time$core$today(){
return (new goog.date.Date((new Date((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null))))));
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var G__21044 = arguments.length;
switch (G__21044) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.cst$kw$_DASH_:cljs.core.cst$kw$_PLUS_);
var fmt = ["UTC%s%02d",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,tz_name,cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__7779__auto__ = minutes;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.cst$kw$rules,"-",cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$core_SLASH_time_DASH_zone], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__21046 = (new goog.date.DateTime());
G__21046.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__21046;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to the UTC
 *   timezone.
 */
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
var G__21047 = dt.getTime();
return goog.date.UtcDateTime.fromTimestamp(G__21047);
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_((function (){var G__21048 = goog.date.Date;
var G__21049 = cljs.core.type(dt);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__21048,G__21049) : cljs_time.core._EQ_.call(null,G__21048,G__21049));
})())){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var G__21051 = arguments.length;
switch (G__21051) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var G__21054 = arguments.length;
switch (G__21054) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var G__21057 = arguments.length;
switch (G__21057) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var G__21060 = arguments.length;
switch (G__21060) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var G__21063 = arguments.length;
switch (G__21063) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var G__21066 = arguments.length;
switch (G__21066) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var G__21069 = arguments.length;
switch (G__21069) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var G__21072 = arguments.length;
switch (G__21072) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var G__21078 = arguments.length;
switch (G__21078) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8956__auto__ = [];
var len__8937__auto___21080 = arguments.length;
var i__8938__auto___21081 = (0);
while(true){
if((i__8938__auto___21081 < len__8937__auto___21080)){
args_arr__8956__auto__.push((arguments[i__8938__auto___21081]));

var G__21082 = (i__8938__auto___21081 + (1));
i__8938__auto___21081 = G__21082;
continue;
} else {
}
break;
}

var argseq__8957__auto__ = (new cljs.core.IndexedSeq(args_arr__8956__auto__.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8957__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq21075){
var G__21076 = cljs.core.first(seq21075);
var seq21075__$1 = cljs.core.next(seq21075);
var G__21077 = cljs.core.first(seq21075__$1);
var seq21075__$2 = cljs.core.next(seq21075__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__21076,G__21077,seq21075__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var G__21087 = arguments.length;
switch (G__21087) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8956__auto__ = [];
var len__8937__auto___21089 = arguments.length;
var i__8938__auto___21090 = (0);
while(true){
if((i__8938__auto___21090 < len__8937__auto___21089)){
args_arr__8956__auto__.push((arguments[i__8938__auto___21090]));

var G__21091 = (i__8938__auto___21090 + (1));
i__8938__auto___21090 = G__21091;
continue;
} else {
}
break;
}

var argseq__8957__auto__ = (new cljs.core.IndexedSeq(args_arr__8956__auto__.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8957__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq21084){
var G__21085 = cljs.core.first(seq21084);
var seq21084__$1 = cljs.core.next(seq21084);
var G__21086 = cljs.core.first(seq21084__$1);
var seq21084__$2 = cljs.core.next(seq21084__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__21085,G__21086,seq21084__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var G__21093 = arguments.length;
switch (G__21093) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var G__21096 = arguments.length;
switch (G__21096) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__8944__auto__ = [];
var len__8937__auto___21100 = arguments.length;
var i__8938__auto___21101 = (0);
while(true){
if((i__8938__auto___21101 < len__8937__auto___21100)){
args__8944__auto__.push((arguments[i__8938__auto___21101]));

var G__21102 = (i__8938__auto___21101 + (1));
i__8938__auto___21101 = G__21102;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.cst$kw$end,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq21098){
var G__21099 = cljs.core.first(seq21098);
var seq21098__$1 = cljs.core.next(seq21098);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__21099,seq21098__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__21105){
var map__21106 = p__21105;
var map__21106__$1 = ((((!((map__21106 == null)))?((((map__21106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21106):map__21106);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106__$1,cljs.core.cst$kw$end);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__21106,map__21106__$1,start,end){
return (function (p1__21104_SHARP_){
return cljs.core.not(cljs_time.core.after_QMARK_(p1__21104_SHARP_,end));
});})(map__21106,map__21106__$1,start,end))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21106,map__21106__$1,start,end){
return (function (p1__21103_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__21103_SHARP_ + (1))));
});})(map__21106,map__21106__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21108_SHARP_){
return p1__21108_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__21109){
var map__21110 = p__21109;
var map__21110__$1 = ((((!((map__21110 == null)))?((((map__21110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21110):map__21110);
var interval = map__21110__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21110__$1,cljs.core.cst$kw$end);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__21112){
var map__21113 = p__21112;
var map__21113__$1 = ((((!((map__21113 == null)))?((((map__21113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21113.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21113):map__21113);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21113__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21113__$1,cljs.core.cst$kw$end);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__7767__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sm,(2)) : cljs_time.core._EQ_.call(null,sm,(2)));
if(cljs.core.truth_(and__7767__auto__)){
var and__7767__auto____$1 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sd,(29)) : cljs_time.core._EQ_.call(null,sd,(29)));
if(cljs.core.truth_(and__7767__auto____$1)){
var and__7767__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(em,(2)) : cljs_time.core._EQ_.call(null,em,(2)));
if(cljs.core.truth_(and__7767__auto____$2)){
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(ed,(28)) : cljs_time.core._EQ_.call(null,ed,(28)));
} else {
return and__7767__auto____$2;
}
} else {
return and__7767__auto____$1;
}
} else {
return and__7767__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__21115){
var map__21116 = p__21115;
var map__21116__$1 = ((((!((map__21116 == null)))?((((map__21116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21116):map__21116);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21116__$1,cljs.core.cst$kw$years);
var map__21118 = this;
var map__21118__$1 = ((((!((map__21118 == null)))?((((map__21118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21118):map__21118);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21118__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$months,cljs.core.cst$kw$millis);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$years,cljs.core.cst$kw$millis);
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__21120){
var map__21121 = p__21120;
var map__21121__$1 = ((((!((map__21121 == null)))?((((map__21121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21121):map__21121);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21121__$1,cljs.core.cst$kw$years);
var map__21123 = this;
var map__21123__$1 = ((((!((map__21123 == null)))?((((map__21123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21123):map__21123);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__7779__auto__ = years__$1;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__21125){
var map__21126 = p__21125;
var map__21126__$1 = ((((!((map__21126 == null)))?((((map__21126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21126):map__21126);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21126__$1,cljs.core.cst$kw$years);
var map__21128 = this;
var map__21128__$1 = ((((!((map__21128 == null)))?((((map__21128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21128.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21128):map__21128);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__21130){
var map__21131 = p__21130;
var map__21131__$1 = ((((!((map__21131 == null)))?((((map__21131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21131):map__21131);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21131__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21131__$1,cljs.core.cst$kw$end);
var map__21133 = this;
var map__21133__$1 = ((((!((map__21133 == null)))?((((map__21133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21133):map__21133);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21133__$1,cljs.core.cst$kw$end);
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var G__21136 = arguments.length;
switch (G__21136) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__21137,date){
var map__21138 = p__21137;
var map__21138__$1 = ((((!((map__21138 == null)))?((((map__21138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21138):map__21138);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21138__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21138__$1,cljs.core.cst$kw$end);
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__7779__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,date) : cljs_time.core._EQ_.call(null,start,date));
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
var and__7767__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__7767__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__7767__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var G__21142 = arguments.length;
switch (G__21142) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__21143,p__21144){
var map__21145 = p__21143;
var map__21145__$1 = ((((!((map__21145 == null)))?((((map__21145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21145):map__21145);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145__$1,cljs.core.cst$kw$end);
var map__21146 = p__21144;
var map__21146__$1 = ((((!((map__21146 == null)))?((((map__21146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21146):map__21146);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21146__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21146__$1,cljs.core.cst$kw$end);
var and__7767__auto__ = cljs.core.not((function (){var or__7779__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
})());
if(and__7767__auto__){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__7767__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__7779__auto__ = (function (){var and__7767__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__7767__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__7767__auto__;
}
})();
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
var or__7779__auto____$1 = (function (){var and__7767__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__7767__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__7767__auto__;
}
})();
if(cljs.core.truth_(or__7779__auto____$1)){
return or__7779__auto____$1;
} else {
var or__7779__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__7779__auto____$2)){
return or__7779__auto____$2;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_b,end_a) : cljs_time.core._EQ_.call(null,start_b,end_a));
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now();
var G__21150 = i_a;
var G__21151 = cljs_time.core.interval(n,n);
return (cljs_time.core.overlap.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core.overlap.cljs$core$IFn$_invoke$arity$2(G__21150,G__21151) : cljs_time.core.overlap.call(null,G__21150,G__21151));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2(i_a,i_b))){
return cljs_time.core.interval(cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2(cljs_time.core.start(i_a),cljs_time.core.start(i_b)),cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2(cljs_time.core.end(i_a),cljs_time.core.end(i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__21152,p__21153){
var map__21154 = p__21152;
var map__21154__$1 = ((((!((map__21154 == null)))?((((map__21154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21154):map__21154);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21154__$1,cljs.core.cst$kw$end);
var map__21155 = p__21153;
var map__21155__$1 = ((((!((map__21155 == null)))?((((map__21155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21155.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21155):map__21155);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21155__$1,cljs.core.cst$kw$end);
var or__7779__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs_time$core$DateTimeProtocol$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__7767__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__7767__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__7767__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$years,val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$months,val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$weeks,val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$days,val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$hours,val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$minutes,val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$seconds,val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var G__21160 = arguments.length;
switch (G__21160) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var G__21163 = arguments.length;
switch (G__21163) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var G__21166 = arguments.length;
switch (G__21166) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__8462__auto__ = (((obj == null))?null:obj);
var m__8463__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__8463__auto__.call(null,obj));
} else {
var m__8463__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__8463__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__21168){
var map__21169 = p__21168;
var map__21169__$1 = ((((!((map__21169 == null)))?((((map__21169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21169):map__21169);
var interval = map__21169__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,cljs.core.cst$kw$end);
var map__21171 = this;
var map__21171__$1 = ((((!((map__21171 == null)))?((((map__21171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21171):map__21171);
var interval__$1 = map__21171__$1;
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,cljs.core.cst$kw$end);
var years = cljs_time.core.in_years(interval__$1);
var start_year = cljs_time.core.year(start__$1);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval__$1);
var months = (cljs.core.count(days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days(interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval__$1) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$years,years,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,(cljs_time.core.in_millis(interval__$1) - ((1000) * (seconds + seconds_to_remove)))], 0));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var G__21174 = arguments.length;
switch (G__21174) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__21175 = cljs_time.core.now();
G__21175.setHours(hours);

G__21175.setMinutes(minutes);

G__21175.setSeconds(seconds);

G__21175.setMilliseconds(millis);

return G__21175;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_21177 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn(base_date_time.getTime());

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_21177;
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.core.date_time,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});
