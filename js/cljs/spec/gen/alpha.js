// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8811__auto__,writer__8812__auto__,opt__8813__auto__){
return cljs.core._write(writer__8812__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14483 = arguments.length;
var i__9347__auto___14484 = (0);
while(true){
if((i__9347__auto___14484 < len__9346__auto___14483)){
args__9353__auto__.push((arguments[i__9347__auto___14484]));

var G__14485 = (i__9347__auto___14484 + (1));
i__9347__auto___14484 = G__14485;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq14482){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14482));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14487 = arguments.length;
var i__9347__auto___14488 = (0);
while(true){
if((i__9347__auto___14488 < len__9346__auto___14487)){
args__9353__auto__.push((arguments[i__9347__auto___14488]));

var G__14489 = (i__9347__auto___14488 + (1));
i__9347__auto___14488 = G__14489;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq14486){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14486));
});

var g_QMARK__14493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_14494 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__14493){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__14493))
,null));
var mkg_14495 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__14493,g_14494){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__14493,g_14494))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__14493,g_14494,mkg_14495){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__14490 = cljs.core.deref(g_QMARK__14493);
return (fexpr__14490.cljs$core$IFn$_invoke$arity$1 ? fexpr__14490.cljs$core$IFn$_invoke$arity$1(x) : fexpr__14490.call(null,x));
});})(g_QMARK__14493,g_14494,mkg_14495))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__14493,g_14494,mkg_14495){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__14491 = cljs.core.deref(mkg_14495);
return (fexpr__14491.cljs$core$IFn$_invoke$arity$1 ? fexpr__14491.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__14491.call(null,gfn));
});})(g_QMARK__14493,g_14494,mkg_14495))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__14493,g_14494,mkg_14495){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__14492 = cljs.core.deref(g_14494);
return (fexpr__14492.cljs$core$IFn$_invoke$arity$1 ? fexpr__14492.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__14492.call(null,generator));
});})(g_QMARK__14493,g_14494,mkg_14495))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__14496 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__14496.cljs$core$IFn$_invoke$arity$2 ? fexpr__14496.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__14496.call(null,rnd,size));
}));
});
var g__14454__auto___14516 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__14454__auto___14516){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14517 = arguments.length;
var i__9347__auto___14518 = (0);
while(true){
if((i__9347__auto___14518 < len__9346__auto___14517)){
args__9353__auto__.push((arguments[i__9347__auto___14518]));

var G__14519 = (i__9347__auto___14518 + (1));
i__9347__auto___14518 = G__14519;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14516))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14516){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14516),args);
});})(g__14454__auto___14516))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__14454__auto___14516){
return (function (seq14497){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14497));
});})(g__14454__auto___14516))
;


var g__14454__auto___14520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__14454__auto___14520){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14521 = arguments.length;
var i__9347__auto___14522 = (0);
while(true){
if((i__9347__auto___14522 < len__9346__auto___14521)){
args__9353__auto__.push((arguments[i__9347__auto___14522]));

var G__14523 = (i__9347__auto___14522 + (1));
i__9347__auto___14522 = G__14523;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14520))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14520){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14520),args);
});})(g__14454__auto___14520))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__14454__auto___14520){
return (function (seq14498){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14498));
});})(g__14454__auto___14520))
;


var g__14454__auto___14524 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__14454__auto___14524){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14525 = arguments.length;
var i__9347__auto___14526 = (0);
while(true){
if((i__9347__auto___14526 < len__9346__auto___14525)){
args__9353__auto__.push((arguments[i__9347__auto___14526]));

var G__14527 = (i__9347__auto___14526 + (1));
i__9347__auto___14526 = G__14527;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14524))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14524){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14524),args);
});})(g__14454__auto___14524))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__14454__auto___14524){
return (function (seq14499){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14499));
});})(g__14454__auto___14524))
;


var g__14454__auto___14528 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__14454__auto___14528){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14529 = arguments.length;
var i__9347__auto___14530 = (0);
while(true){
if((i__9347__auto___14530 < len__9346__auto___14529)){
args__9353__auto__.push((arguments[i__9347__auto___14530]));

var G__14531 = (i__9347__auto___14530 + (1));
i__9347__auto___14530 = G__14531;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14528))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14528){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14528),args);
});})(g__14454__auto___14528))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__14454__auto___14528){
return (function (seq14500){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14500));
});})(g__14454__auto___14528))
;


