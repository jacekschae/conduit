goog.provide('conduit.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('conduit.events');
conduit.routes.hook_browser_navigation_BANG_ = (function conduit$routes$hook_browser_navigation_BANG_(){
var G__24086 = (new goog.History());
var G__24087_24090 = G__24086;
var G__24088_24091 = goog.history.EventType.NAVIGATE;
var G__24089_24092 = ((function (G__24087_24090,G__24088_24091,G__24086){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__24087_24090,G__24088_24091,G__24086))
;
goog.events.listen(G__24087_24090,G__24088_24091,G__24089_24092);

G__24086.setEnabled(true);

return G__24086;
});
conduit.routes.app_routes = (function conduit$routes$app_routes(){
var slug = null;
var profile = null;
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__23230__auto___24163 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24093 = params__23231__auto__;
var map__24093__$1 = ((((!((map__24093 == null)))?(((((map__24093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24093):map__24093);
var G__24095 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24095) : re_frame.core.dispatch.call(null,G__24095));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24096 = params__23231__auto__;
var G__24099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24099) : re_frame.core.dispatch.call(null,G__24099));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/",action__23230__auto___24163);


var action__23230__auto___24164 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24100 = params__23231__auto__;
var map__24100__$1 = ((((!((map__24100 == null)))?(((((map__24100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24100):map__24100);
var G__24102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24102) : re_frame.core.dispatch.call(null,G__24102));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24103 = params__23231__auto__;
var G__24106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24106) : re_frame.core.dispatch.call(null,G__24106));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/login",action__23230__auto___24164);


var action__23230__auto___24165 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24107 = params__23231__auto__;
var map__24107__$1 = ((((!((map__24107 == null)))?(((((map__24107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24107):map__24107);
var G__24109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24109) : re_frame.core.dispatch.call(null,G__24109));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24110 = params__23231__auto__;
var G__24113 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24113) : re_frame.core.dispatch.call(null,G__24113));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/register",action__23230__auto___24165);


var action__23230__auto___24166 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24114 = params__23231__auto__;
var map__24114__$1 = ((((!((map__24114 == null)))?(((((map__24114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24114):map__24114);
var G__24116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24116) : re_frame.core.dispatch.call(null,G__24116));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24117 = params__23231__auto__;
var G__24120 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24120) : re_frame.core.dispatch.call(null,G__24120));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/settings",action__23230__auto___24166);


var action__23230__auto___24167 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24121 = params__23231__auto__;
var map__24121__$1 = ((((!((map__24121 == null)))?(((((map__24121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24121):map__24121);
var G__24123 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24123) : re_frame.core.dispatch.call(null,G__24123));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24124 = params__23231__auto__;
var G__24127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24127) : re_frame.core.dispatch.call(null,G__24127));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor",action__23230__auto___24167);


var action__23230__auto___24168 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24128 = params__23231__auto__;
var map__24128__$1 = ((((!((map__24128 == null)))?(((((map__24128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24128):map__24128);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24128__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__24130 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24130) : re_frame.core.dispatch.call(null,G__24130));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24131 = params__23231__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24131,(0),null);
var G__24134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24134) : re_frame.core.dispatch.call(null,G__24134));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor/:slug",action__23230__auto___24168);


var action__23230__auto___24169 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24135 = params__23231__auto__;
var map__24135__$1 = ((((!((map__24135 == null)))?(((((map__24135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24135):map__24135);
var G__24137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24137) : re_frame.core.dispatch.call(null,G__24137));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24138 = params__23231__auto__;
var G__24141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24141) : re_frame.core.dispatch.call(null,G__24141));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/logout",action__23230__auto___24169);


var action__23230__auto___24170 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24142 = params__23231__auto__;
var map__24142__$1 = ((((!((map__24142 == null)))?(((((map__24142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24142):map__24142);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24142__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__24144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24144) : re_frame.core.dispatch.call(null,G__24144));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24145 = params__23231__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24145,(0),null);
var G__24148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24148) : re_frame.core.dispatch.call(null,G__24148));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/article/:slug",action__23230__auto___24170);


var action__23230__auto___24171 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24149 = params__23231__auto__;
var map__24149__$1 = ((((!((map__24149 == null)))?(((((map__24149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24149):map__24149);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24149__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__24151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24151) : re_frame.core.dispatch.call(null,G__24151));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24152 = params__23231__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24152,(0),null);
var G__24155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24155) : re_frame.core.dispatch.call(null,G__24155));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile/favorites",action__23230__auto___24171);


var action__23230__auto___24172 = ((function (slug,profile){
return (function (params__23231__auto__){
if(cljs.core.map_QMARK_(params__23231__auto__)){
var map__24156 = params__23231__auto__;
var map__24156__$1 = ((((!((map__24156 == null)))?(((((map__24156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24156):map__24156);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24156__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__24158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24158) : re_frame.core.dispatch.call(null,G__24158));
} else {
if(cljs.core.vector_QMARK_(params__23231__auto__)){
var vec__24159 = params__23231__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24159,(0),null);
var G__24162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__24162) : re_frame.core.dispatch.call(null,G__24162));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile",action__23230__auto___24172);


return conduit.routes.hook_browser_navigation_BANG_();
});

//# sourceMappingURL=conduit.routes.js.map
