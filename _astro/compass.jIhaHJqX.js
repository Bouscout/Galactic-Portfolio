import{j as e}from"./jsx-runtime.9YwcPWTT.js";/* empty css                       */import{r as y}from"./index.LFf77hJu.js";import{P}from"./state_management.IfemeKTu.js";const T=()=>{const m=[0,0],l=3e3,[d,M]=y.useState([]);setTimeout(()=>{M(Object.values(P.get()))},l);const x=(t,s)=>(t=t-50,s=50-s,Math.sqrt(Math.pow(Math.abs(t),2)+Math.pow(Math.abs(s),2))<=50),f=(t,s)=>{const o=Math.atan2(s,t),n=Math.cos(o)*50+50,a=Math.sin(o)*50+50;return[n,a]},g=(t,s)=>{const[o,n]=t,[a,j]=s,r=50,c=50,i=o+a,p=n+j;let h=Math.min(i/5e3,1)*r+c,u=Math.min(p/5e3,1)*r+c;return x(h,u)?[h,u]:f(i,p)};return e.jsx("section",{id:"compass-container",children:e.jsxs("aside",{children:[e.jsx("div",{}),d.map((t,s)=>{const[o,n]=g(m,t);return e.jsx("div",{style:{left:`${o}%`,top:`${n}%`}},s)})]})})};export{T as Compass};