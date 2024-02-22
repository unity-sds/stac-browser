"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[6312,505],{11224:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"search d-flex flex-column"},[t.parent?t.searchLink?e("b-row",[e("b-col",{staticClass:"left"},[e("b-tabs",{model:{value:t.activeSearch,callback:function(e){t.activeSearch=e},expression:"activeSearch"}},[t.collectionSearch?e("b-tab",{attrs:{title:t.$t("search.tabs.collections")}},[e("SearchFilter",{attrs:{parent:t.parent,title:"",value:t.collectionFilters,type:"Collections"},on:{input:t.setFilters}})],1):t._e(),t.itemSearch?e("b-tab",{attrs:{title:t.$t("search.tabs.items")}},[e("SearchFilter",{attrs:{parent:t.parent,title:"",value:t.itemFilters,type:"Global"},on:{input:t.setFilters}})],1):t._e()],1)],1),e("b-col",{staticClass:"right"},[t.error?e("b-alert",{attrs:{variant:"error",show:""}},[t._v(t._s(t.error))]):!t.data&&t.loading?e("Loading",{attrs:{fill:"",top:""}}):null===t.data?e("b-alert",{attrs:{variant:"info",show:""}},[t._v(t._s(t.$t("search.modifyCriteria")))]):0===t.results.length?e("b-alert",{attrs:{variant:"warning",show:""}},[t._v(t._s(t.$t("search.noItemsFound")))]):[t.itemCollection?e("div",{attrs:{id:"search-map"}},[e("Map",{attrs:{stac:t.stac,stacLayerData:t.itemCollection,scrollWheelZoom:"",popover:""}})],1):t._e(),t.isCollectionSearch?e("Catalogs",{attrs:{catalogs:t.results,collectionsOnly:"",pagination:t.pagination,loading:t.loading,count:t.totalCount},on:{paginate:t.loadResults},scopedSlots:t._u([{key:"catalogFooter",fn:function(a){return[t.itemSearch||t.canFilterItems(a.data)?e("b-button-group",{attrs:{vertical:"",size:"sm"}},[t.itemSearch?e("b-button",{attrs:{variant:"outline-primary",pressed:t.selectedCollections[a.data.id]},on:{click:function(e){return t.selectForItemSearch(a.data)}}},[t.selectedCollections[a.data.id]?e("b-icon-check-square"):e("b-icon-square"),e("span",{staticClass:"ml-2"},[t._v(t._s(t.$t("search.selectForItemSearch")))])],1):t._e(),e("StacLink",{attrs:{button:{variant:"outline-primary",disabled:!t.canFilterItems(a.data)},data:a.data,title:t.$t("search.filterCollection"),state:{itemFilterOpen:1}}})],1):t._e()]}}],null,!1,970447694)}):e("Items",{attrs:{stac:t.stac,items:t.results,api:!0,allowFilter:!1,pagination:t.pagination,loading:t.loading,count:t.totalCount},on:{paginate:t.loadResults}})]],2)],1):e("b-alert",{attrs:{variant:"danger",show:""}},[t._v(t._s(t.$t("search.notSupported")))]):e("Loading",{attrs:{stretch:""}}),t.selectedCollectionCount>0?e("b-alert",{staticClass:"selected-collections-action",attrs:{show:"",variant:"dark"}},[e("b-button",{attrs:{variant:"primary",size:"lg"},on:{click:t.openItemSearch}},[t._v(" "+t._s(t.$tc("search.useInItemSearch",t.selectedCollectionCount,{count:t.selectedCollectionCount}))+" ")])],1):t._e()],1)},s=[],r=a(95353),l=a(2566),n=a(33951),o=a(39773),c=a(31831),h=a(82948),u=a(63405),d=a(95050),p=a(33484),m={name:"Search",components:{BIconCheckSquare:h.z68,BIconSquare:h.Hcz,BTab:u.a,BTabs:d.r,Catalogs:()=>Promise.resolve().then(a.bind(a,48005)),Loading:o.A,Items:()=>Promise.resolve().then(a.bind(a,49728)),Map:()=>a.e(4701).then(a.bind(a,74701)),SearchFilter:n["default"],StacLink:()=>Promise.resolve().then(a.bind(a,58581))},props:{loadParent:{type:String,default:null}},data(){return{parent:null,error:null,link:null,loading:!1,data:null,itemFilters:{},collectionFilters:{},activeSearch:0,selectedCollections:{}}},computed:{...(0,r.aH)(["catalogUrl","catalogTitle","itemsPerPage"]),...(0,r.L8)(["canSearchItems","canSearchCollections","getStac","root","collectionLink","parentLink","fromBrowserPath","toBrowserPath"]),selectedCollectionCount(){return l.Ay.size(this.selectedCollections)},totalCount(){return"number"===typeof this.data.numberMatched?this.data.numberMatched:null},stac(){return this.parent instanceof c.A?this.parent:null},searchLink(){return this.isCollectionSearch?this.collectionSearch:this.itemSearch},collectionSearch(){return this.canSearchCollections&&this.parent instanceof c.A&&this.parent.getApiCollectionsLink()},itemSearch(){return this.canSearchItems&&this.parent instanceof c.A&&this.parent.getSearchLink()},itemCollection(){return this.isCollectionSearch?null:{type:"FeatureCollection",features:this.results,links:[]}},results(){if(0===l.Ay.size(this.data))return[];let t=this.isCollectionSearch?this.data.collections:this.data.features,e=this.isCollectionSearch?"Collection":"Feature";return Array.isArray(t)?t.map((t=>{try{if(!l.Ay.isObject(t)||t.type!==e)return null;let a,i=l.Ay.getLinkWithRel(t.links,"self");null!==i&&void 0!==i&&i.href&&(a=l.Ay.toAbsolute(i.href,this.link.href));let s=new c.A(t,a,this.toBrowserPath(a));return s=(0,p.Pj)(this.$store.state,s),s}catch(a){return console.error(a),null}})).filter((t=>t instanceof c.A)):[]},pagination(){return l.Ay.getPaginationLinks(this.data)},filters(){return this.isCollectionSearch?this.collectionFilters:this.itemFilters},isCollectionSearch(){return this.collectionSearch&&0===this.activeSearch},pageDescription(){let t=c.A.getDisplayTitle([this.collectionLink,this.parentLink,this.root],this.catalogTitle);return this.$t("search.metaDescription",{title:t})}},watch:{activeSearch(){this.data=null},searchLink:{immediate:!0,handler(){this.searchLink&&this.showPage()}}},async created(){let t=this.catalogUrl;this.loadParent?(t=this.fromBrowserPath(this.loadParent),this.parent=this.getStac(t)):this.parent=this.root,this.parent||(await this.$store.dispatch("load",{url:t}),this.root||this.$store.commit("config",{catalogUrl:t}),this.parent=this.getStac(t),this.showPage())},methods:{openItemSearch(){this.$set(this.itemFilters,"collections",Object.keys(this.selectedCollections)),this.activeSearch=1,this.selectedCollections={}},selectForItemSearch(t){this.selectedCollections[t.id]?this.$delete(this.selectedCollections,t.id):this.$set(this.selectedCollections,t.id,!0)},canFilterItems(t){return t instanceof c.A&&Boolean(t.getApiItemsLink())},async loadResults(t){this.error=null,this.loading=!0;try{this.link=l.Ay.addFiltersToLink(t,this.filters,this.itemsPerPage);let e=this.isCollectionSearch?"collections":"features",a=await(0,p.FF)(this.$store,this.link);a&&this.showPage(a.config.url),l.Ay.isObject(a.data)&&Array.isArray(a.data[e])?this.data=a.data:(this.data={},this.error=this.$t(this.isCollectionSearch?"errors.invalidStacCollections":"errors.invalidStacItems"))}catch(e){this.data={},this.error=e.message}finally{this.loading=!1}},async setFilters(t,e=!1){this.isCollectionSearch?this.collectionFilters=t:this.itemFilters=t,e?this.data=null:await this.loadResults(this.searchLink)},showPage(t){this.$store.commit("showPage",{title:this.$t("search.title"),description:this.pageDescription,url:t})}}},g=m,S=a(81656),C=(0,S.A)(g,i,s,!1,null,null,null),b=C.exports}}]);
//# sourceMappingURL=6312.d36a4cd2.js.map