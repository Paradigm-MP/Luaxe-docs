"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[5722],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=m(n),g=a,k=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6789:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p=void 0,m={unversionedId:"game/Ragdoll",id:"game/Ragdoll",isDocsHomePage:!1,title:"Ragdoll",description:"Ragdoll",source:"@site/docs/game/Ragdoll.md",sourceDirName:"game",slug:"/game/Ragdoll",permalink:"/docs/game/Ragdoll",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/Ragdoll.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Projectile",permalink:"/docs/game/Projectile"},next:{title:"RandEventSystem",permalink:"/docs/game/RandEventSystem"}},u=[{value:"<code>Ragdoll</code>",id:"ragdoll",children:[]}],d={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ragdoll"},(0,l.kt)("inlineCode",{parentName:"h2"},"Ragdoll")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Ragdoll\n    : MonoBehaviour\n\n")),(0,l.kt)("p",null,"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"m_float"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_floatOffset"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Renderer"),(0,l.kt)("td",{parentName:"tr",align:null},"m_mainModel"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action","<","Vector3",">"),(0,l.kt)("td",{parentName:"tr",align:null},"m_onDestroyed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/EffectList"},"EffectList")),(0,l.kt)("td",{parentName:"tr",align:null},"m_removeEffect"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_ttl"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_velMultiplier"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAverageBodyPosition()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Setup(",(0,l.kt)("inlineCode",{parentName:"td"},"Vector3")," velocity, ",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," hue, ",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," saturation, ",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," value, ",(0,l.kt)("inlineCode",{parentName:"td"},"CharacterDrop")," characterDrop)"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);