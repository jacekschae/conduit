// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_com.popover');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.ratom');
re_com.popover.point = (function re_com$popover$point(x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)," "].join('');
});
/**
 * Return the vector of the two keywords formed by splitting another keyword 'kw' on an internal delimiter (usually '-')
 * (split-keyword  :above-left  "-") => [:above :left]
 */
re_com.popover.split_keyword = (function re_com$popover$split_keyword(kw,delimiter){
var keywords = clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join(''),cljs.core.re_pattern.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),":]"].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,keywords.call(null,(1))),cljs.core.keyword.call(null,keywords.call(null,(2)))], null);
});
/**
 * A button with a big X in it, placed to the right of the popover title
 */
re_com.popover.close_button = (function re_com$popover$close_button(showing_QMARK_,close_callback,style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(close_callback)){
close_callback.call(null);
} else {
cljs.core.reset_BANG_.call(null,showing_QMARK_,false);
}

return null;
}),new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"34px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"26px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"right","right",-452581833),"2px"], null),style)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"zmdi zmdi-hc-fw-rc zmdi-close"], null)], null)], null);
});
/**
 * Determine values for :left :right :top :bottom CSS styles.
 * - pop-orient    What side of the anchor the popover will be attached to. One of :above :below :left :right
 * - p-width       The px width of the popover after it has been rendered
 * - p-height      The px height of the popover after it has been rendered
 * - pop-offset    The number of pixels the popover is offset from it's natural position in relation to the popover-arrow (ugh, hard to explain)
 * - arrow-length  The px length of the arrow (from the point to middle of arrow base)
 * - arrow-gap     The px distance between the anchor and the arrow tip. Positive numbers push the popover away from the anchor
 *   
 */
re_com.popover.calc_popover_pos = (function re_com$popover$calc_popover_pos(pop_orient,p_width,p_height,pop_offset,arrow_length,arrow_gap){
var total_offset = (arrow_length + arrow_gap);
var popover_left = (function (){var G__43658 = pop_orient;
var G__43658__$1 = (((G__43658 instanceof cljs.core.Keyword))?G__43658.fqn:null);
switch (G__43658__$1) {
case "left":
return "initial";

break;
case "right":
return re_com.util.px.call(null,total_offset);

break;
case "above":
case "below":
return re_com.util.px.call(null,(function (){var or__28485__auto__ = pop_offset;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (p_width / (2));
}
})(),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43658__$1)].join('')));

}
})();
var popover_top = (function (){var G__43659 = pop_orient;
var G__43659__$1 = (((G__43659 instanceof cljs.core.Keyword))?G__43659.fqn:null);
switch (G__43659__$1) {
case "left":
case "right":
return re_com.util.px.call(null,(function (){var or__28485__auto__ = pop_offset;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return (p_height / (2));
}
})(),new cljs.core.Keyword(null,"negative","negative",-1562068438));

break;
case "above":
return "initial";

break;
case "below":
return re_com.util.px.call(null,total_offset);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43659__$1)].join('')));

}
})();
var popover_right = (function (){var G__43660 = pop_orient;
var G__43660__$1 = (((G__43660 instanceof cljs.core.Keyword))?G__43660.fqn:null);
switch (G__43660__$1) {
case "left":
return re_com.util.px.call(null,total_offset);

break;
case "right":
return null;

break;
case "above":
return null;

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43660__$1)].join('')));

}
})();
var popover_bottom = (function (){var G__43661 = pop_orient;
var G__43661__$1 = (((G__43661 instanceof cljs.core.Keyword))?G__43661.fqn:null);
switch (G__43661__$1) {
case "left":
return null;

break;
case "right":
return null;

break;
case "above":
return re_com.util.px.call(null,total_offset);

break;
case "below":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43661__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),popover_left,new cljs.core.Keyword(null,"top","top",-1856271961),popover_top,new cljs.core.Keyword(null,"right","right",-452581833),popover_right,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),popover_bottom], null);
});
/**
 * Calculate the optimal :position value that results in the least amount of clipping by the screen edges
 *   Taken from: https://github.com/Lambda-X/cljs-repl-web/blob/0.3.1/src/cljs/cljs_repl_web/views/utils.cljs#L52
 *   Thanks to @richiardiandrea and @tomek for this code
 */
