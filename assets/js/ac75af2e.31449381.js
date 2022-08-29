"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Requirements",l={unversionedId:"installation/requirements",id:"installation/requirements",title:"Requirements",description:"You will be needing the following few things to run Hadmean",source:"@site/docs/installation/requirements.md",sourceDirName:"installation",slug:"/installation/requirements",permalink:"/hadmean/docs/installation/requirements",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/installation/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/hadmean/docs/category/installation"},next:{title:"Setup",permalink:"/hadmean/docs/installation/setup"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"You will be needing the following few things to run Hadmean"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},"A Terminal to run some commands"),(0,a.kt)("li",{parentName:"ul"},"Desktop browser of your choice"),(0,a.kt)("li",{parentName:"ul"},"Well designed Database you want to interface")),(0,a.kt)("p",null,"A well designed database is not a requirement but a nice to have to make your life easier as you will get a lot of functionality and have to do less setup "),(0,a.kt)("p",null,"Having a well designed schema entails"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Having your ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id")," joined correctly to ",(0,a.kt)("inlineCode",{parentName:"li"},"users")," table"),(0,a.kt)("li",{parentName:"ul"},"Having enums when appropraite as opposed to just plain text"),(0,a.kt)("li",{parentName:"ul"},"Having non-nullable columns when needed"),(0,a.kt)("li",{parentName:"ul"},"Having length for text fields"),(0,a.kt)("li",{parentName:"ul"},'Using boolean fields instead of "YES/NO"'),(0,a.kt)("li",{parentName:"ul"},"Having a primary field for every table")),(0,a.kt)("p",null,"If all of these sound ridicoulous to you, then Hadmean was built for you"))}p.isMDXComponent=!0}}]);