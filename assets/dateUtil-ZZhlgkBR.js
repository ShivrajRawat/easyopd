import{aY as a}from"./index-eDgzATJm.js";const u="en-IN",m={HI_IN:"hi-IN",EN_IN:"en-IN",EN_GB:"en_GB",EN_US:"en-IN"},d={INDIA_DATE:"DD-MM-YYYY",US_DATE:"YYYY-MM-DD",MMM_DD:"MMM DD",ddd_MMM_DD:"ddd MMM DD",ddd_DD_MMM:"ddd DD MMM",ddd_DD_MMMM:"ddd, DD MMMM",WEEK_DAY_DATE:"ddd, DD-MM-YYYY"};function _(t){return a(new Date(t),d.INDIA_DATE)}function r(t){return a(new Date(t),d.US_DATE)}function A(t){return{indiaFormat:_(t),usFormat:r(t)}}function f(t){return a(new Date,t||"YYYY-MM-DD",{locales:u})}function I(t){return a(new Date(t),d.ddd_DD_MMM)}function i(t){return new Date(t)}function c(t,D){const e=new Date(t.getTime());return e.setDate(e.getDate()+D)}function N(t,D){const e=i(t);return e.setDate(e.getDate()+D)}function T(t,D){return Y(t,D).map(M=>r(M))}function Y(t,D){let e=[];const M=D>=0?0:D,s=D>=0?D:0;t=t??new Date;for(let n=M;n<s;n++){const o=c(t,n);e.push(o)}return e=e.sort((n,o)=>n-o),e}export{d as D,m as L,N as a,i as b,f as c,T as d,Y as g,_ as i,A as m,I as t};