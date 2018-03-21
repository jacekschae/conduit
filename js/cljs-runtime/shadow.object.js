goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.core.async.impl.protocols');
goog.require('shadow.util');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

shadow.object._id = (function shadow$object$_id(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_id$arity$1 == null))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.object._id[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.object._id["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
}
});

shadow.object._type = (function shadow$object$_type(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_type$arity$1 == null))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.object._type[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.object._type["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
}
});

shadow.object._data = (function shadow$object$_data(this$){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_data$arity$1 == null))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.object._data[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.object._data["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
}
});

/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_update$arity$2 == null))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.object._update[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4212__auto__.call(null,this$,update_fn));
} else {
var m__4212__auto____$1 = (shadow.object._update["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4212__auto____$1.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
}
});

shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if(((!((this$ == null))) && (!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4212__auto__.call(null,this$,cause));
} else {
var m__4212__auto____$1 = (shadow.object._destroy_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4212__auto____$1.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__30426 = arguments.length;
switch (G__30426) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});

shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});

shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3;

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__3922__auto__ = ((!((obj_or_dom == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if(((!((obj == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if(((!((obj_or_dom == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5457__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5457__auto__)){
var oid = temp__5457__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5457__auto__)){
var parent_id = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__30444 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__30444;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parent_id,child_ids,instances){
return (function (p1__30445_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__30445_SHARP_);
});})(parent_id,child_ids,instances))
,child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__30452 = arguments.length;
switch (G__30452) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
});

shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});

shadow.object.tree_seq.cljs$lang$maxFixedArity = 2;

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__30470_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__30470_SHARP_));
});})(type_kw))
,shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__30475){
var map__30476 = p__30475;
var map__30476__$1 = ((((!((map__30476 == null)))?(((((map__30476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30476):map__30476);
var oref = map__30476__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30476__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__30483 = arguments.length;
switch (G__30483) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});

shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (type_kw){
return (function (p1__30480_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__30480_SHARP_));
});})(type_kw))
,shadow.object.get_siblings(oref));
});

shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2;

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5455__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5455__auto__)){
var obj = temp__5455__auto__;
return obj;
} else {
var temp__5457__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5457__auto__)){
var parent = temp__5457__auto__;
var G__30527 = parent;
dom = G__30527;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30558 = arguments.length;
var i__4498__auto___30559 = (0);
while(true){
if((i__4498__auto___30559 < len__4497__auto___30558)){
args__4500__auto__.push((arguments[i__4498__auto___30559]));

var G__30562 = (i__4498__auto___30559 + (1));
i__4498__auto___30559 = G__30562;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5457__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5457__auto__)){
var reactions_to_trigger = temp__5457__auto__;
var seq__30546 = cljs.core.seq(reactions_to_trigger);
var chunk__30547 = null;
var count__30548 = (0);
var i__30549 = (0);
while(true){
if((i__30549 < count__30548)){
var rfn = chunk__30547.cljs$core$IIndexed$_nth$arity$2(null,i__30549);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__30565 = seq__30546;
var G__30566 = chunk__30547;
var G__30567 = count__30548;
var G__30568 = (i__30549 + (1));
seq__30546 = G__30565;
chunk__30547 = G__30566;
count__30548 = G__30567;
i__30549 = G__30568;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__30546);
if(temp__5457__auto____$1){
var seq__30546__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30546__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30546__$1);
var G__30575 = cljs.core.chunk_rest(seq__30546__$1);
var G__30576 = c__4319__auto__;
var G__30577 = cljs.core.count(c__4319__auto__);
var G__30578 = (0);
seq__30546 = G__30575;
chunk__30547 = G__30576;
count__30548 = G__30577;
i__30549 = G__30578;
continue;
} else {
var rfn = cljs.core.first(seq__30546__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__30579 = cljs.core.next(seq__30546__$1);
var G__30580 = null;
var G__30581 = (0);
var G__30582 = (0);
seq__30546 = G__30579;
chunk__30547 = G__30580;
count__30548 = G__30581;
i__30549 = G__30582;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq30528){
var G__30529 = cljs.core.first(seq30528);
var seq30528__$1 = cljs.core.next(seq30528);
var G__30530 = cljs.core.first(seq30528__$1);
var seq30528__$2 = cljs.core.next(seq30528__$1);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30529,G__30530,seq30528__$2);
});

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__30583_30589 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__30584_30590 = null;
var count__30585_30591 = (0);
var i__30586_30592 = (0);
while(true){
if((i__30586_30592 < count__30585_30591)){
var child_30593 = chunk__30584_30590.cljs$core$IIndexed$_nth$arity$2(null,i__30586_30592);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_30593,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_30593,ev,notify_fn));


var G__30594 = seq__30583_30589;
var G__30595 = chunk__30584_30590;
var G__30596 = count__30585_30591;
var G__30597 = (i__30586_30592 + (1));
seq__30583_30589 = G__30594;
chunk__30584_30590 = G__30595;
count__30585_30591 = G__30596;
i__30586_30592 = G__30597;
continue;
} else {
var temp__5457__auto___30598 = cljs.core.seq(seq__30583_30589);
if(temp__5457__auto___30598){
var seq__30583_30599__$1 = temp__5457__auto___30598;
if(cljs.core.chunked_seq_QMARK_(seq__30583_30599__$1)){
var c__4319__auto___30600 = cljs.core.chunk_first(seq__30583_30599__$1);
var G__30601 = cljs.core.chunk_rest(seq__30583_30599__$1);
var G__30602 = c__4319__auto___30600;
var G__30603 = cljs.core.count(c__4319__auto___30600);
var G__30604 = (0);
seq__30583_30589 = G__30601;
chunk__30584_30590 = G__30602;
count__30585_30591 = G__30603;
i__30586_30592 = G__30604;
continue;
} else {
var child_30605 = cljs.core.first(seq__30583_30599__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_30605,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_30605,ev,notify_fn));


var G__30606 = cljs.core.next(seq__30583_30599__$1);
var G__30607 = null;
var G__30608 = (0);
var G__30609 = (0);
seq__30583_30589 = G__30606;
chunk__30584_30590 = G__30607;
count__30585_30591 = G__30608;
i__30586_30592 = G__30609;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30623 = arguments.length;
var i__4498__auto___30624 = (0);
while(true){
if((i__4498__auto___30624 < len__4497__auto___30623)){
args__4500__auto__.push((arguments[i__4498__auto___30624]));

var G__30625 = (i__4498__auto___30624 + (1));
i__4498__auto___30624 = G__30625;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
});

shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq30610){
var G__30611 = cljs.core.first(seq30610);
var seq30610__$1 = cljs.core.next(seq30610);
var G__30612 = cljs.core.first(seq30610__$1);
var seq30610__$2 = cljs.core.next(seq30610__$1);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30611,G__30612,seq30610__$2);
});

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30631 = arguments.length;
var i__4498__auto___30633 = (0);
while(true){
if((i__4498__auto___30633 < len__4497__auto___30631)){
args__4500__auto__.push((arguments[i__4498__auto___30633]));

var G__30634 = (i__4498__auto___30633 + (1));
i__4498__auto___30633 = G__30634;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__30635 = shadow.object.get_parent(current);
current = G__30635;
continue;
} else {
return null;
}
break;
}
});

shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq30626){
var G__30627 = cljs.core.first(seq30626);
var seq30626__$1 = cljs.core.next(seq30626);
var G__30628 = cljs.core.first(seq30626__$1);
var seq30626__$2 = cljs.core.next(seq30626__$1);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30627,G__30628,seq30626__$2);
});

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30642 = arguments.length;
var i__4498__auto___30643 = (0);
while(true){
if((i__4498__auto___30643 < len__4497__auto___30642)){
args__4500__auto__.push((arguments[i__4498__auto___30643]));

var G__30644 = (i__4498__auto___30643 + (1));
i__4498__auto___30643 = G__30644;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0)))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = ((function (id,data){
return (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;
return shadow.object._update(oref,work_fn);
});

shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2);

shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq30639){
var G__30640 = cljs.core.first(seq30639);
var seq30639__$1 = cljs.core.next(seq30639);
var G__30641 = cljs.core.first(seq30639__$1);
var seq30639__$2 = cljs.core.next(seq30639__$1);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30640,G__30641,seq30639__$2);
});

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,((function (child_id,parent_id){
return (function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
});})(child_id,parent_id))
);

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5455__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5455__auto__)){
var custom_remove = temp__5455__auto__;
var G__30659 = this$;
var G__30660 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__30659,G__30660) : custom_remove.call(null,G__30659,G__30660));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__30662 = arguments.length;
switch (G__30662) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
});

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
});

shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2;

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__30664 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__30665 = null;
var count__30666 = (0);
var i__30667 = (0);
while(true){
if((i__30667 < count__30666)){
var vec__30671 = chunk__30665.cljs$core$IIndexed$_nth$arity$2(null,i__30667);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30671,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30671,(1),null);
var ev_def = vec__30671;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_30687__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__30664,chunk__30665,count__30666,i__30667,vec__30671,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__30664,chunk__30665,count__30666,i__30667,vec__30671,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__30664,chunk__30665,count__30666,i__30667,handler_30687__$1,vec__30671,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_30687__$1.cljs$core$IFn$_invoke$arity$3 ? handler_30687__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_30687__$1.call(null,oref,e,el));
});})(seq__30664,chunk__30665,count__30666,i__30667,handler_30687__$1,vec__30671,ev,handler,ev_def))
);


