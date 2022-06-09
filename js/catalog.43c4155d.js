(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[701,463],{463:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!t.data,deprecated:t.data&&t.data.deprecated},attrs:{"no-body":"","img-right":t.isList}},[t.showThumbnail&&t.thumbnail&&t.thumbnailVisible?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,right:t.isList}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&(t.data.description||t.data.deprecated)?a("b-card-text",{staticClass:"intro"},[t.data.deprecated?a("b-badge",{staticClass:"deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e(),t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")],1):t._e(),t.temporalExtent?a("b-card-text",{staticClass:"datetime"},[a("span",{domProps:{innerHTML:t._s(t.temporalExtent)}})]):t._e()],1)],1)},i=[],r=a(629),n=a(8217),o=a(7387),l=a(6525),c=a.n(l),d=a(5834),m={name:"Catalog",components:{StacLink:n["default"]},filters:{stripCommonmark(t){return c()(t)}},props:{catalog:{type:Object,required:!0},showThumbnail:{type:Boolean,default:!0}},data(){return{thumbnailVisible:!1}},computed:{...(0,r.rn)(["crossOriginMedia","cardViewMode"]),...(0,r.Se)(["getStac"]),isList(){return"list"===this.cardViewMode},data(){return this.catalog instanceof o.Z?this.catalog:this.getStac(this.catalog.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){let t=this.data.extent.temporal.interval[0];if(Array.isArray(t)&&("string"===typeof t[0]||"string"===typeof t[1]))return d.Formatters.formatTemporalExtent(this.data.extent.temporal.interval[0],!0)}return null}},methods:{load(t){t&&(this.thumbnailVisible=!0),this.catalog instanceof o.Z||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},p=m,h=a(1001),u=(0,h.Z)(p,s,i,!1,null,null,null),g=u.exports},7111:function(t,e,a){"use strict";a.d(e,{Z:function(){return A}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"items mb-4"},[a("h2",[a("span",{staticClass:"title"},[t._v("Items")]),t.api?t._e():a("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.items.length))]),t.api?t._e():a("SortButtons",{staticClass:"ml-4",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t.showPagination?a("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2",class:{"ml-3":t.showPagination},attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[a("b-icon-search"),t._v(" Filter ")],1):t._e(),a("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[a("ItemFilter",{attrs:{stac:t.stac,sort:t.canSort,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?a("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return a("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):a("b-alert",{attrs:{variant:"info",show:""}},[t._v("No items found for the given filters.")]),t.showPagination?a("Pagination",{attrs:{pagination:t.pagination},on:{paginate:t.paginate}}):t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!t.data,deprecated:t.isDeprecated},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.item]}})],1),a("b-card-text",[a("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0||t.isDeprecated?a("b-card-text",[t._l(t.fileFormats,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),t.isDeprecated?a("b-badge",{staticClass:"mr-1 mt-1 deprecated",attrs:{variant:"warning"}},[t._v("Deprecated")]):t._e()],2):t._e()],1)],1)},n=[],o=(a(6699),a(629)),l=a(8217),c=a(7387),d={name:"Item",components:{StacLink:l["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:()=>[]}},data(){return{showThumbnail:!1}},computed:{...(0,o.rn)(["crossOriginMedia"]),...(0,o.Se)(["getStac"]),cardProps(){let t={};return Array.isArray(this.selected)&&this.selected.find((t=>this.data.equals(t)))&&(t["border-variant"]="danger"),t},data(){return this.item instanceof c.Z?this.item:this.getStac(this.item.href)},thumbnail(){if(this.data){let t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats(){return this.data?Object.values(this.data.assets).filter((t=>Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type)).map((t=>t.type)).filter(((t,e,a)=>a.indexOf(t)===e)):[]},isDeprecated(){return this.data instanceof c.Z&&Boolean(this.data.properties.deprecated)}},methods:{load(t){t&&(this.showThumbnail=!0),this.item instanceof c.Z||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},m=d,p=a(1001),h=(0,p.Z)(m,r,n,!1,null,null,null),u=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{class:t.classes},[a("b-button",{attrs:{disabled:!t.pagination.first,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),a("b-button",{attrs:{disabled:!t.pagination.prev,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),a("b-button",{attrs:{disabled:!t.pagination.next,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},b=[],f={name:"Pagination",props:{pagination:{type:Object,default:()=>({})},placement:{type:String,default:"bottom"}},computed:{classes(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate(t){this.$emit("paginate",t,this.placement)}}},v=f,_=(0,p.Z)(v,g,b,!1,null,null,null),y=_.exports,C=a(1688),w=a(2466),k=a(7637),x=a(9245),I={name:"Items",components:{BCollapse:C.k,BIconSearch:w.Lln,Item:u,ItemFilter:()=>Promise.all([a.e(85),a.e(489),a.e(380)]).then(a.bind(a,2380)),Pagination:y,SortButtons:()=>a.e(703).then(a.bind(a,4703))},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:()=>({})},pagination:{type:Object,default:()=>({})},chunkSize:{type:Number,default:90},selected:{type:Array,default:()=>[]}},data(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1,sort:0}},computed:{...(0,o.Se)(["supportsConformance"]),hasMore(){return this.items.length>this.shownItems},chunkedItems(){let t=this.items;return 0!==this.sort&&(t=t.slice(0).sort(((t,e)=>c.Z.getDisplayTitle(t).localeCompare(c.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),!this.api&&this.items.length>this.chunkSize?t.slice(0,this.shownItems):t},canSort(){return this.supportsConformance(x.K)},showPagination(){return this.api&&this.items.length>0}},watch:{filters:{deep:!0,handler(t){this.$emit("filterItems",t)}}},methods:{showMore(){this.shownItems+=this.chunkSize},paginate(t,e){"bottom"===e&&this.$refs.topPagination&&k.ZP.scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},M=I,$=(0,p.Z)(M,s,i,!1,null,"6569e156",null),A=$.exports},2293:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return E}});var s=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{class:(t={cc:!0},t[e.data.type.toLowerCase()]=!0,t.mixed=e.hasCatalogs&&e.hasItems,t.empty=!e.hasCatalogs&&!e.hasItems,t)},[s("b-row",[s("b-col",{staticClass:"meta"},[s("section",{staticClass:"intro"},[s("h2",[e._v("Description")]),e.data.deprecated?s("DeprecationNotice",{attrs:{data:e.data}}):e._e(),e.data["anon:warning"]?s("AnonymizedNotice",{attrs:{warning:e.data["anon:warning"]}}):e._e(),e.data.description?s("ReadMore",{attrs:{lines:10}},[s("Description",{attrs:{description:e.data.description}})],1):e._e(),Array.isArray(e.data.keywords)&&e.data.keywords.length>0?s("Keywords",{attrs:{keywords:e.data.keywords}}):e._e(),e.isCollection?s("section",{staticClass:"metadata mb-4"},[e.licenses?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("License")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.licenses)}})],1):e._e(),e.temporalExtents?s("b-row",[s("b-col",{staticClass:"label",attrs:{md:"4"}},[e._v("Temporal Extents")]),s("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:e._s(e.temporalExtents)}})],1):e._e()],1):e._e()],1),e.isCollection||e.thumbnails.length>0?s("section",{staticClass:"mb-4"},[s("b-card",{staticClass:"maps-preview",attrs:{"no-body":""}},[s("b-tabs",{ref:"tabs",attrs:{pills:"",card:"",vertical:"",end:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.isCollection?s("b-tab",{attrs:{title:"Map","no-body":""}},[s("Map",{attrs:{stac:e.data,stacLayerData:e.selectedAsset},on:{mapClicked:e.mapClicked,mapChanged:e.mapChanged}})],1):e._e(),e.thumbnails.length>0?s("b-tab",{attrs:{title:"Preview","no-body":""}},[s("Thumbnails",{attrs:{thumbnails:e.thumbnails}})],1):e._e()],1)],1)],1):e._e(),e.hasAssets?s("Assets",{attrs:{assets:e.assets,context:e.data,shown:e.shownAssets},on:{showAsset:e.showAsset}}):e._e(),e.hasItemAssets&&!e.hasItems?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e(),e.hasProviders?s("Providers",{attrs:{providers:e.data.providers}}):e._e(),s("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:e.data.type,data:e.data,ignoreFields:e.ignoredMetadataFields}}),e.additionalLinks.length>0?s("Links",{attrs:{title:"Additional resources",links:e.additionalLinks}}):e._e()],1),e.hasCatalogs?s("b-col",{staticClass:"catalogs-container"},[s("Catalogs",{attrs:{catalogs:e.catalogs,hasMore:e.hasMoreCollections},on:{loadMore:e.loadMoreCollections}})],1):e._e(),e.hasItems?s("b-col",{staticClass:"items-container"},[s("Items",{attrs:{stac:e.data,items:e.items,api:e.isApi,apiFilters:e.apiItemsFilter,pagination:e.itemPages},on:{paginate:e.paginateItems,filterItems:e.filterItems}}),e.hasItemAssets?s("Assets",{attrs:{assets:e.data.item_assets,definition:!0}}):e._e()],1):e._e()],1)],1)},i=[],r=a(629),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"catalogs mb-4"},[a("h2",[a("span",{staticClass:"title"},[t._v("Catalogs")]),t.hasMore?t._e():a("b-badge",{attrs:{pill:"",variant:"secondary ml-2"}},[t._v(t._s(t.catalogs.length))]),a("ViewButtons",{staticClass:"ml-4",model:{value:t.view,callback:function(e){t.view=e},expression:"view"}}),t.hasMore?t._e():a("SortButtons",{staticClass:"ml-2",model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),a(t.cardsComponent,t._b({tag:"component"},"component",t.cardsComponentProps,!1),t._l(t.sortedCatalogs,(function(t){return a("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},o=[],l=a(463),c=a(7387),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{attrs:{title:"Sort",size:"sm"}},[a("b-button",{attrs:{title:"Show as tiles",variant:"outline-primary",pressed:"cards"===t.value},on:{click:function(e){return t.toggle("cards")}}},[a("b-icon-bricks"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("Tiles")])],1),a("b-button",{attrs:{title:"Show as list",variant:"outline-primary",pressed:"list"===t.value},on:{click:function(e){return t.toggle("list")}}},[a("b-icon-list-task"),t._v(" "),a("span",{staticClass:"button-label"},[t._v("List")])],1)],1)},m=[],p=a(2466),h={id:"SortButtons",components:{BIconBricks:p.S3S,BIconListTask:p.WPR},props:{value:{type:String,default:"cards"}},methods:{toggle(t){this.value!==t&&this.$emit("input",t)}}},u=h,g=a(1001),b=(0,g.Z)(u,d,m,!1,null,null,null),f=b.exports,v={components:{ViewButtons:f},computed:{cardsComponent(){return"list"===this.view?"div":"b-card-group"},cardsComponentProps(){return"list"===this.view?{class:["card-list"]}:{columns:!0}},view:{get(){return this.$store.state.cardViewMode},set(t){this.$store.commit("config",{cardViewMode:t})}}}},_={name:"Catalogs",components:{Catalog:l["default"],SortButtons:()=>a.e(703).then(a.bind(a,4703))},mixins:[v],props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},data(){return{sort:0}},computed:{sortedCatalogs(){let t=this.catalogs;return this.hasMore||0===this.sort||(t=t.slice(0).sort(((t,e)=>c.Z.getDisplayTitle(t).localeCompare(c.Z.getDisplayTitle(e)))),-1===this.sort&&(t=t.reverse())),t}},methods:{loadMore(t=!0){t&&this.$emit("loadMore")}}},y=_,C=(0,g.Z)(y,n,o,!1,null,"69f3f174",null),w=C.exports,k=a(1808),x=a(7111),I=a(6129),M=a(3819),$=a(8907),A=a.n($),S=a(81),L=a(5834),P=a(2996),T=a(1015),F=a(7637),Z={name:"Catalog",components:{AnonymizedNotice:()=>a.e(467).then(a.bind(a,467)),Assets:()=>a.e(90).then(a.bind(a,6090)),BTabs:P.M,BTab:T.L,Catalogs:w,DeprecationNotice:()=>a.e(196).then(a.bind(a,3196)),Description:k.Z,Items:x.Z,Keywords:()=>a.e(155).then(a.bind(a,6155)),Links:I.Z,Map:()=>a.e(81).then(a.bind(a,6081)),Metadata:M.Z,Providers:()=>a.e(867).then(a.bind(a,9867)),ReadMore:A(),Thumbnails:()=>a.e(400).then(a.bind(a,3400))},mixins:[S.Z],data(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","proj:bbox","proj:geometry","conformsTo","deprecated","anon:warning"]}},computed:{...(0,r.rn)(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"]),...(0,r.Se)(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"]),licenses(){return this.isCollection&&this.data.license?L.Formatters.formatLicense(this.data.license,null,null,this.data):null},hasProviders(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){let t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),L.Formatters.formatTemporalExtents(t)}return null},hasItemAssets(){var t;return F.ZP.size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages(){let t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=F.ZP.addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi(){return Boolean(this.apiItemsLink)},hasItems(){return this.items.length>0||this.isApi},hasCatalogs(){return this.catalogs.length>0}},methods:{loadMoreCollections(){this.$store.dispatch("loadNextApiCollections",{show:!0})},async paginateItems(t){try{await this.$store.dispatch("loadApiItems",{link:t,show:!0})}catch(e){this.$root.$emit("error",e,"Sorry, loading the list of STAC Items failed.")}},async filterItems(t){try{await this.$store.dispatch("loadApiItems",{link:this.apiItemsLink,show:!0,filters:t})}catch(e){this.$root.$emit("error",e,"Sorry, loading a filtered list of STAC Items failed.")}},mapClicked(t){console.log(t)}}},O=Z,B=(0,g.Z)(O,s,i,!1,null,null,null),E=B.exports},6525:function(t){t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(s){return console.error(s),t}return a}},9245:function(t,e,a){"use strict";a.d(e,{K:function(){return s}});const s="https://api.stacspec.org/v1.*/item-search#sort"}}]);
//# sourceMappingURL=catalog.43c4155d.js.map