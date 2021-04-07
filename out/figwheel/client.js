// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35349 = [];
var len__25836__auto___35352 = arguments.length;
var i__25837__auto___35353 = (0);
while(true){
if((i__25837__auto___35353 < len__25836__auto___35352)){
args35349.push((arguments[i__25837__auto___35353]));

var G__35354 = (i__25837__auto___35353 + (1));
i__25837__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var G__35351 = args35349.length;
switch (G__35351) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35349.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25843__auto__ = [];
var len__25836__auto___35357 = arguments.length;
var i__25837__auto___35358 = (0);
while(true){
if((i__25837__auto___35358 < len__25836__auto___35357)){
args__25843__auto__.push((arguments[i__25837__auto___35358]));

var G__35359 = (i__25837__auto___35358 + (1));
i__25837__auto___35358 = G__35359;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35356){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35356));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25843__auto__ = [];
var len__25836__auto___35361 = arguments.length;
var i__25837__auto___35362 = (0);
while(true){
if((i__25837__auto___35362 < len__25836__auto___35361)){
args__25843__auto__.push((arguments[i__25837__auto___35362]));

var G__35363 = (i__25837__auto___35362 + (1));
i__25837__auto___35362 = G__35363;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35360){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35360));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35364 = cljs.core._EQ_;
var expr__35365 = (function (){var or__24761__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35368){if((e35368 instanceof Error)){
var e = e35368;
return false;
} else {
throw e35368;

}
}})();
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35364.call(null,"true",expr__35365))){
return true;
} else {
if(cljs.core.truth_(pred__35364.call(null,"false",expr__35365))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35365)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35370){if((e35370 instanceof Error)){
var e = e35370;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35370;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35371){
var map__35374 = p__35371;
var map__35374__$1 = ((((!((map__35374 == null)))?((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35374):map__35374);
var message = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35374__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24761__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24749__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24749__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24749__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27887__auto___35536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___35536,ch){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___35536,ch){
return (function (state_35505){
var state_val_35506 = (state_35505[(1)]);
if((state_val_35506 === (7))){
var inst_35501 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35507_35537 = state_35505__$1;
(statearr_35507_35537[(2)] = inst_35501);

(statearr_35507_35537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (1))){
var state_35505__$1 = state_35505;
var statearr_35508_35538 = state_35505__$1;
(statearr_35508_35538[(2)] = null);

(statearr_35508_35538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (4))){
var inst_35458 = (state_35505[(7)]);
var inst_35458__$1 = (state_35505[(2)]);
var state_35505__$1 = (function (){var statearr_35509 = state_35505;
(statearr_35509[(7)] = inst_35458__$1);

return statearr_35509;
})();
if(cljs.core.truth_(inst_35458__$1)){
var statearr_35510_35539 = state_35505__$1;
(statearr_35510_35539[(1)] = (5));

} else {
var statearr_35511_35540 = state_35505__$1;
(statearr_35511_35540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (15))){
var inst_35465 = (state_35505[(8)]);
var inst_35480 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35465);
var inst_35481 = cljs.core.first.call(null,inst_35480);
var inst_35482 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35481);
var inst_35483 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35482)].join('');
var inst_35484 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35483);
var state_35505__$1 = state_35505;
var statearr_35512_35541 = state_35505__$1;
(statearr_35512_35541[(2)] = inst_35484);

(statearr_35512_35541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (13))){
var inst_35489 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35513_35542 = state_35505__$1;
(statearr_35513_35542[(2)] = inst_35489);

(statearr_35513_35542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (6))){
var state_35505__$1 = state_35505;
var statearr_35514_35543 = state_35505__$1;
(statearr_35514_35543[(2)] = null);

(statearr_35514_35543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (17))){
var inst_35487 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35515_35544 = state_35505__$1;
(statearr_35515_35544[(2)] = inst_35487);

(statearr_35515_35544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (3))){
var inst_35503 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35505__$1,inst_35503);
} else {
if((state_val_35506 === (12))){
var inst_35464 = (state_35505[(9)]);
var inst_35478 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35464,opts);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35478)){
var statearr_35516_35545 = state_35505__$1;
(statearr_35516_35545[(1)] = (15));

} else {
var statearr_35517_35546 = state_35505__$1;
(statearr_35517_35546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (2))){
var state_35505__$1 = state_35505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35505__$1,(4),ch);
} else {
if((state_val_35506 === (11))){
var inst_35465 = (state_35505[(8)]);
var inst_35470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35471 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35465);
var inst_35472 = cljs.core.async.timeout.call(null,(1000));
var inst_35473 = [inst_35471,inst_35472];
var inst_35474 = (new cljs.core.PersistentVector(null,2,(5),inst_35470,inst_35473,null));
var state_35505__$1 = state_35505;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35505__$1,(14),inst_35474);
} else {
if((state_val_35506 === (9))){
var inst_35465 = (state_35505[(8)]);
var inst_35491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35492 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35465);
var inst_35493 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35492);
var inst_35494 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35493)].join('');
var inst_35495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35494);
var state_35505__$1 = (function (){var statearr_35518 = state_35505;
(statearr_35518[(10)] = inst_35491);

return statearr_35518;
})();
var statearr_35519_35547 = state_35505__$1;
(statearr_35519_35547[(2)] = inst_35495);

