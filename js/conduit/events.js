// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('conduit.db');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
conduit.events.set_user_interceptor = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18376 = cljs.core.cst$kw$user;
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__18376) : re_frame.core.path.call(null,G__18376));
})(),(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.user__GT_local_store) : re_frame.core.after.call(null,conduit.db.user__GT_local_store)),re_frame.core.trim_v], null);
conduit.events.remove_user_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.local_store__GT_nil) : re_frame.core.after.call(null,conduit.db.local_store__GT_nil))], null);
conduit.events.api_url = "https://conduit.productionready.io/api";
conduit.events.uri = (function conduit$events$uri(var_args){
var args__8944__auto__ = [];
var len__8937__auto___18378 = arguments.length;
var i__8938__auto___18379 = (0);
while(true){
if((i__8938__auto___18379 < len__8937__auto___18378)){
args__8944__auto__.push((arguments[i__8938__auto___18379]));

var G__18380 = (i__8938__auto___18379 + (1));
i__8938__auto___18379 = G__18380;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic = (function (params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.events.api_url], null),params));
});

conduit.events.uri.cljs$lang$maxFixedArity = (0);

conduit.events.uri.cljs$lang$applyTo = (function (seq18377){
return conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18377));
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
var G__18381_18386 = cljs.core.cst$kw$set_DASH_url;
var G__18382_18387 = ((function (G__18381_18386){
return (function (p__18383){
var map__18384 = p__18383;
var map__18384__$1 = ((((!((map__18384 == null)))?((((map__18384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18384):map__18384);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18384__$1,cljs.core.cst$kw$url);
return location.hash = url;
});})(G__18381_18386))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__18381_18386,G__18382_18387) : re_frame.core.reg_fx.call(null,G__18381_18386,G__18382_18387));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialise_DASH_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18388 = cljs.core.cst$kw$local_DASH_store_DASH_user;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__18388) : re_frame.core.inject_cofx.call(null,G__18388));
})()], null),(function (p__18389,_){
var map__18390 = p__18389;
var map__18390__$1 = ((((!((map__18390 == null)))?((((map__18390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18390):map__18390);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18390__$1,cljs.core.cst$kw$db);
var local_store_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18390__$1,cljs.core.cst$kw$local_DASH_store_DASH_user);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conduit.db.default_db,cljs.core.cst$kw$user,local_store_user)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_page,(function (p__18392,p__18393){
var map__18394 = p__18392;
var map__18394__$1 = ((((!((map__18394 == null)))?((((map__18394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18394):map__18394);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18394__$1,cljs.core.cst$kw$db);
var vec__18395 = p__18393;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18395,(0),null);
var map__18398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18395,(1),null);
var map__18398__$1 = ((((!((map__18398 == null)))?((((map__18398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18398):map__18398);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,cljs.core.cst$kw$page);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,cljs.core.cst$kw$slug);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,cljs.core.cst$kw$profile);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,cljs.core.cst$kw$favorited);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$home,page)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,page),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = ((cljs.core.empty_QMARK_(cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(db)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles], null));
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_tags], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$login,page)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,page)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$register,page)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,page)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$settings,page)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,page)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$editor,page)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,page),cljs.core.cst$kw$dispatch,(cljs.core.truth_(slug)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_article,slug], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset_DASH_active_DASH_article], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$article,page)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$active_DASH_page,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$active_DASH_article,slug], 0)),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,slug], null)], null);
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$author,cljs.core.cst$kw$username], null))], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$profile,page)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$active_DASH_page,page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$active_DASH_article,slug], 0)),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,profile], null)], null);
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$author,profile], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$favorited,page)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$profile),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$favorited,favorited], null)], null)], null);
} else {
return null;
}
}
}
}
}
}
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset_DASH_active_DASH_article,(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$active_DASH_article);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_article,(function (p__18401,p__18402){
var map__18403 = p__18401;
var map__18403__$1 = ((((!((map__18403 == null)))?((((map__18403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18403):map__18403);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18403__$1,cljs.core.cst$kw$db);
var vec__18404 = p__18402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18404,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18404,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_article,slug),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,slug], null)], null);
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$author,cljs.core.cst$kw$username], null))], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_articles,(function (p__18408,p__18409){
var map__18410 = p__18408;
var map__18410__$1 = ((((!((map__18410 == null)))?((((map__18410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18410):map__18410);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18410__$1,cljs.core.cst$kw$db);
var vec__18411 = p__18409;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18411,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18411,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0)),cljs.core.cst$kw$params,params,cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_articles], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$offset], null),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$tag], null),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$author], null),cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$favorites], null),cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$feed], null),false)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_articles_DASH_success,(function (db,p__18415){
var vec__18416 = p__18415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(0),null);
var map__18419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(1),null);
var map__18419__$1 = ((((!((map__18419 == null)))?((((map__18419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18419):map__18419);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,cljs.core.cst$kw$articles);
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,cljs.core.cst$kw$articlesCount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),false),cljs.core.cst$kw$articles_DASH_count,articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article,(function (p__18421,p__18422){
var map__18423 = p__18421;
var map__18423__$1 = ((((!((map__18423 == null)))?((((map__18423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18423):map__18423);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18423__$1,cljs.core.cst$kw$db);
var vec__18424 = p__18422;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params)], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_article], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_success,(function (db,p__18428){
var vec__18429 = p__18428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18429,(0),null);
var map__18432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18429,(1),null);
var map__18432__$1 = ((((!((map__18432 == null)))?((((map__18432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18432):map__18432);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,cljs.core.cst$kw$article);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [article], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upsert_DASH_article,(function (p__18434,p__18435){
var map__18436 = p__18434;
var map__18436__$1 = ((((!((map__18436 == null)))?((((map__18436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18436):map__18436);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18436__$1,cljs.core.cst$kw$db);
var vec__18437 = p__18435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18437,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$put:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,(cljs.core.truth_(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params))?conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params)], 0)):conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0))),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,cljs.core.cst$kw$article.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$upsert_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$upsert_DASH_article], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upsert_DASH_article_DASH_success,(function (p__18441,p__18442){
var map__18443 = p__18441;
var map__18443__$1 = ((((!((map__18443 == null)))?((((map__18443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18443):map__18443);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18443__$1,cljs.core.cst$kw$db);
var vec__18444 = p__18442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18444,(0),null);
var map__18447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18444,(1),null);
var map__18447__$1 = ((((!((map__18447 == null)))?((((map__18447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18447):map__18447);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18447__$1,cljs.core.cst$kw$article);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$comments),cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$article,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$active_DASH_article,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)], null),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,["/articles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article))].join('')], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_article,(function (p__18450,p__18451){
var map__18452 = p__18450;
var map__18452__$1 = ((((!((map__18452 == null)))?((((map__18452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18452):map__18452);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18452__$1,cljs.core.cst$kw$db);
var vec__18453 = p__18451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18453,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18453,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,slug,cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$delete_DASH_article], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_article_DASH_success,(function (p__18457,_){
var map__18458 = p__18457;
var map__18458__$1 = ((((!((map__18458 == null)))?((((map__18458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18458):map__18458);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18458__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null),cljs.core.dissoc,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,cljs.core.cst$kw$home], null),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_feed_DASH_articles,(function (p__18460,p__18461){
var map__18462 = p__18460;
var map__18462__$1 = ((((!((map__18462 == null)))?((((map__18462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18462):map__18462);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18462__$1,cljs.core.cst$kw$db);
var vec__18463 = p__18461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18463,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles","feed"], 0)),cljs.core.cst$kw$params,params,cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_feed_DASH_articles], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$offset], null),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$tag], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$author], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$favorites], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$feed], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_feed_DASH_articles_DASH_success,(function (db,p__18467){
var vec__18468 = p__18467;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468,(0),null);
var map__18471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18468,(1),null);
var map__18471__$1 = ((((!((map__18471 == null)))?((((map__18471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18471):map__18471);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,cljs.core.cst$kw$articles);
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,cljs.core.cst$kw$articlesCount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),false),cljs.core.cst$kw$articles_DASH_count,articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_tags,(function (p__18473,_){
var map__18474 = p__18473;
var map__18474__$1 = ((((!((map__18474 == null)))?((((map__18474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18474):map__18474);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18474__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$tags], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tags"], 0)),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_tags_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_tags], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_tags_DASH_success,(function (db,p__18476){
var vec__18477 = p__18476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(0),null);
var map__18480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18477,(1),null);
var map__18480__$1 = ((((!((map__18480 == null)))?((((map__18480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18480):map__18480);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18480__$1,cljs.core.cst$kw$tags);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$tags], null),false),cljs.core.cst$kw$tags,tags);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_comments,(function (p__18482,p__18483){
var map__18484 = p__18482;
var map__18484__$1 = ((((!((map__18484 == null)))?((((map__18484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18484):map__18484);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18484__$1,cljs.core.cst$kw$db);
var vec__18485 = p__18483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18485,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18485,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params),"comments"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_article_DASH_comments], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_comments_DASH_success,(function (db,p__18489){
var vec__18490 = p__18489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18490,(0),null);
var map__18493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18490,(1),null);
var map__18493__$1 = ((((!((map__18493 == null)))?((((map__18493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18493):map__18493);
var comments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18493__$1,cljs.core.cst$kw$comments);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),false),cljs.core.cst$kw$comments,conduit.events.index_by(cljs.core.cst$kw$id,comments));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_comment,(function (p__18495,p__18496){
var map__18497 = p__18495;
var map__18497__$1 = ((((!((map__18497 == null)))?((((map__18497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18497):map__18497);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,cljs.core.cst$kw$db);
var vec__18498 = p__18496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),"comments"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,body,cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$post_DASH_comment_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$comments], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_comment_DASH_success,(function (p__18502,p__18503){
var map__18504 = p__18502;
var map__18504__$1 = ((((!((map__18504 == null)))?((((map__18504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18504):map__18504);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18504__$1,cljs.core.cst$kw$db);
var vec__18505 = p__18503;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18505,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18505,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$comments], null),comment),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null),cljs.core.dissoc,cljs.core.cst$kw$comments),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_comment,(function (p__18509,p__18510){
var map__18511 = p__18509;
var map__18511__$1 = ((((!((map__18511 == null)))?((((map__18511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18511):map__18511);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18511__$1,cljs.core.cst$kw$db);
var vec__18512 = p__18510;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(0),null);
var comment_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){
cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_comment,comment_id);
})()
,cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),"comments",comment_id], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$delete_DASH_comment], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_comment_DASH_success,(function (db,_){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comments], null),cljs.core.dissoc,cljs.core.cst$kw$active_DASH_comment.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.cst$kw$active_DASH_comment),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comment], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_user_DASH_profile,(function (p__18516,p__18517){
var map__18518 = p__18516;
var map__18518__$1 = ((((!((map__18518 == null)))?((((map__18518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18518.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18518):map__18518);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18518__$1,cljs.core.cst$kw$db);
var vec__18519 = p__18517;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18519,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$profile], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(params)], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_user_DASH_profile], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_user_DASH_profile_DASH_success,(function (db,p__18523){
var vec__18524 = p__18523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(0),null);
var map__18527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18524,(1),null);
var map__18527__$1 = ((((!((map__18527 == null)))?((((map__18527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18527):map__18527);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18527__$1,cljs.core.cst$kw$profile);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$profile], null),false),cljs.core.cst$kw$profile,profile);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$login,(function (p__18529,p__18530){
var map__18531 = p__18529;
var map__18531__$1 = ((((!((map__18531 == null)))?((((map__18531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18531):map__18531);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18531__$1,cljs.core.cst$kw$db);
var vec__18532 = p__18530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$login], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users","login"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,credentials], null),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$login_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$login_DASH_success,conduit.events.set_user_interceptor,(function (p__18536,p__18537){
var map__18538 = p__18536;
var map__18538__$1 = ((((!((map__18538 == null)))?((((map__18538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18538):map__18538);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18538__$1,cljs.core.cst$kw$db);
var vec__18539 = p__18537;
var map__18542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18539,(0),null);
var map__18542__$1 = ((((!((map__18542 == null)))?((((map__18542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18542):map__18542);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18542__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$login], null);
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,null,cljs.core.cst$kw$author,null,cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})(),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$register_DASH_user,(function (p__18545,p__18546){
var map__18547 = p__18545;
var map__18547__$1 = ((((!((map__18547 == null)))?((((map__18547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18547.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18547):map__18547);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18547__$1,cljs.core.cst$kw$db);
var vec__18548 = p__18546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18548,(0),null);
var registration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18548,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$register_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,registration], null),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$register_DASH_user], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$register_DASH_user_DASH_success,conduit.events.set_user_interceptor,(function (p__18552,p__18553){
var map__18554 = p__18552;
var map__18554__$1 = ((((!((map__18554 == null)))?((((map__18554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18554):map__18554);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18554__$1,cljs.core.cst$kw$db);
var vec__18555 = p__18553;
var map__18558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18555,(0),null);
var map__18558__$1 = ((((!((map__18558 == null)))?((((map__18558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18558):map__18558);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18558__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$register_DASH_user], null),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_user,(function (p__18561,p__18562){
var map__18563 = p__18561;
var map__18563__$1 = ((((!((map__18563 == null)))?((((map__18563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18563):map__18563);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18563__$1,cljs.core.cst$kw$db);
var vec__18564 = p__18562;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18564,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18564,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$update_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["user"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$update_DASH_user], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$update_DASH_user_DASH_success,conduit.events.set_user_interceptor,(function (p__18568,p__18569){
var map__18570 = p__18568;
var map__18570__$1 = ((((!((map__18570 == null)))?((((map__18570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18570):map__18570);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18570__$1,cljs.core.cst$kw$db);
var vec__18571 = p__18569;
var map__18574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18571,(0),null);
var map__18574__$1 = ((((!((map__18574 == null)))?((((map__18574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18574):map__18574);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18574__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$update_DASH_user], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_follow_DASH_user,(function (p__18577,p__18578){
var map__18579 = p__18577;
var map__18579__$1 = ((((!((map__18579 == null)))?((((map__18579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18579):map__18579);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18579__$1,cljs.core.cst$kw$db);
var vec__18580 = p__18578;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18580,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18580,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_follow_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile,cljs.core.cst$kw$following], null)))?cljs.core.cst$kw$delete:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",username,"follow"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_follow_DASH_user_DASH_success,(function (db,p__18584){
var vec__18585 = p__18584;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18585,(0),null);
var map__18588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18585,(1),null);
var map__18588__$1 = ((((!((map__18588 == null)))?((((map__18588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18588):map__18588);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18588__$1,cljs.core.cst$kw$profile);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_follow_DASH_user], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile,cljs.core.cst$kw$following], null),cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,(function (p__18590,p__18591){
var map__18592 = p__18590;
var map__18592__$1 = ((((!((map__18592 == null)))?((((map__18592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18592):map__18592);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18592__$1,cljs.core.cst$kw$db);
var vec__18593 = p__18591;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18593,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18593,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_favorite_DASH_article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favorited], null)))?cljs.core.cst$kw$delete:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug,"favorite"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article_DASH_success,(function (db,p__18597){
var vec__18598 = p__18597;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18598,(0),null);
var map__18601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18598,(1),null);
var map__18601__$1 = ((((!((map__18601 == null)))?((((map__18601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18601):map__18601);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18601__$1,cljs.core.cst$kw$article);
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
var favorited = cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(article);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_favorite_DASH_article], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favorited], null),favorited),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favoritesCount], null),(cljs.core.truth_(favorited)?cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$2(article,cljs.core.inc):cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$2(article,cljs.core.dec)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$logout,conduit.events.remove_user_interceptor,(function (p__18603,_){
var map__18604 = p__18603;
var map__18604__$1 = ((((!((map__18604 == null)))?((((map__18604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18604):map__18604);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18604__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$user),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$complete_DASH_request,(function (db,p__18606){
var vec__18607 = p__18606;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18607,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,request_type], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$api_DASH_request_DASH_error,(function (p__18610,p__18611){
var map__18612 = p__18610;
var map__18612__$1 = ((((!((map__18612 == null)))?((((map__18612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18612):map__18612);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18612__$1,cljs.core.cst$kw$db);
var vec__18613 = p__18611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18613,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,request_type], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$errors], null))),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,request_type], null)], null);
}));
