// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__17648_17650 = cljs.core.cst$kw$active_DASH_page;
var G__17649_17651 = ((function (G__17648_17650){
return (function (db,_){
return cljs.core.cst$kw$active_DASH_page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17648_17650))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17648_17650,G__17649_17651) : re_frame.core.reg_sub.call(null,G__17648_17650,G__17649_17651));
var G__17652_17654 = cljs.core.cst$kw$articles;
var G__17653_17655 = ((function (G__17652_17654){
return (function (db,_){
var articles = cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$epoch,cljs.core.vals(articles)));
});})(G__17652_17654))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17652_17654,G__17653_17655) : re_frame.core.reg_sub.call(null,G__17652_17654,G__17653_17655));
var G__17656_17658 = cljs.core.cst$kw$articles_DASH_count;
var G__17657_17659 = ((function (G__17656_17658){
return (function (db,_){
return cljs.core.cst$kw$articles_DASH_count.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17656_17658))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17656_17658,G__17657_17659) : re_frame.core.reg_sub.call(null,G__17656_17658,G__17657_17659));
var G__17660_17662 = cljs.core.cst$kw$active_DASH_article;
var G__17661_17663 = ((function (G__17660_17662){
return (function (db,_){
var active_article = cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,active_article], null));
});})(G__17660_17662))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17660_17662,G__17661_17663) : re_frame.core.reg_sub.call(null,G__17660_17662,G__17661_17663));
var G__17664_17666 = cljs.core.cst$kw$tags;
var G__17665_17667 = ((function (G__17664_17666){
return (function (db,_){
return cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17664_17666))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17664_17666,G__17665_17667) : re_frame.core.reg_sub.call(null,G__17664_17666,G__17665_17667));
var G__17668_17670 = cljs.core.cst$kw$comments;
var G__17669_17671 = ((function (G__17668_17670){
return (function (db,_){
var comments = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$epoch,cljs.core.vals(comments)));
});})(G__17668_17670))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17668_17670,G__17669_17671) : re_frame.core.reg_sub.call(null,G__17668_17670,G__17669_17671));
var G__17672_17674 = cljs.core.cst$kw$profile;
var G__17673_17675 = ((function (G__17672_17674){
return (function (db,_){
return cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17672_17674))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17672_17674,G__17673_17675) : re_frame.core.reg_sub.call(null,G__17672_17674,G__17673_17675));
var G__17676_17678 = cljs.core.cst$kw$loading;
var G__17677_17679 = ((function (G__17676_17678){
return (function (db,_){
return cljs.core.cst$kw$loading.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17676_17678))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17676_17678,G__17677_17679) : re_frame.core.reg_sub.call(null,G__17676_17678,G__17677_17679));
var G__17680_17682 = cljs.core.cst$kw$filter;
var G__17681_17683 = ((function (G__17680_17682){
return (function (db,_){
return cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17680_17682))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17680_17682,G__17681_17683) : re_frame.core.reg_sub.call(null,G__17680_17682,G__17681_17683));
var G__17684_17686 = cljs.core.cst$kw$errors;
var G__17685_17687 = ((function (G__17684_17686){
return (function (db,_){
return cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17684_17686))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17684_17686,G__17685_17687) : re_frame.core.reg_sub.call(null,G__17684_17686,G__17685_17687));
var G__17688_17690 = cljs.core.cst$kw$user;
var G__17689_17691 = ((function (G__17688_17690){
return (function (db,_){
return cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(db);
});})(G__17688_17690))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__17688_17690,G__17689_17691) : re_frame.core.reg_sub.call(null,G__17688_17690,G__17689_17691));
