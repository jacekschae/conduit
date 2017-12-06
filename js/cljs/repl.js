// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41760){
var map__41761 = p__41760;
var map__41761__$1 = ((((!((map__41761 == null)))?((((map__41761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41761):map__41761);
var m = map__41761__$1;
var n = cljs.core.get.call(null,map__41761__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41761__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41763_41785 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41764_41786 = null;
var count__41765_41787 = (0);
var i__41766_41788 = (0);
while(true){
if((i__41766_41788 < count__41765_41787)){
var f_41789 = cljs.core._nth.call(null,chunk__41764_41786,i__41766_41788);
cljs.core.println.call(null,"  ",f_41789);

var G__41790 = seq__41763_41785;
var G__41791 = chunk__41764_41786;
var G__41792 = count__41765_41787;
var G__41793 = (i__41766_41788 + (1));
seq__41763_41785 = G__41790;
chunk__41764_41786 = G__41791;
count__41765_41787 = G__41792;
i__41766_41788 = G__41793;
continue;
} else {
var temp__4657__auto___41794 = cljs.core.seq.call(null,seq__41763_41785);
if(temp__4657__auto___41794){
var seq__41763_41795__$1 = temp__4657__auto___41794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41763_41795__$1)){
var c__29324__auto___41796 = cljs.core.chunk_first.call(null,seq__41763_41795__$1);
var G__41797 = cljs.core.chunk_rest.call(null,seq__41763_41795__$1);
var G__41798 = c__29324__auto___41796;
var G__41799 = cljs.core.count.call(null,c__29324__auto___41796);
var G__41800 = (0);
seq__41763_41785 = G__41797;
chunk__41764_41786 = G__41798;
count__41765_41787 = G__41799;
i__41766_41788 = G__41800;
continue;
} else {
var f_41801 = cljs.core.first.call(null,seq__41763_41795__$1);
cljs.core.println.call(null,"  ",f_41801);

var G__41802 = cljs.core.next.call(null,seq__41763_41795__$1);
var G__41803 = null;
var G__41804 = (0);
var G__41805 = (0);
seq__41763_41785 = G__41802;
chunk__41764_41786 = G__41803;
count__41765_41787 = G__41804;
i__41766_41788 = G__41805;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41806 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28485__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41806);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41806)))?cljs.core.second.call(null,arglists_41806):arglists_41806));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__41767_41807 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41768_41808 = null;
var count__41769_41809 = (0);
var i__41770_41810 = (0);
while(true){
if((i__41770_41810 < count__41769_41809)){
var vec__41771_41811 = cljs.core._nth.call(null,chunk__41768_41808,i__41770_41810);
var name_41812 = cljs.core.nth.call(null,vec__41771_41811,(0),null);
var map__41774_41813 = cljs.core.nth.call(null,vec__41771_41811,(1),null);
var map__41774_41814__$1 = ((((!((map__41774_41813 == null)))?((((map__41774_41813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41774_41813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41774_41813):map__41774_41813);
var doc_41815 = cljs.core.get.call(null,map__41774_41814__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41816 = cljs.core.get.call(null,map__41774_41814__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41812);

cljs.core.println.call(null," ",arglists_41816);

if(cljs.core.truth_(doc_41815)){
cljs.core.println.call(null," ",doc_41815);
} else {
}

var G__41817 = seq__41767_41807;
var G__41818 = chunk__41768_41808;
var G__41819 = count__41769_41809;
var G__41820 = (i__41770_41810 + (1));
seq__41767_41807 = G__41817;
chunk__41768_41808 = G__41818;
count__41769_41809 = G__41819;
i__41770_41810 = G__41820;
continue;
} else {
var temp__4657__auto___41821 = cljs.core.seq.call(null,seq__41767_41807);
if(temp__4657__auto___41821){
var seq__41767_41822__$1 = temp__4657__auto___41821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41767_41822__$1)){
var c__29324__auto___41823 = cljs.core.chunk_first.call(null,seq__41767_41822__$1);
var G__41824 = cljs.core.chunk_rest.call(null,seq__41767_41822__$1);
var G__41825 = c__29324__auto___41823;
var G__41826 = cljs.core.count.call(null,c__29324__auto___41823);
var G__41827 = (0);
seq__41767_41807 = G__41824;
chunk__41768_41808 = G__41825;
count__41769_41809 = G__41826;
i__41770_41810 = G__41827;
continue;
} else {
var vec__41776_41828 = cljs.core.first.call(null,seq__41767_41822__$1);
var name_41829 = cljs.core.nth.call(null,vec__41776_41828,(0),null);
var map__41779_41830 = cljs.core.nth.call(null,vec__41776_41828,(1),null);
var map__41779_41831__$1 = ((((!((map__41779_41830 == null)))?((((map__41779_41830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41779_41830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41779_41830):map__41779_41830);
var doc_41832 = cljs.core.get.call(null,map__41779_41831__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41833 = cljs.core.get.call(null,map__41779_41831__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41829);

cljs.core.println.call(null," ",arglists_41833);

if(cljs.core.truth_(doc_41832)){
cljs.core.println.call(null," ",doc_41832);
} else {
}

var G__41834 = cljs.core.next.call(null,seq__41767_41822__$1);
var G__41835 = null;
var G__41836 = (0);
var G__41837 = (0);
seq__41767_41807 = G__41834;
chunk__41768_41808 = G__41835;
count__41769_41809 = G__41836;
i__41770_41810 = G__41837;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41781 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41782 = null;
var count__41783 = (0);
var i__41784 = (0);
while(true){
if((i__41784 < count__41783)){
var role = cljs.core._nth.call(null,chunk__41782,i__41784);
var temp__4657__auto___41838__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41838__$1)){
var spec_41839 = temp__4657__auto___41838__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41839));
} else {
}

var G__41840 = seq__41781;
var G__41841 = chunk__41782;
var G__41842 = count__41783;
var G__41843 = (i__41784 + (1));
seq__41781 = G__41840;
chunk__41782 = G__41841;
count__41783 = G__41842;
i__41784 = G__41843;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41781);
if(temp__4657__auto____$1){
var seq__41781__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41781__$1)){
var c__29324__auto__ = cljs.core.chunk_first.call(null,seq__41781__$1);
var G__41844 = cljs.core.chunk_rest.call(null,seq__41781__$1);
var G__41845 = c__29324__auto__;
var G__41846 = cljs.core.count.call(null,c__29324__auto__);
var G__41847 = (0);
seq__41781 = G__41844;
chunk__41782 = G__41845;
count__41783 = G__41846;
i__41784 = G__41847;
continue;
} else {
var role = cljs.core.first.call(null,seq__41781__$1);
var temp__4657__auto___41848__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41848__$2)){
var spec_41849 = temp__4657__auto___41848__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_41849));
} else {
}

var G__41850 = cljs.core.next.call(null,seq__41781__$1);
var G__41851 = null;
var G__41852 = (0);
var G__41853 = (0);
seq__41781 = G__41850;
chunk__41782 = G__41851;
count__41783 = G__41852;
i__41784 = G__41853;
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

//# sourceMappingURL=repl.js.map?rel=1512565258476
