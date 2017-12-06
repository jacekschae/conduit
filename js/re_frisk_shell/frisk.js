// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frisk_shell.frisk');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.reader_types');
goog.require('re_frisk_shell.filter_parser');
goog.require('re_frisk_shell.filter_matcher');
goog.require('re_com.core');
goog.require('re_frisk_shell.re_com.ui');
re_frisk_shell.frisk.debounce_pending = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
re_frisk_shell.frisk.debounce = (function re_frisk_shell$frisk$debounce(key,delay,f){
var old_timeout = key.call(null,cljs.core.deref.call(null,re_frisk_shell.frisk.debounce_pending));
var new_timeout = setTimeout(f,delay);
cljs.core.swap_BANG_.call(null,re_frisk_shell.frisk.debounce_pending,cljs.core.assoc,key,new_timeout);

return clearTimeout(old_timeout);
});
re_frisk_shell.frisk.ExpandButton = (function re_frisk_shell$frisk$ExpandButton(p__47152){
var map__47153 = p__47152;
var map__47153__$1 = ((((!((map__47153 == null)))?((((map__47153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47153.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47153):map__47153);
var expanded_QMARK_ = cljs.core.get.call(null,map__47153__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var path = cljs.core.get.call(null,map__47153__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.call(null,map__47153__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47153,map__47153__$1,expanded_QMARK_,path,emit_fn){
return (function (){
return emit_fn.call(null,(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"contract","contract",798152745):new cljs.core.Keyword(null,"expand","expand",595248157)),path);
});})(map__47153,map__47153__$1,expanded_QMARK_,path,emit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(expanded_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"gray",new cljs.core.Keyword(null,"color","color",1011675173),"gray"], null)], null)], null)], null);
});
re_frisk_shell.frisk.styles = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shell","shell",1402941019),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(9999)], null),new cljs.core.Keyword(null,"strings","strings",-2055406807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#4Ebb4E"], null),new cljs.core.Keyword(null,"keywords","keywords",1526959054),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null),new cljs.core.Keyword(null,"numbers","numbers",1036309864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"shell-visible-button","shell-visible-button",-1362287320),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#4EE24E"], null)], null);
re_frisk_shell.frisk.ExpandAllButton = (function re_frisk_shell$frisk$ExpandAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"expand-all","expand-all",-1489416197),data);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px",new cljs.core.Keyword(null,"borderTopLeftRadius","borderTopLeftRadius",-1503490700),"2px",new cljs.core.Keyword(null,"borderBottomLeftRadius","borderBottomLeftRadius",-1845172472),"2px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid darkgray",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"white"], null)], null),"Expand all"], null);
});
re_frisk_shell.frisk.CollapseAllButton = (function re_frisk_shell$frisk$CollapseAllButton(emit_fn,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"collapse-all","collapse-all",957676825));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderBottomRightRadius","borderBottomRightRadius",1814053058),new cljs.core.Keyword(null,"borderTop","borderTop",2080227753),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"borderBottom","borderBottom",1676563277),new cljs.core.Keyword(null,"borderTopRightRadius","borderTopRightRadius",1530376433),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRight","borderRight",-873333451),new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)],["2px","1px solid darkgray","pointer","1px solid darkgray","2px","0px","1px solid darkgray","0","white"])], null),"Collapse all"], null);
});
re_frisk_shell.frisk.edit_debounce_ms = (400);
re_frisk_shell.frisk.FilterEditBox = (function re_frisk_shell$frisk$FilterEditBox(emit_fn,filter){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null),new cljs.core.Keyword(null,"value","value",305978217),filter,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type here to find keys...",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47155_SHARP_){
return emit_fn.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),p1__47155_SHARP_.target.value,re_frisk_shell.frisk.edit_debounce_ms);
})], null)], null);
});
re_frisk_shell.frisk.FilterReset = (function re_frisk_shell$frisk$FilterReset(emit_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(5),new cljs.core.Keyword(null,"width","width",-384071477),(25)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return emit_fn.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),"",(0));
})], null),"X"], null);
});
re_frisk_shell.frisk.node_clicked = (function re_frisk_shell$frisk$node_clicked(p__47156){
var map__47157 = p__47156;
var map__47157__$1 = ((((!((map__47157 == null)))?((((map__47157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47157):map__47157);
var all = map__47157__$1;
var event = cljs.core.get.call(null,map__47157__$1,new cljs.core.Keyword(null,"event","event",301435442));
var emit_fn = cljs.core.get.call(null,map__47157__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var path = cljs.core.get.call(null,map__47157__$1,new cljs.core.Keyword(null,"path","path",-188191168));
event.stopPropagation();

return emit_fn.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''),(0));
});
re_frisk_shell.frisk.NilText = (function re_frisk_shell$frisk$NilText(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"nil","nil",99600501).cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.call(null,null)], null);
});
re_frisk_shell.frisk.StringText = (function re_frisk_shell$frisk$StringText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"strings","strings",-2055406807).cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),cljs.core.pr_str.call(null,data)], null);
});
re_frisk_shell.frisk.KeywordText = (function re_frisk_shell$frisk$KeywordText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')], null);
});
re_frisk_shell.frisk.NumberText = (function re_frisk_shell$frisk$NumberText(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"numbers","numbers",1036309864).cljs$core$IFn$_invoke$arity$1(re_frisk_shell.frisk.styles)], null),data], null);
});
re_frisk_shell.frisk.is_prefix = (function re_frisk_shell$frisk$is_prefix(needle,haystack){
return ((cljs.core.count.call(null,needle) < cljs.core.count.call(null,haystack))) && (cljs.core._EQ_.call(null,needle,cljs.core.subvec.call(null,haystack,(0),cljs.core.count.call(null,needle))));
});
re_frisk_shell.frisk.Node = (function re_frisk_shell$frisk$Node(p__47160){
var map__47161 = p__47160;
var map__47161__$1 = ((((!((map__47161 == null)))?((((map__47161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47161):map__47161);
var val = map__47161__$1;
var data = cljs.core.get.call(null,map__47161__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__47161__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var emit_fn = cljs.core.get.call(null,map__47161__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__47161__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.call(null,map__47161__$1,new cljs.core.Keyword(null,"node","node",581201198));
var matching_paths = cljs.core.get.call(null,map__47161__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px"], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function (p1__47159_SHARP_){
return re_frisk_shell.frisk.node_clicked.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),p1__47159_SHARP_,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn,new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});})(map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(node)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null):null),(cljs.core.truth_(cljs.core.get.call(null,matching_paths,path))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff9db"], null):null))], null),(((data == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NilText], null):((typeof data === 'string')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function re_frisk_shell$frisk$Node_$_string_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",570724917),path,e.target.value);
});})(map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.StringText,data], null)):(((data instanceof cljs.core.Keyword))?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.name.call(null,data),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function re_frisk_shell$frisk$Node_$_keyword_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",570724917),path,cljs.core.keyword.call(null,e.target.value));
});})(map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeywordText,data], null)):((cljs.core.object_QMARK_.call(null,data))?"Object":((typeof data === 'number')?(cljs.core.truth_(swappable)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"default-value","default-value",232220170),data,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths){
return (function re_frisk_shell$frisk$Node_$_number_changed(e){
return emit_fn.call(null,new cljs.core.Keyword(null,"changed","changed",570724917),path,Number(e.target.value));
});})(map__47161,map__47161__$1,val,data,path,emit_fn,swappable,node,matching_paths))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.NumberText,data], null)):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')
)))))], null)], null);
});
re_frisk_shell.frisk.is_expanded = (function re_frisk_shell$frisk$is_expanded(expanded_paths,expanded_matching_paths,path){
var or__28485__auto__ = cljs.core.get.call(null,expanded_paths,path);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.get.call(null,expanded_matching_paths,path);
}
});
re_frisk_shell.frisk.KeyValNode = (function re_frisk_shell$frisk$KeyValNode(p__47163){
var map__47164 = p__47163;
var map__47164__$1 = ((((!((map__47164 == null)))?((((map__47164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47164):map__47164);
var vec__47165 = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var k = cljs.core.nth.call(null,vec__47165,(0),null);
var v = cljs.core.nth.call(null,vec__47165,(1),null);
var path = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__47164__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data","data",-232669377),k,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,k),new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths], null),new cljs.core.Keyword(null,"data","data",-232669377),v,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,k),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null);
});
re_frisk_shell.frisk.MapNode = (function re_frisk_shell$frisk$MapNode(p__47169){
var map__47170 = p__47169;
var map__47170__$1 = ((((!((map__47170 == null)))?((((map__47170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47170):map__47170);
var all = map__47170__$1;
var data = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var node = cljs.core.get.call(null,map__47170__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk_shell.frisk.is_expanded.call(null,expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," {"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.keys.call(null,data)))," keys"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__47170,map__47170__$1,all,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.KeyValNode,cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"data","data",-232669377),x)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(expanded_QMARK_,map__47170,map__47170__$1,all,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.ListVecNode = (function re_frisk_shell$frisk$ListVecNode(p__47172){
var map__47173 = p__47172;
var map__47173__$1 = ((((!((map__47173 == null)))?((((map__47173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47173):map__47173);
var data = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.call(null,map__47173__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk_shell.frisk.is_expanded.call(null,expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_.call(null,data))?" [":" ("),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core.vector_QMARK_.call(null,data))?"]":")")], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__47173,map__47173__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,i),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(expanded_QMARK_,map__47173,map__47173__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.SetNode = (function re_frisk_shell$frisk$SetNode(p__47175){
var map__47176 = p__47175;
var map__47176__$1 = ((((!((map__47176 == null)))?((((map__47176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47176):map__47176);
var data = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var path = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expanded_paths = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540));
var matching_paths = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723));
var expanded_matching_paths = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716));
var emit_fn = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910));
var swappable = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"swappable","swappable",-2024641906));
var node = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"node","node",581201198));
var expanded_QMARK_ = re_frisk_shell.frisk.is_expanded.call(null,expanded_paths,expanded_matching_paths,path);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 1 auto"], null)], null),((cljs.core.empty_QMARK_.call(null,data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20px"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),expanded_QMARK_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(cljs.core.truth_(node)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,node], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," #{",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,data))," items"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"}"], null),(cljs.core.truth_(expanded_QMARK_)?cljs.core.map_indexed.call(null,((function (expanded_QMARK_,map__47176,map__47176__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node){
return (function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),x,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,x),new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),expanded_paths,new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching_paths,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching_paths,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});})(expanded_QMARK_,map__47176,map__47176__$1,data,path,expanded_paths,matching_paths,expanded_matching_paths,emit_fn,swappable,node))
,data):null)], null)], null);
});
re_frisk_shell.frisk.DataFrisk = (function re_frisk_shell$frisk$DataFrisk(p__47178){
var map__47179 = p__47178;
var map__47179__$1 = ((((!((map__47179 == null)))?((((map__47179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47179):map__47179);
var all = map__47179__$1;
var data = cljs.core.get.call(null,map__47179__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.map_QMARK_.call(null,data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.MapNode,all], null);
} else {
if(cljs.core.set_QMARK_.call(null,data)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.SetNode,all], null);
} else {
if((cljs.core.seq_QMARK_.call(null,data)) || (cljs.core.vector_QMARK_.call(null,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ListVecNode,all], null);
} else {
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,cljs.core.assoc.call(null,all,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,data))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Node,all], null);

}
}
}
}
});
re_frisk_shell.frisk.conj_to_set = (function re_frisk_shell$frisk$conj_to_set(coll,x){
return cljs.core.conj.call(null,(function (){var or__28485__auto__ = coll;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),x);
});
re_frisk_shell.frisk.expand_all_paths = (function re_frisk_shell$frisk$expand_all_paths(root_value){
var remaining = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"node","node",581201198),root_value], null)], null);
var expanded_paths = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,remaining)){
var vec__47182 = remaining;
var seq__47183 = cljs.core.seq.call(null,vec__47182);
var first__47184 = cljs.core.first.call(null,seq__47183);
var seq__47183__$1 = cljs.core.next.call(null,seq__47183);
var current = first__47184;
var rest = seq__47183__$1;
var current_node = (((function (){var G__47185 = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current);
if(!((G__47185 == null))){
if(((G__47185.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === G__47185.cljs$core$IDeref$))){
return true;
} else {
if((!G__47185.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__47185);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__47185);
}
})())?cljs.core.deref.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current)):new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(current));
if(cljs.core.map_QMARK_.call(null,current_node)){
var G__47190 = cljs.core.concat.call(null,rest,cljs.core.map.call(null,((function (remaining,expanded_paths,vec__47182,seq__47183,first__47184,seq__47183__$1,current,rest,current_node){
return (function (p__47186){
var vec__47187 = p__47186;
var k = cljs.core.nth.call(null,vec__47187,(0),null);
var v = cljs.core.nth.call(null,vec__47187,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),k),new cljs.core.Keyword(null,"node","node",581201198),v], null);
});})(remaining,expanded_paths,vec__47182,seq__47183,first__47184,seq__47183__$1,current,rest,current_node))
,current_node));
var G__47191 = cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__47190;
expanded_paths = G__47191;
continue;
} else {
if((cljs.core.seq_QMARK_.call(null,current_node)) || (cljs.core.vector_QMARK_.call(null,current_node))){
var G__47192 = cljs.core.concat.call(null,rest,cljs.core.map_indexed.call(null,((function (remaining,expanded_paths,vec__47182,seq__47183,first__47184,seq__47183__$1,current,rest,current_node){
return (function (i,node){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current),i),new cljs.core.Keyword(null,"node","node",581201198),node], null);
});})(remaining,expanded_paths,vec__47182,seq__47183,first__47184,seq__47183__$1,current,rest,current_node))
,current_node));
var G__47193 = cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current));
remaining = G__47192;
expanded_paths = G__47193;
continue;
} else {
var G__47194 = rest;
var G__47195 = ((cljs.core.coll_QMARK_.call(null,current_node))?cljs.core.conj.call(null,expanded_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(current)):expanded_paths);
remaining = G__47194;
expanded_paths = G__47195;
continue;

}
}
} else {
return expanded_paths;
}
break;
}
});
re_frisk_shell.frisk.apply_filter = (function re_frisk_shell$frisk$apply_filter(state,id){
var filter = re_frisk_shell.filter_parser.parse.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"raw-filter","raw-filter",2130663181)], null)));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),filter);
});
re_frisk_shell.frisk.emit_fn_factory = (function re_frisk_shell$frisk$emit_fn_factory(state_atom,id,swappable){
return (function() { 
var G__47200__delegate = function (event,args){
var G__47196 = event;
var G__47196__$1 = (((G__47196 instanceof cljs.core.Keyword))?G__47196.fqn:null);
switch (G__47196__$1) {
case "expand":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk_shell.frisk.conj_to_set,cljs.core.first.call(null,args));

break;
case "expand-all":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),re_frisk_shell.frisk.expand_all_paths.call(null,cljs.core.first.call(null,args)));

break;
case "contract":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.disj,cljs.core.first.call(null,args));

break;
case "collapse-all":
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.EMPTY);

break;
case "filter-change":
cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),id,new cljs.core.Keyword(null,"raw-filter","raw-filter",2130663181)], null),cljs.core.first.call(null,args));

