goog.provide('reagent.debug');
goog.require('cljs.core');
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
var G__33176__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33177__i = 0, G__33177__a = new Array(arguments.length -  0);
while (G__33177__i < G__33177__a.length) {G__33177__a[G__33177__i] = arguments[G__33177__i + 0]; ++G__33177__i;}
  args = new cljs.core.IndexedSeq(G__33177__a,0,null);
} 
return G__33176__delegate.call(this,args);};
G__33176.cljs$lang$maxFixedArity = 0;
G__33176.cljs$lang$applyTo = (function (arglist__33178){
var args = cljs.core.seq(arglist__33178);
return G__33176__delegate(args);
});
G__33176.cljs$core$IFn$_invoke$arity$variadic = G__33176__delegate;
return G__33176;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33179__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33184__i = 0, G__33184__a = new Array(arguments.length -  0);
while (G__33184__i < G__33184__a.length) {G__33184__a[G__33184__i] = arguments[G__33184__i + 0]; ++G__33184__i;}
  args = new cljs.core.IndexedSeq(G__33184__a,0,null);
} 
return G__33179__delegate.call(this,args);};
G__33179.cljs$lang$maxFixedArity = 0;
G__33179.cljs$lang$applyTo = (function (arglist__33185){
var args = cljs.core.seq(arglist__33185);
return G__33179__delegate(args);
});
G__33179.cljs$core$IFn$_invoke$arity$variadic = G__33179__delegate;
return G__33179;
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

//# sourceMappingURL=reagent.debug.js.map
