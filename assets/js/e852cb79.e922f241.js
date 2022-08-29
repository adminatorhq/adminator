"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[8225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Setup",l={unversionedId:"installation/setup",id:"installation/setup",title:"Setup",description:"You will first need to create a folder to keep all the project artifacts like .env and configuration files and enter the folder",source:"@site/docs/installation/setup.md",sourceDirName:"installation",slug:"/installation/setup",permalink:"/hadmean/docs/installation/setup",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/installation/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/hadmean/docs/installation/requirements"},next:{title:"Environment Variables",permalink:"/hadmean/docs/installation/env"}},s={},p=[],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"You will first need to create a folder to keep all the project artifacts like .env and configuration files and enter the folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir <project_name> && cd <project_name> \n")),(0,r.kt)("p",null,"After which you will run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hadmean@latest \n")),(0,r.kt)("p",null,"This is going to pull all the application files for the first time and when next there is an update so you are always going to be running the latest version of Hadmean all the time"),(0,r.kt)("p",null,"After pulling the application, the command is also going to spin up the application at ",(0,r.kt)("a",{parentName:"p",href:"http:localhost:3000"},"http://locahost:3000")),(0,r.kt)("p",null,"If running this for the first time for a project, You will be asked to provide your database credentials"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setup Credentials",src:n(7232).Z,width:"526",height:"948"})),(0,r.kt)("p",null,"Afterwards, You will be asked to create your root admin account which will have all the permissions to adminstrate the app"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setup Admin Account",src:n(1984).Z,width:"534",height:"596"})),(0,r.kt)("p",null,"And you done with the setup!"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," There is no provision to reset the database credentials or edit it, So creating a new folder and running the setup command is the way to create a new application")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Running the application for the project is still as simple as running ",(0,r.kt)("inlineCode",{parentName:"p"},"npx hadmean@latest")," in the same folder, There is no other command")),(0,r.kt)("p",null,"As you can see the setup was quite easy and as you might as guessed, there are some magic going on behind the scenes primarily with ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),". It will be detailed in the next section so that you can edit it to your requirement"))}u.isMDXComponent=!0},1984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/setup-admin-c337588c365bfba0137921c6d3bc0372.png"},7232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/setup-credentials-b5e984175d5991832616ba7ee286006b.png"}}]);