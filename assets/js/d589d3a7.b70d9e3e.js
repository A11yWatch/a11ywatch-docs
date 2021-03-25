(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(106)),c={id:"getting-started",title:"Getting Started",slug:"/"},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The easiest way to get started with a11ywatch is to use Docker a11ywatch.",source:"@site/docs/getting-started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/a11ywatch/a11ywatch-docs/edit/master/docs/getting-started.md",version:"current",sidebar:"someSidebar",next:{title:"Services",permalink:"/docs/services"}},p=[{value:"Docker",id:"docker",children:[]},{value:"Local",id:"local",children:[]}],s={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The easiest way to get started with a11ywatch is to use Docker ",Object(a.b)("a",{parentName:"p",href:"https://github.com/A11yWatch/a11ywatch"},"a11ywatch"),"."),Object(a.b)("p",null,"To get started clone the project ",Object(a.b)("a",{parentName:"p",href:"https://github.com/A11yWatch/a11ywatch"},"https://github.com/A11yWatch/a11ywatch")),Object(a.b)("h2",{id:"docker"},"Docker"),Object(a.b)("p",null,"Run the command below to setup your env for development."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"bootstrap-envs.sh")),Object(a.b)("p",null,"then you can start the development server as normal"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up")),Object(a.b)("h2",{id:"local"},"Local"),Object(a.b)("p",null,"First run the bootstrap command ",Object(a.b)("inlineCode",{parentName:"p"},"./bootstrap.sh")," at the root of the project to setup the project dependencies. Then cd into each service and follow the instructions on the readme to start."))}l.isMDXComponent=!0},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);