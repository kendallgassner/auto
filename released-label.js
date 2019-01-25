(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{64:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r=o(a(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};s.get||s.set?Object.defineProperty(t,a,s):t[a]=e[a]}return t.default=e,t}(a(0));o(a(1)),o(a(67));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a,r){s||(s="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===o)t.children=r;else if(o>1){for(var l=new Array(o),d=0;d<o;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:s,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c=e=>{let{to:t}=e,a=u(e,["to"]);return t.includes("http")?n.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","pages/released-label.html")+t),n.default.createElement("a",d({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const s=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(s),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:s});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,a;return a=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};h(()=>a.e(25).then(a.bind(null,68))),h(()=>a.e(25).then(a.bind(null,69)));var v=i("h1",{},void 0,"Released Label Plugin"),f=i("p",{},void 0,"This plugin"),b=i("ul",{},void 0,i("li",{},void 0,"comments on the merged PR with the new version"),i("li",{},void 0,"comments on closed issues with the new version"),i("li",{},void 0,"adds a ",i("code",{},void 0,"released")," label to the pull request")),g=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"Make sure that you create the ",i("code",{},void 0,"released")," label on you project"))),p=i("p",{},void 0,"To use the plugin include it in your ",i("code",{},void 0,".autorc")),m=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",i("span",{className:"hljs-string"},void 0,'"released-label"'),"]",i("br",{}),"}",i("br",{}))),y=i("p",{},void 0,"Customize the label this plugin attaches to merged pull requests."),j=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",i("br",{}),"    [",i("br",{}),"      ",i("span",{className:"hljs-string"},void 0,'"released-label"'),",",i("br",{}),"      {",i("br",{}),"        ",i("span",{className:"hljs-attr"},void 0,'"label"'),": ",i("span",{className:"hljs-string"},void 0,'":shipit:"'),i("br",{}),"      }",i("br",{}),"    ]",i("br",{}),"  ]",i("br",{}),"}",i("br",{}))),w=i("p",{},void 0,"To customize the message this plugin uses on issues and pull requests use the following format."),O=i("ul",{},void 0,i("li",{},void 0,i("code",{},void 0,"%TYPE")," - Either ",i("code",{},void 0,"PR")," or ",i("code",{},void 0,"Issu")),i("li",{},void 0,i("code",{},void 0,"%VERSION")," - The version that was just published")),P=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",i("br",{}),"    [",i("br",{}),"      ",i("span",{className:"hljs-string"},void 0,'"released-label"'),",",i("br",{}),"      {",i("br",{}),"        ",i("span",{className:"hljs-attr"},void 0,'"message"'),": ",i("span",{className:"hljs-string"},void 0,'"%TYPE went out with version: %VERSION"'),i("br",{}),"      }",i("br",{}),"    ]",i("br",{}),"  ]",i("br",{}),"}",i("br",{})));var N=e=>i("div",{className:e.className},void 0,i("section",{},void 0,v,f,b,g,i("h2",{id:"usage"},void 0,"Usage ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#usage","aria-hidden":"true"})),p,m,i("h2",{id:"options"},void 0,"Options ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),i("h3",{id:"label"},void 0,"Label ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#label","aria-hidden":"true"})),y,j,i("h3",{id:"message"},void 0,"Message ",i(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#message","aria-hidden":"true"})),w,O,P));t.default=N,e.exports=t.default}}]);
//# sourceMappingURL=released-label.js.map