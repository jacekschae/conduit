// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.tools.reader.impl.errors');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return cljs.core.assoc.call(null,details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,rdr),new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number.call(null,rdr));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46792 = arguments.length;
var i__29657__auto___46793 = (0);
while(true){
if((i__29657__auto___46793 < len__29656__auto___46792)){
args__29663__auto__.push((arguments[i__29657__auto___46793]));

var G__46794 = (i__29657__auto___46793 + (1));
i__29657__auto___46793 = G__46794;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((2) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29664__auto__);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details.call(null,rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__28485__auto__ = msg1;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.call(null,cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.call(null,full_msg,details);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2);

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq46789){
var G__46790 = cljs.core.first.call(null,seq46789);
var seq46789__$1 = cljs.core.next.call(null,seq46789);
var G__46791 = cljs.core.first.call(null,seq46789__$1);
var seq46789__$2 = cljs.core.next.call(null,seq46789__$1);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(G__46790,G__46791,seq46789__$2);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46797 = arguments.length;
var i__29657__auto___46798 = (0);
while(true){
if((i__29657__auto___46798 < len__29656__auto___46797)){
args__29663__auto__.push((arguments[i__29657__auto___46798]));

var G__46799 = (i__29657__auto___46798 + (1));
i__29657__auto___46798 = G__46799;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq46795){
var G__46796 = cljs.core.first.call(null,seq46795);
var seq46795__$1 = cljs.core.next.call(null,seq46795);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(G__46796,seq46795__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46802 = arguments.length;
var i__29657__auto___46803 = (0);
while(true){
if((i__29657__auto___46803 < len__29656__auto___46802)){
args__29663__auto__.push((arguments[i__29657__auto___46803]));

var G__46804 = (i__29657__auto___46803 + (1));
i__29657__auto___46803 = G__46804;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq46800){
var G__46801 = cljs.core.first.call(null,seq46800);
var seq46800__$1 = cljs.core.next.call(null,seq46800);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(G__46801,seq46800__$1);
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46807 = arguments.length;
var i__29657__auto___46808 = (0);
while(true){
if((i__29657__auto___46808 < len__29656__auto___46807)){
args__29663__auto__.push((arguments[i__29657__auto___46808]));

var G__46809 = (i__29657__auto___46808 + (1));
i__29657__auto___46808 = G__46809;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((1) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29664__auto__);
});

cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1);

cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq46805){
var G__46806 = cljs.core.first.call(null,seq46805);
var seq46805__$1 = cljs.core.next.call(null,seq46805);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(G__46806,seq46805__$1);
});

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__46811 = arguments.length;
switch (G__46811) {
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.call(null,rdr,kind,line,column,null);
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name.call(null,kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),".");
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.call(null,cljs.core.first.call(null,elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count.call(null,elements)," form(s). Map literals must contain an even number of forms.");
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid number: ",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid unicode literal: \\",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch,".");
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid ",cljs.core.name.call(null,kind),": ",token,".");
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading start of ",cljs.core.name.call(null,kind),".");
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid character: ",ch," found while reading ",cljs.core.name.call(null,kind),".");
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading dispatch character.");
});
cljs.tools.reader.impl.errors.throw_bad_dispatch = (function cljs$tools$reader$impl$errors$throw_bad_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"No dispatch macro for ",ch,".");
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Unmatched delimiter ",ch,".");
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__29663__auto__ = [];
var len__29656__auto___46817 = arguments.length;
var i__29657__auto___46818 = (0);
while(true){
if((i__29657__auto___46818 < len__29656__auto___46817)){
args__29663__auto__.push((arguments[i__29657__auto___46818]));

var G__46819 = (i__29657__auto___46818 + (1));
i__29657__auto___46818 = G__46819;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((2) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29664__auto__);
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
var init = (function (){var G__46816 = kind;
var G__46816__$1 = (((G__46816 instanceof cljs.core.Keyword))?G__46816.fqn:null);
switch (G__46816__$1) {
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46816__$1)].join('')));

}
})();
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF reading ",cljs.core.name.call(null,kind)," starting ",cljs.core.apply.call(null,cljs.core.str,init,start),".");
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2);

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq46813){
var G__46814 = cljs.core.first.call(null,seq46813);
var seq46813__$1 = cljs.core.next.call(null,seq46813);
var G__46815 = cljs.core.first.call(null,seq46813__$1);
var seq46813__$2 = cljs.core.next.call(null,seq46813__$1);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic(G__46814,G__46815,seq46813__$2);
});

cljs.tools.reader.impl.errors.throw_no_dispatch = (function cljs$tools$reader$impl$errors$throw_no_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.throw_bad_dispatch.call(null,rdr,ch);
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid unicode character \\",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid digit ",ch," in unicode character \\",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid digit ",ch," in unicode character.");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid unicode literal. Unicode literals should be ",expected,"characters long.  ","value suppled is ",actual,"characters long.");
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid character literal \\u",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid octal escape sequence in a character literal:",token,". Octal escape sequences must be 3 or fewer digits.");
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Unsupported character: ",token,".");
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading character.");
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Unsupported escape character: \\",ch,".");
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"A single colon is not a valid keyword.");
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.call(null,x),". Metadata must be a Symbol, Keyword, String or Map.");
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.call(null,target),". ","Metadata can only be applied to IMetas.");
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.call(null,feature)," Features must be keywords.");
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Namespaced map with namespace ",ns_name," does not specify a map.");
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid value used as namespace in namespaced map: ",ns_name,".");
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.call(null,tag),". Reader tags must be symbols.");
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.call(null,tag),".");
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
var iter__29293__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__46831(s__46832){
return (new cljs.core.LazySeq(null,(function (){
var s__46832__$1 = s__46832;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__46832__$1);
if(temp__4657__auto__){
var s__46832__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46832__$2)){
var c__29291__auto__ = cljs.core.chunk_first.call(null,s__46832__$2);
var size__29292__auto__ = cljs.core.count.call(null,c__29291__auto__);
var b__46834 = cljs.core.chunk_buffer.call(null,size__29292__auto__);
if((function (){var i__46833 = (0);
while(true){
if((i__46833 < size__29292__auto__)){
var vec__46835 = cljs.core._nth.call(null,c__29291__auto__,i__46833);
var id = cljs.core.nth.call(null,vec__46835,(0),null);
var freq = cljs.core.nth.call(null,vec__46835,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__46834,id);

var G__46841 = (i__46833 + (1));
i__46833 = G__46841;
continue;
} else {
var G__46842 = (i__46833 + (1));
i__46833 = G__46842;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46834),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__46831.call(null,cljs.core.chunk_rest.call(null,s__46832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46834),null);
}
} else {
var vec__46838 = cljs.core.first.call(null,s__46832__$2);
var id = cljs.core.nth.call(null,vec__46838,(0),null);
var freq = cljs.core.nth.call(null,vec__46838,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__46831.call(null,cljs.core.rest.call(null,s__46832__$2)));
} else {
var G__46843 = cljs.core.rest.call(null,s__46832__$2);
s__46832__$1 = G__46843;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29293__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);
return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > (1)))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,cljs.tools.reader.impl.errors.duplicate_keys_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,kind)))," literal contains duplicate key"].join(''),ks));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"EOF while reading, starting at line ",line,".");
} else {
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"EOF while reading.");
}
});

//# sourceMappingURL=errors.js.map?rel=1512565262553
