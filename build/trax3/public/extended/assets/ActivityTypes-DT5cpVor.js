import{_ as y}from"./DataLayout-2LVpN9Ff.js";import{f as I,o as r,c as a,d as o,u as t,w as g,F as v,Z as h,b as x}from"./app-BqYB4w7h.js";import k from"./IriFilters-DU-5cTC0.js";import M from"./IriResults-Cu_Zy2nz.js";import{_ as w}from"./ScrollToTop-jtdKJjCK.js";import{u as A}from"./LoadAndShowItems-CdGcY1M4.js";import{u as S}from"./StoreSelector-eCG8qd9a.js";import"./AuthenticatedLayout-DmkbqqwL.js";import"./TopBar-CSycyVTE.js";import"./ApplicationLogo-CbRF8qXe.js";import"./form-BD1T68Go.js";import"./use-resolve-button-type-zbaL4VAc.js";import"./calculate-active-index-CJPhqQS-.js";import"./use-text-value-5zAQL0RU.js";import"./use-tree-walker-CEHhLUFs.js";import"./Select-I1X3nauV.js";import"./NeutralBadge-Cx27iNjU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronUpDownIcon-BxOM5Ujt.js";import"./LinkButton-wwdNtJLC.js";import"./InputLabel-B012P3ON.js";import"./TextInput-Bd33mpYb.js";import"./InputError-_zuJ5dV-.js";import"./PrimaryButton-JrsBxlP3.js";import"./FilterItems-DtKLW4qf.js";import"./ChevronUpIcon-CDU9mihh.js";import"./LoadItems-f7CjgfCr.js";const T={key:1,class:"text-gray-800 dark:text-white/90 text-center pt-12"},et={__name:"ActivityTypes",setup(b){const{currentStore:m}=S(),e=I({in_iri:""}),p={},{loadItems:n,loadMoreItems:l,loadingItems:c,loadedCounter:d,loadedItems:s,loadingErrors:u,hasMoreItems:f}=A({url:"/trax/api/gateway/front/stores/"+m()+"/activity-types",filters:e,baseParams:{},settings:{sortProp:"iri",more:!0}});return($,i)=>(r(),a(v,null,[o(t(h),{title:"Activity Types"}),o(y,{"side-menu-current":"Activity Types"},{default:g(()=>[o(k,{label:"Type IRI",localStorage:"activity-type-filters",filters:e,options:p,counter:t(d),errors:t(u),onApply:i[0]||(i[0]=_=>t(n)(_))},null,8,["filters","counter","errors"]),t(s).length?(r(),x(M,{key:0,label:"Type IRI",loadedItems:t(s),hasMoreItems:t(f),loadingItems:t(c),onLoadMore:t(l),class:"mt-8"},null,8,["loadedItems","hasMoreItems","loadingItems","onLoadMore"])):(r(),a("div",T," No activity type found! ")),o(w)]),_:1})],64))}};export{et as default};
