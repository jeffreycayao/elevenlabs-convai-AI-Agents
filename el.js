(function(E){typeof define=="function"&&define.amd?define(E):E()})(function(){"use strict";var Un=Object.defineProperty;var zn=(E,f,V)=>f in E?Un(E,f,{enumerable:!0,configurable:!0,writable:!0,value:V}):E[f]=V;var O=(E,f,V)=>zn(E,typeof f!="symbol"?f+"":f,V);var E,f,V,H,Te,Pe,_e,ue,pe,de,Y={},Ne=[],$t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ee=Array.isArray;function B(e,t){for(var n in t)e[n]=t[n];return e}function De(e){var t=e.parentNode;t&&t.removeChild(e)}function M(e,t,n){var o,a,r,i={};for(r in t)r=="key"?o=t[r]:r=="ref"?a=t[r]:i[r]=t[r];if(arguments.length>2&&(i.children=arguments.length>3?E.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)i[r]===void 0&&(i[r]=e.defaultProps[r]);return X(e,i,o,a,null)}function X(e,t,n,o,a){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:a??++V,__i:-1,__u:0};return a==null&&f.vnode!=null&&f.vnode(r),r}function U(e){return e.children}function R(e,t){this.props=e,this.context=t}function W(e,t){if(t==null)return e.__?W(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?W(e):null}function Be(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Be(e)}}function Re(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!te.__r++||Te!==f.debounceRendering)&&((Te=f.debounceRendering)||Pe)(te)}function te(){var e,t,n,o,a,r,i,s;for(H.sort(_e);e=H.shift();)e.__d&&(t=H.length,o=void 0,r=(a=(n=e).__v).__e,i=[],s=[],n.__P&&((o=B({},a)).__v=a.__v+1,f.vnode&&f.vnode(o),he(n.__P,o,a,n.__n,n.__P.ownerSVGElement!==void 0,32&a.__u?[r]:null,i,r??W(a),!!(32&a.__u),s),o.__v=a.__v,o.__.__k[o.__i]=o,ze(i,o,s),o.__e!=r&&Be(o)),H.length>t&&H.sort(_e));te.__r=0}function Le(e,t,n,o,a,r,i,s,l,_,u){var c,v,p,b,x,d=o&&o.__k||Ne,g=t.length;for(n.__d=l,Tt(n,t,d),l=n.__d,c=0;c<g;c++)(p=n.__k[c])!=null&&typeof p!="boolean"&&typeof p!="function"&&(v=p.__i===-1?Y:d[p.__i]||Y,p.__i=c,he(e,p,v,a,r,i,s,l,_,u),b=p.__e,p.ref&&v.ref!=p.ref&&(v.ref&&fe(v.ref,null,p),u.push(p.ref,p.__c||b,p)),x==null&&b!=null&&(x=b),65536&p.__u||v.__k===p.__k?(l&&!l.isConnected&&(l=W(v)),l=Oe(p,l,e)):typeof p.type=="function"&&p.__d!==void 0?l=p.__d:b&&(l=b.nextSibling),p.__d=void 0,p.__u&=-196609);n.__d=l,n.__e=x}function Tt(e,t,n){var o,a,r,i,s,l=t.length,_=n.length,u=_,c=0;for(e.__k=[],o=0;o<l;o++)i=o+c,(a=e.__k[o]=(a=t[o])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?X(null,a,null,null,null):ee(a)?X(U,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?X(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null?(a.__=e,a.__b=e.__b+1,s=Pt(a,n,i,u),a.__i=s,r=null,s!==-1&&(u--,(r=n[s])&&(r.__u|=131072)),r==null||r.__v===null?(s==-1&&c--,typeof a.type!="function"&&(a.__u|=65536)):s!==i&&(s===i+1?c++:s>i?u>l-i?c+=s-i:c--:s<i?s==i-1&&(c=s-i):c=0,s!==o+c&&(a.__u|=65536))):(r=n[i])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=W(r)),me(r,r,!1),n[i]=null,u--);if(u)for(o=0;o<_;o++)(r=n[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=W(r)),me(r,r))}function Oe(e,t,n){var o,a;if(typeof e.type=="function"){for(o=e.__k,a=0;o&&a<o.length;a++)o[a]&&(o[a].__=e,t=Oe(o[a],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function ne(e,t){return t=t||[],e==null||typeof e=="boolean"||(ee(e)?e.some(function(n){ne(n,t)}):t.push(e)),t}function Pt(e,t,n,o){var a=e.key,r=e.type,i=n-1,s=n+1,l=t[n];if(l===null||l&&a==l.key&&r===l.type&&!(131072&l.__u))return n;if(o>(l!=null&&!(131072&l.__u)?1:0))for(;i>=0||s<t.length;){if(i>=0){if((l=t[i])&&!(131072&l.__u)&&a==l.key&&r===l.type)return i;i--}if(s<t.length){if((l=t[s])&&!(131072&l.__u)&&a==l.key&&r===l.type)return s;s++}}return-1}function Me(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||$t.test(t)?n:n+"px"}function oe(e,t,n,o,a){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||Me(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||Me(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n.u=o.u:(n.u=ue,e.addEventListener(t,r?de:pe,r)):e.removeEventListener(t,r?de:pe,r);else{if(a)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ue(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ue++;else if(t.t<n.u)return;return n(f.event?f.event(t):t)}}}function he(e,t,n,o,a,r,i,s,l,_){var u,c,v,p,b,x,d,g,y,S,N,T,L,k,Q,A=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),r=[s=t.__e=n.__e]),(u=f.__b)&&u(t);e:if(typeof A=="function")try{if(g=t.props,y=(u=A.contextType)&&o[u.__c],S=u?y?y.props.value:u.__:o,n.__c?d=(c=t.__c=n.__c).__=c.__E:("prototype"in A&&A.prototype.render?t.__c=c=new A(g,S):(t.__c=c=new R(g,S),c.constructor=A,c.render=Dt),y&&y.sub(c),c.props=g,c.state||(c.state={}),c.context=S,c.__n=o,v=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),A.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=B({},c.__s)),B(c.__s,A.getDerivedStateFromProps(g,c.__s))),p=c.props,b=c.state,c.__v=t,v)A.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(A.getDerivedStateFromProps==null&&g!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,S),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,S)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function($){$&&($.__=t)}),N=0;N<c._sb.length;N++)c.__h.push(c._sb[N]);c._sb=[],c.__h.length&&i.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,S),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,b,x)})}if(c.context=S,c.props=g,c.__P=e,c.__e=!1,T=f.__r,L=0,"prototype"in A&&A.prototype.render){for(c.state=c.__s,c.__d=!1,T&&T(t),u=c.render(c.props,c.state,c.context),k=0;k<c._sb.length;k++)c.__h.push(c._sb[k]);c._sb=[]}else do c.__d=!1,T&&T(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++L<25);c.state=c.__s,c.getChildContext!=null&&(o=B(B({},o),c.getChildContext())),v||c.getSnapshotBeforeUpdate==null||(x=c.getSnapshotBeforeUpdate(p,b)),Le(e,ee(Q=u!=null&&u.type===U&&u.key==null?u.props.children:u)?Q:[Q],t,n,o,a,r,i,s,l,_),c.base=t.__e,t.__u&=-161,c.__h.length&&i.push(c),d&&(c.__E=c.__=null)}catch($){t.__v=null,l||r!=null?(t.__e=s,t.__u|=l?160:32,r[r.indexOf(s)]=null):(t.__e=n.__e,t.__k=n.__k),f.__e($,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Nt(n.__e,t,n,o,a,r,i,l,_);(u=f.diffed)&&u(t)}function ze(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)fe(n[o],n[++o],n[++o]);f.__c&&f.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(r){r.call(a)})}catch(r){f.__e(r,a.__v)}})}function Nt(e,t,n,o,a,r,i,s,l){var _,u,c,v,p,b,x,d=n.props,g=t.props,y=t.type;if(y==="svg"&&(a=!0),r!=null){for(_=0;_<r.length;_++)if((p=r[_])&&"setAttribute"in p==!!y&&(y?p.localName===y:p.nodeType===3)){e=p,r[_]=null;break}}if(e==null){if(y===null)return document.createTextNode(g);e=a?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,g.is&&g),r=null,s=!1}if(y===null)d===g||s&&e.data===g||(e.data=g);else{if(r=r&&E.call(e.childNodes),d=n.props||Y,!s&&r!=null)for(d={},_=0;_<e.attributes.length;_++)d[(p=e.attributes[_]).name]=p.value;for(_ in d)p=d[_],_=="children"||(_=="dangerouslySetInnerHTML"?c=p:_==="key"||_ in g||oe(e,_,null,p,a));for(_ in g)p=g[_],_=="children"?v=p:_=="dangerouslySetInnerHTML"?u=p:_=="value"?b=p:_=="checked"?x=p:_==="key"||s&&typeof p!="function"||d[_]===p||oe(e,_,p,d[_],a);if(u)s||c&&(u.__html===c.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(c&&(e.innerHTML=""),Le(e,ee(v)?v:[v],t,n,o,a&&y!=="foreignObject",r,i,r?r[0]:n.__k&&W(n,0),s,l),r!=null)for(_=r.length;_--;)r[_]!=null&&De(r[_]);s||(_="value",b!==void 0&&(b!==e[_]||y==="progress"&&!b||y==="option"&&b!==d[_])&&oe(e,_,b,d[_],!1),_="checked",x!==void 0&&x!==e[_]&&oe(e,_,x,d[_],!1))}return e}function fe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){f.__e(o,n)}}function me(e,t,n){var o,a;if(f.unmount&&f.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||fe(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){f.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&me(o[a],t,n||typeof e.type!="function");n||e.__e==null||De(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Dt(e,t,n){return this.constructor(e,n)}function re(e,t,n){var o,a,r,i;f.__&&f.__(e,t),a=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],i=[],he(t,e=(!o&&n||t).__k=M(U,null,[e]),a||Y,Y,t.ownerSVGElement!==void 0,!o&&n?[n]:a?null:t.firstChild?E.call(t.childNodes):null,r,!o&&n?n:a?a.__e:t.firstChild,o,i),ze(r,e,i)}function Ve(e,t){re(e,t,Ve)}function He(e,t,n){var o,a,r,i,s=B({},e.props);for(r in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)r=="key"?o=t[r]:r=="ref"?a=t[r]:s[r]=t[r]===void 0&&i!==void 0?i[r]:t[r];return arguments.length>2&&(s.children=arguments.length>3?E.call(arguments,2):n),X(e.type,s,o||e.key,a||e.ref,null)}E=Ne.slice,f={__e:function(e,t,n,o){for(var a,r,i;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),i=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,o||{}),i=a.__d),i)return a.__E=a}catch(s){e=s}throw e}},V=0,R.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=B({},this.state),typeof e=="function"&&(e=e(B({},n),this.props)),e&&B(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Re(this))},R.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Re(this))},R.prototype.render=U,H=[],Pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_e=function(e,t){return e.__v.__b-t.__v.__b},te.__r=0,ue=0,pe=Ue(!1),de=Ue(!0);function ve(){return(ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var Bt=["context","children"];function Rt(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(o,a){if(o==null)return{};var r,i,s={},l=Object.keys(o);for(i=0;i<l.length;i++)a.indexOf(r=l[i])>=0||(s[r]=o[r]);return s}(e,Bt);return He(t,n)}function Lt(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=M(Rt,ve({},this._props,{context:e.detail.context}),function t(n,o){if(n.nodeType===3)return n.data;if(n.nodeType!==1)return null;var a=[],r={},i=0,s=n.attributes,l=n.childNodes;for(i=s.length;i--;)s[i].name!=="slot"&&(r[s[i].name]=s[i].value,r[We(s[i].name)]=s[i].value);for(i=l.length;i--;){var _=t(l[i],null),u=l[i].slot;u?r[u]=M(je,{name:u},_):a[i]=_}var c=o?M(je,null,a):a;return M(o||n.nodeName.toLowerCase(),r,c)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?Ve:re)(this._vdom,this._root)}function We(e){return e.replace(/-(\w)/g,function(t,n){return n?n.toUpperCase():""})}function Ot(e,t,n){if(this._vdom){var o={};o[e]=n=n??void 0,o[We(e)]=n,this._vdom=He(this._vdom,o),re(this._vdom,this._root)}}function Mt(){re(this._vdom=null,this._root)}function je(e,t){var n=this;return M("slot",ve({},e,{ref:function(o){o?(n.ref=o,n._listener||(n._listener=function(a){a.stopPropagation(),a.detail.context=t},o.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}function Ut(e,t,n,o){function a(){var r=Reflect.construct(HTMLElement,[],a);return r._vdomComponent=e,r._root=o&&o.shadow?r.attachShadow({mode:o.mode||"open"}):r,r}return(a.prototype=Object.create(HTMLElement.prototype)).constructor=a,a.prototype.connectedCallback=Lt,a.prototype.attributeChangedCallback=Ot,a.prototype.disconnectedCallback=Mt,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),a.observedAttributes=n,n.forEach(function(r){Object.defineProperty(a.prototype,r,{get:function(){return this._vdom.props[r]},set:function(i){this._vdom?this.attributeChangedCallback(r,null,i):(this._props||(this._props={}),this._props[r]=i,this.connectedCallback());var s=typeof i;i!=null&&s!=="string"&&s!=="boolean"&&s!=="number"||this.setAttribute(r,i)}})}),customElements.define(t,a)}var zt=0;function h(e,t,n,o,a,r){var i,s,l={};for(s in t)s=="ref"?i=t[s]:l[s]=t[s];var _={type:e,props:l,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--zt,__i:-1,__u:0,__source:a,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(s in i)l[s]===void 0&&(l[s]=i[s]);return f.vnode&&f.vnode(_),_}var Z,w,ge,qe,ae=0,Ge=[],ie=[],C=f,Je=C.__b,Ye=C.__r,Xe=C.diffed,Ze=C.__c,Qe=C.unmount,Ke=C.__;function ye(e,t){C.__h&&C.__h(w,e,ae||t),ae=0;var n=w.__H||(w.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ie}),n.__[e]}function F(e){return ae=1,Vt(nt,e)}function Vt(e,t,n){var o=ye(Z++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):nt(void 0,t),function(s){var l=o.__N?o.__N[0]:o.__[0],_=o.t(l,s);l!==_&&(o.__N=[_,o.__[1]],o.__c.setState({}))}],o.__c=w,!w.u)){var a=function(s,l,_){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(v){return!!v.__c});if(u.every(function(v){return!v.__N}))return!r||r.call(this,s,l,_);var c=!1;return u.forEach(function(v){if(v.__N){var p=v.__[0];v.__=v.__N,v.__N=void 0,p!==v.__[0]&&(c=!0)}}),!(!c&&o.__c.props===s)&&(!r||r.call(this,s,l,_))};w.u=!0;var r=w.shouldComponentUpdate,i=w.componentWillUpdate;w.componentWillUpdate=function(s,l,_){if(this.__e){var u=r;r=void 0,a(s,l,_),r=u}i&&i.call(this,s,l,_)},w.shouldComponentUpdate=a}return o.__N||o.__}function P(e,t){var n=ye(Z++,3);!C.__s&&tt(n.__H,t)&&(n.__=e,n.i=t,w.__H.__h.push(n))}function j(e){return ae=5,q(function(){return{current:e}},[])}function q(e,t){var n=ye(Z++,7);return tt(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ht(){for(var e;e=Ge.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(se),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){w=null,Je&&Je(e)},C.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ke&&Ke(e,t)},C.__r=function(e){Ye&&Ye(e),Z=0;var t=(w=e.__c).__H;t&&(ge===w?(t.__h=[],w.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ie,n.__N=n.i=void 0})):(t.__h.forEach(se),t.__h.forEach(be),t.__h=[],Z=0)),ge=w},C.diffed=function(e){Xe&&Xe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ge.push(t)!==1&&qe===C.requestAnimationFrame||((qe=C.requestAnimationFrame)||Wt)(Ht)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ie&&(n.__=n.__V),n.i=void 0,n.__V=ie})),ge=w=null},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(se),n.__h=n.__h.filter(function(o){return!o.__||be(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],C.__e(o,n.__v)}}),Ze&&Ze(e,t)},C.unmount=function(e){Qe&&Qe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{se(o)}catch(a){t=a}}),n.__H=void 0,t&&C.__e(t,n.__v))};var et=typeof requestAnimationFrame=="function";function Wt(e){var t,n=function(){clearTimeout(o),et&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);et&&(t=requestAnimationFrame(n))}function se(e){var t=w,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),w=t}function be(e){var t=w;e.__c=e.__(),w=t}function tt(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function nt(e,t){return typeof t=="function"?t(e):t}const ot="https://api.elevenlabs.io",rt="https://api.us.elevenlabs.io",jt="wss://api.elevenlabs.io",qt="wss://api.us.elevenlabs.io";function Gt(e,t){for(var n in t)e[n]=t[n];return e}function at(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var o in t)if(o!=="__source"&&e[o]!==t[o])return!0;return!1}function it(e,t){this.props=e,this.context=t}(it.prototype=new R).isPureReactComponent=!0,it.prototype.shouldComponentUpdate=function(e,t){return at(this.props,e)||at(this.state,t)};var st=f.__b;f.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),st&&st(e)};var Jt=f.__e;f.__e=function(e,t,n,o){if(e.then){for(var a,r=t;r=r.__;)if((a=r.__c)&&a.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),a.__c(e,t)}Jt(e,t,n,o)};var lt=f.unmount;function ct(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Gt({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return ct(o,t,n)})),e}function _t(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return _t(o,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function xe(){this.__u=0,this.t=null,this.__b=null}function ut(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function le(){this.u=null,this.o=null}f.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),lt&&lt(e)},(xe.prototype=new R).__c=function(e,t){var n=t.__c,o=this;o.t==null&&(o.t=[]),o.t.push(n);var a=ut(o.__v),r=!1,i=function(){r||(r=!0,n.__R=null,a?a(s):s())};n.__R=i;var s=function(){if(!--o.__u){if(o.state.__a){var l=o.state.__a;o.__v.__k[0]=_t(l,l.__c.__P,l.__c.__O)}var _;for(o.setState({__a:o.__b=null});_=o.t.pop();)_.forceUpdate()}};o.__u++||32&t.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(i,i)},xe.prototype.componentWillUnmount=function(){this.t=[]},xe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=ct(this.__b,n,o.__O=o.__P)}this.__b=null}var a=t.__a&&M(U,null,e.fallback);return a&&(a.__u&=-33),[M(U,null,t.__a?null:e.children),a]};var pt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(le.prototype=new R).__a=function(e){var t=this,n=ut(t.__v),o=t.o.get(e);return o[0]++,function(a){var r=function(){t.props.revealOrder?(o.push(a),pt(t,e,o)):a()};n?n(r):r()}},le.prototype.render=function(e){this.u=null,this.o=new Map;var t=ne(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},le.prototype.componentDidUpdate=le.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){pt(e,n,t)})};var Yt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Xt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Zt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Qt=/[A-Z0-9]/g,Kt=typeof document<"u",en=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};R.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(R.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var dt=f.event;function tn(){}function nn(){return this.cancelBubble}function on(){return this.defaultPrevented}f.event=function(e){return dt&&(e=dt(e)),e.persist=tn,e.isPropagationStopped=nn,e.isDefaultPrevented=on,e.nativeEvent=e};var rn={enumerable:!1,configurable:!0,get:function(){return this.class}},ht=f.vnode;f.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,o=t.type,a={};for(var r in n){var i=n[r];if(!(r==="value"&&"defaultValue"in n&&i==null||Kt&&r==="children"&&o==="noscript"||r==="class"||r==="className")){var s=r.toLowerCase();r==="defaultValue"&&"value"in n&&n.value==null?r="value":r==="download"&&i===!0?i="":s==="translate"&&i==="no"?i=!1:s==="ondoubleclick"?r="ondblclick":s!=="onchange"||o!=="input"&&o!=="textarea"||en(n.type)?s==="onfocus"?r="onfocusin":s==="onblur"?r="onfocusout":Zt.test(r)?r=s:o.indexOf("-")===-1&&Xt.test(r)?r=r.replace(Qt,"-$&").toLowerCase():i===null&&(i=void 0):s=r="oninput",s==="oninput"&&a[r=s]&&(r="oninputCapture"),a[r]=i}}o=="select"&&a.multiple&&Array.isArray(a.value)&&(a.value=ne(n.children).forEach(function(l){l.props.selected=a.value.indexOf(l.props.value)!=-1})),o=="select"&&a.defaultValue!=null&&(a.value=ne(n.children).forEach(function(l){l.props.selected=a.multiple?a.defaultValue.indexOf(l.props.value)!=-1:a.defaultValue==l.props.value})),n.class&&!n.className?(a.class=n.class,Object.defineProperty(a,"className",rn)):(n.className&&!n.class||n.class&&n.className)&&(a.class=a.className=n.className),t.props=a}(e),e.$$typeof=Yt,ht&&ht(e)};var ft=f.__r;f.__r=function(e){ft&&ft(e),e.__c};var mt=f.diffed;f.diffed=function(e){mt&&mt(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},we.apply(null,arguments)}function an(e){const t=new Uint8Array(e);return window.btoa(String.fromCharCode(...t))}function sn(e){const t=window.atob(e),n=t.length,o=new Uint8Array(n);for(let a=0;a<n;a++)o[a]=t.charCodeAt(a);return o.buffer}const ln=new Blob([`
      const BIAS = 0x84;
      const CLIP = 32635;
      const encodeTable = [
        0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,
        4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
        7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
      ];
      
      function encodeSample(sample) {
        let sign;
        let exponent;
        let mantissa;
        let muLawSample;
        sign = (sample >> 8) & 0x80;
        if (sign !== 0) sample = -sample;
        sample = sample + BIAS;
        if (sample > CLIP) sample = CLIP;
        exponent = encodeTable[(sample>>7) & 0xFF];
        mantissa = (sample >> (exponent+3)) & 0x0F;
        muLawSample = ~(sign | (exponent << 4) | mantissa);
        
        return muLawSample;
      }
    
      class RawAudioProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
                    
          this.port.onmessage = ({ data }) => {
            this.buffer = []; // Initialize an empty buffer
            this.bufferSize = data.sampleRate / 4;
            
            if (globalThis.LibSampleRate && sampleRate !== data.sampleRate) {
              globalThis.LibSampleRate.create(1, sampleRate, data.sampleRate).then(resampler => {
                this.resampler = resampler;
              });
            } 
          };
        }
        process(inputs) {
          if (!this.buffer) {
            return true;
          }
          
          const input = inputs[0]; // Get the first input node
          if (input.length > 0) {
            let channelData = input[0]; // Get the first channel's data

            // Resample the audio if necessary
            if (this.resampler) {
              channelData = this.resampler.full(channelData);
            }

            // Add channel data to the buffer
            this.buffer.push(...channelData);
            // Get max volume 
            let sum = 0.0;
            for (let i = 0; i < channelData.length; i++) {
              sum += channelData[i] * channelData[i];
            }
            const maxVolume = Math.sqrt(sum / channelData.length);
            // Check if buffer size has reached or exceeded the threshold
            if (this.buffer.length >= this.bufferSize) {
              const float32Array = new Float32Array(this.buffer)
              let encodedArray = this.format === "ulaw"
                ? new Uint8Array(float32Array.length)
                : new Int16Array(float32Array.length);

              // Iterate through the Float32Array and convert each sample to PCM16
              for (let i = 0; i < float32Array.length; i++) {
                // Clamp the value to the range [-1, 1]
                let sample = Math.max(-1, Math.min(1, float32Array[i]));

                // Scale the sample to the range [-32768, 32767]
                let value = sample < 0 ? sample * 32768 : sample * 32767;
                if (this.format === "ulaw") {
                  value = encodeSample(Math.round(value));
                }

                encodedArray[i] = value;
              }

              // Send the buffered data to the main script
              this.port.postMessage([encodedArray, maxVolume]);

              // Clear the buffer after sending
              this.buffer = [];
            }
          }
          return true; // Continue processing
        }
      }
      registerProcessor("raw-audio-processor", RawAudioProcessor);
  `],{type:"application/javascript"}),cn=URL.createObjectURL(ln);class ke{static async create({sampleRate:t,format:n}){let o=null,a=null;try{const s=navigator.mediaDevices.getSupportedConstraints().sampleRate;o=new window.AudioContext(s?{sampleRate:t}:{});const l=o.createAnalyser();s||await o.audioWorklet.addModule("https://cdn.jsdelivr.net/npm/@alexanderolsen/libsamplerate-js@2.1.2/dist/libsamplerate.worklet.js"),await o.audioWorklet.addModule(cn),a=await navigator.mediaDevices.getUserMedia({audio:{sampleRate:{ideal:t},echoCancellation:{ideal:!0},noiseSuppression:{ideal:!0}}});const _=o.createMediaStreamSource(a),u=new AudioWorkletNode(o,"raw-audio-processor");return u.port.postMessage({type:"setFormat",format:n,sampleRate:t}),_.connect(l),l.connect(u),new ke(o,l,u,a)}catch(s){var r,i;throw(r=a)==null||r.getTracks().forEach(l=>l.stop()),(i=o)==null||i.close(),s}}constructor(t,n,o,a){this.context=void 0,this.analyser=void 0,this.worklet=void 0,this.inputStream=void 0,this.context=t,this.analyser=n,this.worklet=o,this.inputStream=a}async close(){this.inputStream.getTracks().forEach(t=>t.stop()),await this.context.close()}}const _n=new Blob([`
      const decodeTable = [0,132,396,924,1980,4092,8316,16764];
      
      export function decodeSample(muLawSample) {
        let sign;
        let exponent;
        let mantissa;
        let sample;
        muLawSample = ~muLawSample;
        sign = (muLawSample & 0x80);
        exponent = (muLawSample >> 4) & 0x07;
        mantissa = muLawSample & 0x0F;
        sample = decodeTable[exponent] + (mantissa << (exponent+3));
        if (sign !== 0) sample = -sample;

        return sample;
      }
      
      class AudioConcatProcessor extends AudioWorkletProcessor {
        constructor() {
          super();
          this.buffers = []; // Initialize an empty buffer
          this.cursor = 0;
          this.currentBuffer = null;
          this.wasInterrupted = false;
          this.finished = false;
          
          this.port.onmessage = ({ data }) => {
            switch (data.type) {
              case "setFormat":
                this.format = data.format;
                break;
              case "buffer":
                this.wasInterrupted = false;
                this.buffers.push(
                  this.format === "ulaw"
                    ? new Uint8Array(data.buffer)
                    : new Int16Array(data.buffer)
                );
                break;
              case "interrupt":
                this.wasInterrupted = true;
                break;
              case "clearInterrupted":
                if (this.wasInterrupted) {
                  this.wasInterrupted = false;
                  this.buffers = [];
                  this.currentBuffer = null;
                }
            }
          };
        }
        process(_, outputs) {
          let finished = false;
          const output = outputs[0][0];
          for (let i = 0; i < output.length; i++) {
            if (!this.currentBuffer) {
              if (this.buffers.length === 0) {
                finished = true;
                break;
              }
              this.currentBuffer = this.buffers.shift();
              this.cursor = 0;
            }

            let value = this.currentBuffer[this.cursor];
            if (this.format === "ulaw") {
              value = decodeSample(value);
            }
            output[i] = value / 32768;
            this.cursor++;

            if (this.cursor >= this.currentBuffer.length) {
              this.currentBuffer = null;
            }
          }

          if (this.finished !== finished) {
            this.finished = finished;
            this.port.postMessage({ type: "process", finished });
          }

          return true; // Continue processing
        }
      }

      registerProcessor("audio-concat-processor", AudioConcatProcessor);
    `],{type:"application/javascript"}),un=URL.createObjectURL(_n);class Ce{static async create({sampleRate:t,format:n}){let o=null;try{o=new AudioContext({sampleRate:t});const r=o.createAnalyser(),i=o.createGain();i.connect(r),r.connect(o.destination),await o.audioWorklet.addModule(un);const s=new AudioWorkletNode(o,"audio-concat-processor");return s.port.postMessage({type:"setFormat",format:n}),s.connect(i),new Ce(o,r,i,s)}catch(r){var a;throw(a=o)==null||a.close(),r}}constructor(t,n,o,a){this.context=void 0,this.analyser=void 0,this.gain=void 0,this.worklet=void 0,this.context=t,this.analyser=n,this.gain=o,this.worklet=a}async close(){await this.context.close()}}function vt(e){return!!e.type}let pn=class Ft{static async create(t){let n=null;try{var o;const r=(o=t.origin)!=null?o:"wss://api.elevenlabs.io",i=t.signedUrl?t.signedUrl:r+"/v1/convai/conversation?agent_id="+t.agentId,s=["convai"];t.authorization&&s.push(`bearer.${t.authorization}`),n=new WebSocket(i,s);const l=await new Promise((b,x)=>{n.addEventListener("open",()=>{var d;const g={type:"conversation_initiation_client_data"};var y,S,N,T;t.overrides&&(g.conversation_config_override={agent:{prompt:(y=t.overrides.agent)==null?void 0:y.prompt,first_message:(S=t.overrides.agent)==null?void 0:S.firstMessage,language:(N=t.overrides.agent)==null?void 0:N.language},tts:{voice_id:(T=t.overrides.tts)==null?void 0:T.voiceId}}),t.customLlmExtraBody&&(g.custom_llm_extra_body=t.customLlmExtraBody),(d=n)==null||d.send(JSON.stringify(g))},{once:!0}),n.addEventListener("error",x),n.addEventListener("close",x),n.addEventListener("message",d=>{const g=JSON.parse(d.data);vt(g)&&(g.type==="conversation_initiation_metadata"?b(g.conversation_initiation_metadata_event):console.warn("First received message is not conversation metadata."))},{once:!0})}),{conversation_id:_,agent_output_audio_format:u,user_input_audio_format:c}=l,v=gt(c??"pcm_16000"),p=gt(u);return new Ft(n,_,v,p)}catch(r){var a;throw(a=n)==null||a.close(),r}}constructor(t,n,o,a){this.socket=void 0,this.conversationId=void 0,this.inputFormat=void 0,this.outputFormat=void 0,this.socket=t,this.conversationId=n,this.inputFormat=o,this.outputFormat=a}close(){this.socket.close()}sendMessage(t){this.socket.send(JSON.stringify(t))}};function gt(e){const[t,n]=e.split("_");if(!["pcm","ulaw"].includes(t))throw new Error(`Invalid format: ${e}`);const o=parseInt(n);if(isNaN(o))throw new Error(`Invalid sample rate: ${n}`);return{format:t,sampleRate:o}}const dn={clientTools:{}},hn={onConnect:()=>{},onDebug:()=>{},onDisconnect:()=>{},onError:()=>{},onMessage:()=>{},onModeChange:()=>{},onStatusChange:()=>{},onCanSendFeedbackChange:()=>{}};class Se{static async startSession(t){const n=we({},dn,hn,t);n.onStatusChange({status:"connecting"}),n.onCanSendFeedbackChange({canSendFeedback:!1});let o=null,a=null,r=null;try{return a=await pn.create(t),[o,r]=await Promise.all([ke.create(a.inputFormat),Ce.create(a.outputFormat)]),new Se(n,a,o,r)}catch(_){var i,s,l;throw n.onStatusChange({status:"disconnected"}),(i=a)==null||i.close(),await((s=o)==null?void 0:s.close()),await((l=r)==null?void 0:l.close()),_}}constructor(t,n,o,a){var r=this;this.options=void 0,this.connection=void 0,this.input=void 0,this.output=void 0,this.lastInterruptTimestamp=0,this.mode="listening",this.status="connecting",this.inputFrequencyData=void 0,this.outputFrequencyData=void 0,this.volume=1,this.currentEventId=1,this.lastFeedbackEventId=1,this.canSendFeedback=!1,this.endSession=async function(){r.status==="connected"&&(r.updateStatus("disconnecting"),r.connection.close(),await r.input.close(),await r.output.close(),r.updateStatus("disconnected"))},this.updateMode=i=>{i!==this.mode&&(this.mode=i,this.options.onModeChange({mode:i}))},this.updateStatus=i=>{i!==this.status&&(this.status=i,this.options.onStatusChange({status:i}))},this.updateCanSendFeedback=()=>{const i=this.currentEventId!==this.lastFeedbackEventId;this.canSendFeedback!==i&&(this.canSendFeedback=i,this.options.onCanSendFeedbackChange({canSendFeedback:i}))},this.onEvent=async function(i){try{const l=JSON.parse(i.data);if(!vt(l))return;switch(l.type){case"interruption":l.interruption_event&&(r.lastInterruptTimestamp=l.interruption_event.event_id),r.fadeOutAudio();break;case"agent_response":r.options.onMessage({source:"ai",message:l.agent_response_event.agent_response});break;case"user_transcript":r.options.onMessage({source:"user",message:l.user_transcription_event.user_transcript});break;case"internal_tentative_agent_response":r.options.onDebug({type:"tentative_agent_response",response:l.tentative_agent_response_internal_event.tentative_agent_response});break;case"client_tool_call":if(r.options.clientTools.hasOwnProperty(l.client_tool_call.tool_name)){try{var s;const _=(s=await r.options.clientTools[l.client_tool_call.tool_name](l.client_tool_call.parameters))!=null?s:"Client tool execution successful.";r.connection.sendMessage({type:"client_tool_result",tool_call_id:l.client_tool_call.tool_call_id,result:_,is_error:!1})}catch(_){r.onError("Client tool execution failed with following error: "+(_==null?void 0:_.message),{clientToolName:l.client_tool_call.tool_name}),r.connection.sendMessage({type:"client_tool_result",tool_call_id:l.client_tool_call.tool_call_id,result:"Client tool execution failed: "+(_==null?void 0:_.message),is_error:!0})}break}if(r.options.onUnhandledClientToolCall){r.options.onUnhandledClientToolCall(l.client_tool_call);break}r.onError(`Client tool with name ${l.client_tool_call.tool_name} is not defined on client`,{clientToolName:l.client_tool_call.tool_name}),r.connection.sendMessage({type:"client_tool_result",tool_call_id:l.client_tool_call.tool_call_id,result:`Client tool with name ${l.client_tool_call.tool_name} is not defined on client`,is_error:!0});break;case"audio":r.lastInterruptTimestamp<=l.audio_event.event_id&&(r.addAudioBase64Chunk(l.audio_event.audio_base_64),r.currentEventId=l.audio_event.event_id,r.updateCanSendFeedback(),r.updateMode("speaking"));break;case"ping":r.connection.sendMessage({type:"pong",event_id:l.ping_event.event_id});break;default:r.options.onDebug(l)}}catch{return void r.onError("Failed to parse event data",{event:i})}},this.onInputWorkletMessage=i=>{this.status==="connected"&&this.connection.sendMessage({user_audio_chunk:an(i.data[0].buffer)})},this.onOutputWorkletMessage=({data:i})=>{i.type==="process"&&this.updateMode(i.finished?"listening":"speaking")},this.addAudioBase64Chunk=async function(i){r.output.gain.gain.value=r.volume,r.output.worklet.port.postMessage({type:"clearInterrupted"}),r.output.worklet.port.postMessage({type:"buffer",buffer:sn(i)})},this.fadeOutAudio=async function(){r.updateMode("listening"),r.output.worklet.port.postMessage({type:"interrupt"}),r.output.gain.gain.exponentialRampToValueAtTime(1e-4,r.output.context.currentTime+2),setTimeout(()=>{r.output.gain.gain.value=r.volume,r.output.worklet.port.postMessage({type:"clearInterrupted"})},2e3)},this.onError=(i,s)=>{console.error(i,s),this.options.onError(i,s)},this.calculateVolume=i=>{if(i.length===0)return 0;let s=0;for(let l=0;l<i.length;l++)s+=i[l]/255;return s/=i.length,s<0?0:s>1?1:s},this.getId=()=>this.connection.conversationId,this.setVolume=({volume:i})=>{this.volume=i},this.getInputByteFrequencyData=()=>(this.inputFrequencyData!=null||(this.inputFrequencyData=new Uint8Array(this.input.analyser.frequencyBinCount)),this.input.analyser.getByteFrequencyData(this.inputFrequencyData),this.inputFrequencyData),this.getOutputByteFrequencyData=()=>(this.outputFrequencyData!=null||(this.outputFrequencyData=new Uint8Array(this.output.analyser.frequencyBinCount)),this.output.analyser.getByteFrequencyData(this.outputFrequencyData),this.outputFrequencyData),this.getInputVolume=()=>this.calculateVolume(this.getInputByteFrequencyData()),this.getOutputVolume=()=>this.calculateVolume(this.getOutputByteFrequencyData()),this.sendFeedback=i=>{this.canSendFeedback?(this.connection.sendMessage({type:"feedback",score:i?"like":"dislike",event_id:this.currentEventId}),this.lastFeedbackEventId=this.currentEventId,this.updateCanSendFeedback()):console.warn(this.lastFeedbackEventId===0?"Cannot send feedback: the conversation has not started yet.":"Cannot send feedback: feedback has already been sent for the current response.")},this.options=t,this.connection=n,this.input=o,this.output=a,this.options.onConnect({conversationId:n.conversationId}),this.connection.socket.addEventListener("message",i=>{this.onEvent(i)}),this.connection.socket.addEventListener("error",i=>{this.updateStatus("disconnected"),this.onError("Socket error",i)}),this.connection.socket.addEventListener("close",()=>{this.updateStatus("disconnected"),this.options.onDisconnect()}),this.input.worklet.port.onmessage=this.onInputWorkletMessage,this.output.worklet.port.onmessage=this.onOutputWorkletMessage,this.updateStatus("connected")}}function fn(e,t,n="https://api.elevenlabs.io"){return fetch(`${n}/v1/convai/conversations/${e}/feedback`,{method:"POST",body:JSON.stringify({feedback:t?"like":"dislike"}),headers:{"Content-Type":"application/json"}})}function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ie.apply(null,arguments)}function mn(e){const t=j(null),n=j(null),[o,a]=F("disconnected"),[r,i]=F(!1),[s,l]=F("listening");return P(()=>()=>{var _;(_=t.current)==null||_.endSession()},[]),{startSession:async _=>{if(t.current)return t.current.getId();if(n.current)return(await n.current).getId();try{return n.current=Se.startSession(Ie({},e??{},_??{},{onModeChange:({mode:u})=>{l(u)},onStatusChange:({status:u})=>{a(u)},onCanSendFeedbackChange:({canSendFeedback:u})=>{i(u)}})),t.current=await n.current,t.current.getId()}finally{n.current=null}},endSession:async()=>{const _=t.current;t.current=null,await(_==null?void 0:_.endSession())},setVolume:({volume:_})=>{var u;(u=t.current)==null||u.setVolume({volume:_})},getInputByteFrequencyData:()=>{var _;return(_=t.current)==null?void 0:_.getInputByteFrequencyData()},getOutputByteFrequencyData:()=>{var _;return(_=t.current)==null?void 0:_.getOutputByteFrequencyData()},getInputVolume:()=>{var _,u;return(_=(u=t.current)==null?void 0:u.getInputVolume())!=null?_:0},getOutputVolume:()=>{var _,u;return(_=(u=t.current)==null?void 0:u.getOutputVolume())!=null?_:0},sendFeedback:_=>{var u;(u=t.current)==null||u.sendFeedback(_)},status:o,canSendFeedback:r,isSpeaking:s==="speaking"}}function vn(e){return h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",height:"24px",width:"24px",...e,children:h("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function yt(e){return h("svg",{viewBox:"0 0 640 640",xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",stroke:"currentColor",fill:"currentColor",...e,children:h("path",{d:"M 82.6 88.6 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 36 76.7 98.9 140.5 177.2 177.2 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 C 572.1 430.5 578 442.1 575.4 453.4 l -24 104 C 548.9 568.2 539.3 576 528 576 c -256.1 0 -464 -207.5 -464 -464 c 0 -11.2 7.7 -20.9 18.6 -23.4 z"})})}function gn(e){return h("svg",{viewBox:"0 0 640 640",xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",stroke:"currentColor",fill:"currentColor",...e,children:h("path",{d:"M 371.8 445.4 l 49.6 -60.6 c 6.8 -8.3 18.2 -11.1 28 -6.9 l 112 48 c 10.7 4.6 16.5 16.1 13.9 27.5 l -24 104 c -2.5 10.8 -12.1 18.6 -23.4 18.6 c -100.7 0 -193.7 -32.4 -269.7 -86.9 l 80 -61.8 c 10.9 6.5 22.1 12.7 33.6 18.1 z m -365.6 76.7 L 164.9 399.5 C 102.1 320.4 64 220.9 64 112 c 0 -11.2 7.7 -20.9 18.6 -23.4 l 104 -24 c 11.3 -2.6 22.9 3.3 27.5 13.9 l 48 112 c 4.2 9.8 1.4 21.3 -6.9 28 l -60.6 49.6 c 12.2 26.1 27.9 50.3 46 72.8 L 594.5 67.4 C 601.5 62 611.5 63.2 617 70.2 L 636.6 95.4 c 5.4 7 4.2 17 -2.8 22.4 l -588.4 454.7 c -7 5.4 -17 4.2 -22.5 -2.8 l -19.6 -25.3 c -5.4 -6.8 -4.1 -16.9 2.9 -22.3 z"})})}function yn(e){return h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-thumbs-up",...e,children:[h("path",{d:"M7 10v12"}),h("path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"})]})}function bn(e){return h("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",width:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",...e,children:[h("path",{d:"M17 14V2"}),h("path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"})]})}const m={wrapper:"_wrapper_ly5mi_15",box:"_box_ly5mi_36",open:"_open_ly5mi_54",expandable:"_expandable_ly5mi_59",termsShown:"_termsShown_ly5mi_65",compact:"_compact_ly5mi_69",avatar:"_avatar_ly5mi_75",avatarBackground:"_avatarBackground_ly5mi_91",avatarImage:"_avatarImage_ly5mi_101",canvas:"_canvas_ly5mi_113",actions:"_actions_ly5mi_118",status:"_status_ly5mi_132",btn:"_btn_ly5mi_146",disabled:"_disabled_ly5mi_192",secondary:"_secondary_ly5mi_206",iconBtn:"_iconBtn_ly5mi_220",ellipsis:"_ellipsis_ly5mi_224",icon:"_icon_ly5mi_220",minimize:"_minimize_ly5mi_244",openContent:"_openContent_ly5mi_259",closedContent:"_closedContent_ly5mi_274",poweredBy:"_poweredBy_ly5mi_291",full:"_full_ly5mi_301",terms:"_terms_ly5mi_65",termsFooter:"_termsFooter_ly5mi_317",feedback:"_feedback_ly5mi_328",show:"_show_ly5mi_344"},xn=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uOffsets[7];
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform sampler2D uPerlinTexture;

