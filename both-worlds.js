(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{54:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=l(o(3)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0)),i=l(o(2)),n=l(o(97));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,o,s){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&r)for(var n in r)void 0===t[n]&&(t[n]=r[n]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var o,a,s=function(e,t){if(null==e)return{};var o,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}const u=e=>{let{to:t}=e,o=h(e,["to"]);return t.includes("http")?r.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=s.default.join("/auto/","blog/both-worlds.html")+t),r.default.createElement("a",d({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(s.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const r=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(r),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const m={"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40":()=>Promise.resolve({default:{src:{src:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40"},preSrc:"http://www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",height:80,width:80}}),"https://i.giphy.com/media/cjYH0IhoWiQk8/giphy.webp":()=>Promise.resolve({default:{src:{src:"https://i.giphy.com/media/cjYH0IhoWiQk8/giphy.webp"},preSrc:"https://i.giphy.com/media/cjYH0IhoWiQk8/giphy.webp",height:263,width:350}})};class b extends r.default.Component{constructor(...e){super(...e),p(this,"state",{image:null,ImageProvider:m[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"==typeof e?r.default.createElement(n.default,d({},this.props,{className:(0,i.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),a.forEach(function(t){p(e,t,o[t])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):c("img",{className:(0,i.default)("image",this.props.className),src:e})}}const f=e=>{var t,o;return o=t=class extends r.default.Component{constructor(...e){super(...e),p(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?r.default.createElement(e,this.props,this.props.children||null):null}},p(t,"defaultProps",{shouldLoad:!0}),o};f(()=>o.e(23).then(o.bind(null,98))),f(()=>o.e(23).then(o.bind(null,99)));var g=c(b,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),v=c("p",{className:"title blogTitle"},void 0,"Best of Both Worlds"),w=c("span",{},void 0," on May 9, 2019",c("span",{})),y=c("p",{},void 0,"One of the main goals we had when building auto was to ease the introduction to automated releases through using pull request labels."),P=c("p",{className:"mediumImage"},void 0,c(b,{src:"https://i.giphy.com/media/cjYH0IhoWiQk8/giphy.webp",alt:"Why not both"})),N=c("div",{className:"has-text-centered learnMore"},void 0,c(u,{to:"/auto/blog/both-worlds.html"},void 0,"Read More")),j=c(b,{src:"//www.gravatar.com/avatar/ff725a631f869cdb78beeb003825bb40",className:"authorImage"}),k=c("p",{className:"title blogTitle"},void 0,"Best of Both Worlds"),O=c("span",{},void 0," on May 9, 2019",c("span",{})),x=c("p",{},void 0,"One of the main goals we had when building auto was to ease the introduction to automated releases through using pull request labels."),S=c("p",{className:"mediumImage"},void 0,c(b,{src:"https://i.giphy.com/media/cjYH0IhoWiQk8/giphy.webp",alt:"Why not both"})),I=c("p",{},void 0,"To start using conventional commit style commit messages simply add the following to your auto config."),_=c("pre",{},void 0,c("code",{className:"language-json"},void 0,"{",c("br",{}),"  ",c("span",{className:"hljs-attr"},void 0,'"plugins"'),": [",c("span",{className:"hljs-string"},void 0,'"conventional-commits"'),"]",c("br",{}),"}",c("br",{}))),C=c("p",{},void 0,"Now you can enjoy the best of both worlds! 🎉");var H=class extends r.default.Component{componentDidMount(){this.props.atIndex||window.configuration.setBlogHero("https://images.unsplash.com/photo-1554916171-0cfab61e5607?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=600&fit=crop&ixid=eyJhcHBfaWQiOjF9")}render(){return c("div",{className:(0,i.default)("blogPost",this.props.className)},void 0,c("p",{},void 0,this.props.heroUrl),c("section",{},void 0,this.props.stub?c("div",{className:"card"},void 0,c("div",{className:"card-content"},void 0,c("div",{className:"media blogHeader"},void 0,c("div",{className:"media-content has-text-centered"},void 0,g,v,c("p",{className:"subtitle is-6 blogSubtitle"},void 0,c(u,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),w))),c("div",{className:"blogBody"},void 0,y,c("p",{},void 0,"The main alternative to auto works in a slightly different way, ",c(u,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/semantic-release/semantic-release",className:"external-link"},void 0,"semantic-release")," uses the ",c(u,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://www.conventionalcommits.org/en/v1.0.0-beta.4/",className:"external-link"},void 0,"conventional commit spec")," to calculate the next version. This is an awesome way to accomplish automated releases, but it is very strict and can create more work when accepting outside contribution. PR labels solve this problem beautifully, but..."),P,N))):c("div",{className:"card"},void 0,c("div",{className:"card-content"},void 0,c("div",{className:"media blogHeader"},void 0,c("div",{className:"media-content has-text-centered"},void 0,j,k,c("p",{className:"subtitle is-6 blogSubtitle"},void 0,c(u,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://twitter.com/HipsterSmoothie"},void 0,"Andrew Lisowski"),O))),c("div",{className:"blogBody"},void 0,c("div",{},void 0,x,c("p",{},void 0,"The main alternative to auto works in a slightly different way, ",c(u,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/semantic-release/semantic-release",className:"external-link"},void 0,"semantic-release")," uses the ",c(u,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://www.conventionalcommits.org/en/v1.0.0-beta.4/",className:"external-link"},void 0,"conventional commit spec")," to calculate the next version. This is an awesome way to accomplish automated releases, but it is very strict and can create more work when accepting outside contribution. PR labels solve this problem beautifully, but..."),S,c("p",{},void 0,"That's exactly why we made the ",c(u,{currentPage:(this&&this.props||props).currentPage,to:""},void 0,"conventional-commits plugin"),". It allows you to keep your conventional commit work flow but still get the benefits of PR labels based automation."),I,_,C))))))}};t.default=H,e.exports=t.default}}]);
//# sourceMappingURL=both-worlds.js.map