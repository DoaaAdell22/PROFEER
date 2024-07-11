import{H as P,K as q,I as G,J as B,r as o,C as O,s as h,q as H,N as T}from"./index-CbNkVbyA.js";function _(e,i,t){var n=t||{},s=n.noTrailing,f=s===void 0?!1:s,b=n.noLeading,g=b===void 0?!1:b,w=n.debounceMode,u=w===void 0?void 0:w,r,c=!1,$=0;function N(){r&&clearTimeout(r)}function a(m){var p=m||{},l=p.upcomingOnly,S=l===void 0?!1:l;N(),c=!S}function y(){for(var m=arguments.length,p=new Array(m),l=0;l<m;l++)p[l]=arguments[l];var S=this,z=Date.now()-$;if(c)return;function v(){$=Date.now(),i.apply(S,p)}function d(){r=void 0}!g&&u&&!r&&v(),N(),u===void 0&&z>e?g?($=Date.now(),f||(r=setTimeout(u?d:v,e))):v():f!==!0&&(r=setTimeout(u?d:v,u===void 0?e-z:e))}return y.cancel=a,y}function V(e,i,t){var n=t||{},s=n.atBegin,f=s===void 0?!1:s;return _(e,i,{debounceMode:f!==!1})}const A=new q("antSpinMove",{to:{opacity:1}}),R=new q("antRotate",{to:{transform:"rotate(405deg)"}}),F=e=>{const{componentCls:i,calc:t}=e;return{[`${i}`]:Object.assign(Object.assign({},B(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${i}-text`]:{fontSize:e.fontSize,paddingTop:t(t(e.dotSize).sub(e.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${e.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${i}-dot ${i}-dot-item`]:{backgroundColor:e.colorWhite},[`${i}-text`]:{color:e.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${i}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${i}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:t(e.dotSize).mul(-1).div(2).equal()},[`${i}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${e.colorBgContainer}`},[`&${i}-show-text ${i}-dot`]:{marginTop:t(e.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${i}-dot`]:{margin:t(e.dotSizeSM).mul(-1).div(2).equal()},[`${i}-text`]:{paddingTop:t(t(e.dotSizeSM).sub(e.fontSize)).div(2).add(2).equal()},[`&${i}-show-text ${i}-dot`]:{marginTop:t(e.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${i}-dot`]:{margin:t(e.dotSizeLG).mul(-1).div(2).equal()},[`${i}-text`]:{paddingTop:t(t(e.dotSizeLG).sub(e.fontSize)).div(2).add(2).equal()},[`&${i}-show-text ${i}-dot`]:{marginTop:t(e.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${i}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${i}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${i}-dot`]:{position:"relative",display:"inline-block",fontSize:e.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:t(e.dotSize).sub(t(e.marginXXS).div(2)).div(2).equal(),height:t(e.dotSize).sub(t(e.marginXXS).div(2)).div(2).equal(),backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:A,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:R,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${i}-dot`]:{fontSize:e.dotSizeSM,i:{width:t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal(),height:t(t(e.dotSizeSM).sub(t(e.marginXXS).div(2))).div(2).equal()}},[`&-lg ${i}-dot`]:{fontSize:e.dotSizeLG,i:{width:t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),height:t(t(e.dotSizeLG).sub(e.marginXXS)).div(2).equal()}},[`&${i}-show-text ${i}-text`]:{display:"block"}})}},K=e=>{const{controlHeightLG:i,controlHeight:t}=e;return{contentHeight:400,dotSize:i/2,dotSizeSM:i*.35,dotSizeLG:t}},J=P("Spin",e=>{const i=G(e,{spinDotDefault:e.colorTextDescription});return[F(i)]},K);var W=function(e,i){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&i.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)i.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};let C=null;function Q(e,i){const{indicator:t}=i,n=`${e}-dot`;return t===null?null:o.isValidElement(t)?T(t,{className:h(t.props.className,n)}):o.isValidElement(C)?T(C,{className:h(C.props.className,n)}):o.createElement("span",{className:h(n,`${e}-dot-spin`)},o.createElement("i",{className:`${e}-dot-item`,key:1}),o.createElement("i",{className:`${e}-dot-item`,key:2}),o.createElement("i",{className:`${e}-dot-item`,key:3}),o.createElement("i",{className:`${e}-dot-item`,key:4}))}function U(e,i){return!!e&&!!i&&!isNaN(Number(i))}const M=e=>{const{prefixCls:i,spinning:t=!0,delay:n=0,className:s,rootClassName:f,size:b="default",tip:g,wrapperClassName:w,style:u,children:r,fullscreen:c=!1}=e,$=W(e,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:N}=o.useContext(O),a=N("spin",i),[y,m,p]=J(a),[l,S]=o.useState(()=>t&&!U(t,n));o.useEffect(()=>{if(t){const x=V(n,()=>{S(!0)});return x(),()=>{var E;(E=x==null?void 0:x.cancel)===null||E===void 0||E.call(x)}}S(!1)},[n,t]);const z=o.useMemo(()=>typeof r<"u"&&!c,[r,c]),{direction:v,spin:d}=o.useContext(O),L=h(a,d==null?void 0:d.className,{[`${a}-sm`]:b==="small",[`${a}-lg`]:b==="large",[`${a}-spinning`]:l,[`${a}-show-text`]:!!g,[`${a}-fullscreen`]:c,[`${a}-fullscreen-show`]:c&&l,[`${a}-rtl`]:v==="rtl"},s,f,m,p),X=h(`${a}-container`,{[`${a}-blur`]:l}),D=H($,["indicator"]),j=Object.assign(Object.assign({},d==null?void 0:d.style),u),I=o.createElement("div",Object.assign({},D,{style:j,className:L,"aria-live":"polite","aria-busy":l}),Q(a,e),g&&(z||c)?o.createElement("div",{className:`${a}-text`},g):null);return y(z?o.createElement("div",Object.assign({},D,{className:h(`${a}-nested-loading`,w,m,p)}),l&&o.createElement("div",{key:"loading"},I),o.createElement("div",{className:X,key:"container"},r)):I)};M.setDefaultIndicator=e=>{C=e};const Z=M;export{Z as S};
