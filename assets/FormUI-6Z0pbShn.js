import{d as D,bF as N,bG as q,r as F,Q as O,_ as E,z as m,o as n,a as v,C as f,B as s,a0 as w,t as C,D as B,A as $,a1 as P,bH as U,bI as W,b as A,i as G,bJ as M,a8 as j,bK as R,G as L,c as b,bL as H,L as _,T as V,e as J,am as K,g as Q,h as X,az as Y,n as Z,au as x,ay as ee,E as oe}from"./index--_Uh9bg0.js";import{b as te,a as ae}from"./index-3XLi5VT1.js";const ne=D({components:{IonSelect:N,IonSelectOption:q},props:{options:{type:Array,required:!1,default:()=>[]}},setup(e,t){const l=F(t.attrs);return O(()=>{l.value=t.attrs}),{attrs:l}}}),se=A("div",{class:"select-highlight"},null,-1);function le(e,t,l,d,y,g){const o=m("ion-select-option"),p=m("ion-select");return n(),v(w,null,[f(p,U(W(e.attrs)),{default:s(()=>[(n(!0),v(w,null,P(e.options,r=>(n(),$(o,{key:r.key??r.value,value:r.value},{default:s(()=>[B(C(r.text),1)]),_:2},1032,["value"]))),128))]),_:1},16),se],64)}const re=E(ne,[["render",le]]),z="update:modelValue",ie=D({components:{IonInput:G,IonDatetime:M,IonModal:j,IonDatetimeButton:R,IonLabel:L},emits:[z],props:{modelValue:String,label:String,name:{type:String,required:!0},asButton:Boolean},setup(e,t){const l=F(e.modelValue),d=F(""),y=b(()=>e.asButton?void 0:e.name+"_trigger"),g=b(()=>e.name+"_date"),o=F(t.attrs);O(()=>{o.value=t.attrs});function p(c){if(c){const I=c.detail.value&&Array.isArray(c.detail.value)?c.detail.value[0]:c.detail.value.toString();if(I){const{usFormat:S,indiaFormat:k}=H(I);l.value=k,t.emit(z,S)}}}const r=c=>{d.value=c?"focused":""},h=b(()=>o.value.position||o.value["label-placement"]),i=b(()=>o.value.showButtons),u=b(()=>o.value.showTitle),a=b(()=>o.value.calendarFirstDayOfWeek||1);return{attrs:o,datetimeFocus:r,focusClass:d,showButton:i,showTitle:u,triggerId:y,dateChanged:p,dateValue:l,calendarFirstDayOfWeek:a,datetimeId:g,labelPosition:h}}}),ue={key:0,slot:"title"};function me(e,t,l,d,y,g){const o=m("ion-input"),p=m("ion-label"),r=m("ion-datetime-button"),h=m("ion-datetime"),i=m("ion-modal");return n(),v(w,null,[e.asButton?_("",!0):(n(),$(o,{key:0,id:e.triggerId,label:e.label||e.name,"label-placement":e.labelPosition,readonly:!0,value:e.dateValue},null,8,["id","label","label-placement","value"])),e.asButton?(n(),$(p,{key:1,position:e.labelPosition},{default:s(()=>[B(C(e.label||e.name),1)]),_:1},8,["position"])):_("",!0),e.asButton?(n(),$(r,{key:2,datetime:e.datetimeId},null,8,["datetime"])):_("",!0),f(i,{class:"ion-datetime-button-overlay",trigger:e.triggerId,"keep-contents-mounted":!0,onWillPresent:t[0]||(t[0]=()=>e.datetimeFocus(!0)),onDidDismiss:t[1]||(t[1]=()=>e.datetimeFocus(!1))},{default:s(()=>[f(h,V({id:e.datetimeId,"show-default-buttons":e.showButton,"show-default-title":e.showTitle,"first-day-of-week":e.calendarFirstDayOfWeek,value:e.modelValue},e.attrs,{onIonChange:e.dateChanged}),{default:s(()=>[e.showTitle?(n(),v("span",ue,"Select "+C(e.label||e.name),1)):_("",!0)]),_:1},16,["id","show-default-buttons","show-default-title","first-day-of-week","value","onIonChange"])]),_:1},8,["trigger"])],64)}const ce=E(ie,[["render",me]]),de=D({components:{IonButton:J,IonLabel:L,IonGrid:K,IonRow:Q,IonCol:X,CustomSelect:re,CustomDate:ce,IonButtons:Y},emits:["submit","cancel"],props:{formData:{type:Object,required:!0},schema:{type:Object,required:!0}},setup(e,t){const l=Z({...e.formData}),d={...e.schema},y=b(()=>d.fields.map(i=>({name:i.name,field:i}))),{rules:g}=te(d,l),o=ae(g,l,{$autoDirty:!1,$lazy:!0,$rewardEarly:!1});return{processCancel:()=>{t.emit("cancel")},processFormSubmit:async()=>{const i=await o.value.$validate(),u={...l};i&&t.emit("submit",u)},formSchema:d,formFields:y,v$:o,getErrorClass:i=>{var u;return console.log("getErrorClass",o.value),{errors:o.value&&((u=o.value[i])==null?void 0:u.$error)}}}}}),pe={class:"error-message"},fe={key:0};function be(e,t,l,d,y,g){const o=m("ion-col"),p=m("ion-row"),r=m("ion-button"),h=m("ion-buttons"),i=m("ion-grid");return n(),v("form",{class:"form",novalidate:"",autocomplete:"off",onSubmit:t[0]||(t[0]=oe((...u)=>e.processFormSubmit&&e.processFormSubmit(...u),["stop","prevent"]))},[f(i,{class:ee(e.formSchema.cssClass)},{default:s(()=>[f(p,null,{default:s(()=>[(n(!0),v(w,null,P(e.formFields,({name:u,field:a})=>{var c;return n(),$(o,V({size:"12"},e.formSchema.colSizesAttrs,{class:{errors:(c=e.v$[a.name])==null?void 0:c.$error},key:a.name}),{default:s(()=>{var I,S,k;return[(n(),$(x(a.component.fieldType),V({name:a.name,label:a.component.label,type:a.component.type,placeholder:a.component.label},a.attrs,{class:e.getErrorClass(a.name),options:a.component.options,modelValue:e.v$[u].$model,"onUpdate:modelValue":T=>e.v$[u].$model=T,onIonBlur:T=>e.v$[u].$touch()}),null,16,["name","label","type","placeholder","class","options","modelValue","onUpdate:modelValue","onIonBlur"])),A("div",pe,[(I=e.v$[a.name])!=null&&I.$error||(S=e.v$[a.name])!=null&&S.$dirty?(n(),v("span",fe,C((((k=e.v$[a.name])==null?void 0:k.$errors[0])||{}).$message),1)):_("",!0)])]}),_:2},1040,["class"])}),128))]),_:1}),f(p,null,{default:s(()=>[f(o,null,{default:s(()=>[f(h,{class:"form-buttons actions"},{default:s(()=>[e.formSchema.actions.cancel?(n(),$(r,{key:0,id:"cancel",fill:"clear",class:"secondary cancel",onClick:e.processCancel},{default:s(()=>[B(C(e.formSchema.actions.cancel),1)]),_:1},8,["onClick"])):_("",!0),f(r,{class:"save primary",id:"save",fill:"solid",color:"primary",onClick:e.processFormSubmit},{default:s(()=>[B(C(e.formSchema.actions.submit),1)]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])],32)}const ye=E(de,[["render",be]]);export{ce as C,ye as F};