in vec2 vUv;

out vec4 outColor;

const float PI = 3.14159265358979323846;

// Draw a single oval with soft edges and calculate its gradient color
bool drawOval(vec2 polarUv, vec2 polarCenter, float a, float b, bool reverseGradient, float softness, out vec4 color) {
    vec2 p = polarUv - polarCenter;
    float oval = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
    
    float edge = smoothstep(1.0, 1.0 - softness, oval);
    
    if (edge > 0.0) {
        float gradient = reverseGradient ? (1.0 - (p.x / a + 1.0) / 2.0) : ((p.x / a + 1.0) / 2.0);
        color = vec4(vec3(gradient), 0.8 * edge);
        return true;
    }
    return false;
}

// Map grayscale value to a 4-color ramp (color1, color2, color3, color4)
vec3 colorRamp(float grayscale, vec3 color1, vec3 color2, vec3 color3, vec3 color4) {
    if (grayscale < 0.33) {
        return mix(color1, color2, grayscale * 3.0);
    } else if (grayscale < 0.66) {
        return mix(color2, color3, (grayscale - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (grayscale - 0.66) * 3.0);
    }
}

vec2 hash2(vec2 p) {
    return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
}

// 2D noise for the ring
float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
            dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );

    return 0.5 + 0.5 * n;
}

