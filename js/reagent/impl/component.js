// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys(o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__14052 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k]));
var G__14053 = (i + (1));
m = G__14052;
i = G__14053;
continue;
} else {
return m;
}
break;
}
});
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
if(cljs.core.map_QMARK_(p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_(p)))?(2):(1));
if((cljs.core.count(v) > first_child)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__4659__auto__ = (p["argv"]);
if((temp__4659__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map(p)], null);
} else {
var a = temp__4659__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv(c,(c["props"]));
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__4659__auto__ = (p["argv"]);
if((temp__4659__auto__ == null)){
return reagent.impl.component.shallow_obj_to_map(p);
} else {
var v = temp__4659__auto__;
return reagent.impl.component.extract_props(v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__4659__auto__ = (p["argv"]);
if((temp__4659__auto__ == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(reagent.impl.util.react["Children"]["toArray"])((p["children"])));
} else {
var v = temp__4659__auto__;
return reagent.impl.component.extract_children(v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return (cljs.core.fn_QMARK_(c)) && (!(((function (){var G__14055 = c;
var G__14055__$1 = (((G__14055 == null))?null:G__14055.prototype);
if((G__14055__$1 == null)){
return null;
} else {
return (G__14055__$1["reagentRender"]);
}
})() == null)));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return (cljs.core.fn_QMARK_(c)) && (!(((function (){var G__14057 = c;
var G__14057__$1 = (((G__14057 == null))?null:G__14057.prototype);
if((G__14057__$1 == null)){
return null;
} else {
return (G__14057__$1["render"]);
}
})() == null)));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return !(((c["reagentRender"]) == null));
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
if(typeof reagent.impl.component.as_element !== 'undefined'){
} else {
reagent.impl.component.as_element = null;
}
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = null;
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv(c);
var n = cljs.core.count(v);
var G__14058 = n;
switch (G__14058) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(res) : reagent.impl.component.as_element.call(null,res));
} else {
if(cljs.core.ifn_QMARK_(res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_(res))?((function (c,f,_,res){
return (function() { 
var G__14061__delegate = function (args){
var G__14059 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.as_element.cljs$core$IFn$_invoke$arity$1(G__14059) : reagent.impl.component.as_element.call(null,G__14059));
};
var G__14061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14062__i = 0, G__14062__a = new Array(arguments.length -  0);
while (G__14062__i < G__14062__a.length) {G__14062__a[G__14062__i] = arguments[G__14062__i + 0]; ++G__14062__i;}
  args = new cljs.core.IndexedSeq(G__14062__a,0,null);
} 
return G__14061__delegate.call(this,args);};
G__14061.cljs$lang$maxFixedArity = 0;
G__14061.cljs$lang$applyTo = (function (arglist__14063){
var args = cljs.core.seq(arglist__14063);
return G__14061__delegate(args);
});
G__14061.cljs$core$IFn$_invoke$arity$variadic = G__14061__delegate;
return G__14061;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__14064 = c;
c = G__14064;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_14065 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{return reagent.impl.component.wrap_render(c);

}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_14065;
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$no_DASH_cache,true], null);
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$render,(function reagent$impl$component$render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render(c);
} else {
var rat = (c["cljsRatom"]);
reagent.impl.batching.mark_rendered(c);

if((rat == null)){
return reagent.ratom.run_in_reaction(((function (rat,c){
return (function (){
return reagent.impl.component.do_render(c);
});})(rat,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__14066 = key;
var G__14066__$1 = (((G__14066 instanceof cljs.core.Keyword))?G__14066.fqn:null);
switch (G__14066__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_(reagent.impl.component.state_atom(c),f.call(c,c));
});
;})(G__14066,G__14066__$1))

break;
case "componentWillReceiveProps":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});
;})(G__14066,G__14066__$1))

break;
case "shouldComponentUpdate":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__8186__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__8186__auto__){
return or__8186__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = ((old_argv == null)) || ((new_argv == null));
if((f == null)){
return (noargv) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv(c),reagent.impl.component.props_argv(c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__14066,G__14066__$1))

break;
case "componentWillUpdate":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,nextprops));
});
;})(G__14066,G__14066__$1))

