// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
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
var or__28485__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28485__auto__){
return or__28485__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28485__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
var or__28485__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28485__auto____$1)){
return or__28485__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41089_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41089_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
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
var seq__41090 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41091 = null;
var count__41092 = (0);
var i__41093 = (0);
while(true){
if((i__41093 < count__41092)){
var n = cljs.core._nth.call(null,chunk__41091,i__41093);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41094 = seq__41090;
var G__41095 = chunk__41091;
var G__41096 = count__41092;
var G__41097 = (i__41093 + (1));
seq__41090 = G__41094;
chunk__41091 = G__41095;
count__41092 = G__41096;
i__41093 = G__41097;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41090);
if(temp__4657__auto__){
var seq__41090__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41090__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__41090__$1);
var G__41098 = cljs.core.chunk_rest.call(null,seq__41090__$1);
var G__41099 = c__29324__auto__;
var G__41100 = cljs.core.count.call(null,c__29324__auto__);
var G__41101 = (0);
seq__41090 = G__41098;
chunk__41091 = G__41099;
count__41092 = G__41100;
i__41093 = G__41101;
continue;
} else {
var n = cljs.core.first.call(null,seq__41090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41102 = cljs.core.next.call(null,seq__41090__$1);
var G__41103 = null;
var G__41104 = (0);
var G__41105 = (0);
seq__41090 = G__41102;
chunk__41091 = G__41103;
count__41092 = G__41104;
i__41093 = G__41105;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__41106){
var vec__41107 = p__41106;
var _ = cljs.core.nth.call(null,vec__41107,(0),null);
var v = cljs.core.nth.call(null,vec__41107,(1),null);
var and__28473__auto__ = v;
if(cljs.core.truth_(and__28473__auto__)){
return v.call(null,dep);
} else {
return and__28473__auto__;
}
}),cljs.core.filter.call(null,(function (p__41110){
var vec__41111 = p__41110;
var k = cljs.core.nth.call(null,vec__41111,(0),null);
var v = cljs.core.nth.call(null,vec__41111,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__41123_41131 = cljs.core.seq.call(null,deps);
var chunk__41124_41132 = null;
var count__41125_41133 = (0);
var i__41126_41134 = (0);
while(true){
if((i__41126_41134 < count__41125_41133)){
var dep_41135 = cljs.core._nth.call(null,chunk__41124_41132,i__41126_41134);
if(cljs.core.truth_((function (){var and__28473__auto__ = dep_41135;
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41135));
} else {
return and__28473__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41135,(depth + (1)),state);
} else {
}

var G__41136 = seq__41123_41131;
var G__41137 = chunk__41124_41132;
var G__41138 = count__41125_41133;
var G__41139 = (i__41126_41134 + (1));
seq__41123_41131 = G__41136;
chunk__41124_41132 = G__41137;
count__41125_41133 = G__41138;
i__41126_41134 = G__41139;
continue;
} else {
var temp__4657__auto___41140 = cljs.core.seq.call(null,seq__41123_41131);
if(temp__4657__auto___41140){
var seq__41123_41141__$1 = temp__4657__auto___41140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41123_41141__$1)){
var c__29324__auto___41142 = cljs.core.chunk_first.call(null,seq__41123_41141__$1);
var G__41143 = cljs.core.chunk_rest.call(null,seq__41123_41141__$1);
var G__41144 = c__29324__auto___41142;
var G__41145 = cljs.core.count.call(null,c__29324__auto___41142);
var G__41146 = (0);
seq__41123_41131 = G__41143;
chunk__41124_41132 = G__41144;
count__41125_41133 = G__41145;
i__41126_41134 = G__41146;
continue;
} else {
var dep_41147 = cljs.core.first.call(null,seq__41123_41141__$1);
if(cljs.core.truth_((function (){var and__28473__auto__ = dep_41147;
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41147));
} else {
return and__28473__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41147,(depth + (1)),state);
} else {
}

var G__41148 = cljs.core.next.call(null,seq__41123_41141__$1);
var G__41149 = null;
var G__41150 = (0);
var G__41151 = (0);
seq__41123_41131 = G__41148;
chunk__41124_41132 = G__41149;
count__41125_41133 = G__41150;
i__41126_41134 = G__41151;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41127){
var vec__41128 = p__41127;
var seq__41129 = cljs.core.seq.call(null,vec__41128);
var first__41130 = cljs.core.first.call(null,seq__41129);
var seq__41129__$1 = cljs.core.next.call(null,seq__41129);
var x = first__41130;
var xs = seq__41129__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41128,seq__41129,first__41130,seq__41129__$1,x,xs,get_deps__$1){
return (function (p1__41114_SHARP_){
return clojure.set.difference.call(null,p1__41114_SHARP_,x);
});})(vec__41128,seq__41129,first__41130,seq__41129__$1,x,xs,get_deps__$1))
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
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41152 = cljs.core.seq.call(null,provides);
var chunk__41153 = null;
var count__41154 = (0);
var i__41155 = (0);
while(true){
if((i__41155 < count__41154)){
var prov = cljs.core._nth.call(null,chunk__41153,i__41155);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41156_41164 = cljs.core.seq.call(null,requires);
var chunk__41157_41165 = null;
var count__41158_41166 = (0);
var i__41159_41167 = (0);
while(true){
if((i__41159_41167 < count__41158_41166)){
var req_41168 = cljs.core._nth.call(null,chunk__41157_41165,i__41159_41167);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41168,prov);

var G__41169 = seq__41156_41164;
var G__41170 = chunk__41157_41165;
var G__41171 = count__41158_41166;
var G__41172 = (i__41159_41167 + (1));
seq__41156_41164 = G__41169;
chunk__41157_41165 = G__41170;
count__41158_41166 = G__41171;
i__41159_41167 = G__41172;
continue;
} else {
var temp__4657__auto___41173 = cljs.core.seq.call(null,seq__41156_41164);
if(temp__4657__auto___41173){
var seq__41156_41174__$1 = temp__4657__auto___41173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41156_41174__$1)){
var c__29324__auto___41175 = cljs.core.chunk_first.call(null,seq__41156_41174__$1);
var G__41176 = cljs.core.chunk_rest.call(null,seq__41156_41174__$1);
var G__41177 = c__29324__auto___41175;
var G__41178 = cljs.core.count.call(null,c__29324__auto___41175);
var G__41179 = (0);
seq__41156_41164 = G__41176;
chunk__41157_41165 = G__41177;
count__41158_41166 = G__41178;
i__41159_41167 = G__41179;
continue;
} else {
var req_41180 = cljs.core.first.call(null,seq__41156_41174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41180,prov);

var G__41181 = cljs.core.next.call(null,seq__41156_41174__$1);
var G__41182 = null;
var G__41183 = (0);
var G__41184 = (0);
seq__41156_41164 = G__41181;
chunk__41157_41165 = G__41182;
count__41158_41166 = G__41183;
i__41159_41167 = G__41184;
continue;
}
} else {
}
}
break;
}

var G__41185 = seq__41152;
var G__41186 = chunk__41153;
var G__41187 = count__41154;
var G__41188 = (i__41155 + (1));
seq__41152 = G__41185;
chunk__41153 = G__41186;
count__41154 = G__41187;
i__41155 = G__41188;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41152);
if(temp__4657__auto__){
var seq__41152__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41152__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__41152__$1);
var G__41189 = cljs.core.chunk_rest.call(null,seq__41152__$1);
var G__41190 = c__29324__auto__;
var G__41191 = cljs.core.count.call(null,c__29324__auto__);
var G__41192 = (0);
seq__41152 = G__41189;
chunk__41153 = G__41190;
count__41154 = G__41191;
i__41155 = G__41192;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41152__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41160_41193 = cljs.core.seq.call(null,requires);
var chunk__41161_41194 = null;
var count__41162_41195 = (0);
var i__41163_41196 = (0);
while(true){
if((i__41163_41196 < count__41162_41195)){
var req_41197 = cljs.core._nth.call(null,chunk__41161_41194,i__41163_41196);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41197,prov);

var G__41198 = seq__41160_41193;
var G__41199 = chunk__41161_41194;
var G__41200 = count__41162_41195;
var G__41201 = (i__41163_41196 + (1));
seq__41160_41193 = G__41198;
chunk__41161_41194 = G__41199;
count__41162_41195 = G__41200;
i__41163_41196 = G__41201;
continue;
} else {
var temp__4657__auto___41202__$1 = cljs.core.seq.call(null,seq__41160_41193);
if(temp__4657__auto___41202__$1){
var seq__41160_41203__$1 = temp__4657__auto___41202__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41160_41203__$1)){
var c__29324__auto___41204 = cljs.core.chunk_first.call(null,seq__41160_41203__$1);
var G__41205 = cljs.core.chunk_rest.call(null,seq__41160_41203__$1);
var G__41206 = c__29324__auto___41204;
var G__41207 = cljs.core.count.call(null,c__29324__auto___41204);
var G__41208 = (0);
seq__41160_41193 = G__41205;
chunk__41161_41194 = G__41206;
count__41162_41195 = G__41207;
i__41163_41196 = G__41208;
continue;
} else {
var req_41209 = cljs.core.first.call(null,seq__41160_41203__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41209,prov);

var G__41210 = cljs.core.next.call(null,seq__41160_41203__$1);
var G__41211 = null;
var G__41212 = (0);
var G__41213 = (0);
seq__41160_41193 = G__41210;
chunk__41161_41194 = G__41211;
count__41162_41195 = G__41212;
i__41163_41196 = G__41213;
continue;
}
} else {
}
}
break;
}

