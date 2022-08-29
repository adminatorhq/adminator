"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[8026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},r="Environment Variables",l={unversionedId:"installation/env",id:"installation/env",title:"Environment Variables",description:"Running the npx hadmean@latest command for the first time on a project will generate a .env file there which will look like this",source:"@site/docs/installation/env.md",sourceDirName:"installation",slug:"/installation/env",permalink:"/hadmean/docs/installation/env",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/installation/env.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/hadmean/docs/installation/setup"},next:{title:"Security",permalink:"/hadmean/docs/category/security"}},s={},c=[{value:"CONFIG_ADAPTOR",id:"config_adaptor",level:2},{value:"CONFIG_ADAPTOR_CONNECTION_STRING",id:"config_adaptor_connection_string",level:2},{value:"CACHE_ADAPTOR",id:"cache_adaptor",level:2},{value:"CONFIG_CACHE_CONNECTION_STRING",id:"config_cache_connection_string",level:2},{value:"ENCRYPTION_KEY &amp;&amp; AUTH_TOKEN_KEY",id:"encryption_key--auth_token_key",level:2},{value:"TOKEN_VALIDITY_DURATION_IN_DAYS",id:"token_validity_duration_in_days",level:2},{value:"FORCE_INTROSPECTION",id:"force_introspection",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Running the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx hadmean@latest")," command for the first time on a project will generate a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file there which will look like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CONFIG_ADAPTOR=json-file\nCONFIG_ADAPTOR_CONNECTION_STRING=PLACE_HOLDER_CONFIG_ADAPTOR_CONNECTION_STRING\n\nCACHE_ADAPTOR=memory\nCONFIG_CACHE_CONNECTION_STRING=PLACE_HOLDER_CONFIG_CACHE_CONNECTION_STRING\n\nENCRYPTION_KEY=<SOME_RANDOM_STRING>\nAUTH_TOKEN_KEY=<SOME_RANDOM_STRING>\n\nTOKEN_VALIDITY_DURATION_IN_DAYS=14\n\nFORCE_INTROSPECTION=TRUE\n")),(0,a.kt)("p",null,"This settings are good for most production use-cases but lets give you some details in the case your use case doesn't fall in the most"),(0,a.kt)("h2",{id:"config_adaptor"},"CONFIG_ADAPTOR"),(0,a.kt)("p",null,"Hadmean needs to store a lot of things like your ",(0,a.kt)("inlineCode",{parentName:"p"},"aes-256-gcm")," encrypted database credentials, application users, app configuration etc"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_ADAPTOR")," tells Hadmean how to store this information, The options for you here are"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json-file")," - Good for production cases but best for development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"database")," - Best for production cases"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"memory")," - Only good for unit testing purposes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redis")," - Good for production cases")),(0,a.kt)("p",null,"For most production use-cases we will encourage changing this to ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"redis"),". But we believe you will make the best decision for your needs"),(0,a.kt)("h2",{id:"config_adaptor_connection_string"},"CONFIG_ADAPTOR_CONNECTION_STRING"),(0,a.kt)("p",null,"If you choose ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")," in the option above then you will need to provide the credentials to it with this. It takes in the connection string of the resource"),(0,a.kt)("p",null,"Note that using ",(0,a.kt)("inlineCode",{parentName:"p"},"json-file")," creates a folder ",(0,a.kt)("inlineCode",{parentName:"p"},".config-data")," in your project folder so it will have to be moved everywhere you want to restore the project"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Editing your configuration data manually especially for ",(0,a.kt)("inlineCode",{parentName:"p"},"json-file")," configuration can result in configuration loss if the JSON is malformed, So edit it at your risk")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Not setting this value when required will cause your application not to start as Hadmean can't set/read it settings")),(0,a.kt)("h2",{id:"cache_adaptor"},"CACHE_ADAPTOR"),(0,a.kt)("p",null,"There are some expensive/too frequent operations we do regular in the backend so to speed things up, we cache these operations so that we dont do it again after the first time"),(0,a.kt)("p",null,"The default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"memory")," is good for all use-cases except when you are running multiple instances of Hadmean, so the data needs to be synced in the other instances"),(0,a.kt)("p",null,"Which leads us to the only other option ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")),(0,a.kt)("h2",{id:"config_cache_connection_string"},"CONFIG_CACHE_CONNECTION_STRING"),(0,a.kt)("p",null,"if you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"redis")," in the option above the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_CACHE_CONNECTION_STRING")," takes in the connection string to your URL"),(0,a.kt)("h2",{id:"encryption_key--auth_token_key"},"ENCRYPTION_KEY && AUTH_TOKEN_KEY"),(0,a.kt)("p",null,"We need a encryption key to encrypt your database credentials so that if even it gets leaked, attackers can't do any harm with this"),(0,a.kt)("p",null,"So also with your authentication key so that we encode your auth tokens securely"),(0,a.kt)("p",null,"As you may have seen, Hadmean generates this for you as you might be good leaving this as it is or edit according to your security requirement"),(0,a.kt)("p",null,"These keys have the requirements of having uppercase letters, lowercase letters, numbers and 64 characters"),(0,a.kt)("h2",{id:"token_validity_duration_in_days"},"TOKEN_VALIDITY_DURATION_IN_DAYS"),(0,a.kt)("p",null,"These sets the number of days you want an auth token to be valid for, We default to 14 days but you can set the number days you want"),(0,a.kt)("h2",{id:"force_introspection"},"FORCE_INTROSPECTION"),(0,a.kt)("p",null,"We introspect you database every time the application runs.\nThis is behaviour is good for most production use-cases as you want your schema to be up to date all the time"),(0,a.kt)("p",null,"But there are some times that this is not desired especially during development but we leave this to you to decide"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"FORCE_INTROSPECTION")," is not respected if you schema is empty so we will always introspect when running for the first time or if you delete your schema for any reason")))}u.isMDXComponent=!0}}]);