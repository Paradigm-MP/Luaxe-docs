"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[8871],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4978:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],d={},o=void 0,m={unversionedId:"game/InstanceRenderer",id:"game/InstanceRenderer",isDocsHomePage:!1,title:"InstanceRenderer",description:"InstanceRenderer",source:"@site/docs/game/InstanceRenderer.md",sourceDirName:"game",slug:"/game/InstanceRenderer",permalink:"/docs/game/InstanceRenderer",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/InstanceRenderer.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630432434,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InputFieldSubmit",permalink:"/docs/game/InputFieldSubmit"},next:{title:"InstantiatePrefab",permalink:"/docs/game/InstantiatePrefab"}},p=[{value:"<code>InstanceRenderer</code>",id:"instancerenderer",children:[{value:"Fields",id:"fields",children:[]},{value:"Methods",id:"methods",children:[]}]}],u={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"instancerenderer"},(0,l.kt)("inlineCode",{parentName:"h2"},"InstanceRenderer")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class InstanceRenderer\n    : MonoBehaviour\n\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"m_frustumCull"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_lodMaxDistance"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_lodMinDistance"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Material"),(0,l.kt)("td",{parentName:"tr",align:null},"m_material"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mesh"),(0,l.kt)("td",{parentName:"tr",align:null},"m_mesh"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,l.kt)("td",{parentName:"tr",align:null},"m_scale"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ShadowCastingMode"),(0,l.kt)("td",{parentName:"tr",align:null},"m_shadowCasting"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"m_useLod"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"m_useXZLodDistance"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"AddInstance(",(0,l.kt)("inlineCode",{parentName:"td"},"Vector3")," pos, ",(0,l.kt)("inlineCode",{parentName:"td"},"Quaternion")," rot, ",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," scale)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"AddInstance(",(0,l.kt)("inlineCode",{parentName:"td"},"Vector3")," pos, ",(0,l.kt)("inlineCode",{parentName:"td"},"Quaternion")," rot)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"AddInstance(",(0,l.kt)("inlineCode",{parentName:"td"},"Matrix4x4")," m)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Clear()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"SetInstance(",(0,l.kt)("inlineCode",{parentName:"td"},"Int32")," index, ",(0,l.kt)("inlineCode",{parentName:"td"},"Vector3")," pos, ",(0,l.kt)("inlineCode",{parentName:"td"},"Quaternion")," rot, ",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," scale)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"SetInstances(",(0,l.kt)("inlineCode",{parentName:"td"},"List&lt;Transform&gt;")," transforms, ",(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")," faceCamera = False)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"SetInstancesBillboard(",(0,l.kt)("inlineCode",{parentName:"td"},"List&lt;Vector4&gt;")," points)"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);