re_com.popover.calculate_optimal_position = (function re_com$popover$calculate_optimal_position(p__43666){
var vec__43667 = p__43666;
var x = cljs.core.nth.call(null,vec__43667,(0),null);
var y = cljs.core.nth.call(null,vec__43667,(1),null);
var w = window.innerWidth;
var h = window.innerHeight;
var h_threshold_left = cljs.core.quot.call(null,w,(3));
var h_threshold_cent = ((2) * h_threshold_left);
var h_position = (((x < h_threshold_left))?"right":(((x < h_threshold_cent))?"center":"left"
));
var v_threshold = cljs.core.quot.call(null,h,(2));
var v_position = (((y < v_threshold))?"below":"above");
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_position),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(h_position)].join(''));
});
/**
 * Given a node reference, calculate the absolute x and y coordinates of the node's midpoint
 */
re_com.popover.calc_element_midpoint = (function re_com$popover$calc_element_midpoint(node){
var bounding_rect = node.getBoundingClientRect();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((bounding_rect.right + bounding_rect.left) / (2)),((bounding_rect.bottom + bounding_rect.top) / (2))], null);
});
/**
 * Render the triangle which connects the popover to the anchor (using SVG)
 */
re_com.popover.popover_arrow = (function re_com$popover$popover_arrow(orientation,pop_offset,arrow_length,arrow_width,grey_arrow_QMARK_,no_border_QMARK_,popover_color){
var half_arrow_width = (arrow_width / (2));
var arrow_shape = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,(0),(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,arrow_length,half_arrow_width)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,(0),arrow_width))].join(''),new cljs.core.Keyword(null,"right","right",-452581833),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,arrow_length,(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,(0),half_arrow_width)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,arrow_length,arrow_width))].join(''),new cljs.core.Keyword(null,"above","above",-1286866470),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,(0),(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,half_arrow_width,arrow_length)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,arrow_width,(0)))].join(''),new cljs.core.Keyword(null,"below","below",-926774883),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,(0),arrow_length)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,half_arrow_width,(0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.popover.point.call(null,arrow_width,arrow_length))].join('')], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-arrow",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var G__43670 = orientation;
var G__43670__$1 = (((G__43670 instanceof cljs.core.Keyword))?G__43670.fqn:null);
switch (G__43670__$1) {
case "left":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "right":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "above":
return new cljs.core.Keyword(null,"bottom","bottom",-1550509018);

break;
case "below":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43670__$1)].join('')));

}
})(),re_com.util.px.call(null,arrow_length,new cljs.core.Keyword(null,"negative","negative",-1562068438)),(function (){var G__43671 = orientation;
var G__43671__$1 = (((G__43671 instanceof cljs.core.Keyword))?G__43671.fqn:null);
switch (G__43671__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"top","top",-1856271961);

break;
case "above":
case "below":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43671__$1)].join('')));

}
})(),(((pop_offset == null))?"50%":re_com.util.px.call(null,pop_offset)),(function (){var G__43672 = orientation;
var G__43672__$1 = (((G__43672 instanceof cljs.core.Keyword))?G__43672.fqn:null);
switch (G__43672__$1) {
case "left":
case "right":
return new cljs.core.Keyword(null,"margin-top","margin-top",392161226);

break;
case "above":
case "below":
return new cljs.core.Keyword(null,"margin-left","margin-left",2015598377);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43672__$1)].join('')));

}
})(),re_com.util.px.call(null,half_arrow_width,new cljs.core.Keyword(null,"negative","negative",-1562068438)),new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px.call(null,(function (){var G__43673 = orientation;
var G__43673__$1 = (((G__43673 instanceof cljs.core.Keyword))?G__43673.fqn:null);
switch (G__43673__$1) {
case "left":
case "right":
return arrow_length;

break;
case "above":
case "below":
return arrow_width;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43673__$1)].join('')));

}
})()),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px.call(null,(function (){var G__43674 = orientation;
var G__43674__$1 = (((G__43674 instanceof cljs.core.Keyword))?G__43674.fqn:null);
switch (G__43674__$1) {
case "left":
case "right":
return arrow_width;

break;
case "above":
case "below":
return arrow_length;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43674__$1)].join('')));

}
})())])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),arrow_shape.call(null,orientation),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(popover_color)?popover_color:(cljs.core.truth_(grey_arrow_QMARK_)?"#f7f7f7":"white")),new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(no_border_QMARK_)?null:"rgba(0, 0, 0, .2)"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1"], null)], null)], null)], null);
});
re_com.popover.backdrop_args_desc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null)], null);
/**
 * Renders a backdrop dive which fills the entire page and responds to clicks on it. Can also specify how tranparent it should be
 */
