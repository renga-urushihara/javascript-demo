(function(t){function e(e){for(var a,i,u=e[0],p=e[1],c=e[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(t[a]=p[a]);s&&s(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,u=1;u<n.length;u++){var p=n[u];0!==r[p]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/javascript-demo/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=p;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("h3",[t._v('"input"')]),n("input",{attrs:{id:"hoge"},on:{input:t.onInput}}),n("p",[t._v("type: "+t._s(this.type))]),n("p",[t._v("count "+t._s(t.change))]),n("p",[t._v("datas: "+t._s(t.datas))]),t._v(" f: "+t._s(t.data)+" ")])])},o=[],i=(n("4de4"),n("2ca0"),n("84b1")),u=n.n(i),p={UNCONVERTED_STATE:"insertCompositionText",CONVERTED_STATE:"insertFromComposition",DELETE_UNCONVERTED:"deleteCompositionText",DELETE_CONVERTED:"deleteContentBackward"},c={name:"App",data:function(){return{type:"",change:0,data:"",datas:[]}},mounted:function(){l()},methods:{onInput:function(t){switch(t.inputType){case p.UNCONVERTED_STATE:this.datas.push(t.data);break;case p.CONVERTED_STATE:var e=this.datas.pop();alert(e),this.data=t.data;break;case p.DELETE_UNCONVERTED:this.datas.pop();break;case p.DELETE_CONVERTED:this.datas.pop();break}this.data=t.data,this.type=t.inputType}},watch:{text:{deep:!0,handler:function(){this.change=this.change+1}}}},s=[{label:"United Kingdom",value:"UK"},{label:"United States",value:"US"}];function l(){var t=document.getElementById("hoge"),e=new InputEvent("input",{bubbles:!0,cancelable:!0});u()({input:t,fetch:function(t,e){t=t.toLowerCase();var n=s.filter((function(e){return e.label.toLowerCase().startsWith(t)}));e(n)},onSelect:function(n){t.value=n.label,t.dispatchEvent(e),t.blur()}})}var d=c,f=(n("b3b6"),n("2877")),h=Object(f["a"])(d,r,o,!1,null,"da455a82",null),b=h.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)}}).$mount("#app")},8589:function(t,e,n){},b3b6:function(t,e,n){"use strict";var a=n("8589"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a4338c23.js.map