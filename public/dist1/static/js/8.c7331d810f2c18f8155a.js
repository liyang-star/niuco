webpackJsonp([8],{asGY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("woOf"),s=i.n(a),l={data:function(){return{token:"",page:1,sellerId:"",info:{lists:{data:[]}},showWhich:"none",showDetail:!1,detail:{money:"",num:""},timer:"",times:60,userBalance:"",allType:"",totalPrice:"0.000",rate:"--",password:"",coin:"CNY"}},filters:{toFixeds:function(t){return(t=Number(t)).toFixed(3)},strFirst:function(t){return t.substr(0,1)}},created:function(){this.token=window.localStorage.getItem("token")||"",this.token&&(this.sellerId=this.$route.query.sellerId,this.getSellerInfo())},methods:{close:function(){this.showDetail=!1,clearInterval(this.timer)},getSellerInfo:function(t){var e=this;this.showWhich="none",t||(this.page=1);var i=layer.load();this.$http({url:"/api/seller_info",params:{id:this.sellerId,page:this.page},headers:{Authorization:this.token}}).then(function(a){if(layer.close(i),"ok"==a.data.type){var l=e.info.lists.data,n=a.data.message.lists.data;if(e.page+=1,t)n.length?e.info.lists.data=n.concat(l):layer.msg(e.$t("td.nomore"));else{e.info=s()({},a.data.message);var o=(a.data.message.done/a.data.message.total*100).toFixed(2);e.rate="NaN"==o?"0.00":o+"%"}}})},setDetail:function(t){this.detail=s()({which:"money",money:"",num:""},t),this.showDetail=!0;var e=60,i=this;i.coin=t.coin_code,this.$http({url:"/api/legal_deal_info",params:{id:t.id},headers:{Authorization:i.token}}).then(function(t){"ok"==t.data.type&&(i.userBalance=t.data.message.user_legal_balance,i.allType=t.data.message.type)}),i.timer=setInterval(function(){e--,i.times=e,0==e&&(i.showDetail=!1,clearInterval(i.timer))},1e3)},buySell:function(){var t=this,e="";if("money"==t.detail.which){if(""==(e=t.detail.money))return;if(e-0-t.detail.limitation.min<0)return void layer.msg(t.$t("fat.notlow"));if(e-0-t.detail.limitation.max>0)return void layer.msg(t.$t("fat.nothigh"))}else{if(""==(e=t.detail.num))return;if(e>t.detail.surplus_number)return void layer.msg(t.$t("fat.notnum"))}t.showDetail=!1,layer.prompt({title:t.$t("td.pwd"),formType:1,btn:[t.$t("td.confirm"),t.$t("td.canceil")]},function(i,a){t.password=i;var s=layer.load();t.$http({url:"/api/do_legal_deal",method:"post",data:{means:t.detail.which,value:e,id:t.detail.id,password:t.password},headers:{Authorization:t.token}}).then(function(e){if(t.showDetail=!1,layer.close(s),"ok"==e.data.type){var i=e.data.message;layer.msg(i.msg),t.detail.type,setTimeout(function(){location.reload()},500)}else layer.msg(e.data.message)}),layer.close(a)})},cancel:function(){clearInterval(this.timer),this.showDetail=!1},allData:function(t){"buy"==this.allType?"money"==t?(this.detail.money=((this.userBalance-0)*(this.detail.price-0)-0).toFixed(3),this.totalPrice=this.detail.money):(this.detail.num=(this.userBalance-0).toFixed(3),this.totalPrice=((this.userBalance-0)*(this.detail.price-0)-0).toFixed(3)):"money"==t?(this.detail.money=(this.detail.limitation.max-0).toFixed(3),this.totalPrice=this.detail.money):(this.detail.num=(this.detail.surplus_number-0).toFixed(3),this.totalPrice=((this.detail.surplus_number-0)*(this.detail.price-0)-0).toFixed(3))}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"white",attrs:{id:"legal-seller"}},[a("div",{staticClass:"top flex bgf8"},[a("div",{staticClass:"top-t flex bod_rc"},[t.info.name?a("div",{staticClass:"logo ft18"},[t._v(t._s(t._f("strFirst")(t.info.name||"")))]):t._e(),t._v(" "),a("div",[a("div",[t._v(t._s(t.info.name))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.register_time"))+"："+t._s(t.info.create_time))])])]),t._v(" "),a("div",{staticClass:"top-b flex"},[a("div",[a("div",[t._v(t._s(t.info.total))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.odtotal")))])]),t._v(" "),a("div",[a("div",[t._v(t._s(t.info.thirtyDays))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.odmonth")))])]),t._v(" "),a("div",[a("div",[t._v(t._s(t.info.done))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.odfinish")))])]),t._v(" "),a("div",[a("div",[t._v(t._s(t.rate))]),t._v(" "),a("div",[t._v(t._s(t.$t("fat.odrate")))])])])]),t._v(" "),a("div",{staticClass:"md flex bgf8"},[a("div",[a("span",[t._v(t._s(t.$t("fat.phone")))]),t._v(" "),1==t.info.prove_mobile?a("img",{attrs:{src:i("4AGf"),alt:""}}):a("img",{attrs:{src:i("fICz"),alt:""}})]),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("fat.realAuth")))]),t._v(" "),1==t.info.prove_real?a("img",{attrs:{src:i("4AGf"),alt:""}}):a("img",{attrs:{src:i("fICz"),alt:""}})]),t._v(" "),a("div",[a("span",[t._v(t._s(t.$t("fat.advAuth")))]),t._v(" "),1==t.info.prove_level?a("img",{attrs:{src:i("4AGf"),alt:""}}):a("img",{attrs:{src:i("fICz"),alt:""}})])]),t._v(" "),a("div",{staticClass:"list bgf8"},[a("div",{staticClass:"tab"},[a("span",{class:{now:"sell"==t.showWhich},on:{click:function(e){t.showWhich="sell"==t.showWhich?"none":"sell"}}},[t._v(t._s(t.$t("td.sell")))]),t._v(" "),a("span",{class:{now:"buy"==t.showWhich},on:{click:function(e){t.showWhich="buy"==t.showWhich?"none":"buy"}}},[t._v(t._s(t.$t("td.buy")))])]),t._v(" "),a("div",{staticClass:"ul-head flex"},[a("div",[t._v(t._s(t.$t("td.currency")))]),t._v(" "),a("div",[t._v(t._s(t.$t("td.num")))]),t._v(" "),a("div",[t._v(t._s(t.$t("td.limit")))]),t._v(" "),a("div",[t._v(t._s(t.$t("td.price")))]),t._v(" "),a("div",[t._v(t._s(t.$t("td.method")))]),t._v(" "),a("div",[t._v(t._s(t.$t("td.do")))])]),t._v(" "),a("ul",{class:[t.showWhich+"-box"]},t._l(t.info.lists.data,function(e,i){return 1==e.is_shelves?a("li",{key:i,staticClass:"bod_bc",class:["buy"==e.type?"buy-item":"sell-item"]},[a("div",[t._v(t._s(e.currency_name))]),t._v(" "),a("div",[t._v(t._s(t._f("toFixeds")(e.surplus_number)))]),t._v(" "),a("div",[t._v(t._s(t._f("toFixeds")(e.limitation.min))+t._s(e.coin_code)+"-"+t._s(t._f("toFixeds")(e.limitation.max))+t._s(e.coin_code))]),t._v(" "),a("div",[t._v(t._s(t._f("toFixeds")(e.price))+t._s(e.coin_code))]),t._v(" "),a("div",[t._v(t._s(e.way_name))]),t._v(" "),a("div",["buy"==e.type?a("span",{on:{click:function(i){t.setDetail(e)}}},[t._v(t._s(t.$t("td.sell")))]):a("span",{on:{click:function(i){t.setDetail(e)}}},[t._v(t._s(t.$t("td.buy")))])])]):t._e()})),t._v(" "),a("div",{staticClass:"more",on:{click:function(e){t.getSellerInfo(!0)}}},[t._v(t._s(t.$t("td.more")))])]),t._v(" "),t.showDetail?a("div",{staticClass:"buy-sell-box"},[a("div",{staticClass:"content"},[a("div",{staticClass:"close"},[a("span",{staticClass:"fr",on:{click:t.close}},[t._v("X")])]),t._v(" "),a("div",{staticClass:"tc"},[a("span",[t._v(t._s("buy"==t.detail.type?t.$t("td.sell"):t.$t("td.buy")))]),a("span",[t._v(t._s(t.detail.currency_name))])]),t._v(" "),a("div",{staticClass:"flex"},[a("span",[t._v(t._s(t.$t("td.price"))+"：")]),a("span",[t._v(t._s(t._f("toFixeds")(t.detail.price)))])]),t._v(" "),a("div",{staticClass:"flex"},[a("span",[t._v(t._s(t.$t("td.num"))+"：")]),a("span",[t._v(t._s(t._f("toFixeds")(t.detail.surplus_number)))])]),t._v(" "),a("div",{staticClass:"tab"},[a("span",{class:{selected:"money"==t.detail.which},on:{click:function(e){t.detail.which="money",t.detail.money="",t.totalPrice="0.000"}}},[t._v(t._s(t.coin)+t._s(t.$t("td.trade")))]),t._v(" "),a("span",{class:{selected:"number"==t.detail.which},on:{click:function(e){t.detail.which="number",t.detail.money="",t.totalPrice="0.000"}}},[t._v(t._s("buy"==t.detail.type?t.$t("td.sellout"):t.$t("td.buyin"))+t._s(t.$t("td.num")))])]),t._v(" "),"money"==t.detail.which?a("div",{staticClass:"inp"},["buy"==t.detail.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.money,expression:"detail.money"}],attrs:{type:"number",placeholder:t.$t("td.selltotal")},domProps:{value:t.detail.money},on:{input:function(e){e.target.composing||t.$set(t.detail,"money",e.target.value)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.money,expression:"detail.money"}],attrs:{type:"number",placeholder:t.$t("td.buytotal")},domProps:{value:t.detail.money},on:{input:function(e){e.target.composing||t.$set(t.detail,"money",e.target.value)}}}),t._v(" "),a("span",[t._v(t._s(t.detail.coin_code))]),t._v(" "),a("span",{staticClass:"all",on:{click:function(e){t.allData("money")}}},[t._v(t._s(t.$t("td.all"))+t._s("buy"==t.detail.type?t.$t("td.sellout"):t.$t("td.buyin")))])]):t._e(),t._v(" "),"number"==t.detail.which?a("div",{staticClass:"inp"},["buy"==t.detail.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.num,expression:"detail.num"}],attrs:{type:"number",placeholder:t.$t("td.sellallnum")},domProps:{value:t.detail.num},on:{input:function(e){e.target.composing||t.$set(t.detail,"num",e.target.value)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.detail.num,expression:"detail.num"}],attrs:{type:"number",placeholder:t.$t("td.buyallnum")},domProps:{value:t.detail.num},on:{input:function(e){e.target.composing||t.$set(t.detail,"num",e.target.value)}}}),t._v(" "),a("span",[t._v(t._s(t.detail.currency_name))]),t._v(" "),a("span",{staticClass:"all",on:{click:function(e){t.allData("num")}}},[t._v(t._s(t.$t("td.all"))+t._s("buy"==t.detail.type?t.$t("td.sellout"):t.$t("td.buyin")))])]):t._e(),t._v(" "),a("div",{staticClass:"flex mt10"},[a("span",{staticStyle:{width:"auto"}},[t._v(t._s(t.$t("td.limit"))+"：")]),a("span",[t._v(t._s(t._f("toFixeds")(t.detail.limitation.min))+" "+t._s(t.coin)+"-"+t._s(t._f("toFixeds")(t.detail.limitation.max))+" "+t._s(t.coin))])]),t._v(" "),"money"==t.detail.which?a("div",[a("span",[t._v(t._s(t.$t("td.tradeTotal"))+"：")]),t._v(" "),a("span",[t._v(t._s(t._f("toFixeds")(t.detail.money||"0.000"))+" "+t._s(t.detail.coin_code))])]):t._e(),t._v(" "),"number"==t.detail.which?a("div",[a("span",[t._v(t._s(t.$t("td.tradeTotal"))+"：")]),t._v(" "),a("span",[t._v(t._s(t._f("toFixeds")(t.detail.num*t.detail.price||"0.000"))+" "+t._s(t.detail.coin_code))])]):t._e(),t._v(" "),a("div",{staticClass:"tip"},[t._v(t._s(t.$t("fat.tipPay")))]),t._v(" "),a("div",{staticClass:"btns flex"},[a("div",{staticClass:"cancel",on:{click:t.cancel}},[a("span",{ref:"remainTime"},[t._v(t._s(t.times))]),a("span",[t._v(t._s(t.$t("td.doceil")))])]),t._v(" "),"sell"==t.detail.type?a("div",{staticClass:"ok",on:{click:function(e){t.buySell("buy")}}},[t._v(t._s(t.$t("td.place")))]):t._e(),t._v(" "),"buy"==t.detail.type?a("div",{staticClass:"ok",on:{click:function(e){t.buySell("sell")}}},[t._v(t._s(t.$t("td.place")))]):t._e()])])]):t._e()])},staticRenderFns:[]};var o=i("VU/8")(l,n,!1,function(t){i("hatZ")},null,null);e.default=o.exports},hatZ:function(t,e){}});