re_com.popover.backdrop = (function re_com$popover$backdrop(var_args){
var args__29663__auto__ = [];
var len__29656__auto___43684 = arguments.length;
var i__29657__auto___43685 = (0);
while(true){
if((i__29657__auto___43685 < len__29656__auto___43684)){
args__29663__auto__.push((arguments[i__29657__auto___43685]));

var G__43686 = (i__29657__auto___43685 + (1));
i__29657__auto___43685 = G__43686;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic = (function (p__43681){
var map__43682 = p__43681;
var map__43682__$1 = ((((!((map__43682 == null)))?((((map__43682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43682):map__43682);
var args = map__43682__$1;
var opacity = cljs.core.get.call(null,map__43682__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var on_click = cljs.core.get.call(null,map__43682__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.backdrop_args_desc),args,"backdrop")))){
} else {
throw (new Error("Assert failed: (validate-args-macro backdrop-args-desc args \"backdrop\")"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-backdrop noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var or__28485__auto__ = opacity;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return 0.0;
}
})()], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__43682,map__43682__$1,args,opacity,on_click){
return (function (event){
on_click.call(null);

return null;
});})(map__43682,map__43682__$1,args,opacity,on_click))
], null)], null);
});

re_com.popover.backdrop.cljs$lang$maxFixedArity = (0);

re_com.popover.backdrop.cljs$lang$applyTo = (function (seq43680){
return re_com.popover.backdrop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43680));
});

re_com.popover.popover_title_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. Default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-callback","close-callback",651188974),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a function which takes no params and returns nothing. Called when the close button is pressed. Not required if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing?"], null)," atom passed in OR ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":close-button?"], null)," is set to false"], null)], null)], null);
/**
 * Renders a title at the top of a popover with an optional close button on the far right
 */
