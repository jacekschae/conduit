// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.formatters.markup');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.printing');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.templating');
goog.require('devtools.munging');
devtools.formatters.markup.print_with = (function devtools$formatters$markup$print_with(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16597 = arguments.length;
var i__8938__auto___16598 = (0);
while(true){
if((i__8938__auto___16598 < len__8937__auto___16597)){
args__8944__auto__.push((arguments[i__8938__auto___16598]));

var G__16599 = (i__8938__auto___16598 + (1));
i__8938__auto___16598 = G__16599;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((3) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((3)),(0),null)):null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8945__auto__);
});

devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic = (function (method,value,tag,p__16589){
var vec__16590 = p__16589;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16590,(0),null);
var job_fn = ((function (vec__16590,max_level){
return (function (){
var G__16593 = value;
var G__16594 = tag;
var G__16595 = (devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0 ? devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0() : devtools.formatters.markup.get_markup_db.call(null));
return (method.cljs$core$IFn$_invoke$arity$3 ? method.cljs$core$IFn$_invoke$arity$3(G__16593,G__16594,G__16595) : method.call(null,G__16593,G__16594,G__16595));
});})(vec__16590,max_level))
;
if(!((max_level == null))){
var _STAR_print_level_STAR_16596 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (max_level + (1));

try{return job_fn();
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_16596;
}} else {
return job_fn();
}
});

devtools.formatters.markup.print_with.cljs$lang$maxFixedArity = (3);

devtools.formatters.markup.print_with.cljs$lang$applyTo = (function (seq16585){
var G__16586 = cljs.core.first(seq16585);
var seq16585__$1 = cljs.core.next(seq16585);
var G__16587 = cljs.core.first(seq16585__$1);
var seq16585__$2 = cljs.core.next(seq16585__$1);
var G__16588 = cljs.core.first(seq16585__$2);
var seq16585__$3 = cljs.core.next(seq16585__$2);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(G__16586,G__16587,G__16588,seq16585__$3);
});

devtools.formatters.markup.print_via_writer = (function devtools$formatters$markup$print_via_writer(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16607 = arguments.length;
var i__8938__auto___16608 = (0);
while(true){
if((i__8938__auto___16608 < len__8937__auto___16607)){
args__8944__auto__.push((arguments[i__8938__auto___16608]));

var G__16609 = (i__8938__auto___16608 + (1));
i__8938__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((2) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8945__auto__);
});

devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__16603){
var vec__16604 = p__16603;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16604,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_writer,value,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([max_level], 0));
});

devtools.formatters.markup.print_via_writer.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup.print_via_writer.cljs$lang$applyTo = (function (seq16600){
var G__16601 = cljs.core.first(seq16600);
var seq16600__$1 = cljs.core.next(seq16600);
var G__16602 = cljs.core.first(seq16600__$1);
var seq16600__$2 = cljs.core.next(seq16600__$1);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(G__16601,G__16602,seq16600__$2);
});

devtools.formatters.markup.print_via_protocol = (function devtools$formatters$markup$print_via_protocol(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16617 = arguments.length;
var i__8938__auto___16618 = (0);
while(true){
if((i__8938__auto___16618 < len__8937__auto___16617)){
args__8944__auto__.push((arguments[i__8938__auto___16618]));

var G__16619 = (i__8938__auto___16618 + (1));
i__8938__auto___16618 = G__16619;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((2) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8945__auto__);
});

devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__16613){
var vec__16614 = p__16613;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16614,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_protocol,value,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([max_level], 0));
});

devtools.formatters.markup.print_via_protocol.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup.print_via_protocol.cljs$lang$applyTo = (function (seq16610){
var G__16611 = cljs.core.first(seq16610);
var seq16610__$1 = cljs.core.next(seq16610);
var G__16612 = cljs.core.first(seq16610__$1);
var seq16610__$2 = cljs.core.next(seq16610__$1);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic(G__16611,G__16612,seq16610__$2);
});

devtools.formatters.markup._LT_expandable_GT_ = (function devtools$formatters$markup$_LT_expandable_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16621 = arguments.length;
var i__8938__auto___16622 = (0);
while(true){
if((i__8938__auto___16622 < len__8937__auto___16621)){
args__8944__auto__.push((arguments[i__8938__auto___16622]));

var G__16623 = (i__8938__auto___16622 + (1));
i__8938__auto___16622 = G__16623;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var inner_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expandable_DASH_inner_DASH_tag], null),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expandable_DASH_tag,cljs.core.cst$kw$expandable_DASH_symbol,inner_markup], null);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$applyTo = (function (seq16620){
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16620));
});

devtools.formatters.markup._LT_raw_surrogate_GT_ = (function devtools$formatters$markup$_LT_raw_surrogate_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16625 = arguments.length;
var i__8938__auto___16626 = (0);
while(true){
if((i__8938__auto___16626 < len__8937__auto___16625)){
args__8944__auto__.push((arguments[i__8938__auto___16626]));

var G__16627 = (i__8938__auto___16626 + (1));
i__8938__auto___16626 = G__16627;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["surrogate"], null),args);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$applyTo = (function (seq16624){
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16624));
});

devtools.formatters.markup._LT_surrogate_GT_ = (function devtools$formatters$markup$_LT_surrogate_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16633 = arguments.length;
var i__8938__auto___16634 = (0);
while(true){
if((i__8938__auto___16634 < len__8937__auto___16633)){
args__8944__auto__.push((arguments[i__8938__auto___16634]));

var G__16635 = (i__8938__auto___16634 + (1));
i__8938__auto___16634 = G__16635;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16629){
var vec__16630 = p__16629;
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630,(0),null);
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630,(1),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630,(2),null);
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16630,(3),null);
var header__$1 = ((!((body == null)))?devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header], 0)):header);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,header__$1,body,start_index], 0));
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$applyTo = (function (seq16628){
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16628));
});

