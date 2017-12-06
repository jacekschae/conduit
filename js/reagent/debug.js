// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__42539__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42540__i = 0, G__42540__a = new Array(arguments.length -  0);
while (G__42540__i < G__42540__a.length) {G__42540__a[G__42540__i] = arguments[G__42540__i + 0]; ++G__42540__i;}
  args = new cljs.core.IndexedSeq(G__42540__a,0,null);
} 
return G__42539__delegate.call(this,args);};
G__42539.cljs$lang$maxFixedArity = 0;
G__42539.cljs$lang$applyTo = (function (arglist__42541){
var args = cljs.core.seq(arglist__42541);
return G__42539__delegate(args);
});
G__42539.cljs$core$IFn$_invoke$arity$variadic = G__42539__delegate;
return G__42539;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42542__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42543__i = 0, G__42543__a = new Array(arguments.length -  0);
while (G__42543__i < G__42543__a.length) {G__42543__a[G__42543__i] = arguments[G__42543__i + 0]; ++G__42543__i;}
  args = new cljs.core.IndexedSeq(G__42543__a,0,null);
} 
return G__42542__delegate.call(this,args);};
G__42542.cljs$lang$maxFixedArity = 0;
G__42542.cljs$lang$applyTo = (function (arglist__42544){
var args = cljs.core.seq(arglist__42544);
return G__42542__delegate(args);
});
G__42542.cljs$core$IFn$_invoke$arity$variadic = G__42542__delegate;
return G__42542;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1512565258928
