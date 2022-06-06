(this["webpackJsonp@polywrap/landing-page"]=this["webpackJsonp@polywrap/landing-page"]||[]).push([[0],{126:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(0),i=a.n(o),r=a(12),c=a.n(r),s=a(5),l=a(65),d=a(13),p=a(166),b=a(169),h=a(162),m=a(159),g=a(167),u=a(18),j=a(84),x=a(171),f={acceptanceLossPercentage:1,maxChecks:10},O=function(e){return Object(x.a)(e,f).filter},y={gradient:"linear-gradient(to right, #74DD9F 20%, #000000, 20%)",start:"#74DD9F",mid:"#4ED29F",end:"#27C69F",700:"#06644D",direction:"120deg"},w={start:"#1B5FED",mid:"#1B6DED",end:"#1B87ED",300:"#66D9EF",800:"#293653",900:"#1E2B45",1e3:"#1d2538",direction:179},v={gradient:"linear-gradient(to right, #FFC272, #FFE272)",400:"#FFE272",500:"#FFC272",direction:0},k={gradient:"linear-gradient(0deg, #000000 35%, #FFFFFF 35%)",start:"#878787",end:"#FFFFFF",direction:0,opacity:.35},S="#FFFFFF",P=Object(j.a)({palette:{primary:{main:y.start,dark:y.end},secondary:{main:w.end,dark:w.start},text:{primary:S,secondary:"rgba(255,255,255,0.7)",disabled:"rgba(255,255,255,0.3)"},background:{default:w[900]}},typography:{fontFamily:"'Raleway', sans-serif",h1:{fontSize:80,fontWeight:900,lineHeight:1},h2:{fontSize:64,fontWeight:900,lineHeight:1},h3:{fontSize:40,fontWeight:900,lineHeight:1,"@media (max-width:650px)":{fontSize:32}},h4:{fontSize:32,fontWeight:900,lineHeight:1,"@media (max-width:650px)":{fontSize:28}},subtitle1:{fontSize:24,fontWeight:900,lineHeight:1.5},body1:{fontSize:16,lineHeight:1.75}},overrides:{MuiCssBaseline:{"@global":{html:{backgroundColor:w[900]},body:{overflowX:"hidden"}}},MuiAppBar:{root:{boxShadow:"none"}},MuiInput:{root:{background:"".concat(w[900],"88"),backdropFilter:"blur(8px)",border:"solid 1px ".concat(y[700]),borderRadius:4,fontSize:"1rem",fontWeight:500,transition:"background 0.25s ease-in-out","&.Mui-focused":{background:w[900]}}},MuiTextField:{root:{"& .MuiInput-underline:before":{borderBottomColor:"none"},"& .MuiInput-underline:hover:before":{borderBottomColor:"none"},"& .MuiInput-underline:after":{borderBottomColor:"none"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"0"}}},MuiButton:{containedPrimary:{background:"radial-gradient(circle at 80% 50%, ".concat(v[400],", ").concat(v[500],")"),backgroundSize:"250%",backgroundPositionX:"0px",borderRadius:999,boxShadow:"0 8px 16px ".concat(w[900]),color:w[900],fontWeight:700,transform:"translateY(0)",transition:"background 0.25s ease-in-out, transform 0.25s ease-in-out","&:hover":{backgroundPositionX:"30%",transform:"translateY(-1px)"},"& .MuiButton-endIcon":{marginLeft:4}}},MuiLink:{root:{"&:hover":{color:y.start}}}}}),N={textSecondary:O(k.start),secondary:O(v[400])},T=a(11),I=a(38),L=a(161),W=a(131),F=a(170),C=a(30),z=a.n(C);function D(e){return window.fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CMS_SITE,{method:"POST",headers:{"Content-Type":"application/json",Authorization:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CMS_TOKEN},body:JSON.stringify({query:e})}).then((function(e){return e.json()}))}a(118).config();var B=Object(m.a)((function(e){var t,a,n;return{root:(t={minHeight:"100vh",margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:e.spacing(3)},Object(s.a)(t,e.breakpoints.down("sm"),{minHeight:"unset",padding:"0"}),Object(s.a)(t,e.breakpoints.up("xs"),{maxWidth:"90vw"}),t),heroPolywrapper:(a={display:"flex",marginLeft:"auto",flexDirection:"column",alignItems:"center",justifyContent:"center",objectFit:"cover",height:"auto",width:"100%"},Object(s.a)(a,e.breakpoints.down("md"),{aspectRatio:"3/2",maxWidth:"60vw",margin:"80px auto 20px"}),Object(s.a)(a,e.breakpoints.down("xs"),{marginBottom:20,marginTop:100}),a),heroTitle:(n={fontWeight:900,marginBottom:20,marginTop:20},Object(s.a)(n,e.breakpoints.down("md"),{fontSize:48}),Object(s.a)(n,e.breakpoints.down("sm"),{textAlign:"center",marginTop:10,fontSize:28}),n),heroBody:Object(s.a)({fontSize:20},e.breakpoints.down("sm"),{textAlign:"center",fontSize:16}),heroSignUpFlex:Object(s.a)({},e.breakpoints.down("md"),{justifyContent:"center"}),heroTextField:{borderRadius:"99px 16px 16px 99px",maxWidth:400,width:"100%","& .MuiInput-input":{height:38}},heroButton:Object(s.a)({borderRadius:999,fontSize:18,padding:"9px 28px",marginTop:40,whiteSpace:"nowrap"},e.breakpoints.down("sm"),{marginTop:12,fontSize:14}),heroSignupSuccess:{backgroundColor:e.palette.primary.dark,borderRadius:8,boxShadow:"0 8px 16px ".concat(w[900],"88"),fontWeight:700,padding:8,width:"100%"},technicalPreview:Object(s.a)({color:w.end,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",paddingLeft:2},e.breakpoints.down("sm"),{textAlign:"center",fontSize:12}),"@keyframes fadeInUp":{"0%":{opacity:0,transform:"translateY(5%)"},"100%":{opacity:1,transform:"translateY(0%)"}},"@keyframes float":{"0%, 100%":{transform:"translateY(0)",transitionTimingFunction:"ease-in"},"50%":{transform:"translateY(-3%)",transitionTimingFunction:"ease-out"}},heroContent:Object(s.a)({animation:"$fadeInUp 1s 1s forwards ease-in",opacity:0},e.breakpoints.down("sm"),{alignItems:"center",display:"flex",flexDirection:"column"}),heroIllustration:Object(s.a)({animation:"$float 6s infinite"},e.breakpoints.down("sm"),{order:-1}),errorText:{color:"#f44336"}}})),R=function(){var e=Object(I.a)(),t=B(),a=Object(L.a)(e.breakpoints.down("xs")),i=Object(o.useState)({title:"Use Web3 Anywhere.",subtitle:"PRE-ALPHA",description:"Polywrap is a development platform that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols",callToAction:"JOIN OUR DISCORD"}),r=Object(T.a)(i,2),c=r[0],s=r[1],l=Object(o.useState)(!1),d=Object(T.a)(l,2),p=(d[0],d[1]),m=Object(o.useState)(!0),g=Object(T.a)(m,2),j=(g[0],g[1]);return Object(o.useEffect)((function(){j(!0),D('query { \n  webContent(id:"6DWrAojZUdPcTSDXGip5PN") { \n   title \n   subtitle\n   description\n   callToAction\n } \n}').then((function(e){var t=e.data.webContent;s(t)}),(function(e){p(!0)})).finally((function(){j(!1)}))}),[]),Object(n.jsxs)(h.a,{className:t.root,container:!0,justify:"center",alignItems:"center",spacing:6,direction:a?"row-reverse":"row",children:[Object(n.jsx)(h.a,{item:!0,sm:12,md:6,children:Object(n.jsx)(u.Parallax,{y:[60,-60],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsxs)(b.a,{className:t.heroContent,children:[Object(n.jsx)(W.a,{variant:"subtitle2",color:"secondary",className:t.technicalPreview,children:c.subtitle}),Object(n.jsx)(W.a,{className:t.heroTitle,color:"textPrimary",variant:"h1",children:c.title}),Object(n.jsx)(W.a,{className:t.heroBody,color:"textSecondary",variant:"body1",children:c.description}),Object(n.jsx)(F.a,{className:t.heroButton,color:"primary",href:"https://discord.gg/bGsqQrNhqd",target:"_blank",rel:"noredirect",endIcon:Object(n.jsx)(z.a,{}),type:"submit",variant:"contained",children:c.callToAction})]})})}),Object(n.jsx)(h.a,{className:t.heroIllustration,item:!0,sm:12,md:6,children:Object(n.jsx)(b.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",children:Object(n.jsx)(u.Parallax,{y:[80,-80],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsx)("img",{className:t.heroPolywrapper,src:"/imgs/polywrapper-hero.png",alt:"Polywrap Logo"})})})})]})},E=Object(m.a)((function(e){var t,a;return{root:Object(s.a)({margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:20,paddingRight:20,zIndex:2},e.breakpoints.down("md"),{marginTop:150,minHeight:"60vh"}),grid:Object(s.a)({justifyContent:"center",position:"relative"},e.breakpoints.down("sm"),{"& .MuiGrid-item":{padding:20}}),title:(t={fontWeight:900,marginBottom:20,marginTop:20},Object(s.a)(t,e.breakpoints.down("md"),{fontSize:48}),Object(s.a)(t,e.breakpoints.down("sm"),{textAlign:"center",marginTop:10,fontSize:28}),t),description:{marginTop:20},polywrapIllustration:(a={width:"100%"},Object(s.a)(a,e.breakpoints.down("md"),{maxHeight:"60vh"}),Object(s.a)(a,e.breakpoints.down("xs"),{maxHeight:"30vh"}),a)}})),A=function(){var e=Object(I.a)(),t=E(),a=Object(o.useState)({title:"Solving the Web3 Integration Problem",subtitle:".",description:"Web3 relies on SDKs to integrate virtually every type of protocol: DeFi, NFTs, DAOs, P2P Networks\n\nDue to traditional SDKs\u2019 short-comings, Web3\u2019s technical debt is growing day by day.\n\nTraditional SDKs are:\nInsecure, Bloated, Incompatible, and Language-Specific",callToAction:"Read the Docs"}),i=Object(T.a)(a,2),r=i[0],c=i[1],s=Object(o.useState)(!1),l=Object(T.a)(s,2),d=(l[0],l[1]),p=Object(o.useState)(!0),m=Object(T.a)(p,2),g=(m[0],m[1]);return Object(o.useEffect)((function(){g(!0),D('query { \n  webContent(id:"4vlgBuWUl1gJGQPeYogzI4") { \n   title \n   subtitle\n   description\n   callToAction\n } \n}').then((function(e){var t=e.data.webContent;c(t)}),(function(e){d(!0)})).finally((function(){g(!1)}))}),[]),Object(n.jsx)(b.a,{position:"relative",className:t.root,children:Object(n.jsx)(u.Parallax,{y:[20,-35],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsxs)(h.a,{container:!0,spacing:10,alignItems:"flex-start",className:t.grid,children:[Object(n.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(n.jsx)("img",{className:t.polywrapIllustration,src:"/imgs/wrappers-white-wave.svg",alt:"Polywrap - wrapper white wave"})}),Object(n.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(W.a,{variant:"h3",color:"textPrimary",className:t.title,children:r.title}),Object(n.jsx)(W.a,{variant:"body1",color:"textSecondary",className:t.description,children:r.description})]})]})})})},_=a(44),H=a.n(_),M=a(85),U=a(58),G=Object(m.a)((function(e){return{root:Object(s.a)({flexDirection:"column",minHeight:"100vh",justifyContent:"center",marginBottom:100,position:"relative",padding:"0 20px",zIndex:0,marginTop:140},e.breakpoints.down("sm"),{marginTop:200,minHeight:"unset"}),blurredPoly:{right:"-10%",opacity:"0.2",position:"absolute",top:"-30%",width:"40vw",zIndex:0},cell:{margin:"64px auto 0",maxWidth:e.breakpoints.values.md,position:"relative"},featureGrid:{justifyContent:"center"},featureItem:{position:"relative"},featureIconContainer:{height:96,margin:"auto",width:96},featureIconBg:{height:"140%",left:"-20%",opacity:0,position:"absolute",top:"0%",width:"140%",zIndex:-1},featureIcon:{width:"100%"},featureTitle:{margin:"20px auto",lineHeight:1,whiteSpace:"nowrap"},featureDescription:{marginTop:20},animatedBlob:{fill:e.palette.secondary.dark,left:"5%",opacity:"0.5",mixBlendMode:"multiply",position:"absolute",top:"5%",width:"90%"},description:{marginTop:20}}})),Y=function(){var e=Object(I.a)(),t=G(),a=Object(o.useState)(!1),i=Object(T.a)(a,2),r=(i[0],i[1],Object(o.useState)(!0)),c=Object(T.a)(r,2),s=(c[0],c[1]),l=Object(o.useState)([{title:"Fake Content.",subtitle:"PRE-ALPHA",description:"Polywrap is a development platform that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols",callToAction:"ERROR Happened",slug:"fake"}]),d=Object(T.a)(l,2),p=d[0],m=d[1];return Object(o.useEffect)((function(){Object(U.a)(H.a.mark((function e(){var t,a,n,o,i,r;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],s(!0),n=0,o=[["7LYHglxrDEqHwa23xPbrEo","Multiplatform"],["7g5q14hzPYzLhwos7IVik1","UserFriendly"],["5NjaWIMhQlair2k0dVDsXC","Composable"],["3aV4XbTikwD2bIdKAsmShv","Scalable"],["1i96gjazTJVQVxMdbDbfNm","Upgradable"],["d4he1KTXgSQLg6BuaY6MA","Secure"]];case 4:if(!(n<o.length)){e.next=16;break}return i=o[n],r='query { \n            webContent(id:"'.concat(i[0],'") { \n              title\n              subtitle\n              supportImage {\n                title\n                description\n                contentType\n                fileName\n                size\n                url\n                width\n                height\n              }\n              description\n          }\n          }'),e.next=9,D(r);case 9:a=e.sent,t.push(a.data.webContent),m((function(e){return[].concat(Object(M.a)(e),[a.data.webContent])})),s(!1);case 13:n++,e.next=4;break;case 16:case"end":return e.stop()}}),e)})))()}),[]),Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",className:t.root,children:[Object(n.jsx)(b.a,{className:t.blurredPoly,children:Object(n.jsx)(u.Parallax,{y:[-90,100],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsx)("img",{width:"100%",src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})})}),Object(n.jsxs)(u.Parallax,{y:[-5,5],disabled:window.innerWidth<e.breakpoints.values.md,children:[Object(n.jsx)(W.a,{variant:"h3",color:"textPrimary",align:"center",children:"Next-Gen SDKs for Web3"}),Object(n.jsx)(b.a,{className:t.cell,children:Object(n.jsx)(h.a,{container:!0,spacing:6,alignItems:"flex-start",className:t.featureGrid,children:p.map((function(e,a){if("fake"!==e.slug)return Object(n.jsx)(h.a,{xs:12,sm:6,md:4,item:!0,className:t.featureItem,children:Object(n.jsxs)(b.a,{position:"relative",children:[Object(n.jsxs)(b.a,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",className:t.featureIconContainer,children:[Object(n.jsx)("img",{className:t.featureIconBg,width:"100%",src:"".concat("","/imgs/assets/blob-1.png"),alt:""}),Object(n.jsx)("img",{className:t.featureIcon,width:"100%",src:"".concat(e.supportImage.url),alt:""})]}),Object(n.jsx)(W.a,{variant:"subtitle1",color:"textPrimary",align:"center",className:t.featureTitle,children:e.title}),Object(n.jsx)(W.a,{variant:"body1",color:"textSecondary",align:"center",className:t.featureDescription,children:e.subtitle})]})},e.title)}))})})]})]})},K=a(163),q=a(82),J=a.n(q),V=Object(m.a)((function(e){return{root:Object(s.a)({flexDirection:"column",minHeight:"60vh",justifyContent:"center",marginBottom:100,marginTop:140,position:"relative",padding:"0 20px",zIndex:0},e.breakpoints.down("sm"),{minHeight:"unset"}),title:Object(s.a)({display:"block",margin:"auto"},e.breakpoints.down("sm"),{fontSize:32}),testimonialText:Object(s.a)({display:"block",margin:"auto",marginBottom:20},e.breakpoints.down("sm"),{fontSize:32}),testimonial:Object(s.a)({padding:e.spacing(8),paddingBottom:e.spacing(0),position:"relative",width:"50%"},e.breakpoints.down("sm"),{width:"100%","& h6":{fontSize:20}}),testimonialQuote:{color:e.palette.text.secondary,fontSize:80,opacity:.2,transform:"translate(-16px, 12px)"},logo:{filter:N.textSecondary,height:50,minWidth:120,objectFit:"contain","&:hover":{filter:N.secondary}}}})),Q=function(){var e=V(),t=Object(o.useState)({name:"Gelato Network",link:"https://gelato.network",testimonial:"With the help of Polywrap, Gelato will enable every developer to easily automate the execution of transactions on networks like Ethereum, giving them the ability to provide arbitrary instructions to a decentralized network of bots with a single Wrapper call.",persona:"Hilmar X, Legendary Member",futurePromise:"Gelato and other node networks will leverage Polywrap to have sdk\u2019s that dynamically update upon governance decisions instead of needing to contact all the operators to restart their nodes and install the new package.",blackPngLogo:{url:"https://polywrap.io/logos/gelato.png"}}),a=Object(T.a)(t,2),i=a[0],r=a[1],c=Object(o.useState)({name:"Gnosis",link:"https://gnosis.io",testimonial:"Polywrap will make it easy for everyone to build on top of Gnosis technologies and interact with our contracts and interfaces. This will help us achieve our vision of building open platforms and removing gatekeepers.",persona:"Team Gnosis",futurePromise:"Gnosis is creating wrappers that will encapsulate their business logic in secure, language-agnostic modules that interact with many chains, storage networks, oracles, and services. This growing ecosystem of Gnosis apps will be auto-updated in a securely.",blackPngLogo:{url:"https://polywrap.io/logos/gnosis.png"}}),s=Object(T.a)(c,2),l=s[0],d=s[1],p=Object(o.useState)({name:"Pocket Network",link:"https://pokt.network/",testimonial:"By creating one single standard for web3 developers, Polywrap massively improves the experience of interacting with different protocols.",persona:"Michael O'Rourke, Founder",futurePromise:"Pocket aims to provide a neutral networking stack for Polywrap users to connect to any protocol they want.",blackPngLogo:{url:"https://polywrap.io/logos/pocket.png"}}),h=Object(T.a)(p,2),m=h[0],g=h[1],u=Object(o.useState)(!1),j=Object(T.a)(u,2),x=(j[0],j[1]),f=Object(o.useState)(!0),O=Object(T.a)(f,2),y=(O[0],O[1]);Object(o.useEffect)((function(){y(!0),D('query { \n  gelato: launchPartners(id:"4NuUSkl1u6JPVA7QNiM4iS") { \n   name \n   link\n   testimonial\n   blackPngLogo {\n    url\n  }\n   persona\n   futurePromise\n }, \n  gnosis:  launchPartners(id: "4wW7f4q1VU7Y0VoHIYKJDK") {\n    name \n    link\n    testimonial\n    blackPngLogo {\n      url\n    }\n    persona\n    futurePromise\n  }, \n  pocket:  launchPartners(id: "2a9WNhIMlaMmbgUBO5fRiR") {\n    name \n    link\n    testimonial\n    blackPngLogo {\n      url\n    }\n    persona\n    futurePromise\n  }\n}').then((function(e){var t=e.data.gelato;r(t);var a=e.data.gnosis;d(a);var n=e.data.pocket;g(n)}),(function(e){x(!0),console.log(e),console.log("CMS QUERY FAILED ##################################")})).finally((function(){y(!1)}))}),[]);var w=[l,m,i],v=[];for(var k in w)v[k]={name:w[k].name,testimonial:w[k].testimonial,persona:w[k].persona,link:w[k].link,logo:w[k].blackPngLogo.url};return Object(n.jsxs)(b.a,{className:e.root,children:[Object(n.jsxs)(W.a,{className:e.title,variant:"h3",align:"center",color:"textPrimary",children:["Protocols"," ",Object(n.jsx)("span",{role:"img","aria-label":"yellow heart",children:"\ud83d\udc9b"})," ","Polywrap"]}),Object(n.jsx)(K.a,{maxWidth:"lg",children:Object(n.jsx)(b.a,{display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:-8,marginRight:-8,position:"relative",zIndex:2,children:v.map((function(t,a){return Object(n.jsx)(b.a,{className:e.testimonial,children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(J.a,{className:e.testimonialQuote}),Object(n.jsx)(W.a,{variant:"subtitle1",style:{fontSize:20},color:"textSecondary",children:t.testimonial}),Object(n.jsx)(b.a,{marginTop:2,children:Object(n.jsx)(W.a,{variant:"body1",color:"textSecondary",children:t.persona})}),Object(n.jsx)(b.a,{marginTop:2,children:Object(n.jsx)("img",{src:t.logo,className:e.logo,alt:""})})]})},"testimonial-".concat(a))}))})})]})},X=a(31),Z=Object(m.a)((function(e){return{root:Object(s.a)({maxWidth:"1400px",position:"relative"},e.breakpoints.up("sm"),{margin:"auto"})}})),$=function(){X.a.pageview("home");var e=Z();return Object(n.jsxs)(b.a,{className:e.root,children:[Object(n.jsx)(R,{}),Object(n.jsx)(A,{}),Object(n.jsx)(Y,{}),Object(n.jsx)(Q,{})]})},ee=a(164),te=a(168),ae=a(83),ne=a.n(ae),oe="Join Our Discord",ie=Object(m.a)((function(e){var t;return{heroSignUpFlex:(t={},Object(s.a)(t,e.breakpoints.down("md"),{justifyContent:"center"}),Object(s.a)(t,e.breakpoints.down("sm"),{flexWrap:"wrap"}),t),heroTextField:Object(s.a)({borderRadius:"99px 16px 16px 99px",display:"flex",flexGrow:1,maxWidth:400,"& .MuiInput-input":{height:38}},e.breakpoints.down("sm"),{width:"100%"}),heroButton:Object(s.a)({borderRadius:"16px 99px 99px 16px",fontSize:18,padding:"9px 28px",marginLeft:20,whiteSpace:"nowrap"},e.breakpoints.down("sm"),{borderRadius:99,marginLeft:0,marginTop:e.spacing(2),width:"100%"}),heroSignupSuccess:{backgroundColor:e.palette.primary.dark,borderRadius:8,boxShadow:"0 8px 16px ".concat(w[900],"88"),fontWeight:700,padding:8,width:"100%"},backToPolywrap:{color:e.palette.primary.main,display:"block",fontSize:24,fontWeight:700,marginTop:e.spacing(3)},errorText:{color:"#f44336"}}})),re=function(e){var t=e.location,a=ie(),i=Object(o.useState)(!1),r=Object(T.a)(i,2),c=r[0],s=r[1],l=Object(o.useState)(""),d=Object(T.a)(l,2),p=d[0],h=d[1],m=Object(o.useState)(""),g=Object(T.a)(m,2),u=g[0],j=g[1],x=function(){var e=Object(U.a)(H.a.mark((function e(){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)){e.next=6;break}return j("Invalid email address..."),e.abrupt("return");case 6:j("");case 7:return a="https://tech.us17.list-manage.com/subscribe/post-json?u=7515d8292da68c0a33f4c7e7e&amp;id=48ff512e96&c=jQuery34108557665382199082_1607465109249&b_7515d8292da68c0a33f4c7e7e_48ff512e96=&_=1607465109250",a+="&Email=".concat(p,"&EMAIL=").concat(p),a=encodeURI(a),e.prev=10,e.next=13,fetch(a,{mode:"no-cors"});case 13:X.a.event({category:"Button-".concat(t),action:oe,label:"Early Access"}),s(!0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),j('Sign-up failed... please use the "contract" form above.');case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{children:[Object(n.jsx)(b.a,{className:a.heroSignUpFlex,display:"flex",alignItems:"center",children:c?Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(W.a,{className:a.heroSignupSuccess,align:"center",color:"textPrimary",children:["Thank you for signing up ",p,"! More details coming soon."]}),"signup"===t?Object(n.jsx)(ee.a,{href:"/",className:a.backToPolywrap,children:Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",color:"primary",children:[Object(n.jsx)(b.a,{marginRight:1,display:"flex",children:Object(n.jsx)(ne.a,{})}),"Go Back to Polywrap"]})}):null]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(te.a,{className:a.heroTextField,placeholder:"signup"===t?"Request Early Access":"email address",inputProps:{style:{textAlign:"center"}},onChange:function(e){return h(e.target.value)}}),Object(n.jsx)(F.a,{className:a.heroButton,color:"primary",endIcon:Object(n.jsx)(z.a,{}),type:"button",variant:"contained",onClick:x,children:"signup"===t?oe:"Subscribe"})]})}),u&&Object(n.jsx)(W.a,{className:a.errorText,children:u})]})},ce=Object(m.a)((function(e){var t,a;return{root:Object(s.a)({minHeight:"100vh",margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:e.spacing(3),position:"relative",zIndex:2},e.breakpoints.down("sm"),{minHeight:"unset",padding:"0"}),technicalPreview:Object(s.a)({color:w.end,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",paddingLeft:2},e.breakpoints.down("sm"),{textAlign:"center"}),heroPolywrapper:(t={display:"flex",marginLeft:"auto",flexDirection:"column",alignItems:"center",justifyContent:"center",objectFit:"cover",height:"auto",width:"100%"},Object(s.a)(t,e.breakpoints.down("md"),{aspectRatio:"3/2",maxWidth:"60vw",margin:"80px auto 20px"}),Object(s.a)(t,e.breakpoints.down("xs"),{marginBottom:20,marginTop:100}),t),heroTitle:(a={fontWeight:900,marginBottom:20,marginTop:20},Object(s.a)(a,e.breakpoints.down("md"),{fontSize:48}),Object(s.a)(a,e.breakpoints.down("sm"),{textAlign:"center"}),Object(s.a)(a,e.breakpoints.down("xs"),{fontSize:36}),a),heroBody:{fontSize:16,lineHeight:1.75},polywrapLink:{alignItems:"center",color:e.palette.primary.main,display:"inline-flex",fontWeight:700,marginLeft:8,textDecoration:"underline"},"@keyframes float":{"0%, 100%":{transform:"translateY(0)",transitionTimingFunction:"ease-in"},"50%":{transform:"translateY(-3%)",transitionTimingFunction:"ease-out"}},heroIllustration:Object(s.a)({animation:"$float 6s infinite"},e.breakpoints.down("sm"),{order:-1})}})),se=function(){var e=Object(I.a)(),t=ce(),a=Object(L.a)(e.breakpoints.down("xs"));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(h.a,{className:t.root,container:!0,justify:"center",alignItems:"center",direction:a?"row-reverse":"row",children:[Object(n.jsxs)(h.a,{item:!0,sm:12,md:7,children:[Object(n.jsx)(W.a,{variant:"subtitle2",color:"secondary",className:t.technicalPreview,children:"Technical Preview"}),Object(n.jsx)(W.a,{className:t.heroTitle,color:"textPrimary",variant:"h2",children:"Bring Web3 to Life"}),Object(n.jsxs)(W.a,{className:t.heroBody,color:"textSecondary",variant:"body1",children:["Access is limited to a small group of testers during the alpha release of Polywrap Hub.",Object(n.jsx)("br",{}),"Sign up today for your chance to try it out early and help us improve."]}),Object(n.jsx)(b.a,{marginTop:4,children:Object(n.jsx)(re,{location:"signup"})}),Object(n.jsx)(b.a,{marginTop:4,children:Object(n.jsxs)(W.a,{component:"div",variant:"body2",children:["Want to start building right away?",Object(n.jsxs)(b.a,{className:t.polywrapLink,children:[Object(n.jsx)(ee.a,{href:"https://docs.polywrap.io/guides/create-as-wrapper/project-setup",target:"_blank",children:"Build a Polywrap"}),Object(n.jsx)(z.a,{})]})]})})]}),Object(n.jsx)(h.a,{className:t.heroIllustration,item:!0,sm:12,md:5,children:Object(n.jsx)(b.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",children:Object(n.jsx)("img",{className:t.heroPolywrapper,src:"/imgs/polywrapper-hero.svg",alt:"Polywrap Logo"})})})]})})},le=Object(m.a)((function(e){var t;return{root:{overflowX:"hidden"},bgMembrane:{height:"auto",position:"absolute",opacity:1,"& img":{width:"100%"}},blurredPoly:{position:"relative",opacity:"0.25",mixBlendMode:"hard-light"},blurredPoly1:{transform:"scale(2) translate(5%, 35%) rotate(125deg)",opacity:"0.25"},blurredPoly2:(t={transform:"scale(0.5) rotate(-75deg)",opacity:"0.3"},Object(s.a)(t,e.breakpoints.between("xs","md"),{left:"44%",top:"7%",transform:"scale(0.25) rotate(125deg)"}),Object(s.a)(t,e.breakpoints.down("xs"),{left:"9%",top:"5%",transform:"scale(0.1) rotate(125deg)"}),t),blurredPoly3:{transform:"scale(0.25) translate(650%, 300%) rotate(65deg)",opacity:"0.4"}}})),de={width:"100vw",height:"100vh",top:0,left:0,position:"absolute"},pe=function(){X.a.pageview("home");var e=le();return Object(n.jsx)(b.a,{position:"absolute",width:"100vw",height:"100%",left:"0",zIndex:"0",className:e.root,children:[{top:"-144vh",width:"120%"},{top:"104vh",width:"100%"},{top:"-72vh",width:"120%"},{top:"-128vh",width:"140%"},{top:"64vh",width:"120%"},{top:"144vh",width:"100%"},{top:"230vh",width:"140%"}].map((function(t,a){return Object(n.jsxs)("div",{children:[4===a&&Object(n.jsxs)(b.a,{display:"flex",children:[Object(n.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly1),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"}),Object(n.jsx)(u.Parallax,{y:[0,-50],styleOuter:de,styleInner:{mixBlendMode:"hard-light"},children:Object(n.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly2),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})}),Object(n.jsx)(u.Parallax,{y:[-25,25],styleOuter:de,children:Object(n.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly3),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})})]}),Object(n.jsx)(b.a,{top:t.top,width:t.width,className:e.bgMembrane,children:Object(n.jsx)("img",{src:"".concat("","/imgs/assets/bg/bg-membrane-").concat(a%2===0?1:2,".svg"),alt:""})})]},"membrane-".concat(a))}))})},be=a(165),he=Object(m.a)((function(e){return{navLink:Object(s.a)({fontSize:14,fontWeight:700,marginRight:e.spacing(6),transition:"color 0.25s ease-in-out","&:hover":{color:y.start}},e.breakpoints.down("xs"),{fontSize:12,marginRight:e.spacing(2)}),navButton:Object(s.a)({backgroundColor:y.mid,borderRadius:999,fontWeight:700},e.breakpoints.down("xs"),{display:"none"})}})),me=function(e){var t=Object(I.a)(),a=e.scrollPosition,o=Object(L.a)(t.breakpoints.down("sm"),{defaultMatches:!0}),i=!o||a>150,r=he();return Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",flexWrap:"nowrap",children:[Object(n.jsx)(ee.a,{className:r.navLink,href:"https://docs.polywrap.io/",target:"_blank",rel:"noredirect",color:"textSecondary",variant:"body1",style:{display:"".concat(i&&o?"none":"block")},children:"Docs"}),Object(n.jsx)(ee.a,{className:r.navLink,href:"https://forum.polywrap.io/",target:"_blank",rel:"noredirect",color:"textSecondary",variant:"body1",style:{display:"".concat(i&&o?"none":"block")},children:"Forum"}),Object(n.jsx)(ee.a,{className:r.navLink,href:"https://blog.polywrap.io/",target:"_blank",rel:"noredirect",color:"textSecondary",variant:"body1",style:{display:"".concat(i&&o?"none":"block")},children:"Blog"}),Object(n.jsx)(F.a,{href:"https://jobs.ashbyhq.com/polywrap",target:"_blank",rel:"noredirect",variant:"contained",endIcon:Object(n.jsx)(z.a,{}),className:r.navButton,style:{display:"".concat(i?"flex":"none")},children:o?"Join Us":"Join and Contribute"})]})},ge=Object(m.a)((function(e){var t;return{appBar:{background:"".concat(w[900],"c2"),backdropFilter:"blur(48px)",transition:"background 1s ease-in-out"},cell:{padding:0},logo:(t={cursor:"pointer",height:48,marginRight:e.spacing(2),transition:"opacity 0.25s ease-in-out",width:"auto"},Object(s.a)(t,e.breakpoints.down("sm"),{height:32}),Object(s.a)(t,"&:hover",{opacity:.8}),t),navLink:Object(s.a)({fontSize:"14px",fontWeight:700,marginRight:20,transition:"color 0.25s ease-in-out","&:hover":{color:y.start}},e.breakpoints.down("xs"),{fontSize:"12px",marginRight:10})}})),ue=function(){var e=Object(d.f)(),t=Object(d.g)(),a=ge(),i=Object(o.useState)(0),r=Object(T.a)(i,2),c=r[0],s=r[1],l=function(){var e=window.pageYOffset;s(e)};return Object(o.useEffect)((function(){return window.addEventListener("scroll",l,{passive:!0}),function(){window.removeEventListener("scroll",l)}}),[]),Object(n.jsx)(be.a,{position:"fixed",color:"transparent",className:c>150?a.appBar:void 0,style:{transition:"background 1s ease-in-out"},children:Object(n.jsx)(K.a,{maxWidth:"lg",className:a.cell,children:Object(n.jsxs)(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px",children:[Object(n.jsx)("img",{src:"/logos/polywrap-horizontal.svg",alt:"Polywrap Logo",onClick:function(){return t="/",e.push(t);var t},className:a.logo}),"/signup"!==t.pathname?Object(n.jsx)(me,{scrollPosition:c}):null]})})})},je=Object(m.a)((function(e){var t;return{root:Object(s.a)({backgroundColor:"".concat(w[1e3],"85"),padding:"".concat(e.spacing(8),"px ").concat(e.spacing(5),"px"),zIndex:2,position:"relative"},e.breakpoints.down("sm"),{marginLeft:-e.spacing(3),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(8),paddingBottom:e.spacing(8),width:"calc(100% + ".concat(2*e.spacing(3),"px)")}),cell:{},logo:(t={width:"auto",height:"48px",cursor:"pointer",transition:"opacity 0.25s ease-in-out"},Object(s.a)(t,e.breakpoints.down("sm"),{height:e.spacing(4)}),Object(s.a)(t,"&:hover",{opacity:.8}),t),socialContainer:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"50px",marginRight:20,"&:last-of-type":{marginRight:0}},social:{cursor:"pointer",fontSize:24,color:e.palette.text.secondary,"&:hover":{color:e.palette.secondary.main}},navLink:Object(s.a)({fontSize:14,fontWeight:700,lineHeight:1,marginTop:e.spacing(3),transition:"color 0.25s ease-in-out","&:hover":{color:y.start}},e.breakpoints.down("xs"),{fontSize:12}),footerDivider:{backgroundColor:e.palette.primary.main,height:4,marginBottom:e.spacing(4),width:e.spacing(4)},footerLink:Object(s.a)({display:"block",fontSize:14},e.breakpoints.down("xs"),{fontSize:12})}})),xe=function(){var e=je();return Object(n.jsx)(b.a,{component:"footer",className:e.root,children:Object(n.jsx)(K.a,{className:e.cell,children:Object(n.jsxs)(h.a,{container:!0,justify:"space-between",spacing:6,children:[Object(n.jsxs)(h.a,{item:!0,xs:12,md:7,children:[Object(n.jsx)("img",{src:"/logos/polywrap-horizontal.svg",alt:"Polywrap Logo",className:e.logo}),Object(n.jsx)(b.a,{marginTop:3,children:Object(n.jsxs)(h.a,{container:!0,spacing:4,children:[Object(n.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(W.a,{variant:"h6",children:"Code"}),Object(n.jsxs)(b.a,{marginTop:2,children:[Object(n.jsx)(b.a,{className:e.footerDivider}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://github.com/polywrap/monorepo",target:"_blank",color:"textPrimary",variant:"body1",children:"Toolchain"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://github.com/polywrap/hub",target:"_blank",color:"textPrimary",variant:"body1",children:"The Hub"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://docs.polywrap.io/",target:"_blank",color:"textPrimary",variant:"body1",children:"Docs"})]})]}),Object(n.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(W.a,{variant:"h6",children:"Social"}),Object(n.jsxs)(b.a,{marginTop:2,children:[Object(n.jsx)(b.a,{className:e.footerDivider}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://discord.com/invite/Z5m88a5qWu",target:"_blank",color:"textPrimary",variant:"body1",children:"Discord"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://twitter.com/polywrap_io",target:"_blank",color:"textPrimary",variant:"body1",children:"Twitter"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://blog.polywrap.io/",target:"_blank",color:"textPrimary",variant:"body1",children:"Blog"})]})]}),Object(n.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(W.a,{variant:"h6",children:"Governance"}),Object(n.jsxs)(b.a,{marginTop:2,children:[Object(n.jsx)(b.a,{className:e.footerDivider}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://handbook.polywrap.io",target:"_blank",color:"textPrimary",variant:"body1",children:"Handbook"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances",target:"_blank",color:"textPrimary",variant:"body1",children:"Funds"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://snapshot.org/#/polywrap.eth",target:"_blank",color:"textPrimary",variant:"body1",children:"Voting"}),Object(n.jsx)(ee.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://forum.polywrap.io",target:"_blank",color:"textPrimary",variant:"body1",children:"Forum"})]})]})]})})]}),Object(n.jsxs)(h.a,{item:!0,xs:12,md:5,children:[Object(n.jsx)(W.a,{variant:"h4",children:"Get Wrapped"}),Object(n.jsx)(b.a,{marginTop:5,children:Object(n.jsx)(re,{location:"footer"})})]})]})})})},fe=(a(126),Object(m.a)((function(e){return{wrapper:Object(s.a)({},e.breakpoints.down("sm"),{display:"block"}),main:Object(s.a)({},e.breakpoints.down("sm"),{paddingLeft:20,paddingRight:20})}}))),Oe=function(){var e=fe();return Object(n.jsxs)(p.a,{theme:P,children:[Object(n.jsx)(g.a,{}),Object(n.jsx)(u.ParallaxProvider,{children:Object(n.jsx)(b.a,{width:"100%",minHeight:"100vh",overflow:"hidden",children:Object(n.jsx)(l.a,{children:Object(n.jsx)(h.a,{container:!0,className:e.wrapper,children:Object(n.jsxs)(b.a,{display:"flex",flexDirection:"column",flexGrow:"1",position:"relative",className:e.main,children:[Object(n.jsx)(pe,{}),Object(n.jsx)(ue,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,children:Object(n.jsx)($,{})}),Object(n.jsx)(d.a,{path:"/signup",children:Object(n.jsx)(se,{})})]}),Object(n.jsx)(xe,{})]})})})})})]})};X.a.initialize("UA-160302501-1"),c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Oe,{})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.cd12b7f4.chunk.js.map