devtools.formatters.markup._LT_reference_GT_ = (function devtools$formatters$markup$_LT_reference_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16637 = arguments.length;
var i__8938__auto___16638 = (0);
while(true){
if((i__8938__auto___16638 < len__8937__auto___16637)){
args__8944__auto__.push((arguments[i__8938__auto___16638]));

var G__16639 = (i__8938__auto___16638 + (1));
i__8938__auto___16638 = G__16639;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reference"], null),args);
});

devtools.formatters.markup._LT_reference_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_reference_GT_.cljs$lang$applyTo = (function (seq16636){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16636));
});

devtools.formatters.markup._LT_reference_surrogate_GT_ = (function devtools$formatters$markup$_LT_reference_surrogate_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16641 = arguments.length;
var i__8938__auto___16642 = (0);
while(true){
if((i__8938__auto___16642 < len__8937__auto___16641)){
args__8944__auto__.push((arguments[i__8938__auto___16642]));

var G__16643 = (i__8938__auto___16642 + (1));
i__8938__auto___16642 = G__16643;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_surrogate_GT_,args)], 0));
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$applyTo = (function (seq16640){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16640));
});

devtools.formatters.markup._LT_circular_reference_GT_ = (function devtools$formatters$markup$_LT_circular_reference_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16645 = arguments.length;
var i__8938__auto___16646 = (0);
while(true){
if((i__8938__auto___16646 < len__8937__auto___16645)){
args__8944__auto__.push((arguments[i__8938__auto___16646]));

var G__16647 = (i__8938__auto___16646 + (1));
i__8938__auto___16646 = G__16647;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circular_DASH_reference_DASH_tag,cljs.core.cst$kw$circular_DASH_ref_DASH_icon], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circular_DASH_reference_DASH_body_DASH_tag], null),children)], 0));
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$applyTo = (function (seq16644){
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16644));
});

devtools.formatters.markup._LT_native_reference_GT_ = (function devtools$formatters$markup$_LT_native_reference_GT_(object){
var reference = devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,(function (p1__16648_SHARP_){
return devtools.formatters.state.set_prevent_recursion(p1__16648_SHARP_,true);
})], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_reference_DASH_wrapper_DASH_tag,cljs.core.cst$kw$native_DASH_reference_DASH_background,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_reference_DASH_tag,reference], null)], null);
});
devtools.formatters.markup._LT_header_expander_GT_ = (function devtools$formatters$markup$_LT_header_expander_GT_(object){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,cljs.core.cst$kw$header_DASH_expander_DASH_symbol,cljs.core.cst$kw$target], 0)),devtools.formatters.state.reset_depth_limits], 0));
});
devtools.formatters.markup._LT_cljs_land_GT_ = (function devtools$formatters$markup$_LT_cljs_land_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16650 = arguments.length;
var i__8938__auto___16651 = (0);
while(true){
if((i__8938__auto___16651 < len__8937__auto___16650)){
args__8944__auto__.push((arguments[i__8938__auto___16651]));

var G__16652 = (i__8938__auto___16651 + (1));
i__8938__auto___16651 = G__16652;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs_DASH_land_DASH_tag], null),children);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$applyTo = (function (seq16649){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16649));
});

