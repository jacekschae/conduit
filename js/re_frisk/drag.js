// Compiled by ClojureScript 1.9.946 {}
goog.provide('re_frisk.drag');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('goog.events.EventType');
if(typeof re_frisk.drag.draggable !== 'undefined'){
} else {
re_frisk.drag.draggable = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.drag.get_client_rect = (function re_frisk$drag$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
re_frisk.drag.mouse_move_handler = (function re_frisk$drag$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_.call(null,re_frisk.drag.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
re_frisk.drag.mouse_up_handler = (function re_frisk$drag$mouse_up_handler(on_move){
return (function re_frisk$drag$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk.drag.mouse_down_handler = (function re_frisk$drag$mouse_down_handler(e){
var map__43335 = re_frisk.drag.get_client_rect.call(null,e);
var map__43335__$1 = ((((!((map__43335 == null)))?((((map__43335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43335.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43335):map__43335);
var left = cljs.core.get.call(null,map__43335__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__43335__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = re_frisk.drag.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,re_frisk.drag.mouse_up_handler.call(null,on_move));
});

//# sourceMappingURL=drag.js.map?rel=1512565259867
