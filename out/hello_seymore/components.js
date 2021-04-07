// Compiled by ClojureScript 1.9.229 {}
goog.provide('hello_seymore.components');
goog.require('cljs.core');
goog.require('sablono.core');

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
hello_seymore.components.Runner = (function (name,speed,lane,__meta,__extmap,__hash){
this.name = name;
this.speed = speed;
this.lane = lane;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hello_seymore.components.Runner.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
return cljs.core._lookup.call(null,this__25382__auto____$1,k__25383__auto__,null);
});

hello_seymore.components.Runner.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25384__auto__,k54500,else__25385__auto__){
var self__ = this;
var this__25384__auto____$1 = this;
var G__54502 = (((k54500 instanceof cljs.core.Keyword))?k54500.fqn:null);
switch (G__54502) {
case "name":
return self__.name;

break;
case "speed":
return self__.speed;

break;
case "lane":
return self__.lane;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k54500,else__25385__auto__);

}
});

hello_seymore.components.Runner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25396__auto__,writer__25397__auto__,opts__25398__auto__){
var self__ = this;
var this__25396__auto____$1 = this;
var pr_pair__25399__auto__ = ((function (this__25396__auto____$1){
return (function (keyval__25400__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,cljs.core.pr_writer,""," ","",opts__25398__auto__,keyval__25400__auto__);
});})(this__25396__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,pr_pair__25399__auto__,"#hello-seymore.components.Runner{",", ","}",opts__25398__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lane","lane",463787757),self__.lane],null))], null),self__.__extmap));
});

hello_seymore.components.Runner.prototype.cljs$core$IIterable$ = true;

hello_seymore.components.Runner.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54499){
var self__ = this;
var G__54499__$1 = this;
return (new cljs.core.RecordIter((0),G__54499__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"lane","lane",463787757)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

hello_seymore.components.Runner.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25380__auto__){
var self__ = this;
var this__25380__auto____$1 = this;
return self__.__meta;
});

hello_seymore.components.Runner.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25376__auto__){
var self__ = this;
var this__25376__auto____$1 = this;
return (new hello_seymore.components.Runner(self__.name,self__.speed,self__.lane,self__.__meta,self__.__extmap,self__.__hash));
});

hello_seymore.components.Runner.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25386__auto__){
var self__ = this;
var this__25386__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

hello_seymore.components.Runner.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25377__auto__){
var self__ = this;
var this__25377__auto____$1 = this;
var h__25195__auto__ = self__.__hash;
if(!((h__25195__auto__ == null))){
return h__25195__auto__;
} else {
var h__25195__auto____$1 = cljs.core.hash_imap.call(null,this__25377__auto____$1);
self__.__hash = h__25195__auto____$1;

return h__25195__auto____$1;
}
});

hello_seymore.components.Runner.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25378__auto__,other__25379__auto__){
var self__ = this;
var this__25378__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24748__auto__ = other__25379__auto__;
if(cljs.core.truth_(and__24748__auto__)){
var and__24748__auto____$1 = (this__25378__auto____$1.constructor === other__25379__auto__.constructor);
if(and__24748__auto____$1){
return cljs.core.equiv_map.call(null,this__25378__auto____$1,other__25379__auto__);
} else {
return and__24748__auto____$1;
}
} else {
return and__24748__auto__;
}
})())){
return true;
} else {
return false;
}
});

hello_seymore.components.Runner.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25391__auto__,k__25392__auto__){
var self__ = this;
var this__25391__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"lane","lane",463787757),null], null), null),k__25392__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25391__auto____$1),self__.__meta),k__25392__auto__);
} else {
return (new hello_seymore.components.Runner(self__.name,self__.speed,self__.lane,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25392__auto__)),null));
}
});

