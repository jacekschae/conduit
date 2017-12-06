// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32416 = arguments.length;
var i__29657__auto___32417 = (0);
while(true){
if((i__29657__auto___32417 < len__29656__auto___32416)){
args__29663__auto__.push((arguments[i__29657__auto___32417]));

var G__32418 = (i__29657__auto___32417 + (1));
i__29657__auto___32417 = G__32418;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq32415){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32415));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32420 = arguments.length;
var i__29657__auto___32421 = (0);
while(true){
if((i__29657__auto___32421 < len__29656__auto___32420)){
args__29663__auto__.push((arguments[i__29657__auto___32421]));

var G__32422 = (i__29657__auto___32421 + (1));
i__29657__auto___32421 = G__32422;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq32419){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32419));
});

var g_QMARK__32423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_32424 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__32423){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__32423))
,null));
var mkg_32425 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__32423,g_32424){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__32423,g_32424))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__32423,g_32424,mkg_32425){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32423).call(null,x);
});})(g_QMARK__32423,g_32424,mkg_32425))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__32423,g_32424,mkg_32425){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_32425).call(null,gfn);
});})(g_QMARK__32423,g_32424,mkg_32425))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__32423,g_32424,mkg_32425){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_32424).call(null,generator);
});})(g_QMARK__32423,g_32424,mkg_32425))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30811__auto___32445 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30811__auto___32445){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32446 = arguments.length;
var i__29657__auto___32447 = (0);
while(true){
if((i__29657__auto___32447 < len__29656__auto___32446)){
args__29663__auto__.push((arguments[i__29657__auto___32447]));

var G__32448 = (i__29657__auto___32447 + (1));
i__29657__auto___32447 = G__32448;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32445))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32445){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32445),args);
});})(g__30811__auto___32445))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30811__auto___32445){
return (function (seq32426){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32426));
});})(g__30811__auto___32445))
;


var g__30811__auto___32449 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30811__auto___32449){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32450 = arguments.length;
var i__29657__auto___32451 = (0);
while(true){
if((i__29657__auto___32451 < len__29656__auto___32450)){
args__29663__auto__.push((arguments[i__29657__auto___32451]));

var G__32452 = (i__29657__auto___32451 + (1));
i__29657__auto___32451 = G__32452;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32449))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32449),args);
});})(g__30811__auto___32449))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30811__auto___32449){
return (function (seq32427){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32427));
});})(g__30811__auto___32449))
;


var g__30811__auto___32453 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30811__auto___32453){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32454 = arguments.length;
var i__29657__auto___32455 = (0);
while(true){
if((i__29657__auto___32455 < len__29656__auto___32454)){
args__29663__auto__.push((arguments[i__29657__auto___32455]));

var G__32456 = (i__29657__auto___32455 + (1));
i__29657__auto___32455 = G__32456;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32453))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32453){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32453),args);
});})(g__30811__auto___32453))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30811__auto___32453){
return (function (seq32428){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32428));
});})(g__30811__auto___32453))
;


var g__30811__auto___32457 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30811__auto___32457){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32458 = arguments.length;
var i__29657__auto___32459 = (0);
while(true){
if((i__29657__auto___32459 < len__29656__auto___32458)){
args__29663__auto__.push((arguments[i__29657__auto___32459]));

var G__32460 = (i__29657__auto___32459 + (1));
i__29657__auto___32459 = G__32460;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32457))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32457){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32457),args);
});})(g__30811__auto___32457))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30811__auto___32457){
return (function (seq32429){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32429));
});})(g__30811__auto___32457))
;


var g__30811__auto___32461 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30811__auto___32461){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32462 = arguments.length;
var i__29657__auto___32463 = (0);
while(true){
if((i__29657__auto___32463 < len__29656__auto___32462)){
args__29663__auto__.push((arguments[i__29657__auto___32463]));

var G__32464 = (i__29657__auto___32463 + (1));
i__29657__auto___32463 = G__32464;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32461))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32461){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32461),args);
});})(g__30811__auto___32461))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30811__auto___32461){
return (function (seq32430){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32430));
});})(g__30811__auto___32461))
;


