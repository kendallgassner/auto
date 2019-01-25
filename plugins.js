(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{61:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=r(a(2)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};i.get||i.set?Object.defineProperty(t,a,i):t[a]=e[a]}return t.default=e,t}(a(0));r(a(1)),r(a(67));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a,n){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});if(1===r)t.children=n;else if(r>1){for(var l=new Array(r),u=0;u<r;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:i,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const c=e=>{let{to:t}=e,a=d(e,["to"]);return t.includes("http")?o.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/plugins.html")+t),o.default.createElement("a",u({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const i=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(i),null,t),e.onClick();const o=new CustomEvent("changeLocation",{detail:i});return dispatchEvent(o),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,a;return a=t=class extends o.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?o.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};p(()=>a.e(25).then(a.bind(null,68))),p(()=>a.e(25).then(a.bind(null,69)));var h=s("h1",{},void 0,"Plugins"),g=s("code",{},void 0,"auto"),f=s("p",{},void 0,"Current official plugins:"),v=s("ul",{},void 0,s("li",{},void 0,"npm - publish code to npm (DEFAULT)"),s("li",{},void 0,"chrome - publish code to Chrome Web Store"),s("li",{},void 0,"conventional-commits - parse conventional commit messages for version bumps"),s("li",{},void 0,"released-label - Add a ",s("code",{},void 0,"released")," label to published PRs, comment with the version it's included in and comment on the issues the PR closes")),m=s("p",{},void 0,"There are three ways to load a plugin."),b=s("p",{},void 0,"To use an official plugin all you have to do is supply the name. Currently the only supported plugin is the ",s("code",{},void 0,"npm")," plugin."),y=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto shipit --plugins npm",s("br",{}))),P=s("code",{},void 0,"npm"),j=s("p",{},void 0,"If you are using a plugin distributed on ",s("code",{},void 0,"npm")," simply supply the name."),w=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto shipit --plugins NPM_PACKAGE_NAME",s("br",{}))),O=s("p",{},void 0,"Or if you have a plugin locally supply the path."),k=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto shipit --plugins ../path/to/plugin.js",s("br",{}))),N=s("p",{},void 0,"If you want to use multiple plugins you can supply multiple."),C=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto shipit --plugins npm NPM_PACKAGE_NAME ../path/to/plugin.js",s("br",{}))),L=s("p",{},void 0,"To provide plugin specific config change the following:"),_=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("span",{className:"hljs-string"},void 0,'"chrome"'),"]",s("br",{}),"}",s("br",{}))),E=s("p",{},void 0,"To this:"),A=s("pre",{},void 0,s("code",{className:"language-json"},void 0,"{",s("br",{}),"  ",s("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",s("br",{}),"    [",s("span",{className:"hljs-string"},void 0,'"chrome"'),", { ",s("span",{className:"hljs-attr"},void 0,'"extensionId"'),": ",s("span",{className:"hljs-string"},void 0,'"1234"'),", ",s("span",{className:"hljs-attr"},void 0,'"build"'),": ",s("span",{className:"hljs-string"},void 0,'"my-compiled-extension.zip"')," }]",s("br",{}),"  ]",s("br",{}),"}",s("br",{})));var M=e=>s("div",{className:e.className},void 0,s("section",{},void 0,h,s("p",{},void 0,g," uses the package ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/webpack/tapable",className:"external-link"},void 0,"tapable")," to expose a plugin system."),f,v,s("h2",{id:"using-plugins"},void 0,"Using Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#using-plugins","aria-hidden":"true"})),s("p",{},void 0,"To use a plugin you can either supply the plugin via a CLI arg or in your ",s(c,{currentPage:e.currentPage,to:"/auto/pages/autorc.html#plugins"},void 0,".autorc"),"."),m,s("h3",{id:"1.-official-plugins"},void 0,"1. Official Plugins ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#1.-official-plugins","aria-hidden":"true"})),b,y,s("h3",{id:"2.-npm-package"},void 0,"2. ",P," package ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#2.-npm-package","aria-hidden":"true"})),j,w,s("h3",{id:"3.-path"},void 0,"3. Path ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#3.-path","aria-hidden":"true"})),O,k,s("h3",{id:"multiple"},void 0,"Multiple ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple","aria-hidden":"true"})),N,C,s("h3",{id:"plugin-configuration"},void 0,"Plugin Configuration ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugin-configuration","aria-hidden":"true"})),L,_,E,A));t.default=M,e.exports=t.default}}]);
//# sourceMappingURL=plugins.js.map