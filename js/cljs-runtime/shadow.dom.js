goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28976 = coll;
var G__28977 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28976,G__28977) : shadow.dom.lazy_native_coll_seq.call(null,G__28976,G__28977));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28990 = arguments.length;
switch (G__28990) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28993 = arguments.length;
switch (G__28993) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28996 = arguments.length;
switch (G__28996) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28999 = arguments.length;
switch (G__28999) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__29002 = arguments.length;
switch (G__29002) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__29003 = document;
var G__29004 = shadow.dom.dom_node(el);
return goog.dom.contains(G__29003,G__29004);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__29005 = shadow.dom.dom_node(parent);
var G__29006 = shadow.dom.dom_node(el);
return goog.dom.contains(G__29005,G__29006);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__29008 = shadow.dom.dom_node(el);
var G__29009 = cls;
return goog.dom.classlist.add(G__29008,G__29009);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__29010 = shadow.dom.dom_node(el);
var G__29011 = cls;
return goog.dom.classlist.remove(G__29010,G__29011);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__29013 = arguments.length;
switch (G__29013) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__29014 = shadow.dom.dom_node(el);
var G__29015 = cls;
return goog.dom.classlist.toggle(G__29014,G__29015);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e29017){if((e29017 instanceof Object)){
var e = e29017;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29017;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29018 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29019 = null;
var count__29020 = (0);
var i__29021 = (0);
while(true){
if((i__29021 < count__29020)){
var el = chunk__29019.cljs$core$IIndexed$_nth$arity$2(null,i__29021);
var handler_29028__$1 = ((function (seq__29018,chunk__29019,count__29020,i__29021,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29018,chunk__29019,count__29020,i__29021,el))
;
var G__29022_29029 = el;
var G__29023_29030 = cljs.core.name(ev);
var G__29024_29031 = handler_29028__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29022_29029,G__29023_29030,G__29024_29031) : shadow.dom.dom_listen.call(null,G__29022_29029,G__29023_29030,G__29024_29031));


var G__29032 = seq__29018;
var G__29033 = chunk__29019;
var G__29034 = count__29020;
var G__29035 = (i__29021 + (1));
seq__29018 = G__29032;
chunk__29019 = G__29033;
count__29020 = G__29034;
i__29021 = G__29035;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29018);
if(temp__5457__auto__){
var seq__29018__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29018__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29018__$1);
var G__29036 = cljs.core.chunk_rest(seq__29018__$1);
var G__29037 = c__4319__auto__;
var G__29038 = cljs.core.count(c__4319__auto__);
var G__29039 = (0);
seq__29018 = G__29036;
chunk__29019 = G__29037;
count__29020 = G__29038;
i__29021 = G__29039;
continue;
} else {
var el = cljs.core.first(seq__29018__$1);
var handler_29040__$1 = ((function (seq__29018,chunk__29019,count__29020,i__29021,el,seq__29018__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29018,chunk__29019,count__29020,i__29021,el,seq__29018__$1,temp__5457__auto__))
;
var G__29025_29041 = el;
var G__29026_29042 = cljs.core.name(ev);
var G__29027_29043 = handler_29040__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29025_29041,G__29026_29042,G__29027_29043) : shadow.dom.dom_listen.call(null,G__29025_29041,G__29026_29042,G__29027_29043));


var G__29044 = cljs.core.next(seq__29018__$1);
var G__29045 = null;
var G__29046 = (0);
var G__29047 = (0);
seq__29018 = G__29044;
chunk__29019 = G__29045;
count__29020 = G__29046;
i__29021 = G__29047;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__29049 = arguments.length;
switch (G__29049) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__29050 = shadow.dom.dom_node(el);
var G__29051 = cljs.core.name(ev);
var G__29052 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29050,G__29051,G__29052) : shadow.dom.dom_listen.call(null,G__29050,G__29051,G__29052));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__29054 = shadow.dom.dom_node(el);
var G__29055 = cljs.core.name(ev);
var G__29056 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__29054,G__29055,G__29056) : shadow.dom.dom_listen_remove.call(null,G__29054,G__29055,G__29056));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29057 = cljs.core.seq(events);
var chunk__29058 = null;
var count__29059 = (0);
var i__29060 = (0);
while(true){
if((i__29060 < count__29059)){
var vec__29061 = chunk__29058.cljs$core$IIndexed$_nth$arity$2(null,i__29060);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29061,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29061,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29067 = seq__29057;
var G__29068 = chunk__29058;
var G__29069 = count__29059;
var G__29070 = (i__29060 + (1));
seq__29057 = G__29067;
chunk__29058 = G__29068;
count__29059 = G__29069;
i__29060 = G__29070;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29057);
if(temp__5457__auto__){
var seq__29057__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29057__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29057__$1);
var G__29071 = cljs.core.chunk_rest(seq__29057__$1);
var G__29072 = c__4319__auto__;
var G__29073 = cljs.core.count(c__4319__auto__);
var G__29074 = (0);
seq__29057 = G__29071;
chunk__29058 = G__29072;
count__29059 = G__29073;
i__29060 = G__29074;
continue;
} else {
var vec__29064 = cljs.core.first(seq__29057__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29064,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29075 = cljs.core.next(seq__29057__$1);
var G__29076 = null;
var G__29077 = (0);
var G__29078 = (0);
seq__29057 = G__29075;
chunk__29058 = G__29076;
count__29059 = G__29077;
i__29060 = G__29078;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29079 = cljs.core.seq(styles);
var chunk__29080 = null;
var count__29081 = (0);
var i__29082 = (0);
while(true){
if((i__29082 < count__29081)){
var vec__29083 = chunk__29080.cljs$core$IIndexed$_nth$arity$2(null,i__29082);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29083,(1),null);
var G__29086_29095 = dom;
var G__29087_29096 = cljs.core.name(k);
var G__29088_29097 = (((v == null))?"":v);
goog.style.setStyle(G__29086_29095,G__29087_29096,G__29088_29097);


var G__29098 = seq__29079;
var G__29099 = chunk__29080;
var G__29100 = count__29081;
var G__29101 = (i__29082 + (1));
seq__29079 = G__29098;
chunk__29080 = G__29099;
count__29081 = G__29100;
i__29082 = G__29101;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29079);
if(temp__5457__auto__){
var seq__29079__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29079__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29079__$1);
var G__29102 = cljs.core.chunk_rest(seq__29079__$1);
var G__29103 = c__4319__auto__;
var G__29104 = cljs.core.count(c__4319__auto__);
var G__29105 = (0);
seq__29079 = G__29102;
chunk__29080 = G__29103;
count__29081 = G__29104;
i__29082 = G__29105;
continue;
} else {
var vec__29089 = cljs.core.first(seq__29079__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(1),null);
var G__29092_29106 = dom;
var G__29093_29107 = cljs.core.name(k);
var G__29094_29108 = (((v == null))?"":v);
goog.style.setStyle(G__29092_29106,G__29093_29107,G__29094_29108);


var G__29109 = cljs.core.next(seq__29079__$1);
var G__29110 = null;
var G__29111 = (0);
var G__29112 = (0);
seq__29079 = G__29109;
chunk__29080 = G__29110;
count__29081 = G__29111;
i__29082 = G__29112;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29113_29114 = key;
var G__29113_29115__$1 = (((G__29113_29114 instanceof cljs.core.Keyword))?G__29113_29114.fqn:null);
switch (G__29113_29115__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29117 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_29117,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_29117,"aria-");
}
})())){
el.setAttribute(ks_29117,value);
} else {
(el[ks_29117] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__29118 = shadow.dom.dom_node(el);
var G__29119 = cls;
return goog.dom.classlist.contains(G__29118,G__29119);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29120){
var map__29121 = p__29120;
var map__29121__$1 = ((((!((map__29121 == null)))?(((((map__29121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29121):map__29121);
var props = map__29121__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29121__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29123 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29123,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29123,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29123,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29126 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29126,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29126;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29128 = arguments.length;
switch (G__29128) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29132){
var vec__29133 = p__29132;
var seq__29134 = cljs.core.seq(vec__29133);
var first__29135 = cljs.core.first(seq__29134);
var seq__29134__$1 = cljs.core.next(seq__29134);
var nn = first__29135;
var first__29135__$1 = cljs.core.first(seq__29134__$1);
var seq__29134__$2 = cljs.core.next(seq__29134__$1);
var np = first__29135__$1;
var nc = seq__29134__$2;
var node = vec__29133;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29138 = nn;
var G__29139 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29138,G__29139) : create_fn.call(null,G__29138,G__29139));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29141 = nn;
var G__29142 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29141,G__29142) : create_fn.call(null,G__29141,G__29142));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29148 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29148,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29148,(1),null);
var seq__29151_29172 = cljs.core.seq(node_children);
var chunk__29152_29173 = null;
var count__29153_29174 = (0);
var i__29154_29175 = (0);
while(true){
if((i__29154_29175 < count__29153_29174)){
var child_struct_29176 = chunk__29152_29173.cljs$core$IIndexed$_nth$arity$2(null,i__29154_29175);
var children_29177 = shadow.dom.dom_node(child_struct_29176);
if(cljs.core.seq_QMARK_(children_29177)){
var seq__29155_29178 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29177));
var chunk__29157_29179 = null;
var count__29158_29180 = (0);
var i__29159_29181 = (0);
while(true){
if((i__29159_29181 < count__29158_29180)){
var child_29182 = chunk__29157_29179.cljs$core$IIndexed$_nth$arity$2(null,i__29159_29181);
if(cljs.core.truth_(child_29182)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29182);


var G__29183 = seq__29155_29178;
var G__29184 = chunk__29157_29179;
var G__29185 = count__29158_29180;
var G__29186 = (i__29159_29181 + (1));
seq__29155_29178 = G__29183;
chunk__29157_29179 = G__29184;
count__29158_29180 = G__29185;
i__29159_29181 = G__29186;
continue;
} else {
var G__29187 = seq__29155_29178;
var G__29188 = chunk__29157_29179;
var G__29189 = count__29158_29180;
var G__29190 = (i__29159_29181 + (1));
seq__29155_29178 = G__29187;
chunk__29157_29179 = G__29188;
count__29158_29180 = G__29189;
i__29159_29181 = G__29190;
continue;
}
} else {
var temp__5457__auto___29191 = cljs.core.seq(seq__29155_29178);
if(temp__5457__auto___29191){
var seq__29155_29192__$1 = temp__5457__auto___29191;
if(cljs.core.chunked_seq_QMARK_(seq__29155_29192__$1)){
var c__4319__auto___29193 = cljs.core.chunk_first(seq__29155_29192__$1);
var G__29194 = cljs.core.chunk_rest(seq__29155_29192__$1);
var G__29195 = c__4319__auto___29193;
var G__29196 = cljs.core.count(c__4319__auto___29193);
var G__29197 = (0);
seq__29155_29178 = G__29194;
chunk__29157_29179 = G__29195;
count__29158_29180 = G__29196;
i__29159_29181 = G__29197;
continue;
} else {
var child_29198 = cljs.core.first(seq__29155_29192__$1);
if(cljs.core.truth_(child_29198)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29198);


var G__29199 = cljs.core.next(seq__29155_29192__$1);
var G__29200 = null;
var G__29201 = (0);
var G__29202 = (0);
seq__29155_29178 = G__29199;
chunk__29157_29179 = G__29200;
count__29158_29180 = G__29201;
i__29159_29181 = G__29202;
continue;
} else {
var G__29203 = cljs.core.next(seq__29155_29192__$1);
var G__29204 = null;
var G__29205 = (0);
var G__29206 = (0);
seq__29155_29178 = G__29203;
chunk__29157_29179 = G__29204;
count__29158_29180 = G__29205;
i__29159_29181 = G__29206;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29177);
}


var G__29207 = seq__29151_29172;
var G__29208 = chunk__29152_29173;
var G__29209 = count__29153_29174;
var G__29210 = (i__29154_29175 + (1));
seq__29151_29172 = G__29207;
chunk__29152_29173 = G__29208;
count__29153_29174 = G__29209;
i__29154_29175 = G__29210;
continue;
} else {
var temp__5457__auto___29211 = cljs.core.seq(seq__29151_29172);
if(temp__5457__auto___29211){
var seq__29151_29212__$1 = temp__5457__auto___29211;
if(cljs.core.chunked_seq_QMARK_(seq__29151_29212__$1)){
var c__4319__auto___29213 = cljs.core.chunk_first(seq__29151_29212__$1);
var G__29214 = cljs.core.chunk_rest(seq__29151_29212__$1);
var G__29215 = c__4319__auto___29213;
var G__29216 = cljs.core.count(c__4319__auto___29213);
var G__29217 = (0);
seq__29151_29172 = G__29214;
chunk__29152_29173 = G__29215;
count__29153_29174 = G__29216;
i__29154_29175 = G__29217;
continue;
} else {
var child_struct_29218 = cljs.core.first(seq__29151_29212__$1);
var children_29219 = shadow.dom.dom_node(child_struct_29218);
if(cljs.core.seq_QMARK_(children_29219)){
var seq__29166_29220 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29219));
var chunk__29168_29221 = null;
var count__29169_29222 = (0);
var i__29170_29223 = (0);
while(true){
if((i__29170_29223 < count__29169_29222)){
var child_29224 = chunk__29168_29221.cljs$core$IIndexed$_nth$arity$2(null,i__29170_29223);
if(cljs.core.truth_(child_29224)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29224);


var G__29225 = seq__29166_29220;
var G__29226 = chunk__29168_29221;
var G__29227 = count__29169_29222;
var G__29228 = (i__29170_29223 + (1));
seq__29166_29220 = G__29225;
chunk__29168_29221 = G__29226;
count__29169_29222 = G__29227;
i__29170_29223 = G__29228;
continue;
} else {
var G__29229 = seq__29166_29220;
var G__29230 = chunk__29168_29221;
var G__29231 = count__29169_29222;
var G__29232 = (i__29170_29223 + (1));
seq__29166_29220 = G__29229;
chunk__29168_29221 = G__29230;
count__29169_29222 = G__29231;
i__29170_29223 = G__29232;
continue;
}
} else {
var temp__5457__auto___29233__$1 = cljs.core.seq(seq__29166_29220);
if(temp__5457__auto___29233__$1){
var seq__29166_29234__$1 = temp__5457__auto___29233__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29166_29234__$1)){
var c__4319__auto___29235 = cljs.core.chunk_first(seq__29166_29234__$1);
var G__29236 = cljs.core.chunk_rest(seq__29166_29234__$1);
var G__29237 = c__4319__auto___29235;
var G__29238 = cljs.core.count(c__4319__auto___29235);
var G__29239 = (0);
seq__29166_29220 = G__29236;
chunk__29168_29221 = G__29237;
count__29169_29222 = G__29238;
i__29170_29223 = G__29239;
continue;
} else {
var child_29240 = cljs.core.first(seq__29166_29234__$1);
if(cljs.core.truth_(child_29240)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29240);


var G__29241 = cljs.core.next(seq__29166_29234__$1);
var G__29242 = null;
var G__29243 = (0);
var G__29244 = (0);
seq__29166_29220 = G__29241;
chunk__29168_29221 = G__29242;
count__29169_29222 = G__29243;
i__29170_29223 = G__29244;
continue;
} else {
var G__29245 = cljs.core.next(seq__29166_29234__$1);
var G__29246 = null;
var G__29247 = (0);
var G__29248 = (0);
seq__29166_29220 = G__29245;
chunk__29168_29221 = G__29246;
count__29169_29222 = G__29247;
i__29170_29223 = G__29248;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29219);
}


var G__29249 = cljs.core.next(seq__29151_29212__$1);
var G__29250 = null;
var G__29251 = (0);
var G__29252 = (0);
seq__29151_29172 = G__29249;
chunk__29152_29173 = G__29250;
count__29153_29174 = G__29251;
i__29154_29175 = G__29252;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__29259 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__29259);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29262 = cljs.core.seq(node);
var chunk__29263 = null;
var count__29264 = (0);
var i__29265 = (0);
while(true){
if((i__29265 < count__29264)){
var n = chunk__29263.cljs$core$IIndexed$_nth$arity$2(null,i__29265);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29272 = seq__29262;
var G__29273 = chunk__29263;
var G__29274 = count__29264;
var G__29275 = (i__29265 + (1));
seq__29262 = G__29272;
chunk__29263 = G__29273;
count__29264 = G__29274;
i__29265 = G__29275;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29262);
if(temp__5457__auto__){
var seq__29262__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29262__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29262__$1);
var G__29276 = cljs.core.chunk_rest(seq__29262__$1);
var G__29277 = c__4319__auto__;
var G__29278 = cljs.core.count(c__4319__auto__);
var G__29279 = (0);
seq__29262 = G__29276;
chunk__29263 = G__29277;
count__29264 = G__29278;
i__29265 = G__29279;
continue;
} else {
var n = cljs.core.first(seq__29262__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29280 = cljs.core.next(seq__29262__$1);
var G__29281 = null;
var G__29282 = (0);
var G__29283 = (0);
seq__29262 = G__29280;
chunk__29263 = G__29281;
count__29264 = G__29282;
i__29265 = G__29283;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__29286 = shadow.dom.dom_node(new$);
var G__29287 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__29286,G__29287);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29292 = arguments.length;
switch (G__29292) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29304 = arguments.length;
switch (G__29304) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29318 = arguments.length;
switch (G__29318) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4500__auto__ = [];
var len__4497__auto___29347 = arguments.length;
var i__4498__auto___29348 = (0);
while(true){
if((i__4498__auto___29348 < len__4497__auto___29347)){
args__4500__auto__.push((arguments[i__4498__auto___29348]));

var G__29349 = (i__4498__auto___29348 + (1));
i__4498__auto___29348 = G__29349;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((0) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4501__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29340_29352 = cljs.core.seq(nodes);
var chunk__29341_29353 = null;
var count__29342_29354 = (0);
var i__29343_29355 = (0);
while(true){
if((i__29343_29355 < count__29342_29354)){
var node_29364 = chunk__29341_29353.cljs$core$IIndexed$_nth$arity$2(null,i__29343_29355);
fragment.appendChild(shadow.dom._to_dom(node_29364));


var G__29365 = seq__29340_29352;
var G__29366 = chunk__29341_29353;
var G__29367 = count__29342_29354;
var G__29368 = (i__29343_29355 + (1));
seq__29340_29352 = G__29365;
chunk__29341_29353 = G__29366;
count__29342_29354 = G__29367;
i__29343_29355 = G__29368;
continue;
} else {
var temp__5457__auto___29369 = cljs.core.seq(seq__29340_29352);
if(temp__5457__auto___29369){
var seq__29340_29370__$1 = temp__5457__auto___29369;
if(cljs.core.chunked_seq_QMARK_(seq__29340_29370__$1)){
var c__4319__auto___29371 = cljs.core.chunk_first(seq__29340_29370__$1);
var G__29372 = cljs.core.chunk_rest(seq__29340_29370__$1);
var G__29373 = c__4319__auto___29371;
var G__29374 = cljs.core.count(c__4319__auto___29371);
var G__29375 = (0);
seq__29340_29352 = G__29372;
chunk__29341_29353 = G__29373;
count__29342_29354 = G__29374;
i__29343_29355 = G__29375;
continue;
} else {
var node_29377 = cljs.core.first(seq__29340_29370__$1);
fragment.appendChild(shadow.dom._to_dom(node_29377));


var G__29378 = cljs.core.next(seq__29340_29370__$1);
var G__29379 = null;
var G__29380 = (0);
var G__29381 = (0);
seq__29340_29352 = G__29378;
chunk__29341_29353 = G__29379;
count__29342_29354 = G__29380;
i__29343_29355 = G__29381;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

shadow.dom.fragment.cljs$lang$applyTo = (function (seq29338){
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29338));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29384_29405 = cljs.core.seq(scripts);
var chunk__29385_29406 = null;
var count__29386_29407 = (0);
var i__29387_29408 = (0);
while(true){
if((i__29387_29408 < count__29386_29407)){
var vec__29390_29411 = chunk__29385_29406.cljs$core$IIndexed$_nth$arity$2(null,i__29387_29408);
var script_tag_29412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29390_29411,(0),null);
var script_body_29413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29390_29411,(1),null);
eval(script_body_29413);


var G__29414 = seq__29384_29405;
var G__29415 = chunk__29385_29406;
var G__29416 = count__29386_29407;
var G__29417 = (i__29387_29408 + (1));
seq__29384_29405 = G__29414;
chunk__29385_29406 = G__29415;
count__29386_29407 = G__29416;
i__29387_29408 = G__29417;
continue;
} else {
var temp__5457__auto___29420 = cljs.core.seq(seq__29384_29405);
if(temp__5457__auto___29420){
var seq__29384_29421__$1 = temp__5457__auto___29420;
if(cljs.core.chunked_seq_QMARK_(seq__29384_29421__$1)){
var c__4319__auto___29422 = cljs.core.chunk_first(seq__29384_29421__$1);
var G__29423 = cljs.core.chunk_rest(seq__29384_29421__$1);
var G__29424 = c__4319__auto___29422;
var G__29425 = cljs.core.count(c__4319__auto___29422);
var G__29426 = (0);
seq__29384_29405 = G__29423;
chunk__29385_29406 = G__29424;
count__29386_29407 = G__29425;
i__29387_29408 = G__29426;
continue;
} else {
var vec__29397_29428 = cljs.core.first(seq__29384_29421__$1);
var script_tag_29429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29397_29428,(0),null);
var script_body_29430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29397_29428,(1),null);
eval(script_body_29430);


var G__29431 = cljs.core.next(seq__29384_29421__$1);
var G__29432 = null;
var G__29433 = (0);
var G__29434 = (0);
seq__29384_29405 = G__29431;
chunk__29385_29406 = G__29432;
count__29386_29407 = G__29433;
i__29387_29408 = G__29434;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__29401){
var vec__29402 = p__29401;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29402,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29402,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__29444 = shadow.dom.dom_node(el);
var G__29445 = cls;
return goog.dom.getAncestorByClass(G__29444,G__29445);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29450 = arguments.length;
switch (G__29450) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__29452 = shadow.dom.dom_node(el);
var G__29453 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__29452,G__29453);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__29455 = shadow.dom.dom_node(el);
var G__29456 = cljs.core.name(tag);
var G__29457 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__29455,G__29456,G__29457);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__29466 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__29466);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__29468 = shadow.dom.dom_node(dom);
var G__29469 = value;
return goog.dom.forms.setValue(G__29468,G__29469);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29485 = cljs.core.seq(style_keys);
var chunk__29486 = null;
var count__29487 = (0);
var i__29488 = (0);
while(true){
if((i__29488 < count__29487)){
var it = chunk__29486.cljs$core$IIndexed$_nth$arity$2(null,i__29488);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29504 = seq__29485;
var G__29505 = chunk__29486;
var G__29506 = count__29487;
var G__29507 = (i__29488 + (1));
seq__29485 = G__29504;
chunk__29486 = G__29505;
count__29487 = G__29506;
i__29488 = G__29507;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__29485);
if(temp__5457__auto__){
var seq__29485__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29485__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__29485__$1);
var G__29508 = cljs.core.chunk_rest(seq__29485__$1);
var G__29509 = c__4319__auto__;
var G__29510 = cljs.core.count(c__4319__auto__);
var G__29511 = (0);
seq__29485 = G__29508;
chunk__29486 = G__29509;
count__29487 = G__29510;
i__29488 = G__29511;
continue;
} else {
var it = cljs.core.first(seq__29485__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29512 = cljs.core.next(seq__29485__$1);
var G__29513 = null;
var G__29514 = (0);
var G__29515 = (0);
seq__29485 = G__29512;
chunk__29486 = G__29513;
count__29487 = G__29514;
i__29488 = G__29515;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10589__auto__,k__10590__auto__){
var self__ = this;
var this__10589__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10589__auto____$1,k__10590__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10591__auto__,k29519,else__10592__auto__){
var self__ = this;
var this__10591__auto____$1 = this;
var G__29528 = k29519;
var G__29528__$1 = (((G__29528 instanceof cljs.core.Keyword))?G__29528.fqn:null);
switch (G__29528__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29519,else__10592__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10603__auto__,writer__10604__auto__,opts__10605__auto__){
var self__ = this;
var this__10603__auto____$1 = this;
var pr_pair__10606__auto__ = ((function (this__10603__auto____$1){
return (function (keyval__10607__auto__){
return cljs.core.pr_sequential_writer(writer__10604__auto__,cljs.core.pr_writer,""," ","",opts__10605__auto__,keyval__10607__auto__);
});})(this__10603__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10604__auto__,pr_pair__10606__auto__,"#shadow.dom.Coordinate{",", ","}",opts__10605__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29518){
var self__ = this;
var G__29518__$1 = this;
return (new cljs.core.RecordIter((0),G__29518__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10584__auto__){
var self__ = this;
var this__10584__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10593__auto__){
var self__ = this;
var this__10593__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10585__auto__){
var self__ = this;
var this__10585__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__29539 = ((function (h__4030__auto__,this__10585__auto____$1){
return (function (coll__10586__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__10586__auto__));
});})(h__4030__auto__,this__10585__auto____$1))
;
return fexpr__29539(this__10585__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29520,other29521){
var self__ = this;
var this29520__$1 = this;
return ((!((other29521 == null))) && ((this29520__$1.constructor === other29521.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29520__$1.x,other29521.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29520__$1.y,other29521.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29520__$1.__extmap,other29521.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10598__auto__,k__10599__auto__){
var self__ = this;
var this__10598__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__10599__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10598__auto____$1),self__.__meta),k__10599__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10599__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10596__auto__,k__10597__auto__,G__29518){
var self__ = this;
var this__10596__auto____$1 = this;
var pred__29544 = cljs.core.keyword_identical_QMARK_;
var expr__29545 = k__10597__auto__;
if(cljs.core.truth_((function (){var G__29547 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__29548 = expr__29545;
return (pred__29544.cljs$core$IFn$_invoke$arity$2 ? pred__29544.cljs$core$IFn$_invoke$arity$2(G__29547,G__29548) : pred__29544.call(null,G__29547,G__29548));
})())){
return (new shadow.dom.Coordinate(G__29518,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29549 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__29550 = expr__29545;
return (pred__29544.cljs$core$IFn$_invoke$arity$2 ? pred__29544.cljs$core$IFn$_invoke$arity$2(G__29549,G__29550) : pred__29544.call(null,G__29549,G__29550));
})())){
return (new shadow.dom.Coordinate(self__.x,G__29518,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10597__auto__,G__29518),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10601__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10588__auto__,G__29518){
var self__ = this;
var this__10588__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29518,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10594__auto__,entry__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10595__auto__)){
return cljs.core._assoc(this__10594__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10594__auto____$1,entry__10595__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29525){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29525),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29525),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29525,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__29629 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__29629);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__29633 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__29633);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__29635 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__29635);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10589__auto__,k__10590__auto__){
var self__ = this;
var this__10589__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10589__auto____$1,k__10590__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10591__auto__,k29637,else__10592__auto__){
var self__ = this;
var this__10591__auto____$1 = this;
var G__29652 = k29637;
var G__29652__$1 = (((G__29652 instanceof cljs.core.Keyword))?G__29652.fqn:null);
switch (G__29652__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29637,else__10592__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10603__auto__,writer__10604__auto__,opts__10605__auto__){
var self__ = this;
var this__10603__auto____$1 = this;
var pr_pair__10606__auto__ = ((function (this__10603__auto____$1){
return (function (keyval__10607__auto__){
return cljs.core.pr_sequential_writer(writer__10604__auto__,cljs.core.pr_writer,""," ","",opts__10605__auto__,keyval__10607__auto__);
});})(this__10603__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10604__auto__,pr_pair__10606__auto__,"#shadow.dom.Size{",", ","}",opts__10605__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29636){
var self__ = this;
var G__29636__$1 = this;
return (new cljs.core.RecordIter((0),G__29636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10584__auto__){
var self__ = this;
var this__10584__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10593__auto__){
var self__ = this;
var this__10593__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10585__auto__){
var self__ = this;
var this__10585__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__29660 = ((function (h__4030__auto__,this__10585__auto____$1){
return (function (coll__10586__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__10586__auto__));
});})(h__4030__auto__,this__10585__auto____$1))
;
return fexpr__29660(this__10585__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29638,other29639){
var self__ = this;
var this29638__$1 = this;
return ((!((other29639 == null))) && ((this29638__$1.constructor === other29639.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29638__$1.w,other29639.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29638__$1.h,other29639.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29638__$1.__extmap,other29639.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10598__auto__,k__10599__auto__){
var self__ = this;
var this__10598__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__10599__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10598__auto____$1),self__.__meta),k__10599__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10599__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10596__auto__,k__10597__auto__,G__29636){
var self__ = this;
var this__10596__auto____$1 = this;
var pred__29663 = cljs.core.keyword_identical_QMARK_;
var expr__29664 = k__10597__auto__;
if(cljs.core.truth_((function (){var G__29667 = new cljs.core.Keyword(null,"w","w",354169001);
var G__29668 = expr__29664;
return (pred__29663.cljs$core$IFn$_invoke$arity$2 ? pred__29663.cljs$core$IFn$_invoke$arity$2(G__29667,G__29668) : pred__29663.call(null,G__29667,G__29668));
})())){
return (new shadow.dom.Size(G__29636,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29669 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__29670 = expr__29664;
return (pred__29663.cljs$core$IFn$_invoke$arity$2 ? pred__29663.cljs$core$IFn$_invoke$arity$2(G__29669,G__29670) : pred__29663.call(null,G__29669,G__29670));
})())){
return (new shadow.dom.Size(self__.w,G__29636,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10597__auto__,G__29636),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10601__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10588__auto__,G__29636){
var self__ = this;
var this__10588__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29636,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10594__auto__,entry__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10595__auto__)){
return cljs.core._assoc(this__10594__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10594__auto____$1,entry__10595__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29642){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29642),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29642),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29642,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__29684 = shadow.dom.dom_node(el);
return goog.style.getSize(G__29684);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__29685 = (i + (1));
var G__29686 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29685;
ret = G__29686;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29687){
var vec__29689 = p__29687;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29689,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29689,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29695 = arguments.length;
switch (G__29695) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__29707_29709 = new_node;
var G__29708_29710 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__29707_29709,G__29708_29710);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__29711_29714 = new_node;
var G__29712_29715 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__29711_29714,G__29712_29715);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29719 = ps;
var G__29720 = (i + (1));
el__$1 = G__29719;
i = G__29720;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__29725 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__29725);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__29731 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__29731);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__29733 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__29733);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29734 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29734,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29734,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29734,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29737_29748 = cljs.core.seq(props);
var chunk__29738_29749 = null;
var count__29739_29750 = (0);
var i__29740_29751 = (0);
while(true){
if((i__29740_29751 < count__29739_29750)){
var vec__29741_29752 = chunk__29738_29749.cljs$core$IIndexed$_nth$arity$2(null,i__29740_29751);
var k_29753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741_29752,(0),null);
var v_29754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741_29752,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_29753);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29753),v_29754);


var G__29755 = seq__29737_29748;
var G__29756 = chunk__29738_29749;
var G__29757 = count__29739_29750;
var G__29758 = (i__29740_29751 + (1));
seq__29737_29748 = G__29755;
chunk__29738_29749 = G__29756;
count__29739_29750 = G__29757;
i__29740_29751 = G__29758;
continue;
} else {
var temp__5457__auto___29759 = cljs.core.seq(seq__29737_29748);
if(temp__5457__auto___29759){
var seq__29737_29763__$1 = temp__5457__auto___29759;
if(cljs.core.chunked_seq_QMARK_(seq__29737_29763__$1)){
var c__4319__auto___29764 = cljs.core.chunk_first(seq__29737_29763__$1);
var G__29767 = cljs.core.chunk_rest(seq__29737_29763__$1);
var G__29768 = c__4319__auto___29764;
var G__29769 = cljs.core.count(c__4319__auto___29764);
var G__29770 = (0);
seq__29737_29748 = G__29767;
chunk__29738_29749 = G__29768;
count__29739_29750 = G__29769;
i__29740_29751 = G__29770;
continue;
} else {
var vec__29745_29773 = cljs.core.first(seq__29737_29763__$1);
var k_29774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29745_29773,(0),null);
var v_29775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29745_29773,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_29774);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29774),v_29775);


var G__29782 = cljs.core.next(seq__29737_29763__$1);
var G__29783 = null;
var G__29784 = (0);
var G__29785 = (0);
seq__29737_29748 = G__29782;
chunk__29738_29749 = G__29783;
count__29739_29750 = G__29784;
i__29740_29751 = G__29785;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29797 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29797,(1),null);
var seq__29800_29819 = cljs.core.seq(node_children);
var chunk__29802_29820 = null;
var count__29803_29821 = (0);
var i__29804_29822 = (0);
while(true){
if((i__29804_29822 < count__29803_29821)){
var child_struct_29823 = chunk__29802_29820.cljs$core$IIndexed$_nth$arity$2(null,i__29804_29822);
if(!((child_struct_29823 == null))){
if(typeof child_struct_29823 === 'string'){
var text_29824 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29824),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29823)].join(''));
} else {
var children_29825 = shadow.dom.svg_node(child_struct_29823);
if(cljs.core.seq_QMARK_(children_29825)){
var seq__29806_29826 = cljs.core.seq(children_29825);
var chunk__29808_29827 = null;
var count__29809_29828 = (0);
var i__29810_29829 = (0);
while(true){
if((i__29810_29829 < count__29809_29828)){
var child_29830 = chunk__29808_29827.cljs$core$IIndexed$_nth$arity$2(null,i__29810_29829);
if(cljs.core.truth_(child_29830)){
node.appendChild(child_29830);


var G__29831 = seq__29806_29826;
var G__29832 = chunk__29808_29827;
var G__29833 = count__29809_29828;
var G__29834 = (i__29810_29829 + (1));
seq__29806_29826 = G__29831;
chunk__29808_29827 = G__29832;
count__29809_29828 = G__29833;
i__29810_29829 = G__29834;
continue;
} else {
var G__29835 = seq__29806_29826;
var G__29836 = chunk__29808_29827;
var G__29837 = count__29809_29828;
var G__29838 = (i__29810_29829 + (1));
seq__29806_29826 = G__29835;
chunk__29808_29827 = G__29836;
count__29809_29828 = G__29837;
i__29810_29829 = G__29838;
continue;
}
} else {
var temp__5457__auto___29839 = cljs.core.seq(seq__29806_29826);
if(temp__5457__auto___29839){
var seq__29806_29840__$1 = temp__5457__auto___29839;
if(cljs.core.chunked_seq_QMARK_(seq__29806_29840__$1)){
var c__4319__auto___29841 = cljs.core.chunk_first(seq__29806_29840__$1);
var G__29842 = cljs.core.chunk_rest(seq__29806_29840__$1);
var G__29843 = c__4319__auto___29841;
var G__29844 = cljs.core.count(c__4319__auto___29841);
var G__29845 = (0);
seq__29806_29826 = G__29842;
chunk__29808_29827 = G__29843;
count__29809_29828 = G__29844;
i__29810_29829 = G__29845;
continue;
} else {
var child_29846 = cljs.core.first(seq__29806_29840__$1);
if(cljs.core.truth_(child_29846)){
node.appendChild(child_29846);


var G__29847 = cljs.core.next(seq__29806_29840__$1);
var G__29848 = null;
var G__29849 = (0);
var G__29850 = (0);
seq__29806_29826 = G__29847;
chunk__29808_29827 = G__29848;
count__29809_29828 = G__29849;
i__29810_29829 = G__29850;
continue;
} else {
var G__29851 = cljs.core.next(seq__29806_29840__$1);
var G__29852 = null;
var G__29853 = (0);
var G__29854 = (0);
seq__29806_29826 = G__29851;
chunk__29808_29827 = G__29852;
count__29809_29828 = G__29853;
i__29810_29829 = G__29854;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29825);
}
}


var G__29855 = seq__29800_29819;
var G__29856 = chunk__29802_29820;
var G__29857 = count__29803_29821;
var G__29858 = (i__29804_29822 + (1));
seq__29800_29819 = G__29855;
chunk__29802_29820 = G__29856;
count__29803_29821 = G__29857;
i__29804_29822 = G__29858;
continue;
} else {
var G__29859 = seq__29800_29819;
var G__29860 = chunk__29802_29820;
var G__29861 = count__29803_29821;
var G__29862 = (i__29804_29822 + (1));
seq__29800_29819 = G__29859;
chunk__29802_29820 = G__29860;
count__29803_29821 = G__29861;
i__29804_29822 = G__29862;
continue;
}
} else {
var temp__5457__auto___29863 = cljs.core.seq(seq__29800_29819);
if(temp__5457__auto___29863){
var seq__29800_29864__$1 = temp__5457__auto___29863;
if(cljs.core.chunked_seq_QMARK_(seq__29800_29864__$1)){
var c__4319__auto___29865 = cljs.core.chunk_first(seq__29800_29864__$1);
var G__29866 = cljs.core.chunk_rest(seq__29800_29864__$1);
var G__29867 = c__4319__auto___29865;
var G__29868 = cljs.core.count(c__4319__auto___29865);
var G__29869 = (0);
seq__29800_29819 = G__29866;
chunk__29802_29820 = G__29867;
count__29803_29821 = G__29868;
i__29804_29822 = G__29869;
continue;
} else {
var child_struct_29870 = cljs.core.first(seq__29800_29864__$1);
if(!((child_struct_29870 == null))){
if(typeof child_struct_29870 === 'string'){
var text_29871 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_29871),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_29870)].join(''));
} else {
var children_29872 = shadow.dom.svg_node(child_struct_29870);
if(cljs.core.seq_QMARK_(children_29872)){
var seq__29812_29873 = cljs.core.seq(children_29872);
var chunk__29814_29874 = null;
var count__29815_29875 = (0);
var i__29816_29876 = (0);
while(true){
if((i__29816_29876 < count__29815_29875)){
var child_29877 = chunk__29814_29874.cljs$core$IIndexed$_nth$arity$2(null,i__29816_29876);
if(cljs.core.truth_(child_29877)){
node.appendChild(child_29877);


var G__29878 = seq__29812_29873;
var G__29879 = chunk__29814_29874;
var G__29880 = count__29815_29875;
var G__29881 = (i__29816_29876 + (1));
seq__29812_29873 = G__29878;
chunk__29814_29874 = G__29879;
count__29815_29875 = G__29880;
i__29816_29876 = G__29881;
continue;
} else {
var G__29882 = seq__29812_29873;
var G__29883 = chunk__29814_29874;
var G__29884 = count__29815_29875;
var G__29885 = (i__29816_29876 + (1));
seq__29812_29873 = G__29882;
chunk__29814_29874 = G__29883;
count__29815_29875 = G__29884;
i__29816_29876 = G__29885;
continue;
}
} else {
var temp__5457__auto___29886__$1 = cljs.core.seq(seq__29812_29873);
if(temp__5457__auto___29886__$1){
var seq__29812_29887__$1 = temp__5457__auto___29886__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29812_29887__$1)){
var c__4319__auto___29888 = cljs.core.chunk_first(seq__29812_29887__$1);
var G__29889 = cljs.core.chunk_rest(seq__29812_29887__$1);
var G__29890 = c__4319__auto___29888;
var G__29891 = cljs.core.count(c__4319__auto___29888);
var G__29892 = (0);
seq__29812_29873 = G__29889;
chunk__29814_29874 = G__29890;
count__29815_29875 = G__29891;
i__29816_29876 = G__29892;
continue;
} else {
var child_29893 = cljs.core.first(seq__29812_29887__$1);
if(cljs.core.truth_(child_29893)){
node.appendChild(child_29893);


var G__29894 = cljs.core.next(seq__29812_29887__$1);
var G__29895 = null;
var G__29896 = (0);
var G__29897 = (0);
seq__29812_29873 = G__29894;
chunk__29814_29874 = G__29895;
count__29815_29875 = G__29896;
i__29816_29876 = G__29897;
continue;
} else {
var G__29898 = cljs.core.next(seq__29812_29887__$1);
var G__29899 = null;
var G__29900 = (0);
var G__29901 = (0);
seq__29812_29873 = G__29898;
chunk__29814_29874 = G__29899;
count__29815_29875 = G__29900;
i__29816_29876 = G__29901;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_29872);
}
}


var G__29902 = cljs.core.next(seq__29800_29864__$1);
var G__29903 = null;
var G__29904 = (0);
var G__29905 = (0);
seq__29800_29819 = G__29902;
chunk__29802_29820 = G__29903;
count__29803_29821 = G__29904;
i__29804_29822 = G__29905;
continue;
} else {
var G__29906 = cljs.core.next(seq__29800_29864__$1);
var G__29907 = null;
var G__29908 = (0);
var G__29909 = (0);
seq__29800_29819 = G__29906;
chunk__29802_29820 = G__29907;
count__29803_29821 = G__29908;
i__29804_29822 = G__29909;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__29910_29916 = shadow.dom._to_svg;
var G__29911_29917 = "string";
var G__29912_29918 = ((function (G__29910_29916,G__29911_29917){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__29910_29916,G__29911_29917))
;
goog.object.set(G__29910_29916,G__29911_29917,G__29912_29918);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__29913_29919 = shadow.dom._to_svg;
var G__29914_29920 = "null";
var G__29915_29921 = ((function (G__29913_29919,G__29914_29920){
return (function (_){
return null;
});})(G__29913_29919,G__29914_29920))
;
goog.object.set(G__29913_29919,G__29914_29920,G__29915_29921);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4500__auto__ = [];
var len__4497__auto___29924 = arguments.length;
var i__4498__auto___29925 = (0);
while(true){
if((i__4498__auto___29925 < len__4497__auto___29924)){
args__4500__auto__.push((arguments[i__4498__auto___29925]));

var G__29926 = (i__4498__auto___29925 + (1));
i__4498__auto___29925 = G__29926;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

shadow.dom.svg.cljs$lang$applyTo = (function (seq29922){
var G__29923 = cljs.core.first(seq29922);
var seq29922__$1 = cljs.core.next(seq29922);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__29923,seq29922__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__29928 = arguments.length;
switch (G__29928) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__29930_29951 = shadow.dom.dom_node(el);
var G__29931_29952 = cljs.core.name(event);
var G__29932_29953 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__29930_29951,G__29931_29952,G__29932_29953) : shadow.dom.dom_listen.call(null,G__29930_29951,G__29931_29952,G__29932_29953));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__25452__auto___29954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___29954,buf,chan,event_fn){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___29954,buf,chan,event_fn){
return (function (state_29937){
var state_val_29938 = (state_29937[(1)]);
if((state_val_29938 === (1))){
var state_29937__$1 = state_29937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29937__$1,(2),once_or_cleanup);
} else {
if((state_val_29938 === (2))){
var inst_29934 = (state_29937[(2)]);
var inst_29935 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_29937__$1 = (function (){var statearr_29944 = state_29937;
(statearr_29944[(7)] = inst_29934);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29937__$1,inst_29935);
} else {
return null;
}
}
});})(c__25452__auto___29954,buf,chan,event_fn))
;
return ((function (switch__25230__auto__,c__25452__auto___29954,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__25231__auto__ = null;
var shadow$dom$state_machine__25231__auto____0 = (function (){
var statearr_29945 = [null,null,null,null,null,null,null,null];
(statearr_29945[(0)] = shadow$dom$state_machine__25231__auto__);

(statearr_29945[(1)] = (1));

return statearr_29945;
});
var shadow$dom$state_machine__25231__auto____1 = (function (state_29937){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_29937);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e29946){if((e29946 instanceof Object)){
var ex__25234__auto__ = e29946;
var statearr_29947_29956 = state_29937;
(statearr_29947_29956[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29964 = state_29937;
state_29937 = G__29964;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
shadow$dom$state_machine__25231__auto__ = function(state_29937){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__25231__auto____0.call(this);
case 1:
return shadow$dom$state_machine__25231__auto____1.call(this,state_29937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__25231__auto____0;
shadow$dom$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__25231__auto____1;
return shadow$dom$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___29954,buf,chan,event_fn))
})();
var state__25454__auto__ = (function (){var statearr_29949 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_29949[(6)] = c__25452__auto___29954);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___29954,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
