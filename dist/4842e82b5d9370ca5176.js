(self.webpackChunklogin_auth=self.webpackChunklogin_auth||[]).push([[9853],{9853:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r,a=n(885),o=n(7294),i=n(9263),l=n.n(i),s=n(5471),c=n(581),m=n(682),u=n(5005),p=n(1330),d=n(4051),g=n(1555),f=n.p+"images/Settings.1f36a4c14798668a36b521186d9f08bd.svg",h=n.p+"images/Swipe.725f2134f72ce2b498dee97237e2bca2.svg",_=n.p+"images/Trending.e380e88fe663b773f6cd7cf9a37ab3ff.svg",w=n(2982),y=n(5861),E=n(4687),b=n.n(E),x=n(5611),k=n(168),v=n(8408).ZP.p(r||(r=(0,k.Z)(["\n  text-align: center;\n  margin-top: 10px;\n  color: #f00;\n"]))),N=function(e){var t=e.errorMessage;return o.createElement(v,null,t)},q=n(9009),z=n.n(q),Z=n(1436),S=n(7708),Y=n(4486),P=function(){var e=(0,y.Z)(b().mark((function e(t,n,r){var a;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:n,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r)});case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),C=(n.p,n(4012)),L=n(4942),B=n(6912),I=n(3314),T=(n(2052),n(3727)),O=n(7625),R=n(6024),F=n(1299),J=n(1468),j=n(6090);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,L.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){(0,o.useRef)(null);var t=(0,S.F_)(),n={szFirstName:"",szLastName:"",szEmail:Boolean(t.token)?t.email:"",szPassword:"",bPrivacy:!1,bTerms:!1,szCaptcha:"string",szClientIP:"string",szStripePriceId:"STARTER"},r={priceIdentifier:"STARTER",szCaptcha:"string",szEmail:Boolean(t.token)?t.email:""},i=(0,o.useState)(!1),s=(0,a.Z)(i,2),c=s[0],m=s[1],p=(0,o.useState)(!1),d=(0,a.Z)(p,2),g=d[0],f=d[1],h=(0,o.useState)(""),_=(0,a.Z)(h,2),w=_[0],E=_[1],x=(0,o.useState)({}),k=(0,a.Z)(x,2),v=k[0],N=k[1],q=(0,o.useState)(n),Z=(0,a.Z)(q,2),Y=Z[0],P=Z[1],L=(0,o.useState)(""),Q=(0,a.Z)(L,2),U=Q[0],G=Q[1],A=function(){var t=(0,y.Z)(b().mark((function t(n){var a,o,i,l,s;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(n),r.priceIdentifier=n,t.next=4,(0,j.zD)(C.id);case 4:return a=t.sent,t.next=7,a.execute();case 7:return o=t.sent,r.szCaptcha=o,G(""),e.setLoader(!0),t.next=13,J.xj.post("Payment/getStripeSession",r);case 13:if(i=t.sent,m(!1),e.setLoader(!1),!1===i.status){t.next=23;break}if(200===i.data.data.statusCode){t.next=20;break}return G(i.data.data.result),t.abrupt("return");case 20:l=JSON.parse(i.data.data.result),""!=(s=l&&l.stripeSessionURL?l.stripeSessionURL:"")&&(window.location=s);case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=(0,y.Z)(b().mark((function t(n){var r,a,o,i,l,s;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,j.zD)(C.id);case 2:return r=t.sent,t.next=5,r.execute();case 5:if(a=t.sent,Y.szCaptcha=a,!c){t.next=9;break}return t.abrupt("return");case 9:if(o=J.xj.validateError(Y),!1===Y.bPrivacy&&(o.bPrivacy=!0),!1===Y.bTerms&&(o.bTerms=!0),Y.szStripePriceId=w,!(Object.keys(o).filter((function(e){return!0===o[e]})).length>0)){t.next=18;break}return N(o),t.abrupt("return");case 18:N({});case 19:return m(!0),G(""),e.setLoader(!0),t.next=24,J.xj.post("User/registerUser",Y);case 24:if(i=t.sent,m(!1),e.setLoader(!1),!1===i.status){t.next=36;break}if(200===i.data.data.statusCode){t.next=31;break}return G(i.data.data.result),t.abrupt("return");case 31:l=JSON.parse(i.data.data.result),s=l&&l.stripeSessionURL?l.stripeSessionURL:"",window.location=""!=s?s:"/thank-you",t.next=44;break;case 36:if(!(i.error&&i.error.response&&401===i.error.response.status&&localStorage.getItem("currentUser"))){t.next=43;break}return localStorage.removeItem("currentUser"),localStorage.removeItem("token"),window.location="/login",t.abrupt("return");case 43:G(i.data.data.result);case 44:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){Boolean(t.token)&&P(W(W({},Y),{},{szEmail:Boolean(t.token)?t.email:""}))}),[t]),o.createElement(o.Fragment,null,!Boolean(t.token)&&!1===e.product.waiting&&o.createElement(u.Z,{className:l().btntrial,onClick:function(t){var n;n=e.product.name,f(!0),E(n)}},"Subscribe"),Boolean(t.token)&&!1===e.product.waiting&&o.createElement(u.Z,{className:l().btntrial,onClick:function(t){A(e.product.name)}},"Subscribe"),o.createElement(B.Z,{show:g,onHide:f,className:z().modalTemplete,size:"md"},o.createElement(I.Z,{method:"post"},o.createElement(B.Z.Body,{className:z().modalBody},o.createElement("h4",null,"Sign up for an account"),o.createElement("p",{className:z().modeltxt},"Already have an account?",o.createElement(T.rU,{to:"/"},"Log In")),o.createElement(I.Z.Group,{className:z().modalinput,controlId:"exampleForm.ControlInput1"},o.createElement(I.Z.Control,{type:"text",placeholder:"First Name",onChange:function(e){P(W(W({},Y),{},{szFirstName:e.target.value}))}}),o.createElement(O.G,{icon:R.ILF}),v&&v.hasOwnProperty("szFirstName")&&o.createElement("p",{className:"error errcont"},"Please fill required field!")),o.createElement(I.Z.Group,{className:z().modalinput,controlId:"exampleForm.ControlInput2"},o.createElement(I.Z.Control,{type:"text",placeholder:"Last Name",onChange:function(e){P(W(W({},Y),{},{szLastName:e.target.value}))}}),o.createElement(O.G,{icon:R.ILF}),v&&v.hasOwnProperty("szLastName")&&o.createElement("p",{className:"error errcont"},"Please fill required field!")),o.createElement(I.Z.Group,{className:z().modalinput,controlId:"exampleForm.ControlInput3"},o.createElement(I.Z.Control,{type:"text",placeholder:"Email",onChange:function(e){P(W(W({},Y),{},{szEmail:e.target.value}))}}),o.createElement(O.G,{icon:R.FU$}),v&&v.hasOwnProperty("szEmail")&&o.createElement("p",{className:"error errcont"},"Please fill required field!")),o.createElement(I.Z.Group,{className:z().modalinput,controlId:"exampleForm.ControlInput4"},o.createElement(I.Z.Control,{type:"password",placeholder:"Password",onChange:function(e){P(W(W({},Y),{},{szPassword:e.target.value}))}}),o.createElement("img",{src:F.Z}),v&&v.hasOwnProperty("szPassword")&&o.createElement("p",{className:"error errcont"},"Please fill required field!"),o.createElement("p",{className:z().passHint},'Password must be longer than 8 characters, and must contain at least 1 uppercase letter and 1 special character such as - ! " $ % ^ @')),o.createElement("div",{className:z().modalinput},o.createElement(I.Z.Group,{className:z().registraioncheckbox,controlId:"exampleForm.ControlInput5"},o.createElement(I.Z.Control,{type:"checkbox",onChange:function(e){P(W(W({},Y),{},{bPrivacy:e.target.checked}))}}),o.createElement("label",null,"I have read and agree with the ",o.createElement("a",{href:"/"},"privacy policy"))),v&&v.hasOwnProperty("bPrivacy")&&o.createElement("p",{className:"error errcont"},"Please accept Privacy & Policy!")),o.createElement("div",{className:z().modalinput},o.createElement(I.Z.Group,{className:z().registraioncheckbox,controlId:"exampleForm.ControlInput6"},o.createElement(I.Z.Control,{type:"checkbox",onChange:function(e){P(W(W({},Y),{},{bTerms:e.target.checked}))}}),o.createElement("label",null,"I have read and agree with the"," ",o.createElement("a",{href:"/"},"Terms & Condition"))),v&&v.hasOwnProperty("bTerms")&&o.createElement("p",{className:"error errcont"},"Please accept Terms & Condition!")),""!==U&&o.createElement("p",{className:z().stripeerror},U),o.createElement(u.Z,{variant:"primary",type:"button",onClick:H},"Continue")))))},G=n(6687),A=(0,x.qP)((function(e){var t,n=function(e){var t=o.useState(e),n=(0,a.Z)(t,2),r=n[0],i=n[1];return{error:r,showError:function(e){i(e),window.setTimeout((function(){i(null)}),3e3)}}}(null),r=n.error,i=n.showError,l=(0,S.F_)(),s=(0,o.useState)(!1),c=(0,a.Z)(s,2),m=c[0],u=c[1],p=(0,o.useState)(!1),g=(0,a.Z)(p,2),f=g[0],h=g[1],_=function(){return u(!m)},E=function(){return h(!f)},x=(0,o.useState)(""),k=(0,a.Z)(x,2),v=k[0],q=k[1],L=function(){var t=(0,y.Z)(b().mark((function t(){var n,r,a,o,s,c=arguments;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:{},r=c.length>1&&void 0!==c[1]?c[1]:"",e.setLoader(!0),a={stripeToken:n.id,stripeEmail:n.email,stripeBillingName:n.card.name,szReferral:(0,J.sM)(),productPlan:r},t.next=6,P(C.v+"Payment/createSubscription","POST",a).catch((function(e){i(e.message)}));case 6:o=t.sent,e.setLoader(!1),200===o.statusCode?(Boolean(l.token)?((s=JSON.parse(localStorage.getItem("currentUser"))).oUser.m_oUserAccount.m_nAccountStatus=1,localStorage.setItem("currentUser",JSON.stringify(s)),q("Successfully Subscribed your account!!")):q("Successfully Created your account!!"),u(!0),window.location="/thank-you"):(q(o.result),h(!0));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o.createElement("div",null,o.createElement(d.Z,{className:z().display_product},(t=Y.je)&&t.length?(Math.max.apply(Math,(0,w.Z)(t.map((function(e){return e.featuresList.length})))),o.createElement(o.Fragment,null,o.createElement("br",null),o.createElement("br",null),o.createElement("div",{className:z().comparison,style:{marginTop:"-50px"}},o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",{colspan:"4",className:z().qbo},o.createElement("h3",null,o.createElement("strong",null,"Free 14 Day Trial. Personalized Support. See Our Guided Plan Below.")))),o.createElement("tr",null,o.createElement("th",{className:z().tl}),t.map((function(e,t){return o.createElement(o.Fragment,null,""!=e.id&&o.createElement("th",{className:z().compareheading,style:{backgroundColor:(e.highlighted,"")}},e.name))}))),o.createElement("tr",null,o.createElement("th",null,"Price per month",o.createElement("br",null),"(After 14 day trial)"),t.map((function(e,t){return o.createElement(o.Fragment,null,""!=e.id&&o.createElement("th",{className:z().priceinfo},o.createElement("div",{className:z().pricewas},"$",e.original),o.createElement("div",{className:z().pricenow},o.createElement("span",null,"$",e.pricelarge,o.createElement("span",{className:z().pricesmall},".",e.pricesmall))),o.createElement("div",{className:z().pricetry},o.createElement("span",{className:z().hidemobile},e.desc))))})))),o.createElement("tbody",null,t[0].featuresList.map((function(e,n){return o.createElement(o.Fragment,null,o.createElement("tr",null,o.createElement("td",null),o.createElement("td",{colspan:"4",title:""})),o.createElement("tr",{key:n,className:n%2==0?z().comparerow:z().noncomparerow},t.map((function(e,t){return o.createElement("td",{key:t},"Y"==e.featuresList[n]?o.createElement("span",{className:z().tickblue},"✓ "):e.featuresList[n])}))))}))),o.createElement("tr",null,o.createElement("th",null,o.createElement("br",null),o.createElement("small",null,"Your credit card will NOT be charged until after the free trial. We'll also notify you before trial ends."),o.createElement("br",null)),t.map((function(t,n){return o.createElement(o.Fragment,null,""!=t.id&&o.createElement("th",null,o.createElement(G.Z,{showtoast:m,toggleShowToast:_,bgclass:"success",status:"Success",message:v,toasticon:Z.f8k}),o.createElement(G.Z,{showtoast:f,toggleShowToast:E,bgclass:"danger",status:"Error",message:v,toasticon:Z.gPx}),o.createElement(U,{setLoader:e.setLoader,product:t,subscribeToProductPlan:L})))}))))))):"No existing product plans"),r&&o.createElement(N,{errorMessage:r}))})),H=n(9687),D=function(e){return o.createElement("div",{className:"price_faq"},o.createElement(H.Z,{defaultActiveKey:"0",className:l().faq_box},o.createElement(H.Z.Item,{eventKey:"0",className:l().faq_item},o.createElement(H.Z.Header,{className:l().faq_header},e.title),o.createElement(H.Z.Body,{className:l().faq_body},e.content))))},M=[{title:"What is Evalinator?",content:"Evalinator is an insights-led consultative selling platform. Think of Evalinator as a 3-in-1 benefits and features package 1) lead generation, 2) personalize your sales pursuits and client interactions, and 3) grow your clients accounts systematically."},{title:"How long does it take to get started?",content:"If you use our predefined templates such as a Wheel of Life or a Business Assessment, you can customize and get started in as little as 30 minutes. Creating a custom assessment will need at least a few days as you analyze your target audience and how you want to engage them."},{title:"Can you help me create my assessment or quiz?",content:"Yes, we are always here to help. You can also sign up for our guided plan (paid) and we will analyze your audience, your solutions & services, and custom create your assessment for you. Then you can put the finishing touches, approve it, and get ready to launch!"},{title:"Can we edit our assessments?",content:"Yes, you can edit your assessment or quiz as many times as you need to. Your first iteration is not set in stone."},{title:"Are all features available during the trial?",content:"Yes, all features are available for the trial period."},{title:"What happens if I decide NOT to continue after the trial?",content:"If you decide not to continue after the trial period, you can simply cancel your subscription online. The assessment may not be available to use  after your subscription has ended."},{title:"Can I host on my own website?",content:"Yes you can! That is often the best experience for your clients. You can always use the URL we provide you with to begin engaging your clients immediately."},{title:"Can I have my lead capture form?",content:"Yes, that comes with all plans. You can have the lead capture form at the beginning or at the end of the quiz. You can also have the emails be verified by sending a code by email before the user can proceed."},{title:"What email marketing integrations are available?",content:"Email address collection and integrations are available for all plans. Evalinator will automatically send contact information to the email marketing platform that you choose. We integrate through the Zapier ecosystem that is connected to most marketing automation and CRM platforms. You can also choose to send the information to a Google spreadsheet or email. If you do not have an email marketing platform, the information will still be within Evalinator for you to easily access and engage with your respondents. The information from your assessment is only visible to you. See our privacy policy."},{title:"I don't use an email marketing platform. Can I still use Evalinator?",content:"Yes you can. If you do not use an email marketing platform, the information will be kept within Evalinator for you to easily access and engage with your quiz respondents / leads. The information from your quiz is only visible to you. See our privacy policy."},{title:"Is my data private?",content:"Yes, the information from your assessment is only visible to you and your respondents, and is not shared with anyone else. Please refer to our privacy policy for more details. We will also comply with the European GDPR rules."},{title:"Can I sign up for only one month?",content:"Yes, our plans are monthly and you can cancel anytime."},{title:"What is the limit on the number of responses on a quiz?",content:"The plan coverages are mentioned in the table above. If you need additional limits, then we can create a custom plan for you."},{title:"How do I cancel my account?",content:"You can simply do that from your dashboard. We make it hassle free for you."}],K=function(e){var t=(0,o.useState)(!1),n=(0,a.Z)(t,2),r=n[0],i=n[1];return o.createElement("div",{style:l().container},o.createElement(c.Z,{loader:r}),o.createElement("div",{className:l().pricing_top},o.createElement(m.Z,null,o.createElement("h1",null,"Fast-Track Growth: Start Today With a Risk Free Trial"),o.createElement("p",null,"Use a system of engaging expert quizzes, assessments, and goal setting to generate qualified leads, personalize your sales followups, and expand existing relationships."))),o.createElement("div",{className:l().plansection},o.createElement(m.Z,null,o.createElement(d.Z,null,o.createElement(g.Z,null,o.createElement(A,{setLoader:i}))))),o.createElement("div",null,o.createElement(m.Z,null,o.createElement("div",null,o.createElement("br",null),"* Custom plans are possible. Please contact us."),o.createElement("div",null,"*** ",o.createElement("b",null,"Coaches"),": Free customizable templates for Wheel of Life, DISC, Big 5, Storytelling, Human Design Type, and more!"))),o.createElement("div",{className:l().how_it_works},o.createElement(m.Z,null,o.createElement("h2",{className:l().faq_title},"Choose Our Guided Plan"),o.createElement("p",null,"Leverage our expertise and white glove service. Launch & start engaging your audience ",o.createElement("strong",null,"within days"),"."),o.createElement(d.Z,{className:l().works_rows},o.createElement(g.Z,{sm:1,className:l().work_part}),o.createElement(g.Z,{sm:10,className:l().work_part},o.createElement("ul",{style:{textAlign:"left",listStylePosition:"inside"}},o.createElement("li",{style:{textIndent:"-25px"}},"Live workshops for a fully personalized experience"),o.createElement("li",{style:{textIndent:"-25px"}},"Workshop 1: Analyze your target audience, solutions & services. Brainstorm your assessment. Review integration needs for your CRM or email marketing system. "),o.createElement("li",{style:{textIndent:"-25px"}},"Create your assessment including your own branding, questions, scoring, rating tiers, personalized feedback text, and any other content as needed"),o.createElement("li",{style:{textIndent:"-25px"}},"Workshop 2:  Live test with you and refine your assessment, test the integration, and help host on your website."),o.createElement("li",{style:{textIndent:"-25px"}},"Be available to make edits and adjustments as you test it out"),o.createElement("li",{style:{textIndent:"-25px"}},"** Bonus: Your first month of subscription is included!")))),o.createElement("br",null),o.createElement("h3",null,"$599, one time"),o.createElement("br",null),o.createElement(u.Z,{className:l().btntrial,style:{display:"block",margin:"0 auto"},onClick:function(){window.open("https://calendly.com/evalinator/30min","_blank")}},"Schedule a Consultation"))),o.createElement("div",{className:l().faq_price},o.createElement(m.Z,null,o.createElement("h2",{className:l().faq_title},"Frequently Asked Questions"),o.createElement("div",{className:l().faq_list},M&&M.map((function(e,t){return o.createElement(D,{key:t,title:e.title,content:e.content})}))))),o.createElement("div",{className:l().how_it_works},o.createElement(m.Z,null,o.createElement("h2",null,"How it works"),o.createElement("p",null,"Just 3 simple steps. Let your expertise shine."),o.createElement(d.Z,{className:l().works_rows},o.createElement(g.Z,{sm:4,className:l().work_part},o.createElement("div",{className:l().icons},o.createElement(p.Z,{src:f,alt:"setting-icon"})),o.createElement("h3",null,"Envision"),o.createElement("p",null,"Organize your unique expertise to create an engaging interactive model of what good looks like. Engage clients by starting with the big picture. Use our quick start templates.")),o.createElement(g.Z,{sm:4,className:l().work_part},o.createElement("div",{className:l().icons_one},o.createElement(p.Z,{src:h,alt:"setting-icon"})),o.createElement("h3",null,"Generate Leads & Strategize"),o.createElement("p",null,"Help client determine where they are in their journey. Build confidence and create engagement to collaborate on a roadmap of actions. Be 100% client centric.")),o.createElement(g.Z,{sm:4,className:l().work_part},o.createElement("div",{className:l().icons_two},o.createElement(p.Z,{src:_,alt:"setting-icon"})),o.createElement("h3",null,"Personalize & Grow"),o.createElement("p",null,"Create systematic growth by tailoring your services and products to meet the client needs you have collaboratively defined with them. Be the partner they can trust.")),o.createElement(u.Z,{className:l().btntrial},"Start Your Free 14 Day Trial ")))),o.createElement(s.Z,null))}},4486:function(e,t,n){"use strict";n.d(t,{QZ:function(){return a},je:function(){return o}});var r=n(4012),a=process.env.STRIPE_PUBLISHABLE_KEY||r.Hs,o=(r.TJ,r.a,[{id:"",name:"Features",desc:"Perfect to start with. Assess the current state of affairs. Great for funnel building.",featuresList:["# of quizzes / expert assessments","# of users","# of leads generated / new submissions per month*","Quick start templates","Email address capture","Email marketing integration (e.g. Hubspot, Mailchimp)","CRM integration (e.g. Salesforce, Pipedrive, Hubspot)","Personality or Type assessments - DISC, BIG 5, Human Design, or custom","Wheel of Life, life, health, business etc.","Scored assessments / Maturity model","Use giveaways and incentives","Group questions into categories / dimensions","Works on PC, Mac & mobile","24 / 7 Email support","Customize colors and match your branding","Goal setting and tracking","Before & after analysis","Profile benchmarking","Invitation only responses","Take quiz on-behalf-of","Multi-stakeholder clients / accounts*","Multi-assessment analysis"],waiting:!1,original:"",price:""},{id:r.TJ,name:"STARTER",highlighted:"",desc:"Start generating leads and data-driven thought leaership content in 30 minutes. Great for top of the funnel engagement.",waiting:!1,original:8.95,pricesmall:95,pricelarge:6,featuresList:["1","1","20","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","","","","","","",""]},{id:r.a,name:"ESSENTIALS",highlighted:"Y",desc:"Upgrade. More assessments/quizzes, more leads generated per month, and more material for data-driven thought leadership content.",waiting:!1,original:16.95,price:11.95,pricesmall:95,pricelarge:11,featuresList:["5","1","100","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","","","","","","",""]},{id:r._A,name:"ADVANCED",highlighted:"",desc:"Start engaging clients in personalized goals-driven sales pursuits and create systematic existing client account growth.",waiting:!1,original:39.95,price:29.95,pricesmall:95,pricelarge:29,featuresList:["Unlimited","3","500","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","Y","5 included*","Y"]}])},6708:function(e,t,n){(t=n(3645)(!1)).push([e.id,".pricing-module__logoutBtn--DBnZb {\r\n    height: '30px';\r\n    width : '100px';\r\n}\r\n\r\n.pricing-module__pricing_top--2egXc {\r\n    text-align: center;\r\n    background: #483f90;\r\n    padding   : 60px 0px 100px;\r\n    background: #483f90;\r\n    color     : #fff;\r\n}\r\n\r\n\r\n.pricing-module__pricing_top--2egXc h1 {\r\n    font-size    : 48px;\r\n    line-height  : 48px;\r\n    font-family  : Roboto;\r\n    font-weight  : 400;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.pricing-module__pricing_top--2egXc p {\r\n    font-size  : 20px;\r\n    line-height: 28px;\r\n    font-family: Roboto;\r\n    font-weight: 400;\r\n    color      : rgba(255, 255, 255, 0.84);\r\n    max-width  : 900px;\r\n    margin     : 0 auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pricing-module__faq_price--3lkoK{\r\n    margin-top: 100px;\r\n}\r\n.pricing-module__faq_price--3lkoK .pricing-module__faq_title--3g9Xq{\r\n    font-size: 36px;\r\n    font-weight: 500;\r\n    line-height: 44px;\r\n    font-family: Roboto;\r\n    margin-bottom: 60px;\r\n    text-align: center;\r\n}\r\n.pricing-module__faq_price--3lkoK .pricing-module__faq_list--2CUF1{\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n}\r\n.pricing-module__faq_box--3X5Lk{   \r\n    border-radius: 4px;\r\n    border: 1px solid #e5e5e5;\r\n    margin-bottom: 16px;\r\n}\r\n.pricing-module__faq_header--28OPt button{\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    font-weight: 500;\r\n    font-family: 'Roboto';\r\n    color: #000 !important;\r\n}\r\n\r\n.pricing-module__how_it_works--xxdWY {\r\n    text-align: center;\r\n    background: #483f90;\r\n    padding   : 60px 0px 100px;\r\n    background: #483f90;\r\n    color     : #fff;\r\n    margin-top: 100px;\r\n}\r\n\r\n.pricing-module__how_it_works--xxdWY h2 {\r\n    font-size    : 40px;\r\n    font-weight  : 600;\r\n    line-height  : 48px;\r\n    font-family  : Roboto;\r\n    margin-bottom: 0px;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.pricing-module__how_it_works--xxdWY p {\r\n    font-size    : 18px;\r\n    line-height  : 26px;\r\n    font-family  : Roboto;\r\n    font-weight  : 300;\r\n    padding-top  : 0px;\r\n    margin-bottom: 34px;\r\n}\r\n\r\n.pricing-module__plansection--3ok64 {\r\n    margin-top: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.pricing-module__plansection--3ok64 h2 {\r\n    font-size    : 36px;\r\n    font-weight  : 500;\r\n    line-height  : 44px;\r\n    font-family  : Roboto;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.pricing-module__plansection--3ok64 p {\r\n    font-size  : 18px;\r\n    line-height: 28px;\r\n    font-family: Roboto;\r\n    font-weight: 400;\r\n    max-width  : 900px;\r\n    margin     : 25% auto;\r\n}\r\n\r\n\r\n.pricing-module__works_rows--3BQJq {\r\n    position: relative;\r\n\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq::before {\r\n    content            : \"\";\r\n    background-image   : url(https://mangro9.dreamhosters.com/evalinator_new/wp-content/uploads/2022/04/howline.svg);\r\n    background-repeat  : no-repeat;\r\n    background-position: unset;\r\n    background-size    : 75%;\r\n    position           : absolute;\r\n    background-size    : 70%;\r\n    position           : absolute;\r\n    top                : 25px;\r\n    display            : block;\r\n    height             : 100%;\r\n    width              : 100%;\r\n    left               : 60px;\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E {\r\n    text-align: left;\r\n    z-index   : 9;\r\n    padding   : 0 50px;\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E h3 {\r\n    font-size  : 20px;\r\n    line-height: 150%;\r\n    font-family: Roboto;\r\n    font-weight: 600;\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E p {\r\n    font-size  : 16px;\r\n    line-height: 150%;\r\n    font-family: Roboto;\r\n    font-weight: 400;\r\n    color      : rgba(255, 255, 255, 0.84);\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons--5m0eR {\r\n    width          : 72px;\r\n    height         : 72px;\r\n    background     : #fff;\r\n    border-radius  : 50px;\r\n    display        : flex;\r\n    justify-content: center;\r\n    align-items    : center;\r\n    margin-top     : 105px;\r\n    margin-bottom  : 16px;\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_one--1aKvu {\r\n    width          : 72px;\r\n    height         : 72px;\r\n    background     : #fff;\r\n    border-radius  : 50px;\r\n    display        : flex;\r\n    justify-content: center;\r\n    align-items    : center;\r\n    margin-top     : 38px;\r\n    margin-bottom  : 16px;\r\n}\r\n.pricing-module__btntrial--1HB7q{\r\n    background-color:#4285f4 !important;\r\n}\r\n.pricing-module__btntrial--1HB7q:hover{\r\n    background-color: #2e65be !important;\r\n\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_two--1zWv0 {\r\n    width          : 72px;\r\n    height         : 72px;\r\n    background     : #fff;\r\n    border-radius  : 50px;\r\n    display        : flex;\r\n    justify-content: center;\r\n    align-items    : center;\r\n    margin-bottom  : 16px;\r\n}\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__btntrial--1HB7q {\r\n    font-family     : Roboto;\r\n    font-size       : 18px;\r\n    font-weight     : 500;\r\n    background-color:#4285f4;\r\n    border-radius   : 100px;\r\n    padding         : 18px 24px;\r\n    width           : fit-content;\r\n    margin          : 0 auto;\r\n    z-index         : 11;\r\n}\r\n\r\n\r\n.pricing-module__works_rows--3BQJq .pricing-module__btntrial--1HB7q:hover {\r\n    background-color: #2e65be;\r\n}\r\n\r\n@media screen and (max-width:767px) {\r\n    .pricing-module__works_rows--3BQJq::before {\r\n        display: none;\r\n    }\r\n\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons--5m0eR,\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_one--1aKvu,\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_two--1zWv0 {\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .pricing-module__plansection--3ok64 {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    .pricing-module__how_it_works--xxdWY{\r\n        padding: 60px 0px 50px;\r\n    }\r\n}\r\n@media screen and (min-width:767px) and (max-width:991px){\r\n    .pricing-module__works_rows--3BQJq::before {\r\n        width: 93%;\r\n    }\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons--5m0eR{ margin-top: 60px; }\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_one--1aKvu{ margin-top: 18px; }\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_two--1zWv0{ margin-top: -10px; }\r\n    .pricing-module__pricing_top--2egXc { margin-top: -2px;}\r\n}\r\n@media screen and (min-width:992px) and (max-width:1100px){\r\n    .pricing-module__works_rows--3BQJq::before {\r\n        width: 95%;\r\n    }\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons--5m0eR{ margin-top: 70px; }\r\n    .pricing-module__works_rows--3BQJq .pricing-module__work_part--2L36E .pricing-module__icons_one--1aKvu{ margin-top: 30px; }\r\n\r\n}",""]),t.locals={logoutBtn:"pricing-module__logoutBtn--DBnZb",pricing_top:"pricing-module__pricing_top--2egXc",faq_price:"pricing-module__faq_price--3lkoK",faq_title:"pricing-module__faq_title--3g9Xq",faq_list:"pricing-module__faq_list--2CUF1",faq_box:"pricing-module__faq_box--3X5Lk",faq_header:"pricing-module__faq_header--28OPt",how_it_works:"pricing-module__how_it_works--xxdWY",plansection:"pricing-module__plansection--3ok64",works_rows:"pricing-module__works_rows--3BQJq",work_part:"pricing-module__work_part--2L36E",icons:"pricing-module__icons--5m0eR",icons_one:"pricing-module__icons_one--1aKvu",btntrial:"pricing-module__btntrial--1HB7q",icons_two:"pricing-module__icons_two--1zWv0"},e.exports=t},9263:function(e,t,n){var r=n(6708);"string"==typeof r&&(r=[[e.id,r,""]]);n(6723)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)}}]);