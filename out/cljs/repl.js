// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33196){
var map__33221 = p__33196;
var map__33221__$1 = ((((!((map__33221 == null)))?((((map__33221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33221):map__33221);
var m = map__33221__$1;
var n = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33223_33245 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33224_33246 = null;
var count__33225_33247 = (0);
var i__33226_33248 = (0);
while(true){
if((i__33226_33248 < count__33225_33247)){
var f_33249 = cljs.core._nth.call(null,chunk__33224_33246,i__33226_33248);
cljs.core.println.call(null,"  ",f_33249);

var G__33250 = seq__33223_33245;
var G__33251 = chunk__33224_33246;
var G__33252 = count__33225_33247;
var G__33253 = (i__33226_33248 + (1));
seq__33223_33245 = G__33250;
chunk__33224_33246 = G__33251;
count__33225_33247 = G__33252;
i__33226_33248 = G__33253;
continue;
} else {
var temp__4657__auto___33254 = cljs.core.seq.call(null,seq__33223_33245);
if(temp__4657__auto___33254){
var seq__33223_33255__$1 = temp__4657__auto___33254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33223_33255__$1)){
var c__25572__auto___33256 = cljs.core.chunk_first.call(null,seq__33223_33255__$1);
var G__33257 = cljs.core.chunk_rest.call(null,seq__33223_33255__$1);
var G__33258 = c__25572__auto___33256;
var G__33259 = cljs.core.count.call(null,c__25572__auto___33256);
var G__33260 = (0);
seq__33223_33245 = G__33257;
chunk__33224_33246 = G__33258;
count__33225_33247 = G__33259;
i__33226_33248 = G__33260;
continue;
} else {
var f_33261 = cljs.core.first.call(null,seq__33223_33255__$1);
cljs.core.println.call(null,"  ",f_33261);

var G__33262 = cljs.core.next.call(null,seq__33223_33255__$1);
var G__33263 = null;
var G__33264 = (0);
var G__33265 = (0);
seq__33223_33245 = G__33262;
chunk__33224_33246 = G__33263;
count__33225_33247 = G__33264;
i__33226_33248 = G__33265;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33266 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24761__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33266);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33266)))?cljs.core.second.call(null,arglists_33266):arglists_33266));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33227_33267 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33228_33268 = null;
var count__33229_33269 = (0);
var i__33230_33270 = (0);
while(true){
if((i__33230_33270 < count__33229_33269)){
var vec__33231_33271 = cljs.core._nth.call(null,chunk__33228_33268,i__33230_33270);
var name_33272 = cljs.core.nth.call(null,vec__33231_33271,(0),null);
var map__33234_33273 = cljs.core.nth.call(null,vec__33231_33271,(1),null);
var map__33234_33274__$1 = ((((!((map__33234_33273 == null)))?((((map__33234_33273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33234_33273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33234_33273):map__33234_33273);
var doc_33275 = cljs.core.get.call(null,map__33234_33274__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33276 = cljs.core.get.call(null,map__33234_33274__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33272);

cljs.core.println.call(null," ",arglists_33276);

if(cljs.core.truth_(doc_33275)){
cljs.core.println.call(null," ",doc_33275);
} else {
}

var G__33277 = seq__33227_33267;
var G__33278 = chunk__33228_33268;
var G__33279 = count__33229_33269;
var G__33280 = (i__33230_33270 + (1));
seq__33227_33267 = G__33277;
chunk__33228_33268 = G__33278;
count__33229_33269 = G__33279;
i__33230_33270 = G__33280;
continue;
} else {
var temp__4657__auto___33281 = cljs.core.seq.call(null,seq__33227_33267);
if(temp__4657__auto___33281){
var seq__33227_33282__$1 = temp__4657__auto___33281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33227_33282__$1)){
var c__25572__auto___33283 = cljs.core.chunk_first.call(null,seq__33227_33282__$1);
var G__33284 = cljs.core.chunk_rest.call(null,seq__33227_33282__$1);
var G__33285 = c__25572__auto___33283;
var G__33286 = cljs.core.count.call(null,c__25572__auto___33283);
var G__33287 = (0);
seq__33227_33267 = G__33284;
chunk__33228_33268 = G__33285;
count__33229_33269 = G__33286;
i__33230_33270 = G__33287;
continue;
} else {
var vec__33236_33288 = cljs.core.first.call(null,seq__33227_33282__$1);
var name_33289 = cljs.core.nth.call(null,vec__33236_33288,(0),null);
var map__33239_33290 = cljs.core.nth.call(null,vec__33236_33288,(1),null);
var map__33239_33291__$1 = ((((!((map__33239_33290 == null)))?((((map__33239_33290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33239_33290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33239_33290):map__33239_33290);
var doc_33292 = cljs.core.get.call(null,map__33239_33291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33293 = cljs.core.get.call(null,map__33239_33291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33289);

cljs.core.println.call(null," ",arglists_33293);

if(cljs.core.truth_(doc_33292)){
cljs.core.println.call(null," ",doc_33292);
} else {
}

var G__33294 = cljs.core.next.call(null,seq__33227_33282__$1);
var G__33295 = null;
var G__33296 = (0);
var G__33297 = (0);
seq__33227_33267 = G__33294;
chunk__33228_33268 = G__33295;
count__33229_33269 = G__33296;
i__33230_33270 = G__33297;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33241 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33242 = null;
var count__33243 = (0);
var i__33244 = (0);
while(true){
if((i__33244 < count__33243)){
var role = cljs.core._nth.call(null,chunk__33242,i__33244);
var temp__4657__auto___33298__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33298__$1)){
var spec_33299 = temp__4657__auto___33298__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33299));
} else {
}

var G__33300 = seq__33241;
var G__33301 = chunk__33242;
var G__33302 = count__33243;
var G__33303 = (i__33244 + (1));
seq__33241 = G__33300;
chunk__33242 = G__33301;
count__33243 = G__33302;
i__33244 = G__33303;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33241);
if(temp__4657__auto____$1){
var seq__33241__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33241__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__33241__$1);
var G__33304 = cljs.core.chunk_rest.call(null,seq__33241__$1);
var G__33305 = c__25572__auto__;
var G__33306 = cljs.core.count.call(null,c__25572__auto__);
var G__33307 = (0);
seq__33241 = G__33304;
chunk__33242 = G__33305;
count__33243 = G__33306;
i__33244 = G__33307;
continue;
} else {
var role = cljs.core.first.call(null,seq__33241__$1);
var temp__4657__auto___33308__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33308__$2)){
var spec_33309 = temp__4657__auto___33308__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33309));
} else {
}

var G__33310 = cljs.core.next.call(null,seq__33241__$1);
var G__33311 = null;
var G__33312 = (0);
var G__33313 = (0);
seq__33241 = G__33310;
chunk__33242 = G__33311;
count__33243 = G__33312;
i__33244 = G__33313;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1616887329862