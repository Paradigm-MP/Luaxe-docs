"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[3696],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return N}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},o=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=p(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,m(m({ref:e},o),{},{components:a})):n.createElement(g,m({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,m=new Array(l);m[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,m[1]=i;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1445:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return o},default:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),m=["components"],i={},d=void 0,p={unversionedId:"game/Inventory",id:"game/Inventory",isDocsHomePage:!1,title:"Inventory",description:"Inventory",source:"@site/docs/game/Inventory.md",sourceDirName:"game",slug:"/game/Inventory",permalink:"/docs/game/Inventory",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/game/Inventory.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630436585,formattedLastUpdatedAt:"8/31/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interpolate",permalink:"/docs/game/Interpolate"},next:{title:"InventoryGrid",permalink:"/docs/game/InventoryGrid"}},o=[{value:"<code>Inventory</code>",id:"inventory",children:[{value:"Fields",id:"fields",children:[]},{value:"Methods",id:"methods",children:[]}]}],u={toc:o};function k(t){var e=t.components,a=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"inventory"},(0,l.kt)("inlineCode",{parentName:"h2"},"Inventory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Inventory\n\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Action"),(0,l.kt)("td",{parentName:"tr",align:null},"m_onChanged"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"AddItem(ItemData item)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"AddItem(String name, Int32 stack, Int32 quality, Int32 variant, Int64 crafterID, String crafterName)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"CanAddItem(GameObject prefab, Int32 stack = -1)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"CanAddItem(ItemData item, Int32 stack = -1)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"ContainsItem(ItemData item)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"CountItems(String name)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ItemData",">"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAllItems()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAllItems(String name, List","<","ItemData",">"," items)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAllItems(ItemType type, List","<","ItemData",">"," items)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAllPieceTables(List","<","PieceTable",">"," tables)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"GetAmmoItem(String ammoName)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sprite"),(0,l.kt)("td",{parentName:"tr",align:null},"GetBkg()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetBoundItems(List","<","ItemData",">"," bound)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"GetEmptySlots()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List","<","ItemData",">"),(0,l.kt)("td",{parentName:"tr",align:null},"GetEquipedtems()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"GetHeight()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"GetItem(Int32 index)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"GetItem(String name)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"GetItemAt(Int32 x, Int32 y)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"GetName()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ItemData"),(0,l.kt)("td",{parentName:"tr",align:null},"GetOtherItemAt(Int32 x, Int32 y, ItemData oldItem)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"GetTotalWeight()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetValuableItems(List","<","ItemData",">"," items)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"GetWidth()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"GetWornItems(List","<","ItemData",">"," worn)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"HaveEmptySlot()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"HaveItem(String name)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"IsTeleportable()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Load(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZPackage"},(0,l.kt)("inlineCode",{parentName:"a"},"ZPackage"))," pkg)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"MoveAll(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/Inventory"},(0,l.kt)("inlineCode",{parentName:"a"},"Inventory"))," fromInventory)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"MoveInventoryToGrave(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/Inventory"},(0,l.kt)("inlineCode",{parentName:"a"},"Inventory"))," original)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"MoveItemToThis(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/Inventory"},(0,l.kt)("inlineCode",{parentName:"a"},"Inventory"))," fromInventory, ItemData item)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"MoveItemToThis(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/Inventory"},(0,l.kt)("inlineCode",{parentName:"a"},"Inventory"))," fromInventory, ItemData item, Int32 amount, Int32 x, Int32 y)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"NrOfItems()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Print()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveAll()"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveItem(Int32 index)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveItem(ItemData item)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveItem(ItemData item, Int32 amount)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveItem(String name, Int32 amount)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"RemoveOneItem(ItemData item)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"void"),(0,l.kt)("td",{parentName:"tr",align:null},"Save(",(0,l.kt)("a",{parentName:"td",href:"/docs/game/ZPackage"},(0,l.kt)("inlineCode",{parentName:"a"},"ZPackage"))," pkg)"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Single"),(0,l.kt)("td",{parentName:"tr",align:null},"SlotsUsedPercentage()"),(0,l.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);