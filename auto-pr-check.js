(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{52:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=a(r(2)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));a(r(1)),a(r(68));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,n){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&s)for(var l in s)void 0===t[l]&&(t[l]=s[l]);else t||(t=s||{});if(1===a)t.children=n;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const h=e=>{let{to:t}=e,r=c(e,["to"]);return t.includes("http")?s.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","pages/auto-pr-check.html")+t),s.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const s=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(s),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const d=e=>{var t,r;return r=t=class extends s.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),r};d(()=>r.e(26).then(r.bind(null,69))),d(()=>r.e(26).then(r.bind(null,70)));var p=l("h1",{},void 0,l("code",{},void 0,"auto pr-check")),b=l("p",{},void 0,"Check that a pull request has a SemVer label."),f=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto pr-check --pr 24 --url http://your-ci.com",l("br",{}))),v=l("pre",{},void 0,l("code",{className:"language-bash"},void 0,">  auto pr-check -h",l("br",{}),l("br",{}),"Options",l("br",{}),l("br",{}),"  --pr number [required]               The pull request the ",l("span",{className:"hljs-built_in"},void 0,"command")," should use. Detects PR number ",l("span",{className:"hljs-keyword"},void 0,"in")," CI",l("br",{}),"  --url string                         URL to associate with this status",l("br",{}),"  --only-publish-with-release-label    Only bump version ",l("span",{className:"hljs-keyword"},void 0,"if")," ",l("span",{className:"hljs-string"},void 0,"'release'")," label is on pull request",l("br",{}),"  --context string                     A string label to differentiate this status from others",l("br",{}),"  --skip-release-labels string[]       Labels that will not create a release. Defaults to just ",l("span",{className:"hljs-string"},void 0,"'skip-release'"),l("br",{}),"  -d, --dry-run                        Report what ",l("span",{className:"hljs-built_in"},void 0,"command")," will ",l("span",{className:"hljs-keyword"},void 0,"do")," but ",l("span",{className:"hljs-keyword"},void 0,"do")," not actually ",l("span",{className:"hljs-keyword"},void 0,"do")," anything",l("br",{}),l("br",{}),"Global Options",l("br",{}),l("br",{}),"  -h, --",l("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",l("span",{className:"hljs-built_in"},void 0,"help")," output ",l("span",{className:"hljs-keyword"},void 0,"for")," the ",l("span",{className:"hljs-built_in"},void 0,"command"),l("br",{}),"  -v, --verbose         Show some more logs",l("br",{}),"  -w, --very-verbose    Show a lot more logs",l("br",{}),"  --repo string         The repo to ",l("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",l("span",{className:"hljs-keyword"},void 0,"in")," the package definition ",l("span",{className:"hljs-keyword"},void 0,"for")," the platform",l("br",{}),"  --owner string        The owner of the GitHub repo. Defaults to reading from the package definition ",l("span",{className:"hljs-keyword"},void 0,"for")," the platform",l("br",{}),"  --github-api string   GitHub API to use",l("br",{}),"  --plugins string[]    Plugins to load auto with. (defaults to just npm)",l("br",{}),l("br",{}),"Examples",l("br",{}),l("br",{}),"  $ auto pr-check --pr 32 --url http://your-ci.com/build/123",l("br",{})));var m=e=>l("div",{className:e.className},void 0,l("section",{},void 0,p,b,f,l("h2",{id:"options"},void 0,"Options ",l(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),v));t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=auto-pr-check.js.map