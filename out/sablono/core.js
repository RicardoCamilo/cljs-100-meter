// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27540__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27537 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__27538 = cljs.core.seq.call(null,vec__27537);
var first__27539 = cljs.core.first.call(null,seq__27538);
var seq__27538__$1 = cljs.core.next.call(null,seq__27538);
var tag = first__27539;
var body = seq__27538__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27541__i = 0, G__27541__a = new Array(arguments.length -  0);
while (G__27541__i < G__27541__a.length) {G__27541__a[G__27541__i] = arguments[G__27541__i + 0]; ++G__27541__i;}
  args = new cljs.core.IndexedSeq(G__27541__a,0);
} 
return G__27540__delegate.call(this,args);};
G__27540.cljs$lang$maxFixedArity = 0;
G__27540.cljs$lang$applyTo = (function (arglist__27542){
var args = cljs.core.seq(arglist__27542);
return G__27540__delegate(args);
});
G__27540.cljs$core$IFn$_invoke$arity$variadic = G__27540__delegate;
return G__27540;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25541__auto__ = (function sablono$core$update_arglists_$_iter__27547(s__27548){
return (new cljs.core.LazySeq(null,(function (){
var s__27548__$1 = s__27548;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27548__$1);
if(temp__4657__auto__){
var s__27548__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27548__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__27548__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__27550 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__27549 = (0);
while(true){
if((i__27549 < size__25540__auto__)){
var args = cljs.core._nth.call(null,c__25539__auto__,i__27549);
cljs.core.chunk_append.call(null,b__27550,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27551 = (i__27549 + (1));
i__27549 = G__27551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27550),sablono$core$update_arglists_$_iter__27547.call(null,cljs.core.chunk_rest.call(null,s__27548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27550),null);
}
} else {
var args = cljs.core.first.call(null,s__27548__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27547.call(null,cljs.core.rest.call(null,s__27548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25843__auto__ = [];
var len__25836__auto___27557 = arguments.length;
var i__25837__auto___27558 = (0);
while(true){
if((i__25837__auto___27558 < len__25836__auto___27557)){
args__25843__auto__.push((arguments[i__25837__auto___27558]));

var G__27559 = (i__25837__auto___27558 + (1));
i__25837__auto___27558 = G__27559;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25541__auto__ = (function sablono$core$iter__27553(s__27554){
return (new cljs.core.LazySeq(null,(function (){
var s__27554__$1 = s__27554;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27554__$1);
if(temp__4657__auto__){
var s__27554__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27554__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__27554__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__27556 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__27555 = (0);
while(true){
if((i__27555 < size__25540__auto__)){
var style = cljs.core._nth.call(null,c__25539__auto__,i__27555);
cljs.core.chunk_append.call(null,b__27556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27560 = (i__27555 + (1));
i__27555 = G__27560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27556),sablono$core$iter__27553.call(null,cljs.core.chunk_rest.call(null,s__27554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27556),null);
}
} else {
var style = cljs.core.first.call(null,s__27554__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27553.call(null,cljs.core.rest.call(null,s__27554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27552){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27552));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27561 = (function sablono$core$link_to27561(var_args){
var args__25843__auto__ = [];
var len__25836__auto___27564 = arguments.length;
var i__25837__auto___27565 = (0);
while(true){
if((i__25837__auto___27565 < len__25836__auto___27564)){
args__25843__auto__.push((arguments[i__25837__auto___27565]));

var G__27566 = (i__25837__auto___27565 + (1));
i__25837__auto___27565 = G__27566;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to27561.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

sablono.core.link_to27561.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27561.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27561.cljs$lang$applyTo = (function (seq27562){
var G__27563 = cljs.core.first.call(null,seq27562);
var seq27562__$1 = cljs.core.next.call(null,seq27562);
return sablono.core.link_to27561.cljs$core$IFn$_invoke$arity$variadic(G__27563,seq27562__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27561);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27567 = (function sablono$core$mail_to27567(var_args){
var args__25843__auto__ = [];
var len__25836__auto___27574 = arguments.length;
var i__25837__auto___27575 = (0);
while(true){
if((i__25837__auto___27575 < len__25836__auto___27574)){
args__25843__auto__.push((arguments[i__25837__auto___27575]));

var G__27576 = (i__25837__auto___27575 + (1));
i__25837__auto___27575 = G__27576;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to27567.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

sablono.core.mail_to27567.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27570){
var vec__27571 = p__27570;
var content = cljs.core.nth.call(null,vec__27571,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24761__auto__ = content;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27567.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27567.cljs$lang$applyTo = (function (seq27568){
var G__27569 = cljs.core.first.call(null,seq27568);
var seq27568__$1 = cljs.core.next.call(null,seq27568);
return sablono.core.mail_to27567.cljs$core$IFn$_invoke$arity$variadic(G__27569,seq27568__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27567);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27577 = (function sablono$core$unordered_list27577(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25541__auto__ = (function sablono$core$unordered_list27577_$_iter__27582(s__27583){
return (new cljs.core.LazySeq(null,(function (){
var s__27583__$1 = s__27583;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27583__$1);
if(temp__4657__auto__){
var s__27583__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27583__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__27583__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__27585 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__27584 = (0);
while(true){
if((i__27584 < size__25540__auto__)){
var x = cljs.core._nth.call(null,c__25539__auto__,i__27584);
cljs.core.chunk_append.call(null,b__27585,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27586 = (i__27584 + (1));
i__27584 = G__27586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27585),sablono$core$unordered_list27577_$_iter__27582.call(null,cljs.core.chunk_rest.call(null,s__27583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27585),null);
}
} else {
var x = cljs.core.first.call(null,s__27583__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27577_$_iter__27582.call(null,cljs.core.rest.call(null,s__27583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27577);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27587 = (function sablono$core$ordered_list27587(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25541__auto__ = (function sablono$core$ordered_list27587_$_iter__27592(s__27593){
return (new cljs.core.LazySeq(null,(function (){
var s__27593__$1 = s__27593;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27593__$1);
if(temp__4657__auto__){
var s__27593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27593__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__27593__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__27595 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__27594 = (0);
while(true){
if((i__27594 < size__25540__auto__)){
var x = cljs.core._nth.call(null,c__25539__auto__,i__27594);
cljs.core.chunk_append.call(null,b__27595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27596 = (i__27594 + (1));
i__27594 = G__27596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27595),sablono$core$ordered_list27587_$_iter__27592.call(null,cljs.core.chunk_rest.call(null,s__27593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27595),null);
}
} else {
var x = cljs.core.first.call(null,s__27593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27587_$_iter__27592.call(null,cljs.core.rest.call(null,s__27593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27587);
/**
 * Create an image element.
 */
sablono.core.image27597 = (function sablono$core$image27597(var_args){
var args27598 = [];
var len__25836__auto___27601 = arguments.length;
var i__25837__auto___27602 = (0);
while(true){
if((i__25837__auto___27602 < len__25836__auto___27601)){
args27598.push((arguments[i__25837__auto___27602]));

var G__27603 = (i__25837__auto___27602 + (1));
i__25837__auto___27602 = G__27603;
continue;
} else {
}
break;
}

var G__27600 = args27598.length;
switch (G__27600) {
case 1:
return sablono.core.image27597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27598.length)].join('')));

}
});

sablono.core.image27597.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27597.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27597.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27597);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27605_SHARP_,p2__27606_SHARP_){
return [cljs.core.str(p1__27605_SHARP_),cljs.core.str("["),cljs.core.str(p2__27606_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27607_SHARP_,p2__27608_SHARP_){
return [cljs.core.str(p1__27607_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27608_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field27609 = (function sablono$core$color_field27609(var_args){
var args27610 = [];
var len__25836__auto___27677 = arguments.length;
var i__25837__auto___27678 = (0);
while(true){
if((i__25837__auto___27678 < len__25836__auto___27677)){
args27610.push((arguments[i__25837__auto___27678]));

var G__27679 = (i__25837__auto___27678 + (1));
i__25837__auto___27678 = G__27679;
continue;
} else {
}
break;
}

var G__27612 = args27610.length;
switch (G__27612) {
case 1:
return sablono.core.color_field27609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27610.length)].join('')));

}
});

sablono.core.color_field27609.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.color_field27609.call(null,name__27524__auto__,null);
});

sablono.core.color_field27609.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.color_field27609.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27609);

/**
 * Creates a date input field.
 */
sablono.core.date_field27613 = (function sablono$core$date_field27613(var_args){
var args27614 = [];
var len__25836__auto___27681 = arguments.length;
var i__25837__auto___27682 = (0);
while(true){
if((i__25837__auto___27682 < len__25836__auto___27681)){
args27614.push((arguments[i__25837__auto___27682]));

var G__27683 = (i__25837__auto___27682 + (1));
i__25837__auto___27682 = G__27683;
continue;
} else {
}
break;
}

var G__27616 = args27614.length;
switch (G__27616) {
case 1:
return sablono.core.date_field27613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27614.length)].join('')));

}
});

sablono.core.date_field27613.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.date_field27613.call(null,name__27524__auto__,null);
});

sablono.core.date_field27613.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.date_field27613.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27613);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27617 = (function sablono$core$datetime_field27617(var_args){
var args27618 = [];
var len__25836__auto___27685 = arguments.length;
var i__25837__auto___27686 = (0);
while(true){
if((i__25837__auto___27686 < len__25836__auto___27685)){
args27618.push((arguments[i__25837__auto___27686]));

var G__27687 = (i__25837__auto___27686 + (1));
i__25837__auto___27686 = G__27687;
continue;
} else {
}
break;
}

var G__27620 = args27618.length;
switch (G__27620) {
case 1:
return sablono.core.datetime_field27617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27618.length)].join('')));

}
});

sablono.core.datetime_field27617.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.datetime_field27617.call(null,name__27524__auto__,null);
});

sablono.core.datetime_field27617.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.datetime_field27617.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27617);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27621 = (function sablono$core$datetime_local_field27621(var_args){
var args27622 = [];
var len__25836__auto___27689 = arguments.length;
var i__25837__auto___27690 = (0);
while(true){
if((i__25837__auto___27690 < len__25836__auto___27689)){
args27622.push((arguments[i__25837__auto___27690]));

var G__27691 = (i__25837__auto___27690 + (1));
i__25837__auto___27690 = G__27691;
continue;
} else {
}
break;
}

var G__27624 = args27622.length;
switch (G__27624) {
case 1:
return sablono.core.datetime_local_field27621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27622.length)].join('')));

}
});

sablono.core.datetime_local_field27621.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.datetime_local_field27621.call(null,name__27524__auto__,null);
});

sablono.core.datetime_local_field27621.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.datetime_local_field27621.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27621);

/**
 * Creates a email input field.
 */
sablono.core.email_field27625 = (function sablono$core$email_field27625(var_args){
var args27626 = [];
var len__25836__auto___27693 = arguments.length;
var i__25837__auto___27694 = (0);
while(true){
if((i__25837__auto___27694 < len__25836__auto___27693)){
args27626.push((arguments[i__25837__auto___27694]));

var G__27695 = (i__25837__auto___27694 + (1));
i__25837__auto___27694 = G__27695;
continue;
} else {
}
break;
}

var G__27628 = args27626.length;
switch (G__27628) {
case 1:
return sablono.core.email_field27625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27626.length)].join('')));

}
});

sablono.core.email_field27625.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.email_field27625.call(null,name__27524__auto__,null);
});

sablono.core.email_field27625.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.email_field27625.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27625);

/**
 * Creates a file input field.
 */
sablono.core.file_field27629 = (function sablono$core$file_field27629(var_args){
var args27630 = [];
var len__25836__auto___27697 = arguments.length;
var i__25837__auto___27698 = (0);
while(true){
if((i__25837__auto___27698 < len__25836__auto___27697)){
args27630.push((arguments[i__25837__auto___27698]));

var G__27699 = (i__25837__auto___27698 + (1));
i__25837__auto___27698 = G__27699;
continue;
} else {
}
break;
}

var G__27632 = args27630.length;
switch (G__27632) {
case 1:
return sablono.core.file_field27629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27630.length)].join('')));

}
});

sablono.core.file_field27629.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.file_field27629.call(null,name__27524__auto__,null);
});

sablono.core.file_field27629.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.file_field27629.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27629);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27633 = (function sablono$core$hidden_field27633(var_args){
var args27634 = [];
var len__25836__auto___27701 = arguments.length;
var i__25837__auto___27702 = (0);
while(true){
if((i__25837__auto___27702 < len__25836__auto___27701)){
args27634.push((arguments[i__25837__auto___27702]));

var G__27703 = (i__25837__auto___27702 + (1));
i__25837__auto___27702 = G__27703;
continue;
} else {
}
break;
}

var G__27636 = args27634.length;
switch (G__27636) {
case 1:
return sablono.core.hidden_field27633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27634.length)].join('')));

}
});

sablono.core.hidden_field27633.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.hidden_field27633.call(null,name__27524__auto__,null);
});

sablono.core.hidden_field27633.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.hidden_field27633.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27633);

/**
 * Creates a month input field.
 */
sablono.core.month_field27637 = (function sablono$core$month_field27637(var_args){
var args27638 = [];
var len__25836__auto___27705 = arguments.length;
var i__25837__auto___27706 = (0);
while(true){
if((i__25837__auto___27706 < len__25836__auto___27705)){
args27638.push((arguments[i__25837__auto___27706]));

var G__27707 = (i__25837__auto___27706 + (1));
i__25837__auto___27706 = G__27707;
continue;
} else {
}
break;
}

var G__27640 = args27638.length;
switch (G__27640) {
case 1:
return sablono.core.month_field27637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27638.length)].join('')));

}
});

sablono.core.month_field27637.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.month_field27637.call(null,name__27524__auto__,null);
});

