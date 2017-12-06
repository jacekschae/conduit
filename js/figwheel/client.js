// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e42048){if((e42048 instanceof Error)){
var e = e42048;
return "Error: Unable to stringify";
} else {
throw e42048;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42051 = arguments.length;
switch (G__42051) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42049_SHARP_){
if(typeof p1__42049_SHARP_ === 'string'){
return p1__42049_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42049_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29663__auto__ = [];
var len__29656__auto___42054 = arguments.length;
var i__29657__auto___42055 = (0);
while(true){
if((i__29657__auto___42055 < len__29656__auto___42054)){
args__29663__auto__.push((arguments[i__29657__auto___42055]));

var G__42056 = (i__29657__auto___42055 + (1));
i__29657__auto___42055 = G__42056;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42053){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42053));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29663__auto__ = [];
var len__29656__auto___42058 = arguments.length;
var i__29657__auto___42059 = (0);
while(true){
if((i__29657__auto___42059 < len__29656__auto___42058)){
args__29663__auto__.push((arguments[i__29657__auto___42059]));

var G__42060 = (i__29657__auto___42059 + (1));
i__29657__auto___42059 = G__42060;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42057){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42057));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42061){
var map__42062 = p__42061;
var map__42062__$1 = ((((!((map__42062 == null)))?((((map__42062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42062):map__42062);
var message = cljs.core.get.call(null,map__42062__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42062__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28485__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28473__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28473__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28473__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__39120__auto___42141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___42141,ch){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___42141,ch){
return (function (state_42113){
var state_val_42114 = (state_42113[(1)]);
if((state_val_42114 === (7))){
var inst_42109 = (state_42113[(2)]);
var state_42113__$1 = state_42113;
var statearr_42115_42142 = state_42113__$1;
(statearr_42115_42142[(2)] = inst_42109);

(statearr_42115_42142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (1))){
var state_42113__$1 = state_42113;
var statearr_42116_42143 = state_42113__$1;
(statearr_42116_42143[(2)] = null);

(statearr_42116_42143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (4))){
var inst_42066 = (state_42113[(7)]);
var inst_42066__$1 = (state_42113[(2)]);
var state_42113__$1 = (function (){var statearr_42117 = state_42113;
(statearr_42117[(7)] = inst_42066__$1);

return statearr_42117;
})();
if(cljs.core.truth_(inst_42066__$1)){
var statearr_42118_42144 = state_42113__$1;
(statearr_42118_42144[(1)] = (5));

} else {
var statearr_42119_42145 = state_42113__$1;
(statearr_42119_42145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (15))){
var inst_42073 = (state_42113[(8)]);
var inst_42088 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42073);
var inst_42089 = cljs.core.first.call(null,inst_42088);
var inst_42090 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42089);
var inst_42091 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42090)].join('');
var inst_42092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42091);
var state_42113__$1 = state_42113;
var statearr_42120_42146 = state_42113__$1;
(statearr_42120_42146[(2)] = inst_42092);

(statearr_42120_42146[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (13))){
var inst_42097 = (state_42113[(2)]);
var state_42113__$1 = state_42113;
var statearr_42121_42147 = state_42113__$1;
(statearr_42121_42147[(2)] = inst_42097);

(statearr_42121_42147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (6))){
var state_42113__$1 = state_42113;
var statearr_42122_42148 = state_42113__$1;
(statearr_42122_42148[(2)] = null);

(statearr_42122_42148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (17))){
var inst_42095 = (state_42113[(2)]);
var state_42113__$1 = state_42113;
var statearr_42123_42149 = state_42113__$1;
(statearr_42123_42149[(2)] = inst_42095);

(statearr_42123_42149[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (3))){
var inst_42111 = (state_42113[(2)]);
var state_42113__$1 = state_42113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42113__$1,inst_42111);
} else {
if((state_val_42114 === (12))){
var inst_42072 = (state_42113[(9)]);
var inst_42086 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42072,opts);
var state_42113__$1 = state_42113;
if(cljs.core.truth_(inst_42086)){
var statearr_42124_42150 = state_42113__$1;
(statearr_42124_42150[(1)] = (15));

} else {
var statearr_42125_42151 = state_42113__$1;
(statearr_42125_42151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (2))){
var state_42113__$1 = state_42113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42113__$1,(4),ch);
} else {
if((state_val_42114 === (11))){
var inst_42073 = (state_42113[(8)]);
var inst_42078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42079 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42073);
var inst_42080 = cljs.core.async.timeout.call(null,(1000));
var inst_42081 = [inst_42079,inst_42080];
var inst_42082 = (new cljs.core.PersistentVector(null,2,(5),inst_42078,inst_42081,null));
var state_42113__$1 = state_42113;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42113__$1,(14),inst_42082);
} else {
if((state_val_42114 === (9))){
var inst_42073 = (state_42113[(8)]);
var inst_42099 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42100 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42073);
var inst_42101 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42100);
var inst_42102 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42101)].join('');
var inst_42103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42102);
var state_42113__$1 = (function (){var statearr_42126 = state_42113;
(statearr_42126[(10)] = inst_42099);

return statearr_42126;
})();
var statearr_42127_42152 = state_42113__$1;
(statearr_42127_42152[(2)] = inst_42103);

(statearr_42127_42152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (5))){
var inst_42066 = (state_42113[(7)]);
var inst_42068 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42069 = (new cljs.core.PersistentArrayMap(null,2,inst_42068,null));
var inst_42070 = (new cljs.core.PersistentHashSet(null,inst_42069,null));
var inst_42071 = figwheel.client.focus_msgs.call(null,inst_42070,inst_42066);
var inst_42072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42071);
var inst_42073 = cljs.core.first.call(null,inst_42071);
var inst_42074 = figwheel.client.autoload_QMARK_.call(null);
var state_42113__$1 = (function (){var statearr_42128 = state_42113;
(statearr_42128[(9)] = inst_42072);

(statearr_42128[(8)] = inst_42073);

return statearr_42128;
})();
if(cljs.core.truth_(inst_42074)){
var statearr_42129_42153 = state_42113__$1;
(statearr_42129_42153[(1)] = (8));

} else {
var statearr_42130_42154 = state_42113__$1;
(statearr_42130_42154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (14))){
var inst_42084 = (state_42113[(2)]);
var state_42113__$1 = state_42113;
var statearr_42131_42155 = state_42113__$1;
(statearr_42131_42155[(2)] = inst_42084);

(statearr_42131_42155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (16))){
var state_42113__$1 = state_42113;
var statearr_42132_42156 = state_42113__$1;
(statearr_42132_42156[(2)] = null);

(statearr_42132_42156[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (10))){
var inst_42105 = (state_42113[(2)]);
var state_42113__$1 = (function (){var statearr_42133 = state_42113;
(statearr_42133[(11)] = inst_42105);

return statearr_42133;
})();
var statearr_42134_42157 = state_42113__$1;
(statearr_42134_42157[(2)] = null);

(statearr_42134_42157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42114 === (8))){
var inst_42072 = (state_42113[(9)]);
var inst_42076 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42072,opts);
var state_42113__$1 = state_42113;
if(cljs.core.truth_(inst_42076)){
var statearr_42135_42158 = state_42113__$1;
(statearr_42135_42158[(1)] = (11));

} else {
var statearr_42136_42159 = state_42113__$1;
(statearr_42136_42159[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39120__auto___42141,ch))
;
return ((function (switch__39032__auto__,c__39120__auto___42141,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39033__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39033__auto____0 = (function (){
var statearr_42137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42137[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39033__auto__);

(statearr_42137[(1)] = (1));

return statearr_42137;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39033__auto____1 = (function (state_42113){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_42113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e42138){if((e42138 instanceof Object)){
var ex__39036__auto__ = e42138;
var statearr_42139_42160 = state_42113;
(statearr_42139_42160[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42161 = state_42113;
state_42113 = G__42161;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39033__auto__ = function(state_42113){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39033__auto____1.call(this,state_42113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39033__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39033__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___42141,ch))
})();
var state__39122__auto__ = (function (){var statearr_42140 = f__39121__auto__.call(null);
(statearr_42140[(6)] = c__39120__auto___42141);

return statearr_42140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___42141,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42162_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42162_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42164 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42164){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42163){if((e42163 instanceof Error)){
var e = e42163;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42164], null));
} else {
var e = e42163;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42164))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42165){
var map__42166 = p__42165;
var map__42166__$1 = ((((!((map__42166 == null)))?((((map__42166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42166):map__42166);
var opts = map__42166__$1;
var build_id = cljs.core.get.call(null,map__42166__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42166,map__42166__$1,opts,build_id){
return (function (p__42168){
var vec__42169 = p__42168;
var seq__42170 = cljs.core.seq.call(null,vec__42169);
var first__42171 = cljs.core.first.call(null,seq__42170);
var seq__42170__$1 = cljs.core.next.call(null,seq__42170);
var map__42172 = first__42171;
var map__42172__$1 = ((((!((map__42172 == null)))?((((map__42172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42172):map__42172);
var msg = map__42172__$1;
var msg_name = cljs.core.get.call(null,map__42172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42170__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42169,seq__42170,first__42171,seq__42170__$1,map__42172,map__42172__$1,msg,msg_name,_,map__42166,map__42166__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42169,seq__42170,first__42171,seq__42170__$1,map__42172,map__42172__$1,msg,msg_name,_,map__42166,map__42166__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42166,map__42166__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42174){
var vec__42175 = p__42174;
var seq__42176 = cljs.core.seq.call(null,vec__42175);
var first__42177 = cljs.core.first.call(null,seq__42176);
var seq__42176__$1 = cljs.core.next.call(null,seq__42176);
var map__42178 = first__42177;
var map__42178__$1 = ((((!((map__42178 == null)))?((((map__42178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42178):map__42178);
var msg = map__42178__$1;
var msg_name = cljs.core.get.call(null,map__42178__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42176__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42180){
var map__42181 = p__42180;
var map__42181__$1 = ((((!((map__42181 == null)))?((((map__42181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42181):map__42181);
var on_compile_warning = cljs.core.get.call(null,map__42181__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42181__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42181,map__42181__$1,on_compile_warning,on_compile_fail){
return (function (p__42183){
var vec__42184 = p__42183;
var seq__42185 = cljs.core.seq.call(null,vec__42184);
var first__42186 = cljs.core.first.call(null,seq__42185);
var seq__42185__$1 = cljs.core.next.call(null,seq__42185);
var map__42187 = first__42186;
var map__42187__$1 = ((((!((map__42187 == null)))?((((map__42187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42187):map__42187);
var msg = map__42187__$1;
var msg_name = cljs.core.get.call(null,map__42187__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42185__$1;
var pred__42189 = cljs.core._EQ_;
var expr__42190 = msg_name;
if(cljs.core.truth_(pred__42189.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42190))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42189.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42190))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42181,map__42181__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__,msg_hist,msg_names,msg){
return (function (state_42279){
var state_val_42280 = (state_42279[(1)]);
if((state_val_42280 === (7))){
var inst_42199 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42199)){
var statearr_42281_42328 = state_42279__$1;
(statearr_42281_42328[(1)] = (8));

} else {
var statearr_42282_42329 = state_42279__$1;
(statearr_42282_42329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (20))){
var inst_42273 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42283_42330 = state_42279__$1;
(statearr_42283_42330[(2)] = inst_42273);

(statearr_42283_42330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (27))){
var inst_42269 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42284_42331 = state_42279__$1;
(statearr_42284_42331[(2)] = inst_42269);

(statearr_42284_42331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (1))){
var inst_42192 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42192)){
var statearr_42285_42332 = state_42279__$1;
(statearr_42285_42332[(1)] = (2));

} else {
var statearr_42286_42333 = state_42279__$1;
(statearr_42286_42333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (24))){
var inst_42271 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42287_42334 = state_42279__$1;
(statearr_42287_42334[(2)] = inst_42271);

(statearr_42287_42334[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (4))){
var inst_42277 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42279__$1,inst_42277);
} else {
if((state_val_42280 === (15))){
var inst_42275 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42288_42335 = state_42279__$1;
(statearr_42288_42335[(2)] = inst_42275);

(statearr_42288_42335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (21))){
var inst_42228 = (state_42279[(2)]);
var inst_42229 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42230 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42229);
var state_42279__$1 = (function (){var statearr_42289 = state_42279;
(statearr_42289[(7)] = inst_42228);

return statearr_42289;
})();
var statearr_42290_42336 = state_42279__$1;
(statearr_42290_42336[(2)] = inst_42230);

(statearr_42290_42336[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (31))){
var inst_42258 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42258)){
var statearr_42291_42337 = state_42279__$1;
(statearr_42291_42337[(1)] = (34));

} else {
var statearr_42292_42338 = state_42279__$1;
(statearr_42292_42338[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (32))){
var inst_42267 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42293_42339 = state_42279__$1;
(statearr_42293_42339[(2)] = inst_42267);

(statearr_42293_42339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (33))){
var inst_42254 = (state_42279[(2)]);
var inst_42255 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42256 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42255);
var state_42279__$1 = (function (){var statearr_42294 = state_42279;
(statearr_42294[(8)] = inst_42254);

return statearr_42294;
})();
var statearr_42295_42340 = state_42279__$1;
(statearr_42295_42340[(2)] = inst_42256);

(statearr_42295_42340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (13))){
var inst_42213 = figwheel.client.heads_up.clear.call(null);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(16),inst_42213);
} else {
if((state_val_42280 === (22))){
var inst_42234 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42235 = figwheel.client.heads_up.append_warning_message.call(null,inst_42234);
var state_42279__$1 = state_42279;
var statearr_42296_42341 = state_42279__$1;
(statearr_42296_42341[(2)] = inst_42235);

(statearr_42296_42341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (36))){
var inst_42265 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42297_42342 = state_42279__$1;
(statearr_42297_42342[(2)] = inst_42265);

(statearr_42297_42342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (29))){
var inst_42245 = (state_42279[(2)]);
var inst_42246 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42247 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42246);
var state_42279__$1 = (function (){var statearr_42298 = state_42279;
(statearr_42298[(9)] = inst_42245);

return statearr_42298;
})();
var statearr_42299_42343 = state_42279__$1;
(statearr_42299_42343[(2)] = inst_42247);

(statearr_42299_42343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (6))){
var inst_42194 = (state_42279[(10)]);
var state_42279__$1 = state_42279;
var statearr_42300_42344 = state_42279__$1;
(statearr_42300_42344[(2)] = inst_42194);

(statearr_42300_42344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (28))){
var inst_42241 = (state_42279[(2)]);
var inst_42242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42243 = figwheel.client.heads_up.display_warning.call(null,inst_42242);
var state_42279__$1 = (function (){var statearr_42301 = state_42279;
(statearr_42301[(11)] = inst_42241);

return statearr_42301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(29),inst_42243);
} else {
if((state_val_42280 === (25))){
var inst_42239 = figwheel.client.heads_up.clear.call(null);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(28),inst_42239);
} else {
if((state_val_42280 === (34))){
var inst_42260 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(37),inst_42260);
} else {
if((state_val_42280 === (17))){
var inst_42219 = (state_42279[(2)]);
var inst_42220 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42221 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42220);
var state_42279__$1 = (function (){var statearr_42302 = state_42279;
(statearr_42302[(12)] = inst_42219);

return statearr_42302;
})();
var statearr_42303_42345 = state_42279__$1;
(statearr_42303_42345[(2)] = inst_42221);

(statearr_42303_42345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (3))){
var inst_42211 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42211)){
var statearr_42304_42346 = state_42279__$1;
(statearr_42304_42346[(1)] = (13));

} else {
var statearr_42305_42347 = state_42279__$1;
(statearr_42305_42347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (12))){
var inst_42207 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42306_42348 = state_42279__$1;
(statearr_42306_42348[(2)] = inst_42207);

(statearr_42306_42348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (2))){
var inst_42194 = (state_42279[(10)]);
var inst_42194__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42279__$1 = (function (){var statearr_42307 = state_42279;
(statearr_42307[(10)] = inst_42194__$1);

return statearr_42307;
})();
if(cljs.core.truth_(inst_42194__$1)){
var statearr_42308_42349 = state_42279__$1;
(statearr_42308_42349[(1)] = (5));

} else {
var statearr_42309_42350 = state_42279__$1;
(statearr_42309_42350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (23))){
var inst_42237 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42237)){
var statearr_42310_42351 = state_42279__$1;
(statearr_42310_42351[(1)] = (25));

} else {
var statearr_42311_42352 = state_42279__$1;
(statearr_42311_42352[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (35))){
var state_42279__$1 = state_42279;
var statearr_42312_42353 = state_42279__$1;
(statearr_42312_42353[(2)] = null);

(statearr_42312_42353[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (19))){
var inst_42232 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42232)){
var statearr_42313_42354 = state_42279__$1;
(statearr_42313_42354[(1)] = (22));

} else {
var statearr_42314_42355 = state_42279__$1;
(statearr_42314_42355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (11))){
var inst_42203 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42315_42356 = state_42279__$1;
(statearr_42315_42356[(2)] = inst_42203);

(statearr_42315_42356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (9))){
var inst_42205 = figwheel.client.heads_up.clear.call(null);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(12),inst_42205);
} else {
if((state_val_42280 === (5))){
var inst_42196 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42279__$1 = state_42279;
var statearr_42316_42357 = state_42279__$1;
(statearr_42316_42357[(2)] = inst_42196);

(statearr_42316_42357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (14))){
var inst_42223 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42223)){
var statearr_42317_42358 = state_42279__$1;
(statearr_42317_42358[(1)] = (18));

} else {
var statearr_42318_42359 = state_42279__$1;
(statearr_42318_42359[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (26))){
var inst_42249 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42279__$1 = state_42279;
if(cljs.core.truth_(inst_42249)){
var statearr_42319_42360 = state_42279__$1;
(statearr_42319_42360[(1)] = (30));

} else {
var statearr_42320_42361 = state_42279__$1;
(statearr_42320_42361[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (16))){
var inst_42215 = (state_42279[(2)]);
var inst_42216 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42217 = figwheel.client.heads_up.display_exception.call(null,inst_42216);
var state_42279__$1 = (function (){var statearr_42321 = state_42279;
(statearr_42321[(13)] = inst_42215);

return statearr_42321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(17),inst_42217);
} else {
if((state_val_42280 === (30))){
var inst_42251 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42252 = figwheel.client.heads_up.display_warning.call(null,inst_42251);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(33),inst_42252);
} else {
if((state_val_42280 === (10))){
var inst_42209 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42322_42362 = state_42279__$1;
(statearr_42322_42362[(2)] = inst_42209);

(statearr_42322_42362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (18))){
var inst_42225 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42226 = figwheel.client.heads_up.display_exception.call(null,inst_42225);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(21),inst_42226);
} else {
if((state_val_42280 === (37))){
var inst_42262 = (state_42279[(2)]);
var state_42279__$1 = state_42279;
var statearr_42323_42363 = state_42279__$1;
(statearr_42323_42363[(2)] = inst_42262);

(statearr_42323_42363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42280 === (8))){
var inst_42201 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42279__$1 = state_42279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42279__$1,(11),inst_42201);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__39120__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39032__auto__,c__39120__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto____0 = (function (){
var statearr_42324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42324[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto__);

(statearr_42324[(1)] = (1));

return statearr_42324;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto____1 = (function (state_42279){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_42279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e42325){if((e42325 instanceof Object)){
var ex__39036__auto__ = e42325;
var statearr_42326_42364 = state_42279;
(statearr_42326_42364[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42365 = state_42279;
state_42279 = G__42365;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto__ = function(state_42279){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto____1.call(this,state_42279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__,msg_hist,msg_names,msg))
})();
var state__39122__auto__ = (function (){var statearr_42327 = f__39121__auto__.call(null);
(statearr_42327[(6)] = c__39120__auto__);

return statearr_42327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__,msg_hist,msg_names,msg))
);

return c__39120__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39120__auto___42394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___42394,ch){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___42394,ch){
return (function (state_42380){
var state_val_42381 = (state_42380[(1)]);
if((state_val_42381 === (1))){
var state_42380__$1 = state_42380;
var statearr_42382_42395 = state_42380__$1;
(statearr_42382_42395[(2)] = null);

(statearr_42382_42395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (2))){
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42380__$1,(4),ch);
} else {
if((state_val_42381 === (3))){
var inst_42378 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42380__$1,inst_42378);
} else {
if((state_val_42381 === (4))){
var inst_42368 = (state_42380[(7)]);
var inst_42368__$1 = (state_42380[(2)]);
var state_42380__$1 = (function (){var statearr_42383 = state_42380;
(statearr_42383[(7)] = inst_42368__$1);

return statearr_42383;
})();
if(cljs.core.truth_(inst_42368__$1)){
var statearr_42384_42396 = state_42380__$1;
(statearr_42384_42396[(1)] = (5));

} else {
var statearr_42385_42397 = state_42380__$1;
(statearr_42385_42397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (5))){
var inst_42368 = (state_42380[(7)]);
var inst_42370 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42368);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42380__$1,(8),inst_42370);
} else {
if((state_val_42381 === (6))){
var state_42380__$1 = state_42380;
var statearr_42386_42398 = state_42380__$1;
(statearr_42386_42398[(2)] = null);

(statearr_42386_42398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (7))){
var inst_42376 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42387_42399 = state_42380__$1;
(statearr_42387_42399[(2)] = inst_42376);

(statearr_42387_42399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42381 === (8))){
var inst_42372 = (state_42380[(2)]);
var state_42380__$1 = (function (){var statearr_42388 = state_42380;
(statearr_42388[(8)] = inst_42372);

return statearr_42388;
})();
var statearr_42389_42400 = state_42380__$1;
(statearr_42389_42400[(2)] = null);

(statearr_42389_42400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__39120__auto___42394,ch))
;
return ((function (switch__39032__auto__,c__39120__auto___42394,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39033__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39033__auto____0 = (function (){
var statearr_42390 = [null,null,null,null,null,null,null,null,null];
(statearr_42390[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39033__auto__);

(statearr_42390[(1)] = (1));

return statearr_42390;
});
var figwheel$client$heads_up_plugin_$_state_machine__39033__auto____1 = (function (state_42380){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_42380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e42391){if((e42391 instanceof Object)){
var ex__39036__auto__ = e42391;
var statearr_42392_42401 = state_42380;
(statearr_42392_42401[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42402 = state_42380;
state_42380 = G__42402;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39033__auto__ = function(state_42380){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39033__auto____1.call(this,state_42380);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39033__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39033__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___42394,ch))
})();
var state__39122__auto__ = (function (){var statearr_42393 = f__39121__auto__.call(null);
(statearr_42393[(6)] = c__39120__auto___42394);

return statearr_42393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___42394,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__){
return (function (state_42408){
var state_val_42409 = (state_42408[(1)]);
if((state_val_42409 === (1))){
var inst_42403 = cljs.core.async.timeout.call(null,(3000));
var state_42408__$1 = state_42408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42408__$1,(2),inst_42403);
} else {
if((state_val_42409 === (2))){
var inst_42405 = (state_42408[(2)]);
var inst_42406 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42408__$1 = (function (){var statearr_42410 = state_42408;
(statearr_42410[(7)] = inst_42405);

return statearr_42410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42408__$1,inst_42406);
} else {
return null;
}
}
});})(c__39120__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39033__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39033__auto____0 = (function (){
var statearr_42411 = [null,null,null,null,null,null,null,null];
(statearr_42411[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39033__auto__);

(statearr_42411[(1)] = (1));

return statearr_42411;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39033__auto____1 = (function (state_42408){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_42408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e42412){if((e42412 instanceof Object)){
var ex__39036__auto__ = e42412;
var statearr_42413_42415 = state_42408;
(statearr_42413_42415[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42416 = state_42408;
state_42408 = G__42416;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39033__auto__ = function(state_42408){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39033__auto____1.call(this,state_42408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39033__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39033__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__))
})();
var state__39122__auto__ = (function (){var statearr_42414 = f__39121__auto__.call(null);
(statearr_42414[(6)] = c__39120__auto__);

return statearr_42414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__))
);

return c__39120__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42423){
var state_val_42424 = (state_42423[(1)]);
if((state_val_42424 === (1))){
var inst_42417 = cljs.core.async.timeout.call(null,(2000));
var state_42423__$1 = state_42423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42423__$1,(2),inst_42417);
} else {
if((state_val_42424 === (2))){
var inst_42419 = (state_42423[(2)]);
var inst_42420 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42421 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42420);
var state_42423__$1 = (function (){var statearr_42425 = state_42423;
(statearr_42425[(7)] = inst_42419);

return statearr_42425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42423__$1,inst_42421);
} else {
return null;
}
}
});})(c__39120__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto____0 = (function (){
var statearr_42426 = [null,null,null,null,null,null,null,null];
(statearr_42426[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto__);

(statearr_42426[(1)] = (1));

return statearr_42426;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto____1 = (function (state_42423){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_42423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e42427){if((e42427 instanceof Object)){
var ex__39036__auto__ = e42427;
var statearr_42428_42430 = state_42423;
(statearr_42428_42430[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42431 = state_42423;
state_42423 = G__42431;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto__ = function(state_42423){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto____1.call(this,state_42423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__,figwheel_version,temp__4657__auto__))
})();
var state__39122__auto__ = (function (){var statearr_42429 = f__39121__auto__.call(null);
(statearr_42429[(6)] = c__39120__auto__);

return statearr_42429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__,figwheel_version,temp__4657__auto__))
);

return c__39120__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42432){
var map__42433 = p__42432;
var map__42433__$1 = ((((!((map__42433 == null)))?((((map__42433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42433):map__42433);
var file = cljs.core.get.call(null,map__42433__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42433__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42433__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42435 = "";
var G__42435__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42435),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42435);
var G__42435__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42435__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42435__$1);
if(cljs.core.truth_((function (){var and__28473__auto__ = line;
if(cljs.core.truth_(and__28473__auto__)){
return column;
} else {
return and__28473__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42435__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42435__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42436){
var map__42437 = p__42436;
var map__42437__$1 = ((((!((map__42437 == null)))?((((map__42437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42437):map__42437);
var ed = map__42437__$1;
var formatted_exception = cljs.core.get.call(null,map__42437__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42437__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42437__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42439_42443 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42440_42444 = null;
var count__42441_42445 = (0);
var i__42442_42446 = (0);
while(true){
if((i__42442_42446 < count__42441_42445)){
var msg_42447 = cljs.core._nth.call(null,chunk__42440_42444,i__42442_42446);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42447);

var G__42448 = seq__42439_42443;
var G__42449 = chunk__42440_42444;
var G__42450 = count__42441_42445;
var G__42451 = (i__42442_42446 + (1));
seq__42439_42443 = G__42448;
chunk__42440_42444 = G__42449;
count__42441_42445 = G__42450;
i__42442_42446 = G__42451;
continue;
} else {
var temp__4657__auto___42452 = cljs.core.seq.call(null,seq__42439_42443);
if(temp__4657__auto___42452){
var seq__42439_42453__$1 = temp__4657__auto___42452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42439_42453__$1)){
var c__29324__auto___42454 = cljs.core.chunk_first.call(null,seq__42439_42453__$1);
var G__42455 = cljs.core.chunk_rest.call(null,seq__42439_42453__$1);
var G__42456 = c__29324__auto___42454;
var G__42457 = cljs.core.count.call(null,c__29324__auto___42454);
var G__42458 = (0);
seq__42439_42443 = G__42455;
chunk__42440_42444 = G__42456;
count__42441_42445 = G__42457;
i__42442_42446 = G__42458;
continue;
} else {
var msg_42459 = cljs.core.first.call(null,seq__42439_42453__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42459);

var G__42460 = cljs.core.next.call(null,seq__42439_42453__$1);
var G__42461 = null;
var G__42462 = (0);
var G__42463 = (0);
seq__42439_42443 = G__42460;
chunk__42440_42444 = G__42461;
count__42441_42445 = G__42462;
i__42442_42446 = G__42463;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42464){
var map__42465 = p__42464;
var map__42465__$1 = ((((!((map__42465 == null)))?((((map__42465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42465):map__42465);
var w = map__42465__$1;
var message = cljs.core.get.call(null,map__42465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28473__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28473__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28473__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42467 = cljs.core.seq.call(null,plugins);
var chunk__42468 = null;
var count__42469 = (0);
var i__42470 = (0);
while(true){
if((i__42470 < count__42469)){
var vec__42471 = cljs.core._nth.call(null,chunk__42468,i__42470);
var k = cljs.core.nth.call(null,vec__42471,(0),null);
var plugin = cljs.core.nth.call(null,vec__42471,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42477 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42467,chunk__42468,count__42469,i__42470,pl_42477,vec__42471,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42477.call(null,msg_hist);
});})(seq__42467,chunk__42468,count__42469,i__42470,pl_42477,vec__42471,k,plugin))
);
} else {
}

var G__42478 = seq__42467;
var G__42479 = chunk__42468;
var G__42480 = count__42469;
var G__42481 = (i__42470 + (1));
seq__42467 = G__42478;
chunk__42468 = G__42479;
count__42469 = G__42480;
i__42470 = G__42481;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42467);
if(temp__4657__auto__){
var seq__42467__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42467__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__42467__$1);
var G__42482 = cljs.core.chunk_rest.call(null,seq__42467__$1);
var G__42483 = c__29324__auto__;
var G__42484 = cljs.core.count.call(null,c__29324__auto__);
var G__42485 = (0);
seq__42467 = G__42482;
chunk__42468 = G__42483;
count__42469 = G__42484;
i__42470 = G__42485;
continue;
} else {
var vec__42474 = cljs.core.first.call(null,seq__42467__$1);
var k = cljs.core.nth.call(null,vec__42474,(0),null);
var plugin = cljs.core.nth.call(null,vec__42474,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42486 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42467,chunk__42468,count__42469,i__42470,pl_42486,vec__42474,k,plugin,seq__42467__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42486.call(null,msg_hist);
});})(seq__42467,chunk__42468,count__42469,i__42470,pl_42486,vec__42474,k,plugin,seq__42467__$1,temp__4657__auto__))
);
} else {
}

var G__42487 = cljs.core.next.call(null,seq__42467__$1);
var G__42488 = null;
var G__42489 = (0);
var G__42490 = (0);
seq__42467 = G__42487;
chunk__42468 = G__42488;
count__42469 = G__42489;
i__42470 = G__42490;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42492 = arguments.length;
switch (G__42492) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42493_42498 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42494_42499 = null;
var count__42495_42500 = (0);
var i__42496_42501 = (0);
while(true){
if((i__42496_42501 < count__42495_42500)){
var msg_42502 = cljs.core._nth.call(null,chunk__42494_42499,i__42496_42501);
figwheel.client.socket.handle_incoming_message.call(null,msg_42502);

var G__42503 = seq__42493_42498;
var G__42504 = chunk__42494_42499;
var G__42505 = count__42495_42500;
var G__42506 = (i__42496_42501 + (1));
seq__42493_42498 = G__42503;
chunk__42494_42499 = G__42504;
count__42495_42500 = G__42505;
i__42496_42501 = G__42506;
continue;
} else {
var temp__4657__auto___42507 = cljs.core.seq.call(null,seq__42493_42498);
if(temp__4657__auto___42507){
var seq__42493_42508__$1 = temp__4657__auto___42507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42493_42508__$1)){
var c__29324__auto___42509 = cljs.core.chunk_first.call(null,seq__42493_42508__$1);
var G__42510 = cljs.core.chunk_rest.call(null,seq__42493_42508__$1);
var G__42511 = c__29324__auto___42509;
var G__42512 = cljs.core.count.call(null,c__29324__auto___42509);
var G__42513 = (0);
seq__42493_42498 = G__42510;
chunk__42494_42499 = G__42511;
count__42495_42500 = G__42512;
i__42496_42501 = G__42513;
continue;
} else {
var msg_42514 = cljs.core.first.call(null,seq__42493_42508__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42514);

var G__42515 = cljs.core.next.call(null,seq__42493_42508__$1);
var G__42516 = null;
var G__42517 = (0);
var G__42518 = (0);
seq__42493_42498 = G__42515;
chunk__42494_42499 = G__42516;
count__42495_42500 = G__42517;
i__42496_42501 = G__42518;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29663__auto__ = [];
var len__29656__auto___42523 = arguments.length;
var i__29657__auto___42524 = (0);
while(true){
if((i__29657__auto___42524 < len__29656__auto___42523)){
args__29663__auto__.push((arguments[i__29657__auto___42524]));

var G__42525 = (i__29657__auto___42524 + (1));
i__29657__auto___42524 = G__42525;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42520){
var map__42521 = p__42520;
var map__42521__$1 = ((((!((map__42521 == null)))?((((map__42521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42521):map__42521);
var opts = map__42521__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42519){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42519));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e42526){if((e42526 instanceof Error)){
var e = e42526;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e42526;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__42527){
var map__42528 = p__42527;
var map__42528__$1 = ((((!((map__42528 == null)))?((((map__42528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42528):map__42528);
var msg_name = cljs.core.get.call(null,map__42528__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1512565258767
