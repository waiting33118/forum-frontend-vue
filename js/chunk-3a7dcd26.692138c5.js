(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a7dcd26"],{"094c":function(t,e,r){"use strict";var s=r("dd74"),a=r.n(s);a.a},1511:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"album py-5 bg-light"},[r("div",{staticClass:"container"},[r("UserProfileCard",{attrs:{"user-profile":t.userProfile,"current-user":t.currentUser}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"},[r("UserFollowingsCard",{attrs:{followings:t.followings}}),r("br"),r("UserFollowersCard",{attrs:{followers:t.followers}})],1),r("div",{staticClass:"col-md-8"},[r("UserCommentsCard",{attrs:{comments:t.comments}}),r("br"),r("UserFavoritedRestaurantsCard",{attrs:{"favorited-restaurants":t.favoritedRestaurants}})],1)])],1)])},a=[],i=(r("b0c0"),r("96cf"),r("1da1")),n=r("5530"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"row no-gutters"},[r("div",{staticClass:"col-md-4"},[r("img",{attrs:{src:t.userProfile.image?t.userProfile.image:"https://via.placeholder.com/300"}})]),r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(" "+t._s(t.userProfile.name)+" ")]),r("p",{staticClass:"card-text"},[t._v(" "+t._s(t.userProfile.email)+" ")]),r("ul",{staticClass:"list-unstyled list-inline"},[r("li",[r("strong",[t._v(t._s(t.userProfile.commentCounts))]),t._v(" 已評論餐廳")]),r("li",[r("strong",[t._v(t._s(t.userProfile.favoritedRestaurantCounts))]),t._v(" 收藏的餐廳")]),r("li",[r("strong",[t._v(t._s(t.userProfile.followingCounts))]),t._v(" followings (追蹤者)")]),r("li",[r("strong",[t._v(t._s(t.userProfile.followerCounts))]),t._v(" followers (追隨者)")])]),r("p",[r("router-link",{attrs:{to:{name:"user-edit",params:{id:t.userProfile.id}}}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(" edit ")])])],1)])])])])},l=[],c={props:{userProfile:{type:Object,required:!0},currentUser:{type:Object,required:!0}}},u=c,d=(r("b133"),r("2877")),f=Object(d["a"])(u,o,l,!1,null,"5f98c24d",null),m=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.followings.length))]),t._v(" followings (追蹤者) ")]),r("div",{staticClass:"card-body"},t._l(t.followings,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(e.image),alt:"avatar"}})])})),1)])},C=[],g=r("2708"),p={mixins:[g["a"]],props:{followings:{type:Array,required:!0}}},_=p,w=(r("f9df"),Object(d["a"])(_,v,C,!1,null,"038c2b60",null)),b=w.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.followers.length))]),t._v(" followers (追隨者) ")]),r("div",{staticClass:"card-body"},t._l(t.followers,(function(e){return r("router-link",{key:e.id,attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t._f("emptyImage")(e.image),alt:"avatar"}})])})),1)])},y=[],U={mixins:[g["a"]],props:{followers:{type:Array,required:!0}}},R=U,P=(r("6155"),Object(d["a"])(R,h,y,!1,null,"2332bb8b",null)),k=P.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.comments.length))]),t._v(" 已評論餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.comments,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.RestaurantId}}}},[r("img",{staticClass:"avatar",attrs:{src:t.Restaurant.image,alt:"avatar"}})])})),1)])},j=[],O={props:{comments:{type:Array,required:!0}}},F=O,$=(r("094c"),Object(d["a"])(F,x,j,!1,null,"ce1d4a72",null)),q=$.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("strong",[t._v(t._s(t.favoritedRestaurants.length))]),t._v(" 收藏的餐廳 ")]),r("div",{staticClass:"card-body"},t._l(t.favoritedRestaurants,(function(t){return r("router-link",{key:t.id,attrs:{to:{name:"restaurant",params:{id:t.id}}}},[r("img",{staticClass:"avatar",attrs:{src:t.image,alt:"avatar"}})])})),1)])},A=[],I={props:{favoritedRestaurants:{type:Array,required:!0}}},J=I,z=(r("401a"),Object(d["a"])(J,E,A,!1,null,"c43bb2c2",null)),B=z.exports,D=r("4cce"),G=r("2fa3"),H=r("2f62"),K={name:"User",components:{UserProfileCard:m,UserFollowingsCard:b,UserFollowersCard:k,UserCommentsCard:q,UserFavoritedRestaurantsCard:B},data:function(){return{userProfile:{id:-1,name:"",email:"",image:"",commentCounts:0,favoritedRestaurantCounts:0,followerCounts:0,followingCounts:0},followings:[],followers:[],comments:[],favoritedRestaurants:[]}},computed:Object(n["a"])({},Object(H["b"])(["currentUser"])),beforeRouteUpdate:function(t,e,r){var s=t.params.id;this.fetchUser(s),r()},created:function(){var t=this.$route.params.id;this.fetchUser(t)},methods:{fetchUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a,i,n,o,l,c,u,d,f,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,D["a"].get(t);case 3:s=r.sent,a=s.data,i=a.profile,n=i.id,o=i.name,l=i.email,c=i.image,u=i.Comments,d=i.FavoritedRestaurants,f=i.Followers,m=i.Followings,e.userProfile={id:n,name:o,email:l,image:c,commentCounts:u.length,favoritedRestaurantCounts:d.length,followerCounts:f.length,followingCounts:m.length},e.followings=m,e.followers=f,e.comments=u,e.favoritedRestaurants=d,r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),G["a"].fire({icon:"error",title:"無法取得個人資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()}}},L=K,M=Object(d["a"])(L,s,a,!1,null,null,null);e["default"]=M.exports},"401a":function(t,e,r){"use strict";var s=r("a74c"),a=r.n(s);a.a},"51dd":function(t,e,r){},6155:function(t,e,r){"use strict";var s=r("681e"),a=r.n(s);a.a},"681e":function(t,e,r){},a74c:function(t,e,r){},ae6c:function(t,e,r){},b133:function(t,e,r){"use strict";var s=r("51dd"),a=r.n(s);a.a},dd74:function(t,e,r){},f9df:function(t,e,r){"use strict";var s=r("ae6c"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-3a7dcd26.692138c5.js.map