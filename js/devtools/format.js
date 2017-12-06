// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__29168__auto__ = (((value == null))?null:value);
var m__29169__auto__ = (devtools.format._header[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,value);
} else {
var m__29169__auto____$1 = (devtools.format._header["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__29168__auto__ = (((value == null))?null:value);
var m__29169__auto__ = (devtools.format._has_body[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,value);
} else {
var m__29169__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__29168__auto__ = (((value == null))?null:value);
var m__29169__auto__ = (devtools.format._body[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,value);
} else {
var m__29169__auto____$1 = (devtools.format._body["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35243 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35243["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35244 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35244["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35245 = temp__4655__auto____$2;
return (o35245["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35246 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35246["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35247 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35247["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35248 = temp__4655__auto____$2;
return (o35248["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35249 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35249["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35250 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35250["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35251 = temp__4655__auto____$2;
return (o35251["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35252 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35252["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35253 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35253["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35254 = temp__4655__auto____$2;
return (o35254["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35255 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35255["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35256 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35256["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35257 = temp__4655__auto____$2;
return (o35257["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35258 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35258["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35259 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35259["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35260 = temp__4655__auto____$2;
return (o35260["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o35261 = temp__4655__auto__;
var temp__4655__auto____$1 = (o35261["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o35262 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o35262["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o35263 = temp__4655__auto____$2;
return (o35263["_LT_standard_body_GT_"]);
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
var args__29663__auto__ = [];
var len__29656__auto___35265 = arguments.length;
var i__29657__auto___35266 = (0);
while(true){
if((i__29657__auto___35266 < len__29656__auto___35265)){
args__29663__auto__.push((arguments[i__29657__auto___35266]));

var G__35267 = (i__29657__auto___35266 + (1));
i__29657__auto___35266 = G__35267;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq35264){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35264));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35269 = arguments.length;
var i__29657__auto___35270 = (0);
while(true){
if((i__29657__auto___35270 < len__29656__auto___35269)){
args__29663__auto__.push((arguments[i__29657__auto___35270]));

var G__35271 = (i__29657__auto___35270 + (1));
i__29657__auto___35270 = G__35271;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq35268){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35268));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35273 = arguments.length;
var i__29657__auto___35274 = (0);
while(true){
if((i__29657__auto___35274 < len__29656__auto___35273)){
args__29663__auto__.push((arguments[i__29657__auto___35274]));

var G__35275 = (i__29657__auto___35274 + (1));
i__29657__auto___35274 = G__35275;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq35272){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35272));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35277 = arguments.length;
var i__29657__auto___35278 = (0);
while(true){
if((i__29657__auto___35278 < len__29656__auto___35277)){
args__29663__auto__.push((arguments[i__29657__auto___35278]));

var G__35279 = (i__29657__auto___35278 + (1));
i__29657__auto___35278 = G__35279;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq35276){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35276));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35281 = arguments.length;
var i__29657__auto___35282 = (0);
while(true){
if((i__29657__auto___35282 < len__29656__auto___35281)){
args__29663__auto__.push((arguments[i__29657__auto___35282]));

var G__35283 = (i__29657__auto___35282 + (1));
i__29657__auto___35282 = G__35283;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq35280){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35280));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35285 = arguments.length;
var i__29657__auto___35286 = (0);
while(true){
if((i__29657__auto___35286 < len__29656__auto___35285)){
args__29663__auto__.push((arguments[i__29657__auto___35286]));

var G__35287 = (i__29657__auto___35286 + (1));
i__29657__auto___35286 = G__35287;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq35284){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35284));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35289 = arguments.length;
var i__29657__auto___35290 = (0);
while(true){
if((i__29657__auto___35290 < len__29656__auto___35289)){
args__29663__auto__.push((arguments[i__29657__auto___35290]));

var G__35291 = (i__29657__auto___35290 + (1));
i__29657__auto___35290 = G__35291;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq35288){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35288));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35299 = arguments.length;
var i__29657__auto___35300 = (0);
while(true){
if((i__29657__auto___35300 < len__29656__auto___35299)){
args__29663__auto__.push((arguments[i__29657__auto___35300]));

var G__35301 = (i__29657__auto___35300 + (1));
i__29657__auto___35300 = G__35301;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__35295){
var vec__35296 = p__35295;
var state_override = cljs.core.nth.call(null,vec__35296,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__35296,state_override){
return (function (p1__35292_SHARP_){
return cljs.core.merge.call(null,p1__35292_SHARP_,state_override);
});})(vec__35296,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq35293){
var G__35294 = cljs.core.first.call(null,seq35293);
var seq35293__$1 = cljs.core.next.call(null,seq35293);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__35294,seq35293__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35303 = arguments.length;
var i__29657__auto___35304 = (0);
while(true){
if((i__29657__auto___35304 < len__29656__auto___35303)){
args__29663__auto__.push((arguments[i__29657__auto___35304]));

var G__35305 = (i__29657__auto___35304 + (1));
i__29657__auto___35304 = G__35305;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq35302){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35302));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29663__auto__ = [];
var len__29656__auto___35308 = arguments.length;
var i__29657__auto___35309 = (0);
while(true){
if((i__29657__auto___35309 < len__29656__auto___35308)){
args__29663__auto__.push((arguments[i__29657__auto___35309]));

var G__35310 = (i__29657__auto___35309 + (1));
i__29657__auto___35309 = G__35310;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq35306){
var G__35307 = cljs.core.first.call(null,seq35306);
var seq35306__$1 = cljs.core.next.call(null,seq35306);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__35307,seq35306__$1);
});


//# sourceMappingURL=format.js.map?rel=1512565255013