devtools.formatters.markup._LT_nil_GT_ = (function devtools$formatters$markup$_LT_nil_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nil_DASH_tag,cljs.core.cst$kw$nil_DASH_label], null);
});
devtools.formatters.markup._LT_bool_GT_ = (function devtools$formatters$markup$_LT_bool_GT_(bool){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bool_DASH_tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(bool)].join('')], null);
});
devtools.formatters.markup._LT_keyword_GT_ = (function devtools$formatters$markup$_LT_keyword_GT_(keyword){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword_DASH_tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyword)].join('')], null);
});
devtools.formatters.markup._LT_symbol_GT_ = (function devtools$formatters$markup$_LT_symbol_GT_(symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol_DASH_tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)].join('')], null);
});
devtools.formatters.markup._LT_number_GT_ = (function devtools$formatters$markup$_LT_number_GT_(number){
if(cljs.core.integer_QMARK_(number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$integer_DASH_tag,number], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$float_DASH_tag,number], null);
}
});
devtools.formatters.markup._LT_string_GT_ = (function devtools$formatters$markup$_LT_string_GT_(string){
var dq = devtools.formatters.helpers.pref(cljs.core.cst$kw$dq);
var re_nl = (new RegExp("\n","g"));
var nl_marker = devtools.formatters.helpers.pref(cljs.core.cst$kw$new_DASH_line_DASH_string_DASH_replacer);
var inline_string = string.replace(re_nl,nl_marker);
var max_inline_string_size = (devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit) + devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
var quote_string = ((function (dq,re_nl,nl_marker,inline_string,max_inline_string_size){
return (function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq)].join('');
});})(dq,re_nl,nl_marker,inline_string,max_inline_string_size))
;
var should_abbreviate_QMARK_ = (cljs.core.count(inline_string) > max_inline_string_size);
if(should_abbreviate_QMARK_){
var abbreviated_string = devtools.formatters.helpers.abbreviate_long_string(inline_string,devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_abbreviation_DASH_marker),devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_prefix_DASH_limit),devtools.formatters.helpers.pref(cljs.core.cst$kw$string_DASH_postfix_DASH_limit));
var abbreviated_string_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string_DASH_tag,quote_string(abbreviated_string)], null);
var string_with_nl_markers = string.replace(re_nl,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl_marker),"\n"].join(''));
var details_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$expanded_DASH_string_DASH_tag,string_with_nl_markers], null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([string,abbreviated_string_markup,details_markup], 0));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$string_DASH_tag,quote_string(inline_string)], null);
}
});
devtools.formatters.markup._LT_preview_GT_ = (function devtools$formatters$markup$_LT_preview_GT_(value){
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.cst$kw$header_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_print_DASH_level)], 0));
});
devtools.formatters.markup._LT_body_GT_ = (function devtools$formatters$markup$_LT_body_GT_(markup){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_tag,markup], null);
});
devtools.formatters.markup._LT_aligned_body_GT_ = (function devtools$formatters$markup$_LT_aligned_body_GT_(markups_lists){
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aligned_DASH_li_DASH_tag], null),line);
} else {
return null;
}
});
var aligned_lines = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return devtools.formatters.markup._LT_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag], null),aligned_lines));
});
devtools.formatters.markup._LT_standard_body_GT_ = (function devtools$formatters$markup$_LT_standard_body_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16659 = arguments.length;
var i__8938__auto___16660 = (0);
while(true){
if((i__8938__auto___16660 < len__8937__auto___16659)){
args__8944__auto__.push((arguments[i__8938__auto___16660]));

var G__16661 = (i__8938__auto___16660 + (1));
i__8938__auto___16660 = G__16661;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (markups_lists,p__16655){
var vec__16656 = p__16655;
var no_margin_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16656,(0),null);
var ol_tag = (cljs.core.truth_(no_margin_QMARK_)?cljs.core.cst$kw$standard_DASH_ol_DASH_no_DASH_margin_DASH_tag:cljs.core.cst$kw$standard_DASH_ol_DASH_tag);
var li_tag = (cljs.core.truth_(no_margin_QMARK_)?cljs.core.cst$kw$standard_DASH_li_DASH_no_DASH_margin_DASH_tag:cljs.core.cst$kw$standard_DASH_li_DASH_tag);
var prepend_li_tag = ((function (ol_tag,li_tag,vec__16656,no_margin_QMARK_){
return (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [li_tag], null),line);
} else {
return null;
}
});})(ol_tag,li_tag,vec__16656,no_margin_QMARK_))
;
var lines_markups = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ol_tag], null),lines_markups);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$applyTo = (function (seq16653){
var G__16654 = cljs.core.first(seq16653);
var seq16653__$1 = cljs.core.next(seq16653);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16654,seq16653__$1);
});

devtools.formatters.markup._LT_standard_body_reference_GT_ = (function devtools$formatters$markup$_LT_standard_body_reference_GT_(o){
return devtools.formatters.markup._LT_standard_body_GT_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0))], null)], null));
});
devtools.formatters.markup._LT_index_GT_ = (function devtools$formatters$markup$_LT_index_GT_(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index_DASH_tag,value,cljs.core.cst$kw$line_DASH_index_DASH_separator], null);
});
devtools.formatters.markup.body_line = (function devtools$formatters$markup$body_line(index,value){
var index_markup = devtools.formatters.markup._LT_index_GT_(index);
var value_markup = devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.cst$kw$item_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.helpers.pref(cljs.core.cst$kw$body_DASH_line_DASH_max_DASH_print_DASH_level)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_markup,value_markup], null);
});
devtools.formatters.markup.prepare_body_lines = (function devtools$formatters$markup$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(work)){
return lines;
} else {
var G__16662 = cljs.core.rest(work);
var G__16663 = (index + (1));
var G__16664 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,devtools.formatters.markup.body_line(index,cljs.core.first(work)));
work = G__16662;
index = G__16663;
lines = G__16664;
continue;
}
break;
}
});
devtools.formatters.markup.body_lines = (function devtools$formatters$markup$body_lines(value,starting_index){
var seq = cljs.core.seq(value);
var max_number_body_items = devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_number_DASH_body_DASH_items);
var chunk = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var rest = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var lines = devtools.formatters.markup.prepare_body_lines(chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_tag,cljs.core.cst$kw$body_DASH_items_DASH_more_DASH_label], null);
var start_index = (starting_index + max_number_body_items);
var more_markup = devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest,more_label_markup,cljs.core.cst$kw$target,start_index], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [more_markup], null));
}
});
devtools.formatters.markup._LT_details_GT_ = (function devtools$formatters$markup$_LT_details_GT_(value,starting_index){
var has_continuation_QMARK_ = (starting_index > (0));
var body_markup = devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup.body_lines(value,starting_index),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([has_continuation_QMARK_], 0));
if(has_continuation_QMARK_){
return body_markup;
} else {
return devtools.formatters.markup._LT_body_GT_(body_markup);
}
});
devtools.formatters.markup._LT_list_details_GT_ = (function devtools$formatters$markup$_LT_list_details_GT_(items,_opts){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,items));
});
devtools.formatters.markup._LT_list_GT_ = (function devtools$formatters$markup$_LT_list_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16672 = arguments.length;
var i__8938__auto___16673 = (0);
while(true){
if((i__8938__auto___16673 < len__8937__auto___16672)){
args__8944__auto__.push((arguments[i__8938__auto___16673]));

var G__16674 = (i__8938__auto___16673 + (1));
i__8938__auto___16673 = G__16674;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((2) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (items,max_count,p__16668){
var vec__16669 = p__16668;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16669,(0),null);
var items_markups = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_count,items);
var more_count = (cljs.core.count(items) - max_count);
var more_QMARK_ = (more_count > (0));
var separator = (function (){var or__7779__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$list_DASH_separator;
}
})();
var more_symbol = ((more_QMARK_)?(function (){var temp__4655__auto__ = cljs.core.cst$kw$more_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var more_symbol = temp__4655__auto__;
if(cljs.core.fn_QMARK_(more_symbol)){
return (more_symbol.cljs$core$IFn$_invoke$arity$1 ? more_symbol.cljs$core$IFn$_invoke$arity$1(more_count) : more_symbol.call(null,more_count));
} else {
return more_symbol;
}
} else {
return devtools.formatters.helpers.get_more_marker(more_count);
}
})():null);
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7779__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$list_DASH_tag;
}
})(),(function (){var or__7779__auto__ = cljs.core.cst$kw$open_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$list_DASH_open_DASH_symbol;
}
})()], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,items_markups),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,more_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7779__auto__ = cljs.core.cst$kw$close_DASH_symbol.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$list_DASH_close_DASH_symbol;
}
})()], null)], 0));
if(more_QMARK_){
var details_markup = cljs.core.cst$kw$details.cljs$core$IFn$_invoke$arity$1(opts);
var default_details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(devtools.formatters.markup._LT_list_details_GT_,items,opts);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,preview_markup,(function (){var or__7779__auto__ = details_markup;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return default_details_fn;
}
})()], 0));
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_list_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_list_GT_.cljs$lang$applyTo = (function (seq16665){
var G__16666 = cljs.core.first(seq16665);
var seq16665__$1 = cljs.core.next(seq16665);
var G__16667 = cljs.core.first(seq16665__$1);
var seq16665__$2 = cljs.core.next(seq16665__$1);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16666,G__16667,seq16665__$2);
});

