(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{823:function(e,t,l){Promise.resolve().then(l.bind(l,3656))},3656:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return c}});var r=l(7437),s=l(2265),n=l(9803);l(3079);var a=(0,l(2119).$)("411ef715c4ebd017691518e5041621b8f952185b");function c(){let[e,t]=(0,s.useState)(""),[l,c]=(0,s.useState)([]),[u,i]=(0,s.useState)(!1),o=(0,s.useRef)(null);async function f(l){if(l.preventDefault(),!e)return;i(!0),c([]),t("");let{streamData:r}=await a(e);for await(let e of(0,n.mj)(r))c(t=>[...t,e]);i(!1)}return(0,s.useEffect)(()=>{o.current&&(o.current.scrollTop=o.current.scrollHeight)},[l]),(0,r.jsxs)("div",{className:"mx-auto w-full max-w-4xl py-12 flex flex-col stretch gap-3",children:[(0,r.jsxs)("form",{onSubmit:f,className:"flex flex-col gap-2",children:[(0,r.jsx)("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"What's the weather like in...",value:e,onChange:e=>t(e.target.value)}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",type:"submit",disabled:u,children:"Submit"})]}),(0,r.jsx)("div",{ref:o,className:"flex flex-col gap-2 px-2 h-[650px] overflow-y-auto",children:l.map((e,t)=>(0,r.jsxs)("div",{className:"p-4 bg-[#25252f] rounded-lg",children:[(0,r.jsx)("strong",{children:"Event:"})," ",(0,r.jsx)("p",{className:"text-sm",children:e.event}),(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Data:"})," ",(0,r.jsx)("p",{className:"break-all text-sm",children:JSON.stringify(e.data,null,2)})]},t))}),l.length>1&&(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,r.jsx)("strong",{className:"text-center",children:"Question"}),(0,r.jsx)("p",{className:"break-words",children:l[0].data.input.input})]}),!u&&l.length>1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,r.jsx)("strong",{className:"text-center",children:"Result"}),(0,r.jsx)("p",{className:"break-words",children:l[l.length-1].data.output})]})]})]})}},2119:function(e,t,l){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return s}});let r=l(3079);function s(e){let{createServerReference:t}=l(6671);return t(e,r.callServer)}}},function(e){e.O(0,[803,971,117,744],function(){return e(e.s=823)}),_N_E=e.O()}]);