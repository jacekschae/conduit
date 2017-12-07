// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16895){
var vec__16896 = p__16895;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16896,(1),null);
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
var vec__16899 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16899,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16903 = arguments.length;
switch (G__16903) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__8536__auto__ = cljs.core.count(a);
var y__8537__auto__ = cljs.core.count(b);
return ((x__8536__auto__ > y__8537__auto__) ? x__8536__auto__ : y__8537__auto__);
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
var x__8869__auto__ = (((x == null))?null:x);
var m__8870__auto__ = (clojure.data.equality_partition[goog.typeOf(x__8869__auto__)]);
if(!((m__8870__auto__ == null))){
return (m__8870__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8870__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__8870__auto__.call(null,x));
} else {
var m__8870__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__8870__auto____$1 == null))){
return (m__8870__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8870__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__8870__auto____$1.call(null,x));
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
var x__8869__auto__ = (((a == null))?null:a);
var m__8870__auto__ = (clojure.data.diff_similar[goog.typeOf(x__8869__auto__)]);
if(!((m__8870__auto__ == null))){
return (m__8870__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8870__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__8870__auto__.call(null,a,b));
} else {
var m__8870__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__8870__auto____$1 == null))){
return (m__8870__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8870__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__8870__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__16905_16929 = clojure.data.equality_partition;
var G__16906_16930 = "null";
var G__16907_16931 = ((function (G__16905_16929,G__16906_16930){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16905_16929,G__16906_16930))
;
goog.object.set(G__16905_16929,G__16906_16930,G__16907_16931);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16908_16932 = clojure.data.equality_partition;
var G__16909_16933 = "string";
var G__16910_16934 = ((function (G__16908_16932,G__16909_16933){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16908_16932,G__16909_16933))
;
goog.object.set(G__16908_16932,G__16909_16933,G__16910_16934);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16911_16935 = clojure.data.equality_partition;
var G__16912_16936 = "number";
var G__16913_16937 = ((function (G__16911_16935,G__16912_16936){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16911_16935,G__16912_16936))
;
goog.object.set(G__16911_16935,G__16912_16936,G__16913_16937);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16914_16938 = clojure.data.equality_partition;
var G__16915_16939 = "array";
var G__16916_16940 = ((function (G__16914_16938,G__16915_16939){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__16914_16938,G__16915_16939))
;
goog.object.set(G__16914_16938,G__16915_16939,G__16916_16940);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16917_16941 = clojure.data.equality_partition;
var G__16918_16942 = "function";
var G__16919_16943 = ((function (G__16917_16941,G__16918_16942){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16917_16941,G__16918_16942))
;
goog.object.set(G__16917_16941,G__16918_16942,G__16919_16943);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16920_16944 = clojure.data.equality_partition;
var G__16921_16945 = "boolean";
var G__16922_16946 = ((function (G__16920_16944,G__16921_16945){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__16920_16944,G__16921_16945))
;
goog.object.set(G__16920_16944,G__16921_16945,G__16922_16946);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16923_16947 = clojure.data.equality_partition;
var G__16924_16948 = "_";
var G__16925_16949 = ((function (G__16923_16947,G__16924_16948){
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
});})(G__16923_16947,G__16924_16948))
;
goog.object.set(G__16923_16947,G__16924_16948,G__16925_16949);
goog.object.set(clojure.data.Diff,"null",true);

var G__16950_16974 = clojure.data.diff_similar;
var G__16951_16975 = "null";
var G__16952_16976 = ((function (G__16950_16974,G__16951_16975){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16950_16974,G__16951_16975))
;
goog.object.set(G__16950_16974,G__16951_16975,G__16952_16976);

goog.object.set(clojure.data.Diff,"string",true);

var G__16953_16977 = clojure.data.diff_similar;
var G__16954_16978 = "string";
var G__16955_16979 = ((function (G__16953_16977,G__16954_16978){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16953_16977,G__16954_16978))
;
goog.object.set(G__16953_16977,G__16954_16978,G__16955_16979);

goog.object.set(clojure.data.Diff,"number",true);

var G__16956_16980 = clojure.data.diff_similar;
var G__16957_16981 = "number";
var G__16958_16982 = ((function (G__16956_16980,G__16957_16981){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16956_16980,G__16957_16981))
;
goog.object.set(G__16956_16980,G__16957_16981,G__16958_16982);

goog.object.set(clojure.data.Diff,"array",true);

var G__16959_16983 = clojure.data.diff_similar;
var G__16960_16984 = "array";
var G__16961_16985 = ((function (G__16959_16983,G__16960_16984){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16959_16983,G__16960_16984))
;
goog.object.set(G__16959_16983,G__16960_16984,G__16961_16985);

goog.object.set(clojure.data.Diff,"function",true);

var G__16962_16986 = clojure.data.diff_similar;
var G__16963_16987 = "function";
var G__16964_16988 = ((function (G__16962_16986,G__16963_16987){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16962_16986,G__16963_16987))
;
goog.object.set(G__16962_16986,G__16963_16987,G__16964_16988);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16965_16989 = clojure.data.diff_similar;
var G__16966_16990 = "boolean";
var G__16967_16991 = ((function (G__16965_16989,G__16966_16990){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16965_16989,G__16966_16990))
;
goog.object.set(G__16965_16989,G__16966_16990,G__16967_16991);

goog.object.set(clojure.data.Diff,"_",true);

var G__16968_16992 = clojure.data.diff_similar;
var G__16969_16993 = "_";
var G__16970_16994 = ((function (G__16968_16992,G__16969_16993){
return (function (a,b){
var fexpr__16972 = (function (){var G__16973 = clojure.data.equality_partition(a);
var G__16973__$1 = (((G__16973 instanceof cljs.core.Keyword))?G__16973.fqn:null);
switch (G__16973__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16973__$1)].join('')));

}
})();
return (fexpr__16972.cljs$core$IFn$_invoke$arity$2 ? fexpr__16972.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16972.call(null,a,b));
});})(G__16968_16992,G__16969_16993))
;
goog.object.set(G__16968_16992,G__16969_16993,G__16970_16994);
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
