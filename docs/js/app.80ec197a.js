(function(t){function e(e){for(var i,s,c=e[0],o=e[1],l=e[2],f=0,d=[];f<c.length;f++)s=c[f],a[s]&&d.push(a[s][0]),a[s]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"23b6":function(t,e,n){},"33a5":function(t,e,n){},3563:function(t,e,n){},"35af":function(t,e,n){},"48ea":function(t,e,n){},"56ce":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("8c4f"),r=n("2f62");i["a"].use(r["a"]);var s=new r["a"].Store({modules:{}}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Header"),n("div",{staticClass:"view"},[n("router-view")],1),n("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__warning text_light"},[t._v("\n    Warning: Demonstration only. Not reviewed for public use.\n  ")]),n("a",{staticClass:"footer__source text_light",attrs:{href:"https://github.com/ildarmgt/bitcoin-web-contracts"}},[t._v("\n    < Source Code >\n  ")]),n("div",{staticClass:"footer__email text_light"},[t._v("\n    ildarmgt@gmail.com\n  ")]),n("br"),n("BitcoinLogo")],1)},u=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"logo noselect",attrs:{href:"https://bitcoin.org/"}},[t._v("₿")])},d=[],p={name:"BitcoinLogo"},v=p,h=(n("d099"),n("2877")),_=Object(h["a"])(v,f,d,!1,null,"57cb3800",null),m=_.exports,b={name:"Footer",components:{BitcoinLogo:m}},g=b,S=(n("5d37"),Object(h["a"])(g,l,u,!1,null,"7fe8a5d5",null)),y=S.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"title",attrs:{to:"/"}},[n("span",{staticClass:"title__bitcoin"},[t._v("Bitcoin")]),t._v(" Smart Contracts\n")])},w=[],x={name:"Header"},O=x,$=(n("d4c0"),Object(h["a"])(O,C,w,!1,null,"97035596",null)),E=$.exports,j={name:"App",components:{Header:E,Footer:y}},I=j,k=(n("034f"),Object(h["a"])(I,c,o,!1,null,null,null)),B=k.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    My Decentralized Applications (dApps):\n  ")]),n("div",{staticClass:"view"},[n("DappList")],1)])},z=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"button",attrs:{to:"/inheritance"}},[t._v("\n    Inheritance dApp\n  ")]),n("router-link",{staticClass:"button",attrs:{to:"/puzzledelay"}},[t._v("\n    Puzzle Delay dApp\n  ")])],1)},P=[],A={name:"DappList"},D=A,L=Object(h["a"])(D,H,P,!1,null,null,null),K=L.exports,M={name:"IntroPage",components:{DappList:K}},N=M,F=Object(h["a"])(N,T,z,!1,null,null,null),R=F.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance"},[n("InheritanceIntro"),n("InheritanceNav")],1)},J=[],W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance__intro"},[n("h1",[t._v("Inheritance Contract dApp")]),n("div",{staticClass:"description"},[n("div",{staticClass:"contractTitle"},[t._v("\n      A digital will based on inactivity time and enforced by the Bitcoin network:\n    ")]),n("ul",[n("li",[t._v("\n        The key of party "),n("span",{staticClass:"key_blue"},[t._v('"Owner"')]),t._v(" can access the funds at any time.\n      ")]),n("li",[t._v("\n        The key of party "),n("span",{staticClass:"key_green"},[t._v('"Heir"')]),t._v(" is allowed access to the funds\n        only if the funds don't move for a specified length of time.\n      ")])]),n("span",{staticClass:"text_light example"},[t._v('\n      Example: I will spend Bitcoin using my "Owner" key, moving them at least once a year to a new contract. But if something happens to me and I don\'t move them within 1 year, my sister can spend the funds with her "Heir" key.\n    ')])])])}],Y={name:"InheritanceIntro"},q=Y,Q=(n("a5a5"),Object(h["a"])(q,W,U,!1,null,"fa35eae4",null)),V=Q.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_nav"},[n("SelectionButton",{attrs:{color:"rgba(255, 165, 0, 0.8)",meaning:"create",buttonText:"Create this contract",meaningSelected:t.lastSelection},on:{selectionChoice:t.onButtonSelect}}),n("SelectionButton",{attrs:{color:"rgba(0, 0, 160, 0.60)",meaning:"owner",buttonText:"Spend as Owner",meaningSelected:t.lastSelection},on:{selectionChoice:t.onButtonSelect}}),n("SelectionButton",{attrs:{color:"rgba(0, 100, 0, 0.65)",meaning:"heir",buttonText:"Spend as Heir",meaningSelected:t.lastSelection},on:{selectionChoice:t.onButtonSelect}}),n("Expander",[t.isSelected("create")?n("InheritanceCreate"):t._e(),t.isSelected("owner")?n("InheritanceOwner"):t._e(),t.isSelected("heir")?n("InheritanceHeir"):t._e()],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button",style:t.determineStyle,on:{click:t.onButtonClick}},[t._v("\n  "+t._s(t.buttonText)+"\n")])},et=[],nt={name:"SelectionButton",props:{color:{type:String,default:""},buttonText:{type:String,default:"OK"},meaning:{type:String,default:"OK"},meaningSelected:{type:String,default:""}},computed:{determineStyle:function(){return this.meaning===this.meaningSelected?{"background-color":"rgba(17, 17, 51, 0.65)",transform:"translateY(0.2vmin)"}:{"background-color":this.color}}},methods:{onButtonClick:function(){this.meaning===this.meaningSelected?this.$emit("selectionChoice",""):this.$emit("selectionChoice",this.meaning)}}},it=nt,at=Object(h["a"])(it,tt,et,!1,null,"cc72105a",null),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_create"},[n("Stepper",{attrs:{name:"Generate Contract"}},[n("StepperStep",{attrs:{title:"Owner Key"}},[t._v("\n      Step 1 content\n    ")]),n("StepperStep",{attrs:{title:"Heir Key"}},[t._v("\n      Step 2 content\n    ")]),n("StepperStep",{attrs:{title:"Back up"}},[t._v("\n      Step 3 content\n    ")])],1),t._m(0)],1)},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_create_content"},[n("div",{staticClass:"step"},[n("div",{staticClass:"step_title"},[t._v("\n        Step 1\n      ")]),n("div",{staticClass:"step_info"},[t._v("\n        Owner Private Key (WIF):\n      ")])]),n("div",{staticClass:"button"},[t._v("\n      Generate New\n    ")]),t._v("\n    or\n    "),n("div",{staticClass:"button"},[t._v("\n      Use Known\n    ")])])}],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__name"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._t("default"),n("div",{staticClass:"nav__steps"},t._l(t.titles(),function(e,i){return n("div",{key:e,staticClass:"nav__steps__step"},[n("div",{staticClass:"nav__steps__step__number"},[t._v("\n          "+t._s(i+1)+"\n        ")]),n("div",{staticClass:"nav__steps__step__title"},[t._v("\n          "+t._s(e)+"\n        ")])])}),0)],2)])},lt=[],ut=n("75fc"),ft={name:"Stepper",props:["name"],methods:{titles:function(){console.log(this.$slots);var t=this.$slots.default.reduce(function(t,e){return[].concat(Object(ut["a"])(t),[e.data.attrs.title])},[]);return t}}},dt=ft,pt=(n("dd84"),Object(h["a"])(dt,ot,lt,!1,null,"79c3270c",null)),vt=pt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},_t=[],mt={name:"StepperStep"},bt=mt,gt=Object(h["a"])(bt,ht,_t,!1,null,"155d324c",null),St=gt.exports,yt={name:"InheritanceCreate",components:{Stepper:vt,StepperStep:St}},Ct=yt,wt=(n("622c"),Object(h["a"])(Ct,st,ct,!1,null,"e215eb80",null)),xt=wt.exports,Ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_owner"},[n("h2",{staticClass:"blue"},[t._v("\n    Owner Access\n  ")])])}],Et={name:"InheritanceOwner"},jt=Et,It=(n("d599"),Object(h["a"])(jt,Ot,$t,!1,null,"42f12490",null)),kt=It.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inheritance_heir"},[n("h2",{staticClass:"green"},[t._v("\n    Heir Access\n  ")])])}],zt={name:"InheritanceHeir"},Ht=zt,Pt=(n("edda"),Object(h["a"])(Ht,Bt,Tt,!1,null,"3bf40db4",null)),At=Pt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"animate_this",staticClass:"expander"},[t._t("default")],2)},Lt=[],Kt={name:"Expander",data:function(){return{lastTimer:null}},mounted:function(){window.addEventListener("resize",this.windowResize),this.animate()},beforeDestroy:function(){window.removeEventListener("resize",this.windowResize)},updated:function(){this.animate()},methods:{animate:function(){this.$nextTick(function(){clearTimeout(this.lastTimer);var t=.5,e=this.$refs.animate_this;e.style.height="auto";var n=e.clientHeight;e.style.transition="none",e.style.height="0px",e.style.transition=t+"s height ease-in-out",this.lastTimer=setTimeout(function(){e.style.height=n+"px"},100*t)})},windowResize:function(){var t=this.$refs.animate_this;t.style.height="auto"}}},Mt=Kt,Nt=(n("96dd"),Object(h["a"])(Mt,Dt,Lt,!1,null,"fcf9b2ee",null)),Ft=Nt.exports,Rt={name:"InheritanceNav",components:{SelectionButton:rt,InheritanceCreate:xt,InheritanceOwner:kt,InheritanceHeir:At,Expander:Ft},data:function(){return{lastSelection:""}},methods:{onButtonSelect:function(t){this.lastSelection=t},isSelected:function(t){return this.lastSelection===t},getHeight:function(){return this.$refs.inheritance_nav_view.clientHeight}}},Gt=Rt,Jt=Object(h["a"])(Gt,X,Z,!1,null,"742e1ce8",null),Wt=Jt.exports,Ut={name:"Inheritance",components:{InheritanceNav:Wt,InheritanceIntro:V}},Yt=Ut,qt=(n("89fe"),Object(h["a"])(Yt,G,J,!1,null,"25487d9c",null)),Qt=qt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  (TODO)\n")])},Xt=[],Zt={name:"PuzzleDelay"},te=Zt,ee=Object(h["a"])(te,Vt,Xt,!1,null,null,null),ne=ee.exports;n.d(e,"router",function(){return ie}),i["a"].use(a["a"]);var ie=new a["a"]({routes:[{path:"/",component:R},{path:"/inheritance",component:Qt},{path:"/puzzledelay",component:ne}]});i["a"].config.productionTip=!1,new i["a"]({router:ie,store:s,render:function(t){return t(B)}}).$mount("#app")},"5d37":function(t,e,n){"use strict";var i=n("56ce"),a=n.n(i);a.a},"622c":function(t,e,n){"use strict";var i=n("35af"),a=n.n(i);a.a},"64a9":function(t,e,n){},"84fa":function(t,e,n){},"89fe":function(t,e,n){"use strict";var i=n("33a5"),a=n.n(i);a.a},"96dd":function(t,e,n){"use strict";var i=n("c898"),a=n.n(i);a.a},a5a5:function(t,e,n){"use strict";var i=n("3563"),a=n.n(i);a.a},a73f:function(t,e,n){},c898:function(t,e,n){},ccec:function(t,e,n){},d099:function(t,e,n){"use strict";var i=n("a73f"),a=n.n(i);a.a},d4c0:function(t,e,n){"use strict";var i=n("23b6"),a=n.n(i);a.a},d599:function(t,e,n){"use strict";var i=n("84fa"),a=n.n(i);a.a},dd84:function(t,e,n){"use strict";var i=n("48ea"),a=n.n(i);a.a},edda:function(t,e,n){"use strict";var i=n("ccec"),a=n.n(i);a.a}});
//# sourceMappingURL=app.80ec197a.js.map