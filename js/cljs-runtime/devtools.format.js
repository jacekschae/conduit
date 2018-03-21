goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto__.call(null,value));
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto__.call(null,value));
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto____$1.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto__.call(null,value));
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(value) : m__4212__auto____$1.call(null,value));
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

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29977 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29977["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29978 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29978["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29979 = temp__5455__auto____$2;
return (o29979["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29980 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29980["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29982 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29982["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29983 = temp__5455__auto____$2;
return (o29983["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29984 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29984["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29985 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29985["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29986 = temp__5455__auto____$2;
return (o29986["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29987 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29987["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29988 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29988["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29989 = temp__5455__auto____$2;
return (o29989["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29990 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29990["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29991 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29991["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29992 = temp__5455__auto____$2;
return (o29992["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29994 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29994["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29995 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29995["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29996 = temp__5455__auto____$2;
return (o29996["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = ((devtools.context.get_root.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_root.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_root.call(null))["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29997 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29997["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29998 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29998["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29999 = temp__5455__auto____$2;
return (o29999["_LT_standard_body_GT_"]);
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

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30015 = arguments.length;
var i__4498__auto___30016 = (0);
while(true){
if((i__4498__auto___30016 < len__4497__auto___30015)){
args__4500__auto__.push((arguments[i__4498__auto___30016]));

var G__30017 = (i__4498__auto___30016 + (1));
i__4498__auto___30016 = G__30017;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq30013){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30013));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30019 = arguments.length;
var i__4498__auto___30020 = (0);
while(true){
if((i__4498__auto___30020 < len__4497__auto___30019)){
args__4500__auto__.push((arguments[i__4498__auto___30020]));

var G__30021 = (i__4498__auto___30020 + (1));
i__4498__auto___30020 = G__30021;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq30018){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30018));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30023 = arguments.length;
var i__4498__auto___30024 = (0);
while(true){
if((i__4498__auto___30024 < len__4497__auto___30023)){
args__4500__auto__.push((arguments[i__4498__auto___30024]));

var G__30025 = (i__4498__auto___30024 + (1));
i__4498__auto___30024 = G__30025;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq30022){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30022));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30033 = arguments.length;
var i__4498__auto___30034 = (0);
while(true){
if((i__4498__auto___30034 < len__4497__auto___30033)){
args__4500__auto__.push((arguments[i__4498__auto___30034]));

var G__30035 = (i__4498__auto___30034 + (1));
i__4498__auto___30034 = G__30035;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq30031){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30031));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30038 = arguments.length;
var i__4498__auto___30039 = (0);
while(true){
if((i__4498__auto___30039 < len__4497__auto___30038)){
args__4500__auto__.push((arguments[i__4498__auto___30039]));

var G__30040 = (i__4498__auto___30039 + (1));
i__4498__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq30036){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30036));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30053 = arguments.length;
var i__4498__auto___30054 = (0);
while(true){
if((i__4498__auto___30054 < len__4497__auto___30053)){
args__4500__auto__.push((arguments[i__4498__auto___30054]));

var G__30055 = (i__4498__auto___30054 + (1));
i__4498__auto___30054 = G__30055;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq30052){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30052));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30058 = arguments.length;
var i__4498__auto___30059 = (0);
while(true){
if((i__4498__auto___30059 < len__4497__auto___30058)){
args__4500__auto__.push((arguments[i__4498__auto___30059]));

var G__30060 = (i__4498__auto___30059 + (1));
i__4498__auto___30059 = G__30060;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq30056){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30056));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30068 = arguments.length;
var i__4498__auto___30069 = (0);
while(true){
if((i__4498__auto___30069 < len__4497__auto___30068)){
args__4500__auto__.push((arguments[i__4498__auto___30069]));

var G__30070 = (i__4498__auto___30069 + (1));
i__4498__auto___30069 = G__30070;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30064){
var vec__30065 = p__30064;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30065,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__30065,state_override){
return (function (p1__30061_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__30061_SHARP_,state_override], 0));
});})(vec__30065,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq30062){
var G__30063 = cljs.core.first(seq30062);
var seq30062__$1 = cljs.core.next(seq30062);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__30063,seq30062__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__30071 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__30072 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__30073 = (function (){var G__30074 = new cljs.core.Keyword(null,"li","li",723558921);
var G__30075 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__30076 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__30074,G__30075,G__30076) : devtools.format.make_template_fn.call(null,G__30074,G__30075,G__30076));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__30071,G__30072,G__30073) : devtools.format.make_template_fn.call(null,G__30071,G__30072,G__30073));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30078 = arguments.length;
var i__4498__auto___30079 = (0);
while(true){
if((i__4498__auto___30079 < len__4497__auto___30078)){
args__4500__auto__.push((arguments[i__4498__auto___30079]));

var G__30080 = (i__4498__auto___30079 + (1));
i__4498__auto___30079 = G__30080;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq30077){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30077));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30089 = arguments.length;
var i__4498__auto___30090 = (0);
while(true){
if((i__4498__auto___30090 < len__4497__auto___30089)){
args__4500__auto__.push((arguments[i__4498__auto___30090]));

var G__30091 = (i__4498__auto___30090 + (1));
i__4498__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq30086){
var G__30087 = cljs.core.first(seq30086);
var seq30086__$1 = cljs.core.next(seq30086);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__30087,seq30086__$1);
});


//# sourceMappingURL=devtools.format.js.map
