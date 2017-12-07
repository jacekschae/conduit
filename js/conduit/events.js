// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('conduit.db');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
conduit.events.set_user_interceptor = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18776 = cljs.core.cst$kw$user;
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__18776) : re_frame.core.path.call(null,G__18776));
})(),(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.set_user_ls) : re_frame.core.after.call(null,conduit.db.set_user_ls)),re_frame.core.trim_v], null);
conduit.events.remove_user_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.remove_user_ls) : re_frame.core.after.call(null,conduit.db.remove_user_ls))], null);
conduit.events.api_url = "https://conduit.productionready.io/api";
conduit.events.endpoint = (function conduit$events$endpoint(var_args){
var args__9353__auto__ = [];
var len__9346__auto___18778 = arguments.length;
var i__9347__auto___18779 = (0);
while(true){
if((i__9347__auto___18779 < len__9346__auto___18778)){
args__9353__auto__.push((arguments[i__9347__auto___18779]));

var G__18780 = (i__9347__auto___18779 + (1));
i__9347__auto___18779 = G__18780;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((0) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((0)),(0),null)):null);
return conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(argseq__9354__auto__);
});

conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic = (function (params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.events.api_url], null),params));
});

conduit.events.endpoint.cljs$lang$maxFixedArity = (0);

conduit.events.endpoint.cljs$lang$applyTo = (function (seq18777){
return conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18777));
});

conduit.events.auth_header = (function conduit$events$auth_header(db){

var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user,cljs.core.cst$kw$token], null));
if(cljs.core.truth_(token)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Authorization,["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
} else {
return null;
}
});
conduit.events.add_epoch = (function conduit$events$add_epoch(date,coll){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,cljs.core.cst$kw$epoch,cljs_time.coerce.to_long((date.cljs$core$IFn$_invoke$arity$1 ? date.cljs$core$IFn$_invoke$arity$1(item) : date.call(null,item))));
}),coll);
});
conduit.events.index_by = (function conduit$events$index_by(key,coll){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(key,cljs.core.identity),conduit.events.add_epoch(cljs.core.cst$kw$createdAt,coll)));
});
var G__18781_18786 = cljs.core.cst$kw$set_DASH_hash;
var G__18782_18787 = ((function (G__18781_18786){
return (function (p__18783){
var map__18784 = p__18783;
var map__18784__$1 = ((((!((map__18784 == null)))?((((map__18784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18784):map__18784);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18784__$1,cljs.core.cst$kw$hash);
return location.hash = hash;
});})(G__18781_18786))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18781_18786,G__18782_18787) : re_frame.core.reg_fx.call(null,G__18781_18786,G__18782_18787));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialise_DASH_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18788 = cljs.core.cst$kw$local_DASH_store_DASH_user;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__18788) : re_frame.core.inject_cofx.call(null,G__18788));
})()], null),(function (p__18789,_){
var map__18790 = p__18789;
var map__18790__$1 = ((((!((map__18790 == null)))?((((map__18790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18790):map__18790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,cljs.core.cst$kw$db);
var local_store_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,cljs.core.cst$kw$local_DASH_store_DASH_user);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conduit.db.default_db,cljs.core.cst$kw$user,local_store_user)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_page,(function (p__18792,p__18793){
var map__18794 = p__18792;
var map__18794__$1 = ((((!((map__18794 == null)))?((((map__18794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18794):map__18794);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18794__$1,cljs.core.cst$kw$db);
var vec__18795 = p__18793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18795,(0),null);
var map__18798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18795,(1),null);
var map__18798__$1 = ((((!((map__18798 == null)))?((((map__18798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18798):map__18798);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18798__$1,cljs.core.cst$kw$page);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18798__$1,cljs.core.cst$kw$slug);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18798__$1,cljs.core.cst$kw$profile);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18798__$1,cljs.core.cst$kw$favorited);
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,page);
var G__18801 = page;
var G__18801__$1 = (((G__18801 instanceof cljs.core.Keyword))?G__18801.fqn:null);
switch (G__18801__$1) {
case "home":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,set_page,cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__9048__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(db)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles], null));
return cljs.core._conj((function (){var x__9048__auto____$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_tags], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9048__auto____$1);
})(),x__9048__auto__);
})()], null);

break;
case "login":
case "register":
case "settings":
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,set_page], null);

break;
case "editor":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,set_page,cljs.core.cst$kw$dispatch,(cljs.core.truth_(slug)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_article,slug], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_active_DASH_article], null))], null);

break;
case "article":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(set_page,cljs.core.cst$kw$active_DASH_article,slug),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__9048__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,slug], null)], null);
return cljs.core._conj((function (){var x__9048__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$author,cljs.core.cst$kw$username], null))], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9048__auto____$1);
})(),x__9048__auto__);
})()], null);

