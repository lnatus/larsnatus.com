(self.webpackChunklarsnatus_com=self.webpackChunklarsnatus_com||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5610:function(e,t,n){"use strict";var r=n(7294),i=n(9),o=n(1974),a=i.default.footer.withConfig({displayName:"footer__FooterStyled",componentId:"sc-1cgjrnd-0"})(["text-align:center;margin-bottom:3em;"]);t.Z=function(e){return r.createElement(a,null,r.createElement("small",null,"© 2022 · made with ♥️ by larnatus.com",r.createElement("br",null),r.createElement(o.Z,{href:"/impressum"},"impressum")))}},7710:function(e,t,n){"use strict";var r=(0,n(9).createGlobalStyle)(['body{margin:0;padding:0;background:#000;color:#FFF;}*{font-family:"Open Sans";font-size:20px;}*::-moz-selection{color:#000;background:#11A8DB;}*::selection{color:#000;background:#11A8DB;}a{color:#FFF;}h1{font-family:"Amiri";font-size:54px;display:inline-block;background-image:linear-gradient(-45deg,#11DBB4 0%,#11A8DB 35%,#612CB8 100%);padding:0 24px;}h4{font-family:"Amiri";display:inline-block;font-size:38px;}h5{margin:0 0 20px 0;font-size:24px;}small,small a{font-size:12px;}img{-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none;}']);t.Z=r},8645:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,i,o,a,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),d=n.n(p),g=n(6494),y=n.n(g),m="bodyAttributes",h="htmlAttributes",b="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(A).map((function(e){return A[e]})),"charset"),I="cssText",C="href",v="http-equiv",w="innerHTML",O="itemprop",M="name",S="property",j="rel",E="src",N="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",P="defer",D="encodeSpecialCharacters",L="onChangeClientState",z="titleTemplate",Z=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),R=[A.NOSCRIPT,A.SCRIPT,A.STYLE],B="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},U=function(e){var t=q(e,A.TITLE),n=q(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=q(e,x);return t||r||void 0},J=function(e){return q(e,L)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[A.BASE]})).map((function(e){return e[A.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===j&&"canonical"===e[n].toLowerCase()||u===j&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==w&&c!==I&&c!==O||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=y()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(A.BODY,r),ue(A.HTML,i),ce(f,p);var d={baseTag:le(A.BASE,n),linkTags:le(A.LINK,o),metaTags:le(A.META,a),noscriptTags:le(A.NOSCRIPT,c),scriptTags:le(A.SCRIPT,l),styleTags:le(A.STYLE,s)},g={},y={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(g[e]=n),r.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,g,y)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(A.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===I)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case A.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=fe(n,r),[c.createElement(A.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+Q(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Q(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case m:case h:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===w||n===I){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===w||e===I)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(A.BASE,t,r),bodyAttributes:pe(m,n,r),htmlAttributes:pe(h,i,r),link:pe(A.LINK,o,r),meta:pe(A.META,a,r),noscript:pe(A.NOSCRIPT,c,r),script:pe(A.SCRIPT,u,r),style:pe(A.STYLE,l,r),title:pe(A.TITLE,{title:f,titleAttributes:p},r)}},ge=f()((function(e){return{baseTag:X([C,N],e),bodyAttributes:K(m,e),defer:q(e,P),encode:q(e,D),htmlAttributes:K(h,e),linkTags:V(A.LINK,[j,C],e),metaTags:V(A.META,[M,T,v,S,O],e),noscriptTags:V(A.NOSCRIPT,[w],e),onChangeClientState:J(e),scriptTags:V(A.SCRIPT,[E,w],e),styleTags:V(A.STYLE,[I],e),title:U(e),titleAttributes:K(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),ye=(i=ge,a=o=function(e){function t(){return G(this,t),_(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:t};case A.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TITLE:return W({},i,((t={})[r.type]=a,t.titleAttributes=W({},o),t));case A.BODY:return W({},i,{bodyAttributes:W({},o)});case A.HTML:return W({},i,{htmlAttributes:W({},o)})}return W({},i,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(F(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var me=n(9),he=me.default.header.withConfig({displayName:"header__HeaderStyled",componentId:"sc-7napt3-0"})(["text-align:center;padding:3em 0;"]);var be=function(e){return c.createElement(he,null,c.createElement(ye,null,c.createElement("title",null,e.title)),c.createElement("a",{href:"/"},c.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQgQ29weSA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjQ5Ljc1MzAyODIlIiB4Mj0iMTAwJSIgeTI9IjUwLjI0Njk3MTglIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2MTJDQjgiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzExQThEQiIgb2Zmc2V0PSI2NS4yMTAwMzcyJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMTFEQkI0IiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLUNvcHktNCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTEuMDAwMDAwLCAyMTYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjE3Ny45MDY5NzcgMjY1LjExNjI3OSAxNzcuOTA2OTc3IDAgMjEyLjYwMjU2MiAxLjIzOTMxODczZS0xNCA0NjMuMDgxMzk1IDI1MC40Nzg4MzMgNDYzLjA4MTM5NSAzLjA1MjMyNTU4IDQ5Ny45NjUxMTYgMy4wNTIzMjU1OCA0OTcuOTY1MTE2IDI5OS41NjM5NTMgNDYzLjA4MTM5NSAyOTkuNTYzOTUzIDIxMi42MzM1NSA0OS4zNDE3NjY1IDIxMi43OTA2OTggMjk5LjU2Mzk1MyAxNzcuOTA2OTc3IDI5OS41NjM5NTMgMzQuODgzNzIwOSAzMDAgLTUuNjg0MzQxODllLTE0IDMwMCAtNS42ODQzNDE4OWUtMTQgMC40MzYwNDY1MTIgMzQuODgzNzIwOSAwLjQzNjA0NjUxMiAzNC44ODM3MjA5IDI2NS4xMTYyNzkiPjwvcG9seWdvbj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgeD0iMCIgeT0iMzM0IiB3aWR0aD0iNDk4IiBoZWlnaHQ9IjM1Ij48L3JlY3Q+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=",width:80,alt:"Lars Natus Logo"})))}},1974:function(e,t,n){"use strict";var r=n(7294),i=n(9).default.a.withConfig({displayName:"link__LinkStyled",componentId:"sc-be9o1y-0"})(["text-decoration:none;position:relative;display:inline-block;padding:0 3px 5px;overflow:hidden;background-image:linear-gradient(-45deg,#11DBB4 0%,#11A8DB 35%,#612CB8 100%);background-size:100% 4px;background-repeat:no-repeat;background-position-y:bottom;"]);t.Z=function(e){return r.createElement(i,{href:e.href,target:e.target,rel:"noreferrer"},e.children)}},2995:function(e,t,n){"use strict";var r=n(7294),i=n(9).default.div.withConfig({displayName:"main__MainStyled",componentId:"sc-f777pa-0"})(["text-align:center;padding:0 2em;p{margin:0 0 10px 0;}margin:0 auto;@media only screen and (min-width:1024px){max-width:50%;}"]);t.Z=function(e){return r.createElement(i,null,e.children)}}}]);
//# sourceMappingURL=commons-7133e2297c2bec5cf902.js.map