re_com.popover.popover_title = (function re_com$popover$popover_title(var_args){
var args__29663__auto__ = [];
var len__29656__auto___43691 = arguments.length;
var i__29657__auto___43692 = (0);
while(true){
if((i__29657__auto___43692 < len__29656__auto___43691)){
args__29663__auto__.push((arguments[i__29657__auto___43692]));

var G__43693 = (i__29657__auto___43692 + (1));
i__29657__auto___43692 = G__43693;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic = (function (p__43688){
var map__43689 = p__43688;
var map__43689__$1 = ((((!((map__43689 == null)))?((((map__43689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43689):map__43689);
var args = map__43689__$1;
var showing_QMARK_ = cljs.core.get.call(null,map__43689__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var title = cljs.core.get.call(null,map__43689__$1,new cljs.core.Keyword(null,"title","title",636505583));
var close_button_QMARK_ = cljs.core.get.call(null,map__43689__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var close_callback = cljs.core.get.call(null,map__43689__$1,new cljs.core.Keyword(null,"close-callback","close-callback",651188974));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_title_args_desc),args,"popover-title")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-title-args-desc args \"popover-title\")"));
}

if(cljs.core.truth_((function (){var or__28485__auto__ = cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,showing_QMARK_);
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return cljs.core.complement.call(null,cljs.core.nil_QMARK_).call(null,close_callback);
}
})())){
} else {
throw (new Error(["Assert failed: ","Must specify either showing? OR close-callback","\n","(or ((complement nil?) showing?) ((complement nil?) close-callback))"].join('')));
}

var close_button_QMARK___$1 = (((close_button_QMARK_ == null))?true:close_button_QMARK_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.popover-title","h3.popover-title",126205197),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null))], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,(cljs.core.truth_(close_button_QMARK___$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.close_button,showing_QMARK_,close_callback], null):null)], null)], null)], null);
});

re_com.popover.popover_title.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_title.cljs$lang$applyTo = (function (seq43687){
return re_com.popover.popover_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43687));
});

re_com.popover.next_even_integer = (function re_com$popover$next_even_integer(num){
return ((((num + (1)) / (2)) | (0)) * (2));
});
re_com.popover.calc_pop_offset = (function re_com$popover$calc_pop_offset(arrow_pos,position_offset,p_width,p_height){
var G__43694 = arrow_pos;
var G__43694__$1 = (((G__43694 instanceof cljs.core.Keyword))?G__43694.fqn:null);
switch (G__43694__$1) {
case "center":
return null;

break;
case "right":
return ((20) + position_offset);

break;
case "below":
return ((20) + position_offset);

break;
case "left":
if(cljs.core.truth_(p_width)){
return ((p_width - (25)) - position_offset);
} else {
return p_width;
}

break;
case "above":
if(cljs.core.truth_(p_height)){
return ((p_height - (25)) - position_offset);
} else {
return p_height;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43694__$1)].join('')));

}
});
re_com.popover.popover_clipping = (function re_com$popover$popover_clipping(node){
var viewport_width = window.innerWidth;
var viewport_height = window.innerHeight;
var bounding_rect = node.getBoundingClientRect();
var left = bounding_rect.left;
var right = bounding_rect.right;
var top = bounding_rect.top;
var bottom = bounding_rect.bottom;
var clip_left = (((left < (0)))?(- left):null);
var clip_right = (((right > viewport_width))?(right - viewport_width):null);
var clip_top = (((top < (0)))?(- top):null);
var clip_bottom = (((bottom > viewport_height))?(bottom - viewport_height):null);
return (!((clip_left == null))) || (!((clip_right == null))) || (!((clip_top == null))) || (!((clip_bottom == null)));
});
re_com.popover.popover_border_args_desc = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a vector of component markups"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover width"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the horiztonal offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style describing the vertical offset from anchor after position"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | markup",new cljs.core.Keyword(null,"description","description",-1428560544),"describes a title"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_border = (function re_com$popover$popover_border(var_args){
var args__29663__auto__ = [];
var len__29656__auto___43710 = arguments.length;
var i__29657__auto___43711 = (0);
while(true){
if((i__29657__auto___43711 < len__29656__auto___43710)){
args__29663__auto__.push((arguments[i__29657__auto___43711]));

var G__43712 = (i__29657__auto___43711 + (1));
i__29657__auto___43711 = G__43712;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic = (function (p__43697){
var map__43698 = p__43697;
var map__43698__$1 = ((((!((map__43698 == null)))?((((map__43698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43698):map__43698);
var args = map__43698__$1;
var position = cljs.core.get.call(null,map__43698__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var position_offset = cljs.core.get.call(null,map__43698__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var title = cljs.core.get.call(null,map__43698__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args,"popover-border")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var pop_id = cljs.core.gensym.call(null,"popover-");
var rendered_once = reagent.core.atom.call(null,false);
var ready_to_show_QMARK_ = reagent.core.atom.call(null,false);
var p_width = reagent.core.atom.call(null,(0));
var p_height = reagent.core.atom.call(null,(0));
var pop_offset = reagent.core.atom.call(null,(0));
var found_optimal = reagent.core.atom.call(null,false);
var calc_metrics = ((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,map__43698,map__43698__$1,args,position,position_offset,title){
return (function (pos){
var popover_elem = re_com.util.get_element_by_id.call(null,pop_id);
var vec__43700 = re_com.popover.split_keyword.call(null,pos,"-");
var orientation = cljs.core.nth.call(null,vec__43700,(0),null);
var arrow_pos = cljs.core.nth.call(null,vec__43700,(1),null);
var grey_arrow_QMARK_ = (function (){var and__28473__auto__ = title;
if(cljs.core.truth_(and__28473__auto__)){
return (cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"below","below",-926774883))) || (cljs.core._EQ_.call(null,arrow_pos,new cljs.core.Keyword(null,"below","below",-926774883)));
} else {
return and__28473__auto__;
}
})();
cljs.core.reset_BANG_.call(null,p_width,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientWidth):(0)));

cljs.core.reset_BANG_.call(null,p_height,(cljs.core.truth_(popover_elem)?re_com.popover.next_even_integer.call(null,popover_elem.clientHeight):(0)));

cljs.core.reset_BANG_.call(null,pop_offset,re_com.popover.calc_pop_offset.call(null,arrow_pos,position_offset,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orientation,grey_arrow_QMARK_], null);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,map__43698,map__43698__$1,args,position,position_offset,title))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-border",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__43698,map__43698__$1,args,position,position_offset,title){
return (function (){
return cljs.core.reset_BANG_.call(null,rendered_once,true);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__43698,map__43698__$1,args,position,position_offset,title))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__43698,map__43698__$1,args,position,position_offset,title){
return (function (this$){
var pop_border_node = reagent.core.dom_node.call(null,this$);
var clipped_QMARK_ = re_com.popover.popover_clipping.call(null,pop_border_node);
var anchor_node = pop_border_node.parentNode.parentNode.parentNode;
if(cljs.core.truth_((function (){var and__28473__auto__ = clipped_QMARK_;
if(cljs.core.truth_(and__28473__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,found_optimal));
} else {
return and__28473__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,position,re_com.popover.calculate_optimal_position.call(null,re_com.popover.calc_element_midpoint.call(null,anchor_node)));

cljs.core.reset_BANG_.call(null,found_optimal,true);
} else {
}

calc_metrics.call(null,cljs.core.deref.call(null,position));

return cljs.core.reset_BANG_.call(null,ready_to_show_QMARK_,true);
});})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__43698,map__43698__$1,args,position,position_offset,title))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__43698,map__43698__$1,args,position,position_offset,title){
return (function() { 
var G__43713__delegate = function (p__43703){
var map__43704 = p__43703;
var map__43704__$1 = ((((!((map__43704 == null)))?((((map__43704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43704):map__43704);
var args__$1 = map__43704__$1;
var height = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var children = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var arrow_length = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset__$1 = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var margin_left = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377));
var arrow_width = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var margin_top = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226));
var width = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title__$1 = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"title","title",636505583));
var arrow_gap = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var position__$1 = cljs.core.get.call(null,map__43704__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_border_args_desc),args__$1,"popover-border")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-border-args-desc args \"popover-border\")"));
}

var vec__43706 = calc_metrics.call(null,cljs.core.deref.call(null,position__$1));
var orientation = cljs.core.nth.call(null,vec__43706,(0),null);
var grey_arrow_QMARK_ = cljs.core.nth.call(null,vec__43706,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover.fade.in","div.popover.fade.in",-106226512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),pop_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.deref.call(null,rendered_once))?(cljs.core.truth_(pop_id)?re_com.popover.calc_popover_pos.call(null,orientation,cljs.core.deref.call(null,p_width),cljs.core.deref.call(null,p_height),cljs.core.deref.call(null,pop_offset),arrow_length,arrow_gap):null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"-10000px",new cljs.core.Keyword(null,"left","left",-399115937),"-10000px"], null)),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(popover_color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),popover_color], null):null),(cljs.core.truth_(tooltip_style_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null):null),(function (){var G__43709 = orientation;
var G__43709__$1 = (((G__43709 instanceof cljs.core.Keyword))?G__43709.fqn:null);
switch (G__43709__$1) {
case "left":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"-2000px"], null);

break;
case "right":
case "above":
case "below":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"-2000px"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43709__$1)].join('')));

}
})(),(cljs.core.truth_(margin_left)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),margin_left], null):null),(cljs.core.truth_(margin_top)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top], null):null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(cljs.core.deref.call(null,ready_to_show_QMARK_))?"1":"0"),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px"], null))], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_arrow,orientation,cljs.core.deref.call(null,pop_offset),arrow_length,arrow_width,grey_arrow_QMARK_,tooltip_style_QMARK_,popover_color], null),(cljs.core.truth_(title__$1)?title__$1:null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popover-content","div.popover-content",1045719989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null)], null)], null),children)], null);
};
var G__43713 = function (var_args){
var p__43703 = null;
if (arguments.length > 0) {
var G__43715__i = 0, G__43715__a = new Array(arguments.length -  0);
while (G__43715__i < G__43715__a.length) {G__43715__a[G__43715__i] = arguments[G__43715__i + 0]; ++G__43715__i;}
  p__43703 = new cljs.core.IndexedSeq(G__43715__a,0,null);
} 
return G__43713__delegate.call(this,p__43703);};
G__43713.cljs$lang$maxFixedArity = 0;
G__43713.cljs$lang$applyTo = (function (arglist__43716){
var p__43703 = cljs.core.seq(arglist__43716);
return G__43713__delegate(p__43703);
});
G__43713.cljs$core$IFn$_invoke$arity$variadic = G__43713__delegate;
return G__43713;
})()
;})(pop_id,rendered_once,ready_to_show_QMARK_,p_width,p_height,pop_offset,found_optimal,calc_metrics,map__43698,map__43698__$1,args,position,position_offset,title))
], null));
});

