// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('conduit.subs');
goog.require('clojure.string');
conduit.views.format_date = (function conduit$views$format_date(date){
return (new Date(date)).toDateString();
});
conduit.views.tags_list = (function conduit$views$tags_list(tags_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$tag_DASH_list,(function (){var iter__8587__auto__ = (function conduit$views$tags_list_$_iter__20750(s__20751){
return (new cljs.core.LazySeq(null,(function (){
var s__20751__$1 = s__20751;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20751__$1);
if(temp__4657__auto__){
var s__20751__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20751__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__20751__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__20753 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__20752 = (0);
while(true){
if((i__20752 < size__8586__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__20752);
cljs.core.chunk_append(b__20753,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$tag_DASH_default$tag_DASH_pill$tag_DASH_outline,tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)));

var G__20754 = (i__20752 + (1));
i__20752 = G__20754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20753),conduit$views$tags_list_$_iter__20750(cljs.core.chunk_rest(s__20751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20753),null);
}
} else {
var tag = cljs.core.first(s__20751__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$tag_DASH_default$tag_DASH_pill$tag_DASH_outline,tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)),conduit$views$tags_list_$_iter__20750(cljs.core.rest(s__20751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8587__auto__(tags_list);
})()], null);
});
conduit.views.article_meta = (function conduit$views$article_meta(p__20755){
var map__20756 = p__20755;
var map__20756__$1 = ((((!((map__20756 == null)))?((((map__20756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20756):map__20756);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$author);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$createdAt);
var likes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$likes);
var favorites_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$favoritesCount);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$favorited);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,cljs.core.cst$kw$slug);
var loading = cljs.core.deref((function (){var G__20758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20758) : re_frame.core.subscribe.call(null,G__20758));
})());
var user = cljs.core.deref((function (){var G__20759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20759) : re_frame.core.subscribe.call(null,G__20759));
})());
var profile = cljs.core.deref((function (){var G__20760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20760) : re_frame.core.subscribe.call(null,G__20760));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date,conduit.views.format_date(created_at)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/editor/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_edit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Edit Article "], null)], null)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_outline_DASH_danger$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/",cljs.core.cst$kw$on_DASH_click,((function (loading,user,profile,map__20756,map__20756__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
var G__20761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_article,slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20761) : re_frame.core.dispatch.call(null,G__20761));
});})(loading,user,profile,map__20756,map__20756__$1,author,created_at,likes,favorites_count,favorited,slug))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Delete Article "], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$action_DASH_btn$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (loading,user,profile,map__20756,map__20756__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
var G__20762 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20762) : re_frame.core.dispatch.call(null,G__20762));
});})(loading,user,profile,map__20756,map__20756__$1,author,created_at,likes,favorites_count,favorited,slug))
,cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_follow_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null)," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (loading,user,profile,map__20756,map__20756__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
var G__20763 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20763) : re_frame.core.dispatch.call(null,G__20763));
});})(loading,user,profile,map__20756,map__20756__$1,author,created_at,likes,favorites_count,favorited,slug))
,cljs.core.cst$kw$class,((cljs.core.not(favorited))?"btn-outline-primary":(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_heart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(favorited)?" Unfavorite Post ":" Favorite Post ")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$counter,"(",favorites_count,")"], null)], null)], null))], null);
});
conduit.views.articles_preview = (function conduit$views$articles_preview(p__20764){
var map__20765 = p__20764;
var map__20765__$1 = ((((!((map__20765 == null)))?((((map__20765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20765):map__20765);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$description);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$slug);
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$createdAt);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$title);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$author);
var favoritesCount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$favoritesCount);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$favorited);
var tagList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,cljs.core.cst$kw$tagList);
var loading = cljs.core.deref((function (){var G__20767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20767) : re_frame.core.subscribe.call(null,G__20767));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date,conduit.views.format_date(createdAt)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary$btn_DASH_sm$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (loading,map__20765,map__20765__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList){
return (function (){
var G__20768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20768) : re_frame.core.dispatch.call(null,G__20768));
});})(loading,map__20765,map__20765__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList))
,cljs.core.cst$kw$class,((cljs.core.not(favorited))?"btn-outline-primary":(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_heart," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,favoritesCount], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$preview_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/article/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Read more ..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,tagList], null)], null)], null);
});
conduit.views.articles_list = (function conduit$views$articles_list(articles,loading_articles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(loading_articles)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Loading articles ..."], null)], null):((cljs.core.empty_QMARK_(articles))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"No articles are here... yet."], null)], null):(function (){var iter__8587__auto__ = (function conduit$views$articles_list_$_iter__20769(s__20770){
return (new cljs.core.LazySeq(null,(function (){
var s__20770__$1 = s__20770;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20770__$1);
if(temp__4657__auto__){
var s__20770__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20770__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__20770__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__20772 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__20771 = (0);
while(true){
if((i__20771 < size__8586__auto__)){
var article = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__20771);
cljs.core.chunk_append(b__20772,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)));

var G__20773 = (i__20771 + (1));
i__20771 = G__20773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20772),conduit$views$articles_list_$_iter__20769(cljs.core.chunk_rest(s__20770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20772),null);
}
} else {
var article = cljs.core.first(s__20770__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)),conduit$views$articles_list_$_iter__20769(cljs.core.rest(s__20770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8587__auto__(articles);
})()))], null);
});
conduit.views.errors_list = (function conduit$views$errors_list(errors){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$error_DASH_messages,(function (){var iter__8587__auto__ = (function conduit$views$errors_list_$_iter__20774(s__20775){
return (new cljs.core.LazySeq(null,(function (){
var s__20775__$1 = s__20775;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20775__$1);
if(temp__4657__auto__){
var s__20775__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20775__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__20775__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__20777 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__20776 = (0);
while(true){
if((i__20776 < size__8586__auto__)){
var vec__20778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__20776);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20778,(0),null);
var vec__20781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20778,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20781,(0),null);
cljs.core.chunk_append(b__20777,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)));

var G__20790 = (i__20776 + (1));
i__20776 = G__20790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20777),conduit$views$errors_list_$_iter__20774(cljs.core.chunk_rest(s__20775__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20777),null);
}
} else {
var vec__20784 = cljs.core.first(s__20775__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20784,(0),null);
var vec__20787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20784,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20787,(0),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),conduit$views$errors_list_$_iter__20774(cljs.core.rest(s__20775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8587__auto__(errors);
})()], null);
});
conduit.views.header = (function conduit$views$header(){
var user = cljs.core.deref((function (){var G__20791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20791) : re_frame.core.subscribe.call(null,G__20791));
})());
var active_page = cljs.core.deref((function (){var G__20792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20792) : re_frame.core.subscribe.call(null,G__20792));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_light,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/#/"], null),"conduit"], null),((cljs.core.empty_QMARK_(user))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav$pull_DASH_xs_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$home))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/login",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$login))?"active":null)], null),"Sign in"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/register",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$register))?"active":null)], null),"Sign up"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav$pull_DASH_xs_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$home))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/editor",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$editor))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_compose,"New Article"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"/#/settings",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$settings))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_gear_DASH_a,"Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user))].join(''),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$profile))?"active":null)], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$user_DASH_pic,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(user)], null)], null)], null)], null)], null))], null)], null);
});
conduit.views.footer = (function conduit$views$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$logo_DASH_font,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/#/"], null),"conduit"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$attribution,"An interactive learning project from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://thinkster.io"], null),"Thinkster"], null),". Code & design licensed under MIT."], null)], null)], null);
});
conduit.views.get_articles = (function conduit$views$get_articles(event,params){
event.preventDefault();

var G__20793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles,params], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20793) : re_frame.core.dispatch.call(null,G__20793));
});
conduit.views.get_feed_articles = (function conduit$views$get_feed_articles(event,params){
event.preventDefault();

var G__20794 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles,params], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20794) : re_frame.core.dispatch.call(null,G__20794));
});
conduit.views.home = (function conduit$views$home(){
var filter = cljs.core.deref((function (){var G__20799 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20799) : re_frame.core.subscribe.call(null,G__20799));
})());
var tags = cljs.core.deref((function (){var G__20800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tags], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20800) : re_frame.core.subscribe.call(null,G__20800));
})());
var loading = cljs.core.deref((function (){var G__20801 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20801) : re_frame.core.subscribe.call(null,G__20801));
})());
var articles = cljs.core.deref((function (){var G__20802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20802) : re_frame.core.subscribe.call(null,G__20802));
})());
var articles_count = cljs.core.deref((function (){var G__20803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles_DASH_count], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20803) : re_frame.core.subscribe.call(null,G__20803));
})());
var user = cljs.core.deref((function (){var G__20804 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20804) : re_frame.core.subscribe.call(null,G__20804));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$home_DASH_page,((cljs.core.empty_QMARK_(user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$banner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$logo_DASH_font,"conduit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"A place to share your knowledge."], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$feed_DASH_toggle,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$nav_DASH_pills$outline_DASH_active,((cljs.core.empty_QMARK_(user))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$feed.cljs$core$IFn$_invoke$arity$1(filter))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__20795_SHARP_){
return conduit.views.get_feed_articles(p1__20795_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Your Feed"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$class,(cljs.core.truth_((function (){var or__7779__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return cljs.core.cst$kw$feed.cljs$core$IFn$_invoke$arity$1(filter);
}
})())?null:"active"),cljs.core.cst$kw$on_DASH_click,((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__20796_SHARP_){
return conduit.views.get_articles(p1__20796_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,null,cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Global Feed"], null)], null),(cljs.core.truth_(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link$active,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_pound], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter))].join('')], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(loading)], null),(cljs.core.truth_((function (){var or__7779__auto__ = cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(loading);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return (articles_count < (10));
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$pagination,(function (){var iter__8587__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__20805(s__20806){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__20806__$1 = s__20806;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20806__$1);
if(temp__4657__auto__){
var s__20806__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20806__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__20806__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__20808 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__20807 = (0);
while(true){
if((i__20807 < size__8586__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__20807);
cljs.core.chunk_append(b__20808,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$page_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((offset * (10)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__20807,offset,c__8585__auto__,size__8586__auto__,b__20808,s__20806__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__20797_SHARP_){
return conduit.views.get_articles(p1__20797_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,(offset * (10)),cljs.core.cst$kw$tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter),cljs.core.cst$kw$limit,(10)], null));
});})(i__20807,offset,c__8585__auto__,size__8586__auto__,b__20808,s__20806__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$page_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,offset], null)));

var G__20813 = (i__20807 + (1));
i__20807 = G__20813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20808),conduit$views$home_$_iter__20805(cljs.core.chunk_rest(s__20806__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20808),null);
}
} else {
var offset = cljs.core.first(s__20806__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$page_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((offset * (10)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (offset,s__20806__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__20797_SHARP_){
return conduit.views.get_articles(p1__20797_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,(offset * (10)),cljs.core.cst$kw$tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter),cljs.core.cst$kw$limit,(10)], null));
});})(offset,s__20806__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$page_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,offset], null)),conduit$views$home_$_iter__20805(cljs.core.rest(s__20806__$2)));
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
return iter__8587__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((articles_count / (10))));
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Popular Tags"], null),(cljs.core.truth_(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Loading tags ..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag_DASH_list,(function (){var iter__8587__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__20809(s__20810){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__20810__$1 = s__20810;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20810__$1);
if(temp__4657__auto__){
var s__20810__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20810__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__20810__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__20812 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__20811 = (0);
while(true){
if((i__20811 < size__8586__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__20811);
cljs.core.chunk_append(b__20812,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_pill$tag_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$on_DASH_click,((function (i__20811,tag,c__8585__auto__,size__8586__auto__,b__20812,s__20810__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__20798_SHARP_){
return conduit.views.get_articles(p1__20798_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$limit,(10),cljs.core.cst$kw$offset,(0)], null));
});})(i__20811,tag,c__8585__auto__,size__8586__auto__,b__20812,s__20810__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)));

