import { u as useColorMode, a as useStorage } from "./index-92728829.js";
import { r as registerVersion, i as initializeApp, c as connectAuthEmulator, g as getAuth } from "./index-90ebcfae-3aa38dd7.js";
import { c as createPinia } from "./pinia.esm-browser-4714cee3.js";
import { c as createApp } from "./runtime-dom.esm-bundler-32f2d5b0.js";
import { p as plugin } from "./vue3-mq.es-5da68cb5.js";
import { _ as __unplugin_components_2 } from "./CoreScrollable-aeda2e1b.js";
import { _ as __unplugin_components_0 } from "./Extendable-4e957354.js";
import "./useRecentDocs-5169304a.js";
import { $ as $a, O, R as Ra, B as Ba } from "./firestore-20470781.js";
import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
import { d as defineComponent, a as defineAsyncComponent, o as openBlock, c as createBlock, u as unref, r as resolveComponent, b as createElementBlock, e as createCommentVNode, f as createVNode, n as normalizeClass, h, p as provide } from "./runtime-core.esm-bundler-9a0ba37c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { c as connectStorageEmulator, g as getStorage } from "./index.esm2017-1fab45ee.js";
import { u as updateGlobalConfig, g as globalConfig } from "./global-6817a2cb.js";
import { u as unwrap, l as localforage, s as store, r as router, S as SET_USER, a as SET_SUBSCRIPTION } from "./router-e4b51da9.js";
import { S as SET_SHOW_WELCOME, a as SET_OFFLINE, b as SET_ONLINE, c as SET_MOD_KEY } from "./actions-a6a34f3c.js";
import "./overlayscrollbars.esm-084eb65b.js";
import "./vue-router-944476c0.js";
import "./vuex.esm-bundler-4cb42885.js";
import "./contexts-e80363e8.js";
import "./doc-aa27f392.js";
import "./index.browser-0a05c6e5.js";
import "./title-23c0a2fd.js";
import "./settings-f2786260.js";
import "./_commonjsHelpers-dd024a83.js";
import "./_commonjs-dynamic-modules-58f2b0ec.js";
import "./debouncer-2293cf40.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const useAppearance = () => {
  const appearance = useColorMode({
    emitAuto: true,
    modes: {
      october: "dark october"
    }
  });
  return {
    appearance
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AsyncChangeLog",
  setup(__props) {
    const AsyncChangeLog = defineAsyncComponent(() => {
      return __vitePreload(() => import("./ChangeLog-07735e61.js"), true ? ["assets/ChangeLog-07735e61.js","assets/account-d76573e6.js","assets/vuex.esm-bundler-4cb42885.js","assets/runtime-core.esm-bundler-9a0ba37c.js","assets/_plugin-vue_export-helper-cc2b3d55.js","assets/Modal-6bfb23d9.js","assets/CoreScrollable-aeda2e1b.js","assets/overlayscrollbars.esm-084eb65b.js"] : void 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(AsyncChangeLog));
    };
  }
});
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  components: {
    AsyncChangeLog: _sfc_main$1
  },
  inject: ["mq"],
  computed: {
    flow() {
      return this.$route.query.flow;
    },
    home() {
      return this.$route.name === "home";
    },
    ligatures() {
      return this.$store.state.settings.editor.ligatures;
    },
    publicDoc() {
      return this.$route.name === "public-doc";
    },
    sizes() {
      if (this.mq.current === "xs")
        return ["xs xs-plus"];
      if (this.mq.current === "sm")
        return ["sm xs-plus sm-plus"];
      if (this.mq.current === "md")
        return ["md xs-plus sm-plus md-plus"];
      if (this.mq.current === "lg")
        return ["lg xs-plus sm-plus md-plus lg-plus"];
      if (this.mq.current === "xl")
        return ["xl xs-plus sm-plus md-plus lg-plus xl-plus"];
      return [];
    }
  },
  methods: {
    closeChangelog() {
      this.showChangelog = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AsyncChangeLog = _sfc_main$1;
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", {
    id: "app",
    class: normalizeClass(["h-full", $options.sizes.concat([!$options.ligatures && "ligatures-none"])])
  }, [
    !$options.home && !$options.publicDoc && !$options.flow ? (openBlock(), createBlock(_component_AsyncChangeLog, { key: 0 })) : createCommentVNode("", true),
    createVNode(_component_router_view, {
      inheritAttrs: true,
      class: "flex-grow flex-shrink min-h-0"
    })
  ], 2);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var name = "firebase";
