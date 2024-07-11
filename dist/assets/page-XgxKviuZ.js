import{r as s,aj as k,ak as T,al as U,j as e,am as K,an as S,ao as $,ap as B,c as O,g as D,h as V,T as q,m as z,B as G,F as H,aq as W}from"./index-CbNkVbyA.js";import{C as Y}from"./index-w51GdvMh.js";function F(){const n=s.useRef(!1);return k(()=>(n.current=!0,()=>{n.current=!1}),[]),n}function _(){const n=F(),[i,t]=s.useState(0),r=s.useCallback(()=>{n.current&&t(i+1)},[i]);return[s.useCallback(()=>T.postRender(r),[r]),i]}class A extends s.Component{getSnapshotBeforeUpdate(i){const t=this.props.childRef.current;if(t&&i.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function J({children:n,isPresent:i}){const t=s.useId(),r=s.useRef(null),m=s.useRef({width:0,height:0,top:0,left:0}),{nonce:f}=s.useContext(U);return s.useInsertionEffect(()=>{const{width:d,height:l,top:x,left:h}=m.current;if(i||!r.current||!d||!l)return;r.current.dataset.motionPopId=t;const o=document.createElement("style");return f&&(o.nonce=f),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${l}px !important;
            top: ${x}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[i]),e.jsx(A,{isPresent:i,childRef:r,sizeRef:m,children:s.cloneElement(n,{ref:r})})}const E=({children:n,initial:i,isPresent:t,onExitComplete:r,custom:m,presenceAffectsLayout:f,mode:d})=>{const l=K(Q),x=s.useId(),h=s.useMemo(()=>({id:x,initial:i,isPresent:t,custom:m,onExitComplete:o=>{l.set(o,!0);for(const c of l.values())if(!c)return;r&&r()},register:o=>(l.set(o,!1),()=>l.delete(o))}),f?[Math.random()]:[t]);return s.useMemo(()=>{l.forEach((o,c)=>l.set(c,!1))},[t]),s.useEffect(()=>{!t&&!l.size&&r&&r()},[t]),d==="popLayout"&&(n=e.jsx(J,{isPresent:t,children:n})),e.jsx(S.Provider,{value:h,children:n})};function Q(){return new Map}function X(n){return s.useEffect(()=>()=>n(),[])}const p=n=>n.key||"";function Z(n,i){n.forEach(t=>{const r=p(t);i.set(r,t)})}function ee(n){const i=[];return s.Children.forEach(n,t=>{s.isValidElement(t)&&i.push(t)}),i}const te=({children:n,custom:i,initial:t=!0,onExitComplete:r,exitBeforeEnter:m,presenceAffectsLayout:f=!0,mode:d="sync"})=>{const l=s.useContext($).forceRender||_()[0],x=F(),h=ee(n);let o=h;const c=s.useRef(new Map).current,C=s.useRef(o),g=s.useRef(new Map).current,w=s.useRef(!0);if(k(()=>{w.current=!1,Z(h,g),C.current=o}),X(()=>{w.current=!0,g.clear(),c.clear()}),w.current)return e.jsx(e.Fragment,{children:o.map(a=>e.jsx(E,{isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:f,mode:d,children:a},p(a)))});o=[...o];const v=C.current.map(p),R=h.map(p),I=v.length;for(let a=0;a<I;a++){const u=v[a];R.indexOf(u)===-1&&!c.has(u)&&c.set(u,void 0)}return d==="wait"&&c.size&&(o=[]),c.forEach((a,u)=>{if(R.indexOf(u)!==-1)return;const b=g.get(u);if(!b)return;const P=v.indexOf(u);let y=a;if(!y){const L=()=>{c.delete(u);const N=Array.from(g.keys()).filter(j=>!R.includes(j));if(N.forEach(j=>g.delete(j)),C.current=h.filter(j=>{const M=p(j);return M===u||N.includes(M)}),!c.size){if(x.current===!1)return;l(),r&&r()}};y=e.jsx(E,{isPresent:!1,onExitComplete:L,custom:i,presenceAffectsLayout:f,mode:d,children:b},p(b)),c.set(u,y)}o.splice(P,0,y)}),o=o.map(a=>{const u=a.key;return c.has(u)?a:e.jsx(E,{isPresent:!0,presenceAffectsLayout:f,mode:d,children:a},p(a))}),e.jsx(e.Fragment,{children:c.size?o:o.map(a=>s.cloneElement(a))})};function re(){const n=B();console.log(n);const[i,t]=s.useState(!0),r=O();return e.jsx("div",{className:"bg-texture-light dark:bg-texture-dark",children:e.jsxs("div",{className:"box-border min-w-screen min-h-screen  flex items-center container mx-auto justify-center px-2 py-5",children:[e.jsxs("div",{className:"box-border absolute inset-x-0 top-0 w-full flex items-center justify-between container mx-auto py-5 px-2",children:[e.jsx("div",{className:"brightness-90 flex items-center text-[#3730a3] no-underline hover:no-underline font-bold text-2xl lg:text-4xl",children:e.jsx(D,{to:"/",children:e.jsx("img",{className:"w-10 h-auto",src:"/logo.png",width:48,height:73,alt:"aldaiyel-admin"})})}),e.jsxs("ul",{className:"flex gap-3 items-center",children:[e.jsx("li",{className:"isoUser flex",children:e.jsx(V,{})}),e.jsx("li",{className:"isoUser",children:e.jsx(q,{})})]})]}),e.jsx(z.div,{initial:{y:-150,opacity:1},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:100},className:"w-full max-w-sm",children:e.jsx(Y,{className:"box-border  rounded-3xl shadow-lg  text-gray-600 sm:px-4 py-3",children:e.jsx("div",{className:"overflow-hidden relative",children:e.jsx("div",{className:"overflow-hidden relative cursor-grab",children:e.jsxs("div",{className:"flex gap-2 flex-col sm:gap-4 justify-center items-center",children:[e.jsx("img",{className:"w-36 py-3 sm:py-0  h-auto",src:"/e-logo.png",alt:"aldaiyel admin"}),e.jsx(te,{children:i&&e.jsx(z.div,{className:"flex justify-center w-[128px]",transition:{duration:.6},exit:{width:0,scale:0,opacity:0},children:e.jsx(G,{onClick:()=>{t(!1),setTimeout(()=>{r("/dashboard")},600)},className:"rounded-lg !h-auto w-auto whitespace-normal",size:"large",type:"primary",children:e.jsx(H,{id:"open-administrator"})})})})]})})})})})]})})}const oe=()=>(console.log("welcome from loader"),W({sorry:"You have been fired.",hrEmail:"hr@bigco.com"},{status:401,statusText:"u are not authorized"}));export{re as default,oe as loader};