(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(52)},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),l=n(17),c=n(4),o=n(3),s=function(e){var t=e.text;return r.a.createElement("div",null,r.a.createElement("h2",null,t))},d=function(e){var t=e.items,n=e.removeOneItem,a={width:"100px",textAlign:"left"};return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{style:a},r.a.createElement("th",{style:{width:"500px"}},"title"),r.a.createElement("th",null,"date"),r.a.createElement("th",null,"comments"),r.a.createElement("th",null,"points"),r.a.createElement("th",null,"delete"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement("tr",{style:a,key:t},r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.time),r.a.createElement("td",null,void 0!==e.kids?e.kids.length:"0"),r.a.createElement("td",null,e.score),r.a.createElement("td",null,r.a.createElement("a",{href:"javascript:void(0)",onClick:function(){return n(e.id)}},"x")))}))))},u=n(9),m=n.n(u),E=Object(o.b)(function(e){return{ids:e.ids,items:e.items,isLoading:e.isLoading}},function(e){return{removeOneItem:function(t){return e(function(e){return{type:"REMOVE_ONE_ITEM",payload:e}}(t))}}})(function(e){e.ids;var t=e.items,n=e.isLoading,a=e.removeOneItem;return r.a.createElement("div",null,r.a.createElement(s,{text:"hacker news simple clinet"}),!0===n?r.a.createElement("p",null,"loading..."):r.a.createElement(d,{items:t,removeOneItem:a}))}),p=function(){return r.a.createElement("div",null,r.a.createElement(E,null))},f=n(21),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("GET_HACKERNEWS_ITEM_SUCCESS"===t.type){var n=t.payload;return{items:Object(f.a)(e.items).concat([n]),ids:e.ids,isLoading:e.isLoading}}if("GET_HACKERNEWS_TOPSTORIES_SUCCESS"===t.type){var a=t.payload;return{items:e.items,ids:a,isLoading:e.isLoading}}if("DONE_LOADING"===t.type)return{items:e.items,ids:e.ids,isLoading:!1};if("REMOVE_ONE_ITEM"===t.type){var i=t.payload;return{items:e.items.filter(function(e){return e.id!==i}),ids:e.ids,isLoading:e.isLoading}}return{items:[],ids:[],isLoading:!0}},v=(n(50),Object(c.b)(h));a=function(e){v.dispatch(e),v.getState().ids.splice(0,30).reduce(function(e,t,n,a){var i,r;i=t,r=function(e){v.dispatch(e),n===a.length-1&&v.dispatch({type:"DONE_LOADING"})},m.a.get("https://hacker-news.firebaseio.com/v0/item/".concat(i,".json")).then(function(e){var t={type:"GET_HACKERNEWS_ITEM_SUCCESS",payload:e.data};r(t)}).catch(function(e){return console.log("err")})})},m.a.get("https://hacker-news.firebaseio.com/v0/topstories.json").then(function(e){var t={type:"GET_HACKERNEWS_TOPSTORIES_SUCCESS",payload:e.data};a(t)}).catch(function(e){return console.log(e)}),Object(l.render)(r.a.createElement(o.a,{store:v},r.a.createElement(p,null)),document.getElementById("app"))}},[[22,2,1]]]);
//# sourceMappingURL=main.0bcc5a3d.chunk.js.map