var G__30690 = seq__30664;
var G__30691 = chunk__30665;
var G__30692 = count__30666;
var G__30693 = (i__30667 + (1));
seq__30664 = G__30690;
chunk__30665 = G__30691;
count__30666 = G__30692;
i__30667 = G__30693;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30664);
if(temp__5457__auto__){
var seq__30664__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30664__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30664__$1);
var G__30697 = cljs.core.chunk_rest(seq__30664__$1);
var G__30698 = c__4319__auto__;
var G__30699 = cljs.core.count(c__4319__auto__);
var G__30700 = (0);
seq__30664 = G__30697;
chunk__30665 = G__30698;
count__30666 = G__30699;
i__30667 = G__30700;
continue;
} else {
var vec__30684 = cljs.core.first(seq__30664__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30684,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30684,(1),null);
var ev_def = vec__30684;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0)))].join('');
} else {
}

var handler_30701__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__30664,chunk__30665,count__30666,i__30667,vec__30684,ev,handler,ev_def,seq__30664__$1,temp__5457__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__30664,chunk__30665,count__30666,i__30667,vec__30684,ev,handler,ev_def,seq__30664__$1,temp__5457__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__30664,chunk__30665,count__30666,i__30667,handler_30701__$1,vec__30684,ev,handler,ev_def,seq__30664__$1,temp__5457__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_30701__$1.cljs$core$IFn$_invoke$arity$3 ? handler_30701__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_30701__$1.call(null,oref,e,el));
});})(seq__30664,chunk__30665,count__30666,i__30667,handler_30701__$1,vec__30684,ev,handler,ev_def,seq__30664__$1,temp__5457__auto__))
);


var G__30702 = cljs.core.next(seq__30664__$1);
var G__30703 = null;
var G__30704 = (0);
var G__30705 = (0);
seq__30664 = G__30702;
chunk__30665 = G__30703;
count__30666 = G__30704;
i__30667 = G__30705;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__30706){
var vec__30707 = p__30706;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30707,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30707,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = event;
if(cljs.core.truth_(and__3911__auto__)){
return handler;
} else {
return and__3911__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30747 = arguments.length;
var i__4498__auto___30748 = (0);
while(true){
if((i__4498__auto___30748 < len__4497__auto___30747)){
args__4500__auto__.push((arguments[i__4498__auto___30748]));

var G__30749 = (i__4498__auto___30748 + (1));
i__4498__auto___30748 = G__30749;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))," args: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e30741){if((e30741 instanceof Object)){
var e = e30741;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e30741;

}
}});

shadow.object.define.cljs$lang$maxFixedArity = (1);

shadow.object.define.cljs$lang$applyTo = (function (seq30734){
var G__30735 = cljs.core.first(seq30734);
var seq30734__$1 = cljs.core.next(seq30734);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(G__30735,seq30734__$1);
});

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__30773 = arguments.length;
switch (G__30773) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});

shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__30784 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__30784) : shadow.dom.build.call(null,G__30784));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
});

shadow.object.make_dom.cljs$lang$maxFixedArity = 4;

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10589__auto__,k__10590__auto__){
var self__ = this;
var this__10589__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__10589__auto____$1,k__10590__auto__,null);
});

shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10591__auto__,k30789,else__10592__auto__){
var self__ = this;
var this__10591__auto____$1 = this;
var G__30805 = k30789;
var G__30805__$1 = (((G__30805 instanceof cljs.core.Keyword))?G__30805.fqn:null);
switch (G__30805__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30789,else__10592__auto__);

}
});

shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10603__auto__,writer__10604__auto__,opts__10605__auto__){
var self__ = this;
var this__10603__auto____$1 = this;
var pr_pair__10606__auto__ = ((function (this__10603__auto____$1){
return (function (keyval__10607__auto__){
return cljs.core.pr_sequential_writer(writer__10604__auto__,cljs.core.pr_writer,""," ","",opts__10605__auto__,keyval__10607__auto__);
});})(this__10603__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__10604__auto__,pr_pair__10606__auto__,"#shadow.object.Watch{",", ","}",opts__10605__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30788){
var self__ = this;
var G__30788__$1 = this;
return (new cljs.core.RecordIter((0),G__30788__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10587__auto__){
var self__ = this;
var this__10587__auto____$1 = this;
return self__.__meta;
});

shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10584__auto__){
var self__ = this;
var this__10584__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10593__auto__){
var self__ = this;
var this__10593__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10585__auto__){
var self__ = this;
var this__10585__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__30818 = ((function (h__4030__auto__,this__10585__auto____$1){
return (function (coll__10586__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__10586__auto__));
});})(h__4030__auto__,this__10585__auto____$1))
;
return fexpr__30818(this__10585__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30790,other30791){
var self__ = this;
var this30790__$1 = this;
return ((!((other30791 == null))) && ((this30790__$1.constructor === other30791.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30790__$1.key,other30791.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30790__$1.handler,other30791.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30790__$1.__extmap,other30791.__extmap)));
});

shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10598__auto__,k__10599__auto__){
var self__ = this;
var this__10598__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__10599__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__10598__auto____$1),self__.__meta),k__10599__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__10599__auto__)),null));
}
});

shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10596__auto__,k__10597__auto__,G__30788){
var self__ = this;
var this__10596__auto____$1 = this;
var pred__30819 = cljs.core.keyword_identical_QMARK_;
var expr__30820 = k__10597__auto__;
if(cljs.core.truth_((function (){var G__30822 = new cljs.core.Keyword(null,"key","key",-1516042587);
var G__30823 = expr__30820;
return (pred__30819.cljs$core$IFn$_invoke$arity$2 ? pred__30819.cljs$core$IFn$_invoke$arity$2(G__30822,G__30823) : pred__30819.call(null,G__30822,G__30823));
})())){
return (new shadow.object.Watch(G__30788,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30824 = new cljs.core.Keyword(null,"handler","handler",-195596612);
var G__30825 = expr__30820;
return (pred__30819.cljs$core$IFn$_invoke$arity$2 ? pred__30819.cljs$core$IFn$_invoke$arity$2(G__30824,G__30825) : pred__30819.call(null,G__30824,G__30825));
})())){
return (new shadow.object.Watch(self__.key,G__30788,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__10597__auto__,G__30788),null));
}
}
});

shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10601__auto__){
var self__ = this;
var this__10601__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
});

shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10588__auto__,G__30788){
var self__ = this;
var this__10588__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__30788,self__.__extmap,self__.__hash));
});

shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10594__auto__,entry__10595__auto__){
var self__ = this;
var this__10594__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__10595__auto__)){
return cljs.core._assoc(this__10594__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__10595__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__10594__auto____$1,entry__10595__auto__);
}
});

shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
});

shadow.object.Watch.cljs$lang$type = true;

shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
});

shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.object/Watch");
});

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__30796){
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__30796),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__30796),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30796,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
});

shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});

shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});

shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
});

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(this$__$1),shadow.object._id(other))));
});

shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null)));
});

shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__30836_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__30836_SHARP_));
});})(this$__$1))
,self__.watches);
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL;

shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
self__.data = new$;

var seq__30848 = cljs.core.seq(self__.watches);
var chunk__30849 = null;
var count__30850 = (0);
var i__30851 = (0);
while(true){
if((i__30851 < count__30850)){
var map__30852 = chunk__30849.cljs$core$IIndexed$_nth$arity$2(null,i__30851);
var map__30852__$1 = ((((!((map__30852 == null)))?(((((map__30852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30852):map__30852);
var watch = map__30852__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30852__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30852__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__30877 = seq__30848;
var G__30878 = chunk__30849;
var G__30879 = count__30850;
var G__30880 = (i__30851 + (1));
seq__30848 = G__30877;
chunk__30849 = G__30878;
count__30850 = G__30879;
i__30851 = G__30880;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30848);
if(temp__5457__auto__){
var seq__30848__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30848__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30848__$1);
var G__30881 = cljs.core.chunk_rest(seq__30848__$1);
var G__30882 = c__4319__auto__;
var G__30883 = cljs.core.count(c__4319__auto__);
var G__30884 = (0);
seq__30848 = G__30881;
chunk__30849 = G__30882;
count__30850 = G__30883;
i__30851 = G__30884;
continue;
} else {
var map__30854 = cljs.core.first(seq__30848__$1);
var map__30854__$1 = ((((!((map__30854 == null)))?(((((map__30854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30854):map__30854);
var watch = map__30854__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30854__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30854__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(shadow.object.alive_QMARK_(this$__$1))){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__30885 = cljs.core.next(seq__30848__$1);
var G__30886 = null;
var G__30887 = (0);
var G__30888 = (0);
seq__30848 = G__30885;
chunk__30849 = G__30886;
count__30850 = G__30887;
i__30851 = G__30888;
continue;
}
} else {
return null;
}
}
break;
}
});

shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__30856_30890 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__30857_30891 = null;
var count__30858_30892 = (0);
var i__30859_30893 = (0);
while(true){
if((i__30859_30893 < count__30858_30892)){
var child_30894 = chunk__30857_30891.cljs$core$IIndexed$_nth$arity$2(null,i__30859_30893);
shadow.object._destroy_BANG_(child_30894,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__30895 = seq__30856_30890;
var G__30896 = chunk__30857_30891;
var G__30897 = count__30858_30892;
var G__30898 = (i__30859_30893 + (1));
seq__30856_30890 = G__30895;
chunk__30857_30891 = G__30896;
count__30858_30892 = G__30897;
i__30859_30893 = G__30898;
continue;
} else {
var temp__5457__auto___30899 = cljs.core.seq(seq__30856_30890);
if(temp__5457__auto___30899){
var seq__30856_30900__$1 = temp__5457__auto___30899;
if(cljs.core.chunked_seq_QMARK_(seq__30856_30900__$1)){
var c__4319__auto___30901 = cljs.core.chunk_first(seq__30856_30900__$1);
var G__30902 = cljs.core.chunk_rest(seq__30856_30900__$1);
var G__30903 = c__4319__auto___30901;
var G__30904 = cljs.core.count(c__4319__auto___30901);
var G__30905 = (0);
seq__30856_30890 = G__30902;
chunk__30857_30891 = G__30903;
count__30858_30892 = G__30904;
i__30859_30893 = G__30905;
continue;
} else {
var child_30907 = cljs.core.first(seq__30856_30900__$1);
shadow.object._destroy_BANG_(child_30907,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__30908 = cljs.core.next(seq__30856_30900__$1);
var G__30909 = null;
var G__30910 = (0);
var G__30911 = (0);
seq__30856_30890 = G__30908;
chunk__30857_30891 = G__30909;
count__30858_30892 = G__30910;
i__30859_30893 = G__30911;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_30912 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_30912 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_30912);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
});

shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
});

shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
});

shadow.object.ObjectRef.cljs$lang$type = true;

shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";

shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.object/ObjectRef");
});

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__30915 = arguments.length;
switch (G__30915) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});

shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
});

shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3;

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__30919 = arguments.length;
switch (G__30919) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if(((!((oref == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,((function (attr__$1){
return (function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
});})(attr__$1))
);
});

shadow.object.bind_change.cljs$lang$maxFixedArity = 4;

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4500__auto__ = [];
var len__4497__auto___30958 = arguments.length;
var i__4498__auto___30959 = (0);
while(true){
if((i__4498__auto___30959 < len__4497__auto___30958)){
args__4500__auto__.push((arguments[i__4498__auto___30959]));

var G__30960 = (i__4498__auto___30959 + (1));
i__4498__auto___30959 = G__30960;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((2) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4501__auto__);
});

shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_30969 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5455__auto___30973 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5455__auto___30973)){
var dom_30977 = temp__5455__auto___30973;
shadow.dom.set_data(dom_30977,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_30977,dom_events_30969);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_30977], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_30977], 0));
} else {
var temp__5457__auto___30999 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___30999)){
var dom_fn_31000 = temp__5457__auto___30999;
var dom_31001 = (function (){var G__30944 = (dom_fn_31000.cljs$core$IFn$_invoke$arity$2 ? dom_fn_31000.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_31000.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__30944) : shadow.dom.build.call(null,G__30944));
})();
shadow.dom.set_data(dom_31001,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_31001], 0));

shadow.object.bind_dom_events(oref,dom_31001,dom_events_30969);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_31001], 0));
} else {
}
}

var temp__5457__auto___31008 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5457__auto___31008)){
var watches_31009 = temp__5457__auto___31008;
var seq__30946_31010 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_31009));
var chunk__30947_31011 = null;
var count__30948_31012 = (0);
var i__30949_31013 = (0);
while(true){
if((i__30949_31013 < count__30948_31012)){
var vec__30950_31017 = chunk__30947_31011.cljs$core$IIndexed$_nth$arity$2(null,i__30949_31013);
var attr_31018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30950_31017,(0),null);
var handler_31019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30950_31017,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_31018,((function (seq__30946_31010,chunk__30947_31011,count__30948_31012,i__30949_31013,vec__30950_31017,attr_31018,handler_31019,watches_31009,temp__5457__auto___31008,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_31019.cljs$core$IFn$_invoke$arity$3 ? handler_31019.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_31019.call(null,oref,old,new$));
});})(seq__30946_31010,chunk__30947_31011,count__30948_31012,i__30949_31013,vec__30950_31017,attr_31018,handler_31019,watches_31009,temp__5457__auto___31008,oid,parent,result_chan,odef,obj,oref))
);


