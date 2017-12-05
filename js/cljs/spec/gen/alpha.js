// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8404__auto__,writer__8405__auto__,opt__8406__auto__){
return cljs.core._write(writer__8405__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__8944__auto__ = [];
var len__8937__auto___17055 = arguments.length;
var i__8938__auto___17056 = (0);
while(true){
if((i__8938__auto___17056 < len__8937__auto___17055)){
args__8944__auto__.push((arguments[i__8938__auto___17056]));

var G__17057 = (i__8938__auto___17056 + (1));
i__8938__auto___17056 = G__17057;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq17054){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17054));
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
var args__8944__auto__ = [];
var len__8937__auto___17059 = arguments.length;
var i__8938__auto___17060 = (0);
while(true){
if((i__8938__auto___17060 < len__8937__auto___17059)){
args__8944__auto__.push((arguments[i__8938__auto___17060]));

var G__17061 = (i__8938__auto___17060 + (1));
i__8938__auto___17060 = G__17061;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq17058){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17058));
});

var g_QMARK__17065 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_17066 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__17065){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__17065))
,null));
var mkg_17067 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__17065,g_17066){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__17065,g_17066))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__17065,g_17066,mkg_17067){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__17062 = cljs.core.deref(g_QMARK__17065);
return (fexpr__17062.cljs$core$IFn$_invoke$arity$1 ? fexpr__17062.cljs$core$IFn$_invoke$arity$1(x) : fexpr__17062.call(null,x));
});})(g_QMARK__17065,g_17066,mkg_17067))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__17065,g_17066,mkg_17067){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__17063 = cljs.core.deref(mkg_17067);
return (fexpr__17063.cljs$core$IFn$_invoke$arity$1 ? fexpr__17063.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__17063.call(null,gfn));
});})(g_QMARK__17065,g_17066,mkg_17067))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__17065,g_17066,mkg_17067){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__17064 = cljs.core.deref(g_17066);
return (fexpr__17064.cljs$core$IFn$_invoke$arity$1 ? fexpr__17064.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__17064.call(null,generator));
});})(g_QMARK__17065,g_17066,mkg_17067))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__17068 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__17068.cljs$core$IFn$_invoke$arity$2 ? fexpr__17068.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__17068.call(null,rnd,size));
}));
});
var g__17026__auto___17088 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__17026__auto___17088){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17089 = arguments.length;
var i__8938__auto___17090 = (0);
while(true){
if((i__8938__auto___17090 < len__8937__auto___17089)){
args__8944__auto__.push((arguments[i__8938__auto___17090]));

var G__17091 = (i__8938__auto___17090 + (1));
i__8938__auto___17090 = G__17091;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17088))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17088){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17088),args);
});})(g__17026__auto___17088))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__17026__auto___17088){
return (function (seq17069){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17069));
});})(g__17026__auto___17088))
;


var g__17026__auto___17092 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__17026__auto___17092){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17093 = arguments.length;
var i__8938__auto___17094 = (0);
while(true){
if((i__8938__auto___17094 < len__8937__auto___17093)){
args__8944__auto__.push((arguments[i__8938__auto___17094]));

var G__17095 = (i__8938__auto___17094 + (1));
i__8938__auto___17094 = G__17095;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17092))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17092){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17092),args);
});})(g__17026__auto___17092))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__17026__auto___17092){
return (function (seq17070){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17070));
});})(g__17026__auto___17092))
;


var g__17026__auto___17096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__17026__auto___17096){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17097 = arguments.length;
var i__8938__auto___17098 = (0);
while(true){
if((i__8938__auto___17098 < len__8937__auto___17097)){
args__8944__auto__.push((arguments[i__8938__auto___17098]));

var G__17099 = (i__8938__auto___17098 + (1));
i__8938__auto___17098 = G__17099;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17096))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17096){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17096),args);
});})(g__17026__auto___17096))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__17026__auto___17096){
return (function (seq17071){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17071));
});})(g__17026__auto___17096))
;


var g__17026__auto___17100 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__17026__auto___17100){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17101 = arguments.length;
var i__8938__auto___17102 = (0);
while(true){
if((i__8938__auto___17102 < len__8937__auto___17101)){
args__8944__auto__.push((arguments[i__8938__auto___17102]));

var G__17103 = (i__8938__auto___17102 + (1));
i__8938__auto___17102 = G__17103;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17100))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17100){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17100),args);
});})(g__17026__auto___17100))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__17026__auto___17100){
return (function (seq17072){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17072));
});})(g__17026__auto___17100))
;