var G__20814 = (i__20811 + (1));
i__20811 = G__20814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20812),conduit$views$home_$_iter__20809(cljs.core.chunk_rest(s__20810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20812),null);
}
} else {
var tag = cljs.core.first(s__20810__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_pill$tag_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$on_DASH_click,((function (tag,s__20810__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__20798_SHARP_){
return conduit.views.get_articles(p1__20798_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$limit,(10),cljs.core.cst$kw$offset,(0)], null));
});})(tag,s__20810__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)),conduit$views$home_$_iter__20809(cljs.core.rest(s__20810__$2)));
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
return iter__8587__auto__(tags);
})()], null))], null)], null)], null)], null)], null);
});
conduit.views.login_user = (function conduit$views$login_user(event,credentials){
event.preventDefault();

var G__20815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$login,credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20815) : re_frame.core.dispatch.call(null,G__20815));
});
conduit.views.login = (function conduit$views$login(){
var default$ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$email,"",cljs.core.cst$kw$password,""], null);
var credentials = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
var loading = (function (){var G__20819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20819) : re_frame.core.subscribe.call(null,G__20819));
})();
var errors = (function (){var G__20820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20820) : re_frame.core.subscribe.call(null,G__20820));
})();
return ((function (default$,credentials,loading,errors){
return (function (){
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(credentials),cljs.core.cst$kw$email);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(credentials),cljs.core.cst$kw$password);
var login_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(errors),cljs.core.cst$kw$login);
var login_loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(loading),cljs.core.cst$kw$login);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$auth_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$offset_DASH_md_DASH_3$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_xs_DASH_center,"Sign in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_xs_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/#/register"], null),"Need an account?"], null)], null),(cljs.core.truth_(login_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,login_errors], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (email,password,login_errors,login_loading,default$,credentials,loading,errors){
return (function (p1__20816_SHARP_){
return conduit.views.login_user(p1__20816_SHARP_,cljs.core.deref(credentials));
});})(email,password,login_errors,login_loading,default$,credentials,loading,errors))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$value,email,cljs.core.cst$kw$on_DASH_change,((function (email,password,login_errors,login_loading,default$,credentials,loading,errors){
return (function (p1__20817_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(credentials,cljs.core.assoc,cljs.core.cst$kw$email,p1__20817_SHARP_.target.value);
});})(email,password,login_errors,login_loading,default$,credentials,loading,errors))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(login_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"password",cljs.core.cst$kw$placeholder,"Password",cljs.core.cst$kw$value,password,cljs.core.cst$kw$on_DASH_change,((function (email,password,login_errors,login_loading,default$,credentials,loading,errors){
return (function (p1__20818_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(credentials,cljs.core.assoc,cljs.core.cst$kw$password,p1__20818_SHARP_.target.value);
});})(email,password,login_errors,login_loading,default$,credentials,loading,errors))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(login_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(login_loading)?"disabled":null)], null),"Sign in"], null)], null)], null)], null)], null)], null);
});
;})(default$,credentials,loading,errors))
});
conduit.views.register_user = (function conduit$views$register_user(event,registration){
event.preventDefault();

var G__20821 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_user,registration], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20821) : re_frame.core.dispatch.call(null,G__20821));
});
conduit.views.register = (function conduit$views$register(){
var default$ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$username,"",cljs.core.cst$kw$email,"",cljs.core.cst$kw$password,""], null);
var registration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
var loading = (function (){var G__20826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20826) : re_frame.core.subscribe.call(null,G__20826));
})();
var errors = (function (){var G__20827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20827) : re_frame.core.subscribe.call(null,G__20827));
})();
return ((function (default$,registration,loading,errors){
return (function (){
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),cljs.core.cst$kw$username);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),cljs.core.cst$kw$email);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),cljs.core.cst$kw$password);
var register_user_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(errors),cljs.core.cst$kw$register_DASH_user);
var register_user_loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(loading),cljs.core.cst$kw$register_DASH_user);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$auth_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$offset_DASH_md_DASH_3$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_xs_DASH_center,"Sign up"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_xs_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/#/login"], null),"Have an account?"], null)], null),(cljs.core.truth_(register_user_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,register_user_errors], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__20822_SHARP_){
return conduit.views.register_user(p1__20822_SHARP_,cljs.core.deref(registration));
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Your Name",cljs.core.cst$kw$value,username,cljs.core.cst$kw$on_DASH_change,((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__20823_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,cljs.core.cst$kw$username,p1__20823_SHARP_.target.value);
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(register_user_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$value,email,cljs.core.cst$kw$on_DASH_change,((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__20824_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,cljs.core.cst$kw$email,p1__20824_SHARP_.target.value);
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(register_user_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"password",cljs.core.cst$kw$placeholder,"Password",cljs.core.cst$kw$value,password,cljs.core.cst$kw$on_DASH_change,((function (username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors){
return (function (p1__20825_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,cljs.core.cst$kw$password,p1__20825_SHARP_.target.value);
});})(username,email,password,register_user_errors,register_user_loading,default$,registration,loading,errors))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(register_user_loading)?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(register_user_loading)?"disabled":null)], null),"Sign up"], null)], null)], null)], null)], null)], null);
});
;})(default$,registration,loading,errors))
});
conduit.views.profile = (function conduit$views$profile(){
var profile = cljs.core.deref((function (){var G__20828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20828) : re_frame.core.subscribe.call(null,G__20828));
})());
var filter = cljs.core.deref((function (){var G__20829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20829) : re_frame.core.subscribe.call(null,G__20829));
})());
var loading = cljs.core.deref((function (){var G__20830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20830) : re_frame.core.subscribe.call(null,G__20830));
})());
var articles = cljs.core.deref((function (){var G__20831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20831) : re_frame.core.subscribe.call(null,G__20831));
})());
var user = cljs.core.deref((function (){var G__20832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20832) : re_frame.core.subscribe.call(null,G__20832));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$profile_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$user_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_10$offset_DASH_md_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$user_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(profile)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$bio.cljs$core$IFn$_invoke$arity$1(profile)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_outline_DASH_secondary$action_DASH_btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"/#/settings"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_gear_DASH_a], null)," Edit Profile Settings"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$action_DASH_btn$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (profile,filter,loading,articles,user){
return (function (){
var G__20833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20833) : re_frame.core.dispatch.call(null,G__20833));
});})(profile,filter,loading,articles,user))
,cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_follow_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_10$offset_DASH_md_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$articles_DASH_toggle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$nav_DASH_pills$outline_DASH_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''),cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(filter))?" active":null)], null),"My Articles"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)),"/favorites"].join(''),cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$favorites.cljs$core$IFn$_invoke$arity$1(filter))?"nav-link active":null)], null),"Favorited Articles"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(loading)], null)], null)], null)], null)], null);
});
conduit.views.logout_user = (function conduit$views$logout_user(event){
event.preventDefault();

var G__20834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20834) : re_frame.core.dispatch.call(null,G__20834));
});
conduit.views.update_user = (function conduit$views$update_user(event,update){
event.preventDefault();

var G__20835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_user,update], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20835) : re_frame.core.dispatch.call(null,G__20835));
});
conduit.views.settings = (function conduit$views$settings(){
var map__20843_20850 = cljs.core.deref((function (){var G__20844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_article], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20844) : re_frame.core.subscribe.call(null,G__20844));
})());
var map__20843_20851__$1 = ((((!((map__20843_20850 == null)))?((((map__20843_20850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20843_20850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20843_20850):map__20843_20850);
var active_article_20852 = map__20843_20851__$1;
var title_20853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_20851__$1,cljs.core.cst$kw$title);
var description_20854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_20851__$1,cljs.core.cst$kw$description);
var body_20855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_20851__$1,cljs.core.cst$kw$body);
var tagList_20856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_20851__$1,cljs.core.cst$kw$tagList);
var slug_20857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843_20851__$1,cljs.core.cst$kw$slug);
var default_20858 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,title_20853,cljs.core.cst$kw$description,description_20854,cljs.core.cst$kw$body,body_20855,cljs.core.cst$kw$tagList,tagList_20856], null);
var content_20859 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default_20858);

