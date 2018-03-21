goog.provide('conduit.events');
goog.require('cljs.core');
goog.require('conduit.db');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
conduit.events.set_user_interceptor = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24111 = new cljs.core.Keyword(null,"user","user",1532431356);
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__24111) : re_frame.core.path.call(null,G__24111));
})(),(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.set_user_ls) : re_frame.core.after.call(null,conduit.db.set_user_ls)),re_frame.core.trim_v], null);
conduit.events.remove_user_interceptor = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(conduit.db.remove_user_ls) : re_frame.core.after.call(null,conduit.db.remove_user_ls))], null);
conduit.events.api_url = "https://conduit.productionready.io/api";
conduit.events.endpoint = (function conduit$events$endpoint(var_args){
var args__4500__auto__ = [];
var len__4497__auto___24113 = arguments.length;
var i__4498__auto___24114 = (0);
while(true){
if((i__4498__auto___24114 < len__4497__auto___24113)){
args__4500__auto__.push((arguments[i__4498__auto___24114]));

var G__24115 = (i__4498__auto___24114 + (1));
i__4498__auto___24114 = G__24115;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic = (function (params){

return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.events.api_url], null),params));
});

conduit.events.endpoint.cljs$lang$maxFixedArity = (0);

conduit.events.endpoint.cljs$lang$applyTo = (function (seq24112){
return conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24112));
});

conduit.events.auth_header = (function conduit$events$auth_header(db){

var token = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"token","token",-1211463215)], null));
if(cljs.core.truth_(token)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),["Token ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
} else {
return null;
}
});
conduit.events.add_epoch = (function conduit$events$add_epoch(date,coll){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"epoch","epoch",1435633666),cljs_time.coerce.to_long((date.cljs$core$IFn$_invoke$arity$1 ? date.cljs$core$IFn$_invoke$arity$1(item) : date.call(null,item))));
}),coll);
});
conduit.events.index_by = (function conduit$events$index_by(key,coll){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(key,cljs.core.identity),conduit.events.add_epoch(new cljs.core.Keyword(null,"createdAt","createdAt",-936788),coll)));
});
var G__24116_24121 = new cljs.core.Keyword(null,"set-hash","set-hash",-1120312112);
var G__24117_24122 = ((function (G__24116_24121){
return (function (p__24118){
var map__24119 = p__24118;
var map__24119__$1 = ((((!((map__24119 == null)))?(((((map__24119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24119):map__24119);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24119__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
return location.hash = hash;
});})(G__24116_24121))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__24116_24121,G__24117_24122) : re_frame.core.reg_fx.call(null,G__24116_24121,G__24117_24122));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__24123 = new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__24123) : re_frame.core.inject_cofx.call(null,G__24123));
})()], null),(function (p__24124,_){
var map__24125 = p__24124;
var map__24125__$1 = ((((!((map__24125 == null)))?(((((map__24125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24125):map__24125);
var local_store_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24125__$1,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conduit.db.default_db,new cljs.core.Keyword(null,"user","user",1532431356),local_store_user)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (p__24127,p__24128){
var map__24129 = p__24127;
var map__24129__$1 = ((((!((map__24129 == null)))?(((((map__24129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24129):map__24129);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24129__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24130 = p__24128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(0),null);
var map__24133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24130,(1),null);
var map__24133__$1 = ((((!((map__24133 == null)))?(((((map__24133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24133):map__24133);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24133__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24133__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24133__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24133__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
var set_page = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page);
var G__24136 = page;
var G__24136__$1 = (((G__24136 instanceof cljs.core.Keyword))?G__24136.fqn:null);
switch (G__24136__$1) {
case "home":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),set_page,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307)], null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tags","get-tags",1935580527)], null),null,(1),null)),(2),null))], null);

break;
case "login":
case "register":
case "settings":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),set_page], null);

break;
case "editor":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),set_page,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(cljs.core.truth_(slug)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-article","set-active-article",-658893898),slug], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-active-article","reset-active-article",-1085973797)], null))], null);

break;
case "article":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(set_page,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"username","username",1605666410)], null))], null)], null),null,(1),null)),(2),null))], null);

break;
case "profile":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(set_page,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),profile], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"author","author",2111686192),profile], null)], null),null,(1),null)),(2),null))], null);

