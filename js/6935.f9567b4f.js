"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[6935],{46935:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}});r(44114);var o=r(44426),n=r(48907),i=r(2566);class s extends o.A{constructor(t,e,r){super(t,e,r)}getButtonTitle(){return n.Ay.t("authentication.button.title")}getComponent(){return"ApiKey"}getComponentProps(){return{description:this.options.description}}async logout(){return"logout"!==this.router.currentRoute.name&&this.router.push("/auth/logout"),!0}updateStore(t){t&&("Bearer"===this.options.formatter?t=`Bearer ${t}`:"function"===typeof this.options.formatter&&(t=this.options.formatter(t))),i.Ay.hasText(t)||(t=void 0);let e=this.options.name;return"query"===this.options.in?{query:{type:"private",key:e,value:t}}:"header"===this.options.in?{header:{key:e,value:t}}:void 0}}}}]);
//# sourceMappingURL=6935.f9567b4f.js.map