var g__30811__auto___32465 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30811__auto___32465){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32466 = arguments.length;
var i__29657__auto___32467 = (0);
while(true){
if((i__29657__auto___32467 < len__29656__auto___32466)){
args__29663__auto__.push((arguments[i__29657__auto___32467]));

var G__32468 = (i__29657__auto___32467 + (1));
i__29657__auto___32467 = G__32468;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32465))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32465),args);
});})(g__30811__auto___32465))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30811__auto___32465){
return (function (seq32431){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32431));
});})(g__30811__auto___32465))
;


var g__30811__auto___32469 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30811__auto___32469){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32470 = arguments.length;
var i__29657__auto___32471 = (0);
while(true){
if((i__29657__auto___32471 < len__29656__auto___32470)){
args__29663__auto__.push((arguments[i__29657__auto___32471]));

var G__32472 = (i__29657__auto___32471 + (1));
i__29657__auto___32471 = G__32472;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32469))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32469){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32469),args);
});})(g__30811__auto___32469))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30811__auto___32469){
return (function (seq32432){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32432));
});})(g__30811__auto___32469))
;


var g__30811__auto___32473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30811__auto___32473){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32474 = arguments.length;
var i__29657__auto___32475 = (0);
while(true){
if((i__29657__auto___32475 < len__29656__auto___32474)){
args__29663__auto__.push((arguments[i__29657__auto___32475]));

var G__32476 = (i__29657__auto___32475 + (1));
i__29657__auto___32475 = G__32476;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32473))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32473),args);
});})(g__30811__auto___32473))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30811__auto___32473){
return (function (seq32433){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32433));
});})(g__30811__auto___32473))
;


var g__30811__auto___32477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30811__auto___32477){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32478 = arguments.length;
var i__29657__auto___32479 = (0);
while(true){
if((i__29657__auto___32479 < len__29656__auto___32478)){
args__29663__auto__.push((arguments[i__29657__auto___32479]));

var G__32480 = (i__29657__auto___32479 + (1));
i__29657__auto___32479 = G__32480;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32477))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32477),args);
});})(g__30811__auto___32477))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30811__auto___32477){
return (function (seq32434){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32434));
});})(g__30811__auto___32477))
;


var g__30811__auto___32481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30811__auto___32481){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32482 = arguments.length;
var i__29657__auto___32483 = (0);
while(true){
if((i__29657__auto___32483 < len__29656__auto___32482)){
args__29663__auto__.push((arguments[i__29657__auto___32483]));

var G__32484 = (i__29657__auto___32483 + (1));
i__29657__auto___32483 = G__32484;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32481))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32481),args);
});})(g__30811__auto___32481))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30811__auto___32481){
return (function (seq32435){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32435));
});})(g__30811__auto___32481))
;


var g__30811__auto___32485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30811__auto___32485){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32486 = arguments.length;
var i__29657__auto___32487 = (0);
while(true){
if((i__29657__auto___32487 < len__29656__auto___32486)){
args__29663__auto__.push((arguments[i__29657__auto___32487]));

var G__32488 = (i__29657__auto___32487 + (1));
i__29657__auto___32487 = G__32488;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32485))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32485),args);
});})(g__30811__auto___32485))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30811__auto___32485){
return (function (seq32436){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32436));
});})(g__30811__auto___32485))
;


var g__30811__auto___32489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30811__auto___32489){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32490 = arguments.length;
var i__29657__auto___32491 = (0);
while(true){
if((i__29657__auto___32491 < len__29656__auto___32490)){
args__29663__auto__.push((arguments[i__29657__auto___32491]));

var G__32492 = (i__29657__auto___32491 + (1));
i__29657__auto___32491 = G__32492;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32489))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32489),args);
});})(g__30811__auto___32489))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30811__auto___32489){
return (function (seq32437){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32437));
});})(g__30811__auto___32489))
;


