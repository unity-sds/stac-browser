import Utils, { geojsonMediaType } from "../utils";
import { getBest } from '../locale-id';
import create, { STAC } from 'stac-js';

// Uncomment these lines if the old checksum: fields should be converted
// This is usually not needed so it's not enabled by default to shrink the bundle size
// import Migrate from '@radiantearth/stac-migrate';
// Migrate.enableMultihash(require('multihashes'));

// STAC Entity
const StacMixin = {

    _path: null,
    _apiChildrenListeners: {},
    _incomplete: false,
    _apiChildren: {
      list: [],
      prev: false,
      next: false
    },

  isPotentiallyIncomplete() {
    return this._incomplete;
  },

  markPotentiallyIncomplete() {
    this._incomplete = true;
  },

  hasApiData() {
    return this._apiChildren.list.length > 0;
  },

  setApiDataListener(id, listener = null) {
    if (typeof listener === 'function') {
      this._apiChildrenListeners[id] = listener;
    }
    else {
      delete this._apiChildrenListeners[id];
    }
  },

  setApiData(list, next = null, prev = null) {
    if (prev) {
      this._apiChildren.prev = prev;
    }
    if (next) {
      this._apiChildren.next = next;
    }
    this._apiChildren.list = list;

    for (let id in this._apiChildrenListeners) {
      try {
        this._apiChildrenListeners[id](this._apiChildren);
      } catch (error) {
        console.error(error);
      }
    }
  },

  getFileFormats() {
    let assets = [];
    if ((this.isItem() || this.isCollection()) && Utils.isObject(this.assets)) {
      assets = assets.concat(Object.values(this.assets));
    }
    if (this.isCollection() && Utils.isObject(this.item_assets)) {
      assets = assets.concat(Object.values(this.item_assets));
    }
    return assets
      .filter(asset => Array.isArray(asset.roles) && asset.roles.includes('data') && typeof asset.type === 'string') // Look for data files
      .map(asset => asset.type) // Array shall only contain media types
      .filter((v, i, a) => a.indexOf(v) === i); // Unique values
  },

  getChildren(priority = null) {
    if (!this.isCatalogLike()) {
      return [];
    }

    let showCollections = !priority || priority === 'collections';
    let showChilds = !priority || priority === 'childs';

    let children = [];
    if (showCollections && this._apiChildren.prev) {
      children.push(this._apiChildren.prev);
    }
    if (showCollections && this._apiChildren.list.length > 0) {
      children = this._apiChildren.list;
    }
    if (showChilds) {
      children = addMissingChildren(children, this).concat(this.getLinksWithRels(['item']));
    }
    if (showCollections && this._apiChildren.next) {
      children.push(this._apiChildren.next);
    }
    return children;
  },

  getSearchLink() {
    // The search link MUST be 'application/geo+json' as otherwise it's likely not STAC
    // See https://github.com/opengeospatial/ogcapi-features/issues/832
    let links = Utils.getLinksWithRels(this.links, ['search'])
      .filter(link => Utils.isMediaType(link.type, geojsonMediaType))
      .map(link => Object.assign({}, link, {href: Utils.toAbsolute(link.href, this._url)}));
    // Prefer POST if present
    let post = links.find(link => Utils.hasText(link.method) && link.method.toUpperCase() === 'POST');
    return post || links[0] || null;
  },

  setBrowserPath(path) {
    this._path = path;
  },

  getBrowserPath() {
    return this._path;
  },

  getLocaleLink(locale, fallbackLocale = null) {
    let links = this.getStacLinksWithRel('alternate')
      .filter(link => Utils.hasText(link.hreflang));
    
    let available;
    if (Array.isArray(this.languages)) {
      available = this.languages.map(l => l.code);
    }
    else {
      available = links.map(link => link.hreflang);
    }
    
    let best = getBest(available, locale, fallbackLocale);
    return links.find(link => link.hreflang === best) || null;
  }
};

Object.assign(STAC.prototype, StacMixin);

export function createSTAC(data, url, path) {
  let obj = create(data, url);
  obj.setBrowserPath(path);
  return obj;
}

export function addMissingChildren(catalogs, stac) {
  let links = stac.getStacLinksWithRel('child').filter(link => {
    // Don't add links that are already in collections: https://github.com/radiantearth/stac-browser/issues/103
    // ToDo: The runtime of this can probably be improved
    let absoluteUrl = Utils.toAbsolute(link.href, stac.getAbsoluteUrl());
    return !catalogs.find(collection => collection.getAbsoluteUrl() === absoluteUrl);
  });
  return catalogs.concat(links);
}

export function getDisplayTitle(sources, fallbackTitle = null) {
  if (!Array.isArray(sources)) {
    sources = [sources];
  }
  let stac = sources.find(o => o instanceof STAC);
  let link = sources.find(o => Utils.isObject(o) && !(o instanceof STAC));
  // Get title from STAC item/catalog/collection
  if (stac && Utils.hasText(stac.getMetadata("title"))) {
    return stac.getMetadata("title");
  }
  // Get title from link
  else if (link && Utils.hasText(link.title)) {
    return link.title;
  }
  // Use id from STAC item/catalog/collection instead of titles
  else if (stac && Utils.hasText(stac.id)) {
    return stac.id;
  }
  // Use fallback title
  else if (Utils.hasText(fallbackTitle)) {
    return fallbackTitle;
  }
  // Use file or directory name from STAC as title
  else if (stac) {
    return Utils.titleForHref(stac.getAbsoluteUrl(), true);
  }
  // Use file or directory name from link as title
  else if (link && Utils.hasText(link.href)) {
    return Utils.titleForHref(link.href, true);
  }
  // Nothing available, return "untitled"
  else {
    return "Untitled";
  }
}

export default STAC;