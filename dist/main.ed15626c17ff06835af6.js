(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[1624],{8725:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),a=n(3727),l=n(5368),o=n.n(l),c=n(682),i=n(4051),m=n.p+"images/footerlogo.2b70c0451bc240feff0ad0275130bef7.png",s=function(e){return r.createElement(r.Fragment,null,2===e.type?r.createElement(r.Fragment,null,r.createElement("p",{className:o().footerPowered},"powered by Evalinator")):r.createElement("footer",{className:o().footer_section_secure},r.createElement(c.Z,null,r.createElement(i.Z,null,r.createElement("div",{className:o().footer_copyright},r.createElement(a.rU,{to:"/"},r.createElement("img",{src:m,alt:"logo"})," "),r.createElement("p",null,"Evalinator ©2023"),r.createElement("div",null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.evalinator.com/privacy-policy/"},"Privacy Policy"),r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.evalinator.com/terms-of-use/"},"Terms of Use")))))))}},4772:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(885),a=n(7294),l=n(5977),o=n(3727),c=n(5368),i=n.n(c),m=n(9035),s=n.n(m),u=n.p+"images/Evalinator_logo.467273d4416119ea2fe5725164ca0314.png",g=n(7708),p=n(682),E=n(4286),f=n(4873),h=n(7625),d=n(1436),b=n(9252),v=n(1468),k=function(e){var t=e.loader,n=void 0!==t&&t,c=e.reloader,m=void 0===c?0:c,k=(0,g.Ah)(),x=(0,g.F_)(),y=(0,a.useState)(x),_=(0,r.Z)(y,2),w=_[0],N=_[1],U=(0,a.useState)(!1),Z=(0,r.Z)(U,2),F=Z[0],S=Z[1],L=(0,l.useHistory)();return(0,a.useEffect)((function(){localStorage.getItem("currentUser")&&N(JSON.parse(localStorage.getItem("currentUser")))}),[m]),a.createElement(a.Fragment,null,a.createElement(b.Z,{loader:n}),a.createElement("div",{className:i().headermain},a.createElement(p.Z,null,""===x.token?a.createElement("header",{className:i().headerpart},a.createElement(o.rU,{to:"/"},a.createElement("img",{src:u,alt:"logo"})," "),a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{href:"https://www.evalinator.com/"},"Home")),a.createElement("li",null,a.createElement(o.rU,{to:"/pricing"},"Pricing ")),a.createElement("li",null,a.createElement(o.rU,{to:"/"},"Login")),a.createElement("li",{className:i().menu_startbtn},a.createElement(o.rU,{to:"/pricing"},"Start Free Trial"))),a.createElement("button",{className:i().menu_toggle,onClick:function(){S(!F)}},a.createElement(h.G,{icon:d.xiG})),F&&a.createElement("div",{className:i().mobile_menu},a.createElement("ol",null,a.createElement("li",null,a.createElement("a",{href:"https://www.evalinator.com/"},"Home")),a.createElement("li",null,a.createElement(o.rU,{to:"/pricing"},"Pricing ")),a.createElement("li",null,a.createElement(o.rU,{to:"/"},"Resources")),a.createElement("li",null,a.createElement(o.rU,{to:"/"},"Login")),a.createElement("li",{className:i().menu_startbtn},a.createElement(o.rU,{to:"/pricing"},"Start Free Trial"))))):a.createElement("header",{className:s().dashboard_header},a.createElement("div",{className:s().container},a.createElement(o.rU,{to:"/"},a.createElement("img",{src:u,alt:"logo"})," "),a.createElement("div",{className:s().profile_right},a.createElement(E.Z,null,a.createElement(E.Z.Toggle,{className:s().user_btn,id:"dropdown-basic"},a.createElement("img",{src:!1!==v.xj.awsBucketImage(w&&w.oUser&&w.oUser.m_oMedia)?v.xj.awsBucketImage(w&&w.oUser&&w.oUser.m_oMedia):f.Z,alt:"profile pic"}),a.createElement("p",null,w&&w.FirstName)),a.createElement(E.Z.Menu,{className:s().logout},a.createElement("button",{className:s().logoutBtn,onClick:function(){L.push("/profile")}},a.createElement(h.G,{icon:d.ILF}),"Profile"),a.createElement("button",{className:s().logoutBtn,onClick:function(){(0,g.kS)(k),L.push("/login")}},a.createElement(h.G,{icon:d.jLD}),"Logout")))))))))}},1624:function(e,t,n){"use strict";n.r(t);var r=n(885),a=n(7294),l=n(2315),o=n.n(l),c=n(8725),i=n(4772),m=n(682),s=n(4051),u=n(5977),g=n(3727),p=n(7625),E=n(1436);t.default=function(e){var t=(0,a.useState)(!1),n=(0,r.Z)(t,2),l=n[0],f=n[1],h=(0,a.useState)("false"),d=(0,r.Z)(h,2),b=d[0],v=d[1],k=(0,u.useLocation)();return(0,a.useEffect)((function(){localStorage.getItem("currentUser")&&f(!0);var e=k.search,t=new URLSearchParams(e).get("success");""!==t&&""!==t&&v(t)}),[b]),a.createElement(a.Fragment,null,a.createElement(i.Z,null),a.createElement("div",{className:o().thankyou_page},a.createElement(m.Z,{fluid:!0},a.createElement(s.Z,null,a.createElement("div",{className:o().topbanner},a.createElement("div",{className:o().thankinner},b&&"true"==b&&a.createElement(a.Fragment,null,a.createElement("h3",null,"You have successfully subscribed!")),b&&"false"==b&&a.createElement(a.Fragment,null,a.createElement("h3",null,"You were not subscribed successfully."),a.createElement("p",null,"Please check your email to activate your account and login. You can then subscribe from your profile section. ")),l?a.createElement(g.rU,{to:""},a.createElement(p.G,{icon:E.acZ}),"Back to Home"):a.createElement(g.rU,{to:""},"Go to Login")))))),a.createElement(c.Z,null))}},7457:function(e,t,n){var r=n(3645),a=n(1667),l=n(8993),o=n(9760);t=r(!1);var c=a(l),i=a(o);t.push([e.id,'.thankyou_page{\r\n   \r\n    text-align: center;\r\n    background-color: #473E8F;    \r\n}\r\n.thankyou_page .topbanner{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n        position: relative;\r\n        padding-bottom: 100px;\r\n}\r\n.thankyou_page .topbanner::before{\r\n    content: "";\r\n    background-image: url('+c+');\r\n    background-size: contain;\r\n    background-position: right top;\r\n    position: absolute;\r\n    width: 500px;\r\n    height: 500px;\r\n    right: 0;\r\n    top: 0;\r\n    background-repeat: no-repeat;\r\n}\r\n.thankyou_page .topbanner::after{\r\n    content: "";\r\n    background-image: url('+i+");\r\n    background-size: contain;\r\n    background-position: right top;\r\n    position: absolute;\r\n    width: 300px;\r\n    height: 200px;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-repeat: no-repeat;\r\n}\r\n.thankyou_page .topbanner h3{\r\n    font-size: 50px;\r\n    line-height: 62px;\r\n    font-family: 'Roboto';\r\n    margin-bottom: 20px;\r\n    color: #fff;\r\n    z-index: 99;\r\n    position: relative;\r\n}\r\n.thankyou_page .topbanner p{\r\n    font-size: 18px;\r\n    line-height: 26pxpx;\r\n    font-family: 'Roboto';\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    color: #fff;\r\n    z-index: 99;\r\n    position: relative;\r\n}\r\n.thankyou_page .topbanner a{\r\n    width: 204px;\r\n    height: 55px;\r\n    padding: 14px 24px 17px;\r\n    background: #4285F4;\r\n    border-radius: 100px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    font-size: 18px;\r\n    line-height: 150%;\r\n}\r\n.thankyou_page .topbanner a svg{margin-right: 8px;}",""]),e.exports=t},2315:function(e,t,n){var r=n(7457);"string"==typeof r&&(r=[[e.id,r,""]]);n(6723)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)}}]);