hello_seymore.components.Runner.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25389__auto__,k__25390__auto__,G__54499){
var self__ = this;
var this__25389__auto____$1 = this;
var pred__54503 = cljs.core.keyword_identical_QMARK_;
var expr__54504 = k__25390__auto__;
if(cljs.core.truth_(pred__54503.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__54504))){
return (new hello_seymore.components.Runner(G__54499,self__.speed,self__.lane,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54503.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__54504))){
return (new hello_seymore.components.Runner(self__.name,G__54499,self__.lane,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__54503.call(null,new cljs.core.Keyword(null,"lane","lane",463787757),expr__54504))){
return (new hello_seymore.components.Runner(self__.name,self__.speed,G__54499,self__.__meta,self__.__extmap,null));
} else {
return (new hello_seymore.components.Runner(self__.name,self__.speed,self__.lane,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25390__auto__,G__54499),null));
}
}
}
});

hello_seymore.components.Runner.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25394__auto__){
var self__ = this;
var this__25394__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lane","lane",463787757),self__.lane],null))], null),self__.__extmap));
});

hello_seymore.components.Runner.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25381__auto__,G__54499){
var self__ = this;
var this__25381__auto____$1 = this;
return (new hello_seymore.components.Runner(self__.name,self__.speed,self__.lane,G__54499,self__.__extmap,self__.__hash));
});

hello_seymore.components.Runner.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25387__auto__,entry__25388__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25388__auto__)){
return cljs.core._assoc.call(null,this__25387__auto____$1,cljs.core._nth.call(null,entry__25388__auto__,(0)),cljs.core._nth.call(null,entry__25388__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25387__auto____$1,entry__25388__auto__);
}
});

hello_seymore.components.Runner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"lane","lane",2104319284,null)], null);
});

hello_seymore.components.Runner.cljs$lang$type = true;

hello_seymore.components.Runner.cljs$lang$ctorPrSeq = (function (this__25416__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hello-seymore.components/Runner");
});

hello_seymore.components.Runner.cljs$lang$ctorPrWriter = (function (this__25416__auto__,writer__25417__auto__){
return cljs.core._write.call(null,writer__25417__auto__,"hello-seymore.components/Runner");
});

hello_seymore.components.__GT_Runner = (function hello_seymore$components$__GT_Runner(name,speed,lane){
return (new hello_seymore.components.Runner(name,speed,lane,null,null,null));
});

hello_seymore.components.map__GT_Runner = (function hello_seymore$components$map__GT_Runner(G__54501){
return (new hello_seymore.components.Runner(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__54501),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__54501),new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(G__54501),null,cljs.core.dissoc.call(null,G__54501,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"lane","lane",463787757)),null));
});

