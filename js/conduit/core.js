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
conduit.core.routes = (function conduit$core$routes(){
location.hash = "/";

secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__18628__auto___18865 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18795 = params__18629__auto__;
var map__18795__$1 = ((((!((map__18795 == null)))?((((map__18795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18795):map__18795);
var G__18797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18797) : re_frame.core.dispatch.call(null,G__18797));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18798 = params__18629__auto__;
var G__18801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18801) : re_frame.core.dispatch.call(null,G__18801));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__18628__auto___18865);


var action__18628__auto___18866 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18802 = params__18629__auto__;
var map__18802__$1 = ((((!((map__18802 == null)))?((((map__18802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18802):map__18802);
var G__18804 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18804) : re_frame.core.dispatch.call(null,G__18804));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18805 = params__18629__auto__;
var G__18808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18808) : re_frame.core.dispatch.call(null,G__18808));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/login",action__18628__auto___18866);


var action__18628__auto___18867 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18809 = params__18629__auto__;
var map__18809__$1 = ((((!((map__18809 == null)))?((((map__18809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18809):map__18809);
var G__18811 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18811) : re_frame.core.dispatch.call(null,G__18811));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18812 = params__18629__auto__;
var G__18815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18815) : re_frame.core.dispatch.call(null,G__18815));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/register",action__18628__auto___18867);


var action__18628__auto___18868 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18816 = params__18629__auto__;
var map__18816__$1 = ((((!((map__18816 == null)))?((((map__18816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18816):map__18816);
var G__18818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18818) : re_frame.core.dispatch.call(null,G__18818));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18819 = params__18629__auto__;
var G__18822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18822) : re_frame.core.dispatch.call(null,G__18822));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/settings",action__18628__auto___18868);


var action__18628__auto___18869 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18823 = params__18629__auto__;
var map__18823__$1 = ((((!((map__18823 == null)))?((((map__18823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18823):map__18823);
var G__18825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18825) : re_frame.core.dispatch.call(null,G__18825));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18826 = params__18629__auto__;
var G__18829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18829) : re_frame.core.dispatch.call(null,G__18829));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor",action__18628__auto___18869);


var action__18628__auto___18870 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18830 = params__18629__auto__;
var map__18830__$1 = ((((!((map__18830 == null)))?((((map__18830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18830):map__18830);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18830__$1,cljs.core.cst$kw$slug);
var G__18832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18832) : re_frame.core.dispatch.call(null,G__18832));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18833 = params__18629__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(0),null);
var G__18836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18836) : re_frame.core.dispatch.call(null,G__18836));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor/:slug",action__18628__auto___18870);


var action__18628__auto___18871 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18837 = params__18629__auto__;
var map__18837__$1 = ((((!((map__18837 == null)))?((((map__18837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18837):map__18837);
var G__18839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18839) : re_frame.core.dispatch.call(null,G__18839));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18840 = params__18629__auto__;
var G__18843 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18843) : re_frame.core.dispatch.call(null,G__18843));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/logout",action__18628__auto___18871);


var action__18628__auto___18872 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18844 = params__18629__auto__;
var map__18844__$1 = ((((!((map__18844 == null)))?((((map__18844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18844):map__18844);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18844__$1,cljs.core.cst$kw$slug);
var G__18846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18846) : re_frame.core.dispatch.call(null,G__18846));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18847 = params__18629__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18847,(0),null);
var G__18850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18850) : re_frame.core.dispatch.call(null,G__18850));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/article/:slug",action__18628__auto___18872);


var action__18628__auto___18873 = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18851 = params__18629__auto__;
var map__18851__$1 = ((((!((map__18851 == null)))?((((map__18851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18851):map__18851);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18851__$1,cljs.core.cst$kw$profile);
var G__18853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18853) : re_frame.core.dispatch.call(null,G__18853));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18854 = params__18629__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18854,(0),null);
var G__18857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18857) : re_frame.core.dispatch.call(null,G__18857));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile/favorites",action__18628__auto___18873);


var action__18628__auto__ = (function (params__18629__auto__){
if(cljs.core.map_QMARK_(params__18629__auto__)){
var map__18858 = params__18629__auto__;
var map__18858__$1 = ((((!((map__18858 == null)))?((((map__18858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18858):map__18858);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18858__$1,cljs.core.cst$kw$profile);
var G__18860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18860) : re_frame.core.dispatch.call(null,G__18860));
} else {
if(cljs.core.vector_QMARK_(params__18629__auto__)){
var vec__18861 = params__18629__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18861,(0),null);
var G__18864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18864) : re_frame.core.dispatch.call(null,G__18864));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile",action__18628__auto__);

return ((function (action__18628__auto__){
return (function() { 
var G__18874__delegate = function (args__18627__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:profile",args__18627__auto__);
};
var G__18874 = function (var_args){
var args__18627__auto__ = null;
if (arguments.length > 0) {
var G__18875__i = 0, G__18875__a = new Array(arguments.length -  0);
while (G__18875__i < G__18875__a.length) {G__18875__a[G__18875__i] = arguments[G__18875__i + 0]; ++G__18875__i;}
  args__18627__auto__ = new cljs.core.IndexedSeq(G__18875__a,0,null);
} 
return G__18874__delegate.call(this,args__18627__auto__);};
G__18874.cljs$lang$maxFixedArity = 0;
G__18874.cljs$lang$applyTo = (function (arglist__18876){
var args__18627__auto__ = cljs.core.seq(arglist__18876);
return G__18874__delegate(args__18627__auto__);
});
G__18874.cljs$core$IFn$_invoke$arity$variadic = G__18874__delegate;
return G__18874;
})()
;
;})(action__18628__auto__))
});
conduit.core.history = (function (){var G__18877 = (new goog.History());
var G__18878_18881 = G__18877;
var G__18879_18882 = goog.history.EventType.NAVIGATE;
var G__18880_18883 = ((function (G__18878_18881,G__18879_18882,G__18877){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__18878_18881,G__18879_18882,G__18877))
;
goog.events.listen(G__18878_18881,G__18879_18882,G__18880_18883);

G__18877.setEnabled(true);

return G__18877;
})();
conduit.core.main = (function conduit$core$main(){
var G__18884_18885 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialise_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__18884_18885) : re_frame.core.dispatch_sync.call(null,G__18884_18885));

conduit.core.routes();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);
