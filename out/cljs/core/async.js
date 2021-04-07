// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27932 = [];
var len__25836__auto___27938 = arguments.length;
var i__25837__auto___27939 = (0);
while(true){
if((i__25837__auto___27939 < len__25836__auto___27938)){
args27932.push((arguments[i__25837__auto___27939]));

var G__27940 = (i__25837__auto___27939 + (1));
i__25837__auto___27939 = G__27940;
continue;
} else {
}
break;
}

var G__27934 = args27932.length;
switch (G__27934) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27932.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27935 = (function (f,blockable,meta27936){
this.f = f;
this.blockable = blockable;
this.meta27936 = meta27936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27937,meta27936__$1){
var self__ = this;
var _27937__$1 = this;
return (new cljs.core.async.t_cljs$core$async27935(self__.f,self__.blockable,meta27936__$1));
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27937){
var self__ = this;
var _27937__$1 = this;
return self__.meta27936;
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27936","meta27936",1520000331,null)], null);
});

cljs.core.async.t_cljs$core$async27935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27935";

cljs.core.async.t_cljs$core$async27935.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async27935");
});

cljs.core.async.__GT_t_cljs$core$async27935 = (function cljs$core$async$__GT_t_cljs$core$async27935(f__$1,blockable__$1,meta27936){
return (new cljs.core.async.t_cljs$core$async27935(f__$1,blockable__$1,meta27936));
});

}

return (new cljs.core.async.t_cljs$core$async27935(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args27944 = [];
var len__25836__auto___27947 = arguments.length;
var i__25837__auto___27948 = (0);
while(true){
if((i__25837__auto___27948 < len__25836__auto___27947)){
args27944.push((arguments[i__25837__auto___27948]));

var G__27949 = (i__25837__auto___27948 + (1));
i__25837__auto___27948 = G__27949;
continue;
} else {
}
break;
}

var G__27946 = args27944.length;
switch (G__27946) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27944.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args27951 = [];
var len__25836__auto___27954 = arguments.length;
var i__25837__auto___27955 = (0);
while(true){
if((i__25837__auto___27955 < len__25836__auto___27954)){
args27951.push((arguments[i__25837__auto___27955]));

var G__27956 = (i__25837__auto___27955 + (1));
i__25837__auto___27955 = G__27956;
continue;
} else {
}
break;
}

var G__27953 = args27951.length;
switch (G__27953) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27951.length)].join('')));

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
var args27958 = [];
var len__25836__auto___27961 = arguments.length;
var i__25837__auto___27962 = (0);
while(true){
if((i__25837__auto___27962 < len__25836__auto___27961)){
args27958.push((arguments[i__25837__auto___27962]));

var G__27963 = (i__25837__auto___27962 + (1));
i__25837__auto___27962 = G__27963;
continue;
} else {
}
break;
}

var G__27960 = args27958.length;
switch (G__27960) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27958.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27965 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27965);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27965,ret){
return (function (){
return fn1.call(null,val_27965);
});})(val_27965,ret))
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
var args27966 = [];
var len__25836__auto___27969 = arguments.length;
var i__25837__auto___27970 = (0);
while(true){
if((i__25837__auto___27970 < len__25836__auto___27969)){
args27966.push((arguments[i__25837__auto___27970]));

var G__27971 = (i__25837__auto___27970 + (1));
i__25837__auto___27970 = G__27971;
continue;
} else {
}
break;
}

