// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.internal.core');
goog.require('cljs_time.internal.parse');
goog.require('cljs_time.internal.unparse');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('goog.date.duration');
cljs_time.format.months = cljs_time.internal.core.months;
cljs_time.format.days = cljs_time.internal.core.days;
cljs_time.format.skip_timezone_formatter = (function cljs_time$format$skip_timezone_formatter(){
return new cljs.core.PersistentArrayMap(null, 2, ["Z",cljs.core.constantly(""),"ZZ",cljs.core.constantly("")], null);
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
cljs_time.format.Formatter = (function (format_str,overrides,default_year,timezone,__meta,__extmap,__hash){
this.format_str = format_str;
this.overrides = overrides;
this.default_year = default_year;
this.timezone = timezone;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8826__auto__,k__8827__auto__){
var self__ = this;
var this__8826__auto____$1 = this;
return this__8826__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8827__auto__,null);
});

cljs_time.format.Formatter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8828__auto__,k18615,else__8829__auto__){
var self__ = this;
var this__8828__auto____$1 = this;
var G__18619 = k18615;
var G__18619__$1 = (((G__18619 instanceof cljs.core.Keyword))?G__18619.fqn:null);
switch (G__18619__$1) {
case "format-str":
return self__.format_str;

break;
case "overrides":
return self__.overrides;

break;
case "default-year":
return self__.default_year;

break;
case "timezone":
return self__.timezone;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18615,else__8829__auto__);

}
});

cljs_time.format.Formatter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8840__auto__,writer__8841__auto__,opts__8842__auto__){
var self__ = this;
var this__8840__auto____$1 = this;
var pr_pair__8843__auto__ = ((function (this__8840__auto____$1){
return (function (keyval__8844__auto__){
return cljs.core.pr_sequential_writer(writer__8841__auto__,cljs.core.pr_writer,""," ","",opts__8842__auto__,keyval__8844__auto__);
});})(this__8840__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8841__auto__,pr_pair__8843__auto__,"#cljs-time.format.Formatter{",", ","}",opts__8842__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$format_DASH_str,self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overrides,self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$default_DASH_year,self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timezone,self__.timezone],null))], null),self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18614){
var self__ = this;
var G__18614__$1 = this;
return (new cljs.core.RecordIter((0),G__18614__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$format_DASH_str,cljs.core.cst$kw$overrides,cljs.core.cst$kw$default_DASH_year,cljs.core.cst$kw$timezone], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs_time.format.Formatter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8824__auto__){
var self__ = this;
var this__8824__auto____$1 = this;
return self__.__meta;
});

cljs_time.format.Formatter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8821__auto__){
var self__ = this;
var this__8821__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.format.Formatter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8830__auto__){
var self__ = this;
var this__8830__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8822__auto__){
var self__ = this;
var this__8822__auto____$1 = this;
var h__8640__auto__ = self__.__hash;
if(!((h__8640__auto__ == null))){
return h__8640__auto__;
} else {
var h__8640__auto____$1 = (function (){var fexpr__18620 = ((function (h__8640__auto__,this__8822__auto____$1){
return (function (coll__8823__auto__){
return (-987738732 ^ cljs.core.hash_unordered_coll(coll__8823__auto__));
});})(h__8640__auto__,this__8822__auto____$1))
;
return fexpr__18620(this__8822__auto____$1);
})();
self__.__hash = h__8640__auto____$1;

return h__8640__auto____$1;
}
});

cljs_time.format.Formatter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18616,other18617){
var self__ = this;
var this18616__$1 = this;
return (!((other18617 == null))) && ((this18616__$1.constructor === other18617.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18616__$1.format_str,other18617.format_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18616__$1.overrides,other18617.overrides)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18616__$1.default_year,other18617.default_year)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18616__$1.timezone,other18617.timezone)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18616__$1.__extmap,other18617.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8835__auto__,k__8836__auto__){
var self__ = this;
var this__8835__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$timezone,null,cljs.core.cst$kw$overrides,null,cljs.core.cst$kw$format_DASH_str,null,cljs.core.cst$kw$default_DASH_year,null], null), null),k__8836__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8835__auto____$1),self__.__meta),k__8836__auto__);
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8836__auto__)),null));
}
});