var g__17026__auto___17104 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__17026__auto___17104){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17105 = arguments.length;
var i__8938__auto___17106 = (0);
while(true){
if((i__8938__auto___17106 < len__8937__auto___17105)){
args__8944__auto__.push((arguments[i__8938__auto___17106]));

var G__17107 = (i__8938__auto___17106 + (1));
i__8938__auto___17106 = G__17107;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17104))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17104){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17104),args);
});})(g__17026__auto___17104))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__17026__auto___17104){
return (function (seq17073){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17073));
});})(g__17026__auto___17104))
;


var g__17026__auto___17108 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__17026__auto___17108){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17109 = arguments.length;
var i__8938__auto___17110 = (0);
while(true){
if((i__8938__auto___17110 < len__8937__auto___17109)){
args__8944__auto__.push((arguments[i__8938__auto___17110]));

var G__17111 = (i__8938__auto___17110 + (1));
i__8938__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17108))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17108){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17108),args);
});})(g__17026__auto___17108))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__17026__auto___17108){
return (function (seq17074){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17074));
});})(g__17026__auto___17108))
;


var g__17026__auto___17112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__17026__auto___17112){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17113 = arguments.length;
var i__8938__auto___17114 = (0);
while(true){
if((i__8938__auto___17114 < len__8937__auto___17113)){
args__8944__auto__.push((arguments[i__8938__auto___17114]));

var G__17115 = (i__8938__auto___17114 + (1));
i__8938__auto___17114 = G__17115;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17112))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17112){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17112),args);
});})(g__17026__auto___17112))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__17026__auto___17112){
return (function (seq17075){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17075));
});})(g__17026__auto___17112))
;


var g__17026__auto___17116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__17026__auto___17116){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17117 = arguments.length;
var i__8938__auto___17118 = (0);
while(true){
if((i__8938__auto___17118 < len__8937__auto___17117)){
args__8944__auto__.push((arguments[i__8938__auto___17118]));

var G__17119 = (i__8938__auto___17118 + (1));
i__8938__auto___17118 = G__17119;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17116))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17116){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17116),args);
});})(g__17026__auto___17116))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__17026__auto___17116){
return (function (seq17076){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17076));
});})(g__17026__auto___17116))
;


var g__17026__auto___17120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__17026__auto___17120){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17121 = arguments.length;
var i__8938__auto___17122 = (0);
while(true){
if((i__8938__auto___17122 < len__8937__auto___17121)){
args__8944__auto__.push((arguments[i__8938__auto___17122]));

var G__17123 = (i__8938__auto___17122 + (1));
i__8938__auto___17122 = G__17123;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17120))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17120){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17120),args);
});})(g__17026__auto___17120))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__17026__auto___17120){
return (function (seq17077){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17077));
});})(g__17026__auto___17120))
;


var g__17026__auto___17124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__17026__auto___17124){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17125 = arguments.length;
var i__8938__auto___17126 = (0);
while(true){
if((i__8938__auto___17126 < len__8937__auto___17125)){
args__8944__auto__.push((arguments[i__8938__auto___17126]));

var G__17127 = (i__8938__auto___17126 + (1));
i__8938__auto___17126 = G__17127;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17124))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17124){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17124),args);
});})(g__17026__auto___17124))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__17026__auto___17124){
return (function (seq17078){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17078));
});})(g__17026__auto___17124))
;


var g__17026__auto___17128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__17026__auto___17128){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17129 = arguments.length;
var i__8938__auto___17130 = (0);
while(true){
if((i__8938__auto___17130 < len__8937__auto___17129)){
args__8944__auto__.push((arguments[i__8938__auto___17130]));

var G__17131 = (i__8938__auto___17130 + (1));
i__8938__auto___17130 = G__17131;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17128))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17128){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17128),args);
});})(g__17026__auto___17128))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__17026__auto___17128){
return (function (seq17079){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17079));
});})(g__17026__auto___17128))
;


var g__17026__auto___17132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__17026__auto___17132){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17133 = arguments.length;
var i__8938__auto___17134 = (0);
while(true){
if((i__8938__auto___17134 < len__8937__auto___17133)){
args__8944__auto__.push((arguments[i__8938__auto___17134]));

var G__17135 = (i__8938__auto___17134 + (1));
i__8938__auto___17134 = G__17135;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17132))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17132){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17132),args);
});})(g__17026__auto___17132))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__17026__auto___17132){
return (function (seq17080){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17080));
});})(g__17026__auto___17132))
;