devtools.formatters.markup._LT_meta_GT_ = (function devtools$formatters$markup$_LT_meta_GT_(metadata){
var body_fn = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_body_DASH_tag,devtools.formatters.markup._LT_preview_GT_(metadata)], null);
});
var header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_header_DASH_tag,"meta"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_reference_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,header,body_fn], 0))], null);
});
devtools.formatters.markup._LT_meta_wrapper_GT_ = (function devtools$formatters$markup$_LT_meta_wrapper_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16677 = arguments.length;
var i__8938__auto___16678 = (0);
while(true){
if((i__8938__auto___16678 < len__8937__auto___16677)){
args__8944__auto__.push((arguments[i__8938__auto___16678]));

var G__16679 = (i__8938__auto___16678 + (1));
i__8938__auto___16678 = G__16679;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (metadata,children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$meta_DASH_wrapper_DASH_tag], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_meta_GT_(metadata)], null)], 0));
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$applyTo = (function (seq16675){
var G__16676 = cljs.core.first(seq16675);
var seq16675__$1 = cljs.core.next(seq16675);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16676,seq16675__$1);
});

devtools.formatters.markup._LT_function_details_GT_ = (function devtools$formatters$markup$_LT_function_details_GT_(fn_obj,ns,_name,arities,prefix){

var arities__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.wrap_arity,arities);
var make_arity_markup_list = ((function (arities__$1){
return (function (arity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_multi_DASH_arity_DASH_args_DASH_indent_DASH_tag,prefix], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_args_DASH_tag,arity], null)], null);
});})(arities__$1))
;
var arities_markupts_lists = (((cljs.core.count(arities__$1) > (1)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_arity_markup_list,arities__$1):null);
var ns_markups_list = ((!(cljs.core.empty_QMARK_(ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var native_markups_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(fn_obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(arities_markupts_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_arities_GT_ = (function devtools$formatters$markup$_LT_arities_GT_(arities){
var multi_arity_QMARK_ = (cljs.core.count(arities) > (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_args_DASH_tag,devtools.formatters.helpers.wrap_arity(((multi_arity_QMARK_)?devtools.formatters.helpers.pref(cljs.core.cst$kw$multi_DASH_arity_DASH_symbol):cljs.core.first(arities)))], null);
});
devtools.formatters.markup._LT_function_GT_ = (function devtools$formatters$markup$_LT_function_GT_(fn_obj){

var vec__16680 = devtools.munging.parse_fn_info(fn_obj);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16680,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16680,(1),null);
var lambda_QMARK_ = cljs.core.empty_QMARK_(name);
var spacer_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$spacer);
var rest_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$rest_DASH_symbol);
var multi_arity_symbol = devtools.formatters.helpers.pref(cljs.core.cst$kw$multi_DASH_arity_DASH_symbol);
var arities = devtools.munging.extract_arities(fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var arities_markup = devtools.formatters.markup._LT_arities_GT_(arities);
var name_markup = ((!(lambda_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_name_DASH_tag,name], null):null);
var icon_markup = ((lambda_QMARK_)?cljs.core.cst$kw$lambda_DASH_icon:cljs.core.cst$kw$fn_DASH_icon);
var prefix_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_prefix_DASH_tag,icon_markup,name_markup], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_header_DASH_tag,prefix_markup,arities_markup], null);
var details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_function_details_GT_,fn_obj,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arities,prefix_markup], 0));
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_obj,preview_markup,details_fn], 0));
});
devtools.formatters.markup._LT_type_basis_item_GT_ = (function devtools$formatters$markup$_LT_type_basis_item_GT_(basis_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_tag,cljs.core.name(basis_item)], null);
});
devtools.formatters.markup._LT_type_basis_GT_ = (function devtools$formatters$markup$_LT_type_basis_GT_(basis){
var item_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_type_basis_item_GT_,basis);
var children_markups = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_basis_DASH_item_DASH_separator,item_markups);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_basis_DASH_tag], null),children_markups);
});
devtools.formatters.markup._LT_type_details_GT_ = (function devtools$formatters$markup$_LT_type_details_GT_(constructor_fn,ns,_name,basis){
var ns_markup = ((!(cljs.core.empty_QMARK_(ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var basis_markup = ((cljs.core.empty_QMARK_(basis))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$empty_DASH_basis_DASH_symbol], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$basis_DASH_icon,devtools.formatters.markup._LT_type_basis_GT_(basis)], null));
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(constructor_fn)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basis_markup,ns_markup,native_markup], null));
});
devtools.formatters.markup._LT_type_GT_ = (function devtools$formatters$markup$_LT_type_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16692 = arguments.length;
var i__8938__auto___16693 = (0);
while(true){
if((i__8938__auto___16693 < len__8937__auto___16692)){
args__8944__auto__.push((arguments[i__8938__auto___16693]));

var G__16694 = (i__8938__auto___16693 + (1));
i__8938__auto___16693 = G__16694;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__16685){
var vec__16686 = p__16685;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16686,(0),null);
var vec__16689 = devtools.munging.parse_constructor_info(constructor_fn);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16689,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16689,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16689,(2),null);
var name_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_name_DASH_tag,name], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7779__auto__ = header_tag;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$type_DASH_header_DASH_tag;
}
})(),cljs.core.cst$kw$type_DASH_symbol,name_markup], null);
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_type_details_GT_,constructor_fn,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([basis], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_wrapper_DASH_tag,cljs.core.cst$kw$type_DASH_header_DASH_background,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_ref_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([constructor_fn,preview_markup,details_markup_fn], 0))], null)], null);
});

