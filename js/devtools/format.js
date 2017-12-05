// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8462__auto__ = (((value == null))?null:value);
var m__8463__auto__ = (devtools.format._header[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto__.call(null,value));
} else {
var m__8463__auto____$1 = (devtools.format._header["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8462__auto__ = (((value == null))?null:value);
var m__8463__auto__ = (devtools.format._has_body[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto__.call(null,value));
} else {
var m__8463__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8462__auto__ = (((value == null))?null:value);
var m__8463__auto__ = (devtools.format._body[goog.typeOf(x__8462__auto__)]);
if(!((m__8463__auto__ == null))){
return (m__8463__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto__.call(null,value));
} else {
var m__8463__auto____$1 = (devtools.format._body["_"]);
if(!((m__8463__auto____$1 == null))){
return (m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8463__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__8463__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o13994 = temp__4655__auto__;
var temp__4655__auto____$1 = (o13994["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o13995 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o13995["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o13996 = temp__4655__auto____$2;
return (o13996["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o13997 = temp__4655__auto__;
var temp__4655__auto____$1 = (o13997["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o13998 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o13998["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o13999 = temp__4655__auto____$2;
return (o13999["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o14000 = temp__4655__auto__;
var temp__4655__auto____$1 = (o14000["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o14001 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o14001["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o14002 = temp__4655__auto____$2;
return (o14002["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o14003 = temp__4655__auto__;
var temp__4655__auto____$1 = (o14003["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o14004 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o14004["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o14005 = temp__4655__auto____$2;
return (o14005["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o14006 = temp__4655__auto__;
var temp__4655__auto____$1 = (o14006["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o14007 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o14007["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o14008 = temp__4655__auto____$2;
return (o14008["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o14009 = temp__4655__auto__;
var temp__4655__auto____$1 = (o14009["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o14010 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o14010["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o14011 = temp__4655__auto____$2;
return (o14011["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o14012 = temp__4655__auto__;
var temp__4655__auto____$1 = (o14012["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o14013 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o14013["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o14014 = temp__4655__auto____$2;
return (o14014["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();







return null;
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14016 = arguments.length;
var i__8938__auto___14017 = (0);
while(true){
if((i__8938__auto___14017 < len__8937__auto___14016)){
args__8944__auto__.push((arguments[i__8938__auto___14017]));

var G__14018 = (i__8938__auto___14017 + (1));
i__8938__auto___14017 = G__14018;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq14015){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14015));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14020 = arguments.length;
var i__8938__auto___14021 = (0);
while(true){
if((i__8938__auto___14021 < len__8937__auto___14020)){
args__8944__auto__.push((arguments[i__8938__auto___14021]));

var G__14022 = (i__8938__auto___14021 + (1));
i__8938__auto___14021 = G__14022;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq14019){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14019));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14024 = arguments.length;
var i__8938__auto___14025 = (0);
while(true){
if((i__8938__auto___14025 < len__8937__auto___14024)){
args__8944__auto__.push((arguments[i__8938__auto___14025]));

var G__14026 = (i__8938__auto___14025 + (1));
i__8938__auto___14025 = G__14026;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq14023){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14023));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14028 = arguments.length;
var i__8938__auto___14029 = (0);
while(true){
if((i__8938__auto___14029 < len__8937__auto___14028)){
args__8944__auto__.push((arguments[i__8938__auto___14029]));

var G__14030 = (i__8938__auto___14029 + (1));
i__8938__auto___14029 = G__14030;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq14027){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14027));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14032 = arguments.length;
var i__8938__auto___14033 = (0);
while(true){
if((i__8938__auto___14033 < len__8937__auto___14032)){
args__8944__auto__.push((arguments[i__8938__auto___14033]));

var G__14034 = (i__8938__auto___14033 + (1));
i__8938__auto___14033 = G__14034;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq14031){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14031));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14036 = arguments.length;
var i__8938__auto___14037 = (0);
while(true){
if((i__8938__auto___14037 < len__8937__auto___14036)){
args__8944__auto__.push((arguments[i__8938__auto___14037]));

var G__14038 = (i__8938__auto___14037 + (1));
i__8938__auto___14037 = G__14038;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq14035){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14035));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14040 = arguments.length;
var i__8938__auto___14041 = (0);
while(true){
if((i__8938__auto___14041 < len__8937__auto___14040)){
args__8944__auto__.push((arguments[i__8938__auto___14041]));

var G__14042 = (i__8938__auto___14041 + (1));
i__8938__auto___14041 = G__14042;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq14039){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14039));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14050 = arguments.length;
var i__8938__auto___14051 = (0);
while(true){
if((i__8938__auto___14051 < len__8937__auto___14050)){
args__8944__auto__.push((arguments[i__8938__auto___14051]));

var G__14052 = (i__8938__auto___14051 + (1));
i__8938__auto___14051 = G__14052;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__14046){
var vec__14047 = p__14046;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14047,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__14047,state_override){
return (function (p1__14043_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14043_SHARP_,state_override], 0));
});})(vec__14047,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq14044){
var G__14045 = cljs.core.first(seq14044);
var seq14044__$1 = cljs.core.next(seq14044);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__14045,seq14044__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__14053 = cljs.core.cst$kw$ol;
var G__14054 = cljs.core.cst$kw$standard_DASH_ol_DASH_style;
var G__14055 = (function (){var G__14056 = cljs.core.cst$kw$li;
var G__14057 = cljs.core.cst$kw$standard_DASH_li_DASH_style;
var G__14058 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__14056,G__14057,G__14058) : devtools.format.make_template_fn.call(null,G__14056,G__14057,G__14058));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__14053,G__14054,G__14055) : devtools.format.make_template_fn.call(null,G__14053,G__14054,G__14055));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14060 = arguments.length;
var i__8938__auto___14061 = (0);
while(true){
if((i__8938__auto___14061 < len__8937__auto___14060)){
args__8944__auto__.push((arguments[i__8938__auto___14061]));

var G__14062 = (i__8938__auto___14061 + (1));
i__8938__auto___14061 = G__14062;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((0) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8945__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq14059){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14059));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8944__auto__ = [];
var len__8937__auto___14065 = arguments.length;
var i__8938__auto___14066 = (0);
while(true){
if((i__8938__auto___14066 < len__8937__auto___14065)){
args__8944__auto__.push((arguments[i__8938__auto___14066]));

var G__14067 = (i__8938__auto___14066 + (1));
i__8938__auto___14066 = G__14067;
continue;
} else {
}
break;
}

var argseq__8945__auto__ = ((((1) < args__8944__auto__.length))?(new cljs.core.IndexedSeq(args__8944__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8945__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq14063){
var G__14064 = cljs.core.first(seq14063);
var seq14063__$1 = cljs.core.next(seq14063);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__14064,seq14063__$1);
});