return re_frisk_shell.frisk.debounce.call(null,new cljs.core.Keyword(null,"filter-change","filter-change",-1776980903),cljs.core.second.call(null,args),((function (G__47196,G__47196__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_frisk_shell.frisk.apply_filter,id);
});})(G__47196,G__47196__$1))
);

break;
case "changed":
var vec__47197 = args;
var path = cljs.core.nth.call(null,vec__47197,(0),null);
var value = cljs.core.nth.call(null,vec__47197,(1),null);
if(cljs.core.seq.call(null,path)){
return cljs.core.swap_BANG_.call(null,swappable,cljs.core.assoc_in,path,value);
} else {
return cljs.core.reset_BANG_.call(null,swappable,value);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47196__$1)].join('')));

}
};
var G__47200 = function (event,var_args){
var args = null;
if (arguments.length > 1) {
var G__47202__i = 0, G__47202__a = new Array(arguments.length -  1);
while (G__47202__i < G__47202__a.length) {G__47202__a[G__47202__i] = arguments[G__47202__i + 1]; ++G__47202__i;}
  args = new cljs.core.IndexedSeq(G__47202__a,0,null);
} 
return G__47200__delegate.call(this,event,args);};
G__47200.cljs$lang$maxFixedArity = 1;
G__47200.cljs$lang$applyTo = (function (arglist__47203){
var event = cljs.core.first(arglist__47203);
var args = cljs.core.rest(arglist__47203);
return G__47200__delegate(event,args);
});
G__47200.cljs$core$IFn$_invoke$arity$variadic = G__47200__delegate;
return G__47200;
})()
;
});
re_frisk_shell.frisk.walk_paths = (function re_frisk_shell$frisk$walk_paths(var_args){
var G__47205 = arguments.length;
switch (G__47205) {
case 1:
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$1 = (function (data){
return re_frisk_shell.frisk.walk_paths.call(null,cljs.core.PersistentVector.EMPTY,data);
});

re_frisk_shell.frisk.walk_paths.cljs$core$IFn$_invoke$arity$2 = (function (prefix,data){
return cljs.core.conj.call(null,((cljs.core.map_QMARK_.call(null,data))?cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,(function (p__47206){
var vec__47207 = p__47206;
var k = cljs.core.nth.call(null,vec__47207,(0),null);
var v = cljs.core.nth.call(null,vec__47207,(1),null);
return re_frisk_shell.frisk.walk_paths.call(null,cljs.core.conj.call(null,prefix,k),v);
}),data)):((cljs.core.set_QMARK_.call(null,data))?cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,(function (v){
return re_frisk_shell.frisk.walk_paths.call(null,cljs.core.conj.call(null,prefix,v),v);
}),data)):(((cljs.core.seq_QMARK_.call(null,data)) || (cljs.core.vector_QMARK_.call(null,data)))?cljs.core.apply.call(null,clojure.set.union,cljs.core.map_indexed.call(null,(function (i,v){
return re_frisk_shell.frisk.walk_paths.call(null,cljs.core.conj.call(null,prefix,i),v);
}),data)):((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IDeref$)))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,data)))?re_frisk_shell.frisk.walk_paths.call(null,prefix,cljs.core.deref.call(null,data)):cljs.core.PersistentHashSet.EMPTY
)))),prefix);
});