cljs_time.format.Formatter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8833__auto__,k__8834__auto__,G__18614){
var self__ = this;
var this__8833__auto____$1 = this;
var pred__18621 = cljs.core.keyword_identical_QMARK_;
var expr__18622 = k__8834__auto__;
if(cljs.core.truth_((function (){var G__18624 = cljs.core.cst$kw$format_DASH_str;
var G__18625 = expr__18622;
return (pred__18621.cljs$core$IFn$_invoke$arity$2 ? pred__18621.cljs$core$IFn$_invoke$arity$2(G__18624,G__18625) : pred__18621.call(null,G__18624,G__18625));
})())){
return (new cljs_time.format.Formatter(G__18614,self__.overrides,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18626 = cljs.core.cst$kw$overrides;
var G__18627 = expr__18622;
return (pred__18621.cljs$core$IFn$_invoke$arity$2 ? pred__18621.cljs$core$IFn$_invoke$arity$2(G__18626,G__18627) : pred__18621.call(null,G__18626,G__18627));
})())){
return (new cljs_time.format.Formatter(self__.format_str,G__18614,self__.default_year,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18628 = cljs.core.cst$kw$default_DASH_year;
var G__18629 = expr__18622;
return (pred__18621.cljs$core$IFn$_invoke$arity$2 ? pred__18621.cljs$core$IFn$_invoke$arity$2(G__18628,G__18629) : pred__18621.call(null,G__18628,G__18629));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,G__18614,self__.timezone,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18630 = cljs.core.cst$kw$timezone;
var G__18631 = expr__18622;
return (pred__18621.cljs$core$IFn$_invoke$arity$2 ? pred__18621.cljs$core$IFn$_invoke$arity$2(G__18630,G__18631) : pred__18621.call(null,G__18630,G__18631));
})())){
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,G__18614,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8834__auto__,G__18614),null));
}
}
}
}
});

cljs_time.format.Formatter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8838__auto__){
var self__ = this;
var this__8838__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$format_DASH_str,self__.format_str],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$overrides,self__.overrides],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$default_DASH_year,self__.default_year],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$timezone,self__.timezone],null))], null),self__.__extmap));
});

cljs_time.format.Formatter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8825__auto__,G__18614){
var self__ = this;
var this__8825__auto____$1 = this;
return (new cljs_time.format.Formatter(self__.format_str,self__.overrides,self__.default_year,self__.timezone,G__18614,self__.__extmap,self__.__hash));
});

cljs_time.format.Formatter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8831__auto__,entry__8832__auto__){
var self__ = this;
var this__8831__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8832__auto__)){
return this__8831__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8832__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8832__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8831__auto____$1,entry__8832__auto__);
}
});

cljs_time.format.Formatter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$format_DASH_str,cljs.core.cst$sym$overrides,cljs.core.cst$sym$default_DASH_year,cljs.core.cst$sym$timezone], null);
});

cljs_time.format.Formatter.cljs$lang$type = true;

cljs_time.format.Formatter.cljs$lang$ctorPrSeq = (function (this__8862__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.format/Formatter");
});

cljs_time.format.Formatter.cljs$lang$ctorPrWriter = (function (this__8862__auto__,writer__8863__auto__){
return cljs.core._write(writer__8863__auto__,"cljs-time.format/Formatter");
});

cljs_time.format.__GT_Formatter = (function cljs_time$format$__GT_Formatter(format_str,overrides,default_year,timezone){
return (new cljs_time.format.Formatter(format_str,overrides,default_year,timezone,null,null,null));
});

cljs_time.format.map__GT_Formatter = (function cljs_time$format$map__GT_Formatter(G__18618){
return (new cljs_time.format.Formatter(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(G__18618),cljs.core.cst$kw$overrides.cljs$core$IFn$_invoke$arity$1(G__18618),cljs.core.cst$kw$default_DASH_year.cljs$core$IFn$_invoke$arity$1(G__18618),cljs.core.cst$kw$timezone.cljs$core$IFn$_invoke$arity$1(G__18618),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18618,cljs.core.cst$kw$format_DASH_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$overrides,cljs.core.cst$kw$default_DASH_year,cljs.core.cst$kw$timezone], 0))),null));
});

cljs_time.format.formatter = (function cljs_time$format$formatter(var_args){
var G__18634 = arguments.length;
switch (G__18634) {
case 1:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmts){
return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmts,cljs_time.core.utc);
});

cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmts,dtz){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$timezone,dtz], null));
});

cljs_time.format.formatter.cljs$lang$maxFixedArity = 2;

cljs_time.format.formatter_local = (function cljs_time$format$formatter_local(fmts){
return cljs_time.format.map__GT_Formatter(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$format_DASH_str,fmts,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()], null));
});
/**
 * Return a copy of a formatter that uses the given default year.
 */