var G__31020 = seq__30946_31010;
var G__31021 = chunk__30947_31011;
var G__31022 = count__30948_31012;
var G__31023 = (i__30949_31013 + (1));
seq__30946_31010 = G__31020;
chunk__30947_31011 = G__31021;
count__30948_31012 = G__31022;
i__30949_31013 = G__31023;
continue;
} else {
var temp__5457__auto___31024__$1 = cljs.core.seq(seq__30946_31010);
if(temp__5457__auto___31024__$1){
var seq__30946_31025__$1 = temp__5457__auto___31024__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30946_31025__$1)){
var c__4319__auto___31026 = cljs.core.chunk_first(seq__30946_31025__$1);
var G__31027 = cljs.core.chunk_rest(seq__30946_31025__$1);
var G__31028 = c__4319__auto___31026;
var G__31029 = cljs.core.count(c__4319__auto___31026);
var G__31030 = (0);
seq__30946_31010 = G__31027;
chunk__30947_31011 = G__31028;
count__30948_31012 = G__31029;
i__30949_31013 = G__31030;
continue;
} else {
var vec__30955_31031 = cljs.core.first(seq__30946_31025__$1);
var attr_31032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955_31031,(0),null);
var handler_31033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30955_31031,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_31032,((function (seq__30946_31010,chunk__30947_31011,count__30948_31012,i__30949_31013,vec__30955_31031,attr_31032,handler_31033,seq__30946_31025__$1,temp__5457__auto___31024__$1,watches_31009,temp__5457__auto___31008,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_31033.cljs$core$IFn$_invoke$arity$3 ? handler_31033.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_31033.call(null,oref,old,new$));
});})(seq__30946_31010,chunk__30947_31011,count__30948_31012,i__30949_31013,vec__30955_31031,attr_31032,handler_31033,seq__30946_31025__$1,temp__5457__auto___31024__$1,watches_31009,temp__5457__auto___31008,oid,parent,result_chan,odef,obj,oref))
);


var G__31034 = cljs.core.next(seq__30946_31025__$1);
var G__31035 = null;
var G__31036 = (0);
var G__31037 = (0);
seq__30946_31010 = G__31034;
chunk__30947_31011 = G__31035;
count__30948_31012 = G__31036;
i__30949_31013 = G__31037;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
});

shadow.object.create.cljs$lang$maxFixedArity = (2);

shadow.object.create.cljs$lang$applyTo = (function (seq30936){
var G__30937 = cljs.core.first(seq30936);
var seq30936__$1 = cljs.core.next(seq30936);
var G__30938 = cljs.core.first(seq30936__$1);
var seq30936__$2 = cljs.core.next(seq30936__$1);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic(G__30937,G__30938,seq30936__$2);
});

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__31040 = arguments.length;
switch (G__31040) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});

shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = ((function (attr__$1){
return (function (p1__31038_SHARP_){
var G__31041 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__31038_SHARP_) : node_gen.call(null,p1__31038_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__31041) : shadow.dom.build.call(null,G__31041));
});})(attr__$1))
;
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,node_get,node,bind_key){
return (function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
});})(attr__$1,node_get,node,bind_key))
);

return cljs.core.deref(node);
});

shadow.object.bind_simple.cljs$lang$maxFixedArity = 3;

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = ((function (attr__$1,curval){
return (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});})(attr__$1,curval))
;
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,((function (attr__$1,curval,make_child_fn,child){
return (function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

var G__31050 = new_child;
var G__31051 = new cljs.core.Keyword("dom","entered","dom/entered",506699596);
return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(G__31050,G__31051) : shadow.object.notify_down_BANG_.call(null,G__31050,G__31051));
});})(attr__$1,curval,make_child_fn,child))
);

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__31052_31056 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__31053_31057 = null;
var count__31054_31058 = (0);
var i__31055_31059 = (0);
while(true){
if((i__31055_31059 < count__31054_31058)){
var obj_31060 = chunk__31053_31057.cljs$core$IIndexed$_nth$arity$2(null,i__31055_31059);
var obj_31061__$1 = shadow.object.get_from_dom(obj_31060);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_31061__$1);


var G__31062 = seq__31052_31056;
var G__31063 = chunk__31053_31057;
var G__31064 = count__31054_31058;
var G__31065 = (i__31055_31059 + (1));
seq__31052_31056 = G__31062;
chunk__31053_31057 = G__31063;
count__31054_31058 = G__31064;
i__31055_31059 = G__31065;
continue;
} else {
var temp__5457__auto___31069 = cljs.core.seq(seq__31052_31056);
if(temp__5457__auto___31069){
var seq__31052_31070__$1 = temp__5457__auto___31069;
if(cljs.core.chunked_seq_QMARK_(seq__31052_31070__$1)){
var c__4319__auto___31072 = cljs.core.chunk_first(seq__31052_31070__$1);
var G__31073 = cljs.core.chunk_rest(seq__31052_31070__$1);
var G__31075 = c__4319__auto___31072;
var G__31078 = cljs.core.count(c__4319__auto___31072);
var G__31079 = (0);
seq__31052_31056 = G__31073;
chunk__31053_31057 = G__31075;
count__31054_31058 = G__31078;
i__31055_31059 = G__31079;
continue;
} else {
var obj_31080 = cljs.core.first(seq__31052_31070__$1);
var obj_31087__$1 = shadow.object.get_from_dom(obj_31080);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_31087__$1);


var G__31088 = cljs.core.next(seq__31052_31070__$1);
var G__31089 = null;
var G__31090 = (0);
var G__31091 = (0);
seq__31052_31056 = G__31088;
chunk__31053_31057 = G__31089;
count__31054_31058 = G__31090;
i__31055_31059 = G__31091;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__31094 = arguments.length;
switch (G__31094) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__31092_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__31092_SHARP_);
}));
});

shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__31096){
var vec__31097 = p__31096;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31097,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__31097,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__31097,key,val,attr__$1,update_children,coll_dom))
);

return obj;
});})(attr__$1,update_children,coll_dom))
;
var seq__31101_31123 = cljs.core.seq((function (){var G__31108 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__31108) : coll_transform.call(null,G__31108));
})());
var chunk__31102_31124 = null;
var count__31103_31125 = (0);
var i__31104_31126 = (0);
while(true){
if((i__31104_31126 < count__31103_31125)){
var item_31127 = chunk__31102_31124.cljs$core$IIndexed$_nth$arity$2(null,i__31104_31126);
shadow.object.dom_enter(coll_dom,make_item_fn(item_31127));


var G__31128 = seq__31101_31123;
var G__31129 = chunk__31102_31124;
var G__31130 = count__31103_31125;
var G__31131 = (i__31104_31126 + (1));
seq__31101_31123 = G__31128;
chunk__31102_31124 = G__31129;
count__31103_31125 = G__31130;
i__31104_31126 = G__31131;
continue;
} else {
var temp__5457__auto___31132 = cljs.core.seq(seq__31101_31123);
if(temp__5457__auto___31132){
var seq__31101_31133__$1 = temp__5457__auto___31132;
if(cljs.core.chunked_seq_QMARK_(seq__31101_31133__$1)){
var c__4319__auto___31134 = cljs.core.chunk_first(seq__31101_31133__$1);
var G__31135 = cljs.core.chunk_rest(seq__31101_31133__$1);
var G__31136 = c__4319__auto___31134;
var G__31137 = cljs.core.count(c__4319__auto___31134);
var G__31138 = (0);
seq__31101_31123 = G__31135;
chunk__31102_31124 = G__31136;
count__31103_31125 = G__31137;
i__31104_31126 = G__31138;
continue;
} else {
var item_31139 = cljs.core.first(seq__31101_31133__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_31139));


var G__31140 = cljs.core.next(seq__31101_31133__$1);
var G__31141 = null;
var G__31142 = (0);
var G__31143 = (0);
seq__31101_31123 = G__31140;
chunk__31102_31124 = G__31141;
count__31103_31125 = G__31142;
i__31104_31126 = G__31143;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,((function (attr__$1,update_children,coll_dom,make_item_fn){
return (function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4009__auto__ = count_new;
var y__4010__auto__ = count_children;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var n__4376__auto___31144 = count_children__$1;
var idx_31145 = (0);
while(true){
if((idx_31145 < n__4376__auto___31144)){
var cn_31146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_31145);
var cc_31147 = shadow.object.get_from_dom(cn_31146);
var ckey_31148 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_31147);
var cval_31149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_31147,item_key);
var vec__31112_31150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_31145);
var nkey_31151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112_31150,(0),null);
var nval_31152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31112_31150,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_31148,nkey_31151)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_31149,nval_31152)))){
} else {
var new_obj_31156 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_31151,nval_31152], null));
shadow.dom.replace_node(cn_31146,new_obj_31156);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_31147);