sablono.core.month_field27637.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.month_field27637.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27637);

/**
 * Creates a number input field.
 */
sablono.core.number_field27641 = (function sablono$core$number_field27641(var_args){
var args27642 = [];
var len__25836__auto___27709 = arguments.length;
var i__25837__auto___27710 = (0);
while(true){
if((i__25837__auto___27710 < len__25836__auto___27709)){
args27642.push((arguments[i__25837__auto___27710]));

var G__27711 = (i__25837__auto___27710 + (1));
i__25837__auto___27710 = G__27711;
continue;
} else {
}
break;
}

var G__27644 = args27642.length;
switch (G__27644) {
case 1:
return sablono.core.number_field27641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27642.length)].join('')));

}
});

sablono.core.number_field27641.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.number_field27641.call(null,name__27524__auto__,null);
});

sablono.core.number_field27641.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.number_field27641.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27641);

/**
 * Creates a password input field.
 */
sablono.core.password_field27645 = (function sablono$core$password_field27645(var_args){
var args27646 = [];
var len__25836__auto___27713 = arguments.length;
var i__25837__auto___27714 = (0);
while(true){
if((i__25837__auto___27714 < len__25836__auto___27713)){
args27646.push((arguments[i__25837__auto___27714]));

var G__27715 = (i__25837__auto___27714 + (1));
i__25837__auto___27714 = G__27715;
continue;
} else {
}
break;
}

var G__27648 = args27646.length;
switch (G__27648) {
case 1:
return sablono.core.password_field27645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27646.length)].join('')));

}
});

