(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{68:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n);o(70);var i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this._updateIframeContent()},e.prototype.componentDidUpdate=function(t,e){this._updateIframeContent()},e.prototype._defineUrl=function(){var t=this.props,e=t.id,o=t.file;return"https://gist.github.com/"+e+".js"+(o?"?file="+o:"")},e.prototype._updateIframeContent=function(){var t=this.props,e=t.id,o=t.file,n=this.iframeNode,r=n.document;n.contentDocument?r=n.contentDocument:n.contentWindow&&(r=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(o?"gist-"+e+"-"+o:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";r.open(),r.writeln(i),r.close()},e.prototype.render=function(){var t=this,e=this.props,o=e.id,n=e.file;return r.a.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:n?"gist-"+o+"-"+n:"gist-"+o})},e}(r.a.PureComponent);e.default=i},69:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),i=o(70),a=o.n(i),p=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();var s=[];var u=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.a.Component),p(e,[{key:"loadTweetForProps",value:function(t){var e=this,o=function(){window.twttr.ready().then(function(o){var n=o.widgets;e._div&&(e._div.innerHTML="");var r=t.options,i=t.onTweetLoadSuccess,a=t.onTweetLoadError;n.createTweetEmbed(e.props.id,e._div,r).then(i).catch(a)})};window.twttr&&window.twttr.ready?o():function(t,e){if(0===s.length){s.push(e);var o=document.createElement("script");o.setAttribute("src",t),o.onload=function(){return s.forEach(function(t){return t()})},document.body.appendChild(o)}else s.push(e)}((window.location.protocol.indexOf("file")>=0?this.props.protocol:"")+"//platform.twitter.com/widgets.js",o)}},{key:"componentDidMount",value:function(){this.loadTweetForProps(this.props)}},{key:"shouldComponentUpdate",value:function(t,e){return this.props.id!==t.id||this.props.className!==t.className}},{key:"componentWillUpdate",value:function(t,e){this.props.id!==t.id&&this.loadTweetForProps(t)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:this.props.className,ref:function(e){t._div=e}})}}]),e}();u.propTypes={id:a.a.string,options:a.a.object,protocol:a.a.string,onTweetLoadSuccess:a.a.func,onTweetLoadError:a.a.func,className:a.a.string},u.defaultProps={protocol:"https:",options:{},className:null},e.default=u}}]);
//# sourceMappingURL=plugin-embed.js.map