goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25510 = arguments.length;
switch (G__25510) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25511 = (function (f,blockable,meta25512){
this.f = f;
this.blockable = blockable;
this.meta25512 = meta25512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25513,meta25512__$1){
var self__ = this;
var _25513__$1 = this;
return (new cljs.core.async.t_cljs$core$async25511(self__.f,self__.blockable,meta25512__$1));
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25513){
var self__ = this;
var _25513__$1 = this;
return self__.meta25512;
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25512","meta25512",-1001862809,null)], null);
});

cljs.core.async.t_cljs$core$async25511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25511";

cljs.core.async.t_cljs$core$async25511.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async25511");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25511.
 */
cljs.core.async.__GT_t_cljs$core$async25511 = (function cljs$core$async$__GT_t_cljs$core$async25511(f__$1,blockable__$1,meta25512){
return (new cljs.core.async.t_cljs$core$async25511(f__$1,blockable__$1,meta25512));
});

}

return (new cljs.core.async.t_cljs$core$async25511(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25517 = arguments.length;
switch (G__25517) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25520 = arguments.length;
switch (G__25520) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25524 = arguments.length;
switch (G__25524) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25531 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25531) : fn1.call(null,val_25531));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25531,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25531) : fn1.call(null,val_25531));
});})(val_25531,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25537 = arguments.length;
switch (G__25537) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___25567 = n;
var x_25568 = (0);
while(true){
if((x_25568 < n__4376__auto___25567)){
(a[x_25568] = (0));

var G__25569 = (x_25568 + (1));
x_25568 = G__25569;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__25570 = (i + (1));
i = G__25570;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async25573 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25573 = (function (flag,meta25574){
this.flag = flag;
this.meta25574 = meta25574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25575,meta25574__$1){
var self__ = this;
var _25575__$1 = this;
return (new cljs.core.async.t_cljs$core$async25573(self__.flag,meta25574__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25575){
var self__ = this;
var _25575__$1 = this;
return self__.meta25574;
});})(flag))
;

cljs.core.async.t_cljs$core$async25573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25573.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25574","meta25574",-1193000234,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25573";

cljs.core.async.t_cljs$core$async25573.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async25573");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25573.
 */
cljs.core.async.__GT_t_cljs$core$async25573 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25573(flag__$1,meta25574){
return (new cljs.core.async.t_cljs$core$async25573(flag__$1,meta25574));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25573(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25589 = (function (flag,cb,meta25590){
this.flag = flag;
this.cb = cb;
this.meta25590 = meta25590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25591,meta25590__$1){
var self__ = this;
var _25591__$1 = this;
return (new cljs.core.async.t_cljs$core$async25589(self__.flag,self__.cb,meta25590__$1));
});

cljs.core.async.t_cljs$core$async25589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25591){
var self__ = this;
var _25591__$1 = this;
return self__.meta25590;
});

cljs.core.async.t_cljs$core$async25589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async25589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25590","meta25590",-1371032561,null)], null);
});

cljs.core.async.t_cljs$core$async25589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25589";

cljs.core.async.t_cljs$core$async25589.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async25589");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25589.
 */
cljs.core.async.__GT_t_cljs$core$async25589 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25589(flag__$1,cb__$1,meta25590){
return (new cljs.core.async.t_cljs$core$async25589(flag__$1,cb__$1,meta25590));
});

}

