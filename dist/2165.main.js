"use strict";(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[2165],{2165:function(e,t,r){r.r(t);var n=r(4942),a=r(5861),o=r(885),c=r(4687),s=r.n(c),i=r(7294),l=r(7708),u=r(3842),p=r.n(u),d=r(9009),m=r.n(d),h=r(3727),f=r(5471),g=r(581),y=r(1468),b=r(6687),E=r(1436),v=r(3314),w=r(6912),P=r(5005),C=r(7625),S=r(6024),O=r(1299),x=r(6090),L=r(4012);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){(0,i.useRef)(null);var t=(0,l.F_)(),r={szFirstName:"",szLastName:"",szEmail:Boolean(t.token)?t.email:"",szPassword:"",bPrivacy:!1,bTerms:!1,szCaptcha:"string",szClientIP:"string",szStripePriceId:"STARTER"},n=(Boolean(t.token)&&t.email,(0,i.useState)(!1)),c=(0,o.Z)(n,2),u=c[0],d=c[1],I=(0,i.useState)(!1),k=(0,o.Z)(I,2),D=(k[0],k[1],(0,i.useState)({})),Z=(0,o.Z)(D,2),j=Z[0],T=Z[1],A=(0,i.useState)(r),z=(0,o.Z)(A,2),_=z[0],R=z[1],F=(0,i.useState)(""),G=(0,o.Z)(F,2),B=G[0],U=G[1],K=(0,i.useState)(!1),H=(0,o.Z)(K,2),q=H[0],M=H[1],Q=(0,i.useState)(!1),Y=(0,o.Z)(Q,2),$=Y[0],J=Y[1],V=(0,i.useState)(!1),W=(0,o.Z)(V,2),X=W[0],ee=W[1],te=function(){var e=(0,a.Z)(s().mark((function e(t){var r,n,a,o,c,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.zD)(L.id);case 2:return r=e.sent,e.next=5,r.execute();case 5:if(n=e.sent,_.szCaptcha=n,!u){e.next=9;break}return e.abrupt("return");case 9:if(a=y.xj.validateError(_),!1===_.bPrivacy&&(a.bPrivacy=!0),!1===_.bTerms&&(a.bTerms=!0),!(Object.keys(a).filter((function(e){return!0===a[e]})).length>0)){e.next=17;break}return T(a),e.abrupt("return");case 17:T({});case 18:return d(!0),U(""),J(!0),e.next=23,y.xj.post("User/registerUser",_);case 23:if(o=e.sent,d(!1),J(!1),!1===o.status){e.next=35;break}if(200===o.data.data.statusCode){e.next=30;break}return U(o.data.data.result),e.abrupt("return");case 30:c=JSON.parse(o.data.data.result),i=c&&c.stripeSessionURL?c.stripeSessionURL:"",window.location=""!=i?i:"/thank-you?success=false",e.next=43;break;case 35:if(!(o.error&&o.error.response&&401===o.error.response.status&&localStorage.getItem("currentUser"))){e.next=42;break}return localStorage.removeItem("currentUser"),localStorage.removeItem("token"),window.location="/login",e.abrupt("return");case 42:U(o.data.data.result);case 43:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){Boolean(t.token)&&R(N(N({},_),{},{szEmail:Boolean(t.token)?t.email:""}))}),[t]),i.createElement(i.Fragment,null,i.createElement(g.Z,{loader:$}),i.createElement("div",{className:p().container},i.createElement("div",null,i.createElement("div",{className:p().logo_header},i.createElement("h1",null,"Interactive assessments for experts"),i.createElement("p",null,"Sell and engage as an expert should. Generate more leads and upgrade every customer touchpoint into a conversation.")),i.createElement("div",{className:p().loginPage},i.createElement(v.Z,{method:"post"},i.createElement(w.Z.Body,{className:m().modalBody},i.createElement("h4",null,"Sign up for an account"),i.createElement("p",{className:m().modeltxt},"Already have an account?",i.createElement(h.rU,{to:"/"},"Log In")),i.createElement(v.Z.Group,{className:m().modalinput,controlId:"exampleForm.ControlInput1"},i.createElement(v.Z.Control,{type:"text",placeholder:"First Name",onChange:function(e){R(N(N({},_),{},{szFirstName:e.target.value}))}}),i.createElement(C.G,{icon:S.ILF}),j&&j.hasOwnProperty("szFirstName")&&i.createElement("p",{className:"error errcont"},"Please fill required field!")),i.createElement(v.Z.Group,{className:m().modalinput,controlId:"exampleForm.ControlInput2"},i.createElement(v.Z.Control,{type:"text",placeholder:"Last Name",onChange:function(e){R(N(N({},_),{},{szLastName:e.target.value}))}}),i.createElement(C.G,{icon:S.ILF}),j&&j.hasOwnProperty("szLastName")&&i.createElement("p",{className:"error errcont"},"Please fill required field!")),i.createElement(v.Z.Group,{className:m().modalinput,controlId:"exampleForm.ControlInput3"},i.createElement(v.Z.Control,{type:"text",placeholder:"Email",onChange:function(e){R(N(N({},_),{},{szEmail:e.target.value}))}}),i.createElement(C.G,{icon:S.FU$}),j&&j.hasOwnProperty("szEmail")&&i.createElement("p",{className:"error errcont"},"Please fill required field!")),i.createElement(v.Z.Group,{className:m().modalinput,controlId:"exampleForm.ControlInput4"},i.createElement(v.Z.Control,{type:"password",placeholder:"Password",onChange:function(e){R(N(N({},_),{},{szPassword:e.target.value}))}}),i.createElement("img",{src:O.Z}),j&&j.hasOwnProperty("szPassword")&&i.createElement("p",{className:"error errcont"},"Please fill required field!"),i.createElement("p",{className:m().passHint},'Password must be longer than 8 characters, and must contain at least 1 uppercase letter and 1 special character such as - ! " $ % ^ @')),i.createElement("div",{className:m().modalinput},i.createElement(v.Z.Group,{className:m().registraioncheckbox,controlId:"exampleForm.ControlInput5"},i.createElement(v.Z.Control,{type:"checkbox",onChange:function(e){R(N(N({},_),{},{bPrivacy:e.target.checked}))}}),i.createElement("label",null,"I have read and agree with the ",i.createElement("a",{href:"/"},"privacy policy"))),j&&j.hasOwnProperty("bPrivacy")&&i.createElement("p",{className:"error errcont"},"Please accept Privacy & Policy!")),i.createElement("div",{className:m().modalinput},i.createElement(v.Z.Group,{className:m().registraioncheckbox,controlId:"exampleForm.ControlInput6"},i.createElement(v.Z.Control,{type:"checkbox",onChange:function(e){R(N(N({},_),{},{bTerms:e.target.checked}))}}),i.createElement("label",null,"I have read and agree with the"," ",i.createElement("a",{href:"/"},"Terms & Condition"))),j&&j.hasOwnProperty("bTerms")&&i.createElement("p",{className:"error errcont"},"Please accept Terms & Condition!")),""!==B&&i.createElement("p",{className:m().stripeerror},B),i.createElement(P.Z,{variant:"primary",type:"button",onClick:te},"Continue"))))),i.createElement(b.Z,{showtoast:X,toggleShowToast:function(){return ee(!X)},bgclass:"success",status:"Success",message:"Email sent Successfully!!",toasticon:E.f8k}),i.createElement(b.Z,{showtoast:q,toggleShowToast:function(){return M(!q)},bgclass:"danger",status:"Error",message:B,toasticon:E.gPx})),i.createElement(f.Z,null))}},6090:function(e,t,r){t.zD=void 0;var n=r(845);Object.defineProperty(t,"zD",{enumerable:!0,get:function(){return n.load}});r(6551)},6551:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,o){function c(e){try{i(n.next(e))}catch(e){o(e)}}function s(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}i((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,n,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,n=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReCaptchaInstance=void 0;var a=function(){function e(e,t,r){this.siteKey=e,this.recaptchaID=t,this.recaptcha=r,this.styleContainer=null}return e.prototype.execute=function(e){return r(this,void 0,void 0,(function(){return n(this,(function(t){return[2,this.recaptcha.enterprise?this.recaptcha.enterprise.execute(this.recaptchaID,{action:e}):this.recaptcha.execute(this.recaptchaID,{action:e})]}))}))},e.prototype.getSiteKey=function(){return this.siteKey},e.prototype.hideBadge=function(){null===this.styleContainer&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},e.prototype.showBadge=function(){null!==this.styleContainer&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},e}();t.ReCaptchaInstance=a},845:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getInstance=t.load=void 0;var n,a=r(6551);!function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(n||(n={}));var o=function(){function e(){}return e.load=function(t,r){if(void 0===r&&(r={}),"undefined"==typeof document)return Promise.reject(new Error("This is a library for the browser!"));if(e.getLoadingState()===n.LOADED)return e.instance.getSiteKey()===t?Promise.resolve(e.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(e.getLoadingState()===n.LOADING)return t!==e.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise((function(t,r){e.successfulLoadingConsumers.push((function(e){return t(e)})),e.errorLoadingRunnable.push((function(e){return r(e)}))}));e.instanceSiteKey=t,e.setLoadingState(n.LOADING);var o=new e;return new Promise((function(c,s){o.loadScript(t,r.useRecaptchaNet||!1,r.useEnterprise||!1,r.renderParameters?r.renderParameters:{},r.customUrl).then((function(){e.setLoadingState(n.LOADED);var s=o.doExplicitRender(grecaptcha,t,r.explicitRenderParameters?r.explicitRenderParameters:{},r.useEnterprise||!1),i=new a.ReCaptchaInstance(t,s,grecaptcha);e.successfulLoadingConsumers.forEach((function(e){return e(i)})),e.successfulLoadingConsumers=[],r.autoHideBadge&&i.hideBadge(),e.instance=i,c(i)})).catch((function(t){e.errorLoadingRunnable.forEach((function(e){return e(t)})),e.errorLoadingRunnable=[],s(t)}))}))},e.getInstance=function(){return e.instance},e.setLoadingState=function(t){e.loadingState=t},e.getLoadingState=function(){return null===e.loadingState?n.NOT_LOADED:e.loadingState},e.prototype.loadScript=function(t,r,a,o,c){var s=this;void 0===r&&(r=!1),void 0===a&&(a=!1),void 0===o&&(o={}),void 0===c&&(c="");var i=document.createElement("script");i.setAttribute("recaptcha-v3-script","");var l="https://www.google.com/recaptcha/api.js";r&&(l=a?"https://recaptcha.net/recaptcha/enterprise.js":"https://recaptcha.net/recaptcha/api.js"),a&&(l="https://www.google.com/recaptcha/enterprise.js"),c&&(l=c),o.render&&(o.render=void 0);var u=this.buildQueryString(o);return i.src=l+"?render=explicit"+u,new Promise((function(t,r){i.addEventListener("load",s.waitForScriptToLoad((function(){t(i)}),a),!1),i.onerror=function(t){e.setLoadingState(n.NOT_LOADED),r(t)},document.head.appendChild(i)}))},e.prototype.buildQueryString=function(e){return Object.keys(e).length<1?"":"&"+Object.keys(e).filter((function(t){return!!e[t]})).map((function(t){return t+"="+e[t]})).join("&")},e.prototype.waitForScriptToLoad=function(t,r){var n=this;return function(){void 0===window.grecaptcha?setTimeout((function(){n.waitForScriptToLoad(t,r)}),e.SCRIPT_LOAD_DELAY):r?window.grecaptcha.enterprise.ready((function(){t()})):window.grecaptcha.ready((function(){t()}))}},e.prototype.doExplicitRender=function(e,t,r,n){var a={sitekey:t,badge:r.badge,size:r.size,tabindex:r.tabindex};return r.container?n?e.enterprise.render(r.container,a):e.render(r.container,a):n?e.enterprise.render(a):e.render(a)},e.loadingState=null,e.instance=null,e.instanceSiteKey=null,e.successfulLoadingConsumers=[],e.errorLoadingRunnable=[],e.SCRIPT_LOAD_DELAY=25,e}();t.load=o.load,t.getInstance=o.getInstance}}]);