// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$tag_DASH_list,(function (){var iter__8994__auto__ = (function conduit$views$tags_list_$_iter__18213(s__18214){
return (new cljs.core.LazySeq(null,(function (){
var s__18214__$1 = s__18214;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18214__$1);
if(temp__4657__auto__){
var s__18214__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18214__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18214__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18216 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18215 = (0);
while(true){
if((i__18215 < size__8993__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18215);
cljs.core.chunk_append(b__18216,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$tag_DASH_default$tag_DASH_pill$tag_DASH_outline,tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)));

var G__18217 = (i__18215 + (1));
i__18215 = G__18217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18216),conduit$views$tags_list_$_iter__18213(cljs.core.chunk_rest(s__18214__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18216),null);
}
} else {
var tag = cljs.core.first(s__18214__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$tag_DASH_default$tag_DASH_pill$tag_DASH_outline,tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)),conduit$views$tags_list_$_iter__18213(cljs.core.rest(s__18214__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8994__auto__(tags_list);
})()], null);
});
conduit.views.article_meta = (function conduit$views$article_meta(p__18218){
var map__18219 = p__18218;
var map__18219__$1 = ((((!((map__18219 == null)))?((((map__18219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18219.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18219):map__18219);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18219__$1,cljs.core.cst$kw$author);
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18219__$1,cljs.core.cst$kw$createdAt);
var likes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18219__$1,cljs.core.cst$kw$likes);
var favorites_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18219__$1,cljs.core.cst$kw$favoritesCount);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18219__$1,cljs.core.cst$kw$favorited);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18219__$1,cljs.core.cst$kw$slug);
var loading = cljs.core.deref((function (){var G__18221 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18221) : re_frame.core.subscribe.call(null,G__18221));
})());
var user = cljs.core.deref((function (){var G__18222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18222) : re_frame.core.subscribe.call(null,G__18222));
})());
var profile = cljs.core.deref((function (){var G__18223 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18223) : re_frame.core.subscribe.call(null,G__18223));
})());
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date,conduit.views.format_date(created_at)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/editor/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_edit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Edit Article "], null)], null)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_outline_DASH_danger$btn_DASH_sm,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/",cljs.core.cst$kw$on_DASH_click,((function (loading,user,profile,map__18219,map__18219__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
var G__18224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_article,slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18224) : re_frame.core.dispatch.call(null,G__18224));
});})(loading,user,profile,map__18219,map__18219__$1,author,created_at,likes,favorites_count,favorited,slug))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span," Delete Article "], null)], null)], null):((cljs.core.empty_QMARK_(user))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$action_DASH_btn$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (loading,user,profile,map__18219,map__18219__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
var G__18225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18225) : re_frame.core.dispatch.call(null,G__18225));
});})(loading,user,profile,map__18219,map__18219__$1,author,created_at,likes,favorites_count,favorited,slug))
,cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_follow_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null)," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (loading,user,profile,map__18219,map__18219__$1,author,created_at,likes,favorites_count,favorited,slug){
return (function (){
var G__18226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18226) : re_frame.core.dispatch.call(null,G__18226));
});})(loading,user,profile,map__18219,map__18219__$1,author,created_at,likes,favorites_count,favorited,slug))
,cljs.core.cst$kw$class,((cljs.core.not(favorited))?"btn-outline-primary":(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_heart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(favorited)?" Unfavorite Post ":" Favorite Post ")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$counter,"(",favorites_count,")"], null)], null)], null)))], null);
});
conduit.views.articles_preview = (function conduit$views$articles_preview(p__18227){
var map__18228 = p__18227;
var map__18228__$1 = ((((!((map__18228 == null)))?((((map__18228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18228):map__18228);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$description);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$slug);
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$createdAt);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$title);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$author);
var favoritesCount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$favoritesCount);
var favorited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$favorited);
var tagList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18228__$1,cljs.core.cst$kw$tagList);
var loading = cljs.core.deref((function (){var G__18230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18230) : re_frame.core.subscribe.call(null,G__18230));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_meta,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date,conduit.views.format_date(createdAt)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary$btn_DASH_sm$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (loading,map__18228,map__18228__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList){
return (function (){
var G__18231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_favorite_DASH_article,slug], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18231) : re_frame.core.dispatch.call(null,G__18231));
});})(loading,map__18228,map__18228__$1,description,slug,createdAt,title,author,favoritesCount,favorited,tagList))
,cljs.core.cst$kw$class,((cljs.core.not(favorited))?"btn-outline-primary":(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_favorite_DASH_article.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_heart," "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,favoritesCount], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$preview_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/article/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slug)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"Read more ..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,tagList], null)], null)], null);
});
conduit.views.articles_list = (function conduit$views$articles_list(articles,loading_articles){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,(cljs.core.truth_(loading_articles)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Loading articles ..."], null)], null):((cljs.core.empty_QMARK_(articles))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_preview,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"No articles are here... yet."], null)], null):(function (){var iter__8994__auto__ = (function conduit$views$articles_list_$_iter__18232(s__18233){
return (new cljs.core.LazySeq(null,(function (){
var s__18233__$1 = s__18233;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18233__$1);
if(temp__4657__auto__){
var s__18233__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18233__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18233__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18235 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18234 = (0);
while(true){
if((i__18234 < size__8993__auto__)){
var article = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18234);
cljs.core.chunk_append(b__18235,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)));

var G__18236 = (i__18234 + (1));
i__18234 = G__18236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18235),conduit$views$articles_list_$_iter__18232(cljs.core.chunk_rest(s__18233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18235),null);
}
} else {
var article = cljs.core.first(s__18233__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_preview,article], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(article)], null)),conduit$views$articles_list_$_iter__18232(cljs.core.rest(s__18233__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8994__auto__(articles);
})()))], null);
});
conduit.views.errors_list = (function conduit$views$errors_list(errors){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$error_DASH_messages,(function (){var iter__8994__auto__ = (function conduit$views$errors_list_$_iter__18237(s__18238){
return (new cljs.core.LazySeq(null,(function (){
var s__18238__$1 = s__18238;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18238__$1);
if(temp__4657__auto__){
var s__18238__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18238__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18238__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18240 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18239 = (0);
while(true){
if((i__18239 < size__8993__auto__)){
var vec__18241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18239);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18241,(0),null);
var vec__18244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18241,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244,(0),null);
cljs.core.chunk_append(b__18240,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)));

var G__18253 = (i__18239 + (1));
i__18239 = G__18253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18240),conduit$views$errors_list_$_iter__18237(cljs.core.chunk_rest(s__18238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18240),null);
}
} else {
var vec__18247 = cljs.core.first(s__18238__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18247,(0),null);
var vec__18250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18247,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18250,(0),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,key], null)),conduit$views$errors_list_$_iter__18237(cljs.core.rest(s__18238__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8994__auto__(errors);
})()], null);
});
conduit.views.header = (function conduit$views$header(){
var user = cljs.core.deref((function (){var G__18254 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18254) : re_frame.core.subscribe.call(null,G__18254));
})());
var active_page = cljs.core.deref((function (){var G__18255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18255) : re_frame.core.subscribe.call(null,G__18255));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$navbar$navbar_DASH_light,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),"conduit"], null),((cljs.core.empty_QMARK_(user))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav$pull_DASH_xs_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$home))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/login",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$login))?"active":null)], null),"Sign in"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/register",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$register))?"active":null)], null),"Sign up"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav$pull_DASH_xs_DASH_right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$home))?"active":null)], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/editor",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$editor))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_compose,"New Article"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#/settings",cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$settings))?"active":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_gear_DASH_a,"Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user))].join(''),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_page,cljs.core.cst$kw$profile))?"active":null)], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$user_DASH_pic,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(user)], null)], null)], null)], null)], null))], null)], null);
});
conduit.views.footer = (function conduit$views$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$logo_DASH_font,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),"conduit"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$attribution,"An interactive learning project from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://thinkster.io"], null),"Thinkster"], null),". Code & design licensed under MIT."], null)], null)], null);
});
conduit.views.get_articles = (function conduit$views$get_articles(event,params){
event.preventDefault();

var G__18256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_articles,params], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18256) : re_frame.core.dispatch.call(null,G__18256));
});
conduit.views.get_feed_articles = (function conduit$views$get_feed_articles(event,params){
event.preventDefault();

var G__18257 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_feed_DASH_articles,params], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18257) : re_frame.core.dispatch.call(null,G__18257));
});
conduit.views.home = (function conduit$views$home(){
var filter = cljs.core.deref((function (){var G__18262 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18262) : re_frame.core.subscribe.call(null,G__18262));
})());
var tags = cljs.core.deref((function (){var G__18263 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tags], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18263) : re_frame.core.subscribe.call(null,G__18263));
})());
var loading = cljs.core.deref((function (){var G__18264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18264) : re_frame.core.subscribe.call(null,G__18264));
})());
var articles = cljs.core.deref((function (){var G__18265 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18265) : re_frame.core.subscribe.call(null,G__18265));
})());
var articles_count = cljs.core.deref((function (){var G__18266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles_DASH_count], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18266) : re_frame.core.subscribe.call(null,G__18266));
})());
var user = cljs.core.deref((function (){var G__18267 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18267) : re_frame.core.subscribe.call(null,G__18267));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$home_DASH_page,((cljs.core.empty_QMARK_(user))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$banner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$logo_DASH_font,"conduit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"A place to share your knowledge."], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_9,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$feed_DASH_toggle,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$nav_DASH_pills$outline_DASH_active,((cljs.core.empty_QMARK_(user))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$feed.cljs$core$IFn$_invoke$arity$1(filter))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__18258_SHARP_){
return conduit.views.get_feed_articles(p1__18258_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Your Feed"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$class,(cljs.core.truth_((function (){var or__8186__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return cljs.core.cst$kw$feed.cljs$core$IFn$_invoke$arity$1(filter);
}
})())?null:"active"),cljs.core.cst$kw$on_DASH_click,((function (filter,tags,loading,articles,articles_count,user){
return (function (p1__18259_SHARP_){
return conduit.views.get_articles(p1__18259_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,null,cljs.core.cst$kw$offset,(0),cljs.core.cst$kw$limit,(10)], null));
});})(filter,tags,loading,articles,articles_count,user))
], null),"Global Feed"], null)], null),(cljs.core.truth_(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link$active,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_pound], null),[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter))].join('')], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(loading)], null),(cljs.core.truth_((function (){var or__8186__auto__ = cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(loading);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return (articles_count < (10));
}
})())?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$pagination,(function (){var iter__8994__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__18268(s__18269){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__18269__$1 = s__18269;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18269__$1);
if(temp__4657__auto__){
var s__18269__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18269__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18269__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18271 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18270 = (0);
while(true){
if((i__18270 < size__8993__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18270);
cljs.core.chunk_append(b__18271,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$page_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((offset * (10)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (i__18270,offset,c__8992__auto__,size__8993__auto__,b__18271,s__18269__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__18260_SHARP_){
return conduit.views.get_articles(p1__18260_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,(offset * (10)),cljs.core.cst$kw$tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter),cljs.core.cst$kw$limit,(10)], null));
});})(i__18270,offset,c__8992__auto__,size__8993__auto__,b__18271,s__18269__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$page_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,offset], null)));

