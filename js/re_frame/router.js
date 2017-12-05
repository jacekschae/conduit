// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.events');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flush_DASH_dom,(function (f){
var G__19174 = (function (){
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : re_frame.interop.next_tick.call(null,f));
});
return (re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__19174) : re_frame.interop.after_render.call(null,G__19174));
}),cljs.core.cst$kw$yield,re_frame.interop.next_tick], null);

/**
 * @interface
 */
re_frame.router.IEventQueue = function(){};

re_frame.router.push = (function re_frame$router$push(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$push$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router.push[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__8463__auto__.call(null,this$,event));
} else {
var m__8463__auto____$1 = (re_frame.router.push["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__8463__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
}
});

re_frame.router.add_post_event_callback = (function re_frame$router$add_post_event_callback(this$,id,callack){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router.add_post_event_callback[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__8463__auto__.call(null,this$,id,callack));
} else {
var m__8463__auto____$1 = (re_frame.router.add_post_event_callback["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__8463__auto____$1.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
}
});

re_frame.router.remove_post_event_callback = (function re_frame$router$remove_post_event_callback(this$,f){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router.remove_post_event_callback[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__8463__auto__.call(null,this$,f));
} else {
var m__8463__auto____$1 = (re_frame.router.remove_post_event_callback["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__8463__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
}
});

re_frame.router._fsm_trigger = (function re_frame$router$_fsm_trigger(this$,trigger,arg){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null)))){
return this$.re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._fsm_trigger[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__8463__auto__.call(null,this$,trigger,arg));
} else {
var m__8463__auto____$1 = (re_frame.router._fsm_trigger["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__8463__auto____$1.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
}
});

re_frame.router._add_event = (function re_frame$router$_add_event(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_add_event$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._add_event[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__8463__auto__.call(null,this$,event));
} else {
var m__8463__auto____$1 = (re_frame.router._add_event["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__8463__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
}
});

re_frame.router._process_1st_event_in_queue = (function re_frame$router$_process_1st_event_in_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._process_1st_event_in_queue[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

re_frame.router._run_next_tick = (function re_frame$router$_run_next_tick(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_next_tick$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._run_next_tick[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (re_frame.router._run_next_tick["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
}
});

re_frame.router._run_queue = (function re_frame$router$_run_queue(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_run_queue$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._run_queue[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (re_frame.router._run_queue["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
}
});

re_frame.router._exception = (function re_frame$router$_exception(this$,ex){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_exception$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._exception[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__8463__auto__.call(null,this$,ex));
} else {
var m__8463__auto____$1 = (re_frame.router._exception["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__8463__auto____$1.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
}
});

re_frame.router._pause = (function re_frame$router$_pause(this$,later_fn){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_pause$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._pause[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__8463__auto__.call(null,this$,later_fn));
} else {
var m__8463__auto____$1 = (re_frame.router._pause["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__8463__auto____$1.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
}
});

re_frame.router._resume = (function re_frame$router$_resume(this$){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_resume$arity$1 == null)))){
return this$.re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._resume[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto__.call(null,this$));
} else {
var m__8463__auto____$1 = (re_frame.router._resume["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8463__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
}
});

re_frame.router._call_post_event_callbacks = (function re_frame$router$_call_post_event_callbacks(this$,event){
if((!((this$ == null))) && (!((this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null)))){
return this$.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__8462__auto__ = (((this$ == null))?null:this$);
var m__8463__auto__ = (re_frame.router._call_post_event_callbacks[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__8463__auto__.call(null,this$,event));
} else {
var m__8463__auto____$1 = (re_frame.router._call_post_event_callbacks["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__8463__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {re_frame.router.IEventQueue}
*/
re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$finish_DASH_run,null);
} else {
var temp__4655__auto__ = cljs.core.some(re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__4655__auto__)){
var later_fn = temp__4655__auto__;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$pause,later_fn);
} else {
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

var G__19205 = (n - (1));
n = G__19205;
continue;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id);
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(null);

return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$add_DASH_event,event);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__19175 = ((function (this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$run_DASH_queue,null);
});})(this$__$1))
;
return (re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__19175) : re_frame.interop.next_tick.call(null,G__19175));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_19176 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$re_DASH_frame$router_SLASH_fsm_DASH_trigger], null));

try{try{var vec__19191 = (function (){var G__19194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__19194)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__19194)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19194,_STAR_current_trace_STAR_19176,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
});})(G__19194,_STAR_current_trace_STAR_19176,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19191,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19191,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19075__auto___19206 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19075__auto___19206;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__19070__auto___19207 = re_frame.interop.now();
var duration__19071__auto___19208 = (end__19070__auto___19207 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__19177_19209 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__19178_19210 = null;
var count__19179_19211 = (0);
var i__19180_19212 = (0);
while(true){
if((i__19180_19212 < count__19179_19211)){
var vec__19181_19213 = chunk__19178_19210.cljs$core$IIndexed$_nth$arity$2(null,i__19180_19212);
var k__19072__auto___19214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19181_19213,(0),null);
var cb__19073__auto___19215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19181_19213,(1),null);
try{var G__19185_19216 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19071__auto___19208,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19073__auto___19215.cljs$core$IFn$_invoke$arity$1 ? cb__19073__auto___19215.cljs$core$IFn$_invoke$arity$1(G__19185_19216) : cb__19073__auto___19215.call(null,G__19185_19216));
}catch (e19184){if((e19184 instanceof java.lang.Exception)){
var e__19074__auto___19217 = e19184;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__19072__auto___19214,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19074__auto___19217], 0));
} else {
throw e19184;

}
}
var G__19218 = seq__19177_19209;
var G__19219 = chunk__19178_19210;
var G__19220 = count__19179_19211;
var G__19221 = (i__19180_19212 + (1));
seq__19177_19209 = G__19218;
chunk__19178_19210 = G__19219;
count__19179_19211 = G__19220;
i__19180_19212 = G__19221;
continue;
} else {
var temp__4657__auto___19222 = cljs.core.seq(seq__19177_19209);
if(temp__4657__auto___19222){
var seq__19177_19223__$1 = temp__4657__auto___19222;
if(cljs.core.chunked_seq_QMARK_(seq__19177_19223__$1)){
var c__8618__auto___19224 = cljs.core.chunk_first(seq__19177_19223__$1);
var G__19225 = cljs.core.chunk_rest(seq__19177_19223__$1);
var G__19226 = c__8618__auto___19224;
var G__19227 = cljs.core.count(c__8618__auto___19224);
var G__19228 = (0);
seq__19177_19209 = G__19225;
chunk__19178_19210 = G__19226;
count__19179_19211 = G__19227;
i__19180_19212 = G__19228;
continue;
} else {
var vec__19186_19229 = cljs.core.first(seq__19177_19223__$1);
var k__19072__auto___19230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186_19229,(0),null);
var cb__19073__auto___19231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186_19229,(1),null);
try{var G__19190_19232 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__19071__auto___19208,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0))], null);
(cb__19073__auto___19231.cljs$core$IFn$_invoke$arity$1 ? cb__19073__auto___19231.cljs$core$IFn$_invoke$arity$1(G__19190_19232) : cb__19073__auto___19231.call(null,G__19190_19232));
}catch (e19189){if((e19189 instanceof java.lang.Exception)){
var e__19074__auto___19233 = e19189;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__19072__auto___19230,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__19074__auto___19233], 0));
} else {
throw e19189;

}
}
var G__19234 = cljs.core.next(seq__19177_19223__$1);
var G__19235 = null;
var G__19236 = (0);
var G__19237 = (0);
seq__19177_19209 = G__19234;
chunk__19178_19210 = G__19235;
count__19179_19211 = G__19236;
i__19180_19212 = G__19237;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_19176;
}} else {
var vec__19195 = (function (){var G__19198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,cljs.core.cst$kw$add_DASH_event], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19198,this$__$1){
return (function (){
this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);

return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$add_DASH_event], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,cljs.core.cst$kw$run_DASH_queue], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_queue$arity$1(null);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$add_DASH_event], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$pause], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_pause$arity$2(null,arg);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$exception], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_exception$arity$2(null,arg);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,cljs.core.cst$kw$finish_DASH_run], null),G__19198)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$idle], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scheduled,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_run_next_tick$arity$1(null);
});})(G__19198,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$add_DASH_event], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_add_event$arity$2(null,arg);
});})(G__19198,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$paused,cljs.core.cst$kw$resume], null),G__19198)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$running,((function (G__19198,this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_resume$arity$1(null);
});})(G__19198,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fsm_DASH_state,self__.fsm_state,cljs.core.cst$kw$trigger,trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19195,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19195,(1),null);
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__19075__auto___19238 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$tags,cljs.core.merge,cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$operation,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),cljs.core.cst$kw$tags,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$current_DASH_state,self__.fsm_state,cljs.core.cst$kw$new_DASH_state,new_fsm_state], null)], null),cljs.core.cst$kw$tags)], 0));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__19075__auto___19238;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__19199 = ((function (this$__$1){
return (function (){
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$resume,null);
});})(this$__$1))
;
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__19199) : later_fn.call(null,G__19199));
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn);
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{re_frame.events.handle(event_v);

self__.queue = cljs.core.pop(self__.queue);

return this$__$1.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(null,event_v);
}catch (e19200){var ex = e19200;
return this$__$1.re_frame$router$IEventQueue$_fsm_trigger$arity$3(null,cljs.core.cst$kw$exception,ex);
}});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__19201 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__19202 = null;
var count__19203 = (0);
var i__19204 = (0);
while(true){
if((i__19204 < count__19203)){
var callback = chunk__19202.cljs$core$IIndexed$_nth$arity$2(null,i__19204);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));

