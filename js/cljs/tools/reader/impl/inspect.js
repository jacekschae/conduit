// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('cljs.tools.reader.impl.inspect');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.tools.reader.impl.inspect.inspect_STAR__col = (function cljs$tools$reader$impl$inspect$inspect_STAR__col(truncate,col,start,end){
var n = cljs.core.count(col);
var l = (cljs.core.truth_(truncate)?(0):(function (){var x__8543__auto__ = (10);
var y__8544__auto__ = n;
return ((x__8543__auto__ < y__8544__auto__) ? x__8543__auto__ : y__8544__auto__);
})());
var elements = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.inspect.inspect_STAR_,true),cljs.core.take.cljs$core$IFn$_invoke$arity$2(l,col));
var content = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",elements));
var suffix = (((l < n))?"...":null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(content),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('');
});
cljs.tools.reader.impl.inspect.dispatch_inspect = (function cljs$tools$reader$impl$inspect$dispatch_inspect(_,x){
if((x == null)){
return cljs.core.cst$kw$nil;
} else {
if(typeof x === 'string'){
return cljs.core.cst$kw$string;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.cst$kw$strable;
} else {
if(typeof x === 'number'){
return cljs.core.cst$kw$strable;
} else {
if((x instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$strable;
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.list_QMARK_(x)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.cst$kw$set;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,true)){
return cljs.core.cst$kw$strable;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,false)){
return cljs.core.cst$kw$strable;
} else {
return cljs.core.type(x);

}
}
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
if(typeof cljs.tools.reader.impl.inspect.inspect_STAR_ !== 'undefined'){
} else {
cljs.tools.reader.impl.inspect.inspect_STAR_ = (function (){var method_table__9143__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9144__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9145__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9146__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9147__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.tools.reader.impl.inspect","inspect*"),cljs.tools.reader.impl.inspect.dispatch_inspect,cljs.core.cst$kw$default,hierarchy__9147__auto__,method_table__9143__auto__,prefer_table__9144__auto__,method_cache__9145__auto__,cached_hierarchy__9146__auto__));
})();
}
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (truncate,x){
var n = (cljs.core.truth_(truncate)?(5):(20));
var suffix = (((x.length > n))?"...\"":"\"");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x.substring((0),(function (){var x__8543__auto__ = n;
var y__8544__auto__ = x.length;
return ((x__8543__auto__ < y__8544__auto__) ? x__8543__auto__ : y__8544__auto__);
})())),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$strable,(function (truncate,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.coreIndexedSeq,(function (truncate,x){
return "<indexed seq>";
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.PersistentArrayMapSeq,(function (truncate,x){
return "<map seq>";
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.NodeSeq,(function (truncate,x){
return "<map seq>";
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Cons,(function (truncate,x){
return "<cons>";
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.LazySeq,(function (truncate,x){
return "<lazy seq>";
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nil,(function (_,___$1){
return "nil";
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (truncate,col){
return cljs.tools.reader.impl.inspect.inspect_STAR__col(truncate,col,"(",")");
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (truncate,m){
var len = cljs.core.count(m);
var n_shown = (cljs.core.truth_(truncate)?(0):len);
var contents = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n_shown,m));
var suffix = (((len > n_shown))?"...}":"}");
return cljs.tools.reader.impl.inspect.inspect_STAR__col(truncate,contents,"{",suffix);
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (truncate,col){
return cljs.tools.reader.impl.inspect.inspect_STAR__col(truncate,col,"#{","}");
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (truncate,col){
return cljs.tools.reader.impl.inspect.inspect_STAR__col(truncate,col,"[","]");
}));
cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (truncate,x){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0));
}));
/**
 * Return a string description of the value supplied.
 * May be the a string version of the value itself (e.g. "true")
 * or it may be a description (e.g. "an instance of Foo").
 * If truncate is true then return a very terse version of
 * the inspection.
 */
cljs.tools.reader.impl.inspect.inspect = (function cljs$tools$reader$impl$inspect$inspect(var_args){
var G__15722 = arguments.length;
switch (G__15722) {
case 1:
return cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IFn$_invoke$arity$2 ? cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IFn$_invoke$arity$2(false,x) : cljs.tools.reader.impl.inspect.inspect_STAR_.call(null,false,x));
});

cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$2 = (function (truncate,x){
return (cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IFn$_invoke$arity$2 ? cljs.tools.reader.impl.inspect.inspect_STAR_.cljs$core$IFn$_invoke$arity$2(truncate,x) : cljs.tools.reader.impl.inspect.inspect_STAR_.call(null,truncate,x));
});

cljs.tools.reader.impl.inspect.inspect.cljs$lang$maxFixedArity = 2;

