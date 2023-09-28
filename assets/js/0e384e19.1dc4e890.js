"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,y=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:0},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Hadmean is an open-source internal tool generator that builds your admin interface based on your database schema and your configurations. It is fully featured and is extremely customizable.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/category/installation"}},s={},u=[{value:"What",id:"what",level:2},{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"Not",id:"not",level:2},{value:"API generator",id:"api-generator",level:3},{value:"Database client",id:"database-client",level:3},{value:"Web Builder",id:"web-builder",level:3},{value:"API backend",id:"api-backend",level:3},{value:"CMS",id:"cms",level:3}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Hadmean is an open-source internal tool generator that builds your admin interface based on your database schema and your configurations. It is fully featured and is extremely customizable."),(0,r.kt)("h2",{id:"what"},"What"),(0,r.kt)("p",null,"Building admin apps is mostly a chore for developers and we tend to find the easiest way to build them, sometimes delegating it to the juniors of the teams."),(0,r.kt)("p",null,"With Hadmean, you set up your admin interface as fast as you can type ",(0,r.kt)("inlineCode",{parentName:"p"},"npx hadmean")," and your DB credentials."),(0,r.kt)("p",null,"It is extremely customizable as it gives you a programmatic interface when your requirements are very unique. "),(0,r.kt)("h2",{id:"why"},"Why"),(0,r.kt)("p",null,"There are many admin apps out there, usually free or paid."),(0,r.kt)("p",null,"The free apps are usually tied to a framework and all your experience with it dies when you hop to your next shiny language. They are usually not aesthetically pleasing and always require a developer to make any changes."),(0,r.kt)("p",null,"The paid apps are usually good but very restricted as you will be forced to their paywall to get it to be usable for your day-to-day."),(0,r.kt)("p",null,"We built Hadmean to provide an admin app that will be free, very usable and language agnostic."),(0,r.kt)("h2",{id:"how"},"How"),(0,r.kt)("p",null,"We believe your database information should always be the golden truth of your application. As such we read your database relations, tables and fields constraints, enums etc and implement all that information in the UI without any input from you."),(0,r.kt)("p",null,"Most admin generators pride themselves on their powerful drag-and-drop system which is great as it allows for great customization but it always requires developers to make changes since you need technical knowledge to make even the smallest of changes."),(0,r.kt)("p",null,"Hadmean might get to a drag-and-drop system in the future but for now, we want to ride this database idealogy for as long as we can."),(0,r.kt)("h2",{id:"not"},"Not"),(0,r.kt)("h3",{id:"api-generator"},"API generator"),(0,r.kt)("p",null,"The APIs produced by Hadmean are for its internal use, They are not designed to be used by other clients. There are plenty of good tools out there already building APIs and we don't have anything we feel can be improved. "),(0,r.kt)("p",null,"There will be no support for any unintentional API usage. They will not be documented and they can/will change without notice."),(0,r.kt)("h3",{id:"database-client"},"Database client"),(0,r.kt)("p",null,"Hadmean will not and will never have an interface to change the structure of your database."),(0,r.kt)("h3",{id:"web-builder"},"Web Builder"),(0,r.kt)("p",null,"Hadmean is built for internal use, It is not built for end-users but rather internal users. This means no fancy editor to add a class to every element, no template for headers, footers, no page creator etc."),(0,r.kt)("h3",{id:"api-backend"},"API backend"),(0,r.kt)("p",null,"Hadmean will not expose a method to extend the backend. i.e you will not be able to create a new API route with it, meaning if you need to have hooks for other business needs, then you will have to create a seperate API backend for that. Hadmean will not be providing functionality for schedulers"),(0,r.kt)("h3",{id:"cms"},"CMS"),(0,r.kt)("p",null,"Hadmean doesn't have a default data or data structure, It doesn't have any workflows. Hadmean only works with the data you already have."))}c.isMDXComponent=!0}}]);