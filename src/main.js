import Vue from "vue";
import StacBrowser from "./StacBrowser.vue";

Vue.config.productionTip = false;

let CONFIG;
if (typeof CONFIG_PATH === 'undefined' || typeof CONFIG_CLI === 'undefined') {
  CONFIG = require('../config');
}
else {
  CONFIG = Object.assign(require(CONFIG_PATH), CONFIG_CLI);
}

new Vue({
  propsData: CONFIG,
  render: (h) => h(StacBrowser)
}).$mount("#stac-browser");
