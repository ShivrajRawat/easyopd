import{d as V,k as _e,e as R,az as he,ac as be,ae as De,ad as Ce,aA as Se,aB as $e,aC as ye,u as W,aa as Q,aD as X,_ as F,z as a,o as c,a as T,C as o,B as n,A as h,L as $,t as S,D as M,at as B,a0 as E,l as J,O as U,c as P,aE as Ie,aF as ke,r as O,aG as ne,aH as j,aI as q,aJ as G,aK as Me,a2 as we,G as se,aL as Oe,aM as Pe,M as Z,aN as Te,aO as Ae,aP as Be,R as Y,Q as Ee,aQ as Ve,aR as Fe,aS as Ne,T as Le,b as C,a1 as K,f as ie,X as re,aT as He,aU as Re,aV as Ue,aW as qe,$ as Ge,aX as de,aY as je,aZ as ce,a_ as ze,a$ as oe,a8 as We,b0 as Ye,b1 as Ke,b2 as Qe,n as Xe,b3 as Je,a3 as Ze,b4 as xe,ao as et,b5 as tt,b6 as nt,E as ot,I as at,ax as lt}from"./index--_Uh9bg0.js";import{M as st,D as it}from"./ModalHeader-uM1qegn0.js";import{F as rt,C as dt}from"./FormUI-6Z0pbShn.js";import{C as L,u as ct,a as ut}from"./index-3XLi5VT1.js";import{u as mt}from"./Searchbar-RuGwMFh6.js";import{H as pt}from"./HeaderNav-e99_mZng.js";const ft=V({props:{title:String,backButton:Boolean,closeButton:Boolean,closeButtonLocation:String,translucent:Boolean,progress:Boolean,waiting:Boolean,waitMessage:String},emits:[],components:{IonLoading:_e,IonButton:R,IonButtons:he,IonHeader:be,IonTitle:De,IonToolbar:Ce,IonBackButton:Se,IonProgressBar:$e,IonMenuButton:ye},setup(e,t){const s=W().canGoBack;return{icons:{closeOutline:Q},goBack:()=>{s?W().back:X.dismiss()},canGoback:s}}});function gt(e,t,s,r,d,p){const l=a("ion-menu-button"),m=a("ion-back-button"),u=a("ion-icon"),g=a("ion-button"),f=a("ion-buttons"),y=a("ion-title"),I=a("ion-toolbar"),b=a("ion-progress-bar"),v=a("ion-header"),_=a("ion-loading");return c(),T(E,null,[o(v,{translucent:e.translucent},{default:n(()=>[o(I,null,{default:n(()=>[o(f,{slot:"start"},{default:n(()=>[o(l),e.canGoback?(c(),h(m,{key:0})):$("",!0),!e.canGoback&&e.closeButton&&(e.closeButtonLocation||"left")=="left"?(c(),h(g,{key:1},{default:n(()=>[o(u,{slot:"icon-only",icon:e.icons.closeOutline},null,8,["icon"])]),_:1})):$("",!0)]),_:1}),e.title?(c(),h(y,{key:0},{default:n(()=>[M(S(e.title),1)]),_:1})):$("",!0),o(f,{slot:"end"},{default:n(()=>[B(e.$slots,"buttons"),!e.canGoback&&e.closeButton&&(e.closeButtonLocation||"left")=="right"?(c(),h(g,{key:0},{default:n(()=>[o(u,{slot:"icon-only",icon:e.icons.closeOutline},null,8,["icon"])]),_:1})):$("",!0)]),_:3})]),_:3}),e.$slots.default?(c(),h(I,{key:0},{default:n(()=>[B(e.$slots,"default")]),_:3})):$("",!0),e.$slots.searchbar?(c(),h(I,{key:1},{default:n(()=>[B(e.$slots,"searchbar")]),_:3})):$("",!0),e.progress?(c(),h(b,{key:2,type:"indeterminate"})):$("",!0)]),_:3},8,["translucent"]),o(_,{animated:!0,"is-open":e.waiting,message:e.waitMessage||"Please wait..."},null,8,["is-open","message"])],64)}const vt=F(ft,[["render",gt]]);var H=(e=>(e.OK="OK",e.Cancel="Cancel",e))(H||{});const _t=async function(t){const s=t,r=await X.create(s);r.present();const{data:d,role:p}=await r.onWillDismiss();return console.log("Modal closed using button",p),t.closeCallback&&t.closeCallback(p,d),r};function ue(){return{createModal:function(s){_t(s)},closeModal:function(s,r,d){return X.dismiss(r,s.toString(),d)}}}const ht=V({components:{PageHeader:vt,IonButton:R,IonIcon:J,FormUI:rt},emits:["save","cancel"],props:{formData:{type:Object,required:!0},schema:{type:Object,required:!0},isModal:{type:Boolean,required:!1,default:()=>!1},confirmCancel:Boolean,editMode:Boolean},setup(e,t){const s=U(),r=P(()=>e.editMode&&e.schema.editTitle||e.schema.title),{closeModal:d}=ue(),p=async u=>{t.emit("save",u),e.isModal&&await d(H.OK,u)},l=async()=>{t.emit("cancel"),e.isModal&&await d(H.Cancel)};return{icons:{closeOutline:Q},title:r,processCancelWithConfirmation:async()=>{if(e.confirmCancel){const u=await Ie.create({htmlAttributes:{"aria-label":"alert dialog"},cssClass:"cancel-confirm-alert",header:"Cancel?",message:"Are you sure, you want to cancel?",buttons:[{text:"No",role:"cancel",cssClass:"alert-button-cancel"},{text:"Yes",role:"confirm",cssClass:"alert-button-confirm"}]});await u.present();const{role:g}=await u.onDidDismiss();g=="confirm"&&l()}else l()},processFormSubmit:p,store:s}}});function bt(e,t,s,r,d,p){const l=a("ion-icon"),m=a("ion-button"),u=a("PageHeader"),g=a("FormUI"),f=a("ion-content");return c(),T(E,null,[o(u,{backButton:!e.isModal,title:e.title,progress:e.store.progress,waiting:e.store.progress,waitMessage:e.store.progressMessage},{buttons:n(()=>[e.isModal?$("",!0):(c(),h(m,{key:0,onClick:e.processCancelWithConfirmation},{default:n(()=>[o(l,{slot:"icon-only",icon:e.icons.closeOutline},null,8,["icon"])]),_:1},8,["onClick"]))]),_:1},8,["backButton","title","progress","waiting","waitMessage"]),o(f,null,{default:n(()=>[o(g,{schema:e.schema,formData:e.formData,onSubmit:e.processFormSubmit,onCancel:e.processCancelWithConfirmation},null,8,["schema","formData","onSubmit","onCancel"])]),_:1})],64)}const Dt=F(ht,[["render",bt]]),Ct={name:"patientForm",title:"Add new patient",editTitle:"Edit patient",cssClass:"form",actions:{cancel:"Cancel",submit:"Save",reset:"Reset"},fields:[{name:"name",component:{fieldType:"input",type:"text",label:"Name"},attrs:L.input,validations:{required:{},personName:{},minLength:{value:[5]}}},{name:"gender",component:{fieldType:"select",label:"Gender",options:[{text:"Male",value:"Male"},{text:"Female",value:"Female"}]},attrs:L.select,validations:{required:{}}},{name:"dob",component:{fieldType:"date",label:"Date of birth"},attrs:L.date,validations:{requiredUnless:{value:["age"],dependentProps:["age"],message:"Date of birth or Age is required."}}},{name:"age",component:{fieldType:"input",type:"number",label:"Age (in years)"},attrs:{...L.input,inputmode:"numeric"},validations:{requiredUnless:{value:["dob"],dependentProps:["dob"],message:"Date of birth or Age is required."},minValue:{value:[1]},maxValue:{value:[100]}}},{name:"phone",component:{fieldType:"input",type:"tel",label:"Phone number"},attrs:L.input,validations:{required:{},phone:{}}},{name:"address",component:{fieldType:"textarea",label:"Address"},attrs:L.textarea,validations:{required:{},minLength:{value:[5]}}}]},St=V({name:"PatientForm",components:{FormComponent:Dt},props:{isModal:Boolean,patient:Object},setup(e,t){const s=e.patient||ke(),r=Ct,d=P(()=>e.patient!=null&&e.patient!=null),{closeModal:p}=ue(),l=U(),m=(f,y)=>{e.isModal&&p(f,y)};return{patientData:s,formSchema:r,processSave:async f=>{await l.savePatient(f),m(H.OK,f)},processCancel:()=>{m(H.Cancel)},editMode:d}}});function $t(e,t,s,r,d,p){const l=a("FormComponent");return c(),h(l,{confirmCancel:!0,formData:e.patientData,schema:e.formSchema,isModal:!e.isModal,editMode:e.editMode,onSave:e.processSave,onCancel:e.processCancel},null,8,["formData","schema","isModal","editMode","onSave","onCancel"])}const yt=F(St,[["render",$t]]),z=7,me=14;function It(e,t){return isNaN(t)||e.length==0?!1:e.findIndex(s=>s.days.includes(t)&&s.start>0&&s.end>0)>-1}function kt(){const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate()+me-1)}function pe(e){return q(e,G.US_DATE)}function Mt(e,t,s){const r=[];return e.length==0||(Me(t,s).forEach(p=>{const l=new Date(p),m=It(e,l.getDay()),u=q(l,G.ddd_DD_MMM);r.push({key:p,value:pe(l),text:u,disabled:!m})}),console.log("ScheduleDateOptions",r)),r}function wt(e,t){const s=Date.parse(e);if(isNaN(s)||t.length==0)return[];const r=new Date;let d=0;e==q(r,G.US_DATE)&&(d=r.getHours());const p=new Date(s).getDay();return t.filter(l=>l.days.includes(p)&&l.start>0&&l.end>0&&(d==0||d<l.end)).map(l=>({value:l.timeSlotId,text:l.title,disabled:!1}))}function Ot(e,t){const s=O(new Date().getTime()),r=O(new Date().getTime()),d=P(()=>Mt(j(e),ne(s.value),me));function p(v){const _=new Date(v),k=q(_,G.US_DATE),i=d.value.find(N=>N.value.toString()==k);return i&&i.disabled==!1}const l=P(()=>d.value.length),m=P(()=>l.value>0?d.value[0].value:void 0),u=P(()=>l.value>0?d.value[l.value-1].value:void 0),g=P(()=>{const v=pe(ne(r.value)),_=d.value.findIndex(k=>k.value==v);return d.value.slice(_,_+z).filter(k=>!k.disabled)}),f=P(()=>wt(j(t),j(e))),y=P(()=>r.value-new Date().getTime()>0),I=P(()=>{const v=new Date(g.value[g.value.length-1].value);return kt().getTime()-v.getTime()>0});return{fullScheduleOptions:d,scheduleDateOptions:g,isDateEnabled:p,minDate:m,maxDate:u,shiftTimeOptions:f,nextPrevSchedule:v=>{const _=v?z:-1*z;r.value=we(r.value,_)},showSchedulePrev:y,showScheduleNext:I}}const ae="update:scheduleDate",le="update:scheduleTime",Pt=V({name:"ScheduleComponent",components:{IonLabel:se,IonIcon:J,IonSegment:Oe,IonSegmentButton:Pe,IonButton:R,IonItem:Z,CustomDate:dt,IonItemGroup:Te,IonItemDivider:Ae},props:{scheduleDate:String,scheduleTime:String,doctorSchedules:Array,dateLabel:String,timeLabel:String,name:{type:String,required:!0},calenderView:Boolean,labelPosition:String},emits:[ae,le],setup(e,t){const s=O(e.scheduleDate),r=O(e.scheduleTime),d=P(()=>s.value?Be(s.value):"");Y(()=>{r.value="",t.emit(ae,s.value)}),Y(()=>{t.emit(le,r.value)});const p=O(t.attrs);Ee(()=>{p.value=t.attrs});const{fullScheduleOptions:l,scheduleDateOptions:m,shiftTimeOptions:u,isDateEnabled:g,nextPrevSchedule:f,showScheduleNext:y,showSchedulePrev:I,minDate:b,maxDate:v}=Ot(e.doctorSchedules,s),_=l.value.filter(i=>i.disabled==!1).map(i=>({date:i.value,textColor:"#000000",backgroundColor:"#d8fce7"})),k=P(()=>({presentation:"date",min:b,max:v,showTitle:!0,isDateEnabled:g,locale:Ve.EN_IN,showButtons:!0,highlightedDates:_}));return{icons:{chevronBackOutline:Fe,chevronForwardOutline:Ne},attrs:p,scheduleDateOptions:m,shiftTimeOptions:u,nextPrevSchedule:f,showScheduleNext:y,showSchedulePrev:I,dateRef:s,timeRef:r,calenderAttrs:k,selectedDateText:d}}}),Tt={key:1,class:"schedule-date flex-c"},At={class:"schedule-date-header flex-r justify-sb align-center"},Bt={class:"schedule-time flex-c"},Et={class:"schedule-time-header flex-r justify-sb align-center"};function Vt(e,t,s,r,d,p){const l=a("ion-item-divider"),m=a("CustomDate"),u=a("ion-label"),g=a("ion-icon"),f=a("ion-button"),y=a("ion-buttons"),I=a("ion-segment-button"),b=a("ion-segment"),v=a("ion-item"),_=a("ion-note"),k=a("ion-item-group");return c(),h(k,null,{default:n(()=>[e.$slots.title?(c(),h(l,{key:0},{default:n(()=>[B(e.$slots,"title")]),_:3})):$("",!0),o(v,null,{default:n(()=>[e.calenderView?(c(),h(m,Le({key:0,name:"sch-date",asButton:!0,label:e.dateLabel,presentation:"date"},e.calenderAttrs,{modelValue:e.dateRef,"onUpdate:modelValue":t[0]||(t[0]=i=>e.dateRef=i)}),null,16,["label","modelValue"])):(c(),T("div",Tt,[C("div",At,[o(u,{position:e.labelPosition},{default:n(()=>[M(S(e.dateLabel||"Date"),1)]),_:1},8,["position"]),o(y,{class:"schedule-date-next-prev flex-r justify-sb"},{default:n(()=>[o(f,{class:"prev-next-button",size:"small",fill:"clear",shape:"round",disabled:!e.showSchedulePrev,onClick:t[1]||(t[1]=i=>e.nextPrevSchedule(!1))},{default:n(()=>[o(g,{slot:"icon-only",icon:e.icons.chevronBackOutline},null,8,["icon"])]),_:1},8,["disabled"]),o(f,{class:"prev-next-button",size:"small",fill:"clear",shape:"round",disabled:!e.showScheduleNext,onClick:t[2]||(t[2]=i=>e.nextPrevSchedule(!0))},{default:n(()=>[o(g,{slot:"icon-only",icon:e.icons.chevronForwardOutline},null,8,["icon"])]),_:1},8,["disabled"])]),_:1})]),o(b,{class:"appointment",modelValue:e.dateRef,"onUpdate:modelValue":t[3]||(t[3]=i=>e.dateRef=i),scrollable:!0,translate:"no"},{default:n(()=>[(c(!0),T(E,null,K(e.scheduleDateOptions,i=>(c(),h(I,{key:i.value,value:i.value,disabled:i.disabled},{default:n(()=>[o(u,null,{default:n(()=>[M(S(i.text),1)]),_:2},1024)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"])])),B(e.$slots,"date-error")]),_:3}),o(v,null,{default:n(()=>[C("div",Bt,[C("div",Et,[o(u,{position:e.labelPosition},{default:n(()=>[M(S(e.timeLabel||"Time"),1)]),_:1},8,["position"])]),o(b,{class:"appointment",modelValue:e.timeRef,"onUpdate:modelValue":t[4]||(t[4]=i=>e.timeRef=i),scrollable:!0,translate:"no"},{default:n(()=>[(c(!0),T(E,null,K(e.shiftTimeOptions,i=>(c(),h(I,{key:i.value,value:i.value,disabled:i.disabled},{default:n(()=>[o(u,null,{default:n(()=>[M(S(i.text),1)]),_:2},1024)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["modelValue"]),e.shiftTimeOptions.length==0?(c(),h(_,{key:0},{default:n(()=>[M(" No time slot avavilable on "+S(e.selectedDateText),1)]),_:1})):$("",!0)]),B(e.$slots,"time-error")]),_:3})]),_:3})}const Ft=F(Pt,[["render",Vt]]),Nt=V({props:{selectedItem:Object,title:{type:String,default:"Select Patient"},itemName:String},emits:["selection-cancel","selection-change","add-edit-item"],components:{IonButton:R,IonContent:ie,IonItem:Z,IonList:re,IonRadioGroup:He,IonRadio:Re,IonFab:Ue,IonFabButton:qe,ModalHeader:st},setup(e,{emit:t}){const s=O(!1),r=O(null),d=O(e.selectedItem?[e.selectedItem]:[]),p=O(""),l=U();Ge(()=>{console.log("onMounted:patient selector"),l.fetchPatients()});const{filteredItems:m}=mt(l.patients,["name","phone"],p,oe);return{icons:{addOutline:de,closeOutline:Q,checkmarkOutline:je,createOutline:ce,searchOutline:ze},filteredItems:m,workingSelectedValues:d,cancelChanges:()=>{console.log("cancelChanges"),t("selection-cancel")},confirmChanges:()=>{console.log("confirmChanges"),d.value.length>0&&t("selection-change",d.value)},searchbarInput:b=>{console.log("searchbarInput",b.target.value),p.value=b.target.value},radioChange:b=>{const{value:v}=b.detail;d.value=[v]},comparePatient:oe,searchbarRef:r,addEditItem:b=>{t("add-edit-item",b)},showSearch:s}}}),Lt={key:1,class:"no-item"};function Ht(e,t,s,r,d,p){const l=a("ModalHeader"),m=a("ion-icon"),u=a("ion-fab-button"),g=a("ion-fab"),f=a("ion-note"),y=a("ion-button"),I=a("ion-radio"),b=a("ion-item"),v=a("ion-radio-group"),_=a("ion-list"),k=a("ion-content");return c(),T(E,null,[o(l,{title:e.title,search:!0,doneButton:!0,cancelButton:!0,autoClose:!1,placeholder:"Filter patients",onCancel:t[0]||(t[0]=i=>e.cancelChanges()),onDone:t[1]||(t[1]=i=>e.confirmChanges()),onIonInput:e.searchbarInput},null,8,["title","onIonInput"]),o(k,{class:"ion-padding",fullscreen:!0},{default:n(()=>[o(g,{slot:"fixed",vertical:"bottom",horizontal:"end"},{default:n(()=>[o(u,{size:"small",onClick:t[2]||(t[2]=i=>e.addEditItem(null))},{default:n(()=>[o(m,{icon:e.icons.addOutline},null,8,["icon"])]),_:1})]),_:1}),e.workingSelectedValues.length==0?(c(),h(f,{key:0,class:"error-message"},{default:n(()=>[M(" Please select patient ")]),_:1})):$("",!0),e.filteredItems.length==0?(c(),T("div",Lt,[o(f,null,{default:n(()=>[M("No patients found, add new patient.")]),_:1}),o(y,{size:"small",shape:"round",fill:"clear",onClick:t[3]||(t[3]=i=>e.addEditItem(null))},{default:n(()=>[o(m,{slot:"icon-only",icon:e.icons.addOutline},null,8,["icon"])]),_:1})])):$("",!0),e.filteredItems.length>0?(c(),h(_,{key:2,id:"modal-list",lines:"full"},{default:n(()=>[o(v,{value:e.selectedItem,compareWith:e.comparePatient,onIonChange:t[4]||(t[4]=i=>e.radioChange(i))},{default:n(()=>[(c(!0),T(E,null,K(e.filteredItems,i=>(c(),h(b,{key:i.id||i.name},{default:n(()=>[o(I,{value:i,"aria-label":i.name,"label-placement":"end",justify:"start"},{default:n(()=>[B(e.$slots,"itemView",{itemData:i})]),_:2},1032,["value","aria-label"]),o(m,{slot:"end",icon:e.icons.createOutline,onClick:N=>e.addEditItem(i)},null,8,["icon","onClick"])]),_:2},1024))),128))]),_:3},8,["value","compareWith"])]),_:3})):$("",!0)]),_:3})],64)}const Rt=F(Nt,[["render",Ht]]),Ut=V({name:"AppointmentForm",components:{PatientSelector:Rt,ScheduleComponent:Ft,PatientForm:yt,DoctorCard:it,IonButton:R,IonItem:Z,IonIcon:J,IonLabel:se,IonList:re,IonModal:We,IonToggle:Ye,IonContent:ie,HeaderNav:pt},props:{doctorId:{type:String,required:!0}},setup(e){const t=O(!1),s=O(!1),r=O(!1),d=W(),p=U();p.selectDoctor(e.doctorId);const l=P(()=>p.selectedDoctor),m=O(new Ke({doctor:l.value,date:Qe(),time:""}));Y(()=>{l.value&&(m.value.doctor=l.value)});const u=Xe(m),g={formName:"appointment",fieldValidations:{doctorId:{label:"Doctor",validations:{required:{}}},patient:{label:"Patient",validations:{notNull:{}}},date:{label:"Schedule Date",validations:{required:{}}},time:{label:"Schedule Time",validations:{required:{}}}}},{rules:f}=ct(g,u),y=ut(f,u,{$autoDirty:!1,$lazy:!0,$rewardEarly:!1}),I=()=>d.back(),b=async function(){const w=await y.value.$validate();({...u},w&&p.saveAppointment(m.value))};function v(w){let A;w&&Array.isArray(w)&&w.length>0?A=w[0]:A=w,console.log("new person",A),A&&(m.value.patient=A,s.value=!1)}const _=O(null);async function k(w){console.log("addEditPatient",w),_.value=w,r.value=!0}async function i(){_.value=void 0,r.value=!1}async function N(w){s.value=w}return{v$:y,icons:{arrowBack:Je,location:Ze,personOutline:xe,calendarOutline:et,chevronBack:tt,chevronForward:nt,addOutline:de,createOutline:ce},appointmentModel:m,appointeeDoctor:l,cancelHandler:I,bookAppointment:b,addEditPatient:k,editingPatient:_,patientFormClosed:i,showPatientForm:r,patientSelectorOpen:s,showPatientSelectorModal:N,patientSelectionChanged:v,calenderView:t}}}),qt={class:"appointment-form-container width-100"},Gt={class:"doc-card-container"},jt={key:0,class:"error error-message"},zt={key:0,class:"error error-message"},Wt={class:"patient-select flex-c justify-start align-center ion-padding-vertical"},Yt={key:0,class:"error error-message"},Kt={class:"actions"};function Qt(e,t,s,r,d,p){var ee;const l=a("HeaderNav"),m=a("DoctorCard"),u=a("ion-label"),g=a("ion-toggle"),f=a("ScheduleComponent"),y=a("ion-list"),I=a("ion-card-content"),b=a("ion-card"),v=a("ion-item-divider"),_=a("ion-icon"),k=a("ion-button"),i=a("ion-item"),N=a("ion-note"),w=a("ion-item-group"),A=a("ion-buttons"),fe=a("ion-content"),ge=a("PatientForm"),x=a("ion-modal"),ve=a("PatientSelector");return c(),T(E,null,[o(l,{title:"Appointment: "+((ee=e.appointeeDoctor)==null?void 0:ee.name),navigation:!1,search:!1,close:!1},null,8,["title"]),o(fe,null,{default:n(()=>[C("div",qt,[C("form",{novalidate:"",autocomplete:"off",onSubmit:t[5]||(t[5]=ot((...D)=>e.bookAppointment&&e.bookAppointment(...D),["stop","prevent"]))},[C("div",Gt,[o(m,{schedule:!1,compact:!0,actions:!1,detail:!1,doctor:e.appointeeDoctor,loading:e.appointeeDoctor?e.appointeeDoctor.loading:!0,basicOnly:!0},null,8,["doctor","loading"])]),o(b,null,{default:n(()=>[o(I,null,{default:n(()=>[o(y,{class:"list-container ion-no-padding",lines:"full",inset:!1},{default:n(()=>[e.appointeeDoctor?(c(),h(f,{key:0,name:"schedule",dateLabel:"Schedule Date",timeLabel:"Schedule Time",calenderView:e.calenderView,doctorSchedules:e.appointeeDoctor.schedules,scheduleDate:e.appointmentModel.date,"onUpdate:scheduleDate":t[1]||(t[1]=D=>e.appointmentModel.date=D),scheduleTime:e.appointmentModel.time,"onUpdate:scheduleTime":t[2]||(t[2]=D=>e.appointmentModel.time=D),inset:!1},{title:n(()=>[o(u,null,{default:n(()=>[M(" Schedule ")]),_:1}),o(g,{checked:!1,"label-placement":"start",justify:"end",onIonChange:t[0]||(t[0]=D=>{e.calenderView=D.detail.checked})},{default:n(()=>[M(" Calender View ")]),_:1})]),"date-error":n(()=>[e.v$.date.$error?(c(),T("div",jt,[C("span",null,S((e.v$.date.$errors[0]||{}).$message)+"; ",1)])):$("",!0)]),"time-error":n(()=>[e.v$.time.$error?(c(),T("div",zt,[C("span",null,S((e.v$.time.$errors[0]||{}).$message)+"; ",1)])):$("",!0)]),_:1},8,["calenderView","doctorSchedules","scheduleDate","scheduleTime"])):$("",!0)]),_:1})]),_:1})]),_:1}),o(b,null,{default:n(()=>[o(I,null,{default:n(()=>[o(y,{class:"list-container ion-no-padding"},{default:n(()=>[o(w,null,{default:n(()=>[o(v,null,{default:n(()=>[M(" Patient ")]),_:1}),e.appointmentModel.patient?(c(),h(i,{key:0,lines:"none"},{default:n(()=>[o(u,{class:"summary"},{default:n(()=>[C("strong",null,S(e.appointmentModel.patient.name),1),C("p",null,S(e.appointmentModel.patient.gender)+" | "+S(e.appointmentModel.patient.age),1),C("p",null,S(e.appointmentModel.patient.address),1),C("p",null,S(e.appointmentModel.patient.phone),1)]),_:1}),o(k,{class:"edit",slot:"end",id:"select-patient",fill:"clear",size:"small",onClick:t[3]||(t[3]=D=>e.showPatientSelectorModal(!0))},{default:n(()=>[o(_,{slot:"start",icon:e.icons.createOutline},null,8,["icon"]),M(" Change ")]),_:1})]),_:1})):$("",!0),e.appointmentModel.patient?$("",!0):(c(),h(i,{key:1,lines:"none",button:!1},{default:n(()=>{var D,te;return[C("div",Wt,[o(N,null,{default:n(()=>[M("Click below button to add patient ")]),_:1}),o(k,{id:"select-patient",fill:"solid",shape:"round",class:"width-100",onClick:t[4]||(t[4]=xt=>e.showPatientSelectorModal(!0))},{default:n(()=>[o(_,{slot:"start",icon:e.icons.addOutline},null,8,["icon"]),M(" Patient ")]),_:1})]),(D=e.v$.patient)!=null&&D.$error?(c(),T("div",Yt,[C("span",null,S((((te=e.v$.patient)==null?void 0:te.$errors[0])||{}).$message),1)])):$("",!0)]}),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}),C("div",Kt,[o(A,null,{default:n(()=>[o(k,{fill:"outline",shape:"round",color:"primary",onClick:e.cancelHandler},{default:n(()=>[M(" Cancel ")]),_:1},8,["onClick"]),o(k,{fill:"solid",shape:"round",color:"primary",onClick:e.bookAppointment},{default:n(()=>[M(" Book Appointment ")]),_:1},8,["onClick"])]),_:1})])],32)])]),_:1}),o(x,{isOpen:e.showPatientForm,onDidDismiss:e.patientFormClosed},{default:n(()=>[o(ge,{isModal:!0,patient:e.editingPatient},null,8,["patient"])]),_:1},8,["isOpen","onDidDismiss"]),o(x,{isOpen:e.patientSelectorOpen,onDidDismiss:t[8]||(t[8]=D=>e.showPatientSelectorModal(!1))},{default:n(()=>[o(ve,{title:"Select patient",selectedItem:e.appointmentModel.patient,onSelectionChange:t[6]||(t[6]=D=>e.patientSelectionChanged(D)),onSelectionCancel:t[7]||(t[7]=D=>e.showPatientSelectorModal(!1)),onAddEditItem:e.addEditPatient},{itemView:n(({itemData:D})=>[o(u,null,{default:n(()=>[C("strong",null,S(D.name),1),C("p",null,S(D.gender)+" | "+S(D.age),1),C("p",null,S(D.address),1),C("p",null,S(D.phoneNumber),1)]),_:2},1024)]),_:1},8,["selectedItem","onAddEditItem"])]),_:1},8,["isOpen"])],64)}const Xt=F(Ut,[["render",Qt]]),Jt=V({components:{AppointmentForm:Xt,IonPage:at},props:{doctorId:{type:String,required:!0}},setup(){return{toRouteParamValue:lt}}});function Zt(e,t,s,r,d,p){const l=a("AppointmentForm"),m=a("ion-page");return c(),h(m,null,{default:n(()=>[o(l,{doctorId:e.toRouteParamValue(e.$route.params.doctorId)},null,8,["doctorId"])]),_:1})}const sn=F(Jt,[["render",Zt]]);export{sn as default};
