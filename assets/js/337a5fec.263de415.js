"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,h=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="CRUD",l={unversionedId:"app-configuration/crud",id:"app-configuration/crud",title:"CRUD",description:"Table",source:"@site/docs/app-configuration/crud.md",sourceDirName:"app-configuration",slug:"/app-configuration/crud",permalink:"/hadmean/docs/app-configuration/crud",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/app-configuration/crud.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"App configuration",permalink:"/hadmean/docs/category/app-configuration"},next:{title:"Diction",permalink:"/hadmean/docs/app-configuration/diction"}},c={},u=[{value:"Table",id:"table",level:2},{value:"Details",id:"details",level:2},{value:"Create/Update",id:"createupdate",level:2},{value:"Delete",id:"delete",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crud"},"CRUD"),(0,r.kt)("h2",{id:"table"},"Table"),(0,r.kt)("p",null," This tab allows you to select the columns you want to show on the table for this entity. Note that this filtering is done in the backend so any filtered column data will not even get to the UI. We only query your database for the fields we are going to present."),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("p",null,"This tab allows you to select the columns to show on the details field. As with tables, the filtering is done in the backend."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Hide Details Button")," toggles the view button and will show an error if you try to view the details page for the entity. Toggling it off will hide the selection since it is of no use."),(0,r.kt)("h2",{id:"createupdate"},"Create/Update"),(0,r.kt)("p",null,"This allows you to select the fields you want in the create/update form. Useful to hide timestamp columns, ID fields etc."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"}," If the update form is enabled but the details view is not enabled, No data will be passed to the UI.")),(0,r.kt)("p",null,"Also, the toggle button will hide/show the create/update button respectively."),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)("p",null," Here you can only manage the hide/show the delete button for the entity."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"All these settings are also checked on the server. "),(0,r.kt)("p",{parentName:"admonition"},"So if you disable delete for an entity and you try to delete it through our API, You will get a 401 error, same for create, update and details. So if you can't do it in the front-end then you also can't do it in the back-end")))}s.isMDXComponent=!0}}]);