// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
var G__20431_20433 = cljs.core.cst$kw$active_DASH_page;
var G__20432_20434 = ((function (G__20431_20433){
return (function (db,_){
return cljs.core.cst$kw$active_DASH_page.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20431_20433))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20431_20433,G__20432_20434) : re_frame.core.reg_sub.call(null,G__20431_20433,G__20432_20434));
var G__20435_20437 = cljs.core.cst$kw$articles;
var G__20436_20438 = ((function (G__20435_20437){
return (function (db,_){
var articles = cljs.core.cst$kw$articles.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$epoch,cljs.core.vals(articles)));
});})(G__20435_20437))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20435_20437,G__20436_20438) : re_frame.core.reg_sub.call(null,G__20435_20437,G__20436_20438));
var G__20439_20441 = cljs.core.cst$kw$articles_DASH_count;
var G__20440_20442 = ((function (G__20439_20441){
return (function (db,_){
return cljs.core.cst$kw$articles_DASH_count.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20439_20441))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20439_20441,G__20440_20442) : re_frame.core.reg_sub.call(null,G__20439_20441,G__20440_20442));
var G__20443_20445 = cljs.core.cst$kw$active_DASH_article;
var G__20444_20446 = ((function (G__20443_20445){
return (function (db,_){
var active_article = cljs.core.cst$kw$active_DASH_article.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$articles,active_article], null));
});})(G__20443_20445))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20443_20445,G__20444_20446) : re_frame.core.reg_sub.call(null,G__20443_20445,G__20444_20446));
var G__20447_20449 = cljs.core.cst$kw$tags;
var G__20448_20450 = ((function (G__20447_20449){
return (function (db,_){
return cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20447_20449))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20447_20449,G__20448_20450) : re_frame.core.reg_sub.call(null,G__20447_20449,G__20448_20450));
var G__20451_20453 = cljs.core.cst$kw$comments;
var G__20452_20454 = ((function (G__20451_20453){
return (function (db,_){
var comments = cljs.core.cst$kw$comments.cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$epoch,cljs.core.vals(comments)));
});})(G__20451_20453))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20451_20453,G__20452_20454) : re_frame.core.reg_sub.call(null,G__20451_20453,G__20452_20454));
var G__20455_20457 = cljs.core.cst$kw$profile;
var G__20456_20458 = ((function (G__20455_20457){
return (function (db,_){
return cljs.core.cst$kw$profile.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20455_20457))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20455_20457,G__20456_20458) : re_frame.core.reg_sub.call(null,G__20455_20457,G__20456_20458));
var G__20459_20461 = cljs.core.cst$kw$loading;
var G__20460_20462 = ((function (G__20459_20461){
return (function (db,_){
return cljs.core.cst$kw$loading.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20459_20461))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20459_20461,G__20460_20462) : re_frame.core.reg_sub.call(null,G__20459_20461,G__20460_20462));
var G__20463_20465 = cljs.core.cst$kw$filter;
var G__20464_20466 = ((function (G__20463_20465){
return (function (db,_){
return cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20463_20465))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20463_20465,G__20464_20466) : re_frame.core.reg_sub.call(null,G__20463_20465,G__20464_20466));
var G__20467_20469 = cljs.core.cst$kw$errors;
var G__20468_20470 = ((function (G__20467_20469){
return (function (db,_){
return cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20467_20469))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20467_20469,G__20468_20470) : re_frame.core.reg_sub.call(null,G__20467_20469,G__20468_20470));
var G__20471_20473 = cljs.core.cst$kw$user;
var G__20472_20474 = ((function (G__20471_20473){
return (function (db,_){
return cljs.core.cst$kw$user.cljs$core$IFn$_invoke$arity$1(db);
});})(G__20471_20473))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__20471_20473,G__20472_20474) : re_frame.core.reg_sub.call(null,G__20471_20473,G__20472_20474));
