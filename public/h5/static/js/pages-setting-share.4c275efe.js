(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-share"],{"90c7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{user:{}}},onLoad:function(){this.user=this.$store.state.user},onShow:function(){this.$nextTick((function(){this.$refs.uqrcode.make({size:300,text:this.$store.state.baseDomain+"/h5/#/pages/common/register?code="+this.user.extension_code})}))},computed:{i18n:function(){return this.$t("setting")}}};e.default=i},c496:function(t,e,s){"use strict";s.r(e);var i=s("90c7"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},d6b9:function(t,e,s){"use strict";s.r(e);var i=s("f7e2"),n=s("c496");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var a,u=s("f0c5"),c=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"700c5136",null,!1,i["a"],a);e["default"]=c.exports},f7e2:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return i}));var i={uNavbar:s("196e").default,uqrcode:s("aad8").default},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("u-navbar",{attrs:{title:t.i18n.share}}),s("v-uni-text",{staticClass:"d-block text-center font-size-50 text-white m-30 py-30"},[t._v(t._s(t.i18n.my_qrcode))]),s("v-uni-view",{staticClass:"m-30 p-30 border-radius-20 bg-black text-white"},[s("v-uni-view",{staticClass:"d-flex  align-items-center"},[s("v-uni-image",{staticClass:"border-radius-50per border",staticStyle:{width:"120rpx",height:"120rpx"},attrs:{src:t._f("retImageUrl")(t.user.head_portrait),mode:"aspectFill"}}),s("v-uni-view",{staticClass:"ml-22"},[s("v-uni-text",{staticClass:"d-block font-size-36 font-weight-bold"},[t._v(t._s(t.user.account_number||t.$t("common.plsLogin")))]),t.user.id?s("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v("ID:"+t._s(t.user.id))]):t._e(),t.user.score?s("v-uni-text",{staticClass:"d-block font-size-22 opacity-50 mt-4"},[t._v(t._s(t.i18n.score)+":"+t._s(Number(t.user.score)))]):t._e()],1)],1),s("v-uni-view",{staticClass:"mt-50 mx-auto text-center p-30 bg-333 border-radius-20",staticStyle:{width:"330px"}},[s("uqrcode",{ref:"uqrcode"})],1)],1)],1)},r=[]}}]);