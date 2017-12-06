// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.alert');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.buttons');
goog.require('re_com.box');
goog.require('re_com.validate');
re_com.alert.alert_box_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a unique identifier, usually an integer or string."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.alert_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.alert_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"displayed as a larger heading. One of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":heading"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":body"], null)," should be provided"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed within the body of the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"15px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"padding surounding the alert"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if true, render a close button. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-close"], null)," should be supplied"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),":id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user clicks the close 'X' button. Passed the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)," of the alert to close"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS classes (whitespace separated). Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed. Applied to outer container"], null)], null)], null);
/**
 * Displays one alert box. A close button allows the message to be removed
 */
re_com.alert.alert_box = (function re_com$alert$alert_box(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46133 = arguments.length;
var i__29657__auto___46134 = (0);
while(true){
if((i__29657__auto___46134 < len__29656__auto___46133)){
args__29663__auto__.push((arguments[i__29657__auto___46134]));

var G__46135 = (i__29657__auto___46134 + (1));
i__29657__auto___46134 = G__46135;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__46130){
var map__46131 = p__46130;
var map__46131__$1 = ((((!((map__46131 == null)))?((((map__46131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46131):map__46131);
var args = map__46131__$1;
var closeable_QMARK_ = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
var body = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var attr = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var heading = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var on_close = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var alert_type = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002));
var style = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var id = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__46131__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.alert.alert_box_args_desc),args,"alert-box")))){
} else {
throw (new Error("Assert failed: (validate-args-macro alert-box-args-desc args \"alert-box\")"));
}

var close_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi created zmdi-hc-fw-rc zmdi-close",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__46131,map__46131__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding){
return (function (event){
on_close.call(null,id);

return null;
});})(map__46131,map__46131__$1,args,closeable_QMARK_,body,attr,heading,on_close,alert_type,style,id,class$,padding))
,new cljs.core.Keyword(null,"class","class",-2030961996),"close"], null);
var alert_class = alert_type.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"none","none",1333468478),"",new cljs.core.Keyword(null,"info","info",-317069002),"alert-success",new cljs.core.Keyword(null,"warning","warning",-1685650671),"alert-warning",new cljs.core.Keyword(null,"danger","danger",-624338030),"alert-danger"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-alert alert fade in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alert_class)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(padding)?padding:null)], null),style)], null),attr),(cljs.core.truth_(heading)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(cljs.core.truth_(body)?"10px":"0px")], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0px"], null)], null),heading], null),(cljs.core.truth_((function (){var and__28473__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__28473__auto__)){
return on_close;
} else {
return and__28473__auto__;
}
})())?close_button:null)], null)], null):null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),body], null),(cljs.core.truth_((function (){var and__28473__auto__ = cljs.core.not.call(null,heading);
if(and__28473__auto__){
var and__28473__auto____$1 = closeable_QMARK_;
if(cljs.core.truth_(and__28473__auto____$1)){
return on_close;
} else {
return and__28473__auto____$1;
}
} else {
return and__28473__auto__;
}
})())?close_button:null)], null)], null):null)], null);
});

re_com.alert.alert_box.cljs$lang$maxFixedArity = (0);

re_com.alert.alert_box.cljs$lang$applyTo = (function (seq46129){
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46129));
});

re_com.alert.alert_list_args_desc = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alerts","alerts",-2121664427),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"alerts to render (in the order supplied). Can also be a list of maps"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),":id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user clicks the close 'X' button. Passed the alert's ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style for maximum list height. By default, it grows forever"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"4px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS padding within the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"1px solid lightgrey",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS border style surrounding the list"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles. Applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed. Applied to outer container"], null)], null)], null);
/**
 * Displays a list of alert-box components in a v-box. Sample alerts object:
 *   [{:id 2
 *     :alert-type :warning
 *     :heading "Heading"
 *     :body "Body"
 *     :padding "8px"
 *     :closeable? true}
 *    {:id 1
 *     :alert-type :info
 *     :heading "Heading"
 *     :body "Body"}]
 */
re_com.alert.alert_list = (function re_com$alert$alert_list(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46148 = arguments.length;
var i__29657__auto___46149 = (0);
while(true){
if((i__29657__auto___46149 < len__29656__auto___46148)){
args__29663__auto__.push((arguments[i__29657__auto___46149]));

var G__46150 = (i__29657__auto___46149 + (1));
i__29657__auto___46149 = G__46150;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__46137){
var map__46138 = p__46137;
var map__46138__$1 = ((((!((map__46138 == null)))?((((map__46138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46138):map__46138);
var args = map__46138__$1;
var alerts = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"alerts","alerts",-2121664427));
var on_close = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var max_height = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var padding = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),"4px");
var border_style = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"border-style","border-style",-485574304));
var class$ = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__46138__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.alert.alert_list_args_desc),args,"alert-list")))){
} else {
throw (new Error("Assert failed: (validate-args-macro alert-list-args-desc args \"alert-list\")"));
}

var alerts__$1 = re_com.util.deref_or_value.call(null,alerts);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.border,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"border","border",1444987323),border_style,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.scroller,new cljs.core.Keyword(null,"v-scroll","v-scroll",-1842185668),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__29293__auto__ = ((function (alerts__$1,map__46138,map__46138__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr){
return (function re_com$alert$iter__46140(s__46141){
return (new cljs.core.LazySeq(null,((function (alerts__$1,map__46138,map__46138__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr){
return (function (){
var s__46141__$1 = s__46141;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46141__$1);
if(temp__4657__auto__){
var s__46141__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46141__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__46141__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__46143 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__46142 = (0);
while(true){
if((i__46142 < size__29292__auto__)){
var alert = cljs.core._nth.call(null,c__29291__auto__,i__46142);
cljs.core.chunk_append.call(null,b__46143,(function (){var map__46144 = alert;
var map__46144__$1 = ((((!((map__46144 == null)))?((((map__46144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46144):map__46144);
var id = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var alert_type = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var heading = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var body = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var padding__$1 = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var closeable_QMARK_ = cljs.core.get.call(null,map__46144__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__46151 = (i__46142 + (1));
i__46142 = G__46151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46143),re_com$alert$iter__46140.call(null,cljs.core.chunk_rest.call(null,s__46141__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46143),null);
}
} else {
var alert = cljs.core.first.call(null,s__46141__$2);
return cljs.core.cons.call(null,(function (){var map__46146 = alert;
var map__46146__$1 = ((((!((map__46146 == null)))?((((map__46146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46146):map__46146);
var id = cljs.core.get.call(null,map__46146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var alert_type = cljs.core.get.call(null,map__46146__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var heading = cljs.core.get.call(null,map__46146__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var body = cljs.core.get.call(null,map__46146__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var padding__$1 = cljs.core.get.call(null,map__46146__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var closeable_QMARK_ = cljs.core.get.call(null,map__46146__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.alert.alert_box,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),re_com$alert$iter__46140.call(null,cljs.core.rest.call(null,s__46141__$2)));
}
} else {
return null;
}
break;
}
});})(alerts__$1,map__46138,map__46138__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr))
,null,null));
});})(alerts__$1,map__46138,map__46138__$1,args,alerts,on_close,max_height,padding,border_style,class$,style,attr))
;
return iter__29293__auto__.call(null,alerts__$1);
})()], null)], null)], null)], null)], null);
});

re_com.alert.alert_list.cljs$lang$maxFixedArity = (0);

re_com.alert.alert_list.cljs$lang$applyTo = (function (seq46136){
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46136));
});


//# sourceMappingURL=alert.js.map?rel=1512565261501
