(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(141);t.default=function(){return a.a.createElement(u.a,null,a.a.createElement("p",null,"Home"))}},138:function(e,t,n){var r;e.exports=(r=n(140))&&r.default||r},139:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),u=n(9),o=n.n(u),i=n(137),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var l=n(31);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(138),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},140:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(9),o=n.n(u),i=n(33),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathname(t.pathname);return a.a.createElement(i.a,{location:t,pageResources:n})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},141:function(e,t,n){"use strict";var r,a=n(13),u=n.n(a),o=n(0),i=n.n(o),c=n(139),l=n(49),s=Object(l.inject)("store")(r=Object(l.observer)(r=function(e){function t(t){return e.call(this,t)||this}return u()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"Count: ",this.props.store.Count),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.props.store.Increment()}},"Add"),i.a.createElement("button",{onClick:function(){return e.props.store.Decrement()}},"Subtract")))},t}(o.Component))||r)||r,d=n(142),p=n.n(d),f=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(c.Link,{to:"/"},i.a.createElement("h3",null,"MobX example")),i.a.createElement(p.a,null),i.a.createElement(s,null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/a/"},"a")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/b/"},"b")),i.a.createElement("li",null,i.a.createElement(c.Link,{to:"/c/"},"c"))),this.props.children)},t}(o.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-a03621deb6a3672546ec.js.map