devtools.formatters.markup._LT_type_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_type_GT_.cljs$lang$applyTo = (function (seq16683){
var G__16684 = cljs.core.first(seq16683);
var seq16683__$1 = cljs.core.next(seq16683);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16684,seq16683__$1);
});

devtools.formatters.markup._LT_standalone_type_GT_ = (function devtools$formatters$markup$_LT_standalone_type_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16701 = arguments.length;
var i__8938__auto___16702 = (0);
while(true){
if((i__8938__auto___16702 < len__8937__auto___16701)){
args__8944__auto__.push((arguments[i__8938__auto___16702]));

var G__16703 = (i__8938__auto___16702 + (1));
i__8938__auto___16702 = G__16703;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__16697){
var vec__16698 = p__16697;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16698,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$standalone_DASH_type_DASH_tag,devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header_tag], 0))], null);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$applyTo = (function (seq16695){
var G__16696 = cljs.core.first(seq16695);
var seq16695__$1 = cljs.core.next(seq16695);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16696,seq16695__$1);
});

devtools.formatters.markup._LT_protocol_method_arity_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arity_GT_(arity_fn){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arity_fn], 0));
});
devtools.formatters.markup._LT_protocol_method_arities_details_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_details_GT_(fns){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,fns));
});
devtools.formatters.markup._LT_protocol_method_arities_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16710 = arguments.length;
var i__8938__auto___16711 = (0);
while(true){
if((i__8938__auto___16711 < len__8937__auto___16710)){
args__8944__auto__.push((arguments[i__8938__auto___16711]));

var G__16712 = (i__8938__auto___16711 + (1));
i__8938__auto___16711 = G__16712;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns,p__16706){
var vec__16707 = p__16706;
var max_fns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16707,(0),null);
var max_fns__$1 = (function (){var or__7779__auto__ = max_fns;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_protocol_DASH_method_DASH_arities_DASH_list);
}
})();
var more_QMARK_ = (cljs.core.count(fns) > max_fns__$1);
var aritites_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fns__$1,fns));
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_tag,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_open_DASH_symbol], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_list_DASH_header_DASH_separator,aritites_markups),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_more_DASH_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_header_DASH_close_DASH_symbol], null)], 0));
if(more_QMARK_){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arities_details_GT_,fns);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,preview_markup,details_markup_fn], 0));
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$applyTo = (function (seq16704){
var G__16705 = cljs.core.first(seq16704);
var seq16704__$1 = cljs.core.next(seq16704);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16705,seq16704__$1);
});

devtools.formatters.markup._LT_protocol_method_GT_ = (function devtools$formatters$markup$_LT_protocol_method_GT_(name,arities){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_tag,cljs.core.cst$kw$method_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_method_DASH_name_DASH_tag,name], null),devtools.formatters.markup._LT_protocol_method_arities_GT_(arities)], null);
});
devtools.formatters.markup._LT_protocol_details_GT_ = (function devtools$formatters$markup$_LT_protocol_details_GT_(obj,ns,_name,selector,_fast_QMARK_){
var protocol_obj = devtools.munging.get_protocol_object(selector);
var ns_markups_list = ((!(cljs.core.empty_QMARK_(ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ns_DASH_icon,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocol_DASH_ns_DASH_name_DASH_tag,ns], null)], null):null);
var native_markups_list = ((!((protocol_obj == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(protocol_obj)], null):null);
var methods$ = devtools.munging.collect_protocol_methods(obj,selector);
var methods_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (protocol_obj,ns_markups_list,native_markups_list,methods$){
return (function (p__16713){
var vec__16714 = p__16713;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16714,(0),null);
var arities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16714,(1),null);
return devtools.formatters.markup._LT_protocol_method_GT_(name,arities);
});})(protocol_obj,ns_markups_list,native_markups_list,methods$))
,methods$);
var methods_markups_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,methods_markups);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(methods_markups_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_protocol_GT_ = (function devtools$formatters$markup$_LT_protocol_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16726 = arguments.length;
var i__8938__auto___16727 = (0);
while(true){
if((i__8938__auto___16727 < len__8937__auto___16726)){
args__8944__auto__.push((arguments[i__8938__auto___16727]));

var G__16728 = (i__8938__auto___16727 + (1));
i__8938__auto___16727 = G__16728;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((2) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocol,p__16720){
var vec__16721 = p__16720;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16721,(0),null);
var map__16724 = protocol;
var map__16724__$1 = ((((!((map__16724 == null)))?((((map__16724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16724):map__16724);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16724__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16724__$1,cljs.core.cst$kw$name);
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16724__$1,cljs.core.cst$kw$selector);
var fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16724__$1,cljs.core.cst$kw$fast_QMARK_);
var preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__7779__auto__ = tag;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$protocol_DASH_name_DASH_tag;
}
})(),name], null);
var prefix_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fast_QMARK_)?cljs.core.cst$kw$fast_DASH_protocol_DASH_tag:cljs.core.cst$kw$slow_DASH_protocol_DASH_tag),cljs.core.cst$kw$protocol_DASH_background], null);
if(!((obj == null))){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_protocol_details_GT_,obj,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selector,fast_QMARK_], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj,preview_markup,details_markup_fn], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,preview_markup);
}
});

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$applyTo = (function (seq16717){
var G__16718 = cljs.core.first(seq16717);
var seq16717__$1 = cljs.core.next(seq16717);
var G__16719 = cljs.core.first(seq16717__$1);
var seq16717__$2 = cljs.core.next(seq16717__$1);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16718,G__16719,seq16717__$2);
});

