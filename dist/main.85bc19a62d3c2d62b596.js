(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[4529],{1468:function(n,r,t){"use strict";t.d(r,{IP:function(){return l},xj:function(){return p},sM:function(){return h},Lq:function(){return s},Vo:function(){return c},z$:function(){return d},l_:function(){return g},iX:function(){return u}});var o=t(9669),e=t.n(o),i=t(4012),a={130:0,140:0,30:0,170:0,35:0,131:0,120:0,3:2},p={get:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={headers:{"Content-Type":"application/json"}},o=localStorage.getItem("currentUser");return o&&(o=JSON.parse(o),t.headers.Authorization="Bearer "+o.JwtToken,r.token=o.JwtToken,r.user_id=o.user_id,t.headers.data=JSON.stringify(r)),e().get("".concat(i.v).concat(n),t).then((function(n){return{status:!0,data:n.data}})).catch((function(n){return{status:!1,error:n}}))},post:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t={"Content-Type":"application/json"},o=f();return null!=o&&"null"!==o&&""!==o&&(t.Authorization="Bearer "+o),e().post("".concat(i.v).concat(n),r,{headers:t}).then((function(n){return 200===n.data.statusCode?{status:!0,data:n}:{status:!1,data:n}})).catch((function(n){return{status:!1,error:n}}))},sendTrackingData:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e().post("".concat(i.v).concat(n),r,{headers:{"Content-Type":"application/json"}})},getCurrentToken:f,convertToSlug:function(n){return null==n?void 0:n.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},setQuestionStorage:function(n){localStorage.setItem("questionStorage",JSON.stringify(n))},getQuestionStorage:function(){return localStorage.getItem("questionStorage")?JSON.parse(localStorage.getItem("questionStorage")):{}},awsBucketImage:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(null===n||!n.hasOwnProperty("m_lMediaId")||null===n.m_szMediaKey||""===n.m_szMediaKey.trim())&&"https://s3.amazonaws.com/".concat(i.FU,"/").concat(n.m_szMediaKey).concat(n.m_lMediaId,".").concat(n.m_szFileExtension.toLowerCase())},getCustomizeText:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n.hasOwnProperty("m_oEvalCustomizations")&&n.m_oEvalCustomizations.hasOwnProperty("m_dictEvalCustomizations")&&n.m_oEvalCustomizations.m_dictEvalCustomizations.hasOwnProperty(r)?n.m_oEvalCustomizations.m_dictEvalCustomizations[r]:t},getCustomizeText2:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return n&&n[r]?n[r]:""},setAssesmentResult:function(n){localStorage.setItem("assesmentResult",n)},getAssesmentResult:function(){return localStorage.getItem("assesmentResult")?JSON.parse(localStorage.getItem("assesmentResult")):{}},getColors:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return"normal"===t?n&&n.hasOwnProperty("dictColors")&&n.dictColors.hasOwnProperty(r)?n.dictColors[r]:"rgba(71, 62, 143,1)":n&&n.hasOwnProperty("dictColors1")&&n.dictColors1.hasOwnProperty(t)&&n.dictColors1[t].hasOwnProperty(r)?n.dictColors1[t][r]:"rgba(71, 62, 143,1)"},convertDate:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=new Date(n);return 0===r?t.getDate()+" "+["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+t.getFullYear():t.getFullYear()+"-"+("0"+[t.getMonth()+1]).slice(-2)+"-"+("0"+t.getDate()).slice(-2)},timeSince:function(n){var r=Math.floor(((new Date).getTime()-new Date(n).getTime())/1e3),t=r/31536e3;return t>1?Math.floor(t)+" years":(t=r/2592e3)>1?Math.floor(t)+" months":(t=r/86400)>1?Math.floor(t)+" days":(t=r/3600)>1?Math.floor(t)+" hours":(t=r/60)>1?Math.floor(t)+" minutes":Math.floor(r)+" seconds"},getOptions:function(){return localStorage.getItem("assesmentOptions")?JSON.parse(localStorage.getItem("assesmentOptions")):a},setOptions:function(n){localStorage.setItem("assesmentOptions",JSON.stringify(n))},validateError:function(n){var r={};return Object.keys(n).forEach((function(t){""===n[t]&&(r[t]=!0)})),r},getButtonText:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n&&n.hasOwnProperty("m_listCustomizations")&&n.m_listCustomizations.forEach((function(n){r===n.m_lCustomizationId&&(t=""===n.m_szCustomizationName?n.m_szCustomizationDefault:n.m_szCustomizationName)})),t},checkPromotion:function(n){return!!(n&&n.m_lPromotionId>0)}};function f(){var n=localStorage.getItem("currentUser"),r=localStorage.getItem("emailToken");return n?(n=JSON.parse(n)).JwtToken:("skip"===r&&(r=""),r)}function l(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return!(!t||t[n]!==r)}function g(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(r)return r[n]}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t="";return n&&n.hasOwnProperty("glistColors")&&n.glistColors.forEach((function(n){r===n.Key&&(t=n.Value)})),t}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t="";return n&&n.m_dictColors&&(t=n.m_dictColors[r]),t}function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n?n[arguments.length>1?arguments[1]:void 0]:""}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,t="";if(n&&n.hasOwnProperty("m_oColorScheme")){var o=n.m_oColorScheme.m_dictColors;Object.keys(o).forEach((function(n){r+""==n+""&&(t=o[n])}))}return t}function h(){return window.Rewardful&&window.Rewardful.referral||"checkout_"+(new Date).getTime()}},24:function(n,r,t){var o=t(3645),e=t(1667),i=t(8993),a=t(9760);r=o(!1);var p=e(i),f=e(a);r.push([n.id,"\r\n.container {\r\n    /* min-height: calc(100vh - 51px); */\r\n    width     : 100%;\r\n}\r\n\r\n.formContainer {\r\n    width: 210px;\r\n}\r\n.headermain{background: #483f90;}\r\n.headerpart {\r\n    /* padding: 13.2px 52px 0px 56px; */\r\n    padding: 13.2px 0px 0px 0px;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    align-items: baseline;\r\n    align-content: center;\r\n    background: #483f90;\r\n    max-width: 1407px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.headerpart ul {\r\n    display   : flex;\r\n    padding   : 0px;\r\n    color     : #fff;\r\n    list-style: none;\r\n}\r\n\r\n.headerpart ul li {\r\n    padding: 0px 20px;;\r\n}\r\n\r\n.headerpart ul li a {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    color: rgba(255, 255, 255, 0.54);   \r\n    text-decoration: none; \r\n    position: relative;\r\n    top: 3px;\r\n    right: 3px;\r\n}\r\n.headerpart ul li a:hover{color: #fff}\r\n.headerpart p {\r\n    font-family    : 'Roboto';\r\n    font-style     : normal;\r\n    font-weight    : normal;\r\n    font-size      : 15px;\r\n    line-height    : 18px;\r\n    color          : rgba(255, 255, 255, 0.54);\r\n    text-decoration: none;\r\n}\r\n\r\n.headerpart a {\r\n    width: 213px;\r\n}\r\n\r\n.headerpart a img {\r\n    width: 100%;\r\n}\r\n\r\n.menu_signbtn a {\r\n    border       : 1px solid #847cc4;\r\n    padding      : 15px 15px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.menu_signbtn a:hover {\r\n    background  : #4285f4;\r\n    border-color: #4285f4\r\n}\r\n\r\n.menu_startbtn{\r\n    height: 40px;\r\n    \r\n}\r\n\r\n.menu_startbtn a {\r\n    font-family     : 'Inter';\r\n    font-size       : 16px;\r\n    font-weight     : 500;\r\n    background-color: #4285F4;\r\n    border-radius   : 100px;    \r\n    margin          : 0 ;\r\n    z-index         : 11;\r\n    color: #fff !important;\r\n    padding         : 10px 16px;\r\n    width: 145.06px;\r\n    padding: 0px;\r\n    height: 40px;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 40px !important;\r\n    position: relative;\r\n    top:0px !important;\r\n    left: -3px !important;\r\n}\r\n.menu_startbtn a:hover {\r\n    background: #265eba;\r\n    color: #fff;\r\n\r\n}\r\n.menu_toggle{display: none; background-color: #fff; padding: 7px 14px; border: none; border-radius: 4px;}\r\n.menu_toggle .drop_toggle{background: #fff; border: none;}\r\n.menu_toggle .drop_toggle:hover,\r\n.menu_toggle .drop_toggle:focus,\r\n.menu_toggle .drop_toggle:active\r\n{\r\n    box-shadow: none !important;\r\n    background: #fff !important; \r\n    border: none !important;\r\n    outline: none;\r\n}\r\n.menu_toggle .drop_toggle svg{fill: #000; color: #000;}\r\n.menu_toggle .drop_toggle::after{display: none !important;}\r\n\r\n.menu_toggle a{\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-size: 18px;\r\n    line-height: 30px;\r\n    font-weight: 500;\r\n    font-family: 'Roboto';\r\n}\r\n.dropdown-menu{\r\nposition: fixed !important;\r\nwidth: 100%;\r\n}\r\n/* Login css */\r\n\r\n.error {\r\n    font-size: 0.8rem;\r\n    color    : #bb0000;\r\n}\r\n\r\n.loginForm {\r\n    display       : flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.loginFormItem {\r\n    /* display: flex;\r\n\tflex-direction: column; */\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}\r\n.loginFormItem svg,\r\n.loginFormItem img{\r\n    position: absolute;\r\n    top: 43px;\r\n    left: 10px;\r\n}\r\n.loginPage {\r\n    justify-content: center;\r\n    display        : flex;\r\n    background     : #fff;\r\n    padding        : 0px 40px 100px;\r\n}\r\n\r\n.loginPage form {\r\n    width        : 480px;\r\n    margin-top   : -70px;\r\n    background   : #fff;\r\n    padding      : 30px 30px;\r\n    border-radius: 4px;\r\n    border       : 1px solid #ccc;\r\n}\r\n\r\n.logo_header {\r\n    background: #483f90;\r\n    padding   : 50px 40px 100px;\r\n    color     : #fff;\r\n}\r\n\r\n.logo_header h1 {\r\n    text-align   : center;\r\n    font-size    : 36px;\r\n    font-weight  : 400;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.logo_header p {\r\n    text-align: center;\r\n}\r\n\r\n.loginForm label {\r\n    font-family  : 'Roboto', sans-serif;\r\n    color        : #000000;\r\n    font-size    : 16px;\r\n    line-height  : 24px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.loginForm input {\r\n    height       : 40px;\r\n    border-radius: 4px;\r\n    padding      : 0px 10px 0 35px;\r\n    border       : 1px solid #ccc;\r\n    width        : 100%;\r\n}\r\n\r\n.loginPage button {\r\n    text-transform: uppercase;\r\n    font-size     : 16px;\r\n    font-weight   : 500;\r\n    font-family   : 'Roboto';\r\n    background    : #4285f4;\r\n    display       : inline-block;\r\n    color         : #fff;\r\n    height        : 40px;\r\n    width         : 100%;\r\n    border        : none;\r\n    cursor        : pointer;\r\n    border-radius : 4px;\r\n    margin-bottom : 10px;\r\n}\r\n\r\n.loginPage button:hover {\r\n    background: #265eba;\r\n}\r\n\r\n.loginFormItem {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.forget_password {\r\n    color          : #483f90;\r\n    text-decoration: none;\r\n}\r\n\r\n.forget_password:hover {\r\n    color: #000;\r\n}\r\n\r\n.forgetPassword {\r\n    /*display: none;*/\r\n    margin-top: 10px;\r\n}\r\n\r\n.resendotp {\r\n    color          : #483f90;\r\n    text-decoration: none;\r\n    float          : right;\r\n}\r\n\r\n.login_fied {\r\n    background: #fff;\r\n}\r\n\r\n:root {\r\n    --colour1: #483f90;\r\n    --colour2: #4285f4;\r\n    --speed  : 4s;\r\n}\r\n\r\n\r\n\r\n@keyframes slide {\r\n    from {\r\n        background-position-x: 0;\r\n    }\r\n\r\n    to {\r\n        background-position-x: 113px;\r\n    }\r\n}\r\n\r\n.loader {\r\n    display: none;\r\n}\r\n\r\n.bgloader {\r\n    position  : fixed;\r\n    z-index   : 1156;\r\n    left      : 0;\r\n    right     : 0;\r\n    bottom    : 0px;\r\n    top       : 0;\r\n    background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.loaderShow {\r\n    display        : flex;\r\n    justify-content: center;\r\n    align-items    : center;\r\n    position       : fixed;\r\n    z-index        : 99999999;\r\n\r\n    height   : 10px;\r\n    border   : 0;\r\n    padding  : 16px 0px;\r\n    top      : 50%;\r\n    left     : 50%;\r\n    transform: translate(-50%, -50%);\r\n    min-width: 300px;\r\n}\r\n\r\n.loaderShowbar {\r\n    height       : 30px;\r\n    border-radius: 10px;\r\n    width        : 100%;\r\n\r\n    box-shadow      : 0px 10px 13px -6px rgba(44, 62, 80, 1);\r\n    background-color: var(--colour2);\r\n    background-image: repeating-linear-gradient(45deg,\r\n            transparent,\r\n            transparent 40px,\r\n            var(--colour1) 40px,\r\n            var(--colour1) 80px);\r\n\r\n    animation  : slide var(--speed) linear infinite;\r\n    will-change: background-position;\r\n}\r\n\r\n\r\n\r\n/* Footer css */\r\n\r\n.Footerresult_page .footer_section_secure .footer_copyright {\r\n\r\n}\r\n\r\n.footerPowered {\r\n    padding: 5px 0;\r\n    background: #414661;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n}\r\n\r\n.footer_section {\r\n   padding: 60px 0 30px;\r\n   background: #414661;\r\n   margin-bottom: -76px !important;\r\n}\r\n.footer_section_secure{\r\n    padding: 20px 0 ;\r\n    background: #414661;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;    \r\n}\r\n.footer_section_secure .footer_copyright{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 0 !important;\r\n    width: 100%;\r\n}\r\n.footer_section_secure .footer_copyright img{width: 80%;}\r\n.get_in_touch{\r\n    max-width: 900px !important;\r\n    margin: 0 auto;\r\n}\r\n.get_in_touch h3{\r\n    font-weight: 500;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    font-family: 'Inter';\r\n    color: #ffffff;\r\n    margin-bottom: 16px;\r\n}\r\n.get_in_touch p{\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    font-family: 'Inter';\r\n    color: #ffffff;\r\n    margin-bottom: 30px;\r\n}\r\n.get_in_touch form{\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n.get_in_touch form input{\r\n    height: 42px;\r\n    padding: 16px;\r\n    border: 1px solid #ffffff8a;\r\n    width: 100%;\r\n    box-sizing: border-box;    \r\n    background-color: transparent;\r\n    color:#ffffff8a\r\n}\r\n.get_in_touch form input:first-child{\r\n    border-radius: 60px 0px 0px 60px;\r\n}\r\n.get_in_touch form input:nth-child(2){\r\n    border-radius: 0px 60px 60px 0px;\r\n}\r\n.get_in_touch form input:hover,\r\n.get_in_touch form input:focus{\r\n    box-shadow: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    color:#ffffff8a;\r\n    border: 1px solid #ffffff8a;\r\n}\r\n\r\n.icon_btn{\r\n    padding: 0 !important;\r\n    border-radius: 60px !important;\r\n    background: #4285f4;\r\n    border: 1px solid #4285f4;\r\n    height: 37px;\r\n    width: 37px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 3px;\r\n}\r\n.icon_btn img{\r\n    height: 36px;\r\n    width: 36px;\r\n}\r\n.footer_menu{\r\n    margin-top: 60px !important;\r\n}\r\n.footer_menu p{\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    font-family: 'Inter';\r\n    margin-bottom: 16px;\r\n    color: #ffffff8a;\r\n}\r\n.footer_menu ul{\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.footer_menu ul li{\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n    margin-bottom: 16px;\r\n}\r\n.footer_menu ul li a{text-decoration: none;color: #ffffff8a;}\r\n.footer_menu ul li a:hover{\r\ncolor: #fff;\r\n}\r\n.footer_copyright{\r\n    margin-top: 60px !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.footer_copyright p{\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n    margin: 0 10px;\r\n}\r\n.footer_copyright a{\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n    margin: 0 10px;\r\n}\r\n.footer_copyright a:hover{color: #fff;}\r\n.mobile_menu{\r\n    position: fixed;\r\n    background: #483f90;\r\n    z-index: 999;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    top:67px;\r\n    padding: 20px 30px;\r\n    border-top: 1px solid #fff;\r\n}\r\n.mobile_menu ol{\r\n    list-style-type: none;\r\n    text-align: left;\r\n    padding:0px\r\n}\r\n.mobile_menu ol li{\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n    font-weight: 500;\r\n    font-family: 'Inter';\r\n    margin-bottom: 16px;\r\n}\r\n.mobile_menu li a{color: rgb(255, 255, 255); text-decoration: none;}\r\n\r\n/* Account Verify css */\r\n.verify_page{\r\n   \r\n    text-align: center;\r\n    background-color: #473E8F;    \r\n}\r\n.verify_page .topbanner{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n        position: relative;\r\n        padding-bottom: 100px;\r\n\r\n}\r\n.verify_page .topbanner::before{\r\n    content: \"\";\r\n    background-image: url("+p+');\r\n    background-size: contain;\r\n    background-position: right top;\r\n    position: absolute;\r\n    width: 500px;\r\n    height: 500px;\r\n    right: 0;\r\n    top: 0;\r\n    background-repeat: no-repeat;\r\n}\r\n.verify_page .topbanner::after{\r\n    content: "";\r\n    background-image: url('+f+");\r\n    background-size: contain;\r\n    background-position: right top;\r\n    position: absolute;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-repeat: no-repeat;\r\n}\r\n.verify_page .topbanner h3{\r\n    font-size: 50px;\r\n    line-height: 56px;\r\n    font-family: 'Roboto';\r\n    margin-bottom: 15px;\r\n    color: #fff;\r\n    z-index: 99;\r\n    position: relative;\r\n}\r\n.verify_page .topbanner p{\r\n    font-size: 18px;\r\n    line-height: 26pxpx;\r\n    font-family: 'Roboto';\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    color: #fff;\r\n    z-index: 99;\r\n    position: relative;\r\n}\r\n.verify_page .topbanner a{\r\n    width: 204px;\r\n    height: 55px;\r\n    padding: 14px 24px 17px;\r\n    background: #4285F4;\r\n    border-radius: 100px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    line-height: 150%;\r\n}\r\n.verify_page .topbanner a svg{margin-right: 8px;}\r\n.create_account_link{\r\n    justify-content: space-between;\r\n    display: flex;\r\n}\r\n.create_account{\r\n    color: #483f90;\r\n    text-decoration: none;\r\n}\r\n@media screen and (max-width:1100px) {\r\n    .menu_toggle{display: block;}\r\n    .headerpart ul{display: none;}\r\n}\r\n@media screen and (max-width:576px) {\r\n    .headerpart{padding: 16px 16px 0;}\r\n}\r\n@media screen and (max-width:767px) {\r\n    .footer_section{padding: 60px 0 20px;}\r\n    .footer_menu{margin-top: 30px !important;}\r\n    .footer_menu, .footer_menu ul{\r\n        text-align: center;\r\n    }\r\n    .footer_menu ul li{\r\n        margin-bottom: 12px;\r\n    }\r\n    .footer_menu p{\r\n        margin-bottom: 12px;\r\n        margin-top: 20px;\r\n    }\r\n    .footer_copyright p{font-size: 14px; line-height: 20px;}\r\n    .footer_copyright a{font-size: 14px; line-height: 20px;}\r\n    .footer_section_secure .footer_copyright{display: block; text-align: center;}\r\n    .footer_section_secure .footer_copyright img{width: 40%; margin-bottom: 12px;}\r\n    .footer_section_secure .footer_copyright p{line-height: 24px;}\r\n    .footer_section_secure{\r\n        position: initial;\r\n    }\r\n}\r\n\r\n.NotificationContainer{\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #483f90;\r\n    display: flex;\r\nalign-items: center;   \r\njustify-content: center; \r\n/* z-index: 222; */\r\n/* position: fixed; */\r\n}\r\n\r\n.NotificationContainer > h4{\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n}",""]),n.exports=r},9760:function(n,r,t){"use strict";t.r(r),r.default=t.p+"images/Frame.0603fdf64ba9b95955bab5afae9683ea.png"},8993:function(n,r,t){"use strict";t.r(r),r.default=t.p+"images/Subtract.9f7cfb16b4c8f8a2ed6fe557c2a4eca8.png"},5368:function(n,r,t){var o=t(24);"string"==typeof o&&(o=[[n.id,o,""]]);t(6723)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(n.exports=o.locals)}}]);