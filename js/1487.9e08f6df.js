"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[1487],{7379:function(t,e,i){i.d(e,{E:function(){return m}});var n=i(1915),s=i(4689),o=i(3294),r=i(2299),l=i(6410),c=i(7040),u=i(451),h=i(8492),a=i(8280),p=i(7347);function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){b(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v=(0,c.CE)(p.NQ,["event","routerTag"]),g=(0,u.y2)((0,c.GE)(d(d({},v),{},{linkClass:(0,u.pi)(r.wA),variant:(0,u.pi)(r.N0)})),s.tW),m=(0,n.l7)({name:s.tW,mixins:[h.D,a.Z],inject:{getBvDropdown:{default:function(){return function(){return null}}}},inheritAttrs:!1,props:g,computed:{bvDropdown:function(){return this.getBvDropdown()},computedAttrs:function(){return d(d({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;(0,l.bz)((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit(o.PZ,t),this.closeDropdown()}},render:function(t){var e=this.linkClass,i=this.variant,n=this.active,s=this.disabled,o=this.onClick,r=this.bvAttrs;return t("li",{class:r.class,style:r.style,attrs:{role:"presentation"}},[t(p.we,{staticClass:"dropdown-item",class:[e,b({},"text-".concat(i),i&&!(n||s))],props:(0,u.uj)(v,this.$props),attrs:this.computedAttrs,on:{click:o},ref:"item"},this.normalizeSlot())])}})},6537:function(t,e,i){i.d(e,{R:function(){return X}});var n=i(1915),s=i(4689),o=i(2299),r=i(494),l=i(1572),c=i(8735),u=i(451),h=i(6595),a=i(8981),p=i(3935),f=i(3294),d=i(3663),b="top-start",v="top-end",g="bottom-start",m="bottom-end",O="right-start",y="left-start",w=i(8112),k=i(7130),C=i(6410),P=i(8415),j=i(3284),E=i(7040),I=i(7147),_=(0,n.l7)({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&((0,P.QY)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,f.IJ),t&&(0,P.XO)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,f.IJ))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&(0,P.XO)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,f.IJ)},beforeDestroy:function(){(0,P.QY)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,f.IJ)},methods:{isClickOut:function(t){return!(0,C.r3)(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),$=(0,n.l7)({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&((0,P.QY)(this.focusInElement,"focusin",this._focusInHandler,f.IJ),t&&(0,P.XO)(this.focusInElement,"focusin",this._focusInHandler,f.IJ))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&(0,P.XO)(this.focusInElement,"focusin",this._focusInHandler,f.IJ)},beforeDestroy:function(){(0,P.QY)(this.focusInElement,"focusin",this._focusInHandler,f.IJ)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),N=i(3727),T=i(8596),D=i(9022);function H(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?H(Object(i),!0).forEach((function(e){S(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function S(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var J=(0,P.J3)(s.Jy,f.AS),F=(0,P.J3)(s.Jy,f.v6),A=".dropdown form",B=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),U=function(t){return(t||[]).filter(C.pn)},z=(0,u.y2)((0,E.GE)(x(x({},N.N),{},{boundary:(0,u.pi)([w.mv,o.N0],"scrollParent"),disabled:(0,u.pi)(o.U5,!1),dropleft:(0,u.pi)(o.U5,!1),dropright:(0,u.pi)(o.U5,!1),dropup:(0,u.pi)(o.U5,!1),noFlip:(0,u.pi)(o.U5,!1),offset:(0,u.pi)(o.fE,0),popperOpts:(0,u.pi)(o.aR,{}),right:(0,u.pi)(o.U5,!1)})),s.Jy),R=(0,n.l7)({mixins:[N.t,T.E,_,$],provide:function(){var t=this;return{getBvDropdown:function(){return t}}},inject:{getBvNavbar:{default:function(){return function(){return null}}}},props:z,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{bvNavbar:function(){return this.getBvNavbar()},inNavbar:function(){return!(0,j.Ft)(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"},hideDelay:function(){return this.inNavbar?p.LV?300:50:0}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var i=t?f.l0:f.yM,n=new k.n(i,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(n),n.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off(f.v6,this.focusToggler);t?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},mounted:function(){(0,D.wK)(this.$el,this)},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout(),(0,D.E8)(this.$el)},methods:{emitEvent:function(t){var e=t.type;this.emitOnRoot((0,P.J3)(s.Jy,e),t),this.$emit(e,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if("undefined"===typeof a.Z)(0,I.ZK)("Popper.js not found. Falling back to CSS positioning",s.Jy);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.emitOnRoot(J,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit(f.AS)}))}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(F,this),this.$emit(f.v6),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new a.Z(t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t=g;this.dropup?t=this.right?v:b:this.dropright?t=O:this.dropleft?t=y:this.right&&(t=m);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},i=this.boundary;return i&&(e.modifiers.preventOverflow={boundariesElement:i}),(0,E.Ee)(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"listenOnRoot":"listenOffRoot";this[e](J,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||(0,C.bz)((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once(f.v6,this.focusToggler))},toggle:function(t){t=t||{};var e=t,i=e.type,n=e.keyCode;("click"===i||"keydown"===i&&-1!==[d.K2,d.m5,d.RV].indexOf(n))&&(this.disabled?this.visible=!1:(this.$emit(f.Ep,t),(0,P.p7)(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){(0,P.p7)(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===d.RZ?this.onEsc(t):e===d.RV?this.focusNext(t,!1):e===d.XS&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,(0,P.p7)(t),this.$once(f.v6,this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit(f.PZ,t)},hideHandler:function(t){var e=this,i=t.target;!this.visible||(0,C.r3)(this.$refs.menu,i)||(0,C.r3)(this.toggler,i)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.hideDelay))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var i=this,n=t.target;!this.visible||t&&(0,C.oq)(A,n)||((0,P.p7)(t),this.$nextTick((function(){var t=i.getItems();if(!(t.length<1)){var s=t.indexOf(n);e&&s>0?s--:!e&&s<t.length-1&&s++,s<0&&(s=0),i.focusItem(s,t)}})))},focusItem:function(t,e){var i=e.find((function(e,i){return i===t}));(0,C.KS)(i)},getItems:function(){return U((0,C.a8)(B,this.$refs.menu))},focusMenu:function(){(0,C.KS)(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){(0,C.KS)(t.toggler)}))}}}),M=i(8280),V=i(5193);function Z(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function K(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(i),!0).forEach((function(e){L(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Z(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function L(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Q=(0,u.y2)((0,E.GE)(K(K(K({},N.N),z),{},{block:(0,u.pi)(o.U5,!1),html:(0,u.pi)(o.N0),lazy:(0,u.pi)(o.U5,!1),menuClass:(0,u.pi)(o.wA),noCaret:(0,u.pi)(o.U5,!1),role:(0,u.pi)(o.N0,"menu"),size:(0,u.pi)(o.N0),split:(0,u.pi)(o.U5,!1),splitButtonType:(0,u.pi)(o.N0,"button",(function(t){return(0,l.kI)(["button","submit","reset"],t)})),splitClass:(0,u.pi)(o.wA),splitHref:(0,u.pi)(o.N0),splitTo:(0,u.pi)(o.ZW),splitVariant:(0,u.pi)(o.N0),text:(0,u.pi)(o.N0),toggleAttrs:(0,u.pi)(o.aR,{}),toggleClass:(0,u.pi)(o.wA),toggleTag:(0,u.pi)(o.N0,"button"),toggleText:(0,u.pi)(o.N0,"Toggle dropdown"),variant:(0,u.pi)(o.N0,"secondary")})),s.Jy),X=(0,n.l7)({name:s.Jy,mixins:[N.t,R,M.Z],props:Q,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,i=this.variant,n=this.size,s=this.block,o=this.disabled,l=this.split,u=this.role,a=this.hide,p=this.toggle,f={variant:i,size:n,block:s,disabled:o},d=this.normalizeSlot(r.j1),b=this.hasNormalizedSlot(r.j1)?{}:(0,c.U)(this.html,this.text),v=t();if(l){var g=this.splitTo,m=this.splitHref,O=this.splitButtonType,y=K(K({},f),{},{variant:this.splitVariant||i});g?y.to=g:m?y.href=m:O&&(y.type=O),v=t(V.T,{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:y,domProps:b,on:{click:this.onSplitClick},ref:"button"},d),d=[t("span",{class:["sr-only"]},[this.toggleText])],b={}}var w=["menu","listbox","tree","grid","dialog"],k=t(V.T,{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:K(K({},this.toggleAttrs),{},{id:this.safeId("_BV_toggle_"),"aria-haspopup":w.includes(u)?u:"false","aria-expanded":(0,h.BB)(e)}),props:K(K({},f),{},{tag:this.toggleTag,block:s&&!l}),domProps:b,on:{mousedown:this.onMousedown,click:p,keydown:p},ref:"toggle"},d),C=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:u,tabindex:"-1","aria-labelledby":this.safeId(l?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(r.Pq,{hide:a}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[v,k,C])}})}}]);
//# sourceMappingURL=1487.9e08f6df.js.map