var map__20846 = cljs.core.deref((function (){var G__20847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20847) : re_frame.core.subscribe.call(null,G__20847));
})());
var map__20846__$1 = ((((!((map__20846 == null)))?((((map__20846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20846):map__20846);
var user = map__20846__$1;
var bio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846__$1,cljs.core.cst$kw$bio);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846__$1,cljs.core.cst$kw$email);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846__$1,cljs.core.cst$kw$image);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20846__$1,cljs.core.cst$kw$username);
var default$ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bio,bio,cljs.core.cst$kw$email,email,cljs.core.cst$kw$image,image,cljs.core.cst$kw$username,username], null);
var loading = cljs.core.deref((function (){var G__20849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20849) : re_frame.core.subscribe.call(null,G__20849));
})());
var user_update = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$settings_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$offset_DASH_md_DASH_3$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_xs_DASH_center,"Your Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"URL of profile picture",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20836_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$image,p1__20836_SHARP_.target.value);
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Your Name",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20837_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$username,p1__20837_SHARP_.target.value);
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$rows,"8",cljs.core.cst$kw$placeholder,"Short bio about you",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$bio.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20838_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$bio,p1__20838_SHARP_.target.value);
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20839_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$email,p1__20839_SHARP_.target.value);
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"password",cljs.core.cst$kw$placeholder,"Password",cljs.core.cst$kw$default_DASH_value,"",cljs.core.cst$kw$on_DASH_change,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20840_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$password,p1__20840_SHARP_.target.value);
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20841_SHARP_){
return conduit.views.update_user(p1__20841_SHARP_,cljs.core.deref(user_update));
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Update Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_outline_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__20842_SHARP_){
return conduit.views.logout_user(p1__20842_SHARP_);
});})(map__20846,map__20846__$1,user,bio,email,image,username,default$,loading,user_update))
], null),"Or click here to logout."], null)], null)], null)], null)], null);
});
conduit.views.upsert_article = (function conduit$views$upsert_article(event,content,slug){
event.preventDefault();

var title = clojure.string.trim(cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(content));
var description = clojure.string.trim(cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(content));
var body = clojure.string.trim(cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(content));
var tagList = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(content),/ /);
var G__20860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$upsert_DASH_article,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$slug,slug,cljs.core.cst$kw$article,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,title,cljs.core.cst$kw$description,description,cljs.core.cst$kw$body,body,cljs.core.cst$kw$tagList,tagList], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20860) : re_frame.core.dispatch.call(null,G__20860));
});
conduit.views.editor = (function conduit$views$editor(){
var default$ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"",cljs.core.cst$kw$description,"",cljs.core.cst$kw$body,"",cljs.core.cst$kw$tagList,""], null);
var content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
var errors = (function (){var G__20866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20866) : re_frame.core.subscribe.call(null,G__20866));
})();
var active_article = (function (){var G__20867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_article], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20867) : re_frame.core.subscribe.call(null,G__20867));
})();
return ((function (default$,content,errors,active_article){
return (function (){
var title = (function (){var or__7779__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_article),cljs.core.cst$kw$title);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return "";
}
})();
var description = (function (){var or__7779__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_article),cljs.core.cst$kw$description);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return "";
}
})();
var body = (function (){var or__7779__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_article),cljs.core.cst$kw$body);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return "";
}
})();
var tagList = (function (){var or__7779__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_article),cljs.core.cst$kw$tagList);
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return "";
}
})();
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_article),cljs.core.cst$kw$slug);
var article_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(errors),cljs.core.cst$kw$upsert_DASH_article);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$editor_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_10$offset_DASH_md_DASH_1$col_DASH_xs_DASH_12,(cljs.core.truth_(article_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,article_errors], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Article Title",cljs.core.cst$kw$default_DASH_value,title,cljs.core.cst$kw$on_DASH_change,((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__20861_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$title,p1__20861_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"What's this article about?",cljs.core.cst$kw$default_DASH_value,description,cljs.core.cst$kw$on_DASH_change,((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__20862_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$description,p1__20862_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,"8",cljs.core.cst$kw$placeholder,"Write your article (in markdown)",cljs.core.cst$kw$default_DASH_value,body,cljs.core.cst$kw$on_DASH_change,((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__20863_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$body,p1__20863_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Enter tags",cljs.core.cst$kw$default_DASH_value,tagList,cljs.core.cst$kw$on_DASH_change,((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__20864_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$tagList,p1__20864_SHARP_.target.value);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag_DASH_list], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (title,description,body,tagList,slug,article_errors,default$,content,errors,active_article){
return (function (p1__20865_SHARP_){
return conduit.views.upsert_article(p1__20865_SHARP_,cljs.core.deref(content),slug);
});})(title,description,body,tagList,slug,article_errors,default$,content,errors,active_article))
], null),(cljs.core.truth_(cljs.core.deref(active_article))?"Update Article":"Publish Article")], null)], null)], null)], null)], null)], null)], null);
});
;})(default$,content,errors,active_article))
});
conduit.views.post_comment = (function conduit$views$post_comment(event,comment,default$){
event.preventDefault();

var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(comment),cljs.core.cst$kw$body);
var G__20868_20869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$post_DASH_comment,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,body], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20868_20869) : re_frame.core.dispatch.call(null,G__20868_20869));

