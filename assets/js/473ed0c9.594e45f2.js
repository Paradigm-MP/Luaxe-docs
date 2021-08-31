"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[9271],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||u[s]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9672:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c=void 0,p={unversionedId:"game/PointGenerator",id:"game/PointGenerator",isDocsHomePage:!1,title:"PointGenerator",description:"PointGenerator",source:"@site/docs/game/PointGenerator.md",sourceDirName:"game",slug:"/game/PointGenerator",permalink:"/docs/game/PointGenerator",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/PointGenerator.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630432434,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PlayerProfile",permalink:"/docs/game/PlayerProfile"},next:{title:"PrivateArea",permalink:"/docs/game/PrivateArea"}},d=[{value:"<code>PointGenerator</code>",id:"pointgenerator",children:[{value:"Methods",id:"methods",children:[]}]}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"pointgenerator"},(0,o.kt)("inlineCode",{parentName:"h2"},"PointGenerator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class PointGenerator\n\n")),(0,o.kt)("h3",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vector2Int"),(0,o.kt)("td",{parentName:"tr",align:null},"GetGrid(",(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")," point)"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,o.kt)("td",{parentName:"tr",align:null},"GetGridPos(",(0,o.kt)("inlineCode",{parentName:"td"},"Vector2Int")," grid)"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"void"),(0,o.kt)("td",{parentName:"tr",align:null},"Update(",(0,o.kt)("inlineCode",{parentName:"td"},"Vector3")," center, ",(0,o.kt)("inlineCode",{parentName:"td"},"Single")," radius, ",(0,o.kt)("inlineCode",{parentName:"td"},"List&lt;Vector3&gt;")," newPoints, ",(0,o.kt)("inlineCode",{parentName:"td"},"List&lt;Vector3&gt;")," removedPoints)"),(0,o.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0}}]);