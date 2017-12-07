// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.template');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.dom');
reagent.core.is_client = reagent.impl.util.is_client;
reagent.core.react = reagent.impl.util.react;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var G__14189 = arguments.length;
switch (G__14189) {
case 1:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9365__auto__ = [];
var len__9346__auto___14191 = arguments.length;
var i__9347__auto___14192 = (0);
while(true){
if((i__9347__auto___14192 < len__9346__auto___14191)){
args_arr__9365__auto__.push((arguments[i__9347__auto___14192]));

var G__14193 = (i__9347__auto___14192 + (1));
i__9347__auto___14192 = G__14193;
continue;
} else {
}
break;
}

var argseq__9366__auto__ = (new cljs.core.IndexedSeq(args_arr__9365__auto__.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9366__auto__);

}
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){

return (reagent.core.react["createElement"])(type,props);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){

return (reagent.core.react["createElement"])(type,props,child);
});

reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5((reagent.core.react["createElement"]),type,props,child,children);
});

reagent.core.create_element.cljs$lang$applyTo = (function (seq14185){
var G__14186 = cljs.core.first(seq14185);
var seq14185__$1 = cljs.core.next(seq14185);
var G__14187 = cljs.core.first(seq14185__$1);
var seq14185__$2 = cljs.core.next(seq14185__$1);
var G__14188 = cljs.core.first(seq14185__$2);
var seq14185__$3 = cljs.core.next(seq14185__$2);
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__14186,G__14187,G__14188,seq14185__$3);
});

reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(form){
return reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){

return reagent.impl.template.adapt_react_class(c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(c){

return reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.core.render = (function reagent$core$render(var_args){
var G__14195 = arguments.length;
switch (G__14195) {
case 2:
return reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});

reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
});

reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.dom.unmount_component_at_node(container);
});
reagent.core.as_component = reagent.core.as_element;
reagent.core.render_component = reagent.core.render;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.core.force_update_all = (function reagent$core$force_update_all(){
reagent.ratom.flush_BANG_();

reagent.dom.force_update_all();

return reagent.impl.batching.flush_after_render();
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){

return reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
reagent.core.state = (function reagent$core$state(this$){

return cljs.core.deref(reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){


return cljs.core.reset_BANG_(reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){


return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var G__14198 = arguments.length;
switch (G__14198) {
case 1:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});

reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_();

reagent.impl.util.force_update(this$,deep);

return reagent.impl.batching.flush_after_render();
});

reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){

return reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){

return reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){

return reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return reagent.dom.dom_node(this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var G__14203 = arguments.length;
switch (G__14203) {
case 1:
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__9365__auto__ = [];
var len__9346__auto___14205 = arguments.length;
var i__9347__auto___14206 = (0);
while(true){
if((i__9347__auto___14206 < len__9346__auto___14205)){
args_arr__9365__auto__.push((arguments[i__9347__auto___14206]));

var G__14207 = (i__9347__auto___14206 + (1));
i__9347__auto___14206 = G__14207;
continue;
} else {
}
break;
}

var argseq__9366__auto__ = (new cljs.core.IndexedSeq(args_arr__9365__auto__.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9366__auto__);

}
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});

reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reagent.ratom.atom,x,rest);
});

reagent.core.atom.cljs$lang$applyTo = (function (seq14201){
var G__14202 = cljs.core.first(seq14201);
var seq14201__$1 = cljs.core.next(seq14201);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic(G__14202,seq14201__$1);
});

reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14210 = arguments.length;
var i__9347__auto___14211 = (0);
while(true){
if((i__9347__auto___14211 < len__9346__auto___14210)){
args__9353__auto__.push((arguments[i__9347__auto___14211]));

var G__14212 = (i__9347__auto___14211 + (1));
i__9347__auto___14211 = G__14212;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((1) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9354__auto__);
});

reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return reagent.ratom.make_track(f,args);
});