sablono.core.password_field27645.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.password_field27645.call(null,name__27524__auto__,null);
});

sablono.core.password_field27645.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.password_field27645.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27645);

/**
 * Creates a range input field.
 */
sablono.core.range_field27649 = (function sablono$core$range_field27649(var_args){
var args27650 = [];
var len__25836__auto___27717 = arguments.length;
var i__25837__auto___27718 = (0);
while(true){
if((i__25837__auto___27718 < len__25836__auto___27717)){
args27650.push((arguments[i__25837__auto___27718]));

var G__27719 = (i__25837__auto___27718 + (1));
i__25837__auto___27718 = G__27719;
continue;
} else {
}
break;
}

var G__27652 = args27650.length;
switch (G__27652) {
case 1:
return sablono.core.range_field27649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27650.length)].join('')));

}
});

sablono.core.range_field27649.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.range_field27649.call(null,name__27524__auto__,null);
});

sablono.core.range_field27649.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.range_field27649.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27649);

/**
 * Creates a search input field.
 */
sablono.core.search_field27653 = (function sablono$core$search_field27653(var_args){
var args27654 = [];
var len__25836__auto___27721 = arguments.length;
var i__25837__auto___27722 = (0);
while(true){
if((i__25837__auto___27722 < len__25836__auto___27721)){
args27654.push((arguments[i__25837__auto___27722]));

var G__27723 = (i__25837__auto___27722 + (1));
i__25837__auto___27722 = G__27723;
continue;
} else {
}
break;
}

var G__27656 = args27654.length;
switch (G__27656) {
case 1:
return sablono.core.search_field27653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27654.length)].join('')));

}
});