re_com.popover.popover_border.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_border.cljs$lang$applyTo = (function (seq43696){
return re_com.popover.popover_border.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43696));
});

re_com.popover.popover_content_wrapper_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"an atom. When the value is true, the popover shows.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"When used as direct ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":popover"], null)," arg in popover-anchor-wrapper, this arg will be injected automatically by popover-anchor-wrapper. If using your own popover function, you must add this yourself"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-injected","position-injected",205959080),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"NOTE: "], null),"See above NOTE for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":showing-injected?"], null),". Same applies"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"px offset of the arrow from its default ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," along the popover border. Is ignored when ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":position"], null)," is one of the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":xxx-center"], null)," variants. Positive numbers slide the popover toward its center"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. By passing true for this parameter, re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover width"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style representing the popover height"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.0,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"indicates the opacity of the backdrop where 0.0=transparent, 1.0=opaque"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the title of the popover. The default font size is 18px to make it stand out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"describes the popover body. Must be a single component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"setup popover styles for a tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"white",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"fill color of the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(11),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the length in pixels of the arrow (from pointy part to middle of arrow base)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(22),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the width in pixels of arrow base"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(-1),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"px gap between the anchor and the arrow tip. Positive numbers push the popover away from the anchor"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS style which overrides the inner padding of the popover"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Abstracts several components to handle the 90% of cases for general popovers and dialog boxes
 */
