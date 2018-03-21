goog.provide('re_frame.cofx');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.cofx.kind = new cljs.core.Keyword(null,"cofx","cofx",2013202907);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind) : re_frame.registrar.kinds.call(null,re_frame.cofx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given coeffect `handler` for the given `id`, for later use
 *   within `inject-cofx`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a function which takes either one or two arguements, the first of which is
 *   always `coeffects` and which returns an updated `coeffects`.
 * 
 *   See the docs for `inject-cofx` for example use.
 */
re_frame.cofx.reg_cofx = (function re_frame$cofx$reg_cofx(id,handler){
return re_frame.registrar.register_handler(re_frame.cofx.kind,id,handler);
});
/**
 * Given an `id`, and an optional, arbitrary `value`, returns an interceptor
 * whose `:before` adds to the `:coeffects` (map) by calling a pre-registered
 * 'coeffect handler' identified by the `id`.
 * 
 * The previous association of a `coeffect handler` with an `id` will have
 * happened via a call to `re-frame.core/reg-cofx` - generally on program startup.
 * 
 * Within the created interceptor, this 'looked up' `coeffect handler` will
 * be called (within the `:before`) with two arguments:
 *   - the current value of `:coeffects`
 *   - optionally, the originally supplied arbitrary `value`
 * 
 * This `coeffect handler` is expected to modify and return its first, `coeffects` argument.
 * 
 * Example Of how `inject-cofx` and `reg-cofx` work together
 * ---------------------------------------------------------
 * 
 * 1. Early in app startup, you register a `coeffect handler` for `:datetime`:
 * 
 *    (re-frame.core/reg-cofx
 *      :datetime                        ;; usage  (inject-cofx :datetime)
 *      (fn coeffect-handler
 *        [coeffect]
 *        (assoc coeffect :now (js/Date.))))   ;; modify and return first arg
 * 
 * 2. Later, add an interceptor to an -fx event handler, using `inject-cofx`:
 * 
 *    (re-frame.core/reg-event-fx        ;; we are registering an event handler
 *       :event-id
 *       [ ... (inject-cofx :datetime) ... ]    ;; <-- create an injecting interceptor
 *       (fn event-handler
 *         [coeffect event]
 *         ... in here can access (:now coeffect) to obtain current datetime ... )))
 * 
 * Background
 * ----------
 * 
 * `coeffects` are the input resources required by an event handler
 * to perform its job. The two most obvious ones are `db` and `event`.
 * But sometimes an event handler might need other resources.
 * 
 * Perhaps an event handler needs a random number or a GUID or the current
 * datetime. Perhaps it needs access to a DataScript database connection.
 * 
 * If an event handler directly accesses these resources, it stops being
 * pure and, consequently, it becomes harder to test, etc. So we don't
 * want that.
 * 
 * Instead, the interceptor created by this function is a way to 'inject'
 * 'necessary resources' into the `:coeffects` (map) subsequently given
 * to the event handler at call time.
 */
re_frame.cofx.inject_cofx = (function re_frame$cofx$inject_cofx(var_args){
var G__34681 = arguments.length;
switch (G__34681) {
case 1:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$cofx$coeffects_before(context){
var temp__5455__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
if(cljs.core.truth_(temp__5455__auto__)){
var handler = temp__5455__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for",id], 0));
}
})], 0));
});

re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$cofx$coeffects_before(context){
var temp__5455__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
if(cljs.core.truth_(temp__5455__auto__)){
var handler = temp__5455__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"coeffects","coeffects",497912985),handler,value);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No cofx handler registered for",id], 0));
}
})], 0));
});

re_frame.cofx.inject_cofx.cljs$lang$maxFixedArity = 2;

re_frame.cofx.reg_cofx(new cljs.core.Keyword(null,"db","db",993250759),(function re_frame$cofx$db_coeffects_handler(coeffects){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.deref(re_frame.db.app_db));
}));
re_frame.cofx.inject_db = re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759));

//# sourceMappingURL=re_frame.cofx.js.map
