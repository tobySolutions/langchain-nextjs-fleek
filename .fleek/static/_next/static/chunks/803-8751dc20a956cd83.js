"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[803],{9803:function(e,t,r){let i;r.d(t,{InternalAIProvider:function(){return ee},mj:function(){return J},el:function(){return U}});var n=r(2265);class s{constructor(e){this.selfOptions=e||{},this.pipes={}}options(e){return e&&(this.selfOptions=e),this.selfOptions}pipe(e,t){let r=t;if("string"==typeof e){if(void 0===r)return this.pipes[e];this.pipes[e]=r}if(e&&e.name){if((r=e).processor===this)return r;this.pipes[r.name]=r}return r.processor=this,r}process(e,t){let r,i=e;i.options=this.options();let n=t||e.pipe||"default";for(;n;)void 0!==i.nextAfterChildren&&(i.next=i.nextAfterChildren,i.nextAfterChildren=null),"string"==typeof n&&(n=this.pipe(n)),n.process(i),r=n,n=null,i&&i.next&&(n=(i=i.next).pipe||r);return i.hasResult?i.result:void 0}}class l{constructor(e){this.name=e,this.filters=[]}process(e){if(!this.processor)throw Error("add this pipe to a processor before using it");let t=this.debug,r=this.filters.length;for(let i=0;i<r;i++){let r=this.filters[i];if(t&&this.log(`filter: ${r.filterName}`),r(e),"object"==typeof e&&e.exiting){e.exiting=!1;break}}!e.next&&this.resultCheck&&this.resultCheck(e)}log(e){console.log(`[jsondiffpatch] ${this.name} pipe, ${e}`)}append(...e){return this.filters.push(...e),this}prepend(...e){return this.filters.unshift(...e),this}indexOf(e){if(!e)throw Error("a filter name is required");for(let t=0;t<this.filters.length;t++)if(this.filters[t].filterName===e)return t;throw Error(`filter not found: ${e}`)}list(){return this.filters.map(e=>e.filterName)}after(e,...t){let r=this.indexOf(e);return this.filters.splice(r+1,0,...t),this}before(e,...t){let r=this.indexOf(e);return this.filters.splice(r,0,...t),this}replace(e,...t){let r=this.indexOf(e);return this.filters.splice(r,1,...t),this}remove(e){let t=this.indexOf(e);return this.filters.splice(t,1),this}clear(){return this.filters.length=0,this}shouldHaveResult(e){if(!1===e){this.resultCheck=null;return}if(!this.resultCheck)return this.resultCheck=e=>{if(!e.hasResult){console.log(e);let t=Error(`${this.name} failed`);throw t.noResult=!0,t}},this}}class o{setResult(e){return this.result=e,this.hasResult=!0,this}exit(){return this.exiting=!0,this}push(e,t){return e.parent=this,void 0!==t&&(e.childName=t),e.root=this.root||this,e.options=e.options||this.options,this.children?(this.children[this.children.length-1].next=e,this.children.push(e)):(this.children=[e],this.nextAfterChildren=this.next||null,this.next=e),e.next=this,this}}function f(e){if("object"!=typeof e)return e;if(null===e)return null;if(Array.isArray(e))return e.map(f);if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return function(e){let t=/^\/(.*)\/([gimyu]*)$/.exec(e.toString());return new RegExp(t[1],t[2])}(e);let t={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=f(e[r]));return t}class u extends o{constructor(e,t){super(),this.left=e,this.right=t,this.pipe="diff"}setResult(e){if(this.options.cloneDiffValues&&"object"==typeof e){let t="function"==typeof this.options.cloneDiffValues?this.options.cloneDiffValues:f;"object"==typeof e[0]&&(e[0]=t(e[0])),"object"==typeof e[1]&&(e[1]=t(e[1]))}return super.setResult(e)}}class a extends o{constructor(e,t){super(),this.left=e,this.delta=t,this.pipe="patch"}}class h extends o{constructor(e){super(),this.delta=e,this.pipe="reverse"}}let c=function(e){if(e.left===e.right){e.setResult(void 0).exit();return}if(void 0===e.left){if("function"==typeof e.right)throw Error("functions are not supported");e.setResult([e.right]).exit();return}if(void 0===e.right){e.setResult([e.left,0,0]).exit();return}if("function"==typeof e.left||"function"==typeof e.right)throw Error("functions are not supported");if(e.leftType=null===e.left?"null":typeof e.left,e.rightType=null===e.right?"null":typeof e.right,e.leftType!==e.rightType||"boolean"===e.leftType||"number"===e.leftType||("object"===e.leftType&&(e.leftIsArray=Array.isArray(e.left)),"object"===e.rightType&&(e.rightIsArray=Array.isArray(e.right)),e.leftIsArray!==e.rightIsArray)){e.setResult([e.left,e.right]).exit();return}e.left instanceof RegExp&&(e.right instanceof RegExp?e.setResult([e.left.toString(),e.right.toString()]).exit():e.setResult([e.left,e.right]).exit())};c.filterName="trivial";let p=function(e){if(void 0===e.delta){e.setResult(e.left).exit();return}if(e.nested=!Array.isArray(e.delta),e.nested)return;let t=e.delta;if(1===t.length){e.setResult(t[0]).exit();return}if(2===t.length){if(e.left instanceof RegExp){let r=/^\/(.*)\/([gimyu]+)$/.exec(t[1]);if(r){e.setResult(new RegExp(r[1],r[2])).exit();return}}e.setResult(t[1]).exit();return}3===t.length&&0===t[2]&&e.setResult(void 0).exit()};p.filterName="trivial";let d=function(e){if(void 0===e.delta){e.setResult(e.delta).exit();return}if(e.nested=!Array.isArray(e.delta),e.nested)return;let t=e.delta;if(1===t.length){e.setResult([t[0],0,0]).exit();return}if(2===t.length){e.setResult([t[1],t[0]]).exit();return}3===t.length&&0===t[2]&&e.setResult([t[0]]).exit()};d.filterName="trivial";let x=e=>{let t;if(!e||!e.children)return;let r=e.children.length,i=e.result;for(let n=0;n<r;n++)void 0!==(t=e.children[n]).result&&((i=i||{})[t.childName]=t.result);i&&e.leftIsArray&&(i._t="a"),e.setResult(i).exit()};x.filterName="collectChildren";let y=e=>{let t,r;if(e.leftIsArray||"object"!==e.leftType)return;let i=e.left,n=e.right,s=e.options.propertyFilter;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(!s||s(t,e))&&(r=new u(i[t],n[t]),e.push(r,t));for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(!s||s(t,e))&&void 0===i[t]&&(r=new u(void 0,n[t]),e.push(r,t));if(!e.children||0===e.children.length){e.setResult(void 0).exit();return}e.exit()};y.filterName="objects";let g=function(e){let t,r;if(!e.nested)return;let i=e.delta;if(!i._t){for(t in i)r=new a(e.left[t],i[t]),e.push(r,t);e.exit()}};g.filterName="objects";let v=function(e){let t;if(!e||!e.children||e.delta._t)return;let r=e.left,i=e.children.length;for(let n=0;n<i;n++){let i=(t=e.children[n]).childName;Object.prototype.hasOwnProperty.call(e.left,i)&&void 0===t.result?delete r[i]:r[i]!==t.result&&(r[i]=t.result)}e.setResult(r).exit()};v.filterName="collectChildren";let m=function(e){let t,r;if(!e.nested||e.delta._t)return;let i=e.delta;for(t in i)r=new h(i[t]),e.push(r,t);e.exit()};m.filterName="objects";let R=e=>{let t;if(!e||!e.children||e.delta._t)return;let r=e.children.length,i={};for(let n=0;n<r;n++){let r=(t=e.children[n]).childName;i[r]!==t.result&&(i[r]=t.result)}e.setResult(i).exit()};R.filterName="collectChildren";let w=function(e,t,r,i){return e[r]===t[i]},b=function(e,t,r,i){let n,s;let l=e.length,o=t.length,f=Array(l+1);for(n=0;n<l+1;n++)for(s=0,f[n]=Array(o+1);s<o+1;s++)f[n][s]=0;for(n=1,f.match=r;n<l+1;n++)for(s=1;s<o+1;s++)r(e,t,n-1,s-1,i)?f[n][s]=f[n-1][s-1]+1:f[n][s]=Math.max(f[n-1][s],f[n][s-1]);return f},_=function(e,t,r,i){let n=t.length,s=r.length,l={sequence:[],indices1:[],indices2:[]};for(;0!==n&&0!==s;)e.match(t,r,n-1,s-1,i)?(l.sequence.unshift(t[n-1]),l.indices1.unshift(n-1),l.indices2.unshift(s-1),--n,--s):e[n][s-1]>e[n-1][s]?--s:--n;return l};var j=function(e,t,r,i){let n=i||{};return _(b(e,t,r||w,n),e,t,n)};function C(e,t,r,i,n){let s=e[r],l=t[i];if(s===l)return!0;if("object"!=typeof s||"object"!=typeof l)return!1;let o=n.objectHash;if(!o)return n.matchByPosition&&r===i;n.hashCache1=n.hashCache1||[];let f=n.hashCache1[r];if(void 0===f&&(n.hashCache1[r]=f=o(s,r)),void 0===f)return!1;n.hashCache2=n.hashCache2||[];let u=n.hashCache2[i];return void 0===u&&(n.hashCache2[i]=u=o(l,i)),void 0!==u&&f===u}let N=function(e){let t,r,i,n,s;if(!e.leftIsArray)return;let l={objectHash:e.options&&e.options.objectHash,matchByPosition:e.options&&e.options.matchByPosition},o=0,f=0,a=e.left,h=e.right,c=a.length,p=h.length;for(c>0&&p>0&&!l.objectHash&&"boolean"!=typeof l.matchByPosition&&(l.matchByPosition=!function(e,t,r,i){for(let n=0;n<r;n++){let r=e[n];for(let e=0;e<i;e++){let i=t[e];if(n!==e&&r===i)return!0}}}(a,h,c,p));o<c&&o<p&&C(a,h,o,o,l);)n=new u(a[t=o],h[t]),e.push(n,t),o++;for(;f+o<c&&f+o<p&&C(a,h,c-1-f,p-1-f,l);)r=c-1-f,i=p-1-f,n=new u(a[r],h[i]),e.push(n,i),f++;if(o+f===c){if(c===p){e.setResult(void 0).exit();return}for(s=s||{_t:"a"},t=o;t<p-f;t++)s[t]=[h[t]];e.setResult(s).exit();return}if(o+f===p){for(s=s||{_t:"a"},t=o;t<c-f;t++)s[`_${t}`]=[a[t],0,0];e.setResult(s).exit();return}delete l.hashCache1,delete l.hashCache2;let d=a.slice(o,c-f),x=h.slice(o,p-f),y=j(d,x,C,l),g=[];for(s=s||{_t:"a"},t=o;t<c-f;t++)0>y.indices1.indexOf(t-o)&&(s[`_${t}`]=[a[t],0,0],g.push(t));let v=!0;e.options&&e.options.arrays&&!1===e.options.arrays.detectMove&&(v=!1);let m=!1;e.options&&e.options.arrays&&e.options.arrays.includeValueOnMove&&(m=!0);let R=g.length;for(t=o;t<p-f;t++){let f=y.indices2.indexOf(t-o);if(f<0){let f=!1;if(v&&R>0){for(let c=0;c<R;c++)if(C(d,x,(r=g[c])-o,t-o,l)){s[`_${r}`].splice(1,2,t,3),m||(s[`_${r}`][0]=""),i=t,n=new u(a[r],h[i]),e.push(n,i),g.splice(c,1),f=!0;break}}f||(s[t]=[h[t]])}else r=y.indices1[f]+o,i=y.indices2[f]+o,n=new u(a[r],h[i]),e.push(n,i)}e.setResult(s).exit()};N.filterName="arrays";let A=(e,t)=>e-t,E=e=>(t,r)=>t[e]-r[e],I=function(e){let t,r,i;if(!e.nested)return;let n=e.delta;if("a"!==n._t)return;let s=e.left,l=[],o=[],f=[];for(t in n)if("_t"!==t){if("_"===t[0]){let e=t;if(0===n[e][2]||3===n[e][2])l.push(parseInt(t.slice(1),10));else throw Error(`only removal or move can be applied at original array indices, invalid diff type: ${n[e][2]}`)}else{let e=t;1===n[e].length?o.push({index:parseInt(e,10),value:n[e][0]}):f.push({index:parseInt(e,10),delta:n[e]})}}for(t=(l=l.sort(A)).length-1;t>=0;t--){r=l[t];let e=n[`_${r}`],i=s.splice(r,1)[0];3===e[2]&&o.push({index:e[1],value:i})}let u=(o=o.sort(E("index"))).length;for(t=0;t<u;t++){let e=o[t];s.splice(e.index,0,e.value)}let h=f.length;if(h>0)for(t=0;t<h;t++){let r=f[t];i=new a(s[r.index],r.delta),e.push(i,r.index)}if(!e.children){e.setResult(s).exit();return}e.exit()};I.filterName="arrays";let O=function(e){let t;if(!e||!e.children||"a"!==e.delta._t)return;let r=e.left,i=e.children.length;for(let n=0;n<i;n++)r[(t=e.children[n]).childName]=t.result;e.setResult(r).exit()};O.filterName="arraysCollectChildren";let T=function(e){let t,r;if(!e.nested){let t=e.delta;3===t[2]&&(e.newName=`_${t[1]}`,e.setResult([t[0],parseInt(e.childName.substring(1),10),3]).exit());return}let i=e.delta;if("a"===i._t){for(t in i)"_t"!==t&&(r=new h(i[t]),e.push(r,t));e.exit()}};T.filterName="arrays";let P=(e,t,r)=>{if("string"==typeof t&&"_"===t[0])return parseInt(t.substring(1),10);if(Array.isArray(r)&&0===r[2])return`_${t}`;let i=+t;for(let r in e){let n=e[r];if(Array.isArray(n)){if(3===n[2]){let e=parseInt(r.substring(1),10),s=n[1];if(s===+t)return e;e<=i&&s>i?i++:e>=i&&s<i&&i--}else 0===n[2]?parseInt(r.substring(1),10)<=i&&i++:1===n.length&&parseInt(r,10)<=i&&i--}}return i},$=e=>{let t;if(!e||!e.children)return;let r=e.delta;if("a"!==r._t)return;let i=e.children.length,n={_t:"a"};for(let s=0;s<i;s++){let i=(t=e.children[s]).newName;void 0===i&&(i=P(r,t.childName,t.result)),n[i]!==t.result&&(n[i]=t.result)}e.setResult(n).exit()};$.filterName="arraysCollectChildren";let k=function(e){e.left instanceof Date?(e.right instanceof Date?e.left.getTime()!==e.right.getTime()?e.setResult([e.left,e.right]):e.setResult(void 0):e.setResult([e.left,e.right]),e.exit()):e.right instanceof Date&&e.setResult([e.left,e.right]).exit()};k.filterName="dates";let D=null;function S(e,t){var r;if(!D){let i;if(null===(r=null==e?void 0:e.textDiff)||void 0===r?void 0:r.diffMatchPatch)i=new e.textDiff.diffMatchPatch;else{if(!t)return null;let e=Error("The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.");throw e.diff_match_patch_not_found=!0,e}D={diff:function(e,t){return i.patch_toText(i.patch_make(e,t))},patch:function(e,t){let r=i.patch_apply(i.patch_fromText(t),e);for(let e=0;e<r[1].length;e++)r[1][e]||(Error("text patch failed").textPatchFailed=!0);return r[0]}}}return D}let H=function(e){if("string"!==e.leftType)return;let t=e.left,r=e.right,i=e.options&&e.options.textDiff&&e.options.textDiff.minLength||60;if(t.length<i||r.length<i){e.setResult([t,r]).exit();return}let n=S(e.options);if(!n){e.setResult([t,r]).exit();return}let s=n.diff;e.setResult([s(t,r),0,2]).exit()};H.filterName="texts";let M=function(e){if(e.nested)return;let t=e.delta;if(2!==t[2])return;let r=S(e.options,!0).patch;e.setResult(r(e.left,t[0])).exit()};M.filterName="texts";let V=function(e){let t,r,i,n;let s=null,l=/^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/,o=e.split("\n");for(t=0,r=o.length;t<r;t++){let e=(i=o[t]).slice(0,1);"@"===e?(s=l.exec(i),o[t]="@@ -"+s[3]+","+s[4]+" +"+s[1]+","+s[2]+" @@"):"+"===e?(o[t]="-"+o[t].slice(1),"+"===o[t-1].slice(0,1)&&(n=o[t],o[t]=o[t-1],o[t-1]=n)):"-"===e&&(o[t]="+"+o[t].slice(1))}return o.join("\n")},B=function(e){if(e.nested)return;let t=e.delta;2===t[2]&&e.setResult([V(t[0]),0,2]).exit()};B.filterName="texts";class q{constructor(e){this.processor=new s(e),this.processor.pipe(new l("diff").append(x,c,k,H,y,N).shouldHaveResult()),this.processor.pipe(new l("patch").append(v,O,p,M,g,I).shouldHaveResult()),this.processor.pipe(new l("reverse").append(R,$,d,B,m,T).shouldHaveResult())}options(e){return this.processor.options(e)}diff(e,t){return this.processor.process(new u(e,t))}patch(e,t){return this.processor.process(new a(e,t))}reverse(e){return this.processor.process(new h(e))}unpatch(e,t){return this.patch(e,this.reverse(t))}clone(e){return f(e)}}function F(e,t){return i||(i=new q),i.patch(e,t)}function L(e){return i||(i=new q),i.clone(e)}var K=r(7437),z=Symbol.for("ui.streamable.value");function G(e){return null!=e&&"object"==typeof e&&"type"in e&&e.type===z}function J(e){if(!G(e))throw Error("Invalid value: this hook only accepts values created via `createStreamableValue`.");return{[Symbol.asyncIterator](){let t=e,r=t.curr,i=!1,n=!0;return{async next(){if(i)return{value:r,done:!0};if(void 0!==(t=await t).error)throw t.error;if("curr"in t||t.diff){if(t.diff){if(0===t.diff[0]){if("string"!=typeof r)throw Error("Invalid patch: can only append to string types. This is a bug in the AI SDK.");r+=t.diff[1]}}else r=t.curr;if(!t.next)return i=!0,{value:r,done:!1}}return void 0===t.next?{value:r,done:!0}:(t=t.next,n&&(n=!1,void 0===r))?this.next():{value:r,done:!1}}}}}}function Q(e){let t=G(e);if(!t&&void 0!==e)throw Error("Invalid value: this hook only accepts values created via `createStreamableValue`.");return t}function U(e){let[t,r]=(0,n.useState)(Q(e)?e.curr:void 0),[i,s]=(0,n.useState)(Q(e)?e.error:void 0),[l,o]=(0,n.useState)(!!Q(e)&&!!e.next);return(0,n.useLayoutEffect)(()=>{if(!Q(e))return;let t=!1,i=J(e);return e.next&&(0,n.startTransition)(()=>{t||o(!0)}),(async()=>{try{for await(let e of i){if(t)return;(0,n.startTransition)(()=>{t||r(e)})}}catch(e){if(t)return;(0,n.startTransition)(()=>{t||s(e)})}finally{if(t)return;(0,n.startTransition)(()=>{t||o(!1)})}})(),()=>{t=!0}},[e]),[t,i,l]}var W=n.createContext(null),X=n.createContext(void 0),Y=n.createContext(null),Z=n.createContext(null);function ee(e){let{children:t,initialUIState:r,initialAIState:i,initialAIStatePatch:s,wrappedActions:l,wrappedSyncUIState:o}=e,f=n.useState(r),u=f[1],a=s?n.use(s):void 0;i=n.useMemo(()=>a?F(L(i),a):i,[i,a]);let h=n.useState(i),c=h[1],p=n.useRef(h[0]);n.useEffect(()=>{p.current=h[0]},[h[0]]);let d=n.useMemo(()=>Object.fromEntries(Object.entries(l).map(e=>{let[t,r]=e;return[t,async function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let n=p.current,[s,l]=await r(n,...t);return(async()=>{let e=await s;void 0!==e&&h[1](F(L(n),e))})(),l}]})),[l]),x=n.useMemo(()=>o?async()=>{let e=p.current,[t,r]=await o(e);void 0!==r&&u(r);let i=await t;void 0!==i&&c(F(L(e),i))}:()=>{},[o]);return(0,K.jsx)(X.Provider,{value:h,children:(0,K.jsx)(W.Provider,{value:f,children:(0,K.jsx)(Y.Provider,{value:d,children:(0,K.jsx)(Z.Provider,{value:x,children:t})})})})}}}]);