cljs_time.format.with_default_year = (function cljs_time$format$with_default_year(f,default_year){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cst$kw$default_DASH_year,default_year);
});
cljs_time.format.not_implemented = (function cljs_time$format$not_implemented(sym){
return (function (){
throw ({"name": cljs.core.cst$kw$not_DASH_implemented, "message": cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s not implemented yet",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0))});
});
});
/**
 * **Note: not all formatters have been implemented yet.**
 * 
 *   Map of ISO 8601 and a single RFC 822 formatters that can be used
 *   for parsing and, in most cases, printing.
 *   
 *   Note: due to current implementation limitations, timezone information
 *   cannot be kept. Although the correct offset will be applied to UTC
 *   time if supplied.
 * 
 *   The pattern syntax is mostly compatible with java.text.SimpleDateFormat -
 *   time zone names cannot be parsed and a few more symbols are supported. All
 *   ASCII letters are reserved as pattern letters, which are defined as follows:
 * 
 * ```
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  G       era                          text          AD
 *  C       century of era (>=0)         number        20
 *  Y       year of era (>=0)            year          1996
 * 
 *  x       weekyear                     year          1996
 *  w       week of weekyear             number        27
 *  e       day of week                  number        2
 *  E       day of week                  text          Tuesday; Tue
 * 
 *  y       year                         year          1996
 *  D       day of year                  number        189
 *  M       month of year                month         July; Jul; 07
 *  d       day of month                 number        10
 * 
 *  a       halfday of day               text          PM
 *  K       hour of halfday (0~11)       number        0
 *  h       clockhour of halfday (1~12)  number        12
 * 
 *  H       hour of day (0~23)           number        0
 *  k       clockhour of day (1~24)      number        24
 *  m       minute of hour               number        30
 *  s       second of minute             number        55
 *  S       fraction of second           number        978
 *  a       meridiem                     text          am; pm
 *  A       meridiem                     text          AM; PM
 * 
 *  z       time zone                    text          Pacific Standard Time; PST
 *  Z       time zone offset/id          zone          -0800; -08:00; America/Los_Angeles
 * 
 *  '       escape for text              delimiter
 *  ''      single quote                 literal       '
 * 
 *  cljs-time additions:
 *  ------  -------                      ------------  -------
 *  Symbol  Meaning                      Presentation  Examples
 *  ------  -------                      ------------  -------
 *  o       ordinal suffix               text          st nd rd th (E.G., 1st, 2nd, 3rd, 4th)
 * ```
 * 
 *   The count of pattern letters determine the format.
 * 
 *   **Text:** If the number of pattern letters is 4 or more, the full form is used;
 *   otherwise a short or abbreviated form is used if available.
 * 
 *   **Number:** The minimum number of digits. Shorter numbers are zero-padded to this
 *   amount.
 * 
 *   **Year:** Numeric presentation for year and weekyear fields are handled
 *   specially. For example, if the count of `y` is 2, the year will be displayed
 *   as the zero-based year of the century, which is two digits.
 * 
 *   **Month:** 3 or over, use text, otherwise use number.
 * 
 *   **Zone:** `Z` outputs offset without a colon, `ZZ` outputs the offset with a
 *   colon, `ZZZ` or more outputs the zone id.
 * 
 *   **Zone names:** Time zone names ('z') cannot be parsed.
 * 
 *   Any characters in the pattern that are not in the ranges of `['a'..'z']` and
 *   `['A'..'Z']` will be treated as quoted text. For instance, characters like `:`,
 *   `.`, `<space>`, `#` and `?` will appear in the resulting time text even they are
 *   not embraced within single quotes.
 */
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date_DASH_element_DASH_parser,cljs.core.cst$kw$hour_DASH_minute,cljs.core.cst$kw$t_DASH_time,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date,cljs.core.cst$kw$date,cljs.core.cst$kw$hour,cljs.core.cst$kw$time_DASH_no_DASH_ms,cljs.core.cst$kw$weekyear_DASH_week_DASH_day,cljs.core.cst$kw$week_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$basic_DASH_date_DASH_time,cljs.core.cst$kw$date_DASH_time,cljs.core.cst$kw$basic_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$date_DASH_parser,cljs.core.cst$kw$basic_DASH_week_DASH_date,cljs.core.cst$kw$basic_DASH_t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$local_DASH_time,cljs.core.cst$kw$date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month_DASH_day,cljs.core.cst$kw$date_DASH_opt_DASH_time,cljs.core.cst$kw$rfc822,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_fraction,cljs.core.cst$kw$date_DASH_hour_DASH_minute,cljs.core.cst$kw$time,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time,cljs.core.cst$kw$weekyear,cljs.core.cst$kw$basic_DASH_time,cljs.core.cst$kw$hour_DASH_minute_DASH_second,cljs.core.cst$kw$ordinal_DASH_date_DASH_time,cljs.core.cst$kw$ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$hour_DASH_minute_DASH_second_DASH_ms,cljs.core.cst$kw$time_DASH_parser,cljs.core.cst$kw$date_DASH_time_DASH_parser,cljs.core.cst$kw$year,cljs.core.cst$kw$t_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date,cljs.core.cst$kw$weekyear_DASH_week,cljs.core.cst$kw$local_DASH_date,cljs.core.cst$kw$basic_DASH_ordinal_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$year_DASH_month,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,cljs.core.cst$kw$week_DASH_date,cljs.core.cst$kw$date_DASH_hour,cljs.core.cst$kw$time_DASH_element_DASH_parser,cljs.core.cst$kw$date_DASH_hour_DASH_minute_DASH_second,cljs.core.cst$kw$week_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$basic_DASH_date_DASH_time_DASH_no_DASH_ms,cljs.core.cst$kw$mysql,cljs.core.cst$kw$basic_DASH_t_DASH_time],[cljs_time.format.not_implemented(cljs.core.cst$sym$dateElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmssZ"),cljs_time.format.not_implemented(cljs.core.cst$sym$localTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs_time.format.not_implemented(cljs.core.cst$sym$dateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("EEE, dd MMM yyyy HH:mm:ss Z"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HHmmss.SSSZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ss.SSSZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-DDD'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$timeParser),cljs_time.format.not_implemented(cljs.core.cst$sym$dateTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx'W'wwe'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyDDD'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),cljs_time.format.not_implemented(cljs.core.cst$sym$localDateOptionalTimeParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH"),cljs_time.format.not_implemented(cljs.core.cst$sym$timeElementParser),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("xxxx-'W'ww-e'T'HH:mm:ssZZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd'T'HHmmssZ"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm:ss"),cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("'T'HHmmss.SSSZ")]);
cljs_time.format.parsers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$date_DASH_element_DASH_parser,null,cljs.core.cst$kw$date_DASH_parser,null,cljs.core.cst$kw$local_DASH_time,null,cljs.core.cst$kw$date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_parser,null,cljs.core.cst$kw$date_DASH_time_DASH_parser,null,cljs.core.cst$kw$local_DASH_date,null,cljs.core.cst$kw$local_DASH_date_DASH_opt_DASH_time,null,cljs.core.cst$kw$time_DASH_element_DASH_parser,null], null), null);
cljs_time.format.printers = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs_time.format.formatters)),cljs_time.format.parsers);
/**
 * Returns a DateTime instance in the UTC time zone obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse = (function cljs_time$format$parse(var_args){
var G__18637 = arguments.length;
switch (G__18637) {
case 2:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$UtcDateTime,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8994__auto__ = (function cljs_time$format$iter__18638(s__18639){
return (new cljs.core.LazySeq(null,(function (){
var s__18639__$1 = s__18639;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18639__$1);
if(temp__4657__auto__){
var s__18639__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18639__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18639__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18641 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18640 = (0);
while(true){
if((i__18640 < size__8993__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18640);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18642){var _ = e18642;
return null;
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18641,d);

var G__18645 = (i__18640 + (1));
i__18640 = G__18645;
continue;
} else {
var G__18646 = (i__18640 + (1));
i__18640 = G__18646;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18641),cljs_time$format$iter__18638(cljs.core.chunk_rest(s__18639__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18641),null);
}
} else {
var f = cljs.core.first(s__18639__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18643){var _ = e18643;
return null;
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__18638(cljs.core.rest(s__18639__$2)));
} else {
var G__18647 = cljs.core.rest(s__18639__$2);
s__18639__$1 = G__18647;
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
});

cljs_time.format.parse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local DateTime instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local = (function cljs_time$format$parse_local(var_args){
var G__18649 = arguments.length;
switch (G__18649) {
case 2:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$DateTime,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8994__auto__ = (function cljs_time$format$iter__18650(s__18651){
return (new cljs.core.LazySeq(null,(function (){
var s__18651__$1 = s__18651;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18651__$1);
if(temp__4657__auto__){
var s__18651__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18651__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18651__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18653 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18652 = (0);
while(true){
if((i__18652 < size__8993__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18652);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18654){if((e18654 instanceof Error)){
var _ = e18654;
return null;
} else {
throw e18654;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18653,d);

var G__18657 = (i__18652 + (1));
i__18652 = G__18657;
continue;
} else {
var G__18658 = (i__18652 + (1));
i__18652 = G__18658;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18653),cljs_time$format$iter__18650(cljs.core.chunk_rest(s__18651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18653),null);
}
} else {
var f = cljs.core.first(s__18651__$2);
var d = (function (){try{return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18655){if((e18655 instanceof Error)){
var _ = e18655;
return null;
} else {
throw e18655;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__18650(cljs.core.rest(s__18651__$2)));
} else {
var G__18659 = cljs.core.rest(s__18651__$2);
s__18651__$1 = G__18659;
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
});

cljs_time.format.parse_local.cljs$lang$maxFixedArity = 2;

/**
 * Returns a local Date instance obtained by parsing the
 *   given string according to the given formatter.
 */
