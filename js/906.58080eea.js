"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[906],{7934:function(t,e,r){r.r(e),r.d(e,{default:function(){return W}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"share mt-1"},[e("b-button-group",[t.stacUrl?e("b-button",{attrs:{size:"sm",variant:"outline-primary",id:"popover-link",title:"Details about the STAC source"}},[e("b-icon-link"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Source")])],1):t._e(),e("b-button",{attrs:{size:"sm",variant:"outline-primary",id:"popover-share",title:"Share this page with others"}},[e("b-icon-share"),t._v(" "),e("span",{staticClass:"button-label"},[t._v("Share")])],1)],1),t.stacUrl?e("b-popover",{attrs:{target:"popover-link",triggers:"click blur",placement:"bottom",container:"stac-browser",title:"Source Data"},on:{show:t.validate}},[t.stacVersion?[e("b-row",[e("b-col",{attrs:{cols:"2"}},[t._v("STAC Version:")]),e("b-col",[t._v(t._s(t.stacVersion))])],1),t.canValidate?e("b-row",[e("b-col",{attrs:{cols:"2"}},[t._v("Valid:")]),e("b-col",[null===t.valid?e("b-spinner",{attrs:{label:"Validating...",small:""}}):!0===t.valid?[t._v("✔️")]:!1===t.valid?[t._v("❌")]:[t._v("n/a")]],2)],1):t._e(),e("hr")]:t._e(),e("Url",{attrs:{id:"stacUrl",url:t.stacUrl,label:"The STAC metdata file is located at:"}})],2):t._e(),e("b-popover",{attrs:{target:"popover-share",triggers:"click blur",placement:"bottom",container:"stac-browser",title:"Share"}},[e("Url",{attrs:{id:"browserUrl",url:t.browserUrl(),label:"Share the URL of this page anywhere you like:",open:!1}}),e("hr"),e("b-button",{staticClass:"twitter mr-1",attrs:{href:t.twitterUrl}},[e("b-icon-twitter"),t._v(" Twitter")],1),e("b-button",{attrs:{variant:"dark",href:t.mailTo}},[e("b-icon-envelope"),t._v(" Mail")],1)],1)],1)},a=[],i=r(8019),o=r(7450),l=r(629),s=function(){var t=this,e=t._self._c;return e("b-form-group",{attrs:{label:t.label,"label-for":t.id}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{ref:"input",attrs:{id:t.id,value:t.url,readonly:""}}),e("b-input-group-append",[e("CopyButton",{attrs:{copyText:t.url,variant:"primary"}}),t.open?e("b-button",{attrs:{href:t.url,target:"_blank",variant:"primary",title:"Open"}},[e("b-icon-arrow-up-right-square")],1):t._e()],1)],1)],1)},p=[],c=r(6449),u=r(7353),b=r(1915),d=r(9558),f=r(4689),v=r(2299),h=r(494),g=r(8735),y=r(2345),m=r(451),w=r(7040),O=(0,m.y2)({tag:(0,m.pi)(v.N0,"div")},f.HQ),P=(0,b.l7)({name:f.HQ,functional:!0,props:O,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.tag,(0,d.b)(n,{staticClass:"input-group-text"}),a)}}),_=(0,m.y2)({append:(0,m.pi)(v.U5,!1),id:(0,m.pi)(v.N0),isText:(0,m.pi)(v.U5,!1),tag:(0,m.pi)(v.N0,"div")},f.gb),j=(0,b.l7)({name:f.gb,functional:!0,props:_,render:function(t,e){var r=e.props,n=e.data,a=e.children,i=r.append;return t(r.tag,(0,d.b)(n,{class:{"input-group-append":i,"input-group-prepend":!i},attrs:{id:r.id}}),r.isText?[t(P,a)]:a)}});function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=(0,m.y2)((0,w.CE)(_,["append"]),f.Il),C=(0,b.l7)({name:f.Il,functional:!0,props:B,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(j,(0,d.b)(n,{props:S(S({},r),{},{append:!0})}),a)}});function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){D(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function D(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x=(0,m.y2)((0,w.CE)(_,["append"]),f.iG),E=(0,b.l7)({name:f.iG,functional:!0,props:x,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(j,(0,d.b)(n,{props:I(I({},r),{},{append:!1})}),a)}});function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var q=(0,m.y2)({append:(0,m.pi)(v.N0),appendHtml:(0,m.pi)(v.N0),id:(0,m.pi)(v.N0),prepend:(0,m.pi)(v.N0),prependHtml:(0,m.pi)(v.N0),size:(0,m.pi)(v.N0),tag:(0,m.pi)(v.N0,"div")},f.aZ),A=(0,b.l7)({name:f.aZ,functional:!0,props:q,render:function(t,e){var r=e.props,n=e.data,a=e.slots,i=e.scopedSlots,o=r.prepend,l=r.prependHtml,s=r.append,p=r.appendHtml,c=r.size,u=i||{},b=a(),f={},v=t(),m=(0,y.Q)(h.kg,u,b);(m||o||l)&&(v=t(E,[m?(0,y.O)(h.kg,f,u,b):t(P,{domProps:(0,g.U)(l,o)})]));var w=t(),O=(0,y.Q)(h.G$,u,b);return(O||s||p)&&(w=t(C,[O?(0,y.O)(h.G$,f,u,b):t(P,{domProps:(0,g.U)(p,s)})])),t(r.tag,(0,d.b)(n,{staticClass:"input-group",class:N({},"input-group-".concat(c),c),attrs:{id:r.id||null,role:"group"}}),[v,(0,y.O)(h.Pq,f,u,b),w])}}),V={name:"Share",components:{BFormGroup:c.x,BFormInput:u.e,BIconArrowUpRightSquare:i.k$g,BInputGroup:A,BInputGroupAppend:C,CopyButton:()=>r.e(81).then(r.bind(r,9081))},props:{id:{type:String,required:!0},url:{type:String,required:!0},label:{type:String,required:!0},open:{type:Boolean,default:!0}}},$=V,M=r(1001),z=(0,M.Z)($,s,p,!1,null,"61cdb222",null),G=z.exports,Z=r(4998),H=r.n(Z),Q=r(9879),R={name:"Share",components:{BIconEnvelope:i.AzZ,BIconLink:i.ZV1,BIconShare:i.Rq4,BIconTwitter:i.A82,BPopover:o.x,Url:G},props:{title:{type:String,required:!0},stacUrl:{type:String,default:null},stacVersion:{type:String,default:null}},computed:{...(0,l.rn)(["privateQueryParameters","stacLint","stacProxyUrl","valid"]),canValidate(){if(!this.stacLint||"string"!==typeof this.stacUrl)return!1;if(Q.ZP.size(this.privateQueryParameters)>0)return!1;if(Array.isArray(this.stacProxyUrl))return!1;let t=new(H())(this.stacUrl),e=t.hostname().toLowerCase();return"localhost"!==e&&!e.startsWith("127.")&&"::1"!==e},message(){return`${this.title} is available at ${this.browserUrl()}`},twitterUrl(){let t=encodeURIComponent(this.message);return`https://twitter.com/intent/tweet?text=${t}`},mailTo(){let t=encodeURIComponent(this.title),e=encodeURIComponent(this.message);return`mailto:?subject=${t}&body=${e}`}},methods:{async validate(){await this.$store.dispatch("validate",this.stacUrl)},browserUrl(){return window.location.toString()}}},L=R,F=(0,M.Z)(L,n,a,!1,null,"6f0a3a2b",null),W=F.exports},7130:function(t,e,r){r.d(e,{n:function(){return l}});var n=r(7040);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var l=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));(0,n.f0)(this,t.Defaults,this.constructor.Defaults,r,{type:e}),(0,n.hc)(this,{type:(0,n.MB)(),cancelable:(0,n.MB)(),nativeEvent:(0,n.MB)(),target:(0,n.MB)(),relatedTarget:(0,n.MB)(),vueTarget:(0,n.MB)(),componentId:(0,n.MB)()});var i=!1;this.preventDefault=function(){this.cancelable&&(i=!0)},(0,n._x)(this,"defaultPrevented",{enumerable:!0,get:function(){return i}})}return o(t,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),t}()}}]);
//# sourceMappingURL=906.58080eea.js.map