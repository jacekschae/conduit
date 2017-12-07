// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.date');
cljs_time.internal.core.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
cljs_time.internal.core.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], null);
cljs_time.internal.core.abbreviate = (function cljs_time$internal$core$abbreviate(n,s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),n);
});
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14253 = arguments.length;
var i__9347__auto___14254 = (0);
while(true){
if((i__9347__auto___14254 < len__9346__auto___14253)){
args__9353__auto__.push((arguments[i__9347__auto___14254]));

var G__14255 = (i__9347__auto___14254 + (1));
i__9347__auto___14254 = G__14255;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_((function (p1__14250_SHARP_){
return (p1__14250_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14251_SHARP_){
return p1__14251_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq14252){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14252));
});

cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod(y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod(y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod(y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.corrected_dim = (function cljs_time$internal$core$corrected_dim(month){
var G__14256 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__14256) : cljs_time.internal.core.days_in_month.call(null,G__14256));
});
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__14257 = cljs_time.internal.core.corrected_dim(month);
if(cljs.core.truth_((function (){var and__8174__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);
if(cljs.core.truth_(and__8174__auto__)){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([month,(2)], 0));
} else {
return and__8174__auto__;
}
})())){
return (G__14257 + (1));
} else {
return G__14257;
}
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__14258){
var map__14259 = p__14258;
var map__14259__$1 = ((((!((map__14259 == null)))?((((map__14259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14259):map__14259);
var d = map__14259__$1;
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$minutes);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$millis);
var day_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$day_DASH_of_DASH_week);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$months);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$days);
var weekyear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$weekyear);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$seconds);
var weekyear_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$weekyear_DASH_week);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$hours);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14259__$1,cljs.core.cst$kw$years);
var months_QMARK_ = (cljs.core.truth_(months)?(((1) <= months)) && ((months <= (12))):null);
var dim = (cljs.core.truth_(years)?(function (){var and__8174__auto__ = months;
if(cljs.core.truth_(and__8174__auto__)){
var and__8174__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__8174__auto____$1)){
return cljs_time.internal.core.year_corrected_dim(years,months);
} else {
return and__8174__auto____$1;
}
} else {
return and__8174__auto__;
}
})():(function (){var and__8174__auto__ = months;
if(cljs.core.truth_(and__8174__auto__)){
var and__8174__auto____$1 = months_QMARK_;
if(cljs.core.truth_(and__8174__auto____$1)){
return cljs_time.internal.core.corrected_dim(months);
} else {
return and__8174__auto____$1;
}
} else {
return and__8174__auto__;
}
})());
var days_QMARK_ = (cljs.core.truth_(days)?(cljs.core.truth_(dim)?(((1) <= days)) && ((days <= dim)):(((1) <= days)) && ((days <= (31)))):null);
var hours_QMARK_ = (cljs.core.truth_(hours)?(((0) <= hours)) && ((hours <= (23))):null);
var minutes_QMARK_ = (cljs.core.truth_(minutes)?(((0) <= minutes)) && ((minutes <= (59))):null);
var seconds_QMARK_ = (cljs.core.truth_(seconds)?(((0) <= seconds)) && ((seconds <= (60))):null);
var millis_QMARK_ = (cljs.core.truth_(millis)?(((0) <= millis)) && ((millis <= (999))):null);
var weekyear_week_QMARK_ = (cljs.core.truth_(weekyear_week)?(((1) <= weekyear_week)) && ((weekyear_week <= (53))):null);
var day_of_week_QMARK_ = (cljs.core.truth_(day_of_week)?(((1) <= day_of_week)) && ((day_of_week <= (7))):null);
if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [months_QMARK_,days_QMARK_,hours_QMARK_,minutes_QMARK_,seconds_QMARK_,millis_QMARK_,weekyear_week_QMARK_,day_of_week_QMARK_], null)))){
if(cljs.core.not((function (){var and__8174__auto__ = (function (){var or__8186__auto__ = years;
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
var or__8186__auto____$1 = months;
if(cljs.core.truth_(or__8186__auto____$1)){
return or__8186__auto____$1;
} else {
return days;
}
}
})();
if(cljs.core.truth_(and__8174__auto__)){
var or__8186__auto__ = weekyear;
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
var or__8186__auto____$1 = weekyear_week;
if(cljs.core.truth_(or__8186__auto____$1)){
return or__8186__auto____$1;
} else {
return day_of_week;
}
}
} else {
return and__8174__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mixing year, month, day and week-year week-number fields",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_date,cljs.core.cst$kw$date,d,cljs.core.cst$kw$errors,cljs.core.PersistentArrayMap.EMPTY], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_date,cljs.core.cst$kw$date,d,cljs.core.cst$kw$errors,(function (){var G__14261 = cljs.core.PersistentArrayMap.EMPTY;
var G__14261__$1 = ((months_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261,cljs.core.cst$kw$months,months):G__14261);
var G__14261__$2 = ((days_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$1,cljs.core.cst$kw$days,days):G__14261__$1);
var G__14261__$3 = ((hours_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$2,cljs.core.cst$kw$hours,hours):G__14261__$2);
var G__14261__$4 = ((minutes_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$3,cljs.core.cst$kw$minutes,minutes):G__14261__$3);
var G__14261__$5 = ((seconds_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$4,cljs.core.cst$kw$seconds,seconds):G__14261__$4);
var G__14261__$6 = ((millis_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$5,cljs.core.cst$kw$millis,millis):G__14261__$5);
var G__14261__$7 = ((weekyear_week_QMARK_ === false)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$6,cljs.core.cst$kw$weekyear_DASH_week,weekyear_week):G__14261__$6);
if(day_of_week_QMARK_ === false){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14261__$7,cljs.core.cst$kw$day_DASH_of_DASH_week,day_of_week);
} else {
return G__14261__$7;
}
})()], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14263_SHARP_,p2__14262_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p2__14262_SHARP_,x], 0)))){
return p1__14263_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14266 = arguments.length;
var i__9347__auto___14267 = (0);
while(true){
if((i__9347__auto___14267 < len__9346__auto___14266)){
args__9353__auto__.push((arguments[i__9347__auto___14267]));

var G__14268 = (i__9347__auto___14267 + (1));
i__9347__auto___14267 = G__14268;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((1) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((1)),(0),null)):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9354__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq14264){
var G__14265 = cljs.core.first(seq14264);
var seq14264__$1 = cljs.core.next(seq14264);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14265,seq14264__$1);
});

/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var G__14270 = arguments.length;
switch (G__14270) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if((zeros < (1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;

cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$millis], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seconds], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minutes], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hours], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$days], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weeks], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$months], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years], null),scale_fn);
});
/**
 * Counterpart ot goog.date/getWeekNumber. 
 *   month 0 is jan per goog.date
 */
cljs_time.internal.core.get_week_year = (function cljs_time$internal$core$get_week_year(year,month,date){
var january = cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([month,(0)], 0));
var december = cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([month,(11)], 0));
var week_number = goog.date.getWeekNumber(year,month,date);
if(cljs.core.truth_((function (){var and__8174__auto__ = january;
if(cljs.core.truth_(and__8174__auto__)){
return (week_number >= (52));
} else {
return and__8174__auto__;
}
})())){
return (year - (1));
} else {
if(cljs.core.truth_((function (){var and__8174__auto__ = december;
if(cljs.core.truth_(and__8174__auto__)){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([week_number,(1)], 0));
} else {
return and__8174__auto__;
}
})())){
return (year + (1));
} else {
return year;

}
}
});
