import{u as w,a as h,b as A,c as D,r as x,j as e,F as a,B as m,n as F,i as g}from"./index-CbNkVbyA.js";import{u as C,F as j}from"./index-nfIlcgR5.js";import{config as i}from"./page-dcd7iGtM.js";import{u as I,g as q}from"./cols-BOaOIlnr.js";import{S as z}from"./index-MxrXartz.js";import{P as L}from"./index-UsCyEadM.js";import{R as U,C as V}from"./row-CIqPCr0D.js";import{U as Q,a as R}from"./UploadOutlined-BProoqtw.js";import{S}from"./index-Bs3OOa-i.js";import{Q as T}from"./QuestionCircleOutlined-CFn8tONO.js";import{D as X}from"./DeleteOutlined-BtHf3aBj.js";import{F as H}from"./FileDoneOutlined-CyyXZx_B.js";import"./useMutation-DwAQVmwo.js";import"./utils-km2FGkQ4.js";import"./index-BN2C5pGS.js";import"./index-VC5Afaew.js";import"./index-CC6DCI0n.js";import"./index-De1vea9t.js";import"./index-CbNQXSC4.js";const{Option:K}=S;function xe(){`${w().pathname.split("/").filter(r=>r).slice(0,2).join("/")}`;const O=h(({profile:r})=>r.data),{idToken:l}=h(r=>r.Auth),{locale:c}=h(({LanguageSwitcher:r})=>r.language),{id:s}=A(),[b]=C(),u=D(),[P,p]=x.useState(!1),[v,f]=x.useState(!1),E=r=>{var d;const t=new FormData;s&&i.edit.method==="post"&&t.append("_method","put");for(const o in r){const n=r[o];Array.isArray(n)&&o==="banner_image"&&t.append(o,(d=n[0])==null?void 0:d.originFileObj)}p(!0),F.promise(g[s?i.edit.method:i.add.method](s?`${i.edit.url}/${s}`:i.add.url,t,{headers:{"X-Portal":"dashboard",Authorization:`Bearer ${l}`}}),{loading:e.jsx("div",{className:"min-w-[200px]",children:c==="ar"?"جاري المعالجة ":"Pending"}),success:o=>{const{message:n}=o.data;return u(-1),p(!1),n||"Backend Error Occured"},error:o=>{var n,y;return p(!1),((y=(n=o.response)==null?void 0:n.data)==null?void 0:y.message)||"Backend Error Occured"}})},$=()=>{f(!0),F.promise(g[i.delete.method](`${i.delete.url}/${s}`,{headers:{"X-Portal":"dashboard",Authorization:`Bearer ${l}`}}),{loading:c==="ar"?"جاري المعالجة ":"Pending",success:r=>{const{message:t}=r.data;return u(-1),f(!1),t||"Backend Error Occured"},error:r=>{var t,d;return f(!1),((d=(t=r.response)==null?void 0:t.data)==null?void 0:d.message)||"Backend Error Occured"}})},{isFetching:B,isPending:N,isError:G,data:_,isSuccess:k}=I({queryKey:[s,l],queryFn:()=>g[i.findOne.method](`${i.findOne.url}/${s}`,{headers:{"X-Portal":"dashboard",Authorization:`Bearer ${l}`}}),enabled:!!s});return x.useEffect(()=>{var r;k&&b.setFieldsValue((r=_.data)==null?void 0:r.data)},[N]),e.jsx(e.Fragment,{children:e.jsxs(z,{spinning:B,children:[e.jsx("div",{className:"flex flex-row-reverse",children:s&&q(i.delete.url,i.delete.type,O)?e.jsx(L,{title:e.jsx(a,{id:"delete.deleteItem"}),description:e.jsx(a,{id:"delete.areYouSure"}),onConfirm:()=>$(),icon:e.jsx(T,{style:{color:"red"}}),children:e.jsx(m,{loading:v,icon:e.jsx(X,{className:"mx-1"}),type:"primary",danger:!0,children:e.jsx(a,{id:"delete"})})}):""}),e.jsx(U,{children:e.jsx(V,{span:24,children:e.jsxs(j,{form:b,onFinish:E,layout:"vertical",className:"login-form",children:[e.jsx(j.Item,{label:e.jsx(a,{id:"photo"}),name:"banner_image",valuePropName:"fileList",rules:[{required:!0,message:e.jsx(a,{id:"image"})}],getValueProps:function(r){return{fileList:typeof r=="string"?r?[{uid:"-1",name:"photo",status:"done",url:r}]:[]:r}},getValueFromEvent:r=>(console.log({e:r}),Array.isArray(r)?r:r&&r.fileList),children:e.jsx(Q,{maxCount:1,name:"image",beforeUpload:r=>!1,listType:"picture-card",children:e.jsx(m,{type:"text",icon:e.jsx(R,{}),children:e.jsx(a,{id:"upload"})})})}),s&&e.jsx(j.Item,{label:e.jsx(a,{id:"hide"}),name:"hide",rules:[{required:!0,message:e.jsx(a,{id:"hide"})}],children:e.jsx(S,{size:"large",children:[{id:0,name_en:"Hide",name_ar:"اخفاء"},{id:1,name_en:"Visiable",name_ar:"مرئي"}].map(r=>e.jsx(K,{value:r.id,children:c==="ar"?r.name_ar:r.name_en},r.id))})}),e.jsxs("div",{className:"flex gap-4 flex-wrap mt-8",children:[e.jsx(m,{className:"w-[90px]",icon:e.jsx(H,{}),loading:P,type:"primary",htmlType:"submit",children:e.jsx("span",{children:s?e.jsx(a,{id:"global.save"}):e.jsx(a,{id:"global.save"})})}),e.jsx(m,{onClick:()=>u(-1),className:"w-[90px]",children:e.jsx(a,{id:"global.back"})})]})]})})})]})})}export{xe as default};