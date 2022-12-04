"use strict";(self.webpackChunk_hadmean_archaea=self.webpackChunk_hadmean_archaea||[]).push([[968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="Form",l={unversionedId:"app-configuration/form",id:"app-configuration/form",title:"Form",description:"Forms complexities always grow in parallel with business requirements and we believe giving you coding access to your manage your forms will help you when the requirements get complex as opposed to making things visual which will block you when your requirement gets too complex.",source:"@site/docs/app-configuration/form.md",sourceDirName:"app-configuration",slug:"/app-configuration/form",permalink:"/docs/app-configuration/form",draft:!1,editUrl:"https://github.com/hadmean/archaea/edit/main/docs/app-configuration/form.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Relations",permalink:"/docs/app-configuration/relations"},next:{title:"System Settings",permalink:"/docs/app-configuration/system"}},s={},u=[{value:"API",id:"api",level:2},{value:"Field State",id:"field-state",level:2},{value:"Before Submit",id:"before-submit",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form"},"Form"),(0,r.kt)("p",null,"Forms complexities always grow in parallel with business requirements and we believe giving you coding access to your manage your forms will help you when the requirements get complex as opposed to making things visual which will block you when your requirement gets too complex. "),(0,r.kt)("p",null,"As you will expect you will need some Javascript knowledge to proceed in this section"),(0,r.kt)("p",null,"There are three forms that we use to achieve this"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"First, let talk about the API"),(0,r.kt)("p",null,"The objects available to you are"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n     // The current/submit values in the form\n     formValues: Record<string, string>,\n     // All the route params\n     routeParams: Record<string, string>,\n     // Whether the action is for create or for update\n     action: "update" | "create" , \n     // The user authenticated profile\n     auth: {\n          // The Hadmean profile name\n          name: string;\n          // The Hadmean username name\n          username: string;\n          // The system profile for the user\n          // More info on this at /docs/accounts/system-profile \n          systemProfile?: string;\n          // The Hadmean role name\n          role: string;\n     }\n}\n')),(0,r.kt)("p",null,"They are accessed through the dollar sign ",(0,r.kt)("inlineCode",{parentName:"p"},"$."),"."),(0,r.kt)("p",null,"You will find full examples below which give you a better understanding"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The initial ",(0,r.kt)("inlineCode",{parentName:"p"},"formValues")," for the update form contains the fields that you expose in the details view.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All the code written here will be run on the client, So please be careful to not paste any private configuration keys here")),(0,r.kt)("p",null,"See the content of the three forms as the body of a function, "),(0,r.kt)("p",null,"We have plenty examples below"),(0,r.kt)("h2",{id:"field-state"},"Field State"),(0,r.kt)("p",null,"This allows you to hide or disable your form fields."),(0,r.kt)("p",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \n  Having just this in the `Field State` will disable \n  the `accountBalance` field all the time \n*/\nreturn {\n     accountBalance: {\n          disabled: true\n     }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \n  Having just this in the `Field State` will disable \n  the `canRegister` field when the value of `age` is less than 18  \n*/\nreturn {\n  canRegister: {\n          disabled: $.formValues.age < 18\n     },\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* Will hide the `reasons` field when the value of `rating` is less than 3*/\nreturn {\n     reasons: {\n          hidden: $.formValues.rating < 3\n     }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \n  You can do cool stuffs like hiding the `canUpdateBalance` field \n  if the current user is updating his account  \n*/\nreturn {\n     canUpdateBalance: {\n          hidden: $.auth.username === $.routeParams.username\n     }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* \n   Since this is all javascript object \n   there is no limit to the composition \n*/\nreturn {\n     field1: {\n          hidden: someLogic == true\n     },\n      field2: {\n          disabled: someLogic == false,\n          hidden: someLogic == true,\n     },\n      field3: {\n          hidden: someLogic != true\n     }\n}\n")),(0,r.kt)("h2",{id:"before-submit"},"Before Submit"),(0,r.kt)("p",null,"You can do two things with this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run custom validation\nOur validations are already extensive but can never be extensive enough. ")),(0,r.kt)("p",null,"If a string is returned from the computation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSubmit"),". Then the value is seen as an error will be toasted to the user as an error and the form will not be submitted, So you can get dirty along your business requirement. "),(0,r.kt)("p",null,"Note that this doesn't replace any validation you may have on the form as those validations will run first before triggering the ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeSubmit"),". You are encouraged to use the validations we have and only use this when your requirement get out of hand"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'     /* \n        Will not let the user proceed with the form\n        and will toast message with error to the user\n      */\n     return "You shall not pass"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'     /* \n        As long as it valid JS, You can throw in what ever you want\n     */\n\n     if($.formValues.age > 23 && ($.formValues.country != "Belgium" || $.formValues.height == 124 )){\n        return "This is weird requirement and Hadmean can handle it"\n     }\n\n     const customFunctionToReturnFalse = () => false\n\n     if(customFunctionToReturnFalse()){\n          return "Custom function returned false"\n     }\n     \n     // if the code gets here then the form will be submitted\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify form")),(0,r.kt)("p",null,"If you return an object, then that will be submitted for our endpoint, This makes you do cool stuff like appending ",(0,r.kt)("inlineCode",{parentName:"p"},"createdById"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"updatedById")," to forms. You can add/remove/edit fields, It is plain JS and we will just send what you return "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"   /*\n     Will add `createdById` to the form values that is to be submitted\n   */\n     return {\n          ...$.formValues,\n          createdById: JSON.parse($.auth.systemProfile).userId\n     }\n")),(0,r.kt)("p",null,"And as you might have guessed you can combine it all"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\n/**\n * Will validate the form and will throw the error when it returns a string\n * And will add `createdById` when the form is submitted\n */\n    if($.formValues.age > 23 && ($.formValues.country != "Belgium" || $.formValues.height == 124 )){\n        return "This is weird requirement and Hadmean can handle it"\n     }\n\n     return {\n          ...$.formValues,\n          createdById: JSON.parse($.auth.systemProfile).userId\n     }\n')))}d.isMDXComponent=!0}}]);