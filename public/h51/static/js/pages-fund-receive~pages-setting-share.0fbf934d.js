(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-fund-receive~pages-setting-share"],{"049f":function(t,e,r){"use strict";var o=r("4ea4");r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("5530")),i={};(function(){function t(t){this.mode=r.MODE_8BIT_BYTE,this.data=t}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=new Array}t.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=f.getRSBlocks(t,this.errorCorrectLevel),r=new d,o=0,n=0;n<e.length;n++)o+=e[n].dataCount;for(n=0;n<this.dataList.length;n++){var i=this.dataList[n];r.put(i.mode,4),r.put(i.getLength(),s.getLengthInBits(i.mode,t)),i.write(r)}if(r.getLengthInBits()<=8*o)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[o][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=s.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r),n=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*n,s=0;s<this.modules[i].length;s++){var u=s*n,l=this.modules[i][s];l&&(o.beginFill(0,100),o.moveTo(u,a),o.lineTo(u+n,a),o.lineTo(u+n,a+n),o.lineTo(u,a+n),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(r=0;r<18;r++){o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=s.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(n=0;n<15;n++){i=!t&&1==(o>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var u=0;u<2;u++)if(null==this.modules[o][a-u]){var l=!1;i<t.length&&(l=1==(t[i]>>>n&1));var h=s.getMask(e,o,a-u);h&&(l=!l),this.modules[o][a-u]=l,n--,-1==n&&(i++,n=7)}if(o+=r,o<0||this.moduleCount<=o){o-=r,r=-r;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,o){for(var n=f.getRSBlocks(t,r),i=new d,a=0;a<o.length;a++){var u=o[a];i.put(u.mode,4),i.put(u.getLength(),s.getLengthInBits(u.mode,t)),u.write(i)}var l=0;for(a=0;a<n.length;a++)l+=n[a].dataCount;if(i.getLengthInBits()>8*l)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*l+")");i.getLengthInBits()+4<=8*l&&i.put(0,4);while(i.getLengthInBits()%8!=0)i.putBit(!1);while(1){if(i.getLengthInBits()>=8*l)break;if(i.put(e.PAD0,8),i.getLengthInBits()>=8*l)break;i.put(e.PAD1,8)}return e.createBytes(i,n)},e.createBytes=function(t,e){for(var r=0,o=0,n=0,i=new Array(e.length),a=new Array(e.length),u=0;u<e.length;u++){var l=e[u].dataCount,f=e[u].totalCount-l;o=Math.max(o,l),n=Math.max(n,f),i[u]=new Array(l);for(var d=0;d<i[u].length;d++)i[u][d]=255&t.buffer[d+r];r+=l;var c=s.getErrorCorrectPolynomial(f),g=new h(i[u],c.getLength()-1),v=g.mod(c);a[u]=new Array(c.getLength()-1);for(d=0;d<a[u].length;d++){var m=d+v.getLength()-a[u].length;a[u][d]=m>=0?v.get(m):0}}var p=0;for(d=0;d<e.length;d++)p+=e[d].totalCount;var w=new Array(p),C=0;for(d=0;d<o;d++)for(u=0;u<e.length;u++)d<i[u].length&&(w[C++]=i[u][d]);for(d=0;d<n;d++)for(u=0;u<e.length;u++)d<a[u].length&&(w[C++]=a[u][d]);return w};for(var r={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case a.PATTERN000:return(e+r)%2==0;case a.PATTERN001:return e%2==0;case a.PATTERN010:return r%3==0;case a.PATTERN011:return(e+r)%3==0;case a.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case a.PATTERN101:return e*r%2+e*r%3==0;case a.PATTERN110:return(e*r%2+e*r%3)%2==0;case a.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new h([1],0),r=0;r<t;r++)e=e.multiply(new h([1,u.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case r.MODE_NUMBER:return 10;case r.MODE_ALPHA_NUM:return 9;case r.MODE_8BIT_BYTE:return 8;case r.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case r.MODE_NUMBER:return 12;case r.MODE_ALPHA_NUM:return 11;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case r.MODE_NUMBER:return 14;case r.MODE_ALPHA_NUM:return 13;case r.MODE_8BIT_BYTE:return 16;case r.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(o+s,n+u)&&i++;i>5&&(r+=3+i-5)}for(o=0;o<e-1;o++)for(n=0;n<e-1;n++){var l=0;t.isDark(o,n)&&l++,t.isDark(o+1,n)&&l++,t.isDark(o,n+1)&&l++,t.isDark(o+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(o=0;o<e;o++)for(n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(n=0;n<e;n++)for(o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);var h=0;for(n=0;n<e;n++)for(o=0;o<e;o++)t.isDark(o,n)&&h++;var f=Math.abs(100*h/e/e-50)/5;return r+=10*f,r}},u={glog:function(t){if(t<1)throw new Error("glog("+t+")");return u.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return u.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},l=0;l<8;l++)u.EXP_TABLE[l]=1<<l;for(l=8;l<256;l++)u.EXP_TABLE[l]=u.EXP_TABLE[l-4]^u.EXP_TABLE[l-5]^u.EXP_TABLE[l-6]^u.EXP_TABLE[l-8];for(l=0;l<255;l++)u.LOG_TABLE[u.EXP_TABLE[l]]=l;function h(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var r=0;while(r<t.length&&0==t[r])r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function f(t,e){this.totalCount=t,this.dataCount=e}function d(){this.buffer=new Array,this.length=0}function c(t){for(var e,r="",o=0;o<t.length;o++)e=t.charCodeAt(o),e>=1&&e<=127?r+=t.charAt(o):e>2047?(r+=String.fromCharCode(224|e>>12&15),r+=String.fromCharCode(128|e>>6&63),r+=String.fromCharCode(128|e>>0&63)):(r+=String.fromCharCode(192|e>>6&31),r+=String.fromCharCode(128|e>>0&63));return r}h.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=u.gexp(u.glog(this.get(r))+u.glog(t.get(o)));return new h(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=u.glog(this.get(0))-u.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<t.getLength();o++)r[o]^=u.gexp(u.glog(t.get(o))+e);return new h(r,0).mod(t)}},f.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f.getRSBlocks=function(t,e){var r=f.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,n=new Array,i=0;i<o;i++)for(var a=r[3*i+0],s=r[3*i+1],u=r[3*i+2],l=0;l<a;l++)n.push(new f(s,u));return n},f.getRsBlockTable=function(t,e){switch(e){case o.L:return f.RS_BLOCK_TABLE[4*(t-1)+0];case o.M:return f.RS_BLOCK_TABLE[4*(t-1)+1];case o.Q:return f.RS_BLOCK_TABLE[4*(t-1)+2];case o.H:return f.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},d.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},i={errorCorrectLevel:o,defaults:{size:354,margin:0,backgroundColor:"#FFFFFF",foregroundColor:"#000000",fileType:"png",errorCorrectLevel:o.H,typeNumber:-1},getModules:function(t){t=(0,n.default)((0,n.default)({},this.defaults),t);var r=new e(t.typeNumber,t.errorCorrectLevel);return r.addData(c(t.text)),r.make(),r.modules},make:function(t,e){var r=this;return new Promise((function(o,i){if(t=(0,n.default)((0,n.default)({},r.defaults),t),!t.canvasId)throw new Error("uQRCode: Please set canvasId!");var a=r.getModules(t),s=(t.size-2*t.margin)/a.length,u=s,l=Date.now(),h=uni.createCanvasContext(t.canvasId,e);h.setFillStyle(t.backgroundColor),h.fillRect(0,0,t.size,t.size);for(var f=0;f<a.length;f++)for(var d=0;d<a.length;d++){var c=Math.round(d*s)+t.margin,g=Math.round(f*u)+t.margin,v=Math.ceil((d+1)*s)-Math.floor(d*s),m=Math.ceil((f+1)*s)-Math.floor(f*s),p=a[f][d]?t.foregroundColor:t.backgroundColor;h.setFillStyle(p),h.fillRect(c,g,v,m)}var w=t.drawDelay?t.drawDelay:2*t.size;setTimeout((function(){h.draw(!1,(function(){var r=Date.now()-l,n=t.toFileDelay?t.toFileDelay:r+2*t.size+2*a.length;setTimeout((function(){uni.canvasToTempFilePath({canvasId:t.canvasId,fileType:t.fileType,width:t.size,height:t.size,destWidth:t.size,destHeight:t.size,success:function(t){o(Object.assign(t,{time:Date.now()-l}))},fail:function(t){i(t)}},e)}),n)}))}),w)}))}}})();var a=i;e.default=a},"2c24":function(t,e,r){"use strict";r.r(e);var o=r("6176"),n=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);e["default"]=n.a},"46c2":function(t,e,r){var o=r("24fb");e=o(!1),e.push([t.i,".uqrcode-view[data-v-a016f236]{\ndisplay:flex;box-sizing:border-box;\nflex-direction:column}.uqrcode-view-row[data-v-a016f236]{\ndisplay:flex;box-sizing:border-box;\nflex-direction:row}.uqrcode-view-col[data-v-a016f236]{\ndisplay:flex;box-sizing:border-box\n}",""]),t.exports=e},"48ce":function(t,e,r){"use strict";var o=r("a72e"),n=r.n(o);n.a},6176:function(t,e,r){"use strict";var o=r("4ea4");r("d3b7"),r("ac1f"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("5530")),i=o(r("049f")),a={name:"uqrcode",data:function(){return{options:i.default.defaults,modules:[],result:{}}},computed:{colSize:function(){return(this.options.size-2*this.options.margin)/this.modules.length}},methods:{make:function(t){var e=this;if(t=(0,n.default)((0,n.default)({},this.options),t),t.mode||(t.mode="view"),t.canvasId||(t.canvasId=this.uuid()),this.options=t,"view"===t.mode)this.modules=i.default.getModules(t);else if("canvas"===t.mode)return new Promise((function(r,o){i.default.make(t,e).then((function(t){e.result=t,r((0,n.default)({},t))})).catch((function(t){o(t)}))}))},save:function(){"view"===this.options.mode?uni.showToast({icon:"none",title:"view模式不支持保存，请提示用户使用截屏保存"}):"canvas"===this.options.mode&&uni.showToast({icon:"none",title:"canvas H5不支持保存，请将二维码放置在image组件，再提示用户长按image保存"})},uuid:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=[];if(r=r||o.length,t)for(var i=0;i<t;i++)n[i]=o[0|Math.random()*r];else{var a;n[8]=n[13]=n[18]=n[23]="-",n[14]="4";for(var s=0;s<36;s++)n[s]||(a=0|16*Math.random(),n[s]=o[19==s?3&a|8:a])}return e?(n.shift(),"u"+n.join("")):n.join("")}}};e.default=a},a72e:function(t,e,r){var o=r("46c2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("4f06").default;n("ab370b1a",o,!0,{sourceMap:!1,shadowMode:!1})},b2f7:function(t,e,r){"use strict";r.r(e);var o=r("e201"),n=r("2c24");for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);r("48ce");var a,s=r("f0c5"),u=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"a016f236",null,!1,o["a"],a);e["default"]=u.exports},e201:function(t,e,r){"use strict";var o;r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"uqrcode"},["view"===t.options.mode?r("v-uni-view",{staticClass:"uqrcode-view",style:{width:t.options.size+"px",height:t.options.size+"px",padding:t.options.margin+"px","background-color":t.options.backgroundColor}},t._l(t.modules.length,(function(e,o){return r("v-uni-view",{key:o,staticClass:"uqrcode-view-row"},t._l(t.modules.length,(function(e,n){return r("v-uni-view",{key:n,staticClass:"uqrcode-view-col",style:{width:t.colSize+"px",height:t.colSize+"px","background-color":t.modules[o][n]?t.options.foregroundColor:t.options.backgroundColor}})})),1)})),1):"canvas"===t.options.mode?r("v-uni-canvas",{staticClass:"uqrcode-canvas",style:{width:t.options.size+"px",height:t.options.size+"px"},attrs:{id:t.options.canvasId,"canvas-id":t.options.canvasId}}):t._e()],1)},i=[]}}]);