var g__17026__auto___17136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__17026__auto___17136){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17137 = arguments.length;
var i__8938__auto___17138 = (0);
while(true){
if((i__8938__auto___17138 < len__8937__auto___17137)){
args__8944__auto__.push((arguments[i__8938__auto___17138]));

var G__17139 = (i__8938__auto___17138 + (1));
i__8938__auto___17138 = G__17139;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17136))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17136){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17136),args);
});})(g__17026__auto___17136))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__17026__auto___17136){
return (function (seq17081){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17081));
});})(g__17026__auto___17136))
;


var g__17026__auto___17140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__17026__auto___17140){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17141 = arguments.length;
var i__8938__auto___17142 = (0);
while(true){
if((i__8938__auto___17142 < len__8937__auto___17141)){
args__8944__auto__.push((arguments[i__8938__auto___17142]));

var G__17143 = (i__8938__auto___17142 + (1));
i__8938__auto___17142 = G__17143;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17140))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17140){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17140),args);
});})(g__17026__auto___17140))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__17026__auto___17140){
return (function (seq17082){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17082));
});})(g__17026__auto___17140))
;


var g__17026__auto___17144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__17026__auto___17144){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17145 = arguments.length;
var i__8938__auto___17146 = (0);
while(true){
if((i__8938__auto___17146 < len__8937__auto___17145)){
args__8944__auto__.push((arguments[i__8938__auto___17146]));

var G__17147 = (i__8938__auto___17146 + (1));
i__8938__auto___17146 = G__17147;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17144))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17144){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17144),args);
});})(g__17026__auto___17144))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__17026__auto___17144){
return (function (seq17083){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17083));
});})(g__17026__auto___17144))
;


var g__17026__auto___17148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__17026__auto___17148){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17149 = arguments.length;
var i__8938__auto___17150 = (0);
while(true){
if((i__8938__auto___17150 < len__8937__auto___17149)){
args__8944__auto__.push((arguments[i__8938__auto___17150]));

var G__17151 = (i__8938__auto___17150 + (1));
i__8938__auto___17150 = G__17151;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17148))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17148){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17148),args);
});})(g__17026__auto___17148))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__17026__auto___17148){
return (function (seq17084){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17084));
});})(g__17026__auto___17148))
;


var g__17026__auto___17152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__17026__auto___17152){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17153 = arguments.length;
var i__8938__auto___17154 = (0);
while(true){
if((i__8938__auto___17154 < len__8937__auto___17153)){
args__8944__auto__.push((arguments[i__8938__auto___17154]));

var G__17155 = (i__8938__auto___17154 + (1));
i__8938__auto___17154 = G__17155;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17152))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17152){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17152),args);
});})(g__17026__auto___17152))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__17026__auto___17152){
return (function (seq17085){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17085));
});})(g__17026__auto___17152))
;


var g__17026__auto___17156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__17026__auto___17156){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17157 = arguments.length;
var i__8938__auto___17158 = (0);
while(true){
if((i__8938__auto___17158 < len__8937__auto___17157)){
args__8944__auto__.push((arguments[i__8938__auto___17158]));

var G__17159 = (i__8938__auto___17158 + (1));
i__8938__auto___17158 = G__17159;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17156))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17156){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17156),args);
});})(g__17026__auto___17156))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__17026__auto___17156){
return (function (seq17086){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17086));
});})(g__17026__auto___17156))
;


var g__17026__auto___17160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__17026__auto___17160){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17161 = arguments.length;
var i__8938__auto___17162 = (0);
while(true){
if((i__8938__auto___17162 < len__8937__auto___17161)){
args__8944__auto__.push((arguments[i__8938__auto___17162]));

var G__17163 = (i__8938__auto___17162 + (1));
i__8938__auto___17162 = G__17163;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17026__auto___17160))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17026__auto___17160){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__17026__auto___17160),args);
});})(g__17026__auto___17160))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__17026__auto___17160){
return (function (seq17087){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17087));
});})(g__17026__auto___17160))
;

