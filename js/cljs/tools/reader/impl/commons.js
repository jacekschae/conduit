// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.tools.reader.impl.commons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
/**
 * Checks whether the reader is at the start of a number literal
 */
cljs.tools.reader.impl.commons.number_literal_QMARK_ = (function cljs$tools$reader$impl$commons$number_literal_QMARK_(reader,initch){
return (cljs.tools.reader.impl.utils.numeric_QMARK_(initch)) || (((("+" === initch)) || (("-" === initch))) && (cljs.tools.reader.impl.utils.numeric_QMARK_(reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null))));
});
/**
 * Read until first character that doesn't match pred, returning
 * char.
 */
cljs.tools.reader.impl.commons.read_past = (function cljs$tools$reader$impl$commons$read_past(pred,rdr){
var ch = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(ch) : pred.call(null,ch))){
var G__13350 = rdr.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__13350;
continue;
} else {
return ch;
}
break;
}
});
/**
 * Advances the reader to the end of a line. Returns the reader
 */
cljs.tools.reader.impl.commons.skip_line = (function cljs$tools$reader$impl$commons$skip_line(reader){
while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_(reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null))){
} else {
continue;
}
break;
}

return reader;
});
cljs.tools.reader.impl.commons.int_pattern = /^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?$/;
cljs.tools.reader.impl.commons.ratio_pattern = /([-+]?[0-9]+)\/([0-9]+)/;
cljs.tools.reader.impl.commons.float_pattern = /([-+]?[0-9]+(\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?/;
cljs.tools.reader.impl.commons.match_int = (function cljs$tools$reader$impl$commons$match_int(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.int_pattern,s));
if(!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2))) == null))){
return (0);
} else {
var negate_QMARK_ = ("-" === (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1))));
var a = ((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((3)) : m.call(null,(3))),(10)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))),(16)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((5)) : m.call(null,(5))),(8)], null):((!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))) == null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((7)) : m.call(null,(7))),(function (){var G__13351 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((6)) : m.call(null,(6)));
return parseInt(G__13351);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null)
))));
var n = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((0)) : a.call(null,(0)));
if((n == null)){
return null;
} else {
var bn = (function (){var G__13352 = n;
var G__13353 = (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1)));
return parseInt(G__13352,G__13353);
})();
var bn__$1 = ((negate_QMARK_)?((-1) * bn):bn);
if(cljs.core.truth_(isNaN(bn__$1))){
return null;
} else {
return bn__$1;
}
}
}
});
cljs.tools.reader.impl.commons.match_ratio = (function cljs$tools$reader$impl$commons$match_ratio(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.ratio_pattern,s));
var numerator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
var denominator = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((2)) : m.call(null,(2)));
var numerator__$1 = (cljs.core.truth_(cljs.core.re_find(/^\+/,numerator))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(numerator,(1)):numerator);
return (parseInt(numerator__$1) / parseInt(denominator));
});
cljs.tools.reader.impl.commons.match_float = (function cljs$tools$reader$impl$commons$match_float(s){
var m = cljs.core.vec(cljs.core.re_find(cljs.tools.reader.impl.commons.float_pattern,s));
if(!(((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((4)) : m.call(null,(4))) == null))){
var G__13354 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)));
return parseFloat(G__13354);
} else {
return parseFloat(s);
}
});
cljs.tools.reader.impl.commons.matches_QMARK_ = (function cljs$tools$reader$impl$commons$matches_QMARK_(pattern,s){
var vec__13355 = cljs.core.re_find(pattern,s);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13355,(0),null);
return (match === s);
});
cljs.tools.reader.impl.commons.match_number = (function cljs$tools$reader$impl$commons$match_number(s){
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.int_pattern,s)){
return cljs.tools.reader.impl.commons.match_int(s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.float_pattern,s)){
return cljs.tools.reader.impl.commons.match_float(s);
} else {
if(cljs.tools.reader.impl.commons.matches_QMARK_(cljs.tools.reader.impl.commons.ratio_pattern,s)){
return cljs.tools.reader.impl.commons.match_ratio(s);
} else {
return null;
}
}
}
});
/**
 * Parses a string into a vector of the namespace and symbol
 */
cljs.tools.reader.impl.commons.parse_symbol = (function cljs$tools$reader$impl$commons$parse_symbol(token){
if((("" === token)) || (/:$/.test(token) === true) || (/^::/.test(token) === true)){
return null;
} else {
var ns_idx = token.indexOf("/");
var ns = (((ns_idx > (0)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(token,(0),ns_idx):null);
if(!((ns == null))){
var ns_idx__$1 = (ns_idx + (1));
if((ns_idx__$1 === cljs.core.count(token))){
return null;
} else {
var sym = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(token,ns_idx__$1);
if((!(cljs.tools.reader.impl.utils.numeric_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym,(0))))) && (!(("" === sym))) && (/:$/.test(ns) === false) && (((sym === "/")) || (((-1) === sym.indexOf("/"))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,sym], null);
} else {
return null;
}
}
} else {
if(((token === "/")) || (((-1) === token.indexOf("/")))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,token], null);
} else {
return null;
}
}
}
});
cljs.tools.reader.impl.commons.read_comment = (function cljs$tools$reader$impl$commons$read_comment(var_args){
var args__8944__auto__ = [];
var len__8937__auto___13360 = arguments.length;
var i__8938__auto___13361 = (0);
while(true){
if((i__8938__auto___13361 < len__8937__auto___13360)){
args__8944__auto__.push((arguments[i__8938__auto___13361]));

var G__13362 = (i__8938__auto___13361 + (1));
i__8938__auto___13361 = G__13362;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,_){
return cljs.tools.reader.impl.commons.skip_line(rdr);
});

cljs.tools.reader.impl.commons.read_comment.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.commons.read_comment.cljs$lang$applyTo = (function (seq13358){
var G__13359 = cljs.core.first(seq13358);
var seq13358__$1 = cljs.core.next(seq13358);
return cljs.tools.reader.impl.commons.read_comment.cljs$core$IFn$_invoke$arity$variadic(G__13359,seq13358__$1);
});

cljs.tools.reader.impl.commons.throwing_reader = (function cljs$tools$reader$impl$commons$throwing_reader(msg){
return (function() { 
var G__13363__delegate = function (rdr,_){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
};
var G__13363 = function (rdr,var_args){
var _ = null;
if (arguments.length > 1) {
var G__13364__i = 0, G__13364__a = new Array(arguments.length -  1);
while (G__13364__i < G__13364__a.length) {G__13364__a[G__13364__i] = arguments[G__13364__i + 1]; ++G__13364__i;}
  _ = new cljs.core.IndexedSeq(G__13364__a,0,null);
} 
return G__13363__delegate.call(this,rdr,_);};
G__13363.cljs$lang$maxFixedArity = 1;
G__13363.cljs$lang$applyTo = (function (arglist__13365){
var rdr = cljs.core.first(arglist__13365);
var _ = cljs.core.rest(arglist__13365);
return G__13363__delegate(rdr,_);
});
G__13363.cljs$core$IFn$_invoke$arity$variadic = G__13363__delegate;
return G__13363;
})()
;
});