var g__30811__auto___32493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30811__auto___32493){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32494 = arguments.length;
var i__29657__auto___32495 = (0);
while(true){
if((i__29657__auto___32495 < len__29656__auto___32494)){
args__29663__auto__.push((arguments[i__29657__auto___32495]));

var G__32496 = (i__29657__auto___32495 + (1));
i__29657__auto___32495 = G__32496;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32493))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32493),args);
});})(g__30811__auto___32493))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30811__auto___32493){
return (function (seq32438){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32438));
});})(g__30811__auto___32493))
;


var g__30811__auto___32497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30811__auto___32497){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32498 = arguments.length;
var i__29657__auto___32499 = (0);
while(true){
if((i__29657__auto___32499 < len__29656__auto___32498)){
args__29663__auto__.push((arguments[i__29657__auto___32499]));

var G__32500 = (i__29657__auto___32499 + (1));
i__29657__auto___32499 = G__32500;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32497))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32497),args);
});})(g__30811__auto___32497))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30811__auto___32497){
return (function (seq32439){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32439));
});})(g__30811__auto___32497))
;


var g__30811__auto___32501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30811__auto___32501){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32502 = arguments.length;
var i__29657__auto___32503 = (0);
while(true){
if((i__29657__auto___32503 < len__29656__auto___32502)){
args__29663__auto__.push((arguments[i__29657__auto___32503]));

var G__32504 = (i__29657__auto___32503 + (1));
i__29657__auto___32503 = G__32504;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32501))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32501),args);
});})(g__30811__auto___32501))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30811__auto___32501){
return (function (seq32440){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32440));
});})(g__30811__auto___32501))
;


var g__30811__auto___32505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30811__auto___32505){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32506 = arguments.length;
var i__29657__auto___32507 = (0);
while(true){
if((i__29657__auto___32507 < len__29656__auto___32506)){
args__29663__auto__.push((arguments[i__29657__auto___32507]));

var G__32508 = (i__29657__auto___32507 + (1));
i__29657__auto___32507 = G__32508;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32505))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32505),args);
});})(g__30811__auto___32505))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30811__auto___32505){
return (function (seq32441){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32441));
});})(g__30811__auto___32505))
;


var g__30811__auto___32509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30811__auto___32509){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32510 = arguments.length;
var i__29657__auto___32511 = (0);
while(true){
if((i__29657__auto___32511 < len__29656__auto___32510)){
args__29663__auto__.push((arguments[i__29657__auto___32511]));

var G__32512 = (i__29657__auto___32511 + (1));
i__29657__auto___32511 = G__32512;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32509))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32509),args);
});})(g__30811__auto___32509))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30811__auto___32509){
return (function (seq32442){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32442));
});})(g__30811__auto___32509))
;


var g__30811__auto___32513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30811__auto___32513){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32514 = arguments.length;
var i__29657__auto___32515 = (0);
while(true){
if((i__29657__auto___32515 < len__29656__auto___32514)){
args__29663__auto__.push((arguments[i__29657__auto___32515]));

var G__32516 = (i__29657__auto___32515 + (1));
i__29657__auto___32515 = G__32516;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32513))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32513),args);
});})(g__30811__auto___32513))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30811__auto___32513){
return (function (seq32443){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32443));
});})(g__30811__auto___32513))
;


var g__30811__auto___32517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30811__auto___32517){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32518 = arguments.length;
var i__29657__auto___32519 = (0);
while(true){
if((i__29657__auto___32519 < len__29656__auto___32518)){
args__29663__auto__.push((arguments[i__29657__auto___32519]));

var G__32520 = (i__29657__auto___32519 + (1));
i__29657__auto___32519 = G__32520;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30811__auto___32517))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30811__auto___32517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30811__auto___32517),args);
});})(g__30811__auto___32517))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30811__auto___32517){
return (function (seq32444){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32444));
});})(g__30811__auto___32517))
;