re_com.popover.popover_content_wrapper = (function re_com$popover$popover_content_wrapper(var_args){
var args__29663__auto__ = [];
var len__29656__auto___43724 = arguments.length;
var i__29657__auto___43725 = (0);
while(true){
if((i__29657__auto___43725 < len__29656__auto___43724)){
args__29663__auto__.push((arguments[i__29657__auto___43725]));

var G__43726 = (i__29657__auto___43725 + (1));
i__29657__auto___43725 = G__43726;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__43718){
var map__43719 = p__43718;
var map__43719__$1 = ((((!((map__43719 == null)))?((((map__43719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43719):map__43719);
var args = map__43719__$1;
var no_clip_QMARK_ = cljs.core.get.call(null,map__43719__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args,"popover-content-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

var left_offset = reagent.core.atom.call(null,(0));
var top_offset = reagent.core.atom.call(null,(0));
var position_no_clip_popover = ((function (left_offset,top_offset,map__43719,map__43719__$1,args,no_clip_QMARK_){
return (function re_com$popover$position_no_clip_popover(this$){
if(cljs.core.truth_(no_clip_QMARK_)){
var node = reagent.core.dom_node.call(null,this$);
var popover_point_node = node.parentNode;
var bounding_rect = popover_point_node.getBoundingClientRect();
cljs.core.reset_BANG_.call(null,left_offset,bounding_rect.left);

return cljs.core.reset_BANG_.call(null,top_offset,bounding_rect.top);
} else {
return null;
}
});})(left_offset,top_offset,map__43719,map__43719__$1,args,no_clip_QMARK_))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-content-wrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (left_offset,top_offset,position_no_clip_popover,map__43719,map__43719__$1,args,no_clip_QMARK_){
return (function (this$){
return position_no_clip_popover.call(null,this$);
});})(left_offset,top_offset,position_no_clip_popover,map__43719,map__43719__$1,args,no_clip_QMARK_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (left_offset,top_offset,position_no_clip_popover,map__43719,map__43719__$1,args,no_clip_QMARK_){
return (function (this$){
return position_no_clip_popover.call(null,this$);
});})(left_offset,top_offset,position_no_clip_popover,map__43719,map__43719__$1,args,no_clip_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (left_offset,top_offset,position_no_clip_popover,map__43719,map__43719__$1,args,no_clip_QMARK_){
return (function() { 
var G__43727__delegate = function (p__43721){
var map__43722 = p__43721;
var map__43722__$1 = ((((!((map__43722 == null)))?((((map__43722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43722):map__43722);
var args__$1 = map__43722__$1;
var body = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_cancel = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var showing_injected_QMARK_ = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250));
var height = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var tooltip_style_QMARK_ = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527));
var popover_color = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119));
var arrow_length = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(11));
var position_offset = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var backdrop_opacity = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653));
var position_injected = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080));
var no_clip_QMARK___$1 = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951));
var close_button_QMARK_ = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var arrow_width = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(22));
var width = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"title","title",636505583));
var style = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var arrow_gap = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(-1));
var padding = cljs.core.get.call(null,map__43722__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_content_wrapper_args_desc),args__$1,"popover-content-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-content-wrapper-args-desc args \"popover-content-wrapper\")"));
}

cljs.core.deref.call(null,position_injected);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"popover-content-wrapper",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),(cljs.core.truth_(no_clip_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),re_com.util.px.call(null,cljs.core.deref.call(null,left_offset)),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.util.px.call(null,cljs.core.deref.call(null,top_offset))], null):null),style)], null),(cljs.core.truth_((function (){var and__28473__auto__ = cljs.core.deref.call(null,showing_injected_QMARK_);
if(cljs.core.truth_(and__28473__auto__)){
return on_cancel;
} else {
return and__28473__auto__;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.backdrop,new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_cancel], null):null),new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_border,new cljs.core.Keyword(null,"position","position",-2011731912),position_injected,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),position_offset,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),tooltip_style_QMARK_,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),arrow_length,new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),arrow_width,new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),arrow_gap,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_title,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_injected_QMARK_,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),close_button_QMARK_,new cljs.core.Keyword(null,"close-callback","close-callback",651188974),on_cancel], null):null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body], null)], null)], null);
};
var G__43727 = function (var_args){
var p__43721 = null;
if (arguments.length > 0) {
var G__43728__i = 0, G__43728__a = new Array(arguments.length -  0);
while (G__43728__i < G__43728__a.length) {G__43728__a[G__43728__i] = arguments[G__43728__i + 0]; ++G__43728__i;}
  p__43721 = new cljs.core.IndexedSeq(G__43728__a,0,null);
} 
return G__43727__delegate.call(this,p__43721);};
G__43727.cljs$lang$maxFixedArity = 0;
G__43727.cljs$lang$applyTo = (function (arglist__43729){
var p__43721 = cljs.core.seq(arglist__43729);
return G__43727__delegate(p__43721);
});
G__43727.cljs$core$IFn$_invoke$arity$variadic = G__43727__delegate;
return G__43727;
})()
;})(left_offset,top_offset,position_no_clip_popover,map__43719,map__43719__$1,args,no_clip_QMARK_))
], null));
});