sablono.core.search_field27653.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.search_field27653.call(null,name__27524__auto__,null);
});

sablono.core.search_field27653.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.search_field27653.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27653);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27657 = (function sablono$core$tel_field27657(var_args){
var args27658 = [];
var len__25836__auto___27725 = arguments.length;
var i__25837__auto___27726 = (0);
while(true){
if((i__25837__auto___27726 < len__25836__auto___27725)){
args27658.push((arguments[i__25837__auto___27726]));

var G__27727 = (i__25837__auto___27726 + (1));
i__25837__auto___27726 = G__27727;
continue;
} else {
}
break;
}

var G__27660 = args27658.length;
switch (G__27660) {
case 1:
return sablono.core.tel_field27657.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27657.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27658.length)].join('')));

}
});

sablono.core.tel_field27657.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.tel_field27657.call(null,name__27524__auto__,null);
});

sablono.core.tel_field27657.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.tel_field27657.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27657);

/**
 * Creates a text input field.
 */
sablono.core.text_field27661 = (function sablono$core$text_field27661(var_args){
var args27662 = [];
var len__25836__auto___27729 = arguments.length;
var i__25837__auto___27730 = (0);
while(true){
if((i__25837__auto___27730 < len__25836__auto___27729)){
args27662.push((arguments[i__25837__auto___27730]));

var G__27731 = (i__25837__auto___27730 + (1));
i__25837__auto___27730 = G__27731;
continue;
} else {
}
break;
}

var G__27664 = args27662.length;
switch (G__27664) {
case 1:
return sablono.core.text_field27661.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27661.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27662.length)].join('')));

}
});

