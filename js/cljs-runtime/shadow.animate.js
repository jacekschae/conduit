goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__31673){
var vec__31674 = p__31673;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31674,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31674,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__3911__auto__ = delay;
if(cljs.core.truth_(and__3911__auto__)){
return (delay > (0));
} else {
return and__3911__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__28924__auto__ = (0);
while(true){
if((i__28924__auto__ < n__4376__auto__)){
var map__31716_31728 = (self__.items[i__28924__auto__]);
var map__31716_31729__$1 = ((((!((map__31716_31728 == null)))?(((((map__31716_31728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31716_31728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31716_31728):map__31716_31728);
var el_31730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31716_31729__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_31731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31716_31729__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_31730,from_31731);

var G__31734 = (i__28924__auto__ + (1));
i__28924__auto__ = G__31734;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__28924__auto__ = (0);
while(true){
if((i__28924__auto__ < n__4376__auto__)){
var map__31720_31736 = (self__.items[i__28924__auto__]);
var map__31720_31737__$1 = ((((!((map__31720_31736 == null)))?(((((map__31720_31736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31720_31736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31720_31736):map__31720_31736);
var el_31738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31720_31737__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_31739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31720_31737__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_31740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31720_31737__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_31739["transition"] = transition_31740);

goog.style.setStyle(el_31738,to_31739);

var G__31744 = (i__28924__auto__ + (1));
i__28924__auto__ = G__31744;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__28924__auto__ = (0);
while(true){
if((i__28924__auto__ < n__4376__auto__)){
var map__31723_31747 = (self__.items[i__28924__auto__]);
var map__31723_31748__$1 = ((((!((map__31723_31747 == null)))?(((((map__31723_31747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31723_31747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31723_31747):map__31723_31747);
var el_31749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31723_31748__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_31750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31723_31748__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_31750["transition"] = null);

goog.style.setStyle(el_31749,toggles_31750);

var G__31751 = (i__28924__auto__ + (1));
i__28924__auto__ = G__31751;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10589__auto__,k__10590__auto__){
var self__ = this;
var this__10589__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10589__auto____$1,k__10590__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10591__auto__,k31753,else__10592__auto__){
var self__ = this;
var this__10591__auto____$1 = this;
var G__31759 = k31753;
var G__31759__$1 = (((G__31759 instanceof cljs.core.Keyword))?G__31759.fqn:null);
switch (G__31759__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31753,else__10592__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10603__auto__,writer__10604__auto__,opts__10605__auto__){
var self__ = this;
var this__10603__auto____$1 = this;
var pr_pair__10606__auto__ = ((function (this__10603__auto____$1){
return (function (keyval__10607__auto__){
return cljs.core.pr_sequential_writer(writer__10604__auto__,cljs.core.pr_writer,""," ","",opts__10605__auto__,keyval__10607__auto__);
});})(this__10603__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10604__auto__,pr_pair__10606__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__10605__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31752){
var self__ = this;
var G__31752__$1 = this;
return (new cljs.core.RecordIter((0),G__31752__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10584__auto__){
var self__ = this;
var this__10584__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10593__auto__){
var self__ = this;
var this__10593__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10585__auto__){
var self__ = this;
var this__10585__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__31772 = ((function (h__4030__auto__,this__10585__auto____$1){
return (function (coll__10586__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__10586__auto__));
});})(h__4030__auto__,this__10585__auto____$1))
;
return fexpr__31772(this__10585__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31754,other31755){
var self__ = this;
var this31754__$1 = this;
return ((!((other31755 == null))) && ((this31754__$1.constructor === other31755.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31754__$1.el,other31755.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31754__$1.from,other31755.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31754__$1.to,other31755.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31754__$1.toggles,other31755.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31754__$1.transition,other31755.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31754__$1.__extmap,other31755.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10598__auto__,k__10599__auto__){
var self__ = this;
var this__10598__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__10599__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10598__auto____$1),self__.__meta),k__10599__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10599__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10596__auto__,k__10597__auto__,G__31752){
var self__ = this;
var this__10596__auto____$1 = this;
var pred__31778 = cljs.core.keyword_identical_QMARK_;
var expr__31779 = k__10597__auto__;
if(cljs.core.truth_((function (){var G__31781 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__31782 = expr__31779;
return (pred__31778.cljs$core$IFn$_invoke$arity$2 ? pred__31778.cljs$core$IFn$_invoke$arity$2(G__31781,G__31782) : pred__31778.call(null,G__31781,G__31782));
})())){
return (new shadow.animate.AnimationStep(G__31752,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31783 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__31784 = expr__31779;
return (pred__31778.cljs$core$IFn$_invoke$arity$2 ? pred__31778.cljs$core$IFn$_invoke$arity$2(G__31783,G__31784) : pred__31778.call(null,G__31783,G__31784));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__31752,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31785 = new cljs.core.Keyword(null,"to","to",192099007);
var G__31786 = expr__31779;
return (pred__31778.cljs$core$IFn$_invoke$arity$2 ? pred__31778.cljs$core$IFn$_invoke$arity$2(G__31785,G__31786) : pred__31778.call(null,G__31785,G__31786));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__31752,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31787 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__31788 = expr__31779;
return (pred__31778.cljs$core$IFn$_invoke$arity$2 ? pred__31778.cljs$core$IFn$_invoke$arity$2(G__31787,G__31788) : pred__31778.call(null,G__31787,G__31788));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__31752,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31789 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__31790 = expr__31779;
return (pred__31778.cljs$core$IFn$_invoke$arity$2 ? pred__31778.cljs$core$IFn$_invoke$arity$2(G__31789,G__31790) : pred__31778.call(null,G__31789,G__31790));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__31752,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10597__auto__,G__31752),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10601__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10588__auto__,G__31752){
var self__ = this;
var this__10588__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__31752,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10594__auto__,entry__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10595__auto__)){
return cljs.core._assoc(this__10594__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10594__auto____$1,entry__10595__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__31756){
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__31756),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__31756),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__31756),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__31756),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__31756),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31756,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0))),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function shadow$animate$setup_$_iter__31815(s__31816){
return (new cljs.core.LazySeq(null,(function (){
var s__31816__$1 = s__31816;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__31816__$1);
if(temp__5457__auto__){
var s__31816__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31816__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__31816__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__31818 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__31817 = (0);
while(true){
if((i__31817 < size__4291__auto__)){
var vec__31823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__31817);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31823,(1),null);
cljs.core.chunk_append(b__31818,(function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__31861 = (i__31817 + (1));
i__31817 = G__31861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31818),shadow$animate$setup_$_iter__31815(cljs.core.chunk_rest(s__31816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31818),null);
}
} else {
var vec__31829 = cljs.core.first(s__31816__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31829,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31829,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__31815(cljs.core.rest(s__31816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__25452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto__){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto__){
return (function (state_31868){
var state_val_31869 = (state_31868[(1)]);
if((state_val_31869 === (1))){
var inst_31862 = shadow.animate.get_duration(animator);
var inst_31863 = cljs.core.async.timeout(inst_31862);
var state_31868__$1 = state_31868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31868__$1,(2),inst_31863);
} else {
if((state_val_31869 === (2))){
var inst_31865 = (state_31868[(2)]);
var inst_31866 = shadow.animate.finish_BANG_(animator);
var state_31868__$1 = (function (){var statearr_31870 = state_31868;
(statearr_31870[(7)] = inst_31866);

(statearr_31870[(8)] = inst_31865);

return statearr_31870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31868__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__25452__auto__))
;
return ((function (switch__25230__auto__,c__25452__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__25231__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__25231__auto____0 = (function (){
var statearr_31871 = [null,null,null,null,null,null,null,null,null];
(statearr_31871[(0)] = shadow$animate$continue_BANG__$_state_machine__25231__auto__);

(statearr_31871[(1)] = (1));

return statearr_31871;
});
var shadow$animate$continue_BANG__$_state_machine__25231__auto____1 = (function (state_31868){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_31868);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e31872){if((e31872 instanceof Object)){
var ex__25234__auto__ = e31872;
var statearr_31873_31875 = state_31868;
(statearr_31873_31875[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31872;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31876 = state_31868;
state_31868 = G__31876;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__25231__auto__ = function(state_31868){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__25231__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__25231__auto____1.call(this,state_31868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$animate$continue_BANG__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__25231__auto____0;
shadow$animate$continue_BANG__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__25231__auto____1;
return shadow$animate$continue_BANG__$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto__))
})();
var state__25454__auto__ = (function (){var statearr_31874 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_31874[(6)] = c__25452__auto__);

return statearr_31874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto__))
);

return c__25452__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__31878 = arguments.length;
switch (G__31878) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate31879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31879 = (function (attr,from,to,timing,delay,meta31880){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta31880 = meta31880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31881,meta31880__$1){
var self__ = this;
var _31881__$1 = this;
return (new shadow.animate.t_shadow$animate31879(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta31880__$1));
});

shadow.animate.t_shadow$animate31879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31881){
var self__ = this;
var _31881__$1 = this;
return self__.meta31880;
});

shadow.animate.t_shadow$animate31879.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31879.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate31879.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate31879.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31879.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate31879.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate31879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta31880","meta31880",-1831454650,null)], null);
});

shadow.animate.t_shadow$animate31879.cljs$lang$type = true;

shadow.animate.t_shadow$animate31879.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31879";

shadow.animate.t_shadow$animate31879.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31879");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31879.
 */
shadow.animate.__GT_t_shadow$animate31879 = (function shadow$animate$__GT_t_shadow$animate31879(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta31880){
return (new shadow.animate.t_shadow$animate31879(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta31880));
});

}

return (new shadow.animate.t_shadow$animate31879(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if(typeof shadow.animate.t_shadow$animate31883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31883 = (function (attr,from,to,meta31884){
this.attr = attr;
this.from = from;
this.to = to;
this.meta31884 = meta31884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31885,meta31884__$1){
var self__ = this;
var _31885__$1 = this;
return (new shadow.animate.t_shadow$animate31883(self__.attr,self__.from,self__.to,meta31884__$1));
});

shadow.animate.t_shadow$animate31883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31885){
var self__ = this;
var _31885__$1 = this;
return self__.meta31884;
});

shadow.animate.t_shadow$animate31883.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31883.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31883.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate31883.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate31883.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31883.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta31884","meta31884",226638503,null)], null);
});

shadow.animate.t_shadow$animate31883.cljs$lang$type = true;

shadow.animate.t_shadow$animate31883.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31883";

shadow.animate.t_shadow$animate31883.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31883");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31883.
 */
shadow.animate.__GT_t_shadow$animate31883 = (function shadow$animate$toggle_$___GT_t_shadow$animate31883(attr__$1,from__$1,to__$1,meta31884){
return (new shadow.animate.t_shadow$animate31883(attr__$1,from__$1,to__$1,meta31884));
});

}

return (new shadow.animate.t_shadow$animate31883(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__31887 = arguments.length;
switch (G__31887) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if(typeof shadow.animate.t_shadow$animate31888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31888 = (function (attrs,meta31889){
this.attrs = attrs;
this.meta31889 = meta31889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31890,meta31889__$1){
var self__ = this;
var _31890__$1 = this;
return (new shadow.animate.t_shadow$animate31888(self__.attrs,meta31889__$1));
});

shadow.animate.t_shadow$animate31888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31890){
var self__ = this;
var _31890__$1 = this;
return self__.meta31889;
});

shadow.animate.t_shadow$animate31888.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31888.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31888.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate31888.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31888.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31888.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31889","meta31889",-1594928625,null)], null);
});

shadow.animate.t_shadow$animate31888.cljs$lang$type = true;

shadow.animate.t_shadow$animate31888.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31888";

shadow.animate.t_shadow$animate31888.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31888");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31888.
 */
shadow.animate.__GT_t_shadow$animate31888 = (function shadow$animate$__GT_t_shadow$animate31888(attrs__$1,meta31889){
return (new shadow.animate.t_shadow$animate31888(attrs__$1,meta31889));
});

}

return (new shadow.animate.t_shadow$animate31888(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if(typeof shadow.animate.t_shadow$animate31892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31892 = (function (attr,meta31893){
this.attr = attr;
this.meta31893 = meta31893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31894,meta31893__$1){
var self__ = this;
var _31894__$1 = this;
return (new shadow.animate.t_shadow$animate31892(self__.attr,meta31893__$1));
});

shadow.animate.t_shadow$animate31892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31894){
var self__ = this;
var _31894__$1 = this;
return self__.meta31893;
});

shadow.animate.t_shadow$animate31892.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31892.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31892.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31892.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate31892.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31892.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta31893","meta31893",-1753353083,null)], null);
});

shadow.animate.t_shadow$animate31892.cljs$lang$type = true;

shadow.animate.t_shadow$animate31892.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31892";

shadow.animate.t_shadow$animate31892.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31892");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31892.
 */
shadow.animate.__GT_t_shadow$animate31892 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate31892(attr__$1,meta31893){
return (new shadow.animate.t_shadow$animate31892(attr__$1,meta31893));
});

}

return (new shadow.animate.t_shadow$animate31892(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4500__auto__ = [];
var len__4497__auto___31899 = arguments.length;
var i__4498__auto___31900 = (0);
while(true){
if((i__4498__auto___31900 < len__4497__auto___31899)){
args__4500__auto__.push((arguments[i__4498__auto___31900]));

var G__31901 = (i__4498__auto___31900 + (1));
i__4498__auto___31900 = G__31901;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__31902 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__31903 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__31904 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__31905 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__31906 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__31907 = cljs.core.rest(transitions__$1);
to = G__31902;
from = G__31903;
toggles = G__31904;
timings = G__31905;
delays = G__31906;
transitions__$1 = G__31907;
continue;
} else {
if(typeof shadow.animate.t_shadow$animate31896 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31896 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta31897){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta31897 = meta31897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_31898,meta31897__$1){
var self__ = this;
var _31898__$1 = this;
return (new shadow.animate.t_shadow$animate31896(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta31897__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_31898){
var self__ = this;
var _31898__$1 = this;
return self__.meta31897;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31896.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta31897","meta31897",737140872,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate31896.cljs$lang$type = true;

shadow.animate.t_shadow$animate31896.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31896";

shadow.animate.t_shadow$animate31896.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31896");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate31896.
 */
shadow.animate.__GT_t_shadow$animate31896 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate31896(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta31897){
return (new shadow.animate.t_shadow$animate31896(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta31897));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate31896(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

shadow.animate.combine.cljs$lang$applyTo = (function (seq31895){
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31895));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__31909 = arguments.length;
switch (G__31909) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__31912 = arguments.length;
switch (G__31912) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__31915 = arguments.length;
switch (G__31915) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate31916 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31916 = (function (from,to,timing,delay,meta31917){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta31917 = meta31917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31918,meta31917__$1){
var self__ = this;
var _31918__$1 = this;
return (new shadow.animate.t_shadow$animate31916(self__.from,self__.to,self__.timing,self__.delay,meta31917__$1));
});

shadow.animate.t_shadow$animate31916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31918){
var self__ = this;
var _31918__$1 = this;
return self__.meta31917;
});

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31916.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate31916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta31917","meta31917",182121868,null)], null);
});

shadow.animate.t_shadow$animate31916.cljs$lang$type = true;

shadow.animate.t_shadow$animate31916.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31916";

shadow.animate.t_shadow$animate31916.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31916");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31916.
 */
shadow.animate.__GT_t_shadow$animate31916 = (function shadow$animate$__GT_t_shadow$animate31916(from__$1,to__$1,timing__$1,delay__$1,meta31917){
return (new shadow.animate.t_shadow$animate31916(from__$1,to__$1,timing__$1,delay__$1,meta31917));
});

}

return (new shadow.animate.t_shadow$animate31916(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__31921 = arguments.length;
switch (G__31921) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate31922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate31922 = (function (from,to,timing,delay,meta31923){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta31923 = meta31923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate31922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31924,meta31923__$1){
var self__ = this;
var _31924__$1 = this;
return (new shadow.animate.t_shadow$animate31922(self__.from,self__.to,self__.timing,self__.delay,meta31923__$1));
});

shadow.animate.t_shadow$animate31922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31924){
var self__ = this;
var _31924__$1 = this;
return self__.meta31923;
});

shadow.animate.t_shadow$animate31922.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate31922.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate31922.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate31922.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate31922.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate31922.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate31922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta31923","meta31923",1831248531,null)], null);
});

shadow.animate.t_shadow$animate31922.cljs$lang$type = true;

shadow.animate.t_shadow$animate31922.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate31922";

shadow.animate.t_shadow$animate31922.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate31922");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate31922.
 */
shadow.animate.__GT_t_shadow$animate31922 = (function shadow$animate$__GT_t_shadow$animate31922(from__$1,to__$1,timing__$1,delay__$1,meta31923){
return (new shadow.animate.t_shadow$animate31922(from__$1,to__$1,timing__$1,delay__$1,meta31923));
});

}

return (new shadow.animate.t_shadow$animate31922(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
