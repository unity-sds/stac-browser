"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[368],{7111:function(t,e,i){i.d(e,{Z:function(){return Z}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"items mb-4"},[i("h2",[i("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():i("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():i("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?i("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[i("b-icon-search"),t._v(" Filter ")],1):t._e(),i("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[i("ItemFilter",{attrs:{stac:t.stac,sort:t.canSort,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?i("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return i("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):i("b-alert",{attrs:{variant:"info",show:""}},[t._v("No items found for the given filters.")]),t.showPagination?i("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?i("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},s=[],a=i(4367),r=(i(1539),i(8783),i(3948),i(9653),i(2707),i(7042),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?i("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),i("b-card-body",[i("b-card-title",[i("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),i("b-card-text",[i("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?i("b-card-text",[t._l(t.fileFormats,(function(e){return i("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),t.isDeprecated?i("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)}),o=[],c=(i(9826),i(7327),i(1249),i(2479),i(6699),i(2023),i(629)),l=i(8217),h=i(7387),u={name:"Item",components:{StacLink:l["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:function(){return[]}}},data:function(){return{showThumbnail:!1}},computed:(0,a.Z)((0,a.Z)((0,a.Z)({},(0,c.rn)(["crossOriginMedia"])),(0,c.Se)(["getStac"])),{},{cardProps:function(){var t=this,e={};return Array.isArray(this.selected)&&this.selected.find((function(e){return t.data.equals(e)}))&&(e["border-variant"]="danger"),e},data:function(){return this.item instanceof h.Z?this.item:this.getStac(this.item.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent:function(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats:function(){return this.data?Object.values(this.data.assets).filter((function(t){return Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type})).map((function(t){return t.type})).filter((function(t,e,i){return i.indexOf(t)===e})):[]},isDeprecated:function(){return this.data instanceof h.Z&&Boolean(this.data.properties.deprecated)}}),methods:{load:function(t){t&&(this.showThumbnail=!0),this.item instanceof h.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=u,d=i(1001),f=(0,d.Z)(p,r,o,!1,null,null,null),m=f.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-button-group",{class:t.classes},[i("b-button",{attrs:{disabled:!t.pagination.first,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),i("b-button",{attrs:{disabled:!t.pagination.prev,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),i("b-button",{attrs:{disabled:!t.pagination.next,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?i("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},v=[],b={name:"Pagination",props:{pagination:{type:Object,default:function(){return{}}},placement:{type:String,default:"bottom"}},computed:{classes:function(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate:function(t){this.$emit("paginate",t,this.placement)}}},w=b,y=(0,d.Z)(w,g,v,!1,null,null,null),k=y.exports,_=i(1688),I=i(2466),S=i(7637),O=i(9245),x={name:"Items",components:{BCollapse:_.k,BIconSearch:I.Lln,Item:m,ItemFilter:function(){return Promise.all([i.e(85),i.e(489),i.e(380)]).then(i.bind(i,2380))},Pagination:k,SortButtons:function(){return i.e(703).then(i.bind(i,4703))}},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:function(){return{}}},pagination:{type:Object,default:function(){return{}}},chunkSize:{type:Number,default:90},selected:{type:Array,default:function(){return[]}}},data:function(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:(0,a.Z)((0,a.Z)({},(0,c.Se)(["supportsConformance"])),{},{hasMore:function(){return this.items.length>this.shownItems},chunkedItems:function(){var t=this.items;return 0!==this.sort&&(t=t.slice(0).sort((function(t,e){return h.Z.getDisplayTitle(t).localeCompare(h.Z.getDisplayTitle(e))})),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},canSort:function(){return this.supportsConformance(O.K)},showPagination:function(){return this.api&&this.items.length>0}}),watch:{filters:{deep:!0,handler:function(t){this.$emit("filterItems",t)}}},methods:{showMore:function(){this.shownItems+=this.chunkSize},paginate:function(t,e){"bottom"===e&&this.$refs.topPagination&&S.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},P=x,C=(0,d.Z)(P,n,s,!1,null,"6569e156",null),Z=C.exports},3368:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[t.root?t.supportsSearch?i("b-row",[i("b-col",{staticClass:"left"},[i("ItemFilter",{attrs:{stac:t.root,title:"",value:t.filters,sort:t.canSort},on:{input:t.setFilters}})],1),i("b-col",{staticClass:"right"},[null===t.loading?i("b-alert",{attrs:{variant:"light",show:""}},[t._v("Please modify the search criteria.")]):!0===t.loading?i("div",{staticClass:"loading text-center"},[i("b-spinner",{attrs:{label:"Loading..."}})],1):0===t.apiItems.length?i("b-alert",{attrs:{variant:"info",show:""}},[t._v("No items found for the given filters.")]):[i("Map",{attrs:{stac:t.root,stacLayerData:t.itemCollection},on:{mapClicked:t.mapClicked}}),i("Items",{attrs:{stac:t.root,items:t.apiItems,api:!0,allowFilter:!1,selected:t.selected,pagination:t.itemPages},on:{paginate:t.paginateItems}})]],2)],1):i("b-alert",{attrs:{variant:"danger",show:""}},[t._v("Item Search (with 'GET') is not supported by the API.")]):i("div",{staticClass:"loading text-center"},[i("b-spinner",{attrs:{label:"Loading..."}})],1)],1)},s=[],a=i(7906),r=i(6198),o=i(4367),c=(i(1539),i(8783),i(3948),i(7111)),l=i(629),h=i(7637),u=i(9245),p="Search",d={name:"Search",components:{ItemFilter:function(){return Promise.all([i.e(85),i.e(489),i.e(380)]).then(i.bind(i,2380))},Items:c.Z,Map:function(){return i.e(81).then(i.bind(i,6081))}},props:{loadRoot:{type:String,default:null}},data:function(){return{loading:null,filters:{},selected:[]}},computed:(0,o.Z)((0,o.Z)((0,o.Z)({},(0,l.rn)(["apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"])),(0,l.Se)(["root","searchLink","supportsSearch","supportsConformance","fromBrowserPath"])),{},{itemCollection:function(){return{type:"FeatureCollection",features:this.apiItems,links:[]}},itemPages:function(){var t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&(t.first=h.ZP.addFiltersToLink(this.apiItemsLink,this.apiItemsFilter)),t},canSort:function(){return this.supportsConformance(u.K)}}),watch:{supportsSearch:{immediate:!0,handler:function(){this.supportsSearch&&this.showPage()}}},created:function(){if(this.loadRoot&&!this.root){var t=this.fromBrowserPath(this.loadRoot);this.$store.commit("config",{catalogUrl:t})}},methods:{setFilters:function(t){var e=arguments,i=this;return(0,r.Z)((0,a.Z)().mark((function n(){var s;return(0,a.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=e.length>1&&void 0!==e[1]&&e[1],i.filters=t,!s){n.next=7;break}i.$store.commit("resetApiItems"),i.loading=null,n.next=9;break;case 7:return n.next=9,i.filterItems(t);case 9:case"end":return n.stop()}}),n)})))()},showPage:function(){this.$store.commit("showPage",{title:p}),this.$store.commit("setApiItemsLink",this.searchLink)},paginateItems:function(t){var e=this;return(0,r.Z)((0,a.Z)().mark((function i(){var n;return(0,a.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.$store.dispatch("loadApiItems",{link:t,show:!0});case 3:n=i.sent,e.handleResponse(n),i.next=10;break;case 7:i.prev=7,i.t0=i["catch"](0),e.$root.$emit("error",i.t0,"Sorry, loading the list of STAC Items failed.");case 10:case"end":return i.stop()}}),i,null,[[0,7]])})))()},filterItems:function(t){var e=this;return(0,r.Z)((0,a.Z)().mark((function i(){var n;return(0,a.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.loading=!0,i.prev=1,i.next=4,e.$store.dispatch("loadApiItems",{link:e.searchLink,show:!0,filters:t});case 4:n=i.sent,e.handleResponse(n),i.next=11;break;case 8:i.prev=8,i.t0=i["catch"](1),e.$root.$emit("error",i.t0,"Sorry, loading a filtered list of STAC Items failed.");case 11:return i.prev=11,e.loading=!1,i.finish(11);case 14:case"end":return i.stop()}}),i,null,[[1,8,11,14]])})))()},handleResponse:function(t){t&&this.$store.commit("showPage",{title:p,url:t.config.url})},mapClicked:function(t){"Feature"===t.type&&(this.selected=[t.data])}}},f=d,m=i(1001),g=(0,m.Z)(f,n,s,!1,null,"5389c841",null),v=g.exports},1688:function(t,e,i){i.d(e,{k:function(){return M}});var n,s=i(144),a=i(4689),r="show",o=i(3935),c=i(3294),l=i(2299),h=i(494),u=i(1440),p=i(8415),d=i(4602),f=i(7040),m=i(451),g=i(3727),v=i(8596),b=i(8280),w=i(9558),y=function(t){(0,u.A_)(t,"height",0),(0,u.bz)((function(){(0,u.nq)(t),(0,u.A_)(t,"height","".concat(t.scrollHeight,"px"))}))},k=function(t){(0,u.jo)(t,"height")},_=function(t){(0,u.A_)(t,"height","auto"),(0,u.A_)(t,"display","block"),(0,u.A_)(t,"height","".concat((0,u.Zt)(t).height,"px")),(0,u.nq)(t),(0,u.A_)(t,"height",0)},I=function(t){(0,u.jo)(t,"height")},S={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},O={enter:y,afterEnter:k,leave:_,afterLeave:I},x={appear:(0,m.pi)(l.U5,!1)},P=s.Z.extend({name:a.gt,functional:!0,props:x,render:function(t,e){var i=e.props,n=e.data,s=e.children;return t("transition",(0,w.b)(n,{props:S,on:O},{props:i}),s)}});function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Z(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(Object(i),!0).forEach((function(e){$(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var A=(0,p.gA)(a.gr,"toggle"),E=(0,p.gA)(a.gr,"request-state"),F=(0,p.J3)(a.gr,"accordion"),j=(0,p.J3)(a.gr,"state"),L=(0,p.J3)(a.gr,"sync-state"),T=(0,d.l)("visible",{type:l.U5,defaultValue:!1}),D=T.mixin,N=T.props,R=T.prop,q=T.event,B=(0,m.y2)((0,f.GE)(Z(Z(Z({},g.N),N),{},{accordion:(0,m.pi)(l.N0),appear:(0,m.pi)(l.U5,!1),isNav:(0,m.pi)(l.U5,!1),tag:(0,m.pi)(l.N0,"div")})),a.gr),M=s.Z.extend({name:a.gr,mixins:[g.t,D,b.Z,v.E],props:B,data:function(){return{show:this[R],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(n={},$(n,R,(function(t){t!==this.show&&(this.show=t)})),$(n,"show",(function(t,e){t!==e&&this.emitState()})),n),created:function(){this.show=this[R]},mounted:function(){var t=this;this.show=this[R],this.listenOnRoot(A,this.handleToggleEvent),this.listenOnRoot(F,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(E,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o.Qg&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){(0,p.tU)(t,window,"resize",this.handleResize,c.IJ),(0,p.tU)(t,window,"orientationchange",this.handleResize,c.IJ)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(c.l0)},onAfterEnter:function(){this.transitioning=!1,this.$emit(c.AS)},onLeave:function(){this.transitioning=!0,this.$emit(c.yM)},onAfterLeave:function(){this.transitioning=!1,this.$emit(c.v6)},emitState:function(){var t=this.show,e=this.accordion,i=this.safeId();this.$emit(q,t),this.emitOnRoot(j,i,t),e&&t&&this.emitOnRoot(F,i,e)},emitSync:function(){this.emitOnRoot(L,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=(0,u.pv)(t,r);(0,u.IV)(t,r);var i="block"===(0,u.yD)(t).display;return e&&(0,u.cn)(t,r),i},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===(0,u.yD)(this.$el).display&&(!(0,u.wB)(e,".nav-link,.dropdown-item")&&!(0,u.oq)(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var i=this.accordion,n=this.show;if(i&&i===e){var s=t===this.safeId();(s&&!n||!s&&n)&&this.toggle()}},handleResize:function(){this.show="block"===(0,u.yD)(this.$el).display}},render:function(t){var e=this.appear,i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(h.Pq,this.slotScope));return t(P,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}})},9245:function(t,e,i){i.d(e,{K:function(){return n}});var n="https://api.stacspec.org/v1.*/item-search#sort"}}]);
//# sourceMappingURL=368-legacy.64929e0e.js.map