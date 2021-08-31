"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[9531],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,g=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,d(d({ref:e},p),{},{components:a})):n.createElement(g,d({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,d[1]=i;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9410:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return p},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),d=["components"],i={},o=void 0,m={unversionedId:"game/ZDOMan",id:"game/ZDOMan",isDocsHomePage:!1,title:"ZDOMan",description:"ZDOMan",source:"@site/docs/game/ZDOMan.md",sourceDirName:"game",slug:"/game/ZDOMan",permalink:"/docs/game/ZDOMan",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/ZDOMan.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630436585,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ZDOID",permalink:"/docs/game/ZDOID"},next:{title:"ZDOPool",permalink:"/docs/game/ZDOPool"}},p=[{value:"<code>ZDOMan</code>",id:"zdoman",children:[{value:"Fields",id:"fields",children:[]},{value:"Methods",id:"methods",children:[]},{value:"Static Properties",id:"static-properties",children:[]}]}],u={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,d);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"zdoman"},(0,l.kt)("inlineCode",{parentName:"h2"},"ZDOMan")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ZDOMan\n\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action","<","ZDO",">"),(0,l.kt)("td",{parentName:"tr",align:null},"m_onZDODestroyed"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"AddPeer(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZNetPeer"},(0,l.kt)("inlineCode",{parentName:"a"},"ZNetPeer"))," netPeer)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"AddToSector(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDO"))," zdo, Vector2i sector)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"ClientChanged(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOID"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDOID"))," id)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},"ZDO")),(0,l.kt)("td",{parentName:"tr",align:null},"CreateNewZDO(Vector3 position)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},"ZDO")),(0,l.kt)("td",{parentName:"tr",align:null},"CreateNewZDO(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOID"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDOID"))," uid, Vector3 position)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"DestroyZDO(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDO"))," zdo)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"FindSectorObjects(Vector2i sector, Int32 area, Int32 distantArea, List","<","ZDO",">"," sectorObjects, List","<","ZDO",">"," distantSectorObjects = null)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"FindSectorObjects(Vector2i sector, Int32 area, List","<","ZDO",">"," sectorObjects)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"ForceSendZDO(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOID"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDOID"))," id)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"ForceSendZDO(Int64 peerID, ",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOID"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDOID"))," id)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAllZDOsWithPrefab(String prefab, List","<","ZDO",">"," zdos)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAllZDOsWithPrefabIterative(String prefab, List","<","ZDO",">"," zdos, Int32& index)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAverageStats(Single& sentZdos, Single& recvZdos)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"GetClientChangeQueue()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"GetMyID()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"GetRecvZDOs()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"GetSentZDOs()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},"ZDO")),(0,l.kt)("td",{parentName:"tr",align:null},"GetZDO(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOID"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDOID"))," id)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Load(BinaryReader reader, Int32 version)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"NrOfObjects()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"PrepareSave()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveFromSector(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDO"))," zdo, Vector2i sector)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"RemovePeer(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZNetPeer"},(0,l.kt)("inlineCode",{parentName:"a"},"ZNetPeer"))," netPeer)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"RequestZDO(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOID"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDOID"))," id)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"SaveAsync(BinaryWriter writer)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"ShutDown()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Update(Single dt)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"ZDOSectorInvalidated(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDO"},(0,l.kt)("inlineCode",{parentName:"a"},"ZDO"))," zdo)"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"static-properties"},"Static Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZDOMan"},"ZDOMan")),(0,l.kt)("td",{parentName:"tr",align:null},"instance"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);