var G__19239 = seq__19201;
var G__19240 = chunk__19202;
var G__19241 = count__19203;
var G__19242 = (i__19204 + (1));
seq__19201 = G__19239;
chunk__19202 = G__19240;
count__19203 = G__19241;
i__19204 = G__19242;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__19201);
if(temp__4657__auto__){
var seq__19201__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19201__$1)){
var c__8618__auto__ = cljs.core.chunk_first(seq__19201__$1);
var G__19243 = cljs.core.chunk_rest(seq__19201__$1);
var G__19244 = c__8618__auto__;
var G__19245 = cljs.core.count(c__8618__auto__);
var G__19246 = (0);
seq__19201 = G__19243;
chunk__19202 = G__19244;
count__19203 = G__19245;
i__19204 = G__19246;
continue;
} else {
var callback = cljs.core.first(seq__19201__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));

var G__19247 = cljs.core.next(seq__19201__$1);
var G__19248 = null;
var G__19249 = (0);
var G__19250 = (0);
seq__19201 = G__19247;
chunk__19202 = G__19248;
count__19203 = G__19249;
i__19204 = G__19250;
continue;
}
} else {
return null;
}
}
break;
}
});

re_frame.router.EventQueue.prototype.re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = re_frame.interop.empty_queue;

throw ex;
});

re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fsm_DASH_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$queue,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$post_DASH_event_DASH_callback_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

re_frame.router.EventQueue.cljs$lang$type = true;

re_frame.router.EventQueue.cljs$lang$ctorStr = "re-frame.router/EventQueue";

re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__8404__auto__,writer__8405__auto__,opt__8406__auto__){
return cljs.core._write(writer__8405__auto__,"re-frame.router/EventQueue");
});

re_frame.router.__GT_EventQueue = (function re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

re_frame.router.event_queue = re_frame.router.__GT_EventQueue(cljs.core.cst$kw$idle,re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
re_frame.router.push(re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.events.handle(event_v);

re_frame.router._call_post_event_callbacks(re_frame.router.event_queue,event_v);

return null;
});
