(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[298],{40298:(e,s,t)=>{Promise.resolve().then(t.bind(t,84340))},67401:(e,s,t)=>{"use strict";t.d(s,{A:()=>c});var l=t(12115);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return s.filter((e,s,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===s).join(" ").trim()};var r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,l.forwardRef)((e,s)=>{let{color:t="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:c,className:o="",children:d,iconNode:x,...h}=e;return(0,l.createElement)("svg",{ref:s,...r,width:i,height:i,stroke:t,strokeWidth:c?24*Number(n)/Number(i):n,className:a("lucide",o),...h},[...x.map(e=>{let[s,t]=e;return(0,l.createElement)(s,t)}),...Array.isArray(d)?d:[d]])}),c=(e,s)=>{let t=(0,l.forwardRef)((t,r)=>{let{className:c,...o}=t;return(0,l.createElement)(n,{ref:r,iconNode:s,className:a("lucide-".concat(i(e)),c),...o})});return t.displayName="".concat(e),t}},66462:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});let l=(0,t(67401).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},57223:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});let l=(0,t(67401).A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},12048:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});let l=(0,t(67401).A)("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},33473:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});let l=(0,t(67401).A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},28283:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});let l=(0,t(67401).A)("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]])},76046:(e,s,t)=>{"use strict";var l=t(66658);t.o(l,"useRouter")&&t.d(s,{useRouter:function(){return l.useRouter}})},84340:(e,s,t)=>{"use strict";t.d(s,{default:()=>m});var l=t(95155),i=t(12115),a=t(33473),r=t(76046);let n=function(){let[e,s]=(0,i.useState)(!1),t=(0,r.useRouter)();(0,i.useEffect)(()=>{let e=()=>{s(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let n=e=>{t.push(e)};return(0,l.jsx)("nav",{className:"fixed top-0 z-20 w-full px-64 transition-colors duration-300 ".concat(e?"bg-white shadow-md":"bg-transparent"),children:(0,l.jsxs)("div",{className:"flex w-full justify-between  py-4",children:[(0,l.jsxs)("div",{className:"flex items-center gap-32 ",children:[(0,l.jsx)("button",{onClick:()=>n("/"),className:"h-14 w-fit cursor-pointer",children:(0,l.jsx)("img",{className:"h-14 w-fit",src:"/assets/images/logo/jms-logo-original.png",alt:"logo"})}),(0,l.jsxs)("div",{className:"flex items-center text-black gap-8",style:{fontWeight:500,fontFamily:"Manrope, sans-serif",fontSize:"16px",color:"#222222"},children:[(0,l.jsx)("button",{className:"hover:text-blue-800",onClick:()=>n("/doctor"),children:"Doctors"}),(0,l.jsx)("button",{className:"hover:text-blue-800",onClick:()=>n("/about-us"),children:"About Us"}),(0,l.jsx)("button",{className:"hover:text-blue-800",onClick:()=>n("/services"),children:"Service"}),(0,l.jsx)("button",{className:"hover:text-blue-800",onClick:()=>n("/contact-us"),children:"Contact Us"})]})]}),(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("button",{onClick:()=>n("/appointment"),className:"text-white bg-blue-900 px-12 py-3 rounded-l-full rounded-r-full font-semibold flex items-center",style:{fontSize:"16px"},children:["Appointment",(0,l.jsx)(a.A,{size:14,strokeWidth:6,className:"ms-2"})]})})]})})};var c=t(28283),o=t(12048),d=t(66462),x=t(57223);let h=function(){return(0,l.jsxs)("div",{className:"px-64",children:[(0,l.jsxs)("div",{className:" pb-12 pt-64  grid grid-cols-4 text-black",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("div",{className:"flex mb-5",children:(0,l.jsx)("img",{className:"h-14 w-fit",src:"/assets/images/logo/jms-logo-original.png",alt:"logo"})}),(0,l.jsx)("p",{className:"mb-5",children:"Finance helps companies manage payments easily. "}),(0,l.jsx)("div",{className:"flex gap-3",children:["/assets/images/twitter.svg","/assets/images/linkedin.svg","/assets/images/messenger.svg","/assets/images/infinity.svg"].map((e,s)=>(0,l.jsx)("img",{className:"h-6 w-fit",src:e,alt:"logo"},s))})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center ",children:[(0,l.jsx)("h3",{className:"ps-24 w-full text-black mb-5",style:{fontSize:"20px",fontWeight:700,lineHeight:"28px"},children:"Useful Links"}),(0,l.jsx)("div",{children:["About Us","Services","Doctors","Contact Us"].map((e,s)=>(0,l.jsxs)("button",{className:"flex gap-2 mb-5",style:{fontSize:"14px",fontWeight:500},children:[(0,l.jsx)(c.A,{})," ",e]},s))})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center ",children:[(0,l.jsx)("h3",{className:"ps-11 w-full text-black mb-5",style:{fontSize:"20px",fontWeight:700,lineHeight:"28px"},children:"Working Day"}),(0,l.jsx)("div",{children:[{day:"Monday - Friday",time:"6:00 - 7:00 pm"},{day:"Friday",time:"8:00 - 9:00 pm"},{day:"Saturday",time:"8:00 - 2:00 pm"},{day:"Sunday",time:"closed"}].map((e,s)=>(0,l.jsxs)("div",{className:"flex gap-2 mb-5",style:{fontSize:"14px",fontWeight:500},children:[(0,l.jsx)("p",{children:e.day}),(0,l.jsx)("p",{children:e.time})]},s))})]}),(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)("h3",{className:"w-full text-black mb-5",style:{fontSize:"20px",fontWeight:700,lineHeight:"28px"},children:"Reach Us"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex gap-2 mb-5",style:{fontSize:"14px",fontWeight:500},children:[(0,l.jsx)(o.A,{}),(0,l.jsx)("p",{children:"+0123456789"})]}),(0,l.jsxs)("div",{className:"flex gap-2 mb-5",style:{fontSize:"14px",fontWeight:500},children:[(0,l.jsx)(d.A,{}),(0,l.jsx)("p",{children:"support@example.com"})]}),(0,l.jsxs)("div",{className:"flex gap-2 mb-5",style:{fontSize:"14px",fontWeight:500},children:[(0,l.jsx)("p",{children:(0,l.jsx)(x.A,{})}),(0,l.jsx)("p",{children:"1234 North Avenue Luke Lane, South Bend, IN 360001"})]})]})]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("p",{className:"text-xs p-8 w-full text-center",children:["Copyright @ ",(0,l.jsx)("a",{href:"#",target:"_blank",className:"text-primary",children:"JMS"}),"2022. All Rights Reserved."]})]})};function m(e){let{children:s}=e;return(0,l.jsxs)("div",{className:"min-h-screen mx-auto text-gray-700",style:{backgroundColor:"#FEFEFF"},children:[(0,l.jsx)(n,{}),(0,l.jsx)("main",{className:"px-64 pt-24",children:s}),(0,l.jsx)(h,{})]})}}}]);