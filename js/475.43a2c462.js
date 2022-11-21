"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[475],{6808:function(t,r,e){e.r(r),e.d(r,{default:function(){return m}});var a=function(){var t=this,r=t._self._c;return r("b-row",[r("b-col",[r("b-form",{on:{submit:t.go}},[r("b-form-group",{attrs:{id:"select",label:"Please specify a STAC Catalog or API...","label-for":"url","invalid-feedback":t.error,state:t.valid}},[r("b-form-input",{attrs:{id:"url",type:"url",value:t.url,placeholder:"https://..."},on:{input:t.setUrl}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Load")])],1),r("hr"),t.stacIndex.length>0?r("b-form-group",{attrs:{id:"stacIndex",label:"... or select one from STAC Index"}},[r("b-list-group",{staticClass:"stacIndex"},[t._l(t.stacIndex,(function(e){return[t.show(e)?r("b-list-group-item",{key:e.id,staticClass:"flex-column align-items-start",attrs:{button:"",active:t.url===e.url},on:{click:function(r){return t.open(e.url)}}},[r("div",{staticClass:"d-flex w-100 justify-content-between"},[r("strong",{staticClass:"mb-1"},[t._v(t._s(e.title))]),r("small",[e.isApi?r("b-badge",{attrs:{variant:"dark",pill:""}},[t._v("API")]):r("b-badge",{attrs:{variant:"light",pill:""}},[t._v("Catalog")])],1)]),r("p",{staticClass:"mb-1"},[r("Description",{attrs:{description:e.summary,compact:!0}})],1)]):t._e()]}))],2)],1):t._e()],1)],1)},i=[],n=(e(7658),e(4909)),o=e(6449),s=e(7353),l=e(322),u=e(8367),c=e(629),p=e(7513),d=e(9879),b={name:"SelectDataSource",components:{BForm:n.e,BFormGroup:o.x,BFormInput:s.e,BListGroup:l.N,BListGroupItem:u.f,Description:p.Z},data(){return{url:""}},computed:{...(0,c.rn)(["stacIndex"]),...(0,c.Se)(["toBrowserPath"]),valid(){return!this.error},error(){if(!this.url)return null;try{let t=new URL(this.url);return t.protocol?t.host?null:"The URL is missing a host.":"The URL is missing a protocol."}catch(t){return"The URL is invalid."}}},created(){this.$store.dispatch("loadStacIndex"),this.$store.commit("resetPage")},methods:{show(t){return"private"!==t.access&&(!this.url||d.ZP.search(this.url,[t.title,t.url]))},setUrl(t){this.url=t},open(t){this.url=t,this.go()},go(){this.$store.commit("resetCatalog"),this.$router.push(this.toBrowserPath(this.url))}}},f=b,h=e(1001),v=(0,h.Z)(f,a,i,!1,null,null,null),m=v.exports},4909:function(t,r,e){e.d(r,{e:function(){return u}});var a=e(1915),i=e(9558),n=e(4689),o=e(2299),s=e(451),l=(0,s.y2)({id:(0,s.pi)(o.N0),inline:(0,s.pi)(o.U5,!1),novalidate:(0,s.pi)(o.U5,!1),validated:(0,s.pi)(o.U5,!1)},n.eh),u=(0,a.l7)({name:n.eh,functional:!0,props:l,render:function(t,r){var e=r.props,a=r.data,n=r.children;return t("form",(0,i.b)(a,{class:{"form-inline":e.inline,"was-validated":e.validated},attrs:{id:e.id,novalidate:e.novalidate}}),n)}})},8367:function(t,r,e){e.d(r,{f:function(){return y}});var a=e(1915),i=e(9558),n=e(4689),o=e(2299),s=e(1572),l=e(1440),u=e(7040),c=e(451),p=e(488),d=e(7347);function b(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,a)}return e}function f(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?b(Object(e),!0).forEach((function(r){h(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function h(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var v=["a","router-link","button","b-link"],m=(0,u.CE)(d.NQ,["event","routerTag"]);delete m.href.default,delete m.to.default;var g=(0,c.y2)((0,u.GE)(f(f({},m),{},{action:(0,c.pi)(o.U5,!1),button:(0,c.pi)(o.U5,!1),tag:(0,c.pi)(o.N0,"div"),variant:(0,c.pi)(o.N0)})),n.KT),y=(0,a.l7)({name:n.KT,functional:!0,props:g,render:function(t,r){var e,a=r.props,n=r.data,o=r.children,u=a.button,b=a.variant,f=a.active,g=a.disabled,y=(0,p.u$)(a),w=u?"button":y?d.we:a.tag,O=!!(a.action||y||u||(0,s.kI)(v,a.tag)),P={},_={};return(0,l.YR)(w,"button")?(n.attrs&&n.attrs.type||(P.type="button"),a.disabled&&(P.disabled=!0)):_=(0,c.uj)(m,a),t(w,(0,i.b)(n,{attrs:P,props:_,staticClass:"list-group-item",class:(e={},h(e,"list-group-item-".concat(b),b),h(e,"list-group-item-action",O),h(e,"active",f),h(e,"disabled",g),e)}),o)}})},322:function(t,r,e){e.d(r,{N:function(){return p}});var a=e(1915),i=e(9558),n=e(4689),o=e(2299),s=e(3284),l=e(451);function u(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var c=(0,l.y2)({flush:(0,l.pi)(o.U5,!1),horizontal:(0,l.pi)(o.gL,!1),tag:(0,l.pi)(o.N0,"div")},n.DX),p=(0,a.l7)({name:n.DX,functional:!0,props:c,render:function(t,r){var e=r.props,a=r.data,n=r.children,o=""===e.horizontal||e.horizontal;o=!e.flush&&o;var l={staticClass:"list-group",class:u({"list-group-flush":e.flush,"list-group-horizontal":!0===o},"list-group-horizontal-".concat(o),(0,s.HD)(o))};return t(e.tag,(0,i.b)(a,l),n)}})}}]);
//# sourceMappingURL=475.43a2c462.js.map