var g__17039__auto___17185 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__17039__auto___17185){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17186 = arguments.length;
var i__8938__auto___17187 = (0);
while(true){
if((i__8938__auto___17187 < len__8937__auto___17186)){
args__8944__auto__.push((arguments[i__8938__auto___17187]));

var G__17188 = (i__8938__auto___17187 + (1));
i__8938__auto___17187 = G__17188;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17185))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17185){
return (function (args){
return cljs.core.deref(g__17039__auto___17185);
});})(g__17039__auto___17185))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__17039__auto___17185){
return (function (seq17164){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17164));
});})(g__17039__auto___17185))
;


var g__17039__auto___17189 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__17039__auto___17189){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17190 = arguments.length;
var i__8938__auto___17191 = (0);
while(true){
if((i__8938__auto___17191 < len__8937__auto___17190)){
args__8944__auto__.push((arguments[i__8938__auto___17191]));

var G__17192 = (i__8938__auto___17191 + (1));
i__8938__auto___17191 = G__17192;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17189))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17189){
return (function (args){
return cljs.core.deref(g__17039__auto___17189);
});})(g__17039__auto___17189))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__17039__auto___17189){
return (function (seq17165){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17165));
});})(g__17039__auto___17189))
;


var g__17039__auto___17193 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__17039__auto___17193){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17194 = arguments.length;
var i__8938__auto___17195 = (0);
while(true){
if((i__8938__auto___17195 < len__8937__auto___17194)){
args__8944__auto__.push((arguments[i__8938__auto___17195]));

var G__17196 = (i__8938__auto___17195 + (1));
i__8938__auto___17195 = G__17196;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17193))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17193){
return (function (args){
return cljs.core.deref(g__17039__auto___17193);
});})(g__17039__auto___17193))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__17039__auto___17193){
return (function (seq17166){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17166));
});})(g__17039__auto___17193))
;


var g__17039__auto___17197 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__17039__auto___17197){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17198 = arguments.length;
var i__8938__auto___17199 = (0);
while(true){
if((i__8938__auto___17199 < len__8937__auto___17198)){
args__8944__auto__.push((arguments[i__8938__auto___17199]));

var G__17200 = (i__8938__auto___17199 + (1));
i__8938__auto___17199 = G__17200;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17197))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17197){
return (function (args){
return cljs.core.deref(g__17039__auto___17197);
});})(g__17039__auto___17197))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__17039__auto___17197){
return (function (seq17167){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17167));
});})(g__17039__auto___17197))
;


var g__17039__auto___17201 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__17039__auto___17201){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17202 = arguments.length;
var i__8938__auto___17203 = (0);
while(true){
if((i__8938__auto___17203 < len__8937__auto___17202)){
args__8944__auto__.push((arguments[i__8938__auto___17203]));

var G__17204 = (i__8938__auto___17203 + (1));
i__8938__auto___17203 = G__17204;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17201))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17201){
return (function (args){
return cljs.core.deref(g__17039__auto___17201);
});})(g__17039__auto___17201))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__17039__auto___17201){
return (function (seq17168){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17168));
});})(g__17039__auto___17201))
;


var g__17039__auto___17205 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__17039__auto___17205){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17206 = arguments.length;
var i__8938__auto___17207 = (0);
while(true){
if((i__8938__auto___17207 < len__8937__auto___17206)){
args__8944__auto__.push((arguments[i__8938__auto___17207]));

var G__17208 = (i__8938__auto___17207 + (1));
i__8938__auto___17207 = G__17208;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17205))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17205){
return (function (args){
return cljs.core.deref(g__17039__auto___17205);
});})(g__17039__auto___17205))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__17039__auto___17205){
return (function (seq17169){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17169));
});})(g__17039__auto___17205))
;


var g__17039__auto___17209 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__17039__auto___17209){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17210 = arguments.length;
var i__8938__auto___17211 = (0);
while(true){
if((i__8938__auto___17211 < len__8937__auto___17210)){
args__8944__auto__.push((arguments[i__8938__auto___17211]));

var G__17212 = (i__8938__auto___17211 + (1));
i__8938__auto___17211 = G__17212;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17209))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17209){
return (function (args){
return cljs.core.deref(g__17039__auto___17209);
});})(g__17039__auto___17209))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__17039__auto___17209){
return (function (seq17170){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17170));
});})(g__17039__auto___17209))
;


var g__17039__auto___17213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__17039__auto___17213){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17214 = arguments.length;
var i__8938__auto___17215 = (0);
while(true){
if((i__8938__auto___17215 < len__8937__auto___17214)){
args__8944__auto__.push((arguments[i__8938__auto___17215]));

var G__17216 = (i__8938__auto___17215 + (1));
i__8938__auto___17215 = G__17216;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17213))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17213){
return (function (args){
return cljs.core.deref(g__17039__auto___17213);
});})(g__17039__auto___17213))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__17039__auto___17213){
return (function (seq17171){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17171));
});})(g__17039__auto___17213))
;