shadow.object.notify_tree_BANG_(new_obj_31156,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__31158 = (idx_31145 + (1));
idx_31145 = G__31158;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__31115_31161 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__31116_31162 = null;
var count__31117_31163 = (0);
var i__31118_31164 = (0);
while(true){
if((i__31118_31164 < count__31117_31163)){
var item_31166 = chunk__31116_31162.cljs$core$IIndexed$_nth$arity$2(null,i__31118_31164);
shadow.object.dom_enter(coll_dom,make_item_fn(item_31166));


var G__31169 = seq__31115_31161;
var G__31170 = chunk__31116_31162;
var G__31171 = count__31117_31163;
var G__31172 = (i__31118_31164 + (1));
seq__31115_31161 = G__31169;
chunk__31116_31162 = G__31170;
count__31117_31163 = G__31171;
i__31118_31164 = G__31172;
continue;
} else {
var temp__5457__auto___31174 = cljs.core.seq(seq__31115_31161);
if(temp__5457__auto___31174){
var seq__31115_31175__$1 = temp__5457__auto___31174;
if(cljs.core.chunked_seq_QMARK_(seq__31115_31175__$1)){
var c__4319__auto___31176 = cljs.core.chunk_first(seq__31115_31175__$1);
var G__31177 = cljs.core.chunk_rest(seq__31115_31175__$1);
var G__31178 = c__4319__auto___31176;
var G__31179 = cljs.core.count(c__4319__auto___31176);
var G__31180 = (0);
seq__31115_31161 = G__31177;
chunk__31116_31162 = G__31178;
count__31117_31163 = G__31179;
i__31118_31164 = G__31180;
continue;
} else {
var item_31181 = cljs.core.first(seq__31115_31175__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_31181));


var G__31182 = cljs.core.next(seq__31115_31175__$1);
var G__31183 = null;
var G__31184 = (0);
var G__31185 = (0);
seq__31115_31161 = G__31182;
chunk__31116_31162 = G__31183;
count__31117_31163 = G__31184;
i__31118_31164 = G__31185;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
});})(attr__$1,update_children,coll_dom,make_item_fn))
);

return coll_dom;
});

shadow.object.bind_children.cljs$lang$maxFixedArity = 6;

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__3911__auto__ = key;
if(cljs.core.truth_(and__3911__auto__)){
return path;
} else {
return and__3911__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__31186 = "inspect!";
var G__31187 = shadow.object._id(oref);
var G__31188 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref))].join('');
var G__31189 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__31186,G__31187,G__31188,G__31189) : shadow.object.info.call(null,G__31186,G__31187,G__31188,G__31189));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__31190_31208 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__31191_31209 = null;
var count__31192_31210 = (0);
var i__31193_31211 = (0);
while(true){
if((i__31193_31211 < count__31192_31210)){
var vec__31194_31212 = chunk__31191_31209.cljs$core$IIndexed$_nth$arity$2(null,i__31193_31211);
var id_31213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194_31212,(0),null);
var oref_31214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31194_31212,(1),null);
var G__31197_31215 = "dump";
var G__31198_31216 = id_31213;
var G__31199_31217 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_31214)], 0));
var G__31200_31218 = cljs.core.deref(shadow.object._data(oref_31214));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__31197_31215,G__31198_31216,G__31199_31217,G__31200_31218) : shadow.object.info.call(null,G__31197_31215,G__31198_31216,G__31199_31217,G__31200_31218));


var G__31219 = seq__31190_31208;
var G__31220 = chunk__31191_31209;
var G__31221 = count__31192_31210;
var G__31222 = (i__31193_31211 + (1));
seq__31190_31208 = G__31219;
chunk__31191_31209 = G__31220;
count__31192_31210 = G__31221;
i__31193_31211 = G__31222;
continue;
} else {
var temp__5457__auto___31223 = cljs.core.seq(seq__31190_31208);
if(temp__5457__auto___31223){
var seq__31190_31224__$1 = temp__5457__auto___31223;
if(cljs.core.chunked_seq_QMARK_(seq__31190_31224__$1)){
var c__4319__auto___31225 = cljs.core.chunk_first(seq__31190_31224__$1);
var G__31226 = cljs.core.chunk_rest(seq__31190_31224__$1);
var G__31227 = c__4319__auto___31225;
var G__31228 = cljs.core.count(c__4319__auto___31225);
var G__31229 = (0);
seq__31190_31208 = G__31226;
chunk__31191_31209 = G__31227;
count__31192_31210 = G__31228;
i__31193_31211 = G__31229;
continue;
} else {
var vec__31201_31230 = cljs.core.first(seq__31190_31224__$1);
var id_31231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201_31230,(0),null);
var oref_31232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31201_31230,(1),null);
var G__31204_31233 = "dump";
var G__31205_31234 = id_31231;
var G__31206_31235 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_31232)], 0));
var G__31207_31236 = cljs.core.deref(shadow.object._data(oref_31232));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__31204_31233,G__31205_31234,G__31206_31235,G__31207_31236) : shadow.object.info.call(null,G__31204_31233,G__31205_31234,G__31206_31235,G__31207_31236));


var G__31237 = cljs.core.next(seq__31190_31224__$1);
var G__31238 = null;
var G__31239 = (0);
var G__31240 = (0);
seq__31190_31208 = G__31237;
chunk__31191_31209 = G__31238;
count__31192_31210 = G__31239;
i__31193_31211 = G__31240;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