(statearr_35519_35547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (5))){
var inst_35458 = (state_35505[(7)]);
var inst_35460 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35461 = (new cljs.core.PersistentArrayMap(null,2,inst_35460,null));
var inst_35462 = (new cljs.core.PersistentHashSet(null,inst_35461,null));
var inst_35463 = figwheel.client.focus_msgs.call(null,inst_35462,inst_35458);
var inst_35464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35463);
var inst_35465 = cljs.core.first.call(null,inst_35463);
var inst_35466 = figwheel.client.autoload_QMARK_.call(null);
var state_35505__$1 = (function (){var statearr_35520 = state_35505;
(statearr_35520[(9)] = inst_35464);

(statearr_35520[(8)] = inst_35465);

return statearr_35520;
})();
if(cljs.core.truth_(inst_35466)){
var statearr_35521_35548 = state_35505__$1;
(statearr_35521_35548[(1)] = (8));

} else {
var statearr_35522_35549 = state_35505__$1;
(statearr_35522_35549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (14))){
var inst_35476 = (state_35505[(2)]);
var state_35505__$1 = state_35505;
var statearr_35523_35550 = state_35505__$1;
(statearr_35523_35550[(2)] = inst_35476);

(statearr_35523_35550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (16))){
var state_35505__$1 = state_35505;
var statearr_35524_35551 = state_35505__$1;
(statearr_35524_35551[(2)] = null);

(statearr_35524_35551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (10))){
var inst_35497 = (state_35505[(2)]);
var state_35505__$1 = (function (){var statearr_35525 = state_35505;
(statearr_35525[(11)] = inst_35497);

return statearr_35525;
})();
var statearr_35526_35552 = state_35505__$1;
(statearr_35526_35552[(2)] = null);

(statearr_35526_35552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35506 === (8))){
var inst_35464 = (state_35505[(9)]);
var inst_35468 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35464,opts);
var state_35505__$1 = state_35505;
if(cljs.core.truth_(inst_35468)){
var statearr_35527_35553 = state_35505__$1;
(statearr_35527_35553[(1)] = (11));

} else {
var statearr_35528_35554 = state_35505__$1;
(statearr_35528_35554[(1)] = (12));

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
});})(c__27887__auto___35536,ch))
;
return ((function (switch__26780__auto__,c__27887__auto___35536,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26781__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26781__auto____0 = (function (){
var statearr_35532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35532[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26781__auto__);

(statearr_35532[(1)] = (1));

return statearr_35532;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26781__auto____1 = (function (state_35505){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_35505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e35533){if((e35533 instanceof Object)){
var ex__26784__auto__ = e35533;
var statearr_35534_35555 = state_35505;
(statearr_35534_35555[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35556 = state_35505;
state_35505 = G__35556;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26781__auto__ = function(state_35505){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26781__auto____1.call(this,state_35505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26781__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26781__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___35536,ch))
})();
var state__27889__auto__ = (function (){var statearr_35535 = f__27888__auto__.call(null);
(statearr_35535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___35536);

return statearr_35535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___35536,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35557_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35557_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35560 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35560){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35559){if((e35559 instanceof Error)){
var e = e35559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35560], null));
} else {
var e = e35559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35560))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35561){
var map__35570 = p__35561;
var map__35570__$1 = ((((!((map__35570 == null)))?((((map__35570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35570):map__35570);
var opts = map__35570__$1;
var build_id = cljs.core.get.call(null,map__35570__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35570,map__35570__$1,opts,build_id){
return (function (p__35572){
var vec__35573 = p__35572;
var seq__35574 = cljs.core.seq.call(null,vec__35573);
var first__35575 = cljs.core.first.call(null,seq__35574);
var seq__35574__$1 = cljs.core.next.call(null,seq__35574);
var map__35576 = first__35575;
var map__35576__$1 = ((((!((map__35576 == null)))?((((map__35576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35576):map__35576);
var msg = map__35576__$1;
var msg_name = cljs.core.get.call(null,map__35576__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35574__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35573,seq__35574,first__35575,seq__35574__$1,map__35576,map__35576__$1,msg,msg_name,_,map__35570,map__35570__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35573,seq__35574,first__35575,seq__35574__$1,map__35576,map__35576__$1,msg,msg_name,_,map__35570,map__35570__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35570,map__35570__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35584){
var vec__35585 = p__35584;
var seq__35586 = cljs.core.seq.call(null,vec__35585);
var first__35587 = cljs.core.first.call(null,seq__35586);
var seq__35586__$1 = cljs.core.next.call(null,seq__35586);
var map__35588 = first__35587;
var map__35588__$1 = ((((!((map__35588 == null)))?((((map__35588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35588):map__35588);
var msg = map__35588__$1;
var msg_name = cljs.core.get.call(null,map__35588__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35586__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35590){
var map__35602 = p__35590;
var map__35602__$1 = ((((!((map__35602 == null)))?((((map__35602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35602):map__35602);
var on_compile_warning = cljs.core.get.call(null,map__35602__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35602__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35602,map__35602__$1,on_compile_warning,on_compile_fail){
return (function (p__35604){
var vec__35605 = p__35604;
var seq__35606 = cljs.core.seq.call(null,vec__35605);
var first__35607 = cljs.core.first.call(null,seq__35606);
var seq__35606__$1 = cljs.core.next.call(null,seq__35606);
var map__35608 = first__35607;
var map__35608__$1 = ((((!((map__35608 == null)))?((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var msg = map__35608__$1;
var msg_name = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35606__$1;
var pred__35610 = cljs.core._EQ_;
var expr__35611 = msg_name;
if(cljs.core.truth_(pred__35610.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35611))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35610.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35611))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35602,map__35602__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__,msg_hist,msg_names,msg){
return (function (state_35839){
var state_val_35840 = (state_35839[(1)]);
if((state_val_35840 === (7))){
var inst_35759 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35759)){
var statearr_35841_35891 = state_35839__$1;
(statearr_35841_35891[(1)] = (8));

} else {
var statearr_35842_35892 = state_35839__$1;
(statearr_35842_35892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (20))){
var inst_35833 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35843_35893 = state_35839__$1;
(statearr_35843_35893[(2)] = inst_35833);

(statearr_35843_35893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (27))){
var inst_35829 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35844_35894 = state_35839__$1;
(statearr_35844_35894[(2)] = inst_35829);

(statearr_35844_35894[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (1))){
var inst_35752 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35752)){
var statearr_35845_35895 = state_35839__$1;
(statearr_35845_35895[(1)] = (2));

} else {
var statearr_35846_35896 = state_35839__$1;
(statearr_35846_35896[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (24))){
var inst_35831 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35847_35897 = state_35839__$1;
(statearr_35847_35897[(2)] = inst_35831);

(statearr_35847_35897[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (4))){
var inst_35837 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35839__$1,inst_35837);
} else {
if((state_val_35840 === (15))){
var inst_35835 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35848_35898 = state_35839__$1;
(statearr_35848_35898[(2)] = inst_35835);

(statearr_35848_35898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (21))){
var inst_35788 = (state_35839[(2)]);
var inst_35789 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35790 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35789);
var state_35839__$1 = (function (){var statearr_35849 = state_35839;
(statearr_35849[(7)] = inst_35788);

return statearr_35849;
})();
var statearr_35850_35899 = state_35839__$1;
(statearr_35850_35899[(2)] = inst_35790);

(statearr_35850_35899[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (31))){
var inst_35818 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35818)){
var statearr_35851_35900 = state_35839__$1;
(statearr_35851_35900[(1)] = (34));

} else {
var statearr_35852_35901 = state_35839__$1;
(statearr_35852_35901[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (32))){
var inst_35827 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35853_35902 = state_35839__$1;
(statearr_35853_35902[(2)] = inst_35827);

(statearr_35853_35902[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (33))){
var inst_35814 = (state_35839[(2)]);
var inst_35815 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35816 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35815);
var state_35839__$1 = (function (){var statearr_35854 = state_35839;
(statearr_35854[(8)] = inst_35814);

return statearr_35854;
})();
var statearr_35855_35903 = state_35839__$1;
(statearr_35855_35903[(2)] = inst_35816);

(statearr_35855_35903[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (13))){
var inst_35773 = figwheel.client.heads_up.clear.call(null);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(16),inst_35773);
} else {
if((state_val_35840 === (22))){
var inst_35794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35795 = figwheel.client.heads_up.append_warning_message.call(null,inst_35794);
var state_35839__$1 = state_35839;
var statearr_35856_35904 = state_35839__$1;
(statearr_35856_35904[(2)] = inst_35795);

(statearr_35856_35904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (36))){
var inst_35825 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35857_35905 = state_35839__$1;
(statearr_35857_35905[(2)] = inst_35825);

(statearr_35857_35905[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (29))){
var inst_35805 = (state_35839[(2)]);
var inst_35806 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35807 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35806);
var state_35839__$1 = (function (){var statearr_35858 = state_35839;
(statearr_35858[(9)] = inst_35805);

return statearr_35858;
})();
var statearr_35859_35906 = state_35839__$1;
(statearr_35859_35906[(2)] = inst_35807);

(statearr_35859_35906[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (6))){
var inst_35754 = (state_35839[(10)]);
var state_35839__$1 = state_35839;
var statearr_35860_35907 = state_35839__$1;
(statearr_35860_35907[(2)] = inst_35754);

(statearr_35860_35907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (28))){
var inst_35801 = (state_35839[(2)]);
var inst_35802 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35803 = figwheel.client.heads_up.display_warning.call(null,inst_35802);
var state_35839__$1 = (function (){var statearr_35861 = state_35839;
(statearr_35861[(11)] = inst_35801);

return statearr_35861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(29),inst_35803);
} else {
if((state_val_35840 === (25))){
var inst_35799 = figwheel.client.heads_up.clear.call(null);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(28),inst_35799);
} else {
if((state_val_35840 === (34))){
var inst_35820 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(37),inst_35820);
} else {
if((state_val_35840 === (17))){
var inst_35779 = (state_35839[(2)]);
var inst_35780 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35781 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35780);
var state_35839__$1 = (function (){var statearr_35862 = state_35839;
(statearr_35862[(12)] = inst_35779);

return statearr_35862;
})();
var statearr_35863_35908 = state_35839__$1;
(statearr_35863_35908[(2)] = inst_35781);

(statearr_35863_35908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (3))){
var inst_35771 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35771)){
var statearr_35864_35909 = state_35839__$1;
(statearr_35864_35909[(1)] = (13));

} else {
var statearr_35865_35910 = state_35839__$1;
(statearr_35865_35910[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (12))){
var inst_35767 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35866_35911 = state_35839__$1;
(statearr_35866_35911[(2)] = inst_35767);

(statearr_35866_35911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (2))){
var inst_35754 = (state_35839[(10)]);
var inst_35754__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35839__$1 = (function (){var statearr_35867 = state_35839;
(statearr_35867[(10)] = inst_35754__$1);

return statearr_35867;
})();
if(cljs.core.truth_(inst_35754__$1)){
var statearr_35868_35912 = state_35839__$1;
(statearr_35868_35912[(1)] = (5));

} else {
var statearr_35869_35913 = state_35839__$1;
(statearr_35869_35913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (23))){
var inst_35797 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35797)){
var statearr_35870_35914 = state_35839__$1;
(statearr_35870_35914[(1)] = (25));

} else {
var statearr_35871_35915 = state_35839__$1;
(statearr_35871_35915[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (35))){
var state_35839__$1 = state_35839;
var statearr_35872_35916 = state_35839__$1;
(statearr_35872_35916[(2)] = null);

(statearr_35872_35916[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (19))){
var inst_35792 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35792)){
var statearr_35873_35917 = state_35839__$1;
(statearr_35873_35917[(1)] = (22));

} else {
var statearr_35874_35918 = state_35839__$1;
(statearr_35874_35918[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (11))){
var inst_35763 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35875_35919 = state_35839__$1;
(statearr_35875_35919[(2)] = inst_35763);

(statearr_35875_35919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (9))){
var inst_35765 = figwheel.client.heads_up.clear.call(null);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(12),inst_35765);
} else {
if((state_val_35840 === (5))){
var inst_35756 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35839__$1 = state_35839;
var statearr_35876_35920 = state_35839__$1;
(statearr_35876_35920[(2)] = inst_35756);

(statearr_35876_35920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (14))){
var inst_35783 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35783)){
var statearr_35877_35921 = state_35839__$1;
(statearr_35877_35921[(1)] = (18));

} else {
var statearr_35878_35922 = state_35839__$1;
(statearr_35878_35922[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (26))){
var inst_35809 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35839__$1 = state_35839;
if(cljs.core.truth_(inst_35809)){
var statearr_35879_35923 = state_35839__$1;
(statearr_35879_35923[(1)] = (30));

} else {
var statearr_35880_35924 = state_35839__$1;
(statearr_35880_35924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (16))){
var inst_35775 = (state_35839[(2)]);
var inst_35776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35777 = figwheel.client.heads_up.display_exception.call(null,inst_35776);
var state_35839__$1 = (function (){var statearr_35881 = state_35839;
(statearr_35881[(13)] = inst_35775);

return statearr_35881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(17),inst_35777);
} else {
if((state_val_35840 === (30))){
var inst_35811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35812 = figwheel.client.heads_up.display_warning.call(null,inst_35811);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(33),inst_35812);
} else {
if((state_val_35840 === (10))){
var inst_35769 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35882_35925 = state_35839__$1;
(statearr_35882_35925[(2)] = inst_35769);

(statearr_35882_35925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (18))){
var inst_35785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35786 = figwheel.client.heads_up.display_exception.call(null,inst_35785);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(21),inst_35786);
} else {
if((state_val_35840 === (37))){
var inst_35822 = (state_35839[(2)]);
var state_35839__$1 = state_35839;
var statearr_35883_35926 = state_35839__$1;
(statearr_35883_35926[(2)] = inst_35822);

(statearr_35883_35926[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35840 === (8))){
var inst_35761 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35839__$1 = state_35839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35839__$1,(11),inst_35761);
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
});})(c__27887__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26780__auto__,c__27887__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto____0 = (function (){
var statearr_35887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35887[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto__);

(statearr_35887[(1)] = (1));

return statearr_35887;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto____1 = (function (state_35839){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_35839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e35888){if((e35888 instanceof Object)){
var ex__26784__auto__ = e35888;
var statearr_35889_35927 = state_35839;
(statearr_35889_35927[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35928 = state_35839;
state_35839 = G__35928;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto__ = function(state_35839){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto____1.call(this,state_35839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__,msg_hist,msg_names,msg))
})();
var state__27889__auto__ = (function (){var statearr_35890 = f__27888__auto__.call(null);
(statearr_35890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_35890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__,msg_hist,msg_names,msg))
);

return c__27887__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27887__auto___35991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___35991,ch){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___35991,ch){
return (function (state_35974){
var state_val_35975 = (state_35974[(1)]);
if((state_val_35975 === (1))){
var state_35974__$1 = state_35974;
var statearr_35976_35992 = state_35974__$1;
(statearr_35976_35992[(2)] = null);

(statearr_35976_35992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35975 === (2))){
var state_35974__$1 = state_35974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35974__$1,(4),ch);
} else {
if((state_val_35975 === (3))){
var inst_35972 = (state_35974[(2)]);
var state_35974__$1 = state_35974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35974__$1,inst_35972);
} else {
if((state_val_35975 === (4))){
var inst_35962 = (state_35974[(7)]);
var inst_35962__$1 = (state_35974[(2)]);
var state_35974__$1 = (function (){var statearr_35977 = state_35974;
(statearr_35977[(7)] = inst_35962__$1);

return statearr_35977;
})();
if(cljs.core.truth_(inst_35962__$1)){
var statearr_35978_35993 = state_35974__$1;
(statearr_35978_35993[(1)] = (5));

} else {
var statearr_35979_35994 = state_35974__$1;
(statearr_35979_35994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35975 === (5))){
var inst_35962 = (state_35974[(7)]);
var inst_35964 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35962);
var state_35974__$1 = state_35974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35974__$1,(8),inst_35964);
} else {
if((state_val_35975 === (6))){
var state_35974__$1 = state_35974;
var statearr_35980_35995 = state_35974__$1;
(statearr_35980_35995[(2)] = null);

(statearr_35980_35995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35975 === (7))){
var inst_35970 = (state_35974[(2)]);
var state_35974__$1 = state_35974;
var statearr_35981_35996 = state_35974__$1;
(statearr_35981_35996[(2)] = inst_35970);

(statearr_35981_35996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35975 === (8))){
var inst_35966 = (state_35974[(2)]);
var state_35974__$1 = (function (){var statearr_35982 = state_35974;
(statearr_35982[(8)] = inst_35966);

return statearr_35982;
})();
var statearr_35983_35997 = state_35974__$1;
(statearr_35983_35997[(2)] = null);

(statearr_35983_35997[(1)] = (2));


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
});})(c__27887__auto___35991,ch))
;
return ((function (switch__26780__auto__,c__27887__auto___35991,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26781__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26781__auto____0 = (function (){
var statearr_35987 = [null,null,null,null,null,null,null,null,null];
(statearr_35987[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26781__auto__);

(statearr_35987[(1)] = (1));

return statearr_35987;
});
var figwheel$client$heads_up_plugin_$_state_machine__26781__auto____1 = (function (state_35974){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_35974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e35988){if((e35988 instanceof Object)){
var ex__26784__auto__ = e35988;
var statearr_35989_35998 = state_35974;
(statearr_35989_35998[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35999 = state_35974;
state_35974 = G__35999;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26781__auto__ = function(state_35974){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26781__auto____1.call(this,state_35974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26781__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26781__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___35991,ch))
})();
var state__27889__auto__ = (function (){var statearr_35990 = f__27888__auto__.call(null);
(statearr_35990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___35991);

return statearr_35990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___35991,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__){
return (function (state_36020){
var state_val_36021 = (state_36020[(1)]);
if((state_val_36021 === (1))){
var inst_36015 = cljs.core.async.timeout.call(null,(3000));
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36020__$1,(2),inst_36015);
} else {
if((state_val_36021 === (2))){
var inst_36017 = (state_36020[(2)]);
var inst_36018 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36020__$1 = (function (){var statearr_36022 = state_36020;
(statearr_36022[(7)] = inst_36017);

return statearr_36022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36020__$1,inst_36018);
} else {
return null;
}
}
});})(c__27887__auto__))
;
return ((function (switch__26780__auto__,c__27887__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26781__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26781__auto____0 = (function (){
var statearr_36026 = [null,null,null,null,null,null,null,null];
(statearr_36026[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26781__auto__);

(statearr_36026[(1)] = (1));

return statearr_36026;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26781__auto____1 = (function (state_36020){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_36020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e36027){if((e36027 instanceof Object)){
var ex__26784__auto__ = e36027;
var statearr_36028_36030 = state_36020;
(statearr_36028_36030[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36031 = state_36020;
state_36020 = G__36031;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26781__auto__ = function(state_36020){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26781__auto____1.call(this,state_36020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26781__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26781__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__))
})();
var state__27889__auto__ = (function (){var statearr_36029 = f__27888__auto__.call(null);
(statearr_36029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_36029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__))
);

return c__27887__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36054){
var state_val_36055 = (state_36054[(1)]);
if((state_val_36055 === (1))){
var inst_36048 = cljs.core.async.timeout.call(null,(2000));
var state_36054__$1 = state_36054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36054__$1,(2),inst_36048);
} else {
if((state_val_36055 === (2))){
var inst_36050 = (state_36054[(2)]);
var inst_36051 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36052 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36051);
var state_36054__$1 = (function (){var statearr_36056 = state_36054;
(statearr_36056[(7)] = inst_36050);

return statearr_36056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36054__$1,inst_36052);
} else {
return null;
}
}
});})(c__27887__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26780__auto__,c__27887__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto____0 = (function (){
var statearr_36060 = [null,null,null,null,null,null,null,null];
(statearr_36060[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto__);

(statearr_36060[(1)] = (1));

return statearr_36060;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto____1 = (function (state_36054){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_36054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e36061){if((e36061 instanceof Object)){
var ex__26784__auto__ = e36061;
var statearr_36062_36064 = state_36054;
(statearr_36062_36064[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36065 = state_36054;
state_36054 = G__36065;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto__ = function(state_36054){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto____1.call(this,state_36054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27889__auto__ = (function (){var statearr_36063 = f__27888__auto__.call(null);
(statearr_36063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_36063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__,figwheel_version,temp__4657__auto__))
);

return c__27887__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36066){
var map__36070 = p__36066;
var map__36070__$1 = ((((!((map__36070 == null)))?((((map__36070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36070):map__36070);
var file = cljs.core.get.call(null,map__36070__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36070__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36070__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36072 = "";
var G__36072__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36072),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36072);
var G__36072__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36072__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36072__$1);
if(cljs.core.truth_((function (){var and__24749__auto__ = line;
if(cljs.core.truth_(and__24749__auto__)){
return column;
} else {
return and__24749__auto__;
}
})())){
return [cljs.core.str(G__36072__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36072__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36073){
var map__36080 = p__36073;
var map__36080__$1 = ((((!((map__36080 == null)))?((((map__36080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36080):map__36080);
var ed = map__36080__$1;
var formatted_exception = cljs.core.get.call(null,map__36080__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36080__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36080__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36082_36086 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36083_36087 = null;
var count__36084_36088 = (0);
var i__36085_36089 = (0);
while(true){
if((i__36085_36089 < count__36084_36088)){
var msg_36090 = cljs.core._nth.call(null,chunk__36083_36087,i__36085_36089);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36090);

var G__36091 = seq__36082_36086;
var G__36092 = chunk__36083_36087;
var G__36093 = count__36084_36088;
var G__36094 = (i__36085_36089 + (1));
seq__36082_36086 = G__36091;
chunk__36083_36087 = G__36092;
count__36084_36088 = G__36093;
i__36085_36089 = G__36094;
continue;
} else {
var temp__4657__auto___36095 = cljs.core.seq.call(null,seq__36082_36086);
if(temp__4657__auto___36095){
var seq__36082_36096__$1 = temp__4657__auto___36095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36082_36096__$1)){
var c__25572__auto___36097 = cljs.core.chunk_first.call(null,seq__36082_36096__$1);
var G__36098 = cljs.core.chunk_rest.call(null,seq__36082_36096__$1);
var G__36099 = c__25572__auto___36097;
var G__36100 = cljs.core.count.call(null,c__25572__auto___36097);
var G__36101 = (0);
seq__36082_36086 = G__36098;
chunk__36083_36087 = G__36099;
count__36084_36088 = G__36100;
i__36085_36089 = G__36101;
continue;
} else {
var msg_36102 = cljs.core.first.call(null,seq__36082_36096__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36102);

var G__36103 = cljs.core.next.call(null,seq__36082_36096__$1);
var G__36104 = null;
var G__36105 = (0);
var G__36106 = (0);
seq__36082_36086 = G__36103;
chunk__36083_36087 = G__36104;
count__36084_36088 = G__36105;
i__36085_36089 = G__36106;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36107){
var map__36110 = p__36107;
var map__36110__$1 = ((((!((map__36110 == null)))?((((map__36110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36110):map__36110);
var w = map__36110__$1;
var message = cljs.core.get.call(null,map__36110__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24749__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24749__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24749__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36122 = cljs.core.seq.call(null,plugins);
var chunk__36123 = null;
var count__36124 = (0);
var i__36125 = (0);
while(true){
if((i__36125 < count__36124)){
var vec__36126 = cljs.core._nth.call(null,chunk__36123,i__36125);
var k = cljs.core.nth.call(null,vec__36126,(0),null);
var plugin = cljs.core.nth.call(null,vec__36126,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36132 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36122,chunk__36123,count__36124,i__36125,pl_36132,vec__36126,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36132.call(null,msg_hist);
});})(seq__36122,chunk__36123,count__36124,i__36125,pl_36132,vec__36126,k,plugin))
);
} else {
}

var G__36133 = seq__36122;
var G__36134 = chunk__36123;
var G__36135 = count__36124;
var G__36136 = (i__36125 + (1));
seq__36122 = G__36133;
chunk__36123 = G__36134;
count__36124 = G__36135;
i__36125 = G__36136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36122);
if(temp__4657__auto__){
var seq__36122__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36122__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__36122__$1);
var G__36137 = cljs.core.chunk_rest.call(null,seq__36122__$1);
var G__36138 = c__25572__auto__;
var G__36139 = cljs.core.count.call(null,c__25572__auto__);
var G__36140 = (0);
seq__36122 = G__36137;
chunk__36123 = G__36138;
count__36124 = G__36139;
i__36125 = G__36140;
continue;
} else {
var vec__36129 = cljs.core.first.call(null,seq__36122__$1);
var k = cljs.core.nth.call(null,vec__36129,(0),null);
var plugin = cljs.core.nth.call(null,vec__36129,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36141 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36122,chunk__36123,count__36124,i__36125,pl_36141,vec__36129,k,plugin,seq__36122__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36141.call(null,msg_hist);
});})(seq__36122,chunk__36123,count__36124,i__36125,pl_36141,vec__36129,k,plugin,seq__36122__$1,temp__4657__auto__))
);
} else {
}

var G__36142 = cljs.core.next.call(null,seq__36122__$1);
var G__36143 = null;
var G__36144 = (0);
var G__36145 = (0);
seq__36122 = G__36142;
chunk__36123 = G__36143;
count__36124 = G__36144;
i__36125 = G__36145;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36146 = [];
var len__25836__auto___36153 = arguments.length;
var i__25837__auto___36154 = (0);
while(true){
if((i__25837__auto___36154 < len__25836__auto___36153)){
args36146.push((arguments[i__25837__auto___36154]));

var G__36155 = (i__25837__auto___36154 + (1));
i__25837__auto___36154 = G__36155;
continue;
} else {
}
break;
}

var G__36148 = args36146.length;
switch (G__36148) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36146.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36149_36157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36150_36158 = null;
var count__36151_36159 = (0);
var i__36152_36160 = (0);
while(true){
if((i__36152_36160 < count__36151_36159)){
var msg_36161 = cljs.core._nth.call(null,chunk__36150_36158,i__36152_36160);
figwheel.client.socket.handle_incoming_message.call(null,msg_36161);

var G__36162 = seq__36149_36157;
var G__36163 = chunk__36150_36158;
var G__36164 = count__36151_36159;
var G__36165 = (i__36152_36160 + (1));
seq__36149_36157 = G__36162;
chunk__36150_36158 = G__36163;
count__36151_36159 = G__36164;
i__36152_36160 = G__36165;
continue;
} else {
var temp__4657__auto___36166 = cljs.core.seq.call(null,seq__36149_36157);
if(temp__4657__auto___36166){
var seq__36149_36167__$1 = temp__4657__auto___36166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36149_36167__$1)){
var c__25572__auto___36168 = cljs.core.chunk_first.call(null,seq__36149_36167__$1);
var G__36169 = cljs.core.chunk_rest.call(null,seq__36149_36167__$1);
var G__36170 = c__25572__auto___36168;
var G__36171 = cljs.core.count.call(null,c__25572__auto___36168);
var G__36172 = (0);
seq__36149_36157 = G__36169;
chunk__36150_36158 = G__36170;
count__36151_36159 = G__36171;
i__36152_36160 = G__36172;
continue;
} else {
var msg_36173 = cljs.core.first.call(null,seq__36149_36167__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36173);

var G__36174 = cljs.core.next.call(null,seq__36149_36167__$1);
var G__36175 = null;
var G__36176 = (0);
var G__36177 = (0);
seq__36149_36157 = G__36174;
chunk__36150_36158 = G__36175;
count__36151_36159 = G__36176;
i__36152_36160 = G__36177;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25843__auto__ = [];
var len__25836__auto___36182 = arguments.length;
var i__25837__auto___36183 = (0);
while(true){
if((i__25837__auto___36183 < len__25836__auto___36182)){
args__25843__auto__.push((arguments[i__25837__auto___36183]));

var G__36184 = (i__25837__auto___36183 + (1));
i__25837__auto___36183 = G__36184;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36179){
var map__36180 = p__36179;
var map__36180__$1 = ((((!((map__36180 == null)))?((((map__36180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36180):map__36180);
var opts = map__36180__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36178){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36178));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36186){if((e36186 instanceof Error)){
var e = e36186;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36186;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36190){
var map__36191 = p__36190;
var map__36191__$1 = ((((!((map__36191 == null)))?((((map__36191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36191):map__36191);
var msg_name = cljs.core.get.call(null,map__36191__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1616887333224