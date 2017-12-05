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
conduit.events.set_user_interceptor = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21342 = cljs.core.cst$kw$user;
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__21342) : re_frame.core.path.call(null,G__21342));
})(),(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.user__GT_local_store) : re_frame.core.after.call(null,conduit.db.user__GT_local_store)),re_frame.core.trim_v], null);
conduit.events.remove_user_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.local_store__GT_nil) : re_frame.core.after.call(null,conduit.db.local_store__GT_nil))], null);
conduit.events.api_url = "https://conduit.productionready.io/api";
conduit.events.uri = (function conduit$events$uri(var_args){
var args__8944__auto__ = [];
var len__8937__auto___21344 = arguments.length;
var i__8938__auto___21345 = (0);
while(true){
if((i__8938__auto___21345 < len__8937__auto___21344)){
args__8944__auto__.push((arguments[i__8938__auto___21345]));

var G__21346 = (i__8938__auto___21345 + (1));
i__8938__auto___21345 = G__21346;
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

conduit.events.uri.cljs$lang$applyTo = (function (seq21343){
return conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21343));
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
var G__21347_21352 = cljs.core.cst$kw$set_DASH_url;
var G__21348_21353 = ((function (G__21347_21352){
return (function (p__21349){
var map__21350 = p__21349;
var map__21350__$1 = ((((!((map__21350 == null)))?((((map__21350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21350):map__21350);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21350__$1,cljs.core.cst$kw$url);
return location.hash = url;
});})(G__21347_21352))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__21347_21352,G__21348_21353) : re_frame.core.reg_fx.call(null,G__21347_21352,G__21348_21353));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialise_DASH_db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21354 = cljs.core.cst$kw$local_DASH_store_DASH_user;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__21354) : re_frame.core.inject_cofx.call(null,G__21354));
})()], null),(function (p__21355,_){
var map__21356 = p__21355;
var map__21356__$1 = ((((!((map__21356 == null)))?((((map__21356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21356):map__21356);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,cljs.core.cst$kw$db);
var local_store_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,cljs.core.cst$kw$local_DASH_store_DASH_user);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conduit.db.default_db,cljs.core.cst$kw$user,local_store_user)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_page,(function (p__21358,p__21359){
var map__21360 = p__21358;
var map__21360__$1 = ((((!((map__21360 == null)))?((((map__21360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21360):map__21360);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21360__$1,cljs.core.cst$kw$db);
var vec__21361 = p__21359;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21361,(0),null);
var map__21364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21361,(1),null);
var map__21364__$1 = ((((!((map__21364 == null)))?((((map__21364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21364):map__21364);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,cljs.core.cst$kw$page);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,cljs.core.cst$kw$slug);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,cljs.core.cst$kw$profile);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21364__$1,cljs.core.cst$kw$favorited);
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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$set_DASH_active_DASH_article,(function (p__21367,p__21368){
var map__21369 = p__21367;
var map__21369__$1 = ((((!((map__21369 == null)))?((((map__21369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21369):map__21369);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369__$1,cljs.core.cst$kw$db);
var vec__21370 = p__21368;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21370,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21370,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_article,slug),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,slug], null)], null);
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$profile,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$author,cljs.core.cst$kw$username], null))], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})()], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_articles,(function (p__21374,p__21375){
var map__21376 = p__21374;
var map__21376__$1 = ((((!((map__21376 == null)))?((((map__21376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21376):map__21376);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376__$1,cljs.core.cst$kw$db);
var vec__21377 = p__21375;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21377,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21377,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0)),cljs.core.cst$kw$params,params,cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_articles], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$offset], null),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$tag], null),cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$author], null),cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$favorites], null),cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$feed], null),false)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_articles_DASH_success,(function (db,p__21381){
var vec__21382 = p__21381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21382,(0),null);
var map__21385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21382,(1),null);
var map__21385__$1 = ((((!((map__21385 == null)))?((((map__21385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21385):map__21385);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.cst$kw$articles);
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385__$1,cljs.core.cst$kw$articlesCount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),false),cljs.core.cst$kw$articles_DASH_count,articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article,(function (p__21387,p__21388){
var map__21389 = p__21387;
var map__21389__$1 = ((((!((map__21389 == null)))?((((map__21389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21389):map__21389);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,cljs.core.cst$kw$db);
var vec__21390 = p__21388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21390,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21390,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params)], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_article], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_success,(function (db,p__21394){
var vec__21395 = p__21394;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,(0),null);
var map__21398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21395,(1),null);
var map__21398__$1 = ((((!((map__21398 == null)))?((((map__21398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21398.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21398):map__21398);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,cljs.core.cst$kw$article);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [article], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upsert_DASH_article,(function (p__21400,p__21401){
var map__21402 = p__21400;
var map__21402__$1 = ((((!((map__21402 == null)))?((((map__21402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21402):map__21402);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21402__$1,cljs.core.cst$kw$db);
var vec__21403 = p__21401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21403,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21403,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$put:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,(cljs.core.truth_(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params))?conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params)], 0)):conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0))),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,cljs.core.cst$kw$article.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$upsert_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$upsert_DASH_article], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$upsert_DASH_article_DASH_success,(function (p__21407,p__21408){
var map__21409 = p__21407;
var map__21409__$1 = ((((!((map__21409 == null)))?((((map__21409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21409):map__21409);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409__$1,cljs.core.cst$kw$db);
var vec__21410 = p__21408;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21410,(0),null);
var map__21413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21410,(1),null);
var map__21413__$1 = ((((!((map__21413 == null)))?((((map__21413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21413):map__21413);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21413__$1,cljs.core.cst$kw$article);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$comments),cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$article,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$active_DASH_article,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)], null),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,["/articles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article))].join('')], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_article,(function (p__21416,p__21417){
var map__21418 = p__21416;
var map__21418__$1 = ((((!((map__21418 == null)))?((((map__21418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21418):map__21418);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21418__$1,cljs.core.cst$kw$db);
var vec__21419 = p__21417;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21419,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21419,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,slug,cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$delete_DASH_article], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_article_DASH_success,(function (p__21423,_){
var map__21424 = p__21423;
var map__21424__$1 = ((((!((map__21424 == null)))?((((map__21424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21424):map__21424);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21424__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null),cljs.core.dissoc,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$article], null),false),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$set_DASH_active_DASH_page,cljs.core.cst$kw$home], null),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_feed_DASH_articles,(function (p__21426,p__21427){
var map__21428 = p__21426;
var map__21428__$1 = ((((!((map__21428 == null)))?((((map__21428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21428):map__21428);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428__$1,cljs.core.cst$kw$db);
var vec__21429 = p__21427;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21429,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21429,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles","feed"], 0)),cljs.core.cst$kw$params,params,cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_feed_DASH_articles], null)], null),cljs.core.cst$kw$db,cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$offset], null),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$tag], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$author], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$favorites], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter,cljs.core.cst$kw$feed], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_feed_DASH_articles_DASH_success,(function (db,p__21433){
var vec__21434 = p__21433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21434,(0),null);
var map__21437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21434,(1),null);
var map__21437__$1 = ((((!((map__21437 == null)))?((((map__21437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21437):map__21437);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.cst$kw$articles);
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21437__$1,cljs.core.cst$kw$articlesCount);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$articles], null),false),cljs.core.cst$kw$articles_DASH_count,articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$articles,conduit.events.index_by(cljs.core.cst$kw$slug,articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_tags,(function (p__21439,_){
var map__21440 = p__21439;
var map__21440__$1 = ((((!((map__21440 == null)))?((((map__21440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21440):map__21440);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$tags], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tags"], 0)),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_tags_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_tags], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_tags_DASH_success,(function (db,p__21442){
var vec__21443 = p__21442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21443,(0),null);
var map__21446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21443,(1),null);
var map__21446__$1 = ((((!((map__21446 == null)))?((((map__21446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21446):map__21446);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,cljs.core.cst$kw$tags);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$tags], null),false),cljs.core.cst$kw$tags,tags);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_comments,(function (p__21448,p__21449){
var map__21450 = p__21448;
var map__21450__$1 = ((((!((map__21450 == null)))?((((map__21450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21450):map__21450);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,cljs.core.cst$kw$db);
var vec__21451 = p__21449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21451,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(params),"comments"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_article_DASH_comments], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_article_DASH_comments_DASH_success,(function (db,p__21455){
var vec__21456 = p__21455;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21456,(0),null);
var map__21459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21456,(1),null);
var map__21459__$1 = ((((!((map__21459 == null)))?((((map__21459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21459):map__21459);
var comments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21459__$1,cljs.core.cst$kw$comments);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),false),cljs.core.cst$kw$comments,conduit.events.index_by(cljs.core.cst$kw$id,comments));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_comment,(function (p__21461,p__21462){
var map__21463 = p__21461;
var map__21463__$1 = ((((!((map__21463 == null)))?((((map__21463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21463):map__21463);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21463__$1,cljs.core.cst$kw$db);
var vec__21464 = p__21462;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21464,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21464,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),"comments"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$params,body,cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$post_DASH_comment_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$comments], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$post_DASH_comment_DASH_success,(function (p__21468,p__21469){
var map__21470 = p__21468;
var map__21470__$1 = ((((!((map__21470 == null)))?((((map__21470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21470):map__21470);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21470__$1,cljs.core.cst$kw$db);
var vec__21471 = p__21469;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21471,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),cljs.core.cst$kw$comments], null),comment),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null),cljs.core.dissoc,cljs.core.cst$kw$comments),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_article_DASH_comments,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$slug,cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_comment,(function (p__21475,p__21476){
var map__21477 = p__21475;
var map__21477__$1 = ((((!((map__21477 == null)))?((((map__21477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21477):map__21477);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21477__$1,cljs.core.cst$kw$db);
var vec__21478 = p__21476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21478,(0),null);
var comment_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21478,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,(function (){
cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comments], null),true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$active_DASH_comment,comment_id);
})()
,cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db),"comments",comment_id], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$delete_DASH_comment], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$delete_DASH_comment_DASH_success,(function (db,_){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comments], null),cljs.core.dissoc,cljs.core.cst$kw$active_DASH_comment.cljs$core$IFn$_invoke$arity$1(db)),cljs.core.cst$kw$active_DASH_comment),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$comment], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_user_DASH_profile,(function (p__21482,p__21483){
var map__21484 = p__21482;
var map__21484__$1 = ((((!((map__21484 == null)))?((((map__21484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21484):map__21484);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21484__$1,cljs.core.cst$kw$db);
var vec__21485 = p__21483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21485,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$profile], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(params)], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_user_DASH_profile_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$get_DASH_user_DASH_profile], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_user_DASH_profile_DASH_success,(function (db,p__21489){
var vec__21490 = p__21489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21490,(0),null);
var map__21493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21490,(1),null);
var map__21493__$1 = ((((!((map__21493 == null)))?((((map__21493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21493):map__21493);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21493__$1,cljs.core.cst$kw$profile);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$profile], null),false),cljs.core.cst$kw$profile,profile);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$login,(function (p__21495,p__21496){
var map__21497 = p__21495;
var map__21497__$1 = ((((!((map__21497 == null)))?((((map__21497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21497):map__21497);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21497__$1,cljs.core.cst$kw$db);
var vec__21498 = p__21496;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21498,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21498,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$login], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users","login"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,credentials], null),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$login_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$login_DASH_success,conduit.events.set_user_interceptor,(function (p__21502,p__21503){
var map__21504 = p__21502;
var map__21504__$1 = ((((!((map__21504 == null)))?((((map__21504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21504):map__21504);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,cljs.core.cst$kw$db);
var vec__21505 = p__21503;
var map__21508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21505,(0),null);
var map__21508__$1 = ((((!((map__21508 == null)))?((((map__21508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21508):map__21508);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch_DASH_n,(function (){var x__8641__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$login], null);
return cljs.core._conj((function (){var x__8641__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,null,cljs.core.cst$kw$author,null,cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8641__auto____$1);
})(),x__8641__auto__);
})(),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$register_DASH_user,(function (p__21511,p__21512){
var map__21513 = p__21511;
var map__21513__$1 = ((((!((map__21513 == null)))?((((map__21513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21513):map__21513);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,cljs.core.cst$kw$db);
var vec__21514 = p__21512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21514,(0),null);
var registration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21514,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$register_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,registration], null),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$register_DASH_user], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$register_DASH_user_DASH_success,conduit.events.set_user_interceptor,(function (p__21518,p__21519){
var map__21520 = p__21518;
var map__21520__$1 = ((((!((map__21520 == null)))?((((map__21520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21520):map__21520);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,cljs.core.cst$kw$db);
var vec__21521 = p__21519;
var map__21524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21521,(0),null);
var map__21524__$1 = ((((!((map__21524 == null)))?((((map__21524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21524):map__21524);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21524__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$register_DASH_user], null),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$update_DASH_user,(function (p__21527,p__21528){
var map__21529 = p__21527;
var map__21529__$1 = ((((!((map__21529 == null)))?((((map__21529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21529):map__21529);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21529__$1,cljs.core.cst$kw$db);
var vec__21530 = p__21528;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21530,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21530,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$update_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["user"], 0)),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$user,user], null),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$update_DASH_user], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$update_DASH_user_DASH_success,conduit.events.set_user_interceptor,(function (p__21534,p__21535){
var map__21536 = p__21534;
var map__21536__$1 = ((((!((map__21536 == null)))?((((map__21536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21536):map__21536);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21536__$1,cljs.core.cst$kw$db);
var vec__21537 = p__21535;
var map__21540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21537,(0),null);
var map__21540__$1 = ((((!((map__21540 == null)))?((((map__21540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21540):map__21540);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21540__$1,cljs.core.cst$kw$user);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,cljs.core.cst$kw$update_DASH_user], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_follow_DASH_user,(function (p__21543,p__21544){
var map__21545 = p__21543;
var map__21545__$1 = ((((!((map__21545 == null)))?((((map__21545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21545):map__21545);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.cst$kw$db);
var vec__21546 = p__21544;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21546,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21546,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_follow_DASH_user], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile,cljs.core.cst$kw$following], null)))?cljs.core.cst$kw$delete:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",username,"follow"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_follow_DASH_user_DASH_success,(function (db,p__21550){
var vec__21551 = p__21550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21551,(0),null);
var map__21554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21551,(1),null);
var map__21554__$1 = ((((!((map__21554 == null)))?((((map__21554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21554):map__21554);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21554__$1,cljs.core.cst$kw$profile);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_follow_DASH_user], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile,cljs.core.cst$kw$following], null),cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,(function (p__21556,p__21557){
var map__21558 = p__21556;
var map__21558__$1 = ((((!((map__21558 == null)))?((((map__21558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21558):map__21558);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558__$1,cljs.core.cst$kw$db);
var vec__21559 = p__21557;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21559,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_favorite_DASH_article], null),true),cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$method,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favorited], null)))?cljs.core.cst$kw$delete:cljs.core.cst$kw$post),cljs.core.cst$kw$uri,conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug,"favorite"], 0)),cljs.core.cst$kw$headers,conduit.events.auth_header(db),cljs.core.cst$kw$format,ajax.core.json_request_format(),cljs.core.cst$kw$response_DASH_format,ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null)),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article_DASH_success], null),cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$api_DASH_request_DASH_error,cljs.core.cst$kw$login], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article_DASH_success,(function (db,p__21563){
var vec__21564 = p__21563;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21564,(0),null);
var map__21567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21564,(1),null);
var map__21567__$1 = ((((!((map__21567 == null)))?((((map__21567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21567):map__21567);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21567__$1,cljs.core.cst$kw$article);
var slug = cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article);
var favorited = cljs.core.cst$kw$favorited.cljs$core$IFn$_invoke$arity$1(article);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,cljs.core.cst$kw$toggle_DASH_favorite_DASH_article], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favorited], null),favorited),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,slug,cljs.core.cst$kw$favoritesCount], null),(cljs.core.truth_(favorited)?cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$2(article,cljs.core.inc):cljs.core.cst$kw$favoritesCount.cljs$core$IFn$_invoke$arity$2(article,cljs.core.dec)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$logout,conduit.events.remove_user_interceptor,(function (p__21569,_){
var map__21570 = p__21569;
var map__21570__$1 = ((((!((map__21570 == null)))?((((map__21570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21570):map__21570);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21570__$1,cljs.core.cst$kw$db);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$user),cljs.core.cst$kw$set_DASH_url,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"/"], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$complete_DASH_request,(function (db,p__21572){
var vec__21573 = p__21572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21573,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading,request_type], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$api_DASH_request_DASH_error,(function (p__21576,p__21577){
var map__21578 = p__21576;
var map__21578__$1 = ((((!((map__21578 == null)))?((((map__21578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21578):map__21578);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21578__$1,cljs.core.cst$kw$db);
var vec__21579 = p__21577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21579,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,request_type], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$errors], null))),cljs.core.cst$kw$dispatch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$complete_DASH_request,request_type], null)], null);
}));
