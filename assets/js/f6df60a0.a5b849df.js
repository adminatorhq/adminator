"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Build a CRUD interface for your database in under 59 seconds",authors:["ayobami"],tags:["introduction"]},i=void 0,l={permalink:"/blog/2022/10/06/crud-under-59-seconds",source:"@site/blog/2022-10-06-crud-under-59-seconds/index.md",title:"Build a CRUD interface for your database in under 59 seconds",description:"For the shortest tutorial on building things, the only step for you is to run",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"introduction",permalink:"/blog/tags/introduction"}],readingTime:.9,hasTruncateMarker:!1,authors:[{name:"Ayobami Akingbade",title:"Creator of Hadmean",url:"https://github.com/thrownullexception",imageURL:"https://github.com/thrownullexception.png",key:"ayobami"}],frontMatter:{title:"Build a CRUD interface for your database in under 59 seconds",authors:["ayobami"],tags:["introduction"]},nextItem:{title:"Hadmean - Introducing the easiest, most efficient internal tool generator.",permalink:"/blog/2022/10/05/introduction"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For the shortest tutorial on building things, the only step for you is to run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npx hadmean@latest\n")),(0,r.kt)("p",null,"Then go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," where you will be asked for your DB credentials and voila, You can start CRUDing your database. There is no Javascript, or SQL, or drag-and-drop tutorial needed to get started."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/hadmean/hadmean"},"Hadmean")," is not just a CRUD builder, it is fully an internal tool generator. It might be simple to install but it has tons of features and is entirely customizable."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hadmean-demo.up.railway.app/"},"Here")," is a demo application built in under 59 seconds."),(0,r.kt)("p",null,"Other features include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authentication"),(0,r.kt)("li",{parentName:"ul"},"Users management"),(0,r.kt)("li",{parentName:"ul"},"Roles and permissions"),(0,r.kt)("li",{parentName:"ul"},"CRUD"),(0,r.kt)("li",{parentName:"ul"},"Relationships"),(0,r.kt)("li",{parentName:"ul"},"Forms validation"),(0,r.kt)("li",{parentName:"ul"},"Powerful Filters"),(0,r.kt)("li",{parentName:"ul"},"A powerful multi-page navigation system"),(0,r.kt)("li",{parentName:"ul"},"Automatic Introspection"),(0,r.kt)("li",{parentName:"ul"},"Views"),(0,r.kt)("li",{parentName:"ul"},"Intuitive dashboard builder")),(0,r.kt)("p",null,"You can always refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://hadmean.github.io/hadmean/docs/intro"},"documentation")," to get the best out of Hadmean and join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/aV6DxwXhzN"},"discord server")," to interact with the community."),(0,r.kt)("p",null,"Start building your admin apps with Hadmean today! If you like this project and found this article helpful, please share and leave a star on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hadmean/hadmean"},"Github"),"."))}c.isMDXComponent=!0}}]);