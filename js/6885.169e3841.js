"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[6885,4437,5259],{45259:function(t,e,i){i.r(e),i.d(e,{default:function(){return d}});var a=function(){var t=this,e=t._self._c;return e("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.400",value:t.load,expression:"load",modifiers:{400:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},[t.hasImage?e("b-card-img-lazy",t._b({staticClass:"thumbnail",attrs:{offset:"200"}},"b-card-img-lazy",t.thumbnail,!1)):t._e(),e("b-card-body",[e("b-card-title",[e("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),e("b-card-text",[e("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("formatTemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("formatTimestamp")(t.data.properties.datetime)))]:[t._v(t._s(t.$t("items.noTime")))]],2)]),t.fileFormats.length>0||t.isDeprecated?e("b-card-text",[t._l(t.fileFormats,(function(i){return e("b-badge",{key:i,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("formatMediaType")(i)))])})),t.isDeprecated?e("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v(t._s(t.$t("deprecated")))]):t._e()],2):t._e()],1)],1)},s=[],r=i(20629),n=i(59642),o=i(9342),l=i(43989),p=i(35834),h={name:"Item",components:{StacLink:o["default"]},filters:{formatMediaType:p.formatMediaType,formatTemporalExtent:p.formatTemporalExtent,formatTimestamp:p.formatTimestamp},mixins:[n.Z],props:{item:{type:Object,required:!0}},computed:{...(0,r.Se)(["getStac"]),data(){return this.getStac(this.item)},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,i)=>i.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof l.Z&&Boolean(this.data.properties.deprecated)}},methods:{load(t){this.item instanceof l.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},c=h,m=i(1001),u=(0,m.Z)(c,a,s,!1,null,null,null),d=u.exports},34023:function(t,e,i){i.d(e,{Z:function(){return k}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"items mb-4"},[e("h2",[e("span",{staticClass:"title"},[t._v(t._s(t.$tc("stacItem",t.items.length)))]),!t.api&&t.items.length>1?e("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]):t._e(),t.api?t._e():e("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?e("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[e("b-icon-search"),t._v(" "+t._s(t.$t("items.filter"))+" ")],1):t._e(),e("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[t.filtersOpen?e("ItemFilter",t._b({attrs:{title:t.$t("items.filter"),stac:t.stac,value:t.apiFilters,collectionOnly:!0},on:{input:t.emitFilter}},"ItemFilter",t.filterComponentProps,!1)):t._e()],1)]:t._e(),e("section",{staticClass:"list"},[t.loading?e("Loading",{attrs:{fill:"",top:""}}):t._e(),t.chunkedItems.length>0?e("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(t){return e("Item",{key:t.href,attrs:{item:t}})})),1):e("b-alert",{attrs:{variant:t.hasFilters?"warning":"info",show:""}},[t.hasFilters?[t._v(t._s(t.$t("search.noItemsFound")))]:[t._v(t._s(t.$t("items.noneAvailableForCollection")))]],2)],1),t.showPagination?e("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?e("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.300",value:t.showMore,expression:"showMore",modifiers:{300:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v(t._s(t.$t("showMore")))]):t._e()],2)},s=[],r=i(45259),n=i(79091),o=function(){var t=this,e=t._self._c;return e("b-button-group",{class:t.classes},[e("b-button",{attrs:{disabled:!t.pagination.first,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v(t._s(t.$t("pagination.first")))]),e("b-button",{attrs:{disabled:!t.pagination.prev,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v(t._s(t.$t("pagination.previous")))]),e("b-button",{attrs:{disabled:!t.pagination.next,variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v(t._s(t.$t("pagination.next")))]),t.pagination.last?e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v(t._s(t.$t("pagination.last")))]):t._e()],1)},l=[],p={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},h=p,c=i(1001),m=(0,c.Z)(h,o,l,!1,null,null,null),u=m.exports,d=i(11688),g=i(38019),f=i(79879),b=i(43989),_=i(37677),v=i(20629),w={name:"Items",components:{BCollapse:d.k,BIconSearch:g.Lln,Item:r["default"],ItemFilter:()=>Promise.all([i.e(7353),i.e(7075),i.e(4240),i.e(1487),i.e(6793),i.e(4437)]).then(i.bind(i,36793)),Loading:n.Z,Pagination:u,SortButtons:()=>i.e(2968).then(i.bind(i,2968))},mixins:[(0,_.ZP)(!0)],props:{items:{type:Array,required:!0},loading:{type:Boolean,default:!1},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90}},data(){return{shownItems:this.chunkSize,filtersOpen:!1,sort:0}},computed:{...(0,v.rn)(["uiLanguage"]),hasMore(){return this.items.length>this.shownItems},hasFilters(){return Object.values(this.apiFilters).filter((t=>!(null===t||0===f.ZP.size(t)))).length>1},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>b.Z.getDisplayTitle(t).localeCompare(b.Z.getDisplayTitle(e),this.uiLanguage))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},showPagination(){if(this.api){if(this.hasFilters)return!0;if(this.items.length>0)return Object.values(this.pagination).some((t=>!!t))}return!1}},methods:{emitFilter(t,e){this.$emit("filterItems",t,e)},showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&f.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},I=w,y=(0,c.Z)(I,a,s,!1,null,"078b6ae3",null),k=y.exports},40626:function(t,e,i){i.r(e),i.d(e,{default:function(){return b}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search d-flex flex-column"},[t.parent?t.searchLink?e("b-row",[e("b-col",{staticClass:"left"},[e("ItemFilter",t._b({attrs:{stac:t.parent,title:"",value:t.filters},on:{input:t.setFilters}},"ItemFilter",t.filterComponentProps,!1))],1),e("b-col",{staticClass:"right"},[t.loading?e("Loading",{attrs:{fill:"",top:""}}):t.hasItems||t.hasFilters?t.hasItems?t._e():e("b-alert",{attrs:{variant:"warning",show:""}},[t._v(t._s(t.$t("search.noItemsFound")))]):e("b-alert",{attrs:{variant:"info",show:""}},[t._v(t._s(t.$t("search.modifyCriteria")))]),t.hasItems?[e("div",{attrs:{id:"search-map"}},[e("Map",{attrs:{stac:t.parent,stacLayerData:t.itemCollection,scrollWheelZoom:"",popover:""}})],1),e("Items",{attrs:{stac:t.parent,items:t.apiItems,api:!0,allowFilter:!1,pagination:t.itemPages},on:{paginate:t.paginateItems}})]:t._e()],2)],1):e("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.$t("search.notSupported")))]):e("Loading",{attrs:{stretch:""}})],1)},s=[],r=i(34023),n=i(20629),o=i(79879),l=i(37677),p=i(36793),h=i(79091),c=i(43989);const m="__search__";var u={name:"Search",components:{ItemFilter:p["default"],Items:r.Z,Loading:h.Z,Map:()=>Promise.all([i.e(7450),i.e(6518)]).then(i.bind(i,46518))},mixins:[(0,l.ZP)(!1)],props:{loadParent:{type:String,default:null}},data(){return{parent:null,filters:{},selectedItem:null}},computed:{...(0,n.rn)(["apiItems","apiItemsLink","apiItemsPagination","catalogUrl"]),...(0,n.Se)(["getStac","root","fromBrowserPath","getApiItemsLoading"]),pageTitle(){return this.$t("search.title")},loading(){return this.getApiItemsLoading(m)},searchLink(){return this.parent instanceof c.Z&&this.parent.getSearchLink()},itemCollection(){return{type:"FeatureCollection",features:this.apiItems,links:[]}},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&(t.first=o.ZP.addFiltersToLink(this.apiItemsLink,this.filters)),t},hasFilters(){return o.ZP.size(this.filters)>0},hasItems(){return this.apiItems.length>0}},watch:{searchLink:{immediate:!0,handler(){this.searchLink&&this.showPage()}}},async created(){let t=this.catalogUrl;this.loadParent?(t=this.fromBrowserPath(this.loadParent),this.parent=this.getStac(t)):this.parent=this.root,this.parent||(await this.$store.dispatch("load",{url:t}),this.root||this.$store.commit("config",{catalogUrl:t}),this.parent=this.getStac(t))},methods:{...(0,n.OI)(["toggleApiItemsLoading"]),async setFilters(t,e=!1){this.filters=t,e?this.$store.commit("resetApiItems"):await this.filterItems(t)},showPage(){this.$store.commit("showPage",{title:this.pageTitle}),this.$store.commit("setApiItemsLink",this.searchLink)},async paginateItems(t){this.toggleApiItemsLoading(m);try{let e=await this.$store.dispatch("loadApiItems",{link:t,show:!0,filters:this.filters});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,this.$t("errors.loadItems"))}finally{this.toggleApiItemsLoading(m)}},async filterItems(t){this.toggleApiItemsLoading(m);try{let e=await this.$store.dispatch("loadApiItems",{link:this.searchLink,show:!0,filters:t});this.handleResponse(e)}catch(e){this.$root.$emit("error",e,this.$t("errors.loadFilteredItems"))}finally{this.toggleApiItemsLoading(m)}},handleResponse(t){t&&this.$store.commit("showPage",{title:this.pageTitle,url:t.config.url})}}},d=u,g=i(1001),f=(0,g.Z)(d,a,s,!1,null,"0767a40b",null),b=f.exports},37677:function(t,e,i){i(57658);var a=i(20629);const s=["http://www.opengis.net/spec/ogcapi-features-1/1.*/conf/core"],r=["http://www.opengis.net/spec/cql2/1.*/conf/cql2-text"],n=["http://www.opengis.net/spec/cql2/1.*/conf/cql2-json"],o=["https://api.stacspec.org/v1.*/item-search#sort"],l=["https://api.stacspec.org/v1.*/ogcapi-features#sort","http://www.opengis.net/spec/ogcapi-records-1/1.*/conf/sorting"],p=["https://api.stacspec.org/v1.*/item-search#filter*"],h=["http://www.opengis.net/spec/ogcapi-features-3/1.*/*/features-filter"];e["ZP"]=t=>({computed:{...(0,a.Se)(["supportsConformance"]),canSort(){return this.supportsConformance(t?l:o)},canFilterExtents(){return!t||this.supportsConformance(s)},canFilterCql(){return this.supportsConformance(t?h:p)&&this.cqlModes.includes("Text")},cqlModes(){let t=[];return this.supportsConformance(r)&&t.push("Text"),this.supportsConformance(n)&&t.push("JSON"),t},filterComponentProps(){return{canSort:this.canSort,canFilterCql:this.canFilterCql,canFilterExtents:this.canFilterExtents}}}})},59642:function(t,e,i){var a=i(20629);e["Z"]={props:{showThumbnail:{type:Boolean,default:!0}},computed:{...(0,a.rn)(["cardViewMode","crossOriginMedia","defaultThumbnailSize"]),isList(){return this.data&&!this.data.isItem()&&"list"===this.cardViewMode},hasImage(){return this.showThumbnail&&this.thumbnail},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0){let e,i,a=t[0];return Array.isArray(a["proj:shape"])&&2===a["proj:shape"].length?[i,e]=a["proj:shape"]:Array.isArray(this.defaultThumbnailSize)&&2===this.defaultThumbnailSize.length&&([i,e]=this.defaultThumbnailSize),{src:a.href,alt:a.title,crossorigin:this.crossOriginMedia,right:this.isList,blankColor:"rgba(0, 0, 0, 0.125)",width:e,height:i}}}return null}}}}}]);
//# sourceMappingURL=6885.169e3841.js.map