// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('conduit.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__42532__delegate = function (x){
if(cljs.core.truth_(conduit.core.main)){
return cljs.core.apply.call(null,conduit.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'conduit.core/main' is missing");
}
};
var G__42532 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__42533__i = 0, G__42533__a = new Array(arguments.length -  0);
while (G__42533__i < G__42533__a.length) {G__42533__a[G__42533__i] = arguments[G__42533__i + 0]; ++G__42533__i;}
  x = new cljs.core.IndexedSeq(G__42533__a,0,null);
} 
return G__42532__delegate.call(this,x);};
G__42532.cljs$lang$maxFixedArity = 0;
G__42532.cljs$lang$applyTo = (function (arglist__42534){
var x = cljs.core.seq(arglist__42534);
return G__42532__delegate(x);
});
G__42532.cljs$core$IFn$_invoke$arity$variadic = G__42532__delegate;
return G__42532;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1512565258806
