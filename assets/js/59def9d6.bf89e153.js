"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[5505],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(n),c=r,N=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2895:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},d=void 0,o={unversionedId:"game/ZRpc",id:"game/ZRpc",isDocsHomePage:!1,title:"ZRpc",description:"ZRpc",source:"@site/docs/game/ZRpc.md",sourceDirName:"game",slug:"/game/ZRpc",permalink:"/docs/game/ZRpc",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/ZRpc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ZRoutedRpc",permalink:"/docs/game/ZRoutedRpc"},next:{title:"ZSFX",permalink:"/docs/game/ZSFX"}},m=[{value:"<code>ZRpc</code>",id:"zrpc",children:[]}],u={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"zrpc"},(0,l.kt)("inlineCode",{parentName:"h2"},"ZRpc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ZRpc\n    : IDisposable\n\n")),(0,l.kt)("p",null,"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Dispose()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ISocket")),(0,l.kt)("td",{parentName:"tr",align:null},"GetSocket()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Single")),(0,l.kt)("td",{parentName:"tr",align:null},"GetTimeSinceLastPing()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Invoke(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," method, ",(0,l.kt)("inlineCode",{parentName:"td"},"Object[]")," parameters)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"IsConnected()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Register(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," name, ",(0,l.kt)("inlineCode",{parentName:"td"},"Method")," f)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Register(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," name, ",(0,l.kt)("inlineCode",{parentName:"td"},"Action<ZRpc, T>")," f)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Register(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," name, ",(0,l.kt)("inlineCode",{parentName:"td"},"Action<ZRpc, T, U>")," f)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Register(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," name, ",(0,l.kt)("inlineCode",{parentName:"td"},"Action<ZRpc, T, U, V>")," f)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Register(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," name, ",(0,l.kt)("inlineCode",{parentName:"td"},"Method<T, U, V, W>")," f)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Unregister(",(0,l.kt)("inlineCode",{parentName:"td"},"String")," name)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Update(",(0,l.kt)("inlineCode",{parentName:"td"},"Single")," dt)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Static Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Deserialize(",(0,l.kt)("inlineCode",{parentName:"td"},"ZRpc")," rpc, ",(0,l.kt)("inlineCode",{parentName:"td"},"ParameterInfo[]")," paramInfo, ",(0,l.kt)("inlineCode",{parentName:"td"},"ZPackage")," pkg)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Deserialize(",(0,l.kt)("inlineCode",{parentName:"td"},"ParameterInfo[]")," paramInfo, ",(0,l.kt)("inlineCode",{parentName:"td"},"ZPackage")," pkg, ",(0,l.kt)("inlineCode",{parentName:"td"},"List"),"1&` parameters)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},"Serialize(",(0,l.kt)("inlineCode",{parentName:"td"},"Object[]")," parameters, ",(0,l.kt)("inlineCode",{parentName:"td"},"ZPackage&")," pkg)"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);