var g__14454__auto___14532 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__14454__auto___14532){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14533 = arguments.length;
var i__9347__auto___14534 = (0);
while(true){
if((i__9347__auto___14534 < len__9346__auto___14533)){
args__9353__auto__.push((arguments[i__9347__auto___14534]));

var G__14535 = (i__9347__auto___14534 + (1));
i__9347__auto___14534 = G__14535;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14532))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14532){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14532),args);
});})(g__14454__auto___14532))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__14454__auto___14532){
return (function (seq14501){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14501));
});})(g__14454__auto___14532))
;


var g__14454__auto___14536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__14454__auto___14536){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14537 = arguments.length;
var i__9347__auto___14538 = (0);
while(true){
if((i__9347__auto___14538 < len__9346__auto___14537)){
args__9353__auto__.push((arguments[i__9347__auto___14538]));

var G__14539 = (i__9347__auto___14538 + (1));
i__9347__auto___14538 = G__14539;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14536))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14536){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14536),args);
});})(g__14454__auto___14536))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__14454__auto___14536){
return (function (seq14502){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14502));
});})(g__14454__auto___14536))
;


var g__14454__auto___14540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__14454__auto___14540){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14541 = arguments.length;
var i__9347__auto___14542 = (0);
while(true){
if((i__9347__auto___14542 < len__9346__auto___14541)){
args__9353__auto__.push((arguments[i__9347__auto___14542]));

var G__14543 = (i__9347__auto___14542 + (1));
i__9347__auto___14542 = G__14543;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14540))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14540){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14540),args);
});})(g__14454__auto___14540))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__14454__auto___14540){
return (function (seq14503){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14503));
});})(g__14454__auto___14540))
;


var g__14454__auto___14544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__14454__auto___14544){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14545 = arguments.length;
var i__9347__auto___14546 = (0);
while(true){
if((i__9347__auto___14546 < len__9346__auto___14545)){
args__9353__auto__.push((arguments[i__9347__auto___14546]));

var G__14547 = (i__9347__auto___14546 + (1));
i__9347__auto___14546 = G__14547;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14544))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14544){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14544),args);
});})(g__14454__auto___14544))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__14454__auto___14544){
return (function (seq14504){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14504));
});})(g__14454__auto___14544))
;


var g__14454__auto___14548 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__14454__auto___14548){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14549 = arguments.length;
var i__9347__auto___14550 = (0);
while(true){
if((i__9347__auto___14550 < len__9346__auto___14549)){
args__9353__auto__.push((arguments[i__9347__auto___14550]));

var G__14551 = (i__9347__auto___14550 + (1));
i__9347__auto___14550 = G__14551;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14548))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14548){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14548),args);
});})(g__14454__auto___14548))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__14454__auto___14548){
return (function (seq14505){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14505));
});})(g__14454__auto___14548))
;


var g__14454__auto___14552 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__14454__auto___14552){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14553 = arguments.length;
var i__9347__auto___14554 = (0);
while(true){
if((i__9347__auto___14554 < len__9346__auto___14553)){
args__9353__auto__.push((arguments[i__9347__auto___14554]));

var G__14555 = (i__9347__auto___14554 + (1));
i__9347__auto___14554 = G__14555;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14552))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14552){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14552),args);
});})(g__14454__auto___14552))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__14454__auto___14552){
return (function (seq14506){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14506));
});})(g__14454__auto___14552))
;


var g__14454__auto___14556 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__14454__auto___14556){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14557 = arguments.length;
var i__9347__auto___14558 = (0);
while(true){
if((i__9347__auto___14558 < len__9346__auto___14557)){
args__9353__auto__.push((arguments[i__9347__auto___14558]));

var G__14559 = (i__9347__auto___14558 + (1));
i__9347__auto___14558 = G__14559;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14556))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14556){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14556),args);
});})(g__14454__auto___14556))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__14454__auto___14556){
return (function (seq14507){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14507));
});})(g__14454__auto___14556))
;


var g__14454__auto___14560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__14454__auto___14560){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14561 = arguments.length;
var i__9347__auto___14562 = (0);
while(true){
if((i__9347__auto___14562 < len__9346__auto___14561)){
args__9353__auto__.push((arguments[i__9347__auto___14562]));

var G__14563 = (i__9347__auto___14562 + (1));
i__9347__auto___14562 = G__14563;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14560))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14560){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14560),args);
});})(g__14454__auto___14560))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__14454__auto___14560){
return (function (seq14508){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14508));
});})(g__14454__auto___14560))
;


