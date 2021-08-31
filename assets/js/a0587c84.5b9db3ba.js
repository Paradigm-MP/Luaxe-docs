"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[8263],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,k=d["".concat(m,".").concat(s)]||d[s]||c[s]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},m=void 0,p={unversionedId:"game/SE_Smoke",id:"game/SE_Smoke",isDocsHomePage:!1,title:"SE_Smoke",description:"SE_Smoke",source:"@site/docs/game/SE_Smoke.md",sourceDirName:"game",slug:"/game/SE_Smoke",permalink:"/docs/game/SE_Smoke",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/SE_Smoke.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SE_Shield",permalink:"/docs/game/SE_Shield"},next:{title:"SE_Spawn",permalink:"/docs/game/SE_Spawn"}},u=[{value:"<code>SE_Smoke</code>",id:"se_smoke",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"se_smoke"},(0,l.kt)("inlineCode",{parentName:"h2"},"SE_Smoke")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class SE_Smoke\n    : StatusEffect\n\n")),(0,l.kt)("p",null,"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DamageTypes")),(0,l.kt)("td",{parentName:"tr",align:null},"m_damage"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Single")),(0,l.kt)("td",{parentName:"tr",align:null},"m_damageInterval"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"CanAdd(",(0,l.kt)("inlineCode",{parentName:"td"},"Character")," character)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"UpdateStatusEffect(",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," dt)"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);