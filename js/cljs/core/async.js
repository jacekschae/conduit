// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43852 = arguments.length;
switch (G__43852) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43853 = (function (f,blockable,meta43854){
this.f = f;
this.blockable = blockable;
this.meta43854 = meta43854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43855,meta43854__$1){
var self__ = this;
var _43855__$1 = this;
return (new cljs.core.async.t_cljs$core$async43853(self__.f,self__.blockable,meta43854__$1));
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43855){
var self__ = this;
var _43855__$1 = this;
return self__.meta43854;
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43854","meta43854",-1401719279,null)], null);
});

cljs.core.async.t_cljs$core$async43853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43853";

cljs.core.async.t_cljs$core$async43853.cljs$lang$ctorPrWriter = (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async43853");
});

cljs.core.async.__GT_t_cljs$core$async43853 = (function cljs$core$async$__GT_t_cljs$core$async43853(f__$1,blockable__$1,meta43854){
return (new cljs.core.async.t_cljs$core$async43853(f__$1,blockable__$1,meta43854));
});

}

return (new cljs.core.async.t_cljs$core$async43853(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__43859 = arguments.length;
switch (G__43859) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__43862 = arguments.length;
switch (G__43862) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__43865 = arguments.length;
switch (G__43865) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43867 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43867);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43867,ret){
return (function (){
return fn1.call(null,val_43867);
});})(val_43867,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__43869 = arguments.length;
switch (G__43869) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29432__auto___43871 = n;
var x_43872 = (0);
while(true){
if((x_43872 < n__29432__auto___43871)){
(a[x_43872] = (0));

var G__43873 = (x_43872 + (1));
x_43872 = G__43873;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__43874 = (i + (1));
i = G__43874;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43875 = (function (flag,meta43876){
this.flag = flag;
this.meta43876 = meta43876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43877,meta43876__$1){
var self__ = this;
var _43877__$1 = this;
return (new cljs.core.async.t_cljs$core$async43875(self__.flag,meta43876__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43877){
var self__ = this;
var _43877__$1 = this;
return self__.meta43876;
});})(flag))
;

cljs.core.async.t_cljs$core$async43875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43875.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43876","meta43876",1924778864,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43875";

cljs.core.async.t_cljs$core$async43875.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async43875");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43875 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43875(flag__$1,meta43876){
return (new cljs.core.async.t_cljs$core$async43875(flag__$1,meta43876));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43875(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43878 = (function (flag,cb,meta43879){
this.flag = flag;
this.cb = cb;
this.meta43879 = meta43879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43880,meta43879__$1){
var self__ = this;
var _43880__$1 = this;
return (new cljs.core.async.t_cljs$core$async43878(self__.flag,self__.cb,meta43879__$1));
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43880){
var self__ = this;
var _43880__$1 = this;
return self__.meta43879;
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43879","meta43879",-1557325036,null)], null);
});

cljs.core.async.t_cljs$core$async43878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43878";

cljs.core.async.t_cljs$core$async43878.cljs$lang$ctorPrWriter = (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async43878");
});

cljs.core.async.__GT_t_cljs$core$async43878 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43878(flag__$1,cb__$1,meta43879){
return (new cljs.core.async.t_cljs$core$async43878(flag__$1,cb__$1,meta43879));
});

}

