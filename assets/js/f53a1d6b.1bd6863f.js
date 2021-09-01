"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[6768],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},243:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={},l=void 0,s={unversionedId:"server/events/ConsoleCommand",id:"server/events/ConsoleCommand",isDocsHomePage:!1,title:"ConsoleCommand",description:"ConsoleCommand",source:"@site/docs/server/events/ConsoleCommand.md",sourceDirName:"server/events",slug:"/server/events/ConsoleCommand",permalink:"/docs/server/events/ConsoleCommand",editUrl:"https://github.com/Paradigm-MP/Luaxe-docs/edit/main/docs/server/events/ConsoleCommand.md",tags:[],version:"current",lastUpdatedBy:"benank",lastUpdatedAt:1630470792,formattedLastUpdatedAt:"9/1/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client API",permalink:"/docs/client/clientapi"},next:{title:"Console Commands",permalink:"/docs/server/console"}},u=[{value:"<code>ConsoleCommand</code>",id:"consolecommand",children:[{value:"Arguments (in table)",id:"arguments-in-table",children:[]},{value:"Description",id:"description",children:[]}]}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"consolecommand"},(0,a.kt)("inlineCode",{parentName:"h2"},"ConsoleCommand")),(0,a.kt)("h3",{id:"arguments-in-table"},"Arguments (in table)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"command")," (string): the text that was typed in the server console")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Called when a string of text is typed in the server console and then enter is pressed. Return false to cancel default behavior, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," reloading the scripts. Returning false will cause ",(0,a.kt)("inlineCode",{parentName:"p"},"reload")," to do nothing, so you can create custom behavior."))}p.isMDXComponent=!0}}]);