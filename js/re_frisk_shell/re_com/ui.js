// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frisk_shell.re_com.ui');
goog.require('cljs.core');
re_frisk_shell.re_com.ui.small_button = (function re_frisk_shell$re_com$ui$small_button(var_args){
var G__47142 = arguments.length;
switch (G__47142) {
case 1:
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$1 = (function (label){
return re_frisk_shell.re_com.ui.small_button.call(null,cljs.core.PersistentArrayMap.EMPTY,label);
});

re_frisk_shell.re_com.ui.small_button.cljs$core$IFn$_invoke$arity$2 = (function (p__47143,label){
var map__47144 = p__47143;
var map__47144__$1 = ((((!((map__47144 == null)))?((((map__47144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47144):map__47144);
var on_click = cljs.core.get.call(null,map__47144__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-xs",new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
});

re_frisk_shell.re_com.ui.small_button.cljs$lang$maxFixedArity = 2;

re_frisk_shell.re_com.ui.big_button = (function re_frisk_shell$re_com$ui$big_button(style,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-lg",new cljs.core.Keyword(null,"style","style",-496642736),style], null),label], null);
});
re_frisk_shell.re_com.ui.scroller = (function re_frisk_shell$re_com$ui$scroller(var_args){
var G__47148 = arguments.length;
switch (G__47148) {
case 1:
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$1 = (function (div){
return re_frisk_shell.re_com.ui.scroller.call(null,cljs.core.PersistentArrayMap.EMPTY,div);
});

re_frisk_shell.re_com.ui.scroller.cljs$core$IFn$_invoke$arity$2 = (function (attr,div){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attr))], null),cljs.core.dissoc.call(null,attr,new cljs.core.Keyword(null,"style","style",-496642736))),div], null);
});

re_frisk_shell.re_com.ui.scroller.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=ui.js.map?rel=1512565263001
