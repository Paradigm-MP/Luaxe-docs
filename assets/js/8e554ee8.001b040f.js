"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[8644],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,N=k["".concat(m,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(N,o(o({ref:e},p),{},{components:n})):a.createElement(N,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4798:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},m=void 0,d={unversionedId:"game/ItemDrop",id:"game/ItemDrop",isDocsHomePage:!1,title:"ItemDrop",description:"ItemDrop",source:"@site/docs/game/ItemDrop.md",sourceDirName:"game",slug:"/game/ItemDrop",permalink:"/docs/game/ItemDrop",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/ItemDrop.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630432434,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InventoryGui",permalink:"/docs/game/InventoryGui"},next:{title:"ItemStand",permalink:"/docs/game/ItemStand"}},p=[{value:"<code>ItemDrop</code>",id:"itemdrop",children:[{value:"Fields",id:"fields",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Static Methods",id:"static-methods",children:[]}]}],u={toc:p};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"itemdrop"},(0,l.kt)("inlineCode",{parentName:"h2"},"ItemDrop")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ItemDrop\n    : MonoBehaviour, Hoverable, Interactable\n\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"m_autoDestroy"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"m_autoPickup"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"m_itemData"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"CanPickup()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"GetHoverName()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"GetHoverText()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Interact(",(0,l.kt)("inlineCode",{parentName:"td"},"Humanoid")," character, ",(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")," repeat)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"LoadFromExternalZDO(",(0,l.kt)("inlineCode",{parentName:"td"},"ZDO")," zdo)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"OnPlayerDrop()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Pickup(",(0,l.kt)("inlineCode",{parentName:"td"},"Humanoid")," character)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveOne()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"RequestOwn()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"SetStack(",(0,l.kt)("inlineCode",{parentName:"td"},"Int32")," stack)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"UseItem(",(0,l.kt)("inlineCode",{parentName:"td"},"Humanoid")," user, ",(0,l.kt)("inlineCode",{parentName:"td"},"ItemData")," item)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"static-methods"},"Static Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/ItemDrop"},"ItemDrop")),(0,l.kt)("td",{parentName:"tr",align:null},"DropItem(",(0,l.kt)("inlineCode",{parentName:"td"},"ItemData")," item, ",(0,l.kt)("inlineCode",{parentName:"td"},"Int32")," amount, ",(0,l.kt)("inlineCode",{parentName:"td"},"Vector3")," position, ",(0,l.kt)("inlineCode",{parentName:"td"},"Quaternion")," rotation)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"LoadFromZDO(",(0,l.kt)("inlineCode",{parentName:"td"},"ItemData")," itemData, ",(0,l.kt)("inlineCode",{parentName:"td"},"ZDO")," zdo)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"SaveToZDO(",(0,l.kt)("inlineCode",{parentName:"td"},"ItemData")," itemData, ",(0,l.kt)("inlineCode",{parentName:"td"},"ZDO")," zdo)"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);