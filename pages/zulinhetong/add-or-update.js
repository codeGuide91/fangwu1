(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zulinhetong/add-or-update"],{"510c":function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"9b8b"))}},a=function(){var n=this,i=n.$createElement;n._self._c},u=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return u})),e.d(i,"a",(function(){return t}))},"6dca":function(n,i,e){},"8fd8":function(n,i,e){"use strict";e.r(i);var t=e("510c"),a=e("ea5d");for(var u in a)"default"!==u&&function(n){e.d(i,n,(function(){return a[n]}))}(u);e("b648");var r,o=e("f0c5"),h=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"45706eec",null,!1,t["a"],r);i["default"]=h.exports},b648:function(n,i,e){"use strict";var t=e("6dca"),a=e.n(t);a.a},cb4b:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function u(n,i,e,t,a,u,r){try{var o=n[u](r),h=o.value}catch(g){return void e(g)}o.done?i(h):Promise.resolve(h).then(t,a)}function r(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var r=n.apply(i,e);function o(n){u(r,t,a,o,h,"next",n)}function h(n){u(r,t,a,o,h,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("9b8b"))}.bind(null,e)).catch(e.oe)},h={data:function(){return{ruleForm:{fangwubianhao:this.getUUID(),fangwumingcheng:"",zhuangtai:"",zujin:"",xiangxidizhi:"",yonghuming:"",zukexingming:"",shouji:"",shenfenzheng:"",fangdongzhanghao:"",fangdongxingming:"",lianxishouji:"",zufangzhuangtai:"",zulinriqi:"",qiandingshijian:"",zulinpingzheng:"",userid:""},fangwumingchengOptions:[],fangwumingchengIndex:0,yonghumingOptions:[],yonghumingIndex:0,zufangzhuangtaiOptions:[],zufangzhuangtaiIndex:0,user:{},ro:{fangwubianhao:!1,fangwumingcheng:!1,zhuangtai:!1,zujin:!1,xiangxidizhi:!1,yonghuming:!1,zukexingming:!1,shouji:!1,shenfenzheng:!1,fangdongzhanghao:!1,fangdongxingming:!1,lianxishouji:!1,zufangzhuangtai:!1,zulinriqi:!1,qiandingshijian:!1,zulinpingzheng:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var i=r(t.default.mark((function i(e){var a,u,r,o;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return this.ruleForm.qiandingshijian=this.$utils.getCurDateTime(),a=n.getStorageSync("nowTable"),i.next=4,this.$api.session(a);case 4:return u=i.sent,this.user=u.data,this.ruleForm.fangdongzhanghao=this.user.fangdongzhanghao,this.ruleForm.fangdongxingming=this.user.fangdongxingming,this.ruleForm.lianxishouji=this.user.lianxishouji,i.next=11,this.$api.option("fangwuxinxi","fangwumingcheng",{});case 11:return u=i.sent,this.fangwumingchengOptions=u.data,i.next=15,this.$api.option("zuke","yonghuming",{});case 15:if(u=i.sent,this.yonghumingOptions=u.data,this.zufangzhuangtaiOptions="已退租,在租中".split(","),this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=26;break}return this.ruleForm.id=e.id,i.next=24,this.$api.info("zulinhetong",this.ruleForm.id);case 24:u=i.sent,this.ruleForm=u.data;case 26:if(!e.cross){i.next=101;break}r=n.getStorageSync("crossObj"),i.t0=t.default.keys(r);case 29:if((i.t1=i.t0()).done){i.next=101;break}if(o=i.t1.value,"fangwubianhao"!=o){i.next=35;break}return this.ruleForm.fangwubianhao=r[o],this.ro.fangwubianhao=!0,i.abrupt("continue",29);case 35:if("fangwumingcheng"!=o){i.next=39;break}return this.ruleForm.fangwumingcheng=r[o],this.ro.fangwumingcheng=!0,i.abrupt("continue",29);case 39:if("zhuangtai"!=o){i.next=43;break}return this.ruleForm.zhuangtai=r[o],this.ro.zhuangtai=!0,i.abrupt("continue",29);case 43:if("zujin"!=o){i.next=47;break}return this.ruleForm.zujin=r[o],this.ro.zujin=!0,i.abrupt("continue",29);case 47:if("xiangxidizhi"!=o){i.next=51;break}return this.ruleForm.xiangxidizhi=r[o],this.ro.xiangxidizhi=!0,i.abrupt("continue",29);case 51:if("yonghuming"!=o){i.next=55;break}return this.ruleForm.yonghuming=r[o],this.ro.yonghuming=!0,i.abrupt("continue",29);case 55:if("zukexingming"!=o){i.next=59;break}return this.ruleForm.zukexingming=r[o],this.ro.zukexingming=!0,i.abrupt("continue",29);case 59:if("shouji"!=o){i.next=63;break}return this.ruleForm.shouji=r[o],this.ro.shouji=!0,i.abrupt("continue",29);case 63:if("shenfenzheng"!=o){i.next=67;break}return this.ruleForm.shenfenzheng=r[o],this.ro.shenfenzheng=!0,i.abrupt("continue",29);case 67:if("fangdongzhanghao"!=o){i.next=71;break}return this.ruleForm.fangdongzhanghao=r[o],this.ro.fangdongzhanghao=!0,i.abrupt("continue",29);case 71:if("fangdongxingming"!=o){i.next=75;break}return this.ruleForm.fangdongxingming=r[o],this.ro.fangdongxingming=!0,i.abrupt("continue",29);case 75:if("lianxishouji"!=o){i.next=79;break}return this.ruleForm.lianxishouji=r[o],this.ro.lianxishouji=!0,i.abrupt("continue",29);case 79:if("zufangzhuangtai"!=o){i.next=83;break}return this.ruleForm.zufangzhuangtai=r[o],this.ro.zufangzhuangtai=!0,i.abrupt("continue",29);case 83:if("zulinriqi"!=o){i.next=87;break}return this.ruleForm.zulinriqi=r[o],this.ro.zulinriqi=!0,i.abrupt("continue",29);case 87:if("qiandingshijian"!=o){i.next=91;break}return this.ruleForm.qiandingshijian=r[o],this.ro.qiandingshijian=!0,i.abrupt("continue",29);case 91:if("zulinpingzheng"!=o){i.next=95;break}return this.ruleForm.zulinpingzheng=r[o],this.ro.zulinpingzheng=!0,i.abrupt("continue",29);case 95:if("userid"!=o){i.next=99;break}return this.ruleForm.userid=r[o],this.ro.userid=!0,i.abrupt("continue",29);case 99:i.next=29;break;case 101:this.styleChange();case 102:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fangwumingchengChange:function(){var n=r(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.fangwumingchengIndex=i.target.value,this.ruleForm.fangwumingcheng=this.fangwumingchengOptions[this.fangwumingchengIndex],n.next=4,this.$api.follow("fangwuxinxi","fangwumingcheng",{columnValue:this.ruleForm.fangwumingcheng});case 4:e=n.sent,e.data.zhuangtai&&(this.ruleForm.zhuangtai=e.data.zhuangtai),e.data.zujin&&(this.ruleForm.zujin=e.data.zujin),e.data.xiangxidizhi&&(this.ruleForm.xiangxidizhi=e.data.xiangxidizhi),e.data.zukexingming&&(this.ruleForm.zukexingming=e.data.zukexingming),e.data.shouji&&(this.ruleForm.shouji=e.data.shouji),e.data.shenfenzheng&&(this.ruleForm.shenfenzheng=e.data.shenfenzheng);case 11:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),yonghumingChange:function(){var n=r(t.default.mark((function n(i){var e;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.yonghumingIndex=i.target.value,this.ruleForm.yonghuming=this.yonghumingOptions[this.yonghumingIndex],n.next=4,this.$api.follow("zuke","yonghuming",{columnValue:this.ruleForm.yonghuming});case 4:e=n.sent,e.data.zhuangtai&&(this.ruleForm.zhuangtai=e.data.zhuangtai),e.data.zujin&&(this.ruleForm.zujin=e.data.zujin),e.data.xiangxidizhi&&(this.ruleForm.xiangxidizhi=e.data.xiangxidizhi),e.data.zukexingming&&(this.ruleForm.zukexingming=e.data.zukexingming),e.data.shouji&&(this.ruleForm.shouji=e.data.shouji),e.data.shenfenzheng&&(this.ruleForm.shenfenzheng=e.data.shenfenzheng);case 11:case"end":return n.stop()}}),n,this)})));function i(i){return n.apply(this,arguments)}return i}(),qiandingshijianConfirm:function(n){console.log(n),this.ruleForm.qiandingshijian=n.result,this.$forceUpdate()},zufangzhuangtaiChange:function(n){this.zufangzhuangtaiIndex=n.target.value,this.ruleForm.zufangzhuangtai=this.zufangzhuangtaiOptions[this.zufangzhuangtaiIndex]},zulinpingzhengTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.zulinpingzheng=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=r(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.id){n.next=5;break}return n.next=3,this.$api.update("zulinhetong",this.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,this.$api.add("zulinhetong",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=h}).call(this,e("543d")["default"])},de22:function(n,i,e){"use strict";(function(n){e("ab4c"),e("921b");t(e("66fd"));var i=t(e("8fd8"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},ea5d:function(n,i,e){"use strict";e.r(i);var t=e("cb4b"),a=e.n(t);for(var u in t)"default"!==u&&function(n){e.d(i,n,(function(){return t[n]}))}(u);i["default"]=a.a}},[["de22","common/runtime","common/vendor"]]]);