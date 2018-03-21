goog.provide('conduit.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('conduit.events');
goog.require('conduit.subs');
goog.require('conduit.views');
conduit.core.is_service_worker_supported_QMARK_ = (function conduit$core$is_service_worker_supported_QMARK_(){
return ((typeof navigator.serviceWorker !== 'undefined') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:")));
});
conduit.core.register_service_worker = (function conduit$core$register_service_worker(path_to_sw){
if(cljs.core.truth_(conduit.core.is_service_worker_supported_QMARK_())){
return navigator.serviceWorker.register(path_to_sw);
} else {
return null;
}
});
conduit.core.hook_browser_navigation_BANG_ = (function conduit$core$hook_browser_navigation_BANG_(){
var G__24101 = (new goog.History());
var G__24102_24105 = G__24101;
var G__24103_24106 = goog.history.EventType.NAVIGATE;
var G__24104_24107 = ((function (G__24102_24105,G__24103_24106,G__24101){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__24102_24105,G__24103_24106,G__24101))
;
goog.events.listen(G__24102_24105,G__24103_24106,G__24104_24107);

G__24101.setEnabled(true);

return G__24101;
});
conduit.core.routes = (function conduit$core$routes(){
var slug = null;
var profile = null;
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23147__auto___24178 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24108 = params__23148__auto__;
var map__24108__$1 = ((((!((map__24108 == null)))?(((((map__24108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24108):map__24108);
var G__24110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24110) : re_frame.core.dispatch.call(null,G__24110));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24111 = params__23148__auto__;
var G__24114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24114) : re_frame.core.dispatch.call(null,G__24114));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/",action__23147__auto___24178);


var action__23147__auto___24179 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24115 = params__23148__auto__;
var map__24115__$1 = ((((!((map__24115 == null)))?(((((map__24115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24115):map__24115);
var G__24117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24117) : re_frame.core.dispatch.call(null,G__24117));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24118 = params__23148__auto__;
var G__24121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24121) : re_frame.core.dispatch.call(null,G__24121));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/login",action__23147__auto___24179);


var action__23147__auto___24180 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24122 = params__23148__auto__;
var map__24122__$1 = ((((!((map__24122 == null)))?(((((map__24122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24122):map__24122);
var G__24124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24124) : re_frame.core.dispatch.call(null,G__24124));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24125 = params__23148__auto__;
var G__24128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24128) : re_frame.core.dispatch.call(null,G__24128));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/register",action__23147__auto___24180);


var action__23147__auto___24181 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24129 = params__23148__auto__;
var map__24129__$1 = ((((!((map__24129 == null)))?(((((map__24129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24129):map__24129);
var G__24131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24131) : re_frame.core.dispatch.call(null,G__24131));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24132 = params__23148__auto__;
var G__24135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24135) : re_frame.core.dispatch.call(null,G__24135));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/settings",action__23147__auto___24181);


var action__23147__auto___24182 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24136 = params__23148__auto__;
var map__24136__$1 = ((((!((map__24136 == null)))?(((((map__24136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24136):map__24136);
var G__24138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24138) : re_frame.core.dispatch.call(null,G__24138));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24139 = params__23148__auto__;
var G__24142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24142) : re_frame.core.dispatch.call(null,G__24142));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor",action__23147__auto___24182);


var action__23147__auto___24183 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24143 = params__23148__auto__;
var map__24143__$1 = ((((!((map__24143 == null)))?(((((map__24143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24143):map__24143);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24143__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__24145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24145) : re_frame.core.dispatch.call(null,G__24145));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24146 = params__23148__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24146,(0),null);
var G__24149 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24149) : re_frame.core.dispatch.call(null,G__24149));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor/:slug",action__23147__auto___24183);


var action__23147__auto___24184 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24150 = params__23148__auto__;
var map__24150__$1 = ((((!((map__24150 == null)))?(((((map__24150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24150):map__24150);
var G__24152 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24152) : re_frame.core.dispatch.call(null,G__24152));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24153 = params__23148__auto__;
var G__24156 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24156) : re_frame.core.dispatch.call(null,G__24156));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/logout",action__23147__auto___24184);


var action__23147__auto___24185 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24157 = params__23148__auto__;
var map__24157__$1 = ((((!((map__24157 == null)))?(((((map__24157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24157):map__24157);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__24159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24159) : re_frame.core.dispatch.call(null,G__24159));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24160 = params__23148__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24160,(0),null);
var G__24163 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24163) : re_frame.core.dispatch.call(null,G__24163));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/article/:slug",action__23147__auto___24185);


var action__23147__auto___24186 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24164 = params__23148__auto__;
var map__24164__$1 = ((((!((map__24164 == null)))?(((((map__24164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24164):map__24164);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24164__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__24166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24166) : re_frame.core.dispatch.call(null,G__24166));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24167 = params__23148__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24167,(0),null);
var G__24170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24170) : re_frame.core.dispatch.call(null,G__24170));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile/favorites",action__23147__auto___24186);


var action__23147__auto___24187 = ((function (slug,profile){
return (function (params__23148__auto__){
if(cljs.core.map_QMARK_(params__23148__auto__)){
var map__24171 = params__23148__auto__;
var map__24171__$1 = ((((!((map__24171 == null)))?(((((map__24171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24171):map__24171);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24171__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__24173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24173) : re_frame.core.dispatch.call(null,G__24173));
} else {
if(cljs.core.vector_QMARK_(params__23148__auto__)){
var vec__24174 = params__23148__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24174,(0),null);
var G__24177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24177) : re_frame.core.dispatch.call(null,G__24177));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile",action__23147__auto___24187);


return conduit.core.hook_browser_navigation_BANG_();
});
conduit.core.main = (function conduit$core$main(){
conduit.core.routes();

var G__24188_24189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__24188_24189) : re_frame.core.dispatch_sync.call(null,G__24188_24189));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);

//# sourceMappingURL=conduit.core.js.map
