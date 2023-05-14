(function(){"use strict";var e={1048:function(e,t,r){var s=r(6369),o=r(8499),a=r.n(o),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],l={name:"App"},u=l,i=r(1001),m=(0,i.Z)(u,n,c,!1,null,null,null),p=m.exports,d=r(4161),f=r(2631),h=function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"客户登录",name:"customerForm"}},[t("el-form",{ref:"form",attrs:{model:e.customerForm}},[t("el-form-item",{attrs:{label:"客户名"}},[t("el-input",{model:{value:e.customerForm.username,callback:function(t){e.$set(e.customerForm,"username",t)},expression:"customerForm.username"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password"},model:{value:e.customerForm.password,callback:function(t){e.$set(e.customerForm,"password",t)},expression:"customerForm.password"}})],1)],1),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.customerLogin}},[e._v("客户登录")])],1),t("el-tab-pane",{attrs:{label:"职员登录",name:"clerkForm"}},[t("el-form",{ref:"form",attrs:{model:e.clerkForm}},[t("el-form-item",{attrs:{label:"职员名"}},[t("el-input",{model:{value:e.clerkForm.username,callback:function(t){e.$set(e.clerkForm,"username",t)},expression:"clerkForm.username"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password"},model:{value:e.clerkForm.password,callback:function(t){e.$set(e.clerkForm,"password",t)},expression:"clerkForm.password"}})],1)],1),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.clerkLogin}},[e._v("职员登录")])],1),t("el-tab-pane",{attrs:{label:"职员注册",name:"clerkRegisterForm"}},[t("el-form",{ref:"form",attrs:{model:e.clerkRegisterForm}},[t("el-form-item",{attrs:{label:"职员名"}},[t("el-input",{model:{value:e.clerkRegisterForm.username,callback:function(t){e.$set(e.clerkRegisterForm,"username",t)},expression:"clerkRegisterForm.username"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password"},model:{value:e.clerkRegisterForm.password,callback:function(t){e.$set(e.clerkRegisterForm,"password",t)},expression:"clerkRegisterForm.password"}})],1)],1),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.clerkRegister}},[e._v("职员注册")])],1)],1)],1)},b=[],g={name:"LoginRegister",data(){return{activeName:"customerForm",customerForm:{username:"",password:""},clerkForm:{username:"",password:""},clerkRegisterForm:{username:"",password:""}}},methods:{customerLogin(){""!==this.customerForm.username&&""!==this.customerForm.password?d.Z.get(`customer/login/${this.customerForm.username}/${this.customerForm.password}`).then((e=>{e.data.success?(this.$message.success("客户登录成功"),this.$router.replace(`operation/customer/${this.customerForm.username}`)):this.$message.error("客户登录失败")})):this.$message.error("客户名和密码不能为空！")},clerkLogin(){""!==this.clerkForm.username&&""!==this.clerkForm.password?d.Z.get(`clerk/login/${this.clerkForm.username}/${this.clerkForm.password}`).then((e=>{e.data.success?(this.$message.success("职员登录成功"),this.$router.replace(`operation/clerk/${this.clerkForm.username}`)):this.$message.error("职员登录失败")})):this.$message.error("职员名和密码不能为空！")},clerkRegister(){""!==this.clerkRegisterForm.username&&""!==this.clerkRegisterForm.password?d.Z.post(`clerk/register/${this.clerkRegisterForm.username}/${this.clerkRegisterForm.password}`).then((e=>{e.data.success?(this.$message.success("职员注册成功"),this.activeName="clerkForm"):this.$message.success("职员注册失败")})):this.$message.error("职员名和密码不能为空！")}}},v=g,k=(0,i.Z)(v,h,b,!1,null,"71609ad6",null),$=k.exports,F=function(){var e=this,t=e._self._c;return t("div",[t("router-view")],1)},w=[],A={},y=A,_=(0,i.Z)(y,F,w,!1,null,null,null),x=_.exports,Z=function(){var e=this,t=e._self._c;return t("div",[t("el-tag",[e._v("客户名："+e._s(e.$route.params.customerName))]),t("br"),t("br"),t("el-tag",[e._v("余额："+e._s(e.balance))]),t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"存款",name:"deposit"}},[e._v(" 请输入存款金额:  "),t("el-input-number",{attrs:{min:0},model:{value:e.depositAmount,callback:function(t){e.depositAmount=t},expression:"depositAmount"}}),t("br"),t("br"),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.deposit}},[e._v("确认存款")])],1),t("el-tab-pane",{attrs:{label:"转账",name:"transfer"}},[t("el-input",{attrs:{placeholder:"请输入转账账户"},model:{value:e.transferAccount,callback:function(t){e.transferAccount=t},expression:"transferAccount"}}),t("br"),t("br"),e._v(" 请输入转账金额:  "),t("el-input-number",{attrs:{min:0},model:{value:e.transferAmount,callback:function(t){e.transferAmount=t},expression:"transferAmount"}}),t("br"),t("br"),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.transfer}},[e._v("确认转账")])],1)],1),t("br"),t("el-button",{attrs:{type:"warning",round:""},on:{click:e.logout}},[e._v("退出登录")])],1)},N=[],R={data(){return{activeName:"deposit",balance:"",depositAmount:0,transferAmount:0,transferAccount:""}},methods:{deposit(){d.Z.post(`customer/deposit/${this.depositAmount}`).then((e=>{e.data.success?(this.$message.success("存款成功"),this.getBalance()):this.$message.error("存款失败")}))},transfer(){""!==this.transferAccount?d.Z.post(`customer/transfer/${this.transferAccount}/${this.transferAmount}`).then((e=>{e.data.success?(this.$message.success("转账成功"),this.getBalance()):this.$message.error("转账失败")})):this.$message.error("转账账户不能为空！")},getBalance(){d.Z.get("customer/balance").then((e=>{e.data.success?this.balance=e.data.info:this.$message.error("发生错误，请退出并重新登录")}))},logout(){d.Z.get("customer/logout").then((e=>{e.data.success?(this.$message.success("退出成功！"),this.$router.replace("/")):(this.$message.error("发生错误！"),this.$router.replace("/"))}))}},created(){this.getBalance()}},O=R,D=(0,i.Z)(O,Z,N,!1,null,null,null),I=D.exports,j=function(){var e=this,t=e._self._c;return t("div",[t("el-tag",[e._v("职员名："+e._s(e.$route.params.clerkName))]),t("br"),t("br"),t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"查看名下账户",name:"showAccounts"}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.accounts,stripe:""}},[t("el-table-column",{attrs:{label:"ID",prop:"id"}}),t("el-table-column",{attrs:{label:"客户名",prop:"username"}}),t("el-table-column",{attrs:{label:"密码",prop:"password"}})],1)],1),t("el-tab-pane",{attrs:{label:"创建账户",name:"createAccount"}},[t("el-form",{ref:"form",attrs:{model:e.createAccountForm}},[t("el-form-item",{attrs:{label:"客户名"}},[t("el-input",{model:{value:e.createAccountForm.username,callback:function(t){e.$set(e.createAccountForm,"username",t)},expression:"createAccountForm.username"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password"},model:{value:e.createAccountForm.password,callback:function(t){e.$set(e.createAccountForm,"password",t)},expression:"createAccountForm.password"}})],1)],1),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.createAccount}},[e._v("创建账户")])],1),t("el-tab-pane",{attrs:{label:"删除账户",name:"deleteAccount"}},[e._v(" 请输入要删除的账户 ID:  "),t("el-input-number",{attrs:{min:0},model:{value:e.deleteAccountID,callback:function(t){e.deleteAccountID=t},expression:"deleteAccountID"}}),t("br"),t("br"),t("el-button",{attrs:{type:"danger",round:""},on:{click:e.deleteAccount}},[e._v("删除账户")])],1)],1),t("br"),t("el-button",{attrs:{type:"warning",round:""},on:{click:e.logout}},[e._v("退出登录")])],1)},L=[],P={data(){return{accounts:[],createAccountForm:{username:"",password:""},activeName:"showAccounts",deleteAccountID:0}},methods:{createAccount(){""!==this.createAccountForm.username&&""!==this.createAccountForm.password?d.Z.post(`clerk/account/${this.createAccountForm.username}/${this.createAccountForm.password}`).then((e=>{e.data.success?(this.$message.success("创建账户成功！"),this.showAccounts()):this.$message.error("创建账户失败！")})):this.$message.error("客户名和密码不能为空！")},deleteAccount(){""!==this.deleteAccountID?d.Z["delete"](`clerk/account/${this.deleteAccountID}`).then((e=>{e.data.success?(this.$message.success("删除账户成功！"),this.showAccounts()):this.$message.error("删除账户失败！")})):this.$message.error("账户 ID 不能为空！")},showAccounts(){d.Z.get("clerk/account").then((e=>{e.data.success?this.accounts=e.data.info:this.$message.error("发生错误，请退出并重新登录")}))},logout(){d.Z.get("customer/logout").then((e=>{e.data.success?(this.$message.success("退出成功！"),this.$router.replace("/")):(this.$message.error("发生错误！"),this.$router.replace("/"))}))}},created(){this.showAccounts()}},S=P,T=(0,i.Z)(S,j,L,!1,null,null,null),B=T.exports,C=new f.ZP({routes:[{path:"/operation",component:x,children:[{path:"customer/:customerName",component:I},{path:"clerk/:clerkName",component:B}]},{path:"/",component:$}]});s["default"].config.productionTip=!1,d.Z.defaults.baseURL="http://localhost:9999",d.Z.defaults.withCredentials=!0,s["default"].use(a()),s["default"].use(f.ZP),new s["default"]({render:e=>e(p),router:C}).$mount("#app")}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,s,o,a){if(!s){var n=1/0;for(i=0;i<e.length;i++){s=e[i][0],o=e[i][1],a=e[i][2];for(var c=!0,l=0;l<s.length;l++)(!1&a||n>=a)&&Object.keys(r.O).every((function(e){return r.O[e](s[l])}))?s.splice(l--,1):(c=!1,a<n&&(n=a));if(c){e.splice(i--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[s,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,n=s[0],c=s[1],l=s[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var i=l(r)}for(t&&t(s);u<n.length;u++)a=n[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(i)},s=self["webpackChunkbank_system_frontend"]=self["webpackChunkbank_system_frontend"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(1048)}));s=r.O(s)})();
//# sourceMappingURL=app.8d6053d6.js.map