// Compiled by ClojureScript 1.9.946 {}
goog.provide('conduit.events');
goog.require('cljs.core');
goog.require('conduit.db');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
conduit.events.set_user_interceptor = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.path.call(null,new cljs.core.Keyword(null,"user","user",1532431356)),re_frame.core.after.call(null,conduit.db.user__GT_local_store),re_frame.core.trim_v], null);
conduit.events.remove_user_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.after.call(null,conduit.db.local_store__GT_nil)], null);
conduit.events.api_url = "https://conduit.productionready.io/api";
conduit.events.uri = (function conduit$events$uri(var_args){
var args__29663__auto__ = [];
var len__29656__auto___34813 = arguments.length;
var i__29657__auto___34814 = (0);
while(true){
if((i__29657__auto___34814 < len__29656__auto___34813)){
args__29663__auto__.push((arguments[i__29657__auto___34814]));

var G__34815 = (i__29657__auto___34814 + (1));
i__29657__auto___34814 = G__34815;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic = (function (params){

return clojure.string.join.call(null,"/",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.events.api_url], null),params));
});

conduit.events.uri.cljs$lang$maxFixedArity = (0);

conduit.events.uri.cljs$lang$applyTo = (function (seq34812){
return conduit.events.uri.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34812));
});

conduit.events.auth_header = (function conduit$events$auth_header(db){

var token = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
if(cljs.core.truth_(token)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
} else {
return null;
}
});
conduit.events.add_epoch = (function conduit$events$add_epoch(date,coll){

return cljs.core.map.call(null,(function (item){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"epoch","epoch",1435633666),cljs_time.coerce.to_long.call(null,date.call(null,item)));
}),coll);
});
conduit.events.index_by = (function conduit$events$index_by(key,coll){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,key,cljs.core.identity),conduit.events.add_epoch.call(null,new cljs.core.Keyword(null,"createdAt","createdAt",-936788),coll)));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"set-url","set-url",1253200812),(function (p__34816){
var map__34817 = p__34816;
var map__34817__$1 = ((((!((map__34817 == null)))?((((map__34817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34817):map__34817);
var url = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword(null,"url","url",276297046));
return location.hash = url;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.call(null,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699))], null),(function (p__34819,_){
var map__34820 = p__34819;
var map__34820__$1 = ((((!((map__34820 == null)))?((((map__34820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34820):map__34820);
var db = cljs.core.get.call(null,map__34820__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_user = cljs.core.get.call(null,map__34820__$1,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,conduit.db.default_db,new cljs.core.Keyword(null,"user","user",1532431356),local_store_user)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (p__34822,p__34823){
var map__34824 = p__34822;
var map__34824__$1 = ((((!((map__34824 == null)))?((((map__34824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34824):map__34824);
var db = cljs.core.get.call(null,map__34824__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34825 = p__34823;
var _ = cljs.core.nth.call(null,vec__34825,(0),null);
var map__34828 = cljs.core.nth.call(null,vec__34825,(1),null);
var map__34828__$1 = ((((!((map__34828 == null)))?((((map__34828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34828):map__34828);
var page = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var profile = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var favorited = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"home","home",-74557309),page)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var x__29347__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307)], null));
return cljs.core._conj.call(null,(function (){var x__29347__auto____$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tags","get-tags",1935580527)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29347__auto____$1);
})(),x__29347__auto__);
})()], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"login","login",55217519),page)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"register","register",1968522516),page)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),page)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editor","editor",-989377770),page)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(slug)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-article","set-active-article",-658893898),slug], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-active-article","reset-active-article",-1085973797)], null))], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"article","article",-21685045),page)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var x__29347__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null);
return cljs.core._conj.call(null,(function (){var x__29347__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"username","username",1605666410)], null))], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29347__auto____$1);
})(),x__29347__auto__);
})()], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874),page)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var x__29347__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null)], null);
return cljs.core._conj.call(null,(function (){var x__29347__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),profile], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29347__auto____$1);
})(),x__29347__auto__);
})()], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"favorited","favorited",-1400766725),page)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"profile","profile",-545963874)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"favorited","favorited",-1400766725),favorited], null)], null)], null);
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-active-article","reset-active-article",-1085973797),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-active-article","set-active-article",-658893898),(function (p__34831,p__34832){
var map__34833 = p__34831;
var map__34833__$1 = ((((!((map__34833 == null)))?((((map__34833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34833):map__34833);
var db = cljs.core.get.call(null,map__34833__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34834 = p__34832;
var _ = cljs.core.nth.call(null,vec__34834,(0),null);
var slug = cljs.core.nth.call(null,vec__34834,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var x__29347__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null);
return cljs.core._conj.call(null,(function (){var x__29347__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"username","username",1605666410)], null))], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29347__auto____$1);
})(),x__29347__auto__);
})()], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-articles","get-articles",891972795),(function (p__34838,p__34839){
var map__34840 = p__34838;
var map__34840__$1 = ((((!((map__34840 == null)))?((((map__34840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34840):map__34840);
var db = cljs.core.get.call(null,map__34840__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34841 = p__34839;
var _ = cljs.core.nth.call(null,vec__34841,(0),null);
var params = cljs.core.nth.call(null,vec__34841,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles"),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles-success","get-articles-success",-1539262641)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"author","author",2111686192)], null),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null),new cljs.core.Keyword(null,"favorited","favorited",-1400766725).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),false)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-articles-success","get-articles-success",-1539262641),(function (db,p__34845){
var vec__34846 = p__34845;
var _ = cljs.core.nth.call(null,vec__34846,(0),null);
var map__34849 = cljs.core.nth.call(null,vec__34846,(1),null);
var map__34849__$1 = ((((!((map__34849 == null)))?((((map__34849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34849):map__34849);
var articles = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"articles","articles",-454771639));
var articles_count = cljs.core.get.call(null,map__34849__$1,new cljs.core.Keyword(null,"articlesCount","articlesCount",1365290225));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),false),new cljs.core.Keyword(null,"articles-count","articles-count",-222608021),articles_count,new cljs.core.Keyword(null,"articles","articles",-454771639),conduit.events.index_by.call(null,new cljs.core.Keyword(null,"slug","slug",2029314850),articles));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-article","get-article",515632287),(function (p__34851,p__34852){
var map__34853 = p__34851;
var map__34853__$1 = ((((!((map__34853 == null)))?((((map__34853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34853):map__34853);
var db = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34854 = p__34852;
var _ = cljs.core.nth.call(null,vec__34854,(0),null);
var params = cljs.core.nth.call(null,vec__34854,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-success","get-article-success",-1613614879)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-article","get-article",515632287)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),true)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-article-success","get-article-success",-1613614879),(function (db,p__34858){
var vec__34859 = p__34858;
var _ = cljs.core.nth.call(null,vec__34859,(0),null);
var map__34862 = cljs.core.nth.call(null,vec__34859,(1),null);
var map__34862__$1 = ((((!((map__34862 == null)))?((((map__34862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34862):map__34862);
var article = cljs.core.get.call(null,map__34862__$1,new cljs.core.Keyword(null,"article","article",-21685045));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),false),new cljs.core.Keyword(null,"articles","articles",-454771639),conduit.events.index_by.call(null,new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [article], null)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448),(function (p__34864,p__34865){
var map__34866 = p__34864;
var map__34866__$1 = ((((!((map__34866 == null)))?((((map__34866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34866):map__34866);
var db = cljs.core.get.call(null,map__34866__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34867 = p__34865;
var _ = cljs.core.nth.call(null,vec__34867,(0),null);
var params = cljs.core.nth.call(null,vec__34867,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"put","put",1299772570):new cljs.core.Keyword(null,"post","post",269697687)),new cljs.core.Keyword(null,"uri","uri",-774711847),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params))?conduit.events.uri.call(null,"articles",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params)):conduit.events.uri.call(null,"articles")),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-article-success","upsert-article-success",-1769121332)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"upsert-article-success","upsert-article-success",-1769121332),(function (p__34871,p__34872){
var map__34873 = p__34871;
var map__34873__$1 = ((((!((map__34873 == null)))?((((map__34873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34873):map__34873);
var db = cljs.core.get.call(null,map__34873__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34874 = p__34872;
var _ = cljs.core.nth.call(null,vec__34874,(0),null);
var map__34877 = cljs.core.nth.call(null,vec__34874,(1),null);
var map__34877__$1 = ((((!((map__34877 == null)))?((((map__34877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34877):map__34877);
var article = cljs.core.get.call(null,map__34877__$1,new cljs.core.Keyword(null,"article","article",-21685045));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),false),new cljs.core.Keyword(null,"comments","comments",-293346423)),new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"active-article","active-article",-2143954133),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article","get-article",515632287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)], null),new cljs.core.Keyword(null,"set-url","set-url",1253200812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),["/articles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article))].join('')], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"delete-article","delete-article",1402885667),(function (p__34880,p__34881){
var map__34882 = p__34880;
var map__34882__$1 = ((((!((map__34882 == null)))?((((map__34882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34882):map__34882);
var db = cljs.core.get.call(null,map__34882__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34883 = p__34881;
var _ = cljs.core.nth.call(null,vec__34883,(0),null);
var slug = cljs.core.nth.call(null,vec__34883,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles",slug),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"params","params",710516235),slug,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-article-success","delete-article-success",373962383)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"delete-article","delete-article",1402885667)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"delete-article-success","delete-article-success",373962383),(function (p__34887,_){
var map__34888 = p__34887;
var map__34888__$1 = ((((!((map__34888 == null)))?((((map__34888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34888):map__34888);
var db = cljs.core.get.call(null,map__34888__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),false),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.Keyword(null,"set-url","set-url",1253200812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307),(function (p__34890,p__34891){
var map__34892 = p__34890;
var map__34892__$1 = ((((!((map__34892 == null)))?((((map__34892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34892):map__34892);
var db = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34893 = p__34891;
var _ = cljs.core.nth.call(null,vec__34893,(0),null);
var params = cljs.core.nth.call(null,vec__34893,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles","feed"),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles-success","get-feed-articles-success",944481491)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"author","author",2111686192)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),true)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-feed-articles-success","get-feed-articles-success",944481491),(function (db,p__34897){
var vec__34898 = p__34897;
var _ = cljs.core.nth.call(null,vec__34898,(0),null);
var map__34901 = cljs.core.nth.call(null,vec__34898,(1),null);
var map__34901__$1 = ((((!((map__34901 == null)))?((((map__34901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34901):map__34901);
var articles = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"articles","articles",-454771639));
var articles_count = cljs.core.get.call(null,map__34901__$1,new cljs.core.Keyword(null,"articlesCount","articlesCount",1365290225));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),false),new cljs.core.Keyword(null,"articles-count","articles-count",-222608021),articles_count,new cljs.core.Keyword(null,"articles","articles",-454771639),conduit.events.index_by.call(null,new cljs.core.Keyword(null,"slug","slug",2029314850),articles));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-tags","get-tags",1935580527),(function (p__34903,_){
var map__34904 = p__34903;
var map__34904__$1 = ((((!((map__34904 == null)))?((((map__34904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34904):map__34904);
var db = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"tags"),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tags-success","get-tags-success",964666131)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-tags","get-tags",1935580527)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-tags-success","get-tags-success",964666131),(function (db,p__34906){
var vec__34907 = p__34906;
var _ = cljs.core.nth.call(null,vec__34907,(0),null);
var map__34910 = cljs.core.nth.call(null,vec__34907,(1),null);
var map__34910__$1 = ((((!((map__34910 == null)))?((((map__34910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34910):map__34910);
var tags = cljs.core.get.call(null,map__34910__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),false),new cljs.core.Keyword(null,"tags","tags",1771418977),tags);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),(function (p__34912,p__34913){
var map__34914 = p__34912;
var map__34914__$1 = ((((!((map__34914 == null)))?((((map__34914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34914):map__34914);
var db = cljs.core.get.call(null,map__34914__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34915 = p__34913;
var _ = cljs.core.nth.call(null,vec__34915,(0),null);
var params = cljs.core.nth.call(null,vec__34915,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params),"comments"),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments-success","get-article-comments-success",1610771560)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-article-comments-success","get-article-comments-success",1610771560),(function (db,p__34919){
var vec__34920 = p__34919;
var _ = cljs.core.nth.call(null,vec__34920,(0),null);
var map__34923 = cljs.core.nth.call(null,vec__34920,(1),null);
var map__34923__$1 = ((((!((map__34923 == null)))?((((map__34923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34923):map__34923);
var comments = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),false),new cljs.core.Keyword(null,"comments","comments",-293346423),conduit.events.index_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),comments));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-comment","post-comment",-185302743),(function (p__34925,p__34926){
var map__34927 = p__34925;
var map__34927__$1 = ((((!((map__34927 == null)))?((((map__34927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34927):map__34927);
var db = cljs.core.get.call(null,map__34927__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34928 = p__34926;
var _ = cljs.core.nth.call(null,vec__34928,(0),null);
var body = cljs.core.nth.call(null,vec__34928,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles",new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db),"comments"),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"params","params",710516235),body,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-comment-success","post-comment-success",987374084)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-comment-success","post-comment-success",987374084),(function (p__34932,p__34933){
var map__34934 = p__34932;
var map__34934__$1 = ((((!((map__34934 == null)))?((((map__34934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34934.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34934):map__34934);
var db = cljs.core.get.call(null,map__34934__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34935 = p__34933;
var _ = cljs.core.nth.call(null,vec__34935,(0),null);
var comment = cljs.core.nth.call(null,vec__34935,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),comment),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"comments","comments",-293346423)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),(function (p__34939,p__34940){
var map__34941 = p__34939;
var map__34941__$1 = ((((!((map__34941 == null)))?((((map__34941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34941):map__34941);
var db = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34942 = p__34940;
var _ = cljs.core.nth.call(null,vec__34942,(0),null);
var comment_id = cljs.core.nth.call(null,vec__34942,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){
cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),true);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-comment","active-comment",-212947031),comment_id);
})()
,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles",new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db),"comments",comment_id),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-comment-success","delete-comment-success",597018862)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-comment-success","delete-comment-success",597018862),(function (db,_){
return cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"active-comment","active-comment",-212947031).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"active-comment","active-comment",-212947031)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comment","comment",532206069)], null),false);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),(function (p__34946,p__34947){
var map__34948 = p__34946;
var map__34948__$1 = ((((!((map__34948 == null)))?((((map__34948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34948):map__34948);
var db = cljs.core.get.call(null,map__34948__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34949 = p__34947;
var _ = cljs.core.nth.call(null,vec__34949,(0),null);
var params = cljs.core.nth.call(null,vec__34949,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"profile","profile",-545963874)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"profiles",new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile-success","get-user-profile-success",-1381396592)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-user-profile-success","get-user-profile-success",-1381396592),(function (db,p__34953){
var vec__34954 = p__34953;
var _ = cljs.core.nth.call(null,vec__34954,(0),null);
var map__34957 = cljs.core.nth.call(null,vec__34954,(1),null);
var map__34957__$1 = ((((!((map__34957 == null)))?((((map__34957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34957):map__34957);
var profile = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"profile","profile",-545963874)], null),false),new cljs.core.Keyword(null,"profile","profile",-545963874),profile);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login","login",55217519),(function (p__34959,p__34960){
var map__34961 = p__34959;
var map__34961__$1 = ((((!((map__34961 == null)))?((((map__34961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34961):map__34961);
var db = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34962 = p__34960;
var _ = cljs.core.nth.call(null,vec__34962,(0),null);
var credentials = cljs.core.nth.call(null,vec__34962,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"login","login",55217519)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"users","login"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),credentials], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login-success","login-success",1089283105),conduit.events.set_user_interceptor,(function (p__34966,p__34967){
var map__34968 = p__34966;
var map__34968__$1 = ((((!((map__34968 == null)))?((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var user = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34969 = p__34967;
var map__34972 = cljs.core.nth.call(null,vec__34969,(0),null);
var map__34972__$1 = ((((!((map__34972 == null)))?((((map__34972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34972.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34972):map__34972);
var props = cljs.core.get.call(null,map__34972__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,user,props),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (){var x__29347__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),new cljs.core.Keyword(null,"login","login",55217519)], null);
return cljs.core._conj.call(null,(function (){var x__29347__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"author","author",2111686192),null,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29347__auto____$1);
})(),x__29347__auto__);
})(),new cljs.core.Keyword(null,"set-url","set-url",1253200812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"register-user","register-user",516261094),(function (p__34975,p__34976){
var map__34977 = p__34975;
var map__34977__$1 = ((((!((map__34977 == null)))?((((map__34977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34977):map__34977);
var db = cljs.core.get.call(null,map__34977__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34978 = p__34976;
var _ = cljs.core.nth.call(null,vec__34978,(0),null);
var registration = cljs.core.nth.call(null,vec__34978,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"register-user","register-user",516261094)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"users"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),registration], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-user-success","register-user-success",1179928736)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"register-user","register-user",516261094)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"register-user-success","register-user-success",1179928736),conduit.events.set_user_interceptor,(function (p__34982,p__34983){
var map__34984 = p__34982;
var map__34984__$1 = ((((!((map__34984 == null)))?((((map__34984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34984):map__34984);
var user = cljs.core.get.call(null,map__34984__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34985 = p__34983;
var map__34988 = cljs.core.nth.call(null,vec__34985,(0),null);
var map__34988__$1 = ((((!((map__34988 == null)))?((((map__34988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34988):map__34988);
var props = cljs.core.get.call(null,map__34988__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,user,props),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),new cljs.core.Keyword(null,"register-user","register-user",516261094)], null),new cljs.core.Keyword(null,"set-url","set-url",1253200812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"update-user","update-user",-92427001),(function (p__34991,p__34992){
var map__34993 = p__34991;
var map__34993__$1 = ((((!((map__34993 == null)))?((((map__34993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34993):map__34993);
var db = cljs.core.get.call(null,map__34993__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34994 = p__34992;
var _ = cljs.core.nth.call(null,vec__34994,(0),null);
var user = cljs.core.nth.call(null,vec__34994,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"update-user","update-user",-92427001)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"user"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-user-success","update-user-success",770133938)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"update-user","update-user",-92427001)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"update-user-success","update-user-success",770133938),conduit.events.set_user_interceptor,(function (p__34998,p__34999){
var map__35000 = p__34998;
var map__35000__$1 = ((((!((map__35000 == null)))?((((map__35000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35000):map__35000);
var user = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35001 = p__34999;
var map__35004 = cljs.core.nth.call(null,vec__35001,(0),null);
var map__35004__$1 = ((((!((map__35004 == null)))?((((map__35004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35004):map__35004);
var props = cljs.core.get.call(null,map__35004__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.call(null,user,props),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),new cljs.core.Keyword(null,"update-user","update-user",-92427001)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294),(function (p__35007,p__35008){
var map__35009 = p__35007;
var map__35009__$1 = ((((!((map__35009 == null)))?((((map__35009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35009):map__35009);
var db = cljs.core.get.call(null,map__35009__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35010 = p__35008;
var _ = cljs.core.nth.call(null,vec__35010,(0),null);
var username = cljs.core.nth.call(null,vec__35010,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"following","following",-2049193617)], null)))?new cljs.core.Keyword(null,"delete","delete",-1768633620):new cljs.core.Keyword(null,"post","post",269697687)),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"profiles",username,"follow"),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-follow-user-success","toggle-follow-user-success",1087162160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-follow-user-success","toggle-follow-user-success",1087162160),(function (db,p__35014){
var vec__35015 = p__35014;
var _ = cljs.core.nth.call(null,vec__35015,(0),null);
var map__35018 = cljs.core.nth.call(null,vec__35015,(1),null);
var map__35018__$1 = ((((!((map__35018 == null)))?((((map__35018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35018):map__35018);
var profile = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"following","following",-2049193617)], null),new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350),(function (p__35020,p__35021){
var map__35022 = p__35020;
var map__35022__$1 = ((((!((map__35022 == null)))?((((map__35022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35022):map__35022);
var db = cljs.core.get.call(null,map__35022__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35023 = p__35021;
var _ = cljs.core.nth.call(null,vec__35023,(0),null);
var slug = cljs.core.nth.call(null,vec__35023,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"favorited","favorited",-1400766725)], null)))?new cljs.core.Keyword(null,"delete","delete",-1768633620):new cljs.core.Keyword(null,"post","post",269697687)),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.uri.call(null,"articles",slug,"favorite"),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header.call(null,db),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-favorite-article-success","toggle-favorite-article-success",-1429073255)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-favorite-article-success","toggle-favorite-article-success",-1429073255),(function (db,p__35027){
var vec__35028 = p__35027;
var _ = cljs.core.nth.call(null,vec__35028,(0),null);
var map__35031 = cljs.core.nth.call(null,vec__35028,(1),null);
var map__35031__$1 = ((((!((map__35031 == null)))?((((map__35031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35031):map__35031);
var article = cljs.core.get.call(null,map__35031__$1,new cljs.core.Keyword(null,"article","article",-21685045));
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article);
var favorited = new cljs.core.Keyword(null,"favorited","favorited",-1400766725).cljs$core$IFn$_invoke$arity$1(article);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"favorited","favorited",-1400766725)], null),favorited),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567)], null),(cljs.core.truth_(favorited)?new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567).cljs$core$IFn$_invoke$arity$2(article,cljs.core.inc):new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567).cljs$core$IFn$_invoke$arity$2(article,cljs.core.dec)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),conduit.events.remove_user_interceptor,(function (p__35033,_){
var map__35034 = p__35033;
var map__35034__$1 = ((((!((map__35034 == null)))?((((map__35034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35034):map__35034);
var db = cljs.core.get.call(null,map__35034__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356)),new cljs.core.Keyword(null,"set-url","set-url",1253200812),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"/"], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),(function (db,p__35036){
var vec__35037 = p__35036;
var _ = cljs.core.nth.call(null,vec__35037,(0),null);
var request_type = cljs.core.nth.call(null,vec__35037,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),request_type], null),false);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),(function (p__35040,p__35041){
var map__35042 = p__35040;
var map__35042__$1 = ((((!((map__35042 == null)))?((((map__35042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35042):map__35042);
var db = cljs.core.get.call(null,map__35042__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35043 = p__35041;
var _ = cljs.core.nth.call(null,vec__35043,(0),null);
var request_type = cljs.core.nth.call(null,vec__35043,(1),null);
var response = cljs.core.nth.call(null,vec__35043,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),request_type], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1512565254834