var g__17039__auto___17217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__17039__auto___17217){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17218 = arguments.length;
var i__8938__auto___17219 = (0);
while(true){
if((i__8938__auto___17219 < len__8937__auto___17218)){
args__8944__auto__.push((arguments[i__8938__auto___17219]));

var G__17220 = (i__8938__auto___17219 + (1));
i__8938__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17217))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17217){
return (function (args){
return cljs.core.deref(g__17039__auto___17217);
});})(g__17039__auto___17217))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__17039__auto___17217){
return (function (seq17172){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17172));
});})(g__17039__auto___17217))
;


var g__17039__auto___17221 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__17039__auto___17221){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17222 = arguments.length;
var i__8938__auto___17223 = (0);
while(true){
if((i__8938__auto___17223 < len__8937__auto___17222)){
args__8944__auto__.push((arguments[i__8938__auto___17223]));

var G__17224 = (i__8938__auto___17223 + (1));
i__8938__auto___17223 = G__17224;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17221))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17221){
return (function (args){
return cljs.core.deref(g__17039__auto___17221);
});})(g__17039__auto___17221))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__17039__auto___17221){
return (function (seq17173){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17173));
});})(g__17039__auto___17221))
;


var g__17039__auto___17225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__17039__auto___17225){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17226 = arguments.length;
var i__8938__auto___17227 = (0);
while(true){
if((i__8938__auto___17227 < len__8937__auto___17226)){
args__8944__auto__.push((arguments[i__8938__auto___17227]));

var G__17228 = (i__8938__auto___17227 + (1));
i__8938__auto___17227 = G__17228;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17225))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17225){
return (function (args){
return cljs.core.deref(g__17039__auto___17225);
});})(g__17039__auto___17225))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__17039__auto___17225){
return (function (seq17174){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17174));
});})(g__17039__auto___17225))
;


var g__17039__auto___17229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__17039__auto___17229){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17230 = arguments.length;
var i__8938__auto___17231 = (0);
while(true){
if((i__8938__auto___17231 < len__8937__auto___17230)){
args__8944__auto__.push((arguments[i__8938__auto___17231]));

var G__17232 = (i__8938__auto___17231 + (1));
i__8938__auto___17231 = G__17232;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17229))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17229){
return (function (args){
return cljs.core.deref(g__17039__auto___17229);
});})(g__17039__auto___17229))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__17039__auto___17229){
return (function (seq17175){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17175));
});})(g__17039__auto___17229))
;


var g__17039__auto___17233 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__17039__auto___17233){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17234 = arguments.length;
var i__8938__auto___17235 = (0);
while(true){
if((i__8938__auto___17235 < len__8937__auto___17234)){
args__8944__auto__.push((arguments[i__8938__auto___17235]));

var G__17236 = (i__8938__auto___17235 + (1));
i__8938__auto___17235 = G__17236;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17233))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17233){
return (function (args){
return cljs.core.deref(g__17039__auto___17233);
});})(g__17039__auto___17233))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__17039__auto___17233){
return (function (seq17176){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17176));
});})(g__17039__auto___17233))
;


var g__17039__auto___17237 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__17039__auto___17237){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17238 = arguments.length;
var i__8938__auto___17239 = (0);
while(true){
if((i__8938__auto___17239 < len__8937__auto___17238)){
args__8944__auto__.push((arguments[i__8938__auto___17239]));

var G__17240 = (i__8938__auto___17239 + (1));
i__8938__auto___17239 = G__17240;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17237))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17237){
return (function (args){
return cljs.core.deref(g__17039__auto___17237);
});})(g__17039__auto___17237))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__17039__auto___17237){
return (function (seq17177){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17177));
});})(g__17039__auto___17237))
;


var g__17039__auto___17241 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__17039__auto___17241){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17242 = arguments.length;
var i__8938__auto___17243 = (0);
while(true){
if((i__8938__auto___17243 < len__8937__auto___17242)){
args__8944__auto__.push((arguments[i__8938__auto___17243]));

var G__17244 = (i__8938__auto___17243 + (1));
i__8938__auto___17243 = G__17244;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17241))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17241){
return (function (args){
return cljs.core.deref(g__17039__auto___17241);
});})(g__17039__auto___17241))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__17039__auto___17241){
return (function (seq17178){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17178));
});})(g__17039__auto___17241))
;