devtools.formatters.markup._LT_more_protocols_GT_ = (function devtools$formatters$markup$_LT_more_protocols_GT_(more_count){
var fake_protocol = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,devtools.formatters.helpers.get_more_marker(more_count)], null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(null,fake_protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$protocol_DASH_more_DASH_tag], 0));
});
devtools.formatters.markup._LT_protocols_list_GT_ = (function devtools$formatters$markup$_LT_protocols_list_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16736 = arguments.length;
var i__8938__auto___16737 = (0);
while(true){
if((i__8938__auto___16737 < len__8937__auto___16736)){
args__8944__auto__.push((arguments[i__8938__auto___16737]));

var G__16738 = (i__8938__auto___16737 + (1));
i__8938__auto___16737 = G__16738;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((2) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocols,p__16732){
var vec__16733 = p__16732;
var max_protocols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16733,(0),null);
var max_protocols__$1 = (function (){var or__7779__auto__ = max_protocols;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_list_DASH_protocols);
}
})();
var protocols_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_GT_,obj),protocols);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(protocols_markups,max_protocols__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tag,cljs.core.cst$kw$protocols_DASH_header_DASH_tag,cljs.core.cst$kw$open_DASH_symbol,cljs.core.cst$kw$protocols_DASH_list_DASH_open_DASH_symbol,cljs.core.cst$kw$close_DASH_symbol,cljs.core.cst$kw$protocols_DASH_list_DASH_close_DASH_symbol,cljs.core.cst$kw$separator,cljs.core.cst$kw$header_DASH_protocol_DASH_separator,cljs.core.cst$kw$more_DASH_symbol,devtools.formatters.markup._LT_more_protocols_GT_], null)], 0));
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$applyTo = (function (seq16729){
var G__16730 = cljs.core.first(seq16729);
var seq16729__$1 = cljs.core.next(seq16729);
var G__16731 = cljs.core.first(seq16729__$1);
var seq16729__$2 = cljs.core.next(seq16729__$1);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16730,G__16731,seq16729__$2);
});

devtools.formatters.markup._LT_field_GT_ = (function devtools$formatters$markup$_LT_field_GT_(name,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_name_DASH_tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_spacer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header_DASH_field_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),(function (p1__16739_SHARP_){
return devtools.formatters.state.set_managed_print_level(p1__16739_SHARP_,(1));
})], 0))], null),cljs.core.cst$kw$header_DASH_field_DASH_separator], null);
});
devtools.formatters.markup._LT_fields_details_row_GT_ = (function devtools$formatters$markup$_LT_fields_details_row_GT_(field){
var vec__16740 = field;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16740,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_tr_DASH_tag,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td1_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_symbol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_name_DASH_tag,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td2_DASH_tag,cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_spacer], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_td3_DASH_tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body_DASH_field_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], null)], null)], null);
});
devtools.formatters.markup._LT_fields_GT_ = (function devtools$formatters$markup$_LT_fields_GT_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16753 = arguments.length;
var i__8938__auto___16754 = (0);
while(true){
if((i__8938__auto___16754 < len__8937__auto___16753)){
args__8944__auto__.push((arguments[i__8938__auto___16754]));

var G__16755 = (i__8938__auto___16754 + (1));
i__8938__auto___16754 = G__16755;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fields,p__16745){
var vec__16746 = p__16745;
var max_fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16746,(0),null);
if((cljs.core.count(fields) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_no_DASH_fields_DASH_symbol], null);
} else {
var max_fields__$1 = (function (){var or__7779__auto__ = max_fields;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return devtools.formatters.helpers.pref(cljs.core.cst$kw$max_DASH_instance_DASH_header_DASH_fields);
}
})();
var more_QMARK_ = (cljs.core.count(fields) > max_fields__$1);
var fields_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (max_fields__$1,more_QMARK_,vec__16746,max_fields){
return (function (p__16749){
var vec__16750 = p__16749;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750,(1),null);
return devtools.formatters.markup._LT_field_GT_(name,value);
});})(max_fields__$1,more_QMARK_,vec__16746,max_fields))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fields__$1,fields));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_header_DASH_tag,cljs.core.cst$kw$fields_DASH_header_DASH_open_DASH_symbol], null),fields_markups,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((more_QMARK_)?cljs.core.cst$kw$more_DASH_fields_DASH_symbol:null),cljs.core.cst$kw$fields_DASH_header_DASH_close_DASH_symbol], null)], 0));
}
});

