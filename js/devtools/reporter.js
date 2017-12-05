// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__8944__auto__ = [];
var len__8937__auto___16769 = arguments.length;
var i__8938__auto___16770 = (0);
while(true){
if((i__8938__auto___16770 < len__8937__auto___16769)){
args__8944__auto__.push((arguments[i__8938__auto___16770]));

var G__16771 = (i__8938__auto___16770 + (1));
i__8938__auto___16770 = G__16771;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__16764){
var vec__16765 = p__16764;
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(0),null);
var footer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__7779__auto__ = e.message;
if(cljs.core.truth_(or__7779__auto__)){
return or__7779__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);



group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e16768){var e__$1 = e16768;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq16762){
var G__16763 = cljs.core.first(seq16762);
var seq16762__$1 = cljs.core.next(seq16762);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16763,seq16762__$1);
});