var G__41214 = cljs.core.next.call(null,seq__41152__$1);
var G__41215 = null;
var G__41216 = (0);
var G__41217 = (0);
seq__41152 = G__41214;
chunk__41153 = G__41215;
count__41154 = G__41216;
i__41155 = G__41217;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41218_41222 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41219_41223 = null;
var count__41220_41224 = (0);
var i__41221_41225 = (0);
while(true){
if((i__41221_41225 < count__41220_41224)){
var ns_41226 = cljs.core._nth.call(null,chunk__41219_41223,i__41221_41225);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41226);

var G__41227 = seq__41218_41222;
var G__41228 = chunk__41219_41223;
var G__41229 = count__41220_41224;
var G__41230 = (i__41221_41225 + (1));
seq__41218_41222 = G__41227;
chunk__41219_41223 = G__41228;
count__41220_41224 = G__41229;
i__41221_41225 = G__41230;
continue;
} else {
var temp__4657__auto___41231 = cljs.core.seq.call(null,seq__41218_41222);
if(temp__4657__auto___41231){
var seq__41218_41232__$1 = temp__4657__auto___41231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41218_41232__$1)){
var c__29324__auto___41233 = cljs.core.chunk_first.call(null,seq__41218_41232__$1);
var G__41234 = cljs.core.chunk_rest.call(null,seq__41218_41232__$1);
var G__41235 = c__29324__auto___41233;
var G__41236 = cljs.core.count.call(null,c__29324__auto___41233);
var G__41237 = (0);
seq__41218_41222 = G__41234;
chunk__41219_41223 = G__41235;
count__41220_41224 = G__41236;
i__41221_41225 = G__41237;
continue;
} else {
var ns_41238 = cljs.core.first.call(null,seq__41218_41232__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41238);

var G__41239 = cljs.core.next.call(null,seq__41218_41232__$1);
var G__41240 = null;
var G__41241 = (0);
var G__41242 = (0);
seq__41218_41222 = G__41239;
chunk__41219_41223 = G__41240;
count__41220_41224 = G__41241;
i__41221_41225 = G__41242;
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
goog.require_figwheel_backup_ = (function (){var or__28485__auto__ = goog.require__;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
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
var G__41243__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41244__i = 0, G__41244__a = new Array(arguments.length -  0);
while (G__41244__i < G__41244__a.length) {G__41244__a[G__41244__i] = arguments[G__41244__i + 0]; ++G__41244__i;}
  args = new cljs.core.IndexedSeq(G__41244__a,0,null);
} 
return G__41243__delegate.call(this,args);};
G__41243.cljs$lang$maxFixedArity = 0;
G__41243.cljs$lang$applyTo = (function (arglist__41245){
var args = cljs.core.seq(arglist__41245);
return G__41243__delegate(args);
});
G__41243.cljs$core$IFn$_invoke$arity$variadic = G__41243__delegate;
return G__41243;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__41246_SHARP_,p2__41247_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41246_SHARP_)].join('')),p2__41247_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__41248_SHARP_,p2__41249_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41248_SHARP_)].join(''),p2__41249_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41250 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41250.addCallback(((function (G__41250){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41250))
);

G__41250.addErrback(((function (G__41250){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41250))
);

return G__41250;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41251){if((e41251 instanceof Error)){
var e = e41251;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41251;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41252){if((e41252 instanceof Error)){
var e = e41252;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41252;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41253 = cljs.core._EQ_;
var expr__41254 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41253.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41254))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41253.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41254))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41253.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41254))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41253,expr__41254){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41253,expr__41254))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41256,callback){
var map__41257 = p__41256;
var map__41257__$1 = ((((!((map__41257 == null)))?((((map__41257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41257):map__41257);
var file_msg = map__41257__$1;
var request_url = cljs.core.get.call(null,map__41257__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28485__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41257,map__41257__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41257,map__41257__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__){
return (function (state_41297){
var state_val_41298 = (state_41297[(1)]);
if((state_val_41298 === (7))){
var inst_41293 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41299_41326 = state_41297__$1;
(statearr_41299_41326[(2)] = inst_41293);

(statearr_41299_41326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (1))){
var state_41297__$1 = state_41297;
var statearr_41300_41327 = state_41297__$1;
(statearr_41300_41327[(2)] = null);

(statearr_41300_41327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (4))){
var inst_41261 = (state_41297[(7)]);
var inst_41261__$1 = (state_41297[(2)]);
var state_41297__$1 = (function (){var statearr_41301 = state_41297;
(statearr_41301[(7)] = inst_41261__$1);

return statearr_41301;
})();
if(cljs.core.truth_(inst_41261__$1)){
var statearr_41302_41328 = state_41297__$1;
(statearr_41302_41328[(1)] = (5));

} else {
var statearr_41303_41329 = state_41297__$1;
(statearr_41303_41329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (15))){
var inst_41278 = (state_41297[(8)]);
var inst_41275 = (state_41297[(9)]);
var inst_41280 = inst_41278.call(null,inst_41275);
var state_41297__$1 = state_41297;
var statearr_41304_41330 = state_41297__$1;
(statearr_41304_41330[(2)] = inst_41280);

(statearr_41304_41330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (13))){
var inst_41287 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41305_41331 = state_41297__$1;
(statearr_41305_41331[(2)] = inst_41287);

(statearr_41305_41331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (6))){
var state_41297__$1 = state_41297;
var statearr_41306_41332 = state_41297__$1;
(statearr_41306_41332[(2)] = null);

(statearr_41306_41332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (17))){
var inst_41284 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
var statearr_41307_41333 = state_41297__$1;
(statearr_41307_41333[(2)] = inst_41284);

(statearr_41307_41333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (3))){
var inst_41295 = (state_41297[(2)]);
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41297__$1,inst_41295);
} else {
if((state_val_41298 === (12))){
var state_41297__$1 = state_41297;
var statearr_41308_41334 = state_41297__$1;
(statearr_41308_41334[(2)] = null);

(statearr_41308_41334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (2))){
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41297__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41298 === (11))){
var inst_41266 = (state_41297[(10)]);
var inst_41273 = figwheel.client.file_reloading.blocking_load.call(null,inst_41266);
var state_41297__$1 = state_41297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41297__$1,(14),inst_41273);
} else {
if((state_val_41298 === (9))){
var inst_41266 = (state_41297[(10)]);
var state_41297__$1 = state_41297;
if(cljs.core.truth_(inst_41266)){
var statearr_41309_41335 = state_41297__$1;
(statearr_41309_41335[(1)] = (11));

} else {
var statearr_41310_41336 = state_41297__$1;
(statearr_41310_41336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (5))){
var inst_41261 = (state_41297[(7)]);
var inst_41267 = (state_41297[(11)]);
var inst_41266 = cljs.core.nth.call(null,inst_41261,(0),null);
var inst_41267__$1 = cljs.core.nth.call(null,inst_41261,(1),null);
var state_41297__$1 = (function (){var statearr_41311 = state_41297;
(statearr_41311[(10)] = inst_41266);

(statearr_41311[(11)] = inst_41267__$1);

return statearr_41311;
})();
if(cljs.core.truth_(inst_41267__$1)){
var statearr_41312_41337 = state_41297__$1;
(statearr_41312_41337[(1)] = (8));

} else {
var statearr_41313_41338 = state_41297__$1;
(statearr_41313_41338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (14))){
var inst_41266 = (state_41297[(10)]);
var inst_41278 = (state_41297[(8)]);
var inst_41275 = (state_41297[(2)]);
var inst_41276 = console.log("Loading!",inst_41266);
var inst_41277 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41278__$1 = cljs.core.get.call(null,inst_41277,inst_41266);
var state_41297__$1 = (function (){var statearr_41314 = state_41297;
(statearr_41314[(8)] = inst_41278__$1);

(statearr_41314[(9)] = inst_41275);

(statearr_41314[(12)] = inst_41276);

return statearr_41314;
})();
if(cljs.core.truth_(inst_41278__$1)){
var statearr_41315_41339 = state_41297__$1;
(statearr_41315_41339[(1)] = (15));

} else {
var statearr_41316_41340 = state_41297__$1;
(statearr_41316_41340[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (16))){
var inst_41275 = (state_41297[(9)]);
var inst_41282 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41275);
var state_41297__$1 = state_41297;
var statearr_41317_41341 = state_41297__$1;
(statearr_41317_41341[(2)] = inst_41282);

(statearr_41317_41341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (10))){
var inst_41289 = (state_41297[(2)]);
var state_41297__$1 = (function (){var statearr_41318 = state_41297;
(statearr_41318[(13)] = inst_41289);

return statearr_41318;
})();
var statearr_41319_41342 = state_41297__$1;
(statearr_41319_41342[(2)] = null);

(statearr_41319_41342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41298 === (8))){
var inst_41267 = (state_41297[(11)]);
var inst_41269 = console.log("Evaling!",inst_41267);
var inst_41270 = eval(inst_41267);
var state_41297__$1 = (function (){var statearr_41320 = state_41297;
(statearr_41320[(14)] = inst_41269);

return statearr_41320;
})();
var statearr_41321_41343 = state_41297__$1;
(statearr_41321_41343[(2)] = inst_41270);

(statearr_41321_41343[(1)] = (10));


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
});})(c__39120__auto__))
;
return ((function (switch__39032__auto__,c__39120__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39033__auto__ = null;
var figwheel$client$file_reloading$state_machine__39033__auto____0 = (function (){
var statearr_41322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41322[(0)] = figwheel$client$file_reloading$state_machine__39033__auto__);

(statearr_41322[(1)] = (1));

return statearr_41322;
});
var figwheel$client$file_reloading$state_machine__39033__auto____1 = (function (state_41297){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_41297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e41323){if((e41323 instanceof Object)){
var ex__39036__auto__ = e41323;
var statearr_41324_41344 = state_41297;
(statearr_41324_41344[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41345 = state_41297;
state_41297 = G__41345;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39033__auto__ = function(state_41297){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39033__auto____1.call(this,state_41297);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39033__auto____0;
figwheel$client$file_reloading$state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39033__auto____1;
return figwheel$client$file_reloading$state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__))
})();
var state__39122__auto__ = (function (){var statearr_41325 = f__39121__auto__.call(null);
(statearr_41325[(6)] = c__39120__auto__);

return statearr_41325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__))
);

return c__39120__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41347 = arguments.length;
switch (G__41347) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41349,callback){
var map__41350 = p__41349;
var map__41350__$1 = ((((!((map__41350 == null)))?((((map__41350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41350):map__41350);
var file_msg = map__41350__$1;
var namespace = cljs.core.get.call(null,map__41350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41350,map__41350__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41350,map__41350__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41352){
var map__41353 = p__41352;
var map__41353__$1 = ((((!((map__41353 == null)))?((((map__41353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41353):map__41353);
var file_msg = map__41353__$1;
var namespace = cljs.core.get.call(null,map__41353__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41355){
var map__41356 = p__41355;
var map__41356__$1 = ((((!((map__41356 == null)))?((((map__41356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41356):map__41356);
var file_msg = map__41356__$1;
var namespace = cljs.core.get.call(null,map__41356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28473__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28473__auto__){
var or__28485__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
var or__28485__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28485__auto____$1)){
return or__28485__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28473__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41358,callback){
var map__41359 = p__41358;
var map__41359__$1 = ((((!((map__41359 == null)))?((((map__41359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41359):map__41359);
var file_msg = map__41359__$1;
var request_url = cljs.core.get.call(null,map__41359__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__39120__auto___41409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto___41409,out){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto___41409,out){
return (function (state_41394){
var state_val_41395 = (state_41394[(1)]);
if((state_val_41395 === (1))){
var inst_41368 = cljs.core.seq.call(null,files);
var inst_41369 = cljs.core.first.call(null,inst_41368);
var inst_41370 = cljs.core.next.call(null,inst_41368);
var inst_41371 = files;
var state_41394__$1 = (function (){var statearr_41396 = state_41394;
(statearr_41396[(7)] = inst_41369);

(statearr_41396[(8)] = inst_41371);

(statearr_41396[(9)] = inst_41370);

return statearr_41396;
})();
var statearr_41397_41410 = state_41394__$1;
(statearr_41397_41410[(2)] = null);

(statearr_41397_41410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (2))){
var inst_41371 = (state_41394[(8)]);
var inst_41377 = (state_41394[(10)]);
var inst_41376 = cljs.core.seq.call(null,inst_41371);
var inst_41377__$1 = cljs.core.first.call(null,inst_41376);
var inst_41378 = cljs.core.next.call(null,inst_41376);
var inst_41379 = (inst_41377__$1 == null);
var inst_41380 = cljs.core.not.call(null,inst_41379);
var state_41394__$1 = (function (){var statearr_41398 = state_41394;
(statearr_41398[(11)] = inst_41378);

(statearr_41398[(10)] = inst_41377__$1);

return statearr_41398;
})();
if(inst_41380){
var statearr_41399_41411 = state_41394__$1;
(statearr_41399_41411[(1)] = (4));

} else {
var statearr_41400_41412 = state_41394__$1;
(statearr_41400_41412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (3))){
var inst_41392 = (state_41394[(2)]);
var state_41394__$1 = state_41394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41394__$1,inst_41392);
} else {
if((state_val_41395 === (4))){
var inst_41377 = (state_41394[(10)]);
var inst_41382 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41377);
var state_41394__$1 = state_41394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41394__$1,(7),inst_41382);
} else {
if((state_val_41395 === (5))){
var inst_41388 = cljs.core.async.close_BANG_.call(null,out);
var state_41394__$1 = state_41394;
var statearr_41401_41413 = state_41394__$1;
(statearr_41401_41413[(2)] = inst_41388);

(statearr_41401_41413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (6))){
var inst_41390 = (state_41394[(2)]);
var state_41394__$1 = state_41394;
var statearr_41402_41414 = state_41394__$1;
(statearr_41402_41414[(2)] = inst_41390);

(statearr_41402_41414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (7))){
var inst_41378 = (state_41394[(11)]);
var inst_41384 = (state_41394[(2)]);
var inst_41385 = cljs.core.async.put_BANG_.call(null,out,inst_41384);
var inst_41371 = inst_41378;
var state_41394__$1 = (function (){var statearr_41403 = state_41394;
(statearr_41403[(8)] = inst_41371);

(statearr_41403[(12)] = inst_41385);

return statearr_41403;
})();
var statearr_41404_41415 = state_41394__$1;
(statearr_41404_41415[(2)] = null);

(statearr_41404_41415[(1)] = (2));


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
});})(c__39120__auto___41409,out))
;
return ((function (switch__39032__auto__,c__39120__auto___41409,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto____0 = (function (){
var statearr_41405 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41405[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto__);

(statearr_41405[(1)] = (1));

return statearr_41405;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto____1 = (function (state_41394){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_41394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e41406){if((e41406 instanceof Object)){
var ex__39036__auto__ = e41406;
var statearr_41407_41416 = state_41394;
(statearr_41407_41416[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41417 = state_41394;
state_41394 = G__41417;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto__ = function(state_41394){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto____1.call(this,state_41394);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto___41409,out))
})();
var state__39122__auto__ = (function (){var statearr_41408 = f__39121__auto__.call(null);
(statearr_41408[(6)] = c__39120__auto___41409);

return statearr_41408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto___41409,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41418,opts){
var map__41419 = p__41418;
var map__41419__$1 = ((((!((map__41419 == null)))?((((map__41419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41419):map__41419);
var eval_body = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28473__auto__ = eval_body;
if(cljs.core.truth_(and__28473__auto__)){
return typeof eval_body === 'string';
} else {
return and__28473__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41421){var e = e41421;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41422_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41422_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__41423){
var vec__41424 = p__41423;
var k = cljs.core.nth.call(null,vec__41424,(0),null);
var v = cljs.core.nth.call(null,vec__41424,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41427){
var vec__41428 = p__41427;
var k = cljs.core.nth.call(null,vec__41428,(0),null);
var v = cljs.core.nth.call(null,vec__41428,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41434,p__41435){
var map__41436 = p__41434;
var map__41436__$1 = ((((!((map__41436 == null)))?((((map__41436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41436.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41436):map__41436);
var opts = map__41436__$1;
var before_jsload = cljs.core.get.call(null,map__41436__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41436__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41436__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41437 = p__41435;
var map__41437__$1 = ((((!((map__41437 == null)))?((((map__41437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41437):map__41437);
var msg = map__41437__$1;
var files = cljs.core.get.call(null,map__41437__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41437__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41437__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39120__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39121__auto__ = (function (){var switch__39032__auto__ = ((function (c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41591){
var state_val_41592 = (state_41591[(1)]);
if((state_val_41592 === (7))){
var inst_41451 = (state_41591[(7)]);
var inst_41452 = (state_41591[(8)]);
var inst_41454 = (state_41591[(9)]);
var inst_41453 = (state_41591[(10)]);
var inst_41459 = cljs.core._nth.call(null,inst_41452,inst_41454);
var inst_41460 = figwheel.client.file_reloading.eval_body.call(null,inst_41459,opts);
var inst_41461 = (inst_41454 + (1));
var tmp41593 = inst_41451;
var tmp41594 = inst_41452;
var tmp41595 = inst_41453;
var inst_41451__$1 = tmp41593;
var inst_41452__$1 = tmp41594;
var inst_41453__$1 = tmp41595;
var inst_41454__$1 = inst_41461;
var state_41591__$1 = (function (){var statearr_41596 = state_41591;
(statearr_41596[(7)] = inst_41451__$1);

(statearr_41596[(8)] = inst_41452__$1);

(statearr_41596[(9)] = inst_41454__$1);

(statearr_41596[(10)] = inst_41453__$1);

(statearr_41596[(11)] = inst_41460);

return statearr_41596;
})();
var statearr_41597_41680 = state_41591__$1;
(statearr_41597_41680[(2)] = null);

(statearr_41597_41680[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (20))){
var inst_41494 = (state_41591[(12)]);
var inst_41502 = figwheel.client.file_reloading.sort_files.call(null,inst_41494);
var state_41591__$1 = state_41591;
var statearr_41598_41681 = state_41591__$1;
(statearr_41598_41681[(2)] = inst_41502);

(statearr_41598_41681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (27))){
var state_41591__$1 = state_41591;
var statearr_41599_41682 = state_41591__$1;
(statearr_41599_41682[(2)] = null);

(statearr_41599_41682[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (1))){
var inst_41443 = (state_41591[(13)]);
var inst_41440 = before_jsload.call(null,files);
var inst_41441 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41442 = (function (){return ((function (inst_41443,inst_41440,inst_41441,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41431_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41431_SHARP_);
});
;})(inst_41443,inst_41440,inst_41441,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41443__$1 = cljs.core.filter.call(null,inst_41442,files);
var inst_41444 = cljs.core.not_empty.call(null,inst_41443__$1);
var state_41591__$1 = (function (){var statearr_41600 = state_41591;
(statearr_41600[(14)] = inst_41441);

(statearr_41600[(13)] = inst_41443__$1);

(statearr_41600[(15)] = inst_41440);

return statearr_41600;
})();
if(cljs.core.truth_(inst_41444)){
var statearr_41601_41683 = state_41591__$1;
(statearr_41601_41683[(1)] = (2));

} else {
var statearr_41602_41684 = state_41591__$1;
(statearr_41602_41684[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (24))){
var state_41591__$1 = state_41591;
var statearr_41603_41685 = state_41591__$1;
(statearr_41603_41685[(2)] = null);

(statearr_41603_41685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (39))){
var inst_41544 = (state_41591[(16)]);
var state_41591__$1 = state_41591;
var statearr_41604_41686 = state_41591__$1;
(statearr_41604_41686[(2)] = inst_41544);

(statearr_41604_41686[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (46))){
var inst_41586 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
var statearr_41605_41687 = state_41591__$1;
(statearr_41605_41687[(2)] = inst_41586);

(statearr_41605_41687[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (4))){
var inst_41488 = (state_41591[(2)]);
var inst_41489 = cljs.core.List.EMPTY;
var inst_41490 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41489);
var inst_41491 = (function (){return ((function (inst_41488,inst_41489,inst_41490,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41432_SHARP_){
var and__28473__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41432_SHARP_);
if(cljs.core.truth_(and__28473__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41432_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41432_SHARP_)));
} else {
return and__28473__auto__;
}
});
;})(inst_41488,inst_41489,inst_41490,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41492 = cljs.core.filter.call(null,inst_41491,files);
var inst_41493 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41494 = cljs.core.concat.call(null,inst_41492,inst_41493);
var state_41591__$1 = (function (){var statearr_41606 = state_41591;
(statearr_41606[(17)] = inst_41488);

(statearr_41606[(12)] = inst_41494);

(statearr_41606[(18)] = inst_41490);

return statearr_41606;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41607_41688 = state_41591__$1;
(statearr_41607_41688[(1)] = (16));

} else {
var statearr_41608_41689 = state_41591__$1;
(statearr_41608_41689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (15))){
var inst_41478 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
var statearr_41609_41690 = state_41591__$1;
(statearr_41609_41690[(2)] = inst_41478);

(statearr_41609_41690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (21))){
var inst_41504 = (state_41591[(19)]);
var inst_41504__$1 = (state_41591[(2)]);
var inst_41505 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41504__$1);
var state_41591__$1 = (function (){var statearr_41610 = state_41591;
(statearr_41610[(19)] = inst_41504__$1);

return statearr_41610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41591__$1,(22),inst_41505);
} else {
if((state_val_41592 === (31))){
var inst_41589 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41591__$1,inst_41589);
} else {
if((state_val_41592 === (32))){
var inst_41544 = (state_41591[(16)]);
var inst_41549 = inst_41544.cljs$lang$protocol_mask$partition0$;
var inst_41550 = (inst_41549 & (64));
var inst_41551 = inst_41544.cljs$core$ISeq$;
var inst_41552 = (cljs.core.PROTOCOL_SENTINEL === inst_41551);
var inst_41553 = (inst_41550) || (inst_41552);
var state_41591__$1 = state_41591;
if(cljs.core.truth_(inst_41553)){
var statearr_41611_41691 = state_41591__$1;
(statearr_41611_41691[(1)] = (35));

} else {
var statearr_41612_41692 = state_41591__$1;
(statearr_41612_41692[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (40))){
var inst_41566 = (state_41591[(20)]);
var inst_41565 = (state_41591[(2)]);
var inst_41566__$1 = cljs.core.get.call(null,inst_41565,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41567 = cljs.core.get.call(null,inst_41565,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41568 = cljs.core.not_empty.call(null,inst_41566__$1);
var state_41591__$1 = (function (){var statearr_41613 = state_41591;
(statearr_41613[(20)] = inst_41566__$1);

(statearr_41613[(21)] = inst_41567);

return statearr_41613;
})();
if(cljs.core.truth_(inst_41568)){
var statearr_41614_41693 = state_41591__$1;
(statearr_41614_41693[(1)] = (41));

} else {
var statearr_41615_41694 = state_41591__$1;
(statearr_41615_41694[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (33))){
var state_41591__$1 = state_41591;
var statearr_41616_41695 = state_41591__$1;
(statearr_41616_41695[(2)] = false);

(statearr_41616_41695[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (13))){
var inst_41464 = (state_41591[(22)]);
var inst_41468 = cljs.core.chunk_first.call(null,inst_41464);
var inst_41469 = cljs.core.chunk_rest.call(null,inst_41464);
var inst_41470 = cljs.core.count.call(null,inst_41468);
var inst_41451 = inst_41469;
var inst_41452 = inst_41468;
var inst_41453 = inst_41470;
var inst_41454 = (0);
var state_41591__$1 = (function (){var statearr_41617 = state_41591;
(statearr_41617[(7)] = inst_41451);

(statearr_41617[(8)] = inst_41452);

(statearr_41617[(9)] = inst_41454);

(statearr_41617[(10)] = inst_41453);

return statearr_41617;
})();
var statearr_41618_41696 = state_41591__$1;
(statearr_41618_41696[(2)] = null);

(statearr_41618_41696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (22))){
var inst_41507 = (state_41591[(23)]);
var inst_41512 = (state_41591[(24)]);
var inst_41508 = (state_41591[(25)]);
var inst_41504 = (state_41591[(19)]);
var inst_41507__$1 = (state_41591[(2)]);
var inst_41508__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41507__$1);
var inst_41509 = (function (){var all_files = inst_41504;
var res_SINGLEQUOTE_ = inst_41507__$1;
var res = inst_41508__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41507,inst_41512,inst_41508,inst_41504,inst_41507__$1,inst_41508__$1,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41433_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41433_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41507,inst_41512,inst_41508,inst_41504,inst_41507__$1,inst_41508__$1,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41510 = cljs.core.filter.call(null,inst_41509,inst_41507__$1);
var inst_41511 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41512__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41511);
var inst_41513 = cljs.core.not_empty.call(null,inst_41512__$1);
var state_41591__$1 = (function (){var statearr_41619 = state_41591;
(statearr_41619[(23)] = inst_41507__$1);

(statearr_41619[(24)] = inst_41512__$1);

(statearr_41619[(25)] = inst_41508__$1);

(statearr_41619[(26)] = inst_41510);

return statearr_41619;
})();
if(cljs.core.truth_(inst_41513)){
var statearr_41620_41697 = state_41591__$1;
(statearr_41620_41697[(1)] = (23));

} else {
var statearr_41621_41698 = state_41591__$1;
(statearr_41621_41698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (36))){
var state_41591__$1 = state_41591;
var statearr_41622_41699 = state_41591__$1;
(statearr_41622_41699[(2)] = false);

(statearr_41622_41699[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (41))){
var inst_41566 = (state_41591[(20)]);
var inst_41570 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41571 = cljs.core.map.call(null,inst_41570,inst_41566);
var inst_41572 = cljs.core.pr_str.call(null,inst_41571);
var inst_41573 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41572)].join('');
var inst_41574 = figwheel.client.utils.log.call(null,inst_41573);
var state_41591__$1 = state_41591;
var statearr_41623_41700 = state_41591__$1;
(statearr_41623_41700[(2)] = inst_41574);

(statearr_41623_41700[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (43))){
var inst_41567 = (state_41591[(21)]);
var inst_41577 = (state_41591[(2)]);
var inst_41578 = cljs.core.not_empty.call(null,inst_41567);
var state_41591__$1 = (function (){var statearr_41624 = state_41591;
(statearr_41624[(27)] = inst_41577);

return statearr_41624;
})();
if(cljs.core.truth_(inst_41578)){
var statearr_41625_41701 = state_41591__$1;
(statearr_41625_41701[(1)] = (44));

} else {
var statearr_41626_41702 = state_41591__$1;
(statearr_41626_41702[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (29))){
var inst_41507 = (state_41591[(23)]);
var inst_41544 = (state_41591[(16)]);
var inst_41512 = (state_41591[(24)]);
var inst_41508 = (state_41591[(25)]);
var inst_41504 = (state_41591[(19)]);
var inst_41510 = (state_41591[(26)]);
var inst_41540 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41543 = (function (){var all_files = inst_41504;
var res_SINGLEQUOTE_ = inst_41507;
var res = inst_41508;
var files_not_loaded = inst_41510;
var dependencies_that_loaded = inst_41512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41544,inst_41512,inst_41508,inst_41504,inst_41510,inst_41540,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41542){
var map__41627 = p__41542;
var map__41627__$1 = ((((!((map__41627 == null)))?((((map__41627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41627):map__41627);
var namespace = cljs.core.get.call(null,map__41627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41544,inst_41512,inst_41508,inst_41504,inst_41510,inst_41540,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41544__$1 = cljs.core.group_by.call(null,inst_41543,inst_41510);
var inst_41546 = (inst_41544__$1 == null);
var inst_41547 = cljs.core.not.call(null,inst_41546);
var state_41591__$1 = (function (){var statearr_41629 = state_41591;
(statearr_41629[(16)] = inst_41544__$1);

(statearr_41629[(28)] = inst_41540);

return statearr_41629;
})();
if(inst_41547){
var statearr_41630_41703 = state_41591__$1;
(statearr_41630_41703[(1)] = (32));

} else {
var statearr_41631_41704 = state_41591__$1;
(statearr_41631_41704[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (44))){
var inst_41567 = (state_41591[(21)]);
var inst_41580 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41567);
var inst_41581 = cljs.core.pr_str.call(null,inst_41580);
var inst_41582 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41581)].join('');
var inst_41583 = figwheel.client.utils.log.call(null,inst_41582);
var state_41591__$1 = state_41591;
var statearr_41632_41705 = state_41591__$1;
(statearr_41632_41705[(2)] = inst_41583);

(statearr_41632_41705[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (6))){
var inst_41485 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
var statearr_41633_41706 = state_41591__$1;
(statearr_41633_41706[(2)] = inst_41485);

(statearr_41633_41706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (28))){
var inst_41510 = (state_41591[(26)]);
var inst_41537 = (state_41591[(2)]);
var inst_41538 = cljs.core.not_empty.call(null,inst_41510);
var state_41591__$1 = (function (){var statearr_41634 = state_41591;
(statearr_41634[(29)] = inst_41537);

return statearr_41634;
})();
if(cljs.core.truth_(inst_41538)){
var statearr_41635_41707 = state_41591__$1;
(statearr_41635_41707[(1)] = (29));

} else {
var statearr_41636_41708 = state_41591__$1;
(statearr_41636_41708[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (25))){
var inst_41508 = (state_41591[(25)]);
var inst_41524 = (state_41591[(2)]);
var inst_41525 = cljs.core.not_empty.call(null,inst_41508);
var state_41591__$1 = (function (){var statearr_41637 = state_41591;
(statearr_41637[(30)] = inst_41524);

return statearr_41637;
})();
if(cljs.core.truth_(inst_41525)){
var statearr_41638_41709 = state_41591__$1;
(statearr_41638_41709[(1)] = (26));

} else {
var statearr_41639_41710 = state_41591__$1;
(statearr_41639_41710[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (34))){
var inst_41560 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
if(cljs.core.truth_(inst_41560)){
var statearr_41640_41711 = state_41591__$1;
(statearr_41640_41711[(1)] = (38));

} else {
var statearr_41641_41712 = state_41591__$1;
(statearr_41641_41712[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (17))){
var state_41591__$1 = state_41591;
var statearr_41642_41713 = state_41591__$1;
(statearr_41642_41713[(2)] = recompile_dependents);

(statearr_41642_41713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (3))){
var state_41591__$1 = state_41591;
var statearr_41643_41714 = state_41591__$1;
(statearr_41643_41714[(2)] = null);

(statearr_41643_41714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (12))){
var inst_41481 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
var statearr_41644_41715 = state_41591__$1;
(statearr_41644_41715[(2)] = inst_41481);

(statearr_41644_41715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (2))){
var inst_41443 = (state_41591[(13)]);
var inst_41450 = cljs.core.seq.call(null,inst_41443);
var inst_41451 = inst_41450;
var inst_41452 = null;
var inst_41453 = (0);
var inst_41454 = (0);
var state_41591__$1 = (function (){var statearr_41645 = state_41591;
(statearr_41645[(7)] = inst_41451);

(statearr_41645[(8)] = inst_41452);

(statearr_41645[(9)] = inst_41454);

(statearr_41645[(10)] = inst_41453);

return statearr_41645;
})();
var statearr_41646_41716 = state_41591__$1;
(statearr_41646_41716[(2)] = null);

(statearr_41646_41716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (23))){
var inst_41507 = (state_41591[(23)]);
var inst_41512 = (state_41591[(24)]);
var inst_41508 = (state_41591[(25)]);
var inst_41504 = (state_41591[(19)]);
var inst_41510 = (state_41591[(26)]);
var inst_41515 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41517 = (function (){var all_files = inst_41504;
var res_SINGLEQUOTE_ = inst_41507;
var res = inst_41508;
var files_not_loaded = inst_41510;
var dependencies_that_loaded = inst_41512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41512,inst_41508,inst_41504,inst_41510,inst_41515,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41516){
var map__41647 = p__41516;
var map__41647__$1 = ((((!((map__41647 == null)))?((((map__41647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41647):map__41647);
var request_url = cljs.core.get.call(null,map__41647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41512,inst_41508,inst_41504,inst_41510,inst_41515,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41518 = cljs.core.reverse.call(null,inst_41512);
var inst_41519 = cljs.core.map.call(null,inst_41517,inst_41518);
var inst_41520 = cljs.core.pr_str.call(null,inst_41519);
var inst_41521 = figwheel.client.utils.log.call(null,inst_41520);
var state_41591__$1 = (function (){var statearr_41649 = state_41591;
(statearr_41649[(31)] = inst_41515);

return statearr_41649;
})();
var statearr_41650_41717 = state_41591__$1;
(statearr_41650_41717[(2)] = inst_41521);

(statearr_41650_41717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (35))){
var state_41591__$1 = state_41591;
var statearr_41651_41718 = state_41591__$1;
(statearr_41651_41718[(2)] = true);

(statearr_41651_41718[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (19))){
var inst_41494 = (state_41591[(12)]);
var inst_41500 = figwheel.client.file_reloading.expand_files.call(null,inst_41494);
var state_41591__$1 = state_41591;
var statearr_41652_41719 = state_41591__$1;
(statearr_41652_41719[(2)] = inst_41500);

(statearr_41652_41719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (11))){
var state_41591__$1 = state_41591;
var statearr_41653_41720 = state_41591__$1;
(statearr_41653_41720[(2)] = null);

(statearr_41653_41720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (9))){
var inst_41483 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
var statearr_41654_41721 = state_41591__$1;
(statearr_41654_41721[(2)] = inst_41483);

(statearr_41654_41721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (5))){
var inst_41454 = (state_41591[(9)]);
var inst_41453 = (state_41591[(10)]);
var inst_41456 = (inst_41454 < inst_41453);
var inst_41457 = inst_41456;
var state_41591__$1 = state_41591;
if(cljs.core.truth_(inst_41457)){
var statearr_41655_41722 = state_41591__$1;
(statearr_41655_41722[(1)] = (7));

} else {
var statearr_41656_41723 = state_41591__$1;
(statearr_41656_41723[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (14))){
var inst_41464 = (state_41591[(22)]);
var inst_41473 = cljs.core.first.call(null,inst_41464);
var inst_41474 = figwheel.client.file_reloading.eval_body.call(null,inst_41473,opts);
var inst_41475 = cljs.core.next.call(null,inst_41464);
var inst_41451 = inst_41475;
var inst_41452 = null;
var inst_41453 = (0);
var inst_41454 = (0);
var state_41591__$1 = (function (){var statearr_41657 = state_41591;
(statearr_41657[(7)] = inst_41451);

(statearr_41657[(8)] = inst_41452);

(statearr_41657[(9)] = inst_41454);

(statearr_41657[(32)] = inst_41474);

(statearr_41657[(10)] = inst_41453);

return statearr_41657;
})();
var statearr_41658_41724 = state_41591__$1;
(statearr_41658_41724[(2)] = null);

(statearr_41658_41724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (45))){
var state_41591__$1 = state_41591;
var statearr_41659_41725 = state_41591__$1;
(statearr_41659_41725[(2)] = null);

(statearr_41659_41725[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (26))){
var inst_41507 = (state_41591[(23)]);
var inst_41512 = (state_41591[(24)]);
var inst_41508 = (state_41591[(25)]);
var inst_41504 = (state_41591[(19)]);
var inst_41510 = (state_41591[(26)]);
var inst_41527 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41529 = (function (){var all_files = inst_41504;
var res_SINGLEQUOTE_ = inst_41507;
var res = inst_41508;
var files_not_loaded = inst_41510;
var dependencies_that_loaded = inst_41512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41512,inst_41508,inst_41504,inst_41510,inst_41527,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41528){
var map__41660 = p__41528;
var map__41660__$1 = ((((!((map__41660 == null)))?((((map__41660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41660):map__41660);
var namespace = cljs.core.get.call(null,map__41660__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41660__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41512,inst_41508,inst_41504,inst_41510,inst_41527,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41530 = cljs.core.map.call(null,inst_41529,inst_41508);
var inst_41531 = cljs.core.pr_str.call(null,inst_41530);
var inst_41532 = figwheel.client.utils.log.call(null,inst_41531);
var inst_41533 = (function (){var all_files = inst_41504;
var res_SINGLEQUOTE_ = inst_41507;
var res = inst_41508;
var files_not_loaded = inst_41510;
var dependencies_that_loaded = inst_41512;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41512,inst_41508,inst_41504,inst_41510,inst_41527,inst_41529,inst_41530,inst_41531,inst_41532,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41507,inst_41512,inst_41508,inst_41504,inst_41510,inst_41527,inst_41529,inst_41530,inst_41531,inst_41532,state_val_41592,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41534 = setTimeout(inst_41533,(10));
var state_41591__$1 = (function (){var statearr_41662 = state_41591;
(statearr_41662[(33)] = inst_41527);

(statearr_41662[(34)] = inst_41532);

return statearr_41662;
})();
var statearr_41663_41726 = state_41591__$1;
(statearr_41663_41726[(2)] = inst_41534);

(statearr_41663_41726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (16))){
var state_41591__$1 = state_41591;
var statearr_41664_41727 = state_41591__$1;
(statearr_41664_41727[(2)] = reload_dependents);

(statearr_41664_41727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (38))){
var inst_41544 = (state_41591[(16)]);
var inst_41562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41544);
var state_41591__$1 = state_41591;
var statearr_41665_41728 = state_41591__$1;
(statearr_41665_41728[(2)] = inst_41562);

(statearr_41665_41728[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (30))){
var state_41591__$1 = state_41591;
var statearr_41666_41729 = state_41591__$1;
(statearr_41666_41729[(2)] = null);

(statearr_41666_41729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (10))){
var inst_41464 = (state_41591[(22)]);
var inst_41466 = cljs.core.chunked_seq_QMARK_.call(null,inst_41464);
var state_41591__$1 = state_41591;
if(inst_41466){
var statearr_41667_41730 = state_41591__$1;
(statearr_41667_41730[(1)] = (13));

} else {
var statearr_41668_41731 = state_41591__$1;
(statearr_41668_41731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (18))){
var inst_41498 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
if(cljs.core.truth_(inst_41498)){
var statearr_41669_41732 = state_41591__$1;
(statearr_41669_41732[(1)] = (19));

} else {
var statearr_41670_41733 = state_41591__$1;
(statearr_41670_41733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (42))){
var state_41591__$1 = state_41591;
var statearr_41671_41734 = state_41591__$1;
(statearr_41671_41734[(2)] = null);

(statearr_41671_41734[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (37))){
var inst_41557 = (state_41591[(2)]);
var state_41591__$1 = state_41591;
var statearr_41672_41735 = state_41591__$1;
(statearr_41672_41735[(2)] = inst_41557);

(statearr_41672_41735[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41592 === (8))){
var inst_41464 = (state_41591[(22)]);
var inst_41451 = (state_41591[(7)]);
var inst_41464__$1 = cljs.core.seq.call(null,inst_41451);
var state_41591__$1 = (function (){var statearr_41673 = state_41591;
(statearr_41673[(22)] = inst_41464__$1);

return statearr_41673;
})();
if(inst_41464__$1){
var statearr_41674_41736 = state_41591__$1;
(statearr_41674_41736[(1)] = (10));

} else {
var statearr_41675_41737 = state_41591__$1;
(statearr_41675_41737[(1)] = (11));

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
});})(c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39032__auto__,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto____0 = (function (){
var statearr_41676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41676[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto__);

(statearr_41676[(1)] = (1));

return statearr_41676;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto____1 = (function (state_41591){
while(true){
var ret_value__39034__auto__ = (function (){try{while(true){
var result__39035__auto__ = switch__39032__auto__.call(null,state_41591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39035__auto__;
}
break;
}
}catch (e41677){if((e41677 instanceof Object)){
var ex__39036__auto__ = e41677;
var statearr_41678_41738 = state_41591;
(statearr_41678_41738[(5)] = ex__39036__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41739 = state_41591;
state_41591 = G__41739;
continue;
} else {
return ret_value__39034__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto__ = function(state_41591){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto____1.call(this,state_41591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39033__auto__;
})()
;})(switch__39032__auto__,c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39122__auto__ = (function (){var statearr_41679 = f__39121__auto__.call(null);
(statearr_41679[(6)] = c__39120__auto__);

return statearr_41679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39122__auto__);
});})(c__39120__auto__,map__41436,map__41436__$1,opts,before_jsload,on_jsload,reload_dependents,map__41437,map__41437__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39120__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41742,link){
var map__41743 = p__41742;
var map__41743__$1 = ((((!((map__41743 == null)))?((((map__41743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41743):map__41743);
var file = cljs.core.get.call(null,map__41743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41743,map__41743__$1,file){
return (function (p1__41740_SHARP_,p2__41741_SHARP_){
if(cljs.core._EQ_.call(null,p1__41740_SHARP_,p2__41741_SHARP_)){
return p1__41740_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41743,map__41743__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41746){
var map__41747 = p__41746;
var map__41747__$1 = ((((!((map__41747 == null)))?((((map__41747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41747):map__41747);
var match_length = cljs.core.get.call(null,map__41747__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41747__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41745_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41745_SHARP_);
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41749_SHARP_,p2__41750_SHARP_){
return cljs.core.assoc.call(null,p1__41749_SHARP_,cljs.core.get.call(null,p2__41750_SHARP_,key),p2__41750_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41751 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41751);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41751);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41752,p__41753){
var map__41754 = p__41752;
var map__41754__$1 = ((((!((map__41754 == null)))?((((map__41754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41754):map__41754);
var on_cssload = cljs.core.get.call(null,map__41754__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41755 = p__41753;
var map__41755__$1 = ((((!((map__41755 == null)))?((((map__41755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41755):map__41755);
var files_msg = map__41755__$1;
var files = cljs.core.get.call(null,map__41755__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1512565258373
