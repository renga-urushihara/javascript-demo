(function(t){function e(e){for(var r,a,u=e[0],p=e[1],c=e[2],d=0,l=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);s&&s(e);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var p=n[u];0!==o[p]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/javascript-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=p;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0284":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("h3",[t._v('"input"')]),n("input",{on:{input:t.onInput}}),n("p",[t._v("text: "+t._s(this.text))]),n("p",[t._v("trackedText: "+t._s(this.trackedText))]),n("p",[t._v(t._s(this.debug)+" ")])])])},i=[],a={UNCONVERTED_STATE:"insertCompositionText",CONVERETED_STATE:"insertFromComposition",DELETE_UNCONVERTED:"deleteCompositionText",DELETE_CONVERTED:"deleteContentBackward"},u={name:"App",data:function(){return{text:"",trackedText:"",debug:{}}},methods:{onInput:function(t){try{switch(t.inputType){case a.UNCONVERTED_STATE:t.data&&(this.text=t.data);break;case a.CONVERETED_STATE:this.debug=t.data+" "+t.inputType+" "+this.text,this.trackedText=this.text;break;case a.DELETE_UNCONVERTED:this.text=t.data;break;case a.DELETE_CONVERTED:this.text=t.data;break;default:this.text=t.inputType}}catch(e){this.text="error"}}}},p=u,c=(n("b14d"),n("2877")),s=Object(c["a"])(p,o,i,!1,null,"52a28240",null),d=s.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(d)}}).$mount("#app")},b14d:function(t,e,n){"use strict";var r=n("0284"),o=n.n(r);o.a}});
//# sourceMappingURL=app.b7a5cd7a.js.map