sablono.core.text_field27661.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.text_field27661.call(null,name__27524__auto__,null);
});

sablono.core.text_field27661.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.text_field27661.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27661);

/**
 * Creates a time input field.
 */
sablono.core.time_field27665 = (function sablono$core$time_field27665(var_args){
var args27666 = [];
var len__25836__auto___27733 = arguments.length;
var i__25837__auto___27734 = (0);
while(true){
if((i__25837__auto___27734 < len__25836__auto___27733)){
args27666.push((arguments[i__25837__auto___27734]));

var G__27735 = (i__25837__auto___27734 + (1));
i__25837__auto___27734 = G__27735;
continue;
} else {
}
break;
}

var G__27668 = args27666.length;
switch (G__27668) {
case 1:
return sablono.core.time_field27665.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27665.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27666.length)].join('')));

}
});

sablono.core.time_field27665.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.time_field27665.call(null,name__27524__auto__,null);
});

sablono.core.time_field27665.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.time_field27665.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27665);

/**
 * Creates a url input field.
 */
sablono.core.url_field27669 = (function sablono$core$url_field27669(var_args){
var args27670 = [];
var len__25836__auto___27737 = arguments.length;
var i__25837__auto___27738 = (0);
while(true){
if((i__25837__auto___27738 < len__25836__auto___27737)){
args27670.push((arguments[i__25837__auto___27738]));

var G__27739 = (i__25837__auto___27738 + (1));
i__25837__auto___27738 = G__27739;
continue;
} else {
}
break;
}

var G__27672 = args27670.length;
switch (G__27672) {
case 1:
return sablono.core.url_field27669.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27669.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27670.length)].join('')));

}
});