return (new cljs.core.async.t_cljs$core$async25589(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25604_SHARP_){
var G__25611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25604_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25611) : fret.call(null,G__25611));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25605_SHARP_){
var G__25613 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25605_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25613) : fret.call(null,G__25613));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25621 = (i + (1));
i = G__25621;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___25633 = arguments.length;
var i__4498__auto___25634 = (0);
while(true){
if((i__4498__auto___25634 < len__4497__auto___25633)){
args__4500__auto__.push((arguments[i__4498__auto___25634]));

var G__25635 = (i__4498__auto___25634 + (1));
i__4498__auto___25634 = G__25635;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((1) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4501__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25629){
var map__25630 = p__25629;
var map__25630__$1 = ((((!((map__25630 == null)))?(((((map__25630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25630):map__25630);
var opts = map__25630__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25623){
var G__25625 = cljs.core.first(seq25623);
var seq25623__$1 = cljs.core.next(seq25623);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25625,seq25623__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25643 = arguments.length;
switch (G__25643) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25452__auto___25712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___25712){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___25712){
return (function (state_25667){
var state_val_25668 = (state_25667[(1)]);
if((state_val_25668 === (7))){
var inst_25663 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25686_25713 = state_25667__$1;
(statearr_25686_25713[(2)] = inst_25663);

(statearr_25686_25713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (1))){
var state_25667__$1 = state_25667;
var statearr_25690_25714 = state_25667__$1;
(statearr_25690_25714[(2)] = null);

(statearr_25690_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (4))){
var inst_25646 = (state_25667[(7)]);
var inst_25646__$1 = (state_25667[(2)]);
var inst_25647 = (inst_25646__$1 == null);
var state_25667__$1 = (function (){var statearr_25691 = state_25667;
(statearr_25691[(7)] = inst_25646__$1);

return statearr_25691;
})();
if(cljs.core.truth_(inst_25647)){
var statearr_25692_25715 = state_25667__$1;
(statearr_25692_25715[(1)] = (5));

} else {
var statearr_25693_25716 = state_25667__$1;
(statearr_25693_25716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (13))){
var state_25667__$1 = state_25667;
var statearr_25694_25717 = state_25667__$1;
(statearr_25694_25717[(2)] = null);

(statearr_25694_25717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (6))){
var inst_25646 = (state_25667[(7)]);
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25667__$1,(11),to,inst_25646);
} else {
if((state_val_25668 === (3))){
var inst_25665 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25667__$1,inst_25665);
} else {
if((state_val_25668 === (12))){
var state_25667__$1 = state_25667;
var statearr_25698_25718 = state_25667__$1;
(statearr_25698_25718[(2)] = null);

(statearr_25698_25718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (2))){
var state_25667__$1 = state_25667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25667__$1,(4),from);
} else {
if((state_val_25668 === (11))){
var inst_25656 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
if(cljs.core.truth_(inst_25656)){
var statearr_25699_25719 = state_25667__$1;
(statearr_25699_25719[(1)] = (12));

} else {
var statearr_25700_25720 = state_25667__$1;
(statearr_25700_25720[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (9))){
var state_25667__$1 = state_25667;
var statearr_25701_25721 = state_25667__$1;
(statearr_25701_25721[(2)] = null);

(statearr_25701_25721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (5))){
var state_25667__$1 = state_25667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25702_25722 = state_25667__$1;
(statearr_25702_25722[(1)] = (8));

} else {
var statearr_25703_25723 = state_25667__$1;
(statearr_25703_25723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (14))){
var inst_25661 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25704_25724 = state_25667__$1;
(statearr_25704_25724[(2)] = inst_25661);

(statearr_25704_25724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (10))){
var inst_25653 = (state_25667[(2)]);
var state_25667__$1 = state_25667;
var statearr_25705_25725 = state_25667__$1;
(statearr_25705_25725[(2)] = inst_25653);

(statearr_25705_25725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25668 === (8))){
var inst_25650 = cljs.core.async.close_BANG_(to);
var state_25667__$1 = state_25667;
var statearr_25706_25726 = state_25667__$1;
(statearr_25706_25726[(2)] = inst_25650);

(statearr_25706_25726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___25712))
;
return ((function (switch__25230__auto__,c__25452__auto___25712){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_25707 = [null,null,null,null,null,null,null,null];
(statearr_25707[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_25707[(1)] = (1));

return statearr_25707;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_25667){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_25667);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e25708){if((e25708 instanceof Object)){
var ex__25234__auto__ = e25708;
var statearr_25709_25727 = state_25667;
(statearr_25709_25727[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25728 = state_25667;
state_25667 = G__25728;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_25667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_25667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___25712))
})();
var state__25454__auto__ = (function (){var statearr_25710 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_25710[(6)] = c__25452__auto___25712);

return statearr_25710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___25712))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__25729){
var vec__25730 = p__25729;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25730,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25730,(1),null);
var job = vec__25730;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25452__auto___25901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___25901,res,vec__25730,v,p,job,jobs,results){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___25901,res,vec__25730,v,p,job,jobs,results){
return (function (state_25737){
var state_val_25738 = (state_25737[(1)]);
if((state_val_25738 === (1))){
var state_25737__$1 = state_25737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25737__$1,(2),res,v);
} else {
if((state_val_25738 === (2))){
var inst_25734 = (state_25737[(2)]);
var inst_25735 = cljs.core.async.close_BANG_(res);
var state_25737__$1 = (function (){var statearr_25739 = state_25737;
(statearr_25739[(7)] = inst_25734);

return statearr_25739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25737__$1,inst_25735);
} else {
return null;
}
}
});})(c__25452__auto___25901,res,vec__25730,v,p,job,jobs,results))
;
return ((function (switch__25230__auto__,c__25452__auto___25901,res,vec__25730,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0 = (function (){
var statearr_25740 = [null,null,null,null,null,null,null,null];
(statearr_25740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__);

(statearr_25740[(1)] = (1));

return statearr_25740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1 = (function (state_25737){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_25737);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e25741){if((e25741 instanceof Object)){
var ex__25234__auto__ = e25741;
var statearr_25742_25902 = state_25737;
(statearr_25742_25902[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25903 = state_25737;
state_25737 = G__25903;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = function(state_25737){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1.call(this,state_25737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___25901,res,vec__25730,v,p,job,jobs,results))
})();
var state__25454__auto__ = (function (){var statearr_25743 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_25743[(6)] = c__25452__auto___25901);

return statearr_25743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___25901,res,vec__25730,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25744){
var vec__25745 = p__25744;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25745,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25745,(1),null);
var job = vec__25745;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___25904 = n;
var __25905 = (0);
while(true){
if((__25905 < n__4376__auto___25904)){
var G__25748_25906 = type;
var G__25748_25907__$1 = (((G__25748_25906 instanceof cljs.core.Keyword))?G__25748_25906.fqn:null);
switch (G__25748_25907__$1) {
case "compute":
var c__25452__auto___25909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25905,c__25452__auto___25909,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (__25905,c__25452__auto___25909,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async){
return (function (state_25761){
var state_val_25762 = (state_25761[(1)]);
if((state_val_25762 === (1))){
var state_25761__$1 = state_25761;
var statearr_25763_25910 = state_25761__$1;
(statearr_25763_25910[(2)] = null);

(statearr_25763_25910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (2))){
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25761__$1,(4),jobs);
} else {
if((state_val_25762 === (3))){
var inst_25759 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25761__$1,inst_25759);
} else {
if((state_val_25762 === (4))){
var inst_25751 = (state_25761[(2)]);
var inst_25752 = process(inst_25751);
var state_25761__$1 = state_25761;
if(cljs.core.truth_(inst_25752)){
var statearr_25764_25911 = state_25761__$1;
(statearr_25764_25911[(1)] = (5));

} else {
var statearr_25765_25912 = state_25761__$1;
(statearr_25765_25912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (5))){
var state_25761__$1 = state_25761;
var statearr_25766_25913 = state_25761__$1;
(statearr_25766_25913[(2)] = null);

(statearr_25766_25913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (6))){
var state_25761__$1 = state_25761;
var statearr_25767_25914 = state_25761__$1;
(statearr_25767_25914[(2)] = null);

(statearr_25767_25914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25762 === (7))){
var inst_25757 = (state_25761[(2)]);
var state_25761__$1 = state_25761;
var statearr_25768_25915 = state_25761__$1;
(statearr_25768_25915[(2)] = inst_25757);

(statearr_25768_25915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25905,c__25452__auto___25909,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async))
;
return ((function (__25905,switch__25230__auto__,c__25452__auto___25909,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0 = (function (){
var statearr_25769 = [null,null,null,null,null,null,null];
(statearr_25769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__);

(statearr_25769[(1)] = (1));

return statearr_25769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1 = (function (state_25761){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_25761);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e25770){if((e25770 instanceof Object)){
var ex__25234__auto__ = e25770;
var statearr_25771_25916 = state_25761;
(statearr_25771_25916[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25917 = state_25761;
state_25761 = G__25917;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = function(state_25761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1.call(this,state_25761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__;
})()
;})(__25905,switch__25230__auto__,c__25452__auto___25909,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async))
})();
var state__25454__auto__ = (function (){var statearr_25772 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_25772[(6)] = c__25452__auto___25909);

return statearr_25772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(__25905,c__25452__auto___25909,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async))
);


break;
case "async":
var c__25452__auto___25918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__25905,c__25452__auto___25918,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (__25905,c__25452__auto___25918,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async){
return (function (state_25785){
var state_val_25786 = (state_25785[(1)]);
if((state_val_25786 === (1))){
var state_25785__$1 = state_25785;
var statearr_25787_25919 = state_25785__$1;
(statearr_25787_25919[(2)] = null);

(statearr_25787_25919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (2))){
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25785__$1,(4),jobs);
} else {
if((state_val_25786 === (3))){
var inst_25783 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25785__$1,inst_25783);
} else {
if((state_val_25786 === (4))){
var inst_25775 = (state_25785[(2)]);
var inst_25776 = async(inst_25775);
var state_25785__$1 = state_25785;
if(cljs.core.truth_(inst_25776)){
var statearr_25788_25920 = state_25785__$1;
(statearr_25788_25920[(1)] = (5));

} else {
var statearr_25789_25921 = state_25785__$1;
(statearr_25789_25921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (5))){
var state_25785__$1 = state_25785;
var statearr_25790_25922 = state_25785__$1;
(statearr_25790_25922[(2)] = null);

(statearr_25790_25922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (6))){
var state_25785__$1 = state_25785;
var statearr_25791_25923 = state_25785__$1;
(statearr_25791_25923[(2)] = null);

(statearr_25791_25923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25786 === (7))){
var inst_25781 = (state_25785[(2)]);
var state_25785__$1 = state_25785;
var statearr_25792_25924 = state_25785__$1;
(statearr_25792_25924[(2)] = inst_25781);

(statearr_25792_25924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25905,c__25452__auto___25918,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async))
;
return ((function (__25905,switch__25230__auto__,c__25452__auto___25918,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0 = (function (){
var statearr_25793 = [null,null,null,null,null,null,null];
(statearr_25793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__);

(statearr_25793[(1)] = (1));

return statearr_25793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1 = (function (state_25785){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_25785);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e25794){if((e25794 instanceof Object)){
var ex__25234__auto__ = e25794;
var statearr_25795_25925 = state_25785;
(statearr_25795_25925[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25926 = state_25785;
state_25785 = G__25926;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = function(state_25785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1.call(this,state_25785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__;
})()
;})(__25905,switch__25230__auto__,c__25452__auto___25918,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async))
})();
var state__25454__auto__ = (function (){var statearr_25796 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_25796[(6)] = c__25452__auto___25918);

return statearr_25796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(__25905,c__25452__auto___25918,G__25748_25906,G__25748_25907__$1,n__4376__auto___25904,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25748_25907__$1)].join('')));

}

var G__25927 = (__25905 + (1));
__25905 = G__25927;
continue;
} else {
}
break;
}

var c__25452__auto___25928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___25928,jobs,results,process,async){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___25928,jobs,results,process,async){
return (function (state_25818){
var state_val_25819 = (state_25818[(1)]);
if((state_val_25819 === (1))){
var state_25818__$1 = state_25818;
var statearr_25820_25929 = state_25818__$1;
(statearr_25820_25929[(2)] = null);

(statearr_25820_25929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (2))){
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25818__$1,(4),from);
} else {
if((state_val_25819 === (3))){
var inst_25816 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25818__$1,inst_25816);
} else {
if((state_val_25819 === (4))){
var inst_25799 = (state_25818[(7)]);
var inst_25799__$1 = (state_25818[(2)]);
var inst_25800 = (inst_25799__$1 == null);
var state_25818__$1 = (function (){var statearr_25821 = state_25818;
(statearr_25821[(7)] = inst_25799__$1);

return statearr_25821;
})();
if(cljs.core.truth_(inst_25800)){
var statearr_25822_25930 = state_25818__$1;
(statearr_25822_25930[(1)] = (5));

} else {
var statearr_25823_25931 = state_25818__$1;
(statearr_25823_25931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (5))){
var inst_25802 = cljs.core.async.close_BANG_(jobs);
var state_25818__$1 = state_25818;
var statearr_25824_25932 = state_25818__$1;
(statearr_25824_25932[(2)] = inst_25802);

(statearr_25824_25932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (6))){
var inst_25804 = (state_25818[(8)]);
var inst_25799 = (state_25818[(7)]);
var inst_25804__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25806 = [inst_25799,inst_25804__$1];
var inst_25807 = (new cljs.core.PersistentVector(null,2,(5),inst_25805,inst_25806,null));
var state_25818__$1 = (function (){var statearr_25825 = state_25818;
(statearr_25825[(8)] = inst_25804__$1);

return statearr_25825;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25818__$1,(8),jobs,inst_25807);
} else {
if((state_val_25819 === (7))){
var inst_25814 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25826_25933 = state_25818__$1;
(statearr_25826_25933[(2)] = inst_25814);

(statearr_25826_25933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (8))){
var inst_25804 = (state_25818[(8)]);
var inst_25809 = (state_25818[(2)]);
var state_25818__$1 = (function (){var statearr_25827 = state_25818;
(statearr_25827[(9)] = inst_25809);

return statearr_25827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25818__$1,(9),results,inst_25804);
} else {
if((state_val_25819 === (9))){
var inst_25811 = (state_25818[(2)]);
var state_25818__$1 = (function (){var statearr_25828 = state_25818;
(statearr_25828[(10)] = inst_25811);

return statearr_25828;
})();
var statearr_25829_25934 = state_25818__$1;
(statearr_25829_25934[(2)] = null);

(statearr_25829_25934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___25928,jobs,results,process,async))
;
return ((function (switch__25230__auto__,c__25452__auto___25928,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0 = (function (){
var statearr_25830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__);

(statearr_25830[(1)] = (1));

return statearr_25830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1 = (function (state_25818){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_25818);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object)){
var ex__25234__auto__ = e25831;
var statearr_25832_25935 = state_25818;
(statearr_25832_25935[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25831;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25936 = state_25818;
state_25818 = G__25936;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = function(state_25818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1.call(this,state_25818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___25928,jobs,results,process,async))
})();
var state__25454__auto__ = (function (){var statearr_25833 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_25833[(6)] = c__25452__auto___25928);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___25928,jobs,results,process,async))
);


var c__25452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto__,jobs,results,process,async){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto__,jobs,results,process,async){
return (function (state_25871){
var state_val_25872 = (state_25871[(1)]);
if((state_val_25872 === (7))){
var inst_25867 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
var statearr_25873_25937 = state_25871__$1;
(statearr_25873_25937[(2)] = inst_25867);

(statearr_25873_25937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (20))){
var state_25871__$1 = state_25871;
var statearr_25874_25938 = state_25871__$1;
(statearr_25874_25938[(2)] = null);

(statearr_25874_25938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (1))){
var state_25871__$1 = state_25871;
var statearr_25875_25939 = state_25871__$1;
(statearr_25875_25939[(2)] = null);

(statearr_25875_25939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (4))){
var inst_25836 = (state_25871[(7)]);
var inst_25836__$1 = (state_25871[(2)]);
var inst_25837 = (inst_25836__$1 == null);
var state_25871__$1 = (function (){var statearr_25876 = state_25871;
(statearr_25876[(7)] = inst_25836__$1);

return statearr_25876;
})();
if(cljs.core.truth_(inst_25837)){
var statearr_25877_25940 = state_25871__$1;
(statearr_25877_25940[(1)] = (5));

} else {
var statearr_25878_25941 = state_25871__$1;
(statearr_25878_25941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (15))){
var inst_25849 = (state_25871[(8)]);
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25871__$1,(18),to,inst_25849);
} else {
if((state_val_25872 === (21))){
var inst_25862 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
var statearr_25879_25942 = state_25871__$1;
(statearr_25879_25942[(2)] = inst_25862);

(statearr_25879_25942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (13))){
var inst_25864 = (state_25871[(2)]);
var state_25871__$1 = (function (){var statearr_25880 = state_25871;
(statearr_25880[(9)] = inst_25864);

return statearr_25880;
})();
var statearr_25881_25943 = state_25871__$1;
(statearr_25881_25943[(2)] = null);

(statearr_25881_25943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (6))){
var inst_25836 = (state_25871[(7)]);
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25871__$1,(11),inst_25836);
} else {
if((state_val_25872 === (17))){
var inst_25857 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
if(cljs.core.truth_(inst_25857)){
var statearr_25882_25944 = state_25871__$1;
(statearr_25882_25944[(1)] = (19));

} else {
var statearr_25883_25945 = state_25871__$1;
(statearr_25883_25945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (3))){
var inst_25869 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25871__$1,inst_25869);
} else {
if((state_val_25872 === (12))){
var inst_25846 = (state_25871[(10)]);
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25871__$1,(14),inst_25846);
} else {
if((state_val_25872 === (2))){
var state_25871__$1 = state_25871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25871__$1,(4),results);
} else {
if((state_val_25872 === (19))){
var state_25871__$1 = state_25871;
var statearr_25884_25946 = state_25871__$1;
(statearr_25884_25946[(2)] = null);

(statearr_25884_25946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (11))){
var inst_25846 = (state_25871[(2)]);
var state_25871__$1 = (function (){var statearr_25885 = state_25871;
(statearr_25885[(10)] = inst_25846);

return statearr_25885;
})();
var statearr_25886_25947 = state_25871__$1;
(statearr_25886_25947[(2)] = null);

(statearr_25886_25947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (9))){
var state_25871__$1 = state_25871;
var statearr_25887_25952 = state_25871__$1;
(statearr_25887_25952[(2)] = null);

(statearr_25887_25952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (5))){
var state_25871__$1 = state_25871;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25888_25953 = state_25871__$1;
(statearr_25888_25953[(1)] = (8));

} else {
var statearr_25889_25954 = state_25871__$1;
(statearr_25889_25954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (14))){
var inst_25851 = (state_25871[(11)]);
var inst_25849 = (state_25871[(8)]);
var inst_25849__$1 = (state_25871[(2)]);
var inst_25850 = (inst_25849__$1 == null);
var inst_25851__$1 = cljs.core.not(inst_25850);
var state_25871__$1 = (function (){var statearr_25890 = state_25871;
(statearr_25890[(11)] = inst_25851__$1);

(statearr_25890[(8)] = inst_25849__$1);

return statearr_25890;
})();
if(inst_25851__$1){
var statearr_25891_25955 = state_25871__$1;
(statearr_25891_25955[(1)] = (15));

} else {
var statearr_25892_25956 = state_25871__$1;
(statearr_25892_25956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (16))){
var inst_25851 = (state_25871[(11)]);
var state_25871__$1 = state_25871;
var statearr_25893_25957 = state_25871__$1;
(statearr_25893_25957[(2)] = inst_25851);

(statearr_25893_25957[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (10))){
var inst_25843 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
var statearr_25894_25958 = state_25871__$1;
(statearr_25894_25958[(2)] = inst_25843);

(statearr_25894_25958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (18))){
var inst_25854 = (state_25871[(2)]);
var state_25871__$1 = state_25871;
var statearr_25895_25959 = state_25871__$1;
(statearr_25895_25959[(2)] = inst_25854);

(statearr_25895_25959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25872 === (8))){
var inst_25840 = cljs.core.async.close_BANG_(to);
var state_25871__$1 = state_25871;
var statearr_25896_25963 = state_25871__$1;
(statearr_25896_25963[(2)] = inst_25840);

(statearr_25896_25963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto__,jobs,results,process,async))
;
return ((function (switch__25230__auto__,c__25452__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0 = (function (){
var statearr_25897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25897[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__);

(statearr_25897[(1)] = (1));

return statearr_25897;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1 = (function (state_25871){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_25871);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e25898){if((e25898 instanceof Object)){
var ex__25234__auto__ = e25898;
var statearr_25899_25964 = state_25871;
(statearr_25899_25964[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25898;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25965 = state_25871;
state_25871 = G__25965;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__ = function(state_25871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1.call(this,state_25871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto__,jobs,results,process,async))
})();
var state__25454__auto__ = (function (){var statearr_25900 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_25900[(6)] = c__25452__auto__);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto__,jobs,results,process,async))
);

return c__25452__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25967 = arguments.length;
switch (G__25967) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25972 = arguments.length;
switch (G__25972) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25976 = arguments.length;
switch (G__25976) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__25452__auto___26049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___26049,tc,fc){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___26049,tc,fc){
return (function (state_26002){
var state_val_26003 = (state_26002[(1)]);
if((state_val_26003 === (7))){
var inst_25998 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26004_26053 = state_26002__$1;
(statearr_26004_26053[(2)] = inst_25998);

(statearr_26004_26053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (1))){
var state_26002__$1 = state_26002;
var statearr_26005_26057 = state_26002__$1;
(statearr_26005_26057[(2)] = null);

(statearr_26005_26057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (4))){
var inst_25979 = (state_26002[(7)]);
var inst_25979__$1 = (state_26002[(2)]);
var inst_25980 = (inst_25979__$1 == null);
var state_26002__$1 = (function (){var statearr_26006 = state_26002;
(statearr_26006[(7)] = inst_25979__$1);

return statearr_26006;
})();
if(cljs.core.truth_(inst_25980)){
var statearr_26007_26061 = state_26002__$1;
(statearr_26007_26061[(1)] = (5));

} else {
var statearr_26008_26062 = state_26002__$1;
(statearr_26008_26062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (13))){
var state_26002__$1 = state_26002;
var statearr_26009_26066 = state_26002__$1;
(statearr_26009_26066[(2)] = null);

(statearr_26009_26066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (6))){
var inst_25979 = (state_26002[(7)]);
var inst_25985 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_25979) : p.call(null,inst_25979));
var state_26002__$1 = state_26002;
if(cljs.core.truth_(inst_25985)){
var statearr_26010_26070 = state_26002__$1;
(statearr_26010_26070[(1)] = (9));

} else {
var statearr_26011_26071 = state_26002__$1;
(statearr_26011_26071[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (3))){
var inst_26000 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26002__$1,inst_26000);
} else {
if((state_val_26003 === (12))){
var state_26002__$1 = state_26002;
var statearr_26012_26078 = state_26002__$1;
(statearr_26012_26078[(2)] = null);

(statearr_26012_26078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (2))){
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26002__$1,(4),ch);
} else {
if((state_val_26003 === (11))){
var inst_25979 = (state_26002[(7)]);
var inst_25989 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26002__$1,(8),inst_25989,inst_25979);
} else {
if((state_val_26003 === (9))){
var state_26002__$1 = state_26002;
var statearr_26013_26079 = state_26002__$1;
(statearr_26013_26079[(2)] = tc);

(statearr_26013_26079[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (5))){
var inst_25982 = cljs.core.async.close_BANG_(tc);
var inst_25983 = cljs.core.async.close_BANG_(fc);
var state_26002__$1 = (function (){var statearr_26017 = state_26002;
(statearr_26017[(8)] = inst_25982);

return statearr_26017;
})();
var statearr_26018_26080 = state_26002__$1;
(statearr_26018_26080[(2)] = inst_25983);

(statearr_26018_26080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (14))){
var inst_25996 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26022_26081 = state_26002__$1;
(statearr_26022_26081[(2)] = inst_25996);

(statearr_26022_26081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (10))){
var state_26002__$1 = state_26002;
var statearr_26026_26082 = state_26002__$1;
(statearr_26026_26082[(2)] = fc);

(statearr_26026_26082[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (8))){
var inst_25991 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
if(cljs.core.truth_(inst_25991)){
var statearr_26027_26083 = state_26002__$1;
(statearr_26027_26083[(1)] = (12));

} else {
var statearr_26031_26087 = state_26002__$1;
(statearr_26031_26087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___26049,tc,fc))
;
return ((function (switch__25230__auto__,c__25452__auto___26049,tc,fc){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_26035 = [null,null,null,null,null,null,null,null,null];
(statearr_26035[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_26035[(1)] = (1));

return statearr_26035;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_26002){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_26002);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e26036){if((e26036 instanceof Object)){
var ex__25234__auto__ = e26036;
var statearr_26037_26091 = state_26002;
(statearr_26037_26091[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26092 = state_26002;
state_26002 = G__26092;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_26002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_26002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___26049,tc,fc))
})();
var state__25454__auto__ = (function (){var statearr_26041 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_26041[(6)] = c__25452__auto___26049);

return statearr_26041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___26049,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto__){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto__){
return (function (state_26130){
var state_val_26131 = (state_26130[(1)]);
if((state_val_26131 === (7))){
var inst_26125 = (state_26130[(2)]);
var state_26130__$1 = state_26130;
var statearr_26136_26174 = state_26130__$1;
(statearr_26136_26174[(2)] = inst_26125);

(statearr_26136_26174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (1))){
var inst_26105 = init;
var state_26130__$1 = (function (){var statearr_26140 = state_26130;
(statearr_26140[(7)] = inst_26105);

return statearr_26140;
})();
var statearr_26141_26175 = state_26130__$1;
(statearr_26141_26175[(2)] = null);

(statearr_26141_26175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (4))){
var inst_26111 = (state_26130[(8)]);
var inst_26111__$1 = (state_26130[(2)]);
var inst_26112 = (inst_26111__$1 == null);
var state_26130__$1 = (function (){var statearr_26145 = state_26130;
(statearr_26145[(8)] = inst_26111__$1);

return statearr_26145;
})();
if(cljs.core.truth_(inst_26112)){
var statearr_26146_26176 = state_26130__$1;
(statearr_26146_26176[(1)] = (5));

} else {
var statearr_26150_26177 = state_26130__$1;
(statearr_26150_26177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (6))){
var inst_26115 = (state_26130[(9)]);
var inst_26105 = (state_26130[(7)]);
var inst_26111 = (state_26130[(8)]);
var inst_26115__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_26105,inst_26111) : f.call(null,inst_26105,inst_26111));
var inst_26116 = cljs.core.reduced_QMARK_(inst_26115__$1);
var state_26130__$1 = (function (){var statearr_26154 = state_26130;
(statearr_26154[(9)] = inst_26115__$1);

return statearr_26154;
})();
if(inst_26116){
var statearr_26155_26178 = state_26130__$1;
(statearr_26155_26178[(1)] = (8));

} else {
var statearr_26159_26179 = state_26130__$1;
(statearr_26159_26179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (3))){
var inst_26127 = (state_26130[(2)]);
var state_26130__$1 = state_26130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26130__$1,inst_26127);
} else {
if((state_val_26131 === (2))){
var state_26130__$1 = state_26130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26130__$1,(4),ch);
} else {
if((state_val_26131 === (9))){
var inst_26115 = (state_26130[(9)]);
var inst_26105 = inst_26115;
var state_26130__$1 = (function (){var statearr_26164 = state_26130;
(statearr_26164[(7)] = inst_26105);

return statearr_26164;
})();
var statearr_26166_26180 = state_26130__$1;
(statearr_26166_26180[(2)] = null);

(statearr_26166_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (5))){
var inst_26105 = (state_26130[(7)]);
var state_26130__$1 = state_26130;
var statearr_26167_26181 = state_26130__$1;
(statearr_26167_26181[(2)] = inst_26105);

(statearr_26167_26181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (10))){
var inst_26123 = (state_26130[(2)]);
var state_26130__$1 = state_26130;
var statearr_26168_26182 = state_26130__$1;
(statearr_26168_26182[(2)] = inst_26123);

(statearr_26168_26182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26131 === (8))){
var inst_26115 = (state_26130[(9)]);
var inst_26119 = cljs.core.deref(inst_26115);
var state_26130__$1 = state_26130;
var statearr_26169_26183 = state_26130__$1;
(statearr_26169_26183[(2)] = inst_26119);

(statearr_26169_26183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto__))
;
return ((function (switch__25230__auto__,c__25452__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25231__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25231__auto____0 = (function (){
var statearr_26170 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26170[(0)] = cljs$core$async$reduce_$_state_machine__25231__auto__);

(statearr_26170[(1)] = (1));

return statearr_26170;
});
var cljs$core$async$reduce_$_state_machine__25231__auto____1 = (function (state_26130){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_26130);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object)){
var ex__25234__auto__ = e26171;
var statearr_26172_26184 = state_26130;
(statearr_26172_26184[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26185 = state_26130;
state_26130 = G__26185;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25231__auto__ = function(state_26130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25231__auto____1.call(this,state_26130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25231__auto____0;
cljs$core$async$reduce_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25231__auto____1;
return cljs$core$async$reduce_$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto__))
})();
var state__25454__auto__ = (function (){var statearr_26173 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_26173[(6)] = c__25452__auto__);

return statearr_26173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto__))
);

return c__25452__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto__,f__$1){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto__,f__$1){
return (function (state_26191){
var state_val_26192 = (state_26191[(1)]);
if((state_val_26192 === (1))){
var inst_26186 = cljs.core.async.reduce(f__$1,init,ch);
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26191__$1,(2),inst_26186);
} else {
if((state_val_26192 === (2))){
var inst_26188 = (state_26191[(2)]);
var inst_26189 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_26188) : f__$1.call(null,inst_26188));
var state_26191__$1 = state_26191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26191__$1,inst_26189);
} else {
return null;
}
}
});})(c__25452__auto__,f__$1))
;
return ((function (switch__25230__auto__,c__25452__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25231__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25231__auto____0 = (function (){
var statearr_26196 = [null,null,null,null,null,null,null];
(statearr_26196[(0)] = cljs$core$async$transduce_$_state_machine__25231__auto__);

(statearr_26196[(1)] = (1));

return statearr_26196;
});
var cljs$core$async$transduce_$_state_machine__25231__auto____1 = (function (state_26191){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_26191);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e26197){if((e26197 instanceof Object)){
var ex__25234__auto__ = e26197;
var statearr_26198_26200 = state_26191;
(statearr_26198_26200[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26201 = state_26191;
state_26191 = G__26201;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25231__auto__ = function(state_26191){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25231__auto____1.call(this,state_26191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25231__auto____0;
cljs$core$async$transduce_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25231__auto____1;
return cljs$core$async$transduce_$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto__,f__$1))
})();
var state__25454__auto__ = (function (){var statearr_26199 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_26199[(6)] = c__25452__auto__);

return statearr_26199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto__,f__$1))
);

return c__25452__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26205 = arguments.length;
switch (G__26205) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto__){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto__){
return (function (state_26233){
var state_val_26234 = (state_26233[(1)]);
if((state_val_26234 === (7))){
var inst_26212 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26235_26259 = state_26233__$1;
(statearr_26235_26259[(2)] = inst_26212);

(statearr_26235_26259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (1))){
var inst_26206 = cljs.core.seq(coll);
var inst_26207 = inst_26206;
var state_26233__$1 = (function (){var statearr_26236 = state_26233;
(statearr_26236[(7)] = inst_26207);

return statearr_26236;
})();
var statearr_26237_26260 = state_26233__$1;
(statearr_26237_26260[(2)] = null);

(statearr_26237_26260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (4))){
var inst_26207 = (state_26233[(7)]);
var inst_26210 = cljs.core.first(inst_26207);
var state_26233__$1 = state_26233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26233__$1,(7),ch,inst_26210);
} else {
if((state_val_26234 === (13))){
var inst_26226 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26241_26261 = state_26233__$1;
(statearr_26241_26261[(2)] = inst_26226);

(statearr_26241_26261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (6))){
var inst_26215 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
if(cljs.core.truth_(inst_26215)){
var statearr_26242_26262 = state_26233__$1;
(statearr_26242_26262[(1)] = (8));

} else {
var statearr_26243_26263 = state_26233__$1;
(statearr_26243_26263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (3))){
var inst_26230 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26233__$1,inst_26230);
} else {
if((state_val_26234 === (12))){
var state_26233__$1 = state_26233;
var statearr_26244_26264 = state_26233__$1;
(statearr_26244_26264[(2)] = null);

(statearr_26244_26264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (2))){
var inst_26207 = (state_26233[(7)]);
var state_26233__$1 = state_26233;
if(cljs.core.truth_(inst_26207)){
var statearr_26245_26265 = state_26233__$1;
(statearr_26245_26265[(1)] = (4));

} else {
var statearr_26246_26266 = state_26233__$1;
(statearr_26246_26266[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (11))){
var inst_26223 = cljs.core.async.close_BANG_(ch);
var state_26233__$1 = state_26233;
var statearr_26247_26267 = state_26233__$1;
(statearr_26247_26267[(2)] = inst_26223);

(statearr_26247_26267[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (9))){
var state_26233__$1 = state_26233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26248_26268 = state_26233__$1;
(statearr_26248_26268[(1)] = (11));

} else {
var statearr_26249_26269 = state_26233__$1;
(statearr_26249_26269[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (5))){
var inst_26207 = (state_26233[(7)]);
var state_26233__$1 = state_26233;
var statearr_26250_26270 = state_26233__$1;
(statearr_26250_26270[(2)] = inst_26207);

(statearr_26250_26270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (10))){
var inst_26228 = (state_26233[(2)]);
var state_26233__$1 = state_26233;
var statearr_26251_26271 = state_26233__$1;
(statearr_26251_26271[(2)] = inst_26228);

(statearr_26251_26271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26234 === (8))){
var inst_26207 = (state_26233[(7)]);
var inst_26218 = cljs.core.next(inst_26207);
var inst_26207__$1 = inst_26218;
var state_26233__$1 = (function (){var statearr_26252 = state_26233;
(statearr_26252[(7)] = inst_26207__$1);

return statearr_26252;
})();
var statearr_26253_26272 = state_26233__$1;
(statearr_26253_26272[(2)] = null);

(statearr_26253_26272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto__))
;
return ((function (switch__25230__auto__,c__25452__auto__){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_26254 = [null,null,null,null,null,null,null,null];
(statearr_26254[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_26254[(1)] = (1));

return statearr_26254;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_26233){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_26233);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e26255){if((e26255 instanceof Object)){
var ex__25234__auto__ = e26255;
var statearr_26256_26273 = state_26233;
(statearr_26256_26273[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26255;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26274 = state_26233;
state_26233 = G__26274;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_26233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_26233);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto__))
})();
var state__25454__auto__ = (function (){var statearr_26257 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_26257[(6)] = c__25452__auto__);

return statearr_26257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto__))
);

return c__25452__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26275 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26275 = (function (ch,cs,meta26276){
this.ch = ch;
this.cs = cs;
this.meta26276 = meta26276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26277,meta26276__$1){
var self__ = this;
var _26277__$1 = this;
return (new cljs.core.async.t_cljs$core$async26275(self__.ch,self__.cs,meta26276__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26277){
var self__ = this;
var _26277__$1 = this;
return self__.meta26276;
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26276","meta26276",-799919398,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26275.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26275";

cljs.core.async.t_cljs$core$async26275.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async26275");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26275.
 */
cljs.core.async.__GT_t_cljs$core$async26275 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26275(ch__$1,cs__$1,meta26276){
return (new cljs.core.async.t_cljs$core$async26275(ch__$1,cs__$1,meta26276));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26275(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25452__auto___26527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___26527,cs,m,dchan,dctr,done){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___26527,cs,m,dchan,dctr,done){
return (function (state_26412){
var state_val_26413 = (state_26412[(1)]);
if((state_val_26413 === (7))){
var inst_26408 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26414_26530 = state_26412__$1;
(statearr_26414_26530[(2)] = inst_26408);

(statearr_26414_26530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (20))){
var inst_26311 = (state_26412[(7)]);
var inst_26323 = cljs.core.first(inst_26311);
var inst_26324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26323,(0),null);
var inst_26325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26323,(1),null);
var state_26412__$1 = (function (){var statearr_26415 = state_26412;
(statearr_26415[(8)] = inst_26324);

return statearr_26415;
})();
if(cljs.core.truth_(inst_26325)){
var statearr_26416_26531 = state_26412__$1;
(statearr_26416_26531[(1)] = (22));

} else {
var statearr_26417_26532 = state_26412__$1;
(statearr_26417_26532[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (27))){
var inst_26353 = (state_26412[(9)]);
var inst_26360 = (state_26412[(10)]);
var inst_26280 = (state_26412[(11)]);
var inst_26355 = (state_26412[(12)]);
var inst_26360__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26353,inst_26355);
var inst_26361 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26360__$1,inst_26280,done);
var state_26412__$1 = (function (){var statearr_26418 = state_26412;
(statearr_26418[(10)] = inst_26360__$1);

return statearr_26418;
})();
if(cljs.core.truth_(inst_26361)){
var statearr_26419_26533 = state_26412__$1;
(statearr_26419_26533[(1)] = (30));

} else {
var statearr_26420_26534 = state_26412__$1;
(statearr_26420_26534[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (1))){
var state_26412__$1 = state_26412;
var statearr_26421_26535 = state_26412__$1;
(statearr_26421_26535[(2)] = null);

(statearr_26421_26535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (24))){
var inst_26311 = (state_26412[(7)]);
var inst_26330 = (state_26412[(2)]);
var inst_26331 = cljs.core.next(inst_26311);
var inst_26289 = inst_26331;
var inst_26290 = null;
var inst_26291 = (0);
var inst_26292 = (0);
var state_26412__$1 = (function (){var statearr_26422 = state_26412;
(statearr_26422[(13)] = inst_26292);

(statearr_26422[(14)] = inst_26330);

(statearr_26422[(15)] = inst_26290);

(statearr_26422[(16)] = inst_26289);

(statearr_26422[(17)] = inst_26291);

return statearr_26422;
})();
var statearr_26423_26536 = state_26412__$1;
(statearr_26423_26536[(2)] = null);

(statearr_26423_26536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (39))){
var state_26412__$1 = state_26412;
var statearr_26427_26537 = state_26412__$1;
(statearr_26427_26537[(2)] = null);

(statearr_26427_26537[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (4))){
var inst_26280 = (state_26412[(11)]);
var inst_26280__$1 = (state_26412[(2)]);
var inst_26281 = (inst_26280__$1 == null);
var state_26412__$1 = (function (){var statearr_26428 = state_26412;
(statearr_26428[(11)] = inst_26280__$1);

return statearr_26428;
})();
if(cljs.core.truth_(inst_26281)){
var statearr_26429_26538 = state_26412__$1;
(statearr_26429_26538[(1)] = (5));

} else {
var statearr_26430_26539 = state_26412__$1;
(statearr_26430_26539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (15))){
var inst_26292 = (state_26412[(13)]);
var inst_26290 = (state_26412[(15)]);
var inst_26289 = (state_26412[(16)]);
var inst_26291 = (state_26412[(17)]);
var inst_26307 = (state_26412[(2)]);
var inst_26308 = (inst_26292 + (1));
var tmp26424 = inst_26290;
var tmp26425 = inst_26289;
var tmp26426 = inst_26291;
var inst_26289__$1 = tmp26425;
var inst_26290__$1 = tmp26424;
var inst_26291__$1 = tmp26426;
var inst_26292__$1 = inst_26308;
var state_26412__$1 = (function (){var statearr_26431 = state_26412;
(statearr_26431[(18)] = inst_26307);

(statearr_26431[(13)] = inst_26292__$1);

(statearr_26431[(15)] = inst_26290__$1);

(statearr_26431[(16)] = inst_26289__$1);

(statearr_26431[(17)] = inst_26291__$1);

return statearr_26431;
})();
var statearr_26432_26540 = state_26412__$1;
(statearr_26432_26540[(2)] = null);

(statearr_26432_26540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (21))){
var inst_26334 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26436_26541 = state_26412__$1;
(statearr_26436_26541[(2)] = inst_26334);

(statearr_26436_26541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (31))){
var inst_26360 = (state_26412[(10)]);
var inst_26364 = done(null);
var inst_26365 = cljs.core.async.untap_STAR_(m,inst_26360);
var state_26412__$1 = (function (){var statearr_26437 = state_26412;
(statearr_26437[(19)] = inst_26364);

return statearr_26437;
})();
var statearr_26438_26542 = state_26412__$1;
(statearr_26438_26542[(2)] = inst_26365);

(statearr_26438_26542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (32))){
var inst_26353 = (state_26412[(9)]);
var inst_26354 = (state_26412[(20)]);
var inst_26352 = (state_26412[(21)]);
var inst_26355 = (state_26412[(12)]);
var inst_26367 = (state_26412[(2)]);
var inst_26368 = (inst_26355 + (1));
var tmp26433 = inst_26353;
var tmp26434 = inst_26354;
var tmp26435 = inst_26352;
var inst_26352__$1 = tmp26435;
var inst_26353__$1 = tmp26433;
var inst_26354__$1 = tmp26434;
var inst_26355__$1 = inst_26368;
var state_26412__$1 = (function (){var statearr_26439 = state_26412;
(statearr_26439[(22)] = inst_26367);

(statearr_26439[(9)] = inst_26353__$1);

(statearr_26439[(20)] = inst_26354__$1);

(statearr_26439[(21)] = inst_26352__$1);

(statearr_26439[(12)] = inst_26355__$1);

return statearr_26439;
})();
var statearr_26440_26543 = state_26412__$1;
(statearr_26440_26543[(2)] = null);

(statearr_26440_26543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (40))){
var inst_26380 = (state_26412[(23)]);
var inst_26384 = done(null);
var inst_26385 = cljs.core.async.untap_STAR_(m,inst_26380);
var state_26412__$1 = (function (){var statearr_26441 = state_26412;
(statearr_26441[(24)] = inst_26384);

return statearr_26441;
})();
var statearr_26442_26544 = state_26412__$1;
(statearr_26442_26544[(2)] = inst_26385);

(statearr_26442_26544[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (33))){
var inst_26371 = (state_26412[(25)]);
var inst_26373 = cljs.core.chunked_seq_QMARK_(inst_26371);
var state_26412__$1 = state_26412;
if(inst_26373){
var statearr_26443_26545 = state_26412__$1;
(statearr_26443_26545[(1)] = (36));

} else {
var statearr_26444_26546 = state_26412__$1;
(statearr_26444_26546[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (13))){
var inst_26301 = (state_26412[(26)]);
var inst_26304 = cljs.core.async.close_BANG_(inst_26301);
var state_26412__$1 = state_26412;
var statearr_26447_26547 = state_26412__$1;
(statearr_26447_26547[(2)] = inst_26304);

(statearr_26447_26547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (22))){
var inst_26324 = (state_26412[(8)]);
var inst_26327 = cljs.core.async.close_BANG_(inst_26324);
var state_26412__$1 = state_26412;
var statearr_26450_26548 = state_26412__$1;
(statearr_26450_26548[(2)] = inst_26327);

(statearr_26450_26548[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (36))){
var inst_26371 = (state_26412[(25)]);
var inst_26375 = cljs.core.chunk_first(inst_26371);
var inst_26376 = cljs.core.chunk_rest(inst_26371);
var inst_26377 = cljs.core.count(inst_26375);
var inst_26352 = inst_26376;
var inst_26353 = inst_26375;
var inst_26354 = inst_26377;
var inst_26355 = (0);
var state_26412__$1 = (function (){var statearr_26453 = state_26412;
(statearr_26453[(9)] = inst_26353);

(statearr_26453[(20)] = inst_26354);

(statearr_26453[(21)] = inst_26352);

(statearr_26453[(12)] = inst_26355);

return statearr_26453;
})();
var statearr_26454_26549 = state_26412__$1;
(statearr_26454_26549[(2)] = null);

(statearr_26454_26549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (41))){
var inst_26371 = (state_26412[(25)]);
var inst_26387 = (state_26412[(2)]);
var inst_26388 = cljs.core.next(inst_26371);
var inst_26352 = inst_26388;
var inst_26353 = null;
var inst_26354 = (0);
var inst_26355 = (0);
var state_26412__$1 = (function (){var statearr_26455 = state_26412;
(statearr_26455[(9)] = inst_26353);

(statearr_26455[(27)] = inst_26387);

(statearr_26455[(20)] = inst_26354);

(statearr_26455[(21)] = inst_26352);

(statearr_26455[(12)] = inst_26355);

return statearr_26455;
})();
var statearr_26456_26550 = state_26412__$1;
(statearr_26456_26550[(2)] = null);

(statearr_26456_26550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (43))){
var state_26412__$1 = state_26412;
var statearr_26457_26551 = state_26412__$1;
(statearr_26457_26551[(2)] = null);

(statearr_26457_26551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (29))){
var inst_26396 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26462_26552 = state_26412__$1;
(statearr_26462_26552[(2)] = inst_26396);

(statearr_26462_26552[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (44))){
var inst_26405 = (state_26412[(2)]);
var state_26412__$1 = (function (){var statearr_26463 = state_26412;
(statearr_26463[(28)] = inst_26405);

return statearr_26463;
})();
var statearr_26464_26553 = state_26412__$1;
(statearr_26464_26553[(2)] = null);

(statearr_26464_26553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (6))){
var inst_26344 = (state_26412[(29)]);
var inst_26343 = cljs.core.deref(cs);
var inst_26344__$1 = cljs.core.keys(inst_26343);
var inst_26345 = cljs.core.count(inst_26344__$1);
var inst_26346 = cljs.core.reset_BANG_(dctr,inst_26345);
var inst_26351 = cljs.core.seq(inst_26344__$1);
var inst_26352 = inst_26351;
var inst_26353 = null;
var inst_26354 = (0);
var inst_26355 = (0);
var state_26412__$1 = (function (){var statearr_26466 = state_26412;
(statearr_26466[(30)] = inst_26346);

(statearr_26466[(9)] = inst_26353);

(statearr_26466[(29)] = inst_26344__$1);

(statearr_26466[(20)] = inst_26354);

(statearr_26466[(21)] = inst_26352);

(statearr_26466[(12)] = inst_26355);

return statearr_26466;
})();
var statearr_26467_26554 = state_26412__$1;
(statearr_26467_26554[(2)] = null);

(statearr_26467_26554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (28))){
var inst_26352 = (state_26412[(21)]);
var inst_26371 = (state_26412[(25)]);
var inst_26371__$1 = cljs.core.seq(inst_26352);
var state_26412__$1 = (function (){var statearr_26468 = state_26412;
(statearr_26468[(25)] = inst_26371__$1);

return statearr_26468;
})();
if(inst_26371__$1){
var statearr_26470_26555 = state_26412__$1;
(statearr_26470_26555[(1)] = (33));

} else {
var statearr_26472_26559 = state_26412__$1;
(statearr_26472_26559[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (25))){
var inst_26354 = (state_26412[(20)]);
var inst_26355 = (state_26412[(12)]);
var inst_26357 = (inst_26355 < inst_26354);
var inst_26358 = inst_26357;
var state_26412__$1 = state_26412;
if(cljs.core.truth_(inst_26358)){
var statearr_26475_26560 = state_26412__$1;
(statearr_26475_26560[(1)] = (27));

} else {
var statearr_26476_26561 = state_26412__$1;
(statearr_26476_26561[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (34))){
var state_26412__$1 = state_26412;
var statearr_26477_26562 = state_26412__$1;
(statearr_26477_26562[(2)] = null);

(statearr_26477_26562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (17))){
var state_26412__$1 = state_26412;
var statearr_26478_26563 = state_26412__$1;
(statearr_26478_26563[(2)] = null);

(statearr_26478_26563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (3))){
var inst_26410 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26412__$1,inst_26410);
} else {
if((state_val_26413 === (12))){
var inst_26339 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26479_26564 = state_26412__$1;
(statearr_26479_26564[(2)] = inst_26339);

(statearr_26479_26564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (2))){
var state_26412__$1 = state_26412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26412__$1,(4),ch);
} else {
if((state_val_26413 === (23))){
var state_26412__$1 = state_26412;
var statearr_26481_26565 = state_26412__$1;
(statearr_26481_26565[(2)] = null);

(statearr_26481_26565[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (35))){
var inst_26394 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26483_26566 = state_26412__$1;
(statearr_26483_26566[(2)] = inst_26394);

(statearr_26483_26566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (19))){
var inst_26311 = (state_26412[(7)]);
var inst_26315 = cljs.core.chunk_first(inst_26311);
var inst_26316 = cljs.core.chunk_rest(inst_26311);
var inst_26317 = cljs.core.count(inst_26315);
var inst_26289 = inst_26316;
var inst_26290 = inst_26315;
var inst_26291 = inst_26317;
var inst_26292 = (0);
var state_26412__$1 = (function (){var statearr_26484 = state_26412;
(statearr_26484[(13)] = inst_26292);

(statearr_26484[(15)] = inst_26290);

(statearr_26484[(16)] = inst_26289);

(statearr_26484[(17)] = inst_26291);

return statearr_26484;
})();
var statearr_26485_26568 = state_26412__$1;
(statearr_26485_26568[(2)] = null);

(statearr_26485_26568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (11))){
var inst_26311 = (state_26412[(7)]);
var inst_26289 = (state_26412[(16)]);
var inst_26311__$1 = cljs.core.seq(inst_26289);
var state_26412__$1 = (function (){var statearr_26486 = state_26412;
(statearr_26486[(7)] = inst_26311__$1);

return statearr_26486;
})();
if(inst_26311__$1){
var statearr_26487_26570 = state_26412__$1;
(statearr_26487_26570[(1)] = (16));

} else {
var statearr_26488_26571 = state_26412__$1;
(statearr_26488_26571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (9))){
var inst_26341 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26489_26572 = state_26412__$1;
(statearr_26489_26572[(2)] = inst_26341);

(statearr_26489_26572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (5))){
var inst_26287 = cljs.core.deref(cs);
var inst_26288 = cljs.core.seq(inst_26287);
var inst_26289 = inst_26288;
var inst_26290 = null;
var inst_26291 = (0);
var inst_26292 = (0);
var state_26412__$1 = (function (){var statearr_26491 = state_26412;
(statearr_26491[(13)] = inst_26292);

(statearr_26491[(15)] = inst_26290);

(statearr_26491[(16)] = inst_26289);

(statearr_26491[(17)] = inst_26291);

return statearr_26491;
})();
var statearr_26492_26573 = state_26412__$1;
(statearr_26492_26573[(2)] = null);

(statearr_26492_26573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (14))){
var state_26412__$1 = state_26412;
var statearr_26493_26574 = state_26412__$1;
(statearr_26493_26574[(2)] = null);

(statearr_26493_26574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (45))){
var inst_26402 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26494_26575 = state_26412__$1;
(statearr_26494_26575[(2)] = inst_26402);

(statearr_26494_26575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (26))){
var inst_26344 = (state_26412[(29)]);
var inst_26398 = (state_26412[(2)]);
var inst_26399 = cljs.core.seq(inst_26344);
var state_26412__$1 = (function (){var statearr_26499 = state_26412;
(statearr_26499[(31)] = inst_26398);

return statearr_26499;
})();
if(inst_26399){
var statearr_26501_26582 = state_26412__$1;
(statearr_26501_26582[(1)] = (42));

} else {
var statearr_26502_26583 = state_26412__$1;
(statearr_26502_26583[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (16))){
var inst_26311 = (state_26412[(7)]);
var inst_26313 = cljs.core.chunked_seq_QMARK_(inst_26311);
var state_26412__$1 = state_26412;
if(inst_26313){
var statearr_26503_26584 = state_26412__$1;
(statearr_26503_26584[(1)] = (19));

} else {
var statearr_26504_26585 = state_26412__$1;
(statearr_26504_26585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (38))){
var inst_26391 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26505_26586 = state_26412__$1;
(statearr_26505_26586[(2)] = inst_26391);

(statearr_26505_26586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (30))){
var state_26412__$1 = state_26412;
var statearr_26506_26587 = state_26412__$1;
(statearr_26506_26587[(2)] = null);

(statearr_26506_26587[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (10))){
var inst_26292 = (state_26412[(13)]);
var inst_26290 = (state_26412[(15)]);
var inst_26300 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26290,inst_26292);
var inst_26301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26300,(0),null);
var inst_26302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26300,(1),null);
var state_26412__$1 = (function (){var statearr_26507 = state_26412;
(statearr_26507[(26)] = inst_26301);

return statearr_26507;
})();
if(cljs.core.truth_(inst_26302)){
var statearr_26508_26588 = state_26412__$1;
(statearr_26508_26588[(1)] = (13));

} else {
var statearr_26509_26589 = state_26412__$1;
(statearr_26509_26589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (18))){
var inst_26337 = (state_26412[(2)]);
var state_26412__$1 = state_26412;
var statearr_26510_26590 = state_26412__$1;
(statearr_26510_26590[(2)] = inst_26337);

(statearr_26510_26590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (42))){
var state_26412__$1 = state_26412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26412__$1,(45),dchan);
} else {
if((state_val_26413 === (37))){
var inst_26371 = (state_26412[(25)]);
var inst_26280 = (state_26412[(11)]);
var inst_26380 = (state_26412[(23)]);
var inst_26380__$1 = cljs.core.first(inst_26371);
var inst_26381 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26380__$1,inst_26280,done);
var state_26412__$1 = (function (){var statearr_26511 = state_26412;
(statearr_26511[(23)] = inst_26380__$1);

return statearr_26511;
})();
if(cljs.core.truth_(inst_26381)){
var statearr_26512_26597 = state_26412__$1;
(statearr_26512_26597[(1)] = (39));

} else {
var statearr_26513_26598 = state_26412__$1;
(statearr_26513_26598[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26413 === (8))){
var inst_26292 = (state_26412[(13)]);
var inst_26291 = (state_26412[(17)]);
var inst_26294 = (inst_26292 < inst_26291);
var inst_26295 = inst_26294;
var state_26412__$1 = state_26412;
if(cljs.core.truth_(inst_26295)){
var statearr_26514_26599 = state_26412__$1;
(statearr_26514_26599[(1)] = (10));

} else {
var statearr_26515_26600 = state_26412__$1;
(statearr_26515_26600[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___26527,cs,m,dchan,dctr,done))
;
return ((function (switch__25230__auto__,c__25452__auto___26527,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25231__auto__ = null;
var cljs$core$async$mult_$_state_machine__25231__auto____0 = (function (){
var statearr_26518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26518[(0)] = cljs$core$async$mult_$_state_machine__25231__auto__);

(statearr_26518[(1)] = (1));

return statearr_26518;
});
var cljs$core$async$mult_$_state_machine__25231__auto____1 = (function (state_26412){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_26412);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e26520){if((e26520 instanceof Object)){
var ex__25234__auto__ = e26520;
var statearr_26522_26601 = state_26412;
(statearr_26522_26601[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26602 = state_26412;
state_26412 = G__26602;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25231__auto__ = function(state_26412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25231__auto____1.call(this,state_26412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25231__auto____0;
cljs$core$async$mult_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25231__auto____1;
return cljs$core$async$mult_$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___26527,cs,m,dchan,dctr,done))
})();
var state__25454__auto__ = (function (){var statearr_26523 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_26523[(6)] = c__25452__auto___26527);

return statearr_26523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___26527,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26610 = arguments.length;
switch (G__26610) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4500__auto__ = [];
var len__4497__auto___26644 = arguments.length;
var i__4498__auto___26645 = (0);
while(true){
if((i__4498__auto___26645 < len__4497__auto___26644)){
args__4500__auto__.push((arguments[i__4498__auto___26645]));

var G__26646 = (i__4498__auto___26645 + (1));
i__4498__auto___26645 = G__26646;
continue;
} else {
}
break;
}

var argseq__4501__auto__ = ((((3) < args__4500__auto__.length))?(new cljs.core.IndexedSeq(args__4500__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4501__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26637){
var map__26638 = p__26637;
var map__26638__$1 = ((((!((map__26638 == null)))?(((((map__26638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26638):map__26638);
var opts = map__26638__$1;
var statearr_26640_26647 = state;
(statearr_26640_26647[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__26638,map__26638__$1,opts){
return (function (val){
var statearr_26642_26648 = state;
(statearr_26642_26648[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26638,map__26638__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26643_26649 = state;
(statearr_26643_26649[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26629){
var G__26630 = cljs.core.first(seq26629);
var seq26629__$1 = cljs.core.next(seq26629);
var G__26631 = cljs.core.first(seq26629__$1);
var seq26629__$2 = cljs.core.next(seq26629__$1);
var G__26632 = cljs.core.first(seq26629__$2);
var seq26629__$3 = cljs.core.next(seq26629__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26630,G__26631,G__26632,seq26629__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26650 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26651){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26651 = meta26651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26652,meta26651__$1){
var self__ = this;
var _26652__$1 = this;
return (new cljs.core.async.t_cljs$core$async26650(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26651__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26652){
var self__ = this;
var _26652__$1 = this;
return self__.meta26651;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26651","meta26651",1796005419,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26650";

cljs.core.async.t_cljs$core$async26650.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async26650");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26650.
 */
cljs.core.async.__GT_t_cljs$core$async26650 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26650(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26651){
return (new cljs.core.async.t_cljs$core$async26650(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26651));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26650(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25452__auto___26852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___26852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___26852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26764){
var state_val_26765 = (state_26764[(1)]);
if((state_val_26765 === (7))){
var inst_26672 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26766_26857 = state_26764__$1;
(statearr_26766_26857[(2)] = inst_26672);

(statearr_26766_26857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (20))){
var inst_26685 = (state_26764[(7)]);
var state_26764__$1 = state_26764;
var statearr_26767_26858 = state_26764__$1;
(statearr_26767_26858[(2)] = inst_26685);

(statearr_26767_26858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (27))){
var state_26764__$1 = state_26764;
var statearr_26768_26859 = state_26764__$1;
(statearr_26768_26859[(2)] = null);

(statearr_26768_26859[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (1))){
var inst_26656 = (state_26764[(8)]);
var inst_26656__$1 = calc_state();
var inst_26658 = (inst_26656__$1 == null);
var inst_26659 = cljs.core.not(inst_26658);
var state_26764__$1 = (function (){var statearr_26769 = state_26764;
(statearr_26769[(8)] = inst_26656__$1);

return statearr_26769;
})();
if(inst_26659){
var statearr_26770_26867 = state_26764__$1;
(statearr_26770_26867[(1)] = (2));

} else {
var statearr_26771_26868 = state_26764__$1;
(statearr_26771_26868[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (24))){
var inst_26737 = (state_26764[(9)]);
var inst_26710 = (state_26764[(10)]);
var inst_26719 = (state_26764[(11)]);
var inst_26737__$1 = (inst_26710.cljs$core$IFn$_invoke$arity$1 ? inst_26710.cljs$core$IFn$_invoke$arity$1(inst_26719) : inst_26710.call(null,inst_26719));
var state_26764__$1 = (function (){var statearr_26772 = state_26764;
(statearr_26772[(9)] = inst_26737__$1);

return statearr_26772;
})();
if(cljs.core.truth_(inst_26737__$1)){
var statearr_26773_26869 = state_26764__$1;
(statearr_26773_26869[(1)] = (29));

} else {
var statearr_26774_26870 = state_26764__$1;
(statearr_26774_26870[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (4))){
var inst_26675 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26675)){
var statearr_26775_26871 = state_26764__$1;
(statearr_26775_26871[(1)] = (8));

} else {
var statearr_26776_26872 = state_26764__$1;
(statearr_26776_26872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (15))){
var inst_26704 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26704)){
var statearr_26777_26873 = state_26764__$1;
(statearr_26777_26873[(1)] = (19));

} else {
var statearr_26778_26874 = state_26764__$1;
(statearr_26778_26874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (21))){
var inst_26709 = (state_26764[(12)]);
var inst_26709__$1 = (state_26764[(2)]);
var inst_26710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26709__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26709__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26709__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26764__$1 = (function (){var statearr_26779 = state_26764;
(statearr_26779[(10)] = inst_26710);

(statearr_26779[(12)] = inst_26709__$1);

(statearr_26779[(13)] = inst_26711);

return statearr_26779;
})();
return cljs.core.async.ioc_alts_BANG_(state_26764__$1,(22),inst_26712);
} else {
if((state_val_26765 === (31))){
var inst_26746 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26746)){
var statearr_26780_26877 = state_26764__$1;
(statearr_26780_26877[(1)] = (32));

} else {
var statearr_26781_26878 = state_26764__$1;
(statearr_26781_26878[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (32))){
var inst_26718 = (state_26764[(14)]);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26764__$1,(35),out,inst_26718);
} else {
if((state_val_26765 === (33))){
var inst_26709 = (state_26764[(12)]);
var inst_26685 = inst_26709;
var state_26764__$1 = (function (){var statearr_26788 = state_26764;
(statearr_26788[(7)] = inst_26685);

return statearr_26788;
})();
var statearr_26789_26880 = state_26764__$1;
(statearr_26789_26880[(2)] = null);

(statearr_26789_26880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (13))){
var inst_26685 = (state_26764[(7)]);
var inst_26692 = inst_26685.cljs$lang$protocol_mask$partition0$;
var inst_26693 = (inst_26692 & (64));
var inst_26694 = inst_26685.cljs$core$ISeq$;
var inst_26696 = (cljs.core.PROTOCOL_SENTINEL === inst_26694);
var inst_26697 = ((inst_26693) || (inst_26696));
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26697)){
var statearr_26790_26881 = state_26764__$1;
(statearr_26790_26881[(1)] = (16));

} else {
var statearr_26791_26882 = state_26764__$1;
(statearr_26791_26882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (22))){
var inst_26719 = (state_26764[(11)]);
var inst_26718 = (state_26764[(14)]);
var inst_26717 = (state_26764[(2)]);
var inst_26718__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26717,(0),null);
var inst_26719__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26717,(1),null);
var inst_26723 = (inst_26718__$1 == null);
var inst_26724 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26719__$1,change);
var inst_26725 = ((inst_26723) || (inst_26724));
var state_26764__$1 = (function (){var statearr_26792 = state_26764;
(statearr_26792[(11)] = inst_26719__$1);

(statearr_26792[(14)] = inst_26718__$1);

return statearr_26792;
})();
if(cljs.core.truth_(inst_26725)){
var statearr_26793_26883 = state_26764__$1;
(statearr_26793_26883[(1)] = (23));

} else {
var statearr_26794_26884 = state_26764__$1;
(statearr_26794_26884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (36))){
var inst_26709 = (state_26764[(12)]);
var inst_26685 = inst_26709;
var state_26764__$1 = (function (){var statearr_26795 = state_26764;
(statearr_26795[(7)] = inst_26685);

return statearr_26795;
})();
var statearr_26796_26885 = state_26764__$1;
(statearr_26796_26885[(2)] = null);

(statearr_26796_26885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (29))){
var inst_26737 = (state_26764[(9)]);
var state_26764__$1 = state_26764;
var statearr_26798_26886 = state_26764__$1;
(statearr_26798_26886[(2)] = inst_26737);

(statearr_26798_26886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (6))){
var state_26764__$1 = state_26764;
var statearr_26799_26887 = state_26764__$1;
(statearr_26799_26887[(2)] = false);

(statearr_26799_26887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (28))){
var inst_26732 = (state_26764[(2)]);
var inst_26733 = calc_state();
var inst_26685 = inst_26733;
var state_26764__$1 = (function (){var statearr_26800 = state_26764;
(statearr_26800[(7)] = inst_26685);

(statearr_26800[(15)] = inst_26732);

return statearr_26800;
})();
var statearr_26801_26888 = state_26764__$1;
(statearr_26801_26888[(2)] = null);

(statearr_26801_26888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (25))){
var inst_26760 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26803_26889 = state_26764__$1;
(statearr_26803_26889[(2)] = inst_26760);

(statearr_26803_26889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (34))){
var inst_26758 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26804_26890 = state_26764__$1;
(statearr_26804_26890[(2)] = inst_26758);

(statearr_26804_26890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (17))){
var state_26764__$1 = state_26764;
var statearr_26805_26891 = state_26764__$1;
(statearr_26805_26891[(2)] = false);

(statearr_26805_26891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (3))){
var state_26764__$1 = state_26764;
var statearr_26806_26892 = state_26764__$1;
(statearr_26806_26892[(2)] = false);

(statearr_26806_26892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (12))){
var inst_26762 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26764__$1,inst_26762);
} else {
if((state_val_26765 === (2))){
var inst_26656 = (state_26764[(8)]);
var inst_26664 = inst_26656.cljs$lang$protocol_mask$partition0$;
var inst_26665 = (inst_26664 & (64));
var inst_26666 = inst_26656.cljs$core$ISeq$;
var inst_26667 = (cljs.core.PROTOCOL_SENTINEL === inst_26666);
var inst_26668 = ((inst_26665) || (inst_26667));
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26668)){
var statearr_26807_26894 = state_26764__$1;
(statearr_26807_26894[(1)] = (5));

} else {
var statearr_26808_26895 = state_26764__$1;
(statearr_26808_26895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (23))){
var inst_26718 = (state_26764[(14)]);
var inst_26727 = (inst_26718 == null);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26727)){
var statearr_26809_26902 = state_26764__$1;
(statearr_26809_26902[(1)] = (26));

} else {
var statearr_26810_26903 = state_26764__$1;
(statearr_26810_26903[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (35))){
var inst_26749 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
if(cljs.core.truth_(inst_26749)){
var statearr_26811_26904 = state_26764__$1;
(statearr_26811_26904[(1)] = (36));

} else {
var statearr_26812_26905 = state_26764__$1;
(statearr_26812_26905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (19))){
var inst_26685 = (state_26764[(7)]);
var inst_26706 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26685);
var state_26764__$1 = state_26764;
var statearr_26813_26906 = state_26764__$1;
(statearr_26813_26906[(2)] = inst_26706);

(statearr_26813_26906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (11))){
var inst_26685 = (state_26764[(7)]);
var inst_26689 = (inst_26685 == null);
var inst_26690 = cljs.core.not(inst_26689);
var state_26764__$1 = state_26764;
if(inst_26690){
var statearr_26814_26907 = state_26764__$1;
(statearr_26814_26907[(1)] = (13));

} else {
var statearr_26815_26908 = state_26764__$1;
(statearr_26815_26908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (9))){
var inst_26656 = (state_26764[(8)]);
var state_26764__$1 = state_26764;
var statearr_26816_26909 = state_26764__$1;
(statearr_26816_26909[(2)] = inst_26656);

(statearr_26816_26909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (5))){
var state_26764__$1 = state_26764;
var statearr_26817_26910 = state_26764__$1;
(statearr_26817_26910[(2)] = true);

(statearr_26817_26910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (14))){
var state_26764__$1 = state_26764;
var statearr_26818_26911 = state_26764__$1;
(statearr_26818_26911[(2)] = false);

(statearr_26818_26911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (26))){
var inst_26719 = (state_26764[(11)]);
var inst_26729 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26719);
var state_26764__$1 = state_26764;
var statearr_26819_26914 = state_26764__$1;
(statearr_26819_26914[(2)] = inst_26729);

(statearr_26819_26914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (16))){
var state_26764__$1 = state_26764;
var statearr_26820_26915 = state_26764__$1;
(statearr_26820_26915[(2)] = true);

(statearr_26820_26915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (38))){
var inst_26754 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26821_26916 = state_26764__$1;
(statearr_26821_26916[(2)] = inst_26754);

(statearr_26821_26916[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (30))){
var inst_26710 = (state_26764[(10)]);
var inst_26719 = (state_26764[(11)]);
var inst_26711 = (state_26764[(13)]);
var inst_26740 = cljs.core.empty_QMARK_(inst_26710);
var inst_26742 = (inst_26711.cljs$core$IFn$_invoke$arity$1 ? inst_26711.cljs$core$IFn$_invoke$arity$1(inst_26719) : inst_26711.call(null,inst_26719));
var inst_26743 = cljs.core.not(inst_26742);
var inst_26744 = ((inst_26740) && (inst_26743));
var state_26764__$1 = state_26764;
var statearr_26822_26917 = state_26764__$1;
(statearr_26822_26917[(2)] = inst_26744);

(statearr_26822_26917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (10))){
var inst_26656 = (state_26764[(8)]);
var inst_26680 = (state_26764[(2)]);
var inst_26681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26680,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26680,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26680,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26685 = inst_26656;
var state_26764__$1 = (function (){var statearr_26823 = state_26764;
(statearr_26823[(16)] = inst_26684);

(statearr_26823[(17)] = inst_26681);

(statearr_26823[(18)] = inst_26683);

(statearr_26823[(7)] = inst_26685);

return statearr_26823;
})();
var statearr_26824_26918 = state_26764__$1;
(statearr_26824_26918[(2)] = null);

(statearr_26824_26918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (18))){
var inst_26701 = (state_26764[(2)]);
var state_26764__$1 = state_26764;
var statearr_26825_26919 = state_26764__$1;
(statearr_26825_26919[(2)] = inst_26701);

(statearr_26825_26919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (37))){
var state_26764__$1 = state_26764;
var statearr_26826_26920 = state_26764__$1;
(statearr_26826_26920[(2)] = null);

(statearr_26826_26920[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26765 === (8))){
var inst_26656 = (state_26764[(8)]);
var inst_26677 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26656);
var state_26764__$1 = state_26764;
var statearr_26827_26921 = state_26764__$1;
(statearr_26827_26921[(2)] = inst_26677);

(statearr_26827_26921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___26852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25230__auto__,c__25452__auto___26852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25231__auto__ = null;
var cljs$core$async$mix_$_state_machine__25231__auto____0 = (function (){
var statearr_26828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26828[(0)] = cljs$core$async$mix_$_state_machine__25231__auto__);

(statearr_26828[(1)] = (1));

return statearr_26828;
});
var cljs$core$async$mix_$_state_machine__25231__auto____1 = (function (state_26764){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_26764);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e26829){if((e26829 instanceof Object)){
var ex__25234__auto__ = e26829;
var statearr_26830_26922 = state_26764;
(statearr_26830_26922[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26923 = state_26764;
state_26764 = G__26923;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25231__auto__ = function(state_26764){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25231__auto____1.call(this,state_26764);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25231__auto____0;
cljs$core$async$mix_$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25231__auto____1;
return cljs$core$async$mix_$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___26852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25454__auto__ = (function (){var statearr_26831 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_26831[(6)] = c__25452__auto___26852);

return statearr_26831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___26852,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26940 = arguments.length;
switch (G__26940) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26947 = arguments.length;
switch (G__26947) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__26945_SHARP_){
if(cljs.core.truth_((p1__26945_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26945_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26945_SHARP_.call(null,topic)))){
return p1__26945_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26945_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26948 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26948 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26949){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26949 = meta26949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26950,meta26949__$1){
var self__ = this;
var _26950__$1 = this;
return (new cljs.core.async.t_cljs$core$async26948(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26949__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26950){
var self__ = this;
var _26950__$1 = this;
return self__.meta26949;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26949","meta26949",-2131069650,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26948";

cljs.core.async.t_cljs$core$async26948.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async26948");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26948.
 */
cljs.core.async.__GT_t_cljs$core$async26948 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26948(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26949){
return (new cljs.core.async.t_cljs$core$async26948(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26949));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26948(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25452__auto___27083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27083,mults,ensure_mult,p){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27083,mults,ensure_mult,p){
return (function (state_27028){
var state_val_27029 = (state_27028[(1)]);
if((state_val_27029 === (7))){
var inst_27023 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27030_27084 = state_27028__$1;
(statearr_27030_27084[(2)] = inst_27023);

(statearr_27030_27084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (20))){
var state_27028__$1 = state_27028;
var statearr_27031_27085 = state_27028__$1;
(statearr_27031_27085[(2)] = null);

(statearr_27031_27085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (1))){
var state_27028__$1 = state_27028;
var statearr_27032_27086 = state_27028__$1;
(statearr_27032_27086[(2)] = null);

(statearr_27032_27086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (24))){
var inst_27006 = (state_27028[(7)]);
var inst_27015 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_27006);
var state_27028__$1 = state_27028;
var statearr_27034_27087 = state_27028__$1;
(statearr_27034_27087[(2)] = inst_27015);

(statearr_27034_27087[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (4))){
var inst_26958 = (state_27028[(8)]);
var inst_26958__$1 = (state_27028[(2)]);
var inst_26959 = (inst_26958__$1 == null);
var state_27028__$1 = (function (){var statearr_27036 = state_27028;
(statearr_27036[(8)] = inst_26958__$1);

return statearr_27036;
})();
if(cljs.core.truth_(inst_26959)){
var statearr_27037_27090 = state_27028__$1;
(statearr_27037_27090[(1)] = (5));

} else {
var statearr_27038_27091 = state_27028__$1;
(statearr_27038_27091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (15))){
var inst_27000 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27039_27092 = state_27028__$1;
(statearr_27039_27092[(2)] = inst_27000);

(statearr_27039_27092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (21))){
var inst_27020 = (state_27028[(2)]);
var state_27028__$1 = (function (){var statearr_27040 = state_27028;
(statearr_27040[(9)] = inst_27020);

return statearr_27040;
})();
var statearr_27041_27093 = state_27028__$1;
(statearr_27041_27093[(2)] = null);

(statearr_27041_27093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (13))){
var inst_26982 = (state_27028[(10)]);
var inst_26984 = cljs.core.chunked_seq_QMARK_(inst_26982);
var state_27028__$1 = state_27028;
if(inst_26984){
var statearr_27042_27094 = state_27028__$1;
(statearr_27042_27094[(1)] = (16));

} else {
var statearr_27043_27095 = state_27028__$1;
(statearr_27043_27095[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (22))){
var inst_27012 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
if(cljs.core.truth_(inst_27012)){
var statearr_27044_27096 = state_27028__$1;
(statearr_27044_27096[(1)] = (23));

} else {
var statearr_27045_27097 = state_27028__$1;
(statearr_27045_27097[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (6))){
var inst_27006 = (state_27028[(7)]);
var inst_26958 = (state_27028[(8)]);
var inst_27008 = (state_27028[(11)]);
var inst_27006__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26958) : topic_fn.call(null,inst_26958));
var inst_27007 = cljs.core.deref(mults);
var inst_27008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_27007,inst_27006__$1);
var state_27028__$1 = (function (){var statearr_27046 = state_27028;
(statearr_27046[(7)] = inst_27006__$1);

(statearr_27046[(11)] = inst_27008__$1);

return statearr_27046;
})();
if(cljs.core.truth_(inst_27008__$1)){
var statearr_27047_27099 = state_27028__$1;
(statearr_27047_27099[(1)] = (19));

} else {
var statearr_27048_27100 = state_27028__$1;
(statearr_27048_27100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (25))){
var inst_27017 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27049_27101 = state_27028__$1;
(statearr_27049_27101[(2)] = inst_27017);

(statearr_27049_27101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (17))){
var inst_26982 = (state_27028[(10)]);
var inst_26991 = cljs.core.first(inst_26982);
var inst_26992 = cljs.core.async.muxch_STAR_(inst_26991);
var inst_26993 = cljs.core.async.close_BANG_(inst_26992);
var inst_26994 = cljs.core.next(inst_26982);
var inst_26968 = inst_26994;
var inst_26969 = null;
var inst_26970 = (0);
var inst_26971 = (0);
var state_27028__$1 = (function (){var statearr_27051 = state_27028;
(statearr_27051[(12)] = inst_26968);

(statearr_27051[(13)] = inst_26970);

(statearr_27051[(14)] = inst_26993);

(statearr_27051[(15)] = inst_26971);

(statearr_27051[(16)] = inst_26969);

return statearr_27051;
})();
var statearr_27053_27103 = state_27028__$1;
(statearr_27053_27103[(2)] = null);

(statearr_27053_27103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (3))){
var inst_27025 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27028__$1,inst_27025);
} else {
if((state_val_27029 === (12))){
var inst_27002 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27054_27104 = state_27028__$1;
(statearr_27054_27104[(2)] = inst_27002);

(statearr_27054_27104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (2))){
var state_27028__$1 = state_27028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27028__$1,(4),ch);
} else {
if((state_val_27029 === (23))){
var state_27028__$1 = state_27028;
var statearr_27056_27105 = state_27028__$1;
(statearr_27056_27105[(2)] = null);

(statearr_27056_27105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (19))){
var inst_26958 = (state_27028[(8)]);
var inst_27008 = (state_27028[(11)]);
var inst_27010 = cljs.core.async.muxch_STAR_(inst_27008);
var state_27028__$1 = state_27028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27028__$1,(22),inst_27010,inst_26958);
} else {
if((state_val_27029 === (11))){
var inst_26968 = (state_27028[(12)]);
var inst_26982 = (state_27028[(10)]);
var inst_26982__$1 = cljs.core.seq(inst_26968);
var state_27028__$1 = (function (){var statearr_27058 = state_27028;
(statearr_27058[(10)] = inst_26982__$1);

return statearr_27058;
})();
if(inst_26982__$1){
var statearr_27059_27106 = state_27028__$1;
(statearr_27059_27106[(1)] = (13));

} else {
var statearr_27060_27107 = state_27028__$1;
(statearr_27060_27107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (9))){
var inst_27004 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27061_27108 = state_27028__$1;
(statearr_27061_27108[(2)] = inst_27004);

(statearr_27061_27108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (5))){
var inst_26965 = cljs.core.deref(mults);
var inst_26966 = cljs.core.vals(inst_26965);
var inst_26967 = cljs.core.seq(inst_26966);
var inst_26968 = inst_26967;
var inst_26969 = null;
var inst_26970 = (0);
var inst_26971 = (0);
var state_27028__$1 = (function (){var statearr_27062 = state_27028;
(statearr_27062[(12)] = inst_26968);

(statearr_27062[(13)] = inst_26970);

(statearr_27062[(15)] = inst_26971);

(statearr_27062[(16)] = inst_26969);

return statearr_27062;
})();
var statearr_27064_27109 = state_27028__$1;
(statearr_27064_27109[(2)] = null);

(statearr_27064_27109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (14))){
var state_27028__$1 = state_27028;
var statearr_27070_27110 = state_27028__$1;
(statearr_27070_27110[(2)] = null);

(statearr_27070_27110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (16))){
var inst_26982 = (state_27028[(10)]);
var inst_26986 = cljs.core.chunk_first(inst_26982);
var inst_26987 = cljs.core.chunk_rest(inst_26982);
var inst_26988 = cljs.core.count(inst_26986);
var inst_26968 = inst_26987;
var inst_26969 = inst_26986;
var inst_26970 = inst_26988;
var inst_26971 = (0);
var state_27028__$1 = (function (){var statearr_27071 = state_27028;
(statearr_27071[(12)] = inst_26968);

(statearr_27071[(13)] = inst_26970);

(statearr_27071[(15)] = inst_26971);

(statearr_27071[(16)] = inst_26969);

return statearr_27071;
})();
var statearr_27072_27111 = state_27028__$1;
(statearr_27072_27111[(2)] = null);

(statearr_27072_27111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (10))){
var inst_26968 = (state_27028[(12)]);
var inst_26970 = (state_27028[(13)]);
var inst_26971 = (state_27028[(15)]);
var inst_26969 = (state_27028[(16)]);
var inst_26976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26969,inst_26971);
var inst_26977 = cljs.core.async.muxch_STAR_(inst_26976);
var inst_26978 = cljs.core.async.close_BANG_(inst_26977);
var inst_26979 = (inst_26971 + (1));
var tmp27065 = inst_26968;
var tmp27066 = inst_26970;
var tmp27067 = inst_26969;
var inst_26968__$1 = tmp27065;
var inst_26969__$1 = tmp27067;
var inst_26970__$1 = tmp27066;
var inst_26971__$1 = inst_26979;
var state_27028__$1 = (function (){var statearr_27073 = state_27028;
(statearr_27073[(12)] = inst_26968__$1);

(statearr_27073[(13)] = inst_26970__$1);

(statearr_27073[(15)] = inst_26971__$1);

(statearr_27073[(17)] = inst_26978);

(statearr_27073[(16)] = inst_26969__$1);

return statearr_27073;
})();
var statearr_27074_27112 = state_27028__$1;
(statearr_27074_27112[(2)] = null);

(statearr_27074_27112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (18))){
var inst_26997 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27075_27113 = state_27028__$1;
(statearr_27075_27113[(2)] = inst_26997);

(statearr_27075_27113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (8))){
var inst_26970 = (state_27028[(13)]);
var inst_26971 = (state_27028[(15)]);
var inst_26973 = (inst_26971 < inst_26970);
var inst_26974 = inst_26973;
var state_27028__$1 = state_27028;
if(cljs.core.truth_(inst_26974)){
var statearr_27076_27116 = state_27028__$1;
(statearr_27076_27116[(1)] = (10));

} else {
var statearr_27077_27117 = state_27028__$1;
(statearr_27077_27117[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27083,mults,ensure_mult,p))
;
return ((function (switch__25230__auto__,c__25452__auto___27083,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27078[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27078[(1)] = (1));

return statearr_27078;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27028){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27028);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27079){if((e27079 instanceof Object)){
var ex__25234__auto__ = e27079;
var statearr_27080_27118 = state_27028;
(statearr_27080_27118[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27119 = state_27028;
state_27028 = G__27119;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27083,mults,ensure_mult,p))
})();
var state__25454__auto__ = (function (){var statearr_27081 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27081[(6)] = c__25452__auto___27083);

return statearr_27081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27083,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27124 = arguments.length;
switch (G__27124) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27128 = arguments.length;
switch (G__27128) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27139 = arguments.length;
switch (G__27139) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__25452__auto___27206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27178){
var state_val_27179 = (state_27178[(1)]);
if((state_val_27179 === (7))){
var state_27178__$1 = state_27178;
var statearr_27180_27207 = state_27178__$1;
(statearr_27180_27207[(2)] = null);

(statearr_27180_27207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (1))){
var state_27178__$1 = state_27178;
var statearr_27181_27208 = state_27178__$1;
(statearr_27181_27208[(2)] = null);

(statearr_27181_27208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (4))){
var inst_27142 = (state_27178[(7)]);
var inst_27144 = (inst_27142 < cnt);
var state_27178__$1 = state_27178;
if(cljs.core.truth_(inst_27144)){
var statearr_27182_27209 = state_27178__$1;
(statearr_27182_27209[(1)] = (6));

} else {
var statearr_27183_27210 = state_27178__$1;
(statearr_27183_27210[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (15))){
var inst_27174 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27184_27211 = state_27178__$1;
(statearr_27184_27211[(2)] = inst_27174);

(statearr_27184_27211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (13))){
var inst_27167 = cljs.core.async.close_BANG_(out);
var state_27178__$1 = state_27178;
var statearr_27185_27212 = state_27178__$1;
(statearr_27185_27212[(2)] = inst_27167);

(statearr_27185_27212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (6))){
var state_27178__$1 = state_27178;
var statearr_27186_27213 = state_27178__$1;
(statearr_27186_27213[(2)] = null);

(statearr_27186_27213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (3))){
var inst_27176 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27178__$1,inst_27176);
} else {
if((state_val_27179 === (12))){
var inst_27164 = (state_27178[(8)]);
var inst_27164__$1 = (state_27178[(2)]);
var inst_27165 = cljs.core.some(cljs.core.nil_QMARK_,inst_27164__$1);
var state_27178__$1 = (function (){var statearr_27187 = state_27178;
(statearr_27187[(8)] = inst_27164__$1);

return statearr_27187;
})();
if(cljs.core.truth_(inst_27165)){
var statearr_27188_27214 = state_27178__$1;
(statearr_27188_27214[(1)] = (13));

} else {
var statearr_27189_27215 = state_27178__$1;
(statearr_27189_27215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (2))){
var inst_27141 = cljs.core.reset_BANG_(dctr,cnt);
var inst_27142 = (0);
var state_27178__$1 = (function (){var statearr_27190 = state_27178;
(statearr_27190[(7)] = inst_27142);

(statearr_27190[(9)] = inst_27141);

return statearr_27190;
})();
var statearr_27191_27216 = state_27178__$1;
(statearr_27191_27216[(2)] = null);

(statearr_27191_27216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (11))){
var inst_27142 = (state_27178[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27178,(10),Object,null,(9));
var inst_27151 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_27142) : chs__$1.call(null,inst_27142));
var inst_27152 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_27142) : done.call(null,inst_27142));
var inst_27153 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_27151,inst_27152);
var state_27178__$1 = state_27178;
var statearr_27192_27217 = state_27178__$1;
(statearr_27192_27217[(2)] = inst_27153);


cljs.core.async.impl.ioc_helpers.process_exception(state_27178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (9))){
var inst_27142 = (state_27178[(7)]);
var inst_27155 = (state_27178[(2)]);
var inst_27156 = (inst_27142 + (1));
var inst_27142__$1 = inst_27156;
var state_27178__$1 = (function (){var statearr_27193 = state_27178;
(statearr_27193[(7)] = inst_27142__$1);

(statearr_27193[(10)] = inst_27155);

return statearr_27193;
})();
var statearr_27194_27218 = state_27178__$1;
(statearr_27194_27218[(2)] = null);

(statearr_27194_27218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (5))){
var inst_27162 = (state_27178[(2)]);
var state_27178__$1 = (function (){var statearr_27195 = state_27178;
(statearr_27195[(11)] = inst_27162);

return statearr_27195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27178__$1,(12),dchan);
} else {
if((state_val_27179 === (14))){
var inst_27164 = (state_27178[(8)]);
var inst_27169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_27164);
var state_27178__$1 = state_27178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27178__$1,(16),out,inst_27169);
} else {
if((state_val_27179 === (16))){
var inst_27171 = (state_27178[(2)]);
var state_27178__$1 = (function (){var statearr_27196 = state_27178;
(statearr_27196[(12)] = inst_27171);

return statearr_27196;
})();
var statearr_27197_27219 = state_27178__$1;
(statearr_27197_27219[(2)] = null);

(statearr_27197_27219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (10))){
var inst_27146 = (state_27178[(2)]);
var inst_27147 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27178__$1 = (function (){var statearr_27198 = state_27178;
(statearr_27198[(13)] = inst_27146);

return statearr_27198;
})();
var statearr_27199_27220 = state_27178__$1;
(statearr_27199_27220[(2)] = inst_27147);


cljs.core.async.impl.ioc_helpers.process_exception(state_27178__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27179 === (8))){
var inst_27160 = (state_27178[(2)]);
var state_27178__$1 = state_27178;
var statearr_27200_27221 = state_27178__$1;
(statearr_27200_27221[(2)] = inst_27160);

(statearr_27200_27221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27206,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25230__auto__,c__25452__auto___27206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27201[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27201[(1)] = (1));

return statearr_27201;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27178){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27178);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27202){if((e27202 instanceof Object)){
var ex__25234__auto__ = e27202;
var statearr_27203_27222 = state_27178;
(statearr_27203_27222[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27223 = state_27178;
state_27178 = G__27223;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27206,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25454__auto__ = (function (){var statearr_27204 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27204[(6)] = c__25452__auto___27206);

return statearr_27204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27206,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27226 = arguments.length;
switch (G__27226) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25452__auto___27280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27280,out){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27280,out){
return (function (state_27258){
var state_val_27259 = (state_27258[(1)]);
if((state_val_27259 === (7))){
var inst_27237 = (state_27258[(7)]);
var inst_27238 = (state_27258[(8)]);
var inst_27237__$1 = (state_27258[(2)]);
var inst_27238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27237__$1,(0),null);
var inst_27239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27237__$1,(1),null);
var inst_27240 = (inst_27238__$1 == null);
var state_27258__$1 = (function (){var statearr_27260 = state_27258;
(statearr_27260[(7)] = inst_27237__$1);

(statearr_27260[(8)] = inst_27238__$1);

(statearr_27260[(9)] = inst_27239);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27240)){
var statearr_27261_27281 = state_27258__$1;
(statearr_27261_27281[(1)] = (8));

} else {
var statearr_27262_27282 = state_27258__$1;
(statearr_27262_27282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (1))){
var inst_27227 = cljs.core.vec(chs);
var inst_27228 = inst_27227;
var state_27258__$1 = (function (){var statearr_27263 = state_27258;
(statearr_27263[(10)] = inst_27228);

return statearr_27263;
})();
var statearr_27264_27283 = state_27258__$1;
(statearr_27264_27283[(2)] = null);

(statearr_27264_27283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (4))){
var inst_27228 = (state_27258[(10)]);
var state_27258__$1 = state_27258;
return cljs.core.async.ioc_alts_BANG_(state_27258__$1,(7),inst_27228);
} else {
if((state_val_27259 === (6))){
var inst_27254 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27265_27284 = state_27258__$1;
(statearr_27265_27284[(2)] = inst_27254);

(statearr_27265_27284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (3))){
var inst_27256 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27258__$1,inst_27256);
} else {
if((state_val_27259 === (2))){
var inst_27228 = (state_27258[(10)]);
var inst_27230 = cljs.core.count(inst_27228);
var inst_27231 = (inst_27230 > (0));
var state_27258__$1 = state_27258;
if(cljs.core.truth_(inst_27231)){
var statearr_27267_27285 = state_27258__$1;
(statearr_27267_27285[(1)] = (4));

} else {
var statearr_27268_27286 = state_27258__$1;
(statearr_27268_27286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (11))){
var inst_27228 = (state_27258[(10)]);
var inst_27247 = (state_27258[(2)]);
var tmp27266 = inst_27228;
var inst_27228__$1 = tmp27266;
var state_27258__$1 = (function (){var statearr_27269 = state_27258;
(statearr_27269[(10)] = inst_27228__$1);

(statearr_27269[(11)] = inst_27247);

return statearr_27269;
})();
var statearr_27270_27287 = state_27258__$1;
(statearr_27270_27287[(2)] = null);

(statearr_27270_27287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (9))){
var inst_27238 = (state_27258[(8)]);
var state_27258__$1 = state_27258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27258__$1,(11),out,inst_27238);
} else {
if((state_val_27259 === (5))){
var inst_27252 = cljs.core.async.close_BANG_(out);
var state_27258__$1 = state_27258;
var statearr_27271_27288 = state_27258__$1;
(statearr_27271_27288[(2)] = inst_27252);

(statearr_27271_27288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (10))){
var inst_27250 = (state_27258[(2)]);
var state_27258__$1 = state_27258;
var statearr_27272_27289 = state_27258__$1;
(statearr_27272_27289[(2)] = inst_27250);

(statearr_27272_27289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27259 === (8))){
var inst_27237 = (state_27258[(7)]);
var inst_27238 = (state_27258[(8)]);
var inst_27228 = (state_27258[(10)]);
var inst_27239 = (state_27258[(9)]);
var inst_27242 = (function (){var cs = inst_27228;
var vec__27233 = inst_27237;
var v = inst_27238;
var c = inst_27239;
return ((function (cs,vec__27233,v,c,inst_27237,inst_27238,inst_27228,inst_27239,state_val_27259,c__25452__auto___27280,out){
return (function (p1__27224_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27224_SHARP_);
});
;})(cs,vec__27233,v,c,inst_27237,inst_27238,inst_27228,inst_27239,state_val_27259,c__25452__auto___27280,out))
})();
var inst_27243 = cljs.core.filterv(inst_27242,inst_27228);
var inst_27228__$1 = inst_27243;
var state_27258__$1 = (function (){var statearr_27273 = state_27258;
(statearr_27273[(10)] = inst_27228__$1);

return statearr_27273;
})();
var statearr_27274_27290 = state_27258__$1;
(statearr_27274_27290[(2)] = null);

(statearr_27274_27290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27280,out))
;
return ((function (switch__25230__auto__,c__25452__auto___27280,out){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27275[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27275[(1)] = (1));

return statearr_27275;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27258){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27258);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27276){if((e27276 instanceof Object)){
var ex__25234__auto__ = e27276;
var statearr_27277_27291 = state_27258;
(statearr_27277_27291[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27292 = state_27258;
state_27258 = G__27292;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27280,out))
})();
var state__25454__auto__ = (function (){var statearr_27278 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27278[(6)] = c__25452__auto___27280);

return statearr_27278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27280,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27294 = arguments.length;
switch (G__27294) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25452__auto___27339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27339,out){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27339,out){
return (function (state_27318){
var state_val_27319 = (state_27318[(1)]);
if((state_val_27319 === (7))){
var inst_27300 = (state_27318[(7)]);
var inst_27300__$1 = (state_27318[(2)]);
var inst_27301 = (inst_27300__$1 == null);
var inst_27302 = cljs.core.not(inst_27301);
var state_27318__$1 = (function (){var statearr_27320 = state_27318;
(statearr_27320[(7)] = inst_27300__$1);

return statearr_27320;
})();
if(inst_27302){
var statearr_27321_27340 = state_27318__$1;
(statearr_27321_27340[(1)] = (8));

} else {
var statearr_27322_27341 = state_27318__$1;
(statearr_27322_27341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (1))){
var inst_27295 = (0);
var state_27318__$1 = (function (){var statearr_27323 = state_27318;
(statearr_27323[(8)] = inst_27295);

return statearr_27323;
})();
var statearr_27324_27342 = state_27318__$1;
(statearr_27324_27342[(2)] = null);

(statearr_27324_27342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (4))){
var state_27318__$1 = state_27318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27318__$1,(7),ch);
} else {
if((state_val_27319 === (6))){
var inst_27313 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
var statearr_27325_27343 = state_27318__$1;
(statearr_27325_27343[(2)] = inst_27313);

(statearr_27325_27343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (3))){
var inst_27315 = (state_27318[(2)]);
var inst_27316 = cljs.core.async.close_BANG_(out);
var state_27318__$1 = (function (){var statearr_27326 = state_27318;
(statearr_27326[(9)] = inst_27315);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27318__$1,inst_27316);
} else {
if((state_val_27319 === (2))){
var inst_27295 = (state_27318[(8)]);
var inst_27297 = (inst_27295 < n);
var state_27318__$1 = state_27318;
if(cljs.core.truth_(inst_27297)){
var statearr_27327_27344 = state_27318__$1;
(statearr_27327_27344[(1)] = (4));

} else {
var statearr_27328_27345 = state_27318__$1;
(statearr_27328_27345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (11))){
var inst_27295 = (state_27318[(8)]);
var inst_27305 = (state_27318[(2)]);
var inst_27306 = (inst_27295 + (1));
var inst_27295__$1 = inst_27306;
var state_27318__$1 = (function (){var statearr_27329 = state_27318;
(statearr_27329[(8)] = inst_27295__$1);

(statearr_27329[(10)] = inst_27305);

return statearr_27329;
})();
var statearr_27330_27346 = state_27318__$1;
(statearr_27330_27346[(2)] = null);

(statearr_27330_27346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (9))){
var state_27318__$1 = state_27318;
var statearr_27331_27347 = state_27318__$1;
(statearr_27331_27347[(2)] = null);

(statearr_27331_27347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (5))){
var state_27318__$1 = state_27318;
var statearr_27332_27348 = state_27318__$1;
(statearr_27332_27348[(2)] = null);

(statearr_27332_27348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (10))){
var inst_27310 = (state_27318[(2)]);
var state_27318__$1 = state_27318;
var statearr_27333_27349 = state_27318__$1;
(statearr_27333_27349[(2)] = inst_27310);

(statearr_27333_27349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27319 === (8))){
var inst_27300 = (state_27318[(7)]);
var state_27318__$1 = state_27318;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27318__$1,(11),out,inst_27300);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27339,out))
;
return ((function (switch__25230__auto__,c__25452__auto___27339,out){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27334[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27334[(1)] = (1));

return statearr_27334;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27318){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27318);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27335){if((e27335 instanceof Object)){
var ex__25234__auto__ = e27335;
var statearr_27336_27350 = state_27318;
(statearr_27336_27350[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27351 = state_27318;
state_27318 = G__27351;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27318);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27339,out))
})();
var state__25454__auto__ = (function (){var statearr_27337 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27337[(6)] = c__25452__auto___27339);

return statearr_27337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27339,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27353 = (function (f,ch,meta27354){
this.f = f;
this.ch = ch;
this.meta27354 = meta27354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27355,meta27354__$1){
var self__ = this;
var _27355__$1 = this;
return (new cljs.core.async.t_cljs$core$async27353(self__.f,self__.ch,meta27354__$1));
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27355){
var self__ = this;
var _27355__$1 = this;
return self__.meta27354;
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27356 = (function (f,ch,meta27354,_,fn1,meta27357){
this.f = f;
this.ch = ch;
this.meta27354 = meta27354;
this._ = _;
this.fn1 = fn1;
this.meta27357 = meta27357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27358,meta27357__$1){
var self__ = this;
var _27358__$1 = this;
return (new cljs.core.async.t_cljs$core$async27356(self__.f,self__.ch,self__.meta27354,self__._,self__.fn1,meta27357__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27358){
var self__ = this;
var _27358__$1 = this;
return self__.meta27357;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27352_SHARP_){
var G__27359 = (((p1__27352_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__27352_SHARP_) : self__.f.call(null,p1__27352_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27359) : f1.call(null,G__27359));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27356.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27354","meta27354",819625597,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27353","cljs.core.async/t_cljs$core$async27353",1072866288,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27357","meta27357",-1910268679,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27356";

cljs.core.async.t_cljs$core$async27356.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27356");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27356.
 */
cljs.core.async.__GT_t_cljs$core$async27356 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27356(f__$1,ch__$1,meta27354__$1,___$2,fn1__$1,meta27357){
return (new cljs.core.async.t_cljs$core$async27356(f__$1,ch__$1,meta27354__$1,___$2,fn1__$1,meta27357));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27356(self__.f,self__.ch,self__.meta27354,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27360 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27360) : self__.f.call(null,G__27360));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27353.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27354","meta27354",819625597,null)], null);
});

cljs.core.async.t_cljs$core$async27353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27353";

cljs.core.async.t_cljs$core$async27353.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27353");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27353.
 */
cljs.core.async.__GT_t_cljs$core$async27353 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27353(f__$1,ch__$1,meta27354){
return (new cljs.core.async.t_cljs$core$async27353(f__$1,ch__$1,meta27354));
});

}

return (new cljs.core.async.t_cljs$core$async27353(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27361 = (function (f,ch,meta27362){
this.f = f;
this.ch = ch;
this.meta27362 = meta27362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27363,meta27362__$1){
var self__ = this;
var _27363__$1 = this;
return (new cljs.core.async.t_cljs$core$async27361(self__.f,self__.ch,meta27362__$1));
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27363){
var self__ = this;
var _27363__$1 = this;
return self__.meta27362;
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async27361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27362","meta27362",1465436443,null)], null);
});

cljs.core.async.t_cljs$core$async27361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27361";

cljs.core.async.t_cljs$core$async27361.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27361");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27361.
 */
cljs.core.async.__GT_t_cljs$core$async27361 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27361(f__$1,ch__$1,meta27362){
return (new cljs.core.async.t_cljs$core$async27361(f__$1,ch__$1,meta27362));
});

}

return (new cljs.core.async.t_cljs$core$async27361(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27364 = (function (p,ch,meta27365){
this.p = p;
this.ch = ch;
this.meta27365 = meta27365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27366,meta27365__$1){
var self__ = this;
var _27366__$1 = this;
return (new cljs.core.async.t_cljs$core$async27364(self__.p,self__.ch,meta27365__$1));
});

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27366){
var self__ = this;
var _27366__$1 = this;
return self__.meta27365;
});

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27364.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27365","meta27365",994819208,null)], null);
});

cljs.core.async.t_cljs$core$async27364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27364";

cljs.core.async.t_cljs$core$async27364.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27364");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27364.
 */
cljs.core.async.__GT_t_cljs$core$async27364 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27364(p__$1,ch__$1,meta27365){
return (new cljs.core.async.t_cljs$core$async27364(p__$1,ch__$1,meta27365));
});

}

return (new cljs.core.async.t_cljs$core$async27364(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27368 = arguments.length;
switch (G__27368) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25452__auto___27408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27408,out){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27408,out){
return (function (state_27389){
var state_val_27390 = (state_27389[(1)]);
if((state_val_27390 === (7))){
var inst_27385 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27391_27409 = state_27389__$1;
(statearr_27391_27409[(2)] = inst_27385);

(statearr_27391_27409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (1))){
var state_27389__$1 = state_27389;
var statearr_27392_27410 = state_27389__$1;
(statearr_27392_27410[(2)] = null);

(statearr_27392_27410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (4))){
var inst_27371 = (state_27389[(7)]);
var inst_27371__$1 = (state_27389[(2)]);
var inst_27372 = (inst_27371__$1 == null);
var state_27389__$1 = (function (){var statearr_27393 = state_27389;
(statearr_27393[(7)] = inst_27371__$1);

return statearr_27393;
})();
if(cljs.core.truth_(inst_27372)){
var statearr_27394_27411 = state_27389__$1;
(statearr_27394_27411[(1)] = (5));

} else {
var statearr_27395_27412 = state_27389__$1;
(statearr_27395_27412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (6))){
var inst_27371 = (state_27389[(7)]);
var inst_27376 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27371) : p.call(null,inst_27371));
var state_27389__$1 = state_27389;
if(cljs.core.truth_(inst_27376)){
var statearr_27396_27413 = state_27389__$1;
(statearr_27396_27413[(1)] = (8));

} else {
var statearr_27397_27414 = state_27389__$1;
(statearr_27397_27414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (3))){
var inst_27387 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27389__$1,inst_27387);
} else {
if((state_val_27390 === (2))){
var state_27389__$1 = state_27389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27389__$1,(4),ch);
} else {
if((state_val_27390 === (11))){
var inst_27379 = (state_27389[(2)]);
var state_27389__$1 = state_27389;
var statearr_27398_27415 = state_27389__$1;
(statearr_27398_27415[(2)] = inst_27379);

(statearr_27398_27415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (9))){
var state_27389__$1 = state_27389;
var statearr_27399_27416 = state_27389__$1;
(statearr_27399_27416[(2)] = null);

(statearr_27399_27416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (5))){
var inst_27374 = cljs.core.async.close_BANG_(out);
var state_27389__$1 = state_27389;
var statearr_27400_27417 = state_27389__$1;
(statearr_27400_27417[(2)] = inst_27374);

(statearr_27400_27417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (10))){
var inst_27382 = (state_27389[(2)]);
var state_27389__$1 = (function (){var statearr_27401 = state_27389;
(statearr_27401[(8)] = inst_27382);

return statearr_27401;
})();
var statearr_27402_27418 = state_27389__$1;
(statearr_27402_27418[(2)] = null);

(statearr_27402_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27390 === (8))){
var inst_27371 = (state_27389[(7)]);
var state_27389__$1 = state_27389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27389__$1,(11),out,inst_27371);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27408,out))
;
return ((function (switch__25230__auto__,c__25452__auto___27408,out){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27403 = [null,null,null,null,null,null,null,null,null];
(statearr_27403[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27403[(1)] = (1));

return statearr_27403;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27389){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27389);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27404){if((e27404 instanceof Object)){
var ex__25234__auto__ = e27404;
var statearr_27405_27419 = state_27389;
(statearr_27405_27419[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27420 = state_27389;
state_27389 = G__27420;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27389);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27408,out))
})();
var state__25454__auto__ = (function (){var statearr_27406 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27406[(6)] = c__25452__auto___27408);

return statearr_27406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27408,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27422 = arguments.length;
switch (G__27422) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25452__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto__){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto__){
return (function (state_27485){
var state_val_27486 = (state_27485[(1)]);
if((state_val_27486 === (7))){
var inst_27481 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27487_27525 = state_27485__$1;
(statearr_27487_27525[(2)] = inst_27481);

(statearr_27487_27525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (20))){
var inst_27451 = (state_27485[(7)]);
var inst_27462 = (state_27485[(2)]);
var inst_27463 = cljs.core.next(inst_27451);
var inst_27437 = inst_27463;
var inst_27438 = null;
var inst_27439 = (0);
var inst_27440 = (0);
var state_27485__$1 = (function (){var statearr_27488 = state_27485;
(statearr_27488[(8)] = inst_27440);

(statearr_27488[(9)] = inst_27437);

(statearr_27488[(10)] = inst_27438);

(statearr_27488[(11)] = inst_27462);

(statearr_27488[(12)] = inst_27439);

return statearr_27488;
})();
var statearr_27489_27526 = state_27485__$1;
(statearr_27489_27526[(2)] = null);

(statearr_27489_27526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (1))){
var state_27485__$1 = state_27485;
var statearr_27490_27527 = state_27485__$1;
(statearr_27490_27527[(2)] = null);

(statearr_27490_27527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (4))){
var inst_27426 = (state_27485[(13)]);
var inst_27426__$1 = (state_27485[(2)]);
var inst_27427 = (inst_27426__$1 == null);
var state_27485__$1 = (function (){var statearr_27491 = state_27485;
(statearr_27491[(13)] = inst_27426__$1);

return statearr_27491;
})();
if(cljs.core.truth_(inst_27427)){
var statearr_27492_27528 = state_27485__$1;
(statearr_27492_27528[(1)] = (5));

} else {
var statearr_27493_27529 = state_27485__$1;
(statearr_27493_27529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (15))){
var state_27485__$1 = state_27485;
var statearr_27497_27530 = state_27485__$1;
(statearr_27497_27530[(2)] = null);

(statearr_27497_27530[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (21))){
var state_27485__$1 = state_27485;
var statearr_27498_27531 = state_27485__$1;
(statearr_27498_27531[(2)] = null);

(statearr_27498_27531[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (13))){
var inst_27440 = (state_27485[(8)]);
var inst_27437 = (state_27485[(9)]);
var inst_27438 = (state_27485[(10)]);
var inst_27439 = (state_27485[(12)]);
var inst_27447 = (state_27485[(2)]);
var inst_27448 = (inst_27440 + (1));
var tmp27494 = inst_27437;
var tmp27495 = inst_27438;
var tmp27496 = inst_27439;
var inst_27437__$1 = tmp27494;
var inst_27438__$1 = tmp27495;
var inst_27439__$1 = tmp27496;
var inst_27440__$1 = inst_27448;
var state_27485__$1 = (function (){var statearr_27499 = state_27485;
(statearr_27499[(8)] = inst_27440__$1);

(statearr_27499[(9)] = inst_27437__$1);

(statearr_27499[(10)] = inst_27438__$1);

(statearr_27499[(12)] = inst_27439__$1);

(statearr_27499[(14)] = inst_27447);

return statearr_27499;
})();
var statearr_27500_27532 = state_27485__$1;
(statearr_27500_27532[(2)] = null);

(statearr_27500_27532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (22))){
var state_27485__$1 = state_27485;
var statearr_27501_27533 = state_27485__$1;
(statearr_27501_27533[(2)] = null);

(statearr_27501_27533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (6))){
var inst_27426 = (state_27485[(13)]);
var inst_27435 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27426) : f.call(null,inst_27426));
var inst_27436 = cljs.core.seq(inst_27435);
var inst_27437 = inst_27436;
var inst_27438 = null;
var inst_27439 = (0);
var inst_27440 = (0);
var state_27485__$1 = (function (){var statearr_27502 = state_27485;
(statearr_27502[(8)] = inst_27440);

(statearr_27502[(9)] = inst_27437);

(statearr_27502[(10)] = inst_27438);

(statearr_27502[(12)] = inst_27439);

return statearr_27502;
})();
var statearr_27503_27534 = state_27485__$1;
(statearr_27503_27534[(2)] = null);

(statearr_27503_27534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (17))){
var inst_27451 = (state_27485[(7)]);
var inst_27455 = cljs.core.chunk_first(inst_27451);
var inst_27456 = cljs.core.chunk_rest(inst_27451);
var inst_27457 = cljs.core.count(inst_27455);
var inst_27437 = inst_27456;
var inst_27438 = inst_27455;
var inst_27439 = inst_27457;
var inst_27440 = (0);
var state_27485__$1 = (function (){var statearr_27504 = state_27485;
(statearr_27504[(8)] = inst_27440);

(statearr_27504[(9)] = inst_27437);

(statearr_27504[(10)] = inst_27438);

(statearr_27504[(12)] = inst_27439);

return statearr_27504;
})();
var statearr_27505_27535 = state_27485__$1;
(statearr_27505_27535[(2)] = null);

(statearr_27505_27535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (3))){
var inst_27483 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27485__$1,inst_27483);
} else {
if((state_val_27486 === (12))){
var inst_27471 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27506_27536 = state_27485__$1;
(statearr_27506_27536[(2)] = inst_27471);

(statearr_27506_27536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (2))){
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27485__$1,(4),in$);
} else {
if((state_val_27486 === (23))){
var inst_27479 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27507_27537 = state_27485__$1;
(statearr_27507_27537[(2)] = inst_27479);

(statearr_27507_27537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (19))){
var inst_27466 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27508_27538 = state_27485__$1;
(statearr_27508_27538[(2)] = inst_27466);

(statearr_27508_27538[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (11))){
var inst_27437 = (state_27485[(9)]);
var inst_27451 = (state_27485[(7)]);
var inst_27451__$1 = cljs.core.seq(inst_27437);
var state_27485__$1 = (function (){var statearr_27509 = state_27485;
(statearr_27509[(7)] = inst_27451__$1);

return statearr_27509;
})();
if(inst_27451__$1){
var statearr_27510_27539 = state_27485__$1;
(statearr_27510_27539[(1)] = (14));

} else {
var statearr_27511_27540 = state_27485__$1;
(statearr_27511_27540[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (9))){
var inst_27473 = (state_27485[(2)]);
var inst_27474 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27485__$1 = (function (){var statearr_27512 = state_27485;
(statearr_27512[(15)] = inst_27473);

return statearr_27512;
})();
if(cljs.core.truth_(inst_27474)){
var statearr_27513_27541 = state_27485__$1;
(statearr_27513_27541[(1)] = (21));

} else {
var statearr_27514_27542 = state_27485__$1;
(statearr_27514_27542[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (5))){
var inst_27429 = cljs.core.async.close_BANG_(out);
var state_27485__$1 = state_27485;
var statearr_27515_27543 = state_27485__$1;
(statearr_27515_27543[(2)] = inst_27429);

(statearr_27515_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (14))){
var inst_27451 = (state_27485[(7)]);
var inst_27453 = cljs.core.chunked_seq_QMARK_(inst_27451);
var state_27485__$1 = state_27485;
if(inst_27453){
var statearr_27516_27544 = state_27485__$1;
(statearr_27516_27544[(1)] = (17));

} else {
var statearr_27517_27545 = state_27485__$1;
(statearr_27517_27545[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (16))){
var inst_27469 = (state_27485[(2)]);
var state_27485__$1 = state_27485;
var statearr_27518_27546 = state_27485__$1;
(statearr_27518_27546[(2)] = inst_27469);

(statearr_27518_27546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27486 === (10))){
var inst_27440 = (state_27485[(8)]);
var inst_27438 = (state_27485[(10)]);
var inst_27445 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27438,inst_27440);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27485__$1,(13),out,inst_27445);
} else {
if((state_val_27486 === (18))){
var inst_27451 = (state_27485[(7)]);
var inst_27460 = cljs.core.first(inst_27451);
var state_27485__$1 = state_27485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27485__$1,(20),out,inst_27460);
} else {
if((state_val_27486 === (8))){
var inst_27440 = (state_27485[(8)]);
var inst_27439 = (state_27485[(12)]);
var inst_27442 = (inst_27440 < inst_27439);
var inst_27443 = inst_27442;
var state_27485__$1 = state_27485;
if(cljs.core.truth_(inst_27443)){
var statearr_27519_27547 = state_27485__$1;
(statearr_27519_27547[(1)] = (10));

} else {
var statearr_27520_27548 = state_27485__$1;
(statearr_27520_27548[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto__))
;
return ((function (switch__25230__auto__,c__25452__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25231__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25231__auto____0 = (function (){
var statearr_27521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27521[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25231__auto__);

(statearr_27521[(1)] = (1));

return statearr_27521;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25231__auto____1 = (function (state_27485){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27485);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27522){if((e27522 instanceof Object)){
var ex__25234__auto__ = e27522;
var statearr_27523_27549 = state_27485;
(statearr_27523_27549[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27522;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27550 = state_27485;
state_27485 = G__27550;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25231__auto__ = function(state_27485){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25231__auto____1.call(this,state_27485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25231__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25231__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto__))
})();
var state__25454__auto__ = (function (){var statearr_27524 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27524[(6)] = c__25452__auto__);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto__))
);

return c__25452__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27552 = arguments.length;
switch (G__27552) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27555 = arguments.length;
switch (G__27555) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27558 = arguments.length;
switch (G__27558) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25452__auto___27605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27605,out){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27605,out){
return (function (state_27582){
var state_val_27583 = (state_27582[(1)]);
if((state_val_27583 === (7))){
var inst_27577 = (state_27582[(2)]);
var state_27582__$1 = state_27582;
var statearr_27584_27606 = state_27582__$1;
(statearr_27584_27606[(2)] = inst_27577);

(statearr_27584_27606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (1))){
var inst_27559 = null;
var state_27582__$1 = (function (){var statearr_27585 = state_27582;
(statearr_27585[(7)] = inst_27559);

return statearr_27585;
})();
var statearr_27586_27607 = state_27582__$1;
(statearr_27586_27607[(2)] = null);

(statearr_27586_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (4))){
var inst_27562 = (state_27582[(8)]);
var inst_27562__$1 = (state_27582[(2)]);
var inst_27563 = (inst_27562__$1 == null);
var inst_27564 = cljs.core.not(inst_27563);
var state_27582__$1 = (function (){var statearr_27587 = state_27582;
(statearr_27587[(8)] = inst_27562__$1);

return statearr_27587;
})();
if(inst_27564){
var statearr_27588_27608 = state_27582__$1;
(statearr_27588_27608[(1)] = (5));

} else {
var statearr_27589_27609 = state_27582__$1;
(statearr_27589_27609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (6))){
var state_27582__$1 = state_27582;
var statearr_27590_27610 = state_27582__$1;
(statearr_27590_27610[(2)] = null);

(statearr_27590_27610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (3))){
var inst_27579 = (state_27582[(2)]);
var inst_27580 = cljs.core.async.close_BANG_(out);
var state_27582__$1 = (function (){var statearr_27591 = state_27582;
(statearr_27591[(9)] = inst_27579);

return statearr_27591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27582__$1,inst_27580);
} else {
if((state_val_27583 === (2))){
var state_27582__$1 = state_27582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27582__$1,(4),ch);
} else {
if((state_val_27583 === (11))){
var inst_27562 = (state_27582[(8)]);
var inst_27571 = (state_27582[(2)]);
var inst_27559 = inst_27562;
var state_27582__$1 = (function (){var statearr_27592 = state_27582;
(statearr_27592[(7)] = inst_27559);

(statearr_27592[(10)] = inst_27571);

return statearr_27592;
})();
var statearr_27593_27611 = state_27582__$1;
(statearr_27593_27611[(2)] = null);

(statearr_27593_27611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (9))){
var inst_27562 = (state_27582[(8)]);
var state_27582__$1 = state_27582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27582__$1,(11),out,inst_27562);
} else {
if((state_val_27583 === (5))){
var inst_27559 = (state_27582[(7)]);
var inst_27562 = (state_27582[(8)]);
var inst_27566 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27562,inst_27559);
var state_27582__$1 = state_27582;
if(inst_27566){
var statearr_27595_27612 = state_27582__$1;
(statearr_27595_27612[(1)] = (8));

} else {
var statearr_27596_27613 = state_27582__$1;
(statearr_27596_27613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (10))){
var inst_27574 = (state_27582[(2)]);
var state_27582__$1 = state_27582;
var statearr_27597_27614 = state_27582__$1;
(statearr_27597_27614[(2)] = inst_27574);

(statearr_27597_27614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27583 === (8))){
var inst_27559 = (state_27582[(7)]);
var tmp27594 = inst_27559;
var inst_27559__$1 = tmp27594;
var state_27582__$1 = (function (){var statearr_27598 = state_27582;
(statearr_27598[(7)] = inst_27559__$1);

return statearr_27598;
})();
var statearr_27599_27615 = state_27582__$1;
(statearr_27599_27615[(2)] = null);

(statearr_27599_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27605,out))
;
return ((function (switch__25230__auto__,c__25452__auto___27605,out){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27600[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27600[(1)] = (1));

return statearr_27600;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27582){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27582);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27601){if((e27601 instanceof Object)){
var ex__25234__auto__ = e27601;
var statearr_27602_27616 = state_27582;
(statearr_27602_27616[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27617 = state_27582;
state_27582 = G__27617;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27605,out))
})();
var state__25454__auto__ = (function (){var statearr_27603 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27603[(6)] = c__25452__auto___27605);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27605,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27619 = arguments.length;
switch (G__27619) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25452__auto___27685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27685,out){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27685,out){
return (function (state_27657){
var state_val_27658 = (state_27657[(1)]);
if((state_val_27658 === (7))){
var inst_27653 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
var statearr_27659_27686 = state_27657__$1;
(statearr_27659_27686[(2)] = inst_27653);

(statearr_27659_27686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (1))){
var inst_27620 = (new Array(n));
var inst_27621 = inst_27620;
var inst_27622 = (0);
var state_27657__$1 = (function (){var statearr_27660 = state_27657;
(statearr_27660[(7)] = inst_27622);

(statearr_27660[(8)] = inst_27621);

return statearr_27660;
})();
var statearr_27661_27687 = state_27657__$1;
(statearr_27661_27687[(2)] = null);

(statearr_27661_27687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (4))){
var inst_27625 = (state_27657[(9)]);
var inst_27625__$1 = (state_27657[(2)]);
var inst_27626 = (inst_27625__$1 == null);
var inst_27627 = cljs.core.not(inst_27626);
var state_27657__$1 = (function (){var statearr_27662 = state_27657;
(statearr_27662[(9)] = inst_27625__$1);

return statearr_27662;
})();
if(inst_27627){
var statearr_27663_27688 = state_27657__$1;
(statearr_27663_27688[(1)] = (5));

} else {
var statearr_27664_27689 = state_27657__$1;
(statearr_27664_27689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (15))){
var inst_27647 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
var statearr_27665_27690 = state_27657__$1;
(statearr_27665_27690[(2)] = inst_27647);

(statearr_27665_27690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (13))){
var state_27657__$1 = state_27657;
var statearr_27666_27691 = state_27657__$1;
(statearr_27666_27691[(2)] = null);

(statearr_27666_27691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (6))){
var inst_27622 = (state_27657[(7)]);
var inst_27643 = (inst_27622 > (0));
var state_27657__$1 = state_27657;
if(cljs.core.truth_(inst_27643)){
var statearr_27667_27692 = state_27657__$1;
(statearr_27667_27692[(1)] = (12));

} else {
var statearr_27668_27693 = state_27657__$1;
(statearr_27668_27693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (3))){
var inst_27655 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27657__$1,inst_27655);
} else {
if((state_val_27658 === (12))){
var inst_27621 = (state_27657[(8)]);
var inst_27645 = cljs.core.vec(inst_27621);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27657__$1,(15),out,inst_27645);
} else {
if((state_val_27658 === (2))){
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27657__$1,(4),ch);
} else {
if((state_val_27658 === (11))){
var inst_27637 = (state_27657[(2)]);
var inst_27638 = (new Array(n));
var inst_27621 = inst_27638;
var inst_27622 = (0);
var state_27657__$1 = (function (){var statearr_27669 = state_27657;
(statearr_27669[(7)] = inst_27622);

(statearr_27669[(8)] = inst_27621);

(statearr_27669[(10)] = inst_27637);

return statearr_27669;
})();
var statearr_27670_27694 = state_27657__$1;
(statearr_27670_27694[(2)] = null);

(statearr_27670_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (9))){
var inst_27621 = (state_27657[(8)]);
var inst_27635 = cljs.core.vec(inst_27621);
var state_27657__$1 = state_27657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27657__$1,(11),out,inst_27635);
} else {
if((state_val_27658 === (5))){
var inst_27622 = (state_27657[(7)]);
var inst_27621 = (state_27657[(8)]);
var inst_27625 = (state_27657[(9)]);
var inst_27630 = (state_27657[(11)]);
var inst_27629 = (inst_27621[inst_27622] = inst_27625);
var inst_27630__$1 = (inst_27622 + (1));
var inst_27631 = (inst_27630__$1 < n);
var state_27657__$1 = (function (){var statearr_27671 = state_27657;
(statearr_27671[(11)] = inst_27630__$1);

(statearr_27671[(12)] = inst_27629);

return statearr_27671;
})();
if(cljs.core.truth_(inst_27631)){
var statearr_27672_27695 = state_27657__$1;
(statearr_27672_27695[(1)] = (8));

} else {
var statearr_27673_27696 = state_27657__$1;
(statearr_27673_27696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (14))){
var inst_27650 = (state_27657[(2)]);
var inst_27651 = cljs.core.async.close_BANG_(out);
var state_27657__$1 = (function (){var statearr_27675 = state_27657;
(statearr_27675[(13)] = inst_27650);

return statearr_27675;
})();
var statearr_27676_27697 = state_27657__$1;
(statearr_27676_27697[(2)] = inst_27651);

(statearr_27676_27697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (10))){
var inst_27641 = (state_27657[(2)]);
var state_27657__$1 = state_27657;
var statearr_27677_27698 = state_27657__$1;
(statearr_27677_27698[(2)] = inst_27641);

(statearr_27677_27698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27658 === (8))){
var inst_27621 = (state_27657[(8)]);
var inst_27630 = (state_27657[(11)]);
var tmp27674 = inst_27621;
var inst_27621__$1 = tmp27674;
var inst_27622 = inst_27630;
var state_27657__$1 = (function (){var statearr_27678 = state_27657;
(statearr_27678[(7)] = inst_27622);

(statearr_27678[(8)] = inst_27621__$1);

return statearr_27678;
})();
var statearr_27679_27699 = state_27657__$1;
(statearr_27679_27699[(2)] = null);

(statearr_27679_27699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27685,out))
;
return ((function (switch__25230__auto__,c__25452__auto___27685,out){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27680[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27680[(1)] = (1));

return statearr_27680;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27657){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27657);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27681){if((e27681 instanceof Object)){
var ex__25234__auto__ = e27681;
var statearr_27682_27700 = state_27657;
(statearr_27682_27700[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27701 = state_27657;
state_27657 = G__27701;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27685,out))
})();
var state__25454__auto__ = (function (){var statearr_27683 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27683[(6)] = c__25452__auto___27685);

return statearr_27683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27685,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27703 = arguments.length;
switch (G__27703) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25452__auto___27783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25452__auto___27783,out){
return (function (){
var f__25453__auto__ = (function (){var switch__25230__auto__ = ((function (c__25452__auto___27783,out){
return (function (state_27745){
var state_val_27746 = (state_27745[(1)]);
if((state_val_27746 === (7))){
var inst_27741 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27747_27784 = state_27745__$1;
(statearr_27747_27784[(2)] = inst_27741);

(statearr_27747_27784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (1))){
var inst_27704 = [];
var inst_27705 = inst_27704;
var inst_27706 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27745__$1 = (function (){var statearr_27748 = state_27745;
(statearr_27748[(7)] = inst_27706);

(statearr_27748[(8)] = inst_27705);

return statearr_27748;
})();
var statearr_27749_27785 = state_27745__$1;
(statearr_27749_27785[(2)] = null);

(statearr_27749_27785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (4))){
var inst_27709 = (state_27745[(9)]);
var inst_27709__$1 = (state_27745[(2)]);
var inst_27710 = (inst_27709__$1 == null);
var inst_27711 = cljs.core.not(inst_27710);
var state_27745__$1 = (function (){var statearr_27751 = state_27745;
(statearr_27751[(9)] = inst_27709__$1);

return statearr_27751;
})();
if(inst_27711){
var statearr_27753_27786 = state_27745__$1;
(statearr_27753_27786[(1)] = (5));

} else {
var statearr_27754_27787 = state_27745__$1;
(statearr_27754_27787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (15))){
var inst_27735 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27755_27789 = state_27745__$1;
(statearr_27755_27789[(2)] = inst_27735);

(statearr_27755_27789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (13))){
var state_27745__$1 = state_27745;
var statearr_27756_27791 = state_27745__$1;
(statearr_27756_27791[(2)] = null);

(statearr_27756_27791[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (6))){
var inst_27705 = (state_27745[(8)]);
var inst_27730 = inst_27705.length;
var inst_27731 = (inst_27730 > (0));
var state_27745__$1 = state_27745;
if(cljs.core.truth_(inst_27731)){
var statearr_27757_27792 = state_27745__$1;
(statearr_27757_27792[(1)] = (12));

} else {
var statearr_27758_27793 = state_27745__$1;
(statearr_27758_27793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (3))){
var inst_27743 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27745__$1,inst_27743);
} else {
if((state_val_27746 === (12))){
var inst_27705 = (state_27745[(8)]);
var inst_27733 = cljs.core.vec(inst_27705);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27745__$1,(15),out,inst_27733);
} else {
if((state_val_27746 === (2))){
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27745__$1,(4),ch);
} else {
if((state_val_27746 === (11))){
var inst_27713 = (state_27745[(10)]);
var inst_27709 = (state_27745[(9)]);
var inst_27723 = (state_27745[(2)]);
var inst_27724 = [];
var inst_27725 = inst_27724.push(inst_27709);
var inst_27705 = inst_27724;
var inst_27706 = inst_27713;
var state_27745__$1 = (function (){var statearr_27759 = state_27745;
(statearr_27759[(11)] = inst_27723);

(statearr_27759[(7)] = inst_27706);

(statearr_27759[(12)] = inst_27725);

(statearr_27759[(8)] = inst_27705);

return statearr_27759;
})();
var statearr_27760_27794 = state_27745__$1;
(statearr_27760_27794[(2)] = null);

(statearr_27760_27794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (9))){
var inst_27705 = (state_27745[(8)]);
var inst_27721 = cljs.core.vec(inst_27705);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27745__$1,(11),out,inst_27721);
} else {
if((state_val_27746 === (5))){
var inst_27713 = (state_27745[(10)]);
var inst_27706 = (state_27745[(7)]);
var inst_27709 = (state_27745[(9)]);
var inst_27713__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27709) : f.call(null,inst_27709));
var inst_27714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27713__$1,inst_27706);
var inst_27715 = cljs.core.keyword_identical_QMARK_(inst_27706,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27716 = ((inst_27714) || (inst_27715));
var state_27745__$1 = (function (){var statearr_27763 = state_27745;
(statearr_27763[(10)] = inst_27713__$1);

return statearr_27763;
})();
if(cljs.core.truth_(inst_27716)){
var statearr_27764_27796 = state_27745__$1;
(statearr_27764_27796[(1)] = (8));

} else {
var statearr_27765_27797 = state_27745__$1;
(statearr_27765_27797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (14))){
var inst_27738 = (state_27745[(2)]);
var inst_27739 = cljs.core.async.close_BANG_(out);
var state_27745__$1 = (function (){var statearr_27767 = state_27745;
(statearr_27767[(13)] = inst_27738);

return statearr_27767;
})();
var statearr_27768_27798 = state_27745__$1;
(statearr_27768_27798[(2)] = inst_27739);

(statearr_27768_27798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (10))){
var inst_27728 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27769_27799 = state_27745__$1;
(statearr_27769_27799[(2)] = inst_27728);

(statearr_27769_27799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (8))){
var inst_27713 = (state_27745[(10)]);
var inst_27705 = (state_27745[(8)]);
var inst_27709 = (state_27745[(9)]);
var inst_27718 = inst_27705.push(inst_27709);
var tmp27766 = inst_27705;
var inst_27705__$1 = tmp27766;
var inst_27706 = inst_27713;
var state_27745__$1 = (function (){var statearr_27772 = state_27745;
(statearr_27772[(14)] = inst_27718);

(statearr_27772[(7)] = inst_27706);

(statearr_27772[(8)] = inst_27705__$1);

return statearr_27772;
})();
var statearr_27773_27802 = state_27745__$1;
(statearr_27773_27802[(2)] = null);

(statearr_27773_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25452__auto___27783,out))
;
return ((function (switch__25230__auto__,c__25452__auto___27783,out){
return (function() {
var cljs$core$async$state_machine__25231__auto__ = null;
var cljs$core$async$state_machine__25231__auto____0 = (function (){
var statearr_27774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27774[(0)] = cljs$core$async$state_machine__25231__auto__);

(statearr_27774[(1)] = (1));

return statearr_27774;
});
var cljs$core$async$state_machine__25231__auto____1 = (function (state_27745){
while(true){
var ret_value__25232__auto__ = (function (){try{while(true){
var result__25233__auto__ = switch__25230__auto__(state_27745);
if(cljs.core.keyword_identical_QMARK_(result__25233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25233__auto__;
}
break;
}
}catch (e27775){if((e27775 instanceof Object)){
var ex__25234__auto__ = e27775;
var statearr_27779_27805 = state_27745;
(statearr_27779_27805[(5)] = ex__25234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27806 = state_27745;
state_27745 = G__27806;
continue;
} else {
return ret_value__25232__auto__;
}
break;
}
});
cljs$core$async$state_machine__25231__auto__ = function(state_27745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25231__auto____1.call(this,state_27745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25231__auto____0;
cljs$core$async$state_machine__25231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25231__auto____1;
return cljs$core$async$state_machine__25231__auto__;
})()
;})(switch__25230__auto__,c__25452__auto___27783,out))
})();
var state__25454__auto__ = (function (){var statearr_27781 = (f__25453__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25453__auto__.cljs$core$IFn$_invoke$arity$0() : f__25453__auto__.call(null));
(statearr_27781[(6)] = c__25452__auto___27783);

return statearr_27781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25454__auto__);
});})(c__25452__auto___27783,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
