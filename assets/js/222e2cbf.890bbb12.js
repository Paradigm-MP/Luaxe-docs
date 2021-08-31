"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[1561],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),s=a,g=c["".concat(d,".").concat(s)]||c[s]||u[s]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9033:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},d=void 0,p={unversionedId:"game/HeightmapBuilder",id:"game/HeightmapBuilder",isDocsHomePage:!1,title:"HeightmapBuilder",description:"HeightmapBuilder",source:"@site/docs/game/HeightmapBuilder.md",sourceDirName:"game",slug:"/game/HeightmapBuilder",permalink:"/docs/game/HeightmapBuilder",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/HeightmapBuilder.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630432434,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Heightmap",permalink:"/docs/game/Heightmap"},next:{title:"HitArea",permalink:"/docs/game/HitArea"}},m=[{value:"<code>HeightmapBuilder</code>",id:"heightmapbuilder",children:[{value:"Methods",id:"methods",children:[]},{value:"Static Properties",id:"static-properties",children:[]}]}],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"heightmapbuilder"},(0,i.kt)("inlineCode",{parentName:"h2"},"HeightmapBuilder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class HeightmapBuilder\n\n")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"void"),(0,i.kt)("td",{parentName:"tr",align:null},"Dispose()"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"IsTerrainReady(",(0,i.kt)("inlineCode",{parentName:"td"},"Vector3")," center, ",(0,i.kt)("inlineCode",{parentName:"td"},"Int32")," width, ",(0,i.kt)("inlineCode",{parentName:"td"},"Single")," scale, ",(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")," distantLod, ",(0,i.kt)("inlineCode",{parentName:"td"},"WorldGenerator")," worldGen)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HMBuildData"),(0,i.kt)("td",{parentName:"tr",align:null},"RequestTerrain(",(0,i.kt)("inlineCode",{parentName:"td"},"Vector3")," center, ",(0,i.kt)("inlineCode",{parentName:"td"},"Int32")," width, ",(0,i.kt)("inlineCode",{parentName:"td"},"Single")," scale, ",(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")," distantLod, ",(0,i.kt)("inlineCode",{parentName:"td"},"WorldGenerator")," worldGen)"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HMBuildData"),(0,i.kt)("td",{parentName:"tr",align:null},"RequestTerrainSync(",(0,i.kt)("inlineCode",{parentName:"td"},"Vector3")," center, ",(0,i.kt)("inlineCode",{parentName:"td"},"Int32")," width, ",(0,i.kt)("inlineCode",{parentName:"td"},"Single")," scale, ",(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")," distantLod, ",(0,i.kt)("inlineCode",{parentName:"td"},"WorldGenerator")," worldGen)"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"static-properties"},"Static Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/game/HeightmapBuilder"},"HeightmapBuilder")),(0,i.kt)("td",{parentName:"tr",align:null},"instance"),(0,i.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);