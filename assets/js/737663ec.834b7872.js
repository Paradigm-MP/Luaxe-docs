"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[5302],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),c=o(a),g=r,k=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2797:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],m={},p=void 0,o={unversionedId:"game/TreeBase",id:"game/TreeBase",isDocsHomePage:!1,title:"TreeBase",description:"TreeBase",source:"@site/docs/game/TreeBase.md",sourceDirName:"game",slug:"/game/TreeBase",permalink:"/docs/game/TreeBase",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/TreeBase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trader",permalink:"/docs/game/Trader"},next:{title:"TreeLog",permalink:"/docs/game/TreeLog"}},u=[{value:"<code>TreeBase</code>",id:"treebase",children:[]}],d={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"treebase"},(0,l.kt)("inlineCode",{parentName:"h2"},"TreeBase")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class TreeBase\n    : MonoBehaviour, IDestructible\n\n")),(0,l.kt)("p",null,"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DamageModifiers"),(0,l.kt)("td",{parentName:"tr",align:null},"m_damageModifiers"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/EffectList"},"EffectList")),(0,l.kt)("td",{parentName:"tr",align:null},"m_destroyedEffect"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/DropTable"},"DropTable")),(0,l.kt)("td",{parentName:"tr",align:null},"m_dropWhenDestroyed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_health"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/EffectList"},"EffectList")),(0,l.kt)("td",{parentName:"tr",align:null},"m_hitEffect"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,l.kt)("td",{parentName:"tr",align:null},"m_logPrefab"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transform"),(0,l.kt)("td",{parentName:"tr",align:null},"m_logSpawnPoint"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"m_minToolTier"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/EffectList"},"EffectList")),(0,l.kt)("td",{parentName:"tr",align:null},"m_respawnEffect"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_spawnYOffset"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"m_spawnYStep"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,l.kt)("td",{parentName:"tr",align:null},"m_stubPrefab"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GameObject"),(0,l.kt)("td",{parentName:"tr",align:null},"m_trunk"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Damage(",(0,l.kt)("inlineCode",{parentName:"td"},"HitData")," hit)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/DestructibleType"},"DestructibleType")),(0,l.kt)("td",{parentName:"tr",align:null},"GetDestructibleType()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Grow()"),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);