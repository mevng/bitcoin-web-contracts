(function(t){function e(e){for(var r,i,l=e[0],u=e[1],s=e[2],p=0,f=[];p<l.length;p++)i=l[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("8c4f"),o=n("2f62");r["a"].use(o["a"]);var i=new o["a"].Store({modules:{}}),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("router-link",{staticClass:"title",attrs:{to:"/"}},[n("span",{staticClass:"gold"},[t._v("Bitcoin")]),t._v(" Smart Contracts\n  ")]),n("div",{staticClass:"view"},[n("router-view")],1),n("div",{staticClass:"warning"},[t._v("\n    Warning: Demonstration only. Not reviewed for public use.\n  ")]),n("div",{staticClass:"footer"},[n("a",{staticClass:"clean",attrs:{href:"https://github.com/ildarmgt/bitcoin-web-contracts"}},[t._v("\n      "+t._s("< ")+"Source Code"+t._s(" >")+"\n    ")]),n("div",{staticClass:"clean"},[t._v("ildarmgt@gmail.com")])])],1)},u=[],s={name:"App"},c=s,p=(n("9b2a"),n("2877")),f=Object(p["a"])(c,l,u,!1,null,"6f5ba77a",null),v=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    Decentralized Applications (dApps):\n  ")]),n("div",{staticClass:"view"},[n("DappList")],1)])},b=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"button",attrs:{to:"/inheritance"}},[t._v("Inheritance dApp")]),n("router-link",{staticClass:"button",attrs:{to:"/puzzledelay"}},[t._v("Puzzle Delay dApp")])],1)},h=[],m={name:"DappList"},y=m,g=Object(p["a"])(y,_,h,!1,null,null,null),w=g.exports,O={name:"IntroPage",components:{DappList:w}},j=O,C=Object(p["a"])(j,d,b,!1,null,null,null),x=C.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Inheritance_Intro.vue\n\n")])},P=[],D={name:"Inheritance_Intro"},I=D,S=Object(p["a"])(I,z,P,!1,null,null,null),k=S.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  PuzzleDelay_Intro.vue\n\n")])},A=[],E={name:"PuzzleDelay_Intro"},M=E,L=Object(p["a"])(M,$,A,!1,null,null,null),T=L.exports;n.d(e,"router",function(){return J}),r["a"].use(a["a"]);var J=new a["a"]({routes:[{path:"/",component:x},{path:"/inheritance",component:k},{path:"/puzzledelay",component:T}]});r["a"].config.productionTip=!1,new r["a"]({router:J,store:i,render:function(t){return t(v)}}).$mount("#app")},"88a8":function(t,e,n){},"9b2a":function(t,e,n){"use strict";var r=n("88a8"),a=n.n(r);a.a}});
//# sourceMappingURL=app.7797b5d3.js.map