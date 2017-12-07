// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
conduit.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$home], null);
conduit.db.conduit_user_key = "conduit-user";
/**
 * Puts user into localStorage
 */
conduit.db.set_user_ls = (function conduit$db$set_user_ls(user){
return localStorage.setItem(conduit.db.conduit_user_key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''));
});
/**
 * Removes user from localStorage
 */
conduit.db.remove_user_ls = (function conduit$db$remove_user_ls(){
return localStorage.removeItem(conduit.db.conduit_user_key);
});
var G__17414_17417 = cljs.core.cst$kw$local_DASH_store_DASH_user;
var G__17415_17418 = ((function (G__17414_17417){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$local_DASH_store_DASH_user,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var G__17416 = localStorage.getItem(conduit.db.conduit_user_key);
if((G__17416 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__17416);
}
})()));
});})(G__17414_17417))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__17414_17417,G__17415_17418) : re_frame.core.reg_cofx.call(null,G__17414_17417,G__17415_17418));
