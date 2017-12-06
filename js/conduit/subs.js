// Compiled by ClojureScript 1.9.946 {}
goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-page","active-page",370357330),(function (db,_){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"articles","articles",-454771639),(function (db,_){
var articles = new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"epoch","epoch",1435633666),cljs.core.vals.call(null,articles)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"articles-count","articles-count",-222608021),(function (db,_){
return new cljs.core.Keyword(null,"articles-count","articles-count",-222608021).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-article","active-article",-2143954133),(function (db,_){
var active_article = new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),active_article], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),(function (db,_){
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"comments","comments",-293346423),(function (db,_){
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"epoch","epoch",1435633666),cljs.core.vals.call(null,comments)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874),(function (db,_){
return new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"loading","loading",-737050189),(function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filter","filter",-948537934),(function (db,_){
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"user","user",1532431356),(function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1512565252019
