(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[5403],{1468:function(n,r,o){"use strict";o.d(r,{IP:function(){return d},xj:function(){return a},sM:function(){return s},Lq:function(){return u},Vo:function(){return m},z$:function(){return p},l_:function(){return _},iX:function(){return f}});var e=o(9669),t=o.n(e),i=o(4012),l={130:0,140:0,30:0,170:0,35:0,131:0,120:0,3:2},a={get:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={headers:{"Content-Type":"application/json"}},e=localStorage.getItem("currentUser");return e&&(e=JSON.parse(e),o.headers.Authorization="Bearer "+e.JwtToken,r.token=e.JwtToken,r.user_id=e.user_id,o.headers.data=JSON.stringify(r)),t().get("".concat(i.v).concat(n),o).then((function(n){return{status:!0,data:n.data}})).catch((function(n){return{status:!1,error:n}}))},post:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={"Content-Type":"application/json"},e=g();return null!=e&&"null"!==e&&""!==e&&(o.Authorization="Bearer "+e),t().post("".concat(i.v).concat(n),r,{headers:o}).then((function(n){return 200===n.data.statusCode?{status:!0,data:n}:{status:!1,data:n}})).catch((function(n){return{status:!1,error:n}}))},sendTrackingData:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t().post("".concat(i.v).concat(n),r,{headers:{"Content-Type":"application/json"}})},getCurrentToken:g,convertToSlug:function(n){return null==n?void 0:n.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},setQuestionStorage:function(n){localStorage.setItem("questionStorage",JSON.stringify(n))},getQuestionStorage:function(){return localStorage.getItem("questionStorage")?JSON.parse(localStorage.getItem("questionStorage")):{}},awsBucketImage:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(null===n||!n.hasOwnProperty("m_lMediaId")||null===n.m_szMediaKey||""===n.m_szMediaKey.trim())&&"https://s3.amazonaws.com/".concat(i.FU,"/").concat(n.m_szMediaKey).concat(n.m_lMediaId,".").concat(n.m_szFileExtension.toLowerCase())},getCustomizeText:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n.hasOwnProperty("m_oEvalCustomizations")&&n.m_oEvalCustomizations.hasOwnProperty("m_dictEvalCustomizations")&&n.m_oEvalCustomizations.m_dictEvalCustomizations.hasOwnProperty(r)?n.m_oEvalCustomizations.m_dictEvalCustomizations[r]:o},getCustomizeText2:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return n&&n[r]?n[r]:""},setAssesmentResult:function(n){localStorage.setItem("assesmentResult",n)},getAssesmentResult:function(){return localStorage.getItem("assesmentResult")?JSON.parse(localStorage.getItem("assesmentResult")):{}},getColors:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return"normal"===o?n&&n.hasOwnProperty("dictColors")&&n.dictColors.hasOwnProperty(r)?n.dictColors[r]:"rgba(71, 62, 143,1)":n&&n.hasOwnProperty("dictColors1")&&n.dictColors1.hasOwnProperty(o)&&n.dictColors1[o].hasOwnProperty(r)?n.dictColors1[o][r]:"rgba(71, 62, 143,1)"},convertDate:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=new Date(n);return 0===r?o.getDate()+" "+["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o.getMonth()]+" "+o.getFullYear():o.getFullYear()+"-"+("0"+[o.getMonth()+1]).slice(-2)+"-"+("0"+o.getDate()).slice(-2)},timeSince:function(n){var r=Math.floor(((new Date).getTime()-new Date(n).getTime())/1e3),o=r/31536e3;return o>1?Math.floor(o)+" years":(o=r/2592e3)>1?Math.floor(o)+" months":(o=r/86400)>1?Math.floor(o)+" days":(o=r/3600)>1?Math.floor(o)+" hours":(o=r/60)>1?Math.floor(o)+" minutes":Math.floor(r)+" seconds"},getOptions:function(){return localStorage.getItem("assesmentOptions")?JSON.parse(localStorage.getItem("assesmentOptions")):l},setOptions:function(n){localStorage.setItem("assesmentOptions",JSON.stringify(n))},validateError:function(n){var r={};return Object.keys(n).forEach((function(o){""===n[o]&&(r[o]=!0)})),r},getButtonText:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n&&n.hasOwnProperty("m_listCustomizations")&&n.m_listCustomizations.forEach((function(n){r===n.m_lCustomizationId&&(o=""===n.m_szCustomizationName?n.m_szCustomizationDefault:n.m_szCustomizationName)})),o},checkPromotion:function(n){return!!(n&&n.m_lPromotionId>0)}};function g(){var n=localStorage.getItem("currentUser"),r=localStorage.getItem("emailToken");return n?(n=JSON.parse(n)).JwtToken:("skip"===r&&(r=""),r)}function d(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return!(!o||o[n]!==r)}function _(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(r)return r[n]}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o="";return n&&n.hasOwnProperty("glistColors")&&n.glistColors.forEach((function(n){r===n.Key&&(o=n.Value)})),o}function m(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o="";return n&&n.m_dictColors&&(o=n.m_dictColors[r]),o}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n?n[arguments.length>1?arguments[1]:void 0]:""}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o="";if(n&&n.hasOwnProperty("m_oColorScheme")){var e=n.m_oColorScheme.m_dictColors;Object.keys(e).forEach((function(n){r+""==n+""&&(o=e[n])}))}return o}function s(){return window.Rewardful&&window.Rewardful.referral||"checkout_"+(new Date).getTime()}},7914:function(n,r,o){var e=o(3645),t=o(1667),i=o(6456),l=o(4625);r=e(!1);var a=t(i),g=t(l);r.push([n.id,"\r\n.login-module__container--3oO2u {\r\n    /* min-height: calc(100vh - 51px); */\r\n    width     : 100%;\r\n}\r\n\r\n.login-module__formContainer--3jFsP {\r\n    width: 210px;\r\n}\r\n.login-module__headermain--22Skv{background: #483f90;}\r\n.login-module__headerpart--2MuSi {\r\n    /* padding: 13.2px 52px 0px 56px; */\r\n    padding: 13.2px 0px 0px 0px;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    align-items: baseline;\r\n    align-content: center;\r\n    background: #483f90;\r\n    max-width: 1407px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.login-module__headerpart--2MuSi ul {\r\n    display   : flex;\r\n    padding   : 0px;\r\n    color     : #fff;\r\n    list-style: none;\r\n}\r\n\r\n.login-module__headerpart--2MuSi ul li {\r\n    padding: 0px 20px;;\r\n}\r\n\r\n.login-module__headerpart--2MuSi ul li a {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    color: rgba(255, 255, 255, 0.54);   \r\n    text-decoration: none; \r\n    position: relative;\r\n    top: 3px;\r\n    right: 3px;\r\n}\r\n.login-module__headerpart--2MuSi ul li a:hover{color: #fff}\r\n.login-module__headerpart--2MuSi p {\r\n    font-family    : 'Roboto';\r\n    font-style     : normal;\r\n    font-weight    : normal;\r\n    font-size      : 15px;\r\n    line-height    : 18px;\r\n    color          : rgba(255, 255, 255, 0.54);\r\n    text-decoration: none;\r\n}\r\n\r\n.login-module__headerpart--2MuSi a {\r\n    width: 213px;\r\n}\r\n\r\n.login-module__headerpart--2MuSi a img {\r\n    width: 100%;\r\n}\r\n\r\n.login-module__menu_signbtn--YbcpR a {\r\n    border       : 1px solid #847cc4;\r\n    padding      : 15px 15px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.login-module__menu_signbtn--YbcpR a:hover {\r\n    background  : #4285f4;\r\n    border-color: #4285f4\r\n}\r\n\r\n.login-module__menu_startbtn--2EBA4{\r\n    height: 40px;\r\n    \r\n}\r\n\r\n.login-module__menu_startbtn--2EBA4 a {\r\n    font-family     : 'Inter';\r\n    font-size       : 16px;\r\n    font-weight     : 500;\r\n    background-color: #4285F4;\r\n    border-radius   : 100px;    \r\n    margin          : 0 ;\r\n    z-index         : 11;\r\n    color: #fff !important;\r\n    padding         : 10px 16px;\r\n    width: 145.06px;\r\n    padding: 0px;\r\n    height: 40px;\r\n    display: block;\r\n    text-align: center;\r\n    line-height: 40px !important;\r\n    position: relative;\r\n    top:0px !important;\r\n    left: -3px !important;\r\n}\r\n.login-module__menu_startbtn--2EBA4 a:hover {\r\n    background: #265eba;\r\n    color: #fff;\r\n\r\n}\r\n.login-module__menu_toggle--1ZtVr{display: none; background-color: #fff; padding: 7px 14px; border: none; border-radius: 4px;}\r\n.login-module__menu_toggle--1ZtVr .login-module__drop_toggle--2HvHj{background: #fff; border: none;}\r\n.login-module__menu_toggle--1ZtVr .login-module__drop_toggle--2HvHj:hover,\r\n.login-module__menu_toggle--1ZtVr .login-module__drop_toggle--2HvHj:focus,\r\n.login-module__menu_toggle--1ZtVr .login-module__drop_toggle--2HvHj:active\r\n{\r\n    box-shadow: none !important;\r\n    background: #fff !important; \r\n    border: none !important;\r\n    outline: none;\r\n}\r\n.login-module__menu_toggle--1ZtVr .login-module__drop_toggle--2HvHj svg{fill: #000; color: #000;}\r\n.login-module__menu_toggle--1ZtVr .login-module__drop_toggle--2HvHj::after{display: none !important;}\r\n\r\n.login-module__menu_toggle--1ZtVr a{\r\n    text-decoration: none;\r\n    color: #000;\r\n    font-size: 18px;\r\n    line-height: 30px;\r\n    font-weight: 500;\r\n    font-family: 'Roboto';\r\n}\r\n.login-module__dropdown-menu--17zrw{\r\nposition: fixed !important;\r\nwidth: 100%;\r\n}\r\n/* Login css */\r\n\r\n.login-module__error--1_fzH {\r\n    font-size: 0.8rem;\r\n    color    : #bb0000;\r\n}\r\n\r\n.login-module__loginForm--3vkv- {\r\n    display       : flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.login-module__loginFormItem--zyZ25 {\r\n    /* display: flex;\r\n\tflex-direction: column; */\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n}\r\n.login-module__loginFormItem--zyZ25 svg,\r\n.login-module__loginFormItem--zyZ25 img{\r\n    position: absolute;\r\n    top: 43px;\r\n    left: 10px;\r\n}\r\n.login-module__loginPage--1TOvp {\r\n    justify-content: center;\r\n    display        : flex;\r\n    background     : #fff;\r\n    padding        : 0px 40px 100px;\r\n}\r\n\r\n.login-module__loginPage--1TOvp form {\r\n    width        : 480px;\r\n    margin-top   : -70px;\r\n    background   : #fff;\r\n    padding      : 30px 30px;\r\n    border-radius: 4px;\r\n    border       : 1px solid #ccc;\r\n}\r\n\r\n.login-module__logo_header--22tLG {\r\n    background: #483f90;\r\n    padding   : 50px 40px 100px;\r\n    color     : #fff;\r\n}\r\n\r\n.login-module__logo_header--22tLG h1 {\r\n    text-align   : center;\r\n    font-size    : 36px;\r\n    font-weight  : 400;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.login-module__logo_header--22tLG p {\r\n    text-align: center;\r\n}\r\n\r\n.login-module__loginForm--3vkv- label {\r\n    font-family  : 'Roboto', sans-serif;\r\n    color        : #000000;\r\n    font-size    : 16px;\r\n    line-height  : 24px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.login-module__loginForm--3vkv- input {\r\n    height       : 40px;\r\n    border-radius: 4px;\r\n    padding      : 0px 10px 0 35px;\r\n    border       : 1px solid #ccc;\r\n    width        : 100%;\r\n}\r\n\r\n.login-module__loginPage--1TOvp button {\r\n    text-transform: uppercase;\r\n    font-size     : 16px;\r\n    font-weight   : 500;\r\n    font-family   : 'Roboto';\r\n    background    : #4285f4;\r\n    display       : inline-block;\r\n    color         : #fff;\r\n    height        : 40px;\r\n    width         : 100%;\r\n    border        : none;\r\n    cursor        : pointer;\r\n    border-radius : 4px;\r\n    margin-bottom : 10px;\r\n}\r\n\r\n.login-module__loginPage--1TOvp button:hover {\r\n    background: #265eba;\r\n}\r\n\r\n.login-module__loginFormItem--zyZ25 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.login-module__forget_password--1UHZJ {\r\n    color          : #483f90;\r\n    text-decoration: none;\r\n}\r\n\r\n.login-module__forget_password--1UHZJ:hover {\r\n    color: #000;\r\n}\r\n\r\n.login-module__forgetPassword--2ZXMz {\r\n    /*display: none;*/\r\n    margin-top: 10px;\r\n}\r\n\r\n.login-module__resendotp--3hT7V {\r\n    color          : #483f90;\r\n    text-decoration: none;\r\n    float          : right;\r\n}\r\n\r\n.login-module__login_fied--1Z7af {\r\n    background: #fff;\r\n}\r\n\r\n:root {\r\n    --colour1: #483f90;\r\n    --colour2: #4285f4;\r\n    --speed  : 4s;\r\n}\r\n\r\n\r\n\r\n@keyframes login-module__slide--3icxF {\r\n    from {\r\n        background-position-x: 0;\r\n    }\r\n\r\n    to {\r\n        background-position-x: 113px;\r\n    }\r\n}\r\n\r\n.login-module__loader--3Cg8t {\r\n    display: none;\r\n}\r\n\r\n.login-module__bgloader--34Zs- {\r\n    position  : fixed;\r\n    z-index   : 1156;\r\n    left      : 0;\r\n    right     : 0;\r\n    bottom    : 0px;\r\n    top       : 0;\r\n    background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.login-module__loaderShow--33uyZ {\r\n    display        : flex;\r\n    justify-content: center;\r\n    align-items    : center;\r\n    position       : fixed;\r\n    z-index        : 99999999;\r\n\r\n    height   : 10px;\r\n    border   : 0;\r\n    padding  : 16px 0px;\r\n    top      : 50%;\r\n    left     : 50%;\r\n    transform: translate(-50%, -50%);\r\n    min-width: 300px;\r\n}\r\n\r\n.login-module__loaderShowbar--20bxL {\r\n    height       : 30px;\r\n    border-radius: 10px;\r\n    width        : 100%;\r\n\r\n    box-shadow      : 0px 10px 13px -6px rgba(44, 62, 80, 1);\r\n    background-color: var(--colour2);\r\n    background-image: repeating-linear-gradient(45deg,\r\n            transparent,\r\n            transparent 40px,\r\n            var(--colour1) 40px,\r\n            var(--colour1) 80px);\r\n\r\n    animation  : login-module__slide--3icxF var(--speed) linear infinite;\r\n    will-change: background-position;\r\n}\r\n\r\n\r\n\r\n/* Footer css */\r\n\r\n.login-module__Footerresult_page--3PKkS .login-module__footer_section_secure--38vX3 .login-module__footer_copyright--1Oflm {\r\n\r\n}\r\n\r\n.login-module__footerPowered--H7fDX {\r\n    padding: 5px 0;\r\n    background: #414661;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n}\r\n\r\n.login-module__footer_section--3iUg3 {\r\n   padding: 60px 0 30px;\r\n   background: #414661;\r\n   margin-bottom: -76px !important;\r\n}\r\n.login-module__footer_section_secure--38vX3{\r\n    padding: 20px 0 ;\r\n    background: #414661;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;    \r\n}\r\n.login-module__footer_section_secure--38vX3 .login-module__footer_copyright--1Oflm{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 0 !important;\r\n    width: 100%;\r\n}\r\n.login-module__footer_section_secure--38vX3 .login-module__footer_copyright--1Oflm img{width: 80%;}\r\n.login-module__get_in_touch--tATJV{\r\n    max-width: 900px !important;\r\n    margin: 0 auto;\r\n}\r\n.login-module__get_in_touch--tATJV h3{\r\n    font-weight: 500;\r\n    font-size: 40px;\r\n    line-height: 48px;\r\n    font-family: 'Inter';\r\n    color: #ffffff;\r\n    margin-bottom: 16px;\r\n}\r\n.login-module__get_in_touch--tATJV p{\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    font-family: 'Inter';\r\n    color: #ffffff;\r\n    margin-bottom: 30px;\r\n}\r\n.login-module__get_in_touch--tATJV form{\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n.login-module__get_in_touch--tATJV form input{\r\n    height: 42px;\r\n    padding: 16px;\r\n    border: 1px solid #ffffff8a;\r\n    width: 100%;\r\n    box-sizing: border-box;    \r\n    background-color: transparent;\r\n    color:#ffffff8a\r\n}\r\n.login-module__get_in_touch--tATJV form input:first-child{\r\n    border-radius: 60px 0px 0px 60px;\r\n}\r\n.login-module__get_in_touch--tATJV form input:nth-child(2){\r\n    border-radius: 0px 60px 60px 0px;\r\n}\r\n.login-module__get_in_touch--tATJV form input:hover,\r\n.login-module__get_in_touch--tATJV form input:focus{\r\n    box-shadow: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    color:#ffffff8a;\r\n    border: 1px solid #ffffff8a;\r\n}\r\n\r\n.login-module__icon_btn--3SYk6{\r\n    padding: 0 !important;\r\n    border-radius: 60px !important;\r\n    background: #4285f4;\r\n    border: 1px solid #4285f4;\r\n    height: 37px;\r\n    width: 37px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 2px;\r\n    right: 3px;\r\n}\r\n.login-module__icon_btn--3SYk6 img{\r\n    height: 36px;\r\n    width: 36px;\r\n}\r\n.login-module__footer_menu--1O7SQ{\r\n    margin-top: 60px !important;\r\n}\r\n.login-module__footer_menu--1O7SQ p{\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    line-height: 150%;\r\n    font-family: 'Inter';\r\n    margin-bottom: 16px;\r\n    color: #ffffff8a;\r\n}\r\n.login-module__footer_menu--1O7SQ ul{\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n.login-module__footer_menu--1O7SQ ul li{\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 150%;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n    margin-bottom: 16px;\r\n}\r\n.login-module__footer_menu--1O7SQ ul li a{text-decoration: none;color: #ffffff8a;}\r\n.login-module__footer_menu--1O7SQ ul li a:hover{\r\ncolor: #fff;\r\n}\r\n.login-module__footer_copyright--1Oflm{\r\n    margin-top: 60px !important;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.login-module__footer_copyright--1Oflm p{\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n    margin: 0 10px;\r\n}\r\n.login-module__footer_copyright--1Oflm a{\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #ffffff8a;\r\n    font-family: 'Inter';\r\n    margin: 0 10px;\r\n}\r\n.login-module__footer_copyright--1Oflm a:hover{color: #fff;}\r\n.login-module__mobile_menu--3qwep{\r\n    position: fixed;\r\n    background: #483f90;\r\n    z-index: 999;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    top:67px;\r\n    padding: 20px 30px;\r\n    border-top: 1px solid #fff;\r\n}\r\n.login-module__mobile_menu--3qwep ol{\r\n    list-style-type: none;\r\n    text-align: left;\r\n    padding:0px\r\n}\r\n.login-module__mobile_menu--3qwep ol li{\r\n    font-size: 20px;\r\n    line-height: 30px;\r\n    font-weight: 500;\r\n    font-family: 'Inter';\r\n    margin-bottom: 16px;\r\n}\r\n.login-module__mobile_menu--3qwep li a{color: rgb(255, 255, 255); text-decoration: none;}\r\n\r\n/* Account Verify css */\r\n.login-module__verify_page--I9Jap{\r\n   \r\n    text-align: center;\r\n    background-color: #473E8F;    \r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n        position: relative;\r\n        padding-bottom: 100px;\r\n\r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8::before{\r\n    content: \"\";\r\n    background-image: url("+a+');\r\n    background-size: contain;\r\n    background-position: right top;\r\n    position: absolute;\r\n    width: 500px;\r\n    height: 500px;\r\n    right: 0;\r\n    top: 0;\r\n    background-repeat: no-repeat;\r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8::after{\r\n    content: "";\r\n    background-image: url('+g+");\r\n    background-size: contain;\r\n    background-position: right top;\r\n    position: absolute;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-repeat: no-repeat;\r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8 h3{\r\n    font-size: 50px;\r\n    line-height: 56px;\r\n    font-family: 'Roboto';\r\n    margin-bottom: 15px;\r\n    color: #fff;\r\n    z-index: 99;\r\n    position: relative;\r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8 p{\r\n    font-size: 18px;\r\n    line-height: 26pxpx;\r\n    font-family: 'Roboto';\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    color: #fff;\r\n    z-index: 99;\r\n    position: relative;\r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8 a{\r\n    width: 204px;\r\n    height: 55px;\r\n    padding: 14px 24px 17px;\r\n    background: #4285F4;\r\n    border-radius: 100px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    line-height: 150%;\r\n}\r\n.login-module__verify_page--I9Jap .login-module__topbanner--2W7C8 a svg{margin-right: 8px;}\r\n.login-module__create_account_link--23-UW{\r\n    justify-content: space-between;\r\n    display: flex;\r\n}\r\n.login-module__create_account--3P8Y7{\r\n    color: #483f90;\r\n    text-decoration: none;\r\n}\r\n@media screen and (max-width:1100px) {\r\n    .login-module__menu_toggle--1ZtVr{display: block;}\r\n    .login-module__headerpart--2MuSi ul{display: none;}\r\n}\r\n@media screen and (max-width:576px) {\r\n    .login-module__headerpart--2MuSi{padding: 16px 16px 0;}\r\n}\r\n@media screen and (max-width:767px) {\r\n    .login-module__footer_section--3iUg3{padding: 60px 0 20px;}\r\n    .login-module__footer_menu--1O7SQ{margin-top: 30px !important;}\r\n    .login-module__footer_menu--1O7SQ, .login-module__footer_menu--1O7SQ ul{\r\n        text-align: center;\r\n    }\r\n    .login-module__footer_menu--1O7SQ ul li{\r\n        margin-bottom: 12px;\r\n    }\r\n    .login-module__footer_menu--1O7SQ p{\r\n        margin-bottom: 12px;\r\n        margin-top: 20px;\r\n    }\r\n    .login-module__footer_copyright--1Oflm p{font-size: 14px; line-height: 20px;}\r\n    .login-module__footer_copyright--1Oflm a{font-size: 14px; line-height: 20px;}\r\n    .login-module__footer_section_secure--38vX3 .login-module__footer_copyright--1Oflm{display: block; text-align: center;}\r\n    .login-module__footer_section_secure--38vX3 .login-module__footer_copyright--1Oflm img{width: 40%; margin-bottom: 12px;}\r\n    .login-module__footer_section_secure--38vX3 .login-module__footer_copyright--1Oflm p{line-height: 24px;}\r\n    .login-module__footer_section_secure--38vX3{\r\n        position: initial;\r\n    }\r\n}\r\n\r\n.login-module__NotificationContainer--2t314{\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #483f90;\r\n    display: flex;\r\nalign-items: center;   \r\njustify-content: center; \r\n/* z-index: 222; */\r\n/* position: fixed; */\r\n}\r\n\r\n.login-module__NotificationContainer--2t314 > h4{\r\n    color: white;\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n}",""]),r.locals={container:"login-module__container--3oO2u",formContainer:"login-module__formContainer--3jFsP",headermain:"login-module__headermain--22Skv",headerpart:"login-module__headerpart--2MuSi",menu_signbtn:"login-module__menu_signbtn--YbcpR",menu_startbtn:"login-module__menu_startbtn--2EBA4",menu_toggle:"login-module__menu_toggle--1ZtVr",drop_toggle:"login-module__drop_toggle--2HvHj","dropdown-menu":"login-module__dropdown-menu--17zrw",error:"login-module__error--1_fzH",loginForm:"login-module__loginForm--3vkv-",loginFormItem:"login-module__loginFormItem--zyZ25",loginPage:"login-module__loginPage--1TOvp",logo_header:"login-module__logo_header--22tLG",forget_password:"login-module__forget_password--1UHZJ",forgetPassword:"login-module__forgetPassword--2ZXMz",resendotp:"login-module__resendotp--3hT7V",login_fied:"login-module__login_fied--1Z7af",loader:"login-module__loader--3Cg8t",bgloader:"login-module__bgloader--34Zs-",loaderShow:"login-module__loaderShow--33uyZ",loaderShowbar:"login-module__loaderShowbar--20bxL",slide:"login-module__slide--3icxF",Footerresult_page:"login-module__Footerresult_page--3PKkS",footer_section_secure:"login-module__footer_section_secure--38vX3",footer_copyright:"login-module__footer_copyright--1Oflm",footerPowered:"login-module__footerPowered--H7fDX",footer_section:"login-module__footer_section--3iUg3",get_in_touch:"login-module__get_in_touch--tATJV",icon_btn:"login-module__icon_btn--3SYk6",footer_menu:"login-module__footer_menu--1O7SQ",mobile_menu:"login-module__mobile_menu--3qwep",verify_page:"login-module__verify_page--I9Jap",topbanner:"login-module__topbanner--2W7C8",create_account_link:"login-module__create_account_link--23-UW",create_account:"login-module__create_account--3P8Y7",NotificationContainer:"login-module__NotificationContainer--2t314"},n.exports=r},4625:function(n,r,o){"use strict";o.r(r),r.default=o.p+"images/Frame.0603fdf64ba9b95955bab5afae9683ea.png"},6456:function(n,r,o){"use strict";o.r(r),r.default=o.p+"images/Subtract.9f7cfb16b4c8f8a2ed6fe557c2a4eca8.png"},3842:function(n,r,o){var e=o(7914);"string"==typeof e&&(e=[[n.id,e,""]]);o(6723)(e,{hmr:!0,transform:void 0,insertInto:void 0}),e.locals&&(n.exports=e.locals)}}]);