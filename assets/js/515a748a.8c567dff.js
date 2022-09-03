"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[26],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},r="Environment Variables",l={unversionedId:"installation/env",id:"installation/env",title:"Environment Variables",description:"Running the npx hadmean@latest command for the first time on a project will generate a .env.local file there, which will look like this",source:"@site/docs/installation/env.md",sourceDirName:"installation",slug:"/installation/env",permalink:"/hadmean/docs/installation/env",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/installation/env.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/hadmean/docs/installation/setup"},next:{title:"Security Implementations",permalink:"/hadmean/docs/security"}},s={},p=[{value:"CONFIG_ADAPTOR",id:"config_adaptor",level:2},{value:"CONFIG_ADAPTOR_CONNECTION_STRING",id:"config_adaptor_connection_string",level:2},{value:"CACHE_ADAPTOR",id:"cache_adaptor",level:2},{value:"CACHE_ADAPTOR_CONNECTION_STRING",id:"cache_adaptor_connection_string",level:2},{value:"ENCRYPTION_KEY &amp; AUTH_TOKEN_KEY",id:"encryption_key--auth_token_key",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"Running the ",(0,o.kt)("inlineCode",{parentName:"p"},"npx hadmean@latest")," command for the first time on a project will generate a ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file there, which will look like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env.local"',title:'".env.local"'},"CONFIG_ADAPTOR=json-file\nCONFIG_ADAPTOR_CONNECTION_STRING=PLACE_HOLDER_CONFIG_ADAPTOR_CONNECTION_STRING\n\nCACHE_ADAPTOR=memory\nCACHE_ADAPTOR_CONNECTION_STRING=PLACE_HOLDER_CACHE_ADAPTOR_CONNECTION_STRING\n\nENCRYPTION_KEY=<SOME_RANDOM_STRING>\nAUTH_TOKEN_KEY=<SOME_RANDOM_STRING>\n")),(0,o.kt)("p",null,"These settings are good for most production use-cases but let's give details so you can make better decisions based on your needs."),(0,o.kt)("h2",{id:"config_adaptor"},"CONFIG_ADAPTOR"),(0,o.kt)("p",null,"Hadmean needs to store a lot of things like your ",(0,o.kt)("inlineCode",{parentName:"p"},"aes-256-gcm")," encrypted database credentials, application users, custom roles, app configuration etc."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG_ADAPTOR")," tells Hadmean how to store this information. The options for you here are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"json-file")," - Good for production cases but best for development"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"database")," - Best for production cases"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memory")," - Only good for unit testing purposes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"redis")," - Good for production cases as well")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For most production use-cases we will encourage setting ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG_ADAPTOR")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"redis"),".")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"}," We don't encourage switching adaptors so we don't plan to have an adaptor migration script. Choose this setting carefully.")),(0,o.kt)("h2",{id:"config_adaptor_connection_string"},"CONFIG_ADAPTOR_CONNECTION_STRING"),(0,o.kt)("p",null,"If you choose ",(0,o.kt)("inlineCode",{parentName:"p"},"database")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")," in the option above then you will need to provide the credentials to it with ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG_ADAPTOR_CONNECTION_STRING"),". It takes in the connection string of the resource."),(0,o.kt)("p",null,"All database tables will be created automatically and prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"hadmean__")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"json-file")," creates a folder ",(0,o.kt)("inlineCode",{parentName:"p"},".config-data")," in your project folder so it will have to be moved everywhere you want to restore the project"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Editing your configuration data manually, especially for ",(0,o.kt)("inlineCode",{parentName:"p"},"json-file")," configuration can result in configuration loss if the JSON is malformed, So edit it at your risk")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Not setting this value when required will cause your application not to start as Hadmean can't set/read its settings")),(0,o.kt)("h2",{id:"cache_adaptor"},"CACHE_ADAPTOR"),(0,o.kt)("p",null,"There are some expensive/too frequent operations we do regularly in the backend. So, to speed things up, we cache these operations so that we don't do it again after the first time."),(0,o.kt)("p",null,"The default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," is good for all use-cases except when you are running multiple instances of Hadmean for the same project as data mutated in one instance needs to be available to other instances."),(0,o.kt)("p",null,"This leads us to the only other option ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")),(0,o.kt)("h2",{id:"cache_adaptor_connection_string"},"CACHE_ADAPTOR_CONNECTION_STRING"),(0,o.kt)("p",null,"if you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"redis")," in the option above the ",(0,o.kt)("inlineCode",{parentName:"p"},"CACHE_ADAPTOR_CONNECTION_STRING")," takes in the connection string to your URL"),(0,o.kt)("h2",{id:"encryption_key--auth_token_key"},"ENCRYPTION_KEY & AUTH_TOKEN_KEY"),(0,o.kt)("p",null,"We need an encryption key to encrypt your database credentials so that if even it gets leaked, attackers can't do any harm with it."),(0,o.kt)("p",null,"We also need an authentication key to encode your auth tokens securely."),(0,o.kt)("p",null,"As you may have seen, Hadmean generates both keys for you so should be good not editing it but you can always edit if you want"),(0,o.kt)("p",null,"These keys have the requirements of having uppercase letters, lowercase letters, numbers and 64 characters"))}d.isMDXComponent=!0}}]);