re_com.popover.popover_content_wrapper.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_content_wrapper.cljs$lang$applyTo = (function (seq43717){
return re_com.popover.popover_content_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43717));
});

re_com.popover.popover_anchor_wrapper_args_desc = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the popover shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the popover is attached to"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the popover body component"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Renders an element or control along with a Bootstrap popover
 */
re_com.popover.popover_anchor_wrapper = (function re_com$popover$popover_anchor_wrapper(var_args){
var args__29663__auto__ = [];
var len__29656__auto___43742 = arguments.length;
var i__29657__auto___43743 = (0);
while(true){
if((i__29657__auto___43743 < len__29656__auto___43742)){
args__29663__auto__.push((arguments[i__29657__auto___43743]));

var G__43744 = (i__29657__auto___43743 + (1));
i__29657__auto___43743 = G__43744;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__43731){
var map__43732 = p__43731;
var map__43732__$1 = ((((!((map__43732 == null)))?((((map__43732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43732):map__43732);
var args = map__43732__$1;
var showing_QMARK_ = cljs.core.get.call(null,map__43732__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position = cljs.core.get.call(null,map__43732__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args,"popover-anchor-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

var external_position = reagent.core.atom.call(null,position);
var internal_position = reagent.core.atom.call(null,cljs.core.deref.call(null,external_position));
var reset_on_hide = reagent.ratom.make_reaction.call(null,((function (external_position,internal_position,map__43732,map__43732__$1,args,showing_QMARK_,position){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,internal_position,cljs.core.deref.call(null,external_position));
}
});})(external_position,internal_position,map__43732,map__43732__$1,args,showing_QMARK_,position))
);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"popover-anchor-wrapper",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (external_position,internal_position,reset_on_hide,map__43732,map__43732__$1,args,showing_QMARK_,position){
return (function() { 
var G__43745__delegate = function (p__43734){
var map__43735 = p__43734;
var map__43735__$1 = ((((!((map__43735 == null)))?((((map__43735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43735):map__43735);
var args__$1 = map__43735__$1;
var showing_QMARK___$1 = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var position__$1 = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var anchor = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var popover = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"popover","popover",-1809582136));
var style = cljs.core.get.call(null,map__43735__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_anchor_wrapper_args_desc),args__$1,"popover-anchor-wrapper")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-anchor-wrapper-args-desc args \"popover-anchor-wrapper\")"));
}

cljs.core.deref.call(null,reset_on_hide);

if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_position),position__$1)){
cljs.core.reset_BANG_.call(null,external_position,position__$1);

cljs.core.reset_BANG_.call(null,internal_position,cljs.core.deref.call(null,external_position));
} else {
}

var vec__43737 = re_com.popover.split_keyword.call(null,cljs.core.deref.call(null,internal_position),"-");
var orientation = cljs.core.nth.call(null,vec__43737,(0),null);
var _arrow_pos = cljs.core.nth.call(null,vec__43737,(1),null);
var place_anchor_before_QMARK_ = (function (){var G__43740 = orientation;
var G__43740__$1 = (((G__43740 instanceof cljs.core.Keyword))?G__43740.fqn:null);
switch (G__43740__$1) {
case "left":
case "above":
return false;

break;
default:
return true;

}
})();
var flex_flow = (function (){var G__43741 = orientation;
var G__43741__$1 = (((G__43741 instanceof cljs.core.Keyword))?G__43741.fqn:null);
switch (G__43741__$1) {
case "left":
case "right":
return "row";

break;
default:
return "column";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-anchor-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"inherit"),style)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-point-wrapper display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),re_com.box.flex_flow_style.call(null,flex_flow),re_com.box.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)))], null),(cljs.core.truth_(place_anchor_before_QMARK_)?anchor:null),(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK___$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rc-popover-point display-inline-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,"auto"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(4)], null))], null),cljs.core.into.call(null,popover,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showing-injected?","showing-injected?",-105733250),showing_QMARK___$1,new cljs.core.Keyword(null,"position-injected","position-injected",205959080),internal_position], null))], null):null),(cljs.core.truth_(place_anchor_before_QMARK_)?null:anchor)], null)], null);
};
var G__43745 = function (var_args){
var p__43734 = null;
if (arguments.length > 0) {
var G__43748__i = 0, G__43748__a = new Array(arguments.length -  0);
while (G__43748__i < G__43748__a.length) {G__43748__a[G__43748__i] = arguments[G__43748__i + 0]; ++G__43748__i;}
  p__43734 = new cljs.core.IndexedSeq(G__43748__a,0,null);
} 
return G__43745__delegate.call(this,p__43734);};
G__43745.cljs$lang$maxFixedArity = 0;
G__43745.cljs$lang$applyTo = (function (arglist__43749){
var p__43734 = cljs.core.seq(arglist__43749);
return G__43745__delegate(p__43734);
});
G__43745.cljs$core$IFn$_invoke$arity$variadic = G__43745__delegate;
return G__43745;
})()
;})(external_position,internal_position,reset_on_hide,map__43732,map__43732__$1,args,showing_QMARK_,position))
], null));
});