float sharpRing(vec2 uv, float theta, float time) {
    float ringStart = 1.0;
    float ringWidth = 0.5;
    float noiseScale = 5.0;
    
    vec2 noiseCoord = vec2(theta / (2.0 * PI), time * 0.1);
    noiseCoord *= noiseScale;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 4.0;
    
    return ringStart + noise * ringWidth * 1.5;
}

float smoothRing(vec2 uv, float time) {
    float angle = atan(uv.y, uv.x);
    if (angle < 0.0) angle += 2.0 * PI;
    
    vec2 noiseCoord = vec2(angle / (2.0 * PI), time * 0.1);
    noiseCoord *= 6.0;
    
    float noise = noise2D(noiseCoord);
    noise = (noise - 0.5) * 8.0;
    
    float ringStart = 0.9;
    float ringWidth = 0.3;
    
    return ringStart + noise * ringWidth;
}

void main() {
    // Normalize vUv to be centered around (0.0, 0.0)
    vec2 uv = vUv * 2.0 - 1.0;

    // Convert uv to polar coordinates
    float radius = length(uv);
    float theta = atan(uv.y, uv.x);
    if (theta < 0.0) theta += 2.0 * PI; // Normalize theta to [0, 2*PI]

    // Initialize the base color to white
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);

    // Original parameters for the ovals in polar coordinates
    float originalCenters[7] = float[7](0.0, 0.5 * PI, 1.0 * PI, 1.5 * PI, 2.0 * PI, 2.5 * PI, 3.0 * PI);

    // Parameters for the animated centers in polar coordinates
    float centers[7];
    for (int i = 0; i < 7; i++) {
        centers[i] = originalCenters[i] + 0.5 * sin(uTime / 20.0 + uOffsets[i]);
    }

    float a, b;
    vec4 ovalColor;

    // Check if the pixel is inside any of the ovals
    for (int i = 0; i < 7; i++) {
        float noise = texture(uPerlinTexture, vec2(mod(centers[i] + uTime * 0.05, 1.0), 0.5)).r;
        a = noise * 1.5; // Increased variance: goes from 0.0 to 1.0
        b = noise * 4.5; // Tall semi-minor axis
        bool reverseGradient = (i % 2 == 1); // Reverse gradient for every second oval

        // Calculate the distance in polar coordinates
        float distTheta = abs(theta - centers[i]);
        if (distTheta > PI) distTheta = 2.0 * PI - distTheta; // Shortest distance on circle
        float distRadius = radius;

        float softness = 0.4; // Controls edge softness (e.g. how much blur is applied to the ovals)

        // Check if the pixel is inside the oval in polar coordinates
        if (drawOval(vec2(distTheta, distRadius), vec2(0.0, 0.0), a, b, reverseGradient, softness, ovalColor)) {
            // Blend the oval color with the existing color
            color.rgb = mix(color.rgb, ovalColor.rgb, ovalColor.a);
            color.a = max(color.a, ovalColor.a); // Max alpha
        }
    }
    
    // Calculate both noisy rings
    float ringRadius1 = sharpRing(uv, theta, uTime);
    float ringRadius2 = smoothRing(uv, uTime);
    
    // Blend both rings
    float ringAlpha1 = (radius >= ringRadius1) ? 0.3 : 0.0;
    float ringAlpha2 = smoothstep(ringRadius2 - 0.05, ringRadius2 + 0.05, radius) * 0.25;
    
    float totalRingAlpha = max(ringAlpha1, ringAlpha2);
    
    // Apply screen blend mode for combined rings
    vec3 ringColor = vec3(1.0); // White ring color
    color.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - ringColor * totalRingAlpha);

    // Define colours to ramp against greyscale (could increase the amount of colours in the ramp)
    vec3 color1 = vec3(0.0, 0.0, 0.0); // Black
    vec3 color2 = uColor1; // Darker Color
    vec3 color3 = uColor2; // Lighter Color
    vec3 color4 = vec3(1.0, 1.0, 1.0); // White

    // Convert grayscale color to the color ramp
    float luminance = color.r; 
    color.rgb = colorRamp(luminance, color1, color2, color3, color4); // Apply the color ramp

    outColor = color;
}
`,wn=`#version 300 es
precision highp float;

