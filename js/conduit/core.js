// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
goog.require('conduit.events');
goog.require('conduit.subs');
goog.require('conduit.views');
goog.require('goog.History');
goog.require('goog.history.EventType');
conduit.core.is_service_worker_supported_QMARK_ = (function conduit$core$is_service_worker_supported_QMARK_(){
return typeof navigator.serviceWorker !== 'undefined';
});
conduit.core.register_service_worker = (function conduit$core$register_service_worker(path_to_sw){
if(cljs.core.truth_(conduit.core.is_service_worker_supported_QMARK_())){
return navigator.serviceWorker.register(path_to_sw);
} else {
return null;
}
});
conduit.core.routes = (function conduit$core$routes(){
location.hash = "/";

secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__19030__auto___19245 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19175 = params__19031__auto__;
var map__19175__$1 = ((((!((map__19175 == null)))?((((map__19175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19175):map__19175);
var G__19177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19177) : re_frame.core.dispatch.call(null,G__19177));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19178 = params__19031__auto__;
var G__19181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19181) : re_frame.core.dispatch.call(null,G__19181));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__19030__auto___19245);


var action__19030__auto___19246 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19182 = params__19031__auto__;
var map__19182__$1 = ((((!((map__19182 == null)))?((((map__19182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19182):map__19182);
var G__19184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19184) : re_frame.core.dispatch.call(null,G__19184));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19185 = params__19031__auto__;
var G__19188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19188) : re_frame.core.dispatch.call(null,G__19188));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/login",action__19030__auto___19246);


var action__19030__auto___19247 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19189 = params__19031__auto__;
var map__19189__$1 = ((((!((map__19189 == null)))?((((map__19189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19189):map__19189);
var G__19191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19191) : re_frame.core.dispatch.call(null,G__19191));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19192 = params__19031__auto__;
var G__19195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19195) : re_frame.core.dispatch.call(null,G__19195));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/register",action__19030__auto___19247);


var action__19030__auto___19248 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19196 = params__19031__auto__;
var map__19196__$1 = ((((!((map__19196 == null)))?((((map__19196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19196):map__19196);
var G__19198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19198) : re_frame.core.dispatch.call(null,G__19198));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19199 = params__19031__auto__;
var G__19202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19202) : re_frame.core.dispatch.call(null,G__19202));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/settings",action__19030__auto___19248);


var action__19030__auto___19249 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19203 = params__19031__auto__;
var map__19203__$1 = ((((!((map__19203 == null)))?((((map__19203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19203):map__19203);
var G__19205 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19205) : re_frame.core.dispatch.call(null,G__19205));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19206 = params__19031__auto__;
var G__19209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19209) : re_frame.core.dispatch.call(null,G__19209));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor",action__19030__auto___19249);


var action__19030__auto___19250 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19210 = params__19031__auto__;
var map__19210__$1 = ((((!((map__19210 == null)))?((((map__19210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19210):map__19210);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,cljs.core.cst$kw$slug);
var G__19212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19212) : re_frame.core.dispatch.call(null,G__19212));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19213 = params__19031__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19213,(0),null);
var G__19216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19216) : re_frame.core.dispatch.call(null,G__19216));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor/:slug",action__19030__auto___19250);


var action__19030__auto___19251 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19217 = params__19031__auto__;
var map__19217__$1 = ((((!((map__19217 == null)))?((((map__19217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19217):map__19217);
var G__19219 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19219) : re_frame.core.dispatch.call(null,G__19219));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19220 = params__19031__auto__;
var G__19223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19223) : re_frame.core.dispatch.call(null,G__19223));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/logout",action__19030__auto___19251);


var action__19030__auto___19252 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19224 = params__19031__auto__;
var map__19224__$1 = ((((!((map__19224 == null)))?((((map__19224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19224):map__19224);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19224__$1,cljs.core.cst$kw$slug);
var G__19226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19226) : re_frame.core.dispatch.call(null,G__19226));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19227 = params__19031__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19227,(0),null);
var G__19230 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19230) : re_frame.core.dispatch.call(null,G__19230));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/article/:slug",action__19030__auto___19252);


var action__19030__auto___19253 = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19231 = params__19031__auto__;
var map__19231__$1 = ((((!((map__19231 == null)))?((((map__19231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19231):map__19231);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,cljs.core.cst$kw$profile);
var G__19233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19233) : re_frame.core.dispatch.call(null,G__19233));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19234 = params__19031__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19234,(0),null);
var G__19237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19237) : re_frame.core.dispatch.call(null,G__19237));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile/favorites",action__19030__auto___19253);


var action__19030__auto__ = (function (params__19031__auto__){
if(cljs.core.map_QMARK_(params__19031__auto__)){
var map__19238 = params__19031__auto__;
var map__19238__$1 = ((((!((map__19238 == null)))?((((map__19238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19238):map__19238);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19238__$1,cljs.core.cst$kw$profile);
var G__19240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19240) : re_frame.core.dispatch.call(null,G__19240));
} else {
if(cljs.core.vector_QMARK_(params__19031__auto__)){
var vec__19241 = params__19031__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19241,(0),null);
var G__19244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__19244) : re_frame.core.dispatch.call(null,G__19244));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile",action__19030__auto__);

return ((function (action__19030__auto__){
return (function() { 
var G__19254__delegate = function (args__19029__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:profile",args__19029__auto__);
};
var G__19254 = function (var_args){
var args__19029__auto__ = null;
if (arguments.length > 0) {
var G__19255__i = 0, G__19255__a = new Array(arguments.length -  0);
while (G__19255__i < G__19255__a.length) {G__19255__a[G__19255__i] = arguments[G__19255__i + 0]; ++G__19255__i;}
  args__19029__auto__ = new cljs.core.IndexedSeq(G__19255__a,0,null);
} 
return G__19254__delegate.call(this,args__19029__auto__);};
G__19254.cljs$lang$maxFixedArity = 0;
G__19254.cljs$lang$applyTo = (function (arglist__19256){
var args__19029__auto__ = cljs.core.seq(arglist__19256);
return G__19254__delegate(args__19029__auto__);
});
G__19254.cljs$core$IFn$_invoke$arity$variadic = G__19254__delegate;
return G__19254;
})()
;
;})(action__19030__auto__))
});
conduit.core.history = (function (){var G__19257 = (new goog.History());
var G__19258_19261 = G__19257;
var G__19259_19262 = goog.history.EventType.NAVIGATE;
var G__19260_19263 = ((function (G__19258_19261,G__19259_19262,G__19257){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__19258_19261,G__19259_19262,G__19257))
;
goog.events.listen(G__19258_19261,G__19259_19262,G__19260_19263);

G__19257.setEnabled(true);

return G__19257;
})();
conduit.core.main = (function conduit$core$main(){
var G__19264_19265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialise_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__19264_19265) : re_frame.core.dispatch_sync.call(null,G__19264_19265));

conduit.core.routes();

reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));

return conduit.core.register_service_worker("js/service-worker.js");
});
goog.exportSymbol('conduit.core.main', conduit.core.main);
