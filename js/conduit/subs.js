// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
conduit.subs.reverse_cmp = (function conduit$subs$reverse_cmp(a,b){

return cljs.core.compare(b,a);
});
var G__18083_18085 = cljs.core.cst$kw$active_DASH_page;
var G__18084_18086 = ((function (G__18083_18085){
return (function (db,_){
return cljs.core.cst$kw$active_DASH_page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18083_18085))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18083_18085,G__18084_18086) : re_frame.core.reg_sub.call(null,G__18083_18085,G__18084_18086));
var G__18087_18089 = cljs.core.cst$kw$articles;
var G__18088_18090 = ((function (G__18087_18089){
return (function (db,_){
var articles = cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$epoch,conduit.subs.reverse_cmp,cljs.core.vals(articles));
});})(G__18087_18089))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18087_18089,G__18088_18090) : re_frame.core.reg_sub.call(null,G__18087_18089,G__18088_18090));
var G__18091_18093 = cljs.core.cst$kw$articles_DASH_count;
var G__18092_18094 = ((function (G__18091_18093){
return (function (db,_){
return cljs.core.cst$kw$articles_DASH_count.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18091_18093))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18091_18093,G__18092_18094) : re_frame.core.reg_sub.call(null,G__18091_18093,G__18092_18094));
var G__18095_18097 = cljs.core.cst$kw$active_DASH_article;
var G__18096_18098 = ((function (G__18095_18097){
return (function (db,_){
var active_article = cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,active_article], null));
});})(G__18095_18097))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18095_18097,G__18096_18098) : re_frame.core.reg_sub.call(null,G__18095_18097,G__18096_18098));
var G__18099_18101 = cljs.core.cst$kw$tags;
var G__18100_18102 = ((function (G__18099_18101){
return (function (db,_){
return cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18099_18101))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18099_18101,G__18100_18102) : re_frame.core.reg_sub.call(null,G__18099_18101,G__18100_18102));
var G__18103_18105 = cljs.core.cst$kw$comments;
var G__18104_18106 = ((function (G__18103_18105){
return (function (db,_){
var comments = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$epoch,conduit.subs.reverse_cmp,cljs.core.vals(comments));
});})(G__18103_18105))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18103_18105,G__18104_18106) : re_frame.core.reg_sub.call(null,G__18103_18105,G__18104_18106));
var G__18107_18109 = cljs.core.cst$kw$profile;
var G__18108_18110 = ((function (G__18107_18109){
return (function (db,_){
return cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18107_18109))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18107_18109,G__18108_18110) : re_frame.core.reg_sub.call(null,G__18107_18109,G__18108_18110));
var G__18111_18113 = cljs.core.cst$kw$loading;
var G__18112_18114 = ((function (G__18111_18113){
return (function (db,_){
return cljs.core.cst$kw$loading.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18111_18113))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18111_18113,G__18112_18114) : re_frame.core.reg_sub.call(null,G__18111_18113,G__18112_18114));
var G__18115_18117 = cljs.core.cst$kw$filter;
var G__18116_18118 = ((function (G__18115_18117){
return (function (db,_){
return cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18115_18117))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18115_18117,G__18116_18118) : re_frame.core.reg_sub.call(null,G__18115_18117,G__18116_18118));
var G__18119_18121 = cljs.core.cst$kw$errors;
var G__18120_18122 = ((function (G__18119_18121){
return (function (db,_){
return cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18119_18121))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18119_18121,G__18120_18122) : re_frame.core.reg_sub.call(null,G__18119_18121,G__18120_18122));
var G__18123_18125 = cljs.core.cst$kw$user;
var G__18124_18126 = ((function (G__18123_18125){
return (function (db,_){
return cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(db);
});})(G__18123_18125))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__18123_18125,G__18124_18126) : re_frame.core.reg_sub.call(null,G__18123_18125,G__18124_18126));
