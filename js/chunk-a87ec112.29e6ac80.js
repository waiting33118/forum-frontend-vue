(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a87ec112"],{a699:function(e,t,r){"use strict";var a=r("e256"),s=r.n(a);s.a},da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.userProfile.name,expression:"userProfile.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.userProfile.name},on:{input:function(t){t.target.composing||e.$set(e.userProfile,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}}),e.userProfile.image?r("img",{attrs:{src:e.userProfile.image,alt:"avatar"}}):e._e()]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")])])])},s=[],i=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),n=r("5530"),o=r("2f62"),c=r("4cce"),u=r("2fa3"),l={name:"UserEdit",data:function(){return{userProfile:{id:-1,name:"",image:""},isProcessing:!1}},computed:Object(n["a"])({},Object(o["b"])(["currentUser"])),watch:{currentUser:function(){this.setUser()}},created:function(){this.setUser()},methods:{setUser:function(){this.userProfile=Object(n["a"])(Object(n["a"])({},this.userProfile),this.currentUser)},handleFileChange:function(e){var t=e.target.files;if(t.length){var r=window.URL.createObjectURL(t[0]);this.userProfile.image=r}else this.userProfile.image=""},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,s,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,a=new FormData(e.target),r.next=5,c["a"].update({userId:t.userProfile.id,formData:a});case 5:if(s=r.sent,i=s.data,"success"===i.status){r.next=9;break}throw new Error(i.message);case 9:t.$router.push({name:"user",params:t.userProfile.id}),r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](0),t.isProcessing=!1,u["a"].fire({icon:"error",title:"無法更新資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},m=l,f=(r("a699"),r("2877")),d=Object(f["a"])(m,a,s,!1,null,"a4130eda",null);t["default"]=d.exports},e256:function(e,t,r){}}]);
//# sourceMappingURL=chunk-a87ec112.29e6ac80.js.map