var g__30824__auto___32542 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30824__auto___32542){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32543 = arguments.length;
var i__29657__auto___32544 = (0);
while(true){
if((i__29657__auto___32544 < len__29656__auto___32543)){
args__29663__auto__.push((arguments[i__29657__auto___32544]));

var G__32545 = (i__29657__auto___32544 + (1));
i__29657__auto___32544 = G__32545;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32542))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32542){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32542);
});})(g__30824__auto___32542))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30824__auto___32542){
return (function (seq32521){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32521));
});})(g__30824__auto___32542))
;


var g__30824__auto___32546 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30824__auto___32546){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32547 = arguments.length;
var i__29657__auto___32548 = (0);
while(true){
if((i__29657__auto___32548 < len__29656__auto___32547)){
args__29663__auto__.push((arguments[i__29657__auto___32548]));

var G__32549 = (i__29657__auto___32548 + (1));
i__29657__auto___32548 = G__32549;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32546))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32546){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32546);
});})(g__30824__auto___32546))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30824__auto___32546){
return (function (seq32522){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32522));
});})(g__30824__auto___32546))
;


var g__30824__auto___32550 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30824__auto___32550){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32551 = arguments.length;
var i__29657__auto___32552 = (0);
while(true){
if((i__29657__auto___32552 < len__29656__auto___32551)){
args__29663__auto__.push((arguments[i__29657__auto___32552]));

var G__32553 = (i__29657__auto___32552 + (1));
i__29657__auto___32552 = G__32553;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32550))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32550){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32550);
});})(g__30824__auto___32550))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30824__auto___32550){
return (function (seq32523){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32523));
});})(g__30824__auto___32550))
;


var g__30824__auto___32554 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30824__auto___32554){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32555 = arguments.length;
var i__29657__auto___32556 = (0);
while(true){
if((i__29657__auto___32556 < len__29656__auto___32555)){
args__29663__auto__.push((arguments[i__29657__auto___32556]));

var G__32557 = (i__29657__auto___32556 + (1));
i__29657__auto___32556 = G__32557;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32554))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32554){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32554);
});})(g__30824__auto___32554))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30824__auto___32554){
return (function (seq32524){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32524));
});})(g__30824__auto___32554))
;


var g__30824__auto___32558 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30824__auto___32558){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32559 = arguments.length;
var i__29657__auto___32560 = (0);
while(true){
if((i__29657__auto___32560 < len__29656__auto___32559)){
args__29663__auto__.push((arguments[i__29657__auto___32560]));

var G__32561 = (i__29657__auto___32560 + (1));
i__29657__auto___32560 = G__32561;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32558))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32558){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32558);
});})(g__30824__auto___32558))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30824__auto___32558){
return (function (seq32525){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32525));
});})(g__30824__auto___32558))
;


var g__30824__auto___32562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30824__auto___32562){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32563 = arguments.length;
var i__29657__auto___32564 = (0);
while(true){
if((i__29657__auto___32564 < len__29656__auto___32563)){
args__29663__auto__.push((arguments[i__29657__auto___32564]));

var G__32565 = (i__29657__auto___32564 + (1));
i__29657__auto___32564 = G__32565;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32562))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32562){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32562);
});})(g__30824__auto___32562))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30824__auto___32562){
return (function (seq32526){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32526));
});})(g__30824__auto___32562))
;


var g__30824__auto___32566 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30824__auto___32566){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32567 = arguments.length;
var i__29657__auto___32568 = (0);
while(true){
if((i__29657__auto___32568 < len__29656__auto___32567)){
args__29663__auto__.push((arguments[i__29657__auto___32568]));

var G__32569 = (i__29657__auto___32568 + (1));
i__29657__auto___32568 = G__32569;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32566))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32566){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32566);
});})(g__30824__auto___32566))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30824__auto___32566){
return (function (seq32527){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32527));
});})(g__30824__auto___32566))
;


var g__30824__auto___32570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30824__auto___32570){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32571 = arguments.length;
var i__29657__auto___32572 = (0);
while(true){
if((i__29657__auto___32572 < len__29656__auto___32571)){
args__29663__auto__.push((arguments[i__29657__auto___32572]));

var G__32573 = (i__29657__auto___32572 + (1));
i__29657__auto___32572 = G__32573;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32570))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32570){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32570);
});})(g__30824__auto___32570))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30824__auto___32570){
return (function (seq32528){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32528));
});})(g__30824__auto___32570))
;