var g__17039__auto___17245 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__17039__auto___17245){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17246 = arguments.length;
var i__8938__auto___17247 = (0);
while(true){
if((i__8938__auto___17247 < len__8937__auto___17246)){
args__8944__auto__.push((arguments[i__8938__auto___17247]));

var G__17248 = (i__8938__auto___17247 + (1));
i__8938__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17245))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17245){
return (function (args){
return cljs.core.deref(g__17039__auto___17245);
});})(g__17039__auto___17245))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__17039__auto___17245){
return (function (seq17179){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17179));
});})(g__17039__auto___17245))
;


var g__17039__auto___17249 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__17039__auto___17249){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17250 = arguments.length;
var i__8938__auto___17251 = (0);
while(true){
if((i__8938__auto___17251 < len__8937__auto___17250)){
args__8944__auto__.push((arguments[i__8938__auto___17251]));

var G__17252 = (i__8938__auto___17251 + (1));
i__8938__auto___17251 = G__17252;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17249))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17249){
return (function (args){
return cljs.core.deref(g__17039__auto___17249);
});})(g__17039__auto___17249))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__17039__auto___17249){
return (function (seq17180){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17180));
});})(g__17039__auto___17249))
;


var g__17039__auto___17253 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__17039__auto___17253){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17254 = arguments.length;
var i__8938__auto___17255 = (0);
while(true){
if((i__8938__auto___17255 < len__8937__auto___17254)){
args__8944__auto__.push((arguments[i__8938__auto___17255]));

var G__17256 = (i__8938__auto___17255 + (1));
i__8938__auto___17255 = G__17256;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17253))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17253){
return (function (args){
return cljs.core.deref(g__17039__auto___17253);
});})(g__17039__auto___17253))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__17039__auto___17253){
return (function (seq17181){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17181));
});})(g__17039__auto___17253))
;


var g__17039__auto___17257 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__17039__auto___17257){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17258 = arguments.length;
var i__8938__auto___17259 = (0);
while(true){
if((i__8938__auto___17259 < len__8937__auto___17258)){
args__8944__auto__.push((arguments[i__8938__auto___17259]));

var G__17260 = (i__8938__auto___17259 + (1));
i__8938__auto___17259 = G__17260;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17257))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17257){
return (function (args){
return cljs.core.deref(g__17039__auto___17257);
});})(g__17039__auto___17257))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__17039__auto___17257){
return (function (seq17182){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17182));
});})(g__17039__auto___17257))
;


var g__17039__auto___17261 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__17039__auto___17261){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17262 = arguments.length;
var i__8938__auto___17263 = (0);
while(true){
if((i__8938__auto___17263 < len__8937__auto___17262)){
args__8944__auto__.push((arguments[i__8938__auto___17263]));

var G__17264 = (i__8938__auto___17263 + (1));
i__8938__auto___17263 = G__17264;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17261))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17261){
return (function (args){
return cljs.core.deref(g__17039__auto___17261);
});})(g__17039__auto___17261))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__17039__auto___17261){
return (function (seq17183){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17183));
});})(g__17039__auto___17261))
;


var g__17039__auto___17265 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__17039__auto___17265){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17266 = arguments.length;
var i__8938__auto___17267 = (0);
while(true){
if((i__8938__auto___17267 < len__8937__auto___17266)){
args__8944__auto__.push((arguments[i__8938__auto___17267]));

var G__17268 = (i__8938__auto___17267 + (1));
i__8938__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});})(g__17039__auto___17265))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__17039__auto___17265){
return (function (args){
return cljs.core.deref(g__17039__auto___17265);
});})(g__17039__auto___17265))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__17039__auto___17265){
return (function (seq17184){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17184));
});})(g__17039__auto___17265))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8944__auto__ = [];
var len__8937__auto___17271 = arguments.length;
var i__8938__auto___17272 = (0);
while(true){
if((i__8938__auto___17272 < len__8937__auto___17271)){
args__8944__auto__.push((arguments[i__8938__auto___17272]));

var G__17273 = (i__8938__auto___17272 + (1));
i__8938__auto___17272 = G__17273;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__17269_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__17269_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq17270){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17270));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__17274_SHARP_){
return (new Date(p1__17274_SHARP_));
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
