import { c as createPinia } from "./pinia-1b7dc050.js";
import { w as withModifiers, c as createApp } from "./runtime-dom.esm-bundler-eaea4b0e.js";
import { r as ref, a as reactive, b as readonly, i as inject, o as openBlock, c as createElementBlock, d as createBaseVNode, e as defineComponent, f as computed, _ as _export_sfc, g as resolveComponent, h as createVNode, w as withCtx, j as createTextVNode, t as toDisplayString, k as createBlock, l as onMounted, m as onBeforeUnmount, n as createCommentVNode, F as Fragment, p as renderList, q as normalizeClass, s as renderSlot, u as defineAsyncComponent, v as unref, x as provide, y as h } from "./_plugin-vue_export-helper-ea9be126.js";
import { _ as __unplugin_components_2$1 } from "./CoreScrollable-4b186a41.js";
import { _ as __unplugin_components_0$4 } from "./Extendable-dea60239.js";
import { u as useIsNuxt } from "./useIsNuxt-03feeb69.js";
import { u as useRouter } from "./vue-router-bb5abae0.js";
import { _ as __unplugin_components_1 } from "./CoreButton-765ee119.js";
import { _ as __unplugin_components_3, T as TheLeftSidebar } from "./menu-7e63b94b.js";
import { _ as __unplugin_components_0$2 } from "./CoreLink-6737d303.js";
import { _ as __unplugin_components_0 } from "./CoreDivider-0e2c45f2.js";
import { _ as __unplugin_components_0$1 } from "./TheLogo-3b3b0e0c.js";
import { u as useStore } from "./vuex.esm-bundler-99de9736.js";
import { _ as __unplugin_components_0$3 } from "./AppPage-2649d5f1.js";
import { n as nanoid } from "./index.browser-0a05c6e5.js";
import { r as registerVersion, i as initializeApp, c as connectAuthEmulator, g as getAuth } from "./index-90ebcfae-24d515d8.js";
import { u as useColorMode, a as useStorage } from "./index-7e236154.js";
import { u as useRecentDocs } from "./useRecentDocs-b417f68b.js";
import { $ as $a, O, R as Ra, B as Ba } from "./firestore-017beded.js";
import TheRightSidebar from "./meta-4e95db4d.js";
import { b as bindGlobal, u as unwrap, l as localforage, r as router, s as store } from "./router-662523d7.js";
import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
import { u as useHooks } from "./useHooks-93920b51.js";
import { c as connectStorageEmulator, g as getStorage } from "./index.esm2017-e69b4276.js";
import { u as updateGlobalConfig, g as globalConfig } from "./global-6817a2cb.js";
import "./overlayscrollbars.esm-084eb65b.js";
import "./TagLink-3b631b6d.js";
import "./Tag.vue_vue_type_script_setup_true_lang-65429ac4.js";
import "./useFiles-7bacb5ca.js";
import "./actions-7ca2be11.js";
import "./TrashIcon-8a1e2fdd.js";
import "./moment-f63e338d.js";
import "./doc-018f7423.js";
import "./contexts-e80363e8.js";
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
const _availableBreakpoints = ref([]);
const _defaultBreakpoint = ref(null);
const _defaultOrientation = ref(null);
const _defaultTheme = ref(null);
const _defaultMotion = ref(null);
const _mqState = reactive({
  current: ""
});
const _listeners = [];
const _isMounted = ref(false);
const availableBreakpoints = readonly(_availableBreakpoints);
const defaultBreakpoint = readonly(_defaultBreakpoint);
const defaultOrientation = readonly(_defaultOrientation);
const defaultTheme = readonly(_defaultTheme);
const defaultMotion = readonly(_defaultMotion);
const mqState = readonly(_mqState);
const setAvailableBreakpoints = (v) => {
  _availableBreakpoints.value = v;
};
const setDefaultBreakpoint = (v) => {
  _defaultBreakpoint.value = v;
};
const setDefaultOrientation = (v) => {
  _defaultOrientation.value = v;
};
const setDefaultTheme = (v) => {
  _defaultTheme.value = v;
};
const setDefaultMotion = (v) => {
  _defaultMotion.value = v;
};
const updateState = (v = defaultBreakpoint.value) => {
  _mqState.current = v;
  const currentIndex = availableBreakpoints.value.findIndex((bp) => bp.name === v);
  const allKeys = availableBreakpoints.value.map((bp) => bp.name);
  for (let i = 0; i < allKeys.length; i++) {
    if (i > 0 && i < allKeys.length - 1) {
      const mKey = allKeys[i] + "Minus";
      const pKey = allKeys[i] + "Plus";
      _mqState[mKey] = currentIndex <= i ? true : false;
      _mqState[pKey] = currentIndex >= i ? true : false;
    }
    _mqState[allKeys[i]] = allKeys[i] === v ? true : false;
  }
};
const resetState = () => {
  const keys = Object.keys(_mqState);
  for (let key of keys) {
    delete _mqState[key];
  }
  updateState();
  updateOrientationState();
  updateThemeState();
  updateMotionState();
};
const updateOrientationState = (v = defaultOrientation.value) => {
  _mqState.orientation = v;
  _mqState.isLandscape = v === "landscape";
  _mqState.isPortrait = v === "portrait";
};
const updateThemeState = (v = defaultTheme.value || "light") => {
  _mqState.theme = v;
  _mqState.isDark = v === "dark";
  _mqState.isLight = v === "light";
};
const updateMotionState = (v = defaultMotion.value || "no-preference") => {
  _mqState.motionPreference = v;
  _mqState.isMotion = v === "no-preference";
  _mqState.isInert = v === "reduce";
};
function removeListeners() {
  while (_listeners.length > 0) {
    const listener = _listeners.shift();
    if (listener && typeof listener === "object") {
      const { mql, cb } = listener;
      const supportsAEL = mql.addEventListener && typeof mql.addEventListener === "function";
      if (supportsAEL)
        mql.removeEventListener("change", cb);
      else
        mql.removeListener(cb);
    }
  }
}
function createMediaQueries() {
  const mediaQueries = availableBreakpoints.value.reduce((acc, curr, index, arr) => {
    const min = `(min-width: ${curr.min}px)`;
    const max = index < arr.length - 1 ? `(max-width: ${arr[index + 1].min - 1}px)` : null;
    const query = min + (max ? " and " + max : "");
    return Object.assign(acc, {
      [curr.name]: query
    });
  }, {});
  return mediaQueries;
}
function subscribeToMediaQuery(mediaQuery, callback) {
  if (typeof window === "undefined" || !window.matchMedia)
    return false;
  else if (typeof window !== "undefined" && !window.matchMedia) {
    console.error("Vue3 Mq: No MatchMedia support detected in this browser. Responsive breakpoints not available.");
    return false;
  } else {
    _isMounted.value = true;
    const mql = window.matchMedia(mediaQuery);
    const cb = ({ matches }) => {
      if (matches)
        callback();
    };
    _listeners.push({ mql, cb });
    const supportsAEL = mql.addEventListener && typeof mql.addEventListener === "function";
    if (supportsAEL)
      mql.addEventListener("change", cb);
    else
      mql.addListener(cb);
    cb(mql);
  }
}
const bootstrap5 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const bootstrap4 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
const bootstrap3 = {
  xs: 0,
  sm: 768,
  md: 992,
  lg: 1200
};
const vuetify = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904
};
const tailwind$1 = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};
const devices = {
  phone: 0,
  tablet: 768,
  laptop: 1370,
  desktop: 1906
};
const wordpress = {
  mobile: 0,
  small: 600,
  medium: 782,
  large: 960,
  xlarge: 1080,
  wide: 1280,
  huge: 1440
};
var presets = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bootstrap5,
  bootstrap4,
  bootstrap3,
  vuetify,
  tailwind: tailwind$1,
  devices,
  wordpress
}, Symbol.toStringTag, { value: "Module" }));
const validatePreset = (preset) => {
  if (typeof preset === "string" && presets[preset])
    return presets[preset];
  else {
    const availablePresets = Object.keys(presets);
    console.error(`Vue3 Mq: "${preset}" is not a valid preset. Available options are: ${availablePresets.join(", ")}`);
    return false;
  }
};
const validateOrientation = (orientation) => {
  const isValid = ["landscape", "portrait"].includes(orientation);
  if (isValid === false) {
    console.error(`Vue3 Mq: "${orientation}" is not a valid default orientation. Reverting to unset value.`);
    return null;
  } else
    return orientation;
};
const validateTheme = (theme = null) => {
  const isValid = ["dark", "light"].includes(theme);
  if (isValid === false && theme !== null) {
    console.error(`Vue3 Mq: "${theme}" is not a valid default theme. Reverting to unset value.`);
    return null;
  } else
    return theme;
};
const validateMotion = (motion = null) => {
  const isValid = ["no-preference", "reduce"].includes(motion);
  if (isValid === false && motion !== null) {
    console.error(`Vue3 Mq: "${motion}" is not a valid default motion preference. Reverting to unset value.`);
    return null;
  } else
    return motion;
};
const sanitiseBreakpoints = (breakpoints) => {
  if (!breakpoints || typeof breakpoints !== "object")
    return false;
  const sanitisedBreakpoints = [];
  for (let key in breakpoints) {
    const bp = parseFloat(breakpoints[key]);
    if (!key || typeof key !== "string") {
      console.warn(`Vue3 Mq: Invalid or missing breakpoint key (${JSON.stringify(key)}). Skipping.`);
      continue;
    } else if (/^[^a-z]/i.test(key) || /[^a-zA-Z0-9_]/.test(key)) {
      console.warn(`Vue3 Mq: "${key}" is an invalid breakpoint key. Breakpoint keys must start with a letter and contain only alphanumeric characters and underscores. Skipping.`);
      continue;
    } else if (!bp && bp !== 0 || isNaN(bp) || bp < 0) {
      console.warn(`Vue3 Mq: "${key}: ${breakpoints[key]}" is not a valid breakpoint. Breakpoints should be a number of zero or above. Skipping.`);
      continue;
    }
    sanitisedBreakpoints.push({
      name: key,
      min: bp
    });
  }
  const hasZero = sanitisedBreakpoints.some((breakpoint) => breakpoint.min === 0);
  if (!hasZero) {
    console.warn(`Vue3 Mq: You have not declared a breakpoint with a minimum value of 0. There may be screen sizes to which Vue3Mq does not respond.`);
  }
  const uniqueValues = new Set(sanitisedBreakpoints.map((breakpoint) => breakpoint.min));
  if (uniqueValues.size < sanitisedBreakpoints.length) {
    console.warn(`Vue3 Mq: Your breakpoint configuration contains duplicate values. Behaviour may be unpredictable.`);
  }
  if (sanitisedBreakpoints.length === 0)
    return false;
  else
    return sanitisedBreakpoints.sort((a, b) => a.min - b.min);
};
function updateBreakpoints({ breakpoints, preset }) {
  const validatedPreset = validatePreset(preset);
  const sanitisedBreakpoints = sanitiseBreakpoints(breakpoints);
  if (validatedPreset === false && !sanitisedBreakpoints) {
    throw new TypeError("Vue3 Mq: You must provide a valid preset, or valid breakpoint settings.");
  } else {
    setAvailableBreakpoints(sanitisedBreakpoints ? sanitisedBreakpoints : sanitiseBreakpoints(validatedPreset));
  }
  removeListeners();
  resetState();
  const mediaQueries = createMediaQueries();
  for (const key in mediaQueries) {
    const mediaQuery = mediaQueries[key];
    const callback = () => {
      updateState(key);
    };
    subscribeToMediaQuery(mediaQuery, callback);
  }
  ["portrait", "landscape"].forEach((o) => {
    const orientationCallback = () => {
      updateOrientationState(o);
    };
    subscribeToMediaQuery(`(orientation: ${o})`, orientationCallback);
  });
  ["light", "dark"].forEach((t) => {
    const themeCallback = () => {
      updateThemeState(t);
    };
    subscribeToMediaQuery(`(prefers-color-scheme: ${t})`, themeCallback);
  });
  ["reduce", "no-preference"].forEach((m) => {
    const motionCallback = () => {
      updateMotionState(m);
    };
    subscribeToMediaQuery(`(prefers-reduced-motion: ${m})`, motionCallback);
  });
}
function useMq() {
  const mq = inject("mq");
  if (!mq) {
    throw new Error("Vue3Mq is not installed in this app. Please follow the installation instructions and try again.");
  } else
    return mq;
}
const install = (app2, {
  preset = "bootstrap5",
  breakpoints,
  defaultBreakpoint: defaultBreakpoint2,
  defaultOrientation: defaultOrientation2 = "landscape",
  defaultMotion: defaultMotion2 = "no-preference",
  defaultTheme: defaultTheme2
} = {}) => {
  try {
    const validatedDefaultOrientation = validateOrientation(defaultOrientation2);
    const validatedDefaultTheme = validateTheme(defaultTheme2);
    const validatedDefaultMotion = validateMotion(defaultMotion2);
    setDefaultBreakpoint(defaultBreakpoint2);
    setDefaultOrientation(validatedDefaultOrientation);
    setDefaultTheme(validatedDefaultTheme);
    setDefaultMotion(validatedDefaultMotion);
    app2.provide("mq", mqState);
    app2.provide("updateBreakpoints", updateBreakpoints);
    updateBreakpoints({ breakpoints, preset });
  } catch (e) {
    console.error(e);
  }
};
var plugin = {
  install
};
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
    })
  ]);
}
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z",
      "clip-rule": "evenodd"
    }),
    createBaseVNode("path", { d: "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" })
  ]);
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", { d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" })
  ]);
}
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
const _hoisted_1$3 = {
  viewBox: "0 0 71 55",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const DiscordIcon = { render: render$1 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9.423 4.736a2.914 2.914 0 1 0-5.81.457 2.914 2.914 0 0 0 5.81-.457ZM18.694 6.361a2.003 2.003 0 1 0-3.994.314 2.003 2.003 0 0 0 3.994-.314ZM5.88 14.006a1.604 1.604 0 1 0-3.198.251 1.604 1.604 0 0 0 3.197-.251ZM10.624 19.67a2.477 2.477 0 1 0 4.938-.388 2.477 2.477 0 0 0-4.938.388ZM19.597 12.357a1.603 1.603 0 1 0 .251 3.196 1.603 1.603 0 0 0-.251-3.196Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9.423 4.736a2.914 2.914 0 1 0-5.81.457 2.914 2.914 0 0 0 5.81-.457ZM18.694 6.361a2.003 2.003 0 1 0-3.994.314 2.003 2.003 0 0 0 3.994-.314ZM5.88 14.006a1.604 1.604 0 1 0-3.198.251 1.604 1.604 0 0 0 3.197-.251ZM10.624 19.67a2.477 2.477 0 1 0 4.938-.388 2.477 2.477 0 0 0-4.938.388ZM19.597 12.357a1.603 1.603 0 1 0 .251 3.196 1.603 1.603 0 0 0-.251-3.196ZM6.524 5l6.515 14.706",
  stroke: "currentColor",
  "stroke-width": "1.5"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "m4.244 14.214 2.233-9.261M13.064 19.57l6.617-5.581-2.979-7.429",
  stroke: "currentColor"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$2);
}
const GraphIcon = { render };
const _sfc_main$5 = defineComponent({
  components: {
    CoreButton: __unplugin_components_1,
    CoreDivider: __unplugin_components_0,
    Key: __unplugin_components_3,
    TheLogo: __unplugin_components_0$1,
    XMarkIcon: render$9
  },
  setup() {
    const store2 = useStore();
    const modKey = computed(() => store2.state.modKey);
    return {
      modKey
    };
  }
});
const _hoisted_1$1 = { class: "flex items-center max-w-[100vw] py-2 bg-gray-100 dark:bg-darkest border-b border-white dark:border-gray-900" };
const _hoisted_2$1 = { class: "flex flex-shrink-0 items-center justify-center w-14" };
const _hoisted_3$1 = { class: "flex-shrink-0 px-2 w-72" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex gap-3 items-center" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "w-5",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Search")
], -1);
const _hoisted_5$1 = { class: "hidden md:flex text-gray-500" };
const _hoisted_6$1 = { class: "flex flex-grow flex-shrink gap-2 bg-gray-100 dark:bg-darkest px-2 min-w-0 overflow-hidden" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Wednesday, November 16th, 2022", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheLogo = __unplugin_components_0$1;
  const _component_CoreLink = __unplugin_components_0$2;
  const _component_CoreDivider = __unplugin_components_0;
  const _component_Key = __unplugin_components_3;
  const _component_CoreButton = __unplugin_components_1;
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    createBaseVNode("section", _hoisted_2$1, [
      createVNode(_component_CoreLink, {
        class: "flex p-2",
        to: { path: "/docs/new" }
      }, {
        default: withCtx(() => [
          createVNode(_component_TheLogo, { class: "h-8 text-theme" })
        ]),
        _: 1
      })
    ]),
    createVNode(_component_CoreDivider, { vertical: true }),
    createBaseVNode("section", _hoisted_3$1, [
      createBaseVNode("div", null, [
        createVNode(_component_CoreLink, {
          to: { path: "/docs" },
          class: "block"
        }, {
          default: withCtx(() => [
            createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent border justify-between w-full" }, {
              default: withCtx(() => [
                _hoisted_4$1,
                createBaseVNode("span", _hoisted_5$1, [
                  createVNode(_component_Key, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.modKey), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Key, null, {
                    default: withCtx(() => [
                      createTextVNode("⇧")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Key, null, {
                    default: withCtx(() => [
                      createTextVNode("f")
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    createVNode(_component_CoreDivider, { vertical: true }),
    createBaseVNode("section", _hoisted_6$1, [
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_7$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_8$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_9$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_10$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_11$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_12$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      })
    ])
  ]);
}
const LayoutNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4]]);
const TheContent_vue_vue_type_style_index_0_scoped_7a63d979_lang = "";
const _sfc_main$4 = defineComponent({
  data() {
    return {
      routeKey: null
    };
  },
  watch: {
    $route: {
      deep: true,
      handler(route) {
        if (route.query.p) {
          return;
        }
        this.routeKey = nanoid();
      }
    }
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppPage = __unplugin_components_0$3;
  const _component_CoreScrollable = __unplugin_components_2$1;
  return openBlock(), createBlock(_component_CoreScrollable, { class: "the-content" }, {
    default: withCtx(() => [
      createVNode(_component_AppPage, {
        pageKey: _ctx.routeKey,
        class: "flex"
      }, null, 8, ["pageKey"])
    ]),
    _: 1
  });
}
const TheContent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-7a63d979"]]);
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
const useLayout = () => {
  const showMenu = useStorage("showMenu", true);
  const showMeta = useStorage("showMeta", true);
  const toggleMenu = () => showMenu.value = !showMenu.value;
  const toggleMeta = () => showMeta.value = !showMeta.value;
  return {
    showMenu,
    showMeta,
    toggleMenu,
    toggleMeta
  };
};
const usePinnedDocs = () => {
  const store2 = useStore();
  const recentDocs = useRecentDocs();
  const pinnedDocs = computed(() => {
    return recentDocs.ids.reduce((docs, id) => {
      const doc = store2.getters.decrypted.find((doc2) => doc2.id === id);
      if (doc) {
        docs.push(doc);
      }
      return docs;
    }, []);
  });
  const pinDoc = (id) => {
    recentDocs.add(id);
  };
  const unpinDoc = (id) => {
    recentDocs.remove(id);
  };
  return {
    pinDoc,
    pinnedDocs,
    unpinDoc
  };
};
const _sfc_main$3 = defineComponent({
  components: {
    CalendarIcon: render$8,
    Cog8ToothIcon: render$7,
    CoreButton: __unplugin_components_1,
    CoreDivider: __unplugin_components_0,
    CoreLink: __unplugin_components_0$2,
    DiscordIcon,
    DocumentPlusIcon: render$6,
    GraphIcon,
    HeartIcon: render$5,
    InboxIcon: render$4,
    Key: __unplugin_components_3,
    LayoutNavbar,
    TheContent,
    TheLeftSidebar,
    TheLogo: __unplugin_components_0$1,
    TheRightSidebar,
    UserCircleIcon: render$3,
    ViewColumnsIcon: render$a,
    XMarkIcon: render$2
  },
  inject: ["mq"],
  setup() {
    const { isNuxt } = useIsNuxt();
    const mq = useMq();
    const store2 = useStore();
    const router2 = useRouter();
    const currentDoc = computed(() => store2.getters.currentDoc);
    const { showMenu, showMeta, toggleMenu, toggleMeta } = useLayout();
    const { pinnedDocs, unpinDoc } = usePinnedDocs();
    const linkToDiscord = "https://link.octo.app/discord";
    const modKey = computed(() => store2.state.modKey);
    const mobile = computed(() => ["xs", "sm"].includes(mq.current));
    const isDoc = computed(() => router2.currentRoute.value.name === "docs-doc");
    const isNew = computed(() => router2.currentRoute.value.path === "/docs/new");
    const handleQuickActionClose = () => {
      if (currentDoc.value) {
        return router2.push({ path: `/docs/${currentDoc.value.id}` });
      }
      router2.push({ path: "/docs/new" });
    };
    const handleLayoutChange = () => {
      toggleMenu();
      toggleMeta();
    };
    bindGlobal("mod+\\", () => {
      toggleMenu();
      toggleMeta();
    });
    const handleTabClose = (id) => {
      var _a;
      if (((_a = currentDoc.value) == null ? void 0 : _a.id) === id) {
        router2.push({ path: "/docs/new" });
      }
      unpinDoc(id);
    };
    const scrollListener = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      window.scrollTo(0, 0);
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollListener);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollListener);
    });
    return {
      currentDoc,
      handleLayoutChange,
      handleQuickActionClose,
      handleTabClose,
      isDoc,
      isNew,
      isNuxt,
      linkToDiscord,
      mobile,
      modKey,
      pinnedDocs,
      showMenu,
      showMeta
    };
  }
});
const dashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex h-full w-screen min-h-0 min-w-0 overflow-hidden border-t-2 border-white dark:border-gray-900" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col items-center justify-between gap-4 h-full w-14 bg-gray-100 dark:bg-darkest md:flex"
};
const _hoisted_3 = { class: "flex flex-col" };
const _hoisted_4 = { class: "flex flex-col flex-shrink-0 items-center justify-center w-14" };
const _hoisted_5 = { class: "flex flex-col gap-4 pt-4 items-center" };
const _hoisted_6 = { class: "flex flex-col gap-4 pb-4 items-center" };
const _hoisted_7 = { class: "flex flex-col gap-4 pb-4 items-center opacity-25" };
const _hoisted_8 = { class: "flex flex-col flex-grow flex-shrink min-h-0 min-w-0" };
const _hoisted_9 = { class: "flex items-center justify-between py-2 bg-gray-100 dark:bg-darkest h-14" };
const _hoisted_10 = {
  key: 1,
  class: "flex items-center"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M4 6h16M4 12h16M4 18h16"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Menu", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = {
  key: 2,
  class: "flex-shrink-0 px-2 w-64"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "flex gap-3 items-center" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "w-5",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", null, "Search")
], -1);
const _hoisted_19 = { class: "hidden md:flex text-gray-500" };
const _hoisted_20 = {
  key: 4,
  class: "flex flex-grow flex-shrink gap-2 bg-gray-100 dark:bg-darkest px-2 min-w-0"
};
const _hoisted_21 = { class: "text-ellipsis overflow-hidden" };
const _hoisted_22 = {
  key: 6,
  class: "flex-shrink-0 px-2 w-64"
};
const _hoisted_23 = { class: "flex gap-3 items-center" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "Toggle Sidebars", -1);
const _hoisted_25 = { class: "hidden md:flex text-gray-500" };
const _hoisted_26 = { class: "flex flex-grow flex-shrink overflow-hidden min-w-0" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_TheLogo = __unplugin_components_0$1;
  const _component_CoreDivider = __unplugin_components_0;
  const _component_DocumentPlusIcon = resolveComponent("DocumentPlusIcon");
  const _component_CoreLink = __unplugin_components_0$2;
  const _component_CalendarIcon = resolveComponent("CalendarIcon");
  const _component_GraphIcon = resolveComponent("GraphIcon");
  const _component_DiscordIcon = resolveComponent("DiscordIcon");
  resolveComponent("HeartIcon");
  const _component_Cog8ToothIcon = resolveComponent("Cog8ToothIcon");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_Key = __unplugin_components_3;
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_ViewColumnsIcon = resolveComponent("ViewColumnsIcon");
  const _component_CoreButton = __unplugin_components_1;
  const _component_TheLeftSidebar = resolveComponent("TheLeftSidebar");
  const _component_TheRightSidebar = resolveComponent("TheRightSidebar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleLayoutChange && _ctx.handleLayoutChange(...args)),
            class: "flex items-center justify-center p-2 h-14"
          }, [
            createVNode(_component_TheLogo, { class: "h-8 text-theme" })
          ])
        ]),
        createVNode(_component_CoreDivider, { class: "mx-2" }),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_CoreLink, { to: { path: "/docs/new" } }, {
            default: withCtx(() => [
              createVNode(_component_DocumentPlusIcon, { class: "w-6" })
            ]),
            _: 1
          }),
          createVNode(_component_CoreLink, { to: { path: "/notepad" } }, {
            default: withCtx(() => [
              createVNode(_component_CalendarIcon, { class: "w-6" })
            ]),
            _: 1
          }),
          createVNode(_component_CoreLink, { to: { path: "/force-graph" } }, {
            default: withCtx(() => [
              createVNode(_component_GraphIcon, { class: "w-6" })
            ]),
            _: 1
          })
        ])
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          _ctx.linkToDiscord ? (openBlock(), createBlock(_component_CoreLink, {
            key: 0,
            to: _ctx.linkToDiscord
          }, {
            default: withCtx(() => [
              createVNode(_component_DiscordIcon, { class: "w-6 px-px" })
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true),
          createCommentVNode("", true)
        ]),
        createVNode(_component_CoreLink, { to: { path: "/settings" } }, {
          default: withCtx(() => [
            createVNode(_component_Cog8ToothIcon, { class: "w-6" })
          ]),
          _: 1
        }),
        createVNode(_component_CoreLink, { to: { path: "/account" } }, {
          default: withCtx(() => [
            createVNode(_component_UserCircleIcon, { class: "w-6" })
          ]),
          _: 1
        })
      ])
    ])) : createCommentVNode("", true),
    createVNode(_component_CoreDivider, { vertical: true }),
    createBaseVNode("section", _hoisted_8, [
      createBaseVNode("nav", _hoisted_9, [
        _ctx.mobile ? (openBlock(), createBlock(_component_CoreLink, {
          key: 0,
          to: { path: "/docs/new" },
          class: "flex items-center justify-center p-2 h-14"
        }, {
          default: withCtx(() => [
            createVNode(_component_TheLogo, { class: "h-8 text-theme" })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _ctx.mobile ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createVNode(_component_CoreLink, {
            class: "button-flat button-size-medium",
            to: { path: "/menu" },
            role: "button",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }, {
            default: withCtx(() => [
              _hoisted_11,
              _hoisted_12
            ]),
            _: 1
          }),
          _ctx.isNew ? (openBlock(), createBlock(_component_CoreLink, {
            key: 0,
            to: { path: "/quick-action" },
            class: "button-flat button-size-medium"
          }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })) : _ctx.isDoc ? (openBlock(), createBlock(_component_CoreLink, {
            key: 1,
            to: { path: `/docs/${(_a = _ctx.currentDoc) == null ? void 0 : _a.id}/meta` },
            class: "button-flat button-size-medium"
          }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }, 8, ["to"])) : (openBlock(), createElementBlock("button", {
            key: 2,
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleQuickActionClose && _ctx.handleQuickActionClose(...args)),
            class: "button-flat button-size-medium"
          }, _hoisted_16))
        ])) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_17, [
          createVNode(_component_CoreLink, {
            to: { path: "/docs" },
            class: "core-button core-button-layer-1 border border-white dark:border-gray-900 justify-between w-full"
          }, {
            default: withCtx(() => [
              _hoisted_18,
              createBaseVNode("span", _hoisted_19, [
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.modKey), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode("⇧")
                  ]),
                  _: 1
                }),
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode("f")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 3,
          vertical: true
        })) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_20, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pinnedDocs, (doc) => {
            var _a2;
            return openBlock(), createBlock(_component_CoreLink, {
              key: doc.id,
              to: { path: `/docs/${doc.id}` },
              class: normalizeClass(["core-button core-button-layer-1 flex flex-shrink justify-between min-w-[4rem] max-w-[20rem]", { "bg-layer-2": _ctx.isDoc && doc.id === ((_a2 = _ctx.currentDoc) == null ? void 0 : _a2.id) }])
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_21, toDisplayString(doc.headers[0] || doc.text.substring(0, 25)), 1),
                createVNode(_component_XMarkIcon, {
                  onClick: withModifiers(() => _ctx.handleTabClose(doc.id), ["prevent", "stop"]),
                  class: "w-4 transition hover:scale-125"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["to", "class"]);
          }), 128))
        ])) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 5,
          vertical: true
        })) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_22, [
          createVNode(_component_CoreButton, {
            layer: 1,
            onClick: _ctx.handleLayoutChange,
            class: "border border-white dark:border-gray-900 justify-between w-full"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_ViewColumnsIcon, { class: "w-5" }),
                _hoisted_24
              ]),
              createBaseVNode("span", _hoisted_25, [
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.modKey), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode("\\")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["onClick"])
        ])) : createCommentVNode("", true)
      ]),
      createVNode(_component_CoreDivider),
      createBaseVNode("section", _hoisted_26, [
        !_ctx.mobile && _ctx.showMenu ? (openBlock(), createBlock(_component_TheLeftSidebar, {
          key: 0,
          class: "hidden w-64 bg-gray-100 dark:bg-darkest md:flex flex-shrink-0"
        })) : createCommentVNode("", true),
        !_ctx.mobile && _ctx.showMenu ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 1,
          vertical: true
        })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default"),
        !_ctx.mobile && _ctx.showMeta && _ctx.currentDoc ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 2,
          vertical: true
        })) : createCommentVNode("", true),
        !_ctx.mobile && _ctx.showMeta && _ctx.currentDoc && _ctx.isDoc ? (openBlock(), createBlock(_component_TheRightSidebar, {
          key: 3,
          class: "hidden w-64 bg-gray-100 dark:bg-darkest md:flex flex-shrink-0"
        })) : createCommentVNode("", true)
      ])
    ])
  ]);
}
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2]]);
const _sfc_main$2 = defineComponent({
  components: {
    Dashboard
  },
  props: {
    name: {
      type: String
    }
  },
  setup() {
    const { isNuxt } = useIsNuxt();
    const router2 = useRouter();
    const isDashboard = computed(() => router2.currentRoute.value.name !== "home");
    return {
      isDashboard,
      isNuxt
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLayout = resolveComponent("NuxtLayout");
  const _component_Dashboard = resolveComponent("Dashboard");
  return _ctx.isNuxt ? (openBlock(), createBlock(_component_NuxtLayout, {
    key: 0,
    name: _ctx.name
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["name"])) : _ctx.isDashboard ? (openBlock(), createBlock(_component_Dashboard, { key: 1 }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  })) : renderSlot(_ctx.$slots, "default", { key: 2 });
}
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AsyncChangeLog",
  setup(__props) {
    const AsyncChangeLog = defineAsyncComponent(() => {
      return __vitePreload(() => import("./ChangeLog-855b8058.js"), true ? ["assets/ChangeLog-855b8058.js","assets/CoreLink-6737d303.js","assets/useIsNuxt-03feeb69.js","assets/_plugin-vue_export-helper-ea9be126.js","assets/account-a08c9355.js","assets/vuex.esm-bundler-99de9736.js","assets/Modal-7704844a.js","assets/CoreScrollable-4b186a41.js","assets/overlayscrollbars.esm-084eb65b.js"] : void 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(AsyncChangeLog));
    };
  }
});
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
const updateAppHeight = () => {
  document.documentElement.style.setProperty("--app-height", `calc(${window.visualViewport.height}px - 1px)`);
};
const useRoot = () => {
  const email = useStorage("email", "");
  const user = useStorage("user", {
    id: void 0,
    providers: [],
    roles: []
  }, void 0, { mergeDefaults: true });
  const { appearance } = useAppearance();
  const store2 = useStore();
  const { emit } = useHooks();
  provide("appearance", appearance);
  provide("email", email);
  provide("user", user);
  if (localStorage.getItem("octo/welcome/v1") === null) {
    store2.dispatch("SET_SHOW_WELCOME", true);
  }
  window.addEventListener("offline", () => {
    store2.dispatch("SET_OFFLINE");
  });
  window.addEventListener("online", () => {
    store2.dispatch("SET_ONLINE");
  });
  if (!navigator.onLine) {
    store2.dispatch("SET_OFFLINE");
  }
  if (/Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgentData.platform)) {
    store2.dispatch("SET_MOD_KEY", "⌘");
  }
  init();
  updateAppHeight();
  window.visualViewport.addEventListener("resize", updateAppHeight);
  if (globalConfig.supportsFirebase) {
    getAuth().onIdTokenChanged(async (authUser) => {
      if (authUser) {
        user.value = {
          ...user.value,
          id: authUser.uid,
          providers: [...authUser.providerData]
        };
        store2.commit("SET_USER", authUser);
        const token = await authUser.getIdTokenResult(true);
        if (token.claims.ambassador && !user.value.roles.includes("ambassador")) {
          user.value = {
            ...user.value,
            roles: [...user.value.roles, "ambassador"]
          };
          store2.commit("SET_SUBSCRIPTION", { pro: true });
        }
        if (token.claims.stripeRole === "subscriber" && !user.value.roles.includes("subscriber")) {
          user.value = {
            ...user.value,
            roles: [...user.value.roles, "subscriber"]
          };
          store2.commit("SET_SUBSCRIPTION", { pro: true });
        }
        emit("user_logged_in");
      } else {
        user.value = {
          id: void 0,
          providers: [],
          roles: []
        };
        store2.commit("SET_USER", null);
        store2.commit("SET_SUBSCRIPTION", { pro: false });
        emit("user_logged_out");
      }
    });
  }
};
const overlayscrollbars = "";
const app_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  inject: ["mq"],
  setup() {
    useRoot();
    const pageKey = ref("");
    const router2 = useRouter();
    router2.beforeEach((to) => {
      if (!to.query.p) {
        pageKey.value = nanoid();
      }
    });
    return {
      pageKey
    };
  },
  computed: {
    flow() {
      return this.$route.query.flow;
    },
    showChangeLog() {
      return this.$route.path === "/docs/new" && !this.$route.query.ci;
    },
    ligatures() {
      return this.$store.state.settings.editor.ligatures;
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
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AsyncChangeLog = _sfc_main$1;
  const _component_AppPage = __unplugin_components_0$3;
  const _component_AppLayout = __unplugin_components_2;
  return openBlock(), createElementBlock("div", {
    id: "app",
    class: normalizeClass(["h-full", _ctx.sizes.concat([!_ctx.ligatures && "ligatures-none"])])
  }, [
    _ctx.showChangeLog && !_ctx.flow ? (openBlock(), createBlock(_component_AsyncChangeLog, { key: 0 })) : createCommentVNode("", true),
    createVNode(_component_AppLayout, null, {
      default: withCtx(() => [
        createVNode(_component_AppPage, {
          pageKey: _ctx.pageKey,
          class: "dashboard-content flex-grow flex-shrink h-full overflow-x-hidden relative"
        }, null, 8, ["pageKey"])
      ]),
      _: 1
    })
  ], 2);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
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
const tailwind = "";
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
const app = createApp({
  render: () => h(App)
});
const pinia = createPinia();
pinia.use(caching);
app.config.globalProperties.$packageManager = PackageManager;
app.use(pinia);
app.use(router);
app.use(store);
app.component("CoreScrollable", __unplugin_components_2$1);
app.component("Extendable", __unplugin_components_0$4);
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
//# sourceMappingURL=index-f33163ee.js.map
