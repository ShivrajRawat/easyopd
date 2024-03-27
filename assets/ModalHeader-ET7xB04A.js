import{d as S,bu as W,bv as H,bw as N,bx as R,by as V,bz as q,Z as L,am as M,g as U,h as F,bA as G,u as P,H as Q,bB as X,ao as Y,aX as Z,bC as j,bD as J,_ as $,z as t,o as e,A as a,B as n,ay as K,a as c,L as i,t as d,D as h,C as s,b as w,a0 as x,a1 as oo,ap as eo,aq as no,e as to,az as ao,ac as so,ae as lo,ad as io,r as O,Q as ro,aa as co,aY as uo,a_ as po,aD as mo,T as fo}from"./index-qy4vAYHf.js";import{S as _o}from"./Searchbar-b1XkFcYk.js";const yo=S({name:"DoctorCardLarge",components:{IonCard:W,IonCardContent:H,IonAvatar:N,IonCardHeader:R,IonCardTitle:V,IonCardSubtitle:q,IonSkeletonText:L,IonGrid:M,IonRow:U,IonCol:F},props:{doctor:G,compact:{type:Boolean,default:()=>!0},schedule:{type:Boolean,default:()=>!0},actions:{type:Boolean,default:()=>!0},detail:Boolean,loading:Boolean,basicOnly:{type:Boolean,default:()=>!1}},emits:["info"],setup(o){const l=P();async function u(){await J(o.doctor.appointmentRoute,l)}return{icons:{locationOutline:Q,thumbsUpOutline:X,calendarOutline:Y,addOutline:Z,informationCircleOutline:j},scheduleAppointment:u}}}),ho=o=>(eo("data-v-ffad706a"),o=o(),no(),o),ko=["src","alt"],bo={class:"basic"},Co={key:2},go={key:1},vo={key:1},Bo=ho(()=>w("div",{class:"divider"},null,-1)),Io={key:0,class:"schedules"},Oo={key:1,class:"divider"},So={key:3,class:"ion-margin-top"};function $o(o,l,u,f,v,B){const r=t("ion-skeleton-text"),p=t("ion-avatar"),m=t("ion-button"),C=t("ion-card-title"),_=t("ion-card-subtitle"),g=t("ion-card-header"),k=t("ion-col"),b=t("ion-row"),z=t("ion-grid"),I=t("ion-icon"),T=t("ion-buttons"),D=t("ion-card-content"),A=t("ion-card");return e(),a(A,{class:"doctor-card"},{default:n(()=>[s(g,{class:K(["header",{compact:o.compact&&!o.basicOnly,"basic-only":o.basicOnly}])},{default:n(()=>[o.basicOnly?i("",!0):(e(),a(p,{key:0},{default:n(()=>[o.loading?(e(),a(r,{key:0,animated:!0,class:"width-100 height-100"})):o.doctor?(e(),c("img",{key:1,src:o.doctor.avatar,alt:o.doctor.avatar},null,8,ko)):i("",!0)]),_:1})),w("div",bo,[s(C,{class:"name"},{default:n(()=>[o.loading?(e(),a(r,{key:0,animated:!0,style:{width:"100%"}})):!o.detail&&o.basicOnly?(e(),a(m,{key:1,id:"doc-info",size:"small",fill:"clear",shape:"round",color:"primary",onClick:l[0]||(l[0]=y=>o.$emit("info",o.doctor.id))},{default:n(()=>[h(d(o.doctor.name),1)]),_:1})):(e(),c("span",Co,d(o.doctor.name),1))]),_:1}),s(_,{class:"qualification"},{default:n(()=>[o.loading?(e(),a(r,{key:0,animated:!0,style:{width:"100%"}})):(e(),c("span",go,d(o.doctor.qual),1))]),_:1}),s(_,{class:"speciality"},{default:n(()=>[o.loading?(e(),a(r,{key:0,animated:!0,style:{width:"80%"}})):(e(),c("span",vo,d(o.doctor.speciality||o.doctor.department),1))]),_:1})])]),_:1},8,["class"]),(o.schedule||o.detail||o.actions)&&!o.basicOnly?(e(),a(D,{key:0,class:"content"},{default:n(()=>[Bo,o.schedule?(e(),c("div",Io,[s(z,{class:"list-container"},{default:n(()=>[(e(!0),c(x,null,oo(o.doctor.schedules,(y,E)=>(e(),a(b,{key:y.daysText+"_"+E},{default:n(()=>[s(k,{"size-sm":"5"},{default:n(()=>[h(d(y.daysText),1)]),_:2},1024),s(k,{"size-sm":"7"},{default:n(()=>[h(d(y.title),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])):i("",!0),o.schedule?(e(),c("div",Oo)):i("",!0),o.actions?(e(),a(T,{key:2},{default:n(()=>[o.detail?i("",!0):(e(),a(m,{key:0,id:"doc-info",size:"small",fill:"clear",shape:"round",color:"primary",onClick:l[1]||(l[1]=y=>o.$emit("info",o.doctor.id))},{default:n(()=>[s(I,{slot:"icon-only",icon:o.icons.informationCircleOutline},null,8,["icon"])]),_:1})),o.doctor&&o.doctor.schedules.length>0?(e(),a(m,{key:1,size:"small",fill:"clear",shape:"round",color:"primary",onClick:o.scheduleAppointment},{default:n(()=>[s(I,{slot:"start",icon:o.icons.addOutline},null,8,["icon"]),h(" Appointment ")]),_:1},8,["onClick"])):i("",!0)]),_:1})):i("",!0),o.detail?(e(),c("div",So,d(o.doctor.description??"About"),1)):i("",!0)]),_:1})):i("",!0)]),_:1})}const Ao=$(yo,[["render",$o],["__scopeId","data-v-ffad706a"]]),wo=S({components:{IonButton:to,IonButtons:ao,IonHeader:so,IonTitle:lo,IonToolbar:io,Searchbar:_o},emits:["done","cancel"],props:{title:String,doneButton:{type:Boolean,default:()=>!1},cancelButton:{type:Boolean,default:()=>!0},search:{type:Boolean,default:()=>!1},autoClose:{type:Boolean,default:()=>!0}},setup(o,l){const u=O(!1),f=O(l.attrs);return ro(()=>{console.log("ModalHeader onUpdated",f.value),f.value=l.attrs}),{icons:{closeOutline:co,checkmarkOutline:uo,searchOutline:po},attrs:f,closeWithEmit:async r=>{console.log("closeWithEmit",r),o.autoClose&&await mo.dismiss(),l.emit(r)},showSearch:u,toggleSearch:async()=>{console.log("toggleSearch"),u.value=!u.value}}}});function zo(o,l,u,f,v,B){const r=t("ion-icon"),p=t("ion-button"),m=t("ion-buttons"),C=t("ion-title"),_=t("ion-toolbar"),g=t("Searchbar"),k=t("ion-header");return e(),a(k,{translucent:!0},{default:n(()=>[s(_,null,{default:n(()=>[o.cancelButton&&o.doneButton?(e(),a(m,{key:0,slot:"start"},{default:n(()=>[s(p,{onClick:l[0]||(l[0]=b=>o.closeWithEmit("cancel"))},{default:n(()=>[s(r,{slot:"icon-only",icon:o.icons.closeOutline},null,8,["icon"])]),_:1})]),_:1})):i("",!0),s(C,null,{default:n(()=>[h(d(o.title),1)]),_:1}),s(m,{slot:"end"},{default:n(()=>[o.search?(e(),a(p,{key:0,size:"small",onClick:o.toggleSearch},{default:n(()=>[s(r,{slot:"icon-only",icon:o.icons.searchOutline},null,8,["icon"])]),_:1},8,["onClick"])):i("",!0),o.doneButton?(e(),a(p,{key:1,onClick:l[1]||(l[1]=b=>o.closeWithEmit("done"))},{default:n(()=>[s(r,{slot:"icon-only",icon:o.icons.checkmarkOutline},null,8,["icon"])]),_:1})):i("",!0),o.cancelButton&&!o.doneButton?(e(),a(p,{key:2,onClick:l[2]||(l[2]=b=>o.closeWithEmit("cancel"))},{default:n(()=>[s(r,{slot:"icon-only",icon:o.icons.closeOutline},null,8,["icon"])]),_:1})):i("",!0)]),_:1})]),_:1}),o.search&&o.showSearch?(e(),a(_,{key:0},{default:n(()=>[s(g,fo({onIonCancel:o.toggleSearch},o.attrs),null,16,["onIonCancel"])]),_:1})):i("",!0)]),_:1})}const Eo=$(wo,[["render",zo]]);export{Ao as D,Eo as M};