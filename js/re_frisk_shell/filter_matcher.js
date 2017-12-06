// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frisk_shell.filter_matcher');
goog.require('cljs.core');
goog.require('clojure.string');
re_frisk_shell.filter_matcher.match_expr = (function re_frisk_shell$filter_matcher$match_expr(f,p){
return cljs.core._EQ_.call(null,f,p);
});
re_frisk_shell.filter_matcher.match_string_prefix = (function re_frisk_shell$filter_matcher$match_string_prefix(f,p){
return (typeof p === 'string') && (clojure.string.starts_with_QMARK_.call(null,p,f));
});
re_frisk_shell.filter_matcher.match_free = (function re_frisk_shell$filter_matcher$match_free(f,p){
return clojure.string.includes_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join(''),f);
});
re_frisk_shell.filter_matcher.match_value = (function re_frisk_shell$filter_matcher$match_value(f,p){
if(cljs.core.contains_QMARK_.call(null,f,new cljs.core.Keyword(null,"expr","expr",745722291))){
return re_frisk_shell.filter_matcher.match_expr.call(null,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(f),p);
} else {
if(cljs.core.contains_QMARK_.call(null,f,new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734))){
return re_frisk_shell.filter_matcher.match_string_prefix.call(null,new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734).cljs$core$IFn$_invoke$arity$1(f),p);
} else {
if(cljs.core.contains_QMARK_.call(null,f,new cljs.core.Keyword(null,"free","free",801364328))){
return re_frisk_shell.filter_matcher.match_free.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(f),p);
} else {
throw (new Error(["Unknown kind of filter-path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')));

}
}
}
});
re_frisk_shell.filter_matcher.match = (function re_frisk_shell$filter_matcher$match(filter,path){
while(true){
if(cljs.core.empty_QMARK_.call(null,filter)){
return null;
} else {
if(cljs.core.empty_QMARK_.call(null,path)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,filter),(1))){
return re_frisk_shell.filter_matcher.match_value.call(null,cljs.core.first.call(null,filter),cljs.core.last.call(null,path));
} else {
if(cljs.core.truth_(re_frisk_shell.filter_matcher.match_value.call(null,cljs.core.first.call(null,filter),cljs.core.first.call(null,path)))){
var G__46997 = cljs.core.rest.call(null,filter);
var G__46998 = cljs.core.rest.call(null,path);
filter = G__46997;
path = G__46998;
continue;
} else {
var G__46999 = filter;
var G__47000 = cljs.core.rest.call(null,path);
filter = G__46999;
path = G__47000;
continue;
}

}
}
}
break;
}
});

//# sourceMappingURL=filter_matcher.js.map?rel=1512565262790
