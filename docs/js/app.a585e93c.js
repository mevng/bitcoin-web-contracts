(function(t){function e(e){for(var i,c,s=e[0],o=e[1],l=e[2],f=0,d=[];f<s.length;f++)c=s[f],a[c]&&d.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"23b6":function(t,e,n){},"33a5":function(t,e,n){},3563:function(t,e,n){},"3a8a":function(t,e,n){},"524a":function(t,e,n){"use strict";var i=n("3a8a"),a=n.n(i);a.a},"56ce":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("8c4f"),r=n("2f62");i["a"].use(r["a"]);var c=new r["a"].Store({modules:{}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Header"),n("div",{staticClass:"view"},[n("router-view")],1),n("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__warning text_light"},[t._v("\n    Warning: Demonstration only. Not reviewed for public use.\n  ")]),n("a",{staticClass:"footer__source text_light",attrs:{href:"https://github.com/ildarmgt/bitcoin-web-contracts"}},[t._v("\n    < Source Code >\n  ")]),n("div",{staticClass:"footer__email text_light"},[t._v("\n    ildarmgt@gmail.com\n  ")]),n("br"),n("BitcoinLogo")],1)},u=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"logo noselect",attrs:{href:"https://bitcoin.org/"}},[t._v("₿")])},d=[],h={name:"BitcoinLogo"},v=h,p=(n("d099"),n("2877")),m=Object(p["a"])(v,f,d,!1,null,"57cb3800",null),_=m.exports,g={name:"Footer",components:{BitcoinLogo:_}},b=g,y=(n("5d37"),Object(p["a"])(b,l,u,!1,null,"7fe8a5d5",null)),w=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"title",attrs:{to:"/"}},[n("span",{staticClass:"title__bitcoin"},[t._v("Bitcoin")]),t._v(" Smart Contracts\n")])},S=[],x={name:"Header"},O=x,$=(n("d4c0"),Object(p["a"])(O,C,S,!1,null,"97035596",null)),E=$.exports,I={name:"App",components:{Header:E,Footer:w}},j=I,k=(n("034f"),Object(p["a"])(j,s,o,!1,null,null,null)),B=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    My Decentralized Applications (dApps):\n  ")]),n("div",{staticClass:"view"},[n("DappList")],1)])},z=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"button",attrs:{to:"/inheritance"}},[t._v("\n    Inheritance dApp\n  ")]),n("router-link",{staticClass:"button",attrs:{to:"/puzzledelay"}},[t._v("\n    Puzzle Delay dApp\n  ")])],1)},P=[],A={name:"DappList"},D=A,L=Object(p["a"])(D,H,P,!1,null,null,null),M=L.exports,N={name:"IntroPage",components:{DappList:M}},F=N,K=Object(p["a"])(F,T,z,!1,null,null,null),R=K.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance"},[n("InheritanceIntro"),n("InheritanceNav")],1)},J=[],W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance__intro"},[n("h1",[t._v("Inheritance Contract dApp")]),n("div",{staticClass:"description"},[n("div",{staticClass:"contractTitle"},[t._v("\n      A digital will based on inactivity time and enforced by the Bitcoin network:\n    ")]),n("ul",[n("li",[t._v("\n        The key of party "),n("span",{staticClass:"key_blue"},[t._v('"Owner"')]),t._v(" can access the funds at any time.\n      ")]),n("li",[t._v("\n        The key of party "),n("span",{staticClass:"key_green"},[t._v('"Heir"')]),t._v(" is allowed access to the funds\n        only if the funds don't move for a specified length of time.\n      ")])]),n("span",{staticClass:"text_light example"},[t._v('\n      Example: I will spend Bitcoin using my "Owner" key, moving them at least once a year to a new contract. But if something happens to me and I don\'t move them within 1 year, my sister can spend the funds with her "Heir" key.\n    ')])])])}],Y={name:"InheritanceIntro"},q=Y,Q=(n("a5a5"),Object(p["a"])(q,W,U,!1,null,"fa35eae4",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_nav"},[n("SelectionButton",{attrs:{color:"rgba(255, 165, 0, 0.8)",meaning:"create",buttonText:"Create this contract",meaningSelected:t.lastSelection},on:{selectionChoice:t.onButtonSelect}}),n("SelectionButton",{attrs:{color:"rgba(0, 0, 160, 0.60)",meaning:"owner",buttonText:"Spend as Owner",meaningSelected:t.lastSelection},on:{selectionChoice:t.onButtonSelect}}),n("SelectionButton",{attrs:{color:"rgba(0, 100, 0, 0.65)",meaning:"heir",buttonText:"Spend as Heir",meaningSelected:t.lastSelection},on:{selectionChoice:t.onButtonSelect}}),n("Expand",[t.isSelected("create")?n("InheritanceCreate"):t._e(),t.isSelected("owner")?n("InheritanceOwner"):t._e(),t.isSelected("heir")?n("InheritanceHeir"):t._e()],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button",style:t.determineStyle,on:{click:t.onButtonClick}},[t._v("\n  "+t._s(t.buttonText)+"\n")])},et=[],nt={name:"SelectionButton",props:{color:{type:String,default:""},buttonText:{type:String,default:"OK"},meaning:{type:String,default:"OK"},meaningSelected:{type:String,default:""}},computed:{determineStyle:function(){return this.meaning===this.meaningSelected?{"background-color":"rgba(17, 17, 51, 0.65)",transform:"translateY(0.2vmin)"}:{"background-color":this.color}}},methods:{onButtonClick:function(){this.meaning===this.meaningSelected?this.$emit("selectionChoice",""):this.$emit("selectionChoice",this.meaning)}}},it=nt,at=Object(p["a"])(it,tt,et,!1,null,"cc72105a",null),rt=at.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_create"},[n("h2",{staticClass:"orange"},[t._v("\n    Generate Contract\n  ")]),n("div",{staticClass:"inheritance_create_content"},[n("div",{staticClass:"step"},[n("div",{staticClass:"step_title"},[t._v("\n        Step 1\n      ")]),n("div",{staticClass:"step_info"},[t._v("\n        Owner Private Key (WIF):\n      ")])]),n("div",{staticClass:"button"},[t._v("\n      Generate New\n    ")]),t._v("\n    or\n    "),n("div",{staticClass:"button"},[t._v("\n      Use Known\n    ")])])])}],ot={name:"InheritanceCreate"},lt=ot,ut=(n("710a"),Object(p["a"])(lt,ct,st,!1,null,"0d13ef1c",null)),ft=ut.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_owner"},[n("h2",{staticClass:"blue"},[t._v("\n    Owner Access\n  ")])])}],vt={name:"InheritanceOwner"},pt=vt,mt=(n("d599"),Object(p["a"])(pt,dt,ht,!1,null,"42f12490",null)),_t=mt.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_heir"},[n("h2",{staticClass:"green"},[t._v("\n    Heir Access\n  ")])])}],yt={name:"InheritanceHeir"},wt=yt,Ct=(n("edda"),Object(p["a"])(wt,gt,bt,!1,null,"3bf40db4",null)),St=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"animate_this",staticClass:"expander"},[t._t("default")],2)},Ot=[],$t={name:"Expand",data:function(){return{lastTimer:null}},mounted:function(){window.addEventListener("resize",this.windowResize),this.animate()},beforeDestroy:function(){window.removeEventListener("resize",this.windowResize)},updated:function(){this.animate()},methods:{animate:function(){this.$nextTick(function(){clearTimeout(this.lastTimer);var t=.5,e=this.$refs.animate_this;e.style.height="auto";var n=e.clientHeight;e.style.transition="none",e.style.height="0px",e.style.transition=t+"s height ease-in-out",this.lastTimer=setTimeout(function(){e.style.height=n+"px"},100*t)})},windowResize:function(){var t=this.$refs.animate_this;t.style.height="auto"}}},Et=$t,It=(n("524a"),Object(p["a"])(Et,xt,Ot,!1,null,"3b7ccc22",null)),jt=It.exports,kt={name:"InheritanceNav",components:{SelectionButton:rt,InheritanceCreate:ft,InheritanceOwner:_t,InheritanceHeir:St,Expand:jt},data:function(){return{lastSelection:""}},methods:{onButtonSelect:function(t){this.lastSelection=t},isSelected:function(t){return this.lastSelection===t},getHeight:function(){return this.$refs.inheritance_nav_view.clientHeight}}},Bt=kt,Tt=Object(p["a"])(Bt,X,Z,!1,null,"a4a54aae",null),zt=Tt.exports,Ht={name:"Inheritance",components:{InheritanceNav:zt,InheritanceIntro:V}},Pt=Ht,At=(n("89fe"),Object(p["a"])(Pt,G,J,!1,null,"25487d9c",null)),Dt=At.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  (TODO)\n")])},Mt=[],Nt={name:"PuzzleDelay"},Ft=Nt,Kt=Object(p["a"])(Ft,Lt,Mt,!1,null,null,null),Rt=Kt.exports;n.d(e,"router",function(){return Gt}),i["a"].use(a["a"]);var Gt=new a["a"]({routes:[{path:"/",component:R},{path:"/inheritance",component:Dt},{path:"/puzzledelay",component:Rt}]});i["a"].config.productionTip=!1,new i["a"]({router:Gt,store:c,render:function(t){return t(B)}}).$mount("#app")},"5d37":function(t,e,n){"use strict";var i=n("56ce"),a=n.n(i);a.a},"64a9":function(t,e,n){},"710a":function(t,e,n){"use strict";var i=n("87cd"),a=n.n(i);a.a},"84fa":function(t,e,n){},"87cd":function(t,e,n){},"89fe":function(t,e,n){"use strict";var i=n("33a5"),a=n.n(i);a.a},a5a5:function(t,e,n){"use strict";var i=n("3563"),a=n.n(i);a.a},a73f:function(t,e,n){},ccec:function(t,e,n){},d099:function(t,e,n){"use strict";var i=n("a73f"),a=n.n(i);a.a},d4c0:function(t,e,n){"use strict";var i=n("23b6"),a=n.n(i);a.a},d599:function(t,e,n){"use strict";var i=n("84fa"),a=n.n(i);a.a},edda:function(t,e,n){"use strict";var i=n("ccec"),a=n.n(i);a.a}});
//# sourceMappingURL=app.a585e93c.js.map