return (new cljs.core.async.t_cljs$core$async43878(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43881_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43881_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43882_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43882_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28485__auto__ = wport;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43883 = (i + (1));
i = G__43883;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28485__auto__ = ret;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28473__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28473__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__29663__auto__ = [];
var len__29656__auto___43889 = arguments.length;
var i__29657__auto___43890 = (0);
while(true){
if((i__29657__auto___43890 < len__29656__auto___43889)){
args__29663__auto__.push((arguments[i__29657__auto___43890]));

var G__43891 = (i__29657__auto___43890 + (1));
i__29657__auto___43890 = G__43891;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43886){
var map__43887 = p__43886;
var map__43887__$1 = ((((!((map__43887 == null)))?((((map__43887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43887):map__43887);
var opts = map__43887__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43884){
var G__43885 = cljs.core.first.call(null,seq43884);
var seq43884__$1 = cljs.core.next.call(null,seq43884);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43885,seq43884__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__43893 = arguments.length;
switch (G__43893) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39120__auto___43939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___43939){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___43939){
return (function (state_43917){
var state_val_43918 = (state_43917[(1)]);
if((state_val_43918 === (7))){
var inst_43913 = (state_43917[(2)]);
var state_43917__$1 = state_43917;
var statearr_43919_43940 = state_43917__$1;
(statearr_43919_43940[(2)] = inst_43913);

(statearr_43919_43940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (1))){
var state_43917__$1 = state_43917;
var statearr_43920_43941 = state_43917__$1;
(statearr_43920_43941[(2)] = null);

(statearr_43920_43941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (4))){
var inst_43896 = (state_43917[(7)]);
var inst_43896__$1 = (state_43917[(2)]);
var inst_43897 = (inst_43896__$1 == null);
var state_43917__$1 = (function (){var statearr_43921 = state_43917;
(statearr_43921[(7)] = inst_43896__$1);

return statearr_43921;
})();
if(cljs.core.truth_(inst_43897)){
var statearr_43922_43942 = state_43917__$1;
(statearr_43922_43942[(1)] = (5));

} else {
var statearr_43923_43943 = state_43917__$1;
(statearr_43923_43943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (13))){
var state_43917__$1 = state_43917;
var statearr_43924_43944 = state_43917__$1;
(statearr_43924_43944[(2)] = null);

(statearr_43924_43944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (6))){
var inst_43896 = (state_43917[(7)]);
var state_43917__$1 = state_43917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43917__$1,(11),to,inst_43896);
} else {
if((state_val_43918 === (3))){
var inst_43915 = (state_43917[(2)]);
var state_43917__$1 = state_43917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43917__$1,inst_43915);
} else {
if((state_val_43918 === (12))){
var state_43917__$1 = state_43917;
var statearr_43925_43945 = state_43917__$1;
(statearr_43925_43945[(2)] = null);

(statearr_43925_43945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (2))){
var state_43917__$1 = state_43917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43917__$1,(4),from);
} else {
if((state_val_43918 === (11))){
var inst_43906 = (state_43917[(2)]);
var state_43917__$1 = state_43917;
if(cljs.core.truth_(inst_43906)){
var statearr_43926_43946 = state_43917__$1;
(statearr_43926_43946[(1)] = (12));

} else {
var statearr_43927_43947 = state_43917__$1;
(statearr_43927_43947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (9))){
var state_43917__$1 = state_43917;
var statearr_43928_43948 = state_43917__$1;
(statearr_43928_43948[(2)] = null);

(statearr_43928_43948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (5))){
var state_43917__$1 = state_43917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43929_43949 = state_43917__$1;
(statearr_43929_43949[(1)] = (8));

} else {
var statearr_43930_43950 = state_43917__$1;
(statearr_43930_43950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (14))){
var inst_43911 = (state_43917[(2)]);
var state_43917__$1 = state_43917;
var statearr_43931_43951 = state_43917__$1;
(statearr_43931_43951[(2)] = inst_43911);

(statearr_43931_43951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (10))){
var inst_43903 = (state_43917[(2)]);
var state_43917__$1 = state_43917;
var statearr_43932_43952 = state_43917__$1;
(statearr_43932_43952[(2)] = inst_43903);

(statearr_43932_43952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43918 === (8))){
var inst_43900 = cljs.core.async.close_BANG_.call(null,to);
var state_43917__$1 = state_43917;
var statearr_43933_43953 = state_43917__$1;
(statearr_43933_43953[(2)] = inst_43900);

(statearr_43933_43953[(1)] = (10));


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
});})(c__39120__auto___43939))
;
return ((function (switch__39032__auto__,c__39120__auto___43939){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_43934 = [null,null,null,null,null,null,null,null];
(statearr_43934[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_43934[(1)] = (1));

return statearr_43934;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_43917){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_43917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e43935){if((e43935 instanceof Object)){
var ex__39036__auto__ = e43935;
var statearr_43936_43954 = state_43917;
(statearr_43936_43954[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43955 = state_43917;
state_43917 = G__43955;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_43917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_43917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___43939))
})();
var state__39122__auto__ = (function (){var statearr_43937 = f__39121__auto__.call(null);
(statearr_43937[(6)] = c__39120__auto___43939);

return statearr_43937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___43939))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__43956){
var vec__43957 = p__43956;
var v = cljs.core.nth.call(null,vec__43957,(0),null);
var p = cljs.core.nth.call(null,vec__43957,(1),null);
var job = vec__43957;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39120__auto___44128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___44128,res,vec__43957,v,p,job,jobs,results){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___44128,res,vec__43957,v,p,job,jobs,results){
return (function (state_43964){
var state_val_43965 = (state_43964[(1)]);
if((state_val_43965 === (1))){
var state_43964__$1 = state_43964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43964__$1,(2),res,v);
} else {
if((state_val_43965 === (2))){
var inst_43961 = (state_43964[(2)]);
var inst_43962 = cljs.core.async.close_BANG_.call(null,res);
var state_43964__$1 = (function (){var statearr_43966 = state_43964;
(statearr_43966[(7)] = inst_43961);

return statearr_43966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43964__$1,inst_43962);
} else {
return null;
}
}
});})(c__39120__auto___44128,res,vec__43957,v,p,job,jobs,results))
;
return ((function (switch__39032__auto__,c__39120__auto___44128,res,vec__43957,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0 = (function (){
var statearr_43967 = [null,null,null,null,null,null,null,null];
(statearr_43967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__);

(statearr_43967[(1)] = (1));

return statearr_43967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1 = (function (state_43964){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_43964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e43968){if((e43968 instanceof Object)){
var ex__39036__auto__ = e43968;
var statearr_43969_44129 = state_43964;
(statearr_43969_44129[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44130 = state_43964;
state_43964 = G__44130;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = function(state_43964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1.call(this,state_43964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___44128,res,vec__43957,v,p,job,jobs,results))
})();
var state__39122__auto__ = (function (){var statearr_43970 = f__39121__auto__.call(null);
(statearr_43970[(6)] = c__39120__auto___44128);

return statearr_43970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___44128,res,vec__43957,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43971){
var vec__43972 = p__43971;
var v = cljs.core.nth.call(null,vec__43972,(0),null);
var p = cljs.core.nth.call(null,vec__43972,(1),null);
var job = vec__43972;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29432__auto___44131 = n;
var __44132 = (0);
while(true){
if((__44132 < n__29432__auto___44131)){
var G__43975_44133 = type;
var G__43975_44134__$1 = (((G__43975_44133 instanceof cljs.core.Keyword))?G__43975_44133.fqn:null);
switch (G__43975_44134__$1) {
case "compute":
var c__39120__auto___44136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44132,c__39120__auto___44136,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (__44132,c__39120__auto___44136,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async){
return (function (state_43988){
var state_val_43989 = (state_43988[(1)]);
if((state_val_43989 === (1))){
var state_43988__$1 = state_43988;
var statearr_43990_44137 = state_43988__$1;
(statearr_43990_44137[(2)] = null);

(statearr_43990_44137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (2))){
var state_43988__$1 = state_43988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43988__$1,(4),jobs);
} else {
if((state_val_43989 === (3))){
var inst_43986 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43988__$1,inst_43986);
} else {
if((state_val_43989 === (4))){
var inst_43978 = (state_43988[(2)]);
var inst_43979 = process.call(null,inst_43978);
var state_43988__$1 = state_43988;
if(cljs.core.truth_(inst_43979)){
var statearr_43991_44138 = state_43988__$1;
(statearr_43991_44138[(1)] = (5));

} else {
var statearr_43992_44139 = state_43988__$1;
(statearr_43992_44139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (5))){
var state_43988__$1 = state_43988;
var statearr_43993_44140 = state_43988__$1;
(statearr_43993_44140[(2)] = null);

(statearr_43993_44140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (6))){
var state_43988__$1 = state_43988;
var statearr_43994_44141 = state_43988__$1;
(statearr_43994_44141[(2)] = null);

(statearr_43994_44141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43989 === (7))){
var inst_43984 = (state_43988[(2)]);
var state_43988__$1 = state_43988;
var statearr_43995_44142 = state_43988__$1;
(statearr_43995_44142[(2)] = inst_43984);

(statearr_43995_44142[(1)] = (3));


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
});})(__44132,c__39120__auto___44136,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async))
;
return ((function (__44132,switch__39032__auto__,c__39120__auto___44136,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0 = (function (){
var statearr_43996 = [null,null,null,null,null,null,null];
(statearr_43996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__);

(statearr_43996[(1)] = (1));

return statearr_43996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1 = (function (state_43988){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_43988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e43997){if((e43997 instanceof Object)){
var ex__39036__auto__ = e43997;
var statearr_43998_44143 = state_43988;
(statearr_43998_44143[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44144 = state_43988;
state_43988 = G__44144;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = function(state_43988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1.call(this,state_43988);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__;
})()
;})(__44132,switch__39032__auto__,c__39120__auto___44136,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async))
})();
var state__39122__auto__ = (function (){var statearr_43999 = f__39121__auto__.call(null);
(statearr_43999[(6)] = c__39120__auto___44136);

return statearr_43999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(__44132,c__39120__auto___44136,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async))
);


break;
case "async":
var c__39120__auto___44145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44132,c__39120__auto___44145,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (__44132,c__39120__auto___44145,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async){
return (function (state_44012){
var state_val_44013 = (state_44012[(1)]);
if((state_val_44013 === (1))){
var state_44012__$1 = state_44012;
var statearr_44014_44146 = state_44012__$1;
(statearr_44014_44146[(2)] = null);

(statearr_44014_44146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44013 === (2))){
var state_44012__$1 = state_44012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44012__$1,(4),jobs);
} else {
if((state_val_44013 === (3))){
var inst_44010 = (state_44012[(2)]);
var state_44012__$1 = state_44012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44012__$1,inst_44010);
} else {
if((state_val_44013 === (4))){
var inst_44002 = (state_44012[(2)]);
var inst_44003 = async.call(null,inst_44002);
var state_44012__$1 = state_44012;
if(cljs.core.truth_(inst_44003)){
var statearr_44015_44147 = state_44012__$1;
(statearr_44015_44147[(1)] = (5));

} else {
var statearr_44016_44148 = state_44012__$1;
(statearr_44016_44148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44013 === (5))){
var state_44012__$1 = state_44012;
var statearr_44017_44149 = state_44012__$1;
(statearr_44017_44149[(2)] = null);

(statearr_44017_44149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44013 === (6))){
var state_44012__$1 = state_44012;
var statearr_44018_44150 = state_44012__$1;
(statearr_44018_44150[(2)] = null);

(statearr_44018_44150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44013 === (7))){
var inst_44008 = (state_44012[(2)]);
var state_44012__$1 = state_44012;
var statearr_44019_44151 = state_44012__$1;
(statearr_44019_44151[(2)] = inst_44008);

(statearr_44019_44151[(1)] = (3));


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
});})(__44132,c__39120__auto___44145,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async))
;
return ((function (__44132,switch__39032__auto__,c__39120__auto___44145,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0 = (function (){
var statearr_44020 = [null,null,null,null,null,null,null];
(statearr_44020[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__);

(statearr_44020[(1)] = (1));

return statearr_44020;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1 = (function (state_44012){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44021){if((e44021 instanceof Object)){
var ex__39036__auto__ = e44021;
var statearr_44022_44152 = state_44012;
(statearr_44022_44152[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44153 = state_44012;
state_44012 = G__44153;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = function(state_44012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1.call(this,state_44012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__;
})()
;})(__44132,switch__39032__auto__,c__39120__auto___44145,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async))
})();
var state__39122__auto__ = (function (){var statearr_44023 = f__39121__auto__.call(null);
(statearr_44023[(6)] = c__39120__auto___44145);

return statearr_44023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(__44132,c__39120__auto___44145,G__43975_44133,G__43975_44134__$1,n__29432__auto___44131,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43975_44134__$1)].join('')));

}

var G__44154 = (__44132 + (1));
__44132 = G__44154;
continue;
} else {
}
break;
}

var c__39120__auto___44155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___44155,jobs,results,process,async){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___44155,jobs,results,process,async){
return (function (state_44045){
var state_val_44046 = (state_44045[(1)]);
if((state_val_44046 === (1))){
var state_44045__$1 = state_44045;
var statearr_44047_44156 = state_44045__$1;
(statearr_44047_44156[(2)] = null);

(statearr_44047_44156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44046 === (2))){
var state_44045__$1 = state_44045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44045__$1,(4),from);
} else {
if((state_val_44046 === (3))){
var inst_44043 = (state_44045[(2)]);
var state_44045__$1 = state_44045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44045__$1,inst_44043);
} else {
if((state_val_44046 === (4))){
var inst_44026 = (state_44045[(7)]);
var inst_44026__$1 = (state_44045[(2)]);
var inst_44027 = (inst_44026__$1 == null);
var state_44045__$1 = (function (){var statearr_44048 = state_44045;
(statearr_44048[(7)] = inst_44026__$1);

return statearr_44048;
})();
if(cljs.core.truth_(inst_44027)){
var statearr_44049_44157 = state_44045__$1;
(statearr_44049_44157[(1)] = (5));

} else {
var statearr_44050_44158 = state_44045__$1;
(statearr_44050_44158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44046 === (5))){
var inst_44029 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44045__$1 = state_44045;
var statearr_44051_44159 = state_44045__$1;
(statearr_44051_44159[(2)] = inst_44029);

(statearr_44051_44159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44046 === (6))){
var inst_44031 = (state_44045[(8)]);
var inst_44026 = (state_44045[(7)]);
var inst_44031__$1 = cljs.core.async.chan.call(null,(1));
var inst_44032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44033 = [inst_44026,inst_44031__$1];
var inst_44034 = (new cljs.core.PersistentVector(null,2,(5),inst_44032,inst_44033,null));
var state_44045__$1 = (function (){var statearr_44052 = state_44045;
(statearr_44052[(8)] = inst_44031__$1);

return statearr_44052;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44045__$1,(8),jobs,inst_44034);
} else {
if((state_val_44046 === (7))){
var inst_44041 = (state_44045[(2)]);
var state_44045__$1 = state_44045;
var statearr_44053_44160 = state_44045__$1;
(statearr_44053_44160[(2)] = inst_44041);

(statearr_44053_44160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44046 === (8))){
var inst_44031 = (state_44045[(8)]);
var inst_44036 = (state_44045[(2)]);
var state_44045__$1 = (function (){var statearr_44054 = state_44045;
(statearr_44054[(9)] = inst_44036);

return statearr_44054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44045__$1,(9),results,inst_44031);
} else {
if((state_val_44046 === (9))){
var inst_44038 = (state_44045[(2)]);
var state_44045__$1 = (function (){var statearr_44055 = state_44045;
(statearr_44055[(10)] = inst_44038);

return statearr_44055;
})();
var statearr_44056_44161 = state_44045__$1;
(statearr_44056_44161[(2)] = null);

(statearr_44056_44161[(1)] = (2));


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
});})(c__39120__auto___44155,jobs,results,process,async))
;
return ((function (switch__39032__auto__,c__39120__auto___44155,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0 = (function (){
var statearr_44057 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__);

(statearr_44057[(1)] = (1));

return statearr_44057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1 = (function (state_44045){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44058){if((e44058 instanceof Object)){
var ex__39036__auto__ = e44058;
var statearr_44059_44162 = state_44045;
(statearr_44059_44162[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44163 = state_44045;
state_44045 = G__44163;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = function(state_44045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1.call(this,state_44045);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___44155,jobs,results,process,async))
})();
var state__39122__auto__ = (function (){var statearr_44060 = f__39121__auto__.call(null);
(statearr_44060[(6)] = c__39120__auto___44155);

return statearr_44060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___44155,jobs,results,process,async))
);


var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__,jobs,results,process,async){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__,jobs,results,process,async){
return (function (state_44098){
var state_val_44099 = (state_44098[(1)]);
if((state_val_44099 === (7))){
var inst_44094 = (state_44098[(2)]);
var state_44098__$1 = state_44098;
var statearr_44100_44164 = state_44098__$1;
(statearr_44100_44164[(2)] = inst_44094);

(statearr_44100_44164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (20))){
var state_44098__$1 = state_44098;
var statearr_44101_44165 = state_44098__$1;
(statearr_44101_44165[(2)] = null);

(statearr_44101_44165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (1))){
var state_44098__$1 = state_44098;
var statearr_44102_44166 = state_44098__$1;
(statearr_44102_44166[(2)] = null);

(statearr_44102_44166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (4))){
var inst_44063 = (state_44098[(7)]);
var inst_44063__$1 = (state_44098[(2)]);
var inst_44064 = (inst_44063__$1 == null);
var state_44098__$1 = (function (){var statearr_44103 = state_44098;
(statearr_44103[(7)] = inst_44063__$1);

return statearr_44103;
})();
if(cljs.core.truth_(inst_44064)){
var statearr_44104_44167 = state_44098__$1;
(statearr_44104_44167[(1)] = (5));

} else {
var statearr_44105_44168 = state_44098__$1;
(statearr_44105_44168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (15))){
var inst_44076 = (state_44098[(8)]);
var state_44098__$1 = state_44098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44098__$1,(18),to,inst_44076);
} else {
if((state_val_44099 === (21))){
var inst_44089 = (state_44098[(2)]);
var state_44098__$1 = state_44098;
var statearr_44106_44169 = state_44098__$1;
(statearr_44106_44169[(2)] = inst_44089);

(statearr_44106_44169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (13))){
var inst_44091 = (state_44098[(2)]);
var state_44098__$1 = (function (){var statearr_44107 = state_44098;
(statearr_44107[(9)] = inst_44091);

return statearr_44107;
})();
var statearr_44108_44170 = state_44098__$1;
(statearr_44108_44170[(2)] = null);

(statearr_44108_44170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (6))){
var inst_44063 = (state_44098[(7)]);
var state_44098__$1 = state_44098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44098__$1,(11),inst_44063);
} else {
if((state_val_44099 === (17))){
var inst_44084 = (state_44098[(2)]);
var state_44098__$1 = state_44098;
if(cljs.core.truth_(inst_44084)){
var statearr_44109_44171 = state_44098__$1;
(statearr_44109_44171[(1)] = (19));

} else {
var statearr_44110_44172 = state_44098__$1;
(statearr_44110_44172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (3))){
var inst_44096 = (state_44098[(2)]);
var state_44098__$1 = state_44098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44098__$1,inst_44096);
} else {
if((state_val_44099 === (12))){
var inst_44073 = (state_44098[(10)]);
var state_44098__$1 = state_44098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44098__$1,(14),inst_44073);
} else {
if((state_val_44099 === (2))){
var state_44098__$1 = state_44098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44098__$1,(4),results);
} else {
if((state_val_44099 === (19))){
var state_44098__$1 = state_44098;
var statearr_44111_44173 = state_44098__$1;
(statearr_44111_44173[(2)] = null);

(statearr_44111_44173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (11))){
var inst_44073 = (state_44098[(2)]);
var state_44098__$1 = (function (){var statearr_44112 = state_44098;
(statearr_44112[(10)] = inst_44073);

return statearr_44112;
})();
var statearr_44113_44174 = state_44098__$1;
(statearr_44113_44174[(2)] = null);

(statearr_44113_44174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (9))){
var state_44098__$1 = state_44098;
var statearr_44114_44175 = state_44098__$1;
(statearr_44114_44175[(2)] = null);

(statearr_44114_44175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (5))){
var state_44098__$1 = state_44098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44115_44176 = state_44098__$1;
(statearr_44115_44176[(1)] = (8));

} else {
var statearr_44116_44177 = state_44098__$1;
(statearr_44116_44177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (14))){
var inst_44078 = (state_44098[(11)]);
var inst_44076 = (state_44098[(8)]);
var inst_44076__$1 = (state_44098[(2)]);
var inst_44077 = (inst_44076__$1 == null);
var inst_44078__$1 = cljs.core.not.call(null,inst_44077);
var state_44098__$1 = (function (){var statearr_44117 = state_44098;
(statearr_44117[(11)] = inst_44078__$1);

(statearr_44117[(8)] = inst_44076__$1);

return statearr_44117;
})();
if(inst_44078__$1){
var statearr_44118_44178 = state_44098__$1;
(statearr_44118_44178[(1)] = (15));

} else {
var statearr_44119_44179 = state_44098__$1;
(statearr_44119_44179[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (16))){
var inst_44078 = (state_44098[(11)]);
var state_44098__$1 = state_44098;
var statearr_44120_44180 = state_44098__$1;
(statearr_44120_44180[(2)] = inst_44078);

(statearr_44120_44180[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (10))){
var inst_44070 = (state_44098[(2)]);
var state_44098__$1 = state_44098;
var statearr_44121_44181 = state_44098__$1;
(statearr_44121_44181[(2)] = inst_44070);

(statearr_44121_44181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (18))){
var inst_44081 = (state_44098[(2)]);
var state_44098__$1 = state_44098;
var statearr_44122_44182 = state_44098__$1;
(statearr_44122_44182[(2)] = inst_44081);

(statearr_44122_44182[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44099 === (8))){
var inst_44067 = cljs.core.async.close_BANG_.call(null,to);
var state_44098__$1 = state_44098;
var statearr_44123_44183 = state_44098__$1;
(statearr_44123_44183[(2)] = inst_44067);

(statearr_44123_44183[(1)] = (10));


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
});})(c__39120__auto__,jobs,results,process,async))
;
return ((function (switch__39032__auto__,c__39120__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0 = (function (){
var statearr_44124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__);

(statearr_44124[(1)] = (1));

return statearr_44124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1 = (function (state_44098){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44125){if((e44125 instanceof Object)){
var ex__39036__auto__ = e44125;
var statearr_44126_44184 = state_44098;
(statearr_44126_44184[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44185 = state_44098;
state_44098 = G__44185;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__ = function(state_44098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1.call(this,state_44098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39033__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__,jobs,results,process,async))
})();
var state__39122__auto__ = (function (){var statearr_44127 = f__39121__auto__.call(null);
(statearr_44127[(6)] = c__39120__auto__);

return statearr_44127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__,jobs,results,process,async))
);

return c__39120__auto__;
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
var G__44187 = arguments.length;
switch (G__44187) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__44190 = arguments.length;
switch (G__44190) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__44193 = arguments.length;
switch (G__44193) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39120__auto___44242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___44242,tc,fc){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___44242,tc,fc){
return (function (state_44219){
var state_val_44220 = (state_44219[(1)]);
if((state_val_44220 === (7))){
var inst_44215 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
var statearr_44221_44243 = state_44219__$1;
(statearr_44221_44243[(2)] = inst_44215);

(statearr_44221_44243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (1))){
var state_44219__$1 = state_44219;
var statearr_44222_44244 = state_44219__$1;
(statearr_44222_44244[(2)] = null);

(statearr_44222_44244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (4))){
var inst_44196 = (state_44219[(7)]);
var inst_44196__$1 = (state_44219[(2)]);
var inst_44197 = (inst_44196__$1 == null);
var state_44219__$1 = (function (){var statearr_44223 = state_44219;
(statearr_44223[(7)] = inst_44196__$1);

return statearr_44223;
})();
if(cljs.core.truth_(inst_44197)){
var statearr_44224_44245 = state_44219__$1;
(statearr_44224_44245[(1)] = (5));

} else {
var statearr_44225_44246 = state_44219__$1;
(statearr_44225_44246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (13))){
var state_44219__$1 = state_44219;
var statearr_44226_44247 = state_44219__$1;
(statearr_44226_44247[(2)] = null);

(statearr_44226_44247[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (6))){
var inst_44196 = (state_44219[(7)]);
var inst_44202 = p.call(null,inst_44196);
var state_44219__$1 = state_44219;
if(cljs.core.truth_(inst_44202)){
var statearr_44227_44248 = state_44219__$1;
(statearr_44227_44248[(1)] = (9));

} else {
var statearr_44228_44249 = state_44219__$1;
(statearr_44228_44249[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (3))){
var inst_44217 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44219__$1,inst_44217);
} else {
if((state_val_44220 === (12))){
var state_44219__$1 = state_44219;
var statearr_44229_44250 = state_44219__$1;
(statearr_44229_44250[(2)] = null);

(statearr_44229_44250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (2))){
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44219__$1,(4),ch);
} else {
if((state_val_44220 === (11))){
var inst_44196 = (state_44219[(7)]);
var inst_44206 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44219__$1,(8),inst_44206,inst_44196);
} else {
if((state_val_44220 === (9))){
var state_44219__$1 = state_44219;
var statearr_44230_44251 = state_44219__$1;
(statearr_44230_44251[(2)] = tc);

(statearr_44230_44251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (5))){
var inst_44199 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44200 = cljs.core.async.close_BANG_.call(null,fc);
var state_44219__$1 = (function (){var statearr_44231 = state_44219;
(statearr_44231[(8)] = inst_44199);

return statearr_44231;
})();
var statearr_44232_44252 = state_44219__$1;
(statearr_44232_44252[(2)] = inst_44200);

(statearr_44232_44252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (14))){
var inst_44213 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
var statearr_44233_44253 = state_44219__$1;
(statearr_44233_44253[(2)] = inst_44213);

(statearr_44233_44253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (10))){
var state_44219__$1 = state_44219;
var statearr_44234_44254 = state_44219__$1;
(statearr_44234_44254[(2)] = fc);

(statearr_44234_44254[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44220 === (8))){
var inst_44208 = (state_44219[(2)]);
var state_44219__$1 = state_44219;
if(cljs.core.truth_(inst_44208)){
var statearr_44235_44255 = state_44219__$1;
(statearr_44235_44255[(1)] = (12));

} else {
var statearr_44236_44256 = state_44219__$1;
(statearr_44236_44256[(1)] = (13));

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
});})(c__39120__auto___44242,tc,fc))
;
return ((function (switch__39032__auto__,c__39120__auto___44242,tc,fc){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_44237 = [null,null,null,null,null,null,null,null,null];
(statearr_44237[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_44237[(1)] = (1));

return statearr_44237;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_44219){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44238){if((e44238 instanceof Object)){
var ex__39036__auto__ = e44238;
var statearr_44239_44257 = state_44219;
(statearr_44239_44257[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44258 = state_44219;
state_44219 = G__44258;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_44219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_44219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___44242,tc,fc))
})();
var state__39122__auto__ = (function (){var statearr_44240 = f__39121__auto__.call(null);
(statearr_44240[(6)] = c__39120__auto___44242);

return statearr_44240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___44242,tc,fc))
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
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__){
return (function (state_44279){
var state_val_44280 = (state_44279[(1)]);
if((state_val_44280 === (7))){
var inst_44275 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
var statearr_44281_44299 = state_44279__$1;
(statearr_44281_44299[(2)] = inst_44275);

(statearr_44281_44299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (1))){
var inst_44259 = init;
var state_44279__$1 = (function (){var statearr_44282 = state_44279;
(statearr_44282[(7)] = inst_44259);

return statearr_44282;
})();
var statearr_44283_44300 = state_44279__$1;
(statearr_44283_44300[(2)] = null);

(statearr_44283_44300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (4))){
var inst_44262 = (state_44279[(8)]);
var inst_44262__$1 = (state_44279[(2)]);
var inst_44263 = (inst_44262__$1 == null);
var state_44279__$1 = (function (){var statearr_44284 = state_44279;
(statearr_44284[(8)] = inst_44262__$1);

return statearr_44284;
})();
if(cljs.core.truth_(inst_44263)){
var statearr_44285_44301 = state_44279__$1;
(statearr_44285_44301[(1)] = (5));

} else {
var statearr_44286_44302 = state_44279__$1;
(statearr_44286_44302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (6))){
var inst_44259 = (state_44279[(7)]);
var inst_44262 = (state_44279[(8)]);
var inst_44266 = (state_44279[(9)]);
var inst_44266__$1 = f.call(null,inst_44259,inst_44262);
var inst_44267 = cljs.core.reduced_QMARK_.call(null,inst_44266__$1);
var state_44279__$1 = (function (){var statearr_44287 = state_44279;
(statearr_44287[(9)] = inst_44266__$1);

return statearr_44287;
})();
if(inst_44267){
var statearr_44288_44303 = state_44279__$1;
(statearr_44288_44303[(1)] = (8));

} else {
var statearr_44289_44304 = state_44279__$1;
(statearr_44289_44304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (3))){
var inst_44277 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44279__$1,inst_44277);
} else {
if((state_val_44280 === (2))){
var state_44279__$1 = state_44279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44279__$1,(4),ch);
} else {
if((state_val_44280 === (9))){
var inst_44266 = (state_44279[(9)]);
var inst_44259 = inst_44266;
var state_44279__$1 = (function (){var statearr_44290 = state_44279;
(statearr_44290[(7)] = inst_44259);

return statearr_44290;
})();
var statearr_44291_44305 = state_44279__$1;
(statearr_44291_44305[(2)] = null);

(statearr_44291_44305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (5))){
var inst_44259 = (state_44279[(7)]);
var state_44279__$1 = state_44279;
var statearr_44292_44306 = state_44279__$1;
(statearr_44292_44306[(2)] = inst_44259);

(statearr_44292_44306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (10))){
var inst_44273 = (state_44279[(2)]);
var state_44279__$1 = state_44279;
var statearr_44293_44307 = state_44279__$1;
(statearr_44293_44307[(2)] = inst_44273);

(statearr_44293_44307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44280 === (8))){
var inst_44266 = (state_44279[(9)]);
var inst_44269 = cljs.core.deref.call(null,inst_44266);
var state_44279__$1 = state_44279;
var statearr_44294_44308 = state_44279__$1;
(statearr_44294_44308[(2)] = inst_44269);

(statearr_44294_44308[(1)] = (10));


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
});})(c__39120__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39033__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39033__auto____0 = (function (){
var statearr_44295 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44295[(0)] = cljs$core$async$reduce_$_state_machine__39033__auto__);

(statearr_44295[(1)] = (1));

return statearr_44295;
});
var cljs$core$async$reduce_$_state_machine__39033__auto____1 = (function (state_44279){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44296){if((e44296 instanceof Object)){
var ex__39036__auto__ = e44296;
var statearr_44297_44309 = state_44279;
(statearr_44297_44309[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44310 = state_44279;
state_44279 = G__44310;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39033__auto__ = function(state_44279){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39033__auto____1.call(this,state_44279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39033__auto____0;
cljs$core$async$reduce_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39033__auto____1;
return cljs$core$async$reduce_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__))
})();
var state__39122__auto__ = (function (){var statearr_44298 = f__39121__auto__.call(null);
(statearr_44298[(6)] = c__39120__auto__);

return statearr_44298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__))
);

return c__39120__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__,f__$1){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__,f__$1){
return (function (state_44316){
var state_val_44317 = (state_44316[(1)]);
if((state_val_44317 === (1))){
var inst_44311 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44316__$1 = state_44316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44316__$1,(2),inst_44311);
} else {
if((state_val_44317 === (2))){
var inst_44313 = (state_44316[(2)]);
var inst_44314 = f__$1.call(null,inst_44313);
var state_44316__$1 = state_44316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44316__$1,inst_44314);
} else {
return null;
}
}
});})(c__39120__auto__,f__$1))
;
return ((function (switch__39032__auto__,c__39120__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__39033__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39033__auto____0 = (function (){
var statearr_44318 = [null,null,null,null,null,null,null];
(statearr_44318[(0)] = cljs$core$async$transduce_$_state_machine__39033__auto__);

(statearr_44318[(1)] = (1));

return statearr_44318;
});
var cljs$core$async$transduce_$_state_machine__39033__auto____1 = (function (state_44316){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44319){if((e44319 instanceof Object)){
var ex__39036__auto__ = e44319;
var statearr_44320_44322 = state_44316;
(statearr_44320_44322[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44323 = state_44316;
state_44316 = G__44323;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39033__auto__ = function(state_44316){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39033__auto____1.call(this,state_44316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39033__auto____0;
cljs$core$async$transduce_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39033__auto____1;
return cljs$core$async$transduce_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__,f__$1))
})();
var state__39122__auto__ = (function (){var statearr_44321 = f__39121__auto__.call(null);
(statearr_44321[(6)] = c__39120__auto__);

return statearr_44321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__,f__$1))
);

return c__39120__auto__;
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
var G__44325 = arguments.length;
switch (G__44325) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__){
return (function (state_44350){
var state_val_44351 = (state_44350[(1)]);
if((state_val_44351 === (7))){
var inst_44332 = (state_44350[(2)]);
var state_44350__$1 = state_44350;
var statearr_44352_44373 = state_44350__$1;
(statearr_44352_44373[(2)] = inst_44332);

(statearr_44352_44373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (1))){
var inst_44326 = cljs.core.seq.call(null,coll);
var inst_44327 = inst_44326;
var state_44350__$1 = (function (){var statearr_44353 = state_44350;
(statearr_44353[(7)] = inst_44327);

return statearr_44353;
})();
var statearr_44354_44374 = state_44350__$1;
(statearr_44354_44374[(2)] = null);

(statearr_44354_44374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (4))){
var inst_44327 = (state_44350[(7)]);
var inst_44330 = cljs.core.first.call(null,inst_44327);
var state_44350__$1 = state_44350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44350__$1,(7),ch,inst_44330);
} else {
if((state_val_44351 === (13))){
var inst_44344 = (state_44350[(2)]);
var state_44350__$1 = state_44350;
var statearr_44355_44375 = state_44350__$1;
(statearr_44355_44375[(2)] = inst_44344);

(statearr_44355_44375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (6))){
var inst_44335 = (state_44350[(2)]);
var state_44350__$1 = state_44350;
if(cljs.core.truth_(inst_44335)){
var statearr_44356_44376 = state_44350__$1;
(statearr_44356_44376[(1)] = (8));

} else {
var statearr_44357_44377 = state_44350__$1;
(statearr_44357_44377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (3))){
var inst_44348 = (state_44350[(2)]);
var state_44350__$1 = state_44350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44350__$1,inst_44348);
} else {
if((state_val_44351 === (12))){
var state_44350__$1 = state_44350;
var statearr_44358_44378 = state_44350__$1;
(statearr_44358_44378[(2)] = null);

(statearr_44358_44378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (2))){
var inst_44327 = (state_44350[(7)]);
var state_44350__$1 = state_44350;
if(cljs.core.truth_(inst_44327)){
var statearr_44359_44379 = state_44350__$1;
(statearr_44359_44379[(1)] = (4));

} else {
var statearr_44360_44380 = state_44350__$1;
(statearr_44360_44380[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (11))){
var inst_44341 = cljs.core.async.close_BANG_.call(null,ch);
var state_44350__$1 = state_44350;
var statearr_44361_44381 = state_44350__$1;
(statearr_44361_44381[(2)] = inst_44341);

(statearr_44361_44381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (9))){
var state_44350__$1 = state_44350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44362_44382 = state_44350__$1;
(statearr_44362_44382[(1)] = (11));

} else {
var statearr_44363_44383 = state_44350__$1;
(statearr_44363_44383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (5))){
var inst_44327 = (state_44350[(7)]);
var state_44350__$1 = state_44350;
var statearr_44364_44384 = state_44350__$1;
(statearr_44364_44384[(2)] = inst_44327);

(statearr_44364_44384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (10))){
var inst_44346 = (state_44350[(2)]);
var state_44350__$1 = state_44350;
var statearr_44365_44385 = state_44350__$1;
(statearr_44365_44385[(2)] = inst_44346);

(statearr_44365_44385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44351 === (8))){
var inst_44327 = (state_44350[(7)]);
var inst_44337 = cljs.core.next.call(null,inst_44327);
var inst_44327__$1 = inst_44337;
var state_44350__$1 = (function (){var statearr_44366 = state_44350;
(statearr_44366[(7)] = inst_44327__$1);

return statearr_44366;
})();
var statearr_44367_44386 = state_44350__$1;
(statearr_44367_44386[(2)] = null);

(statearr_44367_44386[(1)] = (2));


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
});})(c__39120__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_44368 = [null,null,null,null,null,null,null,null];
(statearr_44368[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_44368[(1)] = (1));

return statearr_44368;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_44350){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44369){if((e44369 instanceof Object)){
var ex__39036__auto__ = e44369;
var statearr_44370_44387 = state_44350;
(statearr_44370_44387[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44388 = state_44350;
state_44350 = G__44388;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_44350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_44350);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__))
})();
var state__39122__auto__ = (function (){var statearr_44371 = f__39121__auto__.call(null);
(statearr_44371[(6)] = c__39120__auto__);

return statearr_44371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__))
);

return c__39120__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29168__auto__ = (((_ == null))?null:_);
var m__29169__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,_);
} else {
var m__29169__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29169__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m,ch);
} else {
var m__29169__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m);
} else {
var m__29169__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44389 = (function (ch,cs,meta44390){
this.ch = ch;
this.cs = cs;
this.meta44390 = meta44390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44391,meta44390__$1){
var self__ = this;
var _44391__$1 = this;
return (new cljs.core.async.t_cljs$core$async44389(self__.ch,self__.cs,meta44390__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44391){
var self__ = this;
var _44391__$1 = this;
return self__.meta44390;
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44390","meta44390",718321465,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44389";

cljs.core.async.t_cljs$core$async44389.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async44389");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async44389 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44389(ch__$1,cs__$1,meta44390){
return (new cljs.core.async.t_cljs$core$async44389(ch__$1,cs__$1,meta44390));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44389(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__39120__auto___44611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___44611,cs,m,dchan,dctr,done){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___44611,cs,m,dchan,dctr,done){
return (function (state_44526){
var state_val_44527 = (state_44526[(1)]);
if((state_val_44527 === (7))){
var inst_44522 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44528_44612 = state_44526__$1;
(statearr_44528_44612[(2)] = inst_44522);

(statearr_44528_44612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (20))){
var inst_44425 = (state_44526[(7)]);
var inst_44437 = cljs.core.first.call(null,inst_44425);
var inst_44438 = cljs.core.nth.call(null,inst_44437,(0),null);
var inst_44439 = cljs.core.nth.call(null,inst_44437,(1),null);
var state_44526__$1 = (function (){var statearr_44529 = state_44526;
(statearr_44529[(8)] = inst_44438);

return statearr_44529;
})();
if(cljs.core.truth_(inst_44439)){
var statearr_44530_44613 = state_44526__$1;
(statearr_44530_44613[(1)] = (22));

} else {
var statearr_44531_44614 = state_44526__$1;
(statearr_44531_44614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (27))){
var inst_44467 = (state_44526[(9)]);
var inst_44474 = (state_44526[(10)]);
var inst_44394 = (state_44526[(11)]);
var inst_44469 = (state_44526[(12)]);
var inst_44474__$1 = cljs.core._nth.call(null,inst_44467,inst_44469);
var inst_44475 = cljs.core.async.put_BANG_.call(null,inst_44474__$1,inst_44394,done);
var state_44526__$1 = (function (){var statearr_44532 = state_44526;
(statearr_44532[(10)] = inst_44474__$1);

return statearr_44532;
})();
if(cljs.core.truth_(inst_44475)){
var statearr_44533_44615 = state_44526__$1;
(statearr_44533_44615[(1)] = (30));

} else {
var statearr_44534_44616 = state_44526__$1;
(statearr_44534_44616[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (1))){
var state_44526__$1 = state_44526;
var statearr_44535_44617 = state_44526__$1;
(statearr_44535_44617[(2)] = null);

(statearr_44535_44617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (24))){
var inst_44425 = (state_44526[(7)]);
var inst_44444 = (state_44526[(2)]);
var inst_44445 = cljs.core.next.call(null,inst_44425);
var inst_44403 = inst_44445;
var inst_44404 = null;
var inst_44405 = (0);
var inst_44406 = (0);
var state_44526__$1 = (function (){var statearr_44536 = state_44526;
(statearr_44536[(13)] = inst_44403);

(statearr_44536[(14)] = inst_44406);

(statearr_44536[(15)] = inst_44444);

(statearr_44536[(16)] = inst_44404);

(statearr_44536[(17)] = inst_44405);

return statearr_44536;
})();
var statearr_44537_44618 = state_44526__$1;
(statearr_44537_44618[(2)] = null);

(statearr_44537_44618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (39))){
var state_44526__$1 = state_44526;
var statearr_44541_44619 = state_44526__$1;
(statearr_44541_44619[(2)] = null);

(statearr_44541_44619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (4))){
var inst_44394 = (state_44526[(11)]);
var inst_44394__$1 = (state_44526[(2)]);
var inst_44395 = (inst_44394__$1 == null);
var state_44526__$1 = (function (){var statearr_44542 = state_44526;
(statearr_44542[(11)] = inst_44394__$1);

return statearr_44542;
})();
if(cljs.core.truth_(inst_44395)){
var statearr_44543_44620 = state_44526__$1;
(statearr_44543_44620[(1)] = (5));

} else {
var statearr_44544_44621 = state_44526__$1;
(statearr_44544_44621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (15))){
var inst_44403 = (state_44526[(13)]);
var inst_44406 = (state_44526[(14)]);
var inst_44404 = (state_44526[(16)]);
var inst_44405 = (state_44526[(17)]);
var inst_44421 = (state_44526[(2)]);
var inst_44422 = (inst_44406 + (1));
var tmp44538 = inst_44403;
var tmp44539 = inst_44404;
var tmp44540 = inst_44405;
var inst_44403__$1 = tmp44538;
var inst_44404__$1 = tmp44539;
var inst_44405__$1 = tmp44540;
var inst_44406__$1 = inst_44422;
var state_44526__$1 = (function (){var statearr_44545 = state_44526;
(statearr_44545[(13)] = inst_44403__$1);

(statearr_44545[(18)] = inst_44421);

(statearr_44545[(14)] = inst_44406__$1);

(statearr_44545[(16)] = inst_44404__$1);

(statearr_44545[(17)] = inst_44405__$1);

return statearr_44545;
})();
var statearr_44546_44622 = state_44526__$1;
(statearr_44546_44622[(2)] = null);

(statearr_44546_44622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (21))){
var inst_44448 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44550_44623 = state_44526__$1;
(statearr_44550_44623[(2)] = inst_44448);

(statearr_44550_44623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (31))){
var inst_44474 = (state_44526[(10)]);
var inst_44478 = done.call(null,null);
var inst_44479 = cljs.core.async.untap_STAR_.call(null,m,inst_44474);
var state_44526__$1 = (function (){var statearr_44551 = state_44526;
(statearr_44551[(19)] = inst_44478);

return statearr_44551;
})();
var statearr_44552_44624 = state_44526__$1;
(statearr_44552_44624[(2)] = inst_44479);

(statearr_44552_44624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (32))){
var inst_44466 = (state_44526[(20)]);
var inst_44467 = (state_44526[(9)]);
var inst_44469 = (state_44526[(12)]);
var inst_44468 = (state_44526[(21)]);
var inst_44481 = (state_44526[(2)]);
var inst_44482 = (inst_44469 + (1));
var tmp44547 = inst_44466;
var tmp44548 = inst_44467;
var tmp44549 = inst_44468;
var inst_44466__$1 = tmp44547;
var inst_44467__$1 = tmp44548;
var inst_44468__$1 = tmp44549;
var inst_44469__$1 = inst_44482;
var state_44526__$1 = (function (){var statearr_44553 = state_44526;
(statearr_44553[(20)] = inst_44466__$1);

(statearr_44553[(22)] = inst_44481);

(statearr_44553[(9)] = inst_44467__$1);

(statearr_44553[(12)] = inst_44469__$1);

(statearr_44553[(21)] = inst_44468__$1);

return statearr_44553;
})();
var statearr_44554_44625 = state_44526__$1;
(statearr_44554_44625[(2)] = null);

(statearr_44554_44625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (40))){
var inst_44494 = (state_44526[(23)]);
var inst_44498 = done.call(null,null);
var inst_44499 = cljs.core.async.untap_STAR_.call(null,m,inst_44494);
var state_44526__$1 = (function (){var statearr_44555 = state_44526;
(statearr_44555[(24)] = inst_44498);

return statearr_44555;
})();
var statearr_44556_44626 = state_44526__$1;
(statearr_44556_44626[(2)] = inst_44499);

(statearr_44556_44626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (33))){
var inst_44485 = (state_44526[(25)]);
var inst_44487 = cljs.core.chunked_seq_QMARK_.call(null,inst_44485);
var state_44526__$1 = state_44526;
if(inst_44487){
var statearr_44557_44627 = state_44526__$1;
(statearr_44557_44627[(1)] = (36));

} else {
var statearr_44558_44628 = state_44526__$1;
(statearr_44558_44628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (13))){
var inst_44415 = (state_44526[(26)]);
var inst_44418 = cljs.core.async.close_BANG_.call(null,inst_44415);
var state_44526__$1 = state_44526;
var statearr_44559_44629 = state_44526__$1;
(statearr_44559_44629[(2)] = inst_44418);

(statearr_44559_44629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (22))){
var inst_44438 = (state_44526[(8)]);
var inst_44441 = cljs.core.async.close_BANG_.call(null,inst_44438);
var state_44526__$1 = state_44526;
var statearr_44560_44630 = state_44526__$1;
(statearr_44560_44630[(2)] = inst_44441);

(statearr_44560_44630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (36))){
var inst_44485 = (state_44526[(25)]);
var inst_44489 = cljs.core.chunk_first.call(null,inst_44485);
var inst_44490 = cljs.core.chunk_rest.call(null,inst_44485);
var inst_44491 = cljs.core.count.call(null,inst_44489);
var inst_44466 = inst_44490;
var inst_44467 = inst_44489;
var inst_44468 = inst_44491;
var inst_44469 = (0);
var state_44526__$1 = (function (){var statearr_44561 = state_44526;
(statearr_44561[(20)] = inst_44466);

(statearr_44561[(9)] = inst_44467);

(statearr_44561[(12)] = inst_44469);

(statearr_44561[(21)] = inst_44468);

return statearr_44561;
})();
var statearr_44562_44631 = state_44526__$1;
(statearr_44562_44631[(2)] = null);

(statearr_44562_44631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (41))){
var inst_44485 = (state_44526[(25)]);
var inst_44501 = (state_44526[(2)]);
var inst_44502 = cljs.core.next.call(null,inst_44485);
var inst_44466 = inst_44502;
var inst_44467 = null;
var inst_44468 = (0);
var inst_44469 = (0);
var state_44526__$1 = (function (){var statearr_44563 = state_44526;
(statearr_44563[(20)] = inst_44466);

(statearr_44563[(9)] = inst_44467);

(statearr_44563[(27)] = inst_44501);

(statearr_44563[(12)] = inst_44469);

(statearr_44563[(21)] = inst_44468);

return statearr_44563;
})();
var statearr_44564_44632 = state_44526__$1;
(statearr_44564_44632[(2)] = null);

(statearr_44564_44632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (43))){
var state_44526__$1 = state_44526;
var statearr_44565_44633 = state_44526__$1;
(statearr_44565_44633[(2)] = null);

(statearr_44565_44633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (29))){
var inst_44510 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44566_44634 = state_44526__$1;
(statearr_44566_44634[(2)] = inst_44510);

(statearr_44566_44634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (44))){
var inst_44519 = (state_44526[(2)]);
var state_44526__$1 = (function (){var statearr_44567 = state_44526;
(statearr_44567[(28)] = inst_44519);

return statearr_44567;
})();
var statearr_44568_44635 = state_44526__$1;
(statearr_44568_44635[(2)] = null);

(statearr_44568_44635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (6))){
var inst_44458 = (state_44526[(29)]);
var inst_44457 = cljs.core.deref.call(null,cs);
var inst_44458__$1 = cljs.core.keys.call(null,inst_44457);
var inst_44459 = cljs.core.count.call(null,inst_44458__$1);
var inst_44460 = cljs.core.reset_BANG_.call(null,dctr,inst_44459);
var inst_44465 = cljs.core.seq.call(null,inst_44458__$1);
var inst_44466 = inst_44465;
var inst_44467 = null;
var inst_44468 = (0);
var inst_44469 = (0);
var state_44526__$1 = (function (){var statearr_44569 = state_44526;
(statearr_44569[(20)] = inst_44466);

(statearr_44569[(30)] = inst_44460);

(statearr_44569[(9)] = inst_44467);

(statearr_44569[(12)] = inst_44469);

(statearr_44569[(21)] = inst_44468);

(statearr_44569[(29)] = inst_44458__$1);

return statearr_44569;
})();
var statearr_44570_44636 = state_44526__$1;
(statearr_44570_44636[(2)] = null);

(statearr_44570_44636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (28))){
var inst_44466 = (state_44526[(20)]);
var inst_44485 = (state_44526[(25)]);
var inst_44485__$1 = cljs.core.seq.call(null,inst_44466);
var state_44526__$1 = (function (){var statearr_44571 = state_44526;
(statearr_44571[(25)] = inst_44485__$1);

return statearr_44571;
})();
if(inst_44485__$1){
var statearr_44572_44637 = state_44526__$1;
(statearr_44572_44637[(1)] = (33));

} else {
var statearr_44573_44638 = state_44526__$1;
(statearr_44573_44638[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (25))){
var inst_44469 = (state_44526[(12)]);
var inst_44468 = (state_44526[(21)]);
var inst_44471 = (inst_44469 < inst_44468);
var inst_44472 = inst_44471;
var state_44526__$1 = state_44526;
if(cljs.core.truth_(inst_44472)){
var statearr_44574_44639 = state_44526__$1;
(statearr_44574_44639[(1)] = (27));

} else {
var statearr_44575_44640 = state_44526__$1;
(statearr_44575_44640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (34))){
var state_44526__$1 = state_44526;
var statearr_44576_44641 = state_44526__$1;
(statearr_44576_44641[(2)] = null);

(statearr_44576_44641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (17))){
var state_44526__$1 = state_44526;
var statearr_44577_44642 = state_44526__$1;
(statearr_44577_44642[(2)] = null);

(statearr_44577_44642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (3))){
var inst_44524 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44526__$1,inst_44524);
} else {
if((state_val_44527 === (12))){
var inst_44453 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44578_44643 = state_44526__$1;
(statearr_44578_44643[(2)] = inst_44453);

(statearr_44578_44643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (2))){
var state_44526__$1 = state_44526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44526__$1,(4),ch);
} else {
if((state_val_44527 === (23))){
var state_44526__$1 = state_44526;
var statearr_44579_44644 = state_44526__$1;
(statearr_44579_44644[(2)] = null);

(statearr_44579_44644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (35))){
var inst_44508 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44580_44645 = state_44526__$1;
(statearr_44580_44645[(2)] = inst_44508);

(statearr_44580_44645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (19))){
var inst_44425 = (state_44526[(7)]);
var inst_44429 = cljs.core.chunk_first.call(null,inst_44425);
var inst_44430 = cljs.core.chunk_rest.call(null,inst_44425);
var inst_44431 = cljs.core.count.call(null,inst_44429);
var inst_44403 = inst_44430;
var inst_44404 = inst_44429;
var inst_44405 = inst_44431;
var inst_44406 = (0);
var state_44526__$1 = (function (){var statearr_44581 = state_44526;
(statearr_44581[(13)] = inst_44403);

(statearr_44581[(14)] = inst_44406);

(statearr_44581[(16)] = inst_44404);

(statearr_44581[(17)] = inst_44405);

return statearr_44581;
})();
var statearr_44582_44646 = state_44526__$1;
(statearr_44582_44646[(2)] = null);

(statearr_44582_44646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (11))){
var inst_44403 = (state_44526[(13)]);
var inst_44425 = (state_44526[(7)]);
var inst_44425__$1 = cljs.core.seq.call(null,inst_44403);
var state_44526__$1 = (function (){var statearr_44583 = state_44526;
(statearr_44583[(7)] = inst_44425__$1);

return statearr_44583;
})();
if(inst_44425__$1){
var statearr_44584_44647 = state_44526__$1;
(statearr_44584_44647[(1)] = (16));

} else {
var statearr_44585_44648 = state_44526__$1;
(statearr_44585_44648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (9))){
var inst_44455 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44586_44649 = state_44526__$1;
(statearr_44586_44649[(2)] = inst_44455);

(statearr_44586_44649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (5))){
var inst_44401 = cljs.core.deref.call(null,cs);
var inst_44402 = cljs.core.seq.call(null,inst_44401);
var inst_44403 = inst_44402;
var inst_44404 = null;
var inst_44405 = (0);
var inst_44406 = (0);
var state_44526__$1 = (function (){var statearr_44587 = state_44526;
(statearr_44587[(13)] = inst_44403);

(statearr_44587[(14)] = inst_44406);

(statearr_44587[(16)] = inst_44404);

(statearr_44587[(17)] = inst_44405);

return statearr_44587;
})();
var statearr_44588_44650 = state_44526__$1;
(statearr_44588_44650[(2)] = null);

(statearr_44588_44650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (14))){
var state_44526__$1 = state_44526;
var statearr_44589_44651 = state_44526__$1;
(statearr_44589_44651[(2)] = null);

(statearr_44589_44651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (45))){
var inst_44516 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44590_44652 = state_44526__$1;
(statearr_44590_44652[(2)] = inst_44516);

(statearr_44590_44652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (26))){
var inst_44458 = (state_44526[(29)]);
var inst_44512 = (state_44526[(2)]);
var inst_44513 = cljs.core.seq.call(null,inst_44458);
var state_44526__$1 = (function (){var statearr_44591 = state_44526;
(statearr_44591[(31)] = inst_44512);

return statearr_44591;
})();
if(inst_44513){
var statearr_44592_44653 = state_44526__$1;
(statearr_44592_44653[(1)] = (42));

} else {
var statearr_44593_44654 = state_44526__$1;
(statearr_44593_44654[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (16))){
var inst_44425 = (state_44526[(7)]);
var inst_44427 = cljs.core.chunked_seq_QMARK_.call(null,inst_44425);
var state_44526__$1 = state_44526;
if(inst_44427){
var statearr_44594_44655 = state_44526__$1;
(statearr_44594_44655[(1)] = (19));

} else {
var statearr_44595_44656 = state_44526__$1;
(statearr_44595_44656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (38))){
var inst_44505 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44596_44657 = state_44526__$1;
(statearr_44596_44657[(2)] = inst_44505);

(statearr_44596_44657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (30))){
var state_44526__$1 = state_44526;
var statearr_44597_44658 = state_44526__$1;
(statearr_44597_44658[(2)] = null);

(statearr_44597_44658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (10))){
var inst_44406 = (state_44526[(14)]);
var inst_44404 = (state_44526[(16)]);
var inst_44414 = cljs.core._nth.call(null,inst_44404,inst_44406);
var inst_44415 = cljs.core.nth.call(null,inst_44414,(0),null);
var inst_44416 = cljs.core.nth.call(null,inst_44414,(1),null);
var state_44526__$1 = (function (){var statearr_44598 = state_44526;
(statearr_44598[(26)] = inst_44415);

return statearr_44598;
})();
if(cljs.core.truth_(inst_44416)){
var statearr_44599_44659 = state_44526__$1;
(statearr_44599_44659[(1)] = (13));

} else {
var statearr_44600_44660 = state_44526__$1;
(statearr_44600_44660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (18))){
var inst_44451 = (state_44526[(2)]);
var state_44526__$1 = state_44526;
var statearr_44601_44661 = state_44526__$1;
(statearr_44601_44661[(2)] = inst_44451);

(statearr_44601_44661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (42))){
var state_44526__$1 = state_44526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44526__$1,(45),dchan);
} else {
if((state_val_44527 === (37))){
var inst_44494 = (state_44526[(23)]);
var inst_44394 = (state_44526[(11)]);
var inst_44485 = (state_44526[(25)]);
var inst_44494__$1 = cljs.core.first.call(null,inst_44485);
var inst_44495 = cljs.core.async.put_BANG_.call(null,inst_44494__$1,inst_44394,done);
var state_44526__$1 = (function (){var statearr_44602 = state_44526;
(statearr_44602[(23)] = inst_44494__$1);

return statearr_44602;
})();
if(cljs.core.truth_(inst_44495)){
var statearr_44603_44662 = state_44526__$1;
(statearr_44603_44662[(1)] = (39));

} else {
var statearr_44604_44663 = state_44526__$1;
(statearr_44604_44663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44527 === (8))){
var inst_44406 = (state_44526[(14)]);
var inst_44405 = (state_44526[(17)]);
var inst_44408 = (inst_44406 < inst_44405);
var inst_44409 = inst_44408;
var state_44526__$1 = state_44526;
if(cljs.core.truth_(inst_44409)){
var statearr_44605_44664 = state_44526__$1;
(statearr_44605_44664[(1)] = (10));

} else {
var statearr_44606_44665 = state_44526__$1;
(statearr_44606_44665[(1)] = (11));

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
});})(c__39120__auto___44611,cs,m,dchan,dctr,done))
;
return ((function (switch__39032__auto__,c__39120__auto___44611,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39033__auto__ = null;
var cljs$core$async$mult_$_state_machine__39033__auto____0 = (function (){
var statearr_44607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44607[(0)] = cljs$core$async$mult_$_state_machine__39033__auto__);

(statearr_44607[(1)] = (1));

return statearr_44607;
});
var cljs$core$async$mult_$_state_machine__39033__auto____1 = (function (state_44526){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44608){if((e44608 instanceof Object)){
var ex__39036__auto__ = e44608;
var statearr_44609_44666 = state_44526;
(statearr_44609_44666[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44667 = state_44526;
state_44526 = G__44667;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39033__auto__ = function(state_44526){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39033__auto____1.call(this,state_44526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39033__auto____0;
cljs$core$async$mult_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39033__auto____1;
return cljs$core$async$mult_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___44611,cs,m,dchan,dctr,done))
})();
var state__39122__auto__ = (function (){var statearr_44610 = f__39121__auto__.call(null);
(statearr_44610[(6)] = c__39120__auto___44611);

return statearr_44610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___44611,cs,m,dchan,dctr,done))
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
var G__44669 = arguments.length;
switch (G__44669) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m,ch);
} else {
var m__29169__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m,ch);
} else {
var m__29169__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m);
} else {
var m__29169__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m,state_map);
} else {
var m__29169__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29168__auto__ = (((m == null))?null:m);
var m__29169__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,m,mode);
} else {
var m__29169__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29663__auto__ = [];
var len__29656__auto___44681 = arguments.length;
var i__29657__auto___44682 = (0);
while(true){
if((i__29657__auto___44682 < len__29656__auto___44681)){
args__29663__auto__.push((arguments[i__29657__auto___44682]));

var G__44683 = (i__29657__auto___44682 + (1));
i__29657__auto___44682 = G__44683;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((3) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29664__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44675){
var map__44676 = p__44675;
var map__44676__$1 = ((((!((map__44676 == null)))?((((map__44676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44676):map__44676);
var opts = map__44676__$1;
var statearr_44678_44684 = state;
(statearr_44678_44684[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__44676,map__44676__$1,opts){
return (function (val){
var statearr_44679_44685 = state;
(statearr_44679_44685[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44676,map__44676__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44680_44686 = state;
(statearr_44680_44686[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44671){
var G__44672 = cljs.core.first.call(null,seq44671);
var seq44671__$1 = cljs.core.next.call(null,seq44671);
var G__44673 = cljs.core.first.call(null,seq44671__$1);
var seq44671__$2 = cljs.core.next.call(null,seq44671__$1);
var G__44674 = cljs.core.first.call(null,seq44671__$2);
var seq44671__$3 = cljs.core.next.call(null,seq44671__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44672,G__44673,G__44674,seq44671__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async44687 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44687 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta44688){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta44688 = meta44688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44689,meta44688__$1){
var self__ = this;
var _44689__$1 = this;
return (new cljs.core.async.t_cljs$core$async44687(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta44688__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44689){
var self__ = this;
var _44689__$1 = this;
return self__.meta44688;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta44688","meta44688",2116144115,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44687";

cljs.core.async.t_cljs$core$async44687.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async44687");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44687 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44687(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44688){
return (new cljs.core.async.t_cljs$core$async44687(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta44688));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44687(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39120__auto___44851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___44851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___44851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44791){
var state_val_44792 = (state_44791[(1)]);
if((state_val_44792 === (7))){
var inst_44706 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
var statearr_44793_44852 = state_44791__$1;
(statearr_44793_44852[(2)] = inst_44706);

(statearr_44793_44852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (20))){
var inst_44718 = (state_44791[(7)]);
var state_44791__$1 = state_44791;
var statearr_44794_44853 = state_44791__$1;
(statearr_44794_44853[(2)] = inst_44718);

(statearr_44794_44853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (27))){
var state_44791__$1 = state_44791;
var statearr_44795_44854 = state_44791__$1;
(statearr_44795_44854[(2)] = null);

(statearr_44795_44854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (1))){
var inst_44693 = (state_44791[(8)]);
var inst_44693__$1 = calc_state.call(null);
var inst_44695 = (inst_44693__$1 == null);
var inst_44696 = cljs.core.not.call(null,inst_44695);
var state_44791__$1 = (function (){var statearr_44796 = state_44791;
(statearr_44796[(8)] = inst_44693__$1);

return statearr_44796;
})();
if(inst_44696){
var statearr_44797_44855 = state_44791__$1;
(statearr_44797_44855[(1)] = (2));

} else {
var statearr_44798_44856 = state_44791__$1;
(statearr_44798_44856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (24))){
var inst_44751 = (state_44791[(9)]);
var inst_44765 = (state_44791[(10)]);
var inst_44742 = (state_44791[(11)]);
var inst_44765__$1 = inst_44742.call(null,inst_44751);
var state_44791__$1 = (function (){var statearr_44799 = state_44791;
(statearr_44799[(10)] = inst_44765__$1);

return statearr_44799;
})();
if(cljs.core.truth_(inst_44765__$1)){
var statearr_44800_44857 = state_44791__$1;
(statearr_44800_44857[(1)] = (29));

} else {
var statearr_44801_44858 = state_44791__$1;
(statearr_44801_44858[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (4))){
var inst_44709 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44709)){
var statearr_44802_44859 = state_44791__$1;
(statearr_44802_44859[(1)] = (8));

} else {
var statearr_44803_44860 = state_44791__$1;
(statearr_44803_44860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (15))){
var inst_44736 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44736)){
var statearr_44804_44861 = state_44791__$1;
(statearr_44804_44861[(1)] = (19));

} else {
var statearr_44805_44862 = state_44791__$1;
(statearr_44805_44862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (21))){
var inst_44741 = (state_44791[(12)]);
var inst_44741__$1 = (state_44791[(2)]);
var inst_44742 = cljs.core.get.call(null,inst_44741__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44743 = cljs.core.get.call(null,inst_44741__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44744 = cljs.core.get.call(null,inst_44741__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44791__$1 = (function (){var statearr_44806 = state_44791;
(statearr_44806[(13)] = inst_44743);

(statearr_44806[(12)] = inst_44741__$1);

(statearr_44806[(11)] = inst_44742);

return statearr_44806;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44791__$1,(22),inst_44744);
} else {
if((state_val_44792 === (31))){
var inst_44773 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44773)){
var statearr_44807_44863 = state_44791__$1;
(statearr_44807_44863[(1)] = (32));

} else {
var statearr_44808_44864 = state_44791__$1;
(statearr_44808_44864[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (32))){
var inst_44750 = (state_44791[(14)]);
var state_44791__$1 = state_44791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44791__$1,(35),out,inst_44750);
} else {
if((state_val_44792 === (33))){
var inst_44741 = (state_44791[(12)]);
var inst_44718 = inst_44741;
var state_44791__$1 = (function (){var statearr_44809 = state_44791;
(statearr_44809[(7)] = inst_44718);

return statearr_44809;
})();
var statearr_44810_44865 = state_44791__$1;
(statearr_44810_44865[(2)] = null);

(statearr_44810_44865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (13))){
var inst_44718 = (state_44791[(7)]);
var inst_44725 = inst_44718.cljs$lang$protocol_mask$partition0$;
var inst_44726 = (inst_44725 & (64));
var inst_44727 = inst_44718.cljs$core$ISeq$;
var inst_44728 = (cljs.core.PROTOCOL_SENTINEL === inst_44727);
var inst_44729 = (inst_44726) || (inst_44728);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44729)){
var statearr_44811_44866 = state_44791__$1;
(statearr_44811_44866[(1)] = (16));

} else {
var statearr_44812_44867 = state_44791__$1;
(statearr_44812_44867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (22))){
var inst_44750 = (state_44791[(14)]);
var inst_44751 = (state_44791[(9)]);
var inst_44749 = (state_44791[(2)]);
var inst_44750__$1 = cljs.core.nth.call(null,inst_44749,(0),null);
var inst_44751__$1 = cljs.core.nth.call(null,inst_44749,(1),null);
var inst_44752 = (inst_44750__$1 == null);
var inst_44753 = cljs.core._EQ_.call(null,inst_44751__$1,change);
var inst_44754 = (inst_44752) || (inst_44753);
var state_44791__$1 = (function (){var statearr_44813 = state_44791;
(statearr_44813[(14)] = inst_44750__$1);

(statearr_44813[(9)] = inst_44751__$1);

return statearr_44813;
})();
if(cljs.core.truth_(inst_44754)){
var statearr_44814_44868 = state_44791__$1;
(statearr_44814_44868[(1)] = (23));

} else {
var statearr_44815_44869 = state_44791__$1;
(statearr_44815_44869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (36))){
var inst_44741 = (state_44791[(12)]);
var inst_44718 = inst_44741;
var state_44791__$1 = (function (){var statearr_44816 = state_44791;
(statearr_44816[(7)] = inst_44718);

return statearr_44816;
})();
var statearr_44817_44870 = state_44791__$1;
(statearr_44817_44870[(2)] = null);

(statearr_44817_44870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (29))){
var inst_44765 = (state_44791[(10)]);
var state_44791__$1 = state_44791;
var statearr_44818_44871 = state_44791__$1;
(statearr_44818_44871[(2)] = inst_44765);

(statearr_44818_44871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (6))){
var state_44791__$1 = state_44791;
var statearr_44819_44872 = state_44791__$1;
(statearr_44819_44872[(2)] = false);

(statearr_44819_44872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (28))){
var inst_44761 = (state_44791[(2)]);
var inst_44762 = calc_state.call(null);
var inst_44718 = inst_44762;
var state_44791__$1 = (function (){var statearr_44820 = state_44791;
(statearr_44820[(15)] = inst_44761);

(statearr_44820[(7)] = inst_44718);

return statearr_44820;
})();
var statearr_44821_44873 = state_44791__$1;
(statearr_44821_44873[(2)] = null);

(statearr_44821_44873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (25))){
var inst_44787 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
var statearr_44822_44874 = state_44791__$1;
(statearr_44822_44874[(2)] = inst_44787);

(statearr_44822_44874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (34))){
var inst_44785 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
var statearr_44823_44875 = state_44791__$1;
(statearr_44823_44875[(2)] = inst_44785);

(statearr_44823_44875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (17))){
var state_44791__$1 = state_44791;
var statearr_44824_44876 = state_44791__$1;
(statearr_44824_44876[(2)] = false);

(statearr_44824_44876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (3))){
var state_44791__$1 = state_44791;
var statearr_44825_44877 = state_44791__$1;
(statearr_44825_44877[(2)] = false);

(statearr_44825_44877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (12))){
var inst_44789 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44791__$1,inst_44789);
} else {
if((state_val_44792 === (2))){
var inst_44693 = (state_44791[(8)]);
var inst_44698 = inst_44693.cljs$lang$protocol_mask$partition0$;
var inst_44699 = (inst_44698 & (64));
var inst_44700 = inst_44693.cljs$core$ISeq$;
var inst_44701 = (cljs.core.PROTOCOL_SENTINEL === inst_44700);
var inst_44702 = (inst_44699) || (inst_44701);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44702)){
var statearr_44826_44878 = state_44791__$1;
(statearr_44826_44878[(1)] = (5));

} else {
var statearr_44827_44879 = state_44791__$1;
(statearr_44827_44879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (23))){
var inst_44750 = (state_44791[(14)]);
var inst_44756 = (inst_44750 == null);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44756)){
var statearr_44828_44880 = state_44791__$1;
(statearr_44828_44880[(1)] = (26));

} else {
var statearr_44829_44881 = state_44791__$1;
(statearr_44829_44881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (35))){
var inst_44776 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
if(cljs.core.truth_(inst_44776)){
var statearr_44830_44882 = state_44791__$1;
(statearr_44830_44882[(1)] = (36));

} else {
var statearr_44831_44883 = state_44791__$1;
(statearr_44831_44883[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (19))){
var inst_44718 = (state_44791[(7)]);
var inst_44738 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44718);
var state_44791__$1 = state_44791;
var statearr_44832_44884 = state_44791__$1;
(statearr_44832_44884[(2)] = inst_44738);

(statearr_44832_44884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (11))){
var inst_44718 = (state_44791[(7)]);
var inst_44722 = (inst_44718 == null);
var inst_44723 = cljs.core.not.call(null,inst_44722);
var state_44791__$1 = state_44791;
if(inst_44723){
var statearr_44833_44885 = state_44791__$1;
(statearr_44833_44885[(1)] = (13));

} else {
var statearr_44834_44886 = state_44791__$1;
(statearr_44834_44886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (9))){
var inst_44693 = (state_44791[(8)]);
var state_44791__$1 = state_44791;
var statearr_44835_44887 = state_44791__$1;
(statearr_44835_44887[(2)] = inst_44693);

(statearr_44835_44887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (5))){
var state_44791__$1 = state_44791;
var statearr_44836_44888 = state_44791__$1;
(statearr_44836_44888[(2)] = true);

(statearr_44836_44888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (14))){
var state_44791__$1 = state_44791;
var statearr_44837_44889 = state_44791__$1;
(statearr_44837_44889[(2)] = false);

(statearr_44837_44889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (26))){
var inst_44751 = (state_44791[(9)]);
var inst_44758 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44751);
var state_44791__$1 = state_44791;
var statearr_44838_44890 = state_44791__$1;
(statearr_44838_44890[(2)] = inst_44758);

(statearr_44838_44890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (16))){
var state_44791__$1 = state_44791;
var statearr_44839_44891 = state_44791__$1;
(statearr_44839_44891[(2)] = true);

(statearr_44839_44891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (38))){
var inst_44781 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
var statearr_44840_44892 = state_44791__$1;
(statearr_44840_44892[(2)] = inst_44781);

(statearr_44840_44892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (30))){
var inst_44743 = (state_44791[(13)]);
var inst_44751 = (state_44791[(9)]);
var inst_44742 = (state_44791[(11)]);
var inst_44768 = cljs.core.empty_QMARK_.call(null,inst_44742);
var inst_44769 = inst_44743.call(null,inst_44751);
var inst_44770 = cljs.core.not.call(null,inst_44769);
var inst_44771 = (inst_44768) && (inst_44770);
var state_44791__$1 = state_44791;
var statearr_44841_44893 = state_44791__$1;
(statearr_44841_44893[(2)] = inst_44771);

(statearr_44841_44893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (10))){
var inst_44693 = (state_44791[(8)]);
var inst_44714 = (state_44791[(2)]);
var inst_44715 = cljs.core.get.call(null,inst_44714,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44716 = cljs.core.get.call(null,inst_44714,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44717 = cljs.core.get.call(null,inst_44714,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44718 = inst_44693;
var state_44791__$1 = (function (){var statearr_44842 = state_44791;
(statearr_44842[(16)] = inst_44717);

(statearr_44842[(17)] = inst_44715);

(statearr_44842[(7)] = inst_44718);

(statearr_44842[(18)] = inst_44716);

return statearr_44842;
})();
var statearr_44843_44894 = state_44791__$1;
(statearr_44843_44894[(2)] = null);

(statearr_44843_44894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (18))){
var inst_44733 = (state_44791[(2)]);
var state_44791__$1 = state_44791;
var statearr_44844_44895 = state_44791__$1;
(statearr_44844_44895[(2)] = inst_44733);

(statearr_44844_44895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (37))){
var state_44791__$1 = state_44791;
var statearr_44845_44896 = state_44791__$1;
(statearr_44845_44896[(2)] = null);

(statearr_44845_44896[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44792 === (8))){
var inst_44693 = (state_44791[(8)]);
var inst_44711 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44693);
var state_44791__$1 = state_44791;
var statearr_44846_44897 = state_44791__$1;
(statearr_44846_44897[(2)] = inst_44711);

(statearr_44846_44897[(1)] = (10));


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
});})(c__39120__auto___44851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39032__auto__,c__39120__auto___44851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39033__auto__ = null;
var cljs$core$async$mix_$_state_machine__39033__auto____0 = (function (){
var statearr_44847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44847[(0)] = cljs$core$async$mix_$_state_machine__39033__auto__);

(statearr_44847[(1)] = (1));

return statearr_44847;
});
var cljs$core$async$mix_$_state_machine__39033__auto____1 = (function (state_44791){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e44848){if((e44848 instanceof Object)){
var ex__39036__auto__ = e44848;
var statearr_44849_44898 = state_44791;
(statearr_44849_44898[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44899 = state_44791;
state_44791 = G__44899;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39033__auto__ = function(state_44791){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39033__auto____1.call(this,state_44791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39033__auto____0;
cljs$core$async$mix_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39033__auto____1;
return cljs$core$async$mix_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___44851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39122__auto__ = (function (){var statearr_44850 = f__39121__auto__.call(null);
(statearr_44850[(6)] = c__39120__auto___44851);

return statearr_44850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___44851,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29168__auto__ = (((p == null))?null:p);
var m__29169__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29169__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29168__auto__ = (((p == null))?null:p);
var m__29169__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,p,v,ch);
} else {
var m__29169__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44901 = arguments.length;
switch (G__44901) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29168__auto__ = (((p == null))?null:p);
var m__29169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,p);
} else {
var m__29169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29168__auto__ = (((p == null))?null:p);
var m__29169__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29168__auto__)]);
if(!((m__29169__auto__ == null))){
return m__29169__auto__.call(null,p,v);
} else {
var m__29169__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29169__auto____$1 == null))){
return m__29169__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__44905 = arguments.length;
switch (G__44905) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28485__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28485__auto__,mults){
return (function (p1__44903_SHARP_){
if(cljs.core.truth_(p1__44903_SHARP_.call(null,topic))){
return p1__44903_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44903_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28485__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44906 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44906 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44907){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44907 = meta44907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44908,meta44907__$1){
var self__ = this;
var _44908__$1 = this;
return (new cljs.core.async.t_cljs$core$async44906(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44907__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44908){
var self__ = this;
var _44908__$1 = this;
return self__.meta44907;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44907","meta44907",-816791853,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44906.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44906";

cljs.core.async.t_cljs$core$async44906.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async44906");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44906 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44906(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44907){
return (new cljs.core.async.t_cljs$core$async44906(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44907));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44906(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39120__auto___45026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45026,mults,ensure_mult,p){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45026,mults,ensure_mult,p){
return (function (state_44980){
var state_val_44981 = (state_44980[(1)]);
if((state_val_44981 === (7))){
var inst_44976 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_44982_45027 = state_44980__$1;
(statearr_44982_45027[(2)] = inst_44976);

(statearr_44982_45027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (20))){
var state_44980__$1 = state_44980;
var statearr_44983_45028 = state_44980__$1;
(statearr_44983_45028[(2)] = null);

(statearr_44983_45028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (1))){
var state_44980__$1 = state_44980;
var statearr_44984_45029 = state_44980__$1;
(statearr_44984_45029[(2)] = null);

(statearr_44984_45029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (24))){
var inst_44959 = (state_44980[(7)]);
var inst_44968 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44959);
var state_44980__$1 = state_44980;
var statearr_44985_45030 = state_44980__$1;
(statearr_44985_45030[(2)] = inst_44968);

(statearr_44985_45030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (4))){
var inst_44911 = (state_44980[(8)]);
var inst_44911__$1 = (state_44980[(2)]);
var inst_44912 = (inst_44911__$1 == null);
var state_44980__$1 = (function (){var statearr_44986 = state_44980;
(statearr_44986[(8)] = inst_44911__$1);

return statearr_44986;
})();
if(cljs.core.truth_(inst_44912)){
var statearr_44987_45031 = state_44980__$1;
(statearr_44987_45031[(1)] = (5));

} else {
var statearr_44988_45032 = state_44980__$1;
(statearr_44988_45032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (15))){
var inst_44953 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_44989_45033 = state_44980__$1;
(statearr_44989_45033[(2)] = inst_44953);

(statearr_44989_45033[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (21))){
var inst_44973 = (state_44980[(2)]);
var state_44980__$1 = (function (){var statearr_44990 = state_44980;
(statearr_44990[(9)] = inst_44973);

return statearr_44990;
})();
var statearr_44991_45034 = state_44980__$1;
(statearr_44991_45034[(2)] = null);

(statearr_44991_45034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (13))){
var inst_44935 = (state_44980[(10)]);
var inst_44937 = cljs.core.chunked_seq_QMARK_.call(null,inst_44935);
var state_44980__$1 = state_44980;
if(inst_44937){
var statearr_44992_45035 = state_44980__$1;
(statearr_44992_45035[(1)] = (16));

} else {
var statearr_44993_45036 = state_44980__$1;
(statearr_44993_45036[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (22))){
var inst_44965 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
if(cljs.core.truth_(inst_44965)){
var statearr_44994_45037 = state_44980__$1;
(statearr_44994_45037[(1)] = (23));

} else {
var statearr_44995_45038 = state_44980__$1;
(statearr_44995_45038[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (6))){
var inst_44911 = (state_44980[(8)]);
var inst_44961 = (state_44980[(11)]);
var inst_44959 = (state_44980[(7)]);
var inst_44959__$1 = topic_fn.call(null,inst_44911);
var inst_44960 = cljs.core.deref.call(null,mults);
var inst_44961__$1 = cljs.core.get.call(null,inst_44960,inst_44959__$1);
var state_44980__$1 = (function (){var statearr_44996 = state_44980;
(statearr_44996[(11)] = inst_44961__$1);

(statearr_44996[(7)] = inst_44959__$1);

return statearr_44996;
})();
if(cljs.core.truth_(inst_44961__$1)){
var statearr_44997_45039 = state_44980__$1;
(statearr_44997_45039[(1)] = (19));

} else {
var statearr_44998_45040 = state_44980__$1;
(statearr_44998_45040[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (25))){
var inst_44970 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_44999_45041 = state_44980__$1;
(statearr_44999_45041[(2)] = inst_44970);

(statearr_44999_45041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (17))){
var inst_44935 = (state_44980[(10)]);
var inst_44944 = cljs.core.first.call(null,inst_44935);
var inst_44945 = cljs.core.async.muxch_STAR_.call(null,inst_44944);
var inst_44946 = cljs.core.async.close_BANG_.call(null,inst_44945);
var inst_44947 = cljs.core.next.call(null,inst_44935);
var inst_44921 = inst_44947;
var inst_44922 = null;
var inst_44923 = (0);
var inst_44924 = (0);
var state_44980__$1 = (function (){var statearr_45000 = state_44980;
(statearr_45000[(12)] = inst_44923);

(statearr_45000[(13)] = inst_44922);

(statearr_45000[(14)] = inst_44946);

(statearr_45000[(15)] = inst_44921);

(statearr_45000[(16)] = inst_44924);

return statearr_45000;
})();
var statearr_45001_45042 = state_44980__$1;
(statearr_45001_45042[(2)] = null);

(statearr_45001_45042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (3))){
var inst_44978 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44980__$1,inst_44978);
} else {
if((state_val_44981 === (12))){
var inst_44955 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_45002_45043 = state_44980__$1;
(statearr_45002_45043[(2)] = inst_44955);

(statearr_45002_45043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (2))){
var state_44980__$1 = state_44980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44980__$1,(4),ch);
} else {
if((state_val_44981 === (23))){
var state_44980__$1 = state_44980;
var statearr_45003_45044 = state_44980__$1;
(statearr_45003_45044[(2)] = null);

(statearr_45003_45044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (19))){
var inst_44911 = (state_44980[(8)]);
var inst_44961 = (state_44980[(11)]);
var inst_44963 = cljs.core.async.muxch_STAR_.call(null,inst_44961);
var state_44980__$1 = state_44980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44980__$1,(22),inst_44963,inst_44911);
} else {
if((state_val_44981 === (11))){
var inst_44935 = (state_44980[(10)]);
var inst_44921 = (state_44980[(15)]);
var inst_44935__$1 = cljs.core.seq.call(null,inst_44921);
var state_44980__$1 = (function (){var statearr_45004 = state_44980;
(statearr_45004[(10)] = inst_44935__$1);

return statearr_45004;
})();
if(inst_44935__$1){
var statearr_45005_45045 = state_44980__$1;
(statearr_45005_45045[(1)] = (13));

} else {
var statearr_45006_45046 = state_44980__$1;
(statearr_45006_45046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (9))){
var inst_44957 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_45007_45047 = state_44980__$1;
(statearr_45007_45047[(2)] = inst_44957);

(statearr_45007_45047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (5))){
var inst_44918 = cljs.core.deref.call(null,mults);
var inst_44919 = cljs.core.vals.call(null,inst_44918);
var inst_44920 = cljs.core.seq.call(null,inst_44919);
var inst_44921 = inst_44920;
var inst_44922 = null;
var inst_44923 = (0);
var inst_44924 = (0);
var state_44980__$1 = (function (){var statearr_45008 = state_44980;
(statearr_45008[(12)] = inst_44923);

(statearr_45008[(13)] = inst_44922);

(statearr_45008[(15)] = inst_44921);

(statearr_45008[(16)] = inst_44924);

return statearr_45008;
})();
var statearr_45009_45048 = state_44980__$1;
(statearr_45009_45048[(2)] = null);

(statearr_45009_45048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (14))){
var state_44980__$1 = state_44980;
var statearr_45013_45049 = state_44980__$1;
(statearr_45013_45049[(2)] = null);

(statearr_45013_45049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (16))){
var inst_44935 = (state_44980[(10)]);
var inst_44939 = cljs.core.chunk_first.call(null,inst_44935);
var inst_44940 = cljs.core.chunk_rest.call(null,inst_44935);
var inst_44941 = cljs.core.count.call(null,inst_44939);
var inst_44921 = inst_44940;
var inst_44922 = inst_44939;
var inst_44923 = inst_44941;
var inst_44924 = (0);
var state_44980__$1 = (function (){var statearr_45014 = state_44980;
(statearr_45014[(12)] = inst_44923);

(statearr_45014[(13)] = inst_44922);

(statearr_45014[(15)] = inst_44921);

(statearr_45014[(16)] = inst_44924);

return statearr_45014;
})();
var statearr_45015_45050 = state_44980__$1;
(statearr_45015_45050[(2)] = null);

(statearr_45015_45050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (10))){
var inst_44923 = (state_44980[(12)]);
var inst_44922 = (state_44980[(13)]);
var inst_44921 = (state_44980[(15)]);
var inst_44924 = (state_44980[(16)]);
var inst_44929 = cljs.core._nth.call(null,inst_44922,inst_44924);
var inst_44930 = cljs.core.async.muxch_STAR_.call(null,inst_44929);
var inst_44931 = cljs.core.async.close_BANG_.call(null,inst_44930);
var inst_44932 = (inst_44924 + (1));
var tmp45010 = inst_44923;
var tmp45011 = inst_44922;
var tmp45012 = inst_44921;
var inst_44921__$1 = tmp45012;
var inst_44922__$1 = tmp45011;
var inst_44923__$1 = tmp45010;
var inst_44924__$1 = inst_44932;
var state_44980__$1 = (function (){var statearr_45016 = state_44980;
(statearr_45016[(12)] = inst_44923__$1);

(statearr_45016[(13)] = inst_44922__$1);

(statearr_45016[(17)] = inst_44931);

(statearr_45016[(15)] = inst_44921__$1);

(statearr_45016[(16)] = inst_44924__$1);

return statearr_45016;
})();
var statearr_45017_45051 = state_44980__$1;
(statearr_45017_45051[(2)] = null);

(statearr_45017_45051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (18))){
var inst_44950 = (state_44980[(2)]);
var state_44980__$1 = state_44980;
var statearr_45018_45052 = state_44980__$1;
(statearr_45018_45052[(2)] = inst_44950);

(statearr_45018_45052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44981 === (8))){
var inst_44923 = (state_44980[(12)]);
var inst_44924 = (state_44980[(16)]);
var inst_44926 = (inst_44924 < inst_44923);
var inst_44927 = inst_44926;
var state_44980__$1 = state_44980;
if(cljs.core.truth_(inst_44927)){
var statearr_45019_45053 = state_44980__$1;
(statearr_45019_45053[(1)] = (10));

} else {
var statearr_45020_45054 = state_44980__$1;
(statearr_45020_45054[(1)] = (11));

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
});})(c__39120__auto___45026,mults,ensure_mult,p))
;
return ((function (switch__39032__auto__,c__39120__auto___45026,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45021[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45021[(1)] = (1));

return statearr_45021;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_44980){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_44980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45022){if((e45022 instanceof Object)){
var ex__39036__auto__ = e45022;
var statearr_45023_45055 = state_44980;
(statearr_45023_45055[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45056 = state_44980;
state_44980 = G__45056;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_44980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_44980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45026,mults,ensure_mult,p))
})();
var state__39122__auto__ = (function (){var statearr_45024 = f__39121__auto__.call(null);
(statearr_45024[(6)] = c__39120__auto___45026);

return statearr_45024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45026,mults,ensure_mult,p))
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
var G__45058 = arguments.length;
switch (G__45058) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45061 = arguments.length;
switch (G__45061) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__45064 = arguments.length;
switch (G__45064) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__39120__auto___45131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45103){
var state_val_45104 = (state_45103[(1)]);
if((state_val_45104 === (7))){
var state_45103__$1 = state_45103;
var statearr_45105_45132 = state_45103__$1;
(statearr_45105_45132[(2)] = null);

(statearr_45105_45132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (1))){
var state_45103__$1 = state_45103;
var statearr_45106_45133 = state_45103__$1;
(statearr_45106_45133[(2)] = null);

(statearr_45106_45133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (4))){
var inst_45067 = (state_45103[(7)]);
var inst_45069 = (inst_45067 < cnt);
var state_45103__$1 = state_45103;
if(cljs.core.truth_(inst_45069)){
var statearr_45107_45134 = state_45103__$1;
(statearr_45107_45134[(1)] = (6));

} else {
var statearr_45108_45135 = state_45103__$1;
(statearr_45108_45135[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (15))){
var inst_45099 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45109_45136 = state_45103__$1;
(statearr_45109_45136[(2)] = inst_45099);

(statearr_45109_45136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (13))){
var inst_45092 = cljs.core.async.close_BANG_.call(null,out);
var state_45103__$1 = state_45103;
var statearr_45110_45137 = state_45103__$1;
(statearr_45110_45137[(2)] = inst_45092);

(statearr_45110_45137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (6))){
var state_45103__$1 = state_45103;
var statearr_45111_45138 = state_45103__$1;
(statearr_45111_45138[(2)] = null);

(statearr_45111_45138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (3))){
var inst_45101 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45103__$1,inst_45101);
} else {
if((state_val_45104 === (12))){
var inst_45089 = (state_45103[(8)]);
var inst_45089__$1 = (state_45103[(2)]);
var inst_45090 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45089__$1);
var state_45103__$1 = (function (){var statearr_45112 = state_45103;
(statearr_45112[(8)] = inst_45089__$1);

return statearr_45112;
})();
if(cljs.core.truth_(inst_45090)){
var statearr_45113_45139 = state_45103__$1;
(statearr_45113_45139[(1)] = (13));

} else {
var statearr_45114_45140 = state_45103__$1;
(statearr_45114_45140[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (2))){
var inst_45066 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45067 = (0);
var state_45103__$1 = (function (){var statearr_45115 = state_45103;
(statearr_45115[(7)] = inst_45067);

(statearr_45115[(9)] = inst_45066);

return statearr_45115;
})();
var statearr_45116_45141 = state_45103__$1;
(statearr_45116_45141[(2)] = null);

(statearr_45116_45141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (11))){
var inst_45067 = (state_45103[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45103,(10),Object,null,(9));
var inst_45076 = chs__$1.call(null,inst_45067);
var inst_45077 = done.call(null,inst_45067);
var inst_45078 = cljs.core.async.take_BANG_.call(null,inst_45076,inst_45077);
var state_45103__$1 = state_45103;
var statearr_45117_45142 = state_45103__$1;
(statearr_45117_45142[(2)] = inst_45078);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (9))){
var inst_45067 = (state_45103[(7)]);
var inst_45080 = (state_45103[(2)]);
var inst_45081 = (inst_45067 + (1));
var inst_45067__$1 = inst_45081;
var state_45103__$1 = (function (){var statearr_45118 = state_45103;
(statearr_45118[(7)] = inst_45067__$1);

(statearr_45118[(10)] = inst_45080);

return statearr_45118;
})();
var statearr_45119_45143 = state_45103__$1;
(statearr_45119_45143[(2)] = null);

(statearr_45119_45143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (5))){
var inst_45087 = (state_45103[(2)]);
var state_45103__$1 = (function (){var statearr_45120 = state_45103;
(statearr_45120[(11)] = inst_45087);

return statearr_45120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45103__$1,(12),dchan);
} else {
if((state_val_45104 === (14))){
var inst_45089 = (state_45103[(8)]);
var inst_45094 = cljs.core.apply.call(null,f,inst_45089);
var state_45103__$1 = state_45103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45103__$1,(16),out,inst_45094);
} else {
if((state_val_45104 === (16))){
var inst_45096 = (state_45103[(2)]);
var state_45103__$1 = (function (){var statearr_45121 = state_45103;
(statearr_45121[(12)] = inst_45096);

return statearr_45121;
})();
var statearr_45122_45144 = state_45103__$1;
(statearr_45122_45144[(2)] = null);

(statearr_45122_45144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (10))){
var inst_45071 = (state_45103[(2)]);
var inst_45072 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45103__$1 = (function (){var statearr_45123 = state_45103;
(statearr_45123[(13)] = inst_45071);

return statearr_45123;
})();
var statearr_45124_45145 = state_45103__$1;
(statearr_45124_45145[(2)] = inst_45072);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45103__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45104 === (8))){
var inst_45085 = (state_45103[(2)]);
var state_45103__$1 = state_45103;
var statearr_45125_45146 = state_45103__$1;
(statearr_45125_45146[(2)] = inst_45085);

(statearr_45125_45146[(1)] = (5));


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
});})(c__39120__auto___45131,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39032__auto__,c__39120__auto___45131,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45126[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45126[(1)] = (1));

return statearr_45126;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45103){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45127){if((e45127 instanceof Object)){
var ex__39036__auto__ = e45127;
var statearr_45128_45147 = state_45103;
(statearr_45128_45147[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45148 = state_45103;
state_45103 = G__45148;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45103);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45131,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39122__auto__ = (function (){var statearr_45129 = f__39121__auto__.call(null);
(statearr_45129[(6)] = c__39120__auto___45131);

return statearr_45129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45131,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__45151 = arguments.length;
switch (G__45151) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39120__auto___45205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45205,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45205,out){
return (function (state_45183){
var state_val_45184 = (state_45183[(1)]);
if((state_val_45184 === (7))){
var inst_45162 = (state_45183[(7)]);
var inst_45163 = (state_45183[(8)]);
var inst_45162__$1 = (state_45183[(2)]);
var inst_45163__$1 = cljs.core.nth.call(null,inst_45162__$1,(0),null);
var inst_45164 = cljs.core.nth.call(null,inst_45162__$1,(1),null);
var inst_45165 = (inst_45163__$1 == null);
var state_45183__$1 = (function (){var statearr_45185 = state_45183;
(statearr_45185[(9)] = inst_45164);

(statearr_45185[(7)] = inst_45162__$1);

(statearr_45185[(8)] = inst_45163__$1);

return statearr_45185;
})();
if(cljs.core.truth_(inst_45165)){
var statearr_45186_45206 = state_45183__$1;
(statearr_45186_45206[(1)] = (8));

} else {
var statearr_45187_45207 = state_45183__$1;
(statearr_45187_45207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (1))){
var inst_45152 = cljs.core.vec.call(null,chs);
var inst_45153 = inst_45152;
var state_45183__$1 = (function (){var statearr_45188 = state_45183;
(statearr_45188[(10)] = inst_45153);

return statearr_45188;
})();
var statearr_45189_45208 = state_45183__$1;
(statearr_45189_45208[(2)] = null);

(statearr_45189_45208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (4))){
var inst_45153 = (state_45183[(10)]);
var state_45183__$1 = state_45183;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45183__$1,(7),inst_45153);
} else {
if((state_val_45184 === (6))){
var inst_45179 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
var statearr_45190_45209 = state_45183__$1;
(statearr_45190_45209[(2)] = inst_45179);

(statearr_45190_45209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (3))){
var inst_45181 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45183__$1,inst_45181);
} else {
if((state_val_45184 === (2))){
var inst_45153 = (state_45183[(10)]);
var inst_45155 = cljs.core.count.call(null,inst_45153);
var inst_45156 = (inst_45155 > (0));
var state_45183__$1 = state_45183;
if(cljs.core.truth_(inst_45156)){
var statearr_45192_45210 = state_45183__$1;
(statearr_45192_45210[(1)] = (4));

} else {
var statearr_45193_45211 = state_45183__$1;
(statearr_45193_45211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (11))){
var inst_45153 = (state_45183[(10)]);
var inst_45172 = (state_45183[(2)]);
var tmp45191 = inst_45153;
var inst_45153__$1 = tmp45191;
var state_45183__$1 = (function (){var statearr_45194 = state_45183;
(statearr_45194[(11)] = inst_45172);

(statearr_45194[(10)] = inst_45153__$1);

return statearr_45194;
})();
var statearr_45195_45212 = state_45183__$1;
(statearr_45195_45212[(2)] = null);

(statearr_45195_45212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (9))){
var inst_45163 = (state_45183[(8)]);
var state_45183__$1 = state_45183;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45183__$1,(11),out,inst_45163);
} else {
if((state_val_45184 === (5))){
var inst_45177 = cljs.core.async.close_BANG_.call(null,out);
var state_45183__$1 = state_45183;
var statearr_45196_45213 = state_45183__$1;
(statearr_45196_45213[(2)] = inst_45177);

(statearr_45196_45213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (10))){
var inst_45175 = (state_45183[(2)]);
var state_45183__$1 = state_45183;
var statearr_45197_45214 = state_45183__$1;
(statearr_45197_45214[(2)] = inst_45175);

(statearr_45197_45214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45184 === (8))){
var inst_45164 = (state_45183[(9)]);
var inst_45162 = (state_45183[(7)]);
var inst_45163 = (state_45183[(8)]);
var inst_45153 = (state_45183[(10)]);
var inst_45167 = (function (){var cs = inst_45153;
var vec__45158 = inst_45162;
var v = inst_45163;
var c = inst_45164;
return ((function (cs,vec__45158,v,c,inst_45164,inst_45162,inst_45163,inst_45153,state_val_45184,c__39120__auto___45205,out){
return (function (p1__45149_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45149_SHARP_);
});
;})(cs,vec__45158,v,c,inst_45164,inst_45162,inst_45163,inst_45153,state_val_45184,c__39120__auto___45205,out))
})();
var inst_45168 = cljs.core.filterv.call(null,inst_45167,inst_45153);
var inst_45153__$1 = inst_45168;
var state_45183__$1 = (function (){var statearr_45198 = state_45183;
(statearr_45198[(10)] = inst_45153__$1);

return statearr_45198;
})();
var statearr_45199_45215 = state_45183__$1;
(statearr_45199_45215[(2)] = null);

(statearr_45199_45215[(1)] = (2));


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
});})(c__39120__auto___45205,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45205,out){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45200[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45200[(1)] = (1));

return statearr_45200;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45183){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45201){if((e45201 instanceof Object)){
var ex__39036__auto__ = e45201;
var statearr_45202_45216 = state_45183;
(statearr_45202_45216[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45217 = state_45183;
state_45183 = G__45217;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45183);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45205,out))
})();
var state__39122__auto__ = (function (){var statearr_45203 = f__39121__auto__.call(null);
(statearr_45203[(6)] = c__39120__auto___45205);

return statearr_45203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45205,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45219 = arguments.length;
switch (G__45219) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39120__auto___45264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45264,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45264,out){
return (function (state_45243){
var state_val_45244 = (state_45243[(1)]);
if((state_val_45244 === (7))){
var inst_45225 = (state_45243[(7)]);
var inst_45225__$1 = (state_45243[(2)]);
var inst_45226 = (inst_45225__$1 == null);
var inst_45227 = cljs.core.not.call(null,inst_45226);
var state_45243__$1 = (function (){var statearr_45245 = state_45243;
(statearr_45245[(7)] = inst_45225__$1);

return statearr_45245;
})();
if(inst_45227){
var statearr_45246_45265 = state_45243__$1;
(statearr_45246_45265[(1)] = (8));

} else {
var statearr_45247_45266 = state_45243__$1;
(statearr_45247_45266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (1))){
var inst_45220 = (0);
var state_45243__$1 = (function (){var statearr_45248 = state_45243;
(statearr_45248[(8)] = inst_45220);

return statearr_45248;
})();
var statearr_45249_45267 = state_45243__$1;
(statearr_45249_45267[(2)] = null);

(statearr_45249_45267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (4))){
var state_45243__$1 = state_45243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45243__$1,(7),ch);
} else {
if((state_val_45244 === (6))){
var inst_45238 = (state_45243[(2)]);
var state_45243__$1 = state_45243;
var statearr_45250_45268 = state_45243__$1;
(statearr_45250_45268[(2)] = inst_45238);

(statearr_45250_45268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (3))){
var inst_45240 = (state_45243[(2)]);
var inst_45241 = cljs.core.async.close_BANG_.call(null,out);
var state_45243__$1 = (function (){var statearr_45251 = state_45243;
(statearr_45251[(9)] = inst_45240);

return statearr_45251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45243__$1,inst_45241);
} else {
if((state_val_45244 === (2))){
var inst_45220 = (state_45243[(8)]);
var inst_45222 = (inst_45220 < n);
var state_45243__$1 = state_45243;
if(cljs.core.truth_(inst_45222)){
var statearr_45252_45269 = state_45243__$1;
(statearr_45252_45269[(1)] = (4));

} else {
var statearr_45253_45270 = state_45243__$1;
(statearr_45253_45270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (11))){
var inst_45220 = (state_45243[(8)]);
var inst_45230 = (state_45243[(2)]);
var inst_45231 = (inst_45220 + (1));
var inst_45220__$1 = inst_45231;
var state_45243__$1 = (function (){var statearr_45254 = state_45243;
(statearr_45254[(10)] = inst_45230);

(statearr_45254[(8)] = inst_45220__$1);

return statearr_45254;
})();
var statearr_45255_45271 = state_45243__$1;
(statearr_45255_45271[(2)] = null);

(statearr_45255_45271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (9))){
var state_45243__$1 = state_45243;
var statearr_45256_45272 = state_45243__$1;
(statearr_45256_45272[(2)] = null);

(statearr_45256_45272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (5))){
var state_45243__$1 = state_45243;
var statearr_45257_45273 = state_45243__$1;
(statearr_45257_45273[(2)] = null);

(statearr_45257_45273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (10))){
var inst_45235 = (state_45243[(2)]);
var state_45243__$1 = state_45243;
var statearr_45258_45274 = state_45243__$1;
(statearr_45258_45274[(2)] = inst_45235);

(statearr_45258_45274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45244 === (8))){
var inst_45225 = (state_45243[(7)]);
var state_45243__$1 = state_45243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45243__$1,(11),out,inst_45225);
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
});})(c__39120__auto___45264,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45264,out){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45259[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45259[(1)] = (1));

return statearr_45259;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45243){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45260){if((e45260 instanceof Object)){
var ex__39036__auto__ = e45260;
var statearr_45261_45275 = state_45243;
(statearr_45261_45275[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45276 = state_45243;
state_45243 = G__45276;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45264,out))
})();
var state__39122__auto__ = (function (){var statearr_45262 = f__39121__auto__.call(null);
(statearr_45262[(6)] = c__39120__auto___45264);

return statearr_45262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45264,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45278 = (function (f,ch,meta45279){
this.f = f;
this.ch = ch;
this.meta45279 = meta45279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45280,meta45279__$1){
var self__ = this;
var _45280__$1 = this;
return (new cljs.core.async.t_cljs$core$async45278(self__.f,self__.ch,meta45279__$1));
});

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45280){
var self__ = this;
var _45280__$1 = this;
return self__.meta45279;
});

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45281 = (function (f,ch,meta45279,_,fn1,meta45282){
this.f = f;
this.ch = ch;
this.meta45279 = meta45279;
this._ = _;
this.fn1 = fn1;
this.meta45282 = meta45282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45283,meta45282__$1){
var self__ = this;
var _45283__$1 = this;
return (new cljs.core.async.t_cljs$core$async45281(self__.f,self__.ch,self__.meta45279,self__._,self__.fn1,meta45282__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45283){
var self__ = this;
var _45283__$1 = this;
return self__.meta45282;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45277_SHARP_){
return f1.call(null,(((p1__45277_SHARP_ == null))?null:self__.f.call(null,p1__45277_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45281.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45279","meta45279",-25856386,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45278","cljs.core.async/t_cljs$core$async45278",551681440,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45282","meta45282",-2142793399,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45281";

cljs.core.async.t_cljs$core$async45281.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async45281");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45281 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45281(f__$1,ch__$1,meta45279__$1,___$2,fn1__$1,meta45282){
return (new cljs.core.async.t_cljs$core$async45281(f__$1,ch__$1,meta45279__$1,___$2,fn1__$1,meta45282));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45281(self__.f,self__.ch,self__.meta45279,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28473__auto__ = ret;
if(cljs.core.truth_(and__28473__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28473__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45279","meta45279",-25856386,null)], null);
});

cljs.core.async.t_cljs$core$async45278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45278";

cljs.core.async.t_cljs$core$async45278.cljs$lang$ctorPrWriter = (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async45278");
});

cljs.core.async.__GT_t_cljs$core$async45278 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45278(f__$1,ch__$1,meta45279){
return (new cljs.core.async.t_cljs$core$async45278(f__$1,ch__$1,meta45279));
});

}

return (new cljs.core.async.t_cljs$core$async45278(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45284 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45284 = (function (f,ch,meta45285){
this.f = f;
this.ch = ch;
this.meta45285 = meta45285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45286,meta45285__$1){
var self__ = this;
var _45286__$1 = this;
return (new cljs.core.async.t_cljs$core$async45284(self__.f,self__.ch,meta45285__$1));
});

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45286){
var self__ = this;
var _45286__$1 = this;
return self__.meta45285;
});

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45284.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45285","meta45285",645751304,null)], null);
});

cljs.core.async.t_cljs$core$async45284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45284";

cljs.core.async.t_cljs$core$async45284.cljs$lang$ctorPrWriter = (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async45284");
});

cljs.core.async.__GT_t_cljs$core$async45284 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45284(f__$1,ch__$1,meta45285){
return (new cljs.core.async.t_cljs$core$async45284(f__$1,ch__$1,meta45285));
});

}

return (new cljs.core.async.t_cljs$core$async45284(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45287 = (function (p,ch,meta45288){
this.p = p;
this.ch = ch;
this.meta45288 = meta45288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45289,meta45288__$1){
var self__ = this;
var _45289__$1 = this;
return (new cljs.core.async.t_cljs$core$async45287(self__.p,self__.ch,meta45288__$1));
});

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45289){
var self__ = this;
var _45289__$1 = this;
return self__.meta45288;
});

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45288","meta45288",1136237632,null)], null);
});

cljs.core.async.t_cljs$core$async45287.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45287.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45287";

cljs.core.async.t_cljs$core$async45287.cljs$lang$ctorPrWriter = (function (this__29110__auto__,writer__29111__auto__,opt__29112__auto__){
return cljs.core._write.call(null,writer__29111__auto__,"cljs.core.async/t_cljs$core$async45287");
});

cljs.core.async.__GT_t_cljs$core$async45287 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45287(p__$1,ch__$1,meta45288){
return (new cljs.core.async.t_cljs$core$async45287(p__$1,ch__$1,meta45288));
});

}

return (new cljs.core.async.t_cljs$core$async45287(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45291 = arguments.length;
switch (G__45291) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39120__auto___45331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45331,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45331,out){
return (function (state_45312){
var state_val_45313 = (state_45312[(1)]);
if((state_val_45313 === (7))){
var inst_45308 = (state_45312[(2)]);
var state_45312__$1 = state_45312;
var statearr_45314_45332 = state_45312__$1;
(statearr_45314_45332[(2)] = inst_45308);

(statearr_45314_45332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (1))){
var state_45312__$1 = state_45312;
var statearr_45315_45333 = state_45312__$1;
(statearr_45315_45333[(2)] = null);

(statearr_45315_45333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (4))){
var inst_45294 = (state_45312[(7)]);
var inst_45294__$1 = (state_45312[(2)]);
var inst_45295 = (inst_45294__$1 == null);
var state_45312__$1 = (function (){var statearr_45316 = state_45312;
(statearr_45316[(7)] = inst_45294__$1);

return statearr_45316;
})();
if(cljs.core.truth_(inst_45295)){
var statearr_45317_45334 = state_45312__$1;
(statearr_45317_45334[(1)] = (5));

} else {
var statearr_45318_45335 = state_45312__$1;
(statearr_45318_45335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (6))){
var inst_45294 = (state_45312[(7)]);
var inst_45299 = p.call(null,inst_45294);
var state_45312__$1 = state_45312;
if(cljs.core.truth_(inst_45299)){
var statearr_45319_45336 = state_45312__$1;
(statearr_45319_45336[(1)] = (8));

} else {
var statearr_45320_45337 = state_45312__$1;
(statearr_45320_45337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (3))){
var inst_45310 = (state_45312[(2)]);
var state_45312__$1 = state_45312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45312__$1,inst_45310);
} else {
if((state_val_45313 === (2))){
var state_45312__$1 = state_45312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45312__$1,(4),ch);
} else {
if((state_val_45313 === (11))){
var inst_45302 = (state_45312[(2)]);
var state_45312__$1 = state_45312;
var statearr_45321_45338 = state_45312__$1;
(statearr_45321_45338[(2)] = inst_45302);

(statearr_45321_45338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (9))){
var state_45312__$1 = state_45312;
var statearr_45322_45339 = state_45312__$1;
(statearr_45322_45339[(2)] = null);

(statearr_45322_45339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (5))){
var inst_45297 = cljs.core.async.close_BANG_.call(null,out);
var state_45312__$1 = state_45312;
var statearr_45323_45340 = state_45312__$1;
(statearr_45323_45340[(2)] = inst_45297);

(statearr_45323_45340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (10))){
var inst_45305 = (state_45312[(2)]);
var state_45312__$1 = (function (){var statearr_45324 = state_45312;
(statearr_45324[(8)] = inst_45305);

return statearr_45324;
})();
var statearr_45325_45341 = state_45312__$1;
(statearr_45325_45341[(2)] = null);

(statearr_45325_45341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45313 === (8))){
var inst_45294 = (state_45312[(7)]);
var state_45312__$1 = state_45312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45312__$1,(11),out,inst_45294);
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
});})(c__39120__auto___45331,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45331,out){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45326 = [null,null,null,null,null,null,null,null,null];
(statearr_45326[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45326[(1)] = (1));

return statearr_45326;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45312){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45327){if((e45327 instanceof Object)){
var ex__39036__auto__ = e45327;
var statearr_45328_45342 = state_45312;
(statearr_45328_45342[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45343 = state_45312;
state_45312 = G__45343;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45312);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45331,out))
})();
var state__39122__auto__ = (function (){var statearr_45329 = f__39121__auto__.call(null);
(statearr_45329[(6)] = c__39120__auto___45331);

return statearr_45329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45331,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45345 = arguments.length;
switch (G__45345) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__){
return (function (state_45408){
var state_val_45409 = (state_45408[(1)]);
if((state_val_45409 === (7))){
var inst_45404 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
var statearr_45410_45448 = state_45408__$1;
(statearr_45410_45448[(2)] = inst_45404);

(statearr_45410_45448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (20))){
var inst_45374 = (state_45408[(7)]);
var inst_45385 = (state_45408[(2)]);
var inst_45386 = cljs.core.next.call(null,inst_45374);
var inst_45360 = inst_45386;
var inst_45361 = null;
var inst_45362 = (0);
var inst_45363 = (0);
var state_45408__$1 = (function (){var statearr_45411 = state_45408;
(statearr_45411[(8)] = inst_45363);

(statearr_45411[(9)] = inst_45361);

(statearr_45411[(10)] = inst_45362);

(statearr_45411[(11)] = inst_45385);

(statearr_45411[(12)] = inst_45360);

return statearr_45411;
})();
var statearr_45412_45449 = state_45408__$1;
(statearr_45412_45449[(2)] = null);

(statearr_45412_45449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (1))){
var state_45408__$1 = state_45408;
var statearr_45413_45450 = state_45408__$1;
(statearr_45413_45450[(2)] = null);

(statearr_45413_45450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (4))){
var inst_45349 = (state_45408[(13)]);
var inst_45349__$1 = (state_45408[(2)]);
var inst_45350 = (inst_45349__$1 == null);
var state_45408__$1 = (function (){var statearr_45414 = state_45408;
(statearr_45414[(13)] = inst_45349__$1);

return statearr_45414;
})();
if(cljs.core.truth_(inst_45350)){
var statearr_45415_45451 = state_45408__$1;
(statearr_45415_45451[(1)] = (5));

} else {
var statearr_45416_45452 = state_45408__$1;
(statearr_45416_45452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (15))){
var state_45408__$1 = state_45408;
var statearr_45420_45453 = state_45408__$1;
(statearr_45420_45453[(2)] = null);

(statearr_45420_45453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (21))){
var state_45408__$1 = state_45408;
var statearr_45421_45454 = state_45408__$1;
(statearr_45421_45454[(2)] = null);

(statearr_45421_45454[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (13))){
var inst_45363 = (state_45408[(8)]);
var inst_45361 = (state_45408[(9)]);
var inst_45362 = (state_45408[(10)]);
var inst_45360 = (state_45408[(12)]);
var inst_45370 = (state_45408[(2)]);
var inst_45371 = (inst_45363 + (1));
var tmp45417 = inst_45361;
var tmp45418 = inst_45362;
var tmp45419 = inst_45360;
var inst_45360__$1 = tmp45419;
var inst_45361__$1 = tmp45417;
var inst_45362__$1 = tmp45418;
var inst_45363__$1 = inst_45371;
var state_45408__$1 = (function (){var statearr_45422 = state_45408;
(statearr_45422[(8)] = inst_45363__$1);

(statearr_45422[(9)] = inst_45361__$1);

(statearr_45422[(10)] = inst_45362__$1);

(statearr_45422[(12)] = inst_45360__$1);

(statearr_45422[(14)] = inst_45370);

return statearr_45422;
})();
var statearr_45423_45455 = state_45408__$1;
(statearr_45423_45455[(2)] = null);

(statearr_45423_45455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (22))){
var state_45408__$1 = state_45408;
var statearr_45424_45456 = state_45408__$1;
(statearr_45424_45456[(2)] = null);

(statearr_45424_45456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (6))){
var inst_45349 = (state_45408[(13)]);
var inst_45358 = f.call(null,inst_45349);
var inst_45359 = cljs.core.seq.call(null,inst_45358);
var inst_45360 = inst_45359;
var inst_45361 = null;
var inst_45362 = (0);
var inst_45363 = (0);
var state_45408__$1 = (function (){var statearr_45425 = state_45408;
(statearr_45425[(8)] = inst_45363);

(statearr_45425[(9)] = inst_45361);

(statearr_45425[(10)] = inst_45362);

(statearr_45425[(12)] = inst_45360);

return statearr_45425;
})();
var statearr_45426_45457 = state_45408__$1;
(statearr_45426_45457[(2)] = null);

(statearr_45426_45457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (17))){
var inst_45374 = (state_45408[(7)]);
var inst_45378 = cljs.core.chunk_first.call(null,inst_45374);
var inst_45379 = cljs.core.chunk_rest.call(null,inst_45374);
var inst_45380 = cljs.core.count.call(null,inst_45378);
var inst_45360 = inst_45379;
var inst_45361 = inst_45378;
var inst_45362 = inst_45380;
var inst_45363 = (0);
var state_45408__$1 = (function (){var statearr_45427 = state_45408;
(statearr_45427[(8)] = inst_45363);

(statearr_45427[(9)] = inst_45361);

(statearr_45427[(10)] = inst_45362);

(statearr_45427[(12)] = inst_45360);

return statearr_45427;
})();
var statearr_45428_45458 = state_45408__$1;
(statearr_45428_45458[(2)] = null);

(statearr_45428_45458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (3))){
var inst_45406 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45408__$1,inst_45406);
} else {
if((state_val_45409 === (12))){
var inst_45394 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
var statearr_45429_45459 = state_45408__$1;
(statearr_45429_45459[(2)] = inst_45394);

(statearr_45429_45459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (2))){
var state_45408__$1 = state_45408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45408__$1,(4),in$);
} else {
if((state_val_45409 === (23))){
var inst_45402 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
var statearr_45430_45460 = state_45408__$1;
(statearr_45430_45460[(2)] = inst_45402);

(statearr_45430_45460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (19))){
var inst_45389 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
var statearr_45431_45461 = state_45408__$1;
(statearr_45431_45461[(2)] = inst_45389);

(statearr_45431_45461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (11))){
var inst_45360 = (state_45408[(12)]);
var inst_45374 = (state_45408[(7)]);
var inst_45374__$1 = cljs.core.seq.call(null,inst_45360);
var state_45408__$1 = (function (){var statearr_45432 = state_45408;
(statearr_45432[(7)] = inst_45374__$1);

return statearr_45432;
})();
if(inst_45374__$1){
var statearr_45433_45462 = state_45408__$1;
(statearr_45433_45462[(1)] = (14));

} else {
var statearr_45434_45463 = state_45408__$1;
(statearr_45434_45463[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (9))){
var inst_45396 = (state_45408[(2)]);
var inst_45397 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45408__$1 = (function (){var statearr_45435 = state_45408;
(statearr_45435[(15)] = inst_45396);

return statearr_45435;
})();
if(cljs.core.truth_(inst_45397)){
var statearr_45436_45464 = state_45408__$1;
(statearr_45436_45464[(1)] = (21));

} else {
var statearr_45437_45465 = state_45408__$1;
(statearr_45437_45465[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (5))){
var inst_45352 = cljs.core.async.close_BANG_.call(null,out);
var state_45408__$1 = state_45408;
var statearr_45438_45466 = state_45408__$1;
(statearr_45438_45466[(2)] = inst_45352);

(statearr_45438_45466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (14))){
var inst_45374 = (state_45408[(7)]);
var inst_45376 = cljs.core.chunked_seq_QMARK_.call(null,inst_45374);
var state_45408__$1 = state_45408;
if(inst_45376){
var statearr_45439_45467 = state_45408__$1;
(statearr_45439_45467[(1)] = (17));

} else {
var statearr_45440_45468 = state_45408__$1;
(statearr_45440_45468[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (16))){
var inst_45392 = (state_45408[(2)]);
var state_45408__$1 = state_45408;
var statearr_45441_45469 = state_45408__$1;
(statearr_45441_45469[(2)] = inst_45392);

(statearr_45441_45469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45409 === (10))){
var inst_45363 = (state_45408[(8)]);
var inst_45361 = (state_45408[(9)]);
var inst_45368 = cljs.core._nth.call(null,inst_45361,inst_45363);
var state_45408__$1 = state_45408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45408__$1,(13),out,inst_45368);
} else {
if((state_val_45409 === (18))){
var inst_45374 = (state_45408[(7)]);
var inst_45383 = cljs.core.first.call(null,inst_45374);
var state_45408__$1 = state_45408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45408__$1,(20),out,inst_45383);
} else {
if((state_val_45409 === (8))){
var inst_45363 = (state_45408[(8)]);
var inst_45362 = (state_45408[(10)]);
var inst_45365 = (inst_45363 < inst_45362);
var inst_45366 = inst_45365;
var state_45408__$1 = state_45408;
if(cljs.core.truth_(inst_45366)){
var statearr_45442_45470 = state_45408__$1;
(statearr_45442_45470[(1)] = (10));

} else {
var statearr_45443_45471 = state_45408__$1;
(statearr_45443_45471[(1)] = (11));

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
});})(c__39120__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39033__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39033__auto____0 = (function (){
var statearr_45444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45444[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39033__auto__);

(statearr_45444[(1)] = (1));

return statearr_45444;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39033__auto____1 = (function (state_45408){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45445){if((e45445 instanceof Object)){
var ex__39036__auto__ = e45445;
var statearr_45446_45472 = state_45408;
(statearr_45446_45472[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45473 = state_45408;
state_45408 = G__45473;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39033__auto__ = function(state_45408){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39033__auto____1.call(this,state_45408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39033__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39033__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__))
})();
var state__39122__auto__ = (function (){var statearr_45447 = f__39121__auto__.call(null);
(statearr_45447[(6)] = c__39120__auto__);

return statearr_45447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__))
);

return c__39120__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45475 = arguments.length;
switch (G__45475) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45478 = arguments.length;
switch (G__45478) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45481 = arguments.length;
switch (G__45481) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39120__auto___45528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45528,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45528,out){
return (function (state_45505){
var state_val_45506 = (state_45505[(1)]);
if((state_val_45506 === (7))){
var inst_45500 = (state_45505[(2)]);
var state_45505__$1 = state_45505;
var statearr_45507_45529 = state_45505__$1;
(statearr_45507_45529[(2)] = inst_45500);

(statearr_45507_45529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (1))){
var inst_45482 = null;
var state_45505__$1 = (function (){var statearr_45508 = state_45505;
(statearr_45508[(7)] = inst_45482);

return statearr_45508;
})();
var statearr_45509_45530 = state_45505__$1;
(statearr_45509_45530[(2)] = null);

(statearr_45509_45530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (4))){
var inst_45485 = (state_45505[(8)]);
var inst_45485__$1 = (state_45505[(2)]);
var inst_45486 = (inst_45485__$1 == null);
var inst_45487 = cljs.core.not.call(null,inst_45486);
var state_45505__$1 = (function (){var statearr_45510 = state_45505;
(statearr_45510[(8)] = inst_45485__$1);

return statearr_45510;
})();
if(inst_45487){
var statearr_45511_45531 = state_45505__$1;
(statearr_45511_45531[(1)] = (5));

} else {
var statearr_45512_45532 = state_45505__$1;
(statearr_45512_45532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (6))){
var state_45505__$1 = state_45505;
var statearr_45513_45533 = state_45505__$1;
(statearr_45513_45533[(2)] = null);

(statearr_45513_45533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (3))){
var inst_45502 = (state_45505[(2)]);
var inst_45503 = cljs.core.async.close_BANG_.call(null,out);
var state_45505__$1 = (function (){var statearr_45514 = state_45505;
(statearr_45514[(9)] = inst_45502);

return statearr_45514;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45505__$1,inst_45503);
} else {
if((state_val_45506 === (2))){
var state_45505__$1 = state_45505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45505__$1,(4),ch);
} else {
if((state_val_45506 === (11))){
var inst_45485 = (state_45505[(8)]);
var inst_45494 = (state_45505[(2)]);
var inst_45482 = inst_45485;
var state_45505__$1 = (function (){var statearr_45515 = state_45505;
(statearr_45515[(7)] = inst_45482);

(statearr_45515[(10)] = inst_45494);

return statearr_45515;
})();
var statearr_45516_45534 = state_45505__$1;
(statearr_45516_45534[(2)] = null);

(statearr_45516_45534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (9))){
var inst_45485 = (state_45505[(8)]);
var state_45505__$1 = state_45505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45505__$1,(11),out,inst_45485);
} else {
if((state_val_45506 === (5))){
var inst_45482 = (state_45505[(7)]);
var inst_45485 = (state_45505[(8)]);
var inst_45489 = cljs.core._EQ_.call(null,inst_45485,inst_45482);
var state_45505__$1 = state_45505;
if(inst_45489){
var statearr_45518_45535 = state_45505__$1;
(statearr_45518_45535[(1)] = (8));

} else {
var statearr_45519_45536 = state_45505__$1;
(statearr_45519_45536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (10))){
var inst_45497 = (state_45505[(2)]);
var state_45505__$1 = state_45505;
var statearr_45520_45537 = state_45505__$1;
(statearr_45520_45537[(2)] = inst_45497);

(statearr_45520_45537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45506 === (8))){
var inst_45482 = (state_45505[(7)]);
var tmp45517 = inst_45482;
var inst_45482__$1 = tmp45517;
var state_45505__$1 = (function (){var statearr_45521 = state_45505;
(statearr_45521[(7)] = inst_45482__$1);

return statearr_45521;
})();
var statearr_45522_45538 = state_45505__$1;
(statearr_45522_45538[(2)] = null);

(statearr_45522_45538[(1)] = (2));


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
});})(c__39120__auto___45528,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45528,out){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45523 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45523[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45523[(1)] = (1));

return statearr_45523;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45505){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45524){if((e45524 instanceof Object)){
var ex__39036__auto__ = e45524;
var statearr_45525_45539 = state_45505;
(statearr_45525_45539[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45540 = state_45505;
state_45505 = G__45540;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45528,out))
})();
var state__39122__auto__ = (function (){var statearr_45526 = f__39121__auto__.call(null);
(statearr_45526[(6)] = c__39120__auto___45528);

return statearr_45526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45528,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45542 = arguments.length;
switch (G__45542) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39120__auto___45608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45608,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45608,out){
return (function (state_45580){
var state_val_45581 = (state_45580[(1)]);
if((state_val_45581 === (7))){
var inst_45576 = (state_45580[(2)]);
var state_45580__$1 = state_45580;
var statearr_45582_45609 = state_45580__$1;
(statearr_45582_45609[(2)] = inst_45576);

(statearr_45582_45609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (1))){
var inst_45543 = (new Array(n));
var inst_45544 = inst_45543;
var inst_45545 = (0);
var state_45580__$1 = (function (){var statearr_45583 = state_45580;
(statearr_45583[(7)] = inst_45545);

(statearr_45583[(8)] = inst_45544);

return statearr_45583;
})();
var statearr_45584_45610 = state_45580__$1;
(statearr_45584_45610[(2)] = null);

(statearr_45584_45610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (4))){
var inst_45548 = (state_45580[(9)]);
var inst_45548__$1 = (state_45580[(2)]);
var inst_45549 = (inst_45548__$1 == null);
var inst_45550 = cljs.core.not.call(null,inst_45549);
var state_45580__$1 = (function (){var statearr_45585 = state_45580;
(statearr_45585[(9)] = inst_45548__$1);

return statearr_45585;
})();
if(inst_45550){
var statearr_45586_45611 = state_45580__$1;
(statearr_45586_45611[(1)] = (5));

} else {
var statearr_45587_45612 = state_45580__$1;
(statearr_45587_45612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (15))){
var inst_45570 = (state_45580[(2)]);
var state_45580__$1 = state_45580;
var statearr_45588_45613 = state_45580__$1;
(statearr_45588_45613[(2)] = inst_45570);

(statearr_45588_45613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (13))){
var state_45580__$1 = state_45580;
var statearr_45589_45614 = state_45580__$1;
(statearr_45589_45614[(2)] = null);

(statearr_45589_45614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (6))){
var inst_45545 = (state_45580[(7)]);
var inst_45566 = (inst_45545 > (0));
var state_45580__$1 = state_45580;
if(cljs.core.truth_(inst_45566)){
var statearr_45590_45615 = state_45580__$1;
(statearr_45590_45615[(1)] = (12));

} else {
var statearr_45591_45616 = state_45580__$1;
(statearr_45591_45616[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (3))){
var inst_45578 = (state_45580[(2)]);
var state_45580__$1 = state_45580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45580__$1,inst_45578);
} else {
if((state_val_45581 === (12))){
var inst_45544 = (state_45580[(8)]);
var inst_45568 = cljs.core.vec.call(null,inst_45544);
var state_45580__$1 = state_45580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45580__$1,(15),out,inst_45568);
} else {
if((state_val_45581 === (2))){
var state_45580__$1 = state_45580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45580__$1,(4),ch);
} else {
if((state_val_45581 === (11))){
var inst_45560 = (state_45580[(2)]);
var inst_45561 = (new Array(n));
var inst_45544 = inst_45561;
var inst_45545 = (0);
var state_45580__$1 = (function (){var statearr_45592 = state_45580;
(statearr_45592[(7)] = inst_45545);

(statearr_45592[(8)] = inst_45544);

(statearr_45592[(10)] = inst_45560);

return statearr_45592;
})();
var statearr_45593_45617 = state_45580__$1;
(statearr_45593_45617[(2)] = null);

(statearr_45593_45617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (9))){
var inst_45544 = (state_45580[(8)]);
var inst_45558 = cljs.core.vec.call(null,inst_45544);
var state_45580__$1 = state_45580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45580__$1,(11),out,inst_45558);
} else {
if((state_val_45581 === (5))){
var inst_45545 = (state_45580[(7)]);
var inst_45553 = (state_45580[(11)]);
var inst_45544 = (state_45580[(8)]);
var inst_45548 = (state_45580[(9)]);
var inst_45552 = (inst_45544[inst_45545] = inst_45548);
var inst_45553__$1 = (inst_45545 + (1));
var inst_45554 = (inst_45553__$1 < n);
var state_45580__$1 = (function (){var statearr_45594 = state_45580;
(statearr_45594[(11)] = inst_45553__$1);

(statearr_45594[(12)] = inst_45552);

return statearr_45594;
})();
if(cljs.core.truth_(inst_45554)){
var statearr_45595_45618 = state_45580__$1;
(statearr_45595_45618[(1)] = (8));

} else {
var statearr_45596_45619 = state_45580__$1;
(statearr_45596_45619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (14))){
var inst_45573 = (state_45580[(2)]);
var inst_45574 = cljs.core.async.close_BANG_.call(null,out);
var state_45580__$1 = (function (){var statearr_45598 = state_45580;
(statearr_45598[(13)] = inst_45573);

return statearr_45598;
})();
var statearr_45599_45620 = state_45580__$1;
(statearr_45599_45620[(2)] = inst_45574);

(statearr_45599_45620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (10))){
var inst_45564 = (state_45580[(2)]);
var state_45580__$1 = state_45580;
var statearr_45600_45621 = state_45580__$1;
(statearr_45600_45621[(2)] = inst_45564);

(statearr_45600_45621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45581 === (8))){
var inst_45553 = (state_45580[(11)]);
var inst_45544 = (state_45580[(8)]);
var tmp45597 = inst_45544;
var inst_45544__$1 = tmp45597;
var inst_45545 = inst_45553;
var state_45580__$1 = (function (){var statearr_45601 = state_45580;
(statearr_45601[(7)] = inst_45545);

(statearr_45601[(8)] = inst_45544__$1);

return statearr_45601;
})();
var statearr_45602_45622 = state_45580__$1;
(statearr_45602_45622[(2)] = null);

(statearr_45602_45622[(1)] = (2));


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
});})(c__39120__auto___45608,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45608,out){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45603[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45603[(1)] = (1));

return statearr_45603;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45580){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45604){if((e45604 instanceof Object)){
var ex__39036__auto__ = e45604;
var statearr_45605_45623 = state_45580;
(statearr_45605_45623[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45624 = state_45580;
state_45580 = G__45624;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45608,out))
})();
var state__39122__auto__ = (function (){var statearr_45606 = f__39121__auto__.call(null);
(statearr_45606[(6)] = c__39120__auto___45608);

return statearr_45606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45608,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45626 = arguments.length;
switch (G__45626) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39120__auto___45696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___45696,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___45696,out){
return (function (state_45668){
var state_val_45669 = (state_45668[(1)]);
if((state_val_45669 === (7))){
var inst_45664 = (state_45668[(2)]);
var state_45668__$1 = state_45668;
var statearr_45670_45697 = state_45668__$1;
(statearr_45670_45697[(2)] = inst_45664);

(statearr_45670_45697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (1))){
var inst_45627 = [];
var inst_45628 = inst_45627;
var inst_45629 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45668__$1 = (function (){var statearr_45671 = state_45668;
(statearr_45671[(7)] = inst_45628);

(statearr_45671[(8)] = inst_45629);

return statearr_45671;
})();
var statearr_45672_45698 = state_45668__$1;
(statearr_45672_45698[(2)] = null);

(statearr_45672_45698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (4))){
var inst_45632 = (state_45668[(9)]);
var inst_45632__$1 = (state_45668[(2)]);
var inst_45633 = (inst_45632__$1 == null);
var inst_45634 = cljs.core.not.call(null,inst_45633);
var state_45668__$1 = (function (){var statearr_45673 = state_45668;
(statearr_45673[(9)] = inst_45632__$1);

return statearr_45673;
})();
if(inst_45634){
var statearr_45674_45699 = state_45668__$1;
(statearr_45674_45699[(1)] = (5));

} else {
var statearr_45675_45700 = state_45668__$1;
(statearr_45675_45700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (15))){
var inst_45658 = (state_45668[(2)]);
var state_45668__$1 = state_45668;
var statearr_45676_45701 = state_45668__$1;
(statearr_45676_45701[(2)] = inst_45658);

(statearr_45676_45701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (13))){
var state_45668__$1 = state_45668;
var statearr_45677_45702 = state_45668__$1;
(statearr_45677_45702[(2)] = null);

(statearr_45677_45702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (6))){
var inst_45628 = (state_45668[(7)]);
var inst_45653 = inst_45628.length;
var inst_45654 = (inst_45653 > (0));
var state_45668__$1 = state_45668;
if(cljs.core.truth_(inst_45654)){
var statearr_45678_45703 = state_45668__$1;
(statearr_45678_45703[(1)] = (12));

} else {
var statearr_45679_45704 = state_45668__$1;
(statearr_45679_45704[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (3))){
var inst_45666 = (state_45668[(2)]);
var state_45668__$1 = state_45668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45668__$1,inst_45666);
} else {
if((state_val_45669 === (12))){
var inst_45628 = (state_45668[(7)]);
var inst_45656 = cljs.core.vec.call(null,inst_45628);
var state_45668__$1 = state_45668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45668__$1,(15),out,inst_45656);
} else {
if((state_val_45669 === (2))){
var state_45668__$1 = state_45668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45668__$1,(4),ch);
} else {
if((state_val_45669 === (11))){
var inst_45636 = (state_45668[(10)]);
var inst_45632 = (state_45668[(9)]);
var inst_45646 = (state_45668[(2)]);
var inst_45647 = [];
var inst_45648 = inst_45647.push(inst_45632);
var inst_45628 = inst_45647;
var inst_45629 = inst_45636;
var state_45668__$1 = (function (){var statearr_45680 = state_45668;
(statearr_45680[(7)] = inst_45628);

(statearr_45680[(8)] = inst_45629);

(statearr_45680[(11)] = inst_45648);

(statearr_45680[(12)] = inst_45646);

return statearr_45680;
})();
var statearr_45681_45705 = state_45668__$1;
(statearr_45681_45705[(2)] = null);

(statearr_45681_45705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (9))){
var inst_45628 = (state_45668[(7)]);
var inst_45644 = cljs.core.vec.call(null,inst_45628);
var state_45668__$1 = state_45668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45668__$1,(11),out,inst_45644);
} else {
if((state_val_45669 === (5))){
var inst_45636 = (state_45668[(10)]);
var inst_45632 = (state_45668[(9)]);
var inst_45629 = (state_45668[(8)]);
var inst_45636__$1 = f.call(null,inst_45632);
var inst_45637 = cljs.core._EQ_.call(null,inst_45636__$1,inst_45629);
var inst_45638 = cljs.core.keyword_identical_QMARK_.call(null,inst_45629,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45639 = (inst_45637) || (inst_45638);
var state_45668__$1 = (function (){var statearr_45682 = state_45668;
(statearr_45682[(10)] = inst_45636__$1);

return statearr_45682;
})();
if(cljs.core.truth_(inst_45639)){
var statearr_45683_45706 = state_45668__$1;
(statearr_45683_45706[(1)] = (8));

} else {
var statearr_45684_45707 = state_45668__$1;
(statearr_45684_45707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (14))){
var inst_45661 = (state_45668[(2)]);
var inst_45662 = cljs.core.async.close_BANG_.call(null,out);
var state_45668__$1 = (function (){var statearr_45686 = state_45668;
(statearr_45686[(13)] = inst_45661);

return statearr_45686;
})();
var statearr_45687_45708 = state_45668__$1;
(statearr_45687_45708[(2)] = inst_45662);

(statearr_45687_45708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (10))){
var inst_45651 = (state_45668[(2)]);
var state_45668__$1 = state_45668;
var statearr_45688_45709 = state_45668__$1;
(statearr_45688_45709[(2)] = inst_45651);

(statearr_45688_45709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45669 === (8))){
var inst_45636 = (state_45668[(10)]);
var inst_45632 = (state_45668[(9)]);
var inst_45628 = (state_45668[(7)]);
var inst_45641 = inst_45628.push(inst_45632);
var tmp45685 = inst_45628;
var inst_45628__$1 = tmp45685;
var inst_45629 = inst_45636;
var state_45668__$1 = (function (){var statearr_45689 = state_45668;
(statearr_45689[(7)] = inst_45628__$1);

(statearr_45689[(8)] = inst_45629);

(statearr_45689[(14)] = inst_45641);

return statearr_45689;
})();
var statearr_45690_45710 = state_45668__$1;
(statearr_45690_45710[(2)] = null);

(statearr_45690_45710[(1)] = (2));


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
});})(c__39120__auto___45696,out))
;
return ((function (switch__39032__auto__,c__39120__auto___45696,out){
return (function() {
var cljs$core$async$state_machine__39033__auto__ = null;
var cljs$core$async$state_machine__39033__auto____0 = (function (){
var statearr_45691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45691[(0)] = cljs$core$async$state_machine__39033__auto__);

(statearr_45691[(1)] = (1));

return statearr_45691;
});
var cljs$core$async$state_machine__39033__auto____1 = (function (state_45668){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_45668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e45692){if((e45692 instanceof Object)){
var ex__39036__auto__ = e45692;
var statearr_45693_45711 = state_45668;
(statearr_45693_45711[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45712 = state_45668;
state_45668 = G__45712;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
cljs$core$async$state_machine__39033__auto__ = function(state_45668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39033__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39033__auto____1.call(this,state_45668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39033__auto____0;
cljs$core$async$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39033__auto____1;
return cljs$core$async$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___45696,out))
})();
var state__39122__auto__ = (function (){var statearr_45694 = f__39121__auto__.call(null);
(statearr_45694[(6)] = c__39120__auto___45696);

return statearr_45694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___45696,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1512565260961