cljs_time.format.parse_local_date = (function cljs_time$format$parse_local_date(var_args){
var G__18661 = arguments.length;
switch (G__18661) {
case 2:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,s){
return cljs_time.internal.parse.compile(cljs.core.cst$kw$goog$date$Date,fmt,cljs_time.internal.parse.parse(cljs.core.cst$kw$format_DASH_str.cljs$core$IFn$_invoke$arity$1(fmt),s));
});

cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.core.first((function (){var iter__8994__auto__ = (function cljs_time$format$iter__18662(s__18663){
return (new cljs.core.LazySeq(null,(function (){
var s__18663__$1 = s__18663;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18663__$1);
if(temp__4657__auto__){
var s__18663__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18663__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18663__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18665 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18664 = (0);
while(true){
if((i__18664 < size__8993__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18664);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18666){if((e18666 instanceof Error)){
var _ = e18666;
return null;
} else {
throw e18666;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18665,d);

var G__18669 = (i__18664 + (1));
i__18664 = G__18669;
continue;
} else {
var G__18670 = (i__18664 + (1));
i__18664 = G__18670;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18665),cljs_time$format$iter__18662(cljs.core.chunk_rest(s__18663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18665),null);
}
} else {
var f = cljs.core.first(s__18663__$2);
var d = (function (){try{return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18667){if((e18667 instanceof Error)){
var _ = e18667;
return null;
} else {
throw e18667;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$format$iter__18662(cljs.core.rest(s__18663__$2)));
} else {
var G__18671 = cljs.core.rest(s__18663__$2);
s__18663__$1 = G__18671;
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
});

cljs_time.format.parse_local_date.cljs$lang$maxFixedArity = 2;

/**
 * Returns a string representing the given DateTime instance in UTC and in the
 * form determined by the given formatter.
 */
cljs_time.format.unparse = (function cljs_time$format$unparse(p__18672,dt){
var map__18673 = p__18672;
var map__18673__$1 = ((((!((map__18673 == null)))?((((map__18673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18673.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18673):map__18673);
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,cljs.core.cst$kw$formatters);


return cljs_time.internal.unparse.unparse(format_str,dt);
});
/**
 * Returns a string representing the given local DateTime instance in the
 *   form determined by the given formatter.
 */
cljs_time.format.unparse_local = (function cljs_time$format$unparse_local(p__18675,dt){
var map__18676 = p__18675;
var map__18676__$1 = ((((!((map__18676 == null)))?((((map__18676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18676):map__18676);
var fmt = map__18676__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18676__$1,cljs.core.cst$kw$formatters);


return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Returns a string representing the given local Date instance in the form
 *   determined by the given formatter.
 */
cljs_time.format.unparse_local_date = (function cljs_time$format$unparse_local_date(p__18678,dt){
var map__18679 = p__18678;
var map__18679__$1 = ((((!((map__18679 == null)))?((((map__18679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18679):map__18679);
var fmt = map__18679__$1;
var format_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$format_DASH_str);
var formatters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$formatters);


return cljs_time.format.unparse(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmt,cljs.core.cst$kw$overrides,cljs_time.format.skip_timezone_formatter()),dt);
});
/**
 * Shows how a given DateTime, or by default the current time, would be
 * formatted with each of the available printing formatters.
 */
cljs_time.format.show_formatters = (function cljs_time$format$show_formatters(var_args){
var G__18682 = arguments.length;
switch (G__18682) {
case 0:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1(cljs_time.core.now());
});

cljs_time.format.show_formatters.cljs$core$IFn$_invoke$arity$1 = (function (dt){
var seq__18683 = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs_time.format.printers));
var chunk__18684 = null;
var count__18685 = (0);
var i__18686 = (0);
while(true){
if((i__18686 < count__18685)){
var p = chunk__18684.cljs$core$IIndexed$_nth$arity$2(null,i__18686);
var fmt_18688 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_18688,dt)], 0))], 0));

var G__18689 = seq__18683;
var G__18690 = chunk__18684;
var G__18691 = count__18685;
var G__18692 = (i__18686 + (1));
seq__18683 = G__18689;
chunk__18684 = G__18690;
count__18685 = G__18691;
i__18686 = G__18692;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__18683);
if(temp__4657__auto__){
var seq__18683__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18683__$1)){
var c__9025__auto__ = cljs.core.chunk_first(seq__18683__$1);
var G__18693 = cljs.core.chunk_rest(seq__18683__$1);
var G__18694 = c__9025__auto__;
var G__18695 = cljs.core.count(c__9025__auto__);
var G__18696 = (0);
seq__18683 = G__18693;
chunk__18684 = G__18694;
count__18685 = G__18695;
i__18686 = G__18696;
continue;
} else {
var p = cljs.core.first(seq__18683__$1);
var fmt_18697 = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(p) : cljs_time.format.formatters.call(null,p));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%-40s%s\n",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,cljs_time.format.unparse(fmt_18697,dt)], 0))], 0));

var G__18698 = cljs.core.next(seq__18683__$1);
var G__18699 = null;
var G__18700 = (0);
var G__18701 = (0);
seq__18683 = G__18698;
chunk__18684 = G__18699;
count__18685 = G__18700;
i__18686 = G__18701;
continue;
}
} else {
return null;
}
}
break;
}
});

cljs_time.format.show_formatters.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
cljs_time.format.Mappable = function(){};

/**
 * Returns a map representation of the given instant.
 *                        It will contain the following keys: :years, :months,
 *                        :days, :hours, :minutes and :seconds.
 */
cljs_time.format.instant__GT_map = (function cljs_time$format$instant__GT_map(instant){
if((!((instant == null))) && (!((instant.cljs_time$format$Mappable$instant__GT_map$arity$1 == null)))){
return instant.cljs_time$format$Mappable$instant__GT_map$arity$1(instant);
} else {
var x__8869__auto__ = (((instant == null))?null:instant);
var m__8870__auto__ = (cljs_time.format.instant__GT_map[goog.typeOf(x__8869__auto__)]);
if(!((m__8870__auto__ == null))){
return (m__8870__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8870__auto__.cljs$core$IFn$_invoke$arity$1(instant) : m__8870__auto__.call(null,instant));
} else {
var m__8870__auto____$1 = (cljs_time.format.instant__GT_map["_"]);
if(!((m__8870__auto____$1 == null))){
return (m__8870__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8870__auto____$1.cljs$core$IFn$_invoke$arity$1(instant) : m__8870__auto____$1.call(null,instant));
} else {
throw cljs.core.missing_protocol("Mappable.instant->map",instant);
}
}
}
});

/**
 * Accepts a Period or Interval and outputs an absolute duration time
 *   in form of "1 day", "2 hours", "20 minutes", "2 days 1 hour
 *   15 minutes" etc.
 */
cljs_time.format.unparse_duration = (function cljs_time$format$unparse_duration(duration){
var G__18702 = cljs_time.core.in_millis(duration);
return goog.date.duration.format(G__18702);
});
cljs_time.format.to_map = (function cljs_time$format$to_map(years,months,days,hours,minutes,seconds,millis){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$years,years,cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,millis], null);
});
goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (dt){
var dt__$1 = this;
return cljs_time.format.to_map(dt__$1.getYear(),(dt__$1.getMonth() + (1)),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds(),dt__$1.getMilliseconds());
});

cljs_time.core.Period.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Period.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs_time.core.Interval.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
return cljs_time.core.__GT_period(m__$1);
});

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.cljs_time$format$Mappable$instant__GT_map$arity$1 = (function (m){
var m__$1 = this;
var G__18703 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(m__$1));
var G__18703__$1 = (((G__18703 instanceof cljs.core.Keyword))?G__18703.fqn:null);
switch (G__18703__$1) {
case "cljs-time.core/period":
return m__$1;

break;
case "cljs-time.core/interval":
return cljs_time.core.__GT_period(m__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18703__$1)].join('')));

}
});