re_com.popover.popover_anchor_wrapper.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_anchor_wrapper.cljs$lang$applyTo = (function (seq43730){
return re_com.popover.popover_anchor_wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43730));
});

re_com.popover.popover_tooltip_args_desc = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup | atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the text (or component) for the tooltip"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean atom",new cljs.core.Keyword(null,"description","description",-1428560544),"an atom. When the value is true, the tooltip shows"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the popover is cancelled (e.g. user clicks away)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, displays the close button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.popover_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"controls background color of the tooltip. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for black or one of ",re_com.validate.popover_status_types_list," (although ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":validating"], null)," is only used by the input-text component)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the component the tooltip is attached to"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"specifies width of the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override component style(s) with a style map, only use in case of emergency"], null)], null);
/**
 * Renders text as a tooltip in Bootstrap popover style
 */
re_com.popover.popover_tooltip = (function re_com$popover$popover_tooltip(var_args){
var args__29663__auto__ = [];
var len__29656__auto___43755 = arguments.length;
var i__29657__auto___43756 = (0);
while(true){
if((i__29657__auto___43756 < len__29656__auto___43755)){
args__29663__auto__.push((arguments[i__29657__auto___43756]));

var G__43757 = (i__29657__auto___43756 + (1));
i__29657__auto___43756 = G__43757;
continue;
} else {
}
break;
}

var argseq__29664__auto__ = ((((0) < args__29663__auto__.length))?(new cljs.core.IndexedSeq(args__29663__auto__.slice((0)),(0),null)):null);
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(argseq__29664__auto__);
});

re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic = (function (p__43751){
var map__43752 = p__43751;
var map__43752__$1 = ((((!((map__43752 == null)))?((((map__43752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43752):map__43752);
var args = map__43752__$1;
var anchor = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"anchor","anchor",1549638489));
var on_cancel = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var no_clip_QMARK_ = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true);
var close_button_QMARK_ = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687));
var width = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var showing_QMARK_ = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"showing?","showing?",2094921488));
var style = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var label = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var position = cljs.core.get.call(null,map__43752__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.popover.popover_tooltip_args_desc),args,"popover-tooltip")))){
} else {
throw (new Error("Assert failed: (validate-args-macro popover-tooltip-args-desc args \"popover-tooltip\")"));
}

var label__$1 = re_com.util.deref_or_value.call(null,label);
var popover_color = (function (){var G__43754 = status;
var G__43754__$1 = (((G__43754 instanceof cljs.core.Keyword))?G__43754.fqn:null);
switch (G__43754__$1) {
case "warning":
return "#f57c00";

break;
case "error":
return "#d50000";

break;
case "info":
return "#333333";

break;
case "success":
return "#13C200";

break;
default:
return "black";

}
})();
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_anchor_wrapper,new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__28485__auto__ = position;
if(cljs.core.truth_(or__28485__auto__)){
return or__28485__auto__;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"anchor","anchor",1549638489),anchor,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"popover","popover",-1809582136),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.popover_content_wrapper,new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),no_clip_QMARK_,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),on_cancel,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"tooltip-style?","tooltip-style?",1188162527),true,new cljs.core.Keyword(null,"popover-color","popover-color",-2019049119),popover_color,new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 8px",new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(6),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(12),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(4),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"info","info",-317069002)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,(cljs.core.truth_(close_button_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.popover.close_button,showing_QMARK_,on_cancel,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"text-shadow","text-shadow",116733623),"none",new cljs.core.Keyword(null,"right","right",-452581833),"1px"], null)], null):null)], null)], null)], null)], null);
});

re_com.popover.popover_tooltip.cljs$lang$maxFixedArity = (0);

re_com.popover.popover_tooltip.cljs$lang$applyTo = (function (seq43750){
return re_com.popover.popover_tooltip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43750));
});


//# sourceMappingURL=popover.js.map?rel=1512565260388
