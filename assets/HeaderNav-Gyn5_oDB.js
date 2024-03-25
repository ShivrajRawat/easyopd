import{d as H,ac as O,ad as V,az as w,e as z,aC as A,av as D,u as M,O as R,c as T,r as j,al as E,_ as F,z as o,o as n,A as i,B as t,C as a,D as P,t as v,L as c,a as B,b as f,a0 as q,a1 as G,ay as J}from"./index-MjGEh5Ot.js";const K=H({name:"HeaderNav",components:{IonHeader:O,IonToolbar:V,IonButtons:w,IonButton:z,IonMenuButton:A,BrandLogo:D},props:{pageLinks:Array,title:String,navigation:{type:Boolean,default:()=>!0},search:{type:Boolean,default:()=>!0},close:{type:Boolean,default:()=>!1},account:{type:Boolean,default:()=>!1}},emits:["search-focus","search-cancel"],setup(e,s){const m=M(),g=R(),h=T(()=>(e.navigation?e.pageLinks||g.hospitalPages||[]:[]).filter(d=>d.header!=!1)),k=l=>m.push(l),u=j(!1);return{icons:E,ionNavigate:k,navItems:h,showSearch:u,toggleSearch:l=>{s.emit(l?"search-focus":"search-cancel")}}}}),Q={key:1,class:"navigation ion-justify-content-center ion-hide-sm-down"},U=["href","onClick"];function W(e,s,m,g,h,k){const u=o("BrandLogo"),y=o("ion-title"),l=o("ion-menu-button"),d=o("router-link"),p=o("ion-icon"),_=o("ion-button"),C=o("ion-buttons"),b=o("ion-toolbar"),S=o("ion-header");return n(),i(S,{collapse:"fade",translucent:!0},{default:t(()=>[a(b,null,{default:t(()=>[a(u,{slot:"start"}),a(y,null,{default:t(()=>[P(v(e.title),1)]),_:1}),a(C,{slot:"end"},{default:t(()=>[e.navigation?(n(),i(l,{key:0,class:"ion-hide-sm-up"})):c("",!0),e.navigation?(n(),B("nav",Q,[f("ul",null,[(n(!0),B(q,null,G(e.navItems,r=>(n(),i(d,{replace:!1,key:r.title,to:r.route,custom:!0},{default:t(({href:I,navigate:L,isActive:N,isExactActive:$})=>[f("li",{class:J([N&&"router-link-active",$&&"router-link-exact-active"])},[f("a",{href:I,onClick:L},v(r.title),9,U)],2)]),_:2},1032,["to"]))),128))])])):c("",!0),e.search?(n(),i(_,{key:2,onClick:s[0]||(s[0]=r=>e.toggleSearch(!0))},{default:t(()=>[a(p,{slot:"icon-only",icon:e.icons.searchOutline},null,8,["icon"])]),_:1})):c("",!0),e.account?(n(),i(_,{key:3},{default:t(()=>[a(p,{slot:"icon-only",icon:e.icons.personCircleOutline},null,8,["icon"])]),_:1})):c("",!0),e.close?(n(),i(_,{key:4,onClick:s[1]||(s[1]=r=>e.toggleSearch(!1))},{default:t(()=>[a(p,{slot:"icon-only",icon:e.icons.closeOutline},null,8,["icon"])]),_:1})):c("",!0)]),_:1})]),_:1})]),_:1})}const Y=F(K,[["render",W],["__scopeId","data-v-6d977e17"]]);export{Y as H};