import{r as u,aH as c,R as f,d,bE as h,$ as p,Q as b,_ as m,z as _,o as v,A as $,ay as C}from"./index-MjGEh5Ot.js";function g(e,s,t,a){let n=[];if(!e)return n;if(t===void 0)n=[...e];else{const r=t.toLowerCase();s.forEach(o=>{const i=e.filter(l=>(l[o]+"").toLowerCase().includes(r));n=w(n,i,a)})}return n}function w(e,s,t){return e.concat(s).reduce((a,n)=>(a.find(r=>t(r,n))||a.push(n),a),[])}const E=(e,s)=>e==s;function L(e,s,t,a=E){const n=u(c(e||[]));return console.log("useFilter",{filterQuery:t,items:e,filteredItems:n}),f(()=>{n.value=g(c(e||[]),s,c(t||""),a),console.log("useFilter:watchEffect",{filterQuery:t,items:e,filteredItems:n})}),{filteredItems:n}}const S=d({name:"SearchBar",components:{IonSearchbar:h},emits:["search-focus"],inheritAttrs:!0,setup(e,s){const t=u(s.attrs),a=u(null);function n(){if(a.value){const r=a.value.$el;if(r){const o=r.getElementsByTagName("input");o.length>0&&(o[0].focus(),s.emit("search-focus",!0))}}}return p(()=>{setTimeout(n,500)}),b(()=>{t.value=s.attrs}),{searchbarRef:a,attrs:t}}});function B(e,s,t,a,n,r){const o=_("ion-searchbar");return v(),$(o,{ref:"searchbarRef",class:C(e.attrs.class||"searchbar"),"show-cancel-button":"focus",animated:!0,debounce:500,"v-bind":e.attrs},null,8,["class","v-bind"])}const R=m(S,[["render",B]]);export{R as S,L as u};