break;
case "componentDidUpdate":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv(c,oldprops));
});
;})(G__14066,G__14066__$1))

break;
case "componentWillMount":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__14066,G__14066__$1))

break;
case "componentDidMount":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__14066,G__14066__$1))

break;
case "componentWillUnmount":
return ((function (G__14066,G__14066__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__14067_14069 = (c["cljsRatom"]);
if((G__14067_14069 == null)){
} else {
reagent.ratom.dispose_BANG_(G__14067_14069);
}

reagent.impl.batching.mark_rendered(c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__14066,G__14066__$1))

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__8174__auto__ = wrap;
if(cljs.core.truth_(and__8174__auto__)){
return f;
} else {
return and__8174__auto__;
}
})())){
} else {
}

var or__8186__auto__ = wrap;
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$shouldComponentUpdate,null,cljs.core.cst$kw$componentWillMount,null,cljs.core.cst$kw$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.component.dash_to_camel.call(null,k))),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){


var render_fun = (function (){var or__8186__auto__ = cljs.core.cst$kw$reagentRender.cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return cljs.core.cst$kw$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__8186__auto__ = render_fun;
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__8186__auto__ = cljs.core.cst$kw$displayName.cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return reagent.impl.util.fun_name(render_fun__$1);
}
})())].join('');
var name__$1 = (function (){var G__14070 = name;
switch (G__14070) {
case "":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv(((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fmap__$1,cljs.core.cst$kw$displayName,name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$autobind,false,cljs.core.cst$kw$cljsLegacyRender,legacy_render,cljs.core.cst$kw$reagentRender,render_fun__$1,cljs.core.cst$kw$render,cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__14072 = o;
(G__14072[cljs.core.name(k)] = v);

return G__14072;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){

var G__14073 = reagent.impl.component.cljsify(body);
return (reagent.impl.util.create_class.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.util.create_class.cljs$core$IFn$_invoke$arity$1(G__14073) : reagent.impl.util.create_class.call(null,G__14073));
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
var elem = (function (){var G__14074 = (function (){var or__8186__auto__ = (function (){var G__14076 = c;
if((G__14076 == null)){
return null;
} else {
return (G__14076["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return c;
}
})();
if((G__14074 == null)){
return null;
} else {
return (G__14074["_currentElement"]);
}
})();
var name = (function (){var G__14077 = elem;
var G__14077__$1 = (((G__14077 == null))?null:(G__14077["type"]));
if((G__14077__$1 == null)){
return null;
} else {
return (G__14077__$1["displayName"]);
}
})();
var path = (function (){var G__14078 = elem;
var G__14078__$1 = (((G__14078 == null))?null:(G__14078["_owner"]));
var G__14078__$2 = (((G__14078__$1 == null))?null:(reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.component_path.cljs$core$IFn$_invoke$arity$1(G__14078__$1) : reagent.impl.component.component_path.call(null,G__14078__$1)));
if((G__14078__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14078__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
return "";

});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(f){


if(reagent.impl.component.reagent_class_QMARK_(f)){
return reagent.impl.component.cache_react_class(f,f);
} else {
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$reagent_DASH_render,f);
var res = reagent.impl.component.create_class(withrender);
return reagent.impl.component.cache_react_class(f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag){
var temp__4659__auto__ = reagent.impl.component.cached_react_class(tag);
if((temp__4659__auto__ == null)){
return reagent.impl.component.fn_to_class(tag);
} else {
var cached_class = temp__4659__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
if(reagent.impl.component.react_class_QMARK_(comp)){
return comp;
} else {
return reagent.impl.component.as_class(comp);
}
});
