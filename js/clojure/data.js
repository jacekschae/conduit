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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16266){
var vec__16267 = p__16266;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16267,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16267,(1),null);
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
var vec__16270 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16270,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16274 = arguments.length;
switch (G__16274) {
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

var G__16276_16300 = clojure.data.equality_partition;
var G__16277_16301 = "null";
var G__16278_16302 = ((function (G__16276_16300,G__16277_16301){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16276_16300,G__16277_16301))
;
goog.object.set(G__16276_16300,G__16277_16301,G__16278_16302);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16279_16303 = clojure.data.equality_partition;
var G__16280_16304 = "string";
var G__16281_16305 = ((function (G__16279_16303,G__16280_16304){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16279_16303,G__16280_16304))
;
goog.object.set(G__16279_16303,G__16280_16304,G__16281_16305);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16282_16306 = clojure.data.equality_partition;
var G__16283_16307 = "number";
var G__16284_16308 = ((function (G__16282_16306,G__16283_16307){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16282_16306,G__16283_16307))
;
goog.object.set(G__16282_16306,G__16283_16307,G__16284_16308);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16285_16309 = clojure.data.equality_partition;
var G__16286_16310 = "array";
var G__16287_16311 = ((function (G__16285_16309,G__16286_16310){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__16285_16309,G__16286_16310))
;
goog.object.set(G__16285_16309,G__16286_16310,G__16287_16311);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16288_16312 = clojure.data.equality_partition;
var G__16289_16313 = "function";
var G__16290_16314 = ((function (G__16288_16312,G__16289_16313){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16288_16312,G__16289_16313))
;
goog.object.set(G__16288_16312,G__16289_16313,G__16290_16314);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16291_16315 = clojure.data.equality_partition;
var G__16292_16316 = "boolean";
var G__16293_16317 = ((function (G__16291_16315,G__16292_16316){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16291_16315,G__16292_16316))
;
goog.object.set(G__16291_16315,G__16292_16316,G__16293_16317);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16294_16318 = clojure.data.equality_partition;
var G__16295_16319 = "_";
var G__16296_16320 = ((function (G__16294_16318,G__16295_16319){
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
});})(G__16294_16318,G__16295_16319))
;
goog.object.set(G__16294_16318,G__16295_16319,G__16296_16320);
goog.object.set(clojure.data.Diff,"null",true);

var G__16321_16345 = clojure.data.diff_similar;
var G__16322_16346 = "null";
var G__16323_16347 = ((function (G__16321_16345,G__16322_16346){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16321_16345,G__16322_16346))
;
goog.object.set(G__16321_16345,G__16322_16346,G__16323_16347);

goog.object.set(clojure.data.Diff,"string",true);

var G__16324_16348 = clojure.data.diff_similar;
var G__16325_16349 = "string";
var G__16326_16350 = ((function (G__16324_16348,G__16325_16349){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16324_16348,G__16325_16349))
;
goog.object.set(G__16324_16348,G__16325_16349,G__16326_16350);

goog.object.set(clojure.data.Diff,"number",true);

var G__16327_16351 = clojure.data.diff_similar;
var G__16328_16352 = "number";
var G__16329_16353 = ((function (G__16327_16351,G__16328_16352){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16327_16351,G__16328_16352))
;
goog.object.set(G__16327_16351,G__16328_16352,G__16329_16353);

goog.object.set(clojure.data.Diff,"array",true);

var G__16330_16354 = clojure.data.diff_similar;
var G__16331_16355 = "array";
var G__16332_16356 = ((function (G__16330_16354,G__16331_16355){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16330_16354,G__16331_16355))
;
goog.object.set(G__16330_16354,G__16331_16355,G__16332_16356);

goog.object.set(clojure.data.Diff,"function",true);

var G__16333_16357 = clojure.data.diff_similar;
var G__16334_16358 = "function";
var G__16335_16359 = ((function (G__16333_16357,G__16334_16358){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16333_16357,G__16334_16358))
;
goog.object.set(G__16333_16357,G__16334_16358,G__16335_16359);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16336_16360 = clojure.data.diff_similar;
var G__16337_16361 = "boolean";
var G__16338_16362 = ((function (G__16336_16360,G__16337_16361){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16336_16360,G__16337_16361))
;
goog.object.set(G__16336_16360,G__16337_16361,G__16338_16362);

goog.object.set(clojure.data.Diff,"_",true);

var G__16339_16363 = clojure.data.diff_similar;
var G__16340_16364 = "_";
var G__16341_16365 = ((function (G__16339_16363,G__16340_16364){
return (function (a,b){
var fexpr__16343 = (function (){var G__16344 = clojure.data.equality_partition(a);
var G__16344__$1 = (((G__16344 instanceof cljs.core.Keyword))?G__16344.fqn:null);
switch (G__16344__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16344__$1)].join('')));

}
})();
return (fexpr__16343.cljs$core$IFn$_invoke$arity$2 ? fexpr__16343.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16343.call(null,a,b));
});})(G__16339_16363,G__16340_16364))
;
goog.object.set(G__16339_16363,G__16340_16364,G__16341_16365);
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
