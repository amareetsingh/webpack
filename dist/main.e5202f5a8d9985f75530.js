"use strict";(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[7246],{8725:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(3727),l=a(5368),c=a.n(l),o=a(682),s=a(4051),m=a.p+"images/footerlogo.2b70c0451bc240feff0ad0275130bef7.png",i=function(e){return r.createElement(r.Fragment,null,2===e.type?r.createElement(r.Fragment,null,r.createElement("p",{className:c().footerPowered},"powered by Evalinator")):r.createElement("footer",{className:c().footer_section_secure},r.createElement(o.Z,null,r.createElement(s.Z,null,r.createElement("div",{className:c().footer_copyright},r.createElement(n.rU,{to:"/"},r.createElement("img",{src:m,alt:"logo"})," "),r.createElement("p",null,"Evalinator ©2023"),r.createElement("div",null,r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.evalinator.com/privacy-policy/"},"Privacy Policy"),r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.evalinator.com/terms-of-use/"},"Terms of Use")))))))}},4772:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(885),n=a(7294),l=a(5977),c=a(3727),o=a(5368),s=a.n(o),m=a(9035),i=a.n(m),u=a.p+"images/Evalinator_logo.467273d4416119ea2fe5725164ca0314.png",E=a(7708),d=a(682),g=a(4286),f=a(4873),p=a(7625),v=a(1436),h=a(9252),w=a(1468),N=function(e){var t=e.loader,a=void 0!==t&&t,o=e.reloader,m=void 0===o?0:o,N=(0,E.Ah)(),b=(0,E.F_)(),Z=(0,n.useState)(b),_=(0,r.Z)(Z,2),S=_[0],U=_[1],k=(0,n.useState)(!1),y=(0,r.Z)(k,2),F=y[0],C=y[1],P=(0,l.useHistory)();return(0,n.useEffect)((function(){localStorage.getItem("currentUser")&&U(JSON.parse(localStorage.getItem("currentUser")))}),[m]),n.createElement(n.Fragment,null,n.createElement(h.Z,{loader:a}),n.createElement("div",{className:s().headermain},n.createElement(d.Z,null,""===b.token?n.createElement("header",{className:s().headerpart},n.createElement(c.rU,{to:"/"},n.createElement("img",{src:u,alt:"logo"})," "),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"https://www.evalinator.com/"},"Home")),n.createElement("li",null,n.createElement(c.rU,{to:"/pricing"},"Pricing ")),n.createElement("li",null,n.createElement(c.rU,{to:"/"},"Login")),n.createElement("li",{className:s().menu_startbtn},n.createElement(c.rU,{to:"/pricing"},"Start Free Trial"))),n.createElement("button",{className:s().menu_toggle,onClick:function(){C(!F)}},n.createElement(p.G,{icon:v.xiG})),F&&n.createElement("div",{className:s().mobile_menu},n.createElement("ol",null,n.createElement("li",null,n.createElement("a",{href:"https://www.evalinator.com/"},"Home")),n.createElement("li",null,n.createElement(c.rU,{to:"/pricing"},"Pricing ")),n.createElement("li",null,n.createElement(c.rU,{to:"/"},"Resources")),n.createElement("li",null,n.createElement(c.rU,{to:"/"},"Login")),n.createElement("li",{className:s().menu_startbtn},n.createElement(c.rU,{to:"/pricing"},"Start Free Trial"))))):n.createElement("header",{className:i().dashboard_header},n.createElement("div",{className:i().container},n.createElement(c.rU,{to:"/"},n.createElement("img",{src:u,alt:"logo"})," "),n.createElement("div",{className:i().profile_right},n.createElement(g.Z,null,n.createElement(g.Z.Toggle,{className:i().user_btn,id:"dropdown-basic"},n.createElement("img",{src:!1!==w.xj.awsBucketImage(S&&S.oUser&&S.oUser.m_oMedia)?w.xj.awsBucketImage(S&&S.oUser&&S.oUser.m_oMedia):f.Z,alt:"profile pic"}),n.createElement("p",null,S&&S.FirstName)),n.createElement(g.Z.Menu,{className:i().logout},n.createElement("button",{className:i().logoutBtn,onClick:function(){P.push("/profile")}},n.createElement(p.G,{icon:v.ILF}),"Profile"),n.createElement("button",{className:i().logoutBtn,onClick:function(){(0,E.kS)(N),P.push("/login")}},n.createElement(p.G,{icon:v.jLD}),"Logout")))))))))}},6687:function(e,t,a){var r=a(7294),n=a(7315),l=a(7625);t.Z=function(e){var t=e.showtoast,a=e.toggleShowToast,c=e.bgclass,o=e.status,s=e.message,m=e.toasticon;return r.createElement(r.Fragment,null,r.createElement(n.Z,{delay:3e3,autohide:!0,className:c,show:t,onClose:a},r.createElement(n.Z.Header,{style:{color:"#fff"},className:c},r.createElement("div",{className:"toast-inner"},r.createElement(l.G,{icon:m,size:"lg"}),r.createElement("div",null,r.createElement("p",null,o),r.createElement("p",null,s))))))}},7246:function(e,t,a){a.r(t);var r=a(5861),n=a(885),l=a(4687),c=a.n(l),o=a(7294),s=a(7708),m=a(5368),i=a.n(m),u=a(3727),E=a(5977),d=a(8725),g=a(4772),f=a(1468),p=a(6687),v=a(1436),h=a(7625),w=a(6024),N=a(2058);t.default=function(e){var t=(0,E.useLocation)().pathname,a=(0,o.useState)(""),l=(0,n.Z)(a,2),m=l[0],b=l[1],Z=(0,o.useState)(""),_=(0,n.Z)(Z,2),S=_[0],U=_[1],k=(0,o.useState)(!1),y=(0,n.Z)(k,2),F=y[0],C=y[1],P=(0,o.useState)(!1),x=(0,n.Z)(P,1)[0],I=(0,s.Ah)(),T=(0,o.useState)(!1),L=(0,n.Z)(T,2),G=L[0],A=L[1],B=(0,o.useState)({id:0,status:!1}),H=(0,n.Z)(B,1)[0],j=(0,o.useState)("Wrong Credentials"),D=(0,n.Z)(j,2),O=D[0],q=D[1],M=(0,s.F_)().loading,z=(0,o.useState)(!1),J=(0,n.Z)(z,2),R=J[0],V=J[1],W=(0,o.useState)(!1),K=(0,n.Z)(W,2),Q=K[0],X=K[1];(0,o.useEffect)((function(){window.scrollTo(0,0)}),[t]);var Y=function(){var t=(0,r.Z)(c().mark((function t(a){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,V(!0),t.next=5,(0,s.pH)(I,{email:m,password:S});case 5:r=t.sent,n=JSON.parse(r),!1!==r&&!1!==r.status?(V(!1),1!=n.oUser.m_oUserAccount.m_nAccountStatus?e.history.push("/profile"):e.history.push("/login-redirect")):(V(!1),q("Invalid UserName and Password"),A(!0)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),V(!1);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}(),$=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.next=3,f.xj.post("User/forgot",{szEmail:m});case 3:!1!==(t=e.sent)&&!1!==t.status?200===t.data.data.statusCode?X(!0):A(!0):(q(t.data.data.result),A(!0)),V(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.createElement(o.Fragment,null,o.createElement(g.Z,{loader:R}),o.createElement("div",{className:i().container},o.createElement("div",null,o.createElement("div",{className:i().logo_header},o.createElement("h1",null,"Interactive assessments for experts"),o.createElement("p",null,"Sell and engage as an expert should. Generate more leads and upgrade every customer touchpoint into a conversation.")),o.createElement("div",{className:i().loginPage},o.createElement("form",null,!1===F?o.createElement("div",{className:i().login_fied},o.createElement("div",{className:i().loginForm},o.createElement("div",{className:i().loginFormItem},o.createElement("label",{htmlFor:"email"},"Username"),o.createElement("input",{type:"text",id:"email",value:m,onChange:function(e){return b(e.target.value)},disabled:M}),o.createElement(h.G,{icon:w.ILF}),H&&1===H.id&&o.createElement("p",{className:"error errcont"},"Please fill required field!")),o.createElement("div",{className:i().loginFormItem},o.createElement("label",{htmlFor:"password"},"Password"),o.createElement("input",{type:"password",id:"password",value:S,onChange:function(e){return U(e.target.value)},disabled:M}),o.createElement("img",{src:N.Z,alt:"password-icon"}),H&&2===H.id&&o.createElement("p",{className:"error errcont"},"Please fill required field!"))),o.createElement("button",{onClick:Y,disabled:M},"login"),o.createElement("div",{className:i().create_account_link},o.createElement(u.rU,{to:"/",onClick:function(e){e.preventDefault(),C(!0)},className:i().forget_password},"Forgot your password?"),o.createElement(u.rU,{to:"/pricing",className:i().create_account},"Create your account"))):o.createElement("div",{className:i().forgetPassword},o.createElement("div",{className:i().loginForm},o.createElement("div",{className:i().loginFormItem},o.createElement("label",{htmlFor:"email"},"Email Address"),o.createElement("input",{type:"text",onChange:function(e){return b(e.target.value)},disabled:M}),o.createElement(h.G,{icon:w.ILF}),H&&1===H.id&&o.createElement("p",{className:"error errcont"},"Please fill required field!")),!0===x&&o.createElement("div",{className:i().loginFormItem},o.createElement("label",null,"One Time Password"),o.createElement(u.rU,{to:"/",className:i().resendotp},"Resend"),o.createElement("input",{type:"text",onChange:function(e){return U(e.target.value)},disabled:M}),o.createElement("img",{src:N.Z,alt:"password-icon"}))),o.createElement("button",{disabled:M,onClick:function(){$()},type:"button"},!0===x?"Verify OTP":"Submit"),o.createElement(u.rU,{to:"/",onClick:function(e){e.preventDefault(),C(!1)},className:i().forget_password},"Back to Login"))))),o.createElement(p.Z,{showtoast:Q,toggleShowToast:function(){return X(!Q)},bgclass:"success",status:"Success",message:"Email sent Successfully!!",toasticon:v.f8k}),o.createElement(p.Z,{showtoast:G,toggleShowToast:function(){return A(!G)},bgclass:"danger",status:"Error",message:O,toasticon:v.gPx})),o.createElement(d.Z,null))}},2058:function(e,t,a){t.Z=a.p+"images/lock.ebdfc1c0aa2675a84cdfba381718e674.png"}}]);