var version = "9.9.0";
registerVersion(name, version, "app");
const config = {
  apiKey: "AIzaSyCqk-k-XiYFYgPQo28ITj3qkxoqDGDrVk0",
  appId: "1:1011232276130:web:1ae2ea1437c349a4c2e1fb",
  authDomain: "api.octo.app",
  databaseURL: "https://octo-64838.firebaseio.com",
  messagingSenderId: "1011232276130",
  projectId: "octo-64838",
  storageBucket: "octo-64838.appspot.com"
};
const verifyConfig = () => {
  const missingKeys = Object.keys(config).filter((key) => !config[key]);
  if (missingKeys.length > 0) {
    console.warn(
      `Skipping Firebase initialization. Missing keys: [${missingKeys.join(", ")}]`
    );
    return false;
  }
  return true;
};
const init = () => {
  if (!verifyConfig()) {
    return;
  }
  const app2 = initializeApp(config);
  $a(app2, {
    experimentalAutoDetectLongPolling: true
  });
  O("error");
  if (location.hostname === "localhost" && !{}.VITE_FIREBASE_EMULATOR_BYPASS) {
    connectAuthEmulator(
      getAuth(),
      {}.VITE_FIREBASE_EMULATOR_AUTH,
      {
        disableWarnings: true
      }
    );
    Ra(
      Ba(),
      {}.VITE_FIREBASE_EMULATOR_FIRESTORE_HOST,
      {}.VITE_FIREBASE_EMULATOR_FIRESTORE_PORT
    );
    connectStorageEmulator(
      getStorage(),
      {}.VITE_FIREBASE_EMULATOR_STORAGE_HOST,
      {}.VITE_FIREBASE_EMULATOR_STORAGE_PORT
    );
  }
  updateGlobalConfig({ supportsFirebase: true });
};
function getObjectType(object) {
  if (typeof object !== "object" || object === null) {
    return 0;
  }
  if (Array.isArray(object)) {
    return 2;
  }
  if (isRecord(object)) {
    return 1;
  }
  if (object instanceof Set) {
    return 3;
  }
  if (object instanceof Map) {
    return 4;
  }
  return 5;
}
function getKeys(objects) {
  const keys = /* @__PURE__ */ new Set();
  for (const object of objects) {
    for (const key of [
      ...Object.keys(object),
      ...Object.getOwnPropertySymbols(object)
    ]) {
      keys.add(key);
    }
  }
  return keys;
}
function objectHasProperty(object, property) {
  return typeof object === "object" && Object.prototype.propertyIsEnumerable.call(object, property);
}
function getIterableOfIterables(iterables) {
  return {
    *[Symbol.iterator]() {
      for (const iterable of iterables) {
        for (const value of iterable) {
          yield value;
        }
      }
    }
  };
}
const validRecordToStringValues = /* @__PURE__ */ new Set([
  "[object Object]",
  "[object Module]"
]);
function isRecord(value) {
  if (!validRecordToStringValues.has(Object.prototype.toString.call(value))) {
    return false;
  }
  const { constructor } = value;
  if (constructor === void 0) {
    return true;
  }
  const prototype = constructor.prototype;
  if (prototype === null || typeof prototype !== "object" || !validRecordToStringValues.has(Object.prototype.toString.call(prototype))) {
    return false;
  }
  if (!prototype.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
const defaultMergeFunctions = {
  mergeMaps: defaultMergeMaps,
  mergeSets: defaultMergeSets,
  mergeArrays: defaultMergeArrays,
  mergeRecords: defaultMergeRecords,
  mergeOthers: leaf
};
const actions = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
function defaultMetaDataUpdater(previousMeta, metaMeta) {
  return metaMeta;
}
function deepmerge(...objects) {
  return deepmergeCustom({})(...objects);
}
function deepmergeCustom(options, rootMetaData) {
  const utils = getUtils(options, customizedDeepmerge);
  function customizedDeepmerge(...objects) {
    return mergeUnknowns(objects, utils, rootMetaData);
  }
  return customizedDeepmerge;
}
function getUtils(options, customizedDeepmerge) {
  var _a, _b;
  return {
    defaultMergeFunctions,
    mergeFunctions: {
      ...defaultMergeFunctions,
      ...Object.fromEntries(Object.entries(options).filter(([key, option]) => Object.prototype.hasOwnProperty.call(defaultMergeFunctions, key)).map(([key, option]) => option === false ? [key, leaf] : [key, option]))
    },
    metaDataUpdater: (_a = options.metaDataUpdater) !== null && _a !== void 0 ? _a : defaultMetaDataUpdater,
    deepmerge: customizedDeepmerge,
    useImplicitDefaultMerging: (_b = options.enableImplicitDefaultMerging) !== null && _b !== void 0 ? _b : false,
    actions
  };
}
function mergeUnknowns(values, utils, meta) {
  if (values.length === 0) {
    return void 0;
  }
  if (values.length === 1) {
    return mergeOthers(values, utils, meta);
  }
  const type = getObjectType(values[0]);
  if (type !== 0 && type !== 5) {
    for (let m_index = 1; m_index < values.length; m_index++) {
      if (getObjectType(values[m_index]) === type) {
        continue;
      }
      return mergeOthers(values, utils, meta);
    }
  }
  switch (type) {
    case 1:
      return mergeRecords(values, utils, meta);
    case 2:
      return mergeArrays(values, utils, meta);
    case 3:
      return mergeSets(values, utils, meta);
    case 4:
      return mergeMaps(values, utils, meta);
    default:
      return mergeOthers(values, utils, meta);
  }
}
function mergeRecords(values, utils, meta) {
  const result = utils.mergeFunctions.mergeRecords(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeRecords !== utils.defaultMergeFunctions.mergeRecords) {
    return utils.defaultMergeFunctions.mergeRecords(values, utils, meta);
  }
  return result;
}
function mergeArrays(values, utils, meta) {
  const result = utils.mergeFunctions.mergeArrays(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeArrays !== utils.defaultMergeFunctions.mergeArrays) {
    return utils.defaultMergeFunctions.mergeArrays(values);
  }
  return result;
}
function mergeSets(values, utils, meta) {
  const result = utils.mergeFunctions.mergeSets(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeSets !== utils.defaultMergeFunctions.mergeSets) {
    return utils.defaultMergeFunctions.mergeSets(values);
  }
  return result;
}
function mergeMaps(values, utils, meta) {
  const result = utils.mergeFunctions.mergeMaps(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeMaps !== utils.defaultMergeFunctions.mergeMaps) {
    return utils.defaultMergeFunctions.mergeMaps(values);
  }
  return result;
}
function mergeOthers(values, utils, meta) {
  const result = utils.mergeFunctions.mergeOthers(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeOthers !== utils.defaultMergeFunctions.mergeOthers) {
    return utils.defaultMergeFunctions.mergeOthers(values);
  }
  return result;
}
function defaultMergeRecords(values, utils, meta) {
  const result = {};
  for (const key of getKeys(values)) {
    const propValues = [];
    for (const value of values) {
      if (objectHasProperty(value, key)) {
        propValues.push(value[key]);
      }
    }
    if (propValues.length === 0) {
      continue;
    }
    const updatedMeta = utils.metaDataUpdater(meta, {
      key,
      parents: values
    });
    const propertyResult = mergeUnknowns(propValues, utils, updatedMeta);
    if (propertyResult === actions.skip) {
      continue;
    }
    if (key === "__proto__") {
      Object.defineProperty(result, key, {
        value: propertyResult,
        configurable: true,
        enumerable: true,
        writable: true
      });
    } else {
      result[key] = propertyResult;
    }
  }
  return result;
}
function defaultMergeArrays(values) {
  return values.flat();
}
function defaultMergeSets(values) {
  return new Set(getIterableOfIterables(values));
}
function defaultMergeMaps(values) {
  return new Map(getIterableOfIterables(values));
}
function leaf(values) {
  return values[values.length - 1];
}
const caching = async ({ options: { caching: options }, store: store2 }) => {
  if (!options) {
    return;
  }
  if (options === true) {
    options = {};
  }
  const {
    actions: actions2 = false,
    mutations = true,
    namespace = store2.$id,
    hydrate = async (cache2) => {
      const state = await cache2.getItem(namespace);
      if (state) {
        store2.$state = deepmerge(store2.$state, state);
      }
    },
    persist = async (cache2) => {
      await cache2.setItem(namespace, unwrap(store2.$state));
    }
  } = options;
  const cache = localforage.createInstance({ name: namespace });
  await hydrate(cache);
  if (mutations) {
    store2.$subscribe((_mutation, _state) => {
      persist(cache);
    }, { detached: true });
  } else if (actions2) {
    store2.$onAction((_action) => {
      persist(cache);
    }, true);
  }
};
const app$1 = "";
const overlayscrollbars = "";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  const updateServiceWorker = async (reloadPage = true) => {
    await registerPromise;
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox, messageSW } = await __vitePreload(() => import("./workbox-window.prod.es5-6a9d82f3.js"), true ? [] : void 0);
      wb = new Workbox("/sw.js", { scope: "/", type: "classic" });
      wb.addEventListener("activated", (event) => {
        if (event.isUpdate)
          window.location.reload();
        else
          onOfflineReady == null ? void 0 : onOfflineReady();
      });
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/sw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
registerSW({
  immediate: true,
  onOfflineReady() {
  },
  onNeedRefresh() {
    window.dispatchEvent(
      new Event("swupdated")
    );
  },
  onRegistered(swRegistration) {
  },
  onRegisterError(e) {
  }
});
class Interface {
  constructor() {
    this.components = /* @__PURE__ */ new Set();
  }
  registerComponent({ component, container, position }) {
    this.components.add({ component, container, position });
  }
}
class Manager {
  constructor() {
    this.packages = /* @__PURE__ */ new Set();
    this.components = /* @__PURE__ */ new Set();
  }
  emit(event, data) {
    this.packages.forEach((pack) => pack.emit(event, data));
  }
  getComponents(container, position) {
    return [...this.components].filter((component) => {
      return component.container === container && component.position === position;
    }).map(({ component }) => component);
  }
  register(pack) {
    const sdk = new Interface();
    pack.register(sdk);
    sdk.components.forEach((component) => this.components.add(component));
    this.packages.add(pack);
  }
}
const PackageManager = new Manager();
const updateAppHeight = () => {
  document.documentElement.style.setProperty("--app-height", `calc(${window.visualViewport.height}px - 1px)`);
};
init();
updateAppHeight();
window.visualViewport.addEventListener("resize", updateAppHeight);
if (localStorage.getItem("octo/welcome/v1") === null) {
  store.dispatch(SET_SHOW_WELCOME, true);
}
window.addEventListener("offline", () => {
  store.dispatch(SET_OFFLINE);
});
window.addEventListener("online", () => {
  store.dispatch(SET_ONLINE);
});
if (!navigator.onLine) {
  store.dispatch(SET_OFFLINE);
}
if (/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData.platform)) {
  store.dispatch(SET_MOD_KEY, "⌘");
}
const app = createApp({
  render: () => h(App),
  setup() {
    const email = useStorage("email", "");
    const user = useStorage("user", {
      id: void 0,
      providers: [],
      roles: []
    }, void 0, { mergeDefaults: true });
    const { appearance } = useAppearance();
    provide("appearance", appearance);
    provide("email", email);
    provide("user", user);
    if (globalConfig.supportsFirebase) {
      getAuth().onIdTokenChanged(async (authUser) => {
        if (authUser) {
          user.value = {
            ...user.value,
            id: authUser.uid,
            providers: [...authUser.providerData]
          };
          store.commit(SET_USER, authUser);
          const token = await authUser.getIdTokenResult(true);
          if (token.claims.ambassador && !user.value.roles.includes("ambassador")) {
            user.value = {
              ...user.value,
              roles: [...user.value.roles, "ambassador"]
            };
            store.commit(SET_SUBSCRIPTION, { pro: true });
          }
          if (token.claims.stripeRole === "subscriber" && !user.value.roles.includes("subscriber")) {
            user.value = {
              ...user.value,
              roles: [...user.value.roles, "subscriber"]
            };
            store.commit(SET_SUBSCRIPTION, { pro: true });
          }
        } else {
          user.value = {
            id: void 0,
            providers: [],
            roles: []
          };
          store.commit(SET_USER, null);
          store.commit(SET_SUBSCRIPTION, { pro: false });
        }
      });
    }
  }
});
const pinia = createPinia();
pinia.use(caching);
app.config.globalProperties.$packageManager = PackageManager;
app.use(pinia);
app.use(router);
app.use(store);
app.component("CoreScrollable", __unplugin_components_2);
app.component("Extendable", __unplugin_components_0);
app.use(plugin, {
  breakpoints: {
    xs: 0,
    sm: 577,
    md: 769,
    lg: 993,
    xl: 1201
  }
});
app.mount("#app");
//# sourceMappingURL=index-e288247d.js.map
