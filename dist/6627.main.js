"use strict";(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[6627],{1468:function(e,t,n){n.d(t,{IP:function(){return c},xj:function(){return i},sM:function(){return p},Lq:function(){return m},Vo:function(){return g},z$:function(){return d},l_:function(){return l},iX:function(){return f}});var r=n(9669),o=n.n(r),a=n(4012),s={130:0,140:0,30:0,170:0,35:0,131:0,120:0,3:2},i={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={headers:{"Content-Type":"application/json"}},r=localStorage.getItem("currentUser");return r&&(r=JSON.parse(r),n.headers.Authorization="Bearer "+r.JwtToken,t.token=r.JwtToken,t.user_id=r.user_id,n.headers.data=JSON.stringify(t)),o().get("".concat(a.v).concat(e),n).then((function(e){return{status:!0,data:e.data}})).catch((function(e){return{status:!1,error:e}}))},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={"Content-Type":"application/json"},r=u();return null!=r&&"null"!==r&&""!==r&&(n.Authorization="Bearer "+r),o().post("".concat(a.v).concat(e),t,{headers:n}).then((function(e){return 200===e.data.statusCode?{status:!0,data:e}:{status:!1,data:e}})).catch((function(e){return{status:!1,error:e}}))},sendTrackingData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o().post("".concat(a.v).concat(e),t,{headers:{"Content-Type":"application/json"}})},getCurrentToken:u,convertToSlug:function(e){return null==e?void 0:e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},setQuestionStorage:function(e){localStorage.setItem("questionStorage",JSON.stringify(e))},getQuestionStorage:function(){return localStorage.getItem("questionStorage")?JSON.parse(localStorage.getItem("questionStorage")):{}},awsBucketImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(null===e||!e.hasOwnProperty("m_lMediaId")||null===e.m_szMediaKey||""===e.m_szMediaKey.trim())&&"https://s3.amazonaws.com/".concat(a.FU,"/").concat(e.m_szMediaKey).concat(e.m_lMediaId,".").concat(e.m_szFileExtension.toLowerCase())},getCustomizeText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.hasOwnProperty("m_oEvalCustomizations")&&e.m_oEvalCustomizations.hasOwnProperty("m_dictEvalCustomizations")&&e.m_oEvalCustomizations.m_dictEvalCustomizations.hasOwnProperty(t)?e.m_oEvalCustomizations.m_dictEvalCustomizations[t]:n},getCustomizeText2:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e&&e[t]?e[t]:""},setAssesmentResult:function(e){localStorage.setItem("assesmentResult",e)},getAssesmentResult:function(){return localStorage.getItem("assesmentResult")?JSON.parse(localStorage.getItem("assesmentResult")):{}},getColors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return"normal"===n?e&&e.hasOwnProperty("dictColors")&&e.dictColors.hasOwnProperty(t)?e.dictColors[t]:"rgba(71, 62, 143,1)":e&&e.hasOwnProperty("dictColors1")&&e.dictColors1.hasOwnProperty(n)&&e.dictColors1[n].hasOwnProperty(t)?e.dictColors1[n][t]:"rgba(71, 62, 143,1)"},convertDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(e);return 0===t?n.getDate()+" "+["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]+" "+n.getFullYear():n.getFullYear()+"-"+("0"+[n.getMonth()+1]).slice(-2)+"-"+("0"+n.getDate()).slice(-2)},timeSince:function(e){var t=Math.floor(((new Date).getTime()-new Date(e).getTime())/1e3),n=t/31536e3;return n>1?Math.floor(n)+" years":(n=t/2592e3)>1?Math.floor(n)+" months":(n=t/86400)>1?Math.floor(n)+" days":(n=t/3600)>1?Math.floor(n)+" hours":(n=t/60)>1?Math.floor(n)+" minutes":Math.floor(t)+" seconds"},getOptions:function(){return localStorage.getItem("assesmentOptions")?JSON.parse(localStorage.getItem("assesmentOptions")):s},setOptions:function(e){localStorage.setItem("assesmentOptions",JSON.stringify(e))},validateError:function(e){var t={};return Object.keys(e).forEach((function(n){""===e[n]&&(t[n]=!0)})),t},getButtonText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e&&e.hasOwnProperty("m_listCustomizations")&&e.m_listCustomizations.forEach((function(e){t===e.m_lCustomizationId&&(n=""===e.m_szCustomizationName?e.m_szCustomizationDefault:e.m_szCustomizationName)})),n},checkPromotion:function(e){return!!(e&&e.m_lPromotionId>0)}};function u(){var e=localStorage.getItem("currentUser"),t=localStorage.getItem("emailToken");return e?(e=JSON.parse(e)).JwtToken:("skip"===t&&(t=""),t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return!(!n||n[e]!==t)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t)return t[e]}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n="";return e&&e.hasOwnProperty("glistColors")&&e.glistColors.forEach((function(e){t===e.Key&&(n=e.Value)})),n}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n="";return e&&e.m_dictColors&&(n=e.m_dictColors[t]),n}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e?e[arguments.length>1?arguments[1]:void 0]:""}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n="";if(e&&e.hasOwnProperty("m_oColorScheme")){var r=e.m_oColorScheme.m_dictColors;Object.keys(r).forEach((function(e){t+""==e+""&&(n=r[e])}))}return n}function p(){return window.Rewardful&&window.Rewardful.referral||"checkout_"+(new Date).getTime()}},6627:function(e,t,n){n.r(t);var r=n(4942),o=n(5861),a=n(885),s=n(4687),i=n.n(s),u=n(7294),c=n(7256),l=n.n(c),m=n(5005),g=n(3314),d=n(5977),f=n(1468),p=n(6687),h=n(1436),v=n(9656);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=(0,u.useState)({guid:"0",szEmailAddress:"",szFirstName:"string",szLastName:"string",szPrivacyConsent:"string",szDummy:"string"}),t=(0,a.Z)(e,2),n=t[0],r=t[1],s=(0,u.useState)(!1),c=(0,a.Z)(s,2),y=c[0],w=c[1],S=(0,u.useState)(""),O=(0,a.Z)(S,2),E=O[0],k=O[1],z=(0,u.useState)({}),b=(0,a.Z)(z,2),P=b[0],_=b[1],x=(0,d.useParams)(),I=(0,v.k6)(),Z=(0,u.useState)(!1),A=(0,a.Z)(Z,2),j=A[0],N=A[1],T=(0,u.useState)(!1),M=(0,a.Z)(T,2),D=M[0],J=M[1],F=(0,u.useState)({}),q=(0,a.Z)(F,2),R=q[0],L=q[1],U=(0,u.useState)([]),B=(0,a.Z)(U,2),G=B[0],K=B[1],Q=(0,u.useState)(!1),V=(0,a.Z)(Q,2),Y=(V[0],V[1]),X=(0,u.useState)(!1),$=(0,a.Z)(X,2),H=($[0],$[1]),W=(0,u.useState)(-1),ee=(0,a.Z)(W,2),te=(ee[0],ee[1]),ne=(0,u.useState)({}),re=(0,a.Z)(ne,2),oe=(re[0],re[1]),ae=function(){var e=(0,o.Z)(i().mark((function e(){var t,n,r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,f.xj.post("Assess/getAssessmentForLanding",{szGuid:x.id});case 3:!0===(t=e.sent).status?200===t.data.data.statusCode&&(n=JSON.parse(t.data.data.result),document.title=n&&n.goAssessment?n.goAssessment.szName+" - Assessment":"",L(n),r=n.gPageSequence2,K(r),x.hasOwnProperty("stage")?(o=r.indexOf(x.stage.toUpperCase()),te(o)):localStorage.removeItem("emailToken")):H(!0),Y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){if(ae(),x.hasOwnProperty("stage")){var e=G.indexOf(x.stage.toUpperCase());te(e)}else f.xj.setQuestionStorage({});oe(f.xj.getQuestionStorage())}),[x]);var se=function(){var e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=f.xj.validateError(n),!(Object.keys(t).filter((function(e){return!0===t[e]})).length>0)){e.next=6;break}return _(t),e.abrupt("return");case 6:_({});case 7:return k(""),Y(!0),n.guid=x.id,e.next=12,f.xj.post("Assess/submitReturningUserEmailAddress",n);case 12:!1!==e.sent.status?(w(!0),N(!0)):(J(!0),k("Sorry, we are unable to proceed.")),Y(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(""),Y(!0),e.next=4,f.xj.post("Assess/verifyReturningUser",{guid:x.id,szEmailAddress:n.szEmailAddress,otp:n.otp});case 4:if(!1===(t=e.sent).status){e.next=12;break}return localStorage.setItem("emailToken",t.data.data.token),f.xj.setAssesmentResult(t.data.data.result),I.push("/analyticsresult"),e.abrupt("return",!1);case 12:k("Sorry, we could not authorize you."),J(!0);case 14:Y(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.createElement(u.Fragment,null,u.createElement("div",{className:l().Benchmarkformpage},u.createElement("div",{className:l().benchmarkformMain},u.createElement(g.Z,null,u.createElement("h2",{className:l().headingform}," Please enter your email address "),u.createElement(g.Z.Group,{className:l().fgroup,controlId:"exampleForm.ControlInput1"},u.createElement(g.Z.Control,{type:"text",placeholder:"Email Address",onChange:function(e){r(C(C({},n),{},{szEmailAddress:e.target.value}))}}),P&&P.hasOwnProperty("szEmailAddress")&&u.createElement("p",{className:"error errcont"},"Please fill required field!")),y?u.createElement(u.Fragment,null,u.createElement(g.Z.Group,{className:l().fgroup,controlId:"exampleForm.ControlInput1"},u.createElement(g.Z.Control,{placeholder:"Verification Code",type:"text",onChange:function(e){r(C(C({},n),{},{otp:e.target.value}))}}),P&&P.hasOwnProperty("otp")&&u.createElement("p",{className:"error errcont"},"Please fill required field!")),u.createElement(m.Z,{style:{background:(0,f.Lq)(R,2),color:(0,f.Lq)(R,5)},variant:"primary",type:"button",onClick:function(){ie()}},"Verify")):u.createElement(u.Fragment,null,u.createElement(g.Z.Group,{className:l().registraioncheckbox,controlId:"exampleForm.ControlInput1"},u.createElement(g.Z.Control,{type:"checkbox",onChange:function(e){r(C(C({},n),{},{szPrivacyConsent:!!e.target.checked&&"Y"}))}}),u.createElement("label",null,"I have read and agree with the ",u.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"".concat(R&&R.goAssessment&&R.goAssessment.oAuthor&&R.goAssessment.oAuthor.szPrivacyURL)},"privacy policy"))),u.createElement(m.Z,{style:{background:(0,f.Lq)(R,2),color:(0,f.Lq)(R,5)},variant:"primary",type:"button",onClick:function(){se()}},"Continue"))))),u.createElement(p.Z,{showtoast:j,toggleShowToast:function(){return N(!j)},bgclass:"success",status:"Success",message:"Please check your email for the confirmation code",toasticon:h.f8k}),u.createElement(p.Z,{showtoast:D,toggleShowToast:function(){return J(!D)},bgclass:"danger",status:"Error",message:E,toasticon:h.gPx}))}}}]);