var g__30824__auto___32574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30824__auto___32574){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32575 = arguments.length;
var i__29657__auto___32576 = (0);
while(true){
if((i__29657__auto___32576 < len__29656__auto___32575)){
args__29663__auto__.push((arguments[i__29657__auto___32576]));

var G__32577 = (i__29657__auto___32576 + (1));
i__29657__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32574))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32574){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32574);
});})(g__30824__auto___32574))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30824__auto___32574){
return (function (seq32529){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32529));
});})(g__30824__auto___32574))
;


var g__30824__auto___32578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30824__auto___32578){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32579 = arguments.length;
var i__29657__auto___32580 = (0);
while(true){
if((i__29657__auto___32580 < len__29656__auto___32579)){
args__29663__auto__.push((arguments[i__29657__auto___32580]));

var G__32581 = (i__29657__auto___32580 + (1));
i__29657__auto___32580 = G__32581;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32578))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32578){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32578);
});})(g__30824__auto___32578))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30824__auto___32578){
return (function (seq32530){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32530));
});})(g__30824__auto___32578))
;


var g__30824__auto___32582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30824__auto___32582){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32583 = arguments.length;
var i__29657__auto___32584 = (0);
while(true){
if((i__29657__auto___32584 < len__29656__auto___32583)){
args__29663__auto__.push((arguments[i__29657__auto___32584]));

var G__32585 = (i__29657__auto___32584 + (1));
i__29657__auto___32584 = G__32585;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32582))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32582){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32582);
});})(g__30824__auto___32582))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30824__auto___32582){
return (function (seq32531){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32531));
});})(g__30824__auto___32582))
;


var g__30824__auto___32586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30824__auto___32586){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32587 = arguments.length;
var i__29657__auto___32588 = (0);
while(true){
if((i__29657__auto___32588 < len__29656__auto___32587)){
args__29663__auto__.push((arguments[i__29657__auto___32588]));

var G__32589 = (i__29657__auto___32588 + (1));
i__29657__auto___32588 = G__32589;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32586))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32586){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32586);
});})(g__30824__auto___32586))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30824__auto___32586){
return (function (seq32532){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32532));
});})(g__30824__auto___32586))
;


var g__30824__auto___32590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30824__auto___32590){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32591 = arguments.length;
var i__29657__auto___32592 = (0);
while(true){
if((i__29657__auto___32592 < len__29656__auto___32591)){
args__29663__auto__.push((arguments[i__29657__auto___32592]));

var G__32593 = (i__29657__auto___32592 + (1));
i__29657__auto___32592 = G__32593;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32590))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32590){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32590);
});})(g__30824__auto___32590))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30824__auto___32590){
return (function (seq32533){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32533));
});})(g__30824__auto___32590))
;


var g__30824__auto___32594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30824__auto___32594){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32595 = arguments.length;
var i__29657__auto___32596 = (0);
while(true){
if((i__29657__auto___32596 < len__29656__auto___32595)){
args__29663__auto__.push((arguments[i__29657__auto___32596]));

var G__32597 = (i__29657__auto___32596 + (1));
i__29657__auto___32596 = G__32597;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32594))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32594){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32594);
});})(g__30824__auto___32594))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30824__auto___32594){
return (function (seq32534){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32534));
});})(g__30824__auto___32594))
;


var g__30824__auto___32598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30824__auto___32598){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32599 = arguments.length;
var i__29657__auto___32600 = (0);
while(true){
if((i__29657__auto___32600 < len__29656__auto___32599)){
args__29663__auto__.push((arguments[i__29657__auto___32600]));

var G__32601 = (i__29657__auto___32600 + (1));
i__29657__auto___32600 = G__32601;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32598))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32598){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32598);
});})(g__30824__auto___32598))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30824__auto___32598){
return (function (seq32535){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32535));
});})(g__30824__auto___32598))
;


