"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[613,477],{4608:function(e,t,n){n.r(t);var r=n(7294),a=n(5227),o=n(4973);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},3507:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(7462),a=n(3366),o=n(7294),l=n(3935),c=n(2263),u=n(5977),i=n(4996),s=n(6742),m=n(9105),h=n(6397),d=n(7052),f=n(6747),p=n(5613),g=n(4973),b="searchBox_1ZXk",v=["contextualSearch"],E=null;function k(e){var t=e.hit,n=e.children;return o.createElement(s.Z,{to:t.url},n)}function C(e){var t=e.state,n=e.onClose,r=(0,h.Z)().generateSearchPageLink;return o.createElement(s.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function Z(e){var t,s,h=e.contextualSearch,Z=(0,a.Z)(e,v),P=(0,c.Z)().siteMetadata,S=(0,p.Z)(),F=null!=(t=null==(s=Z.searchParameters)?void 0:s.facetFilters)?t:[],N=h?[].concat(S,F):F,w=Object.assign({},Z.searchParameters,{facetFilters:N}),x=(0,i.C)().withBaseUrl,y=(0,u.k6)(),R=(0,o.useRef)(null),I=(0,o.useRef)(null),O=(0,o.useState)(!1),T=O[0],A=O[1],B=(0,o.useState)(null),_=B[0],M=B[1],L=(0,o.useCallback)((function(){return E?Promise.resolve():Promise.all([n.e(300).then(n.bind(n,4300)),Promise.all([n.e(532),n.e(945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(846)]).then(n.bind(n,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),U=(0,o.useCallback)((function(){L().then((function(){R.current=document.createElement("div"),document.body.insertBefore(R.current,document.body.firstChild),A(!0)}))}),[L,A]),j=(0,o.useCallback)((function(){A(!1),R.current.remove()}),[A]),D=(0,o.useCallback)((function(e){L().then((function(){A(!0),M(e.key)}))}),[L,A,M]),V=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,Y=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:x(""+t.pathname+t.hash)})}))})).current,q=(0,o.useMemo)((function(){return function(e){return o.createElement(C,(0,r.Z)({},e,{onClose:j}))}}),[j]),H=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",P.docusaurusVersion),e}),[P.docusaurusVersion]);(0,d.D)({isOpen:T,onOpen:U,onClose:j,onInput:D,searchButtonRef:I});var Q=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+Z.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:b},o.createElement(f.a,{onTouchStart:L,onFocus:L,onMouseOver:L,onClick:U,ref:I,translations:{buttonText:Q,buttonAriaLabel:Q}})),T&&(0,l.createPortal)(o.createElement(E,(0,r.Z)({onClose:j,initialScrollY:window.scrollY,initialQuery:_,navigator:V,transformItems:Y,hitComponent:k,resultsFooterComponent:q,transformSearchClient:H},Z,{searchParameters:w})),R.current))}var P=function(){var e=(0,c.Z)().siteConfig;return o.createElement(Z,e.themeConfig.algolia)}}}]);