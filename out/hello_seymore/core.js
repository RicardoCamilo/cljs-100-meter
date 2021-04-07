// Compiled by ClojureScript 1.9.229 {}
goog.provide('hello_seymore.core');
goog.require('cljs.core');
goog.require('hello_seymore.components');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');

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
hello_seymore.core.Runner = (function (name,speed,lane,__meta,__extmap,__hash){
this.name = name;
this.speed = speed;
this.lane = lane;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
hello_seymore.core.Runner.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25382__auto__,k__25383__auto__){
var self__ = this;
var this__25382__auto____$1 = this;
return cljs.core._lookup.call(null,this__25382__auto____$1,k__25383__auto__,null);
});

hello_seymore.core.Runner.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25384__auto__,k57644,else__25385__auto__){
var self__ = this;
var this__25384__auto____$1 = this;
var G__57646 = (((k57644 instanceof cljs.core.Keyword))?k57644.fqn:null);
switch (G__57646) {
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
return cljs.core.get.call(null,self__.__extmap,k57644,else__25385__auto__);

}
});

hello_seymore.core.Runner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25396__auto__,writer__25397__auto__,opts__25398__auto__){
var self__ = this;
var this__25396__auto____$1 = this;
var pr_pair__25399__auto__ = ((function (this__25396__auto____$1){
return (function (keyval__25400__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,cljs.core.pr_writer,""," ","",opts__25398__auto__,keyval__25400__auto__);
});})(this__25396__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25397__auto__,pr_pair__25399__auto__,"#hello-seymore.core.Runner{",", ","}",opts__25398__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lane","lane",463787757),self__.lane],null))], null),self__.__extmap));
});

hello_seymore.core.Runner.prototype.cljs$core$IIterable$ = true;

hello_seymore.core.Runner.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__57643){
var self__ = this;
var G__57643__$1 = this;
return (new cljs.core.RecordIter((0),G__57643__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"lane","lane",463787757)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

hello_seymore.core.Runner.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25380__auto__){
var self__ = this;
var this__25380__auto____$1 = this;
return self__.__meta;
});

hello_seymore.core.Runner.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25376__auto__){
var self__ = this;
var this__25376__auto____$1 = this;
return (new hello_seymore.core.Runner(self__.name,self__.speed,self__.lane,self__.__meta,self__.__extmap,self__.__hash));
});

hello_seymore.core.Runner.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25386__auto__){
var self__ = this;
var this__25386__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

hello_seymore.core.Runner.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25377__auto__){
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

hello_seymore.core.Runner.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25378__auto__,other__25379__auto__){
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

hello_seymore.core.Runner.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25391__auto__,k__25392__auto__){
var self__ = this;
var this__25391__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"lane","lane",463787757),null], null), null),k__25392__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25391__auto____$1),self__.__meta),k__25392__auto__);
} else {
return (new hello_seymore.core.Runner(self__.name,self__.speed,self__.lane,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25392__auto__)),null));
}
});

hello_seymore.core.Runner.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25389__auto__,k__25390__auto__,G__57643){
var self__ = this;
var this__25389__auto____$1 = this;
var pred__57647 = cljs.core.keyword_identical_QMARK_;
var expr__57648 = k__25390__auto__;
if(cljs.core.truth_(pred__57647.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__57648))){
return (new hello_seymore.core.Runner(G__57643,self__.speed,self__.lane,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57647.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__57648))){
return (new hello_seymore.core.Runner(self__.name,G__57643,self__.lane,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__57647.call(null,new cljs.core.Keyword(null,"lane","lane",463787757),expr__57648))){
return (new hello_seymore.core.Runner(self__.name,self__.speed,G__57643,self__.__meta,self__.__extmap,null));
} else {
return (new hello_seymore.core.Runner(self__.name,self__.speed,self__.lane,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25390__auto__,G__57643),null));
}
}
}
});

hello_seymore.core.Runner.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25394__auto__){
var self__ = this;
var this__25394__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lane","lane",463787757),self__.lane],null))], null),self__.__extmap));
});

hello_seymore.core.Runner.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25381__auto__,G__57643){
var self__ = this;
var this__25381__auto____$1 = this;
return (new hello_seymore.core.Runner(self__.name,self__.speed,self__.lane,G__57643,self__.__extmap,self__.__hash));
});

hello_seymore.core.Runner.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25387__auto__,entry__25388__auto__){
var self__ = this;
var this__25387__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25388__auto__)){
return cljs.core._assoc.call(null,this__25387__auto____$1,cljs.core._nth.call(null,entry__25388__auto__,(0)),cljs.core._nth.call(null,entry__25388__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25387__auto____$1,entry__25388__auto__);
}
});

hello_seymore.core.Runner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"lane","lane",2104319284,null)], null);
});

hello_seymore.core.Runner.cljs$lang$type = true;

hello_seymore.core.Runner.cljs$lang$ctorPrSeq = (function (this__25416__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"hello-seymore.core/Runner");
});

hello_seymore.core.Runner.cljs$lang$ctorPrWriter = (function (this__25416__auto__,writer__25417__auto__){
return cljs.core._write.call(null,writer__25417__auto__,"hello-seymore.core/Runner");
});