hello_seymore.components.like_seymore = (function hello_seymore$components$like_seymore(data){
return React.createElement("div",null,React.createElement("h1",null,"Seymore's popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")),React.createElement("div",null,React.createElement("p",null,"this is a test!")));
});
hello_seymore.components.counter = (function hello_seymore$components$counter(r_number){
return React.createElement("div",null,"Counter: ",sablono.interpreter.interpret.call(null,r_number));
});
hello_seymore.components.process = (function hello_seymore$components$process(queue){
return React.createElement("ul",({"className": "processes"}),cljs.core.into_array.call(null,(function (){var iter__25540__auto__ = (function hello_seymore$components$process_$_iter__54515(s__54516){
return (new cljs.core.LazySeq(null,(function (){
var s__54516__$1 = s__54516;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__54516__$1);
if(temp__4657__auto__){
var s__54516__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54516__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__54516__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__54518 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__54517 = (0);
while(true){
if((i__54517 < size__25539__auto__)){
var p = cljs.core._nth.call(null,c__25538__auto__,i__54517);
cljs.core.chunk_append.call(null,b__54518,React.createElement("li",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("proc-"),cljs.core.str(p)].join('')], null))}),"Process ",sablono.interpreter.interpret.call(null,p)));

var G__54519 = (i__54517 + (1));
i__54517 = G__54519;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54518),hello_seymore$components$process_$_iter__54515.call(null,cljs.core.chunk_rest.call(null,s__54516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54518),null);
}
} else {
var p = cljs.core.first.call(null,s__54516__$2);
return cljs.core.cons.call(null,React.createElement("li",({"className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("proc-"),cljs.core.str(p)].join('')], null))}),"Process ",sablono.interpreter.interpret.call(null,p)),hello_seymore$components$process_$_iter__54515.call(null,cljs.core.rest.call(null,s__54516__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,cljs.core.reverse.call(null,queue));
})()));
});
hello_seymore.components.lane = (function hello_seymore$components$lane(lane__$1){
var attrs54521 = lane__$1;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs54521))?sablono.interpreter.attributes.call(null,attrs54521):null),((cljs.core.map_QMARK_.call(null,attrs54521))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs54521)], null)));
});
hello_seymore.components.running_track = (function hello_seymore$components$running_track(runners){
return React.createElement("div",null,cljs.core.into_array.call(null,(function (){var iter__25540__auto__ = (function hello_seymore$components$running_track_$_iter__54528(s__54529){
return (new cljs.core.LazySeq(null,(function (){
var s__54529__$1 = s__54529;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__54529__$1);
if(temp__4657__auto__){
var s__54529__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54529__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__54529__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__54531 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__54530 = (0);
while(true){
if((i__54530 < size__25539__auto__)){
var runner = cljs.core._nth.call(null,c__25538__auto__,i__54530);
cljs.core.chunk_append.call(null,b__54531,(function (){var attrs54527 = new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(runner);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs54527))?sablono.interpreter.attributes.call(null,attrs54527):null),((cljs.core.map_QMARK_.call(null,attrs54527))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs54527)], null)));
})());

var G__54532 = (i__54530 + (1));
i__54530 = G__54532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54531),hello_seymore$components$running_track_$_iter__54528.call(null,cljs.core.chunk_rest.call(null,s__54529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54531),null);
}
} else {
var runner = cljs.core.first.call(null,s__54529__$2);
return cljs.core.cons.call(null,(function (){var attrs54527 = new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(runner);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs54527))?sablono.interpreter.attributes.call(null,attrs54527):null),((cljs.core.map_QMARK_.call(null,attrs54527))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs54527)], null)));
})(),hello_seymore$components$running_track_$_iter__54528.call(null,cljs.core.rest.call(null,s__54529__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,cljs.core.deref.call(null,runners));
})()));
});
hello_seymore.components.podium = (function hello_seymore$components$podium(winners){
return React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__25540__auto__ = (function hello_seymore$components$podium_$_iter__54539(s__54540){
return (new cljs.core.LazySeq(null,(function (){
var s__54540__$1 = s__54540;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__54540__$1);
if(temp__4657__auto__){
var s__54540__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54540__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__54540__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__54542 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__54541 = (0);
while(true){
if((i__54541 < size__25539__auto__)){
var winner = cljs.core._nth.call(null,c__25538__auto__,i__54541);
cljs.core.chunk_append.call(null,b__54542,(function (){var attrs54538 = winner;
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs54538))?sablono.interpreter.attributes.call(null,attrs54538):null),((cljs.core.map_QMARK_.call(null,attrs54538))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs54538)], null)));
})());

var G__54543 = (i__54541 + (1));
i__54541 = G__54543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54542),hello_seymore$components$podium_$_iter__54539.call(null,cljs.core.chunk_rest.call(null,s__54540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54542),null);
}
} else {
var winner = cljs.core.first.call(null,s__54540__$2);
return cljs.core.cons.call(null,(function (){var attrs54538 = winner;
return cljs.core.apply.call(null,React.createElement,"li",((cljs.core.map_QMARK_.call(null,attrs54538))?sablono.interpreter.attributes.call(null,attrs54538):null),((cljs.core.map_QMARK_.call(null,attrs54538))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs54538)], null)));
})(),hello_seymore$components$podium_$_iter__54539.call(null,cljs.core.rest.call(null,s__54540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,cljs.core.deref.call(null,winners));
})()));
});
hello_seymore.components.race = (function hello_seymore$components$race(runners,winners,over_QMARK_){
var attrs54545 = hello_seymore.components.running_track.call(null,runners);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs54545))?sablono.interpreter.attributes.call(null,attrs54545):null),((cljs.core.map_QMARK_.call(null,attrs54545))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?sablono.interpreter.interpret.call(null,hello_seymore.components.podium.call(null,winners)):null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs54545),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?sablono.interpreter.interpret.call(null,hello_seymore.components.podium.call(null,winners)):null)], null)));
});

//# sourceMappingURL=components.js.map?rel=1617026566737