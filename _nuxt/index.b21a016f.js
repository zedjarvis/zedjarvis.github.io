import{_ as f}from"./Icon.0d10ecbe.js";import{_ as g}from"./nuxt-link.821d0f0b.js";import{f as b,j as w,i as x,E as y,o as _,c as S,a as e,b as o,w as n,m as v,h as i,F as k,G as T,d as B,k as C,S as L,p as M,e as N,_ as I}from"./entry.f9f2b792.js";import{B as P,S as z,N as A,_ as j,i as V,Y as E,P as F,x as G}from"./trescientos.484d4e08.js";const t=s=>(M("data-v-ed4675bf"),s=s(),N(),s),Y={class:"h-16 py-5 px-28 w-full z-[999]"},H=t(()=>e("TresPerspectiveCamera",{position:[5,2,4],fov:20},null,-1)),O=t(()=>e("TresHemisphereLight",{intensity:.15,"ground-color":"black"},null,-1)),R=t(()=>e("TresSpotLight",{position:[-20,50,10],angle:.12,penumbra:1,intensity:1,"cast-shadow":"","shadow-mapsize":1024},null,-1)),U=t(()=>e("TresPointLight",{intensity:1},null,-1)),$=["object","scale","position"],q=t(()=>e("p",null,"Loading...",-1)),D=t(()=>e("TresAmbientLight",{position:[10,10,10],intensity:1.5,color:"red","cast-shadow":""},null,-1)),J=b({__name:"index",async setup(s){let a,r;const p=w({clearColor:"#002937",shadows:!0,alpha:!0,antialias:!0,shadowMapType:P,outputColorSpace:z,toneMapping:A}),{scene:c,animations:d}=([a,r]=x(()=>E("/dragon_animation_flying/output.gltf",{draco:!0})),a=await a,r(),a);y(T);const{actions:u}=j(d,c);return u.flying.play(),(l,Q)=>{const m=f,h=g;return _(),S(k,null,[e("div",Y,[o(h,{to:"/",class:"group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300 absolute top-0 left-0"},{default:n(()=>[o(m,{name:"i-carbon-arrow-left",class:"mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2"}),B(" Cedrouseroll Omondi ")]),_:1})]),o(i(V),v(p,{"window-size":""}),{default:n(()=>[H,o(i(F),{"enable-zoom":!0}),O,R,U,(_(),C(L,null,{fallback:n(()=>[q]),default:n(()=>[e("primitive",{object:i(c),scale:l.isMobile?.7:1,position:l.isMobile?[0,-3,-2.2]:[0,-3.25,-1.5],rotation:[-.01,-.2,-.1]},null,8,$)]),_:1})),o(i(G),{factor:1,ease:3}),D]),_:1},16)],64)}}});const te=I(J,[["__scopeId","data-v-ed4675bf"]]);export{te as default};