var g__14454__auto___14564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__14454__auto___14564){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14565 = arguments.length;
var i__9347__auto___14566 = (0);
while(true){
if((i__9347__auto___14566 < len__9346__auto___14565)){
args__9353__auto__.push((arguments[i__9347__auto___14566]));

var G__14567 = (i__9347__auto___14566 + (1));
i__9347__auto___14566 = G__14567;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14564))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14564){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14564),args);
});})(g__14454__auto___14564))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__14454__auto___14564){
return (function (seq14509){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14509));
});})(g__14454__auto___14564))
;


var g__14454__auto___14568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__14454__auto___14568){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14569 = arguments.length;
var i__9347__auto___14570 = (0);
while(true){
if((i__9347__auto___14570 < len__9346__auto___14569)){
args__9353__auto__.push((arguments[i__9347__auto___14570]));

var G__14571 = (i__9347__auto___14570 + (1));
i__9347__auto___14570 = G__14571;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14568))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14568){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14568),args);
});})(g__14454__auto___14568))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__14454__auto___14568){
return (function (seq14510){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14510));
});})(g__14454__auto___14568))
;


var g__14454__auto___14572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__14454__auto___14572){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14573 = arguments.length;
var i__9347__auto___14574 = (0);
while(true){
if((i__9347__auto___14574 < len__9346__auto___14573)){
args__9353__auto__.push((arguments[i__9347__auto___14574]));

var G__14575 = (i__9347__auto___14574 + (1));
i__9347__auto___14574 = G__14575;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14572))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14572){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14572),args);
});})(g__14454__auto___14572))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__14454__auto___14572){
return (function (seq14511){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14511));
});})(g__14454__auto___14572))
;


var g__14454__auto___14576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__14454__auto___14576){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14577 = arguments.length;
var i__9347__auto___14578 = (0);
while(true){
if((i__9347__auto___14578 < len__9346__auto___14577)){
args__9353__auto__.push((arguments[i__9347__auto___14578]));

var G__14579 = (i__9347__auto___14578 + (1));
i__9347__auto___14578 = G__14579;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14576))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14576){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14576),args);
});})(g__14454__auto___14576))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__14454__auto___14576){
return (function (seq14512){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14512));
});})(g__14454__auto___14576))
;


var g__14454__auto___14580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__14454__auto___14580){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14581 = arguments.length;
var i__9347__auto___14582 = (0);
while(true){
if((i__9347__auto___14582 < len__9346__auto___14581)){
args__9353__auto__.push((arguments[i__9347__auto___14582]));

var G__14583 = (i__9347__auto___14582 + (1));
i__9347__auto___14582 = G__14583;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14580))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14580){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14580),args);
});})(g__14454__auto___14580))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__14454__auto___14580){
return (function (seq14513){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14513));
});})(g__14454__auto___14580))
;


var g__14454__auto___14584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__14454__auto___14584){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14585 = arguments.length;
var i__9347__auto___14586 = (0);
while(true){
if((i__9347__auto___14586 < len__9346__auto___14585)){
args__9353__auto__.push((arguments[i__9347__auto___14586]));

var G__14587 = (i__9347__auto___14586 + (1));
i__9347__auto___14586 = G__14587;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14584))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14584){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14584),args);
});})(g__14454__auto___14584))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__14454__auto___14584){
return (function (seq14514){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14514));
});})(g__14454__auto___14584))
;


var g__14454__auto___14588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__14454__auto___14588){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14589 = arguments.length;
var i__9347__auto___14590 = (0);
while(true){
if((i__9347__auto___14590 < len__9346__auto___14589)){
args__9353__auto__.push((arguments[i__9347__auto___14590]));

var G__14591 = (i__9347__auto___14590 + (1));
i__9347__auto___14590 = G__14591;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14454__auto___14588))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14454__auto___14588){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__14454__auto___14588),args);
});})(g__14454__auto___14588))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__14454__auto___14588){
return (function (seq14515){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14515));
});})(g__14454__auto___14588))
;

