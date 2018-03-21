goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
conduit.subs.reverse_cmp = (function conduit$subs$reverse_cmp(a,b){

return cljs.core.compare(b,a);
});
var G__36049_36052 = new cljs.core.Keyword(null,"active-page","active-page",370357330);
var G__36050_36053 = ((function (G__36049_36052){
return (function (db,_){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36049_36052))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36049_36052,G__36050_36053) : re_frame.core.reg_sub.call(null,G__36049_36052,G__36050_36053));
var G__36058_36060 = new cljs.core.Keyword(null,"articles","articles",-454771639);
var G__36059_36061 = ((function (G__36058_36060){
return (function (db,_){
var articles = new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"epoch","epoch",1435633666),conduit.subs.reverse_cmp,cljs.core.vals(articles));
});})(G__36058_36060))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36058_36060,G__36059_36061) : re_frame.core.reg_sub.call(null,G__36058_36060,G__36059_36061));
var G__36062_36066 = new cljs.core.Keyword(null,"articles-count","articles-count",-222608021);
var G__36063_36067 = ((function (G__36062_36066){
return (function (db,_){
return new cljs.core.Keyword(null,"articles-count","articles-count",-222608021).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36062_36066))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36062_36066,G__36063_36067) : re_frame.core.reg_sub.call(null,G__36062_36066,G__36063_36067));
var G__36071_36073 = new cljs.core.Keyword(null,"active-article","active-article",-2143954133);
var G__36072_36074 = ((function (G__36071_36073){
return (function (db,_){
var active_article = new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),active_article], null));
});})(G__36071_36073))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36071_36073,G__36072_36074) : re_frame.core.reg_sub.call(null,G__36071_36073,G__36072_36074));
var G__36077_36079 = new cljs.core.Keyword(null,"tags","tags",1771418977);
var G__36078_36080 = ((function (G__36077_36079){
return (function (db,_){
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36077_36079))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36077_36079,G__36078_36080) : re_frame.core.reg_sub.call(null,G__36077_36079,G__36078_36080));
var G__36081_36083 = new cljs.core.Keyword(null,"comments","comments",-293346423);
var G__36082_36084 = ((function (G__36081_36083){
return (function (db,_){
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"epoch","epoch",1435633666),conduit.subs.reverse_cmp,cljs.core.vals(comments));
});})(G__36081_36083))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36081_36083,G__36082_36084) : re_frame.core.reg_sub.call(null,G__36081_36083,G__36082_36084));
var G__36085_36087 = new cljs.core.Keyword(null,"profile","profile",-545963874);
var G__36086_36088 = ((function (G__36085_36087){
return (function (db,_){
return new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36085_36087))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36085_36087,G__36086_36088) : re_frame.core.reg_sub.call(null,G__36085_36087,G__36086_36088));
var G__36094_36096 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__36095_36097 = ((function (G__36094_36096){
return (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36094_36096))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36094_36096,G__36095_36097) : re_frame.core.reg_sub.call(null,G__36094_36096,G__36095_36097));
var G__36098_36122 = new cljs.core.Keyword(null,"filter","filter",-948537934);
var G__36099_36123 = ((function (G__36098_36122){
return (function (db,_){
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36098_36122))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36098_36122,G__36099_36123) : re_frame.core.reg_sub.call(null,G__36098_36122,G__36099_36123));
var G__36124_36126 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__36125_36127 = ((function (G__36124_36126){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36124_36126))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36124_36126,G__36125_36127) : re_frame.core.reg_sub.call(null,G__36124_36126,G__36125_36127));
var G__36129_36131 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__36130_36132 = ((function (G__36129_36131){
return (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});})(G__36129_36131))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__36129_36131,G__36130_36132) : re_frame.core.reg_sub.call(null,G__36129_36131,G__36130_36132));

//# sourceMappingURL=conduit.subs.js.map
