import { g as ref, z as reactive, _ as readonly, y as inject } from "./runtime-core.esm-bundler-9a0ba37c.js";
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
const tailwind = {
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
  tailwind,
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
const install = (app, {
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
    app.provide("mq", mqState);
    app.provide("updateBreakpoints", updateBreakpoints);
    updateBreakpoints({ breakpoints, preset });
  } catch (e) {
    console.error(e);
  }
};
var plugin = {
  install
};
export {
  plugin as p,
  useMq as u
};
//# sourceMappingURL=vue3-mq.es-5da68cb5.js.map
