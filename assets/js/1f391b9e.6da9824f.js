"use strict";(self.webpackChunkluaxe_docs=self.webpackChunkluaxe_docs||[]).push([[3085],{895:function(e,n,t){t.d(n,{dK:function(){return r},_k:function(){return o},vc:function(){return c},rx:function(){return a},qo:function(){return u},Hk:function(){return l},Iz:function(){return s}});t(1336);var r=["en"],o=!1,c=null,a="d52ab5da",u=8,l=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},7979:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(7294),o=t(6010),c=t(261),a=t(3905),u=t(6845),l=t(571),s=t(1773),i="mdxPageWrapper_3qD3";var f=function(e){var n=e.content,t=n.frontMatter,f=n.metadata,d=t.title,m=t.description,v=t.wrapperClassName,_=t.hide_table_of_contents,h=f.permalink;return r.createElement(c.Z,{title:d,description:m,permalink:h,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,o.Z)("row",i)},r.createElement("div",{className:(0,o.Z)("col",!_&&"col--8")},r.createElement(a.Zo,{components:u.Z},r.createElement(n,null))),!_&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(l.Z,{toc:n.toc})))))}},571:function(e,n,t){t.d(n,{r:function(){return m},Z:function(){return v}});var r=t(7294),o=t(6010),c=t(1773);function a(e){var n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function u(e){var n,t=e.anchorTopOffset,r=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),o=r.find((function(e){return a(e).top>=t}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(o))?o:null!=(n=r[r.indexOf(o)-1])?n:null:r[r.length-1]}function l(){var e=(0,r.useRef)(0),n=(0,c.LU)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var s=function(e){var n=(0,r.useRef)(void 0),t=l();(0,r.useEffect)((function(){var r=e.linkClassName,o=e.linkActiveClassName;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=u({anchorTopOffset:t.current}),a=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){if(t){var r;n.current&&n.current!==e&&(null==(r=n.current)||r.classList.remove(o)),e.classList.add(o),n.current=e}else e.classList.remove(o)}(e,e===a)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])},i="tableOfContents_35-E",f="table-of-contents__link",d={linkClassName:f,linkActiveClassName:"table-of-contents__link--active"};function m(e){var n=e.toc,t=e.isChild;return n.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},n.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:f,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var n=e.toc;return s(d),r.createElement("div",{className:(0,o.Z)(i,"thin-scrollbar")},r.createElement(m,{toc:n}))}}}]);