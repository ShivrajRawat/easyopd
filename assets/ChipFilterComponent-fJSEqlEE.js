import{d as c,an as p,r as d,_ as u,z as m,o,a as r,a2 as f,a3 as _,A as C,B as k,t as h,D as v,W as V}from"./index-v8GedzRC.js";const $=c({props:{options:Array,modelValue:String},emits:["update:modelValue"],components:{IonChip:p},setup(e,n){const s=d(e.modelValue);function l(a){s.value=a,n.emit("update:modelValue",a)}return{selectedFilter:s,filterClick:l}}}),B={class:"filters"};function F(e,n,s,l,a,g){const i=m("ion-chip");return o(),r("div",B,[(o(!0),r(f,null,_(e.options,t=>(o(),C(i,{class:V({"selected-filter":e.selectedFilter==t.value}),outline:!0,key:t.value,onClick:x=>e.filterClick(t.value)},{default:k(()=>[v(h(t.text),1)]),_:2},1032,["class","onClick"]))),128))])}const z=u($,[["render",F],["__scopeId","data-v-cf066129"]]);export{z as C};