devtools.formatters.markup._LT_fields_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_fields_GT_.cljs$lang$applyTo = (function (seq16743){
var G__16744 = cljs.core.first(seq16743);
var seq16743__$1 = cljs.core.next(seq16743);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(G__16744,seq16743__$1);
});

devtools.formatters.markup._LT_fields_details_GT_ = (function devtools$formatters$markup$_LT_fields_details_GT_(fields,obj){
var protocols = devtools.munging.scan_protocols(obj);
var has_protocols_QMARK_ = !(cljs.core.empty_QMARK_(protocols));
var fields_markup = ((!((cljs.core.count(fields) === (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fields_DASH_icon,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_body_DASH_fields_DASH_table_DASH_tag], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_fields_details_row_GT_,fields))], null):null);
var protocols_list_markup = ((has_protocols_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$protocols_DASH_icon,devtools.formatters.markup._LT_protocols_list_GT_(obj,protocols)], null):null);
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$native_DASH_icon,devtools.formatters.markup._LT_native_reference_GT_(obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields_markup,protocols_list_markup,native_markup], null));
});
devtools.formatters.markup._LT_instance_GT_ = (function devtools$formatters$markup$_LT_instance_GT_(value){
var constructor_fn = devtools.formatters.helpers.get_constructor(value);
var vec__16756 = devtools.munging.parse_constructor_info(constructor_fn);
var _ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(0),null);
var _name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16756,(2),null);
var custom_printing_QMARK_ = ((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IPrintWithWriter$)))?true:false):false);
var type_markup = devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$instance_DASH_type_DASH_header_DASH_tag], 0));
var fields = devtools.formatters.helpers.fetch_fields_values(value,basis);
var fields_markup = devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((custom_printing_QMARK_)?(0):null)], 0));
var fields_details_markup_fn = ((function (constructor_fn,vec__16756,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup){
return (function (){
return devtools.formatters.markup._LT_fields_details_GT_(fields,value);
});})(constructor_fn,vec__16756,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup))
;
var fields_preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_value_DASH_tag,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value,fields_markup,fields_details_markup_fn], 0))], null);
var custom_printing_markup = ((custom_printing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_wrapper_DASH_tag,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_background,devtools.formatters.markup.print_via_protocol(value,cljs.core.cst$kw$instance_DASH_custom_DASH_printing_DASH_tag)], null):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$instance_DASH_header_DASH_tag,cljs.core.cst$kw$instance_DASH_header_DASH_background,fields_preview_markup,custom_printing_markup,type_markup], null);
});
devtools.formatters.markup._LT_header_GT_ = (function devtools$formatters$markup$_LT_header_GT_(value){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_preview_GT_(value)], 0));
});
devtools.formatters.markup._LT_surrogate_header_GT_ = (function devtools$formatters$markup$_LT_surrogate_header_GT_(surrogate){
var or__7779__auto__ = devtools.formatters.templating.get_surrogate_header(surrogate);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return devtools.formatters.markup._LT_preview_GT_(devtools.formatters.templating.get_surrogate_target(surrogate));
}
});
devtools.formatters.markup._LT_surrogate_target_GT_ = (function devtools$formatters$markup$_LT_surrogate_target_GT_(surrogate){
var target = devtools.formatters.templating.get_surrogate_target(surrogate);
if(cljs.core.seqable_QMARK_(target)){
var starting_index = devtools.formatters.templating.get_surrogate_start_index(surrogate);
return devtools.formatters.markup._LT_details_GT_(target,starting_index);
} else {
return devtools.formatters.markup._LT_standard_body_reference_GT_(target);
}
});
devtools.formatters.markup._LT_surrogate_body_GT_ = (function devtools$formatters$markup$_LT_surrogate_body_GT_(surrogate){
var temp__4655__auto__ = devtools.formatters.templating.get_surrogate_body(surrogate);
if(cljs.core.truth_(temp__4655__auto__)){
var body = temp__4655__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$target,body)){
return devtools.formatters.markup._LT_surrogate_target_GT_(surrogate);
} else {
return body;
}
} else {
return null;
}
});
devtools.formatters.markup._LT_atomic_GT_ = (function devtools$formatters$markup$_LT_atomic_GT_(value){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_nils,value,cljs.core.nil_QMARK_))){
return devtools.formatters.markup._LT_nil_GT_();
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_bools,value,devtools.formatters.helpers.bool_QMARK_))){
return devtools.formatters.markup._LT_bool_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_strings,value,cljs.core.string_QMARK_))){
return devtools.formatters.markup._LT_string_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_numbers,value,cljs.core.number_QMARK_))){
return devtools.formatters.markup._LT_number_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_keywords,value,cljs.core.keyword_QMARK_))){
return devtools.formatters.markup._LT_keyword_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_symbols,value,cljs.core.symbol_QMARK_))){
return devtools.formatters.markup._LT_symbol_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_instances,value,devtools.formatters.helpers.should_render_instance_QMARK_))){
return devtools.formatters.markup._LT_instance_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_types,value,devtools.formatters.helpers.cljs_type_QMARK_))){
return devtools.formatters.markup._LT_standalone_type_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(cljs.core.cst$kw$render_DASH_functions,value,devtools.formatters.helpers.cljs_function_QMARK_))){
return devtools.formatters.markup._LT_function_GT_(value);
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
}
});
devtools.formatters.markup.get_markup_db = (function devtools$formatters$markup$get_markup_db(){
if((devtools.formatters.markup._STAR_markup_db_STAR_ == null)){
devtools.formatters.markup._STAR_markup_db_STAR_ = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$aligned_DASH_body,cljs.core.cst$kw$native_DASH_reference,cljs.core.cst$kw$reference_DASH_surrogate,cljs.core.cst$kw$keyword,cljs.core.cst$kw$protocol_DASH_method_DASH_arities,cljs.core.cst$kw$surrogate_DASH_header,cljs.core.cst$kw$details,cljs.core.cst$kw$more_DASH_protocols,cljs.core.cst$kw$field,cljs.core.cst$kw$symbol,cljs.core.cst$kw$fields_DASH_details,cljs.core.cst$kw$atomic,cljs.core.cst$kw$string,cljs.core.cst$kw$standard_DASH_body,cljs.core.cst$kw$type_DASH_basis,cljs.core.cst$kw$bool,cljs.core.cst$kw$standalone_DASH_type,cljs.core.cst$kw$preview,cljs.core.cst$kw$header,cljs.core.cst$kw$protocol_DASH_method,cljs.core.cst$kw$cljs_DASH_land,cljs.core.cst$kw$type_DASH_basis_DASH_item,cljs.core.cst$kw$protocol_DASH_method_DASH_arities_DASH_details,cljs.core.cst$kw$fields_DASH_details_DASH_row,cljs.core.cst$kw$standard_DASH_body_DASH_reference,cljs.core.cst$kw$surrogate_DASH_body,cljs.core.cst$kw$expandable,cljs.core.cst$kw$type,cljs.core.cst$kw$protocol_DASH_method_DASH_arity,cljs.core.cst$kw$raw_DASH_surrogate,cljs.core.cst$kw$type_DASH_details,cljs.core.cst$kw$list,cljs.core.cst$kw$meta_DASH_wrapper,cljs.core.cst$kw$protocol,cljs.core.cst$kw$index,cljs.core.cst$kw$surrogate,cljs.core.cst$kw$protocols_DASH_list,cljs.core.cst$kw$meta,cljs.core.cst$kw$instance,cljs.core.cst$kw$reference,cljs.core.cst$kw$function_DASH_details,cljs.core.cst$kw$function,cljs.core.cst$kw$arities,cljs.core.cst$kw$header_DASH_expander,cljs.core.cst$kw$list_DASH_details,cljs.core.cst$kw$circular_DASH_reference,cljs.core.cst$kw$surrogate_DASH_target,cljs.core.cst$kw$fields,cljs.core.cst$kw$nil,cljs.core.cst$kw$body,cljs.core.cst$kw$number,cljs.core.cst$kw$protocol_DASH_details],[devtools.formatters.markup._LT_aligned_body_GT_,devtools.formatters.markup._LT_native_reference_GT_,devtools.formatters.markup._LT_reference_surrogate_GT_,devtools.formatters.markup._LT_keyword_GT_,devtools.formatters.markup._LT_protocol_method_arities_GT_,devtools.formatters.markup._LT_surrogate_header_GT_,devtools.formatters.markup._LT_details_GT_,devtools.formatters.markup._LT_more_protocols_GT_,devtools.formatters.markup._LT_field_GT_,devtools.formatters.markup._LT_symbol_GT_,devtools.formatters.markup._LT_fields_details_GT_,devtools.formatters.markup._LT_atomic_GT_,devtools.formatters.markup._LT_string_GT_,devtools.formatters.markup._LT_standard_body_GT_,devtools.formatters.markup._LT_type_basis_GT_,devtools.formatters.markup._LT_bool_GT_,devtools.formatters.markup._LT_standalone_type_GT_,devtools.formatters.markup._LT_preview_GT_,devtools.formatters.markup._LT_header_GT_,devtools.formatters.markup._LT_protocol_method_GT_,devtools.formatters.markup._LT_cljs_land_GT_,devtools.formatters.markup._LT_type_basis_item_GT_,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,devtools.formatters.markup._LT_fields_details_row_GT_,devtools.formatters.markup._LT_standard_body_reference_GT_,devtools.formatters.markup._LT_surrogate_body_GT_,devtools.formatters.markup._LT_expandable_GT_,devtools.formatters.markup._LT_type_GT_,devtools.formatters.markup._LT_protocol_method_arity_GT_,devtools.formatters.markup._LT_raw_surrogate_GT_,devtools.formatters.markup._LT_type_details_GT_,devtools.formatters.markup._LT_list_GT_,devtools.formatters.markup._LT_meta_wrapper_GT_,devtools.formatters.markup._LT_protocol_GT_,devtools.formatters.markup._LT_index_GT_,devtools.formatters.markup._LT_surrogate_GT_,devtools.formatters.markup._LT_protocols_list_GT_,devtools.formatters.markup._LT_meta_GT_,devtools.formatters.markup._LT_instance_GT_,devtools.formatters.markup._LT_reference_GT_,devtools.formatters.markup._LT_function_details_GT_,devtools.formatters.markup._LT_function_GT_,devtools.formatters.markup._LT_arities_GT_,devtools.formatters.markup._LT_header_expander_GT_,devtools.formatters.markup._LT_list_details_GT_,devtools.formatters.markup._LT_circular_reference_GT_,devtools.formatters.markup._LT_surrogate_target_GT_,devtools.formatters.markup._LT_fields_GT_,devtools.formatters.markup._LT_nil_GT_,devtools.formatters.markup._LT_body_GT_,devtools.formatters.markup._LT_number_GT_,devtools.formatters.markup._LT_protocol_details_GT_]);
} else {
}

return devtools.formatters.markup._STAR_markup_db_STAR_;
});
