(function(e){function t(t){for(var a,r,c=t[0],o=t[1],l=t[2],d=0,p=[];d<c.length;d++)r=c[d],i[r]&&p.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"069b":function(e,t,n){"use strict";var a=n("d8a7"),i=n.n(a);i.a},1:function(e,t){},"112d":function(e,t,n){"use strict";var a=n("4bef"),i=n.n(a);i.a},2:function(e,t){},"23b6":function(e,t,n){},2605:function(e,t,n){"use strict";var a=n("faf3"),i=n.n(a);i.a},3:function(e,t){},"33a5":function(e,t,n){},3563:function(e,t,n){},"3ce5":function(e,t,n){},4:function(e,t){},"4a9f":function(e,t,n){"use strict";var a=n("f143"),i=n.n(a);i.a},"4bef":function(e,t,n){},"4ef1":function(e,t,n){"use strict";var a=n("631f"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("Header"),n("div",{staticClass:"view"},[n("router-view")],1),n("Footer"),n("DevPanel"),n("flash-message",{staticClass:"flashMessage",attrs:{transitionIn:"animated swing"}})],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer__warning text_light"},[e._v("\n    Warning: Demonstration only. Not reviewed for public use.\n  ")]),n("a",{staticClass:"footer__source text_light",attrs:{href:"https://github.com/ildarmgt/bitcoin-web-contracts"}},[e._v("\n    < Source Code >\n  ")]),n("div",{staticClass:"footer__email text_light"},[e._v("\n    ildarmgt@gmail.com\n  ")]),n("br"),n("BitcoinLogo")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"logo noselect",attrs:{href:"https://bitcoin.org/"}},[e._v("₿")])},u=[],d={name:"BitcoinLogo"},p=d,f=(n("d099"),n("2877")),_=Object(f["a"])(p,l,u,!1,null,"57cb3800",null),h=_.exports,v={name:"Footer",components:{BitcoinLogo:h}},m=v,C=(n("4a9f"),Object(f["a"])(m,c,o,!1,null,"481b9800",null)),g=C.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"title",attrs:{to:"/"}},[n("span",{staticClass:"title__bitcoin"},[e._v("Bitcoin")]),e._v(" Smart Contracts\n")])},y=[],I={name:"Header"},S=I,w=(n("d4c0"),Object(f["a"])(S,b,y,!1,null,"97035596",null)),k=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[this.show?n("div",{staticClass:"devpanel"},[e._v("\n    Dev Panel\n    "),n("div",{staticClass:"devButton",on:{click:e.outlineClicked}},[e._v("\n      outline\n    ")])]):e._e()])},P=[],x={name:"DevPanel",data:function(){return{show:!1}},created:function(){var e=this;window.addEventListener("keydown",function(t){"`"===t.key&&(e.show=!e.show)})},methods:{outlineClicked:function(){var e="outliner",t=document.getElementById(e);if(t)t.disabled=!0,t.parentNode.removeChild(t);else{var n="* {border: 1px solid red !important;}",a=document.createElement("style");a.type="text/css",a.id="outliner",a.appendChild(document.createTextNode(n)),document.head.appendChild(a)}}}},E=x,j=(n("722c"),Object(f["a"])(E,O,P,!1,null,"6bee1586",null)),T=j.exports,q={name:"App",components:{Header:k,Footer:g,DevPanel:T}},N=q,K=(n("112d"),Object(f["a"])(N,s,r,!1,null,"61879264",null)),$=K.exports,V=n("2f62"),B=n("cebc"),H=(n("6b54"),n("59da")),D=n.n(H),F=n("c4d5"),W=n.n(F),L=function(e){var t=D.a.networks[e];return D.a.ECPair.makeRandom({network:t}).toWIF()},z=function(e){var t=e.wif,n=e.networkChoice;try{var a=D.a.networks[n];return D.a.ECPair.fromWIF(t,a),!0}catch(i){return!1}},A=function(e){var t=e.days,n=e.ownerWIF,a=e.heirWIF,i=e.networkChoice,s=D.a.networks[i],r=D.a.opcodes,c=D.a.script.number.encode,o=D.a.ECPair.fromWIF(n,s),l=D.a.ECPair.fromWIF(a,s),u=W.a.encode({seconds:512*Math.floor(24*t*60*60/512)}),d=D.a.script.compile([r.OP_IF,o.publicKey,r.OP_CHECKSIG,r.OP_ELSE,c(u),r.OP_CHECKSEQUENCEVERIFY,r.OP_DROP,l.publicKey,r.OP_CHECKSIG,r.OP_ENDIF]),p=D.a.payments.p2wsh({redeem:{output:d,network:s}}),f={contract:"inheritance timer",contractSummary:"IF <ownerPublicKey> CHECKSIG ELSE <relativeLockTime> CHECKSEQUENCEVERIFY DROP <heirPublicKey> CHECKSIG ENDIF",ownerPrivateKeyWIF:n,heirPrivateKeyWIF:a,witnessScriptHex:d.toString("hex"),witnessScriptHash:D.a.crypto.sha256(d).toString("hex"),relativeLockTime:u.toString(),currentDate:(new Date).toString(),daysAfterConfirmForUnlock:t,contractAddress:p.address};return f},R={pages:[{pageTitle:"Will Timer",valid:!1,usable:!0},{pageTitle:"Owner Key",valid:!1,usable:!0},{pageTitle:"Heir Key",valid:!1,usable:!0},{pageTitle:"Contract",valid:!0,usable:!1}],pageSelected:1,contractValues:{daysDelay:"1",ownerKey:"",heirKey:"",networkChoice:"bitcoin"}},M={getPageSelectedIC:function(e){return e.pageSelected},getContractValuesIC:function(e){return e.contractValues},getPagesInfoIC:function(e){return e.pages},getDelayIC:function(e){return e.contractValues.daysDelay}},G={initializeIC:function(e){var t=e.commit,n=e.state,a=e.dispatch;if(!n.contractValues.ownerKey||!n.contractValues.heirKey){var i=L(n.contractValues.networkChoice),s=L(n.contractValues.networkChoice);t("setContractValues",{ownerKey:i,heirKey:s}),a("updatePageStatusIC")}},updatePageStatusIC:function(e){var t=e.commit,n=e.state,a=n.contractValues.networkChoice,i=n.contractValues.daysDelay<=388,s=z({wif:n.contractValues.ownerKey,networkChoice:a}),r=z({wif:n.contractValues.heirKey,networkChoice:a});t("setPageStatus",{pageNumber:1,valid:i,usable:!0}),t("setPageStatus",{pageNumber:2,valid:s,usable:!0}),t("setPageStatus",{pageNumber:3,valid:r,usable:!0}),t("setPageStatus",i&&s&&r?{pageNumber:4,valid:!0,usable:!0}:{pageNumber:4,valid:!1,usable:!1})},changePageIC:function(e,t){var n=e.commit,a=e.state,i=a.pages[t-1];i&&i.usable&&n("setPage",t)},updateContractValuesIC:function(e,t){var n=e.commit,a=e.dispatch;n("setContractValues",t),a("updatePageStatusIC")}},Q={setPageStatus:function(e,t){var n=t.pageNumber,a=t.valid,i=t.usable;e.pages[n-1].valid=a,e.pages[n-1].usable=i},setPage:function(e,t){e.pageSelected=0,e.pageSelected=t},setContractValues:function(e,t){e.contractValues=Object(B["a"])({},e.contractValues,t)}},U={state:R,getters:M,actions:G,mutations:Q};a["a"].use(V["a"]);var Y=new V["a"].Store({modules:{inheritance:U}}),J=n("d00d"),X=n.n(J),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("\n    My Decentralized Applications (dApps):\n  ")]),n("div",{staticClass:"view"},[n("DappList")],1)])},ee=[],te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"button",attrs:{to:"/inheritance"}},[e._v("\n    Inheritance dApp\n  ")]),n("router-link",{staticClass:"button",attrs:{to:"/puzzledelay"}},[e._v("\n    Puzzle Delay dApp\n  ")])],1)},ne=[],ae={name:"DappList"},ie=ae,se=Object(f["a"])(ie,te,ne,!1,null,null,null),re=se.exports,ce={name:"IntroPage",components:{DappList:re}},oe=ce,le=Object(f["a"])(oe,Z,ee,!1,null,null,null),ue=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inheritance"},[n("InheritanceIntro"),n("InheritanceNav")],1)},pe=[],fe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inheritance__intro"},[n("h1",[e._v("Inheritance Contract dApp")]),n("div",{staticClass:"description"},[n("div",{staticClass:"contractTitle"},[e._v("\n      A digital will based on inactivity time and enforced by the Bitcoin network:\n    ")]),n("ul",[n("li",[e._v("\n        The key of party "),n("span",{staticClass:"key_blue"},[e._v('"Owner"')]),e._v(" can access the funds at any time.\n      ")]),n("li",[e._v("\n        The key of party "),n("span",{staticClass:"key_green"},[e._v('"Heir"')]),e._v(" is allowed access to the funds\n        only if the funds don't move for a specified length of time.\n      ")])]),n("span",{staticClass:"text_light example"},[e._v('\n      Example: I will spend Bitcoin using my "Owner" key, moving them at least once a year to a new contract. But if something happens to me and I don\'t move them within 1 year, my sister can spend the funds with her "Heir" key.\n    ')])])])}],he={name:"InheritanceIntro"},ve=he,me=(n("a5a5"),Object(f["a"])(ve,fe,_e,!1,null,"fa35eae4",null)),Ce=me.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inheritance_nav"},[n("SelectionButton",{attrs:{color:"rgba(255, 165, 0, 0.8)",meaning:"create",buttonText:"Create contract",meaningSelected:e.lastSelection},on:{selectionChoice:e.onButtonSelect}}),n("SelectionButton",{attrs:{color:"rgba(0, 0, 160, 0.60)",meaning:"owner",buttonText:"Spend as Owner",meaningSelected:e.lastSelection},on:{selectionChoice:e.onButtonSelect}}),n("SelectionButton",{attrs:{color:"rgba(0, 100, 0, 0.65)",meaning:"heir",buttonText:"Spend as Heir",meaningSelected:e.lastSelection},on:{selectionChoice:e.onButtonSelect}}),n("Expander",[e.isSelected("create")?n("InheritanceCreate"):e._e(),e.isSelected("owner")?n("InheritanceOwner"):e._e(),e.isSelected("heir")?n("InheritanceHeir"):e._e()],1)],1)},be=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"selectionButton",style:e.determineStyle,on:{click:e.onButtonClick}},[e._v("\n  "+e._s(e.buttonText)+"\n")])},Ie=[],Se={name:"SelectionButton",props:{color:{type:String,default:""},buttonText:{type:String,default:"OK"},meaning:{type:String,default:"OK"},meaningSelected:{type:String,default:""}},computed:{determineStyle:function(){return this.meaning===this.meaningSelected?{"background-color":"rgba(17, 17, 51, 0.65)",transform:"translateY(0.2vmin)"}:{"background-color":this.color}}},methods:{onButtonClick:function(){this.meaning===this.meaningSelected?this.$emit("selectionChoice",""):this.$emit("selectionChoice",this.meaning)}}},we=Se,ke=(n("db42"),Object(f["a"])(we,ye,Ie,!1,null,"64875a58",null)),Oe=ke.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inheritance_create"},[n("Stepper",{attrs:{stepperName:"Create Contract",pageWanted:e.getPageSelectedIC,pageInfo:e.getPagesInfoIC},on:{newPageClicked:e.stepperPageChangeRequested}},[n("StepperStep",{attrs:{pageTitle:e.getPagesInfoIC[0].pageTitle}},[n("InheritanceCreateStep1")],1),n("StepperStep",{attrs:{pageTitle:e.getPagesInfoIC[1].pageTitle}},[n("InheritanceCreateStep2")],1),n("StepperStep",{attrs:{pageTitle:e.getPagesInfoIC[2].pageTitle}},[n("InheritanceCreateStep3")],1),n("StepperStep",{attrs:{pageTitle:e.getPagesInfoIC[3].pageTitle}},[n("InheritanceCreateStep4")],1)],1)],1)},xe=[],Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("div",{staticClass:"nav__name"},[e._v("\n    "+e._s(e.stepperName)+"\n  ")]),n("div",{staticClass:"nav__view"},[e._t("default")],2),n("div",{staticClass:"nav__steps"},e._l(e.titles(),function(t,a){return n("div",{key:t,staticClass:"nav__steps__step",class:e.setNavClasses(t,a).step,on:{click:function(n){return e.stepClicked(t,a+1)}}},[n("div",{staticClass:"nav__steps__step__number noselect",class:e.setNavClasses(t,a).stepNumber},[e._v("\n        "+e._s(a+1)+"\n      ")]),n("div",{staticClass:"nav__steps__step__title noselect",class:e.setNavClasses(t,a).stepTitle},[e._v("\n        "+e._s(t)+"\n      ")])])}),0)])},je=[],Te=n("75fc"),qe=(n("c5f6"),{name:"Stepper",data:function(){return{lastSelection:"none",pageList:[]}},props:{stepperName:{type:String,default:""},pageWanted:{type:Number,default:0},pageInfo:{type:Array,default:function(){return[]}}},methods:{titles:function(){var e=this.$slots.default.reduce(function(e,t){return[].concat(Object(Te["a"])(e),[t.data.attrs.pageTitle])},[]);return this.lastSelection=this.pageWanted?e[this.pageWanted-1]:e[0],this.pageList=e,e},stepClicked:function(e,t){this.$emit("newPageClicked",t),this.lastSelection=e},setNavClasses:function(e,t){var n={step:[],stepNumber:[],stepTitle:[]};return this.pageInfo[t].valid||(n=Object(B["a"])({},n,{stepNumber:["stepNumberInvalid"],stepTitle:["stepTitleInvalid"]})),this.pageInfo[t].usable||(n=Object(B["a"])({},n,{step:["stepLocked"],stepNumber:["stepNumberLocked"],stepTitle:["stepTitleLocked"]})),this.lastSelection===e&&(n=Object(B["a"])({},n,{stepNumber:["stepNumberSelected"],stepTitle:["stepTitleSelected"]})),n}}}),Ne=qe,Ke=(n("4ef1"),Object(f["a"])(Ne,Ee,je,!1,null,"0d4a0e7a",null)),$e=Ke.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isStepSelected()?n("div",{staticClass:"StepperStep"},[e._t("default")],2):e._e()},Be=[],He={name:"StepperStep",methods:{isStepSelected:function(){var e=this.$attrs.pageTitle,t=this.$parent.lastSelection,n=e===t;return n}}},De=He,Fe=Object(f["a"])(De,Ve,Be,!1,null,"26c19205",null),We=Fe.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"question"},[n("div",{staticClass:"question__strong"},[e._v("\n      How long until inheritance can be spent by the Heir?\n    ")]),n("div",{staticClass:"question__time"},[n("input",{ref:"question__time__input",staticClass:"question__time__input",attrs:{type:"text",maxlength:"5"},domProps:{value:e.timeValue},on:{input:e.numberChanged,change:e.refreshNumber}}),n("div",{staticClass:"question__time__label"},[e._v("\n        days\n      ")])]),e._m(0),n("div",{staticClass:"arrowButton fa",on:{click:e.onNextButtonClick}},[e._v("\n      Next\n    ")])])])},ze=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question__light"},[e._v("\n      To be measured from moment funding is confirmed."),n("br"),e._v("\n         Value of up to 388 days.\n    ")])}],Ae=n("59ad"),Re=n.n(Ae),Me=(n("28a5"),{name:"InheritanceCreateStep1",data:function(){return{timeValue:"365",lastTimer:null}},mounted:function(){this.timeValue=this.getDelayIC},computed:Object(B["a"])({},Object(V["c"])(["getDelayIC"])),methods:Object(B["a"])({},Object(V["b"])(["updatePageStatusIC","changePageIC","updateContractValuesIC"]),{numberChanged:function(e){var t=this,n=e.target.value,a="0123456789.",i=n.split("").filter(function(e){return a.indexOf(e)>-1}).join(""),s=Re()(i)>388?"388":i;this.$refs.question__time__input.value=this.timeValue=s,clearTimeout(this.lastTimer),this.lastTimer=setTimeout(function(){t.refreshNumber()},3e3)},refreshNumber:function(){var e=this.timeValue;0!==Re()(e)&&!isNaN(e)&&e||(e=this.getDelayIC),e=Re()(e).toString();try{this.$refs.question__time__input.value=e}catch(t){}this.updateContractValuesIC({daysDelay:e})},onNextButtonClick:function(){this.refreshNumber(),this.changePageIC(2)}})}),Ge=Me,Qe=(n("2605"),Object(f["a"])(Ge,Le,ze,!1,null,"e3b099fe",null)),Ue=Qe.exports,Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"q"},[e._m(0),n("div",{staticClass:"q__key"},[n("textarea",{ref:"q__key__input",staticClass:"q__key__input",attrs:{rows:"1",spellcheck:"false"},domProps:{value:e.key},on:{input:e.updateKey}}),n("div",{staticClass:"q__key__btns"},[n("div",{staticClass:"q__key__btns__new",on:{click:e.newKeyRequested}},[e._v("\n          new\n        ")]),e.getPagesInfoIC[1].valid?e._e():n("div",{staticClass:"q__key__btns__warn"},[e._v("\n          invalid key\n        ")])])]),e._m(1),n("div",{staticClass:"arrowButton fa",on:{click:e.onNextButtonClick}},[e._v("\n      Next\n    ")])])])},Je=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q__strong"},[e._v("\n      What is the "),n("span",{staticClass:"owner"},[e._v("Owner")]),e._v("'s private key?\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q__light"},[e._v("\n      Generated a random key.\n      "),n("br"),e._v("   \n      Press next or provide your own in WIF format.\n      "),n("a",{staticClass:"q__light_link",attrs:{target:"_blank",href:"https://en.bitcoin.it/wiki/Wallet_import_format",title:"Bitcoin Wiki"}},[e._v("?")])])}],Xe={name:"InheritanceCreateStep2",data:function(){return{key:""}},components:{},mounted:function(){var e=this.getContractValuesIC.ownerKey;this.key=e},computed:Object(B["a"])({},Object(V["c"])(["getContractValuesIC","getPagesInfoIC"])),methods:Object(B["a"])({},Object(V["b"])(["changePageIC","updateContractValuesIC"]),{newKey:function(){return L(this.getContractValuesIC.networkChoice)},newKeyRequested:function(){var e=this.newKey();this.updateContractValuesIC({ownerKey:e}),this.key=e},onNextButtonClick:function(){this.changePageIC(3)},updateKey:function(e){var t=e.target.value,n="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",a=t.split("").filter(function(e){return n.indexOf(e)>-1}).join("");a!==t&&console.log("String had illegal chars. Old string:",t),this.updateContractValuesIC({ownerKey:a}),e.target.value=a,this.key=a}})},Ze=Xe,et=(n("d5ed"),Object(f["a"])(Ze,Ye,Je,!1,null,"07de2978",null)),tt=et.exports,nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"q"},[e._m(0),n("div",{staticClass:"q__key"},[n("textarea",{ref:"q__key__input",staticClass:"q__key__input",attrs:{rows:"1",spellcheck:"false"},domProps:{value:e.key},on:{input:e.updateKey}}),n("div",{staticClass:"q__key__btns"},[n("div",{staticClass:"q__key__btns__new",on:{click:e.newKeyRequested}},[e._v("\n          new\n        ")]),e.getPagesInfoIC[2].valid?e._e():n("div",{staticClass:"q__key__btns__warn"},[e._v("\n          invalid key\n        ")])])]),e._m(1),n("div",{staticClass:"arrowButton fa",on:{click:e.onNextButtonClick}},[e._v("\n      Next\n    ")])])])},at=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q__strong"},[e._v("\n      And what is the "),n("span",{staticClass:"heir"},[e._v("Heir")]),e._v("'s private key?\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q__light"},[e._v("\n      Generated a random key.\n      "),n("br"),e._v("   \n      Press next or provide your own in WIF format.\n      "),n("a",{staticClass:"q__light_link",attrs:{target:"_blank",href:"https://en.bitcoin.it/wiki/Wallet_import_format",title:"Bitcoin Wiki"}},[e._v("?")])])}],it={name:"InheritanceCreateStep3",data:function(){return{key:""}},components:{},mounted:function(){var e=this.getContractValuesIC.heirKey;this.key=e},computed:Object(B["a"])({},Object(V["c"])(["getContractValuesIC","getPagesInfoIC"])),methods:Object(B["a"])({},Object(V["b"])(["changePageIC","updateContractValuesIC"]),{newKey:function(){return L(this.getContractValuesIC.networkChoice)},newKeyRequested:function(){var e=this.newKey();this.updateContractValuesIC({heirKey:e}),this.key=e},onNextButtonClick:function(){this.changePageIC(4)},updateKey:function(e){var t=e.target.value,n="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",a=t.split("").filter(function(e){return n.indexOf(e)>-1}).join("");a!==t&&console.log("String had illegal chars. Old string:",t),this.updateContractValuesIC({heirKey:a}),e.target.value=a,this.key=a}})},st=it,rt=(n("e328"),Object(f["a"])(st,nt,at,!1,null,"d95bf524",null)),ct=rt.exports,ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"q"},[n("div",{staticClass:"q__lbl1"},[e._v("\n      Contract information calculated:\n    ")]),n("div",{staticClass:"q__backup"},[n("a",{ref:"backup",staticClass:"q__backup__link"},[e._v("\n        backup file\n      ")]),n("div",{staticClass:"q__backup__note1"},[e._v("\n        Important! Keep private. Lose it, lose access.\n      ")])]),n("div",{staticClass:"q__contract"},[n("div",{staticClass:"q__contract__lbl2"},[e._v("\n        Fund this address to initialize contract\n      ")]),n("img",{ref:"q__contract__qr",staticClass:"q__contract__qr"}),n("div",{staticClass:"q__contract__addy"},[e._v("\n        "+e._s(e.address)+"\n      ")])])])])},lt=[],ut=n("f499"),dt=n.n(ut),pt=n("4b99"),ft=n.n(pt),_t={name:"InheritanceCreateStep4",data:function(){return{address:""}},mounted:function(){this.redoPageContent()},updated:function(){this.redoPageContent()},computed:Object(B["a"])({},Object(V["c"])(["getContractValuesIC"])),methods:Object(B["a"])({},Object(V["b"])([]),{redoPageContent:function(){try{var e=this.calculateContract();this.updateBackup(e),this.address=e.contractAddress,this.updateQR(this.address)}catch(t){console.log("Error trying to calculate contract info:"),console.error(t),this.address="Keys provided are invalid"}},calculateContract:function(){var e=this.getContractValuesIC,t={days:e.daysDelay,ownerWIF:e.ownerKey,heirWIF:e.heirKey,networkChoice:e.networkChoice},n=A(t);return n},updateBackup:function(e){var t=e,n="text/json;charset=utf-8,"+encodeURIComponent(dt()(t,null,2)),a=this.$refs.backup;a.href="data:"+n,a.download="backup_inheritance.json"},updateQR:function(e){var t=ft.a.imageSync(e).toString("base64");this.$refs.q__contract__qr.src="data:image/png;base64,"+t}})},ht=_t,vt=(n("e1e4"),Object(f["a"])(ht,ot,lt,!1,null,"660bc647",null)),mt=vt.exports,Ct={name:"InheritanceCreate",components:{Stepper:$e,StepperStep:We,InheritanceCreateStep1:Ue,InheritanceCreateStep2:tt,InheritanceCreateStep3:ct,InheritanceCreateStep4:mt},computed:Object(B["a"])({},Object(V["c"])(["getPageSelectedIC","getPagesInfoIC"])),mounted:function(){this.initializeIC()},methods:Object(B["a"])({},Object(V["b"])(["changePageIC","initializeIC"]),{stepperPageChangeRequested:function(e){this.changePageIC(e)}})},gt=Ct,bt=Object(f["a"])(gt,Pe,xe,!1,null,"3f2d0766",null),yt=bt.exports,It=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},St=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inheritance_owner"},[n("h2",{staticClass:"blue"},[e._v("\n    Owner Access\n  ")])])}],wt={name:"InheritanceOwner"},kt=wt,Ot=(n("d599"),Object(f["a"])(kt,It,St,!1,null,"42f12490",null)),Pt=Ot.exports,xt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Et=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inheritance_heir"},[n("h2",{staticClass:"green"},[e._v("\n    Heir Access\n  ")])])}],jt={name:"InheritanceHeir"},Tt=jt,qt=(n("edda"),Object(f["a"])(Tt,xt,Et,!1,null,"3bf40db4",null)),Nt=qt.exports,Kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"animate_this",staticClass:"expander fa"},[e._t("default")],2)},$t=[],Vt={name:"Expander",data:function(){return{lastTimer:null}},mounted:function(){window.addEventListener("resize",this.autoHeight),this.animate()},beforeDestroy:function(){window.removeEventListener("resize",this.autoHeight)},updated:function(){this.animate()},methods:{animate:function(){this.$nextTick(function(){var e=this;clearTimeout(this.lastTimer);var t=.5,n=this.$refs.animate_this;n.style.height="auto";var a=n.clientHeight;n.style.transition="none",n.style.height="0px",n.style.transition=t+"s height ease-in-out",this.lastTimer=setTimeout(function(){n.style.height=a+"px"},1e3*t*.1),this.lastTimer=setTimeout(function(){e.autoHeight()},1e3*t*1.1)})},autoHeight:function(){var e=this.$refs.animate_this;e.style.height="auto"}}},Bt=Vt,Ht=(n("069b"),Object(f["a"])(Bt,Kt,$t,!1,null,null,null)),Dt=Ht.exports,Ft={name:"InheritanceNav",components:{SelectionButton:Oe,InheritanceCreate:yt,InheritanceOwner:Pt,InheritanceHeir:Nt,Expander:Dt},data:function(){return{lastSelection:""}},methods:{onButtonSelect:function(e){this.lastSelection=e},isSelected:function(e){return this.lastSelection===e},getHeight:function(){return this.$refs.inheritance_nav_view.clientHeight}}},Wt=Ft,Lt=Object(f["a"])(Wt,ge,be,!1,null,"fc1bf1c0",null),zt=Lt.exports,At={name:"Inheritance",components:{InheritanceNav:zt,InheritanceIntro:Ce}},Rt=At,Mt=(n("89fe"),Object(f["a"])(Rt,de,pe,!1,null,"25487d9c",null)),Gt=Mt.exports,Qt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  (TODO)\n")])},Ut=[],Yt={name:"PuzzleDelay"},Jt=Yt,Xt=Object(f["a"])(Jt,Qt,Ut,!1,null,null,null),Zt=Xt.exports;n.d(t,"router",function(){return en}),n("f59c"),a["a"].use(X.a),a["a"].use(i["a"]);var en=new i["a"]({routes:[{path:"/",component:ue},{path:"/inheritance",component:Gt},{path:"/puzzledelay",component:Zt}]});a["a"].config.productionTip=!1,new a["a"]({router:en,store:Y,render:function(e){return e($)}}).$mount("#app")},"631f":function(e,t,n){},"722c":function(e,t,n){"use strict";var a=n("7dd1"),i=n.n(a);i.a},"7dd1":function(e,t,n){},"84fa":function(e,t,n){},"89fe":function(e,t,n){"use strict";var a=n("33a5"),i=n.n(a);i.a},"9fbe":function(e,t,n){},a5a5:function(e,t,n){"use strict";var a=n("3563"),i=n.n(a);i.a},a66b:function(e,t,n){},a73f:function(e,t,n){},b5b7:function(e,t,n){},ccec:function(e,t,n){},d099:function(e,t,n){"use strict";var a=n("a73f"),i=n.n(a);i.a},d4c0:function(e,t,n){"use strict";var a=n("23b6"),i=n.n(a);i.a},d599:function(e,t,n){"use strict";var a=n("84fa"),i=n.n(a);i.a},d5ed:function(e,t,n){"use strict";var a=n("3ce5"),i=n.n(a);i.a},d8a7:function(e,t,n){},db42:function(e,t,n){"use strict";var a=n("9fbe"),i=n.n(a);i.a},e1e4:function(e,t,n){"use strict";var a=n("b5b7"),i=n.n(a);i.a},e328:function(e,t,n){"use strict";var a=n("a66b"),i=n.n(a);i.a},edda:function(e,t,n){"use strict";var a=n("ccec"),i=n.n(a);i.a},f143:function(e,t,n){},faf3:function(e,t,n){}});
//# sourceMappingURL=app.7cdefc26.js.map