var g__30824__auto___32602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30824__auto___32602){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32603 = arguments.length;
var i__29657__auto___32604 = (0);
while(true){
if((i__29657__auto___32604 < len__29656__auto___32603)){
args__29663__auto__.push((arguments[i__29657__auto___32604]));

var G__32605 = (i__29657__auto___32604 + (1));
i__29657__auto___32604 = G__32605;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32602))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32602){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32602);
});})(g__30824__auto___32602))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30824__auto___32602){
return (function (seq32536){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32536));
});})(g__30824__auto___32602))
;


var g__30824__auto___32606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30824__auto___32606){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32607 = arguments.length;
var i__29657__auto___32608 = (0);
while(true){
if((i__29657__auto___32608 < len__29656__auto___32607)){
args__29663__auto__.push((arguments[i__29657__auto___32608]));

var G__32609 = (i__29657__auto___32608 + (1));
i__29657__auto___32608 = G__32609;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32606))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32606){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32606);
});})(g__30824__auto___32606))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30824__auto___32606){
return (function (seq32537){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32537));
});})(g__30824__auto___32606))
;


var g__30824__auto___32610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30824__auto___32610){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32611 = arguments.length;
var i__29657__auto___32612 = (0);
while(true){
if((i__29657__auto___32612 < len__29656__auto___32611)){
args__29663__auto__.push((arguments[i__29657__auto___32612]));

var G__32613 = (i__29657__auto___32612 + (1));
i__29657__auto___32612 = G__32613;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32610))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32610){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32610);
});})(g__30824__auto___32610))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30824__auto___32610){
return (function (seq32538){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32538));
});})(g__30824__auto___32610))
;


var g__30824__auto___32614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30824__auto___32614){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32615 = arguments.length;
var i__29657__auto___32616 = (0);
while(true){
if((i__29657__auto___32616 < len__29656__auto___32615)){
args__29663__auto__.push((arguments[i__29657__auto___32616]));

var G__32617 = (i__29657__auto___32616 + (1));
i__29657__auto___32616 = G__32617;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32614))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32614){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32614);
});})(g__30824__auto___32614))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30824__auto___32614){
return (function (seq32539){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32539));
});})(g__30824__auto___32614))
;


var g__30824__auto___32618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30824__auto___32618){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32619 = arguments.length;
var i__29657__auto___32620 = (0);
while(true){
if((i__29657__auto___32620 < len__29656__auto___32619)){
args__29663__auto__.push((arguments[i__29657__auto___32620]));

var G__32621 = (i__29657__auto___32620 + (1));
i__29657__auto___32620 = G__32621;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32618))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32618){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32618);
});})(g__30824__auto___32618))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30824__auto___32618){
return (function (seq32540){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32540));
});})(g__30824__auto___32618))
;


var g__30824__auto___32622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30824__auto___32622){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32623 = arguments.length;
var i__29657__auto___32624 = (0);
while(true){
if((i__29657__auto___32624 < len__29656__auto___32623)){
args__29663__auto__.push((arguments[i__29657__auto___32624]));

var G__32625 = (i__29657__auto___32624 + (1));
i__29657__auto___32624 = G__32625;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});})(g__30824__auto___32622))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30824__auto___32622){
return (function (args){
return cljs.core.deref.call(null,g__30824__auto___32622);
});})(g__30824__auto___32622))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30824__auto___32622){
return (function (seq32541){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32541));
});})(g__30824__auto___32622))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29663__auto__ = [];
var len__29656__auto___32628 = arguments.length;
var i__29657__auto___32629 = (0);
while(true){
if((i__29657__auto___32629 < len__29656__auto___32628)){
args__29663__auto__.push((arguments[i__29657__auto___32629]));

var G__32630 = (i__29657__auto___32629 + (1));
i__29657__auto___32629 = G__32630;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__32626_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32626_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq32627){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32627));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__32631_SHARP_){
return (new Date(p1__32631_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1512565252315