break;
case "profile":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(set_page,cljs.core.cst$kw$active_DASH_article,slug),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__9048__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,profile], null)], null);
return cljs.core._conj((function (){var x__9048__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$author,profile], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9048__auto____$1);
})(),x__9048__auto__);
})()], null);

break;
case "favorited":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$profile),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$favorited,favorited], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18801__$1)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_active_DASH_article,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$active_DASH_article);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_article,(function (p__18803,p__18804){
var map__18805 = p__18803;
var map__18805__$1 = ((((!((map__18805 == null)))?((((map__18805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18805):map__18805);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18805__$1,cljs.core.cst$kw$db);
var vec__18806 = p__18804;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18806,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_article,slug),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__9048__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,slug], null)], null);
return cljs.core._conj((function (){var x__9048__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$author,cljs.core.cst$kw$username], null))], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9048__auto____$1);
})(),x__9048__auto__);
})()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_articles,(function (p__18810,p__18811){
var map__18812 = p__18810;
var map__18812__$1 = ((((!((map__18812 == null)))?((((map__18812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18812):map__18812);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18812__$1,cljs.core.cst$kw$db);
var vec__18813 = p__18811;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18813,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18813,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0)),cljs.core.cst$kw$params,params,cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_articles], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$offset], null),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$tag], null),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$author], null),cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$favorites], null),cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$feed], null),false)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_articles_DASH_success,(function (db,p__18817){
var vec__18818 = p__18817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18818,(0),null);
var map__18821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18818,(1),null);
var map__18821__$1 = ((((!((map__18821 == null)))?((((map__18821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18821):map__18821);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18821__$1,cljs.core.cst$kw$articles);
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18821__$1,cljs.core.cst$kw$articlesCount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),false),cljs.core.cst$kw$articles_DASH_count,articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article,(function (p__18823,p__18824){
var map__18825 = p__18823;
var map__18825__$1 = ((((!((map__18825 == null)))?((((map__18825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18825):map__18825);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18825__$1,cljs.core.cst$kw$db);
var vec__18826 = p__18824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18826,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params)], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_article], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_success,(function (db,p__18830){
var vec__18831 = p__18830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(0),null);
var map__18834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18831,(1),null);
var map__18834__$1 = ((((!((map__18834 == null)))?((((map__18834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18834):map__18834);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18834__$1,cljs.core.cst$kw$article);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [article], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upsert_DASH_article,(function (p__18836,p__18837){
var map__18838 = p__18836;
var map__18838__$1 = ((((!((map__18838 == null)))?((((map__18838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18838.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18838):map__18838);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18838__$1,cljs.core.cst$kw$db);
var vec__18839 = p__18837;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18839,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$put:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,(cljs.core.truth_(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params))?conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params)], 0)):conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0))),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,cljs.core.cst$kw$article.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$upsert_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$upsert_DASH_article], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upsert_DASH_article_DASH_success,(function (p__18843,p__18844){
var map__18845 = p__18843;
var map__18845__$1 = ((((!((map__18845 == null)))?((((map__18845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18845):map__18845);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18845__$1,cljs.core.cst$kw$db);
var vec__18846 = p__18844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18846,(0),null);
var map__18849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18846,(1),null);
var map__18849__$1 = ((((!((map__18849 == null)))?((((map__18849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18849):map__18849);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18849__$1,cljs.core.cst$kw$article);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$comments),cljs.core.cst$kw$errors),cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$article,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$active_DASH_article,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], 0)),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__9048__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)], null);
return cljs.core._conj((function (){var x__9048__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9048__auto____$1);
})(),x__9048__auto__);
})(),cljs.core.cst$kw$set_DASH_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hash,["/articles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article))].join('')], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_article,(function (p__18852,p__18853){
var map__18854 = p__18852;
var map__18854__$1 = ((((!((map__18854 == null)))?((((map__18854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18854):map__18854);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18854__$1,cljs.core.cst$kw$db);
var vec__18855 = p__18853;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18855,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,slug,cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$delete_DASH_article], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_article_DASH_success,(function (p__18859,_){
var map__18860 = p__18859;
var map__18860__$1 = ((((!((map__18860 == null)))?((((map__18860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18860):map__18860);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null),cljs.core.dissoc,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,cljs.core.cst$kw$home], null),cljs.core.cst$kw$set_DASH_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hash,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_feed_DASH_articles,(function (p__18862,p__18863){
var map__18864 = p__18862;
var map__18864__$1 = ((((!((map__18864 == null)))?((((map__18864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18864):map__18864);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18864__$1,cljs.core.cst$kw$db);
var vec__18865 = p__18863;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18865,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18865,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles","feed"], 0)),cljs.core.cst$kw$params,params,cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_feed_DASH_articles], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$offset], null),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$tag], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$author], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$favorites], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$feed], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_feed_DASH_articles_DASH_success,(function (db,p__18869){
var vec__18870 = p__18869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(0),null);
var map__18873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18870,(1),null);
var map__18873__$1 = ((((!((map__18873 == null)))?((((map__18873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18873):map__18873);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18873__$1,cljs.core.cst$kw$articles);
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18873__$1,cljs.core.cst$kw$articlesCount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),false),cljs.core.cst$kw$articles_DASH_count,articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_tags,(function (p__18875,_){
var map__18876 = p__18875;
var map__18876__$1 = ((((!((map__18876 == null)))?((((map__18876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18876):map__18876);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18876__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$tags], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tags"], 0)),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_tags_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_tags], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_tags_DASH_success,(function (db,p__18878){
var vec__18879 = p__18878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(0),null);
var map__18882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18879,(1),null);
var map__18882__$1 = ((((!((map__18882 == null)))?((((map__18882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18882):map__18882);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18882__$1,cljs.core.cst$kw$tags);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$tags], null),false),cljs.core.cst$kw$tags,tags);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_comments,(function (p__18884,p__18885){
var map__18886 = p__18884;
var map__18886__$1 = ((((!((map__18886 == null)))?((((map__18886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18886):map__18886);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18886__$1,cljs.core.cst$kw$db);
var vec__18887 = p__18885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18887,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18887,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params),"comments"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_article_DASH_comments], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_comments_DASH_success,(function (db,p__18891){
var vec__18892 = p__18891;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18892,(0),null);
var map__18895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18892,(1),null);
var map__18895__$1 = ((((!((map__18895 == null)))?((((map__18895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18895):map__18895);
var comments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18895__$1,cljs.core.cst$kw$comments);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),false),cljs.core.cst$kw$comments,conduit.events.index_by(cljs.core.cst$kw$id,comments));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_comment,(function (p__18897,p__18898){
var map__18899 = p__18897;
var map__18899__$1 = ((((!((map__18899 == null)))?((((map__18899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18899):map__18899);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18899__$1,cljs.core.cst$kw$db);
var vec__18900 = p__18898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18900,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18900,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),"comments"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,body,cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$post_DASH_comment_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$comments], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_comment_DASH_success,(function (p__18904,p__18905){
var map__18906 = p__18904;
var map__18906__$1 = ((((!((map__18906 == null)))?((((map__18906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18906):map__18906);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18906__$1,cljs.core.cst$kw$db);
var vec__18907 = p__18905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18907,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18907,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$comments], null),comment),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null),cljs.core.dissoc,cljs.core.cst$kw$comments),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_comment,(function (p__18911,p__18912){
var map__18913 = p__18911;
var map__18913__$1 = ((((!((map__18913 == null)))?((((map__18913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18913):map__18913);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18913__$1,cljs.core.cst$kw$db);
var vec__18914 = p__18912;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18914,(0),null);
var comment_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18914,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){
cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_comment,comment_id);
})()
,cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),"comments",comment_id], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$delete_DASH_comment], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_comment_DASH_success,(function (db,_){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comments], null),cljs.core.dissoc,cljs.core.cst$kw$active_DASH_comment.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.cst$kw$active_DASH_comment),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comment], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_user_DASH_profile,(function (p__18918,p__18919){
var map__18920 = p__18918;
var map__18920__$1 = ((((!((map__18920 == null)))?((((map__18920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18920):map__18920);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18920__$1,cljs.core.cst$kw$db);
var vec__18921 = p__18919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18921,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$profile], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(params)], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_user_DASH_profile], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_user_DASH_profile_DASH_success,(function (db,p__18925){
var vec__18926 = p__18925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(0),null);
var map__18929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(1),null);
var map__18929__$1 = ((((!((map__18929 == null)))?((((map__18929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18929):map__18929);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18929__$1,cljs.core.cst$kw$profile);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$profile], null),false),cljs.core.cst$kw$profile,profile);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$login,(function (p__18931,p__18932){
var map__18933 = p__18931;
var map__18933__$1 = ((((!((map__18933 == null)))?((((map__18933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18933):map__18933);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18933__$1,cljs.core.cst$kw$db);
var vec__18934 = p__18932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18934,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18934,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$login], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users","login"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,credentials], null),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$login_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$login_DASH_success,conduit.events.set_user_interceptor,(function (p__18938,p__18939){
var map__18940 = p__18938;
var map__18940__$1 = ((((!((map__18940 == null)))?((((map__18940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18940):map__18940);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18940__$1,cljs.core.cst$kw$db);
var vec__18941 = p__18939;
var map__18944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18941,(0),null);
var map__18944__$1 = ((((!((map__18944 == null)))?((((map__18944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18944):map__18944);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18944__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__9048__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$login], null);
return cljs.core._conj((function (){var x__9048__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,null,cljs.core.cst$kw$author,null,cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__9048__auto____$1);
})(),x__9048__auto__);
})(),cljs.core.cst$kw$set_DASH_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hash,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$register_DASH_user,(function (p__18947,p__18948){
var map__18949 = p__18947;
var map__18949__$1 = ((((!((map__18949 == null)))?((((map__18949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18949):map__18949);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18949__$1,cljs.core.cst$kw$db);
var vec__18950 = p__18948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950,(0),null);
var registration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$register_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,registration], null),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$register_DASH_user], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$register_DASH_user_DASH_success,conduit.events.set_user_interceptor,(function (p__18954,p__18955){
var map__18956 = p__18954;
var map__18956__$1 = ((((!((map__18956 == null)))?((((map__18956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18956):map__18956);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18956__$1,cljs.core.cst$kw$db);
var vec__18957 = p__18955;
var map__18960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18957,(0),null);
var map__18960__$1 = ((((!((map__18960 == null)))?((((map__18960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18960):map__18960);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18960__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$register_DASH_user], null),cljs.core.cst$kw$set_DASH_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hash,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_user,(function (p__18963,p__18964){
var map__18965 = p__18963;
var map__18965__$1 = ((((!((map__18965 == null)))?((((map__18965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18965):map__18965);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18965__$1,cljs.core.cst$kw$db);
var vec__18966 = p__18964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18966,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18966,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$update_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["user"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$update_DASH_user], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$update_DASH_user_DASH_success,conduit.events.set_user_interceptor,(function (p__18970,p__18971){
var map__18972 = p__18970;
var map__18972__$1 = ((((!((map__18972 == null)))?((((map__18972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18972):map__18972);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972__$1,cljs.core.cst$kw$db);
var vec__18973 = p__18971;
var map__18976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(0),null);
var map__18976__$1 = ((((!((map__18976 == null)))?((((map__18976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18976):map__18976);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$update_DASH_user], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_follow_DASH_user,(function (p__18979,p__18980){
var map__18981 = p__18979;
var map__18981__$1 = ((((!((map__18981 == null)))?((((map__18981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18981):map__18981);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18981__$1,cljs.core.cst$kw$db);
var vec__18982 = p__18980;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18982,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_follow_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile,cljs.core.cst$kw$following], null)))?cljs.core.cst$kw$delete:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",username,"follow"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_follow_DASH_user_DASH_success,(function (db,p__18986){
var vec__18987 = p__18986;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18987,(0),null);
var map__18990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18987,(1),null);
var map__18990__$1 = ((((!((map__18990 == null)))?((((map__18990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18990):map__18990);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18990__$1,cljs.core.cst$kw$profile);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_follow_DASH_user], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile,cljs.core.cst$kw$following], null),cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,(function (p__18992,p__18993){
var map__18994 = p__18992;
var map__18994__$1 = ((((!((map__18994 == null)))?((((map__18994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18994):map__18994);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18994__$1,cljs.core.cst$kw$db);
var vec__18995 = p__18993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18995,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18995,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_favorite_DASH_article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favorited], null)))?cljs.core.cst$kw$delete:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug,"favorite"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article_DASH_success,(function (db,p__18999){
var vec__19000 = p__18999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19000,(0),null);
var map__19003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19000,(1),null);
var map__19003__$1 = ((((!((map__19003 == null)))?((((map__19003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19003):map__19003);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19003__$1,cljs.core.cst$kw$article);
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
var favorited = cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(article);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_favorite_DASH_article], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favorited], null),favorited),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favoritesCount], null),(cljs.core.truth_(favorited)?cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$2(article,cljs.core.inc):cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$2(article,cljs.core.dec)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$logout,conduit.events.remove_user_interceptor,(function (p__19005,_){
var map__19006 = p__19005;
var map__19006__$1 = ((((!((map__19006 == null)))?((((map__19006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19006):map__19006);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$user),cljs.core.cst$kw$set_DASH_hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hash,"/"], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$complete_DASH_request,(function (db,p__19008){
var vec__19009 = p__19008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,request_type], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$api_DASH_request_DASH_error,(function (p__19012,p__19013){
var map__19014 = p__19012;
var map__19014__$1 = ((((!((map__19014 == null)))?((((map__19014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19014):map__19014);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19014__$1,cljs.core.cst$kw$db);
var vec__19015 = p__19013;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19015,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,request_type], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$errors], null))),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,request_type], null)], null);
}));
