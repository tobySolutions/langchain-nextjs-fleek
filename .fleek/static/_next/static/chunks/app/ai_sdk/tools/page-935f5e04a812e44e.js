(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{6657:function(e,t,s){Promise.resolve().then(s.bind(s,324))},324:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var r=s(7437),l=s(9803),n=s(2265);s(3079);var a=(0,s(2119).$)("f0155a89240fae725803f7eb463924ddc161f61d");function c(){let[e,t]=(0,n.useState)(""),[s,c]=(0,n.useState)([]),[u,i]=(0,n.useState)(!1),[o,d]=(0,n.useState)({wso:!1,streamEvents:!1}),x=(0,n.useRef)(null);async function m(t){if(t.preventDefault(),!e)return;i(!0),c([]);let{streamData:s}=await a(e,o);for await(let e of(0,l.mj)(s))c(t=>[...t,e]);i(!1)}return(0,n.useEffect)(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[s]),(0,r.jsxs)("div",{className:"mx-auto w-full max-w-4xl py-12 flex flex-col stretch gap-3",children:[(0,r.jsxs)("form",{onSubmit:m,className:"flex flex-col gap-2",children:[(0,r.jsx)("input",{className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"What's the weather in XYZ city and XYZ state",value:e,onChange:e=>t(e.target.value)}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"wso-checkbox",type:"checkbox",checked:o.wso,onChange:e=>d(t=>({...t,wso:e.target.checked})),className:"w-4 h-4 text-gray-100 border-gray-300 rounded focus:ring-blue-500"}),(0,r.jsx)("label",{htmlFor:"wso-checkbox",className:"ml-2 text-sm font-medium text-gray-100",children:"Use withStructuredOutput"})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{id:"stream-events-checkbox",type:"checkbox",checked:o.streamEvents,onChange:e=>d(t=>({...t,streamEvents:e.target.checked})),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"}),(0,r.jsx)("label",{htmlFor:"stream-events-checkbox",className:"ml-2 text-sm font-medium text-gray-100",children:"Use streamEvents"})]}),(0,r.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",type:"submit",disabled:u,children:"Submit"})]}),(0,r.jsx)("div",{ref:x,className:"flex flex-col gap-2 px-2 h-[650px] overflow-y-auto",children:s.map((e,t)=>(0,r.jsxs)("div",{className:"p-4 bg-[#25252f] rounded-lg",children:[o.streamEvents?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:"Event:"})," ",(0,r.jsx)("p",{className:"text-sm",children:e.event})]}):(0,r.jsx)("strong",{className:"text-center",children:"Stream"}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{className:"break-all text-sm",children:o.streamEvents?JSON.stringify(e.data,null,2):JSON.stringify(e,null,2)})]},t))}),!u&&s.length>1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("div",{className:"flex flex-col w-full gap-2",children:[(0,r.jsx)("strong",{className:"text-center",children:"Result"}),(0,r.jsx)("p",{className:"break-all text-sm",children:JSON.stringify(s[s.length-1],null,2)})]})]})]})}},2119:function(e,t,s){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return l}});let r=s(3079);function l(e){let{createServerReference:t}=s(6671);return t(e,r.callServer)}}},function(e){e.O(0,[803,971,117,744],function(){return e(e.s=6657)}),_N_E=e.O()}]);