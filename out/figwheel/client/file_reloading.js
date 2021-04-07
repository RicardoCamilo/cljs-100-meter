// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24761__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24761__auto__){
return or__24761__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24761__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30826_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30826_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30831 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30832 = null;
var count__30833 = (0);
var i__30834 = (0);
while(true){
if((i__30834 < count__30833)){
var n = cljs.core._nth.call(null,chunk__30832,i__30834);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30835 = seq__30831;
var G__30836 = chunk__30832;
var G__30837 = count__30833;
var G__30838 = (i__30834 + (1));
seq__30831 = G__30835;
chunk__30832 = G__30836;
count__30833 = G__30837;
i__30834 = G__30838;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30831);
if(temp__4657__auto__){
var seq__30831__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30831__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__30831__$1);
var G__30839 = cljs.core.chunk_rest.call(null,seq__30831__$1);
var G__30840 = c__25572__auto__;
var G__30841 = cljs.core.count.call(null,c__25572__auto__);
var G__30842 = (0);
seq__30831 = G__30839;
chunk__30832 = G__30840;
count__30833 = G__30841;
i__30834 = G__30842;
continue;
} else {
var n = cljs.core.first.call(null,seq__30831__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30843 = cljs.core.next.call(null,seq__30831__$1);
var G__30844 = null;
var G__30845 = (0);
var G__30846 = (0);
seq__30831 = G__30843;
chunk__30832 = G__30844;
count__30833 = G__30845;
i__30834 = G__30846;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30897_30908 = cljs.core.seq.call(null,deps);
var chunk__30898_30909 = null;
var count__30899_30910 = (0);
var i__30900_30911 = (0);
while(true){
if((i__30900_30911 < count__30899_30910)){
var dep_30912 = cljs.core._nth.call(null,chunk__30898_30909,i__30900_30911);
topo_sort_helper_STAR_.call(null,dep_30912,(depth + (1)),state);

var G__30913 = seq__30897_30908;
var G__30914 = chunk__30898_30909;
var G__30915 = count__30899_30910;
var G__30916 = (i__30900_30911 + (1));
seq__30897_30908 = G__30913;
chunk__30898_30909 = G__30914;
count__30899_30910 = G__30915;
i__30900_30911 = G__30916;
continue;
} else {
var temp__4657__auto___30917 = cljs.core.seq.call(null,seq__30897_30908);
if(temp__4657__auto___30917){
var seq__30897_30918__$1 = temp__4657__auto___30917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30897_30918__$1)){
var c__25572__auto___30919 = cljs.core.chunk_first.call(null,seq__30897_30918__$1);
var G__30920 = cljs.core.chunk_rest.call(null,seq__30897_30918__$1);
var G__30921 = c__25572__auto___30919;
var G__30922 = cljs.core.count.call(null,c__25572__auto___30919);
var G__30923 = (0);
seq__30897_30908 = G__30920;
chunk__30898_30909 = G__30921;
count__30899_30910 = G__30922;
i__30900_30911 = G__30923;
continue;
} else {
var dep_30924 = cljs.core.first.call(null,seq__30897_30918__$1);
topo_sort_helper_STAR_.call(null,dep_30924,(depth + (1)),state);

var G__30925 = cljs.core.next.call(null,seq__30897_30918__$1);
var G__30926 = null;
var G__30927 = (0);
var G__30928 = (0);
seq__30897_30908 = G__30925;
chunk__30898_30909 = G__30926;
count__30899_30910 = G__30927;
i__30900_30911 = G__30928;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30901){
var vec__30905 = p__30901;
var seq__30906 = cljs.core.seq.call(null,vec__30905);
var first__30907 = cljs.core.first.call(null,seq__30906);
var seq__30906__$1 = cljs.core.next.call(null,seq__30906);
var x = first__30907;
var xs = seq__30906__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30905,seq__30906,first__30907,seq__30906__$1,x,xs,get_deps__$1){
return (function (p1__30847_SHARP_){
return clojure.set.difference.call(null,p1__30847_SHARP_,x);
});})(vec__30905,seq__30906,first__30907,seq__30906__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30941 = cljs.core.seq.call(null,provides);
var chunk__30942 = null;
var count__30943 = (0);
var i__30944 = (0);
while(true){
if((i__30944 < count__30943)){
var prov = cljs.core._nth.call(null,chunk__30942,i__30944);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30945_30953 = cljs.core.seq.call(null,requires);
var chunk__30946_30954 = null;
var count__30947_30955 = (0);
var i__30948_30956 = (0);
while(true){
if((i__30948_30956 < count__30947_30955)){
var req_30957 = cljs.core._nth.call(null,chunk__30946_30954,i__30948_30956);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30957,prov);

var G__30958 = seq__30945_30953;
var G__30959 = chunk__30946_30954;
var G__30960 = count__30947_30955;
var G__30961 = (i__30948_30956 + (1));
seq__30945_30953 = G__30958;
chunk__30946_30954 = G__30959;
count__30947_30955 = G__30960;
i__30948_30956 = G__30961;
continue;
} else {
var temp__4657__auto___30962 = cljs.core.seq.call(null,seq__30945_30953);
if(temp__4657__auto___30962){
var seq__30945_30963__$1 = temp__4657__auto___30962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30945_30963__$1)){
var c__25572__auto___30964 = cljs.core.chunk_first.call(null,seq__30945_30963__$1);
var G__30965 = cljs.core.chunk_rest.call(null,seq__30945_30963__$1);
var G__30966 = c__25572__auto___30964;
var G__30967 = cljs.core.count.call(null,c__25572__auto___30964);
var G__30968 = (0);
seq__30945_30953 = G__30965;
chunk__30946_30954 = G__30966;
count__30947_30955 = G__30967;
i__30948_30956 = G__30968;
continue;
} else {
var req_30969 = cljs.core.first.call(null,seq__30945_30963__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30969,prov);

var G__30970 = cljs.core.next.call(null,seq__30945_30963__$1);
var G__30971 = null;
var G__30972 = (0);
var G__30973 = (0);
seq__30945_30953 = G__30970;
chunk__30946_30954 = G__30971;
count__30947_30955 = G__30972;
i__30948_30956 = G__30973;
continue;
}
} else {
}
}
break;
}

var G__30974 = seq__30941;
var G__30975 = chunk__30942;
var G__30976 = count__30943;
var G__30977 = (i__30944 + (1));
seq__30941 = G__30974;
chunk__30942 = G__30975;
count__30943 = G__30976;
i__30944 = G__30977;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30941);
if(temp__4657__auto__){
var seq__30941__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30941__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__30941__$1);
var G__30978 = cljs.core.chunk_rest.call(null,seq__30941__$1);
var G__30979 = c__25572__auto__;
var G__30980 = cljs.core.count.call(null,c__25572__auto__);
var G__30981 = (0);
seq__30941 = G__30978;
chunk__30942 = G__30979;
count__30943 = G__30980;
i__30944 = G__30981;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30941__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30949_30982 = cljs.core.seq.call(null,requires);
var chunk__30950_30983 = null;
var count__30951_30984 = (0);
var i__30952_30985 = (0);
while(true){
if((i__30952_30985 < count__30951_30984)){
var req_30986 = cljs.core._nth.call(null,chunk__30950_30983,i__30952_30985);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30986,prov);

var G__30987 = seq__30949_30982;
var G__30988 = chunk__30950_30983;
var G__30989 = count__30951_30984;
var G__30990 = (i__30952_30985 + (1));
seq__30949_30982 = G__30987;
chunk__30950_30983 = G__30988;
count__30951_30984 = G__30989;
i__30952_30985 = G__30990;
continue;
} else {
var temp__4657__auto___30991__$1 = cljs.core.seq.call(null,seq__30949_30982);
if(temp__4657__auto___30991__$1){
var seq__30949_30992__$1 = temp__4657__auto___30991__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30949_30992__$1)){
var c__25572__auto___30993 = cljs.core.chunk_first.call(null,seq__30949_30992__$1);
var G__30994 = cljs.core.chunk_rest.call(null,seq__30949_30992__$1);
var G__30995 = c__25572__auto___30993;
var G__30996 = cljs.core.count.call(null,c__25572__auto___30993);
var G__30997 = (0);
seq__30949_30982 = G__30994;
chunk__30950_30983 = G__30995;
count__30951_30984 = G__30996;
i__30952_30985 = G__30997;
continue;
} else {
var req_30998 = cljs.core.first.call(null,seq__30949_30992__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30998,prov);

var G__30999 = cljs.core.next.call(null,seq__30949_30992__$1);
var G__31000 = null;
var G__31001 = (0);
var G__31002 = (0);
seq__30949_30982 = G__30999;
chunk__30950_30983 = G__31000;
count__30951_30984 = G__31001;
i__30952_30985 = G__31002;
continue;
}
} else {
}
}
break;
}

