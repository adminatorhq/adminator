"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Fields",l={unversionedId:"app-configuration/fields",id:"app-configuration/fields",title:"Fields",description:"TODO",source:"@site/docs/app-configuration/fields.md",sourceDirName:"app-configuration",slug:"/app-configuration/fields",permalink:"/hadmean/docs/app-configuration/fields",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/app-configuration/fields.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/hadmean/docs/app-configuration/entities"},next:{title:"Relations",permalink:"/hadmean/docs/app-configuration/relations"}},s={},p=[{value:"Labels",id:"labels",level:2},{value:"Types",id:"types",level:2},{value:"Order",id:"order",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fields"},"Fields"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"labels"},"Labels"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("p",null,"// synced DB validations"),(0,a.kt)("h2",{id:"order"},"Order"),(0,a.kt)("p",null,"  LINK_TO_DOC "),(0,a.kt)("p",null,"You get the customize the labels, for the field,\nSay you want ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedAt")," to be called ",(0,a.kt)("inlineCode",{parentName:"p"},"Last Updated"),". Here\nis where you that\n// A message here that\n// It is un-evitable that this will be touched but try to have a\n// good schema to try to not touch here as much as possible"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'              <Text size="5">\n                LINK_TO_DOC You get the superpowers to tell us the specific\n                type of the fields, Say the type is `email` or `url` or\n                `textarea` as oppose to just `text` Here is where you get to\n                do that\n              </Text>\n\n\n                 <Text size="5">\n                LINK_TO_DOC For some reasons, `createdAt` is showing before\n                `userName`. This is where you correct that wrong :wink\n              </Text>\n')))}u.isMDXComponent=!0}}]);