sablono.core.url_field27669.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.url_field27669.call(null,name__27524__auto__,null);
});

sablono.core.url_field27669.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.url_field27669.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27669);

/**
 * Creates a week input field.
 */
sablono.core.week_field27673 = (function sablono$core$week_field27673(var_args){
var args27674 = [];
var len__25836__auto___27741 = arguments.length;
var i__25837__auto___27742 = (0);
while(true){
if((i__25837__auto___27742 < len__25836__auto___27741)){
args27674.push((arguments[i__25837__auto___27742]));

var G__27743 = (i__25837__auto___27742 + (1));
i__25837__auto___27742 = G__27743;
continue;
} else {
}
break;
}

var G__27676 = args27674.length;
switch (G__27676) {
case 1:
return sablono.core.week_field27673.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27673.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27674.length)].join('')));

}
});

sablono.core.week_field27673.cljs$core$IFn$_invoke$arity$1 = (function (name__27524__auto__){
return sablono.core.week_field27673.call(null,name__27524__auto__,null);
});

sablono.core.week_field27673.cljs$core$IFn$_invoke$arity$2 = (function (name__27524__auto__,value__27525__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__27524__auto__,value__27525__auto__);
});

sablono.core.week_field27673.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27673);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27745 = (function sablono$core$check_box27745(var_args){
var args27746 = [];
var len__25836__auto___27749 = arguments.length;
var i__25837__auto___27750 = (0);
while(true){
if((i__25837__auto___27750 < len__25836__auto___27749)){
args27746.push((arguments[i__25837__auto___27750]));

var G__27751 = (i__25837__auto___27750 + (1));
i__25837__auto___27750 = G__27751;
continue;
} else {
}
break;
}

var G__27748 = args27746.length;
switch (G__27748) {
case 1:
return sablono.core.check_box27745.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27745.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27745.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27746.length)].join('')));

}
});

sablono.core.check_box27745.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box27745.call(null,name,null);
});

sablono.core.check_box27745.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box27745.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box27745.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27745.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27745);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27753 = (function sablono$core$radio_button27753(var_args){
var args27754 = [];
var len__25836__auto___27757 = arguments.length;
var i__25837__auto___27758 = (0);
while(true){
if((i__25837__auto___27758 < len__25836__auto___27757)){
args27754.push((arguments[i__25837__auto___27758]));

var G__27759 = (i__25837__auto___27758 + (1));
i__25837__auto___27758 = G__27759;
continue;
} else {
}
break;
}

var G__27756 = args27754.length;
switch (G__27756) {
case 1:
return sablono.core.radio_button27753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27753.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27754.length)].join('')));

}
});

sablono.core.radio_button27753.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button27753.call(null,group,null);
});