var G__31003 = cljs.core.next.call(null,seq__30941__$1);
var G__31004 = null;
var G__31005 = (0);
var G__31006 = (0);
seq__30941 = G__31003;
chunk__30942 = G__31004;
count__30943 = G__31005;
i__30944 = G__31006;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31011_31015 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31012_31016 = null;
var count__31013_31017 = (0);
var i__31014_31018 = (0);
while(true){
if((i__31014_31018 < count__31013_31017)){
var ns_31019 = cljs.core._nth.call(null,chunk__31012_31016,i__31014_31018);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31019);

var G__31020 = seq__31011_31015;
var G__31021 = chunk__31012_31016;
var G__31022 = count__31013_31017;
var G__31023 = (i__31014_31018 + (1));
seq__31011_31015 = G__31020;
chunk__31012_31016 = G__31021;
count__31013_31017 = G__31022;
i__31014_31018 = G__31023;
continue;
} else {
var temp__4657__auto___31024 = cljs.core.seq.call(null,seq__31011_31015);
if(temp__4657__auto___31024){
var seq__31011_31025__$1 = temp__4657__auto___31024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31011_31025__$1)){
var c__25572__auto___31026 = cljs.core.chunk_first.call(null,seq__31011_31025__$1);
var G__31027 = cljs.core.chunk_rest.call(null,seq__31011_31025__$1);
var G__31028 = c__25572__auto___31026;
var G__31029 = cljs.core.count.call(null,c__25572__auto___31026);
var G__31030 = (0);
seq__31011_31015 = G__31027;
chunk__31012_31016 = G__31028;
count__31013_31017 = G__31029;
i__31014_31018 = G__31030;
continue;
} else {
var ns_31031 = cljs.core.first.call(null,seq__31011_31025__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31031);

var G__31032 = cljs.core.next.call(null,seq__31011_31025__$1);
var G__31033 = null;
var G__31034 = (0);
var G__31035 = (0);
seq__31011_31015 = G__31032;
chunk__31012_31016 = G__31033;
count__31013_31017 = G__31034;
i__31014_31018 = G__31035;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24761__auto__ = goog.require__;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31036__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31037__i = 0, G__31037__a = new Array(arguments.length -  0);
while (G__31037__i < G__31037__a.length) {G__31037__a[G__31037__i] = arguments[G__31037__i + 0]; ++G__31037__i;}
  args = new cljs.core.IndexedSeq(G__31037__a,0);
} 
return G__31036__delegate.call(this,args);};
G__31036.cljs$lang$maxFixedArity = 0;
G__31036.cljs$lang$applyTo = (function (arglist__31038){
var args = cljs.core.seq(arglist__31038);
return G__31036__delegate(args);
});
G__31036.cljs$core$IFn$_invoke$arity$variadic = G__31036__delegate;
return G__31036;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31040 = cljs.core._EQ_;
var expr__31041 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31040.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31041))){
var path_parts = ((function (pred__31040,expr__31041){
return (function (p1__31039_SHARP_){
return clojure.string.split.call(null,p1__31039_SHARP_,/[\/\\]/);
});})(pred__31040,expr__31041))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31040,expr__31041){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31043){if((e31043 instanceof Error)){
var e = e31043;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31043;

}
}})());
});
;})(path_parts,sep,root,pred__31040,expr__31041))
} else {
if(cljs.core.truth_(pred__31040.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31041))){
return ((function (pred__31040,expr__31041){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31040,expr__31041){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31040,expr__31041))
);

return deferred.addErrback(((function (deferred,pred__31040,expr__31041){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31040,expr__31041))
);
});
;})(pred__31040,expr__31041))
} else {
return ((function (pred__31040,expr__31041){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31040,expr__31041))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31044,callback){
var map__31047 = p__31044;
var map__31047__$1 = ((((!((map__31047 == null)))?((((map__31047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31047):map__31047);
var file_msg = map__31047__$1;
var request_url = cljs.core.get.call(null,map__31047__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31047,map__31047__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31047,map__31047__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__){
return (function (state_31071){
var state_val_31072 = (state_31071[(1)]);
if((state_val_31072 === (7))){
var inst_31067 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
var statearr_31073_31093 = state_31071__$1;
(statearr_31073_31093[(2)] = inst_31067);

(statearr_31073_31093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (1))){
var state_31071__$1 = state_31071;
var statearr_31074_31094 = state_31071__$1;
(statearr_31074_31094[(2)] = null);

(statearr_31074_31094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (4))){
var inst_31051 = (state_31071[(7)]);
var inst_31051__$1 = (state_31071[(2)]);
var state_31071__$1 = (function (){var statearr_31075 = state_31071;
(statearr_31075[(7)] = inst_31051__$1);

return statearr_31075;
})();
if(cljs.core.truth_(inst_31051__$1)){
var statearr_31076_31095 = state_31071__$1;
(statearr_31076_31095[(1)] = (5));

} else {
var statearr_31077_31096 = state_31071__$1;
(statearr_31077_31096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (6))){
var state_31071__$1 = state_31071;
var statearr_31078_31097 = state_31071__$1;
(statearr_31078_31097[(2)] = null);

(statearr_31078_31097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (3))){
var inst_31069 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31071__$1,inst_31069);
} else {
if((state_val_31072 === (2))){
var state_31071__$1 = state_31071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31071__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31072 === (11))){
var inst_31063 = (state_31071[(2)]);
var state_31071__$1 = (function (){var statearr_31079 = state_31071;
(statearr_31079[(8)] = inst_31063);

return statearr_31079;
})();
var statearr_31080_31098 = state_31071__$1;
(statearr_31080_31098[(2)] = null);

(statearr_31080_31098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (9))){
var inst_31057 = (state_31071[(9)]);
var inst_31055 = (state_31071[(10)]);
var inst_31059 = inst_31057.call(null,inst_31055);
var state_31071__$1 = state_31071;
var statearr_31081_31099 = state_31071__$1;
(statearr_31081_31099[(2)] = inst_31059);

(statearr_31081_31099[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (5))){
var inst_31051 = (state_31071[(7)]);
var inst_31053 = figwheel.client.file_reloading.blocking_load.call(null,inst_31051);
var state_31071__$1 = state_31071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31071__$1,(8),inst_31053);
} else {
if((state_val_31072 === (10))){
var inst_31055 = (state_31071[(10)]);
var inst_31061 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31055);
var state_31071__$1 = state_31071;
var statearr_31082_31100 = state_31071__$1;
(statearr_31082_31100[(2)] = inst_31061);

(statearr_31082_31100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (8))){
var inst_31051 = (state_31071[(7)]);
var inst_31057 = (state_31071[(9)]);
var inst_31055 = (state_31071[(2)]);
var inst_31056 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31057__$1 = cljs.core.get.call(null,inst_31056,inst_31051);
var state_31071__$1 = (function (){var statearr_31083 = state_31071;
(statearr_31083[(9)] = inst_31057__$1);

(statearr_31083[(10)] = inst_31055);

return statearr_31083;
})();
if(cljs.core.truth_(inst_31057__$1)){
var statearr_31084_31101 = state_31071__$1;
(statearr_31084_31101[(1)] = (9));

} else {
var statearr_31085_31102 = state_31071__$1;
(statearr_31085_31102[(1)] = (10));

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
});})(c__27887__auto__))
;
return ((function (switch__26780__auto__,c__27887__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26781__auto__ = null;
var figwheel$client$file_reloading$state_machine__26781__auto____0 = (function (){
var statearr_31089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31089[(0)] = figwheel$client$file_reloading$state_machine__26781__auto__);

(statearr_31089[(1)] = (1));

return statearr_31089;
});
var figwheel$client$file_reloading$state_machine__26781__auto____1 = (function (state_31071){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_31071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e31090){if((e31090 instanceof Object)){
var ex__26784__auto__ = e31090;
var statearr_31091_31103 = state_31071;
(statearr_31091_31103[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31104 = state_31071;
state_31071 = G__31104;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26781__auto__ = function(state_31071){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26781__auto____1.call(this,state_31071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26781__auto____0;
figwheel$client$file_reloading$state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26781__auto____1;
return figwheel$client$file_reloading$state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__))
})();
var state__27889__auto__ = (function (){var statearr_31092 = f__27888__auto__.call(null);
(statearr_31092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_31092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__))
);

return c__27887__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31105,callback){
var map__31108 = p__31105;
var map__31108__$1 = ((((!((map__31108 == null)))?((((map__31108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31108):map__31108);
var file_msg = map__31108__$1;
var namespace = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31108,map__31108__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31108,map__31108__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31110){
var map__31113 = p__31110;
var map__31113__$1 = ((((!((map__31113 == null)))?((((map__31113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31113):map__31113);
var file_msg = map__31113__$1;
var namespace = cljs.core.get.call(null,map__31113__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24749__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24749__auto__){
var or__24761__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
var or__24761__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24761__auto____$1)){
return or__24761__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24749__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31115,callback){
var map__31118 = p__31115;
var map__31118__$1 = ((((!((map__31118 == null)))?((((map__31118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31118):map__31118);
var file_msg = map__31118__$1;
var request_url = cljs.core.get.call(null,map__31118__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31118__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27887__auto___31222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto___31222,out){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto___31222,out){
return (function (state_31204){
var state_val_31205 = (state_31204[(1)]);
if((state_val_31205 === (1))){
var inst_31178 = cljs.core.seq.call(null,files);
var inst_31179 = cljs.core.first.call(null,inst_31178);
var inst_31180 = cljs.core.next.call(null,inst_31178);
var inst_31181 = files;
var state_31204__$1 = (function (){var statearr_31206 = state_31204;
(statearr_31206[(7)] = inst_31181);

(statearr_31206[(8)] = inst_31179);

(statearr_31206[(9)] = inst_31180);

return statearr_31206;
})();
var statearr_31207_31223 = state_31204__$1;
(statearr_31207_31223[(2)] = null);

(statearr_31207_31223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (2))){
var inst_31181 = (state_31204[(7)]);
var inst_31187 = (state_31204[(10)]);
var inst_31186 = cljs.core.seq.call(null,inst_31181);
var inst_31187__$1 = cljs.core.first.call(null,inst_31186);
var inst_31188 = cljs.core.next.call(null,inst_31186);
var inst_31189 = (inst_31187__$1 == null);
var inst_31190 = cljs.core.not.call(null,inst_31189);
var state_31204__$1 = (function (){var statearr_31208 = state_31204;
(statearr_31208[(10)] = inst_31187__$1);

(statearr_31208[(11)] = inst_31188);

return statearr_31208;
})();
if(inst_31190){
var statearr_31209_31224 = state_31204__$1;
(statearr_31209_31224[(1)] = (4));

} else {
var statearr_31210_31225 = state_31204__$1;
(statearr_31210_31225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (3))){
var inst_31202 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31204__$1,inst_31202);
} else {
if((state_val_31205 === (4))){
var inst_31187 = (state_31204[(10)]);
var inst_31192 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31187);
var state_31204__$1 = state_31204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31204__$1,(7),inst_31192);
} else {
if((state_val_31205 === (5))){
var inst_31198 = cljs.core.async.close_BANG_.call(null,out);
var state_31204__$1 = state_31204;
var statearr_31211_31226 = state_31204__$1;
(statearr_31211_31226[(2)] = inst_31198);

(statearr_31211_31226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (6))){
var inst_31200 = (state_31204[(2)]);
var state_31204__$1 = state_31204;
var statearr_31212_31227 = state_31204__$1;
(statearr_31212_31227[(2)] = inst_31200);

(statearr_31212_31227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31205 === (7))){
var inst_31188 = (state_31204[(11)]);
var inst_31194 = (state_31204[(2)]);
var inst_31195 = cljs.core.async.put_BANG_.call(null,out,inst_31194);
var inst_31181 = inst_31188;
var state_31204__$1 = (function (){var statearr_31213 = state_31204;
(statearr_31213[(7)] = inst_31181);

(statearr_31213[(12)] = inst_31195);

return statearr_31213;
})();
var statearr_31214_31228 = state_31204__$1;
(statearr_31214_31228[(2)] = null);

(statearr_31214_31228[(1)] = (2));


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
});})(c__27887__auto___31222,out))
;
return ((function (switch__26780__auto__,c__27887__auto___31222,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto____0 = (function (){
var statearr_31218 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31218[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto__);

(statearr_31218[(1)] = (1));

return statearr_31218;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto____1 = (function (state_31204){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_31204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e31219){if((e31219 instanceof Object)){
var ex__26784__auto__ = e31219;
var statearr_31220_31229 = state_31204;
(statearr_31220_31229[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31230 = state_31204;
state_31204 = G__31230;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto__ = function(state_31204){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto____1.call(this,state_31204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto___31222,out))
})();
var state__27889__auto__ = (function (){var statearr_31221 = f__27888__auto__.call(null);
(statearr_31221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto___31222);

return statearr_31221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto___31222,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31231,opts){
var map__31235 = p__31231;
var map__31235__$1 = ((((!((map__31235 == null)))?((((map__31235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31235):map__31235);
var eval_body__$1 = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24749__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24749__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24749__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31237){var e = e31237;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31238_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31238_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31247){
var vec__31248 = p__31247;
var k = cljs.core.nth.call(null,vec__31248,(0),null);
var v = cljs.core.nth.call(null,vec__31248,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31251){
var vec__31252 = p__31251;
var k = cljs.core.nth.call(null,vec__31252,(0),null);
var v = cljs.core.nth.call(null,vec__31252,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31258,p__31259){
var map__31506 = p__31258;
var map__31506__$1 = ((((!((map__31506 == null)))?((((map__31506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506):map__31506);
var opts = map__31506__$1;
var before_jsload = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31506__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31507 = p__31259;
var map__31507__$1 = ((((!((map__31507 == null)))?((((map__31507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31507):map__31507);
var msg = map__31507__$1;
var files = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31507__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27887__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27888__auto__ = (function (){var switch__26780__auto__ = ((function (c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31660){
var state_val_31661 = (state_31660[(1)]);
if((state_val_31661 === (7))){
var inst_31523 = (state_31660[(7)]);
var inst_31524 = (state_31660[(8)]);
var inst_31521 = (state_31660[(9)]);
var inst_31522 = (state_31660[(10)]);
var inst_31529 = cljs.core._nth.call(null,inst_31522,inst_31524);
var inst_31530 = figwheel.client.file_reloading.eval_body.call(null,inst_31529,opts);
var inst_31531 = (inst_31524 + (1));
var tmp31662 = inst_31523;
var tmp31663 = inst_31521;
var tmp31664 = inst_31522;
var inst_31521__$1 = tmp31663;
var inst_31522__$1 = tmp31664;
var inst_31523__$1 = tmp31662;
var inst_31524__$1 = inst_31531;
var state_31660__$1 = (function (){var statearr_31665 = state_31660;
(statearr_31665[(7)] = inst_31523__$1);

(statearr_31665[(8)] = inst_31524__$1);

(statearr_31665[(11)] = inst_31530);

(statearr_31665[(9)] = inst_31521__$1);

(statearr_31665[(10)] = inst_31522__$1);

return statearr_31665;
})();
var statearr_31666_31752 = state_31660__$1;
(statearr_31666_31752[(2)] = null);

(statearr_31666_31752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (20))){
var inst_31564 = (state_31660[(12)]);
var inst_31572 = figwheel.client.file_reloading.sort_files.call(null,inst_31564);
var state_31660__$1 = state_31660;
var statearr_31667_31753 = state_31660__$1;
(statearr_31667_31753[(2)] = inst_31572);

(statearr_31667_31753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (27))){
var state_31660__$1 = state_31660;
var statearr_31668_31754 = state_31660__$1;
(statearr_31668_31754[(2)] = null);

(statearr_31668_31754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (1))){
var inst_31513 = (state_31660[(13)]);
var inst_31510 = before_jsload.call(null,files);
var inst_31511 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31512 = (function (){return ((function (inst_31513,inst_31510,inst_31511,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31255_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31255_SHARP_);
});
;})(inst_31513,inst_31510,inst_31511,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31513__$1 = cljs.core.filter.call(null,inst_31512,files);
var inst_31514 = cljs.core.not_empty.call(null,inst_31513__$1);
var state_31660__$1 = (function (){var statearr_31669 = state_31660;
(statearr_31669[(13)] = inst_31513__$1);

(statearr_31669[(14)] = inst_31511);

(statearr_31669[(15)] = inst_31510);

return statearr_31669;
})();
if(cljs.core.truth_(inst_31514)){
var statearr_31670_31755 = state_31660__$1;
(statearr_31670_31755[(1)] = (2));

} else {
var statearr_31671_31756 = state_31660__$1;
(statearr_31671_31756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (24))){
var state_31660__$1 = state_31660;
var statearr_31672_31757 = state_31660__$1;
(statearr_31672_31757[(2)] = null);

(statearr_31672_31757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (39))){
var inst_31614 = (state_31660[(16)]);
var state_31660__$1 = state_31660;
var statearr_31673_31758 = state_31660__$1;
(statearr_31673_31758[(2)] = inst_31614);

(statearr_31673_31758[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (46))){
var inst_31655 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31674_31759 = state_31660__$1;
(statearr_31674_31759[(2)] = inst_31655);

(statearr_31674_31759[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (4))){
var inst_31558 = (state_31660[(2)]);
var inst_31559 = cljs.core.List.EMPTY;
var inst_31560 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31559);
var inst_31561 = (function (){return ((function (inst_31558,inst_31559,inst_31560,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31256_SHARP_){
var and__24749__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31256_SHARP_);
if(cljs.core.truth_(and__24749__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31256_SHARP_));
} else {
return and__24749__auto__;
}
});
;})(inst_31558,inst_31559,inst_31560,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31562 = cljs.core.filter.call(null,inst_31561,files);
var inst_31563 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31564 = cljs.core.concat.call(null,inst_31562,inst_31563);
var state_31660__$1 = (function (){var statearr_31675 = state_31660;
(statearr_31675[(17)] = inst_31558);

(statearr_31675[(12)] = inst_31564);

(statearr_31675[(18)] = inst_31560);

return statearr_31675;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31676_31760 = state_31660__$1;
(statearr_31676_31760[(1)] = (16));

} else {
var statearr_31677_31761 = state_31660__$1;
(statearr_31677_31761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (15))){
var inst_31548 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31678_31762 = state_31660__$1;
(statearr_31678_31762[(2)] = inst_31548);

(statearr_31678_31762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (21))){
var inst_31574 = (state_31660[(19)]);
var inst_31574__$1 = (state_31660[(2)]);
var inst_31575 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31574__$1);
var state_31660__$1 = (function (){var statearr_31679 = state_31660;
(statearr_31679[(19)] = inst_31574__$1);

return statearr_31679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31660__$1,(22),inst_31575);
} else {
if((state_val_31661 === (31))){
var inst_31658 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31660__$1,inst_31658);
} else {
if((state_val_31661 === (32))){
var inst_31614 = (state_31660[(16)]);
var inst_31619 = inst_31614.cljs$lang$protocol_mask$partition0$;
var inst_31620 = (inst_31619 & (64));
var inst_31621 = inst_31614.cljs$core$ISeq$;
var inst_31622 = (inst_31620) || (inst_31621);
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31622)){
var statearr_31680_31763 = state_31660__$1;
(statearr_31680_31763[(1)] = (35));

} else {
var statearr_31681_31764 = state_31660__$1;
(statearr_31681_31764[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (40))){
var inst_31635 = (state_31660[(20)]);
var inst_31634 = (state_31660[(2)]);
var inst_31635__$1 = cljs.core.get.call(null,inst_31634,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31636 = cljs.core.get.call(null,inst_31634,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31637 = cljs.core.not_empty.call(null,inst_31635__$1);
var state_31660__$1 = (function (){var statearr_31682 = state_31660;
(statearr_31682[(21)] = inst_31636);

(statearr_31682[(20)] = inst_31635__$1);

return statearr_31682;
})();
if(cljs.core.truth_(inst_31637)){
var statearr_31683_31765 = state_31660__$1;
(statearr_31683_31765[(1)] = (41));

} else {
var statearr_31684_31766 = state_31660__$1;
(statearr_31684_31766[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (33))){
var state_31660__$1 = state_31660;
var statearr_31685_31767 = state_31660__$1;
(statearr_31685_31767[(2)] = false);

(statearr_31685_31767[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (13))){
var inst_31534 = (state_31660[(22)]);
var inst_31538 = cljs.core.chunk_first.call(null,inst_31534);
var inst_31539 = cljs.core.chunk_rest.call(null,inst_31534);
var inst_31540 = cljs.core.count.call(null,inst_31538);
var inst_31521 = inst_31539;
var inst_31522 = inst_31538;
var inst_31523 = inst_31540;
var inst_31524 = (0);
var state_31660__$1 = (function (){var statearr_31686 = state_31660;
(statearr_31686[(7)] = inst_31523);

(statearr_31686[(8)] = inst_31524);

(statearr_31686[(9)] = inst_31521);

(statearr_31686[(10)] = inst_31522);

return statearr_31686;
})();
var statearr_31687_31768 = state_31660__$1;
(statearr_31687_31768[(2)] = null);

(statearr_31687_31768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (22))){
var inst_31582 = (state_31660[(23)]);
var inst_31577 = (state_31660[(24)]);
var inst_31578 = (state_31660[(25)]);
var inst_31574 = (state_31660[(19)]);
var inst_31577__$1 = (state_31660[(2)]);
var inst_31578__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31577__$1);
var inst_31579 = (function (){var all_files = inst_31574;
var res_SINGLEQUOTE_ = inst_31577__$1;
var res = inst_31578__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31582,inst_31577,inst_31578,inst_31574,inst_31577__$1,inst_31578__$1,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31257_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31257_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31582,inst_31577,inst_31578,inst_31574,inst_31577__$1,inst_31578__$1,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31580 = cljs.core.filter.call(null,inst_31579,inst_31577__$1);
var inst_31581 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31582__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31581);
var inst_31583 = cljs.core.not_empty.call(null,inst_31582__$1);
var state_31660__$1 = (function (){var statearr_31688 = state_31660;
(statearr_31688[(23)] = inst_31582__$1);

(statearr_31688[(24)] = inst_31577__$1);

(statearr_31688[(25)] = inst_31578__$1);

(statearr_31688[(26)] = inst_31580);

return statearr_31688;
})();
if(cljs.core.truth_(inst_31583)){
var statearr_31689_31769 = state_31660__$1;
(statearr_31689_31769[(1)] = (23));

} else {
var statearr_31690_31770 = state_31660__$1;
(statearr_31690_31770[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (36))){
var state_31660__$1 = state_31660;
var statearr_31691_31771 = state_31660__$1;
(statearr_31691_31771[(2)] = false);

(statearr_31691_31771[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (41))){
var inst_31635 = (state_31660[(20)]);
var inst_31639 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31640 = cljs.core.map.call(null,inst_31639,inst_31635);
var inst_31641 = cljs.core.pr_str.call(null,inst_31640);
var inst_31642 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31641)].join('');
var inst_31643 = figwheel.client.utils.log.call(null,inst_31642);
var state_31660__$1 = state_31660;
var statearr_31692_31772 = state_31660__$1;
(statearr_31692_31772[(2)] = inst_31643);

(statearr_31692_31772[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (43))){
var inst_31636 = (state_31660[(21)]);
var inst_31646 = (state_31660[(2)]);
var inst_31647 = cljs.core.not_empty.call(null,inst_31636);
var state_31660__$1 = (function (){var statearr_31693 = state_31660;
(statearr_31693[(27)] = inst_31646);

return statearr_31693;
})();
if(cljs.core.truth_(inst_31647)){
var statearr_31694_31773 = state_31660__$1;
(statearr_31694_31773[(1)] = (44));

} else {
var statearr_31695_31774 = state_31660__$1;
(statearr_31695_31774[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (29))){
var inst_31582 = (state_31660[(23)]);
var inst_31577 = (state_31660[(24)]);
var inst_31578 = (state_31660[(25)]);
var inst_31614 = (state_31660[(16)]);
var inst_31580 = (state_31660[(26)]);
var inst_31574 = (state_31660[(19)]);
var inst_31610 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31613 = (function (){var all_files = inst_31574;
var res_SINGLEQUOTE_ = inst_31577;
var res = inst_31578;
var files_not_loaded = inst_31580;
var dependencies_that_loaded = inst_31582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31614,inst_31580,inst_31574,inst_31610,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31612){
var map__31696 = p__31612;
var map__31696__$1 = ((((!((map__31696 == null)))?((((map__31696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31696):map__31696);
var namespace = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31614,inst_31580,inst_31574,inst_31610,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31614__$1 = cljs.core.group_by.call(null,inst_31613,inst_31580);
var inst_31616 = (inst_31614__$1 == null);
var inst_31617 = cljs.core.not.call(null,inst_31616);
var state_31660__$1 = (function (){var statearr_31698 = state_31660;
(statearr_31698[(28)] = inst_31610);

(statearr_31698[(16)] = inst_31614__$1);

return statearr_31698;
})();
if(inst_31617){
var statearr_31699_31775 = state_31660__$1;
(statearr_31699_31775[(1)] = (32));

} else {
var statearr_31700_31776 = state_31660__$1;
(statearr_31700_31776[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (44))){
var inst_31636 = (state_31660[(21)]);
var inst_31649 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31636);
var inst_31650 = cljs.core.pr_str.call(null,inst_31649);
var inst_31651 = [cljs.core.str("not required: "),cljs.core.str(inst_31650)].join('');
var inst_31652 = figwheel.client.utils.log.call(null,inst_31651);
var state_31660__$1 = state_31660;
var statearr_31701_31777 = state_31660__$1;
(statearr_31701_31777[(2)] = inst_31652);

(statearr_31701_31777[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (6))){
var inst_31555 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31702_31778 = state_31660__$1;
(statearr_31702_31778[(2)] = inst_31555);

(statearr_31702_31778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (28))){
var inst_31580 = (state_31660[(26)]);
var inst_31607 = (state_31660[(2)]);
var inst_31608 = cljs.core.not_empty.call(null,inst_31580);
var state_31660__$1 = (function (){var statearr_31703 = state_31660;
(statearr_31703[(29)] = inst_31607);

return statearr_31703;
})();
if(cljs.core.truth_(inst_31608)){
var statearr_31704_31779 = state_31660__$1;
(statearr_31704_31779[(1)] = (29));

} else {
var statearr_31705_31780 = state_31660__$1;
(statearr_31705_31780[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (25))){
var inst_31578 = (state_31660[(25)]);
var inst_31594 = (state_31660[(2)]);
var inst_31595 = cljs.core.not_empty.call(null,inst_31578);
var state_31660__$1 = (function (){var statearr_31706 = state_31660;
(statearr_31706[(30)] = inst_31594);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31595)){
var statearr_31707_31781 = state_31660__$1;
(statearr_31707_31781[(1)] = (26));

} else {
var statearr_31708_31782 = state_31660__$1;
(statearr_31708_31782[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (34))){
var inst_31629 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31629)){
var statearr_31709_31783 = state_31660__$1;
(statearr_31709_31783[(1)] = (38));

} else {
var statearr_31710_31784 = state_31660__$1;
(statearr_31710_31784[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (17))){
var state_31660__$1 = state_31660;
var statearr_31711_31785 = state_31660__$1;
(statearr_31711_31785[(2)] = recompile_dependents);

(statearr_31711_31785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (3))){
var state_31660__$1 = state_31660;
var statearr_31712_31786 = state_31660__$1;
(statearr_31712_31786[(2)] = null);

(statearr_31712_31786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (12))){
var inst_31551 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31713_31787 = state_31660__$1;
(statearr_31713_31787[(2)] = inst_31551);

(statearr_31713_31787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (2))){
var inst_31513 = (state_31660[(13)]);
var inst_31520 = cljs.core.seq.call(null,inst_31513);
var inst_31521 = inst_31520;
var inst_31522 = null;
var inst_31523 = (0);
var inst_31524 = (0);
var state_31660__$1 = (function (){var statearr_31714 = state_31660;
(statearr_31714[(7)] = inst_31523);

(statearr_31714[(8)] = inst_31524);

(statearr_31714[(9)] = inst_31521);

(statearr_31714[(10)] = inst_31522);

return statearr_31714;
})();
var statearr_31715_31788 = state_31660__$1;
(statearr_31715_31788[(2)] = null);

(statearr_31715_31788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (23))){
var inst_31582 = (state_31660[(23)]);
var inst_31577 = (state_31660[(24)]);
var inst_31578 = (state_31660[(25)]);
var inst_31580 = (state_31660[(26)]);
var inst_31574 = (state_31660[(19)]);
var inst_31585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31587 = (function (){var all_files = inst_31574;
var res_SINGLEQUOTE_ = inst_31577;
var res = inst_31578;
var files_not_loaded = inst_31580;
var dependencies_that_loaded = inst_31582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31580,inst_31574,inst_31585,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31586){
var map__31716 = p__31586;
var map__31716__$1 = ((((!((map__31716 == null)))?((((map__31716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31716):map__31716);
var request_url = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31580,inst_31574,inst_31585,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31588 = cljs.core.reverse.call(null,inst_31582);
var inst_31589 = cljs.core.map.call(null,inst_31587,inst_31588);
var inst_31590 = cljs.core.pr_str.call(null,inst_31589);
var inst_31591 = figwheel.client.utils.log.call(null,inst_31590);
var state_31660__$1 = (function (){var statearr_31718 = state_31660;
(statearr_31718[(31)] = inst_31585);

return statearr_31718;
})();
var statearr_31719_31789 = state_31660__$1;
(statearr_31719_31789[(2)] = inst_31591);

(statearr_31719_31789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (35))){
var state_31660__$1 = state_31660;
var statearr_31720_31790 = state_31660__$1;
(statearr_31720_31790[(2)] = true);

(statearr_31720_31790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (19))){
var inst_31564 = (state_31660[(12)]);
var inst_31570 = figwheel.client.file_reloading.expand_files.call(null,inst_31564);
var state_31660__$1 = state_31660;
var statearr_31721_31791 = state_31660__$1;
(statearr_31721_31791[(2)] = inst_31570);

(statearr_31721_31791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (11))){
var state_31660__$1 = state_31660;
var statearr_31722_31792 = state_31660__$1;
(statearr_31722_31792[(2)] = null);

(statearr_31722_31792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (9))){
var inst_31553 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31723_31793 = state_31660__$1;
(statearr_31723_31793[(2)] = inst_31553);

(statearr_31723_31793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (5))){
var inst_31523 = (state_31660[(7)]);
var inst_31524 = (state_31660[(8)]);
var inst_31526 = (inst_31524 < inst_31523);
var inst_31527 = inst_31526;
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31527)){
var statearr_31724_31794 = state_31660__$1;
(statearr_31724_31794[(1)] = (7));

} else {
var statearr_31725_31795 = state_31660__$1;
(statearr_31725_31795[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (14))){
var inst_31534 = (state_31660[(22)]);
var inst_31543 = cljs.core.first.call(null,inst_31534);
var inst_31544 = figwheel.client.file_reloading.eval_body.call(null,inst_31543,opts);
var inst_31545 = cljs.core.next.call(null,inst_31534);
var inst_31521 = inst_31545;
var inst_31522 = null;
var inst_31523 = (0);
var inst_31524 = (0);
var state_31660__$1 = (function (){var statearr_31726 = state_31660;
(statearr_31726[(7)] = inst_31523);

(statearr_31726[(8)] = inst_31524);

(statearr_31726[(9)] = inst_31521);

(statearr_31726[(10)] = inst_31522);

(statearr_31726[(32)] = inst_31544);

return statearr_31726;
})();
var statearr_31727_31796 = state_31660__$1;
(statearr_31727_31796[(2)] = null);

(statearr_31727_31796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (45))){
var state_31660__$1 = state_31660;
var statearr_31728_31797 = state_31660__$1;
(statearr_31728_31797[(2)] = null);

(statearr_31728_31797[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (26))){
var inst_31582 = (state_31660[(23)]);
var inst_31577 = (state_31660[(24)]);
var inst_31578 = (state_31660[(25)]);
var inst_31580 = (state_31660[(26)]);
var inst_31574 = (state_31660[(19)]);
var inst_31597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31599 = (function (){var all_files = inst_31574;
var res_SINGLEQUOTE_ = inst_31577;
var res = inst_31578;
var files_not_loaded = inst_31580;
var dependencies_that_loaded = inst_31582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31580,inst_31574,inst_31597,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31598){
var map__31729 = p__31598;
var map__31729__$1 = ((((!((map__31729 == null)))?((((map__31729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31729):map__31729);
var namespace = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31729__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31580,inst_31574,inst_31597,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31600 = cljs.core.map.call(null,inst_31599,inst_31578);
var inst_31601 = cljs.core.pr_str.call(null,inst_31600);
var inst_31602 = figwheel.client.utils.log.call(null,inst_31601);
var inst_31603 = (function (){var all_files = inst_31574;
var res_SINGLEQUOTE_ = inst_31577;
var res = inst_31578;
var files_not_loaded = inst_31580;
var dependencies_that_loaded = inst_31582;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31580,inst_31574,inst_31597,inst_31599,inst_31600,inst_31601,inst_31602,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31577,inst_31578,inst_31580,inst_31574,inst_31597,inst_31599,inst_31600,inst_31601,inst_31602,state_val_31661,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31604 = setTimeout(inst_31603,(10));
var state_31660__$1 = (function (){var statearr_31731 = state_31660;
(statearr_31731[(33)] = inst_31597);

(statearr_31731[(34)] = inst_31602);

return statearr_31731;
})();
var statearr_31732_31798 = state_31660__$1;
(statearr_31732_31798[(2)] = inst_31604);

(statearr_31732_31798[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (16))){
var state_31660__$1 = state_31660;
var statearr_31733_31799 = state_31660__$1;
(statearr_31733_31799[(2)] = reload_dependents);

(statearr_31733_31799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (38))){
var inst_31614 = (state_31660[(16)]);
var inst_31631 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31614);
var state_31660__$1 = state_31660;
var statearr_31734_31800 = state_31660__$1;
(statearr_31734_31800[(2)] = inst_31631);

(statearr_31734_31800[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (30))){
var state_31660__$1 = state_31660;
var statearr_31735_31801 = state_31660__$1;
(statearr_31735_31801[(2)] = null);

(statearr_31735_31801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (10))){
var inst_31534 = (state_31660[(22)]);
var inst_31536 = cljs.core.chunked_seq_QMARK_.call(null,inst_31534);
var state_31660__$1 = state_31660;
if(inst_31536){
var statearr_31736_31802 = state_31660__$1;
(statearr_31736_31802[(1)] = (13));

} else {
var statearr_31737_31803 = state_31660__$1;
(statearr_31737_31803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (18))){
var inst_31568 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31568)){
var statearr_31738_31804 = state_31660__$1;
(statearr_31738_31804[(1)] = (19));

} else {
var statearr_31739_31805 = state_31660__$1;
(statearr_31739_31805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (42))){
var state_31660__$1 = state_31660;
var statearr_31740_31806 = state_31660__$1;
(statearr_31740_31806[(2)] = null);

(statearr_31740_31806[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (37))){
var inst_31626 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31741_31807 = state_31660__$1;
(statearr_31741_31807[(2)] = inst_31626);

(statearr_31741_31807[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31661 === (8))){
var inst_31521 = (state_31660[(9)]);
var inst_31534 = (state_31660[(22)]);
var inst_31534__$1 = cljs.core.seq.call(null,inst_31521);
var state_31660__$1 = (function (){var statearr_31742 = state_31660;
(statearr_31742[(22)] = inst_31534__$1);

return statearr_31742;
})();
if(inst_31534__$1){
var statearr_31743_31808 = state_31660__$1;
(statearr_31743_31808[(1)] = (10));

} else {
var statearr_31744_31809 = state_31660__$1;
(statearr_31744_31809[(1)] = (11));

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
}
});})(c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26780__auto__,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto____0 = (function (){
var statearr_31748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31748[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto__);

(statearr_31748[(1)] = (1));

return statearr_31748;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto____1 = (function (state_31660){
while(true){
var ret_value__26782__auto__ = (function (){try{while(true){
var result__26783__auto__ = switch__26780__auto__.call(null,state_31660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26783__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26783__auto__;
}
break;
}
}catch (e31749){if((e31749 instanceof Object)){
var ex__26784__auto__ = e31749;
var statearr_31750_31810 = state_31660;
(statearr_31750_31810[(5)] = ex__26784__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26782__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31811 = state_31660;
state_31660 = G__31811;
continue;
} else {
return ret_value__26782__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26781__auto__;
})()
;})(switch__26780__auto__,c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27889__auto__ = (function (){var statearr_31751 = f__27888__auto__.call(null);
(statearr_31751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27887__auto__);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27889__auto__);
});})(c__27887__auto__,map__31506,map__31506__$1,opts,before_jsload,on_jsload,reload_dependents,map__31507,map__31507__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27887__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31814,link){
var map__31817 = p__31814;
var map__31817__$1 = ((((!((map__31817 == null)))?((((map__31817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31817):map__31817);
var file = cljs.core.get.call(null,map__31817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31817,map__31817__$1,file){
return (function (p1__31812_SHARP_,p2__31813_SHARP_){
if(cljs.core._EQ_.call(null,p1__31812_SHARP_,p2__31813_SHARP_)){
return p1__31812_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31817,map__31817__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31823){
var map__31824 = p__31823;
var map__31824__$1 = ((((!((map__31824 == null)))?((((map__31824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31824):map__31824);
var match_length = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31824__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31819_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31819_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31826 = [];
var len__25836__auto___31829 = arguments.length;
var i__25837__auto___31830 = (0);
while(true){
if((i__25837__auto___31830 < len__25836__auto___31829)){
args31826.push((arguments[i__25837__auto___31830]));

var G__31831 = (i__25837__auto___31830 + (1));
i__25837__auto___31830 = G__31831;
continue;
} else {
}
break;
}

var G__31828 = args31826.length;
switch (G__31828) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31826.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31833_SHARP_,p2__31834_SHARP_){
return cljs.core.assoc.call(null,p1__31833_SHARP_,cljs.core.get.call(null,p2__31834_SHARP_,key),p2__31834_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31835){
var map__31838 = p__31835;
var map__31838__$1 = ((((!((map__31838 == null)))?((((map__31838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31838):map__31838);
var f_data = map__31838__$1;
var file = cljs.core.get.call(null,map__31838__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31840,p__31841){
var map__31850 = p__31840;
var map__31850__$1 = ((((!((map__31850 == null)))?((((map__31850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31850):map__31850);
var opts = map__31850__$1;
var on_cssload = cljs.core.get.call(null,map__31850__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31851 = p__31841;
var map__31851__$1 = ((((!((map__31851 == null)))?((((map__31851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31851):map__31851);
var files_msg = map__31851__$1;
var files = cljs.core.get.call(null,map__31851__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31854_31858 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31855_31859 = null;
var count__31856_31860 = (0);
var i__31857_31861 = (0);
while(true){
if((i__31857_31861 < count__31856_31860)){
var f_31862 = cljs.core._nth.call(null,chunk__31855_31859,i__31857_31861);
figwheel.client.file_reloading.reload_css_file.call(null,f_31862);

var G__31863 = seq__31854_31858;
var G__31864 = chunk__31855_31859;
var G__31865 = count__31856_31860;
var G__31866 = (i__31857_31861 + (1));
seq__31854_31858 = G__31863;
chunk__31855_31859 = G__31864;
count__31856_31860 = G__31865;
i__31857_31861 = G__31866;
continue;
} else {
var temp__4657__auto___31867 = cljs.core.seq.call(null,seq__31854_31858);
if(temp__4657__auto___31867){
var seq__31854_31868__$1 = temp__4657__auto___31867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31854_31868__$1)){
var c__25572__auto___31869 = cljs.core.chunk_first.call(null,seq__31854_31868__$1);
var G__31870 = cljs.core.chunk_rest.call(null,seq__31854_31868__$1);
var G__31871 = c__25572__auto___31869;
var G__31872 = cljs.core.count.call(null,c__25572__auto___31869);
var G__31873 = (0);
seq__31854_31858 = G__31870;
chunk__31855_31859 = G__31871;
count__31856_31860 = G__31872;
i__31857_31861 = G__31873;
continue;
} else {
var f_31874 = cljs.core.first.call(null,seq__31854_31868__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31874);

var G__31875 = cljs.core.next.call(null,seq__31854_31868__$1);
var G__31876 = null;
var G__31877 = (0);
var G__31878 = (0);
seq__31854_31858 = G__31875;
chunk__31855_31859 = G__31876;
count__31856_31860 = G__31877;
i__31857_31861 = G__31878;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31850,map__31850__$1,opts,on_cssload,map__31851,map__31851__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31850,map__31850__$1,opts,on_cssload,map__31851,map__31851__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1616887327781