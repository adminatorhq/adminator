"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Security Features",l={unversionedId:"security",id:"security",title:"Security Features",description:"SSL",source:"@site/docs/security.md",sourceDirName:".",slug:"/security",permalink:"/hadmean/docs/security",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/hadmean/docs/installation/env"},next:{title:"Entities configuration",permalink:"/hadmean/docs/category/entities-configuration"}},s={},d=[{value:"SSL",id:"ssl",level:2},{value:"Encryption at Rest",id:"encryption-at-rest",level:2},{value:"CSRF",id:"csrf",level:2},{value:"Password",id:"password",level:2},{value:"SQL Injection",id:"sql-injection",level:2},{value:"Data Validation",id:"data-validation",level:2},{value:"Reading Data",id:"reading-data",level:2},{value:"XSS prevention",id:"xss-prevention",level:2},{value:"Reporting",id:"reporting",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-features"},"Security Features"),(0,a.kt)("h2",{id:"ssl"},"SSL"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  PLEASE USE SSL FOR ALL HADMEAN INSTALLATION, IT IS NOT NEGOTIABLE FOR ADMIN PROJECTS LIKE HADMEAN")),(0,a.kt)("h2",{id:"encryption-at-rest"},"Encryption at Rest"),(0,a.kt)("p",null,"All credentials provided in the application are encrypted at rest using ",(0,a.kt)("inlineCode",{parentName:"p"},"aes-256-gcm")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ENCRYPTION_KEY")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")),(0,a.kt)("h2",{id:"csrf"},"CSRF"),(0,a.kt)("p",null,"TODO"),(0,a.kt)("h2",{id:"password"},"Password"),(0,a.kt)("p",null,"All passwords hashed using ",(0,a.kt)("inlineCode",{parentName:"p"},"bcrypt"),"."),(0,a.kt)("h2",{id:"sql-injection"},"SQL Injection"),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"KnexJS")," for our queries and no where do we use raw queries in Hadmean, So all your queries are parameterised"),(0,a.kt)("h2",{id:"data-validation"},"Data Validation"),(0,a.kt)("p",null,"All Data validation are performed in the frontend as well as in the FE, Also only data enabled to update/create will be updated/created"),(0,a.kt)("h2",{id:"reading-data"},"Reading Data"),(0,a.kt)("p",null,"Any disabled data will not leave our APIs, If an entity is disabled, then any request associated with it will result in 404\nWe dont do any ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT *")," so allow the fields you expose will be requested from the database"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Admins account are exempted from this 404 because sometimes they need to make request to them like even to enable them")),(0,a.kt)("h2",{id:"xss-prevention"},"XSS prevention"),(0,a.kt)("p",null,"We use React and we dont ",(0,a.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML")," for anything"),(0,a.kt)("h2",{id:"reporting"},"Reporting"),(0,a.kt)("p",null,"We take security at heart, We welcome all security vulnerabilites disclosures to ",(0,a.kt)("inlineCode",{parentName:"p"},"security@hadmean.com"),". And we prioritise all security fixes over all other kind of work"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"As long as you are running ",(0,a.kt)("inlineCode",{parentName:"p"},"npx hadmean@latest")," to run your applications, You will always be running the lastest version of Hadmean meaning there will be ",(0,a.kt)("em",{parentName:"p"},"NO")," steps on your path to update your project to get any security fix ")))}u.isMDXComponent=!0}}]);