var g__14467__auto___14613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__14467__auto___14613){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14614 = arguments.length;
var i__9347__auto___14615 = (0);
while(true){
if((i__9347__auto___14615 < len__9346__auto___14614)){
args__9353__auto__.push((arguments[i__9347__auto___14615]));

var G__14616 = (i__9347__auto___14615 + (1));
i__9347__auto___14615 = G__14616;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14613))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14613){
return (function (args){
return cljs.core.deref(g__14467__auto___14613);
});})(g__14467__auto___14613))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__14467__auto___14613){
return (function (seq14592){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14592));
});})(g__14467__auto___14613))
;


var g__14467__auto___14617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__14467__auto___14617){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14618 = arguments.length;
var i__9347__auto___14619 = (0);
while(true){
if((i__9347__auto___14619 < len__9346__auto___14618)){
args__9353__auto__.push((arguments[i__9347__auto___14619]));

var G__14620 = (i__9347__auto___14619 + (1));
i__9347__auto___14619 = G__14620;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14617))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14617){
return (function (args){
return cljs.core.deref(g__14467__auto___14617);
});})(g__14467__auto___14617))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__14467__auto___14617){
return (function (seq14593){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14593));
});})(g__14467__auto___14617))
;


var g__14467__auto___14621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__14467__auto___14621){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14622 = arguments.length;
var i__9347__auto___14623 = (0);
while(true){
if((i__9347__auto___14623 < len__9346__auto___14622)){
args__9353__auto__.push((arguments[i__9347__auto___14623]));

var G__14624 = (i__9347__auto___14623 + (1));
i__9347__auto___14623 = G__14624;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14621))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14621){
return (function (args){
return cljs.core.deref(g__14467__auto___14621);
});})(g__14467__auto___14621))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__14467__auto___14621){
return (function (seq14594){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14594));
});})(g__14467__auto___14621))
;


var g__14467__auto___14625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__14467__auto___14625){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14626 = arguments.length;
var i__9347__auto___14627 = (0);
while(true){
if((i__9347__auto___14627 < len__9346__auto___14626)){
args__9353__auto__.push((arguments[i__9347__auto___14627]));

var G__14628 = (i__9347__auto___14627 + (1));
i__9347__auto___14627 = G__14628;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14625))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14625){
return (function (args){
return cljs.core.deref(g__14467__auto___14625);
});})(g__14467__auto___14625))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__14467__auto___14625){
return (function (seq14595){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14595));
});})(g__14467__auto___14625))
;


var g__14467__auto___14629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__14467__auto___14629){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14630 = arguments.length;
var i__9347__auto___14631 = (0);
while(true){
if((i__9347__auto___14631 < len__9346__auto___14630)){
args__9353__auto__.push((arguments[i__9347__auto___14631]));

var G__14632 = (i__9347__auto___14631 + (1));
i__9347__auto___14631 = G__14632;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14629))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14629){
return (function (args){
return cljs.core.deref(g__14467__auto___14629);
});})(g__14467__auto___14629))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__14467__auto___14629){
return (function (seq14596){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14596));
});})(g__14467__auto___14629))
;


var g__14467__auto___14633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__14467__auto___14633){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14634 = arguments.length;
var i__9347__auto___14635 = (0);
while(true){
if((i__9347__auto___14635 < len__9346__auto___14634)){
args__9353__auto__.push((arguments[i__9347__auto___14635]));

var G__14636 = (i__9347__auto___14635 + (1));
i__9347__auto___14635 = G__14636;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14633))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14633){
return (function (args){
return cljs.core.deref(g__14467__auto___14633);
});})(g__14467__auto___14633))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__14467__auto___14633){
return (function (seq14597){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14597));
});})(g__14467__auto___14633))
;


var g__14467__auto___14637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__14467__auto___14637){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14638 = arguments.length;
var i__9347__auto___14639 = (0);
while(true){
if((i__9347__auto___14639 < len__9346__auto___14638)){
args__9353__auto__.push((arguments[i__9347__auto___14639]));

var G__14640 = (i__9347__auto___14639 + (1));
i__9347__auto___14639 = G__14640;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14637))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14637){
return (function (args){
return cljs.core.deref(g__14467__auto___14637);
});})(g__14467__auto___14637))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__14467__auto___14637){
return (function (seq14598){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14598));
});})(g__14467__auto___14637))
;


var g__14467__auto___14641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__14467__auto___14641){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14642 = arguments.length;
var i__9347__auto___14643 = (0);
while(true){
if((i__9347__auto___14643 < len__9346__auto___14642)){
args__9353__auto__.push((arguments[i__9347__auto___14643]));

var G__14644 = (i__9347__auto___14643 + (1));
i__9347__auto___14643 = G__14644;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14641))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14641){
return (function (args){
return cljs.core.deref(g__14467__auto___14641);
});})(g__14467__auto___14641))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__14467__auto___14641){
return (function (seq14599){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14599));
});})(g__14467__auto___14641))
;