break;
case "favorited":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"profile","profile",-545963874)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"favorited","favorited",-1400766725),favorited], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24136__$1)].join('')));

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-active-article","reset-active-article",-1085973797),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-active-article","set-active-article",-658893898),(function (p__24138,p__24139){
var map__24140 = p__24138;
var map__24140__$1 = ((((!((map__24140 == null)))?(((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24140):map__24140);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24140__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24141 = p__24139;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24141,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24141,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),slug),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"username","username",1605666410)], null))], null)], null),null,(1),null)),(2),null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-articles","get-articles",891972795),(function (p__24145,p__24146){
var map__24147 = p__24145;
var map__24147__$1 = ((((!((map__24147 == null)))?(((((map__24147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24147):map__24147);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24147__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24148 = p__24146;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24148,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24148,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0)),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24152 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24152) : ajax.core.json_response_format.call(null,G__24152));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles-success","get-articles-success",-1539262641)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-articles","get-articles",891972795)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"author","author",2111686192)], null),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null),new cljs.core.Keyword(null,"favorited","favorited",-1400766725).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),false)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-articles-success","get-articles-success",-1539262641),(function (db,p__24153){
var vec__24154 = p__24153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24154,(0),null);
var map__24157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24154,(1),null);
var map__24157__$1 = ((((!((map__24157 == null)))?(((((map__24157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24157):map__24157);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157__$1,new cljs.core.Keyword(null,"articles","articles",-454771639));
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24157__$1,new cljs.core.Keyword(null,"articlesCount","articlesCount",1365290225));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),false),new cljs.core.Keyword(null,"articles-count","articles-count",-222608021),articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"articles","articles",-454771639),conduit.events.index_by(new cljs.core.Keyword(null,"slug","slug",2029314850),articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-article","get-article",515632287),(function (p__24159,p__24160){
var map__24161 = p__24159;
var map__24161__$1 = ((((!((map__24161 == null)))?(((((map__24161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24161):map__24161);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24161__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24162 = p__24160;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24162,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24162,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params)], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24166 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24166) : ajax.core.json_response_format.call(null,G__24166));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-success","get-article-success",-1613614879)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-article","get-article",515632287)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-article-success","get-article-success",-1613614879),(function (db,p__24167){
var vec__24168 = p__24167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24168,(0),null);
var map__24171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24168,(1),null);
var map__24171__$1 = ((((!((map__24171 == null)))?(((((map__24171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24171):map__24171);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24171__$1,new cljs.core.Keyword(null,"article","article",-21685045));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),false),new cljs.core.Keyword(null,"articles","articles",-454771639),conduit.events.index_by(new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [article], null)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448),(function (p__24173,p__24174){
var map__24175 = p__24173;
var map__24175__$1 = ((((!((map__24175 == null)))?(((((map__24175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24175):map__24175);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24175__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24176 = p__24174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24176,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24176,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"put","put",1299772570):new cljs.core.Keyword(null,"post","post",269697687)),new cljs.core.Keyword(null,"uri","uri",-774711847),(cljs.core.truth_(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params))?conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params)], 0)):conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles"], 0))),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24180 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24180) : ajax.core.json_response_format.call(null,G__24180));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-article-success","upsert-article-success",-1769121332)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upsert-article-success","upsert-article-success",-1769121332),(function (p__24181,p__24182){
var map__24183 = p__24181;
var map__24183__$1 = ((((!((map__24183 == null)))?(((((map__24183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24183):map__24183);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24183__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24184 = p__24182;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24184,(0),null);
var map__24187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24184,(1),null);
var map__24187__$1 = ((((!((map__24187 == null)))?(((((map__24187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24187):map__24187);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24187__$1,new cljs.core.Keyword(null,"article","article",-21685045));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),false),new cljs.core.Keyword(null,"comments","comments",-293346423)),new cljs.core.Keyword(null,"errors","errors",-908790718)),new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"article","article",-21685045),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active-article","active-article",-2143954133),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], 0)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article","get-article",515632287),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"set-hash","set-hash",-1120312112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),["/articles/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article))].join('')], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-article","delete-article",1402885667),(function (p__24190,p__24191){
var map__24192 = p__24190;
var map__24192__$1 = ((((!((map__24192 == null)))?(((((map__24192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24192):map__24192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24192__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24193 = p__24191;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"params","params",710516235),slug,new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24197 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24197) : ajax.core.json_response_format.call(null,G__24197));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-article-success","delete-article-success",373962383)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"delete-article","delete-article",1402885667)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-article-success","delete-article-success",373962383),(function (p__24198,_){
var map__24199 = p__24198;
var map__24199__$1 = ((((!((map__24199 == null)))?(((((map__24199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24199):map__24199);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24199__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"article","article",-21685045)], null),false),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.Keyword(null,"set-hash","set-hash",-1120312112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307),(function (p__24201,p__24202){
var map__24203 = p__24201;
var map__24203__$1 = ((((!((map__24203 == null)))?(((((map__24203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24203):map__24203);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24203__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24204 = p__24202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24204,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24204,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles","feed"], 0)),new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24208 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24208) : ajax.core.json_response_format.call(null,G__24208));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles-success","get-feed-articles-success",944481491)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"offset","offset",296498311)], null),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"author","author",2111686192)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"feed","feed",-1566486205)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-feed-articles-success","get-feed-articles-success",944481491),(function (db,p__24209){
var vec__24210 = p__24209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24210,(0),null);
var map__24213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24210,(1),null);
var map__24213__$1 = ((((!((map__24213 == null)))?(((((map__24213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24213):map__24213);
var articles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24213__$1,new cljs.core.Keyword(null,"articles","articles",-454771639));
var articles_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24213__$1,new cljs.core.Keyword(null,"articlesCount","articlesCount",1365290225));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"articles","articles",-454771639)], null),false),new cljs.core.Keyword(null,"articles-count","articles-count",-222608021),articles_count,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"articles","articles",-454771639),conduit.events.index_by(new cljs.core.Keyword(null,"slug","slug",2029314850),articles)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tags","get-tags",1935580527),(function (p__24215,_){
var map__24216 = p__24215;
var map__24216__$1 = ((((!((map__24216 == null)))?(((((map__24216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24216):map__24216);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24216__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tags"], 0)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24218 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24218) : ajax.core.json_response_format.call(null,G__24218));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-tags-success","get-tags-success",964666131)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-tags","get-tags",1935580527)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-tags-success","get-tags-success",964666131),(function (db,p__24219){
var vec__24220 = p__24219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24220,(0),null);
var map__24223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24220,(1),null);
var map__24223__$1 = ((((!((map__24223 == null)))?(((((map__24223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24223):map__24223);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24223__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),false),new cljs.core.Keyword(null,"tags","tags",1771418977),tags);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),(function (p__24225,p__24226){
var map__24227 = p__24225;
var map__24227__$1 = ((((!((map__24227 == null)))?(((((map__24227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24227):map__24227);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24227__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24228 = p__24226;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(params),"comments"], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24232 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24232) : ajax.core.json_response_format.call(null,G__24232));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments-success","get-article-comments-success",1610771560)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-article-comments-success","get-article-comments-success",1610771560),(function (db,p__24233){
var vec__24234 = p__24233;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24234,(0),null);
var map__24237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24234,(1),null);
var map__24237__$1 = ((((!((map__24237 == null)))?(((((map__24237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24237):map__24237);
var comments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24237__$1,new cljs.core.Keyword(null,"comments","comments",-293346423));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),false),new cljs.core.Keyword(null,"comments","comments",-293346423),conduit.events.index_by(new cljs.core.Keyword(null,"id","id",-1388402092),comments));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-comment","post-comment",-185302743),(function (p__24239,p__24240){
var map__24241 = p__24239;
var map__24241__$1 = ((((!((map__24241 == null)))?(((((map__24241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24241):map__24241);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24242 = p__24240;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24242,(0),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24242,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db),"comments"], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"params","params",710516235),body,new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24246 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24246) : ajax.core.json_response_format.call(null,G__24246));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-comment-success","post-comment-success",987374084)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"comments","comments",-293346423)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-comment-success","post-comment-success",987374084),(function (p__24247,p__24248){
var map__24249 = p__24247;
var map__24249__$1 = ((((!((map__24249 == null)))?(((((map__24249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24249):map__24249);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24249__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24250 = p__24248;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24250,(0),null);
var comment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24250,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),comment),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"comments","comments",-293346423)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-article-comments","get-article-comments",152189994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),(function (p__24254,p__24255){
var map__24256 = p__24254;
var map__24256__$1 = ((((!((map__24256 == null)))?(((((map__24256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24256):map__24256);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24256__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24257 = p__24255;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24257,(0),null);
var comment_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24257,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),(function (){
cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comments","comments",-293346423)], null),true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-comment","active-comment",-212947031),comment_id);
})()
,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db),"comments",comment_id], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24261 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24261) : ajax.core.json_response_format.call(null,G__24261));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-comment-success","delete-comment-success",597018862)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-comment-success","delete-comment-success",597018862),(function (db,_){
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"active-comment","active-comment",-212947031).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"active-comment","active-comment",-212947031)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"comment","comment",532206069)], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847),(function (p__24262,p__24263){
var map__24264 = p__24262;
var map__24264__$1 = ((((!((map__24264 == null)))?(((((map__24264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24264):map__24264);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24264__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24265 = p__24263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24265,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24265,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"profile","profile",-545963874)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(params)], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24269 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24269) : ajax.core.json_response_format.call(null,G__24269));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-profile-success","get-user-profile-success",-1381396592)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"get-user-profile","get-user-profile",-1443747847)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-user-profile-success","get-user-profile-success",-1381396592),(function (db,p__24270){
var vec__24271 = p__24270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(0),null);
var map__24274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24271,(1),null);
var map__24274__$1 = ((((!((map__24274 == null)))?(((((map__24274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24274):map__24274);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24274__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"profile","profile",-545963874)], null),false),new cljs.core.Keyword(null,"profile","profile",-545963874),profile);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__24276,p__24277){
var map__24278 = p__24276;
var map__24278__$1 = ((((!((map__24278 == null)))?(((((map__24278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24278):map__24278);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24278__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24279 = p__24277;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24279,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24279,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"login","login",55217519)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users","login"], 0)),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),credentials], null),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24283 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24283) : ajax.core.json_response_format.call(null,G__24283));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"login-success","login-success",1089283105),conduit.events.set_user_interceptor,(function (p__24284,p__24285){
var map__24286 = p__24284;
var map__24286__$1 = ((((!((map__24286 == null)))?(((((map__24286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24286):map__24286);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24286__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24287 = p__24285;
var map__24290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24287,(0),null);
var map__24290__$1 = ((((!((map__24290 == null)))?(((((map__24290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24290):map__24290);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24290__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),new cljs.core.Keyword(null,"login","login",55217519)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"author","author",2111686192),null,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null)], null),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"set-hash","set-hash",-1120312112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-user","register-user",516261094),(function (p__24293,p__24294){
var map__24295 = p__24293;
var map__24295__$1 = ((((!((map__24295 == null)))?(((((map__24295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24295):map__24295);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24295__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24296 = p__24294;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24296,(0),null);
var registration = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24296,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"register-user","register-user",516261094)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["users"], 0)),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),registration], null),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24300 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24300) : ajax.core.json_response_format.call(null,G__24300));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-user-success","register-user-success",1179928736)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"register-user","register-user",516261094)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"register-user-success","register-user-success",1179928736),conduit.events.set_user_interceptor,(function (p__24301,p__24302){
var map__24303 = p__24301;
var map__24303__$1 = ((((!((map__24303 == null)))?(((((map__24303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24303):map__24303);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24303__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24304 = p__24302;
var map__24307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24304,(0),null);
var map__24307__$1 = ((((!((map__24307 == null)))?(((((map__24307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24307):map__24307);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24307__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),new cljs.core.Keyword(null,"register-user","register-user",516261094)], null),new cljs.core.Keyword(null,"set-hash","set-hash",-1120312112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),"/"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-user","update-user",-92427001),(function (p__24310,p__24311){
var map__24312 = p__24310;
var map__24312__$1 = ((((!((map__24312 == null)))?(((((map__24312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24312):map__24312);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24312__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24313 = p__24311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24313,(0),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24313,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"update-user","update-user",-92427001)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["user"], 0)),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),user], null),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24317 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24317) : ajax.core.json_response_format.call(null,G__24317));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-user-success","update-user-success",770133938)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"update-user","update-user",-92427001)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update-user-success","update-user-success",770133938),conduit.events.set_user_interceptor,(function (p__24318,p__24319){
var map__24320 = p__24318;
var map__24320__$1 = ((((!((map__24320 == null)))?(((((map__24320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24320):map__24320);
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24320__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24321 = p__24319;
var map__24324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24321,(0),null);
var map__24324__$1 = ((((!((map__24324 == null)))?(((((map__24324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24324):map__24324);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24324__$1,new cljs.core.Keyword(null,"user","user",1532431356));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([user,props], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),new cljs.core.Keyword(null,"update-user","update-user",-92427001)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294),(function (p__24327,p__24328){
var map__24329 = p__24327;
var map__24329__$1 = ((((!((map__24329 == null)))?(((((map__24329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24329):map__24329);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24329__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24330 = p__24328;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24330,(0),null);
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24330,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"following","following",-2049193617)], null)))?new cljs.core.Keyword(null,"delete","delete",-1768633620):new cljs.core.Keyword(null,"post","post",269697687)),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["profiles",username,"follow"], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24334 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24334) : ajax.core.json_response_format.call(null,G__24334));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-follow-user-success","toggle-follow-user-success",1087162160)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-follow-user-success","toggle-follow-user-success",1087162160),(function (db,p__24335){
var vec__24336 = p__24335;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24336,(0),null);
var map__24339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24336,(1),null);
var map__24339__$1 = ((((!((map__24339 == null)))?(((((map__24339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24339):map__24339);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24339__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"following","following",-2049193617)], null),new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350),(function (p__24341,p__24342){
var map__24343 = p__24341;
var map__24343__$1 = ((((!((map__24343 == null)))?(((((map__24343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24343):map__24343);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24343__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24344 = p__24342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24344,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24344,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350)], null),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"favorited","favorited",-1400766725)], null)))?new cljs.core.Keyword(null,"delete","delete",-1768633620):new cljs.core.Keyword(null,"post","post",269697687)),new cljs.core.Keyword(null,"uri","uri",-774711847),conduit.events.endpoint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["articles",slug,"favorite"], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),conduit.events.auth_header(db),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.json_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.json_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__24348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__24348) : ajax.core.json_response_format.call(null,G__24348));
})(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-favorite-article-success","toggle-favorite-article-success",-1429073255)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"login","login",55217519)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-favorite-article-success","toggle-favorite-article-success",-1429073255),(function (db,p__24349){
var vec__24350 = p__24349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(0),null);
var map__24353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(1),null);
var map__24353__$1 = ((((!((map__24353 == null)))?(((((map__24353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24353):map__24353);
var article = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24353__$1,new cljs.core.Keyword(null,"article","article",-21685045));
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article);
var favorited = new cljs.core.Keyword(null,"favorited","favorited",-1400766725).cljs$core$IFn$_invoke$arity$1(article);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"favorited","favorited",-1400766725)], null),favorited),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),slug,new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567)], null),(cljs.core.truth_(favorited)?new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567).cljs$core$IFn$_invoke$arity$2(article,cljs.core.inc):new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567).cljs$core$IFn$_invoke$arity$2(article,cljs.core.dec)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"logout","logout",1418564329),conduit.events.remove_user_interceptor,(function (p__24355,_){
var map__24356 = p__24355;
var map__24356__$1 = ((((!((map__24356 == null)))?(((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24356):map__24356);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24356__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"user","user",1532431356)),new cljs.core.Keyword(null,"set-hash","set-hash",-1120312112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hash","hash",-13781596),"/"], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),(function (db,p__24358){
var vec__24359 = p__24358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24359,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),request_type], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),(function (p__24362,p__24363){
var map__24364 = p__24362;
var map__24364__$1 = ((((!((map__24364 == null)))?(((((map__24364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24364):map__24364);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24364__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__24365 = p__24363;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24365,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24365,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24365,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null))),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-request","complete-request",-128905215),request_type], null)], null);
}));

//# sourceMappingURL=conduit.events.js.map
