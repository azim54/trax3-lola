import{_ as j}from"./TasksLayout-BcOeq5lv.js";import{g as m,h as f,o as p,c as v,d as a,u as A,w as n,F as P,Z as L,e as w,a as l,b as I}from"./app-BqYB4w7h.js";import{_ as d}from"./InputLabel-B012P3ON.js";import{_}from"./Select-I1X3nauV.js";import{_ as T}from"./TextInput-Bd33mpYb.js";import{_ as S}from"./JobsManagement-BhfjSFNe.js";import{C}from"./Code-DkVlEmhY.js";import"./AuthenticatedLayout-DmkbqqwL.js";import"./TopBar-CSycyVTE.js";import"./ApplicationLogo-CbRF8qXe.js";import"./form-BD1T68Go.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-text-value-5zAQL0RU.js";import"./use-tree-walker-CEHhLUFs.js";import"./NeutralBadge-Cx27iNjU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronUpDownIcon-BxOM5Ujt.js";import"./InputError-_zuJ5dV-.js";import"./FormModal--OgS4LYv.js";import"./PrimaryButton-JrsBxlP3.js";import"./transition-CSxLRhS2.js";import"./disposables-CuHKeC00.js";import"./ConfirmModal-DdIInXQ7.js";import"./moment-Cl4UOzQZ.js";import"./PencilSquareIcon-CqSWVHZD.js";import"./DataPanel-eTawuoZh.js";import"./CrudItems-BFkrHaNx.js";import"./LoadItems-f7CjgfCr.js";import"./FilterItems-DtKLW4qf.js";const D={class:"px-6"},U={class:"px-6 mt-5"},$={key:1,class:"pl-1 pt-1 text-sm text-red-600 dark:text-red-400"},B={class:"px-6 mt-5"},F=l("div",{class:"mt-2 text-xs text-gray-500 dark:text-gray-400"}," You can enter a specific requirement number (e.g. XAPI-00113) or specific section of the xAPI spec (Data 2.4.1). ",-1),ve={__name:"Testsuite",setup(N){const x={section:"",store:"default",client:null},u=m([{id:"default",name:"Default store"}]),c=m([]),s=f(()=>c.value.filter(o=>o.store===e.value.form.store).map(o=>({id:o.slug,name:o.name}))),g=o=>{e.value.form.client=s.value.length>0?s.value[0].id:null},b=o=>new Promise((t,r)=>{axios.get("/trax/api/gateway/front/clients").then(V=>{c.value=V.data.data,axios.get("/trax/api/gateway/front/stores").then(k=>{u.value=k.data.data.filter(i=>i.status==="ready").map(i=>({id:i.slug,name:i.name})),e.value.form.store=u.value[0].id,e.value.form.client=s.value.length>0?s.value[0].id:null,t()})})}),h=(o,t)=>t=="section"?o.settings.section:o[t]===void 0?null:o[t],e=m(null),y=f(()=>e.value.job?e.value.job.feedback:"");return(o,t)=>(p(),v(P,null,[a(A(L),{title:"ADL Test Suite"}),a(j,{"side-menu-current":"ADL Test Suite"},{default:n(()=>[a(S,{endpoint:"/trax/api/gateway/front/jobs/testsuite",title:"ADL Test Suite",jobProps:x,beforeItemLoading:b,afterPropLoading:h,onInit:t[4]||(t[4]=r=>e.value=r)},{description:n(()=>[w(" You can run this job to check that your LRS is conformant with the xAPI specification. ")]),form:n(()=>[l("div",D,[a(d,{value:"Store"}),a(_,{id:"store",options:u.value,modelValue:e.value.form.store,"onUpdate:modelValue":[t[0]||(t[0]=r=>e.value.form.store=r),g],class:"mt-1"},null,8,["options","modelValue"])]),l("div",U,[a(d,{value:"Client"}),s.value.length>0?(p(),I(_,{key:0,id:"client",options:s.value,modelValue:e.value.form.client,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.form.client=r),class:"mt-1"},null,8,["options","modelValue"])):(p(),v("p",$," There is no client available for this store. This is required to run the testsuite. "))]),l("div",B,[a(d,{for:"section",value:"Section"}),a(T,{id:"section",placeholder:"XAPI-00113",modelValue:e.value.form.section,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.form.section=r),error:e.value.errors.section,"onUpdate:error":t[3]||(t[3]=r=>e.value.errors.section=r),onApply:e.value.createOrUpdate,class:"mt-1"},null,8,["modelValue","error","onApply"]),F])]),feedback:n(()=>[a(C,{data:y.value,type:"text/plain"},null,8,["data"])]),_:1})]),_:1})],64))}};export{ve as default};
