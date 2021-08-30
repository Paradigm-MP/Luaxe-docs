"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[89,477],{6165:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(3366),r=a(7294),l=a(6010),i=a(5227),o=a(6742),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=a(571),p=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,c=(0,n.Z)(e,p),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(v.Z,{toc:a})))))}},4428:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(2263),l=a(6165),i=a(4884),o=a(6742),c=a(4973);var s=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(1773);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,c=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?c:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(s,{metadata:t}))}},4884:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),c=a(4996),s=a(1773),m=a(6845),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx",h=a(7682),v="image_1yU8";var p=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},E="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",E),key:t},n.createElement(p,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,v,p,E=(v=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,c.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,C=e.metadata,P=e.truncated,T=e.isBlogPostPage,y=void 0!==T&&T,L=C.date,w=C.formattedDate,R=C.permalink,x=C.tags,S=C.readingTime,A=C.title,I=C.editUrl,M=C.authors,O=null!=(t=k.image)?t:N.image;return n.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(p=y?"h1":"h2",n.createElement("header",null,n.createElement(p,{className:d,itemProp:"headline"},y?A:n.createElement(o.Z,{itemProp:"url",to:R},A)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:L,itemProp:"datePublished"},w),void 0!==S&&n.createElement(n.Fragment,null," \xb7 ",E(S))),n.createElement(b,{authors:M,assets:k}))),O&&n.createElement("meta",{itemProp:"image",content:_(O,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},Z)),(x.length>0||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[f]=y,a))},x.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!y})},n.createElement(h.Z,{tags:x})),y&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:I})),!y&&P&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:C.permalink,"aria-label":"Read more about "+A},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(7462),i=a(3366),o=a(6010),c="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return f}});var n=a(7294),r=a(6010),l=a(1773);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return i(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},7211:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(6742),i="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){var t,a=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[c]=m,t))},s,m&&n.createElement("span",null,m))}},7682:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010),l=a(4973),i=a(7211),o="tags_2ga9",c="tag_11ep";function s(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c},n.createElement(i.Z,{name:t,permalink:a}))}))))}},3507:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7462),r=a(3366),l=a(7294),i=a(3935),o=a(2263),c=a(5977),s=a(4996),m=a(6742),u=a(9105),d=a(6397),g=a(7052),f=a(6747),h=a(5613),v=a(4973),p="searchBox_1ZXk",E=["contextualSearch"],b=null;function _(e){var t=e.hit,a=e.children;return l.createElement(m.Z,{to:t.url},a)}function Z(e){var t=e.state,a=e.onClose,n=(0,d.Z)().generateSearchPageLink;return l.createElement(m.Z,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function N(e){var t,m,d=e.contextualSearch,N=(0,r.Z)(e,E),k=(0,o.Z)().siteMetadata,C=(0,h.Z)(),P=null!=(t=null==(m=N.searchParameters)?void 0:m.facetFilters)?t:[],T=d?[].concat(C,P):P,y=Object.assign({},N.searchParameters,{facetFilters:T}),L=(0,s.C)().withBaseUrl,w=(0,c.k6)(),R=(0,l.useRef)(null),x=(0,l.useRef)(null),S=(0,l.useState)(!1),A=S[0],I=S[1],M=(0,l.useState)(null),O=M[0],U=M[1],B=(0,l.useCallback)((function(){return b?Promise.resolve():Promise.all([a.e(300).then(a.bind(a,4300)),Promise.all([a.e(532),a.e(945)]).then(a.bind(a,6945)),Promise.all([a.e(532),a.e(846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;b=t}))}),[]),F=(0,l.useCallback)((function(){B().then((function(){R.current=document.createElement("div"),document.body.insertBefore(R.current,document.body.firstChild),I(!0)}))}),[B,I]),D=(0,l.useCallback)((function(){I(!1),R.current.remove()}),[I]),H=(0,l.useCallback)((function(e){B().then((function(){I(!0),U(e.key)}))}),[B,I,U]),q=(0,l.useRef)({navigate:function(e){var t=e.itemUrl;w.push(t)}}).current,z=(0,l.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:L(""+t.pathname+t.hash)})}))})).current,j=(0,l.useMemo)((function(){return function(e){return l.createElement(Z,(0,n.Z)({},e,{onClose:D}))}}),[D]),V=(0,l.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);(0,g.D)({isOpen:A,onOpen:F,onClose:D,onInput:H,searchButtonRef:x});var Y=(0,v.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+N.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:p},l.createElement(f.a,{onTouchStart:B,onFocus:B,onMouseOver:B,onClick:F,ref:x,translations:{buttonText:Y,buttonAriaLabel:Y}})),A&&(0,i.createPortal)(l.createElement(b,(0,n.Z)({onClose:D,initialScrollY:window.scrollY,initialQuery:O,navigator:q,transformItems:z,hitComponent:_,resultsFooterComponent:j,transformSearchClient:V},N,{searchParameters:y})),R.current))}var k=function(){var e=(0,o.Z)().siteConfig;return l.createElement(N,e.themeConfig.algolia)}}}]);