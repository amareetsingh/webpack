"use strict";(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[6330],{6687:function(t,e,n){var o=n(7294),r=n(7315),a=n(7625);e.Z=function(t){var e=t.showtoast,n=t.toggleShowToast,s=t.bgclass,i=t.status,l=t.message,u=t.toasticon;return o.createElement(o.Fragment,null,o.createElement(r.Z,{delay:3e3,autohide:!0,className:s,show:e,onClose:n},o.createElement(r.Z.Header,{style:{color:"#fff"},className:s},o.createElement("div",{className:"toast-inner"},o.createElement(a.G,{icon:u,size:"lg"}),o.createElement("div",null,o.createElement("p",null,i),o.createElement("p",null,l))))))}},1468:function(t,e,n){n.d(e,{IP:function(){return u},xj:function(){return i},sM:function(){return f},Lq:function(){return g},Vo:function(){return m},z$:function(){return h},l_:function(){return c},iX:function(){return d}});var o=n(9669),r=n.n(o),a=n(4012),s={130:0,140:0,30:0,170:0,35:0,131:0,120:0,3:2},i={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={headers:{"Content-Type":"application/json"}},o=localStorage.getItem("currentUser");return o&&(o=JSON.parse(o),n.headers.Authorization="Bearer "+o.JwtToken,e.token=o.JwtToken,e.user_id=o.user_id,n.headers.data=JSON.stringify(e)),r().get("".concat(a.v).concat(t),n).then((function(t){return{status:!0,data:t.data}})).catch((function(t){return{status:!1,error:t}}))},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={"Content-Type":"application/json"},o=l();return null!=o&&"null"!==o&&""!==o&&(n.Authorization="Bearer "+o),r().post("".concat(a.v).concat(t),e,{headers:n}).then((function(t){return 200===t.data.statusCode?{status:!0,data:t}:{status:!1,data:t}})).catch((function(t){return{status:!1,error:t}}))},sendTrackingData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r().post("".concat(a.v).concat(t),e,{headers:{"Content-Type":"application/json"}})},getCurrentToken:l,convertToSlug:function(t){return null==t?void 0:t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},setQuestionStorage:function(t){localStorage.setItem("questionStorage",JSON.stringify(t))},getQuestionStorage:function(){return localStorage.getItem("questionStorage")?JSON.parse(localStorage.getItem("questionStorage")):{}},awsBucketImage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(null===t||!t.hasOwnProperty("m_lMediaId")||null===t.m_szMediaKey||""===t.m_szMediaKey.trim())&&"https://s3.amazonaws.com/".concat(a.FU,"/").concat(t.m_szMediaKey).concat(t.m_lMediaId,".").concat(t.m_szFileExtension.toLowerCase())},getCustomizeText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.hasOwnProperty("m_oEvalCustomizations")&&t.m_oEvalCustomizations.hasOwnProperty("m_dictEvalCustomizations")&&t.m_oEvalCustomizations.m_dictEvalCustomizations.hasOwnProperty(e)?t.m_oEvalCustomizations.m_dictEvalCustomizations[e]:n},getCustomizeText2:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return t&&t[e]?t[e]:""},setAssesmentResult:function(t){localStorage.setItem("assesmentResult",t)},getAssesmentResult:function(){return localStorage.getItem("assesmentResult")?JSON.parse(localStorage.getItem("assesmentResult")):{}},getColors:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return"normal"===n?t&&t.hasOwnProperty("dictColors")&&t.dictColors.hasOwnProperty(e)?t.dictColors[e]:"rgba(71, 62, 143,1)":t&&t.hasOwnProperty("dictColors1")&&t.dictColors1.hasOwnProperty(n)&&t.dictColors1[n].hasOwnProperty(e)?t.dictColors1[n][e]:"rgba(71, 62, 143,1)"},convertDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date(t);return 0===e?n.getDate()+" "+["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()]+" "+n.getFullYear():n.getFullYear()+"-"+("0"+[n.getMonth()+1]).slice(-2)+"-"+("0"+n.getDate()).slice(-2)},timeSince:function(t){var e=Math.floor(((new Date).getTime()-new Date(t).getTime())/1e3),n=e/31536e3;return n>1?Math.floor(n)+" years":(n=e/2592e3)>1?Math.floor(n)+" months":(n=e/86400)>1?Math.floor(n)+" days":(n=e/3600)>1?Math.floor(n)+" hours":(n=e/60)>1?Math.floor(n)+" minutes":Math.floor(e)+" seconds"},getOptions:function(){return localStorage.getItem("assesmentOptions")?JSON.parse(localStorage.getItem("assesmentOptions")):s},setOptions:function(t){localStorage.setItem("assesmentOptions",JSON.stringify(t))},validateError:function(t){var e={};return Object.keys(t).forEach((function(n){""===t[n]&&(e[n]=!0)})),e},getButtonText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t&&t.hasOwnProperty("m_listCustomizations")&&t.m_listCustomizations.forEach((function(t){e===t.m_lCustomizationId&&(n=""===t.m_szCustomizationName?t.m_szCustomizationDefault:t.m_szCustomizationName)})),n},checkPromotion:function(t){return!!(t&&t.m_lPromotionId>0)}};function l(){var t=localStorage.getItem("currentUser"),e=localStorage.getItem("emailToken");return t?(t=JSON.parse(t)).JwtToken:("skip"===e&&(e=""),e)}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return!(!n||n[t]!==e)}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e)return e[t]}function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n="";return t&&t.hasOwnProperty("glistColors")&&t.glistColors.forEach((function(t){e===t.Key&&(n=t.Value)})),n}function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n="";return t&&t.m_dictColors&&(n=t.m_dictColors[e]),n}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t?t[arguments.length>1?arguments[1]:void 0]:""}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n="";if(t&&t.hasOwnProperty("m_oColorScheme")){var o=t.m_oColorScheme.m_dictColors;Object.keys(o).forEach((function(t){e+""==t+""&&(n=o[t])}))}return n}function f(){return window.Rewardful&&window.Rewardful.referral||"checkout_"+(new Date).getTime()}}}]);