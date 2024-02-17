import{d as I,G as x,l as R,e as K,H as j,J as G,K as Q,L as ee,_ as k,z as o,o as c,a as C,b as v,C as n,B as t,t as m,D as _,M as O,N,O as X,u as ne,A as f,r as T,Q as Y,R as te,S as oe,T as se,U as ae,V as E,W as le,X as ie,Y as ce,Z as re,$ as W,a0 as ue,a1 as de,a2 as D,a3 as F,c as B,a4 as _e,a5 as pe,a6 as me,a7 as fe,a8 as he,a9 as be,aa as Ce,ab as A,ac as ye,ad as $e,ae as ve,f as ge,I as Se}from"./index-QxsQlh4-.js";import{u as H}from"./appStore-D6ym7sz-.js";import{u as Z}from"./useFilters-r6jgkoit.js";import{a as Ie,t as Te}from"./dateUtil-H8p96JqU.js";import{C as ke}from"./ChipFilterComponent-pKKDsxXp.js";const Le=I({name:"CityCard",components:{IonThumbnail:x,IonIcon:R,IonButton:K,IonLabel:j},props:{city:Object,showActions:Boolean},setup(e,s){return{icons:{locationOutline:G,businessOutline:Q},defaultCityThumbnail:ee,actionExplore:l=>{console.log("actionExplore",l)}}}}),Ve={class:"city-card"},Oe={class:"city-detail"},we={class:"title"},Ae={key:0,class:"hospital-count"},De={key:0,class:"city-actions"};function Be(e,s,a,l,u,d){const i=o("ion-label"),r=o("ion-icon"),p=o("ion-note"),g=o("ion-button");return c(),C("div",Ve,[v("div",Oe,[v("div",we,[n(i,{class:""},{default:t(()=>[_(m(e.city.name),1)]),_:1})]),e.city.hospitals.length>0?(c(),C("div",Ae,[n(r,{icon:e.icons.businessOutline},null,8,["icon"]),n(p,{class:"margin10"},{default:t(()=>[_(m(e.city.hospitals.length)+" Hospitals ",1)]),_:1})])):O("",!0)]),e.showActions?(c(),C("div",De,[n(g,{fill:"outline",shape:"round",size:"small",onClick:s[0]||(s[0]=$=>e.actionExplore(e.city.name))},{default:t(()=>[_("Explore > ")]),_:1})])):O("",!0)])}const Fe=k(Le,[["render",Be],["__scopeId","data-v-184f09da"]]),Ne=I({components:{IonLabel:j,IonItem:N,IonNote:X},props:{hospital:Object},setup(e,s){const a=ne();return{icons:{businessOutline:Q,locationOutline:G},showDetail:()=>{console.log("navigate to hospital id",e.hospital.id),a.push({path:e.hospital.route})}}}}),Ee={class:"ion-no-margin ion-no-padding ion-margin-top ion-margin-bottom"};function He(e,s,a,l,u,d){const i=o("ion-label"),r=o("ion-note"),p=o("ion-item");return c(),f(p,{lines:"full",class:"hospital",button:!0,onClick:e.showDetail},{default:t(()=>[v("div",Ee,[n(i,null,{default:t(()=>[_(m(e.hospital.name),1)]),_:1}),n(i,null,{default:t(()=>[n(r,null,{default:t(()=>[_(m(e.hospital.address),1)]),_:1})]),_:1})])]),_:1},8,["onClick"])}const Me=k(Ne,[["render",He],["__scopeId","data-v-47f00217"]]),P="ionChange",U={class:"locate-button",iconSlot:"icon-only",icon:oe},ze=I({name:"LocateButton",components:{IonIcon:R,IonButton:K},inheritAttrs:!1,emits:[P],props:{label:String,size:String,fill:String,expand:String,shape:String,iconSlot:String,icon:String},setup(e,s){const a=H(),l=T(Object.assign({},U,e,s.attrs));return Y(()=>{l.value=Object.assign({},U,e,s.attrs)}),te(()=>{a.currentLocation.value&&s.emit(P,a.currentLocation.value)}),{retrieveLocation:()=>{a.startGeoLocationRetrieval()},defaultButtonAttributes:U,attrs:l}}});function Ue(e,s,a,l,u,d){const i=o("ion-icon"),r=o("ion-button");return c(),f(r,se(e.attrs,{onClick:e.retrieveLocation,title:"Use current location"}),{default:t(()=>[_(m(e.label)+" ",1),n(i,{slot:e.iconSlot||e.defaultButtonAttributes.iconSlot,icon:e.icon||e.defaultButtonAttributes.icon},null,8,["slot","icon"])]),_:1},16,["onClick"])}const Re=k(ze,[["render",Ue]]),je=I({name:"SearchBar",components:{IonSearchbar:ae},inheritAttrs:!0,setup(e,s){const a=T(s.attrs),l=T(null);function u(){if(l.value){const d=l.value.$el;if(d){const i=d.getElementsByTagName("input");i.length>0&&i[0].focus()}}}return E(()=>{setTimeout(u,500)}),Y(()=>{a.value=s.attrs}),{searchbarRef:l,attrs:a}}});function Ge(e,s,a,l,u,d){const i=o("ion-searchbar");return c(),f(i,{ref:"searchbarRef",class:le(e.attrs.class||"searchbar"),animated:!0,debounce:500,"v-bind":e.attrs},null,8,["class","v-bind"])}const We=k(je,[["render",Ge]]),J="update:modelValue",Pe=I({name:"LocationSearchbar",components:{LocateButton:Re,Searchbar:We},props:{modelValue:String,placeholder:String},emits:[J],setup(e,s){const a=T(e.modelValue||""),l=({city:u})=>{a.value=u};return ie(()=>a.value,u=>s.emit(J,u)),{searchText:a,locationChange:l}}}),Je={class:"location-searchbar"};function Ke(e,s,a,l,u,d){const i=o("Searchbar"),r=o("LocateButton");return c(),C("div",Je,[n(i,{placeholder:e.placeholder||"Search location",modelValue:e.searchText,"onUpdate:modelValue":s[0]||(s[0]=p=>e.searchText=p)},null,8,["placeholder","modelValue"]),n(r,{class:"location-button",size:"small",fill:"clear",iconSlot:"icon-only",onIonChange:e.locationChange},null,8,["onIonChange"])])}const q=k(Pe,[["render",Ke]]),Qe=I({name:"CityLlist",components:{IonAccordion:ce,IonAccordionGroup:re,CityCardComponent:Fe,IonItem:N,IonList:W,HospitalListItem:Me,IonSpinner:ue,IonSkeletonText:de,LocationSearchbar:q},setup(){const e=H(),s=T(""),a=Z(e.cities,["name"],s,(d,i)=>d==i).filteredItems;E(()=>{e.fetchCities()});const l=({city:d})=>{s.value=d};async function u(d){d.detail.value&&e.fetchHospitals(d.detail.value)}return{filteredCities:a,searchText:s,locationChange:l,cityAccordionInteracted:u}}}),Xe={class:"city-list-container ion-padding"},Ye={key:0},Ze={class:"bold"},qe={key:1,class:"ion-text-center"},xe={slot:"content"},en={style:{width:"100%"}},nn={class:"ion-text-center"};function tn(e,s,a,l,u,d){const i=o("LocationSearchbar"),r=o("ion-note"),p=o("ion-spinner"),g=o("CityCardComponent"),$=o("ion-item"),S=o("ion-list-header"),L=o("HospitalListItem"),w=o("ion-list"),V=o("ion-skeleton-text"),b=o("ion-label"),M=o("ion-accordion"),z=o("ion-accordion-group");return c(),C("div",Xe,[n(i,{placeholder:"Search city",modelValue:e.searchText,"onUpdate:modelValue":s[0]||(s[0]=h=>e.searchText=h)},null,8,["modelValue"]),e.searchText&&e.filteredCities.length==0?(c(),C("div",Ye,[n(r,null,{default:t(()=>[_(" No result found for "),v("span",Ze,m(e.searchText),1)]),_:1})])):e.filteredCities.length==0?(c(),C("div",qe,[n(p,{name:"dots"})])):(c(),f(z,{key:2,onIonChange:s[1]||(s[1]=h=>e.cityAccordionInteracted(h))},{default:t(()=>[(c(!0),C(D,null,F(e.filteredCities,h=>(c(),f(M,{value:h.name,key:h.name},{default:t(()=>[n($,{slot:"header"},{default:t(()=>[n(g,{city:h,showActions:!1},null,8,["city"])]),_:2},1024),v("div",xe,[h.loading?O("",!0):(c(),f(w,{key:0,lines:"full"},{default:t(()=>[h.hospitals.length==0?(c(),f(S,{key:0},{default:t(()=>[_(" No hospitals found in "+m(h.name),1)]),_:2},1024)):O("",!0),(c(!0),C(D,null,F(h.hospitals,y=>(c(),f(L,{key:y.id,hospital:y},null,8,["hospital"]))),128))]),_:2},1024)),h.loading?(c(),f(w,{key:1,lines:"full"},{default:t(()=>[n($,null,{default:t(()=>[v("div",en,[n(V,{animated:!0,style:{width:"50%"}}),n(b,null,{default:t(()=>[n(V,{animated:!0,style:{width:"80%"}})]),_:1})])]),_:1}),v("div",nn,[n(p,{name:"bubbles"})])]),_:1})):O("",!0)])]),_:2},1032,["value"]))),128))]),_:1}))])}const on=k(Qe,[["render",tn]]),sn=I({name:"AppointmentList",components:{IonList:W,IonItem:N,IonNote:X,ChipFilterComponent:ke},setup(e){const s=[{text:"All",value:"999"},{text:"Today",value:"1"},{text:"Next 2 day",value:"2"},{text:"Next 5 day",value:"5"},{text:"Next 7 day",value:"7"}],a=T("7"),l=H(),u=B(()=>{var r;return(r=s.find(p=>p.value==a.value))==null?void 0:r.text}),d=B(()=>Number(a.value));E(()=>{l.fetchAppointments(d.value)});const i=B(()=>{const r=Ie(Date.now(),d.value);return l.appointments.filter(p=>p.dateValue<r)});return{icons:{location:_e,timeOutline:pe},dayFilter:a,store:l,getValueFn:me,appointments:i,toWeekDayFullDate:Te,toSlotTimeDisplayText:fe,filterOptions:s,selectedFilterText:u}}});function an(e,s,a,l,u,d){const i=o("ion-label"),r=o("ion-list-header"),p=o("ChipFilterComponent"),g=o("ion-item"),$=o("ion-note"),S=o("ion-col"),L=o("ion-row"),w=o("ion-grid"),V=o("ion-list");return c(),f(V,{lines:"full"},{default:t(()=>[n(r,{class:"appointment-header",color:"light"},{default:t(()=>[n(i,null,{default:t(()=>[_("Upcoming appointments")]),_:1})]),_:1}),n(g,{lines:"none"},{default:t(()=>[n(p,{modelValue:e.dayFilter,"onUpdate:modelValue":s[0]||(s[0]=b=>e.dayFilter=b),options:e.filterOptions},null,8,["modelValue","options"])]),_:1}),e.appointments.length==0?(c(),f(g,{key:0},{default:t(()=>[v("div",null,[n($,null,{default:t(()=>[_("Appointments not found for "+m(e.selectedFilterText),1)]),_:1})])]),_:1})):O("",!0),(c(!0),C(D,null,F(e.appointments,b=>(c(),f(g,{key:b.id},{default:t(()=>[n(w,{class:"appointment"},{default:t(()=>[n(L,null,{default:t(()=>[n(S,{size:"9"},{default:t(()=>[v("strong",null,m(e.getValueFn(b.patient,"name")),1)]),_:2},1024),n(S,{size:"3",class:""},{default:t(()=>[n($,null,{default:t(()=>[_(" Status ")]),_:1})]),_:1})]),_:2},1024),n(L,null,{default:t(()=>[n(S,{size:"9"},{default:t(()=>[_(m(e.getValueFn(b.doctor,"name")),1)]),_:2},1024),n(S,{size:"3"},{default:t(()=>[n($,null,{default:t(()=>[_(" Booked ")]),_:1})]),_:1})]),_:2},1024),n(L,null,{default:t(()=>[n(S,null,{default:t(()=>[n($,null,{default:t(()=>[_(m(e.toWeekDayFullDate(b.date))+" | "+m(e.toSlotTimeDisplayText(b.time)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})}const ln=k(sn,[["render",an]]),cn=I({name:"CitySelector",components:{IonItem:N,IonList:W,LocationSearchbar:q,IonLabel:j,IonIcon:R,IonModal:he},setup(){const e=H(),s=T(""),a=T(!1),l=Z(e.cities,["name"],s,(r,p)=>r==p).filteredItems,u=B(()=>e.selectedCity||"Select city"),d=r=>{e.selectCity(r),i(!1)},i=r=>a.value=r;return E(()=>{e.fetchCities()}),{icons:{locationOutline:G,chevronDownOutline:be,closeOutline:Ce},filteredCities:l,searchText:s,selectCityHandler:d,selectedCity:u,isModalOpened:a,showModal:i}}});function rn(e,s,a,l,u,d){const i=o("ion-icon"),r=o("ion-button"),p=o("ion-title"),g=o("ion-buttons"),$=o("ion-toolbar"),S=o("ion-header"),L=o("LocationSearchbar"),w=o("ion-list-header"),V=o("ion-label"),b=o("ion-item"),M=o("ion-list"),z=o("ion-content"),h=o("ion-modal");return c(),C(D,null,[n(r,{fill:"clear",shape:"round",size:"small",onClick:s[0]||(s[0]=y=>e.showModal(!0))},{default:t(()=>[n(i,{icon:e.icons.locationOutline,slot:"start"},null,8,["icon"]),_(" "+m(e.selectedCity)+" ",1),n(i,{icon:e.icons.chevronDownOutline,slot:"end"},null,8,["icon"])]),_:1}),n(h,{"is-open":e.isModalOpened},{default:t(()=>[n(S,null,{default:t(()=>[n($,null,{default:t(()=>[n(p,{class:"ion-text-center"},{default:t(()=>[_("Select city")]),_:1}),n(g,{slot:"end"},{default:t(()=>[n(r,{onClick:s[1]||(s[1]=y=>e.showModal(!1))},{default:t(()=>[n(i,{icon:e.icons.closeOutline,slot:"icon-only"},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),n(z,{class:"city-list-container ion-padding"},{default:t(()=>[n(L,{placeholder:"Search city",modelValue:e.searchText,"onUpdate:modelValue":s[2]||(s[2]=y=>e.searchText=y)},null,8,["modelValue"]),n(M,{lines:"full"},{default:t(()=>[e.filteredCities.length==0?(c(),f(w,{key:0},{default:t(()=>[_(" No city found for  "),v("b",null,m(e.searchText),1)]),_:1})):O("",!0),n(b,null,{default:t(()=>[n(V,{color:"primary"},{default:t(()=>[_(" Current: "+m(e.selectedCity),1)]),_:1})]),_:1}),(c(!0),C(D,null,F(e.filteredCities,y=>(c(),f(b,{value:y.name,key:y.name,button:!0,onClick:dn=>e.selectCityHandler(y.name)},{default:t(()=>[n(i,{icon:e.icons.locationOutline,slot:"start"},null,8,["icon"]),n(V,null,{default:t(()=>[_(m(y.name),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["is-open"])],64)}const un=k(cn,[["render",rn]]),bn=I({__name:"HomeTab",setup(e){return(s,a)=>{const l=o("ion-menu-button"),u=o("ion-buttons");return c(),f(A(Se),null,{default:t(()=>[n(A(ye),null,{default:t(()=>[n(A($e),null,{default:t(()=>[n(u,{slot:"start"},{default:t(()=>[n(l)]),_:1}),n(A(ve),null,{default:t(()=>[_("Home")]),_:1})]),_:1})]),_:1}),n(A(ge),{fullscreen:!0},{default:t(()=>[n(un),n(on),n(ln)]),_:1})]),_:1})}}});export{bn as default};
