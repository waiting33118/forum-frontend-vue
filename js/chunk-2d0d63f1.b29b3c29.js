(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("div",[a("h1",[t._v(" "+t._s(t.restaurant.name)+" ")]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.Category.name)+" ")])]),a("hr"),a("ul",[a("li",[t._v(" 評論數： "+t._s(t.restaurant.Comments.length)+" ")]),a("li",[t._v(" 瀏覽次數： "+t._s(t.restaurant.viewCounts)+" ")])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")])])},r=[],s=a("5530"),u=(a("96cf"),a("1da1")),c=a("c4c3"),i=a("2fa3"),o={name:"Dashboard",data:function(){return{restaurant:{name:"",Category:{name:""},Comments:[],viewCounts:0}}},beforeRouteUpdate:function(t,e,a){var n=t.params.id;this.fetchRestaurant(n),a()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].getRestaurant(t);case 3:n=a.sent,r=n.data,e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),r.restaurant),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),i["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}},l=o,d=a("2877"),f=Object(d["a"])(l,n,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0d63f1.b29b3c29.js.map