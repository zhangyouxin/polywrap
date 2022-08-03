(this["webpackJsonp@polywrap/landing-page"]=this["webpackJsonp@polywrap/landing-page"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),o=a.n(i),r=a(11),s=a.n(r),c=a(5),l=a(61),d=a(12),p=a(159),b=a(162),h=a(155),m=a(152),g=a(160),j=a(17),u=a(81),x=a(164),f={acceptanceLossPercentage:1,maxChecks:10},y=function(e){return Object(x.a)(e,f).filter},O={gradient:"linear-gradient(to right, #74DD9F 20%, #000000, 20%)",start:"#74DD9F",mid:"#4ED29F",end:"#27C69F",700:"#06644D",direction:"120deg"},w={start:"#1B5FED",mid:"#1B6DED",end:"#1B87ED",300:"#66D9EF",800:"#293653",900:"#1E2B45",1e3:"#1d2538",direction:179},v={gradient:"linear-gradient(to right, #FFC272, #FFE272)",400:"#FFE272",500:"#FFC272",direction:0},k={gradient:"linear-gradient(0deg, #000000 35%, #FFFFFF 35%)",start:"#878787",end:"#FFFFFF",direction:0,opacity:.35},S="#FFFFFF",P=Object(u.a)({palette:{primary:{main:O.start,dark:O.end},secondary:{main:w.end,dark:w.start},text:{primary:S,secondary:"rgba(255,255,255,0.7)",disabled:"rgba(255,255,255,0.3)"},background:{default:w[900]}},typography:{fontFamily:"'Raleway', sans-serif",h1:{fontSize:80,fontWeight:900,lineHeight:1},h2:{fontSize:64,fontWeight:900,lineHeight:1},h3:{fontSize:40,fontWeight:900,lineHeight:1,"@media (max-width:650px)":{fontSize:32}},h4:{fontSize:32,fontWeight:900,lineHeight:1,"@media (max-width:650px)":{fontSize:28}},subtitle1:{fontSize:24,fontWeight:900,lineHeight:1.5},body1:{fontSize:16,lineHeight:1.75}},overrides:{MuiCssBaseline:{"@global":{html:{backgroundColor:w[900]},body:{overflowX:"hidden"}}},MuiAppBar:{root:{boxShadow:"none"}},MuiInput:{root:{background:"".concat(w[900],"88"),backdropFilter:"blur(8px)",border:"solid 1px ".concat(O[700]),borderRadius:4,fontSize:"1rem",fontWeight:500,transition:"background 0.25s ease-in-out","&.Mui-focused":{background:w[900]}}},MuiTextField:{root:{"& .MuiInput-underline:before":{borderBottomColor:"none"},"& .MuiInput-underline:hover:before":{borderBottomColor:"none"},"& .MuiInput-underline:after":{borderBottomColor:"none"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"0"}}},MuiButton:{containedPrimary:{background:"radial-gradient(circle at 80% 50%, ".concat(v[400],", ").concat(v[500],")"),backgroundSize:"250%",backgroundPositionX:"0px",borderRadius:999,boxShadow:"0 8px 16px ".concat(w[900]),color:w[900],fontWeight:700,transform:"translateY(0)",transition:"background 0.25s ease-in-out, transform 0.25s ease-in-out","&:hover":{backgroundPositionX:"30%",transform:"translateY(-1px)"},"& .MuiButton-endIcon":{marginLeft:4}}},MuiLink:{root:{"&:hover":{color:O.start}}}}}),N={textSecondary:y(k.start),secondary:y(v[400])},T=a(38),F=a(154),L=a(124),I=a(163),W=a(30),z=a.n(W),B=Object(m.a)((function(e){var t,a,n;return{root:(t={minHeight:"100vh",margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:e.spacing(3)},Object(c.a)(t,e.breakpoints.down("sm"),{minHeight:"unset",padding:"0"}),Object(c.a)(t,e.breakpoints.up("xs"),{maxWidth:"90vw"}),t),heroPolywrapper:(a={display:"flex",marginLeft:"auto",flexDirection:"column",alignItems:"center",justifyContent:"center",objectFit:"cover",height:"auto",width:"100%"},Object(c.a)(a,e.breakpoints.down("md"),{aspectRatio:"3/2",maxWidth:"60vw",margin:"80px auto 20px"}),Object(c.a)(a,e.breakpoints.down("xs"),{marginBottom:20,marginTop:100}),a),heroTitle:(n={fontWeight:900,marginBottom:20,marginTop:20},Object(c.a)(n,e.breakpoints.down("md"),{fontSize:48}),Object(c.a)(n,e.breakpoints.down("sm"),{textAlign:"center",marginTop:10,fontSize:28}),n),heroBody:Object(c.a)({fontSize:20},e.breakpoints.down("sm"),{textAlign:"center",fontSize:16}),heroSignUpFlex:Object(c.a)({},e.breakpoints.down("md"),{justifyContent:"center"}),heroTextField:{borderRadius:"99px 16px 16px 99px",maxWidth:400,width:"100%","& .MuiInput-input":{height:38}},heroButton:Object(c.a)({borderRadius:999,fontSize:18,padding:"9px 28px",marginTop:40,whiteSpace:"nowrap"},e.breakpoints.down("sm"),{marginTop:12,fontSize:14}),heroSignupSuccess:{backgroundColor:e.palette.primary.dark,borderRadius:8,boxShadow:"0 8px 16px ".concat(w[900],"88"),fontWeight:700,padding:8,width:"100%"},technicalPreview:Object(c.a)({color:w.end,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",paddingLeft:2},e.breakpoints.down("sm"),{textAlign:"center",fontSize:12}),"@keyframes fadeInUp":{"0%":{opacity:0,transform:"translateY(5%)"},"100%":{opacity:1,transform:"translateY(0%)"}},"@keyframes float":{"0%, 100%":{transform:"translateY(0)",transitionTimingFunction:"ease-in"},"50%":{transform:"translateY(-3%)",transitionTimingFunction:"ease-out"}},heroContent:Object(c.a)({animation:"$fadeInUp 1s 1s forwards ease-in",opacity:0},e.breakpoints.down("sm"),{alignItems:"center",display:"flex",flexDirection:"column"}),heroIllustration:Object(c.a)({animation:"$float 6s infinite"},e.breakpoints.down("sm"),{order:-1}),errorText:{color:"#f44336"}}})),C=function(){var e=Object(T.a)(),t=B(),a=Object(F.a)(e.breakpoints.down("xs"));return Object(n.jsxs)(h.a,{className:t.root,container:!0,justify:"center",alignItems:"center",spacing:6,direction:a?"row-reverse":"row",children:[Object(n.jsx)(h.a,{item:!0,sm:12,md:6,children:Object(n.jsx)(j.Parallax,{y:[60,-60],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsxs)(b.a,{className:t.heroContent,children:[Object(n.jsx)(L.a,{className:t.heroTitle,color:"textPrimary",variant:"h1",children:"Use Web3 Anywhere."}),Object(n.jsx)(L.a,{className:t.heroBody,color:"textSecondary",variant:"body1",children:"Polywrap is a set of tools that uses Wasm and GraphQL to deliver web3 protocols to any execution environment. Build and publish your protocol wrapper with Polywrap to be accessible from all types of applications."}),Object(n.jsx)(I.a,{className:t.heroButton,color:"primary",href:"https://discord.gg/bGsqQrNhqd",target:"_blank",rel:"noredirect",endIcon:Object(n.jsx)(z.a,{}),type:"submit",variant:"contained",children:"Join Our Discord"})]})})}),Object(n.jsx)(h.a,{className:t.heroIllustration,item:!0,sm:12,md:6,children:Object(n.jsx)(b.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",children:Object(n.jsx)(j.Parallax,{y:[80,-80],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsx)("img",{className:t.heroPolywrapper,src:"/imgs/polywrapper-hero.png",alt:"Polywrap Logo"})})})})]})},D=Object(m.a)((function(e){var t,a;return{root:Object(c.a)({margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:20,paddingRight:20,zIndex:2},e.breakpoints.down("md"),{marginTop:150,minHeight:"60vh"}),grid:Object(c.a)({justifyContent:"center",position:"relative"},e.breakpoints.down("sm"),{"& .MuiGrid-item":{padding:20}}),title:(t={fontWeight:900,marginBottom:20,marginTop:20},Object(c.a)(t,e.breakpoints.down("md"),{fontSize:48}),Object(c.a)(t,e.breakpoints.down("sm"),{textAlign:"center",marginTop:10,fontSize:28}),t),description:{marginTop:20},polywrapIllustration:(a={width:"100%"},Object(c.a)(a,e.breakpoints.down("md"),{maxHeight:"60vh"}),Object(c.a)(a,e.breakpoints.down("xs"),{maxHeight:"30vh"}),a)}})),R=function(){var e=Object(T.a)(),t=D();return Object(n.jsx)(b.a,{position:"relative",className:t.root,children:Object(n.jsx)(j.Parallax,{y:[20,-35],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsxs)(h.a,{container:!0,spacing:10,alignItems:"flex-start",className:t.grid,children:[Object(n.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(n.jsx)("img",{className:t.polywrapIllustration,src:"/imgs/wrappers-white-wave.svg",alt:"Polywrap - wrapper white wave"})}),Object(n.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(L.a,{variant:"h3",color:"textPrimary",className:t.title,children:"Say Goodbye to Javascript Wrappers"}),Object(n.jsx)(L.a,{variant:"body1",color:"textSecondary",className:t.description,children:"Today, teams are architecting and maintaining custom SDKs, mostly in Javascript. This breaks composability and severely restricts the types of software that can interact with web3 securely and efficiently."})]})]})})})},M=Object(m.a)((function(e){return{root:Object(c.a)({flexDirection:"column",minHeight:"100vh",justifyContent:"center",marginBottom:100,position:"relative",padding:"0 20px",zIndex:0,marginTop:140},e.breakpoints.down("sm"),{marginTop:200,minHeight:"unset"}),blurredPoly:{right:"-10%",opacity:"0.2",position:"absolute",top:"-30%",width:"40vw",zIndex:0},cell:{margin:"64px auto 0",maxWidth:e.breakpoints.values.md,position:"relative"},featureGrid:{justifyContent:"center"},featureItem:{position:"relative"},featureIconContainer:{height:96,margin:"auto",width:96},featureIconBg:{height:"140%",left:"-20%",opacity:0,position:"absolute",top:"0%",width:"140%",zIndex:-1},featureIcon:{width:"100%"},featureTitle:{margin:"20px auto",lineHeight:1,whiteSpace:"nowrap"},featureDescription:{marginTop:20},animatedBlob:{fill:e.palette.secondary.dark,left:"5%",opacity:"0.5",mixBlendMode:"multiply",position:"absolute",top:"5%",width:"90%"},description:{marginTop:20}}})),H=[{slug:"multi_platform",title:"Multi-Platform",description:"Write your SDK once, use it anywhere. Simply add the Polywrap Client to your user applications."},{slug:"user_friendly",title:"User-Friendly",description:"Integrating Web3 is finally as easy as Web2, thanks to GraphQL syntax."},{slug:"secure",title:"Secure",description:"Sandboxing keeps users safe by isolating wrappers from application memory."},{slug:"scalable",title:"Scalable",description:"Keep apps lightweight and efficient. Only download what you need, when you need it."},{slug:"composable",title:"Composable",description:"Endlessly compose and extend protocols with imports and standard interfaces."},{slug:"upgradable",title:"Upgradable",description:"Ditch the rebuilds with configurable run-time updates."}],_=function(){var e=Object(T.a)(),t=M();return Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",className:t.root,children:[Object(n.jsx)(b.a,{className:t.blurredPoly,children:Object(n.jsx)(j.Parallax,{y:[-90,100],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(n.jsx)("img",{width:"100%",src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})})}),Object(n.jsxs)(j.Parallax,{y:[-5,5],disabled:window.innerWidth<e.breakpoints.values.md,children:[Object(n.jsx)(L.a,{variant:"h3",color:"textPrimary",align:"center",children:"Next-Gen SDKs for Web3"}),Object(n.jsx)(b.a,{className:t.cell,children:Object(n.jsx)(h.a,{container:!0,spacing:6,alignItems:"flex-start",className:t.featureGrid,children:H.map((function(e,a){return Object(n.jsx)(h.a,{xs:12,sm:6,md:4,item:!0,className:t.featureItem,children:Object(n.jsxs)(b.a,{position:"relative",children:[Object(n.jsxs)(b.a,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",className:t.featureIconContainer,children:[Object(n.jsx)("img",{className:t.featureIconBg,width:"100%",src:"".concat("","/imgs/assets/blob-1.png"),alt:""}),Object(n.jsx)("img",{className:t.featureIcon,width:"100%",src:"".concat("","/imgs/assets/features/").concat(e.slug,".png"),alt:""})]}),Object(n.jsx)(L.a,{variant:"subtitle1",color:"textPrimary",align:"center",className:t.featureTitle,children:e.title}),Object(n.jsx)(L.a,{variant:"body1",color:"textSecondary",align:"center",className:t.featureDescription,children:e.description})]})},e.slug)}))})})]})]})},A=a(156),G=a(157),E=[{logo:"/logos/gnosis.png",persona:"Team Gnosis",description:"Polywrap will make it easy for everyone to build on top of Gnosis\n    technologies and interact with our contracts and interfaces. This will\n    help us achieve our vision of building open platforms and removing\n    gatekeepers.",url:"https://gnosis.io/"},{logo:"/logos/pocket.png",persona:"Michael O'Rourke, Founder",description:"By creating one single standard for web3 developers,\n    Polywrap massively improves the experience of interacting with different protocols.",url:"https://www.pokt.network"},{logo:"/logos/gelato.png",persona:"Hilmar X, Legendary Member",description:"With the help of Polywrap, Gelato will enable every \n    developer to easily \n    automate the execution of transactions on networks like Ethereum, giving them the ability to \n    provide arbitrary instructions to a decentralized network of bots with a single Wrapper call.",url:"https://gelato.network/"}],U=a(78),J=a.n(U),Y=Object(m.a)((function(e){return{root:Object(c.a)({flexDirection:"column",minHeight:"60vh",justifyContent:"center",marginBottom:100,marginTop:140,position:"relative",padding:"0 20px",zIndex:0},e.breakpoints.down("sm"),{minHeight:"unset"}),title:Object(c.a)({display:"block",margin:"auto"},e.breakpoints.down("sm"),{fontSize:32}),testimonialText:Object(c.a)({display:"block",margin:"auto",marginBottom:20},e.breakpoints.down("sm"),{fontSize:32}),testimonial:Object(c.a)({padding:e.spacing(8),paddingBottom:e.spacing(0),position:"relative",width:"50%"},e.breakpoints.down("sm"),{width:"100%","& h6":{fontSize:20}}),testimonialQuote:{color:e.palette.text.secondary,fontSize:80,opacity:.2,transform:"translate(-16px, 12px)"},logo:{filter:N.textSecondary,height:50,minWidth:120,objectFit:"contain","&:hover":{filter:N.secondary}}}})),Q=function(){var e=Y();return Object(n.jsxs)(b.a,{className:e.root,children:[Object(n.jsxs)(L.a,{className:e.title,variant:"h3",align:"center",color:"textPrimary",children:["Protocols"," ",Object(n.jsx)("span",{role:"img","aria-label":"yellow heart",children:"\ud83d\udc9b"})," ","Polywrap"]}),Object(n.jsx)(A.a,{maxWidth:"lg",children:Object(n.jsx)(b.a,{display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:-8,marginRight:-8,position:"relative",zIndex:2,children:E.map((function(t,a){return Object(n.jsx)(b.a,{className:e.testimonial,children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(J.a,{className:e.testimonialQuote}),Object(n.jsx)(L.a,{variant:"subtitle1",style:{fontSize:20},color:"textSecondary",children:t.description}),Object(n.jsx)(b.a,{marginTop:2,children:Object(n.jsx)(L.a,{variant:"body1",color:"textSecondary",children:t.persona})}),Object(n.jsx)(b.a,{marginTop:2,children:Object(n.jsx)(G.a,{href:t.url,target:"_blank",children:Object(n.jsx)("img",{src:t.logo,className:e.logo,alt:""})})})]})},"testimonial-".concat(a))}))})})]})},X=a(31),q=Object(m.a)((function(e){return{root:Object(c.a)({maxWidth:"1400px",position:"relative"},e.breakpoints.up("sm"),{margin:"auto"})}})),K=function(){X.a.pageview("home");var e=q();return Object(n.jsxs)(b.a,{className:e.root,children:[Object(n.jsx)(C,{}),Object(n.jsx)(R,{}),Object(n.jsx)(_,{}),Object(n.jsx)(Q,{})]})},$=a(62),Z=a.n($),V=a(79),ee=a(27),te=a(161),ae=a(80),ne=a.n(ae),ie=Object(m.a)((function(e){var t;return{heroSignUpFlex:(t={},Object(c.a)(t,e.breakpoints.down("md"),{justifyContent:"center"}),Object(c.a)(t,e.breakpoints.down("sm"),{flexWrap:"wrap"}),t),heroTextField:Object(c.a)({borderRadius:"99px 16px 16px 99px",display:"flex",flexGrow:1,maxWidth:400,"& .MuiInput-input":{height:38}},e.breakpoints.down("sm"),{width:"100%"}),heroButton:Object(c.a)({borderRadius:"16px 99px 99px 16px",fontSize:18,padding:"9px 28px",marginLeft:20,whiteSpace:"nowrap"},e.breakpoints.down("sm"),{borderRadius:99,marginLeft:0,marginTop:e.spacing(2),width:"100%"}),heroSignupSuccess:{backgroundColor:e.palette.primary.dark,borderRadius:8,boxShadow:"0 8px 16px ".concat(w[900],"88"),fontWeight:700,padding:8,width:"100%"},backToPolywrap:{color:e.palette.primary.main,display:"block",fontSize:24,fontWeight:700,marginTop:e.spacing(3)},errorText:{color:"#f44336"}}})),oe=function(e){var t=e.location,a=ie(),o=Object(i.useState)(!1),r=Object(ee.a)(o,2),s=r[0],c=r[1],l=Object(i.useState)(""),d=Object(ee.a)(l,2),p=d[0],h=d[1],m=Object(i.useState)(""),g=Object(ee.a)(m,2),j=g[0],u=g[1],x=Object(i.useState)(!1),f=Object(ee.a)(x,2),y=f[0],O=f[1],w=function(){var e=Object(V.a)(Z.a.mark((function e(){var a,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!0),/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)){e.next=7;break}return u("Invalid email address..."),e.abrupt("return");case 7:u("");case 8:return e.prev=8,e.next=11,fetch("https://us-central1-substackapi.cloudfunctions.net/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:p,domain:"blog.polywrap.io"})});case 11:a=e.sent,X.a.event({category:"Button-".concat(t),action:"Newsletter Sign Up",label:"Origin Release"}),n=200===a.status,c(n),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),u('Sign-up failed... please use the "contract" form above.');case 20:O(!1);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:w,children:[Object(n.jsx)(b.a,{className:a.heroSignUpFlex,display:"flex",alignItems:"center",children:s?Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(L.a,{className:a.heroSignupSuccess,align:"center",color:"textPrimary",children:["Thank you for signing up ",p,"! More details coming soon."]}),"signup"===t?Object(n.jsx)(G.a,{href:"/",className:a.backToPolywrap,children:Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",color:"primary",children:[Object(n.jsx)(b.a,{marginRight:1,display:"flex",children:Object(n.jsx)(ne.a,{})}),"Go Back to Polywrap"]})}):null]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(te.a,{className:a.heroTextField,placeholder:"signup"===t?"Request Early Access":"email address",inputProps:{style:{textAlign:"center"}},onChange:function(e){return h(e.target.value)}}),Object(n.jsx)(I.a,{className:a.heroButton,color:"primary",endIcon:Object(n.jsx)(z.a,{}),type:"button",variant:"contained",onClick:w,disabled:y,children:"signup"===t?"Join Our Discord":"Subscribe"})]})}),j&&Object(n.jsx)(L.a,{className:a.errorText,children:j})]})},re=Object(m.a)((function(e){var t,a;return{root:Object(c.a)({minHeight:"100vh",margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:e.spacing(3),position:"relative",zIndex:2},e.breakpoints.down("sm"),{minHeight:"unset",padding:"0"}),technicalPreview:Object(c.a)({color:w.end,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",paddingLeft:2},e.breakpoints.down("sm"),{textAlign:"center"}),heroPolywrapper:(t={display:"flex",marginLeft:"auto",flexDirection:"column",alignItems:"center",justifyContent:"center",objectFit:"cover",height:"auto",width:"100%"},Object(c.a)(t,e.breakpoints.down("md"),{aspectRatio:"3/2",maxWidth:"60vw",margin:"80px auto 20px"}),Object(c.a)(t,e.breakpoints.down("xs"),{marginBottom:20,marginTop:100}),t),heroTitle:(a={fontWeight:900,marginBottom:20,marginTop:20},Object(c.a)(a,e.breakpoints.down("md"),{fontSize:48}),Object(c.a)(a,e.breakpoints.down("sm"),{textAlign:"center"}),Object(c.a)(a,e.breakpoints.down("xs"),{fontSize:36}),a),heroBody:{fontSize:16,lineHeight:1.75},polywrapLink:{alignItems:"center",color:e.palette.primary.main,display:"inline-flex",fontWeight:700,marginLeft:8,textDecoration:"underline"},"@keyframes float":{"0%, 100%":{transform:"translateY(0)",transitionTimingFunction:"ease-in"},"50%":{transform:"translateY(-3%)",transitionTimingFunction:"ease-out"}},heroIllustration:Object(c.a)({animation:"$float 6s infinite"},e.breakpoints.down("sm"),{order:-1})}})),se=function(){var e=Object(T.a)(),t=re(),a=Object(F.a)(e.breakpoints.down("xs"));return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(h.a,{className:t.root,container:!0,justify:"center",alignItems:"center",direction:a?"row-reverse":"row",children:[Object(n.jsxs)(h.a,{item:!0,sm:12,md:7,children:[Object(n.jsx)(L.a,{variant:"subtitle2",color:"secondary",className:t.technicalPreview,children:"Technical Preview"}),Object(n.jsx)(L.a,{className:t.heroTitle,color:"textPrimary",variant:"h2",children:"Bring Web3 to Life"}),Object(n.jsxs)(L.a,{className:t.heroBody,color:"textSecondary",variant:"body1",children:["Access is limited to a small group of testers during the alpha release of Polywrap Hub.",Object(n.jsx)("br",{}),"Sign up today for your chance to try it out early and help us improve."]}),Object(n.jsx)(b.a,{marginTop:4,children:Object(n.jsx)(oe,{location:"signup"})}),Object(n.jsx)(b.a,{marginTop:4,children:Object(n.jsxs)(L.a,{component:"div",variant:"body2",children:["Want to start building right away?",Object(n.jsxs)(b.a,{className:t.polywrapLink,children:[Object(n.jsx)(G.a,{href:"https://docs.polywrap.io/guides/create-as-wrapper/project-setup",target:"_blank",children:"Build a Polywrap"}),Object(n.jsx)(z.a,{})]})]})})]}),Object(n.jsx)(h.a,{className:t.heroIllustration,item:!0,sm:12,md:5,children:Object(n.jsx)(b.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",children:Object(n.jsx)("img",{className:t.heroPolywrapper,src:"/imgs/polywrapper-hero.svg",alt:"Polywrap Logo"})})})]})})},ce=Object(m.a)((function(e){var t;return{root:{overflowX:"hidden"},bgMembrane:{height:"auto",position:"absolute",opacity:1,"& img":{width:"100%"}},blurredPoly:{position:"relative",opacity:"0.25",mixBlendMode:"hard-light"},blurredPoly1:{transform:"scale(2) translate(5%, 35%) rotate(125deg)",opacity:"0.25"},blurredPoly2:(t={transform:"scale(0.5) rotate(-75deg)",opacity:"0.3"},Object(c.a)(t,e.breakpoints.between("xs","md"),{left:"44%",top:"7%",transform:"scale(0.25) rotate(125deg)"}),Object(c.a)(t,e.breakpoints.down("xs"),{left:"9%",top:"5%",transform:"scale(0.1) rotate(125deg)"}),t),blurredPoly3:{transform:"scale(0.25) translate(650%, 300%) rotate(65deg)",opacity:"0.4"}}})),le={width:"100vw",height:"100vh",top:0,left:0,position:"absolute"},de=function(){X.a.pageview("home");var e=ce();return Object(n.jsx)(b.a,{position:"absolute",width:"100vw",height:"100%",left:"0",zIndex:"0",className:e.root,children:[{top:"-144vh",width:"120%"},{top:"104vh",width:"100%"},{top:"-72vh",width:"120%"},{top:"-128vh",width:"140%"},{top:"64vh",width:"120%"},{top:"144vh",width:"100%"},{top:"230vh",width:"140%"}].map((function(t,a){return Object(n.jsxs)("div",{children:[4===a&&Object(n.jsxs)(b.a,{display:"flex",children:[Object(n.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly1),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"}),Object(n.jsx)(j.Parallax,{y:[0,-50],styleOuter:le,styleInner:{mixBlendMode:"hard-light"},children:Object(n.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly2),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})}),Object(n.jsx)(j.Parallax,{y:[-25,25],styleOuter:le,children:Object(n.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly3),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})})]}),Object(n.jsx)(b.a,{top:t.top,width:t.width,className:e.bgMembrane,children:Object(n.jsx)("img",{src:"".concat("","/imgs/assets/bg/bg-membrane-").concat(a%2===0?1:2,".svg"),alt:""})})]},"membrane-".concat(a))}))})},pe=a(158),be=Object(m.a)((function(e){return{navLink:Object(c.a)({fontSize:14,fontWeight:700,marginRight:e.spacing(6),transition:"color 0.25s ease-in-out","&:hover":{color:O.start}},e.breakpoints.down("xs"),{fontSize:12,marginRight:e.spacing(2)}),navButton:Object(c.a)({backgroundColor:O.mid,borderRadius:999,fontWeight:700},e.breakpoints.down("xs"),{display:"none"})}})),he=function(e){var t=Object(T.a)(),a=e.scrollPosition,i=Object(F.a)(t.breakpoints.down("sm"),{defaultMatches:!0}),o=!i||a>150,r=be();return Object(n.jsxs)(b.a,{display:"flex",alignItems:"center",flexWrap:"nowrap",children:[Object(n.jsx)(G.a,{className:r.navLink,href:"https://docs.polywrap.io/",target:"_blank",rel:"noredirect",color:"textSecondary",variant:"body1",style:{display:"".concat(o&&i?"none":"block")},children:"Docs"}),Object(n.jsx)(G.a,{className:r.navLink,href:"https://forum.polywrap.io/",target:"_blank",rel:"noredirect",color:"textSecondary",variant:"body1",style:{display:"".concat(o&&i?"none":"block")},children:"Forum"}),Object(n.jsx)(G.a,{className:r.navLink,href:"https://blog.polywrap.io/",target:"_blank",rel:"noredirect",color:"textSecondary",variant:"body1",style:{display:"".concat(o&&i?"none":"block")},children:"Blog"}),Object(n.jsx)(I.a,{href:"https://contribute.polywrap.io/",target:"_blank",rel:"noredirect",variant:"contained",endIcon:Object(n.jsx)(z.a,{}),className:r.navButton,style:{display:"".concat(o?"flex":"none")},children:i?"Join Us":"Join and Contribute"})]})},me=Object(m.a)((function(e){var t;return{appBar:{background:"".concat(w[900],"c2"),backdropFilter:"blur(48px)",transition:"background 1s ease-in-out"},cell:{padding:0},logo:(t={cursor:"pointer",height:48,marginRight:e.spacing(2),transition:"opacity 0.25s ease-in-out",width:"auto"},Object(c.a)(t,e.breakpoints.down("sm"),{height:32}),Object(c.a)(t,"&:hover",{opacity:.8}),t),navLink:Object(c.a)({fontSize:"14px",fontWeight:700,marginRight:20,transition:"color 0.25s ease-in-out","&:hover":{color:O.start}},e.breakpoints.down("xs"),{fontSize:"12px",marginRight:10})}})),ge=function(){var e=Object(d.f)(),t=Object(d.g)(),a=me(),o=Object(i.useState)(0),r=Object(ee.a)(o,2),s=r[0],c=r[1],l=function(){var e=window.pageYOffset;c(e)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",l,{passive:!0}),function(){window.removeEventListener("scroll",l)}}),[]),Object(n.jsx)(pe.a,{position:"fixed",color:"transparent",className:s>150?a.appBar:void 0,style:{transition:"background 1s ease-in-out"},children:Object(n.jsx)(A.a,{maxWidth:"lg",className:a.cell,children:Object(n.jsxs)(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px",children:[Object(n.jsx)("img",{src:"/logos/polywrap-horizontal.svg",alt:"Polywrap Logo",onClick:function(){return t="/",e.push(t);var t},className:a.logo}),"/signup"!==t.pathname?Object(n.jsx)(he,{scrollPosition:s}):null]})})})},je=Object(m.a)((function(e){var t;return{root:Object(c.a)({backgroundColor:"".concat(w[1e3],"85"),padding:"".concat(e.spacing(8),"px ").concat(e.spacing(5),"px"),zIndex:2,position:"relative"},e.breakpoints.down("sm"),{marginLeft:-e.spacing(3),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(8),paddingBottom:e.spacing(8),width:"calc(100% + ".concat(2*e.spacing(3),"px)")}),cell:{},logo:(t={width:"auto",height:"48px",cursor:"pointer",transition:"opacity 0.25s ease-in-out"},Object(c.a)(t,e.breakpoints.down("sm"),{height:e.spacing(4)}),Object(c.a)(t,"&:hover",{opacity:.8}),t),socialContainer:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"50px",marginRight:20,"&:last-of-type":{marginRight:0}},social:{cursor:"pointer",fontSize:24,color:e.palette.text.secondary,"&:hover":{color:e.palette.secondary.main}},navLink:Object(c.a)({fontSize:14,fontWeight:700,lineHeight:1,marginTop:e.spacing(3),transition:"color 0.25s ease-in-out","&:hover":{color:O.start}},e.breakpoints.down("xs"),{fontSize:12}),footerDivider:{backgroundColor:e.palette.primary.main,height:4,marginBottom:e.spacing(4),width:e.spacing(4)},footerLink:Object(c.a)({display:"block",fontSize:14},e.breakpoints.down("xs"),{fontSize:12})}})),ue=function(){var e=je();return Object(n.jsx)(b.a,{component:"footer",className:e.root,children:Object(n.jsx)(A.a,{className:e.cell,children:Object(n.jsxs)(h.a,{container:!0,justify:"space-between",spacing:6,children:[Object(n.jsxs)(h.a,{item:!0,xs:12,md:7,children:[Object(n.jsx)("img",{src:"/logos/polywrap-horizontal.svg",alt:"Polywrap Logo",className:e.logo}),Object(n.jsx)(b.a,{marginTop:3,children:Object(n.jsxs)(h.a,{container:!0,spacing:4,children:[Object(n.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(L.a,{variant:"h6",children:"Code"}),Object(n.jsxs)(b.a,{marginTop:2,children:[Object(n.jsx)(b.a,{className:e.footerDivider}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://github.com/polywrap/monorepo",target:"_blank",color:"textPrimary",variant:"body1",children:"Toolchain"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://github.com/polywrap/hub",target:"_blank",color:"textPrimary",variant:"body1",children:"The Hub"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://docs.polywrap.io/",target:"_blank",color:"textPrimary",variant:"body1",children:"Docs"})]})]}),Object(n.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(L.a,{variant:"h6",children:"Social"}),Object(n.jsxs)(b.a,{marginTop:2,children:[Object(n.jsx)(b.a,{className:e.footerDivider}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://discord.com/invite/Z5m88a5qWu",target:"_blank",color:"textPrimary",variant:"body1",children:"Discord"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://twitter.com/polywrap_io",target:"_blank",color:"textPrimary",variant:"body1",children:"Twitter"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://blog.polywrap.io/",target:"_blank",color:"textPrimary",variant:"body1",children:"Blog"})]})]}),Object(n.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(L.a,{variant:"h6",children:"Governance"}),Object(n.jsxs)(b.a,{marginTop:2,children:[Object(n.jsx)(b.a,{className:e.footerDivider}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://handbook.polywrap.io",target:"_blank",color:"textPrimary",variant:"body1",children:"Handbook"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances",target:"_blank",color:"textPrimary",variant:"body1",children:"Funds"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://snapshot.org/#/polywrap.eth",target:"_blank",color:"textPrimary",variant:"body1",children:"Voting"}),Object(n.jsx)(G.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://forum.polywrap.io",target:"_blank",color:"textPrimary",variant:"body1",children:"Forum"})]})]})]})})]}),Object(n.jsxs)(h.a,{item:!0,xs:12,md:5,children:[Object(n.jsx)(L.a,{variant:"h4",children:"Get Wrapped"}),Object(n.jsx)(b.a,{marginTop:5,children:Object(n.jsx)(oe,{location:"footer"})})]})]})})})},xe=(a(119),Object(m.a)((function(e){return{wrapper:Object(c.a)({},e.breakpoints.down("sm"),{display:"block"}),main:Object(c.a)({},e.breakpoints.down("sm"),{paddingLeft:20,paddingRight:20})}}))),fe=function(){var e=xe();return Object(n.jsxs)(p.a,{theme:P,children:[Object(n.jsx)(g.a,{}),Object(n.jsx)(j.ParallaxProvider,{children:Object(n.jsx)(b.a,{width:"100%",minHeight:"100vh",overflow:"hidden",children:Object(n.jsx)(l.a,{children:Object(n.jsx)(h.a,{container:!0,className:e.wrapper,children:Object(n.jsxs)(b.a,{display:"flex",flexDirection:"column",flexGrow:"1",position:"relative",className:e.main,children:[Object(n.jsx)(de,{}),Object(n.jsx)(ge,{}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,children:Object(n.jsx)(K,{})}),Object(n.jsx)(d.a,{path:"/signup",children:Object(n.jsx)(se,{})})]}),Object(n.jsx)(ue,{})]})})})})})]})};X.a.initialize("UA-160302501-1"),s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(fe,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.180a57c1.chunk.js.map