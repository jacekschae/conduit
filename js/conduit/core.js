// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
return navigator.serviceWorker.register(path_to_sw).then((function (){
var G__18795 = ["Service Worker Registered[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_to_sw),"]"].join('');
return console.log(G__18795);
}));
} else {
return null;
}
});
conduit.core.routes = (function conduit$core$routes(){
location.hash = "/";

secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__18628__auto___18866 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18796 = params__18629__auto__;
var map__18796__$1 = ((((!((map__18796 == null)))?((((map__18796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18796):map__18796);
var G__18798 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18798) : re_frame.core.dispatch.call(null,G__18798));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18799 = params__18629__auto__;
var G__18802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18802) : re_frame.core.dispatch.call(null,G__18802));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__18628__auto___18866);


var action__18628__auto___18867 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18803 = params__18629__auto__;
var map__18803__$1 = ((((!((map__18803 == null)))?((((map__18803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18803):map__18803);
var G__18805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18805) : re_frame.core.dispatch.call(null,G__18805));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18806 = params__18629__auto__;
var G__18809 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18809) : re_frame.core.dispatch.call(null,G__18809));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/login",action__18628__auto___18867);


var action__18628__auto___18868 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18810 = params__18629__auto__;
var map__18810__$1 = ((((!((map__18810 == null)))?((((map__18810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18810.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18810):map__18810);
var G__18812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18812) : re_frame.core.dispatch.call(null,G__18812));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18813 = params__18629__auto__;
var G__18816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18816) : re_frame.core.dispatch.call(null,G__18816));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/register",action__18628__auto___18868);


var action__18628__auto___18869 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18817 = params__18629__auto__;
var map__18817__$1 = ((((!((map__18817 == null)))?((((map__18817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18817):map__18817);
var G__18819 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18819) : re_frame.core.dispatch.call(null,G__18819));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18820 = params__18629__auto__;
var G__18823 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18823) : re_frame.core.dispatch.call(null,G__18823));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/settings",action__18628__auto___18869);


var action__18628__auto___18870 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18824 = params__18629__auto__;
var map__18824__$1 = ((((!((map__18824 == null)))?((((map__18824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18824):map__18824);
var G__18826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18826) : re_frame.core.dispatch.call(null,G__18826));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18827 = params__18629__auto__;
var G__18830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18830) : re_frame.core.dispatch.call(null,G__18830));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor",action__18628__auto___18870);


var action__18628__auto___18871 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18831 = params__18629__auto__;
var map__18831__$1 = ((((!((map__18831 == null)))?((((map__18831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18831):map__18831);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18831__$1,cljs.core.cst$kw$slug);
var G__18833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18833) : re_frame.core.dispatch.call(null,G__18833));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18834 = params__18629__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18834,(0),null);
var G__18837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18837) : re_frame.core.dispatch.call(null,G__18837));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor/:slug",action__18628__auto___18871);


var action__18628__auto___18872 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18838 = params__18629__auto__;
var map__18838__$1 = ((((!((map__18838 == null)))?((((map__18838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18838):map__18838);
var G__18840 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18840) : re_frame.core.dispatch.call(null,G__18840));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18841 = params__18629__auto__;
var G__18844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18844) : re_frame.core.dispatch.call(null,G__18844));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/logout",action__18628__auto___18872);


var action__18628__auto___18873 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18845 = params__18629__auto__;
var map__18845__$1 = ((((!((map__18845 == null)))?((((map__18845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18845):map__18845);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18845__$1,cljs.core.cst$kw$slug);
var G__18847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18847) : re_frame.core.dispatch.call(null,G__18847));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18848 = params__18629__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(0),null);
var G__18851 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18851) : re_frame.core.dispatch.call(null,G__18851));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/article/:slug",action__18628__auto___18873);


var action__18628__auto___18874 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18852 = params__18629__auto__;
var map__18852__$1 = ((((!((map__18852 == null)))?((((map__18852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18852):map__18852);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18852__$1,cljs.core.cst$kw$profile);
var G__18854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18854) : re_frame.core.dispatch.call(null,G__18854));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18855 = params__18629__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855,(0),null);
var G__18858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18858) : re_frame.core.dispatch.call(null,G__18858));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile/favorites",action__18628__auto___18874);


var action__18628__auto__ = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18859 = params__18629__auto__;
var map__18859__$1 = ((((!((map__18859 == null)))?((((map__18859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18859):map__18859);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18859__$1,cljs.core.cst$kw$profile);
var G__18861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18861) : re_frame.core.dispatch.call(null,G__18861));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18862 = params__18629__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(0),null);
var G__18865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18865) : re_frame.core.dispatch.call(null,G__18865));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile",action__18628__auto__);

return ((function (action__18628__auto__){
return (function() { 
var G__18875__delegate = function (args__18627__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:profile",args__18627__auto__);
};
var G__18875 = function (var_args){
var args__18627__auto__ = null;
if (arguments.length > 0) {
var G__18876__i = 0, G__18876__a = new Array(arguments.length -  0);
while (G__18876__i < G__18876__a.length) {G__18876__a[G__18876__i] = arguments[G__18876__i + 0]; ++G__18876__i;}
  args__18627__auto__ = new cljs.core.IndexedSeq(G__18876__a,0,null);
} 
return G__18875__delegate.call(this,args__18627__auto__);};
G__18875.cljs$lang$maxFixedArity = 0;
G__18875.cljs$lang$applyTo = (function (arglist__18877){
var args__18627__auto__ = cljs.core.seq(arglist__18877);
return G__18875__delegate(args__18627__auto__);
});
G__18875.cljs$core$IFn$_invoke$arity$variadic = G__18875__delegate;
return G__18875;
})()
;
;})(action__18628__auto__))
});
conduit.core.history = (function (){var G__18878 = (new goog.History());
var G__18879_18882 = G__18878;
var G__18880_18883 = goog.history.EventType.NAVIGATE;
var G__18881_18884 = ((function (G__18879_18882,G__18880_18883,G__18878){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__18879_18882,G__18880_18883,G__18878))
;
goog.events.listen(G__18879_18882,G__18880_18883,G__18881_18884);

G__18878.setEnabled(true);

return G__18878;
})();
conduit.core.main = (function conduit$core$main(){
var G__18885_18886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialise_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__18885_18886) : re_frame.core.dispatch_sync.call(null,G__18885_18886));

conduit.core.routes();

conduit.core.register_service_worker("js/service-worker.js");

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);