var G__18276 = (i__18270 + (1));
i__18270 = G__18276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18271),conduit$views$home_$_iter__18268(cljs.core.chunk_rest(s__18269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18271),null);
}
} else {
var offset = cljs.core.first(s__18269__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$page_DASH_item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((offset * (10)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(filter)))?"active":null),cljs.core.cst$kw$on_DASH_click,((function (offset,s__18269__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__18260_SHARP_){
return conduit.views.get_articles(p1__18260_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,(offset * (10)),cljs.core.cst$kw$tag,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(filter),cljs.core.cst$kw$limit,(10)], null));
});})(offset,s__18269__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$page_DASH_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,""], null),((1) + offset)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,offset], null)),conduit$views$home_$_iter__18268(cljs.core.rest(s__18269__$2)));
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
return iter__8994__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((articles_count / (10))));
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sidebar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Popular Tags"], null),(cljs.core.truth_(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Loading tags ..."], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag_DASH_list,(function (){var iter__8994__auto__ = ((function (filter,tags,loading,articles,articles_count,user){
return (function conduit$views$home_$_iter__18272(s__18273){
return (new cljs.core.LazySeq(null,((function (filter,tags,loading,articles,articles_count,user){
return (function (){
var s__18273__$1 = s__18273;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18273__$1);
if(temp__4657__auto__){
var s__18273__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18273__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18273__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18275 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18274 = (0);
while(true){
if((i__18274 < size__8993__auto__)){
var tag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18274);
cljs.core.chunk_append(b__18275,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_pill$tag_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$on_DASH_click,((function (i__18274,tag,c__8992__auto__,size__8993__auto__,b__18275,s__18273__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__18261_SHARP_){
return conduit.views.get_articles(p1__18261_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$limit,(10),cljs.core.cst$kw$offset,(0)], null));
});})(i__18274,tag,c__8992__auto__,size__8993__auto__,b__18275,s__18273__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)));

var G__18277 = (i__18274 + (1));
i__18274 = G__18277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18275),conduit$views$home_$_iter__18272(cljs.core.chunk_rest(s__18273__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18275),null);
}
} else {
var tag = cljs.core.first(s__18273__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$tag_DASH_pill$tag_DASH_default,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$on_DASH_click,((function (tag,s__18273__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user){
return (function (p1__18261_SHARP_){
return conduit.views.get_articles(p1__18261_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$limit,(10),cljs.core.cst$kw$offset,(0)], null));
});})(tag,s__18273__$2,temp__4657__auto__,filter,tags,loading,articles,articles_count,user))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,tag], null)),conduit$views$home_$_iter__18272(cljs.core.rest(s__18273__$2)));
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
return iter__8994__auto__(tags);
})()], null))], null)], null)], null)], null)], null);
});
conduit.views.login_user = (function conduit$views$login_user(event,credentials){
event.preventDefault();

var G__18278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$login,credentials], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18278) : re_frame.core.dispatch.call(null,G__18278));
});
conduit.views.login = (function conduit$views$login(){
var default$ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$email,"",cljs.core.cst$kw$password,""], null);
var credentials = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (default$,credentials){
return (function (){
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(credentials),cljs.core.cst$kw$email);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(credentials),cljs.core.cst$kw$password);
var errors = cljs.core.deref((function (){var G__18282 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18282) : re_frame.core.subscribe.call(null,G__18282));
})());
var loading = cljs.core.deref((function (){var G__18283 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18283) : re_frame.core.subscribe.call(null,G__18283));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$auth_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$offset_DASH_md_DASH_3$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_xs_DASH_center,"Sign in"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_xs_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/register"], null),"Need an account?"], null)], null),(cljs.core.truth_(cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(errors)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (email,password,errors,loading,default$,credentials){
return (function (p1__18279_SHARP_){
return conduit.views.login_user(p1__18279_SHARP_,cljs.core.deref(credentials));
});})(email,password,errors,loading,default$,credentials))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$value,email,cljs.core.cst$kw$on_DASH_change,((function (email,password,errors,loading,default$,credentials){
return (function (p1__18280_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(credentials,cljs.core.assoc,cljs.core.cst$kw$email,p1__18280_SHARP_.target.value);
});})(email,password,errors,loading,default$,credentials))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"password",cljs.core.cst$kw$placeholder,"Password",cljs.core.cst$kw$value,password,cljs.core.cst$kw$on_DASH_change,((function (email,password,errors,loading,default$,credentials){
return (function (p1__18281_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(credentials,cljs.core.assoc,cljs.core.cst$kw$password,p1__18281_SHARP_.target.value);
});})(email,password,errors,loading,default$,credentials))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$login.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Sign in"], null)], null)], null)], null)], null)], null);
});
;})(default$,credentials))
});
conduit.views.register_user = (function conduit$views$register_user(event,registration){
event.preventDefault();

var G__18284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$register_DASH_user,registration], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18284) : re_frame.core.dispatch.call(null,G__18284));
});
conduit.views.register = (function conduit$views$register(){
var default$ = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$username,"",cljs.core.cst$kw$email,"",cljs.core.cst$kw$password,""], null);
var registration = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (default$,registration){
return (function (){
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),cljs.core.cst$kw$username);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),cljs.core.cst$kw$email);
var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(registration),cljs.core.cst$kw$password);
var loading = cljs.core.deref((function (){var G__18289 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18289) : re_frame.core.subscribe.call(null,G__18289));
})());
var errors = cljs.core.deref((function (){var G__18290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18290) : re_frame.core.subscribe.call(null,G__18290));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$auth_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$offset_DASH_md_DASH_3$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_xs_DASH_center,"Sign up"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$text_DASH_xs_DASH_center,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/login"], null),"Have an account?"], null)], null),(cljs.core.truth_(cljs.core.cst$kw$register_DASH_user.cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,cljs.core.cst$kw$register_DASH_user.cljs$core$IFn$_invoke$arity$1(errors)], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_submit,((function (username,email,password,loading,errors,default$,registration){
return (function (p1__18285_SHARP_){
return conduit.views.register_user(p1__18285_SHARP_,cljs.core.deref(registration));
});})(username,email,password,loading,errors,default$,registration))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Your Name",cljs.core.cst$kw$value,username,cljs.core.cst$kw$on_DASH_change,((function (username,email,password,loading,errors,default$,registration){
return (function (p1__18286_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,cljs.core.cst$kw$username,p1__18286_SHARP_.target.value);
});})(username,email,password,loading,errors,default$,registration))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$register_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$value,email,cljs.core.cst$kw$on_DASH_change,((function (username,email,password,loading,errors,default$,registration){
return (function (p1__18287_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,cljs.core.cst$kw$email,p1__18287_SHARP_.target.value);
});})(username,email,password,loading,errors,default$,registration))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$register_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"password",cljs.core.cst$kw$placeholder,"Password",cljs.core.cst$kw$value,password,cljs.core.cst$kw$on_DASH_change,((function (username,email,password,loading,errors,default$,registration){
return (function (p1__18288_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(registration,cljs.core.assoc,cljs.core.cst$kw$password,p1__18288_SHARP_.target.value);
});})(username,email,password,loading,errors,default$,registration))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$register_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$register_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Sign up"], null)], null)], null)], null)], null)], null);
});
;})(default$,registration))
});
conduit.views.profile = (function conduit$views$profile(){
var profile = cljs.core.deref((function (){var G__18291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$profile], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18291) : re_frame.core.subscribe.call(null,G__18291));
})());
var filter = cljs.core.deref((function (){var G__18292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18292) : re_frame.core.subscribe.call(null,G__18292));
})());
var loading = cljs.core.deref((function (){var G__18293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18293) : re_frame.core.subscribe.call(null,G__18293));
})());
var articles = cljs.core.deref((function (){var G__18294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18294) : re_frame.core.subscribe.call(null,G__18294));
})());
var user = cljs.core.deref((function (){var G__18295 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18295) : re_frame.core.subscribe.call(null,G__18295));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$profile_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$user_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_10$offset_DASH_md_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$user_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(profile)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$bio.cljs$core$IFn$_invoke$arity$1(profile)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$btn$btn_DASH_sm$btn_DASH_outline_DASH_secondary$action_DASH_btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/settings"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_gear_DASH_a], null)," Edit Profile Settings"], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$action_DASH_btn$btn_DASH_outline_DASH_secondary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (profile,filter,loading,articles,user){
return (function (){
var G__18296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$toggle_DASH_follow_DASH_user,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18296) : re_frame.core.dispatch.call(null,G__18296));
});})(profile,filter,loading,articles,user))
,cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$toggle_DASH_follow_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?"ion-minus-round":"ion-plus-round")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(cljs.core.truth_(cljs.core.cst$kw$following.cljs$core$IFn$_invoke$arity$1(profile))?[" Unfollow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''):[" Follow ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''))], null)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_10$offset_DASH_md_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$articles_DASH_toggle,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$nav_DASH_pills$outline_DASH_active,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile))].join(''),cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$author.cljs$core$IFn$_invoke$arity$1(filter))?" active":null)], null),"My Articles"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$nav_DASH_item,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$nav_DASH_link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(profile)),"/favorites"].join(''),cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$favorites.cljs$core$IFn$_invoke$arity$1(filter))?"nav-link active":null)], null),"Favorited Articles"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.articles_list,articles,cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(loading)], null)], null)], null)], null)], null);
});
conduit.views.logout_user = (function conduit$views$logout_user(event){
event.preventDefault();

var G__18297 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$logout], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18297) : re_frame.core.dispatch.call(null,G__18297));
});
conduit.views.update_user = (function conduit$views$update_user(event,update){
event.preventDefault();

var G__18298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_user,update], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18298) : re_frame.core.dispatch.call(null,G__18298));
});
conduit.views.settings = (function conduit$views$settings(){
var map__18306 = cljs.core.deref((function (){var G__18307 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18307) : re_frame.core.subscribe.call(null,G__18307));
})());
var map__18306__$1 = ((((!((map__18306 == null)))?((((map__18306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18306):map__18306);
var user = map__18306__$1;
var bio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,cljs.core.cst$kw$bio);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,cljs.core.cst$kw$email);
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,cljs.core.cst$kw$image);
var username = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,cljs.core.cst$kw$username);
var default$ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bio,bio,cljs.core.cst$kw$email,email,cljs.core.cst$kw$image,image,cljs.core.cst$kw$username,username], null);
var loading = cljs.core.deref((function (){var G__18309 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18309) : re_frame.core.subscribe.call(null,G__18309));
})());
var user_update = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$settings_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_6$offset_DASH_md_DASH_3$col_DASH_xs_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$text_DASH_xs_DASH_center,"Your Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"URL of profile picture",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18299_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$image,p1__18299_SHARP_.target.value);
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Your Name",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18300_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$username,p1__18300_SHARP_.target.value);
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$rows,"8",cljs.core.cst$kw$placeholder,"Short bio about you",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$bio.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18301_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$bio,p1__18301_SHARP_.target.value);
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Email",cljs.core.cst$kw$default_DASH_value,cljs.core.cst$kw$email.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$on_DASH_change,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18302_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$email,p1__18302_SHARP_.target.value);
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"password",cljs.core.cst$kw$placeholder,"Password",cljs.core.cst$kw$default_DASH_value,"",cljs.core.cst$kw$on_DASH_change,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18303_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(user_update,cljs.core.assoc,cljs.core.cst$kw$password,p1__18303_SHARP_.target.value);
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$disabled,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?null:null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18304_SHARP_){
return conduit.views.update_user(p1__18304_SHARP_,cljs.core.deref(user_update));
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
,cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$update_DASH_user.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null)], null),"Update Settings"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_outline_DASH_danger,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update){
return (function (p1__18305_SHARP_){
return conduit.views.logout_user(p1__18305_SHARP_);
});})(map__18306,map__18306__$1,user,bio,email,image,username,default$,loading,user_update))
], null),"Or click here to logout."], null)], null)], null)], null)], null);
});
conduit.views.upsert_article = (function conduit$views$upsert_article(event,content,slug){
event.preventDefault();

var title = clojure.string.trim((function (){var or__8186__auto__ = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return "";
}
})());
var description = clojure.string.trim((function (){var or__8186__auto__ = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return "";
}
})());
var body = clojure.string.trim((function (){var or__8186__auto__ = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(content);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return "";
}
})());
var tagList = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(content),/ /);
var G__18310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$upsert_DASH_article,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$slug,slug,cljs.core.cst$kw$article,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,title,cljs.core.cst$kw$description,description,cljs.core.cst$kw$body,body,cljs.core.cst$kw$tagList,tagList], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18310) : re_frame.core.dispatch.call(null,G__18310));
});
conduit.views.editor = (function conduit$views$editor(){
var map__18316 = cljs.core.deref((function (){var G__18317 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_article], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18317) : re_frame.core.subscribe.call(null,G__18317));
})());
var map__18316__$1 = ((((!((map__18316 == null)))?((((map__18316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18316):map__18316);
var active_article = map__18316__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18316__$1,cljs.core.cst$kw$title);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18316__$1,cljs.core.cst$kw$description);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18316__$1,cljs.core.cst$kw$body);
var tagList = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18316__$1,cljs.core.cst$kw$tagList);
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18316__$1,cljs.core.cst$kw$slug);
var default$ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,title,cljs.core.cst$kw$description,description,cljs.core.cst$kw$body,body,cljs.core.cst$kw$tagList,tagList], null);
var content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (){
var errors = cljs.core.deref((function (){var G__18319 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18319) : re_frame.core.subscribe.call(null,G__18319));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$editor_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_10$offset_DASH_md_DASH_1$col_DASH_xs_DASH_12,(cljs.core.truth_(cljs.core.cst$kw$upsert_DASH_article.cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,cljs.core.cst$kw$upsert_DASH_article.cljs$core$IFn$_invoke$arity$1(errors)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control$form_DASH_control_DASH_lg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Article Title",cljs.core.cst$kw$default_DASH_value,title,cljs.core.cst$kw$on_DASH_change,((function (errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__18311_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$title,p1__18311_SHARP_.target.value);
});})(errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"What's this article about?",cljs.core.cst$kw$default_DASH_value,description,cljs.core.cst$kw$on_DASH_change,((function (errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__18312_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$description,p1__18312_SHARP_.target.value);
});})(errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rows,"8",cljs.core.cst$kw$placeholder,"Write your article (in markdown)",cljs.core.cst$kw$default_DASH_value,body,cljs.core.cst$kw$on_DASH_change,((function (errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__18313_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$body,p1__18313_SHARP_.target.value);
});})(errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fieldset$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$placeholder,"Enter tags",cljs.core.cst$kw$default_DASH_value,tagList,cljs.core.cst$kw$on_DASH_change,((function (errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__18314_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(content,cljs.core.assoc,cljs.core.cst$kw$tagList,p1__18314_SHARP_.target.value);
});})(errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tag_DASH_list], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_lg$btn_DASH_primary$pull_DASH_xs_DASH_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content){
return (function (p1__18315_SHARP_){
return conduit.views.upsert_article(p1__18315_SHARP_,cljs.core.deref(content),slug);
});})(errors,map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content))
], null),(cljs.core.truth_(active_article)?"Update Article":"Publish Article")], null)], null)], null)], null)], null)], null)], null);
});
;})(map__18316,map__18316__$1,active_article,title,description,body,tagList,slug,default$,content))
});
conduit.views.post_comment = (function conduit$views$post_comment(event,comment,default$){
event.preventDefault();

var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(comment),cljs.core.cst$kw$body);
var G__18320_18321 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$post_DASH_comment,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,body], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18320_18321) : re_frame.core.dispatch.call(null,G__18320_18321));

