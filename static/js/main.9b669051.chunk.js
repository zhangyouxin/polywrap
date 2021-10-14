(this["webpackJsonp@polywrap/landing-page"]=this["webpackJsonp@polywrap/landing-page"]||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a(0),r=a.n(n),i=a(11),s=a.n(i),c=a(4),l=a(35),d=a(12),p=a(159),b=a(162),h=a(155),g=a(152),m=a(160),j=a(15),u=a(81),x=a(164),f={acceptanceLossPercentage:1,maxChecks:10},y=function(e){return Object(x.a)(e,f).filter},O={gradient:"linear-gradient(to right, #74DD9F 20%, #000000, 20%)",start:"#74DD9F",mid:"#4ED29F",end:"#27C69F",700:"#06644D",direction:"120deg"},w={start:"#1B5FED",mid:"#1B6DED",end:"#1B87ED",300:"#66D9EF",800:"#293653",900:"#1E2B45",1e3:"#1d2538",direction:179},v={gradient:"linear-gradient(to right, #FFC272, #FFE272)",400:"#FFE272",500:"#FFC272",direction:0},k={gradient:"linear-gradient(0deg, #000000 35%, #FFFFFF 35%)",start:"#878787",end:"#FFFFFF",direction:0,opacity:.35},P="#FFFFFF",N=Object(u.a)({palette:{primary:{main:O.start,dark:O.end},secondary:{main:w.end,dark:w.start},text:{primary:P,secondary:"rgba(255,255,255,0.7)",disabled:"rgba(255,255,255,0.3)"},background:{default:w[900]}},typography:{fontFamily:"'Raleway', sans-serif",h1:{fontSize:80,fontWeight:900,lineHeight:1},h2:{fontSize:64,fontWeight:900,lineHeight:1},h3:{fontSize:40,fontWeight:900,lineHeight:1,"@media (max-width:650px)":{fontSize:32}},h4:{fontSize:32,fontWeight:900,lineHeight:1,"@media (max-width:650px)":{fontSize:28}},subtitle1:{fontSize:24,fontWeight:900,lineHeight:1.5},body1:{fontSize:16,lineHeight:1.75}},overrides:{MuiCssBaseline:{"@global":{html:{backgroundColor:w[900]},body:{overflowX:"hidden"}}},MuiAppBar:{root:{boxShadow:"none"}},MuiInput:{root:{background:"".concat(w[900],"88"),backdropFilter:"blur(8px)",border:"solid 1px ".concat(O[700]),borderRadius:4,fontSize:"1rem",fontWeight:500,transition:"background 0.25s ease-in-out","&.Mui-focused":{background:w[900]}}},MuiTextField:{root:{"& .MuiInput-underline:before":{borderBottomColor:"none"},"& .MuiInput-underline:hover:before":{borderBottomColor:"none"},"& .MuiInput-underline:after":{borderBottomColor:"none"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"0"}}},MuiButton:{containedPrimary:{background:"radial-gradient(circle at 80% 50%, ".concat(v[400],", ").concat(v[500],")"),backgroundSize:"250%",backgroundPositionX:"0px",borderRadius:999,boxShadow:"0 8px 16px ".concat(w[900]),color:w[900],fontWeight:700,transform:"translateY(0)",transition:"background 0.25s ease-in-out, transform 0.25s ease-in-out","&:hover":{backgroundPositionX:"30%",transform:"translateY(-1px)"},"& .MuiButton-endIcon":{marginLeft:4}}},MuiLink:{root:{"&:hover":{color:O.start}}}}}),S={textSecondary:y(k.start),secondary:y(v[400])},T=a(39),W=a(154),I=a(124),L=a(163),z=a(30),C=a.n(z),F="Join The Community",B=Object(g.a)((function(e){var t,a,o;return{root:(t={minHeight:"100vh",margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:e.spacing(3)},Object(c.a)(t,e.breakpoints.down("sm"),{minHeight:"unset",padding:"0"}),Object(c.a)(t,e.breakpoints.up("xs"),{maxWidth:"90vw"}),t),heroPolywrapper:(a={display:"flex",marginLeft:"auto",flexDirection:"column",alignItems:"center",justifyContent:"center",objectFit:"cover",height:"auto",width:"100%"},Object(c.a)(a,e.breakpoints.down("md"),{aspectRatio:"3/2",maxWidth:"60vw",margin:"80px auto 20px"}),Object(c.a)(a,e.breakpoints.down("xs"),{marginBottom:20,marginTop:100}),a),heroTitle:(o={fontWeight:900,marginBottom:20,marginTop:20},Object(c.a)(o,e.breakpoints.down("md"),{fontSize:48}),Object(c.a)(o,e.breakpoints.down("sm"),{textAlign:"center",marginTop:10,fontSize:28}),o),heroBody:Object(c.a)({fontSize:20},e.breakpoints.down("sm"),{textAlign:"center",fontSize:16}),heroSignUpFlex:Object(c.a)({},e.breakpoints.down("md"),{justifyContent:"center"}),heroTextField:{borderRadius:"99px 16px 16px 99px",maxWidth:400,width:"100%","& .MuiInput-input":{height:38}},heroButton:Object(c.a)({borderRadius:999,fontSize:18,padding:"9px 28px",marginTop:40,whiteSpace:"nowrap"},e.breakpoints.down("sm"),{marginTop:12,fontSize:14}),heroSignupSuccess:{backgroundColor:e.palette.primary.dark,borderRadius:8,boxShadow:"0 8px 16px ".concat(w[900],"88"),fontWeight:700,padding:8,width:"100%"},technicalPreview:Object(c.a)({color:w.end,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",paddingLeft:2},e.breakpoints.down("sm"),{textAlign:"center",fontSize:12}),"@keyframes fadeInUp":{"0%":{opacity:0,transform:"translateY(5%)"},"100%":{opacity:1,transform:"translateY(0%)"}},"@keyframes float":{"0%, 100%":{transform:"translateY(0)",transitionTimingFunction:"ease-in"},"50%":{transform:"translateY(-3%)",transitionTimingFunction:"ease-out"}},heroContent:Object(c.a)({animation:"$fadeInUp 1s 1s forwards ease-in",opacity:0},e.breakpoints.down("sm"),{alignItems:"center",display:"flex",flexDirection:"column"}),heroIllustration:Object(c.a)({animation:"$float 6s infinite"},e.breakpoints.down("sm"),{order:-1}),errorText:{color:"#f44336"}}})),D=function(){var e=Object(T.a)(),t=B(),a=Object(W.a)(e.breakpoints.down("xs"));Object(d.f)();return Object(o.jsxs)(h.a,{className:t.root,container:!0,justify:"center",alignItems:"center",direction:a?"row-reverse":"row",children:[Object(o.jsx)(h.a,{item:!0,sm:12,md:6,children:Object(o.jsx)(j.Parallax,{y:[60,-60],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(o.jsxs)(b.a,{className:t.heroContent,children:[Object(o.jsx)(I.a,{variant:"subtitle2",color:"secondary",className:t.technicalPreview,children:"Pre-Alpha"}),Object(o.jsx)(I.a,{className:t.heroTitle,color:"textPrimary",variant:"h1",children:"Use Web3 Anywhere"}),Object(o.jsx)(I.a,{className:t.heroBody,color:"textSecondary",variant:"body1",children:"Polywrap is a development platform that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols."}),Object(o.jsx)(L.a,{className:t.heroButton,component:"button",color:"primary",href:"https://discord.gg/bGsqQrNhqd",endIcon:Object(o.jsx)(C.a,{}),type:"submit",variant:"contained",children:F})]})})}),Object(o.jsx)(h.a,{className:t.heroIllustration,item:!0,sm:12,md:6,children:Object(o.jsx)(b.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",children:Object(o.jsx)(j.Parallax,{y:[80,-80],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(o.jsx)("img",{className:t.heroPolywrapper,src:"/imgs/polywrapper-hero.png",alt:"Polywrap Logo"})})})})]})},R=Object(g.a)((function(e){var t,a,o;return{root:(t={margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:20,paddingRight:20,zIndex:2},Object(c.a)(t,e.breakpoints.down("md"),{marginTop:150,minHeight:"60vh"}),Object(c.a)(t,e.breakpoints.up("xs"),{maxWidth:"90vw"}),t),grid:Object(c.a)({justifyContent:"center",position:"relative"},e.breakpoints.down("sm"),{"& .MuiGrid-item":{padding:20}}),title:(a={fontWeight:900,marginBottom:20,marginTop:20},Object(c.a)(a,e.breakpoints.down("md"),{fontSize:48}),Object(c.a)(a,e.breakpoints.down("sm"),{textAlign:"center",marginTop:10,fontSize:28}),a),description:{marginTop:20},polywrapIllustration:(o={width:"100%"},Object(c.a)(o,e.breakpoints.down("md"),{maxHeight:"60vh"}),Object(c.a)(o,e.breakpoints.down("xs"),{maxHeight:"30vh"}),o)}})),H=function(){var e=Object(T.a)(),t=R();return Object(o.jsx)(b.a,{position:"relative",className:t.root,children:Object(o.jsx)(j.Parallax,{y:[20,-35],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(o.jsxs)(h.a,{container:!0,spacing:10,alignItems:"flex-start",className:t.grid,children:[Object(o.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(o.jsx)("img",{className:t.polywrapIllustration,src:"/imgs/wrappers-white-wave.svg",alt:"Polywrap - wrapper white wave"})}),Object(o.jsxs)(h.a,{item:!0,xs:12,md:6,children:[Object(o.jsx)(I.a,{variant:"h3",color:"textPrimary",className:t.title,children:"Solving the Web3 Integration Problem"}),Object(o.jsx)(I.a,{variant:"body1",color:"textSecondary",className:t.description,children:"Web3 relies on SDKs to integrate virtually every type of protocol: DeFi, NFTs, DAOs, P2P Networks"}),Object(o.jsxs)(I.a,{variant:"body1",color:"textSecondary",className:t.description,children:["Due to traditional SDKs\u2019 short-comings, Web3\u2019s technical debt is growing day by day.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Traditional SDKs are:",Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Insecure, Bloated, Incompatible, and Language-Specific"})]})]})]})})})},A=Object(g.a)((function(e){return{root:Object(c.a)({flexDirection:"column",minHeight:"100vh",justifyContent:"center",marginBottom:100,position:"relative",padding:"0 20px",zIndex:0,marginTop:140},e.breakpoints.down("sm"),{marginTop:200,minHeight:"unset"}),blurredPoly:{right:"-10%",opacity:"0.2",position:"absolute",top:"-30%",width:"40vw",zIndex:0},cell:{margin:"64px auto 0",maxWidth:e.breakpoints.values.md,position:"relative"},featureGrid:{justifyContent:"center"},featureItem:{position:"relative"},featureIconContainer:{height:96,margin:"auto",width:96},featureIconBg:{height:"140%",left:"-20%",opacity:0,position:"absolute",top:"0%",width:"140%",zIndex:-1},featureIcon:{width:"100%"},featureTitle:{margin:"20px auto",lineHeight:1,whiteSpace:"nowrap"},featureDescription:{marginTop:20},animatedBlob:{fill:e.palette.secondary.dark,left:"5%",opacity:"0.5",mixBlendMode:"multiply",position:"absolute",top:"5%",width:"90%"},description:{marginTop:20}}})),M=[{slug:"multi_platform",title:"Multi-Platform",description:"Write your SDK once, use it anywhere. Simply add the Polywrap Client to your user applications."},{slug:"user_friendly",title:"User-Friendly",description:"Integrating Web3 is finally as easy as Web2, thanks to GraphQL syntax."},{slug:"secure",title:"Secure",description:"Sandboxing ensures your integrations are isolated from your application. Users are safer with Polywrap."},{slug:"scalable",title:"Scalable",description:"Keep applications light-weight and efficient, only download what you need, when you need it."},{slug:"composable",title:"Composable",description:"Polywrap makes composition and extensions easy. Combine using imports, or extend using standard interfaces."},{slug:"upgradable",title:"Upgradable",description:"Optionally upgrade your applications at run-time, no rebuilds required. Choose the level of control that makes sense for your application."}],_=function(){var e=Object(T.a)(),t=A();return Object(o.jsxs)(b.a,{display:"flex",alignItems:"center",className:t.root,children:[Object(o.jsx)(b.a,{className:t.blurredPoly,children:Object(o.jsx)(j.Parallax,{y:[-90,100],disabled:window.innerWidth<e.breakpoints.values.md,children:Object(o.jsx)("img",{width:"100%",src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})})}),Object(o.jsxs)(j.Parallax,{y:[-5,5],disabled:window.innerWidth<e.breakpoints.values.md,children:[Object(o.jsx)(I.a,{variant:"h3",color:"textPrimary",align:"center",children:"Next-Gen SDKs for Web3"}),Object(o.jsx)(b.a,{className:t.cell,children:Object(o.jsx)(h.a,{container:!0,spacing:6,alignItems:"flex-start",className:t.featureGrid,children:M.map((function(e,a){return Object(o.jsx)(h.a,{xs:12,sm:6,md:4,item:!0,className:t.featureItem,children:Object(o.jsxs)(b.a,{position:"relative",children:[Object(o.jsxs)(b.a,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",className:t.featureIconContainer,children:[Object(o.jsx)("img",{className:t.featureIconBg,width:"100%",src:"".concat("","/imgs/assets/blob-1.png"),alt:""}),Object(o.jsx)("img",{className:t.featureIcon,width:"100%",src:"".concat("","/imgs/assets/features/").concat(e.slug,".png"),alt:""})]}),Object(o.jsx)(I.a,{variant:"subtitle1",color:"textPrimary",align:"center",className:t.featureTitle,children:e.title}),Object(o.jsx)(I.a,{variant:"body1",color:"textSecondary",align:"center",className:t.featureDescription,children:e.description})]})},e.slug)}))})})]})]})},E=[{logo:"/logos/gnosis.png",persona:"Team Gnosis",description:"Polywrap will make it easy for everyone to build on top of Gnosis\n    technologies and interact with our contracts and interfaces. This will\n    help us achieve our vision of building open platforms and removing\n    gatekeepers",url:"https://gnosis.io/"},{logo:"/logos/gelato.png",persona:"Hilmar X, Legendary Member",description:"With the help of Polywrap, Gelato will enable every Web3 developer to easily \n    automate the execution of transactions on networks like Ethereum, giving them the ability to \n    provide arbitrary instructions to a decentralized network of bots with a single Web3 api call.",url:"https://gelato.network/"}],G=[{logo:"/logos/walletconnect.png",url:"https://walletconnect.org/",alt:"Wallet Connect"},{logo:"/logos/fleek.png",url:"https://fleek.co/",alt:"Fleek"},{logo:"/logos/razor.png",url:"https://razor.network/",alt:"Razor Network"},{logo:"/logos/3box.png",url:"https://3boxlabs.com/",alt:"3Box Labs"},{logo:"/logos/abridged.png",url:"https://abridged.io/",alt:"Abridged"},{logo:"/logos/mantradao.png",url:"https://mantradao.com/",alt:"Mantra DAO"},{logo:"/logos/rockside.png",url:"https://rockside.io/",alt:"Rockside"},{logo:"/logos/torus.png",url:"https://tor.us/",alt:"Torus"},{logo:"/logos/aleph.png",url:"https://aleph.im",alt:"Aleph"},{logo:"/logos/pocket.png",url:"https://www.pokt.network/",alt:"Pocket"},{logo:"/logos/gnosis.png",url:"https://gnosis.io/",alt:"Gnosis"},{logo:"/logos/dxdao.png",url:"https://dxdao.eth.link/#/",alt:"DXDAO"},{logo:"/logos/composable.png",url:"https://www.composable.finance/",alt:"Composable Finance"},{logo:"/logos/squad.png",url:"https://squad.games/",alt:"Squad Games"},{logo:"/logos/gelato.png",url:"https://gelato.network/",alt:"Gelato Network"},{logo:"/logos/zero.png",url:"https://www.0.exchange/",alt:"Zero Exchange"},{logo:"/logos/jarvis.png",url:"https://jarvis.network",alt:""},{logo:"/logos/boba.png",url:"https://boba.network",alt:"Boba Network"},{logo:"/logos/enya.png",url:"https://enya.ai",alt:""},{logo:"/logos/chainstack.png",url:"https://chainstack.com/",alt:"Chainstack"}],U=a(156),q=a(25),Y=Object(g.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",marginTop:140,marginBottom:50,justifyContent:"center"},launchPartnersText:Object(c.a)({display:"block",margin:"auto",marginBottom:20},e.breakpoints.down("sm"),{fontSize:32}),logo:{height:"auto",width:"100%",filter:S.textSecondary,"&:hover":{filter:S.secondary}},logoContainer:(t={display:"flex",padding:30,maxHeight:120,flexDirection:"column",justifyContent:"center"},Object(c.a)(t,e.breakpoints.down("sm"),{padding:20}),Object(c.a)(t,e.breakpoints.down("xs"),{padding:10}),t),innerLogoContainer:Object(c.a)({maxWidth:120,width:"12vw",height:"12vw",maxHeight:120,margin:"0 auto",display:"flex",flexDirection:"column",justifyContent:"center"},e.breakpoints.down("sm"),{width:"18vw",maxHeight:160,maxWidth:160}),launchPartnersContainer:{maxWidth:"1200px",margin:"auto"},becomePartnerContainer:{paddingRight:"20px",paddingLeft:"20px",maxWidth:"1200px",margin:"30px auto 0"},becomePartnerButton:{marginLeft:"auto",marginRight:"auto"}}})),Q=function(){var e=Object(T.a)(),t=Y(),a=Object(W.a)(e.breakpoints.down("xs"),{defaultMatches:!0});return Object(o.jsx)("section",{id:"partners",className:t.root,children:Object(o.jsx)(j.Parallax,{y:[-8,8],disabled:a,children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)(I.a,{className:t.launchPartnersText,variant:"h3",align:"center",color:"textPrimary",children:"Launch Partners"}),Object(o.jsx)(h.a,{className:t.launchPartnersContainer,container:!0,justify:"center",children:G.map((function(e){var a=e.logo,n=e.url;return Object(o.jsx)(h.a,{item:!0,children:Object(o.jsx)(U.a,{className:t.logoContainer,href:n,target:"_blank",onClick:function(){q.a.event({category:"Launch Partners",action:"goto ".concat(n),label:"Early Access"})},children:Object(o.jsx)(b.a,{className:t.innerLogoContainer,children:Object(o.jsx)("img",{className:t.logo,src:a,alt:n})})})},n)}))}),Object(o.jsx)(h.a,{className:t.becomePartnerContainer,container:!0,justify:"center",children:Object(o.jsx)(L.a,{className:t.becomePartnerButton,color:"secondary",variant:"outlined",href:"https://airtable.com/shra8gDgo8EgrRT6c",children:"Become a Partner"})})]})})})},K=Object(g.a)((function(e){return{root:Object(c.a)({justifyContent:"center",display:"flex",flexDirection:"column",minHeight:"60vh",position:"relative",zIndex:2,marginTop:140},e.breakpoints.down("md"),{marginTop:80,marginBottom:80}),cell:{margin:"auto",maxWidth:"90vw"},blurredGraphicContainer:{position:"absolute",bottom:"-30%",left:"-7%",opacity:.6,width:"50vw",zIndex:0},container:Object(c.a)({backgroundColor:w[1e3],borderRadius:8,boxShadow:"0 64px 96px -24px rgba(0,0,0,0.5)",padding:72,position:"relative"},e.breakpoints.down("sm"),{padding:32}),hubWireframeImg:Object(c.a)({boxShadow:"0 4px 64px ".concat(O.mid,"85"),borderRadius:4,transformOrigin:"top left",transform:"translateY(-8px)",maxHeight:"400px",maxWidth:"100%"},e.breakpoints.down("sm"),{boxShadow:"0 4px 32px ".concat(O.mid,"85"),width:"100%",transform:"none"})}})),X=function(){var e=Object(T.a)(),t=(Object(d.f)(),K()),a=Object(W.a)(e.breakpoints.down("xs"),{defaultMatches:!0});return Object(o.jsx)(b.a,{position:"relative",className:t.root,children:Object(o.jsxs)(b.a,{className:t.cell,children:[Object(o.jsx)(b.a,{className:t.blurredGraphicContainer,children:Object(o.jsx)(j.Parallax,{y:[-15,10],disabled:a,children:Object(o.jsx)("img",{src:"/imgs/polywrapper-callout-spot.png",alt:"polywrap blurred"})})}),Object(o.jsx)(b.a,{className:t.container,children:Object(o.jsxs)(h.a,{container:!0,spacing:a?6:10,alignItems:"stretch",children:[Object(o.jsxs)(h.a,{item:!0,xs:12,sm:6,children:[Object(o.jsx)(I.a,{variant:"h3",children:"Welcome to the Polywrap Hub..."}),Object(o.jsx)(b.a,{marginTop:2,children:Object(o.jsx)(I.a,{variant:"body1",children:"A developer-centric platform where you can discover, deploy, and interact with any Polywrapper in the ecosystem. We are paving the road, expecting endless collaboration and curation possibilities. Test and Integrate web3 protocols quickly on the browser with our GraphQL Playground, and publish your packages to decentralised hosting. Soon you'll be able to explore an endless ocean of wrappers, by querying tags like `multisig`, `defi`, or `vesting`. A more semantic web3 that's easy to compose together!                "})})]}),Object(o.jsx)(h.a,{item:!0,xs:12,sm:6,children:Object(o.jsx)(j.Parallax,{y:[24,-24],disabled:a,children:Object(o.jsx)(b.a,{children:Object(o.jsx)("img",{className:t.hubWireframeImg,src:"/imgs/assets/polywrap-hub-wireframe.png",alt:"Polywrap Hub"})})})})]})})]})})},Z=a(157),J=a(78),$=a.n(J),V=Object(g.a)((function(e){return{root:Object(c.a)({flexDirection:"column",minHeight:"60vh",justifyContent:"center",marginBottom:100,marginTop:140,position:"relative",padding:"0 20px",zIndex:0},e.breakpoints.down("sm"),{minHeight:"unset"}),title:Object(c.a)({display:"block",margin:"auto"},e.breakpoints.down("sm"),{fontSize:32}),testimonialText:Object(c.a)({display:"block",margin:"auto",marginBottom:20},e.breakpoints.down("sm"),{fontSize:32}),testimonial:Object(c.a)({padding:e.spacing(8),paddingBottom:e.spacing(0),position:"relative",width:"50%"},e.breakpoints.down("sm"),{width:"100%","& h6":{fontSize:20}}),testimonialQuote:{color:e.palette.text.secondary,fontSize:80,opacity:.2,transform:"translate(-16px, 12px)"},logo:{filter:S.textSecondary,height:50,minWidth:120,objectFit:"contain","&:hover":{filter:S.secondary}}}})),ee=function(){var e=V();return Object(o.jsxs)(b.a,{className:e.root,children:[Object(o.jsx)(I.a,{className:e.title,variant:"h3",align:"center",color:"textPrimary",children:"Validation"}),Object(o.jsx)(Z.a,{maxWidth:"lg",children:Object(o.jsx)(b.a,{display:"flex",justifyContent:"center",flexWrap:"wrap",marginLeft:-8,marginRight:-8,position:"relative",zIndex:2,children:E.map((function(t,a){return Object(o.jsx)(b.a,{className:e.testimonial,children:Object(o.jsxs)(b.a,{children:[Object(o.jsx)($.a,{className:e.testimonialQuote}),Object(o.jsx)(I.a,{variant:"subtitle1",style:{fontSize:20},color:"textSecondary",children:t.description}),Object(o.jsx)(b.a,{marginTop:2,children:Object(o.jsx)(I.a,{variant:"body1",color:"textSecondary",children:t.persona})}),Object(o.jsx)(b.a,{marginTop:2,children:Object(o.jsx)(U.a,{href:t.url,target:"_blank",children:Object(o.jsx)("img",{src:t.logo,className:e.logo,alt:""})})})]})},"testimonial-".concat(a))}))})})]})},te=Object(g.a)((function(e){return{root:Object(c.a)({maxWidth:"1400px",position:"relative"},e.breakpoints.up("sm"),{margin:"auto"})}})),ae=function(){q.a.pageview("home");var e=te();return Object(o.jsxs)(b.a,{className:e.root,children:[Object(o.jsx)(D,{}),Object(o.jsx)(H,{}),Object(o.jsx)(_,{}),Object(o.jsx)(X,{}),Object(o.jsx)(Q,{}),Object(o.jsx)(ee,{})]})},oe=a(64),ne=a.n(oe),re=a(79),ie=a(31),se=a(161),ce=a(80),le=a.n(ce),de=Object(g.a)((function(e){var t;return{heroSignUpFlex:(t={},Object(c.a)(t,e.breakpoints.down("md"),{justifyContent:"center"}),Object(c.a)(t,e.breakpoints.down("sm"),{flexWrap:"wrap"}),t),heroTextField:Object(c.a)({borderRadius:"99px 16px 16px 99px",display:"flex",flexGrow:1,maxWidth:400,"& .MuiInput-input":{height:38}},e.breakpoints.down("sm"),{width:"100%"}),heroButton:Object(c.a)({borderRadius:"16px 99px 99px 16px",fontSize:18,padding:"9px 28px",marginLeft:20,whiteSpace:"nowrap"},e.breakpoints.down("sm"),{borderRadius:99,marginLeft:0,marginTop:e.spacing(2),width:"100%"}),heroSignupSuccess:{backgroundColor:e.palette.primary.dark,borderRadius:8,boxShadow:"0 8px 16px ".concat(w[900],"88"),fontWeight:700,padding:8,width:"100%"},backToPolywrap:{color:e.palette.primary.main,display:"block",fontSize:24,fontWeight:700,marginTop:e.spacing(3)},errorText:{color:"#f44336"}}})),pe=function(e){var t=e.location,a=de(),r=Object(n.useState)(!1),i=Object(ie.a)(r,2),s=i[0],c=i[1],l=Object(n.useState)(""),d=Object(ie.a)(l,2),p=d[0],h=d[1],g=Object(n.useState)(""),m=Object(ie.a)(g,2),j=m[0],u=m[1],x=function(){var e=Object(re.a)(ne.a.mark((function e(){var a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(p)){e.next=6;break}return u("Invalid email address..."),e.abrupt("return");case 6:u("");case 7:return a="https://tech.us17.list-manage.com/subscribe/post-json?u=7515d8292da68c0a33f4c7e7e&amp;id=48ff512e96&c=jQuery34108557665382199082_1607465109249&b_7515d8292da68c0a33f4c7e7e_48ff512e96=&_=1607465109250",a+="&Email=".concat(p,"&EMAIL=").concat(p),a=encodeURI(a),e.prev=10,e.next=13,fetch(a,{mode:"no-cors"});case 13:q.a.event({category:"Button-".concat(t),action:F,label:"Early Access"}),c(!0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),u('Sign-up failed... please use the "contract" form above.');case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{children:[Object(o.jsx)(b.a,{className:a.heroSignUpFlex,display:"flex",alignItems:"center",children:s?Object(o.jsxs)(b.a,{children:[Object(o.jsxs)(I.a,{className:a.heroSignupSuccess,align:"center",color:"textPrimary",children:["Thank you for signing up ",p,"! More details coming soon."]}),"signup"===t?Object(o.jsx)(U.a,{href:"/",className:a.backToPolywrap,children:Object(o.jsxs)(b.a,{display:"flex",alignItems:"center",color:"primary",children:[Object(o.jsx)(b.a,{marginRight:1,display:"flex",children:Object(o.jsx)(le.a,{})}),"Go Back to Polywrap"]})}):null]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(se.a,{className:a.heroTextField,placeholder:"signup"===t?"Request Early Access":"email address",inputProps:{style:{textAlign:"center"}},onChange:function(e){return h(e.target.value)}}),Object(o.jsx)(L.a,{className:a.heroButton,color:"primary",endIcon:Object(o.jsx)(C.a,{}),type:"button",variant:"contained",onClick:x,children:"signup"===t?F:"Subscribe"})]})}),j&&Object(o.jsx)(I.a,{className:a.errorText,children:j})]})},be=Object(g.a)((function(e){var t,a;return{root:Object(c.a)({minHeight:"100vh",margin:"auto",maxWidth:e.breakpoints.values.lg,paddingLeft:e.spacing(3),position:"relative",zIndex:2},e.breakpoints.down("sm"),{minHeight:"unset",padding:"0"}),technicalPreview:Object(c.a)({color:w.end,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",paddingLeft:2},e.breakpoints.down("sm"),{textAlign:"center"}),heroPolywrapper:(t={display:"flex",marginLeft:"auto",flexDirection:"column",alignItems:"center",justifyContent:"center",objectFit:"cover",height:"auto",width:"100%"},Object(c.a)(t,e.breakpoints.down("md"),{aspectRatio:"3/2",maxWidth:"60vw",margin:"80px auto 20px"}),Object(c.a)(t,e.breakpoints.down("xs"),{marginBottom:20,marginTop:100}),t),heroTitle:(a={fontWeight:900,marginBottom:20,marginTop:20},Object(c.a)(a,e.breakpoints.down("md"),{fontSize:48}),Object(c.a)(a,e.breakpoints.down("sm"),{textAlign:"center"}),Object(c.a)(a,e.breakpoints.down("xs"),{fontSize:36}),a),heroBody:{fontSize:16,lineHeight:1.75},polywrapLink:{alignItems:"center",color:e.palette.primary.main,display:"inline-flex",fontWeight:700,marginLeft:8,textDecoration:"underline"},"@keyframes float":{"0%, 100%":{transform:"translateY(0)",transitionTimingFunction:"ease-in"},"50%":{transform:"translateY(-3%)",transitionTimingFunction:"ease-out"}},heroIllustration:Object(c.a)({animation:"$float 6s infinite"},e.breakpoints.down("sm"),{order:-1})}})),he=function(){var e=Object(T.a)(),t=be(),a=Object(W.a)(e.breakpoints.down("xs"));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(h.a,{className:t.root,container:!0,justify:"center",alignItems:"center",direction:a?"row-reverse":"row",children:[Object(o.jsxs)(h.a,{item:!0,sm:12,md:7,children:[Object(o.jsx)(I.a,{variant:"subtitle2",color:"secondary",className:t.technicalPreview,children:"Technical Preview"}),Object(o.jsx)(I.a,{className:t.heroTitle,color:"textPrimary",variant:"h2",children:"Bring Web3 to Life"}),Object(o.jsxs)(I.a,{className:t.heroBody,color:"textSecondary",variant:"body1",children:["Access is limited to a small group of testers during the alpha release of Polywrap Hub.",Object(o.jsx)("br",{}),"Sign up today for your chance to try it out early and help us improve."]}),Object(o.jsx)(b.a,{marginTop:4,children:Object(o.jsx)(pe,{location:"signup"})}),Object(o.jsx)(b.a,{marginTop:4,children:Object(o.jsxs)(I.a,{component:"div",variant:"body2",children:["Want to start building right away?",Object(o.jsxs)(b.a,{className:t.polywrapLink,children:[Object(o.jsx)(U.a,{href:"https://docs.polywrap.io/guides/create-as-wrapper/project-setup",target:"_blank",children:"Build a Polywrap"}),Object(o.jsx)(C.a,{})]})]})})]}),Object(o.jsx)(h.a,{className:t.heroIllustration,item:!0,sm:12,md:5,children:Object(o.jsx)(b.a,{display:"flex",flexDirection:"column",justifyContent:"center",width:"100%",height:"100%",children:Object(o.jsx)("img",{className:t.heroPolywrapper,src:"/imgs/polywrapper-hero.svg",alt:"Polywrap Logo"})})})]})})},ge=Object(g.a)((function(e){var t;return{root:{overflowX:"hidden"},bgMembrane:{height:"auto",position:"absolute",opacity:1,"& img":{width:"100%"}},blurredPoly:{position:"relative",opacity:"0.25",mixBlendMode:"hard-light"},blurredPoly1:{transform:"scale(2) translate(5%, 35%) rotate(125deg)",opacity:"0.25"},blurredPoly2:(t={transform:"scale(0.5) rotate(-75deg)",opacity:"0.3"},Object(c.a)(t,e.breakpoints.between("xs","md"),{left:"44%",top:"7%",transform:"scale(0.25) rotate(125deg)"}),Object(c.a)(t,e.breakpoints.down("xs"),{left:"9%",top:"5%",transform:"scale(0.1) rotate(125deg)"}),t),blurredPoly3:{transform:"scale(0.25) translate(650%, 300%) rotate(65deg)",opacity:"0.4"}}})),me={width:"100vw",height:"100vh",top:0,left:0,position:"absolute"},je=function(){q.a.pageview("home");var e=ge();return Object(o.jsx)(b.a,{position:"absolute",width:"100vw",height:"100%",left:"0",zIndex:"0",className:e.root,children:[{top:"-144vh",width:"120%"},{top:"104vh",width:"100%"},{top:"-72vh",width:"120%"},{top:"-128vh",width:"140%"},{top:"64vh",width:"120%"},{top:"144vh",width:"100%"},{top:"230vh",width:"140%"}].map((function(t,a){return Object(o.jsxs)("div",{children:[4===a&&Object(o.jsxs)(b.a,{display:"flex",children:[Object(o.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly1),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"}),Object(o.jsx)(j.Parallax,{y:[0,-50],styleOuter:me,styleInner:{mixBlendMode:"hard-light"},children:Object(o.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly2),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})}),Object(o.jsx)(j.Parallax,{y:[-25,25],styleOuter:me,children:Object(o.jsx)("img",{className:"".concat(e.blurredPoly," ").concat(e.blurredPoly3),src:"".concat("","/imgs/polywrapper-hero-blurred.png"),alt:"Polywrap"})})]}),Object(o.jsx)(b.a,{top:t.top,width:t.width,className:e.bgMembrane,children:Object(o.jsx)("img",{src:"".concat("","/imgs/assets/bg/bg-membrane-").concat(a%2===0?1:2,".svg"),alt:""})})]},"membrane-".concat(a))}))})},ue=a(158),xe=Object(g.a)((function(e){return{navLink:Object(c.a)({fontSize:14,fontWeight:700,marginRight:20,transition:"color 0.25s ease-in-out","&:hover":{color:O.start}},e.breakpoints.down("xs"),{fontSize:12,marginRight:10}),navButton:Object(c.a)({},e.breakpoints.down("xs"),{display:"none"})}})),fe=function(e){var t=Object(T.a)(),a=(Object(d.f)(),e.scrollPosition),n=Object(W.a)(t.breakpoints.down("sm"),{defaultMatches:!0}),r=!n||a>150,i=xe();return Object(o.jsxs)(b.a,{display:"flex",alignItems:"center",flexWrap:"nowrap",children:[Object(o.jsx)(U.a,{className:i.navLink,href:"https://docs.polywrap.io/",target:"_blank",color:"textSecondary",variant:"body1",style:{display:"".concat(r&&n?"none":"block")},children:"Docs"}),Object(o.jsx)(U.a,{className:i.navLink,href:"https://forum.polywrap.io/c/job-postings/41",target:"_blank",color:"textSecondary",variant:"body1",style:{display:"".concat(r&&n?"none":"block")},children:"Jobs"}),Object(o.jsx)(U.a,{className:i.navLink,href:"https://discord.com/invite/Z5m88a5qWu",target:"_blank",color:"textSecondary",variant:"body1",style:{display:"".concat(r&&n?"none":"block")},children:"Community"}),Object(o.jsx)(L.a,{href:"https://discord.gg/bGsqQrNhqd",variant:"contained",color:"primary",endIcon:Object(o.jsx)(C.a,{}),className:i.navButton,style:{display:"".concat(r?"flex":"none")},children:n?F.split(" ")[0]:F})]})},ye=Object(g.a)((function(e){var t;return{appBar:{background:"".concat(w[900],"c2"),backdropFilter:"blur(48px)",transition:"background 1s ease-in-out"},cell:{padding:0},logo:(t={cursor:"pointer",height:48,marginRight:e.spacing(2),transition:"opacity 0.25s ease-in-out",width:"auto"},Object(c.a)(t,e.breakpoints.down("sm"),{height:32}),Object(c.a)(t,"&:hover",{opacity:.8}),t),navLink:Object(c.a)({fontSize:"14px",fontWeight:700,marginRight:20,transition:"color 0.25s ease-in-out","&:hover":{color:O.start}},e.breakpoints.down("xs"),{fontSize:"12px",marginRight:10})}})),Oe=function(){var e=Object(d.f)(),t=Object(d.g)(),a=ye(),r=Object(n.useState)(0),i=Object(ie.a)(r,2),s=i[0],c=i[1],l=function(){var e=window.pageYOffset;c(e)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l,{passive:!0}),function(){window.removeEventListener("scroll",l)}}),[]),Object(o.jsx)(ue.a,{position:"fixed",color:"transparent",className:s>150?a.appBar:void 0,style:{transition:"background 1s ease-in-out"},children:Object(o.jsx)(Z.a,{maxWidth:"lg",className:a.cell,children:Object(o.jsxs)(b.a,{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px",children:[Object(o.jsx)("img",{src:"/logos/polywrap-horizontal.svg",alt:"Polywrap Logo",onClick:function(){return t="/",e.push(t);var t},className:a.logo}),"/signup"!==t.pathname?Object(o.jsx)(fe,{scrollPosition:s}):null]})})})},we=Object(g.a)((function(e){var t;return{root:Object(c.a)({backgroundColor:"".concat(w[1e3],"85"),padding:"".concat(e.spacing(8),"px ").concat(e.spacing(5),"px"),zIndex:2,position:"relative"},e.breakpoints.down("sm"),{marginLeft:-e.spacing(3),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),paddingTop:e.spacing(8),paddingBottom:e.spacing(8),width:"calc(100% + ".concat(2*e.spacing(3),"px)")}),cell:{},logo:(t={width:"auto",height:"48px",cursor:"pointer",transition:"opacity 0.25s ease-in-out"},Object(c.a)(t,e.breakpoints.down("sm"),{height:e.spacing(4)}),Object(c.a)(t,"&:hover",{opacity:.8}),t),socialContainer:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"50px",marginRight:20,"&:last-of-type":{marginRight:0}},social:{cursor:"pointer",fontSize:24,color:e.palette.text.secondary,"&:hover":{color:e.palette.secondary.main}},navLink:Object(c.a)({fontSize:14,fontWeight:700,lineHeight:1,marginTop:e.spacing(3),transition:"color 0.25s ease-in-out","&:hover":{color:O.start}},e.breakpoints.down("xs"),{fontSize:12}),footerDivider:{backgroundColor:e.palette.primary.main,height:4,marginBottom:e.spacing(4),width:e.spacing(4)},footerLink:Object(c.a)({display:"block",fontSize:14},e.breakpoints.down("xs"),{fontSize:12})}})),ve=function(){var e=we();return Object(o.jsx)(b.a,{component:"footer",className:e.root,children:Object(o.jsx)(Z.a,{className:e.cell,children:Object(o.jsxs)(h.a,{container:!0,justify:"space-between",spacing:6,children:[Object(o.jsxs)(h.a,{item:!0,xs:12,md:7,children:[Object(o.jsx)("img",{src:"/logos/polywrap-horizontal.svg",alt:"Polywrap Logo",className:e.logo}),Object(o.jsx)(b.a,{marginTop:3,children:Object(o.jsxs)(h.a,{container:!0,spacing:4,children:[Object(o.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(o.jsx)(I.a,{variant:"h6",children:"Code"}),Object(o.jsxs)(b.a,{marginTop:2,children:[Object(o.jsx)(b.a,{className:e.footerDivider}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://github.com/polywrap/monorepo",target:"_blank",color:"textPrimary",variant:"body1",children:"Toolchain"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://github.com/polywrap/hub",target:"_blank",color:"textPrimary",variant:"body1",children:"The Hub"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://docs.polywrap.io/",target:"_blank",color:"textPrimary",variant:"body1",children:"Docs"})]})]}),Object(o.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(o.jsx)(I.a,{variant:"h6",children:"Social"}),Object(o.jsxs)(b.a,{marginTop:2,children:[Object(o.jsx)(b.a,{className:e.footerDivider}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://discord.com/invite/Z5m88a5qWu",target:"_blank",color:"textPrimary",variant:"body1",children:"Discord"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://twitter.com/polywrap_io",target:"_blank",color:"textPrimary",variant:"body1",children:"Twitter"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://blog.polywrap.io/",target:"_blank",color:"textPrimary",variant:"body1",children:"Blog"})]})]}),Object(o.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(o.jsx)(I.a,{variant:"h6",children:"Governance"}),Object(o.jsxs)(b.a,{marginTop:2,children:[Object(o.jsx)(b.a,{className:e.footerDivider}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://gnosis-safe.io/app/#/safes/0x8c3FA50473065f1D90f186cA8ba1Aa76Aee409Bb/balances",target:"_blank",color:"textPrimary",variant:"body1",children:"Funds"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://snapshot.org/#/polywrap.eth",target:"_blank",color:"textPrimary",variant:"body1",children:"Voting"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://forum.polywrap.io",target:"_blank",color:"textPrimary",variant:"body1",children:"Forum"})]})]}),Object(o.jsxs)(h.a,{item:!0,xs:6,sm:3,children:[Object(o.jsx)(I.a,{variant:"h6",children:"Contact"}),Object(o.jsxs)(b.a,{marginTop:2,children:[Object(o.jsx)(b.a,{className:e.footerDivider}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://airtable.com/shrzxezSAlpoUUZNV",target:"_blank",color:"textPrimary",variant:"body1",children:"Join Us"}),Object(o.jsx)(U.a,{className:"".concat(e.navLink," ").concat(e.footerLink),href:"https://airtable.com/shra8gDgo8EgrRT6c",target:"_blank",color:"textPrimary",variant:"body1",children:"Become a Partner"})]})]})]})})]}),Object(o.jsxs)(h.a,{item:!0,xs:12,md:5,children:[Object(o.jsx)(I.a,{variant:"h4",children:"Get Wrapped"}),Object(o.jsx)(b.a,{marginTop:5,children:Object(o.jsx)(pe,{location:"footer"})})]})]})})})},ke=(a(119),Object(g.a)((function(e){return{wrapper:Object(c.a)({},e.breakpoints.down("sm"),{display:"block"}),main:Object(c.a)({},e.breakpoints.down("sm"),{paddingLeft:20,paddingRight:20})}}))),Pe=function(){var e=ke();return Object(o.jsxs)(p.a,{theme:N,children:[Object(o.jsx)(m.a,{}),Object(o.jsx)(j.ParallaxProvider,{children:Object(o.jsx)(b.a,{width:"100%",minHeight:"100vh",overflow:"hidden",children:Object(o.jsx)(l.a,{children:Object(o.jsx)(h.a,{container:!0,className:e.wrapper,children:Object(o.jsxs)(b.a,{display:"flex",flexDirection:"column",flexGrow:"1",position:"relative",className:e.main,children:[Object(o.jsx)(je,{}),Object(o.jsx)(Oe,{}),Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{path:"/",exact:!0,children:Object(o.jsx)(ae,{})}),Object(o.jsx)(d.a,{path:"/signup",children:Object(o.jsx)(he,{})})]}),Object(o.jsx)(ve,{})]})})})})})]})};q.a.initialize("UA-160302501-1"),s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(Pe,{})}),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.9b669051.chunk.js.map