return cljs.core.reset_BANG_(comment,default$);
});
conduit.views.article = (function conduit$views$article(){
var default$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,""], null);
var comment = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
var errors = (function (){var G__20872 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20872) : re_frame.core.subscribe.call(null,G__20872));
})();
var loading = (function (){var G__20873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20873) : re_frame.core.subscribe.call(null,G__20873));
})();
var articles = cljs.core.deref((function (){var G__20874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20874) : re_frame.core.subscribe.call(null,G__20874));
})());
var user = cljs.core.deref((function (){var G__20875 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20875) : re_frame.core.subscribe.call(null,G__20875));
})());
var profile = cljs.core.deref((function (){var G__20876 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20876) : re_frame.core.subscribe.call(null,G__20876));
})());
var comments = (function (){var G__20877 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20877) : re_frame.core.subscribe.call(null,G__20877));
})();
return ((function (default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
var active_article = cljs.core.deref((function (){var G__20878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_article], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20878) : re_frame.core.subscribe.call(null,G__20878));
})());
var comments_errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(errors),cljs.core.cst$kw$comments);
var comments_loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(loading),cljs.core.cst$kw$comments);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$banner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$article_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(active_article)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_8$offset_DASH_md_DASH_2,(cljs.core.truth_(comments_errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,comments_errors], null):null),(cljs.core.truth_(user)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$card$comment_DASH_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"Write a comment...",cljs.core.cst$kw$rows,"3",cljs.core.cst$kw$value,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comment)),cljs.core.cst$kw$on_DASH_change,((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (p1__20870_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comment,cljs.core.assoc,cljs.core.cst$kw$body,p1__20870_SHARP_.target.value);
});})(active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(comments_loading)?"disabled":null),cljs.core.cst$kw$on_DASH_click,((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (p1__20871_SHARP_){
return conduit.views.post_comment(p1__20871_SHARP_,comment,default$);
});})(active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null),"Post Comment"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/register"], null),"Sign in"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/login"], null),"Sign in"], null)," to add comments on this article."], null)),(cljs.core.truth_(comments_loading)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Loading comments ..."], null)], null):((cljs.core.empty_QMARK_(cljs.core.deref(comments)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null):(function (){var iter__8587__auto__ = ((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function conduit$views$article_$_iter__20879(s__20880){
return (new cljs.core.LazySeq(null,((function (active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
var s__20880__$1 = s__20880;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__20880__$1);
if(temp__4657__auto__){
var s__20880__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20880__$2)){
var c__8585__auto__ = cljs.core.chunk_first(s__20880__$2);
var size__8586__auto__ = cljs.core.count(c__8585__auto__);
var b__20882 = cljs.core.chunk_buffer(size__8586__auto__);
if((function (){var i__20881 = (0);
while(true){
if((i__20881 < size__8586__auto__)){
var map__20883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8585__auto__,i__20881);
var map__20883__$1 = ((((!((map__20883 == null)))?((((map__20883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20883):map__20883);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,cljs.core.cst$kw$id);
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,cljs.core.cst$kw$createdAt);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,cljs.core.cst$kw$body);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,cljs.core.cst$kw$author);
cljs.core.chunk_append(b__20882,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$card_DASH_text,body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date_DASH_posted,conduit.views.format_date(createdAt)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mod_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__20881,map__20883,map__20883__$1,id,createdAt,body,author,c__8585__auto__,size__8586__auto__,b__20882,s__20880__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
var G__20885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20885) : re_frame.core.dispatch.call(null,G__20885));
});})(i__20881,map__20883,map__20883__$1,id,createdAt,body,author,c__8585__auto__,size__8586__auto__,b__20882,s__20880__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__20889 = (i__20881 + (1));
i__20881 = G__20889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20882),conduit$views$article_$_iter__20879(cljs.core.chunk_rest(s__20880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20882),null);
}
} else {
var map__20886 = cljs.core.first(s__20880__$2);
var map__20886__$1 = ((((!((map__20886 == null)))?((((map__20886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20886):map__20886);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20886__$1,cljs.core.cst$kw$id);
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20886__$1,cljs.core.cst$kw$createdAt);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20886__$1,cljs.core.cst$kw$body);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20886__$1,cljs.core.cst$kw$author);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$card_DASH_text,body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date_DASH_posted,conduit.views.format_date(createdAt)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mod_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__20886,map__20886__$1,id,createdAt,body,author,s__20880__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments){
return (function (){
var G__20888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__20888) : re_frame.core.dispatch.call(null,G__20888));
});})(map__20886,map__20886__$1,id,createdAt,body,author,s__20880__$2,temp__4657__auto__,active_article,comments_errors,comments_loading,default$,comment,errors,loading,articles,user,profile,comments))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),conduit$views$article_$_iter__20879(cljs.core.rest(s__20880__$2)));
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
return iter__8587__auto__(cljs.core.deref(comments));
})()))], null)], null)], null)], null);
});
;})(default$,comment,errors,loading,articles,user,profile,comments))
});
conduit.views.pages = (function conduit$views$pages(page_name){
var G__20890 = page_name;
var G__20890__$1 = (((G__20890 instanceof cljs.core.Keyword))?G__20890.fqn:null);
switch (G__20890__$1) {
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
var active_page = cljs.core.deref((function (){var G__20892 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__20892) : re_frame.core.subscribe.call(null,G__20892));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.pages,active_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.footer], null)], null);
});
