// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13478__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13479__i = 0, G__13479__a = new Array(arguments.length -  0);
while (G__13479__i < G__13479__a.length) {G__13479__a[G__13479__i] = arguments[G__13479__i + 0]; ++G__13479__i;}
  args = new cljs.core.IndexedSeq(G__13479__a,0,null);
} 
return G__13478__delegate.call(this,args);};
G__13478.cljs$lang$maxFixedArity = 0;
G__13478.cljs$lang$applyTo = (function (arglist__13480){
var args = cljs.core.seq(arglist__13480);
return G__13478__delegate(args);
});
G__13478.cljs$core$IFn$_invoke$arity$variadic = G__13478__delegate;
return G__13478;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13481__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13482__i = 0, G__13482__a = new Array(arguments.length -  0);
while (G__13482__i < G__13482__a.length) {G__13482__a[G__13482__i] = arguments[G__13482__i + 0]; ++G__13482__i;}
  args = new cljs.core.IndexedSeq(G__13482__a,0,null);
} 
return G__13481__delegate.call(this,args);};
G__13481.cljs$lang$maxFixedArity = 0;
G__13481.cljs$lang$applyTo = (function (arglist__13483){
var args = cljs.core.seq(arglist__13483);
return G__13481__delegate(args);
});
G__13481.cljs$core$IFn$_invoke$arity$variadic = G__13481__delegate;
return G__13481;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
