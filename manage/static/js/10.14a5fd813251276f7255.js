webpackJsonp([10],{180:function(e,t,a){a(679);var n=a(77)(a(630),a(704),null,null);e.exports=n.exports},211:function(e,t,a){"use strict";t.__esModule=!0;var n=a(212),r=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},212:function(e,t,a){e.exports={default:a(214),__esModule:!0}},214:function(e,t,a){a(216),e.exports=a(5).Object.assign},215:function(e,t,a){"use strict";var n=a(15),r=a(49),o=a(27),s=a(48),i=a(81),l=Object.assign;e.exports=!l||a(14)(function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach(function(e){t[e]=e}),7!=l({},e)[a]||Object.keys(l({},t)).join("")!=n})?function(e,t){for(var a=s(e),l=arguments.length,c=1,m=r.f,u=o.f;l>c;)for(var p,f=i(arguments[c++]),A=m?n(f).concat(m(f)):n(f),d=A.length,v=0;d>v;)u.call(f,p=A[v++])&&(a[p]=f[p]);return a}:l},216:function(e,t,a){var n=a(19);n(n.S+n.F,"Object",{assign:a(215)})},217:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(47),r=a.n(n),o=a(46),s=a.n(o),i=a(211),l=a.n(i),c=a(78),m=a(79),u=a(80);t.default={data:function(){return{baseImgPath:m.b}},created:function(){this.adminInfo.id||this.getAdminData()},computed:l()({},a.i(u.b)(["adminInfo"])),methods:l()({},a.i(u.c)(["getAdminData"]),{handleCommand:function(e){var t=this;return s()(r.a.mark(function n(){var o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("home"!=e){n.next=4;break}t.$router.push("/manage"),n.next=9;break;case 4:if("singout"!=e){n.next=9;break}return n.next=7,a.i(c.b)();case 7:o=n.sent,1==o.status?(t.$message({type:"success",message:"退出成功"}),t.$router.push("/")):t.$message({type:"error",message:o.message});case 9:case"end":return n.stop()}},n,t)}))()}})}},218:function(e,t,a){t=e.exports=a(177)(!0),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.header_container{background-color:#eff2f7;height:60px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}","",{version:3,sources:["/mygit/manage/src/components/headTop.vue"],names:[],mappings:"AACA,UACE,kBAAmB,AACnB,MAAO,AACP,OAAS,CACV,AACD,KAGE,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C,AACD,SANE,kBAAmB,AACnB,OAAS,CAUV,AALD,IAGE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,IACE,kBAAmB,AACnB,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,kBACE,yBAA0B,AAC1B,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,iBAAmB,CACpB,AACD,QACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAmB,CACpB,AACD,wBACE,iBAAmB,CACpB",file:"headTop.vue",sourcesContent:["\n.allcover {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.ctt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.tb {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.lr {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.header_container {\n  background-color: #EFF2F7;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 20px;\n}\n.avator {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  margin-right: 37px;\n}\n.el-dropdown-menu__item {\n  text-align: center;\n}\n"],sourceRoot:""}])},221:function(e,t,a){var n=a(218);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(178)("dfe13eee",n,!0)},222:function(e,t,a){a(221);var n=a(77)(a(217),a(223),null,null);e.exports=n.exports},223:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/manage"}}},[e._v("首页")]),e._v(" "),e._l(e.$route.meta,function(t,n){return a("el-breadcrumb-item",{key:"index"},[e._v(e._s(t))])})],2),e._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:e.baseImgPath+e.adminInfo.avatar}}),e._v(" "),a("el-dropdown-menu",{slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"singout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]}},630:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(212),r=a.n(n),o=a(47),s=a.n(o),i=a(46),l=a.n(i),c=a(222),m=a.n(c),u=a(78),p=a(79);t.default={data:function(){return{city:{},formData:{name:"",address:"",latitude:"",longitude:"",description:"",phone:"",promotion_info:"",float_delivery_fee:5,float_minimum_order_amount:20,is_premium:!1,delivery_mode:!1,new:!1,bao:!1,zhun:!1,piao:!1,startTime:"",endTime:"",image_path:"",business_license_image:"",catering_service_license_image:""},rules:{name:[{required:!0,message:"请输入店铺名称",trigger:"blur"}],address:[{required:!0,message:"请输入详细地址",trigger:"blur"}],phone:[{required:!0,message:"请输入联系电话"},{type:"number",message:"电话号码必须是数字"}]},options:[{value:"满减优惠",label:"满减优惠"},{value:"优惠大酬宾",label:"优惠大酬宾"},{value:"新用户立减",label:"新用户立减"},{value:"进店领券",label:"进店领券"}],activityValue:"满减优惠",activities:[{icon_name:"减",name:"满减优惠",description:"满30减5，满60减8"}],baseUrl:p.a,baseImgPath:p.b,categoryOptions:[],selectedCategory:["快餐便当","简餐"]}},components:{headTop:m.a},mounted:function(){this.initData()},methods:{initData:function(){var e=this;return l()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.i(u.q)();case 3:return e.city=t.sent,t.next=6,a.i(u.s)();case 6:n=t.sent,n.forEach(function(t){if(t.sub_categories.length){var a={value:t.name,label:t.name,children:[]};t.sub_categories.forEach(function(e,t){0!=t&&a.children.push({value:e.name,label:e.name})}),e.categoryOptions.push(a)}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}},t,e,[[0,10]])}))()},querySearchAsync:function(e,t){var n=this;return l()(s.a.mark(function r(){var o;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=11;break}return r.prev=1,r.next=4,a.i(u.v)(n.city.id,e);case 4:o=r.sent,o instanceof Array&&(o.map(function(e){return e.value=e.address,e}),t(o)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:case"end":return r.stop()}},r,n,[[1,8]])}))()},addressSelect:function(e){this.formData.latitude=e.latitude,this.formData.longitude=e.longitude,console.log(this.formData.latitude,this.formData.longitude)},handleShopAvatarScucess:function(e,t){1==e.status?this.formData.image_path=e.image_path:this.$message.error("上传图片失败！")},handleBusinessAvatarScucess:function(e,t){1==e.status?this.formData.business_license_image=e.image_path:this.$message.error("上传图片失败！")},handleServiceAvatarScucess:function(e,t){1==e.status?this.formData.catering_service_license_image=e.image_path:this.$message.error("上传图片失败！")},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},tableRowClassName:function(e,t){return 1===t?"info-row":3===t?"positive-row":""},selectActivity:function(){var e=this;this.$prompt("请输入活动详情","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(t){var a=t.value;if(null==a)return void e.$message({type:"info",message:"请输入活动详情"});var n={};switch(e.activityValue){case"满减优惠":n={icon_name:"减",name:"满减优惠",description:a};break;case"优惠大酬宾":n={icon_name:"特",name:"优惠大酬宾",description:a};break;case"新用户立减":n={icon_name:"新",name:"新用户立减",description:a};break;case"进店领券":n={icon_name:"领",name:"进店领券",description:a}}e.activities.push(n)}).catch(function(){e.$message({type:"info",message:"取消输入"})})},handleDelete:function(e){this.activities.splice(e,1)},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=l()(s.a.mark(function e(n){var o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=15;break}return r()(t.formData,{activities:t.activities},{category:t.selectedCategory.join("/")}),e.prev=2,e.next=5,a.i(u.C)(t.formData);case 5:o=e.sent,1==o.status?t.$message({type:"success",message:"添加成功"}):t.$message({type:"error",message:o.message}),console.log(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:e.next=17;break;case 15:return t.$notify.error({title:"错误",message:"请检查输入是否正确",offset:100}),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[2,10]])}));return function(t){return e.apply(this,arguments)}}())}}}},656:function(e,t,a){t=e.exports=a(177)(!0),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.lr{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.button_submit{text-align:center}.avatar-uploader .el-upload{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload:hover{border-color:#20a0ff}.avatar-uploader-icon{font-size:28px;color:#8c939d;width:120px;height:120px;line-height:120px;text-align:center}.avatar{width:120px;height:120px;display:block}.el-table .info-row{background:#c9e5f5}.el-table .positive-row{background:#e2f0e4}","",{version:3,sources:["/mygit/manage/src/page/addShop.vue"],names:[],mappings:"AACA,UACE,kBAAmB,AACnB,MAAO,AACP,OAAS,CACV,AACD,KAGE,SAAU,AACV,uCAAyC,AACjC,8BAAiC,CAC1C,AACD,SANE,kBAAmB,AACnB,OAAS,CAUV,AALD,IAGE,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,IACE,kBAAmB,AACnB,SAAU,AACV,mCAAoC,AAC5B,0BAA4B,CACrC,AACD,eACE,iBAAmB,CACpB,AACD,4BACE,0BAA2B,AAC3B,kBAAmB,AACnB,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,kCACE,oBAAsB,CACvB,AACD,sBACE,eAAgB,AAChB,cAAe,AACf,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,iBAAmB,CACpB,AACD,QACE,YAAa,AACb,aAAc,AACd,aAAe,CAChB,AACD,oBACE,kBAAoB,CACrB,AACD,wBACE,kBAAoB,CACrB",file:"addShop.vue",sourcesContent:["\n.allcover {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.ctt {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.tb {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.lr {\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.button_submit {\n  text-align: center;\n}\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #20a0ff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n}\n.avatar {\n  width: 120px;\n  height: 120px;\n  display: block;\n}\n.el-table .info-row {\n  background: #c9e5f5;\n}\n.el-table .positive-row {\n  background: #e2f0e4;\n}\n"],sourceRoot:""}])},679:function(e,t,a){var n=a(656);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(178)("09aaf0a9",n,!0)},704:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("head-top"),e._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:12,offset:4}},[a("el-form",{ref:"formData",staticClass:"demo-formData",attrs:{model:e.formData,rules:e.rules,"label-width":"110px"}},[a("el-form-item",{attrs:{label:"店铺名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.formData.name=t},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[a("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"请输入地址"},on:{select:e.addressSelect},model:{value:e.formData.address,callback:function(t){e.formData.address=t},expression:"formData.address"}}),e._v(" "),a("span",[e._v("当前城市："+e._s(e.city.name))])],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[a("el-input",{attrs:{maxLength:"11"},model:{value:e.formData.phone,callback:function(t){e.formData.phone=e._n(t)},expression:"formData.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺简介",prop:"description"}},[a("el-input",{model:{value:e.formData.description,callback:function(t){e.formData.description=t},expression:"formData.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺标语",prop:"promotion_info"}},[a("el-input",{model:{value:e.formData.promotion_info,callback:function(t){e.formData.promotion_info=t},expression:"formData.promotion_info"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"店铺分类"}},[a("el-cascader",{attrs:{options:e.categoryOptions,"change-on-select":""},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"white-space":"nowrap"},attrs:{label:"店铺特点"}},[a("span",[e._v("品牌保证")]),e._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.formData.is_premium,callback:function(t){e.formData.is_premium=t},expression:"formData.is_premium"}}),e._v(" "),a("span",[e._v("蜂鸟专送")]),e._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.formData.delivery_mode,callback:function(t){e.formData.delivery_mode=t},expression:"formData.delivery_mode"}}),e._v(" "),a("span",[e._v("新开店铺")]),e._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.formData.new,callback:function(t){e.formData.new=t},expression:"formData.new"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"white-space":"nowrap"}},[a("span",[e._v("外卖保")]),e._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.formData.bao,callback:function(t){e.formData.bao=t},expression:"formData.bao"}}),e._v(" "),a("span",[e._v("准时达")]),e._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.formData.zhun,callback:function(t){e.formData.zhun=t},expression:"formData.zhun"}}),e._v(" "),a("span",[e._v("开发票")]),e._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.formData.piao,callback:function(t){e.formData.piao=t},expression:"formData.piao"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"配送费",prop:"float_delivery_fee"}},[a("el-input-number",{attrs:{min:0,max:20},model:{value:e.formData.float_delivery_fee,callback:function(t){e.formData.float_delivery_fee=t},expression:"formData.float_delivery_fee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"起送价",prop:"float_minimum_order_amount"}},[a("el-input-number",{attrs:{min:0,max:100},model:{value:e.formData.float_minimum_order_amount,callback:function(t){e.formData.float_minimum_order_amount=t},expression:"formData.float_minimum_order_amount"}})],1),e._v(" "),a("el-form-item",{staticStyle:{"white-space":"nowrap"},attrs:{label:"营业时间"}},[a("el-time-select",{attrs:{placeholder:"起始时间","picker-options":{start:"05:30",step:"00:15",end:"23:30"}},model:{value:e.formData.startTime,callback:function(t){e.formData.startTime=t},expression:"formData.startTime"}}),e._v(" "),a("el-time-select",{attrs:{placeholder:"结束时间","picker-options":{start:"05:30",step:"00:15",end:"23:30",minTime:e.formData.startTime}},model:{value:e.formData.endTime,callback:function(t){e.formData.endTime=t},expression:"formData.endTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上传店铺头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseUrl+"/v1/addimg/shop","show-file-list":!1,"on-success":e.handleShopAvatarScucess,"before-upload":e.beforeAvatarUpload}},[e.formData.image_path?a("img",{staticClass:"avatar",attrs:{src:e.baseImgPath+e.formData.image_path}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"上传营业执照"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseUrl+"/v1/addimg/shop","show-file-list":!1,"on-success":e.handleBusinessAvatarScucess,"before-upload":e.beforeAvatarUpload}},[e.formData.business_license_image?a("img",{staticClass:"avatar",attrs:{src:e.baseImgPath+e.formData.business_license_image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"上传餐饮服务许可证"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.baseUrl+"/v1/addimg/shop","show-file-list":!1,"on-success":e.handleServiceAvatarScucess,"before-upload":e.beforeAvatarUpload}},[e.formData.catering_service_license_image?a("img",{staticClass:"avatar",attrs:{src:e.baseImgPath+e.formData.catering_service_license_image}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠活动"}},[a("el-select",{attrs:{placeholder:e.activityValue},on:{change:e.selectActivity},model:{value:e.activityValue,callback:function(t){e.activityValue=t},expression:"activityValue"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-table",{staticStyle:{"min-width":"600px","margin-bottom":"20px"},attrs:{data:e.activities,align:"cneter","row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{prop:"icon_name",label:"活动标题",align:"cneter",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"活动名称",align:"cneter",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",align:"cneter",label:"活动详情"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([["default",function(t){return[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index)}}},[e._v("删除")])]}]])})],1),e._v(" "),a("el-form-item",{staticClass:"button_submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("formData")}}},[e._v("立即创建")])],1)],1)],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.14a5fd813251276f7255.js.map