return cljs.core.reset_BANG_(comment,default$);
});
conduit.views.article = (function conduit$views$article(){
var default$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,""], null);
var comment = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default$);
return ((function (default$,comment){
return (function (){
var active_article = cljs.core.deref((function (){var G__18324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_article], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18324) : re_frame.core.subscribe.call(null,G__18324));
})());
var user = cljs.core.deref((function (){var G__18325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$user], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18325) : re_frame.core.subscribe.call(null,G__18325));
})());
var comments = cljs.core.deref((function (){var G__18326 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comments], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18326) : re_frame.core.subscribe.call(null,G__18326));
})());
var errors = cljs.core.deref((function (){var G__18327 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18327) : re_frame.core.subscribe.call(null,G__18327));
})());
var loading = cljs.core.deref((function (){var G__18328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loading], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18328) : re_frame.core.subscribe.call(null,G__18328));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$banner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row$article_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_md_DASH_12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(active_article)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.tags_list,cljs.core.cst$kw$tagList.cljs$core$IFn$_invoke$arity$1(active_article)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$article_DASH_actions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.article_meta,active_article], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_xs_DASH_12$col_DASH_md_DASH_8$offset_DASH_md_DASH_2,(cljs.core.truth_(cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(errors))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.errors_list,cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(errors)], null):null),((!(cljs.core.empty_QMARK_(user)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$card$comment_DASH_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"Write a comment...",cljs.core.cst$kw$rows,"3",cljs.core.cst$kw$value,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(comment)),cljs.core.cst$kw$on_DASH_change,((function (active_article,user,comments,errors,loading,default$,comment){
return (function (p1__18322_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(comment,cljs.core.assoc,cljs.core.cst$kw$body,p1__18322_SHARP_.target.value);
});})(active_article,user,comments,errors,loading,default$,comment))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_sm$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(loading))?"disabled":null),cljs.core.cst$kw$on_DASH_click,((function (active_article,user,comments,errors,loading,default$,comment){
return (function (p1__18323_SHARP_){
return conduit.views.post_comment(p1__18323_SHARP_,comment,default$);
});})(active_article,user,comments,errors,loading,default$,comment))
], null),"Post Comment"], null)], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/register"], null),"Sign up"], null)," or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/login"], null),"Sign in"], null)," to add comments on this article."], null)),(cljs.core.truth_(cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(loading))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Loading comments ..."], null)], null):((cljs.core.empty_QMARK_(comments))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null):(function (){var iter__8994__auto__ = ((function (active_article,user,comments,errors,loading,default$,comment){
return (function conduit$views$article_$_iter__18329(s__18330){
return (new cljs.core.LazySeq(null,((function (active_article,user,comments,errors,loading,default$,comment){
return (function (){
var s__18330__$1 = s__18330;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18330__$1);
if(temp__4657__auto__){
var s__18330__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18330__$2)){
var c__8992__auto__ = cljs.core.chunk_first(s__18330__$2);
var size__8993__auto__ = cljs.core.count(c__8992__auto__);
var b__18332 = cljs.core.chunk_buffer(size__8993__auto__);
if((function (){var i__18331 = (0);
while(true){
if((i__18331 < size__8993__auto__)){
var map__18333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8992__auto__,i__18331);
var map__18333__$1 = ((((!((map__18333 == null)))?((((map__18333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18333):map__18333);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18333__$1,cljs.core.cst$kw$id);
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18333__$1,cljs.core.cst$kw$createdAt);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18333__$1,cljs.core.cst$kw$body);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18333__$1,cljs.core.cst$kw$author);
cljs.core.chunk_append(b__18332,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$card_DASH_text,body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date_DASH_posted,conduit.views.format_date(createdAt)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mod_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__18331,map__18333,map__18333__$1,id,createdAt,body,author,c__8992__auto__,size__8993__auto__,b__18332,s__18330__$2,temp__4657__auto__,active_article,user,comments,errors,loading,default$,comment){
return (function (){
var G__18335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18335) : re_frame.core.dispatch.call(null,G__18335));
});})(i__18331,map__18333,map__18333__$1,id,createdAt,body,author,c__8992__auto__,size__8993__auto__,b__18332,s__18330__$2,temp__4657__auto__,active_article,user,comments,errors,loading,default$,comment))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__18339 = (i__18331 + (1));
i__18331 = G__18339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18332),conduit$views$article_$_iter__18329(cljs.core.chunk_rest(s__18330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18332),null);
}
} else {
var map__18336 = cljs.core.first(s__18330__$2);
var map__18336__$1 = ((((!((map__18336 == null)))?((((map__18336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18336):map__18336);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,cljs.core.cst$kw$id);
var createdAt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,cljs.core.cst$kw$createdAt);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,cljs.core.cst$kw$body);
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18336__$1,cljs.core.cst$kw$author);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$card_DASH_text,body], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$comment_DASH_author_DASH_img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(author)], null)], null)], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$comment_DASH_author,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["#/@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author))].join('')], null),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$date_DASH_posted,conduit.views.format_date(createdAt)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(user),cljs.core.cst$kw$username.cljs$core$IFn$_invoke$arity$1(author)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$mod_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__18336,map__18336__$1,id,createdAt,body,author,s__18330__$2,temp__4657__auto__,active_article,user,comments,errors,loading,default$,comment){
return (function (){
var G__18338 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$delete_DASH_comment,id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__18338) : re_frame.core.dispatch.call(null,G__18338));
});})(map__18336,map__18336__$1,id,createdAt,body,author,s__18330__$2,temp__4657__auto__,active_article,user,comments,errors,loading,default$,comment))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$ion_DASH_trash_DASH_a], null)], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),conduit$views$article_$_iter__18329(cljs.core.rest(s__18330__$2)));
}
} else {
return null;
}
break;
}
});})(active_article,user,comments,errors,loading,default$,comment))
,null,null));
});})(active_article,user,comments,errors,loading,default$,comment))
;
return iter__8994__auto__(comments);
})()))], null)], null)], null)], null);
});
;})(default$,comment))
});
conduit.views.pages = (function conduit$views$pages(page_name){
var G__18340 = page_name;
var G__18340__$1 = (((G__18340 instanceof cljs.core.Keyword))?G__18340.fqn:null);
switch (G__18340__$1) {
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
var active_page = cljs.core.deref((function (){var G__18342 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_page], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__18342) : re_frame.core.subscribe.call(null,G__18342));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.pages,active_page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.footer], null)], null);
});
