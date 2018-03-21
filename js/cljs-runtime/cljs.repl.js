goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34193){
var map__34194 = p__34193;
var map__34194__$1 = ((((!((map__34194 == null)))?(((((map__34194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34194):map__34194);
var m = map__34194__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34194__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34194__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34196_34224 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34197_34225 = null;
var count__34198_34226 = (0);
var i__34199_34227 = (0);
while(true){
if((i__34199_34227 < count__34198_34226)){
var f_34228 = chunk__34197_34225.cljs$core$IIndexed$_nth$arity$2(null,i__34199_34227);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34228], 0));


var G__34229 = seq__34196_34224;
var G__34230 = chunk__34197_34225;
var G__34231 = count__34198_34226;
var G__34232 = (i__34199_34227 + (1));
seq__34196_34224 = G__34229;
chunk__34197_34225 = G__34230;
count__34198_34226 = G__34231;
i__34199_34227 = G__34232;
continue;
} else {
var temp__5457__auto___34233 = cljs.core.seq(seq__34196_34224);
if(temp__5457__auto___34233){
var seq__34196_34234__$1 = temp__5457__auto___34233;
if(cljs.core.chunked_seq_QMARK_(seq__34196_34234__$1)){
var c__4319__auto___34235 = cljs.core.chunk_first(seq__34196_34234__$1);
var G__34236 = cljs.core.chunk_rest(seq__34196_34234__$1);
var G__34237 = c__4319__auto___34235;
var G__34238 = cljs.core.count(c__4319__auto___34235);
var G__34239 = (0);
seq__34196_34224 = G__34236;
chunk__34197_34225 = G__34237;
count__34198_34226 = G__34238;
i__34199_34227 = G__34239;
continue;
} else {
var f_34240 = cljs.core.first(seq__34196_34234__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34240], 0));


var G__34241 = cljs.core.next(seq__34196_34234__$1);
var G__34242 = null;
var G__34243 = (0);
var G__34244 = (0);
seq__34196_34224 = G__34241;
chunk__34197_34225 = G__34242;
count__34198_34226 = G__34243;
i__34199_34227 = G__34244;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34245 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34245], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34245)))?cljs.core.second(arglists_34245):arglists_34245)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34202_34246 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34203_34247 = null;
var count__34204_34248 = (0);
var i__34205_34249 = (0);
while(true){
if((i__34205_34249 < count__34204_34248)){
var vec__34206_34250 = chunk__34203_34247.cljs$core$IIndexed$_nth$arity$2(null,i__34205_34249);
var name_34251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34206_34250,(0),null);
var map__34209_34252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34206_34250,(1),null);
var map__34209_34253__$1 = ((((!((map__34209_34252 == null)))?(((((map__34209_34252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34209_34252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34209_34252):map__34209_34252);
var doc_34254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34209_34253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34209_34253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34251], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34255], 0));

if(cljs.core.truth_(doc_34254)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34254], 0));
} else {
}


var G__34256 = seq__34202_34246;
var G__34257 = chunk__34203_34247;
var G__34258 = count__34204_34248;
var G__34259 = (i__34205_34249 + (1));
seq__34202_34246 = G__34256;
chunk__34203_34247 = G__34257;
count__34204_34248 = G__34258;
i__34205_34249 = G__34259;
continue;
} else {
var temp__5457__auto___34260 = cljs.core.seq(seq__34202_34246);
if(temp__5457__auto___34260){
var seq__34202_34261__$1 = temp__5457__auto___34260;
if(cljs.core.chunked_seq_QMARK_(seq__34202_34261__$1)){
var c__4319__auto___34262 = cljs.core.chunk_first(seq__34202_34261__$1);
var G__34263 = cljs.core.chunk_rest(seq__34202_34261__$1);
var G__34264 = c__4319__auto___34262;
var G__34265 = cljs.core.count(c__4319__auto___34262);
var G__34266 = (0);
seq__34202_34246 = G__34263;
chunk__34203_34247 = G__34264;
count__34204_34248 = G__34265;
i__34205_34249 = G__34266;
continue;
} else {
var vec__34211_34267 = cljs.core.first(seq__34202_34261__$1);
var name_34268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34211_34267,(0),null);
var map__34214_34269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34211_34267,(1),null);
var map__34214_34270__$1 = ((((!((map__34214_34269 == null)))?(((((map__34214_34269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34214_34269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34214_34269):map__34214_34269);
var doc_34271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34214_34270__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34214_34270__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34268], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34272], 0));

if(cljs.core.truth_(doc_34271)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34271], 0));
} else {
}


var G__34273 = cljs.core.next(seq__34202_34261__$1);
var G__34274 = null;
var G__34275 = (0);
var G__34276 = (0);
seq__34202_34246 = G__34273;
chunk__34203_34247 = G__34274;
count__34204_34248 = G__34275;
i__34205_34249 = G__34276;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34216 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34217 = null;
var count__34218 = (0);
var i__34219 = (0);
while(true){
if((i__34219 < count__34218)){
var role = chunk__34217.cljs$core$IIndexed$_nth$arity$2(null,i__34219);
var temp__5457__auto___34277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34277__$1)){
var spec_34278 = temp__5457__auto___34277__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_34278)], 0));
} else {
}


var G__34279 = seq__34216;
var G__34280 = chunk__34217;
var G__34281 = count__34218;
var G__34282 = (i__34219 + (1));
seq__34216 = G__34279;
chunk__34217 = G__34280;
count__34218 = G__34281;
i__34219 = G__34282;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__34216);
if(temp__5457__auto____$1){
var seq__34216__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34216__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__34216__$1);
var G__34283 = cljs.core.chunk_rest(seq__34216__$1);
var G__34284 = c__4319__auto__;
var G__34285 = cljs.core.count(c__4319__auto__);
var G__34286 = (0);
seq__34216 = G__34283;
chunk__34217 = G__34284;
count__34218 = G__34285;
i__34219 = G__34286;
continue;
} else {
var role = cljs.core.first(seq__34216__$1);
var temp__5457__auto___34287__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___34287__$2)){
var spec_34288 = temp__5457__auto___34287__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_34288)], 0));
} else {
}


var G__34289 = cljs.core.next(seq__34216__$1);
var G__34290 = null;
var G__34291 = (0);
var G__34292 = (0);
seq__34216 = G__34289;
chunk__34217 = G__34290;
count__34218 = G__34291;
i__34219 = G__34292;
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

//# sourceMappingURL=cljs.repl.js.map
