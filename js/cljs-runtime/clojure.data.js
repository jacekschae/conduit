goog.provide('clojure.data');
goog.require('cljs.core');
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25948){
var vec__25949 = p__25948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25949,(1),null);
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
var vec__25960 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25960,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25970 = arguments.length;
switch (G__25970) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
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
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
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
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26014_26050 = clojure.data.equality_partition;
var G__26015_26051 = "null";
var G__26016_26052 = ((function (G__26014_26050,G__26015_26051){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26014_26050,G__26015_26051))
;
goog.object.set(G__26014_26050,G__26015_26051,G__26016_26052);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26019_26054 = clojure.data.equality_partition;
var G__26020_26055 = "string";
var G__26021_26056 = ((function (G__26019_26054,G__26020_26055){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26019_26054,G__26020_26055))
;
goog.object.set(G__26019_26054,G__26020_26055,G__26021_26056);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26023_26058 = clojure.data.equality_partition;
var G__26024_26059 = "number";
var G__26025_26060 = ((function (G__26023_26058,G__26024_26059){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26023_26058,G__26024_26059))
;
goog.object.set(G__26023_26058,G__26024_26059,G__26025_26060);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26028_26063 = clojure.data.equality_partition;
var G__26029_26064 = "array";
var G__26030_26065 = ((function (G__26028_26063,G__26029_26064){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26028_26063,G__26029_26064))
;
goog.object.set(G__26028_26063,G__26029_26064,G__26030_26065);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26032_26067 = clojure.data.equality_partition;
var G__26033_26068 = "function";
var G__26034_26069 = ((function (G__26032_26067,G__26033_26068){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26032_26067,G__26033_26068))
;
goog.object.set(G__26032_26067,G__26033_26068,G__26034_26069);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26038_26072 = clojure.data.equality_partition;
var G__26039_26073 = "boolean";
var G__26040_26074 = ((function (G__26038_26072,G__26039_26073){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26038_26072,G__26039_26073))
;
goog.object.set(G__26038_26072,G__26039_26073,G__26040_26074);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26042_26075 = clojure.data.equality_partition;
var G__26043_26076 = "_";
var G__26044_26077 = ((function (G__26042_26075,G__26043_26076){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26042_26075,G__26043_26076))
;
goog.object.set(G__26042_26075,G__26043_26076,G__26044_26077);
goog.object.set(clojure.data.Diff,"null",true);

var G__26084_26133 = clojure.data.diff_similar;
var G__26085_26134 = "null";
var G__26086_26135 = ((function (G__26084_26133,G__26085_26134){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26084_26133,G__26085_26134))
;
goog.object.set(G__26084_26133,G__26085_26134,G__26086_26135);

goog.object.set(clojure.data.Diff,"string",true);

var G__26088_26137 = clojure.data.diff_similar;
var G__26089_26138 = "string";
var G__26090_26139 = ((function (G__26088_26137,G__26089_26138){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26088_26137,G__26089_26138))
;
goog.object.set(G__26088_26137,G__26089_26138,G__26090_26139);

goog.object.set(clojure.data.Diff,"number",true);

var G__26093_26142 = clojure.data.diff_similar;
var G__26094_26143 = "number";
var G__26095_26144 = ((function (G__26093_26142,G__26094_26143){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26093_26142,G__26094_26143))
;
goog.object.set(G__26093_26142,G__26094_26143,G__26095_26144);

goog.object.set(clojure.data.Diff,"array",true);

var G__26096_26147 = clojure.data.diff_similar;
var G__26097_26148 = "array";
var G__26098_26149 = ((function (G__26096_26147,G__26097_26148){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26096_26147,G__26097_26148))
;
goog.object.set(G__26096_26147,G__26097_26148,G__26098_26149);

goog.object.set(clojure.data.Diff,"function",true);

var G__26099_26151 = clojure.data.diff_similar;
var G__26100_26152 = "function";
var G__26101_26153 = ((function (G__26099_26151,G__26100_26152){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26099_26151,G__26100_26152))
;
goog.object.set(G__26099_26151,G__26100_26152,G__26101_26153);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26102_26156 = clojure.data.diff_similar;
var G__26103_26157 = "boolean";
var G__26104_26158 = ((function (G__26102_26156,G__26103_26157){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26102_26156,G__26103_26157))
;
goog.object.set(G__26102_26156,G__26103_26157,G__26104_26158);

goog.object.set(clojure.data.Diff,"_",true);

var G__26107_26160 = clojure.data.diff_similar;
var G__26108_26161 = "_";
var G__26109_26162 = ((function (G__26107_26160,G__26108_26161){
return (function (a,b){
var fexpr__26129 = (function (){var G__26132 = clojure.data.equality_partition(a);
var G__26132__$1 = (((G__26132 instanceof cljs.core.Keyword))?G__26132.fqn:null);
switch (G__26132__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26132__$1)].join('')));

}
})();
return (fexpr__26129.cljs$core$IFn$_invoke$arity$2 ? fexpr__26129.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26129.call(null,a,b));
});})(G__26107_26160,G__26108_26161))
;
goog.object.set(G__26107_26160,G__26108_26161,G__26109_26162);
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

//# sourceMappingURL=clojure.data.js.map