var g__14467__auto___14645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__14467__auto___14645){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14646 = arguments.length;
var i__9347__auto___14647 = (0);
while(true){
if((i__9347__auto___14647 < len__9346__auto___14646)){
args__9353__auto__.push((arguments[i__9347__auto___14647]));

var G__14648 = (i__9347__auto___14647 + (1));
i__9347__auto___14647 = G__14648;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14645))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14645){
return (function (args){
return cljs.core.deref(g__14467__auto___14645);
});})(g__14467__auto___14645))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__14467__auto___14645){
return (function (seq14600){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14600));
});})(g__14467__auto___14645))
;


var g__14467__auto___14649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__14467__auto___14649){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14650 = arguments.length;
var i__9347__auto___14651 = (0);
while(true){
if((i__9347__auto___14651 < len__9346__auto___14650)){
args__9353__auto__.push((arguments[i__9347__auto___14651]));

var G__14652 = (i__9347__auto___14651 + (1));
i__9347__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14649))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14649){
return (function (args){
return cljs.core.deref(g__14467__auto___14649);
});})(g__14467__auto___14649))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__14467__auto___14649){
return (function (seq14601){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14601));
});})(g__14467__auto___14649))
;


var g__14467__auto___14653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__14467__auto___14653){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14654 = arguments.length;
var i__9347__auto___14655 = (0);
while(true){
if((i__9347__auto___14655 < len__9346__auto___14654)){
args__9353__auto__.push((arguments[i__9347__auto___14655]));

var G__14656 = (i__9347__auto___14655 + (1));
i__9347__auto___14655 = G__14656;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14653))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14653){
return (function (args){
return cljs.core.deref(g__14467__auto___14653);
});})(g__14467__auto___14653))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__14467__auto___14653){
return (function (seq14602){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14602));
});})(g__14467__auto___14653))
;


var g__14467__auto___14657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__14467__auto___14657){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14658 = arguments.length;
var i__9347__auto___14659 = (0);
while(true){
if((i__9347__auto___14659 < len__9346__auto___14658)){
args__9353__auto__.push((arguments[i__9347__auto___14659]));

var G__14660 = (i__9347__auto___14659 + (1));
i__9347__auto___14659 = G__14660;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14657))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14657){
return (function (args){
return cljs.core.deref(g__14467__auto___14657);
});})(g__14467__auto___14657))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__14467__auto___14657){
return (function (seq14603){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14603));
});})(g__14467__auto___14657))
;


var g__14467__auto___14661 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__14467__auto___14661){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14662 = arguments.length;
var i__9347__auto___14663 = (0);
while(true){
if((i__9347__auto___14663 < len__9346__auto___14662)){
args__9353__auto__.push((arguments[i__9347__auto___14663]));

var G__14664 = (i__9347__auto___14663 + (1));
i__9347__auto___14663 = G__14664;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14661))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14661){
return (function (args){
return cljs.core.deref(g__14467__auto___14661);
});})(g__14467__auto___14661))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__14467__auto___14661){
return (function (seq14604){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14604));
});})(g__14467__auto___14661))
;


var g__14467__auto___14665 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__14467__auto___14665){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14666 = arguments.length;
var i__9347__auto___14667 = (0);
while(true){
if((i__9347__auto___14667 < len__9346__auto___14666)){
args__9353__auto__.push((arguments[i__9347__auto___14667]));

var G__14668 = (i__9347__auto___14667 + (1));
i__9347__auto___14667 = G__14668;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14665))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14665){
return (function (args){
return cljs.core.deref(g__14467__auto___14665);
});})(g__14467__auto___14665))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__14467__auto___14665){
return (function (seq14605){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14605));
});})(g__14467__auto___14665))
;


var g__14467__auto___14669 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__14467__auto___14669){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14670 = arguments.length;
var i__9347__auto___14671 = (0);
while(true){
if((i__9347__auto___14671 < len__9346__auto___14670)){
args__9353__auto__.push((arguments[i__9347__auto___14671]));

var G__14672 = (i__9347__auto___14671 + (1));
i__9347__auto___14671 = G__14672;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14669))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14669){
return (function (args){
return cljs.core.deref(g__14467__auto___14669);
});})(g__14467__auto___14669))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__14467__auto___14669){
return (function (seq14606){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14606));
});})(g__14467__auto___14669))
;