hello_seymore.core.__GT_Runner = (function hello_seymore$core$__GT_Runner(name,speed,lane){
return (new hello_seymore.core.Runner(name,speed,lane,null,null,null));
});

hello_seymore.core.map__GT_Runner = (function hello_seymore$core$map__GT_Runner(G__57645){
return (new hello_seymore.core.Runner(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__57645),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__57645),new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(G__57645),null,cljs.core.dissoc.call(null,G__57645,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"lane","lane",463787757)),null));
});

hello_seymore.core.build_lane = (function hello_seymore$core$build_lane(name){
return cljs.core.conj.call(null,cljs.core.repeat.call(null,(99),"-"),name);
});
/**
 * Creates a new runner
 */
hello_seymore.core.runner = (function hello_seymore$core$runner(p__57651){
var map__57654 = p__57651;
var map__57654__$1 = ((((!((map__57654 == null)))?((((map__57654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57654):map__57654);
var name = cljs.core.get.call(null,map__57654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var speed = cljs.core.get.call(null,map__57654__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
return hello_seymore.core.map__GT_Runner.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),goog.string.format("%15s",name),new cljs.core.Keyword(null,"speed","speed",1257663751),speed,new cljs.core.Keyword(null,"lane","lane",463787757),hello_seymore.core.build_lane.call(null,name)], null));
});
hello_seymore.core.not_runner_QMARK_ = (function hello_seymore$core$not_runner_QMARK_(r){
return cljs.core._EQ_.call(null,r,"-");
});
hello_seymore.core.find_runner = (function hello_seymore$core$find_runner(lane){
return cljs.core.split_with.call(null,hello_seymore.core.not_runner_QMARK_,lane);
});
hello_seymore.core.take_step = (function hello_seymore$core$take_step(p__57656){
var vec__57660 = p__57656;
var a = cljs.core.nth.call(null,vec__57660,(0),null);
var b = cljs.core.nth.call(null,vec__57660,(1),null);
return cljs.core.concat.call(null,cljs.core.conj.call(null,a,"-"),cljs.core.butlast.call(null,b));
});
hello_seymore.core.print_running = (function hello_seymore$core$print_running(lane){
return clojure.string.join.call(null,"",lane);
});
hello_seymore.core.update_runner_lane = (function hello_seymore$core$update_runner_lane(lane,runner){
return cljs.core.assoc.call(null,runner,new cljs.core.Keyword(null,"lane","lane",463787757),lane);
});
hello_seymore.core.race_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"winners","winners",-1791403926),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"race-is-over?","race-is-over?",1585735969),false,new cljs.core.Keyword(null,"runners","runners",-1132778568),cljs.core.map.call(null,hello_seymore.core.runner,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Usain Bolt",new cljs.core.Keyword(null,"speed","speed",1257663751),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jesse Owens",new cljs.core.Keyword(null,"speed","speed",1257663751),(108)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Justin Gatlin",new cljs.core.Keyword(null,"speed","speed",1257663751),(116)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tyson Gay",new cljs.core.Keyword(null,"speed","speed",1257663751),(112)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tommie Smith",new cljs.core.Keyword(null,"speed","speed",1257663751),(122)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Carl Lewis",new cljs.core.Keyword(null,"speed","speed",1257663751),(101)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Florence",new cljs.core.Keyword(null,"speed","speed",1257663751),(102)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Maurice Greene",new cljs.core.Keyword(null,"speed","speed",1257663751),(117)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Donovan Bailey",new cljs.core.Keyword(null,"speed","speed",1257663751),(125)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Michael Johnson",new cljs.core.Keyword(null,"speed","speed",1257663751),(119)], null)], null))], null));
hello_seymore.core.finish_line = cljs.core.async.chan.call(null,(10));
hello_seymore.core.runners = cljs.core.atom.call(null,cljs.core.map.call(null,hello_seymore.core.runner,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Usain Bolt",new cljs.core.Keyword(null,"speed","speed",1257663751),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jesse Owens",new cljs.core.Keyword(null,"speed","speed",1257663751),(108)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Justin Gatlin",new cljs.core.Keyword(null,"speed","speed",1257663751),(116)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tyson Gay",new cljs.core.Keyword(null,"speed","speed",1257663751),(112)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Tommie Smith",new cljs.core.Keyword(null,"speed","speed",1257663751),(122)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Carl Lewis",new cljs.core.Keyword(null,"speed","speed",1257663751),(101)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Florence",new cljs.core.Keyword(null,"speed","speed",1257663751),(102)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Maurice Greene",new cljs.core.Keyword(null,"speed","speed",1257663751),(117)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Donovan Bailey",new cljs.core.Keyword(null,"speed","speed",1257663751),(125)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Michael Johnson",new cljs.core.Keyword(null,"speed","speed",1257663751),(119)], null)], null)));
hello_seymore.core.winners = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_seymore.core.race_is_over_QMARK_ = cljs.core.atom.call(null,false);
hello_seymore.core.render_BANG_ = (function hello_seymore$core$render_BANG_(){
return ReactDOM.render(hello_seymore.components.race.call(null,hello_seymore.core.runners,hello_seymore.core.winners,hello_seymore.core.race_is_over_QMARK_),document.getElementById("app"));
});
cljs.core.add_watch.call(null,hello_seymore.core.runners,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return hello_seymore.core.render_BANG_.call(null);
}));
hello_seymore.core.update_running_tracking = (function hello_seymore$core$update_running_tracking(runners_l,runner){
return cljs.core.reduce.call(null,(function (acc,val){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(runner),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(val))){
return cljs.core.conj.call(null,acc,val);
} else {
return cljs.core.conj.call(null,acc,runner);
}
}),cljs.core.PersistentVector.EMPTY,runners_l);
});
hello_seymore.core.update_running_trackingV2 = (function hello_seymore$core$update_running_trackingV2(running_track,runner){
return cljs.core.reduce.call(null,(function (acc,val){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(runner),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(val))){
return cljs.core.conj.call(null,acc,val);
} else {
return cljs.core.conj.call(null,acc,runner);
}
}),cljs.core.PersistentVector.EMPTY,running_track);
});
hello_seymore.core.render_BANG_.call(null);
hello_seymore.core.run = (function hello_seymore$core$run(lane,runner){
return hello_seymore.core.update_runner_lane.call(null,hello_seymore.core.take_step.call(null,hello_seymore.core.find_runner.call(null,lane)),runner);
});
var seq__57663_57891 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_seymore.core.runners));
var chunk__57664_57892 = null;
var count__57665_57893 = (0);
var i__57666_57894 = (0);
while(true){
if((i__57666_57894 < count__57665_57893)){
var r_57895 = cljs.core._nth.call(null,chunk__57664_57892,i__57666_57894);
var c__28723__auto___57896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57896,r_57895){
return (function (){
var f__28724__auto__ = (function (){var switch__28658__auto__ = ((function (seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57896,r_57895){
return (function (state_57736){
var state_val_57737 = (state_57736[(1)]);
if((state_val_57737 === (7))){
var inst_57681 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
var statearr_57738_57897 = state_57736__$1;
(statearr_57738_57897[(2)] = inst_57681);

(statearr_57738_57897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (20))){
var inst_57693 = (state_57736[(7)]);
var state_57736__$1 = state_57736;
var statearr_57739_57898 = state_57736__$1;
(statearr_57739_57898[(2)] = inst_57693);

(statearr_57739_57898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (1))){
var inst_57671 = (r_57895 == null);
var inst_57672 = cljs.core.not.call(null,inst_57671);
var state_57736__$1 = state_57736;
if(inst_57672){
var statearr_57740_57899 = state_57736__$1;
(statearr_57740_57899[(1)] = (2));

} else {
var statearr_57741_57900 = state_57736__$1;
(statearr_57741_57900[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (24))){
var inst_57717 = (state_57736[(8)]);
var inst_57728 = hello_seymore.core.run.call(null,inst_57717,r_57895);
var inst_57729 = cljs.core.swap_BANG_.call(null,hello_seymore.core.runners,hello_seymore.core.update_running_tracking,inst_57728);
var inst_57693 = inst_57728;
var state_57736__$1 = (function (){var statearr_57742 = state_57736;
(statearr_57742[(7)] = inst_57693);

(statearr_57742[(9)] = inst_57729);

return statearr_57742;
})();
var statearr_57743_57901 = state_57736__$1;
(statearr_57743_57901[(2)] = null);

(statearr_57743_57901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (4))){
var inst_57684 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
if(cljs.core.truth_(inst_57684)){
var statearr_57744_57902 = state_57736__$1;
(statearr_57744_57902[(1)] = (8));

} else {
var statearr_57745_57903 = state_57736__$1;
(statearr_57745_57903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (15))){
var inst_57710 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
if(cljs.core.truth_(inst_57710)){
var statearr_57746_57904 = state_57736__$1;
(statearr_57746_57904[(1)] = (19));

} else {
var statearr_57747_57905 = state_57736__$1;
(statearr_57747_57905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (21))){
var inst_57717 = (state_57736[(8)]);
var inst_57715 = (state_57736[(2)]);
var inst_57716 = cljs.core.get.call(null,inst_57715,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_57717__$1 = cljs.core.get.call(null,inst_57715,new cljs.core.Keyword(null,"lane","lane",463787757));
var inst_57718 = cljs.core.get.call(null,inst_57715,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_57719 = cljs.core.last.call(null,inst_57717__$1);
var inst_57720 = cljs.core.async.timeout.call(null,inst_57716);
var state_57736__$1 = (function (){var statearr_57748 = state_57736;
(statearr_57748[(10)] = inst_57718);

(statearr_57748[(8)] = inst_57717__$1);

(statearr_57748[(11)] = inst_57719);

return statearr_57748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57736__$1,(22),inst_57720);
} else {
if((state_val_57737 === (13))){
var inst_57693 = (state_57736[(7)]);
var inst_57700 = inst_57693.cljs$lang$protocol_mask$partition0$;
var inst_57701 = (inst_57700 & (64));
var inst_57702 = inst_57693.cljs$core$ISeq$;
var inst_57703 = (inst_57701) || (inst_57702);
var state_57736__$1 = state_57736;
if(cljs.core.truth_(inst_57703)){
var statearr_57749_57906 = state_57736__$1;
(statearr_57749_57906[(1)] = (16));

} else {
var statearr_57750_57907 = state_57736__$1;
(statearr_57750_57907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (22))){
var inst_57719 = (state_57736[(11)]);
var inst_57722 = (state_57736[(2)]);
var inst_57723 = cljs.core.not_EQ_.call(null,inst_57719,"-");
var state_57736__$1 = (function (){var statearr_57751 = state_57736;
(statearr_57751[(12)] = inst_57722);

return statearr_57751;
})();
if(inst_57723){
var statearr_57752_57908 = state_57736__$1;
(statearr_57752_57908[(1)] = (23));

} else {
var statearr_57753_57909 = state_57736__$1;
(statearr_57753_57909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (6))){
var state_57736__$1 = state_57736;
var statearr_57754_57910 = state_57736__$1;
(statearr_57754_57910[(2)] = false);

(statearr_57754_57910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (25))){
var inst_57732 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
var statearr_57755_57911 = state_57736__$1;
(statearr_57755_57911[(2)] = inst_57732);

(statearr_57755_57911[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (17))){
var state_57736__$1 = state_57736;
var statearr_57756_57912 = state_57736__$1;
(statearr_57756_57912[(2)] = false);

(statearr_57756_57912[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (3))){
var state_57736__$1 = state_57736;
var statearr_57757_57913 = state_57736__$1;
(statearr_57757_57913[(2)] = false);

(statearr_57757_57913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (12))){
var inst_57734 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57736__$1,inst_57734);
} else {
if((state_val_57737 === (2))){
var inst_57674 = r_57895.cljs$lang$protocol_mask$partition0$;
var inst_57675 = (inst_57674 & (64));
var inst_57676 = r_57895.cljs$core$ISeq$;
var inst_57677 = (inst_57675) || (inst_57676);
var state_57736__$1 = state_57736;
if(cljs.core.truth_(inst_57677)){
var statearr_57758_57914 = state_57736__$1;
(statearr_57758_57914[(1)] = (5));

} else {
var statearr_57759_57915 = state_57736__$1;
(statearr_57759_57915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (23))){
var inst_57718 = (state_57736[(10)]);
var state_57736__$1 = state_57736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57736__$1,(26),hello_seymore.core.finish_line,inst_57718);
} else {
if((state_val_57737 === (19))){
var inst_57693 = (state_57736[(7)]);
var inst_57712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57693);
var state_57736__$1 = state_57736;
var statearr_57760_57916 = state_57736__$1;
(statearr_57760_57916[(2)] = inst_57712);

(statearr_57760_57916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (11))){
var inst_57693 = (state_57736[(7)]);
var inst_57697 = (inst_57693 == null);
var inst_57698 = cljs.core.not.call(null,inst_57697);
var state_57736__$1 = state_57736;
if(inst_57698){
var statearr_57761_57917 = state_57736__$1;
(statearr_57761_57917[(1)] = (13));

} else {
var statearr_57762_57918 = state_57736__$1;
(statearr_57762_57918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (9))){
var state_57736__$1 = state_57736;
var statearr_57763_57919 = state_57736__$1;
(statearr_57763_57919[(2)] = r_57895);

(statearr_57763_57919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (5))){
var state_57736__$1 = state_57736;
var statearr_57764_57920 = state_57736__$1;
(statearr_57764_57920[(2)] = true);

(statearr_57764_57920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (14))){
var state_57736__$1 = state_57736;
var statearr_57765_57921 = state_57736__$1;
(statearr_57765_57921[(2)] = false);

(statearr_57765_57921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (26))){
var inst_57726 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
var statearr_57766_57922 = state_57736__$1;
(statearr_57766_57922[(2)] = inst_57726);

(statearr_57766_57922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (16))){
var state_57736__$1 = state_57736;
var statearr_57767_57923 = state_57736__$1;
(statearr_57767_57923[(2)] = true);

(statearr_57767_57923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (10))){
var inst_57689 = (state_57736[(2)]);
var inst_57690 = cljs.core.get.call(null,inst_57689,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_57691 = cljs.core.get.call(null,inst_57689,new cljs.core.Keyword(null,"lane","lane",463787757));
var inst_57692 = cljs.core.get.call(null,inst_57689,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_57693 = r_57895;
var state_57736__$1 = (function (){var statearr_57768 = state_57736;
(statearr_57768[(7)] = inst_57693);

(statearr_57768[(13)] = inst_57692);

(statearr_57768[(14)] = inst_57690);

(statearr_57768[(15)] = inst_57691);

return statearr_57768;
})();
var statearr_57769_57924 = state_57736__$1;
(statearr_57769_57924[(2)] = null);

(statearr_57769_57924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (18))){
var inst_57707 = (state_57736[(2)]);
var state_57736__$1 = state_57736;
var statearr_57770_57925 = state_57736__$1;
(statearr_57770_57925[(2)] = inst_57707);

(statearr_57770_57925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57737 === (8))){
var inst_57686 = cljs.core.apply.call(null,cljs.core.hash_map,r_57895);
var state_57736__$1 = state_57736;
var statearr_57771_57926 = state_57736__$1;
(statearr_57771_57926[(2)] = inst_57686);

(statearr_57771_57926[(1)] = (10));


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
});})(seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57896,r_57895))
;
return ((function (seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,switch__28658__auto__,c__28723__auto___57896,r_57895){
return (function() {
var hello_seymore$core$state_machine__28659__auto__ = null;
var hello_seymore$core$state_machine__28659__auto____0 = (function (){
var statearr_57775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57775[(0)] = hello_seymore$core$state_machine__28659__auto__);

(statearr_57775[(1)] = (1));

return statearr_57775;
});
var hello_seymore$core$state_machine__28659__auto____1 = (function (state_57736){
while(true){
var ret_value__28660__auto__ = (function (){try{while(true){
var result__28661__auto__ = switch__28658__auto__.call(null,state_57736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28661__auto__;
}
break;
}
}catch (e57776){if((e57776 instanceof Object)){
var ex__28662__auto__ = e57776;
var statearr_57777_57927 = state_57736;
(statearr_57777_57927[(5)] = ex__28662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57928 = state_57736;
state_57736 = G__57928;
continue;
} else {
return ret_value__28660__auto__;
}
break;
}
});
hello_seymore$core$state_machine__28659__auto__ = function(state_57736){
switch(arguments.length){
case 0:
return hello_seymore$core$state_machine__28659__auto____0.call(this);
case 1:
return hello_seymore$core$state_machine__28659__auto____1.call(this,state_57736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_seymore$core$state_machine__28659__auto__.cljs$core$IFn$_invoke$arity$0 = hello_seymore$core$state_machine__28659__auto____0;
hello_seymore$core$state_machine__28659__auto__.cljs$core$IFn$_invoke$arity$1 = hello_seymore$core$state_machine__28659__auto____1;
return hello_seymore$core$state_machine__28659__auto__;
})()
;})(seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,switch__28658__auto__,c__28723__auto___57896,r_57895))
})();
var state__28725__auto__ = (function (){var statearr_57778 = f__28724__auto__.call(null);
(statearr_57778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28723__auto___57896);

return statearr_57778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28725__auto__);
});})(seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57896,r_57895))
);


var G__57929 = seq__57663_57891;
var G__57930 = chunk__57664_57892;
var G__57931 = count__57665_57893;
var G__57932 = (i__57666_57894 + (1));
seq__57663_57891 = G__57929;
chunk__57664_57892 = G__57930;
count__57665_57893 = G__57931;
i__57666_57894 = G__57932;
continue;
} else {
var temp__4657__auto___57933 = cljs.core.seq.call(null,seq__57663_57891);
if(temp__4657__auto___57933){
var seq__57663_57934__$1 = temp__4657__auto___57933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57663_57934__$1)){
var c__25571__auto___57935 = cljs.core.chunk_first.call(null,seq__57663_57934__$1);
var G__57936 = cljs.core.chunk_rest.call(null,seq__57663_57934__$1);
var G__57937 = c__25571__auto___57935;
var G__57938 = cljs.core.count.call(null,c__25571__auto___57935);
var G__57939 = (0);
seq__57663_57891 = G__57936;
chunk__57664_57892 = G__57937;
count__57665_57893 = G__57938;
i__57666_57894 = G__57939;
continue;
} else {
var r_57940 = cljs.core.first.call(null,seq__57663_57934__$1);
var c__28723__auto___57941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57941,r_57940,seq__57663_57934__$1,temp__4657__auto___57933){
return (function (){
var f__28724__auto__ = (function (){var switch__28658__auto__ = ((function (seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57941,r_57940,seq__57663_57934__$1,temp__4657__auto___57933){
return (function (state_57848){
var state_val_57849 = (state_57848[(1)]);
if((state_val_57849 === (7))){
var inst_57793 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
var statearr_57850_57942 = state_57848__$1;
(statearr_57850_57942[(2)] = inst_57793);

(statearr_57850_57942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (20))){
var inst_57805 = (state_57848[(7)]);
var state_57848__$1 = state_57848;
var statearr_57851_57943 = state_57848__$1;
(statearr_57851_57943[(2)] = inst_57805);

(statearr_57851_57943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (1))){
var inst_57783 = (r_57940 == null);
var inst_57784 = cljs.core.not.call(null,inst_57783);
var state_57848__$1 = state_57848;
if(inst_57784){
var statearr_57852_57944 = state_57848__$1;
(statearr_57852_57944[(1)] = (2));

} else {
var statearr_57853_57945 = state_57848__$1;
(statearr_57853_57945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (24))){
var inst_57829 = (state_57848[(8)]);
var inst_57840 = hello_seymore.core.run.call(null,inst_57829,r_57940);
var inst_57841 = cljs.core.swap_BANG_.call(null,hello_seymore.core.runners,hello_seymore.core.update_running_tracking,inst_57840);
var inst_57805 = inst_57840;
var state_57848__$1 = (function (){var statearr_57854 = state_57848;
(statearr_57854[(9)] = inst_57841);

(statearr_57854[(7)] = inst_57805);

return statearr_57854;
})();
var statearr_57855_57946 = state_57848__$1;
(statearr_57855_57946[(2)] = null);

(statearr_57855_57946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (4))){
var inst_57796 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
if(cljs.core.truth_(inst_57796)){
var statearr_57856_57947 = state_57848__$1;
(statearr_57856_57947[(1)] = (8));

} else {
var statearr_57857_57948 = state_57848__$1;
(statearr_57857_57948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (15))){
var inst_57822 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
if(cljs.core.truth_(inst_57822)){
var statearr_57858_57949 = state_57848__$1;
(statearr_57858_57949[(1)] = (19));

} else {
var statearr_57859_57950 = state_57848__$1;
(statearr_57859_57950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (21))){
var inst_57829 = (state_57848[(8)]);
var inst_57827 = (state_57848[(2)]);
var inst_57828 = cljs.core.get.call(null,inst_57827,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_57829__$1 = cljs.core.get.call(null,inst_57827,new cljs.core.Keyword(null,"lane","lane",463787757));
var inst_57830 = cljs.core.get.call(null,inst_57827,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_57831 = cljs.core.last.call(null,inst_57829__$1);
var inst_57832 = cljs.core.async.timeout.call(null,inst_57828);
var state_57848__$1 = (function (){var statearr_57860 = state_57848;
(statearr_57860[(8)] = inst_57829__$1);

(statearr_57860[(10)] = inst_57831);

(statearr_57860[(11)] = inst_57830);

return statearr_57860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57848__$1,(22),inst_57832);
} else {
if((state_val_57849 === (13))){
var inst_57805 = (state_57848[(7)]);
var inst_57812 = inst_57805.cljs$lang$protocol_mask$partition0$;
var inst_57813 = (inst_57812 & (64));
var inst_57814 = inst_57805.cljs$core$ISeq$;
var inst_57815 = (inst_57813) || (inst_57814);
var state_57848__$1 = state_57848;
if(cljs.core.truth_(inst_57815)){
var statearr_57861_57951 = state_57848__$1;
(statearr_57861_57951[(1)] = (16));

} else {
var statearr_57862_57952 = state_57848__$1;
(statearr_57862_57952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (22))){
var inst_57831 = (state_57848[(10)]);
var inst_57834 = (state_57848[(2)]);
var inst_57835 = cljs.core.not_EQ_.call(null,inst_57831,"-");
var state_57848__$1 = (function (){var statearr_57863 = state_57848;
(statearr_57863[(12)] = inst_57834);

return statearr_57863;
})();
if(inst_57835){
var statearr_57864_57953 = state_57848__$1;
(statearr_57864_57953[(1)] = (23));

} else {
var statearr_57865_57954 = state_57848__$1;
(statearr_57865_57954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (6))){
var state_57848__$1 = state_57848;
var statearr_57866_57955 = state_57848__$1;
(statearr_57866_57955[(2)] = false);

(statearr_57866_57955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (25))){
var inst_57844 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
var statearr_57867_57956 = state_57848__$1;
(statearr_57867_57956[(2)] = inst_57844);

(statearr_57867_57956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (17))){
var state_57848__$1 = state_57848;
var statearr_57868_57957 = state_57848__$1;
(statearr_57868_57957[(2)] = false);

(statearr_57868_57957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (3))){
var state_57848__$1 = state_57848;
var statearr_57869_57958 = state_57848__$1;
(statearr_57869_57958[(2)] = false);

(statearr_57869_57958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (12))){
var inst_57846 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57848__$1,inst_57846);
} else {
if((state_val_57849 === (2))){
var inst_57786 = r_57940.cljs$lang$protocol_mask$partition0$;
var inst_57787 = (inst_57786 & (64));
var inst_57788 = r_57940.cljs$core$ISeq$;
var inst_57789 = (inst_57787) || (inst_57788);
var state_57848__$1 = state_57848;
if(cljs.core.truth_(inst_57789)){
var statearr_57870_57959 = state_57848__$1;
(statearr_57870_57959[(1)] = (5));

} else {
var statearr_57871_57960 = state_57848__$1;
(statearr_57871_57960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (23))){
var inst_57830 = (state_57848[(11)]);
var state_57848__$1 = state_57848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57848__$1,(26),hello_seymore.core.finish_line,inst_57830);
} else {
if((state_val_57849 === (19))){
var inst_57805 = (state_57848[(7)]);
var inst_57824 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57805);
var state_57848__$1 = state_57848;
var statearr_57872_57961 = state_57848__$1;
(statearr_57872_57961[(2)] = inst_57824);

(statearr_57872_57961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (11))){
var inst_57805 = (state_57848[(7)]);
var inst_57809 = (inst_57805 == null);
var inst_57810 = cljs.core.not.call(null,inst_57809);
var state_57848__$1 = state_57848;
if(inst_57810){
var statearr_57873_57962 = state_57848__$1;
(statearr_57873_57962[(1)] = (13));

} else {
var statearr_57874_57963 = state_57848__$1;
(statearr_57874_57963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (9))){
var state_57848__$1 = state_57848;
var statearr_57875_57964 = state_57848__$1;
(statearr_57875_57964[(2)] = r_57940);

(statearr_57875_57964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (5))){
var state_57848__$1 = state_57848;
var statearr_57876_57965 = state_57848__$1;
(statearr_57876_57965[(2)] = true);

(statearr_57876_57965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (14))){
var state_57848__$1 = state_57848;
var statearr_57877_57966 = state_57848__$1;
(statearr_57877_57966[(2)] = false);

(statearr_57877_57966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (26))){
var inst_57838 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
var statearr_57878_57967 = state_57848__$1;
(statearr_57878_57967[(2)] = inst_57838);

(statearr_57878_57967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (16))){
var state_57848__$1 = state_57848;
var statearr_57879_57968 = state_57848__$1;
(statearr_57879_57968[(2)] = true);

(statearr_57879_57968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (10))){
var inst_57801 = (state_57848[(2)]);
var inst_57802 = cljs.core.get.call(null,inst_57801,new cljs.core.Keyword(null,"speed","speed",1257663751));
var inst_57803 = cljs.core.get.call(null,inst_57801,new cljs.core.Keyword(null,"lane","lane",463787757));
var inst_57804 = cljs.core.get.call(null,inst_57801,new cljs.core.Keyword(null,"name","name",1843675177));
var inst_57805 = r_57940;
var state_57848__$1 = (function (){var statearr_57880 = state_57848;
(statearr_57880[(13)] = inst_57804);

(statearr_57880[(14)] = inst_57803);

(statearr_57880[(7)] = inst_57805);

(statearr_57880[(15)] = inst_57802);

return statearr_57880;
})();
var statearr_57881_57969 = state_57848__$1;
(statearr_57881_57969[(2)] = null);

(statearr_57881_57969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (18))){
var inst_57819 = (state_57848[(2)]);
var state_57848__$1 = state_57848;
var statearr_57882_57970 = state_57848__$1;
(statearr_57882_57970[(2)] = inst_57819);

(statearr_57882_57970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57849 === (8))){
var inst_57798 = cljs.core.apply.call(null,cljs.core.hash_map,r_57940);
var state_57848__$1 = state_57848;
var statearr_57883_57971 = state_57848__$1;
(statearr_57883_57971[(2)] = inst_57798);

(statearr_57883_57971[(1)] = (10));


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
});})(seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57941,r_57940,seq__57663_57934__$1,temp__4657__auto___57933))
;
return ((function (seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,switch__28658__auto__,c__28723__auto___57941,r_57940,seq__57663_57934__$1,temp__4657__auto___57933){
return (function() {
var hello_seymore$core$state_machine__28659__auto__ = null;
var hello_seymore$core$state_machine__28659__auto____0 = (function (){
var statearr_57887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57887[(0)] = hello_seymore$core$state_machine__28659__auto__);

(statearr_57887[(1)] = (1));

return statearr_57887;
});
var hello_seymore$core$state_machine__28659__auto____1 = (function (state_57848){
while(true){
var ret_value__28660__auto__ = (function (){try{while(true){
var result__28661__auto__ = switch__28658__auto__.call(null,state_57848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28661__auto__;
}
break;
}
}catch (e57888){if((e57888 instanceof Object)){
var ex__28662__auto__ = e57888;
var statearr_57889_57972 = state_57848;
(statearr_57889_57972[(5)] = ex__28662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57973 = state_57848;
state_57848 = G__57973;
continue;
} else {
return ret_value__28660__auto__;
}
break;
}
});
hello_seymore$core$state_machine__28659__auto__ = function(state_57848){
switch(arguments.length){
case 0:
return hello_seymore$core$state_machine__28659__auto____0.call(this);
case 1:
return hello_seymore$core$state_machine__28659__auto____1.call(this,state_57848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_seymore$core$state_machine__28659__auto__.cljs$core$IFn$_invoke$arity$0 = hello_seymore$core$state_machine__28659__auto____0;
hello_seymore$core$state_machine__28659__auto__.cljs$core$IFn$_invoke$arity$1 = hello_seymore$core$state_machine__28659__auto____1;
return hello_seymore$core$state_machine__28659__auto__;
})()
;})(seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,switch__28658__auto__,c__28723__auto___57941,r_57940,seq__57663_57934__$1,temp__4657__auto___57933))
})();
var state__28725__auto__ = (function (){var statearr_57890 = f__28724__auto__.call(null);
(statearr_57890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28723__auto___57941);

return statearr_57890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28725__auto__);
});})(seq__57663_57891,chunk__57664_57892,count__57665_57893,i__57666_57894,c__28723__auto___57941,r_57940,seq__57663_57934__$1,temp__4657__auto___57933))
);


var G__57974 = cljs.core.next.call(null,seq__57663_57934__$1);
var G__57975 = null;
var G__57976 = (0);
var G__57977 = (0);
seq__57663_57891 = G__57974;
chunk__57664_57892 = G__57975;
count__57665_57893 = G__57976;
i__57666_57894 = G__57977;
continue;
}
} else {
}
}
break;
}
var c__28723__auto___58013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28723__auto___58013){
return (function (){
var f__28724__auto__ = (function (){var switch__28658__auto__ = ((function (c__28723__auto___58013){
return (function (state_57996){
var state_val_57997 = (state_57996[(1)]);
if((state_val_57997 === (1))){
var state_57996__$1 = state_57996;
var statearr_57998_58014 = state_57996__$1;
(statearr_57998_58014[(2)] = null);

(statearr_57998_58014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57997 === (2))){
var inst_57979 = cljs.core.deref.call(null,hello_seymore.core.winners);
var inst_57980 = cljs.core.count.call(null,inst_57979);
var inst_57981 = (inst_57980 < (10));
var state_57996__$1 = state_57996;
if(cljs.core.truth_(inst_57981)){
var statearr_57999_58015 = state_57996__$1;
(statearr_57999_58015[(1)] = (4));

} else {
var statearr_58000_58016 = state_57996__$1;
(statearr_58000_58016[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57997 === (3))){
var inst_57991 = (state_57996[(2)]);
var inst_57992 = cljs.core.swap_BANG_.call(null,hello_seymore.core.race_is_over_QMARK_,cljs.core.not);
var inst_57993 = cljs.core.swap_BANG_.call(null,hello_seymore.core.winners,cljs.core.subvec,(0),(3));
var inst_57994 = hello_seymore.core.render_BANG_.call(null);
var state_57996__$1 = (function (){var statearr_58001 = state_57996;
(statearr_58001[(7)] = inst_57992);

(statearr_58001[(8)] = inst_57991);

(statearr_58001[(9)] = inst_57993);

return statearr_58001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57996__$1,inst_57994);
} else {
if((state_val_57997 === (4))){
var state_57996__$1 = state_57996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57996__$1,(7),hello_seymore.core.finish_line);
} else {
if((state_val_57997 === (5))){
var state_57996__$1 = state_57996;
var statearr_58002_58017 = state_57996__$1;
(statearr_58002_58017[(2)] = null);

(statearr_58002_58017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57997 === (6))){
var inst_57989 = (state_57996[(2)]);
var state_57996__$1 = state_57996;
var statearr_58003_58018 = state_57996__$1;
(statearr_58003_58018[(2)] = inst_57989);

(statearr_58003_58018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57997 === (7))){
var inst_57984 = (state_57996[(2)]);
var inst_57985 = cljs.core.swap_BANG_.call(null,hello_seymore.core.winners,cljs.core.conj,inst_57984);
var state_57996__$1 = (function (){var statearr_58004 = state_57996;
(statearr_58004[(10)] = inst_57985);

return statearr_58004;
})();
var statearr_58005_58019 = state_57996__$1;
(statearr_58005_58019[(2)] = null);

(statearr_58005_58019[(1)] = (2));


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
});})(c__28723__auto___58013))
;
return ((function (switch__28658__auto__,c__28723__auto___58013){
return (function() {
var hello_seymore$core$state_machine__28659__auto__ = null;
var hello_seymore$core$state_machine__28659__auto____0 = (function (){
var statearr_58009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58009[(0)] = hello_seymore$core$state_machine__28659__auto__);

(statearr_58009[(1)] = (1));

return statearr_58009;
});
var hello_seymore$core$state_machine__28659__auto____1 = (function (state_57996){
while(true){
var ret_value__28660__auto__ = (function (){try{while(true){
var result__28661__auto__ = switch__28658__auto__.call(null,state_57996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28661__auto__;
}
break;
}
}catch (e58010){if((e58010 instanceof Object)){
var ex__28662__auto__ = e58010;
var statearr_58011_58020 = state_57996;
(statearr_58011_58020[(5)] = ex__28662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58021 = state_57996;
state_57996 = G__58021;
continue;
} else {
return ret_value__28660__auto__;
}
break;
}
});
hello_seymore$core$state_machine__28659__auto__ = function(state_57996){
switch(arguments.length){
case 0:
return hello_seymore$core$state_machine__28659__auto____0.call(this);
case 1:
return hello_seymore$core$state_machine__28659__auto____1.call(this,state_57996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_seymore$core$state_machine__28659__auto__.cljs$core$IFn$_invoke$arity$0 = hello_seymore$core$state_machine__28659__auto____0;
hello_seymore$core$state_machine__28659__auto__.cljs$core$IFn$_invoke$arity$1 = hello_seymore$core$state_machine__28659__auto____1;
return hello_seymore$core$state_machine__28659__auto__;
})()
;})(switch__28658__auto__,c__28723__auto___58013))
})();
var state__28725__auto__ = (function (){var statearr_58012 = f__28724__auto__.call(null);
(statearr_58012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28723__auto___58013);

return statearr_58012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28725__auto__);
});})(c__28723__auto___58013))
);

console.log(goog.string.format("%15s","Usain Bolt"));

//# sourceMappingURL=core.js.map?rel=1617192324237