reagent.core.track.cljs$lang$maxFixedArity = (1);

reagent.core.track.cljs$lang$applyTo = (function (seq14208){
var G__14209 = cljs.core.first(seq14208);
var seq14208__$1 = cljs.core.next(seq14208);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(G__14209,seq14208__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14215 = arguments.length;
var i__9347__auto___14216 = (0);
while(true){
if((i__9347__auto___14216 < len__9346__auto___14215)){
args__9353__auto__.push((arguments[i__9347__auto___14216]));

var G__14217 = (i__9347__auto___14216 + (1));
i__9347__auto___14216 = G__14217;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((1) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9354__auto__);
});

reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){

return reagent.ratom.make_track_BANG_(f,args);
});

reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq14213){
var G__14214 = cljs.core.first(seq14213);
var seq14213__$1 = cljs.core.next(seq14213);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14214,seq14213__$1);
});

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14221 = arguments.length;
var i__9347__auto___14222 = (0);
while(true){
if((i__9347__auto___14222 < len__9346__auto___14221)){
args__9353__auto__.push((arguments[i__9347__auto___14222]));

var G__14223 = (i__9347__auto___14222 + (1));
i__9347__auto___14222 = G__14223;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((2) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);
});

reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){

return reagent.ratom.make_wrapper(value,reset_fn,args);
});

reagent.core.wrap.cljs$lang$maxFixedArity = (2);

reagent.core.wrap.cljs$lang$applyTo = (function (seq14218){
var G__14219 = cljs.core.first(seq14218);
var seq14218__$1 = cljs.core.next(seq14218);
var G__14220 = cljs.core.first(seq14218__$1);
var seq14218__$2 = cljs.core.next(seq14218__$1);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__14219,G__14220,seq14218__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14229 = arguments.length;
var i__9347__auto___14230 = (0);
while(true){
if((i__9347__auto___14230 < len__9346__auto___14229)){
args__9353__auto__.push((arguments[i__9347__auto___14230]));

var G__14231 = (i__9347__auto___14230 + (1));
i__9347__auto___14230 = G__14231;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((2) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9354__auto__);
});

reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){


if(cljs.core.truth_(a.rswapping)){
(function (){var or__8186__auto__ = a.rswapfs;
if(cljs.core.truth_(or__8186__auto__)){
return or__8186__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__14224_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__14224_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__4659__auto__ = (function (){var G__14228 = a.rswapfs;
if((G__14228 == null)){
return null;
} else {
return G__14228.shift();
}
})();
if((temp__4659__auto__ == null)){
return s;
} else {
var sf = temp__4659__auto__;
var G__14232 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__14232;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq14225){
var G__14226 = cljs.core.first(seq14225);
var seq14225__$1 = cljs.core.next(seq14225);
var G__14227 = cljs.core.first(seq14225__$1);
var seq14225__$2 = cljs.core.next(seq14225__$1);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14226,G__14227,seq14225__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__9353__auto__ = [];
var len__9346__auto___14235 = arguments.length;
var i__9347__auto___14236 = (0);
while(true){
if((i__9347__auto___14236 < len__9346__auto___14235)){
args__9353__auto__.push((arguments[i__9347__auto___14236]));

var G__14237 = (i__9347__auto___14236 + (1));
i__9347__auto___14236 = G__14237;
continue;
} else {
}
break;
}

var argseq__9354__auto__ = ((((1) < args__9353__auto__.length))?(new cljs.core.IndexedSeq(args__9353__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9354__auto__);
});

reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn(f,args);
});

reagent.core.partial.cljs$lang$maxFixedArity = (1);

reagent.core.partial.cljs$lang$applyTo = (function (seq14233){
var G__14234 = cljs.core.first(seq14233);
var seq14233__$1 = cljs.core.next(seq14233);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic(G__14234,seq14233__$1);
});

reagent.core.component_path = (function reagent$core$component_path(c){
return reagent.impl.component.component_path(c);
});