re_frisk_shell.frisk.walk_paths.cljs$lang$maxFixedArity = 2;

re_frisk_shell.frisk.matching_paths = (function re_frisk_shell$frisk$matching_paths(data,filter_SINGLEQUOTE_){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47212_SHARP_){
return re_frisk_shell.filter_matcher.match.call(null,filter_SINGLEQUOTE_,p1__47212_SHARP_);
}),re_frisk_shell.frisk.walk_paths.call(null,data)));
});
re_frisk_shell.frisk.prefixes = (function re_frisk_shell$frisk$prefixes(path){
return cljs.core.set.call(null,cljs.core.reductions.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,path));
});
re_frisk_shell.frisk.expanded_matching_paths = (function re_frisk_shell$frisk$expanded_matching_paths(paths){
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,re_frisk_shell.frisk.prefixes,paths));
});
re_frisk_shell.frisk.Root = (function re_frisk_shell$frisk$Root(data,id,state_atom){
var data_frisk = new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
var swappable = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === data.cljs$core$IAtom$)))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data)))?data:null);
var filter = (function (){var or__28485__auto__ = cljs.core.get_in.call(null,data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var matching = re_frisk_shell.frisk.matching_paths.call(null,data,filter);
var expanded_matching = re_frisk_shell.frisk.expanded_matching_paths.call(null,matching);
var emit_fn = re_frisk_shell.frisk.emit_fn_factory.call(null,state_atom,id,swappable);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3",new cljs.core.Keyword(null,"color","color",1011675173),"#444444"], null),new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 2px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.ExpandAllButton,emit_fn,data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.CollapseAllButton,emit_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff9db"], null)], null),cljs.core.count.call(null,matching)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.FilterEditBox,emit_fn,cljs.core.get_in.call(null,data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"raw-filter","raw-filter",2130663181)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.FilterReset,emit_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.re_com.ui.scroller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.DataFrisk,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"swappable","swappable",-2024641906),swappable,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540),cljs.core.get_in.call(null,data_frisk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null)),new cljs.core.Keyword(null,"matching-paths","matching-paths",-1249144723),matching,new cljs.core.Keyword(null,"expanded-matching-paths","expanded-matching-paths",917555716),expanded_matching,new cljs.core.Keyword(null,"emit-fn","emit-fn",282268910),emit_fn], null)], null)], null)], null)], null);
});
re_frisk_shell.frisk.expand_by_default = cljs.core.reduce.call(null,(function (p1__47214_SHARP_,p2__47215_SHARP_){
return cljs.core.assoc_in.call(null,p1__47214_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__47215_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,(1)));
re_frisk_shell.frisk.main_frisk = (function re_frisk_shell$frisk$main_frisk(re_frame_data,checkbox_sorted_val){
var state_atom = reagent.core.atom.call(null,re_frisk_shell.frisk.expand_by_default);
return ((function (state_atom){
return (function (_){
var db = cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame_data)));
var db_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__28473__auto__ = cljs.core.deref.call(null,checkbox_sorted_val);
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.map_QMARK_.call(null,db);
} else {
return and__28473__auto__;
}
})())?(function (){try{return cljs.core.into.call(null,cljs.core.sorted_map.call(null),db);
}catch (e47216){var e = e47216;
cljs.core.reset_BANG_.call(null,checkbox_sorted_val,false);

return db;
}})():db);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,db_SINGLEQUOTE_,(0),state_atom], null);
});
;})(state_atom))
});
re_frisk_shell.frisk.handler_frisk = (function re_frisk_shell$frisk$handler_frisk(re_frame_data){
var state_atom = reagent.core.atom.call(null,re_frisk_shell.frisk.expand_by_default);
return ((function (state_atom){
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,cljs.core.deref.call(null,new cljs.core.Keyword(null,"id-handler","id-handler",1013135509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame_data))),(0),state_atom], null);
});
;})(state_atom))
});
re_frisk_shell.frisk.event_frisk = (function re_frisk_shell$frisk$event_frisk(deb_data){
var state_atom = reagent.core.atom.call(null,re_frisk_shell.frisk.expand_by_default);
return ((function (state_atom){
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk_shell.frisk.Root,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-vector","event-vector",1374987402),cljs.core.get_in.call(null,cljs.core.deref.call(null,deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.Keyword(null,"event","event",301435442)], null)),new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),cljs.core.get_in.call(null,cljs.core.deref.call(null,deb_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-data","event-data",-1726012139),new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713)], null))], null),(0),state_atom], null);
});
;})(state_atom))
});

//# sourceMappingURL=frisk.js.map?rel=1512565263096
