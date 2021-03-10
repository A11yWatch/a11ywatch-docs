(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,j=s["".concat(b,".").concat(d)]||s[d]||O[d]||c;return a?n.a.createElement(j,l(l({ref:t},o),{},{components:a})):n.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),c=(a(0),a(104)),b={id:"services",title:"Services",sidebar_label:"Services"},l={unversionedId:"services",id:"services",isDocsHomePage:!1,title:"Services",description:"All of the services in the a11ywatch eco-system",source:"@site/docs/services.md",slug:"/services",permalink:"/a11ywatch-docs/docs/services",editUrl:"https://github.com/a11ywatch/a11ywatch-docs/edit/master/docs/services.md",version:"current",sidebar_label:"Services",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/a11ywatch-docs/docs/"},next:{title:"Deployment",permalink:"/a11ywatch-docs/docs/deployment"}},i=[],o={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"All of the services in the a11ywatch eco-system"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Service"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Container Purpose"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default Port"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/web"}),"web")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"web application that interacts with the main api"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3000")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api"}),"api")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"central core api for the monolith"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8080")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/mav"}),"mav")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"image detector api for generating names with probability"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8020")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/angelica"}),"angelica")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"website issue detector api engine with accessibility fixes"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8040")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/watcher"}),"watcher")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"gather all urls/webpages api for a website"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8000")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/cdn-server"}),"cdn-server")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"create and store js scripts to fix web issues"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8090")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/iframe-server"}),"iframe-server")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"render websites on proxy domain for manipulation"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8010")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/example-site"}),"example-site")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"create and test issues for the accessibility engine (optional)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8050")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/logger"}),"logger")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"stream of all logs across micro-services (optional)"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8022")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.mongodb.com/"}),"mongodb")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"central database for website and user data storage"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"27017")))))}p.isMDXComponent=!0}}]);