(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-real_mark"],{"34a7":function(t,i,n){"use strict";n.r(i);var a=n("61d5"),s=n.n(a);for(var e in a)"default"!==e&&function(t){n.d(i,t,(function(){return a[t]}))}(e);i["default"]=s.a},"61d5":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{review_status:0,advanced_review_status:0}},onShow:function(){this.getUserRealState()},methods:{getUserRealState:function(){var t=this;this.$u.api.setting.getUserRealState().then((function(i){var n=i.message,a=n.review_status,s=n.advanced_review_status;t.review_status=a,t.advanced_review_status=s}))}},computed:{i18n:function(){return this.$t("setting")}}};i.default=a},"75f16":function(t,i,n){"use strict";n.r(i);var a=n("b1da"),s=n("34a7");for(var e in s)"default"!==e&&function(t){n.d(i,t,(function(){return s[t]}))}(e);var u,c=n("f0c5"),o=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,"711c64be",null,!1,a["a"],u);i["default"]=o.exports},b1da:function(t,i,n){"use strict";n.d(i,"b",(function(){return s})),n.d(i,"c",(function(){return e})),n.d(i,"a",(function(){return a}));var a={uNavbar:n("2a53").default},s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"text-white"},[n("u-navbar",{attrs:{title:t.i18n.authentication}}),n("v-uni-view",{staticClass:"p-30 bg-black"},[n("v-uni-text",{staticClass:"d-block font-weight-bold font-size-32"},[t._v(t._s(t.i18n.authentication_text_1))]),n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60 mt-20"},[t._v(t._s(t.i18n.authentication_text_2))]),n("v-uni-view",{staticClass:"mt-26"},[n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60"},[t._v(t._s(t.i18n.authentication_text_3))]),n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60 pl-48"},[t._v(t._s(t.i18n.authentication_text_4))]),n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60 pl-48"},[t._v(t._s(t.i18n.authentication_text_5))])],1),n("v-uni-view",{staticClass:"mt-26"},[n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60"},[t._v(t._s(t.i18n.authentication_text_6))]),n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60 pl-48"},[t._v(t._s(t.i18n.authentication_text_7))]),n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60 pl-48"},[t._v(t._s(t.i18n.authentication_text_8))])],1)],1),n("v-uni-view",{staticClass:"p-30"},[n("v-uni-text",{staticClass:"d-block font-size-28 opacity-60"},[t._v(t._s(t.i18n.authentication_text_9))])],1),n("v-uni-view",{staticClass:"m-30"},[n("v-uni-text",{staticClass:"d-block font-size-32 opacity-60 mb-20"},[t._v(t._s(t.i18n.authentication1))]),0==t.review_status?n("v-uni-button",{staticClass:"warning-button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$utils.jump("/pages/setting/real?type=1")}}},[t._v(t._s(t.i18n.goAudit))]):1==t.review_status?n("v-uni-button",{staticClass:"primary-button"},[t._v(t._s(t.i18n.auditing))]):2==t.review_status?n("v-uni-button",{staticClass:"success-button"},[t._v(t._s(t.i18n.hasaudit))]):t._e()],1),n("v-uni-view",{staticClass:"m-30"},[n("v-uni-text",{staticClass:"d-block font-size-32 opacity-60 mb-20"},[t._v(t._s(t.i18n.authentication2))]),t.review_status<2?n("v-uni-button",{staticClass:"secondary-button"},[t._v(t._s(t.i18n.goAudit))]):0==t.advanced_review_status?n("v-uni-button",{staticClass:"warning-button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.$utils.jump("/pages/setting/real?type=2")}}},[t._v(t._s(t.i18n.goAudit))]):1==t.advanced_review_status?n("v-uni-button",{staticClass:"primary-button"},[t._v(t._s(t.i18n.auditing))]):2==t.advanced_review_status?n("v-uni-button",{staticClass:"success-button"},[t._v(t._s(t.i18n.hasaudit))]):t._e()],1)],1)},e=[]}}]);