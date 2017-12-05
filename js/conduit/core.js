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
goog.require('devtools.core');
goog.require('goog.History');
goog.require('goog.history.EventType');
devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();
cljs.core.enable_console_print_BANG_();
conduit.core.routes = (function conduit$core$routes(){
location.hash = "/";

secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__21594__auto___21871 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21801 = params__21595__auto__;
var map__21801__$1 = ((((!((map__21801 == null)))?((((map__21801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21801):map__21801);
var G__21803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21803) : re_frame.core.dispatch.call(null,G__21803));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21804 = params__21595__auto__;
var G__21807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$home], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21807) : re_frame.core.dispatch.call(null,G__21807));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__21594__auto___21871);


var action__21594__auto___21872 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21808 = params__21595__auto__;
var map__21808__$1 = ((((!((map__21808 == null)))?((((map__21808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21808):map__21808);
var G__21810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21810) : re_frame.core.dispatch.call(null,G__21810));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21811 = params__21595__auto__;
var G__21814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$login], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21814) : re_frame.core.dispatch.call(null,G__21814));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/login",action__21594__auto___21872);


var action__21594__auto___21873 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21815 = params__21595__auto__;
var map__21815__$1 = ((((!((map__21815 == null)))?((((map__21815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21815):map__21815);
var G__21817 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21817) : re_frame.core.dispatch.call(null,G__21817));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21818 = params__21595__auto__;
var G__21821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$register], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21821) : re_frame.core.dispatch.call(null,G__21821));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/register",action__21594__auto___21873);


var action__21594__auto___21874 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21822 = params__21595__auto__;
var map__21822__$1 = ((((!((map__21822 == null)))?((((map__21822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21822):map__21822);
var G__21824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21824) : re_frame.core.dispatch.call(null,G__21824));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21825 = params__21595__auto__;
var G__21828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$settings], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21828) : re_frame.core.dispatch.call(null,G__21828));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/settings",action__21594__auto___21874);


var action__21594__auto___21875 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21829 = params__21595__auto__;
var map__21829__$1 = ((((!((map__21829 == null)))?((((map__21829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21829):map__21829);
var G__21831 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21831) : re_frame.core.dispatch.call(null,G__21831));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21832 = params__21595__auto__;
var G__21835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21835) : re_frame.core.dispatch.call(null,G__21835));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor",action__21594__auto___21875);


var action__21594__auto___21876 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21836 = params__21595__auto__;
var map__21836__$1 = ((((!((map__21836 == null)))?((((map__21836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21836):map__21836);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21836__$1,cljs.core.cst$kw$slug);
var G__21838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21838) : re_frame.core.dispatch.call(null,G__21838));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21839 = params__21595__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,(0),null);
var G__21842 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$editor,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21842) : re_frame.core.dispatch.call(null,G__21842));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/editor/:slug",action__21594__auto___21876);


var action__21594__auto___21877 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21843 = params__21595__auto__;
var map__21843__$1 = ((((!((map__21843 == null)))?((((map__21843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21843):map__21843);
var G__21845 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21845) : re_frame.core.dispatch.call(null,G__21845));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21846 = params__21595__auto__;
var G__21849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21849) : re_frame.core.dispatch.call(null,G__21849));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/logout",action__21594__auto___21877);


var action__21594__auto___21878 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21850 = params__21595__auto__;
var map__21850__$1 = ((((!((map__21850 == null)))?((((map__21850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21850):map__21850);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21850__$1,cljs.core.cst$kw$slug);
var G__21852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21852) : re_frame.core.dispatch.call(null,G__21852));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21853 = params__21595__auto__;
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21853,(0),null);
var G__21856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$article,cljs.core.cst$kw$slug,slug], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21856) : re_frame.core.dispatch.call(null,G__21856));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/article/:slug",action__21594__auto___21878);


var action__21594__auto___21879 = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21857 = params__21595__auto__;
var map__21857__$1 = ((((!((map__21857 == null)))?((((map__21857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21857):map__21857);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21857__$1,cljs.core.cst$kw$profile);
var G__21859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21859) : re_frame.core.dispatch.call(null,G__21859));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21860 = params__21595__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21860,(0),null);
var G__21863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$favorited,cljs.core.cst$kw$favorited,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21863) : re_frame.core.dispatch.call(null,G__21863));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile/favorites",action__21594__auto___21879);


var action__21594__auto__ = (function (params__21595__auto__){
if(cljs.core.map_QMARK_(params__21595__auto__)){
var map__21864 = params__21595__auto__;
var map__21864__$1 = ((((!((map__21864 == null)))?((((map__21864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21864):map__21864);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.cst$kw$profile);
var G__21866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21866) : re_frame.core.dispatch.call(null,G__21866));
} else {
if(cljs.core.vector_QMARK_(params__21595__auto__)){
var vec__21867 = params__21595__auto__;
var profile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21867,(0),null);
var G__21870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$profile,cljs.core.cst$kw$profile,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__21870) : re_frame.core.dispatch.call(null,G__21870));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:profile",action__21594__auto__);

return ((function (action__21594__auto__){
return (function() { 
var G__21880__delegate = function (args__21593__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:profile",args__21593__auto__);
};
var G__21880 = function (var_args){
var args__21593__auto__ = null;
if (arguments.length > 0) {
var G__21881__i = 0, G__21881__a = new Array(arguments.length -  0);
while (G__21881__i < G__21881__a.length) {G__21881__a[G__21881__i] = arguments[G__21881__i + 0]; ++G__21881__i;}
  args__21593__auto__ = new cljs.core.IndexedSeq(G__21881__a,0,null);
} 
return G__21880__delegate.call(this,args__21593__auto__);};
G__21880.cljs$lang$maxFixedArity = 0;
G__21880.cljs$lang$applyTo = (function (arglist__21882){
var args__21593__auto__ = cljs.core.seq(arglist__21882);
return G__21880__delegate(args__21593__auto__);
});
G__21880.cljs$core$IFn$_invoke$arity$variadic = G__21880__delegate;
return G__21880;
})()
;
;})(action__21594__auto__))
});
conduit.core.history = (function (){var G__21883 = (new goog.History());
var G__21884_21887 = G__21883;
var G__21885_21888 = goog.history.EventType.NAVIGATE;
var G__21886_21889 = ((function (G__21884_21887,G__21885_21888,G__21883){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__21884_21887,G__21885_21888,G__21883))
;
goog.events.listen(G__21884_21887,G__21885_21888,G__21886_21889);

G__21883.setEnabled(true);

return G__21883;
})();
conduit.core.main = (function conduit$core$main(){
var G__21890_21891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialise_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__21890_21891) : re_frame.core.dispatch_sync.call(null,G__21890_21891));

conduit.core.routes();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);
