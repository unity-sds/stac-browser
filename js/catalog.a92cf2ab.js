(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["catalog"],{"188f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"items mb-4"},[a("h2",[t._v(" Items "),t.api?t._e():[t._v("("+t._s(t.items.length)+")")]],2),t.api?a("Pagination",{ref:"topPagination",attrs:{pagination:t.pagination,placement:"top"},on:{paginate:t.paginate}}):t._e(),t.allowFilter?[t.api?a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.itemFilter",modifiers:{itemFilter:!0}}],staticClass:"mb-4 mt-2 ml-3",attrs:{pressed:t.filtersOpen,variant:"outline-primary"}},[a("b-icon-search"),t._v(" Filter ")],1):t._e(),a("b-collapse",{attrs:{id:"itemFilter"},model:{value:t.filtersOpen,callback:function(e){t.filtersOpen=e},expression:"filtersOpen"}},[a("ItemFilter",{attrs:{stac:t.stac,collectionOnly:!0},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]:t._e(),t.chunkedItems.length>0?a("b-card-group",{attrs:{columns:""}},t._l(t.chunkedItems,(function(e){return a("Item",{key:e.href,attrs:{item:e,selected:t.selected}})})),1):a("p",[t._v("Sorry, no items found.")]),t.api?a("Pagination",{attrs:{pagination:t.pagination,placement:"bottom"},on:{paginate:t.paginate}}):t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.showMore,expression:"showMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.showMore}},[t._v("Show more...")]):t._e()],2)},r=[],s=(a("d3b7"),a("3ca3"),a("ddb0"),a("a9e3"),a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",t._b({directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"item-card",class:{queued:!this.data},attrs:{"no-body":""}},"b-card",t.cardProps,!1),[t.thumbnail&&t.showThumbnail?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,fluid:""}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{link:[t.data,t.item]}})],1),a("b-card-text",[a("small",{staticClass:"text-muted"},[t.extent?[t._v(t._s(t._f("TemporalExtent")(t.extent)))]:t.data&&t.data.properties.datetime?[t._v(t._s(t._f("Timestamp")(t.data.properties.datetime)))]:[t._v("No time given")]],2)]),t.fileFormats.length>0?a("b-card-text",t._l(t.fileFormats,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mt-1 fileformat",attrs:{variant:"secondary"}},[t._v(t._s(t._f("MediaType")(e)))])})),1):t._e()],1)],1)}),n=[],o=a("5530"),l=(a("7db0"),a("4de4"),a("d81d"),a("07ac"),a("caad"),a("2532"),a("2f62")),c=a("b701"),d=a("2a32"),u={name:"Item",components:{StacLink:c["default"]},props:{item:{type:Object,required:!0},selected:{type:Array,default:function(){return[]}}},data:function(){return{showThumbnail:!1}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(l["c"])(["crossOriginMedia"])),Object(l["b"])(["getStac"])),{},{cardProps:function(){var t=this,e={};return Array.isArray(this.selected)&&this.selected.find((function(e){return t.data.equals(e)}))&&(e["border-variant"]="danger"),e},data:function(){return this.item instanceof d["a"]?this.item:this.getStac(this.item.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return{href:null,title:""}},extent:function(){return this.data&&(this.data.properties.start_datetime||this.data.properties.end_datetime)?[this.data.properties.start_datetime,this.data.properties.end_datetime]:null},fileFormats:function(){return this.data?Object.values(this.data.assets).filter((function(t){return Array.isArray(t.roles)&&t.roles.includes("data")&&"string"===typeof t.type})).map((function(t){return t.type})).filter((function(t,e,a){return a.indexOf(t)===e})):[]}}),methods:{load:function(t){t&&(this.showThumbnail=!0),this.item instanceof d["a"]||this.$store.commit(t?"queue":"unqueue",this.item.href)}}},p=u,m=(a("83d2"),a("2877")),h=Object(m["a"])(p,s,n,!1,null,null,null),f=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{class:t.classes},[a("b-button",{attrs:{disabled:!t.pagination.first,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.first)}}},[t._v("« First")]),a("b-button",{attrs:{disabled:!t.pagination.prev,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.prev)}}},[t._v("‹ Previous")]),a("b-button",{attrs:{disabled:!t.pagination.next,variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.next)}}},[t._v("Next ›")]),t.pagination.last?a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.paginate(t.pagination.last)}}},[t._v("Last »")]):t._e()],1)},g=[],v={name:"Pagination",props:{pagination:{type:Object,default:function(){return{}}},placement:{type:String}},computed:{classes:function(){return"top"===this.placement?"mb-4 mt-2":"mb-2 mt-2"}},methods:{paginate:function(t){this.$emit("paginate",t,this.placement)}}},_=v,y=Object(m["a"])(_,b,g,!1,null,null,null),C=y.exports,x=a("5843"),k=a("7386"),w=a("025e"),I={name:"Items",components:{BCollapse:x["a"],BIconSearch:k["r"],Item:f,ItemFilter:function(){return Promise.all([a.e("chunk-45b1a3e6"),a.e("chunk-02bd5aca")]).then(a.bind(null,"5f67"))},Pagination:C},props:{items:{type:Array,required:!0},stac:{type:Object,required:!0},api:{type:Boolean,default:!1},allowFilter:{type:Boolean,default:!0},apiFilters:{type:Object,default:function(){return{}}},pagination:{type:Object,default:function(){return{}}},chunkSize:{type:Number,default:90},selected:{type:Array,default:function(){return[]}}},data:function(){return{shownItems:this.chunkSize,filters:this.apiFilters,filtersOpen:!1}},computed:{hasMore:function(){return this.items.length>this.shownItems},chunkedItems:function(){return!this.api&&this.items.length>this.chunkSize?this.items.slice(0,this.shownItems):this.items}},watch:{filters:{deep:!0,handler:function(t){this.$emit("filterItems",t)}}},methods:{showMore:function(){this.shownItems+=this.chunkSize},paginate:function(t,e){"bottom"===e&&this.$refs.topPagination&&w["a"].scrollTo(this.$refs.topPagination.$el),this.$emit("paginate",t)}}},O=I,A=Object(m["a"])(O,i,r,!1,null,null,null);e["a"]=A.exports},"1c02":function(t,e,a){"use strict";a("c737")},"247d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"catalog"},[a("b-col",{staticClass:"left"},[a("h2",[t._v("Introduction")]),t.data.deprecated?a("DeprecationNotice",{attrs:{data:t.data}}):t._e(),t.data["anon:warning"]?a("AnonymizedNotice",{attrs:{warning:t.data["anon:warning"]}}):t._e(),t.data.description?a("ReadMore",{attrs:{lines:10}},[a("Description",{attrs:{description:t.data.description}})],1):t._e(),Array.isArray(t.data.keywords)&&t.data.keywords.length>0?a("Keywords",{attrs:{keywords:t.data.keywords}}):t._e(),t.isCollection?a("section",{staticClass:"metadata mb-4"},[t.licenses?a("b-row",[a("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v("Licenses")]),a("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.licenses)}})],1):t._e(),t.temporalExtents?a("b-row",[a("b-col",{staticClass:"label",attrs:{md:"4"}},[t._v("Temporal Extents")]),a("b-col",{staticClass:"value",attrs:{md:"8"},domProps:{innerHTML:t._s(t.temporalExtents)}})],1):t._e()],1):t._e(),a("section",{staticClass:"mb-4"},[t.isCollection&&t.thumbnails.length>0?a("b-tabs",{ref:"tabs",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("b-tab",{attrs:{title:"Map"}},[a("Map",{attrs:{stac:t.data,stacLayerData:t.selectedAsset},on:{mapClicked:t.mapClicked,mapChanged:t.mapChanged}})],1),a("b-tab",{attrs:{title:"Preview"}},[a("Thumbnails",{attrs:{thumbnails:t.thumbnails}})],1)],1):t.isCollection?a("Map",{attrs:{stac:t.data,stacLayerData:t.selectedAsset},on:{mapClicked:t.mapClicked,mapChanged:t.mapChanged}}):t.thumbnails.length>0?a("Thumbnails",{attrs:{thumbnails:t.thumbnails}}):t._e()],1),t.additionalLinks.length>0?a("Links",{attrs:{title:"Additional resources",links:t.additionalLinks}}):t._e(),a("Metadata",{staticClass:"mb-4",attrs:{title:"Metadata",type:t.data.type,data:t.data,ignoreFields:t.ignoredMetadataFields}})],1),a("b-col",{staticClass:"right"},[t.hasProviders?a("Providers",{attrs:{providers:t.data.providers}}):t._e(),t.catalogs.length>0?a("Catalogs",{attrs:{catalogs:t.catalogs,hasMore:t.hasMoreCollections},on:{loadMore:t.loadMoreCollections}}):t._e(),t.hasItems?a("Items",{attrs:{stac:t.data,items:t.items,api:t.isApi,apiFilters:t.apiItemsFilter,pagination:t.itemPages},on:{paginate:t.paginateItems,filterItems:t.filterItems}}):t._e(),t.hasAssets?a("Assets",{attrs:{assets:t.assets,shown:t.shownAssets},on:{showAsset:t.showAsset}}):t._e(),t.hasItemAssets?a("Assets",{attrs:{assets:t.data.item_assets,definition:!0}}):t._e()],1)],1)},r=[],s=a("1da1"),n=a("5530"),o=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("fb6a"),a("2f62")),l=a("4d1d"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"catalogs mb-4"},[a("h2",[t._v(" Catalogs "),t.hasMore?t._e():[t._v("("+t._s(t.catalogs.length)+")")]],2),a("b-card-group",{attrs:{columns:""}},t._l(t.catalogs,(function(t){return a("Catalog",{key:t.href,attrs:{catalog:t}})})),1),t.hasMore?a("b-button",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.loadMore,expression:"loadMore",modifiers:{200:!0}}],attrs:{variant:"primary"},on:{click:t.loadMore}},[t._v("Load more...")]):t._e()],1)},d=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{directives:[{name:"b-visible",rawName:"v-b-visible.200",value:t.load,expression:"load",modifiers:{200:!0}}],staticClass:"catalog-card",class:{queued:!this.data},attrs:{"no-body":""}},[t.thumbnail&&t.showThumbnail?a("b-card-img",{staticClass:"thumbnail",attrs:{src:t.thumbnail.href,alt:t.thumbnail.title,crossorigin:t.crossOriginMedia,fluid:""}}):t._e(),a("b-card-body",[a("b-card-title",[a("StacLink",{staticClass:"stretched-link",attrs:{data:[t.data,t.catalog]}})],1),t.data&&t.data.description?a("b-card-text",{staticClass:"intro"},[t._v(" "+t._s(t._f("stripCommonmark")(t.data.description))+" ")]):t._e(),t.temporalExtent?a("b-card-text",[a("small",{staticClass:"text-muted"},[t._v(t._s(t._f("shortTemporalExtent")(t.temporalExtent)))])]):t._e()],1)],1)},p=[],m=a("b701"),h=a("2a32"),f=a("b5c1"),b=a.n(f),g=a("6057"),v={name:"Catalog",components:{StacLink:m["default"]},props:{catalog:{type:Object,required:!0}},data:function(){return{showThumbnail:!1}},filters:{stripCommonmark:function(t){return b()(t)},shortTemporalExtent:function(t){return g["Formatters"].formatTemporalExtent(t,!0)}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["c"])(["crossOriginMedia"])),Object(o["b"])(["getStac"])),{},{data:function(){return this.catalog instanceof h["a"]?this.catalog:this.getStac(this.catalog.href)},thumbnail:function(){if(this.data){var t=this.data.getThumbnails(!0,"thumbnail");if(t.length>0)return t[0]}return null},temporalExtent:function(){var t,e,a;if(null!==(t=this.data)&&void 0!==t&&t.isCollection()&&(null===(e=this.data.extent)||void 0===e||null===(a=e.temporal)||void 0===a?void 0:a.interval.length)>0){var i=this.data.extent.temporal.interval[0];if(i[0]||i[1])return this.data.extent.temporal.interval[0]}return null}}),methods:{load:function(t){t&&(this.showThumbnail=!0),this.catalog instanceof h["a"]||this.$store.commit(t?"queue":"unqueue",this.catalog.href)}}},_=v,y=(a("b18e"),a("2877")),C=Object(y["a"])(_,u,p,!1,null,null,null),x=C.exports,k={name:"Catalogs",components:{Catalog:x},props:{catalogs:{type:Array,required:!0},hasMore:{type:Boolean,default:!1}},methods:{loadMore:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&this.$emit("loadMore")}}},w=k,I=Object(y["a"])(w,c,d,!1,null,null,null),O=I.exports,A=a("160f"),M=a("188f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"keywords d-flex flex-wrap"},t._l(t.keywords,(function(e){return a("b-badge",{key:e,staticClass:"mr-1 mb-1",attrs:{variant:"secondary"}},[t._v(t._s(e))])})),1)},T=[],j={name:"Keywords",props:{keywords:{type:Array,required:!0}}},E=j,L=Object(y["a"])(E,$,T,!1,null,null,null),S=L.exports,P=a("81d3"),N=a("9a30"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"providers mb-4"},[a("h2",[t._v("Providers")]),a("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.providers,(function(t,e){return a("Provider",{key:e,attrs:{id:String(e),provider:t}})})),1)])},q=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"provider",attrs:{"no-body":""}},[a("b-card-header",{staticClass:"p-0",attrs:{"header-tag":"header",role:"tab"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"p-2 d-flex",attrs:{block:"",variant:"provider",squared:""}},[t._v(" "+t._s(t.provider.name)+" "),Array.isArray(t.provider.roles)?a("div",{staticClass:"roles ml-1 mr-2"},t._l(t.provider.roles,(function(e){return a("b-badge",{key:e,staticClass:"ml-1 mb-1",attrs:{variant:"secondary"}},[t._v(t._s(e))])})),1):t._e(),a("span",{staticClass:"ml-auto",attrs:{"aria-hidden":"true"}},[t.expanded?a("b-icon-chevron-down"):a("b-icon-chevron-up")],1)])],1),a("b-collapse",{attrs:{id:t.id,accordion:"providers",role:"tabpanel"},model:{value:t.expanded,callback:function(e){t.expanded=e},expression:"expanded"}},[a("b-card-body",[t.provider.url?a("b-button-group",[a("b-button",{attrs:{href:t.provider.url,target:"_blank",variant:"outline-primary"}},[t._v(" Go to homepage ")]),t.provider.email||t.provider.mail?a("b-button",{attrs:{href:"mailto:"+(t.provider.email||t.provider.mail),target:"_blank",variant:"outline-primary"}},[t._v(" Send e-mail ")]):t._e()],1):t._e(),t.provider.description?a("b-card-text",{staticClass:"mt-4"},[a("Description",{attrs:{description:t.provider.description,compact:!0}})],1):t._e(),a("Metadata",{staticClass:"mt-4",attrs:{data:t.provider,ignoreFields:t.ignore,title:"",type:"Provider"}})],1)],1)],1)},R=[],D=a("5843"),U=a("7386"),z={name:"Provider",components:{BCollapse:D["a"],BIconChevronDown:U["g"],BIconChevronUp:U["h"],Description:A["a"],Metadata:N["a"]},props:{provider:{type:Object,required:!0},id:{type:String,required:!0}},data:function(){return{expanded:!1,ignore:["url","name","description","roles"]}}},G=z,V=(a("6f39"),Object(y["a"])(G,B,R,!1,null,null,null)),K=V.exports,H={name:"Providers",components:{Provider:K},props:{providers:{type:Array,required:!0}}},J=H,X=Object(y["a"])(J,F,q,!1,null,null,null),Y=X.exports,Q=a("c6de"),W=a.n(Q),Z=a("a100"),tt=a("e977"),et=a("f902"),at=a("6190"),it=a("025e"),rt={name:"Catalog",mixins:[tt["a"]],components:{AnonymizedNotice:function(){return a.e("chunk-2d0b2cd9").then(a.bind(null,"2654"))},Assets:l["a"],BTabs:et["a"],BTab:at["a"],Catalogs:O,DeprecationNotice:function(){return a.e("chunk-3a966f99").then(a.bind(null,"46fb"))},Description:A["a"],Items:M["a"],Keywords:S,Links:P["a"],Map:function(){return a.e("chunk-5cde21ec").then(a.bind(null,"a0be"))},Metadata:N["a"],Providers:Y,ReadMore:W.a,Thumbnails:Z["a"]},data:function(){return{ignoredMetadataFields:["stac_version","stac_extensions","id","type","title","description","keywords","providers","license","extent","summaries","links","assets","item_assets","conformsTo","deprecated","anon:warning"]}},computed:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(o["c"])(["data","url","apiItems","apiItemsLink","apiItemsPagination","apiItemsFilter"])),Object(o["b"])(["additionalLinks","catalogs","isCollection","items","hasMoreCollections"])),{},{licenses:function(){return this.isCollection&&this.data.license?g["Formatters"].formatLicense(this.data.license,null,null,this.data):null},hasProviders:function(){return this.isCollection&&Array.isArray(this.data.providers)&&this.data.providers.length>0},temporalExtents:function(){if(this.data&&this.data.isCollection()&&this.data.extent.temporal.interval.length>0){var t=this.data.extent.temporal.interval;return t.length>1&&(t=t.slice(1)),g["Formatters"].formatTemporalExtents(t)}return null},hasItemAssets:function(){var t;return it["a"].size(null===(t=this.data)||void 0===t?void 0:t.item_assets)>0},itemPages:function(){var t=Object.assign({},this.apiItemsPagination);return!t.first&&this.data&&this.apiItemsLink&&"items"!==this.apiItemsLink.rel&&(t.first=it["a"].addFiltersToLink(this.data.getApiItemsLink(),this.apiItemsFilter)),t},isApi:function(){return Boolean(this.apiItemsLink)},hasItems:function(){return this.items.length>0||this.isApi}}),methods:{loadMoreCollections:function(){this.$store.dispatch("loadNextApiCollections",{show:!0})},paginateItems:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("loadApiItems",{link:t,show:!0});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),e.$root.$emit("error",a.t0,"Sorry, loading the list of STAC Items failed.");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},filterItems:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$store.dispatch("loadApiItems",{link:e.apiItemsLink,show:!0,filters:t});case 3:a.next=8;break;case 5:a.prev=5,a.t0=a["catch"](0),e.$root.$emit("error",a.t0,"Sorry, loading a filtered list of STAC Items failed.");case 8:case"end":return a.stop()}}),a,null,[[0,5]])})))()},mapClicked:function(t){console.log(t)}}},st=rt,nt=(a("1c02"),Object(y["a"])(st,i,r,!1,null,null,null));e["default"]=nt.exports},"408a":function(t,e,a){var i=a("e330");t.exports=i(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("e330"),r=a("1d80"),s=a("577e"),n=a("5899"),o=i("".replace),l="["+n+"]",c=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),u=function(t){return function(e){var a=s(r(e));return 1&t&&(a=o(a,c,"")),2&t&&(a=o(a,d,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},"6f39":function(t,e,a){"use strict";a("e113")},"83d2":function(t,e,a){"use strict";a("96a9")},8665:function(t,e,a){},"96a9":function(t,e,a){},a9e3:function(t,e,a){"use strict";var i=a("83ab"),r=a("da84"),s=a("e330"),n=a("94ca"),o=a("6eeb"),l=a("1a2d"),c=a("7156"),d=a("3a9b"),u=a("d9b5"),p=a("c04e"),m=a("d039"),h=a("241c").f,f=a("06cf").f,b=a("9bf2").f,g=a("408a"),v=a("58a8").trim,_="Number",y=r[_],C=y.prototype,x=r.TypeError,k=s("".slice),w=s("".charCodeAt),I=function(t){var e=p(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,a,i,r,s,n,o,l,c=p(t,"number");if(u(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),e=w(c,0),43===e||45===e){if(a=w(c,2),88===a||120===a)return NaN}else if(48===e){switch(w(c,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(s=k(c,2),n=s.length,o=0;o<n;o++)if(l=w(s,o),l<48||l>r)return NaN;return parseInt(s,i)}return+c};if(n(_,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var A,M=function(t){var e=arguments.length<1?0:y(I(t)),a=this;return d(C,a)&&m((function(){g(a)}))?c(Object(e),a,M):e},$=i?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;$.length>T;T++)l(y,A=$[T])&&!l(M,A)&&b(M,A,f(y,A));M.prototype=C,C.constructor=M,o(r,_,M)}},b18e:function(t,e,a){"use strict";a("8665")},b5c1:function(t,e){t.exports=function(t,e){e=e||{},e.listUnicodeChar=!!e.hasOwnProperty("listUnicodeChar")&&e.listUnicodeChar,e.stripListLeaders=!e.hasOwnProperty("stripListLeaders")||e.stripListLeaders,e.gfm=!e.hasOwnProperty("gfm")||e.gfm,e.useImgAltText=!e.hasOwnProperty("useImgAltText")||e.useImgAltText;var a=t||"";a=a.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm,"");try{e.stripListLeaders&&(a=e.listUnicodeChar?a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,e.listUnicodeChar+" $1"):a.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),e.gfm&&(a=a.replace(/\n={2,}/g,"\n").replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),a=a.replace(/<[^>]*>/g,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,e.useImgAltText?"$1":"").replace(/\[(.*?)\][\[\(].*?[\]\)]/g,"$1").replace(/^\s{0,3}>\s?/g,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g,"$2").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/\n{2,}/g,"\n\n")}catch(i){return console.error(i),t}return a}},c737:function(t,e,a){},e113:function(t,e,a){}}]);
//# sourceMappingURL=catalog.a92cf2ab.js.map