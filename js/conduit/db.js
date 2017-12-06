// Compiled by ClojureScript 1.9.946 {}
goog.provide('conduit.db');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
conduit.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"home","home",-74557309)], null);
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
re_frame.core.reg_cofx.call(null,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699),(function (cofx,_){
return cljs.core.assoc.call(null,cofx,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699),cljs.core.into.call(null,cljs.core.sorted_map.call(null),(function (){var G__33620 = localStorage.getItem(conduit.db.ls_key);
if((G__33620 == null)){
return null;
} else {
return cljs.reader.read_string.call(null,G__33620);
}
})()));
}));

//# sourceMappingURL=db.js.map?rel=1512565253483