in vec2 position;

out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0, 1);
}
`,bt=0,kn=new Float32Array([-1,1,-1,-1,1,1,1,-1]),Cn="https://storage.googleapis.com/eleven-public-cdn/images/perlin-noise.png",D=class D{constructor(t){O(this,"gl");O(this,"program");O(this,"startTime");O(this,"rafId",null);O(this,"resizeObserver");O(this,"copyNoiseImage",()=>{this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,D.noiseImage),this.gl.generateMipmap(this.gl.TEXTURE_2D)});O(this,"render",()=>{if(!this.gl){this.rafId=null;return}const t=(performance.now()-this.startTime)/1e3;this.gl.uniform1f(this.gl.getUniformLocation(this.program,"uTime"),t),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.rafId=requestAnimationFrame(this.render)});const n=t.getContext("webgl2",{depth:!1,stencil:!1});this.gl=n;const o=this.getShader(n.FRAGMENT_SHADER,xn),a=this.getShader(n.VERTEX_SHADER,wn);if(!o||!a)throw new Error("Failed to compile shaders");if(this.program=n.createProgram(),n.attachShader(this.program,o),n.attachShader(this.program,a),n.linkProgram(this.program),!n.getProgramParameter(this.program,n.LINK_STATUS))throw new Error("Failed to link program");const r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),D.noiseImage||(D.noiseImage=new Image,D.noiseImage.crossOrigin="anonymous",D.noiseImage.src=Cn),D.noiseImage.complete?this.copyNoiseImage():D.noiseImage.addEventListener("load",this.copyNoiseImage);const i=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,kn,n.STATIC_DRAW),n.vertexAttribPointer(bt,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(bt),n.useProgram(this.program),n.uniform1i(n.getUniformLocation(this.program,"uPerlinTexture"),0),n.uniform1fv(n.getUniformLocation(this.program,"uOffsets"),new Float32Array(7).map(()=>Math.random()*Math.PI*2)),this.updateColors("#2792DC","#9CE6E6"),this.resizeObserver=new ResizeObserver(l=>{const _=l[0];let u;_.devicePixelContentBoxSize?u=_.devicePixelContentBoxSize[0]:u=_.contentBoxSize[0],t.width=Math.min(512,u.inlineSize),t.height=Math.min(512,u.blockSize),this.updateViewport()});const s=t.parentElement;if(s)try{this.resizeObserver.observe(s,{box:"device-pixel-content-box"})}catch{this.resizeObserver.observe(s)}this.startTime=performance.now(),this.rafId=requestAnimationFrame(this.render)}dispose(){var t,n,o;this.rafId!==null&&cancelAnimationFrame(this.rafId),(t=this.resizeObserver)==null||t.disconnect(),(o=(n=this.gl)==null?void 0:n.getExtension("WEBGL_lose_context"))==null||o.loseContext(),this.gl=null,this.program=null}updateViewport(){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)}updateColors(t,n){this.updateColor("uColor1",t),this.updateColor("uColor2",n)}updateColor(t,n){try{const o=parseInt(n.slice(1,3),16)/255,a=parseInt(n.slice(3,5),16)/255,r=parseInt(n.slice(5,7),16)/255;this.gl.uniform3fv(this.gl.getUniformLocation(this.program,t),[Math.pow(o,2.2),Math.pow(a,2.2),Math.pow(r,2.2)])}catch(o){console.error(`[ConversationalAI] Failed to parse ${n} as color:`,o)}}getShader(t,n){const o=this.gl.createShader(t);return this.gl.shaderSource(o,n),this.gl.compileShader(o),this.gl.getShaderParameter(o,this.gl.COMPILE_STATUS)?o:(this.gl.deleteShader(o),null)}};O(D,"noiseImage");let Ae=D;function Sn({getInputVolume:e,getOutputVolume:t,isSpeaking:n,status:o,config:a}){const r=j(null),i=j(null);return P(()=>{if(o==="disconnected"){r.current.style.transform="",i.current.style.transform="",i.current.style.opacity="";return}let s;function l(){const _=e(),u=t(),c=n?1:.5,v=n?1:1-_*.6,p=n?1+u*.6:1;r.current.style.transform=`scale(${p})`,i.current.style.transform=`scale(${v})`,i.current.style.opacity=`${c}`,s=requestAnimationFrame(l)}return l(),()=>{cancelAnimationFrame(s)}},[o]),h("div",{className:m.avatar,children:[h("div",{ref:r,className:m.avatarBackground}),h("div",{ref:i,style:{backgroundImage:a.type==="image"?`url(${a.url})`:a.type==="url"?`url(${a.custom_url})`:void 0},className:m.avatarImage,children:a.type==="orb"&&h(In,{color1:a.color_1,color2:a.color_2})})]})}function In({color1:e,color2:t}){const n=j(null),o=j(null);return P(()=>{var a;try{o.current=new Ae(n.current)}catch{(a=o.current)==null||a.dispose(),o.current=null}return()=>{var r;(r=o.current)==null||r.dispose()}},[]),P(()=>{var a;(a=o.current)==null||a.updateColors(e,t)},[e,t]),h("canvas",{className:m.canvas,ref:n})}function xt(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=xt(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function z(){for(var e,t,n=0,o="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=xt(e))&&(o&&(o+=" "),o+=t);return o}function wt(){return h("div",{className:m.poweredBy,children:" "})}const An=1e3*60,En=1e3*5;function Fn({termsKey:e,config:t,avatar:n,contents:o,variant:a,feedbackMode:r,location:i}){const s=q(()=>e?!!localStorage.getItem(e):!1,[e]),l=j(null),[_,u]=F(s),[c,v]=F(!1),[p,b]=F(null),[x,d]=F(!1),[g,y]=F(!1),S=mn(),{startSession:N,endSession:T,sendFeedback:L,canSendFeedback:k,status:Q,isSpeaking:A}=S,$=Q==="disconnected",Ln=g||a!=="expandable"||!$,[ce,Ee]=F(null),[Ct,Fe]=F(0);P(()=>{if($){const I=setTimeout(()=>Ee(null),3e5);return()=>clearTimeout(I)}},[$]),P(()=>()=>T(),[]),P(()=>{const I=()=>{let J=null;for(const Et of l.current.assignedElements())if(Et instanceof HTMLFormElement){J=Et;break}b(J),d((J==null?void 0:J.checkValidity())??!1)};I();const K=l.current;return K.addEventListener("slotchange",I),()=>K.removeEventListener("slotchange",I)},[]),P(()=>{s||!p?(v(!1),u(!0)):!s&&p&&u(!1)},[s,p]);async function St(I){const K=new CustomEvent("elevenlabs-convai:call",{bubbles:!0,composed:!0,detail:{config:t}});I.dispatchEvent(K);const J=await N(K.detail.config);Fe(0),Ee(J)}const[It,At]=F(k);P(()=>{if(k){const I=setTimeout(()=>{At(!0)},En);return()=>clearTimeout(I)}else At(!1)},[k]);const[$e,G]=q(()=>Date.now()-Ct<An?[]:$&&ce&&(r==="end"||r==="during")?["Was the call helpful?",I=>{fn(ce,I,i==="us"?rt:ot).catch(()=>{console.error(`[ConversationalAI] Cannot send feedback for conversation ${ce}`)}),Ee(null),Fe(Date.now())}]:!$&&It&&r==="during"?["Is this response helpful?",I=>{L(I),Fe(Date.now())}]:[],[$,ce,It,r,i,Ct,A]),[On,Mn]=F(null);return P(()=>{$e&&Mn($e)},[$e]),h("div",{className:z(m.wrapper,m[a],Ln&&m.open,c&&m.termsShown),children:[a!=="expandable"&&h(wt,{}),a==="expandable"&&h("button",{disabled:!$,className:z(m.btn,m.minimize),onClick:()=>y(!g),title:o.expand,children:[h(vn,{className:m.openContent}),h("div",{className:m.closedContent,children:[h(yt,{className:m.icon}),h("div",{className:m.ellipsis,children:o.expand})]})]}),h("div",{className:m.box,children:[h("div",{className:m.terms,children:[h("slot",{onInput:()=>{d((p==null?void 0:p.checkValidity())??!1)},ref:l,name:"terms"}),h("div",{class:m.termsFooter,children:[h("button",{className:z(m.btn,m.secondary),type:"button",onClick:()=>{v(!1)},children:"Cancel"}),h("button",{className:z(m.btn,!x&&m.disabled),type:"button",onClick:I=>{p!=null&&p.reportValidity()&&(u(!0),e&&localStorage.setItem(e,"true"),v(!1),St(I.currentTarget))},children:"Agree"})]})]}),!c&&h(U,{children:[h(Sn,{config:n,...S}),h("div",{className:m.actions,children:[a!=="compact"&&h("p",{className:m.status,children:$?o.action:A?o.speaking:o.listening}),$?h("button",{className:m.btn,title:o.startCall,onClick:I=>{if(!_){v(!0);return}St(I.currentTarget)},children:[h(yt,{className:m.icon}),h("div",{className:m.ellipsis,children:o.startCall})]}):h("button",{className:z(m.btn,m.secondary),title:o.endCall,onClick:()=>T(),children:[h(gn,{className:m.icon}),h("div",{className:m.ellipsis,children:o.endCall})]}),a==="expandable"&&h(wt,{})]})]})]}),r!=="none"&&h("div",{className:z(m.feedback,G&&m.show),children:[On,h("button",{className:z(m.btn,m.secondary,m.iconBtn),title:"Yes",onClick:()=>G==null?void 0:G(!0),children:h(yn,{className:m.icon})}),h("button",{className:z(m.btn,m.secondary,m.iconBtn),title:"No",onClick:()=>G==null?void 0:G(!1),children:h(bn,{className:m.icon})})]})]})}const kt=["full","compact","expandable"];function $n(e){return kt.includes(e)?e:kt[0]}function Tn(e="us"){switch(e){case"us":case"global":return e;default:return console.warn(`[ConversationalAI] Invalid server-location: ${e}. Defaulting to "us"`),"us"}}const Pn=["variant","override-config","avatar-image-url","avatar-orb-color-1","avatar-orb-color-2","agent-id","signed-url","action-text","start-call-text","end-call-text","expand-text","listening-text","speaking-text","terms-key","server-location"],Nn='@import"https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap";*{box-sizing:border-box}:host{pointer-events:none;position:fixed;right:24px;bottom:120px;z-index:1000}._wrapper_ly5mi_15{display:flex;flex-direction:column-reverse;align-items:flex-end;gap:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}._box_ly5mi_36{background-color:var(--el-bg-color);color:var(--el-text-color);border:1px solid var(--el-border-color);display:flex;align-items:center;gap:16px;padding:20px;border-radius:var(--el-border-radius);box-shadow:0 0 64px 64px #0000001a;pointer-events:none;opacity:0;transition:opacity .2s var(--el-timing-function);max-width:calc(100vw - 64px);max-height:calc(100vh - 64px)}._open_ly5mi_54 ._box_ly5mi_36{pointer-events:initial;opacity:1}._expandable_ly5mi_59 ._box_ly5mi_36{flex-direction:column;padding:24px;gap:20px}._expandable_ly5mi_59:not(._termsShown_ly5mi_65) ._box_ly5mi_36{padding-top:40px}._compact_ly5mi_69:not(._termsShown_ly5mi_65) ._box_ly5mi_36{gap:8px;padding:12px;border-radius:32px}._avatar_ly5mi_75{position:relative;width:54px;height:54px}._compact_ly5mi_69 ._avatar_ly5mi_75{width:36px;height:36px}._expandable_ly5mi_59 ._avatar_ly5mi_75{width:86px;height:86px}._avatarBackground_ly5mi_91{border-radius:50%;position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;background-color:var(--el-border-color)}._avatarImage_ly5mi_101{border-radius:50%;position:absolute;top:0;left:0;right:0;bottom:0;background-size:cover;background-color:var(--el-bg-color);overflow:hidden}._canvas_ly5mi_113{width:100%;height:100%}._actions_ly5mi_118{min-width:156px;width:min-content;display:flex;gap:11px;flex-direction:column}._expandable_ly5mi_59 ._actions_ly5mi_118{min-width:180px;width:min-content;justify-content:end}._status_ly5mi_132{font-size:14px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._expandable_ly5mi_59 ._status_ly5mi_132{text-align:center;text-wrap:wrap;line-height:18px}._btn_ly5mi_146{--el-ring-color: transparent;--el-ring-radius: 0;--el-focus-ring-radius: 0;--el-border-width: 0;background-color:var(--el-btn-color);color:var(--el-btn-text-color);border-radius:var(--el-btn-radius);box-shadow:0 1px 2px #1018280d,0 0 0 var(--el-ring-radius) var(--el-ring-color),0 0 0 var(--el-focus-ring-radius) var(--el-focus-color),inset 0 0 0 var(--el-border-width) var(--el-border-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;padding:0 16px;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;font-size:14px;font-weight:500;transition:all .2s var(--el-timing-function);flex-grow:1;height:36px;max-width:320px}._expandable_ly5mi_59 ._btn_ly5mi_146{flex-grow:0}._btn_ly5mi_146:hover{--el-ring-color: rgba(125, 135, 155, .2);--el-ring-radius: 3px}._btn_ly5mi_146:active{--el-ring-color: rgba(101, 115, 135, .3);--el-ring-radius: 3px}._btn_ly5mi_146._disabled_ly5mi_192{opacity:.5}._btn_ly5mi_146:disabled{opacity:.5;pointer-events:none}._btn_ly5mi_146:focus-visible{--el-focus-ring-radius: 1px;outline:none}._btn_ly5mi_146._secondary_ly5mi_206{--el-border-width: 1px;background-color:var(--el-bg-color);color:var(--el-text-color)}._btn_ly5mi_146._secondary_ly5mi_206:hover{--el-ring-color: rgba(135, 145, 165, .1)}._btn_ly5mi_146._secondary_ly5mi_206:active{--el-ring-color: rgba(125, 135, 155, .2)}._btn_ly5mi_146._iconBtn_ly5mi_220{height:32px}._ellipsis_ly5mi_224{overflow:hidden;text-overflow:ellipsis}._icon_ly5mi_220{margin-left:-6px;margin-right:4px;width:16px;height:16px;flex-shrink:0}._iconBtn_ly5mi_220 ._icon_ly5mi_220{margin-left:-6px;margin-right:-6px;width:12px;height:12px}._minimize_ly5mi_244{pointer-events:all;display:grid;grid-template-columns:1fr;position:relative;overflow:hidden}._open_ly5mi_54 ._minimize_ly5mi_244{grid-template-columns:0fr;align-items:center;height:36px;padding:0 18px}._openContent_ly5mi_259{position:absolute;top:7px;left:6px;opacity:0;pointer-events:none;rotate:90deg}._open_ly5mi_54 ._openContent_ly5mi_259{opacity:1;pointer-events:initial;rotate:0deg}._closedContent_ly5mi_274{min-width:0;display:flex;align-items:center;justify-content:center}._open_ly5mi_54 ._closedContent_ly5mi_274{opacity:0;pointer-events:none}._openContent_ly5mi_259,._closedContent_ly5mi_274{transition:all .2s var(--el-timing-function)}._poweredBy_ly5mi_291{pointer-events:all;color:var(--el-text-color);font-size:10px;opacity:.5;align-self:center;text-align:center}._compact_ly5mi_69 ._poweredBy_ly5mi_291,._full_ly5mi_301 ._poweredBy_ly5mi_291{margin:-8px 0 -20px}._terms_ly5mi_65{display:none;max-width:480px;font-size:14px;line-height:20px;accent-color:var(--el-btn-color)}._termsShown_ly5mi_65 ._terms_ly5mi_65{display:block}._termsFooter_ly5mi_317{display:flex;gap:8px;justify-content:end;margin-top:20px}._termsFooter_ly5mi_317 ._btn_ly5mi_146{flex-grow:0}._feedback_ly5mi_328{display:flex;align-items:center;gap:8px;z-index:1;opacity:0;translate:0 8px;transition:all .6s var(--el-timing-function);font-size:10px;text-wrap:nowrap;line-height:10px;margin:0;color:var(--el-text-color)}._feedback_ly5mi_328._show_ly5mi_344{opacity:.5;translate:0 0;pointer-events:auto}._feedback_ly5mi_328._show_ly5mi_344:hover{opacity:1}';function Dn({config:e}){let t=Nn;const n=q(()=>`:host {
  --el-bg-color: ${(e==null?void 0:e.bg_color)??"#fff"};
  --el-text-color: ${(e==null?void 0:e.text_color)??"#000"};
  --el-border-color: ${(e==null?void 0:e.border_color)??"#e1e1e1"};
  --el-border-radius: ${(e==null?void 0:e.border_radius)??"20"}px;
  --el-btn-color: ${(e==null?void 0:e.btn_color)??"#000"};
  --el-btn-text-color: ${(e==null?void 0:e.btn_text_color)??"#fff"};
  --el-btn-radius: ${(e==null?void 0:e.btn_radius)??"32"}px;
  --el-focus-color: ${(e==null?void 0:e.focus_color)??"#000"};
  --el-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}`,[e]);return h("style",{children:[n,t]})}function Bn({variant:e,["terms-key"]:t,["agent-id"]:n,["signed-url"]:o,["override-config"]:a,["avatar-image-url"]:r,["avatar-orb-color-1"]:i,["avatar-orb-color-2"]:s,["action-text"]:l,["start-call-text"]:_,["end-call-text"]:u,["expand-text"]:c,["listening-text"]:v,["speaking-text"]:p,["server-location"]:b}){const x=q(()=>Tn(b),[b]),[d,g]=F(null),[y,S]=F(null),N=q(()=>r?{type:"image",url:r}:i&&s?{type:"orb",color_1:i,color_2:s}:(d==null?void 0:d.avatar)??null,[r,i,s,d]),T=q(()=>({startCall:_??(d==null?void 0:d.start_call_text)??"Start a call",endCall:u??(d==null?void 0:d.end_call_text)??"End",action:l??(d==null?void 0:d.action_text)??"Need help?",expand:c??(d==null?void 0:d.expand_text)??"Chat with AI",listening:v??(d==null?void 0:d.listening_text)??"Listening",speaking:p??(d==null?void 0:d.speaking_text)??"Talk to interrupt"}),[l,_,u,c,v,p,d]);return P(()=>{if(a)try{const k=JSON.parse(a);if(k){g(k);return}}catch(k){console.error(`[ConversationalAI] Cannot parse override-config: ${k==null?void 0:k.message}`)}if(!n){g(null);return}const L=new AbortController;return Rn(n,x,L.signal).then(k=>{L.signal.aborted||g(k)}).catch(k=>{console.error(`[ConversationalAI] Cannot fetch config for agent ${n}: ${k==null?void 0:k.message}`),L.signal.aborted||g(null)}),()=>{L.abort()}},[n,x,a]),P(()=>{if(n){S({agentId:n,origin:x==="us"?qt:jt});return}if(o){S({signedUrl:o});return}S(null),console.error("[ConversationalAI] Either agent-id or signed-url is required")},[n,o,x]),h(U,{children:[h(Dn,{config:d}),d&&y&&N&&h(Fn,{termsKey:t,config:y,contents:T,feedbackMode:d.feedback_mode,location:x,variant:$n(e??(d==null?void 0:d.variant)),avatar:N})]})}async function Rn(e,t,n){const r=await(await fetch(`${t==="us"?rt:ot}/v1/convai/agents/${e}/widget`,{signal:n})).json();if(!r.widget_config)throw new Error("Response does not contain widget_config");return r.widget_config}Ut(Bn,"elevenlabs-convai",Pn,{shadow:!0})});
