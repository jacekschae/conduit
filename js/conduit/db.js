// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('conduit.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
conduit.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_page,cljs.core.cst$kw$home], null);
conduit.db.ls_key = "conduit-user";
/**
 * Puts user into localStorage
 */
conduit.db.user__GT_local_store = (function conduit$db$user__GT_local_store(user){
return localStorage.setItem(conduit.db.ls_key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''));
});
/**
 * Removes user from localStorage
 */
conduit.db.local_store__GT_nil = (function conduit$db$local_store__GT_nil(){
return localStorage.removeItem(conduit.db.ls_key);
});
var G__19754_19757 = cljs.core.cst$kw$local_DASH_store_DASH_user;
var G__19755_19758 = ((function (G__19754_19757){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$local_DASH_store_DASH_user,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var G__19756 = localStorage.getItem(conduit.db.ls_key);
if((G__19756 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__19756);
}
})()));
});})(G__19754_19757))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__19754_19757,G__19755_19758) : re_frame.core.reg_cofx.call(null,G__19754_19757,G__19755_19758));