sablono.core.radio_button27753.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button27753.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button27753.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27753.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27753);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27761 = (function sablono$core$select_options27761(coll){
var iter__25541__auto__ = (function sablono$core$select_options27761_$_iter__27778(s__27779){
return (new cljs.core.LazySeq(null,(function (){
var s__27779__$1 = s__27779;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27779__$1);
if(temp__4657__auto__){
var s__27779__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27779__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__27779__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__27781 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__27780 = (0);
while(true){
if((i__27780 < size__25540__auto__)){
var x = cljs.core._nth.call(null,c__25539__auto__,i__27780);
cljs.core.chunk_append.call(null,b__27781,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27788 = x;
var text = cljs.core.nth.call(null,vec__27788,(0),null);
var val = cljs.core.nth.call(null,vec__27788,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27788,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27761.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27794 = (i__27780 + (1));
i__27780 = G__27794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27781),sablono$core$select_options27761_$_iter__27778.call(null,cljs.core.chunk_rest.call(null,s__27779__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27781),null);
}
} else {
var x = cljs.core.first.call(null,s__27779__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27791 = x;
var text = cljs.core.nth.call(null,vec__27791,(0),null);
var val = cljs.core.nth.call(null,vec__27791,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27791,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27761.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27761_$_iter__27778.call(null,cljs.core.rest.call(null,s__27779__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27761);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27795 = (function sablono$core$drop_down27795(var_args){
var args27796 = [];
var len__25836__auto___27799 = arguments.length;
var i__25837__auto___27800 = (0);
while(true){
if((i__25837__auto___27800 < len__25836__auto___27799)){
args27796.push((arguments[i__25837__auto___27800]));

var G__27801 = (i__25837__auto___27800 + (1));
i__25837__auto___27800 = G__27801;
continue;
} else {
}
break;
}

var G__27798 = args27796.length;
switch (G__27798) {
case 2:
return sablono.core.drop_down27795.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27795.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27796.length)].join('')));

}
});

sablono.core.drop_down27795.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27795.call(null,name,options,null);
});

sablono.core.drop_down27795.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27795.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27795);
/**
 * Creates a text area element.
 */
sablono.core.text_area27803 = (function sablono$core$text_area27803(var_args){
var args27804 = [];
var len__25836__auto___27807 = arguments.length;
var i__25837__auto___27808 = (0);
while(true){
if((i__25837__auto___27808 < len__25836__auto___27807)){
args27804.push((arguments[i__25837__auto___27808]));

var G__27809 = (i__25837__auto___27808 + (1));
i__25837__auto___27808 = G__27809;
continue;
} else {
}
break;
}

var G__27806 = args27804.length;
switch (G__27806) {
case 1:
return sablono.core.text_area27803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27804.length)].join('')));

}
});

sablono.core.text_area27803.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27803.call(null,name,null);
});

sablono.core.text_area27803.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area27803.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27803);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27811 = (function sablono$core$label27811(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27811);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27812 = (function sablono$core$submit_button27812(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27812);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27813 = (function sablono$core$reset_button27813(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27813);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27814 = (function sablono$core$form_to27814(var_args){
var args__25843__auto__ = [];
var len__25836__auto___27821 = arguments.length;
var i__25837__auto___27822 = (0);
while(true){
if((i__25837__auto___27822 < len__25836__auto___27821)){
args__25843__auto__.push((arguments[i__25837__auto___27822]));

var G__27823 = (i__25837__auto___27822 + (1));
i__25837__auto___27822 = G__27823;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to27814.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

sablono.core.form_to27814.cljs$core$IFn$_invoke$arity$variadic = (function (p__27817,body){
var vec__27818 = p__27817;
var method = cljs.core.nth.call(null,vec__27818,(0),null);
var action = cljs.core.nth.call(null,vec__27818,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27814.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27814.cljs$lang$applyTo = (function (seq27815){
var G__27816 = cljs.core.first.call(null,seq27815);
var seq27815__$1 = cljs.core.next.call(null,seq27815);
return sablono.core.form_to27814.cljs$core$IFn$_invoke$arity$variadic(G__27816,seq27815__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27814);

//# sourceMappingURL=core.js.map?rel=1616887325081