var g__14467__auto___14673 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__14467__auto___14673){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14674 = arguments.length;
var i__9347__auto___14675 = (0);
while(true){
if((i__9347__auto___14675 < len__9346__auto___14674)){
args__9353__auto__.push((arguments[i__9347__auto___14675]));

var G__14676 = (i__9347__auto___14675 + (1));
i__9347__auto___14675 = G__14676;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14673))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14673){
return (function (args){
return cljs.core.deref(g__14467__auto___14673);
});})(g__14467__auto___14673))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__14467__auto___14673){
return (function (seq14607){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14607));
});})(g__14467__auto___14673))
;


var g__14467__auto___14677 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__14467__auto___14677){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14678 = arguments.length;
var i__9347__auto___14679 = (0);
while(true){
if((i__9347__auto___14679 < len__9346__auto___14678)){
args__9353__auto__.push((arguments[i__9347__auto___14679]));

var G__14680 = (i__9347__auto___14679 + (1));
i__9347__auto___14679 = G__14680;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14677))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14677){
return (function (args){
return cljs.core.deref(g__14467__auto___14677);
});})(g__14467__auto___14677))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__14467__auto___14677){
return (function (seq14608){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14608));
});})(g__14467__auto___14677))
;


var g__14467__auto___14681 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__14467__auto___14681){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14682 = arguments.length;
var i__9347__auto___14683 = (0);
while(true){
if((i__9347__auto___14683 < len__9346__auto___14682)){
args__9353__auto__.push((arguments[i__9347__auto___14683]));

var G__14684 = (i__9347__auto___14683 + (1));
i__9347__auto___14683 = G__14684;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14681))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14681){
return (function (args){
return cljs.core.deref(g__14467__auto___14681);
});})(g__14467__auto___14681))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__14467__auto___14681){
return (function (seq14609){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14609));
});})(g__14467__auto___14681))
;


var g__14467__auto___14685 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__14467__auto___14685){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14686 = arguments.length;
var i__9347__auto___14687 = (0);
while(true){
if((i__9347__auto___14687 < len__9346__auto___14686)){
args__9353__auto__.push((arguments[i__9347__auto___14687]));

var G__14688 = (i__9347__auto___14687 + (1));
i__9347__auto___14687 = G__14688;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14685))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14685){
return (function (args){
return cljs.core.deref(g__14467__auto___14685);
});})(g__14467__auto___14685))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__14467__auto___14685){
return (function (seq14610){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14610));
});})(g__14467__auto___14685))
;


var g__14467__auto___14689 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__14467__auto___14689){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14690 = arguments.length;
var i__9347__auto___14691 = (0);
while(true){
if((i__9347__auto___14691 < len__9346__auto___14690)){
args__9353__auto__.push((arguments[i__9347__auto___14691]));

var G__14692 = (i__9347__auto___14691 + (1));
i__9347__auto___14691 = G__14692;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14689))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14689){
return (function (args){
return cljs.core.deref(g__14467__auto___14689);
});})(g__14467__auto___14689))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__14467__auto___14689){
return (function (seq14611){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14611));
});})(g__14467__auto___14689))
;


var g__14467__auto___14693 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__14467__auto___14693){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14694 = arguments.length;
var i__9347__auto___14695 = (0);
while(true){
if((i__9347__auto___14695 < len__9346__auto___14694)){
args__9353__auto__.push((arguments[i__9347__auto___14695]));

var G__14696 = (i__9347__auto___14695 + (1));
i__9347__auto___14695 = G__14696;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});})(g__14467__auto___14693))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__14467__auto___14693){
return (function (args){
return cljs.core.deref(g__14467__auto___14693);
});})(g__14467__auto___14693))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__14467__auto___14693){
return (function (seq14612){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14612));
});})(g__14467__auto___14693))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14699 = arguments.length;
var i__9347__auto___14700 = (0);
while(true){
if((i__9347__auto___14700 < len__9346__auto___14699)){
args__9353__auto__.push((arguments[i__9347__auto___14700]));

var G__14701 = (i__9347__auto___14700 + (1));
i__9347__auto___14700 = G__14701;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__14697_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__14697_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14698){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14698));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__14702_SHARP_){
return (new Date(p1__14702_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
