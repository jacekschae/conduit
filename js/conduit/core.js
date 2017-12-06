// Compiled by ClojureScript 1.9.946 {}
goog.provide('conduit.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
goog.require('conduit.events');
goog.require('conduit.subs');
goog.require('conduit.views');
goog.require('devtools.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
devtools.core.install_BANG_.call(null);
cljs.core.enable_console_print_BANG_.call(null);
conduit.core.routes = (function conduit$core$routes(){
location.hash = "/";

secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__35058__auto___38048 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__37998 = params__35059__auto__;
var map__37998__$1 = ((((!((map__37998 == null)))?((((map__37998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37998):map__37998);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38000 = params__35059__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__35058__auto___38048);


var action__35058__auto___38049 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38003 = params__35059__auto__;
var map__38003__$1 = ((((!((map__38003 == null)))?((((map__38003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38003):map__38003);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38005 = params__35059__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/login",action__35058__auto___38049);


var action__35058__auto___38050 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38008 = params__35059__auto__;
var map__38008__$1 = ((((!((map__38008 == null)))?((((map__38008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38008):map__38008);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38010 = params__35059__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/register",action__35058__auto___38050);


var action__35058__auto___38051 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38013 = params__35059__auto__;
var map__38013__$1 = ((((!((map__38013 == null)))?((((map__38013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38013):map__38013);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38015 = params__35059__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/settings",action__35058__auto___38051);


var action__35058__auto___38052 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38018 = params__35059__auto__;
var map__38018__$1 = ((((!((map__38018 == null)))?((((map__38018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38018):map__38018);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38020 = params__35059__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/editor",action__35058__auto___38052);


var action__35058__auto___38053 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38023 = params__35059__auto__;
var map__38023__$1 = ((((!((map__38023 == null)))?((((map__38023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38023):map__38023);
var slug = cljs.core.get.call(null,map__38023__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38025 = params__35059__auto__;
var slug = cljs.core.nth.call(null,vec__38025,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/editor/:slug",action__35058__auto___38053);


var action__35058__auto___38054 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38028 = params__35059__auto__;
var map__38028__$1 = ((((!((map__38028 == null)))?((((map__38028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38028):map__38028);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38030 = params__35059__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/logout",action__35058__auto___38054);


var action__35058__auto___38055 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38033 = params__35059__auto__;
var map__38033__$1 = ((((!((map__38033 == null)))?((((map__38033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38033):map__38033);
var slug = cljs.core.get.call(null,map__38033__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38035 = params__35059__auto__;
var slug = cljs.core.nth.call(null,vec__38035,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/article/:slug",action__35058__auto___38055);


var action__35058__auto___38056 = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38038 = params__35059__auto__;
var map__38038__$1 = ((((!((map__38038 == null)))?((((map__38038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38038):map__38038);
var profile = cljs.core.get.call(null,map__38038__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.call(null,profile,(1))], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38040 = params__35059__auto__;
var profile = cljs.core.nth.call(null,vec__38040,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.call(null,profile,(1))], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:profile/favorites",action__35058__auto___38056);


var action__35058__auto__ = (function (params__35059__auto__){
if(cljs.core.map_QMARK_.call(null,params__35059__auto__)){
var map__38043 = params__35059__auto__;
var map__38043__$1 = ((((!((map__38043 == null)))?((((map__38043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38043):map__38043);
var profile = cljs.core.get.call(null,map__38043__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.call(null,profile,(1))], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__35059__auto__)){
var vec__38045 = params__35059__auto__;
var profile = cljs.core.nth.call(null,vec__38045,(0),null);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.call(null,profile,(1))], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/:profile",action__35058__auto__);

return ((function (action__35058__auto__){
return (function() { 
var G__38057__delegate = function (args__35057__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/:profile",args__35057__auto__);
};
var G__38057 = function (var_args){
var args__35057__auto__ = null;
if (arguments.length > 0) {
var G__38058__i = 0, G__38058__a = new Array(arguments.length -  0);
while (G__38058__i < G__38058__a.length) {G__38058__a[G__38058__i] = arguments[G__38058__i + 0]; ++G__38058__i;}
  args__35057__auto__ = new cljs.core.IndexedSeq(G__38058__a,0,null);
} 
return G__38057__delegate.call(this,args__35057__auto__);};
G__38057.cljs$lang$maxFixedArity = 0;
G__38057.cljs$lang$applyTo = (function (arglist__38059){
var args__35057__auto__ = cljs.core.seq(arglist__38059);
return G__38057__delegate(args__35057__auto__);
});
G__38057.cljs$core$IFn$_invoke$arity$variadic = G__38057__delegate;
return G__38057;
})()
;
;})(action__35058__auto__))
});
conduit.core.history = (function (){var G__38060 = (new goog.History());
goog.events.listen(G__38060,goog.history.EventType.NAVIGATE,((function (G__38060){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__38060))
);

G__38060.setEnabled(true);

return G__38060;
})();
conduit.core.main = (function conduit$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

conduit.core.routes.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);

//# sourceMappingURL=core.js.map?rel=1512565257080
