webpackJsonp([12],{Zxu2:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("woOf"),a=e.n(i),n={data:function(){return{current:0,token:"",sellerId:"",info:{lists:{data:[]}},showWhich:"none",isShow:!1,showDetail:!1,detail:{money:"",num:""},timer:"",rate:"--",filterPms:{id:"",page:1,wasDone:0,type:"sell"},list:[],submitPms:{type:"sell"},typeList:[{name:this.$t("td.sell"),type:"sell"},{name:this.$t("fat.wantBuy"),type:"buy"}],type:"sell",way:-1,price:"",total_number:"",min_number:"",max_number:"",password:"",coin:-1}},filters:{toFixeds:function(t){return(t=Number(t)).toFixed(3)}},created:function(){this.token=window.localStorage.getItem("token")||"",this.token&&(this.sellerId=this.$route.query.id||"",this.getSellerInfo(),this.getList())},methods:{changeType:function(t,s){this.current=t,this.type=s,this.way=-1,this.price="",this.min_number="",this.max_number="",this.password="",this.total_number="",this.coin=-1},getSellerInfo:function(t){var s=this;this.showWhich="none",t||(this.page=1);var e=layer.load();this.$http({url:"/api/seller_info",params:{id:this.sellerId,page:1},headers:{Authorization:this.token}}).then(function(t){if(layer.close(e),"ok"==t.data.type){s.info=a()({},t.data.message);var i=(t.data.message.done/t.data.message.total*100).toFixed(2);s.rate="NaN"==i?"0.00":i+"%",s.currency_id=t.data.message.currency_id}})},getList:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this,i={};s||(this.filterPms.page=1),i.page=this.filterPms.page,"none"!=this.filterPms.type&&(i.type=this.filterPms.type),i.is_done=this.filterPms.wasDone,i.id=this.sellerId;var a=layer.load();this.$http({url:"/api/seller_trade",params:i,headers:{Authorization:this.token}}).then(function(i){if(layer.close(a),"ok"==i.data.type){var n=i.data.message;s?n.data.length?(t.list=n.data.concat(t.list),t.filterPms.page+=1):layer.msg(e.$t("td.nomore")):(t.list=n.data,n.data.length&&(t.filterPms.page+=1))}})},changeOrder:function(t,s){var e=this;t=t,s=s;layer.prompt({title:e.$t("td.pwd"),formType:1,btn:[e.$t("td.confirm"),e.$t("td.canceil")]},function(i,a){e.password=i,e.$http({url:"/api/"+t,method:"post",data:{id:s,password:e.password},headers:{Authorization:e.token}}).then(function(t){"ok"==t.data.type?(layer.msg(t.data.message),e.getList()):layer.msg(t.data.message)}),layer.close(a)})},setDetail:function(t){this.detail=a()({which:"money",money:"",num:""},t),this.showDetail=!0;var s=60,e=this;e.timer=setInterval(function(){s--,e.$refs.remainTime.innerHTML=s,0==s&&(e.showDetail=!1,clearInterval(e.timer))},1e3)},buySell:function(){var t=this,s="";if("money"==this.detail.which){if(""==(s=this.detail.money))return;if(s-0-this.detail.limitation.min<0)return void layer.msg(this.$t("fat.notlow"));if(s-0-this.detail.limitation.max>0)return void layer.msg(this.$t("fat.nothigh"))}else{if(""==(s=this.detail.num))return;if(s>this.detail.surplus_number)return void layer.msg(this.$t("fat.notnum"))}this.$http({url:"/api/do_legal_deal",method:"post",data:{means:this.detail.which,value:s,id:this.detail.id},headers:{Authorization:this.token}}).then(function(s){if(t.showDetail=!1,"ok"==s.data.type){var e=s.data.message;layer.msg(e.msg),"sell"==t.detail.type?t.$router.push({path:"/legalPay",query:{id:msg.data.id}}):t.$router.push({path:"/components/payCannel",query:{id:msg.data.id}})}})},cancel:function(){clearInterval(this.timer),this.showDetail=!1},fb:function(){this.isShow=!0,this.way=-1,this.price="",this.min_number="",this.max_number="",this.password="",this.total_number="",this.coin=-1},close:function(){this.isShow=!1},fabu:function(){var t=this,s=(this.type,this.way),e=this.coin,i=this.price,a=this.total_number,n=this.min_number-0,r=this.max_number-0,l=(this.currency_id,this.password);return s<0?layer.msg(this.$t("ctc.payway")):e<0?layer.msg(this.$t("td.pcoin")):!i||i<=0?layer.msg(this.$t("ctc.pprice")):!a||a<=0?layer.msg(this.$t("fat.pnums")):!n||n<=0?layer.msg(this.$t("fat.pmin")):!r||r<=0?layer.msg(this.$t("fat.pmax")):r<n?layer.msg(this.$t("fat.pnot")):l?void this.$http({url:"/api/legal_send",method:"post",data:{type:this.type,way:this.way,price:this.price,total_number:this.total_number,min_number:n,max_number:r,currency_id:this.currency_id,password:this.password,coin_code:e},headers:{Authorization:this.token}}).then(function(s){"ok"==s.data.type?(layer.msg(s.data.message),t.isShow=!1,t.getSellerInfo(),t.getList()):layer.msg(s.data.message)}):layer.msg(this.$t("td.pwd"))}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"whites",attrs:{id:"legal-shop-detail"}},[i("div",{staticClass:"top flex bgf8"},[i("div",{staticClass:"top-t flex bod_rc"},[t.info.name?i("div",{staticClass:"logo ft18"},[t._v(t._s(t.info.name.charAt(0)))]):t._e(),t._v(" "),i("div",[i("div",[t._v(t._s(t.info.name))]),t._v(" "),i("div",[t._v(t._s(t.$t("fat.register_time"))+"："+t._s(t.info.create_time))])])]),t._v(" "),i("div",{staticClass:"top-b flex"},[i("div",[i("div",[t._v(t._s(t.info.total))]),t._v(" "),i("div",[t._v(t._s(t.$t("fat.odtotal")))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.info.thirtyDays))]),t._v(" "),i("div",[t._v(t._s(t.$t("fat.odmonth")))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.info.done))]),t._v(" "),i("div",[t._v(t._s(t.$t("fat.odfinish")))])]),t._v(" "),i("div",[i("div",[t._v(t._s(t.rate))]),t._v(" "),i("div",[t._v(t._s(t.$t("fat.odrate")))])])]),t._v(" "),i("div",{staticClass:"submit flex"},[i("div",{on:{click:t.fb}},[t._v(t._s(t.$t("fat.submit")))])]),t._v(" "),i("div",{staticClass:"submit flex"},[i("div",{on:{click:function(s){t.$router.push({path:"/balancelog",query:{id:t.sellerId}})}}},[t._v(t._s(t.$t("fat.journal")))])])]),t._v(" "),i("div",{staticClass:"md flex bgf8"},[i("div",[i("span",[t._v(t._s(t.$t("fat.phone")))]),t._v(" "),1==t.info.prove_mobile?i("img",{attrs:{src:e("4AGf"),alt:""}}):i("img",{attrs:{src:e("fICz"),alt:""}})]),t._v(" "),i("div",[i("span",[t._v(t._s(t.$t("fat.realAuth")))]),t._v(" "),1==t.info.prove_real?i("img",{attrs:{src:e("4AGf"),alt:""}}):i("img",{attrs:{src:e("fICz"),alt:""}})]),t._v(" "),i("div",[i("span",[t._v(t._s(t.$t("fat.advAuth")))]),t._v(" "),1==t.info.prove_level?i("img",{attrs:{src:e("4AGf"),alt:""}}):i("img",{attrs:{src:e("fICz"),alt:""}})])]),t._v(" "),i("div",{staticClass:"list bgf8"},[i("div",{staticClass:"tab"},[i("div",{staticClass:"flex"},[i("div",[t._v(t._s(t.$t("fat.type"))+"：")]),t._v(" "),i("div",[i("span",{class:{now:"sell"==t.filterPms.type},on:{click:function(s){t.filterPms.type="sell",t.getList()}}},[t._v(t._s(t.$t("fat.mysell")))]),t._v(" "),i("span",{class:{now:"buy"==t.filterPms.type},on:{click:function(s){t.filterPms.type="buy",t.getList()}}},[t._v(t._s(t.$t("fat.mybuy")))])])]),t._v(" "),i("div",{staticClass:"flex"},[i("div",[t._v(t._s(t.$t("fat.status"))+"：")]),t._v(" "),i("div",[i("span",{class:{now:0==t.filterPms.wasDone},on:{click:function(s){t.filterPms.wasDone=0,t.getList()}}},[t._v(t._s(t.$t("td.nofinish")))]),t._v(" "),i("span",{class:{now:1==t.filterPms.wasDone},on:{click:function(s){t.filterPms.wasDone=1,t.getList()}}},[t._v(t._s(t.$t("td.finished")))]),t._v(" "),i("span",{class:{now:2==t.filterPms.wasDone},on:{click:function(s){t.filterPms.wasDone=2,t.getList()}}},[t._v(t._s(t.$t("fat.backdone")))])])])]),t._v(" "),i("div",{staticClass:"ul-head tc bdb "},[i("div",{staticClass:"w10 tl"},[t._v(t._s(t.$t("td.currency")))]),t._v(" "),i("div",{staticClass:"w15"},[t._v(t._s(t.$t("td.num")))]),t._v(" "),i("div",{staticClass:"w25"},[t._v(t._s(t.$t("td.limit")))]),t._v(" "),i("div",{staticClass:"w15"},[t._v(t._s(t.$t("td.price")))]),t._v(" "),i("div",{staticClass:"w10"},[t._v(t._s(t.$t("td.method")))]),t._v(" "),i("div",{staticClass:"tr"},[t._v(t._s(t.$t("td.do")))])]),t._v(" "),i("ul",{class:[t.showWhich+"-box"]},t._l(t.list,function(s,a){return i("li",{key:a,staticClass:"bod_bc tc bdb",class:["buy"==s.type?"buy-item":"sell-item"]},[i("div",{staticClass:"w10 tl"},[t._v(t._s(s.currency_name))]),t._v(" "),i("div",{staticClass:"w15"},[t._v(t._s(t._f("toFixeds")(s.surplus_number||"0.000")))]),t._v(" "),i("div",{staticClass:"w25"},[t._v(t._s(t._f("toFixeds")(s.limitation.min||"0.000"))+"-"+t._s(t._f("toFixeds")(s.limitation.max||"0.000")))]),t._v(" "),i("div",{staticClass:"w15"},[t._v(t._s(t._f("toFixeds")(s.price||"0.000"))+" "+t._s(s.coin_code))]),t._v(" "),i("div",{staticClass:"flex alcenter center w10"},["ali_pay"==s.way?i("img",{attrs:{src:e("F43K")}}):t._e(),t._v(" "),"we_chat"==s.way?i("img",{attrs:{src:e("PVjh")}}):t._e(),t._v(" "),"bank"==s.way?i("img",{attrs:{src:e("ufz/")}}):t._e()]),t._v(" "),i("div",{staticClass:"tr"},[i("router-link",{attrs:{tag:"span",to:{path:"/shopLegalRecord",query:{id:s.id}}}},[t._v(t._s(t.$t("fat.seeOrder")))]),t._v(" "),0==s.is_done?i("span",{on:{click:function(e){t.changeOrder("back_send",s.id)}}},[t._v(t._s(t.$t("fat.withdraw")))]):t._e(),t._v(" "),0==s.is_done&&1==s.is_shelves?i("span",{on:{click:function(e){t.changeOrder("down_send",s.id)}}},[t._v(t._s(t.$t("fat.lowershelf")))]):t._e()],1)])})),t._v(" "),t.list.length?i("div",{staticClass:"more",on:{click:function(s){t.getList(!0)}}},[t._v(t._s(t.$t("td.more")))]):i("div",{staticClass:"more"},[t._v(t._s(t.$t("td.nomore")))])]),t._v(" "),t.isShow?i("div",{staticClass:"submit-box white"},[i("div",{staticClass:"content"},[i("p",{staticClass:"close",on:{click:t.close}},[t._v("X")]),t._v(" "),i("div",{staticClass:"tab bdb"},[i("div",[t._v(t._s(t.$t("fat.psType"))+"：")]),t._v(" "),t._l(t.typeList,function(s,e){return i("div",{class:{now:e==t.current},on:{click:function(i){t.changeType(e,s.type)}}},[t._v(t._s(s.name))])})],2),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("td.currency"))+"：")]),t._v(" "),i("span",[t._v(t._s(t.info.currency_name))])]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("td.method"))+"：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.way,expression:"way"}],staticClass:"flex2 ptb10 plr10 bd",attrs:{name:"coins",id:"method"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.way=s.target.multiple?e:e[0]}}},[i("option",{attrs:{value:"-1"}},[t._v(t._s(t.$t("fat.pselect")))]),t._v(" "),i("option",{attrs:{value:"ali_pay"}},[t._v(t._s(t.$t("fat.alipay")))]),t._v(" "),i("option",{attrs:{value:"we_chat"}},[t._v(t._s(t.$t("fat.wechat")))]),t._v(" "),i("option",{attrs:{value:"bank"}},[t._v(t._s(t.$t("fat.bank")))])])]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("td.coincode"))+"：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.coin,expression:"coin"}],staticClass:"flex2 ptb10 plr10 bd",attrs:{name:"ucoins",id:"umethod"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.coin=s.target.multiple?e:e[0]}}},[i("option",{attrs:{value:"-1"}},[t._v(t._s(t.$t("fat.pselect")))]),t._v(" "),i("option",{attrs:{value:"CNY"}},[t._v("CNY")]),t._v(" "),i("option",{attrs:{value:"USD"}},[t._v("USD")]),t._v(" "),i("option",{attrs:{value:"JPY"}},[t._v("JPY")])])]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("td.price"))+"：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{type:"text",name:"",id:""},domProps:{value:t.price},on:{input:function(s){s.target.composing||(t.price=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("td.num"))+"：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.total_number,expression:"total_number"}],attrs:{type:"text"},domProps:{value:t.total_number},on:{input:function(s){s.target.composing||(t.total_number=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("fat.minNum"))+"：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.min_number,expression:"min_number"}],attrs:{type:"text"},domProps:{value:t.min_number},on:{input:function(s){s.target.composing||(t.min_number=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("fat.maxNum"))+"：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.max_number,expression:"max_number"}],attrs:{type:"text"},domProps:{value:t.max_number},on:{input:function(s){s.target.composing||(t.max_number=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v(t._s(t.$t("lever.psw"))+"：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"btn curPer",on:{click:t.fabu}},[t._v(t._s(t.$t("fat.submit")))])])]):t._e()])},staticRenderFns:[]};var l=e("VU/8")(n,r,!1,function(t){e("mCCz")},null,null);s.default=l.exports},mCCz:function(t,s){}});
//# sourceMappingURL=12.7bf840a227062d3772cb.js.map