var G__27968 = args27966.length;
switch (G__27968) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27966.length)].join('')));

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
var n__25676__auto___27973 = n;
var x_27974 = (0);
while(true){
if((x_27974 < n__25676__auto___27973)){
(a[x_27974] = (0));

var G__27975 = (x_27974 + (1));
x_27974 = G__27975;
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

var G__27976 = (i + (1));
i = G__27976;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27980 = (function (alt_flag,flag,meta27981){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27981 = meta27981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27982,meta27981__$1){
var self__ = this;
var _27982__$1 = this;
return (new cljs.core.async.t_cljs$core$async27980(self__.alt_flag,self__.flag,meta27981__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27982){
var self__ = this;
var _27982__$1 = this;
return self__.meta27981;
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27981","meta27981",-1906156765,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27980";

cljs.core.async.t_cljs$core$async27980.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async27980");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27980 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27980(alt_flag__$1,flag__$1,meta27981){
return (new cljs.core.async.t_cljs$core$async27980(alt_flag__$1,flag__$1,meta27981));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27980(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27986 = (function (alt_handler,flag,cb,meta27987){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27987 = meta27987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27988,meta27987__$1){
var self__ = this;
var _27988__$1 = this;
return (new cljs.core.async.t_cljs$core$async27986(self__.alt_handler,self__.flag,self__.cb,meta27987__$1));
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27988){
var self__ = this;
var _27988__$1 = this;
return self__.meta27987;
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27987","meta27987",-1465930965,null)], null);
});

cljs.core.async.t_cljs$core$async27986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27986";

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async27986");
});

cljs.core.async.__GT_t_cljs$core$async27986 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27986(alt_handler__$1,flag__$1,cb__$1,meta27987){
return (new cljs.core.async.t_cljs$core$async27986(alt_handler__$1,flag__$1,cb__$1,meta27987));
});

}

return (new cljs.core.async.t_cljs$core$async27986(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27989_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27990_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27990_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24761__auto__ = wport;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27991 = (i + (1));
i = G__27991;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24761__auto__ = ret;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24749__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24749__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24749__auto__;
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
var args__25843__auto__ = [];
var len__25836__auto___27997 = arguments.length;
var i__25837__auto___27998 = (0);
while(true){
if((i__25837__auto___27998 < len__25836__auto___27997)){
args__25843__auto__.push((arguments[i__25837__auto___27998]));

var G__27999 = (i__25837__auto___27998 + (1));
i__25837__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27994){
var map__27995 = p__27994;
var map__27995__$1 = ((((!((map__27995 == null)))?((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var opts = map__27995__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27992){
var G__27993 = cljs.core.first.call(null,seq27992);
var seq27992__$1 = cljs.core.next.call(null,seq27992);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27993,seq27992__$1);
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
var args28000 = [];
var len__25836__auto___28050 = arguments.length;
var i__25837__auto___28051 = (0);
while(true){
if((i__25837__auto___28051 < len__25836__auto___28050)){
args28000.push((arguments[i__25837__auto___28051]));

var G__28052 = (i__25837__auto___28051 + (1));
i__25837__auto___28051 = G__28052;
continue;
} else {
}
break;
}

var G__28002 = args28000.length;
switch (G__28002) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28000.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27887__auto___28054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___28054){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___28054){
return (function (state_28026){
var state_val_28027 = (state_28026[(1)]);
if((state_val_28027 === (7))){
var inst_28022 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
var statearr_28028_28055 = state_28026__$1;
(statearr_28028_28055[(2)] = inst_28022);

(statearr_28028_28055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (1))){
var state_28026__$1 = state_28026;
var statearr_28029_28056 = state_28026__$1;
(statearr_28029_28056[(2)] = null);

(statearr_28029_28056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (4))){
var inst_28005 = (state_28026[(7)]);
var inst_28005__$1 = (state_28026[(2)]);
var inst_28006 = (inst_28005__$1 == null);
var state_28026__$1 = (function (){var statearr_28030 = state_28026;
(statearr_28030[(7)] = inst_28005__$1);

return statearr_28030;
})();
if(cljs.core.truth_(inst_28006)){
var statearr_28031_28057 = state_28026__$1;
(statearr_28031_28057[(1)] = (5));

} else {
var statearr_28032_28058 = state_28026__$1;
(statearr_28032_28058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (13))){
var state_28026__$1 = state_28026;
var statearr_28033_28059 = state_28026__$1;
(statearr_28033_28059[(2)] = null);

(statearr_28033_28059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (6))){
var inst_28005 = (state_28026[(7)]);
var state_28026__$1 = state_28026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28026__$1,(11),to,inst_28005);
} else {
if((state_val_28027 === (3))){
var inst_28024 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28026__$1,inst_28024);
} else {
if((state_val_28027 === (12))){
var state_28026__$1 = state_28026;
var statearr_28034_28060 = state_28026__$1;
(statearr_28034_28060[(2)] = null);

(statearr_28034_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (2))){
var state_28026__$1 = state_28026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28026__$1,(4),from);
} else {
if((state_val_28027 === (11))){
var inst_28015 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
if(cljs.core.truth_(inst_28015)){
var statearr_28035_28061 = state_28026__$1;
(statearr_28035_28061[(1)] = (12));

} else {
var statearr_28036_28062 = state_28026__$1;
(statearr_28036_28062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (9))){
var state_28026__$1 = state_28026;
var statearr_28037_28063 = state_28026__$1;
(statearr_28037_28063[(2)] = null);

(statearr_28037_28063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (5))){
var state_28026__$1 = state_28026;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28038_28064 = state_28026__$1;
(statearr_28038_28064[(1)] = (8));

} else {
var statearr_28039_28065 = state_28026__$1;
(statearr_28039_28065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (14))){
var inst_28020 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
var statearr_28040_28066 = state_28026__$1;
(statearr_28040_28066[(2)] = inst_28020);

(statearr_28040_28066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (10))){
var inst_28012 = (state_28026[(2)]);
var state_28026__$1 = state_28026;
var statearr_28041_28067 = state_28026__$1;
(statearr_28041_28067[(2)] = inst_28012);

(statearr_28041_28067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28027 === (8))){
var inst_28009 = cljs.core.async.close_BANG_.call(null,to);
var state_28026__$1 = state_28026;
var statearr_28042_28068 = state_28026__$1;
(statearr_28042_28068[(2)] = inst_28009);

(statearr_28042_28068[(1)] = (10));


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
});})(c__27887__auto___28054))
;
return ((function (switch__26780__auto__,c__27887__auto___28054){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_28046 = [null,null,null,null,null,null,null,null];
(statearr_28046[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_28046[(1)] = (1));

return statearr_28046;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_28026){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28047){if((e28047 instanceof Object)){
var ex__26784__auto__ = e28047;
var statearr_28048_28069 = state_28026;
(statearr_28048_28069[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28070 = state_28026;
state_28026 = G__28070;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_28026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_28026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___28054))
})();
var state__27889__auto__ = (function (){var statearr_28049 = f__27888__auto__.call(null);
(statearr_28049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___28054);

return statearr_28049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___28054))
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
return (function (p__28258){
var vec__28259 = p__28258;
var v = cljs.core.nth.call(null,vec__28259,(0),null);
var p = cljs.core.nth.call(null,vec__28259,(1),null);
var job = vec__28259;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27887__auto___28445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___28445,res,vec__28259,v,p,job,jobs,results){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___28445,res,vec__28259,v,p,job,jobs,results){
return (function (state_28266){
var state_val_28267 = (state_28266[(1)]);
if((state_val_28267 === (1))){
var state_28266__$1 = state_28266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28266__$1,(2),res,v);
} else {
if((state_val_28267 === (2))){
var inst_28263 = (state_28266[(2)]);
var inst_28264 = cljs.core.async.close_BANG_.call(null,res);
var state_28266__$1 = (function (){var statearr_28268 = state_28266;
(statearr_28268[(7)] = inst_28263);

return statearr_28268;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28266__$1,inst_28264);
} else {
return null;
}
}
});})(c__27887__auto___28445,res,vec__28259,v,p,job,jobs,results))
;
return ((function (switch__26780__auto__,c__27887__auto___28445,res,vec__28259,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null,null];
(statearr_28272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1 = (function (state_28266){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__26784__auto__ = e28273;
var statearr_28274_28446 = state_28266;
(statearr_28274_28446[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28266;
state_28266 = G__28447;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = function(state_28266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1.call(this,state_28266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___28445,res,vec__28259,v,p,job,jobs,results))
})();
var state__27889__auto__ = (function (){var statearr_28275 = f__27888__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___28445);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___28445,res,vec__28259,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28276){
var vec__28277 = p__28276;
var v = cljs.core.nth.call(null,vec__28277,(0),null);
var p = cljs.core.nth.call(null,vec__28277,(1),null);
var job = vec__28277;
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
var n__25676__auto___28448 = n;
var __28449 = (0);
while(true){
if((__28449 < n__25676__auto___28448)){
var G__28280_28450 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28280_28450) {
case "compute":
var c__27887__auto___28452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28449,c__27887__auto___28452,G__28280_28450,n__25676__auto___28448,jobs,results,process,async){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (__28449,c__27887__auto___28452,G__28280_28450,n__25676__auto___28448,jobs,results,process,async){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (1))){
var state_28293__$1 = state_28293;
var statearr_28295_28453 = state_28293__$1;
(statearr_28295_28453[(2)] = null);

(statearr_28295_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (2))){
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28293__$1,(4),jobs);
} else {
if((state_val_28294 === (3))){
var inst_28291 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
if((state_val_28294 === (4))){
var inst_28283 = (state_28293[(2)]);
var inst_28284 = process.call(null,inst_28283);
var state_28293__$1 = state_28293;
if(cljs.core.truth_(inst_28284)){
var statearr_28296_28454 = state_28293__$1;
(statearr_28296_28454[(1)] = (5));

} else {
var statearr_28297_28455 = state_28293__$1;
(statearr_28297_28455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (5))){
var state_28293__$1 = state_28293;
var statearr_28298_28456 = state_28293__$1;
(statearr_28298_28456[(2)] = null);

(statearr_28298_28456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (6))){
var state_28293__$1 = state_28293;
var statearr_28299_28457 = state_28293__$1;
(statearr_28299_28457[(2)] = null);

(statearr_28299_28457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (7))){
var inst_28289 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28300_28458 = state_28293__$1;
(statearr_28300_28458[(2)] = inst_28289);

(statearr_28300_28458[(1)] = (3));


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
});})(__28449,c__27887__auto___28452,G__28280_28450,n__25676__auto___28448,jobs,results,process,async))
;
return ((function (__28449,switch__26780__auto__,c__27887__auto___28452,G__28280_28450,n__25676__auto___28448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0 = (function (){
var statearr_28304 = [null,null,null,null,null,null,null];
(statearr_28304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__);

(statearr_28304[(1)] = (1));

return statearr_28304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1 = (function (state_28293){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28305){if((e28305 instanceof Object)){
var ex__26784__auto__ = e28305;
var statearr_28306_28459 = state_28293;
(statearr_28306_28459[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28460 = state_28293;
state_28293 = G__28460;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__;
})()
;})(__28449,switch__26780__auto__,c__27887__auto___28452,G__28280_28450,n__25676__auto___28448,jobs,results,process,async))
})();
var state__27889__auto__ = (function (){var statearr_28307 = f__27888__auto__.call(null);
(statearr_28307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___28452);

return statearr_28307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(__28449,c__27887__auto___28452,G__28280_28450,n__25676__auto___28448,jobs,results,process,async))
);


break;
case "async":
var c__27887__auto___28461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28449,c__27887__auto___28461,G__28280_28450,n__25676__auto___28448,jobs,results,process,async){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (__28449,c__27887__auto___28461,G__28280_28450,n__25676__auto___28448,jobs,results,process,async){
return (function (state_28320){
var state_val_28321 = (state_28320[(1)]);
if((state_val_28321 === (1))){
var state_28320__$1 = state_28320;
var statearr_28322_28462 = state_28320__$1;
(statearr_28322_28462[(2)] = null);

(statearr_28322_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (2))){
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28320__$1,(4),jobs);
} else {
if((state_val_28321 === (3))){
var inst_28318 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28320__$1,inst_28318);
} else {
if((state_val_28321 === (4))){
var inst_28310 = (state_28320[(2)]);
var inst_28311 = async.call(null,inst_28310);
var state_28320__$1 = state_28320;
if(cljs.core.truth_(inst_28311)){
var statearr_28323_28463 = state_28320__$1;
(statearr_28323_28463[(1)] = (5));

} else {
var statearr_28324_28464 = state_28320__$1;
(statearr_28324_28464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (5))){
var state_28320__$1 = state_28320;
var statearr_28325_28465 = state_28320__$1;
(statearr_28325_28465[(2)] = null);

(statearr_28325_28465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (6))){
var state_28320__$1 = state_28320;
var statearr_28326_28466 = state_28320__$1;
(statearr_28326_28466[(2)] = null);

(statearr_28326_28466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28321 === (7))){
var inst_28316 = (state_28320[(2)]);
var state_28320__$1 = state_28320;
var statearr_28327_28467 = state_28320__$1;
(statearr_28327_28467[(2)] = inst_28316);

(statearr_28327_28467[(1)] = (3));


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
});})(__28449,c__27887__auto___28461,G__28280_28450,n__25676__auto___28448,jobs,results,process,async))
;
return ((function (__28449,switch__26780__auto__,c__27887__auto___28461,G__28280_28450,n__25676__auto___28448,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0 = (function (){
var statearr_28331 = [null,null,null,null,null,null,null];
(statearr_28331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__);

(statearr_28331[(1)] = (1));

return statearr_28331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1 = (function (state_28320){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28332){if((e28332 instanceof Object)){
var ex__26784__auto__ = e28332;
var statearr_28333_28468 = state_28320;
(statearr_28333_28468[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28469 = state_28320;
state_28320 = G__28469;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = function(state_28320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1.call(this,state_28320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__;
})()
;})(__28449,switch__26780__auto__,c__27887__auto___28461,G__28280_28450,n__25676__auto___28448,jobs,results,process,async))
})();
var state__27889__auto__ = (function (){var statearr_28334 = f__27888__auto__.call(null);
(statearr_28334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___28461);

return statearr_28334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(__28449,c__27887__auto___28461,G__28280_28450,n__25676__auto___28448,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28470 = (__28449 + (1));
__28449 = G__28470;
continue;
} else {
}
break;
}

var c__27887__auto___28471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___28471,jobs,results,process,async){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___28471,jobs,results,process,async){
return (function (state_28356){
var state_val_28357 = (state_28356[(1)]);
if((state_val_28357 === (1))){
var state_28356__$1 = state_28356;
var statearr_28358_28472 = state_28356__$1;
(statearr_28358_28472[(2)] = null);

(statearr_28358_28472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (2))){
var state_28356__$1 = state_28356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28356__$1,(4),from);
} else {
if((state_val_28357 === (3))){
var inst_28354 = (state_28356[(2)]);
var state_28356__$1 = state_28356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28356__$1,inst_28354);
} else {
if((state_val_28357 === (4))){
var inst_28337 = (state_28356[(7)]);
var inst_28337__$1 = (state_28356[(2)]);
var inst_28338 = (inst_28337__$1 == null);
var state_28356__$1 = (function (){var statearr_28359 = state_28356;
(statearr_28359[(7)] = inst_28337__$1);

return statearr_28359;
})();
if(cljs.core.truth_(inst_28338)){
var statearr_28360_28473 = state_28356__$1;
(statearr_28360_28473[(1)] = (5));

} else {
var statearr_28361_28474 = state_28356__$1;
(statearr_28361_28474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (5))){
var inst_28340 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28356__$1 = state_28356;
var statearr_28362_28475 = state_28356__$1;
(statearr_28362_28475[(2)] = inst_28340);

(statearr_28362_28475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (6))){
var inst_28342 = (state_28356[(8)]);
var inst_28337 = (state_28356[(7)]);
var inst_28342__$1 = cljs.core.async.chan.call(null,(1));
var inst_28343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28344 = [inst_28337,inst_28342__$1];
var inst_28345 = (new cljs.core.PersistentVector(null,2,(5),inst_28343,inst_28344,null));
var state_28356__$1 = (function (){var statearr_28363 = state_28356;
(statearr_28363[(8)] = inst_28342__$1);

return statearr_28363;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28356__$1,(8),jobs,inst_28345);
} else {
if((state_val_28357 === (7))){
var inst_28352 = (state_28356[(2)]);
var state_28356__$1 = state_28356;
var statearr_28364_28476 = state_28356__$1;
(statearr_28364_28476[(2)] = inst_28352);

(statearr_28364_28476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28357 === (8))){
var inst_28342 = (state_28356[(8)]);
var inst_28347 = (state_28356[(2)]);
var state_28356__$1 = (function (){var statearr_28365 = state_28356;
(statearr_28365[(9)] = inst_28347);

return statearr_28365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28356__$1,(9),results,inst_28342);
} else {
if((state_val_28357 === (9))){
var inst_28349 = (state_28356[(2)]);
var state_28356__$1 = (function (){var statearr_28366 = state_28356;
(statearr_28366[(10)] = inst_28349);

return statearr_28366;
})();
var statearr_28367_28477 = state_28356__$1;
(statearr_28367_28477[(2)] = null);

(statearr_28367_28477[(1)] = (2));


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
});})(c__27887__auto___28471,jobs,results,process,async))
;
return ((function (switch__26780__auto__,c__27887__auto___28471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0 = (function (){
var statearr_28371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__);

(statearr_28371[(1)] = (1));

return statearr_28371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1 = (function (state_28356){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28372){if((e28372 instanceof Object)){
var ex__26784__auto__ = e28372;
var statearr_28373_28478 = state_28356;
(statearr_28373_28478[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28479 = state_28356;
state_28356 = G__28479;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = function(state_28356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1.call(this,state_28356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___28471,jobs,results,process,async))
})();
var state__27889__auto__ = (function (){var statearr_28374 = f__27888__auto__.call(null);
(statearr_28374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___28471);

return statearr_28374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___28471,jobs,results,process,async))
);


var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__,jobs,results,process,async){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__,jobs,results,process,async){
return (function (state_28412){
var state_val_28413 = (state_28412[(1)]);
if((state_val_28413 === (7))){
var inst_28408 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28414_28480 = state_28412__$1;
(statearr_28414_28480[(2)] = inst_28408);

(statearr_28414_28480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (20))){
var state_28412__$1 = state_28412;
var statearr_28415_28481 = state_28412__$1;
(statearr_28415_28481[(2)] = null);

(statearr_28415_28481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (1))){
var state_28412__$1 = state_28412;
var statearr_28416_28482 = state_28412__$1;
(statearr_28416_28482[(2)] = null);

(statearr_28416_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (4))){
var inst_28377 = (state_28412[(7)]);
var inst_28377__$1 = (state_28412[(2)]);
var inst_28378 = (inst_28377__$1 == null);
var state_28412__$1 = (function (){var statearr_28417 = state_28412;
(statearr_28417[(7)] = inst_28377__$1);

return statearr_28417;
})();
if(cljs.core.truth_(inst_28378)){
var statearr_28418_28483 = state_28412__$1;
(statearr_28418_28483[(1)] = (5));

} else {
var statearr_28419_28484 = state_28412__$1;
(statearr_28419_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (15))){
var inst_28390 = (state_28412[(8)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28412__$1,(18),to,inst_28390);
} else {
if((state_val_28413 === (21))){
var inst_28403 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28420_28485 = state_28412__$1;
(statearr_28420_28485[(2)] = inst_28403);

(statearr_28420_28485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (13))){
var inst_28405 = (state_28412[(2)]);
var state_28412__$1 = (function (){var statearr_28421 = state_28412;
(statearr_28421[(9)] = inst_28405);

return statearr_28421;
})();
var statearr_28422_28486 = state_28412__$1;
(statearr_28422_28486[(2)] = null);

(statearr_28422_28486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (6))){
var inst_28377 = (state_28412[(7)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(11),inst_28377);
} else {
if((state_val_28413 === (17))){
var inst_28398 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
if(cljs.core.truth_(inst_28398)){
var statearr_28423_28487 = state_28412__$1;
(statearr_28423_28487[(1)] = (19));

} else {
var statearr_28424_28488 = state_28412__$1;
(statearr_28424_28488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (3))){
var inst_28410 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28412__$1,inst_28410);
} else {
if((state_val_28413 === (12))){
var inst_28387 = (state_28412[(10)]);
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(14),inst_28387);
} else {
if((state_val_28413 === (2))){
var state_28412__$1 = state_28412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,(4),results);
} else {
if((state_val_28413 === (19))){
var state_28412__$1 = state_28412;
var statearr_28425_28489 = state_28412__$1;
(statearr_28425_28489[(2)] = null);

(statearr_28425_28489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (11))){
var inst_28387 = (state_28412[(2)]);
var state_28412__$1 = (function (){var statearr_28426 = state_28412;
(statearr_28426[(10)] = inst_28387);

return statearr_28426;
})();
var statearr_28427_28490 = state_28412__$1;
(statearr_28427_28490[(2)] = null);

(statearr_28427_28490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (9))){
var state_28412__$1 = state_28412;
var statearr_28428_28491 = state_28412__$1;
(statearr_28428_28491[(2)] = null);

(statearr_28428_28491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (5))){
var state_28412__$1 = state_28412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28429_28492 = state_28412__$1;
(statearr_28429_28492[(1)] = (8));

} else {
var statearr_28430_28493 = state_28412__$1;
(statearr_28430_28493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (14))){
var inst_28390 = (state_28412[(8)]);
var inst_28392 = (state_28412[(11)]);
var inst_28390__$1 = (state_28412[(2)]);
var inst_28391 = (inst_28390__$1 == null);
var inst_28392__$1 = cljs.core.not.call(null,inst_28391);
var state_28412__$1 = (function (){var statearr_28431 = state_28412;
(statearr_28431[(8)] = inst_28390__$1);

(statearr_28431[(11)] = inst_28392__$1);

return statearr_28431;
})();
if(inst_28392__$1){
var statearr_28432_28494 = state_28412__$1;
(statearr_28432_28494[(1)] = (15));

} else {
var statearr_28433_28495 = state_28412__$1;
(statearr_28433_28495[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (16))){
var inst_28392 = (state_28412[(11)]);
var state_28412__$1 = state_28412;
var statearr_28434_28496 = state_28412__$1;
(statearr_28434_28496[(2)] = inst_28392);

(statearr_28434_28496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (10))){
var inst_28384 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28435_28497 = state_28412__$1;
(statearr_28435_28497[(2)] = inst_28384);

(statearr_28435_28497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (18))){
var inst_28395 = (state_28412[(2)]);
var state_28412__$1 = state_28412;
var statearr_28436_28498 = state_28412__$1;
(statearr_28436_28498[(2)] = inst_28395);

(statearr_28436_28498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28413 === (8))){
var inst_28381 = cljs.core.async.close_BANG_.call(null,to);
var state_28412__$1 = state_28412;
var statearr_28437_28499 = state_28412__$1;
(statearr_28437_28499[(2)] = inst_28381);

(statearr_28437_28499[(1)] = (10));


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
});})(c__27887__auto__,jobs,results,process,async))
;
return ((function (switch__26780__auto__,c__27887__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0 = (function (){
var statearr_28441 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28441[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__);

(statearr_28441[(1)] = (1));

return statearr_28441;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1 = (function (state_28412){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28442){if((e28442 instanceof Object)){
var ex__26784__auto__ = e28442;
var statearr_28443_28500 = state_28412;
(statearr_28443_28500[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28501 = state_28412;
state_28412 = G__28501;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26781__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__,jobs,results,process,async))
})();
var state__27889__auto__ = (function (){var statearr_28444 = f__27888__auto__.call(null);
(statearr_28444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_28444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__,jobs,results,process,async))
);

return c__27887__auto__;
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
var args28502 = [];
var len__25836__auto___28505 = arguments.length;
var i__25837__auto___28506 = (0);
while(true){
if((i__25837__auto___28506 < len__25836__auto___28505)){
args28502.push((arguments[i__25837__auto___28506]));

var G__28507 = (i__25837__auto___28506 + (1));
i__25837__auto___28506 = G__28507;
continue;
} else {
}
break;
}

var G__28504 = args28502.length;
switch (G__28504) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28502.length)].join('')));

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
var args28509 = [];
var len__25836__auto___28512 = arguments.length;
var i__25837__auto___28513 = (0);
while(true){
if((i__25837__auto___28513 < len__25836__auto___28512)){
args28509.push((arguments[i__25837__auto___28513]));

var G__28514 = (i__25837__auto___28513 + (1));
i__25837__auto___28513 = G__28514;
continue;
} else {
}
break;
}

var G__28511 = args28509.length;
switch (G__28511) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28509.length)].join('')));

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
var args28516 = [];
var len__25836__auto___28569 = arguments.length;
var i__25837__auto___28570 = (0);
while(true){
if((i__25837__auto___28570 < len__25836__auto___28569)){
args28516.push((arguments[i__25837__auto___28570]));

var G__28571 = (i__25837__auto___28570 + (1));
i__25837__auto___28570 = G__28571;
continue;
} else {
}
break;
}

var G__28518 = args28516.length;
switch (G__28518) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28516.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27887__auto___28573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___28573,tc,fc){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___28573,tc,fc){
return (function (state_28544){
var state_val_28545 = (state_28544[(1)]);
if((state_val_28545 === (7))){
var inst_28540 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28546_28574 = state_28544__$1;
(statearr_28546_28574[(2)] = inst_28540);

(statearr_28546_28574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (1))){
var state_28544__$1 = state_28544;
var statearr_28547_28575 = state_28544__$1;
(statearr_28547_28575[(2)] = null);

(statearr_28547_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (4))){
var inst_28521 = (state_28544[(7)]);
var inst_28521__$1 = (state_28544[(2)]);
var inst_28522 = (inst_28521__$1 == null);
var state_28544__$1 = (function (){var statearr_28548 = state_28544;
(statearr_28548[(7)] = inst_28521__$1);

return statearr_28548;
})();
if(cljs.core.truth_(inst_28522)){
var statearr_28549_28576 = state_28544__$1;
(statearr_28549_28576[(1)] = (5));

} else {
var statearr_28550_28577 = state_28544__$1;
(statearr_28550_28577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (13))){
var state_28544__$1 = state_28544;
var statearr_28551_28578 = state_28544__$1;
(statearr_28551_28578[(2)] = null);

(statearr_28551_28578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (6))){
var inst_28521 = (state_28544[(7)]);
var inst_28527 = p.call(null,inst_28521);
var state_28544__$1 = state_28544;
if(cljs.core.truth_(inst_28527)){
var statearr_28552_28579 = state_28544__$1;
(statearr_28552_28579[(1)] = (9));

} else {
var statearr_28553_28580 = state_28544__$1;
(statearr_28553_28580[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (3))){
var inst_28542 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28544__$1,inst_28542);
} else {
if((state_val_28545 === (12))){
var state_28544__$1 = state_28544;
var statearr_28554_28581 = state_28544__$1;
(statearr_28554_28581[(2)] = null);

(statearr_28554_28581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (2))){
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28544__$1,(4),ch);
} else {
if((state_val_28545 === (11))){
var inst_28521 = (state_28544[(7)]);
var inst_28531 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28544__$1,(8),inst_28531,inst_28521);
} else {
if((state_val_28545 === (9))){
var state_28544__$1 = state_28544;
var statearr_28555_28582 = state_28544__$1;
(statearr_28555_28582[(2)] = tc);

(statearr_28555_28582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (5))){
var inst_28524 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28525 = cljs.core.async.close_BANG_.call(null,fc);
var state_28544__$1 = (function (){var statearr_28556 = state_28544;
(statearr_28556[(8)] = inst_28524);

return statearr_28556;
})();
var statearr_28557_28583 = state_28544__$1;
(statearr_28557_28583[(2)] = inst_28525);

(statearr_28557_28583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (14))){
var inst_28538 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
var statearr_28558_28584 = state_28544__$1;
(statearr_28558_28584[(2)] = inst_28538);

(statearr_28558_28584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (10))){
var state_28544__$1 = state_28544;
var statearr_28559_28585 = state_28544__$1;
(statearr_28559_28585[(2)] = fc);

(statearr_28559_28585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28545 === (8))){
var inst_28533 = (state_28544[(2)]);
var state_28544__$1 = state_28544;
if(cljs.core.truth_(inst_28533)){
var statearr_28560_28586 = state_28544__$1;
(statearr_28560_28586[(1)] = (12));

} else {
var statearr_28561_28587 = state_28544__$1;
(statearr_28561_28587[(1)] = (13));

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
});})(c__27887__auto___28573,tc,fc))
;
return ((function (switch__26780__auto__,c__27887__auto___28573,tc,fc){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_28565 = [null,null,null,null,null,null,null,null,null];
(statearr_28565[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_28565[(1)] = (1));

return statearr_28565;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_28544){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28566){if((e28566 instanceof Object)){
var ex__26784__auto__ = e28566;
var statearr_28567_28588 = state_28544;
(statearr_28567_28588[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28589 = state_28544;
state_28544 = G__28589;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_28544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_28544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___28573,tc,fc))
})();
var state__27889__auto__ = (function (){var statearr_28568 = f__27888__auto__.call(null);
(statearr_28568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___28573);

return statearr_28568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___28573,tc,fc))
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
var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__){
return (function (state_28653){
var state_val_28654 = (state_28653[(1)]);
if((state_val_28654 === (7))){
var inst_28649 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28655_28676 = state_28653__$1;
(statearr_28655_28676[(2)] = inst_28649);

(statearr_28655_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (1))){
var inst_28633 = init;
var state_28653__$1 = (function (){var statearr_28656 = state_28653;
(statearr_28656[(7)] = inst_28633);

return statearr_28656;
})();
var statearr_28657_28677 = state_28653__$1;
(statearr_28657_28677[(2)] = null);

(statearr_28657_28677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (4))){
var inst_28636 = (state_28653[(8)]);
var inst_28636__$1 = (state_28653[(2)]);
var inst_28637 = (inst_28636__$1 == null);
var state_28653__$1 = (function (){var statearr_28658 = state_28653;
(statearr_28658[(8)] = inst_28636__$1);

return statearr_28658;
})();
if(cljs.core.truth_(inst_28637)){
var statearr_28659_28678 = state_28653__$1;
(statearr_28659_28678[(1)] = (5));

} else {
var statearr_28660_28679 = state_28653__$1;
(statearr_28660_28679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (6))){
var inst_28640 = (state_28653[(9)]);
var inst_28636 = (state_28653[(8)]);
var inst_28633 = (state_28653[(7)]);
var inst_28640__$1 = f.call(null,inst_28633,inst_28636);
var inst_28641 = cljs.core.reduced_QMARK_.call(null,inst_28640__$1);
var state_28653__$1 = (function (){var statearr_28661 = state_28653;
(statearr_28661[(9)] = inst_28640__$1);

return statearr_28661;
})();
if(inst_28641){
var statearr_28662_28680 = state_28653__$1;
(statearr_28662_28680[(1)] = (8));

} else {
var statearr_28663_28681 = state_28653__$1;
(statearr_28663_28681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (3))){
var inst_28651 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28653__$1,inst_28651);
} else {
if((state_val_28654 === (2))){
var state_28653__$1 = state_28653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,(4),ch);
} else {
if((state_val_28654 === (9))){
var inst_28640 = (state_28653[(9)]);
var inst_28633 = inst_28640;
var state_28653__$1 = (function (){var statearr_28664 = state_28653;
(statearr_28664[(7)] = inst_28633);

return statearr_28664;
})();
var statearr_28665_28682 = state_28653__$1;
(statearr_28665_28682[(2)] = null);

(statearr_28665_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (5))){
var inst_28633 = (state_28653[(7)]);
var state_28653__$1 = state_28653;
var statearr_28666_28683 = state_28653__$1;
(statearr_28666_28683[(2)] = inst_28633);

(statearr_28666_28683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (10))){
var inst_28647 = (state_28653[(2)]);
var state_28653__$1 = state_28653;
var statearr_28667_28684 = state_28653__$1;
(statearr_28667_28684[(2)] = inst_28647);

(statearr_28667_28684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28654 === (8))){
var inst_28640 = (state_28653[(9)]);
var inst_28643 = cljs.core.deref.call(null,inst_28640);
var state_28653__$1 = state_28653;
var statearr_28668_28685 = state_28653__$1;
(statearr_28668_28685[(2)] = inst_28643);

(statearr_28668_28685[(1)] = (10));


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
});})(c__27887__auto__))
;
return ((function (switch__26780__auto__,c__27887__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26781__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26781__auto____0 = (function (){
var statearr_28672 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28672[(0)] = cljs$core$async$reduce_$_state_machine__26781__auto__);

(statearr_28672[(1)] = (1));

return statearr_28672;
});
var cljs$core$async$reduce_$_state_machine__26781__auto____1 = (function (state_28653){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28673){if((e28673 instanceof Object)){
var ex__26784__auto__ = e28673;
var statearr_28674_28686 = state_28653;
(statearr_28674_28686[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28687 = state_28653;
state_28653 = G__28687;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26781__auto__ = function(state_28653){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26781__auto____1.call(this,state_28653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26781__auto____0;
cljs$core$async$reduce_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26781__auto____1;
return cljs$core$async$reduce_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__))
})();
var state__27889__auto__ = (function (){var statearr_28675 = f__27888__auto__.call(null);
(statearr_28675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__))
);

return c__27887__auto__;
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
var args28688 = [];
var len__25836__auto___28740 = arguments.length;
var i__25837__auto___28741 = (0);
while(true){
if((i__25837__auto___28741 < len__25836__auto___28740)){
args28688.push((arguments[i__25837__auto___28741]));

var G__28742 = (i__25837__auto___28741 + (1));
i__25837__auto___28741 = G__28742;
continue;
} else {
}
break;
}

var G__28690 = args28688.length;
switch (G__28690) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28688.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__){
return (function (state_28715){
var state_val_28716 = (state_28715[(1)]);
if((state_val_28716 === (7))){
var inst_28697 = (state_28715[(2)]);
var state_28715__$1 = state_28715;
var statearr_28717_28744 = state_28715__$1;
(statearr_28717_28744[(2)] = inst_28697);

(statearr_28717_28744[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (1))){
var inst_28691 = cljs.core.seq.call(null,coll);
var inst_28692 = inst_28691;
var state_28715__$1 = (function (){var statearr_28718 = state_28715;
(statearr_28718[(7)] = inst_28692);

return statearr_28718;
})();
var statearr_28719_28745 = state_28715__$1;
(statearr_28719_28745[(2)] = null);

(statearr_28719_28745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (4))){
var inst_28692 = (state_28715[(7)]);
var inst_28695 = cljs.core.first.call(null,inst_28692);
var state_28715__$1 = state_28715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28715__$1,(7),ch,inst_28695);
} else {
if((state_val_28716 === (13))){
var inst_28709 = (state_28715[(2)]);
var state_28715__$1 = state_28715;
var statearr_28720_28746 = state_28715__$1;
(statearr_28720_28746[(2)] = inst_28709);

(statearr_28720_28746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (6))){
var inst_28700 = (state_28715[(2)]);
var state_28715__$1 = state_28715;
if(cljs.core.truth_(inst_28700)){
var statearr_28721_28747 = state_28715__$1;
(statearr_28721_28747[(1)] = (8));

} else {
var statearr_28722_28748 = state_28715__$1;
(statearr_28722_28748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (3))){
var inst_28713 = (state_28715[(2)]);
var state_28715__$1 = state_28715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28715__$1,inst_28713);
} else {
if((state_val_28716 === (12))){
var state_28715__$1 = state_28715;
var statearr_28723_28749 = state_28715__$1;
(statearr_28723_28749[(2)] = null);

(statearr_28723_28749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (2))){
var inst_28692 = (state_28715[(7)]);
var state_28715__$1 = state_28715;
if(cljs.core.truth_(inst_28692)){
var statearr_28724_28750 = state_28715__$1;
(statearr_28724_28750[(1)] = (4));

} else {
var statearr_28725_28751 = state_28715__$1;
(statearr_28725_28751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (11))){
var inst_28706 = cljs.core.async.close_BANG_.call(null,ch);
var state_28715__$1 = state_28715;
var statearr_28726_28752 = state_28715__$1;
(statearr_28726_28752[(2)] = inst_28706);

(statearr_28726_28752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (9))){
var state_28715__$1 = state_28715;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28727_28753 = state_28715__$1;
(statearr_28727_28753[(1)] = (11));

} else {
var statearr_28728_28754 = state_28715__$1;
(statearr_28728_28754[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (5))){
var inst_28692 = (state_28715[(7)]);
var state_28715__$1 = state_28715;
var statearr_28729_28755 = state_28715__$1;
(statearr_28729_28755[(2)] = inst_28692);

(statearr_28729_28755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (10))){
var inst_28711 = (state_28715[(2)]);
var state_28715__$1 = state_28715;
var statearr_28730_28756 = state_28715__$1;
(statearr_28730_28756[(2)] = inst_28711);

(statearr_28730_28756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28716 === (8))){
var inst_28692 = (state_28715[(7)]);
var inst_28702 = cljs.core.next.call(null,inst_28692);
var inst_28692__$1 = inst_28702;
var state_28715__$1 = (function (){var statearr_28731 = state_28715;
(statearr_28731[(7)] = inst_28692__$1);

return statearr_28731;
})();
var statearr_28732_28757 = state_28715__$1;
(statearr_28732_28757[(2)] = null);

(statearr_28732_28757[(1)] = (2));


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
});})(c__27887__auto__))
;
return ((function (switch__26780__auto__,c__27887__auto__){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_28736 = [null,null,null,null,null,null,null,null];
(statearr_28736[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_28736[(1)] = (1));

return statearr_28736;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_28715){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_28715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e28737){if((e28737 instanceof Object)){
var ex__26784__auto__ = e28737;
var statearr_28738_28758 = state_28715;
(statearr_28738_28758[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28759 = state_28715;
state_28715 = G__28759;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_28715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_28715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__))
})();
var state__27889__auto__ = (function (){var statearr_28739 = f__27888__auto__.call(null);
(statearr_28739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__))
);

return c__27887__auto__;
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
var x__25424__auto__ = (((_ == null))?null:_);
var m__25425__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,_);
} else {
var m__25425__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,_);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25425__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m);
} else {
var m__25425__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28985 = (function (mult,ch,cs,meta28986){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28986 = meta28986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28987,meta28986__$1){
var self__ = this;
var _28987__$1 = this;
return (new cljs.core.async.t_cljs$core$async28985(self__.mult,self__.ch,self__.cs,meta28986__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28987){
var self__ = this;
var _28987__$1 = this;
return self__.meta28986;
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28986","meta28986",1632223767,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28985";

cljs.core.async.t_cljs$core$async28985.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async28985");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28985 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28985(mult__$1,ch__$1,cs__$1,meta28986){
return (new cljs.core.async.t_cljs$core$async28985(mult__$1,ch__$1,cs__$1,meta28986));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28985(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27887__auto___29210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___29210,cs,m,dchan,dctr,done){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___29210,cs,m,dchan,dctr,done){
return (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_29118 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29124_29211 = state_29122__$1;
(statearr_29124_29211[(2)] = inst_29118);

(statearr_29124_29211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (20))){
var inst_29021 = (state_29122[(7)]);
var inst_29033 = cljs.core.first.call(null,inst_29021);
var inst_29034 = cljs.core.nth.call(null,inst_29033,(0),null);
var inst_29035 = cljs.core.nth.call(null,inst_29033,(1),null);
var state_29122__$1 = (function (){var statearr_29125 = state_29122;
(statearr_29125[(8)] = inst_29034);

return statearr_29125;
})();
if(cljs.core.truth_(inst_29035)){
var statearr_29126_29212 = state_29122__$1;
(statearr_29126_29212[(1)] = (22));

} else {
var statearr_29127_29213 = state_29122__$1;
(statearr_29127_29213[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (27))){
var inst_29065 = (state_29122[(9)]);
var inst_29070 = (state_29122[(10)]);
var inst_28990 = (state_29122[(11)]);
var inst_29063 = (state_29122[(12)]);
var inst_29070__$1 = cljs.core._nth.call(null,inst_29063,inst_29065);
var inst_29071 = cljs.core.async.put_BANG_.call(null,inst_29070__$1,inst_28990,done);
var state_29122__$1 = (function (){var statearr_29128 = state_29122;
(statearr_29128[(10)] = inst_29070__$1);

return statearr_29128;
})();
if(cljs.core.truth_(inst_29071)){
var statearr_29129_29214 = state_29122__$1;
(statearr_29129_29214[(1)] = (30));

} else {
var statearr_29130_29215 = state_29122__$1;
(statearr_29130_29215[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (1))){
var state_29122__$1 = state_29122;
var statearr_29131_29216 = state_29122__$1;
(statearr_29131_29216[(2)] = null);

(statearr_29131_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (24))){
var inst_29021 = (state_29122[(7)]);
var inst_29040 = (state_29122[(2)]);
var inst_29041 = cljs.core.next.call(null,inst_29021);
var inst_28999 = inst_29041;
var inst_29000 = null;
var inst_29001 = (0);
var inst_29002 = (0);
var state_29122__$1 = (function (){var statearr_29132 = state_29122;
(statearr_29132[(13)] = inst_29000);

(statearr_29132[(14)] = inst_29001);

(statearr_29132[(15)] = inst_29040);

(statearr_29132[(16)] = inst_29002);

(statearr_29132[(17)] = inst_28999);

return statearr_29132;
})();
var statearr_29133_29217 = state_29122__$1;
(statearr_29133_29217[(2)] = null);

(statearr_29133_29217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (39))){
var state_29122__$1 = state_29122;
var statearr_29137_29218 = state_29122__$1;
(statearr_29137_29218[(2)] = null);

(statearr_29137_29218[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (4))){
var inst_28990 = (state_29122[(11)]);
var inst_28990__$1 = (state_29122[(2)]);
var inst_28991 = (inst_28990__$1 == null);
var state_29122__$1 = (function (){var statearr_29138 = state_29122;
(statearr_29138[(11)] = inst_28990__$1);

return statearr_29138;
})();
if(cljs.core.truth_(inst_28991)){
var statearr_29139_29219 = state_29122__$1;
(statearr_29139_29219[(1)] = (5));

} else {
var statearr_29140_29220 = state_29122__$1;
(statearr_29140_29220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (15))){
var inst_29000 = (state_29122[(13)]);
var inst_29001 = (state_29122[(14)]);
var inst_29002 = (state_29122[(16)]);
var inst_28999 = (state_29122[(17)]);
var inst_29017 = (state_29122[(2)]);
var inst_29018 = (inst_29002 + (1));
var tmp29134 = inst_29000;
var tmp29135 = inst_29001;
var tmp29136 = inst_28999;
var inst_28999__$1 = tmp29136;
var inst_29000__$1 = tmp29134;
var inst_29001__$1 = tmp29135;
var inst_29002__$1 = inst_29018;
var state_29122__$1 = (function (){var statearr_29141 = state_29122;
(statearr_29141[(13)] = inst_29000__$1);

(statearr_29141[(14)] = inst_29001__$1);

(statearr_29141[(16)] = inst_29002__$1);

(statearr_29141[(18)] = inst_29017);

(statearr_29141[(17)] = inst_28999__$1);

return statearr_29141;
})();
var statearr_29142_29221 = state_29122__$1;
(statearr_29142_29221[(2)] = null);

(statearr_29142_29221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (21))){
var inst_29044 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29146_29222 = state_29122__$1;
(statearr_29146_29222[(2)] = inst_29044);

(statearr_29146_29222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (31))){
var inst_29070 = (state_29122[(10)]);
var inst_29074 = done.call(null,null);
var inst_29075 = cljs.core.async.untap_STAR_.call(null,m,inst_29070);
var state_29122__$1 = (function (){var statearr_29147 = state_29122;
(statearr_29147[(19)] = inst_29074);

return statearr_29147;
})();
var statearr_29148_29223 = state_29122__$1;
(statearr_29148_29223[(2)] = inst_29075);

(statearr_29148_29223[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (32))){
var inst_29064 = (state_29122[(20)]);
var inst_29062 = (state_29122[(21)]);
var inst_29065 = (state_29122[(9)]);
var inst_29063 = (state_29122[(12)]);
var inst_29077 = (state_29122[(2)]);
var inst_29078 = (inst_29065 + (1));
var tmp29143 = inst_29064;
var tmp29144 = inst_29062;
var tmp29145 = inst_29063;
var inst_29062__$1 = tmp29144;
var inst_29063__$1 = tmp29145;
var inst_29064__$1 = tmp29143;
var inst_29065__$1 = inst_29078;
var state_29122__$1 = (function (){var statearr_29149 = state_29122;
(statearr_29149[(20)] = inst_29064__$1);

(statearr_29149[(21)] = inst_29062__$1);

(statearr_29149[(9)] = inst_29065__$1);

(statearr_29149[(12)] = inst_29063__$1);

(statearr_29149[(22)] = inst_29077);

return statearr_29149;
})();
var statearr_29150_29224 = state_29122__$1;
(statearr_29150_29224[(2)] = null);

(statearr_29150_29224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (40))){
var inst_29090 = (state_29122[(23)]);
var inst_29094 = done.call(null,null);
var inst_29095 = cljs.core.async.untap_STAR_.call(null,m,inst_29090);
var state_29122__$1 = (function (){var statearr_29151 = state_29122;
(statearr_29151[(24)] = inst_29094);

return statearr_29151;
})();
var statearr_29152_29225 = state_29122__$1;
(statearr_29152_29225[(2)] = inst_29095);

(statearr_29152_29225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (33))){
var inst_29081 = (state_29122[(25)]);
var inst_29083 = cljs.core.chunked_seq_QMARK_.call(null,inst_29081);
var state_29122__$1 = state_29122;
if(inst_29083){
var statearr_29153_29226 = state_29122__$1;
(statearr_29153_29226[(1)] = (36));

} else {
var statearr_29154_29227 = state_29122__$1;
(statearr_29154_29227[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (13))){
var inst_29011 = (state_29122[(26)]);
var inst_29014 = cljs.core.async.close_BANG_.call(null,inst_29011);
var state_29122__$1 = state_29122;
var statearr_29155_29228 = state_29122__$1;
(statearr_29155_29228[(2)] = inst_29014);

(statearr_29155_29228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (22))){
var inst_29034 = (state_29122[(8)]);
var inst_29037 = cljs.core.async.close_BANG_.call(null,inst_29034);
var state_29122__$1 = state_29122;
var statearr_29156_29229 = state_29122__$1;
(statearr_29156_29229[(2)] = inst_29037);

(statearr_29156_29229[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (36))){
var inst_29081 = (state_29122[(25)]);
var inst_29085 = cljs.core.chunk_first.call(null,inst_29081);
var inst_29086 = cljs.core.chunk_rest.call(null,inst_29081);
var inst_29087 = cljs.core.count.call(null,inst_29085);
var inst_29062 = inst_29086;
var inst_29063 = inst_29085;
var inst_29064 = inst_29087;
var inst_29065 = (0);
var state_29122__$1 = (function (){var statearr_29157 = state_29122;
(statearr_29157[(20)] = inst_29064);

(statearr_29157[(21)] = inst_29062);

(statearr_29157[(9)] = inst_29065);

(statearr_29157[(12)] = inst_29063);

return statearr_29157;
})();
var statearr_29158_29230 = state_29122__$1;
(statearr_29158_29230[(2)] = null);

(statearr_29158_29230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (41))){
var inst_29081 = (state_29122[(25)]);
var inst_29097 = (state_29122[(2)]);
var inst_29098 = cljs.core.next.call(null,inst_29081);
var inst_29062 = inst_29098;
var inst_29063 = null;
var inst_29064 = (0);
var inst_29065 = (0);
var state_29122__$1 = (function (){var statearr_29159 = state_29122;
(statearr_29159[(20)] = inst_29064);

(statearr_29159[(21)] = inst_29062);

(statearr_29159[(9)] = inst_29065);

(statearr_29159[(12)] = inst_29063);

(statearr_29159[(27)] = inst_29097);

return statearr_29159;
})();
var statearr_29160_29231 = state_29122__$1;
(statearr_29160_29231[(2)] = null);

(statearr_29160_29231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (43))){
var state_29122__$1 = state_29122;
var statearr_29161_29232 = state_29122__$1;
(statearr_29161_29232[(2)] = null);

(statearr_29161_29232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (29))){
var inst_29106 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29162_29233 = state_29122__$1;
(statearr_29162_29233[(2)] = inst_29106);

(statearr_29162_29233[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (44))){
var inst_29115 = (state_29122[(2)]);
var state_29122__$1 = (function (){var statearr_29163 = state_29122;
(statearr_29163[(28)] = inst_29115);

return statearr_29163;
})();
var statearr_29164_29234 = state_29122__$1;
(statearr_29164_29234[(2)] = null);

(statearr_29164_29234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (6))){
var inst_29054 = (state_29122[(29)]);
var inst_29053 = cljs.core.deref.call(null,cs);
var inst_29054__$1 = cljs.core.keys.call(null,inst_29053);
var inst_29055 = cljs.core.count.call(null,inst_29054__$1);
var inst_29056 = cljs.core.reset_BANG_.call(null,dctr,inst_29055);
var inst_29061 = cljs.core.seq.call(null,inst_29054__$1);
var inst_29062 = inst_29061;
var inst_29063 = null;
var inst_29064 = (0);
var inst_29065 = (0);
var state_29122__$1 = (function (){var statearr_29165 = state_29122;
(statearr_29165[(20)] = inst_29064);

(statearr_29165[(21)] = inst_29062);

(statearr_29165[(9)] = inst_29065);

(statearr_29165[(30)] = inst_29056);

(statearr_29165[(29)] = inst_29054__$1);

(statearr_29165[(12)] = inst_29063);

return statearr_29165;
})();
var statearr_29166_29235 = state_29122__$1;
(statearr_29166_29235[(2)] = null);

(statearr_29166_29235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (28))){
var inst_29062 = (state_29122[(21)]);
var inst_29081 = (state_29122[(25)]);
var inst_29081__$1 = cljs.core.seq.call(null,inst_29062);
var state_29122__$1 = (function (){var statearr_29167 = state_29122;
(statearr_29167[(25)] = inst_29081__$1);

return statearr_29167;
})();
if(inst_29081__$1){
var statearr_29168_29236 = state_29122__$1;
(statearr_29168_29236[(1)] = (33));

} else {
var statearr_29169_29237 = state_29122__$1;
(statearr_29169_29237[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (25))){
var inst_29064 = (state_29122[(20)]);
var inst_29065 = (state_29122[(9)]);
var inst_29067 = (inst_29065 < inst_29064);
var inst_29068 = inst_29067;
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29068)){
var statearr_29170_29238 = state_29122__$1;
(statearr_29170_29238[(1)] = (27));

} else {
var statearr_29171_29239 = state_29122__$1;
(statearr_29171_29239[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (34))){
var state_29122__$1 = state_29122;
var statearr_29172_29240 = state_29122__$1;
(statearr_29172_29240[(2)] = null);

(statearr_29172_29240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (17))){
var state_29122__$1 = state_29122;
var statearr_29173_29241 = state_29122__$1;
(statearr_29173_29241[(2)] = null);

(statearr_29173_29241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (3))){
var inst_29120 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (12))){
var inst_29049 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29174_29242 = state_29122__$1;
(statearr_29174_29242[(2)] = inst_29049);

(statearr_29174_29242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (2))){
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29122__$1,(4),ch);
} else {
if((state_val_29123 === (23))){
var state_29122__$1 = state_29122;
var statearr_29175_29243 = state_29122__$1;
(statearr_29175_29243[(2)] = null);

(statearr_29175_29243[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (35))){
var inst_29104 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29176_29244 = state_29122__$1;
(statearr_29176_29244[(2)] = inst_29104);

(statearr_29176_29244[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (19))){
var inst_29021 = (state_29122[(7)]);
var inst_29025 = cljs.core.chunk_first.call(null,inst_29021);
var inst_29026 = cljs.core.chunk_rest.call(null,inst_29021);
var inst_29027 = cljs.core.count.call(null,inst_29025);
var inst_28999 = inst_29026;
var inst_29000 = inst_29025;
var inst_29001 = inst_29027;
var inst_29002 = (0);
var state_29122__$1 = (function (){var statearr_29177 = state_29122;
(statearr_29177[(13)] = inst_29000);

(statearr_29177[(14)] = inst_29001);

(statearr_29177[(16)] = inst_29002);

(statearr_29177[(17)] = inst_28999);

return statearr_29177;
})();
var statearr_29178_29245 = state_29122__$1;
(statearr_29178_29245[(2)] = null);

(statearr_29178_29245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (11))){
var inst_29021 = (state_29122[(7)]);
var inst_28999 = (state_29122[(17)]);
var inst_29021__$1 = cljs.core.seq.call(null,inst_28999);
var state_29122__$1 = (function (){var statearr_29179 = state_29122;
(statearr_29179[(7)] = inst_29021__$1);

return statearr_29179;
})();
if(inst_29021__$1){
var statearr_29180_29246 = state_29122__$1;
(statearr_29180_29246[(1)] = (16));

} else {
var statearr_29181_29247 = state_29122__$1;
(statearr_29181_29247[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (9))){
var inst_29051 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29182_29248 = state_29122__$1;
(statearr_29182_29248[(2)] = inst_29051);

(statearr_29182_29248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (5))){
var inst_28997 = cljs.core.deref.call(null,cs);
var inst_28998 = cljs.core.seq.call(null,inst_28997);
var inst_28999 = inst_28998;
var inst_29000 = null;
var inst_29001 = (0);
var inst_29002 = (0);
var state_29122__$1 = (function (){var statearr_29183 = state_29122;
(statearr_29183[(13)] = inst_29000);

(statearr_29183[(14)] = inst_29001);

(statearr_29183[(16)] = inst_29002);

(statearr_29183[(17)] = inst_28999);

return statearr_29183;
})();
var statearr_29184_29249 = state_29122__$1;
(statearr_29184_29249[(2)] = null);

(statearr_29184_29249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (14))){
var state_29122__$1 = state_29122;
var statearr_29185_29250 = state_29122__$1;
(statearr_29185_29250[(2)] = null);

(statearr_29185_29250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (45))){
var inst_29112 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29186_29251 = state_29122__$1;
(statearr_29186_29251[(2)] = inst_29112);

(statearr_29186_29251[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (26))){
var inst_29054 = (state_29122[(29)]);
var inst_29108 = (state_29122[(2)]);
var inst_29109 = cljs.core.seq.call(null,inst_29054);
var state_29122__$1 = (function (){var statearr_29187 = state_29122;
(statearr_29187[(31)] = inst_29108);

return statearr_29187;
})();
if(inst_29109){
var statearr_29188_29252 = state_29122__$1;
(statearr_29188_29252[(1)] = (42));

} else {
var statearr_29189_29253 = state_29122__$1;
(statearr_29189_29253[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (16))){
var inst_29021 = (state_29122[(7)]);
var inst_29023 = cljs.core.chunked_seq_QMARK_.call(null,inst_29021);
var state_29122__$1 = state_29122;
if(inst_29023){
var statearr_29190_29254 = state_29122__$1;
(statearr_29190_29254[(1)] = (19));

} else {
var statearr_29191_29255 = state_29122__$1;
(statearr_29191_29255[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (38))){
var inst_29101 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29192_29256 = state_29122__$1;
(statearr_29192_29256[(2)] = inst_29101);

(statearr_29192_29256[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (30))){
var state_29122__$1 = state_29122;
var statearr_29193_29257 = state_29122__$1;
(statearr_29193_29257[(2)] = null);

(statearr_29193_29257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (10))){
var inst_29000 = (state_29122[(13)]);
var inst_29002 = (state_29122[(16)]);
var inst_29010 = cljs.core._nth.call(null,inst_29000,inst_29002);
var inst_29011 = cljs.core.nth.call(null,inst_29010,(0),null);
var inst_29012 = cljs.core.nth.call(null,inst_29010,(1),null);
var state_29122__$1 = (function (){var statearr_29194 = state_29122;
(statearr_29194[(26)] = inst_29011);

return statearr_29194;
})();
if(cljs.core.truth_(inst_29012)){
var statearr_29195_29258 = state_29122__$1;
(statearr_29195_29258[(1)] = (13));

} else {
var statearr_29196_29259 = state_29122__$1;
(statearr_29196_29259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (18))){
var inst_29047 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29197_29260 = state_29122__$1;
(statearr_29197_29260[(2)] = inst_29047);

(statearr_29197_29260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (42))){
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29122__$1,(45),dchan);
} else {
if((state_val_29123 === (37))){
var inst_29081 = (state_29122[(25)]);
var inst_29090 = (state_29122[(23)]);
var inst_28990 = (state_29122[(11)]);
var inst_29090__$1 = cljs.core.first.call(null,inst_29081);
var inst_29091 = cljs.core.async.put_BANG_.call(null,inst_29090__$1,inst_28990,done);
var state_29122__$1 = (function (){var statearr_29198 = state_29122;
(statearr_29198[(23)] = inst_29090__$1);

return statearr_29198;
})();
if(cljs.core.truth_(inst_29091)){
var statearr_29199_29261 = state_29122__$1;
(statearr_29199_29261[(1)] = (39));

} else {
var statearr_29200_29262 = state_29122__$1;
(statearr_29200_29262[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (8))){
var inst_29001 = (state_29122[(14)]);
var inst_29002 = (state_29122[(16)]);
var inst_29004 = (inst_29002 < inst_29001);
var inst_29005 = inst_29004;
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29005)){
var statearr_29201_29263 = state_29122__$1;
(statearr_29201_29263[(1)] = (10));

} else {
var statearr_29202_29264 = state_29122__$1;
(statearr_29202_29264[(1)] = (11));

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
});})(c__27887__auto___29210,cs,m,dchan,dctr,done))
;
return ((function (switch__26780__auto__,c__27887__auto___29210,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26781__auto__ = null;
var cljs$core$async$mult_$_state_machine__26781__auto____0 = (function (){
var statearr_29206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29206[(0)] = cljs$core$async$mult_$_state_machine__26781__auto__);

(statearr_29206[(1)] = (1));

return statearr_29206;
});
var cljs$core$async$mult_$_state_machine__26781__auto____1 = (function (state_29122){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_29122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e29207){if((e29207 instanceof Object)){
var ex__26784__auto__ = e29207;
var statearr_29208_29265 = state_29122;
(statearr_29208_29265[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29266 = state_29122;
state_29122 = G__29266;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26781__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26781__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26781__auto____0;
cljs$core$async$mult_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26781__auto____1;
return cljs$core$async$mult_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___29210,cs,m,dchan,dctr,done))
})();
var state__27889__auto__ = (function (){var statearr_29209 = f__27888__auto__.call(null);
(statearr_29209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___29210);

return statearr_29209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___29210,cs,m,dchan,dctr,done))
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
var args29267 = [];
var len__25836__auto___29270 = arguments.length;
var i__25837__auto___29271 = (0);
while(true){
if((i__25837__auto___29271 < len__25836__auto___29270)){
args29267.push((arguments[i__25837__auto___29271]));

var G__29272 = (i__25837__auto___29271 + (1));
i__25837__auto___29271 = G__29272;
continue;
} else {
}
break;
}

var G__29269 = args29267.length;
switch (G__29269) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29267.length)].join('')));

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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m);
} else {
var m__25425__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,state_map);
} else {
var m__25425__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,state_map);
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
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,mode);
} else {
var m__25425__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25843__auto__ = [];
var len__25836__auto___29284 = arguments.length;
var i__25837__auto___29285 = (0);
while(true){
if((i__25837__auto___29285 < len__25836__auto___29284)){
args__25843__auto__.push((arguments[i__25837__auto___29285]));

var G__29286 = (i__25837__auto___29285 + (1));
i__25837__auto___29285 = G__29286;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((3) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25844__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29278){
var map__29279 = p__29278;
var map__29279__$1 = ((((!((map__29279 == null)))?((((map__29279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29279):map__29279);
var opts = map__29279__$1;
var statearr_29281_29287 = state;
(statearr_29281_29287[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29279,map__29279__$1,opts){
return (function (val){
var statearr_29282_29288 = state;
(statearr_29282_29288[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29279,map__29279__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29283_29289 = state;
(statearr_29283_29289[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29274){
var G__29275 = cljs.core.first.call(null,seq29274);
var seq29274__$1 = cljs.core.next.call(null,seq29274);
var G__29276 = cljs.core.first.call(null,seq29274__$1);
var seq29274__$2 = cljs.core.next.call(null,seq29274__$1);
var G__29277 = cljs.core.first.call(null,seq29274__$2);
var seq29274__$3 = cljs.core.next.call(null,seq29274__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29275,G__29276,G__29277,seq29274__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29455 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29456){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29456 = meta29456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29457,meta29456__$1){
var self__ = this;
var _29457__$1 = this;
return (new cljs.core.async.t_cljs$core$async29455(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29456__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29457){
var self__ = this;
var _29457__$1 = this;
return self__.meta29456;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29456","meta29456",1049530266,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29455";

cljs.core.async.t_cljs$core$async29455.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async29455");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29455 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29455(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29456){
return (new cljs.core.async.t_cljs$core$async29455(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29456));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29455(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27887__auto___29620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___29620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___29620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29557){
var state_val_29558 = (state_29557[(1)]);
if((state_val_29558 === (7))){
var inst_29473 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29559_29621 = state_29557__$1;
(statearr_29559_29621[(2)] = inst_29473);

(statearr_29559_29621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (20))){
var inst_29485 = (state_29557[(7)]);
var state_29557__$1 = state_29557;
var statearr_29560_29622 = state_29557__$1;
(statearr_29560_29622[(2)] = inst_29485);

(statearr_29560_29622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (27))){
var state_29557__$1 = state_29557;
var statearr_29561_29623 = state_29557__$1;
(statearr_29561_29623[(2)] = null);

(statearr_29561_29623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (1))){
var inst_29461 = (state_29557[(8)]);
var inst_29461__$1 = calc_state.call(null);
var inst_29463 = (inst_29461__$1 == null);
var inst_29464 = cljs.core.not.call(null,inst_29463);
var state_29557__$1 = (function (){var statearr_29562 = state_29557;
(statearr_29562[(8)] = inst_29461__$1);

return statearr_29562;
})();
if(inst_29464){
var statearr_29563_29624 = state_29557__$1;
(statearr_29563_29624[(1)] = (2));

} else {
var statearr_29564_29625 = state_29557__$1;
(statearr_29564_29625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (24))){
var inst_29508 = (state_29557[(9)]);
var inst_29517 = (state_29557[(10)]);
var inst_29531 = (state_29557[(11)]);
var inst_29531__$1 = inst_29508.call(null,inst_29517);
var state_29557__$1 = (function (){var statearr_29565 = state_29557;
(statearr_29565[(11)] = inst_29531__$1);

return statearr_29565;
})();
if(cljs.core.truth_(inst_29531__$1)){
var statearr_29566_29626 = state_29557__$1;
(statearr_29566_29626[(1)] = (29));

} else {
var statearr_29567_29627 = state_29557__$1;
(statearr_29567_29627[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (4))){
var inst_29476 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29476)){
var statearr_29568_29628 = state_29557__$1;
(statearr_29568_29628[(1)] = (8));

} else {
var statearr_29569_29629 = state_29557__$1;
(statearr_29569_29629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (15))){
var inst_29502 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29502)){
var statearr_29570_29630 = state_29557__$1;
(statearr_29570_29630[(1)] = (19));

} else {
var statearr_29571_29631 = state_29557__$1;
(statearr_29571_29631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (21))){
var inst_29507 = (state_29557[(12)]);
var inst_29507__$1 = (state_29557[(2)]);
var inst_29508 = cljs.core.get.call(null,inst_29507__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29509 = cljs.core.get.call(null,inst_29507__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29510 = cljs.core.get.call(null,inst_29507__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29557__$1 = (function (){var statearr_29572 = state_29557;
(statearr_29572[(12)] = inst_29507__$1);

(statearr_29572[(9)] = inst_29508);

(statearr_29572[(13)] = inst_29509);

return statearr_29572;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29557__$1,(22),inst_29510);
} else {
if((state_val_29558 === (31))){
var inst_29539 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29539)){
var statearr_29573_29632 = state_29557__$1;
(statearr_29573_29632[(1)] = (32));

} else {
var statearr_29574_29633 = state_29557__$1;
(statearr_29574_29633[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (32))){
var inst_29516 = (state_29557[(14)]);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29557__$1,(35),out,inst_29516);
} else {
if((state_val_29558 === (33))){
var inst_29507 = (state_29557[(12)]);
var inst_29485 = inst_29507;
var state_29557__$1 = (function (){var statearr_29575 = state_29557;
(statearr_29575[(7)] = inst_29485);

return statearr_29575;
})();
var statearr_29576_29634 = state_29557__$1;
(statearr_29576_29634[(2)] = null);

(statearr_29576_29634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (13))){
var inst_29485 = (state_29557[(7)]);
var inst_29492 = inst_29485.cljs$lang$protocol_mask$partition0$;
var inst_29493 = (inst_29492 & (64));
var inst_29494 = inst_29485.cljs$core$ISeq$;
var inst_29495 = (inst_29493) || (inst_29494);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29495)){
var statearr_29577_29635 = state_29557__$1;
(statearr_29577_29635[(1)] = (16));

} else {
var statearr_29578_29636 = state_29557__$1;
(statearr_29578_29636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (22))){
var inst_29517 = (state_29557[(10)]);
var inst_29516 = (state_29557[(14)]);
var inst_29515 = (state_29557[(2)]);
var inst_29516__$1 = cljs.core.nth.call(null,inst_29515,(0),null);
var inst_29517__$1 = cljs.core.nth.call(null,inst_29515,(1),null);
var inst_29518 = (inst_29516__$1 == null);
var inst_29519 = cljs.core._EQ_.call(null,inst_29517__$1,change);
var inst_29520 = (inst_29518) || (inst_29519);
var state_29557__$1 = (function (){var statearr_29579 = state_29557;
(statearr_29579[(10)] = inst_29517__$1);

(statearr_29579[(14)] = inst_29516__$1);

return statearr_29579;
})();
if(cljs.core.truth_(inst_29520)){
var statearr_29580_29637 = state_29557__$1;
(statearr_29580_29637[(1)] = (23));

} else {
var statearr_29581_29638 = state_29557__$1;
(statearr_29581_29638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (36))){
var inst_29507 = (state_29557[(12)]);
var inst_29485 = inst_29507;
var state_29557__$1 = (function (){var statearr_29582 = state_29557;
(statearr_29582[(7)] = inst_29485);

return statearr_29582;
})();
var statearr_29583_29639 = state_29557__$1;
(statearr_29583_29639[(2)] = null);

(statearr_29583_29639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (29))){
var inst_29531 = (state_29557[(11)]);
var state_29557__$1 = state_29557;
var statearr_29584_29640 = state_29557__$1;
(statearr_29584_29640[(2)] = inst_29531);

(statearr_29584_29640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (6))){
var state_29557__$1 = state_29557;
var statearr_29585_29641 = state_29557__$1;
(statearr_29585_29641[(2)] = false);

(statearr_29585_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (28))){
var inst_29527 = (state_29557[(2)]);
var inst_29528 = calc_state.call(null);
var inst_29485 = inst_29528;
var state_29557__$1 = (function (){var statearr_29586 = state_29557;
(statearr_29586[(7)] = inst_29485);

(statearr_29586[(15)] = inst_29527);

return statearr_29586;
})();
var statearr_29587_29642 = state_29557__$1;
(statearr_29587_29642[(2)] = null);

(statearr_29587_29642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (25))){
var inst_29553 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29588_29643 = state_29557__$1;
(statearr_29588_29643[(2)] = inst_29553);

(statearr_29588_29643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (34))){
var inst_29551 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29589_29644 = state_29557__$1;
(statearr_29589_29644[(2)] = inst_29551);

(statearr_29589_29644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (17))){
var state_29557__$1 = state_29557;
var statearr_29590_29645 = state_29557__$1;
(statearr_29590_29645[(2)] = false);

(statearr_29590_29645[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (3))){
var state_29557__$1 = state_29557;
var statearr_29591_29646 = state_29557__$1;
(statearr_29591_29646[(2)] = false);

(statearr_29591_29646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (12))){
var inst_29555 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29557__$1,inst_29555);
} else {
if((state_val_29558 === (2))){
var inst_29461 = (state_29557[(8)]);
var inst_29466 = inst_29461.cljs$lang$protocol_mask$partition0$;
var inst_29467 = (inst_29466 & (64));
var inst_29468 = inst_29461.cljs$core$ISeq$;
var inst_29469 = (inst_29467) || (inst_29468);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29469)){
var statearr_29592_29647 = state_29557__$1;
(statearr_29592_29647[(1)] = (5));

} else {
var statearr_29593_29648 = state_29557__$1;
(statearr_29593_29648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (23))){
var inst_29516 = (state_29557[(14)]);
var inst_29522 = (inst_29516 == null);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29522)){
var statearr_29594_29649 = state_29557__$1;
(statearr_29594_29649[(1)] = (26));

} else {
var statearr_29595_29650 = state_29557__$1;
(statearr_29595_29650[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (35))){
var inst_29542 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
if(cljs.core.truth_(inst_29542)){
var statearr_29596_29651 = state_29557__$1;
(statearr_29596_29651[(1)] = (36));

} else {
var statearr_29597_29652 = state_29557__$1;
(statearr_29597_29652[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (19))){
var inst_29485 = (state_29557[(7)]);
var inst_29504 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29485);
var state_29557__$1 = state_29557;
var statearr_29598_29653 = state_29557__$1;
(statearr_29598_29653[(2)] = inst_29504);

(statearr_29598_29653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (11))){
var inst_29485 = (state_29557[(7)]);
var inst_29489 = (inst_29485 == null);
var inst_29490 = cljs.core.not.call(null,inst_29489);
var state_29557__$1 = state_29557;
if(inst_29490){
var statearr_29599_29654 = state_29557__$1;
(statearr_29599_29654[(1)] = (13));

} else {
var statearr_29600_29655 = state_29557__$1;
(statearr_29600_29655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (9))){
var inst_29461 = (state_29557[(8)]);
var state_29557__$1 = state_29557;
var statearr_29601_29656 = state_29557__$1;
(statearr_29601_29656[(2)] = inst_29461);

(statearr_29601_29656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (5))){
var state_29557__$1 = state_29557;
var statearr_29602_29657 = state_29557__$1;
(statearr_29602_29657[(2)] = true);

(statearr_29602_29657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (14))){
var state_29557__$1 = state_29557;
var statearr_29603_29658 = state_29557__$1;
(statearr_29603_29658[(2)] = false);

(statearr_29603_29658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (26))){
var inst_29517 = (state_29557[(10)]);
var inst_29524 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29517);
var state_29557__$1 = state_29557;
var statearr_29604_29659 = state_29557__$1;
(statearr_29604_29659[(2)] = inst_29524);

(statearr_29604_29659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (16))){
var state_29557__$1 = state_29557;
var statearr_29605_29660 = state_29557__$1;
(statearr_29605_29660[(2)] = true);

(statearr_29605_29660[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (38))){
var inst_29547 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29606_29661 = state_29557__$1;
(statearr_29606_29661[(2)] = inst_29547);

(statearr_29606_29661[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (30))){
var inst_29508 = (state_29557[(9)]);
var inst_29509 = (state_29557[(13)]);
var inst_29517 = (state_29557[(10)]);
var inst_29534 = cljs.core.empty_QMARK_.call(null,inst_29508);
var inst_29535 = inst_29509.call(null,inst_29517);
var inst_29536 = cljs.core.not.call(null,inst_29535);
var inst_29537 = (inst_29534) && (inst_29536);
var state_29557__$1 = state_29557;
var statearr_29607_29662 = state_29557__$1;
(statearr_29607_29662[(2)] = inst_29537);

(statearr_29607_29662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (10))){
var inst_29461 = (state_29557[(8)]);
var inst_29481 = (state_29557[(2)]);
var inst_29482 = cljs.core.get.call(null,inst_29481,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29483 = cljs.core.get.call(null,inst_29481,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29484 = cljs.core.get.call(null,inst_29481,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29485 = inst_29461;
var state_29557__$1 = (function (){var statearr_29608 = state_29557;
(statearr_29608[(16)] = inst_29484);

(statearr_29608[(7)] = inst_29485);

(statearr_29608[(17)] = inst_29482);

(statearr_29608[(18)] = inst_29483);

return statearr_29608;
})();
var statearr_29609_29663 = state_29557__$1;
(statearr_29609_29663[(2)] = null);

(statearr_29609_29663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (18))){
var inst_29499 = (state_29557[(2)]);
var state_29557__$1 = state_29557;
var statearr_29610_29664 = state_29557__$1;
(statearr_29610_29664[(2)] = inst_29499);

(statearr_29610_29664[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (37))){
var state_29557__$1 = state_29557;
var statearr_29611_29665 = state_29557__$1;
(statearr_29611_29665[(2)] = null);

(statearr_29611_29665[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29558 === (8))){
var inst_29461 = (state_29557[(8)]);
var inst_29478 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29461);
var state_29557__$1 = state_29557;
var statearr_29612_29666 = state_29557__$1;
(statearr_29612_29666[(2)] = inst_29478);

(statearr_29612_29666[(1)] = (10));


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
});})(c__27887__auto___29620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26780__auto__,c__27887__auto___29620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26781__auto__ = null;
var cljs$core$async$mix_$_state_machine__26781__auto____0 = (function (){
var statearr_29616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29616[(0)] = cljs$core$async$mix_$_state_machine__26781__auto__);

(statearr_29616[(1)] = (1));

return statearr_29616;
});
var cljs$core$async$mix_$_state_machine__26781__auto____1 = (function (state_29557){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_29557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e29617){if((e29617 instanceof Object)){
var ex__26784__auto__ = e29617;
var statearr_29618_29667 = state_29557;
(statearr_29618_29667[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29668 = state_29557;
state_29557 = G__29668;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26781__auto__ = function(state_29557){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26781__auto____1.call(this,state_29557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26781__auto____0;
cljs$core$async$mix_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26781__auto____1;
return cljs$core$async$mix_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___29620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27889__auto__ = (function (){var statearr_29619 = f__27888__auto__.call(null);
(statearr_29619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___29620);

return statearr_29619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___29620,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25425__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p,v,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29669 = [];
var len__25836__auto___29672 = arguments.length;
var i__25837__auto___29673 = (0);
while(true){
if((i__25837__auto___29673 < len__25836__auto___29672)){
args29669.push((arguments[i__25837__auto___29673]));

var G__29674 = (i__25837__auto___29673 + (1));
i__25837__auto___29673 = G__29674;
continue;
} else {
}
break;
}

var G__29671 = args29669.length;
switch (G__29671) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29669.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p);
} else {
var m__25425__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p);
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
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p,v);
} else {
var m__25425__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p,v);
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
var args29677 = [];
var len__25836__auto___29802 = arguments.length;
var i__25837__auto___29803 = (0);
while(true){
if((i__25837__auto___29803 < len__25836__auto___29802)){
args29677.push((arguments[i__25837__auto___29803]));

var G__29804 = (i__25837__auto___29803 + (1));
i__25837__auto___29803 = G__29804;
continue;
} else {
}
break;
}

var G__29679 = args29677.length;
switch (G__29679) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29677.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24761__auto__,mults){
return (function (p1__29676_SHARP_){
if(cljs.core.truth_(p1__29676_SHARP_.call(null,topic))){
return p1__29676_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29676_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29680 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29681){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29681 = meta29681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29682,meta29681__$1){
var self__ = this;
var _29682__$1 = this;
return (new cljs.core.async.t_cljs$core$async29680(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29681__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29682){
var self__ = this;
var _29682__$1 = this;
return self__.meta29681;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29681","meta29681",515960359,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29680";

cljs.core.async.t_cljs$core$async29680.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async29680");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29680 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29680(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29681){
return (new cljs.core.async.t_cljs$core$async29680(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29681));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29680(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27887__auto___29806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___29806,mults,ensure_mult,p){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___29806,mults,ensure_mult,p){
return (function (state_29754){
var state_val_29755 = (state_29754[(1)]);
if((state_val_29755 === (7))){
var inst_29750 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29756_29807 = state_29754__$1;
(statearr_29756_29807[(2)] = inst_29750);

(statearr_29756_29807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (20))){
var state_29754__$1 = state_29754;
var statearr_29757_29808 = state_29754__$1;
(statearr_29757_29808[(2)] = null);

(statearr_29757_29808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (1))){
var state_29754__$1 = state_29754;
var statearr_29758_29809 = state_29754__$1;
(statearr_29758_29809[(2)] = null);

(statearr_29758_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (24))){
var inst_29733 = (state_29754[(7)]);
var inst_29742 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29733);
var state_29754__$1 = state_29754;
var statearr_29759_29810 = state_29754__$1;
(statearr_29759_29810[(2)] = inst_29742);

(statearr_29759_29810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (4))){
var inst_29685 = (state_29754[(8)]);
var inst_29685__$1 = (state_29754[(2)]);
var inst_29686 = (inst_29685__$1 == null);
var state_29754__$1 = (function (){var statearr_29760 = state_29754;
(statearr_29760[(8)] = inst_29685__$1);

return statearr_29760;
})();
if(cljs.core.truth_(inst_29686)){
var statearr_29761_29811 = state_29754__$1;
(statearr_29761_29811[(1)] = (5));

} else {
var statearr_29762_29812 = state_29754__$1;
(statearr_29762_29812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (15))){
var inst_29727 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29763_29813 = state_29754__$1;
(statearr_29763_29813[(2)] = inst_29727);

(statearr_29763_29813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (21))){
var inst_29747 = (state_29754[(2)]);
var state_29754__$1 = (function (){var statearr_29764 = state_29754;
(statearr_29764[(9)] = inst_29747);

return statearr_29764;
})();
var statearr_29765_29814 = state_29754__$1;
(statearr_29765_29814[(2)] = null);

(statearr_29765_29814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (13))){
var inst_29709 = (state_29754[(10)]);
var inst_29711 = cljs.core.chunked_seq_QMARK_.call(null,inst_29709);
var state_29754__$1 = state_29754;
if(inst_29711){
var statearr_29766_29815 = state_29754__$1;
(statearr_29766_29815[(1)] = (16));

} else {
var statearr_29767_29816 = state_29754__$1;
(statearr_29767_29816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (22))){
var inst_29739 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
if(cljs.core.truth_(inst_29739)){
var statearr_29768_29817 = state_29754__$1;
(statearr_29768_29817[(1)] = (23));

} else {
var statearr_29769_29818 = state_29754__$1;
(statearr_29769_29818[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (6))){
var inst_29685 = (state_29754[(8)]);
var inst_29733 = (state_29754[(7)]);
var inst_29735 = (state_29754[(11)]);
var inst_29733__$1 = topic_fn.call(null,inst_29685);
var inst_29734 = cljs.core.deref.call(null,mults);
var inst_29735__$1 = cljs.core.get.call(null,inst_29734,inst_29733__$1);
var state_29754__$1 = (function (){var statearr_29770 = state_29754;
(statearr_29770[(7)] = inst_29733__$1);

(statearr_29770[(11)] = inst_29735__$1);

return statearr_29770;
})();
if(cljs.core.truth_(inst_29735__$1)){
var statearr_29771_29819 = state_29754__$1;
(statearr_29771_29819[(1)] = (19));

} else {
var statearr_29772_29820 = state_29754__$1;
(statearr_29772_29820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (25))){
var inst_29744 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29773_29821 = state_29754__$1;
(statearr_29773_29821[(2)] = inst_29744);

(statearr_29773_29821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (17))){
var inst_29709 = (state_29754[(10)]);
var inst_29718 = cljs.core.first.call(null,inst_29709);
var inst_29719 = cljs.core.async.muxch_STAR_.call(null,inst_29718);
var inst_29720 = cljs.core.async.close_BANG_.call(null,inst_29719);
var inst_29721 = cljs.core.next.call(null,inst_29709);
var inst_29695 = inst_29721;
var inst_29696 = null;
var inst_29697 = (0);
var inst_29698 = (0);
var state_29754__$1 = (function (){var statearr_29774 = state_29754;
(statearr_29774[(12)] = inst_29698);

(statearr_29774[(13)] = inst_29696);

(statearr_29774[(14)] = inst_29720);

(statearr_29774[(15)] = inst_29697);

(statearr_29774[(16)] = inst_29695);

return statearr_29774;
})();
var statearr_29775_29822 = state_29754__$1;
(statearr_29775_29822[(2)] = null);

(statearr_29775_29822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (3))){
var inst_29752 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29754__$1,inst_29752);
} else {
if((state_val_29755 === (12))){
var inst_29729 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29776_29823 = state_29754__$1;
(statearr_29776_29823[(2)] = inst_29729);

(statearr_29776_29823[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (2))){
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29754__$1,(4),ch);
} else {
if((state_val_29755 === (23))){
var state_29754__$1 = state_29754;
var statearr_29777_29824 = state_29754__$1;
(statearr_29777_29824[(2)] = null);

(statearr_29777_29824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (19))){
var inst_29685 = (state_29754[(8)]);
var inst_29735 = (state_29754[(11)]);
var inst_29737 = cljs.core.async.muxch_STAR_.call(null,inst_29735);
var state_29754__$1 = state_29754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29754__$1,(22),inst_29737,inst_29685);
} else {
if((state_val_29755 === (11))){
var inst_29709 = (state_29754[(10)]);
var inst_29695 = (state_29754[(16)]);
var inst_29709__$1 = cljs.core.seq.call(null,inst_29695);
var state_29754__$1 = (function (){var statearr_29778 = state_29754;
(statearr_29778[(10)] = inst_29709__$1);

return statearr_29778;
})();
if(inst_29709__$1){
var statearr_29779_29825 = state_29754__$1;
(statearr_29779_29825[(1)] = (13));

} else {
var statearr_29780_29826 = state_29754__$1;
(statearr_29780_29826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (9))){
var inst_29731 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29781_29827 = state_29754__$1;
(statearr_29781_29827[(2)] = inst_29731);

(statearr_29781_29827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (5))){
var inst_29692 = cljs.core.deref.call(null,mults);
var inst_29693 = cljs.core.vals.call(null,inst_29692);
var inst_29694 = cljs.core.seq.call(null,inst_29693);
var inst_29695 = inst_29694;
var inst_29696 = null;
var inst_29697 = (0);
var inst_29698 = (0);
var state_29754__$1 = (function (){var statearr_29782 = state_29754;
(statearr_29782[(12)] = inst_29698);

(statearr_29782[(13)] = inst_29696);

(statearr_29782[(15)] = inst_29697);

(statearr_29782[(16)] = inst_29695);

return statearr_29782;
})();
var statearr_29783_29828 = state_29754__$1;
(statearr_29783_29828[(2)] = null);

(statearr_29783_29828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (14))){
var state_29754__$1 = state_29754;
var statearr_29787_29829 = state_29754__$1;
(statearr_29787_29829[(2)] = null);

(statearr_29787_29829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (16))){
var inst_29709 = (state_29754[(10)]);
var inst_29713 = cljs.core.chunk_first.call(null,inst_29709);
var inst_29714 = cljs.core.chunk_rest.call(null,inst_29709);
var inst_29715 = cljs.core.count.call(null,inst_29713);
var inst_29695 = inst_29714;
var inst_29696 = inst_29713;
var inst_29697 = inst_29715;
var inst_29698 = (0);
var state_29754__$1 = (function (){var statearr_29788 = state_29754;
(statearr_29788[(12)] = inst_29698);

(statearr_29788[(13)] = inst_29696);

(statearr_29788[(15)] = inst_29697);

(statearr_29788[(16)] = inst_29695);

return statearr_29788;
})();
var statearr_29789_29830 = state_29754__$1;
(statearr_29789_29830[(2)] = null);

(statearr_29789_29830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (10))){
var inst_29698 = (state_29754[(12)]);
var inst_29696 = (state_29754[(13)]);
var inst_29697 = (state_29754[(15)]);
var inst_29695 = (state_29754[(16)]);
var inst_29703 = cljs.core._nth.call(null,inst_29696,inst_29698);
var inst_29704 = cljs.core.async.muxch_STAR_.call(null,inst_29703);
var inst_29705 = cljs.core.async.close_BANG_.call(null,inst_29704);
var inst_29706 = (inst_29698 + (1));
var tmp29784 = inst_29696;
var tmp29785 = inst_29697;
var tmp29786 = inst_29695;
var inst_29695__$1 = tmp29786;
var inst_29696__$1 = tmp29784;
var inst_29697__$1 = tmp29785;
var inst_29698__$1 = inst_29706;
var state_29754__$1 = (function (){var statearr_29790 = state_29754;
(statearr_29790[(12)] = inst_29698__$1);

(statearr_29790[(13)] = inst_29696__$1);

(statearr_29790[(15)] = inst_29697__$1);

(statearr_29790[(16)] = inst_29695__$1);

(statearr_29790[(17)] = inst_29705);

return statearr_29790;
})();
var statearr_29791_29831 = state_29754__$1;
(statearr_29791_29831[(2)] = null);

(statearr_29791_29831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (18))){
var inst_29724 = (state_29754[(2)]);
var state_29754__$1 = state_29754;
var statearr_29792_29832 = state_29754__$1;
(statearr_29792_29832[(2)] = inst_29724);

(statearr_29792_29832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29755 === (8))){
var inst_29698 = (state_29754[(12)]);
var inst_29697 = (state_29754[(15)]);
var inst_29700 = (inst_29698 < inst_29697);
var inst_29701 = inst_29700;
var state_29754__$1 = state_29754;
if(cljs.core.truth_(inst_29701)){
var statearr_29793_29833 = state_29754__$1;
(statearr_29793_29833[(1)] = (10));

} else {
var statearr_29794_29834 = state_29754__$1;
(statearr_29794_29834[(1)] = (11));

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
});})(c__27887__auto___29806,mults,ensure_mult,p))
;
return ((function (switch__26780__auto__,c__27887__auto___29806,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_29798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29798[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_29798[(1)] = (1));

return statearr_29798;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_29754){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_29754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e29799){if((e29799 instanceof Object)){
var ex__26784__auto__ = e29799;
var statearr_29800_29835 = state_29754;
(statearr_29800_29835[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29836 = state_29754;
state_29754 = G__29836;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_29754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_29754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___29806,mults,ensure_mult,p))
})();
var state__27889__auto__ = (function (){var statearr_29801 = f__27888__auto__.call(null);
(statearr_29801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___29806);

return statearr_29801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___29806,mults,ensure_mult,p))
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
var args29837 = [];
var len__25836__auto___29840 = arguments.length;
var i__25837__auto___29841 = (0);
while(true){
if((i__25837__auto___29841 < len__25836__auto___29840)){
args29837.push((arguments[i__25837__auto___29841]));

var G__29842 = (i__25837__auto___29841 + (1));
i__25837__auto___29841 = G__29842;
continue;
} else {
}
break;
}

var G__29839 = args29837.length;
switch (G__29839) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29837.length)].join('')));

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
var args29844 = [];
var len__25836__auto___29847 = arguments.length;
var i__25837__auto___29848 = (0);
while(true){
if((i__25837__auto___29848 < len__25836__auto___29847)){
args29844.push((arguments[i__25837__auto___29848]));

var G__29849 = (i__25837__auto___29848 + (1));
i__25837__auto___29848 = G__29849;
continue;
} else {
}
break;
}

var G__29846 = args29844.length;
switch (G__29846) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29844.length)].join('')));

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
var args29851 = [];
var len__25836__auto___29922 = arguments.length;
var i__25837__auto___29923 = (0);
while(true){
if((i__25837__auto___29923 < len__25836__auto___29922)){
args29851.push((arguments[i__25837__auto___29923]));

var G__29924 = (i__25837__auto___29923 + (1));
i__25837__auto___29923 = G__29924;
continue;
} else {
}
break;
}

var G__29853 = args29851.length;
switch (G__29853) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29851.length)].join('')));

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
var c__27887__auto___29926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___29926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___29926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29892){
var state_val_29893 = (state_29892[(1)]);
if((state_val_29893 === (7))){
var state_29892__$1 = state_29892;
var statearr_29894_29927 = state_29892__$1;
(statearr_29894_29927[(2)] = null);

(statearr_29894_29927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (1))){
var state_29892__$1 = state_29892;
var statearr_29895_29928 = state_29892__$1;
(statearr_29895_29928[(2)] = null);

(statearr_29895_29928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (4))){
var inst_29856 = (state_29892[(7)]);
var inst_29858 = (inst_29856 < cnt);
var state_29892__$1 = state_29892;
if(cljs.core.truth_(inst_29858)){
var statearr_29896_29929 = state_29892__$1;
(statearr_29896_29929[(1)] = (6));

} else {
var statearr_29897_29930 = state_29892__$1;
(statearr_29897_29930[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (15))){
var inst_29888 = (state_29892[(2)]);
var state_29892__$1 = state_29892;
var statearr_29898_29931 = state_29892__$1;
(statearr_29898_29931[(2)] = inst_29888);

(statearr_29898_29931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (13))){
var inst_29881 = cljs.core.async.close_BANG_.call(null,out);
var state_29892__$1 = state_29892;
var statearr_29899_29932 = state_29892__$1;
(statearr_29899_29932[(2)] = inst_29881);

(statearr_29899_29932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (6))){
var state_29892__$1 = state_29892;
var statearr_29900_29933 = state_29892__$1;
(statearr_29900_29933[(2)] = null);

(statearr_29900_29933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (3))){
var inst_29890 = (state_29892[(2)]);
var state_29892__$1 = state_29892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29892__$1,inst_29890);
} else {
if((state_val_29893 === (12))){
var inst_29878 = (state_29892[(8)]);
var inst_29878__$1 = (state_29892[(2)]);
var inst_29879 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29878__$1);
var state_29892__$1 = (function (){var statearr_29901 = state_29892;
(statearr_29901[(8)] = inst_29878__$1);

return statearr_29901;
})();
if(cljs.core.truth_(inst_29879)){
var statearr_29902_29934 = state_29892__$1;
(statearr_29902_29934[(1)] = (13));

} else {
var statearr_29903_29935 = state_29892__$1;
(statearr_29903_29935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (2))){
var inst_29855 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29856 = (0);
var state_29892__$1 = (function (){var statearr_29904 = state_29892;
(statearr_29904[(9)] = inst_29855);

(statearr_29904[(7)] = inst_29856);

return statearr_29904;
})();
var statearr_29905_29936 = state_29892__$1;
(statearr_29905_29936[(2)] = null);

(statearr_29905_29936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (11))){
var inst_29856 = (state_29892[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29892,(10),Object,null,(9));
var inst_29865 = chs__$1.call(null,inst_29856);
var inst_29866 = done.call(null,inst_29856);
var inst_29867 = cljs.core.async.take_BANG_.call(null,inst_29865,inst_29866);
var state_29892__$1 = state_29892;
var statearr_29906_29937 = state_29892__$1;
(statearr_29906_29937[(2)] = inst_29867);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (9))){
var inst_29856 = (state_29892[(7)]);
var inst_29869 = (state_29892[(2)]);
var inst_29870 = (inst_29856 + (1));
var inst_29856__$1 = inst_29870;
var state_29892__$1 = (function (){var statearr_29907 = state_29892;
(statearr_29907[(10)] = inst_29869);

(statearr_29907[(7)] = inst_29856__$1);

return statearr_29907;
})();
var statearr_29908_29938 = state_29892__$1;
(statearr_29908_29938[(2)] = null);

(statearr_29908_29938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (5))){
var inst_29876 = (state_29892[(2)]);
var state_29892__$1 = (function (){var statearr_29909 = state_29892;
(statearr_29909[(11)] = inst_29876);

return statearr_29909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29892__$1,(12),dchan);
} else {
if((state_val_29893 === (14))){
var inst_29878 = (state_29892[(8)]);
var inst_29883 = cljs.core.apply.call(null,f,inst_29878);
var state_29892__$1 = state_29892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29892__$1,(16),out,inst_29883);
} else {
if((state_val_29893 === (16))){
var inst_29885 = (state_29892[(2)]);
var state_29892__$1 = (function (){var statearr_29910 = state_29892;
(statearr_29910[(12)] = inst_29885);

return statearr_29910;
})();
var statearr_29911_29939 = state_29892__$1;
(statearr_29911_29939[(2)] = null);

(statearr_29911_29939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (10))){
var inst_29860 = (state_29892[(2)]);
var inst_29861 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29892__$1 = (function (){var statearr_29912 = state_29892;
(statearr_29912[(13)] = inst_29860);

return statearr_29912;
})();
var statearr_29913_29940 = state_29892__$1;
(statearr_29913_29940[(2)] = inst_29861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29892__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29893 === (8))){
var inst_29874 = (state_29892[(2)]);
var state_29892__$1 = state_29892;
var statearr_29914_29941 = state_29892__$1;
(statearr_29914_29941[(2)] = inst_29874);

(statearr_29914_29941[(1)] = (5));


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
});})(c__27887__auto___29926,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26780__auto__,c__27887__auto___29926,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_29918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29918[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_29918[(1)] = (1));

return statearr_29918;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_29892){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_29892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e29919){if((e29919 instanceof Object)){
var ex__26784__auto__ = e29919;
var statearr_29920_29942 = state_29892;
(statearr_29920_29942[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29943 = state_29892;
state_29892 = G__29943;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_29892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_29892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___29926,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27889__auto__ = (function (){var statearr_29921 = f__27888__auto__.call(null);
(statearr_29921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___29926);

return statearr_29921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___29926,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29945 = [];
var len__25836__auto___30003 = arguments.length;
var i__25837__auto___30004 = (0);
while(true){
if((i__25837__auto___30004 < len__25836__auto___30003)){
args29945.push((arguments[i__25837__auto___30004]));

var G__30005 = (i__25837__auto___30004 + (1));
i__25837__auto___30004 = G__30005;
continue;
} else {
}
break;
}

var G__29947 = args29945.length;
switch (G__29947) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29945.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27887__auto___30007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___30007,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___30007,out){
return (function (state_29979){
var state_val_29980 = (state_29979[(1)]);
if((state_val_29980 === (7))){
var inst_29959 = (state_29979[(7)]);
var inst_29958 = (state_29979[(8)]);
var inst_29958__$1 = (state_29979[(2)]);
var inst_29959__$1 = cljs.core.nth.call(null,inst_29958__$1,(0),null);
var inst_29960 = cljs.core.nth.call(null,inst_29958__$1,(1),null);
var inst_29961 = (inst_29959__$1 == null);
var state_29979__$1 = (function (){var statearr_29981 = state_29979;
(statearr_29981[(9)] = inst_29960);

(statearr_29981[(7)] = inst_29959__$1);

(statearr_29981[(8)] = inst_29958__$1);

return statearr_29981;
})();
if(cljs.core.truth_(inst_29961)){
var statearr_29982_30008 = state_29979__$1;
(statearr_29982_30008[(1)] = (8));

} else {
var statearr_29983_30009 = state_29979__$1;
(statearr_29983_30009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (1))){
var inst_29948 = cljs.core.vec.call(null,chs);
var inst_29949 = inst_29948;
var state_29979__$1 = (function (){var statearr_29984 = state_29979;
(statearr_29984[(10)] = inst_29949);

return statearr_29984;
})();
var statearr_29985_30010 = state_29979__$1;
(statearr_29985_30010[(2)] = null);

(statearr_29985_30010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (4))){
var inst_29949 = (state_29979[(10)]);
var state_29979__$1 = state_29979;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29979__$1,(7),inst_29949);
} else {
if((state_val_29980 === (6))){
var inst_29975 = (state_29979[(2)]);
var state_29979__$1 = state_29979;
var statearr_29986_30011 = state_29979__$1;
(statearr_29986_30011[(2)] = inst_29975);

(statearr_29986_30011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (3))){
var inst_29977 = (state_29979[(2)]);
var state_29979__$1 = state_29979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29979__$1,inst_29977);
} else {
if((state_val_29980 === (2))){
var inst_29949 = (state_29979[(10)]);
var inst_29951 = cljs.core.count.call(null,inst_29949);
var inst_29952 = (inst_29951 > (0));
var state_29979__$1 = state_29979;
if(cljs.core.truth_(inst_29952)){
var statearr_29988_30012 = state_29979__$1;
(statearr_29988_30012[(1)] = (4));

} else {
var statearr_29989_30013 = state_29979__$1;
(statearr_29989_30013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (11))){
var inst_29949 = (state_29979[(10)]);
var inst_29968 = (state_29979[(2)]);
var tmp29987 = inst_29949;
var inst_29949__$1 = tmp29987;
var state_29979__$1 = (function (){var statearr_29990 = state_29979;
(statearr_29990[(11)] = inst_29968);

(statearr_29990[(10)] = inst_29949__$1);

return statearr_29990;
})();
var statearr_29991_30014 = state_29979__$1;
(statearr_29991_30014[(2)] = null);

(statearr_29991_30014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (9))){
var inst_29959 = (state_29979[(7)]);
var state_29979__$1 = state_29979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29979__$1,(11),out,inst_29959);
} else {
if((state_val_29980 === (5))){
var inst_29973 = cljs.core.async.close_BANG_.call(null,out);
var state_29979__$1 = state_29979;
var statearr_29992_30015 = state_29979__$1;
(statearr_29992_30015[(2)] = inst_29973);

(statearr_29992_30015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (10))){
var inst_29971 = (state_29979[(2)]);
var state_29979__$1 = state_29979;
var statearr_29993_30016 = state_29979__$1;
(statearr_29993_30016[(2)] = inst_29971);

(statearr_29993_30016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29980 === (8))){
var inst_29960 = (state_29979[(9)]);
var inst_29959 = (state_29979[(7)]);
var inst_29949 = (state_29979[(10)]);
var inst_29958 = (state_29979[(8)]);
var inst_29963 = (function (){var cs = inst_29949;
var vec__29954 = inst_29958;
var v = inst_29959;
var c = inst_29960;
return ((function (cs,vec__29954,v,c,inst_29960,inst_29959,inst_29949,inst_29958,state_val_29980,c__27887__auto___30007,out){
return (function (p1__29944_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29944_SHARP_);
});
;})(cs,vec__29954,v,c,inst_29960,inst_29959,inst_29949,inst_29958,state_val_29980,c__27887__auto___30007,out))
})();
var inst_29964 = cljs.core.filterv.call(null,inst_29963,inst_29949);
var inst_29949__$1 = inst_29964;
var state_29979__$1 = (function (){var statearr_29994 = state_29979;
(statearr_29994[(10)] = inst_29949__$1);

return statearr_29994;
})();
var statearr_29995_30017 = state_29979__$1;
(statearr_29995_30017[(2)] = null);

(statearr_29995_30017[(1)] = (2));


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
});})(c__27887__auto___30007,out))
;
return ((function (switch__26780__auto__,c__27887__auto___30007,out){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_29999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29999[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_29999[(1)] = (1));

return statearr_29999;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_29979){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_29979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30000){if((e30000 instanceof Object)){
var ex__26784__auto__ = e30000;
var statearr_30001_30018 = state_29979;
(statearr_30001_30018[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30019 = state_29979;
state_29979 = G__30019;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_29979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_29979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___30007,out))
})();
var state__27889__auto__ = (function (){var statearr_30002 = f__27888__auto__.call(null);
(statearr_30002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___30007);

return statearr_30002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___30007,out))
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
var args30020 = [];
var len__25836__auto___30069 = arguments.length;
var i__25837__auto___30070 = (0);
while(true){
if((i__25837__auto___30070 < len__25836__auto___30069)){
args30020.push((arguments[i__25837__auto___30070]));

var G__30071 = (i__25837__auto___30070 + (1));
i__25837__auto___30070 = G__30071;
continue;
} else {
}
break;
}

var G__30022 = args30020.length;
switch (G__30022) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30020.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27887__auto___30073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___30073,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___30073,out){
return (function (state_30046){
var state_val_30047 = (state_30046[(1)]);
if((state_val_30047 === (7))){
var inst_30028 = (state_30046[(7)]);
var inst_30028__$1 = (state_30046[(2)]);
var inst_30029 = (inst_30028__$1 == null);
var inst_30030 = cljs.core.not.call(null,inst_30029);
var state_30046__$1 = (function (){var statearr_30048 = state_30046;
(statearr_30048[(7)] = inst_30028__$1);

return statearr_30048;
})();
if(inst_30030){
var statearr_30049_30074 = state_30046__$1;
(statearr_30049_30074[(1)] = (8));

} else {
var statearr_30050_30075 = state_30046__$1;
(statearr_30050_30075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (1))){
var inst_30023 = (0);
var state_30046__$1 = (function (){var statearr_30051 = state_30046;
(statearr_30051[(8)] = inst_30023);

return statearr_30051;
})();
var statearr_30052_30076 = state_30046__$1;
(statearr_30052_30076[(2)] = null);

(statearr_30052_30076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (4))){
var state_30046__$1 = state_30046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30046__$1,(7),ch);
} else {
if((state_val_30047 === (6))){
var inst_30041 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
var statearr_30053_30077 = state_30046__$1;
(statearr_30053_30077[(2)] = inst_30041);

(statearr_30053_30077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (3))){
var inst_30043 = (state_30046[(2)]);
var inst_30044 = cljs.core.async.close_BANG_.call(null,out);
var state_30046__$1 = (function (){var statearr_30054 = state_30046;
(statearr_30054[(9)] = inst_30043);

return statearr_30054;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30046__$1,inst_30044);
} else {
if((state_val_30047 === (2))){
var inst_30023 = (state_30046[(8)]);
var inst_30025 = (inst_30023 < n);
var state_30046__$1 = state_30046;
if(cljs.core.truth_(inst_30025)){
var statearr_30055_30078 = state_30046__$1;
(statearr_30055_30078[(1)] = (4));

} else {
var statearr_30056_30079 = state_30046__$1;
(statearr_30056_30079[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (11))){
var inst_30023 = (state_30046[(8)]);
var inst_30033 = (state_30046[(2)]);
var inst_30034 = (inst_30023 + (1));
var inst_30023__$1 = inst_30034;
var state_30046__$1 = (function (){var statearr_30057 = state_30046;
(statearr_30057[(10)] = inst_30033);

(statearr_30057[(8)] = inst_30023__$1);

return statearr_30057;
})();
var statearr_30058_30080 = state_30046__$1;
(statearr_30058_30080[(2)] = null);

(statearr_30058_30080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (9))){
var state_30046__$1 = state_30046;
var statearr_30059_30081 = state_30046__$1;
(statearr_30059_30081[(2)] = null);

(statearr_30059_30081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (5))){
var state_30046__$1 = state_30046;
var statearr_30060_30082 = state_30046__$1;
(statearr_30060_30082[(2)] = null);

(statearr_30060_30082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (10))){
var inst_30038 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
var statearr_30061_30083 = state_30046__$1;
(statearr_30061_30083[(2)] = inst_30038);

(statearr_30061_30083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (8))){
var inst_30028 = (state_30046[(7)]);
var state_30046__$1 = state_30046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30046__$1,(11),out,inst_30028);
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
});})(c__27887__auto___30073,out))
;
return ((function (switch__26780__auto__,c__27887__auto___30073,out){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_30065 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30065[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_30065[(1)] = (1));

return statearr_30065;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_30046){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_30046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30066){if((e30066 instanceof Object)){
var ex__26784__auto__ = e30066;
var statearr_30067_30084 = state_30046;
(statearr_30067_30084[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30085 = state_30046;
state_30046 = G__30085;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_30046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_30046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___30073,out))
})();
var state__27889__auto__ = (function (){var statearr_30068 = f__27888__auto__.call(null);
(statearr_30068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___30073);

return statearr_30068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___30073,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30093 = (function (map_LT_,f,ch,meta30094){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30094 = meta30094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30095,meta30094__$1){
var self__ = this;
var _30095__$1 = this;
return (new cljs.core.async.t_cljs$core$async30093(self__.map_LT_,self__.f,self__.ch,meta30094__$1));
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30095){
var self__ = this;
var _30095__$1 = this;
return self__.meta30094;
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30096 = (function (map_LT_,f,ch,meta30094,_,fn1,meta30097){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30094 = meta30094;
this._ = _;
this.fn1 = fn1;
this.meta30097 = meta30097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30098,meta30097__$1){
var self__ = this;
var _30098__$1 = this;
return (new cljs.core.async.t_cljs$core$async30096(self__.map_LT_,self__.f,self__.ch,self__.meta30094,self__._,self__.fn1,meta30097__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30098){
var self__ = this;
var _30098__$1 = this;
return self__.meta30097;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30086_SHARP_){
return f1.call(null,(((p1__30086_SHARP_ == null))?null:self__.f.call(null,p1__30086_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30096.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30094","meta30094",-896825575,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30093","cljs.core.async/t_cljs$core$async30093",-1530212020,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30097","meta30097",-276448642,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30096";

cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30096");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30096 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30096(map_LT___$1,f__$1,ch__$1,meta30094__$1,___$2,fn1__$1,meta30097){
return (new cljs.core.async.t_cljs$core$async30096(map_LT___$1,f__$1,ch__$1,meta30094__$1,___$2,fn1__$1,meta30097));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30096(self__.map_LT_,self__.f,self__.ch,self__.meta30094,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24749__auto__ = ret;
if(cljs.core.truth_(and__24749__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24749__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30094","meta30094",-896825575,null)], null);
});

cljs.core.async.t_cljs$core$async30093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30093";

cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30093");
});

cljs.core.async.__GT_t_cljs$core$async30093 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30093(map_LT___$1,f__$1,ch__$1,meta30094){
return (new cljs.core.async.t_cljs$core$async30093(map_LT___$1,f__$1,ch__$1,meta30094));
});

}

return (new cljs.core.async.t_cljs$core$async30093(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30102 = (function (map_GT_,f,ch,meta30103){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30103 = meta30103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30104,meta30103__$1){
var self__ = this;
var _30104__$1 = this;
return (new cljs.core.async.t_cljs$core$async30102(self__.map_GT_,self__.f,self__.ch,meta30103__$1));
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30104){
var self__ = this;
var _30104__$1 = this;
return self__.meta30103;
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30103","meta30103",34994744,null)], null);
});

cljs.core.async.t_cljs$core$async30102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30102";

cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30102");
});

cljs.core.async.__GT_t_cljs$core$async30102 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30102(map_GT___$1,f__$1,ch__$1,meta30103){
return (new cljs.core.async.t_cljs$core$async30102(map_GT___$1,f__$1,ch__$1,meta30103));
});

}

return (new cljs.core.async.t_cljs$core$async30102(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30108 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30108 = (function (filter_GT_,p,ch,meta30109){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30109 = meta30109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30110,meta30109__$1){
var self__ = this;
var _30110__$1 = this;
return (new cljs.core.async.t_cljs$core$async30108(self__.filter_GT_,self__.p,self__.ch,meta30109__$1));
});

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30110){
var self__ = this;
var _30110__$1 = this;
return self__.meta30109;
});

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30109","meta30109",866476337,null)], null);
});

cljs.core.async.t_cljs$core$async30108.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30108";

cljs.core.async.t_cljs$core$async30108.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30108");
});

cljs.core.async.__GT_t_cljs$core$async30108 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30108(filter_GT___$1,p__$1,ch__$1,meta30109){
return (new cljs.core.async.t_cljs$core$async30108(filter_GT___$1,p__$1,ch__$1,meta30109));
});

}

return (new cljs.core.async.t_cljs$core$async30108(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30111 = [];
var len__25836__auto___30155 = arguments.length;
var i__25837__auto___30156 = (0);
while(true){
if((i__25837__auto___30156 < len__25836__auto___30155)){
args30111.push((arguments[i__25837__auto___30156]));

var G__30157 = (i__25837__auto___30156 + (1));
i__25837__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var G__30113 = args30111.length;
switch (G__30113) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30111.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27887__auto___30159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___30159,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___30159,out){
return (function (state_30134){
var state_val_30135 = (state_30134[(1)]);
if((state_val_30135 === (7))){
var inst_30130 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
var statearr_30136_30160 = state_30134__$1;
(statearr_30136_30160[(2)] = inst_30130);

(statearr_30136_30160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (1))){
var state_30134__$1 = state_30134;
var statearr_30137_30161 = state_30134__$1;
(statearr_30137_30161[(2)] = null);

(statearr_30137_30161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (4))){
var inst_30116 = (state_30134[(7)]);
var inst_30116__$1 = (state_30134[(2)]);
var inst_30117 = (inst_30116__$1 == null);
var state_30134__$1 = (function (){var statearr_30138 = state_30134;
(statearr_30138[(7)] = inst_30116__$1);

return statearr_30138;
})();
if(cljs.core.truth_(inst_30117)){
var statearr_30139_30162 = state_30134__$1;
(statearr_30139_30162[(1)] = (5));

} else {
var statearr_30140_30163 = state_30134__$1;
(statearr_30140_30163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (6))){
var inst_30116 = (state_30134[(7)]);
var inst_30121 = p.call(null,inst_30116);
var state_30134__$1 = state_30134;
if(cljs.core.truth_(inst_30121)){
var statearr_30141_30164 = state_30134__$1;
(statearr_30141_30164[(1)] = (8));

} else {
var statearr_30142_30165 = state_30134__$1;
(statearr_30142_30165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (3))){
var inst_30132 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30134__$1,inst_30132);
} else {
if((state_val_30135 === (2))){
var state_30134__$1 = state_30134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30134__$1,(4),ch);
} else {
if((state_val_30135 === (11))){
var inst_30124 = (state_30134[(2)]);
var state_30134__$1 = state_30134;
var statearr_30143_30166 = state_30134__$1;
(statearr_30143_30166[(2)] = inst_30124);

(statearr_30143_30166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (9))){
var state_30134__$1 = state_30134;
var statearr_30144_30167 = state_30134__$1;
(statearr_30144_30167[(2)] = null);

(statearr_30144_30167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (5))){
var inst_30119 = cljs.core.async.close_BANG_.call(null,out);
var state_30134__$1 = state_30134;
var statearr_30145_30168 = state_30134__$1;
(statearr_30145_30168[(2)] = inst_30119);

(statearr_30145_30168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (10))){
var inst_30127 = (state_30134[(2)]);
var state_30134__$1 = (function (){var statearr_30146 = state_30134;
(statearr_30146[(8)] = inst_30127);

return statearr_30146;
})();
var statearr_30147_30169 = state_30134__$1;
(statearr_30147_30169[(2)] = null);

(statearr_30147_30169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30135 === (8))){
var inst_30116 = (state_30134[(7)]);
var state_30134__$1 = state_30134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30134__$1,(11),out,inst_30116);
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
});})(c__27887__auto___30159,out))
;
return ((function (switch__26780__auto__,c__27887__auto___30159,out){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_30151 = [null,null,null,null,null,null,null,null,null];
(statearr_30151[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_30151[(1)] = (1));

return statearr_30151;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_30134){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_30134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30152){if((e30152 instanceof Object)){
var ex__26784__auto__ = e30152;
var statearr_30153_30170 = state_30134;
(statearr_30153_30170[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30171 = state_30134;
state_30134 = G__30171;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_30134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_30134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___30159,out))
})();
var state__27889__auto__ = (function (){var statearr_30154 = f__27888__auto__.call(null);
(statearr_30154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___30159);

return statearr_30154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___30159,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30172 = [];
var len__25836__auto___30175 = arguments.length;
var i__25837__auto___30176 = (0);
while(true){
if((i__25837__auto___30176 < len__25836__auto___30175)){
args30172.push((arguments[i__25837__auto___30176]));

var G__30177 = (i__25837__auto___30176 + (1));
i__25837__auto___30176 = G__30177;
continue;
} else {
}
break;
}

var G__30174 = args30172.length;
switch (G__30174) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30172.length)].join('')));

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
var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__){
return (function (state_30344){
var state_val_30345 = (state_30344[(1)]);
if((state_val_30345 === (7))){
var inst_30340 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30346_30387 = state_30344__$1;
(statearr_30346_30387[(2)] = inst_30340);

(statearr_30346_30387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (20))){
var inst_30310 = (state_30344[(7)]);
var inst_30321 = (state_30344[(2)]);
var inst_30322 = cljs.core.next.call(null,inst_30310);
var inst_30296 = inst_30322;
var inst_30297 = null;
var inst_30298 = (0);
var inst_30299 = (0);
var state_30344__$1 = (function (){var statearr_30347 = state_30344;
(statearr_30347[(8)] = inst_30297);

(statearr_30347[(9)] = inst_30321);

(statearr_30347[(10)] = inst_30296);

(statearr_30347[(11)] = inst_30299);

(statearr_30347[(12)] = inst_30298);

return statearr_30347;
})();
var statearr_30348_30388 = state_30344__$1;
(statearr_30348_30388[(2)] = null);

(statearr_30348_30388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (1))){
var state_30344__$1 = state_30344;
var statearr_30349_30389 = state_30344__$1;
(statearr_30349_30389[(2)] = null);

(statearr_30349_30389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (4))){
var inst_30285 = (state_30344[(13)]);
var inst_30285__$1 = (state_30344[(2)]);
var inst_30286 = (inst_30285__$1 == null);
var state_30344__$1 = (function (){var statearr_30350 = state_30344;
(statearr_30350[(13)] = inst_30285__$1);

return statearr_30350;
})();
if(cljs.core.truth_(inst_30286)){
var statearr_30351_30390 = state_30344__$1;
(statearr_30351_30390[(1)] = (5));

} else {
var statearr_30352_30391 = state_30344__$1;
(statearr_30352_30391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (15))){
var state_30344__$1 = state_30344;
var statearr_30356_30392 = state_30344__$1;
(statearr_30356_30392[(2)] = null);

(statearr_30356_30392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (21))){
var state_30344__$1 = state_30344;
var statearr_30357_30393 = state_30344__$1;
(statearr_30357_30393[(2)] = null);

(statearr_30357_30393[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (13))){
var inst_30297 = (state_30344[(8)]);
var inst_30296 = (state_30344[(10)]);
var inst_30299 = (state_30344[(11)]);
var inst_30298 = (state_30344[(12)]);
var inst_30306 = (state_30344[(2)]);
var inst_30307 = (inst_30299 + (1));
var tmp30353 = inst_30297;
var tmp30354 = inst_30296;
var tmp30355 = inst_30298;
var inst_30296__$1 = tmp30354;
var inst_30297__$1 = tmp30353;
var inst_30298__$1 = tmp30355;
var inst_30299__$1 = inst_30307;
var state_30344__$1 = (function (){var statearr_30358 = state_30344;
(statearr_30358[(8)] = inst_30297__$1);

(statearr_30358[(14)] = inst_30306);

(statearr_30358[(10)] = inst_30296__$1);

(statearr_30358[(11)] = inst_30299__$1);

(statearr_30358[(12)] = inst_30298__$1);

return statearr_30358;
})();
var statearr_30359_30394 = state_30344__$1;
(statearr_30359_30394[(2)] = null);

(statearr_30359_30394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (22))){
var state_30344__$1 = state_30344;
var statearr_30360_30395 = state_30344__$1;
(statearr_30360_30395[(2)] = null);

(statearr_30360_30395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (6))){
var inst_30285 = (state_30344[(13)]);
var inst_30294 = f.call(null,inst_30285);
var inst_30295 = cljs.core.seq.call(null,inst_30294);
var inst_30296 = inst_30295;
var inst_30297 = null;
var inst_30298 = (0);
var inst_30299 = (0);
var state_30344__$1 = (function (){var statearr_30361 = state_30344;
(statearr_30361[(8)] = inst_30297);

(statearr_30361[(10)] = inst_30296);

(statearr_30361[(11)] = inst_30299);

(statearr_30361[(12)] = inst_30298);

return statearr_30361;
})();
var statearr_30362_30396 = state_30344__$1;
(statearr_30362_30396[(2)] = null);

(statearr_30362_30396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (17))){
var inst_30310 = (state_30344[(7)]);
var inst_30314 = cljs.core.chunk_first.call(null,inst_30310);
var inst_30315 = cljs.core.chunk_rest.call(null,inst_30310);
var inst_30316 = cljs.core.count.call(null,inst_30314);
var inst_30296 = inst_30315;
var inst_30297 = inst_30314;
var inst_30298 = inst_30316;
var inst_30299 = (0);
var state_30344__$1 = (function (){var statearr_30363 = state_30344;
(statearr_30363[(8)] = inst_30297);

(statearr_30363[(10)] = inst_30296);

(statearr_30363[(11)] = inst_30299);

(statearr_30363[(12)] = inst_30298);

return statearr_30363;
})();
var statearr_30364_30397 = state_30344__$1;
(statearr_30364_30397[(2)] = null);

(statearr_30364_30397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (3))){
var inst_30342 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else {
if((state_val_30345 === (12))){
var inst_30330 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30365_30398 = state_30344__$1;
(statearr_30365_30398[(2)] = inst_30330);

(statearr_30365_30398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (2))){
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30344__$1,(4),in$);
} else {
if((state_val_30345 === (23))){
var inst_30338 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30366_30399 = state_30344__$1;
(statearr_30366_30399[(2)] = inst_30338);

(statearr_30366_30399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (19))){
var inst_30325 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30367_30400 = state_30344__$1;
(statearr_30367_30400[(2)] = inst_30325);

(statearr_30367_30400[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (11))){
var inst_30310 = (state_30344[(7)]);
var inst_30296 = (state_30344[(10)]);
var inst_30310__$1 = cljs.core.seq.call(null,inst_30296);
var state_30344__$1 = (function (){var statearr_30368 = state_30344;
(statearr_30368[(7)] = inst_30310__$1);

return statearr_30368;
})();
if(inst_30310__$1){
var statearr_30369_30401 = state_30344__$1;
(statearr_30369_30401[(1)] = (14));

} else {
var statearr_30370_30402 = state_30344__$1;
(statearr_30370_30402[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (9))){
var inst_30332 = (state_30344[(2)]);
var inst_30333 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30344__$1 = (function (){var statearr_30371 = state_30344;
(statearr_30371[(15)] = inst_30332);

return statearr_30371;
})();
if(cljs.core.truth_(inst_30333)){
var statearr_30372_30403 = state_30344__$1;
(statearr_30372_30403[(1)] = (21));

} else {
var statearr_30373_30404 = state_30344__$1;
(statearr_30373_30404[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (5))){
var inst_30288 = cljs.core.async.close_BANG_.call(null,out);
var state_30344__$1 = state_30344;
var statearr_30374_30405 = state_30344__$1;
(statearr_30374_30405[(2)] = inst_30288);

(statearr_30374_30405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (14))){
var inst_30310 = (state_30344[(7)]);
var inst_30312 = cljs.core.chunked_seq_QMARK_.call(null,inst_30310);
var state_30344__$1 = state_30344;
if(inst_30312){
var statearr_30375_30406 = state_30344__$1;
(statearr_30375_30406[(1)] = (17));

} else {
var statearr_30376_30407 = state_30344__$1;
(statearr_30376_30407[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (16))){
var inst_30328 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30377_30408 = state_30344__$1;
(statearr_30377_30408[(2)] = inst_30328);

(statearr_30377_30408[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (10))){
var inst_30297 = (state_30344[(8)]);
var inst_30299 = (state_30344[(11)]);
var inst_30304 = cljs.core._nth.call(null,inst_30297,inst_30299);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(13),out,inst_30304);
} else {
if((state_val_30345 === (18))){
var inst_30310 = (state_30344[(7)]);
var inst_30319 = cljs.core.first.call(null,inst_30310);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(20),out,inst_30319);
} else {
if((state_val_30345 === (8))){
var inst_30299 = (state_30344[(11)]);
var inst_30298 = (state_30344[(12)]);
var inst_30301 = (inst_30299 < inst_30298);
var inst_30302 = inst_30301;
var state_30344__$1 = state_30344;
if(cljs.core.truth_(inst_30302)){
var statearr_30378_30409 = state_30344__$1;
(statearr_30378_30409[(1)] = (10));

} else {
var statearr_30379_30410 = state_30344__$1;
(statearr_30379_30410[(1)] = (11));

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
});})(c__27887__auto__))
;
return ((function (switch__26780__auto__,c__27887__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26781__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26781__auto____0 = (function (){
var statearr_30383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30383[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26781__auto__);

(statearr_30383[(1)] = (1));

return statearr_30383;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26781__auto____1 = (function (state_30344){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_30344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30384){if((e30384 instanceof Object)){
var ex__26784__auto__ = e30384;
var statearr_30385_30411 = state_30344;
(statearr_30385_30411[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30412 = state_30344;
state_30344 = G__30412;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26781__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26781__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26781__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26781__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__))
})();
var state__27889__auto__ = (function (){var statearr_30386 = f__27888__auto__.call(null);
(statearr_30386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_30386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__))
);

return c__27887__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30413 = [];
var len__25836__auto___30416 = arguments.length;
var i__25837__auto___30417 = (0);
while(true){
if((i__25837__auto___30417 < len__25836__auto___30416)){
args30413.push((arguments[i__25837__auto___30417]));

var G__30418 = (i__25837__auto___30417 + (1));
i__25837__auto___30417 = G__30418;
continue;
} else {
}
break;
}

var G__30415 = args30413.length;
switch (G__30415) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30413.length)].join('')));

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
var args30420 = [];
var len__25836__auto___30423 = arguments.length;
var i__25837__auto___30424 = (0);
while(true){
if((i__25837__auto___30424 < len__25836__auto___30423)){
args30420.push((arguments[i__25837__auto___30424]));

var G__30425 = (i__25837__auto___30424 + (1));
i__25837__auto___30424 = G__30425;
continue;
} else {
}
break;
}

var G__30422 = args30420.length;
switch (G__30422) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30420.length)].join('')));

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
var args30427 = [];
var len__25836__auto___30478 = arguments.length;
var i__25837__auto___30479 = (0);
while(true){
if((i__25837__auto___30479 < len__25836__auto___30478)){
args30427.push((arguments[i__25837__auto___30479]));

var G__30480 = (i__25837__auto___30479 + (1));
i__25837__auto___30479 = G__30480;
continue;
} else {
}
break;
}

var G__30429 = args30427.length;
switch (G__30429) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30427.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27887__auto___30482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___30482,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___30482,out){
return (function (state_30453){
var state_val_30454 = (state_30453[(1)]);
if((state_val_30454 === (7))){
var inst_30448 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30455_30483 = state_30453__$1;
(statearr_30455_30483[(2)] = inst_30448);

(statearr_30455_30483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (1))){
var inst_30430 = null;
var state_30453__$1 = (function (){var statearr_30456 = state_30453;
(statearr_30456[(7)] = inst_30430);

return statearr_30456;
})();
var statearr_30457_30484 = state_30453__$1;
(statearr_30457_30484[(2)] = null);

(statearr_30457_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (4))){
var inst_30433 = (state_30453[(8)]);
var inst_30433__$1 = (state_30453[(2)]);
var inst_30434 = (inst_30433__$1 == null);
var inst_30435 = cljs.core.not.call(null,inst_30434);
var state_30453__$1 = (function (){var statearr_30458 = state_30453;
(statearr_30458[(8)] = inst_30433__$1);

return statearr_30458;
})();
if(inst_30435){
var statearr_30459_30485 = state_30453__$1;
(statearr_30459_30485[(1)] = (5));

} else {
var statearr_30460_30486 = state_30453__$1;
(statearr_30460_30486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (6))){
var state_30453__$1 = state_30453;
var statearr_30461_30487 = state_30453__$1;
(statearr_30461_30487[(2)] = null);

(statearr_30461_30487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (3))){
var inst_30450 = (state_30453[(2)]);
var inst_30451 = cljs.core.async.close_BANG_.call(null,out);
var state_30453__$1 = (function (){var statearr_30462 = state_30453;
(statearr_30462[(9)] = inst_30450);

return statearr_30462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30453__$1,inst_30451);
} else {
if((state_val_30454 === (2))){
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30453__$1,(4),ch);
} else {
if((state_val_30454 === (11))){
var inst_30433 = (state_30453[(8)]);
var inst_30442 = (state_30453[(2)]);
var inst_30430 = inst_30433;
var state_30453__$1 = (function (){var statearr_30463 = state_30453;
(statearr_30463[(7)] = inst_30430);

(statearr_30463[(10)] = inst_30442);

return statearr_30463;
})();
var statearr_30464_30488 = state_30453__$1;
(statearr_30464_30488[(2)] = null);

(statearr_30464_30488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (9))){
var inst_30433 = (state_30453[(8)]);
var state_30453__$1 = state_30453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30453__$1,(11),out,inst_30433);
} else {
if((state_val_30454 === (5))){
var inst_30430 = (state_30453[(7)]);
var inst_30433 = (state_30453[(8)]);
var inst_30437 = cljs.core._EQ_.call(null,inst_30433,inst_30430);
var state_30453__$1 = state_30453;
if(inst_30437){
var statearr_30466_30489 = state_30453__$1;
(statearr_30466_30489[(1)] = (8));

} else {
var statearr_30467_30490 = state_30453__$1;
(statearr_30467_30490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (10))){
var inst_30445 = (state_30453[(2)]);
var state_30453__$1 = state_30453;
var statearr_30468_30491 = state_30453__$1;
(statearr_30468_30491[(2)] = inst_30445);

(statearr_30468_30491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30454 === (8))){
var inst_30430 = (state_30453[(7)]);
var tmp30465 = inst_30430;
var inst_30430__$1 = tmp30465;
var state_30453__$1 = (function (){var statearr_30469 = state_30453;
(statearr_30469[(7)] = inst_30430__$1);

return statearr_30469;
})();
var statearr_30470_30492 = state_30453__$1;
(statearr_30470_30492[(2)] = null);

(statearr_30470_30492[(1)] = (2));


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
});})(c__27887__auto___30482,out))
;
return ((function (switch__26780__auto__,c__27887__auto___30482,out){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_30474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30474[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_30474[(1)] = (1));

return statearr_30474;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_30453){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_30453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30475){if((e30475 instanceof Object)){
var ex__26784__auto__ = e30475;
var statearr_30476_30493 = state_30453;
(statearr_30476_30493[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30494 = state_30453;
state_30453 = G__30494;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_30453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_30453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___30482,out))
})();
var state__27889__auto__ = (function (){var statearr_30477 = f__27888__auto__.call(null);
(statearr_30477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___30482);

return statearr_30477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___30482,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30495 = [];
var len__25836__auto___30565 = arguments.length;
var i__25837__auto___30566 = (0);
while(true){
if((i__25837__auto___30566 < len__25836__auto___30565)){
args30495.push((arguments[i__25837__auto___30566]));

var G__30567 = (i__25837__auto___30566 + (1));
i__25837__auto___30566 = G__30567;
continue;
} else {
}
break;
}

var G__30497 = args30495.length;
switch (G__30497) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30495.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27887__auto___30569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___30569,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___30569,out){
return (function (state_30535){
var state_val_30536 = (state_30535[(1)]);
if((state_val_30536 === (7))){
var inst_30531 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30537_30570 = state_30535__$1;
(statearr_30537_30570[(2)] = inst_30531);

(statearr_30537_30570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (1))){
var inst_30498 = (new Array(n));
var inst_30499 = inst_30498;
var inst_30500 = (0);
var state_30535__$1 = (function (){var statearr_30538 = state_30535;
(statearr_30538[(7)] = inst_30499);

(statearr_30538[(8)] = inst_30500);

return statearr_30538;
})();
var statearr_30539_30571 = state_30535__$1;
(statearr_30539_30571[(2)] = null);

(statearr_30539_30571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (4))){
var inst_30503 = (state_30535[(9)]);
var inst_30503__$1 = (state_30535[(2)]);
var inst_30504 = (inst_30503__$1 == null);
var inst_30505 = cljs.core.not.call(null,inst_30504);
var state_30535__$1 = (function (){var statearr_30540 = state_30535;
(statearr_30540[(9)] = inst_30503__$1);

return statearr_30540;
})();
if(inst_30505){
var statearr_30541_30572 = state_30535__$1;
(statearr_30541_30572[(1)] = (5));

} else {
var statearr_30542_30573 = state_30535__$1;
(statearr_30542_30573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (15))){
var inst_30525 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30543_30574 = state_30535__$1;
(statearr_30543_30574[(2)] = inst_30525);

(statearr_30543_30574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (13))){
var state_30535__$1 = state_30535;
var statearr_30544_30575 = state_30535__$1;
(statearr_30544_30575[(2)] = null);

(statearr_30544_30575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (6))){
var inst_30500 = (state_30535[(8)]);
var inst_30521 = (inst_30500 > (0));
var state_30535__$1 = state_30535;
if(cljs.core.truth_(inst_30521)){
var statearr_30545_30576 = state_30535__$1;
(statearr_30545_30576[(1)] = (12));

} else {
var statearr_30546_30577 = state_30535__$1;
(statearr_30546_30577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (3))){
var inst_30533 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30535__$1,inst_30533);
} else {
if((state_val_30536 === (12))){
var inst_30499 = (state_30535[(7)]);
var inst_30523 = cljs.core.vec.call(null,inst_30499);
var state_30535__$1 = state_30535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30535__$1,(15),out,inst_30523);
} else {
if((state_val_30536 === (2))){
var state_30535__$1 = state_30535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30535__$1,(4),ch);
} else {
if((state_val_30536 === (11))){
var inst_30515 = (state_30535[(2)]);
var inst_30516 = (new Array(n));
var inst_30499 = inst_30516;
var inst_30500 = (0);
var state_30535__$1 = (function (){var statearr_30547 = state_30535;
(statearr_30547[(7)] = inst_30499);

(statearr_30547[(8)] = inst_30500);

(statearr_30547[(10)] = inst_30515);

return statearr_30547;
})();
var statearr_30548_30578 = state_30535__$1;
(statearr_30548_30578[(2)] = null);

(statearr_30548_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (9))){
var inst_30499 = (state_30535[(7)]);
var inst_30513 = cljs.core.vec.call(null,inst_30499);
var state_30535__$1 = state_30535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30535__$1,(11),out,inst_30513);
} else {
if((state_val_30536 === (5))){
var inst_30499 = (state_30535[(7)]);
var inst_30503 = (state_30535[(9)]);
var inst_30508 = (state_30535[(11)]);
var inst_30500 = (state_30535[(8)]);
var inst_30507 = (inst_30499[inst_30500] = inst_30503);
var inst_30508__$1 = (inst_30500 + (1));
var inst_30509 = (inst_30508__$1 < n);
var state_30535__$1 = (function (){var statearr_30549 = state_30535;
(statearr_30549[(11)] = inst_30508__$1);

(statearr_30549[(12)] = inst_30507);

return statearr_30549;
})();
if(cljs.core.truth_(inst_30509)){
var statearr_30550_30579 = state_30535__$1;
(statearr_30550_30579[(1)] = (8));

} else {
var statearr_30551_30580 = state_30535__$1;
(statearr_30551_30580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (14))){
var inst_30528 = (state_30535[(2)]);
var inst_30529 = cljs.core.async.close_BANG_.call(null,out);
var state_30535__$1 = (function (){var statearr_30553 = state_30535;
(statearr_30553[(13)] = inst_30528);

return statearr_30553;
})();
var statearr_30554_30581 = state_30535__$1;
(statearr_30554_30581[(2)] = inst_30529);

(statearr_30554_30581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (10))){
var inst_30519 = (state_30535[(2)]);
var state_30535__$1 = state_30535;
var statearr_30555_30582 = state_30535__$1;
(statearr_30555_30582[(2)] = inst_30519);

(statearr_30555_30582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30536 === (8))){
var inst_30499 = (state_30535[(7)]);
var inst_30508 = (state_30535[(11)]);
var tmp30552 = inst_30499;
var inst_30499__$1 = tmp30552;
var inst_30500 = inst_30508;
var state_30535__$1 = (function (){var statearr_30556 = state_30535;
(statearr_30556[(7)] = inst_30499__$1);

(statearr_30556[(8)] = inst_30500);

return statearr_30556;
})();
var statearr_30557_30583 = state_30535__$1;
(statearr_30557_30583[(2)] = null);

(statearr_30557_30583[(1)] = (2));


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
});})(c__27887__auto___30569,out))
;
return ((function (switch__26780__auto__,c__27887__auto___30569,out){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_30561 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30561[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_30561[(1)] = (1));

return statearr_30561;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_30535){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_30535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30562){if((e30562 instanceof Object)){
var ex__26784__auto__ = e30562;
var statearr_30563_30584 = state_30535;
(statearr_30563_30584[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30585 = state_30535;
state_30535 = G__30585;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_30535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_30535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___30569,out))
})();
var state__27889__auto__ = (function (){var statearr_30564 = f__27888__auto__.call(null);
(statearr_30564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___30569);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___30569,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30586 = [];
var len__25836__auto___30660 = arguments.length;
var i__25837__auto___30661 = (0);
while(true){
if((i__25837__auto___30661 < len__25836__auto___30660)){
args30586.push((arguments[i__25837__auto___30661]));

var G__30662 = (i__25837__auto___30661 + (1));
i__25837__auto___30661 = G__30662;
continue;
} else {
}
break;
}

var G__30588 = args30586.length;
switch (G__30588) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30586.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27887__auto___30664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___30664,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___30664,out){
return (function (state_30630){
var state_val_30631 = (state_30630[(1)]);
if((state_val_30631 === (7))){
var inst_30626 = (state_30630[(2)]);
var state_30630__$1 = state_30630;
var statearr_30632_30665 = state_30630__$1;
(statearr_30632_30665[(2)] = inst_30626);

(statearr_30632_30665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (1))){
var inst_30589 = [];
var inst_30590 = inst_30589;
var inst_30591 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30630__$1 = (function (){var statearr_30633 = state_30630;
(statearr_30633[(7)] = inst_30591);

(statearr_30633[(8)] = inst_30590);

return statearr_30633;
})();
var statearr_30634_30666 = state_30630__$1;
(statearr_30634_30666[(2)] = null);

(statearr_30634_30666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (4))){
var inst_30594 = (state_30630[(9)]);
var inst_30594__$1 = (state_30630[(2)]);
var inst_30595 = (inst_30594__$1 == null);
var inst_30596 = cljs.core.not.call(null,inst_30595);
var state_30630__$1 = (function (){var statearr_30635 = state_30630;
(statearr_30635[(9)] = inst_30594__$1);

return statearr_30635;
})();
if(inst_30596){
var statearr_30636_30667 = state_30630__$1;
(statearr_30636_30667[(1)] = (5));

} else {
var statearr_30637_30668 = state_30630__$1;
(statearr_30637_30668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (15))){
var inst_30620 = (state_30630[(2)]);
var state_30630__$1 = state_30630;
var statearr_30638_30669 = state_30630__$1;
(statearr_30638_30669[(2)] = inst_30620);

(statearr_30638_30669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (13))){
var state_30630__$1 = state_30630;
var statearr_30639_30670 = state_30630__$1;
(statearr_30639_30670[(2)] = null);

(statearr_30639_30670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (6))){
var inst_30590 = (state_30630[(8)]);
var inst_30615 = inst_30590.length;
var inst_30616 = (inst_30615 > (0));
var state_30630__$1 = state_30630;
if(cljs.core.truth_(inst_30616)){
var statearr_30640_30671 = state_30630__$1;
(statearr_30640_30671[(1)] = (12));

} else {
var statearr_30641_30672 = state_30630__$1;
(statearr_30641_30672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (3))){
var inst_30628 = (state_30630[(2)]);
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30630__$1,inst_30628);
} else {
if((state_val_30631 === (12))){
var inst_30590 = (state_30630[(8)]);
var inst_30618 = cljs.core.vec.call(null,inst_30590);
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30630__$1,(15),out,inst_30618);
} else {
if((state_val_30631 === (2))){
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30630__$1,(4),ch);
} else {
if((state_val_30631 === (11))){
var inst_30598 = (state_30630[(10)]);
var inst_30594 = (state_30630[(9)]);
var inst_30608 = (state_30630[(2)]);
var inst_30609 = [];
var inst_30610 = inst_30609.push(inst_30594);
var inst_30590 = inst_30609;
var inst_30591 = inst_30598;
var state_30630__$1 = (function (){var statearr_30642 = state_30630;
(statearr_30642[(7)] = inst_30591);

(statearr_30642[(8)] = inst_30590);

(statearr_30642[(11)] = inst_30610);

(statearr_30642[(12)] = inst_30608);

return statearr_30642;
})();
var statearr_30643_30673 = state_30630__$1;
(statearr_30643_30673[(2)] = null);

(statearr_30643_30673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (9))){
var inst_30590 = (state_30630[(8)]);
var inst_30606 = cljs.core.vec.call(null,inst_30590);
var state_30630__$1 = state_30630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30630__$1,(11),out,inst_30606);
} else {
if((state_val_30631 === (5))){
var inst_30598 = (state_30630[(10)]);
var inst_30591 = (state_30630[(7)]);
var inst_30594 = (state_30630[(9)]);
var inst_30598__$1 = f.call(null,inst_30594);
var inst_30599 = cljs.core._EQ_.call(null,inst_30598__$1,inst_30591);
var inst_30600 = cljs.core.keyword_identical_QMARK_.call(null,inst_30591,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30601 = (inst_30599) || (inst_30600);
var state_30630__$1 = (function (){var statearr_30644 = state_30630;
(statearr_30644[(10)] = inst_30598__$1);

return statearr_30644;
})();
if(cljs.core.truth_(inst_30601)){
var statearr_30645_30674 = state_30630__$1;
(statearr_30645_30674[(1)] = (8));

} else {
var statearr_30646_30675 = state_30630__$1;
(statearr_30646_30675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (14))){
var inst_30623 = (state_30630[(2)]);
var inst_30624 = cljs.core.async.close_BANG_.call(null,out);
var state_30630__$1 = (function (){var statearr_30648 = state_30630;
(statearr_30648[(13)] = inst_30623);

return statearr_30648;
})();
var statearr_30649_30676 = state_30630__$1;
(statearr_30649_30676[(2)] = inst_30624);

(statearr_30649_30676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (10))){
var inst_30613 = (state_30630[(2)]);
var state_30630__$1 = state_30630;
var statearr_30650_30677 = state_30630__$1;
(statearr_30650_30677[(2)] = inst_30613);

(statearr_30650_30677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30631 === (8))){
var inst_30598 = (state_30630[(10)]);
var inst_30590 = (state_30630[(8)]);
var inst_30594 = (state_30630[(9)]);
var inst_30603 = inst_30590.push(inst_30594);
var tmp30647 = inst_30590;
var inst_30590__$1 = tmp30647;
var inst_30591 = inst_30598;
var state_30630__$1 = (function (){var statearr_30651 = state_30630;
(statearr_30651[(7)] = inst_30591);

(statearr_30651[(8)] = inst_30590__$1);

(statearr_30651[(14)] = inst_30603);

return statearr_30651;
})();
var statearr_30652_30678 = state_30630__$1;
(statearr_30652_30678[(2)] = null);

(statearr_30652_30678[(1)] = (2));


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
});})(c__27887__auto___30664,out))
;
return ((function (switch__26780__auto__,c__27887__auto___30664,out){
return (function() {
var cljs$core$async$state_machine__26781__auto__ = null;
var cljs$core$async$state_machine__26781__auto____0 = (function (){
var statearr_30656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30656[(0)] = cljs$core$async$state_machine__26781__auto__);

(statearr_30656[(1)] = (1));

return statearr_30656;
});
var cljs$core$async$state_machine__26781__auto____1 = (function (state_30630){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_30630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e30657){if((e30657 instanceof Object)){
var ex__26784__auto__ = e30657;
var statearr_30658_30679 = state_30630;
(statearr_30658_30679[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30680 = state_30630;
state_30630 = G__30680;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
cljs$core$async$state_machine__26781__auto__ = function(state_30630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26781__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26781__auto____1.call(this,state_30630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26781__auto____0;
cljs$core$async$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26781__auto____1;
return cljs$core$async$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___30664,out))
})();
var state__27889__auto__ = (function (){var statearr_30659 = f__27888__auto__.call(null);
(statearr_30659[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___30664);

return statearr_30659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___30664,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1616887327021