// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16460){
var vec__16461 = p__16460;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16461,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16461,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__16464 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16464,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16468 = arguments.length;
switch (G__16468) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8129__auto__ = cljs.core.count(a);
var y__8130__auto__ = cljs.core.count(b);
return ((x__8129__auto__ > y__8130__auto__) ? x__8129__auto__ : y__8130__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__8462__auto__ = (((x == null))?null:x);
var m__8463__auto__ = (clojure.data.equality_partition[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__8463__auto__.call(null,x));
} else {
var m__8463__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__8463__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null)))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__8462__auto__ = (((a == null))?null:a);
var m__8463__auto__ = (clojure.data.diff_similar[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__8463__auto__.call(null,a,b));
} else {
var m__8463__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__8463__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__16470_16494 = clojure.data.equality_partition;
var G__16471_16495 = "null";
var G__16472_16496 = ((function (G__16470_16494,G__16471_16495){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16470_16494,G__16471_16495))
;
goog.object.set(G__16470_16494,G__16471_16495,G__16472_16496);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16473_16497 = clojure.data.equality_partition;
var G__16474_16498 = "string";
var G__16475_16499 = ((function (G__16473_16497,G__16474_16498){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16473_16497,G__16474_16498))
;
goog.object.set(G__16473_16497,G__16474_16498,G__16475_16499);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16476_16500 = clojure.data.equality_partition;
var G__16477_16501 = "number";
var G__16478_16502 = ((function (G__16476_16500,G__16477_16501){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16476_16500,G__16477_16501))
;
goog.object.set(G__16476_16500,G__16477_16501,G__16478_16502);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16479_16503 = clojure.data.equality_partition;
var G__16480_16504 = "array";
var G__16481_16505 = ((function (G__16479_16503,G__16480_16504){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__16479_16503,G__16480_16504))
;
goog.object.set(G__16479_16503,G__16480_16504,G__16481_16505);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16482_16506 = clojure.data.equality_partition;
var G__16483_16507 = "function";
var G__16484_16508 = ((function (G__16482_16506,G__16483_16507){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16482_16506,G__16483_16507))
;
goog.object.set(G__16482_16506,G__16483_16507,G__16484_16508);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16485_16509 = clojure.data.equality_partition;
var G__16486_16510 = "boolean";
var G__16487_16511 = ((function (G__16485_16509,G__16486_16510){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16485_16509,G__16486_16510))
;
goog.object.set(G__16485_16509,G__16486_16510,G__16487_16511);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16488_16512 = clojure.data.equality_partition;
var G__16489_16513 = "_";
var G__16490_16514 = ((function (G__16488_16512,G__16489_16513){
return (function (x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__16488_16512,G__16489_16513))
;
goog.object.set(G__16488_16512,G__16489_16513,G__16490_16514);
goog.object.set(clojure.data.Diff,"null",true);

var G__16515_16539 = clojure.data.diff_similar;
var G__16516_16540 = "null";
var G__16517_16541 = ((function (G__16515_16539,G__16516_16540){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16515_16539,G__16516_16540))
;
goog.object.set(G__16515_16539,G__16516_16540,G__16517_16541);

goog.object.set(clojure.data.Diff,"string",true);

var G__16518_16542 = clojure.data.diff_similar;
var G__16519_16543 = "string";
var G__16520_16544 = ((function (G__16518_16542,G__16519_16543){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16518_16542,G__16519_16543))
;
goog.object.set(G__16518_16542,G__16519_16543,G__16520_16544);

goog.object.set(clojure.data.Diff,"number",true);

var G__16521_16545 = clojure.data.diff_similar;
var G__16522_16546 = "number";
var G__16523_16547 = ((function (G__16521_16545,G__16522_16546){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16521_16545,G__16522_16546))
;
goog.object.set(G__16521_16545,G__16522_16546,G__16523_16547);

goog.object.set(clojure.data.Diff,"array",true);

var G__16524_16548 = clojure.data.diff_similar;
var G__16525_16549 = "array";
var G__16526_16550 = ((function (G__16524_16548,G__16525_16549){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16524_16548,G__16525_16549))
;
goog.object.set(G__16524_16548,G__16525_16549,G__16526_16550);

goog.object.set(clojure.data.Diff,"function",true);

var G__16527_16551 = clojure.data.diff_similar;
var G__16528_16552 = "function";
var G__16529_16553 = ((function (G__16527_16551,G__16528_16552){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16527_16551,G__16528_16552))
;
goog.object.set(G__16527_16551,G__16528_16552,G__16529_16553);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16530_16554 = clojure.data.diff_similar;
var G__16531_16555 = "boolean";
var G__16532_16556 = ((function (G__16530_16554,G__16531_16555){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16530_16554,G__16531_16555))
;
goog.object.set(G__16530_16554,G__16531_16555,G__16532_16556);

goog.object.set(clojure.data.Diff,"_",true);

var G__16533_16557 = clojure.data.diff_similar;
var G__16534_16558 = "_";
var G__16535_16559 = ((function (G__16533_16557,G__16534_16558){
return (function (a,b){
var fexpr__16537 = (function (){var G__16538 = clojure.data.equality_partition(a);
var G__16538__$1 = (((G__16538 instanceof cljs.core.Keyword))?G__16538.fqn:null);
switch (G__16538__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16538__$1)].join('')));

}
})();
return (fexpr__16537.cljs$core$IFn$_invoke$arity$2 ? fexpr__16537.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16537.call(null,a,b));
});})(G__16533_16557,G__16534_16558))
;
goog.object.set(G__16533_16557,G__16534_16558,G__16535_16559);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
