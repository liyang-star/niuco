(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-transaction-seconds_order"],{"09e7":function(t,e,a){t.exports=a.p+"static/img/coupon.9fe7727e.svg"},"0aef":function(t,e,a){t.exports=a.p+"static/img/net.0f9f721f.svg"},"21ca":function(t,e,a){"use strict";a.r(e);var n=a("d208"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},2254:function(t,e,a){"use strict";a.r(e);var n=a("4138"),i=a("21ca");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var c,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"dfddb7a6",null,!1,n["a"],c);e["default"]=u.exports},"28af":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2909")),s={data:function(){return{match_id:2,page:1,canGet:!0,list:[],symbol:"",currentNav:0,showNav:!0,total:0}},onLoad:function(t){var e=t.match_id;this.match_id=e||2},onShow:function(){var t=this;this.showNav=!1,setTimeout((function(){t.showNav=!0}),100),this.page=1,this.canGet=!0,this.list=[],this.getSecondsList()},methods:{getSecondsList:function(){var t=this;if(this.canGet){var e=this.match_id,a=this.status,n=this.page;this.$u.api.market.getSecondsList(e,a,n).then((function(e){t.total=e.message.total;var a=e.message.data;a.length?(t.symbol=a[0].symbol_name,t.list=[].concat((0,i.default)(t.list),(0,i.default)(a)),t.page++):t.canGet=!1}))}},changeNav:function(t){this.currentNav=t,this.page=1,this.canGet=!0,this.list=[],this.getSecondsList()}},computed:{i18n:function(){return this.$t("transaction")},status:function(){return 0==this.currentNav?1:3},nav:function(){var t=this.$t("transaction");return[{name:t.position},{name:t.history}]}},onReachBottom:function(){this.getSecondsList()}};e.default=s},4138:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("v-uni-view",[t.total?a("v-uni-text",{staticClass:"text-center opacity-50 font-size-22 py-20 d-block"},[t._v(t._s(t.$t("common.hasNoData")))]):a("v-uni-image",{staticClass:"mx-auto d-block my-30",staticStyle:{width:"320rpx",height:"240rpx"},attrs:{src:t.data}})],1),t._t("default")],2)},s=[]},"46da":function(t,e,a){t.exports=a.p+"static/img/update.5a19e0e2.svg"},5282:function(t,e,a){t.exports=a.p+"static/img/collect.e5625625.svg"},7011:function(t,e,a){t.exports=a.p+"static/img/message.654f52a9.svg"},"9b8e":function(t,e,a){t.exports=a.p+"static/img/card.d87c16dc.svg"},a9d5:function(t,e,a){t.exports=a.p+"static/img/order.8f3af2d1.svg"},ad45:function(t,e,a){t.exports=a.p+"static/img/data.1439158f.svg"},bf193:function(t,e,a){t.exports=a.p+"static/img/bill.fb3e16d2.svg"},c6b0:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={uNavbar:a("2a53").default,uSubsection:a("b8e7").default,defaultPage:a("2254").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"text-white"},[a("u-navbar",{attrs:{title:t.i18n.secondsPosition+"("+t.symbol+")","custom-back":function(){t.$utils.jump("/pages/transaction/index","switchTab")}}}),a("v-uni-view",{staticClass:"p-30"},[a("u-subsection",{attrs:{list:t.nav,current:0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNav.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"mt-30"},[t._l(t.list,(function(e){return a("v-uni-view",{staticClass:"p-20 box-shadow border-radius-20 mb-20"},[a("v-uni-view",{staticClass:"d-flex-between-center py-10 "},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.tradingPair))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.symbol_name))])],1),a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.direction))]),a("v-uni-text",{staticClass:"font-weight-bold",class:1==e.type?"text-success":"text-error"},[t._v(t._s(1==e.type?t.i18n.buyUp:t.i18n.buyDown))])],1),a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.buyPrice))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(Number(e.open_price).toFixed(4)))])],1),a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.number))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(Number(e.number)))])],1),a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.orderTimes))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(Number(e.seconds))+"s")])],1),1==t.currentNav?a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.sellTime))]),a("v-uni-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.handled_at))])],1):t._e(),1==t.currentNav?a("v-uni-view",{staticClass:"d-flex-between-center py-10"},[a("v-uni-text",{staticClass:"opacity-50"},[t._v(t._s(t.i18n.pl))]),a("v-uni-text",{staticClass:"font-weight-bold font-size-30",style:{color:t.$utils.getColor(e.fact_profits)}},[t._v(t._s(Number(e.fact_profits)))])],1):t._e()],1)})),a("default-page",{attrs:{length:t.list.length,total:t.total}})],2)],1)],1)},s=[]},c889:function(t,e,a){t.exports=a.p+"static/img/empty.d67f5618.svg"},d208:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"default-page",props:{name:{type:String,default:"empty"},length:{type:Number,default:0},total:{type:Number,default:0}},data:function(){return{list:{address:a("eaf0"),bill:a("bf193"),card:a("9b8e"),collect:a("5282"),comment:a("f7a8"),content:a("feca"),coupon:a("09e7"),data:a("ad45"),message:a("7011"),net:a("0aef"),order:a("a9d5"),empty:a("c889"),update:a("46da")}}},computed:{data:function(){var t=this.list[this.name];return t||(t?void 0:this.list["empty"])}}};e.default=n},e4de:function(t,e,a){"use strict";a.r(e);var n=a("c6b0"),i=a("f2fc");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var c,o=a("f0c5"),u=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"a3dc83e0",null,!1,n["a"],c);e["default"]=u.exports},eaf0:function(t,e,a){t.exports=a.p+"static/img/address.94a4030c.svg"},f2fc:function(t,e,a){"use strict";a.r(e);var n=a("28af"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},f7a8:function(t,e,a){t.exports=a.p+"static/img/comment.60b356bc.svg"},feca:function(t,e,a){t.exports=a.p+"static/img/content.7f19abd8.svg"}}]);