// Compiled by ClojureScript 1.9.946 {}
goog.provide('conduit.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('conduit.subs');
goog.require('clojure.string');
conduit.views.format_date = (function conduit$views$format_date(date){
return (new Date(date)).toDateString();
});
conduit.views.tags_list = (function conduit$views$tags_list(tags_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.tag-list","ul.tag-list",-40566642),(function (){var iter__29293__auto__ = (function conduit$views$tags_list_$_iter__32320(s__32321){
return (new cljs.core.LazySeq(null,(function (){
var s__32321__$1 = s__32321;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32321__$1);
if(temp__4657__auto__){
var s__32321__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32321__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__32321__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__32323 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__32322 = (0);
while(true){
if((i__32322 < size__29292__auto__)){
var tag = cljs.core._nth.call(null,c__29291__auto__,i__32322);
cljs.core.chunk_append.call(null,b__32323,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tag-default.tag-pill.tag-outline","li.tag-default.tag-pill.tag-outline",-1473983742),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__32324 = (i__32322 + (1));
i__32322 = G__32324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32323),conduit$views$tags_list_$_iter__32320.call(null,cljs.core.chunk_rest.call(null,s__32321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32323),null);
}
} else {
var tag = cljs.core.first.call(null,s__32321__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.tag-default.tag-pill.tag-outline","li.tag-default.tag-pill.tag-outline",-1473983742),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),conduit$views$tags_list_$_iter__32320.call(null,cljs.core.rest.call(null,s__32321__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29293__auto__.call(null,tags_list);
})()], null);
});
conduit.views.article_meta = (function conduit$views$article_meta(p__32325){
var map__32326 = p__32325;
var map__32326__$1 = ((((!((map__32326 == null)))?((((map__32326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32326):map__32326);
var author = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var created_at = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var likes = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"likes","likes",792554542));
var favorites_count = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567));
var favorited = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
var slug = cljs.core.get.call(null,map__32326__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var loading = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
var user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
var profile = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-meta","div.article-meta",608522075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info","div.info",-1023482078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.author","a.author",-1515189816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",2108360793),conduit.views.format_date.call(null,created_at)], null)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary","a.btn.btn-sm.btn-outline-secondary",-649071213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/editor/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-edit","i.ion-edit",-898619775)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Edit Article "], null)], null)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-outline-danger.btn-sm","a.btn.btn-outline-danger.btn-sm",355761909),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,user,profile,map__32326,map__32326__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-article","delete-article",1402885667),slug], null));
});})(loading,user,profile,map__32326,map__32326__$1,author,created_at,likes,favorites_count,favorited,slug))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-trash-a","i.ion-trash-a",-1489458005)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," Delete Article "], null)], null)], null):((cljs.core.empty_QMARK_.call(null,user))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.action-btn.btn-outline-secondary","button.btn.btn-sm.action-btn.btn-outline-secondary",1089656337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,user,profile,map__32326,map__32326__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)], null));
});})(loading,user,profile,map__32326,map__32326__$1,author,created_at,likes,favorites_count,favorited,slug))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null)," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-primary","button.btn.btn-sm.btn-primary",1703461621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,user,profile,map__32326,map__32326__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350),slug], null));
});})(loading,user,profile,map__32326,map__32326__$1,author,created_at,likes,favorites_count,favorited,slug))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,favorited))?"btn-outline-primary":(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-heart","i.ion-heart",-2106657443)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(favorited)?" Unfavorite Post ":" Favorite Post ")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.counter","span.counter",865661220),"(",favorites_count,")"], null)], null)], null)))], null);
});
conduit.views.articles_preview = (function conduit$views$articles_preview(p__32328){
var map__32329 = p__32328;
var map__32329__$1 = ((((!((map__32329 == null)))?((((map__32329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32329):map__32329);
var description = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var slug = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var createdAt = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var title = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"title","title",636505583));
var author = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var favoritesCount = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"favoritesCount","favoritesCount",-1679335567));
var favorited = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"favorited","favorited",-1400766725));
var tagList = cljs.core.get.call(null,map__32329__$1,new cljs.core.Keyword(null,"tagList","tagList",-1630558309));
var loading = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-preview","div.article-preview",-777546431),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-meta","div.article-meta",608522075),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info","div.info",-1023482078),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.author","a.author",-1515189816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date","span.date",2108360793),conduit.views.format_date.call(null,createdAt)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-sm.pull-xs-right","button.btn.btn-primary.btn-sm.pull-xs-right",1082961398),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (loading,map__32329,map__32329__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350),slug], null));
});})(loading,map__32329,map__32329__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.not.call(null,favorited))?"btn-outline-primary":(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-favorite-article","toggle-favorite-article",2111022350).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-heart","i.ion-heart",-2106657443)," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),favoritesCount], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.preview-link","a.preview-link",-1615261051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/article/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Read more ..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,tagList], null)], null)], null);
});
conduit.views.articles_list = (function conduit$views$articles_list(articles,loading_articles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(loading_articles)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-preview","div.article-preview",-777546431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading articles ..."], null)], null):((cljs.core.empty_QMARK_.call(null,articles))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-preview","div.article-preview",-777546431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"No articles are here... yet."], null)], null):(function (){var iter__29293__auto__ = (function conduit$views$articles_list_$_iter__32331(s__32332){
return (new cljs.core.LazySeq(null,(function (){
var s__32332__$1 = s__32332;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32332__$1);
if(temp__4657__auto__){
var s__32332__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32332__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__32332__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__32334 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__32333 = (0);
while(true){
if((i__32333 < size__29292__auto__)){
var article = cljs.core._nth.call(null,c__29291__auto__,i__32333);
cljs.core.chunk_append.call(null,b__32334,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)));

var G__32335 = (i__32333 + (1));
i__32333 = G__32335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32334),conduit$views$articles_list_$_iter__32331.call(null,cljs.core.chunk_rest.call(null,s__32332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32334),null);
}
} else {
var article = cljs.core.first.call(null,s__32332__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(article)], null)),conduit$views$articles_list_$_iter__32331.call(null,cljs.core.rest.call(null,s__32332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29293__auto__.call(null,articles);
})()))], null);
});
conduit.views.errors_list = (function conduit$views$errors_list(errors){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.error-messages","ul.error-messages",-1651696846),(function (){var iter__29293__auto__ = (function conduit$views$errors_list_$_iter__32336(s__32337){
return (new cljs.core.LazySeq(null,(function (){
var s__32337__$1 = s__32337;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32337__$1);
if(temp__4657__auto__){
var s__32337__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32337__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__32337__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__32339 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__32338 = (0);
while(true){
if((i__32338 < size__29292__auto__)){
var vec__32340 = cljs.core._nth.call(null,c__29291__auto__,i__32338);
var key = cljs.core.nth.call(null,vec__32340,(0),null);
var vec__32343 = cljs.core.nth.call(null,vec__32340,(1),null);
var val = cljs.core.nth.call(null,vec__32343,(0),null);
cljs.core.chunk_append.call(null,b__32339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__32352 = (i__32338 + (1));
i__32338 = G__32352;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32339),conduit$views$errors_list_$_iter__32336.call(null,cljs.core.chunk_rest.call(null,s__32337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32339),null);
}
} else {
var vec__32346 = cljs.core.first.call(null,s__32337__$2);
var key = cljs.core.nth.call(null,vec__32346,(0),null);
var vec__32349 = cljs.core.nth.call(null,vec__32346,(1),null);
var val = cljs.core.nth.call(null,vec__32349,(0),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),conduit$views$errors_list_$_iter__32336.call(null,cljs.core.rest.call(null,s__32337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29293__auto__.call(null,errors);
})()], null);
});
conduit.views.header = (function conduit$views$header(){
var user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
var active_page = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light","nav.navbar.navbar-light",1619510692),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"conduit"], null),((cljs.core.empty_QMARK_.call(null,user))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"home","home",-74557309)))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"login","login",55217519)))?"active":null)], null),"Sign in"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/register",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"register","register",1968522516)))?"active":null)], null),"Sign up"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"home","home",-74557309)))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/editor",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"editor","editor",-989377770)))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-compose","i.ion-compose",-172454223),"New Article"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/settings",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"settings","settings",1556144875)))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-gear-a","i.ion-gear-a",-374816109),"Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,active_page,new cljs.core.Keyword(null,"profile","profile",-545963874)))?"active":null)], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.user-pic","img.user-pic",121518549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(user)], null)], null)], null)], null)], null))], null)], null);
});
conduit.views.footer = (function conduit$views$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.logo-font","a.logo-font",-533151632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"conduit"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.attribution","span.attribution",554584640),"An interactive learning project from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://thinkster.io"], null),"Thinkster"], null),". Code & design licensed under MIT."], null)], null)], null);
});
conduit.views.get_articles = (function conduit$views$get_articles(event,params){
event.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-articles","get-articles",891972795),params], null));
});
conduit.views.get_feed_articles = (function conduit$views$get_feed_articles(event,params){
event.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-feed-articles","get-feed-articles",-763210307),params], null));
});
conduit.views.home = (function conduit$views$home(){
var filter = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null)));
var tags = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null)));
var loading = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
var articles = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null)));
var articles_count = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles-count","articles-count",-222608021)], null)));
var user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.home-page","div.home-page",149758333),((cljs.core.empty_QMARK_.call(null,user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner","div.banner",1606340820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.logo-font","h1.logo-font",865184032),"conduit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A place to share your knowledge."], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.feed-toggle","div.feed-toggle",-806399334),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.outline-active","ul.nav.nav-pills.outline-active",-1626568259),((cljs.core.empty_QMARK_.call(null,user))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(filter))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__32353_SHARP_){
return conduit.views.get_feed_articles.call(null,p1__32353_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Your Feed"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var or__28485__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return new cljs.core.Keyword(null,"feed","feed",-1566486205).cljs$core$IFn$_invoke$arity$1(filter);
}
})())?null:"active"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__32354_SHARP_){
return conduit.views.get_articles.call(null,p1__32354_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),null,new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Global Feed"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link.active","a.nav-link.active",-1128434498),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-pound","i.ion-pound",85408038)], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter))].join('')], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(loading)], null),(cljs.core.truth_((function (){var or__28485__auto__ = new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(loading);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (articles_count < (10));
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.pagination","ul.pagination",616876298),(function (){var iter__29293__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__32357(s__32358){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__32358__$1 = s__32358;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32358__$1);
if(temp__4657__auto__){
var s__32358__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32358__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__32358__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__32360 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__32359 = (0);
while(true){
if((i__32359 < size__29292__auto__)){
var offset = cljs.core._nth.call(null,c__29291__auto__,i__32359);
cljs.core.chunk_append.call(null,b__32360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item","li.page-item",-574487083),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,(offset * (10)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32359,offset,c__29291__auto__,size__29292__auto__,b__32360,s__32358__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__32355_SHARP_){
return conduit.views.get_articles.call(null,p1__32355_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),(offset * (10)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
});})(i__32359,offset,c__29291__auto__,size__29292__auto__,b__32360,s__32358__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-link","a.page-link",-66343279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),offset], null)));

var G__32365 = (i__32359 + (1));
i__32359 = G__32365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),conduit$views$home_$_iter__32357.call(null,cljs.core.chunk_rest.call(null,s__32358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32360),null);
}
} else {
var offset = cljs.core.first.call(null,s__32358__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.page-item","li.page-item",-574487083),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,(offset * (10)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (offset,s__32358__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__32355_SHARP_){
return conduit.views.get_articles.call(null,p1__32355_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),(offset * (10)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(filter),new cljs.core.Keyword(null,"limit","limit",-1355822363),(10)], null));
});})(offset,s__32358__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.page-link","a.page-link",-66343279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),offset], null)),conduit$views$home_$_iter__32357.call(null,cljs.core.rest.call(null,s__32358__$2)));
}
} else {
return null;
}
break;
}
});})(filter,tags,loading,articles,articles_count,user))
,null,null));
});})(filter,tags,loading,articles,articles_count,user))
;
return iter__29293__auto__.call(null,cljs.core.range.call(null,(articles_count / (10))));
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar","div.sidebar",1454675964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Popular Tags"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading tags ..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag-list","div.tag-list",-323342005),(function (){var iter__29293__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__32361(s__32362){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__32362__$1 = s__32362;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32362__$1);
if(temp__4657__auto__){
var s__32362__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32362__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__32362__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__32364 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__32363 = (0);
while(true){
if((i__32363 < size__29292__auto__)){
var tag = cljs.core._nth.call(null,c__29291__auto__,i__32363);
cljs.core.chunk_append.call(null,b__32364,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag-pill.tag-default","a.tag-pill.tag-default",531342910),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32363,tag,c__29291__auto__,size__29292__auto__,b__32364,s__32362__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__32356_SHARP_){
return conduit.views.get_articles.call(null,p1__32356_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));
});})(i__32363,tag,c__29291__auto__,size__29292__auto__,b__32364,s__32362__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__32366 = (i__32363 + (1));
i__32363 = G__32366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32364),conduit$views$home_$_iter__32361.call(null,cljs.core.chunk_rest.call(null,s__32362__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32364),null);
}
} else {
var tag = cljs.core.first.call(null,s__32362__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag-pill.tag-default","a.tag-pill.tag-default",531342910),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__32362__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__32356_SHARP_){
return conduit.views.get_articles.call(null,p1__32356_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));
});})(tag,s__32362__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),conduit$views$home_$_iter__32361.call(null,cljs.core.rest.call(null,s__32362__$2)));
}
} else {
return null;
}
break;
}
});})(filter,tags,loading,articles,articles_count,user))
,null,null));
});})(filter,tags,loading,articles,articles_count,user))
;
return iter__29293__auto__.call(null,tags);
})()], null))], null)], null)], null)], null)], null);
});
conduit.views.login_user = (function conduit$views$login_user(event,credentials){
event.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),credentials], null));
});
conduit.views.login = (function conduit$views$login(){
var default$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),""], null);
var credentials = reagent.core.atom.call(null,default$);
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
var errors = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
return ((function (default$,credentials,loading,errors){
return (function (){
var email = cljs.core.get.call(null,cljs.core.deref.call(null,credentials),new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.call(null,cljs.core.deref.call(null,credentials),new cljs.core.Keyword(null,"password","password",417022471));
var login_errors = cljs.core.get.call(null,cljs.core.deref.call(null,errors),new cljs.core.Keyword(null,"login","login",55217519));
var login_loading = cljs.core.get.call(null,cljs.core.deref.call(null,loading),new cljs.core.Keyword(null,"login","login",55217519));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-page","div.auth-page",441574278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.offset-md-3.col-xs-12","div.col-md-6.offset-md-3.col-xs-12",-1108757189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xs-center","h1.text-xs-center",-588320608),"Sign in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs-center","p.text-xs-center",1025410954),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/register"], null),"Need an account?"], null)], null),(cljs.core.truth_(login_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,login_errors], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (email,password,login_errors,login_loading,default$,credentials,loading,errors){
return (function (p1__32367_SHARP_){
return conduit.views.login_user.call(null,p1__32367_SHARP_,cljs.core.deref.call(null,credentials));
});})(email,password,login_errors,login_loading,default$,credentials,loading,errors))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),email,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email,password,login_errors,login_loading,default$,credentials,loading,errors){
return (function (p1__32368_SHARP_){
return cljs.core.swap_BANG_.call(null,credentials,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__32368_SHARP_.target.value);
});})(email,password,login_errors,login_loading,default$,credentials,loading,errors))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(login_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (email,password,login_errors,login_loading,default$,credentials,loading,errors){
return (function (p1__32369_SHARP_){
return cljs.core.swap_BANG_.call(null,credentials,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__32369_SHARP_.target.value);
});})(email,password,login_errors,login_loading,default$,credentials,loading,errors))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(login_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(login_loading)?"disabled":null)], null),"Sign in"], null)], null)], null)], null)], null)], null);
});
;})(default$,credentials,loading,errors))
});
conduit.views.register_user = (function conduit$views$register_user(event,registration){
event.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-user","register-user",516261094),registration], null));
});
conduit.views.register = (function conduit$views$register(){
var default$ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"email","email",1415816706),"",new cljs.core.Keyword(null,"password","password",417022471),""], null);
var registration = reagent.core.atom.call(null,default$);
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
var errors = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
return ((function (default$,registration,loading,errors){
return (function (){
var username = cljs.core.get.call(null,cljs.core.deref.call(null,registration),new cljs.core.Keyword(null,"username","username",1605666410));
var email = cljs.core.get.call(null,cljs.core.deref.call(null,registration),new cljs.core.Keyword(null,"email","email",1415816706));
var password = cljs.core.get.call(null,cljs.core.deref.call(null,registration),new cljs.core.Keyword(null,"password","password",417022471));
var register_user_errors = cljs.core.get.call(null,cljs.core.deref.call(null,errors),new cljs.core.Keyword(null,"register-user","register-user",516261094));
var register_user_loading = cljs.core.get.call(null,cljs.core.deref.call(null,loading),new cljs.core.Keyword(null,"register-user","register-user",516261094));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auth-page","div.auth-page",441574278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.offset-md-3.col-xs-12","div.col-md-6.offset-md-3.col-xs-12",-1108757189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xs-center","h1.text-xs-center",-588320608),"Sign up"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-xs-center","p.text-xs-center",1025410954),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login"], null),"Have an account?"], null)], null),(cljs.core.truth_(register_user_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,register_user_errors], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__32370_SHARP_){
return conduit.views.register_user.call(null,p1__32370_SHARP_,cljs.core.deref.call(null,registration));
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your Name",new cljs.core.Keyword(null,"value","value",305978217),username,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__32371_SHARP_){
return cljs.core.swap_BANG_.call(null,registration,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__32371_SHARP_.target.value);
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(register_user_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"value","value",305978217),email,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__32372_SHARP_){
return cljs.core.swap_BANG_.call(null,registration,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__32372_SHARP_.target.value);
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(register_user_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),password,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__32373_SHARP_){
return cljs.core.swap_BANG_.call(null,registration,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__32373_SHARP_.target.value);
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(register_user_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(register_user_loading)?"disabled":null)], null),"Sign up"], null)], null)], null)], null)], null)], null);
});
;})(default$,registration,loading,errors))
});
conduit.views.profile = (function conduit$views$profile(){
var profile = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874)], null)));
var filter = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null)));
var loading = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
var articles = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null)));
var user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.profile-page","div.profile-page",1008090497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.user-info","div.user-info",-1795367347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-md-10.offset-md-1","div.col-xs-12.col-md-10.offset-md-1",-598972082),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.user-img","img.user-img",-1067609457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(profile)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"bio","bio",-331851886).cljs$core$IFn$_invoke$arity$1(profile)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-outline-secondary.action-btn","a.btn.btn-sm.btn-outline-secondary.action-btn",-1402821230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/settings"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-gear-a","i.ion-gear-a",-374816109)], null)," Edit Profile Settings"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.action-btn.btn-outline-secondary","button.btn.btn-sm.action-btn.btn-outline-secondary",1089656337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (profile,filter,loading,articles,user){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)], null));
});})(profile,filter,loading,articles,user))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"toggle-follow-user","toggle-follow-user",-1980470294).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(new cljs.core.Keyword(null,"following","following",-2049193617).cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-md-10.offset-md-1","div.col-xs-12.col-md-10.offset-md-1",-598972082),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.articles-toggle","div.articles-toggle",-1497777454),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.outline-active","ul.nav.nav-pills.outline-active",-1626568259),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile))].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(filter))?" active":null)], null),"My Articles"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.nav-link","a.nav-link",-1155633499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(profile)),"/favorites"].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"favorites","favorites",1740773480).cljs$core$IFn$_invoke$arity$1(filter))?"nav-link active":null)], null),"Favorited Articles"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(loading)], null)], null)], null)], null)], null);
});
conduit.views.logout_user = (function conduit$views$logout_user(event){
event.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
});
conduit.views.update_user = (function conduit$views$update_user(event,update){
event.preventDefault();

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-user","update-user",-92427001),update], null));
});
conduit.views.settings = (function conduit$views$settings(){
var map__32381_32385 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-article","active-article",-2143954133)], null)));
var map__32381_32386__$1 = ((((!((map__32381_32385 == null)))?((((map__32381_32385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32381_32385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32381_32385):map__32381_32385);
var active_article_32387 = map__32381_32386__$1;
var title_32388 = cljs.core.get.call(null,map__32381_32386__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description_32389 = cljs.core.get.call(null,map__32381_32386__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var body_32390 = cljs.core.get.call(null,map__32381_32386__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tagList_32391 = cljs.core.get.call(null,map__32381_32386__$1,new cljs.core.Keyword(null,"tagList","tagList",-1630558309));
var slug_32392 = cljs.core.get.call(null,map__32381_32386__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var default_32393 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title_32388,new cljs.core.Keyword(null,"description","description",-1428560544),description_32389,new cljs.core.Keyword(null,"body","body",-2049205669),body_32390,new cljs.core.Keyword(null,"tagList","tagList",-1630558309),tagList_32391], null);
var content_32394 = reagent.core.atom.call(null,default_32393);

var map__32383 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
var map__32383__$1 = ((((!((map__32383 == null)))?((((map__32383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32383):map__32383);
var user = map__32383__$1;
var bio = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"bio","bio",-331851886));
var email = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var image = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var username = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var default$ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bio","bio",-331851886),bio,new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"image","image",-58725096),image,new cljs.core.Keyword(null,"username","username",1605666410),username], null);
var loading = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
var user_update = reagent.core.atom.call(null,default$);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.settings-page","div.settings-page",854633241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6.offset-md-3.col-xs-12","div.col-md-6.offset-md-3.col-xs-12",-1108757189),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xs-center","h1.text-xs-center",-588320608),"Your Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"URL of profile picture",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32374_SHARP_){
return cljs.core.swap_BANG_.call(null,user_update,cljs.core.assoc,new cljs.core.Keyword(null,"image","image",-58725096),p1__32374_SHARP_.target.value);
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your Name",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32375_SHARP_){
return cljs.core.swap_BANG_.call(null,user_update,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__32375_SHARP_.target.value);
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control.form-control-lg","textarea.form-control.form-control-lg",-1497847908),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rows","rows",850049680),"8",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Short bio about you",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"bio","bio",-331851886).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32376_SHARP_){
return cljs.core.swap_BANG_.call(null,user_update,cljs.core.assoc,new cljs.core.Keyword(null,"bio","bio",-331851886),p1__32376_SHARP_.target.value);
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Email",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32377_SHARP_){
return cljs.core.swap_BANG_.call(null,user_update,cljs.core.assoc,new cljs.core.Keyword(null,"email","email",1415816706),p1__32377_SHARP_.target.value);
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"default-value","default-value",232220170),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32378_SHARP_){
return cljs.core.swap_BANG_.call(null,user_update,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__32378_SHARP_.target.value);
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32379_SHARP_){
return conduit.views.update_user.call(null,p1__32379_SHARP_,cljs.core.deref.call(null,user_update));
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"update-user","update-user",-92427001).cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Update Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-outline-danger","button.btn.btn-outline-danger",-453697678),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__32380_SHARP_){
return conduit.views.logout_user.call(null,p1__32380_SHARP_);
});})(map__32383,map__32383__$1,user,bio,email,image,username,default$,loading,user_update))
], null),"Or click here to logout."], null)], null)], null)], null)], null);
});
conduit.views.upsert_article = (function conduit$views$upsert_article(event,content,slug){
event.preventDefault();

var title = clojure.string.trim.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(content));
var description = clojure.string.trim.call(null,new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(content));
var body = clojure.string.trim.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(content));
var tagList = clojure.string.split.call(null,new cljs.core.Keyword(null,"tagList","tagList",-1630558309).cljs$core$IFn$_invoke$arity$1(content),/ /);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"tagList","tagList",-1630558309),tagList], null)], null)], null));
});
conduit.views.editor = (function conduit$views$editor(){
var default$ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"description","description",-1428560544),"",new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"tagList","tagList",-1630558309),""], null);
var content = reagent.core.atom.call(null,default$);
var errors = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
var active_article = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-article","active-article",-2143954133)], null));
return ((function (default$,content,errors,active_article){
return (function (){
var title = (function (){var or__28485__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,active_article),new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return "";
}
})();
var description = (function (){var or__28485__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,active_article),new cljs.core.Keyword(null,"description","description",-1428560544));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return "";
}
})();
var body = (function (){var or__28485__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,active_article),new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return "";
}
})();
var tagList = (function (){var or__28485__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,active_article),new cljs.core.Keyword(null,"tagList","tagList",-1630558309));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return "";
}
})();
var slug = cljs.core.get.call(null,cljs.core.deref.call(null,active_article),new cljs.core.Keyword(null,"slug","slug",2029314850));
var article_errors = cljs.core.get.call(null,cljs.core.deref.call(null,errors),new cljs.core.Keyword(null,"upsert-article","upsert-article",-947179448));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-page","div.editor-page",-470854255),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10.offset-md-1.col-xs-12","div.col-md-10.offset-md-1.col-xs-12",-2091211259),(cljs.core.truth_(article_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,article_errors], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.form-control-lg","input.form-control.form-control-lg",17753151),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Article Title",new cljs.core.Keyword(null,"default-value","default-value",232220170),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__32395_SHARP_){
return cljs.core.swap_BANG_.call(null,content,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__32395_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What's this article about?",new cljs.core.Keyword(null,"default-value","default-value",232220170),description,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__32396_SHARP_){
return cljs.core.swap_BANG_.call(null,content,cljs.core.assoc,new cljs.core.Keyword(null,"description","description",-1428560544),p1__32396_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rows","rows",850049680),"8",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write your article (in markdown)",new cljs.core.Keyword(null,"default-value","default-value",232220170),body,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__32397_SHARP_){
return cljs.core.swap_BANG_.call(null,content,cljs.core.assoc,new cljs.core.Keyword(null,"body","body",-2049205669),p1__32397_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter tags",new cljs.core.Keyword(null,"default-value","default-value",232220170),tagList,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__32398_SHARP_){
return cljs.core.swap_BANG_.call(null,content,cljs.core.assoc,new cljs.core.Keyword(null,"tagList","tagList",-1630558309),p1__32398_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tag-list","div.tag-list",-323342005)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary.pull-xs-right","button.btn.btn-lg.btn-primary.pull-xs-right",1712770378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__32399_SHARP_){
return conduit.views.upsert_article.call(null,p1__32399_SHARP_,cljs.core.deref.call(null,content),slug);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null),(cljs.core.truth_(cljs.core.deref.call(null,active_article))?"Update Article":"Publish Article")], null)], null)], null)], null)], null)], null)], null);
});
;})(default$,content,errors,active_article))
});
conduit.views.post_comment = (function conduit$views$post_comment(event,comment,default$){
event.preventDefault();

var body = cljs.core.get.call(null,cljs.core.deref.call(null,comment),new cljs.core.Keyword(null,"body","body",-2049205669));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-comment","post-comment",-185302743),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),body], null)], null));

return cljs.core.reset_BANG_.call(null,comment,default$);
});
conduit.views.article = (function conduit$views$article(){
var default$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),""], null);
var comment = reagent.core.atom.call(null,default$);
var errors = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null));
var loading = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null));
var articles = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null)));
var user = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
var profile = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874)], null)));
var comments = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423)], null));
return ((function (default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
var active_article = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-article","active-article",-2143954133)], null)));
var comments_errors = cljs.core.get.call(null,cljs.core.deref.call(null,errors),new cljs.core.Keyword(null,"comments","comments",-293346423));
var comments_loading = cljs.core.get.call(null,cljs.core.deref.call(null,loading),new cljs.core.Keyword(null,"comments","comments",-293346423));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-page","div.article-page",-240223410),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner","div.banner",1606340820),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.page","div.container.page",828368990),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.article-content","div.row.article-content",2097173588),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(active_article)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,new cljs.core.Keyword(null,"tagList","tagList",-1630558309).cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article-actions","div.article-actions",-865344986),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-12.col-md-8.offset-md-2","div.col-xs-12.col-md-8.offset-md-2",287903909),(cljs.core.truth_(comments_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,comments_errors], null):null),((!(cljs.core.empty_QMARK_.call(null,user)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.card.comment-form","form.card.comment-form",414139020),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write a comment...",new cljs.core.Keyword(null,"rows","rows",850049680),"3",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comment)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (p1__32400_SHARP_){
return cljs.core.swap_BANG_.call(null,comment,cljs.core.assoc,new cljs.core.Keyword(null,"body","body",-2049205669),p1__32400_SHARP_.target.value);
});})(active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.comment-author-img","img.comment-author-img",-1780420511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-primary","button.btn.btn-sm.btn-primary",1703461621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(comments_loading)?"disabled":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (p1__32401_SHARP_){
return conduit.views.post_comment.call(null,p1__32401_SHARP_,comment,default$);
});})(active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null),"Post Comment"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/register"], null),"Sign in"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/login"], null),"Sign in"], null)," to add comments on this article."], null)),(cljs.core.truth_(comments_loading)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading comments ..."], null)], null):((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,comments)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):(function (){var iter__29293__auto__ = ((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function conduit$views$article_$_iter__32402(s__32403){
return (new cljs.core.LazySeq(null,((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
var s__32403__$1 = s__32403;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32403__$1);
if(temp__4657__auto__){
var s__32403__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32403__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__32403__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__32405 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__32404 = (0);
while(true){
if((i__32404 < size__29292__auto__)){
var map__32406 = cljs.core._nth.call(null,c__29291__auto__,i__32404);
var map__32406__$1 = ((((!((map__32406 == null)))?((((map__32406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32406):map__32406);
var id = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var createdAt = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var body = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var author = cljs.core.get.call(null,map__32406__$1,new cljs.core.Keyword(null,"author","author",2111686192));
cljs.core.chunk_append.call(null,b__32405,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-text","p.card-text",815200113),body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.comment-author-img","img.comment-author-img",-1780420511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date-posted","span.date-posted",-190109561),conduit.views.format_date.call(null,createdAt)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mod-options","span.mod-options",1197037963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32404,map__32406,map__32406__$1,id,createdAt,body,author,c__29291__auto__,size__29292__auto__,b__32405,s__32403__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),id], null));
});})(i__32404,map__32406,map__32406__$1,id,createdAt,body,author,c__29291__auto__,size__29292__auto__,b__32405,s__32403__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-trash-a","i.ion-trash-a",-1489458005)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__32410 = (i__32404 + (1));
i__32404 = G__32410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32405),conduit$views$article_$_iter__32402.call(null,cljs.core.chunk_rest.call(null,s__32403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32405),null);
}
} else {
var map__32408 = cljs.core.first.call(null,s__32403__$2);
var map__32408__$1 = ((((!((map__32408 == null)))?((((map__32408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32408):map__32408);
var id = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var createdAt = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"createdAt","createdAt",-936788));
var body = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var author = cljs.core.get.call(null,map__32408__$1,new cljs.core.Keyword(null,"author","author",2111686192));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-block","div.card-block",1886467105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-text","p.card-text",815200113),body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer","div.card-footer",1034080687),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.comment-author-img","img.comment-author-img",-1780420511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.comment-author","a.comment-author",-1609002409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.date-posted","span.date-posted",-190109561),conduit.views.format_date.call(null,createdAt)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(user),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mod-options","span.mod-options",1197037963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__32408,map__32408__$1,id,createdAt,body,author,s__32403__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),id], null));
});})(map__32408,map__32408__$1,id,createdAt,body,author,s__32403__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.ion-trash-a","i.ion-trash-a",-1489458005)], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),conduit$views$article_$_iter__32402.call(null,cljs.core.rest.call(null,s__32403__$2)));
}
} else {
return null;
}
break;
}
});})(active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
,null,null));
});})(active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
;
return iter__29293__auto__.call(null,cljs.core.deref.call(null,comments));
})()))], null)], null)], null)], null);
});
;})(default$,comment,errors,loading,articles,user,profile,comments))
});
conduit.views.pages = (function conduit$views$pages(page_name){
var G__32411 = page_name;
var G__32411__$1 = (((G__32411 instanceof cljs.core.Keyword))?G__32411.fqn:null);
switch (G__32411__$1) {
case "home":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.home], null);

break;
case "login":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.login], null);

break;
case "register":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.register], null);

break;
case "profile":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.profile], null);

break;
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.settings], null);

break;
case "editor":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.editor], null);

break;
case "article":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.home], null);

}
});
conduit.views.conduit_app = (function conduit$views$conduit_app(){
var active_page = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.pages,active_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.footer], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1512565252147
