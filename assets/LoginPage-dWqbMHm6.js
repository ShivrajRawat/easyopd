import{d as E,c as w,_ as V,o as C,a as j,b as u,t as _,I as T,e as R,f as D,g as z,h as F,i as G,j as L,k as U,l as q,u as N,m as Q,r as k,n as x,p as H,q as Y,s as J,v as K,w as W,x as X,y as Z,P as oo,z as l,A as eo,B as n,C as e,D as f,E as no}from"./index--_Uh9bg0.js";import{u as to,a as so,v as lo}from"./index-3XLi5VT1.js";const ao=E({components:{},props:{errorObject:Object},setup(o,s){const v=w(()=>{var a,t;return((a=o.errorObject)==null?void 0:a.$error)&&((t=o.errorObject)==null?void 0:t.$dirty)}),c=w(()=>{var a,t;return((a=o.errorObject)==null?void 0:a.$errors.length)>0?(t=o.errorObject)==null?void 0:t.$errors[0].$message:""});return{isError:v,errorMessage:c}}}),ro={class:"errors"},io={class:"error-message"};function uo(o,s,v,c,a,t){return C(),j("div",ro,[u("span",io,_(o.errorMessage),1)])}const co=V(ao,[["render",uo],["__scopeId","data-v-c4f37770"]]);var S=(o=>(o.Login="login",o.Register="register",o))(S||{});const y={login:{title:"Sign in",headerText:"Please sign in to continue.",submitButtonText:"Sign in",altActionQuestion:"Do not have account?",altActionButtonText:"Sign up",errorMessage:"Authentication failed, Please try again."},register:{title:"Sign up",headerText:"Please fill below form to sign up.",submitButtonText:"Sign up",altActionQuestion:"Already have account?",altActionButtonText:"Sign in",errorMessage:"Account creation failed, Please try again."}},go=E({components:{IonPage:T,IonButton:R,IonContent:D,IonRow:z,IonCol:F,IonInput:G,IonToast:L,IonLoading:U,ErrorMessage:co,IonIcon:q},props:{},setup(o){const s=N(),v=Q(),c=k(!1),a=k(""),t=x({emailOrPhone:"",password:""}),r=k("login"),M=w(()=>y[r.value]),P={formName:"login",fieldValidations:{emailOrPhone:{label:"Email or phone",validations:{required:{},emailOrPhone:{}}},password:{label:"Password",validations:{required:{},minLength:{value:[12]}}}}},{rules:b}=to(P,t),d=so(b,t,lo),O=w(()=>d.value.$errors.length==0);function g(i){console.log("login success?",i),i&&s.replace(v.query.rurl||oo.HOME.route)}async function m(){const i=await d.value.$validate();console.log("onLogin form submit",d,t),i&&(c.value=!0,r.value=="login"?X(t.emailOrPhone,t.password).then(g).catch(p).finally(()=>{c.value=!1}):r.value=="register"&&Z(t.emailOrPhone,t.password).then(g).catch(p).finally(()=>{c.value=!1})),console.log("form valid?",i)}function p(i){var $;console.log("loginRegisterError",i),a.value=($=y[r.value])==null?void 0:$.errorMessage}function A(){r.value=r.value=="login"?"register":"login",d.value.$reset(),t.emailOrPhone="",t.password=""}return{icons:{logoGoogle:H,logoFacebook:Y,lockClosedOutline:J,mailOutline:K,phonePortraitOutline:W},FormViewType:S,v$:d,loginModel:t,canSubmit:O,formView:r,onFormSubmit:m,onChangeView:A,formAttributes:M,actionInProgress:c,errorMessage:a}}}),mo="/easyopd/logo.png",po={class:"login-form-container"},fo=u("div",{class:"login-logo"},[u("img",{src:mo,alt:"Easy OPD logo"})],-1),_o={class:"title ion-padding-start"},bo={class:"error-message-container"},ho={class:"or-text"};function vo(o,s,v,c,a,t){const r=l("ion-loading"),M=l("ion-toast"),P=l("ion-note"),b=l("ion-icon"),d=l("ion-input"),O=l("ErrorMessage"),g=l("ion-col"),m=l("ion-row"),p=l("ion-button"),A=l("ion-grid"),i=l("ion-content"),$=l("ion-page");return C(),eo($,null,{default:n(()=>{var I;return[e(r,{animated:!0,"is-open":o.actionInProgress,message:"Please wait..."},null,8,["is-open"]),e(M,{animated:!0,duration:"5000","is-open":((I=o.errorMessage)==null?void 0:I.length)>0,message:o.errorMessage,color:"danger",onDidDismiss:s[0]||(s[0]=()=>o.errorMessage="")},null,8,["is-open","message"]),e(i,{class:"ion-padding"},{default:n(()=>[u("div",po,[fo,u("div",_o,[u("h2",null,_(o.formAttributes.title),1),e(P,null,{default:n(()=>[f(_(o.formAttributes.headerText),1)]),_:1})]),u("form",{class:"form login-form",novalidate:"",onSubmit:s[3]||(s[3]=no((...h)=>o.onFormSubmit&&o.onFormSubmit(...h),["prevent"]))},[e(A,{class:"ion-padding-top"},{default:n(()=>[e(m,null,{default:n(()=>[e(g,null,{default:n(()=>{var h;return[e(b,{slot:"start",icon:o.icons.mailOutline},null,8,["icon"]),e(d,{inputmode:"text",labelPlacement:"stacked",label:"Email or phone",placeholder:"Email or phone number",modelValue:o.loginModel.emailOrPhone,"onUpdate:modelValue":s[1]||(s[1]=B=>o.loginModel.emailOrPhone=B),type:"text",fill:"outline",spellcheck:!1,autocapitalize:"off","error-text":(((h=o.v$.emailOrPhone)==null?void 0:h.$errors[0])||{}).$message},null,8,["modelValue","error-text"]),e(O,{errorObject:o.v$.emailOrPhone},null,8,["errorObject"])]}),_:1})]),_:1}),e(m,null,{default:n(()=>[e(g,null,{default:n(()=>[e(b,{slot:"start",icon:o.icons.lockClosedOutline},null,8,["icon"]),e(d,{labelPlacement:"stacked",label:"Password",placeholder:"Password",modelValue:o.loginModel.password,"onUpdate:modelValue":s[2]||(s[2]=h=>o.loginModel.password=h),fill:"outline",type:"password"},null,8,["modelValue"]),e(O,{errorObject:o.v$.password},null,8,["errorObject"])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(g,null,{default:n(()=>[u("div",bo,_(o.errorMessage),1),e(p,{type:"submit",shape:"round",expand:"block"},{default:n(()=>[f(_(o.formAttributes.submitButtonText),1)]),_:1})]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(g,{class:"signup-button-container"},{default:n(()=>[f(_(o.formAttributes.altActionQuestion)+" ",1),e(p,{onClick:o.onChangeView,color:"primary",size:"small",fill:"outline",shape:"round"},{default:n(()=>[f(_(o.formAttributes.altActionButtonText),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),e(m,null,{default:n(()=>[e(g,{class:"ion-text-center"},{default:n(()=>[u("div",ho,[e(P,null,{default:n(()=>[f("You can also sign in using your")]),_:1})]),e(p,{size:"small",fill:"outline",expand:"block",color:"google"},{default:n(()=>[e(b,{icon:o.icons.logoGoogle,slot:"start"},null,8,["icon"]),f(" Google Account ")]),_:1}),e(p,{size:"small",fill:"outline",expand:"block",color:"facebook"},{default:n(()=>[e(b,{icon:o.icons.logoFacebook,slot:"start"},null,8,["icon"]),f(" Facebook Account ")]),_:1})]),_:1})]),_:1})]),_:1})],32)])]),_:1})]}),_:1})}const $o=V(go,[["render",vo]]);export{$o as default};
